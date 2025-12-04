
// Lightweight HTML5 platformer demo with many requested features.
// Uses the provided character sprite at assets/char_6.png
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const TILE = 48;
const GRAVITY = 1200;
const WORLD_WIDTH = 4000;
const WORLD_HEIGHT = 540;

let keys = {};
window.addEventListener('keydown', e=> keys[e.key] = true);
window.addEventListener('keyup', e=> keys[e.key] = false);

// UI hooks
const hpVal = document.getElementById('hpVal');
const coinVal = document.getElementById('coinVal');
const invVal = document.getElementById('invVal');
const shop = document.getElementById('shop');
document.getElementById('openShop').onclick = ()=> { shop.classList.remove('hidden'); renderShop(); };
document.getElementById('closeShop').onclick = ()=> shop.classList.add('hidden');

let assets = {};
const loadImages = (sources) => {
  let promises = [];
  for (let k in sources) {
    promises.push(new Promise(res=>{
      const img = new Image();
      img.onload = ()=> { assets[k] = img; res(); };
      img.src = sources[k];
    }));
  }
  return Promise.all(promises);
};

// Player class (supports combo attacks, HP, inventory)
class Player {
  constructor(x,y,controls,color="blue"){
    this.x = x; this.y = y; this.vx = 0; this.vy = 0;
    this.w = 40; this.h = 60;
    this.onGround = false;
    this.facing = 1;
    this.hp = 100;
    this.coins = 0;
    this.inv = {};
    this.controls = controls; // object with left,right,jump,attack
    this.comboState = 0; this.comboTimer = 0;
    this.attackCooldown = 0;
    this.color = color;
    this.score = 0;
  }
  applyControls(dt){
    const left = keys[this.controls.left], right = keys[this.controls.right];
    if (left) { this.vx = -200; this.facing = -1; }
    else if (right) { this.vx = 200; this.facing = 1; }
    else { this.vx = 0; }
    if (keys[this.controls.jump] && this.onGround){ this.vy = -520; this.onGround = false; }
    // attacks
    if (keys[this.controls.attack] && this.attackCooldown<=0){
      this.attack();
      this.attackCooldown = 0.25;
    }
    // special
    if (keys[this.controls.special] && this.attackCooldown<=0 && this.hp>10){
      this.performSpecial();
      this.attackCooldown = 0.7;
      this.hp -= 5;
    }
  }
  attack(){
    // combo logic: 0 -> punch, 1 -> kick, 2 -> special punch finisher
    this.comboState = (this.comboState % 3) + 1;
    this.comboTimer = 0.6;
    spawnParticle(this.x + this.facing*40, this.y+20, "spark");
    // check hit on enemies
    let hit = false;
    for (let e of enemies){
      if (!e.dead && Math.abs(e.x - this.x) < 80 && Math.abs(e.y - this.y) < 60 && ((e.x - this.x)*this.facing)>-30){
        let dmg = (this.comboState===1?8:this.comboState===2?12:20);
        e.takeDamage(dmg);
        hit = true;
      }
    }
    if (hit) spawnParticle(this.x + this.facing*40, this.y+10, "hit");
  }
  performSpecial(){
    // animation + area damage
    spawnParticle(this.x, this.y, "boom_big");
    for (let e of enemies){
      let d = Math.hypot(e.x - this.x, e.y - this.y);
      if (!e.dead && d < 160) e.takeDamage(30);
    }
  }
  update(dt){
    this.applyControls(dt);
    this.vy += GRAVITY*dt;
    this.x += this.vx*dt;
    this.y += this.vy*dt;
    // simple world collision (ground at y=460)
    if (this.y + this.h/2 > 460){ this.y = 460 - this.h/2; this.vy = 0; this.onGround = true; }
    // limits
    if (this.x < 20) this.x = 20;
    if (this.x > WORLD_WIDTH-20) this.x = WORLD_WIDTH-20;
    // combos and cooldowns
    if (this.comboTimer>0) this.comboTimer -= dt; else this.comboState = 0;
    if (this.attackCooldown>0) this.attackCooldown -= dt;
    // coin pickup
    for (let i=coins.length-1;i>=0;i--){
      let c = coins[i];
      if (Math.hypot(c.x - this.x, c.y - this.y) < 40){
        this.coins += 1; coins.splice(i,1); spawnParticle(c.x,c.y,'coinBurst');
      }
    }
    // powerups
    for (let i=powerups.length-1;i>=0;i--){
      let p = powerups[i];
      if (Math.hypot(p.x - this.x, p.y - this.y) < 40){
        this.hp = Math.min(100, this.hp + p.hp);
        this.inv[p.name] = (this.inv[p.name]||0)+1;
        powerups.splice(i,1);
      }
    }
  }
  draw(ctx, camX){
    ctx.save();
    ctx.translate(Math.round(this.x - camX), Math.round(this.y));
    // draw provided character image for main player
    if (assets['char']) {
      ctx.drawImage(assets['char'], -20, -48, 64, 64);
    } else {
      ctx.fillStyle = this.color;
      ctx.fillRect(-this.w/2, -this.h/2, this.w, this.h);
    }
    // hp bar
    ctx.fillStyle = 'red';
    ctx.fillRect(-20, -60, 40*(this.hp/100), 6);
    ctx.restore();
  }
}

// Enemy class with AI modes: patrol, chase, ranged, flyer, boss
class Enemy {
  constructor(x,y,type="grunt"){
    this.x=x; this.y=y; this.vx=0; this.vy=0; this.w=40; this.h=50;
    this.type = type;
    this.maxHp = (type==="boss"?200: type==="flyer"?60:30);
    this.hp = this.maxHp;
    this.dead = false;
    this.patrolDir = 1;
    this.patrolTimer = 0;
    this.attackTimer = 0;
    this.isRanged = (type==="ranged");
    this.isFlyer = (type==="flyer");
    this.speed = (type==="boss"?90: (type==="flyer"?140:80));
  }
  takeDamage(d){
    this.hp -= d;
    spawnParticle(this.x, this.y, "blood");
    if (this.hp<=0) { this.dead=true; spawnParticle(this.x,this.y,"explode"); }
  }
  update(dt){
    if (this.dead) return;
    // simple AI: if player within chase range, chase nearest player; else patrol
    let target = players.reduce((a,b)=> (Math.hypot(b.x-this.x,b.y-this.y) < Math.hypot(a.x-this.x,a.y-this.y)? b : a));
    let dist = Math.hypot(target.x - this.x, target.y - this.y);
    if (this.isFlyer){
      // flyer hovers and moves towards player vertically
      if (dist < 400){
        let ang = Math.atan2(target.y - this.y, target.x - this.x);
        this.vx = Math.cos(ang)*this.speed;
        this.vy = Math.sin(ang)*this.speed*0.6;
      } else { this.vx = this.patrolDir * 60; }
      this.x += this.vx*dt;
      this.y += this.vy*dt;
    } else if (this.isRanged){
      if (dist < 400){
        // face and shoot occasionally
        this.patrolTimer += dt;
        if (this.patrolTimer > 1.2){
          this.patrolTimer = 0;
          projectiles.push(new Projectile(this.x, this.y-10, (target.x>this.x?1:-1)*300, 0, "enemy"));
        }
        this.x += (target.x > this.x? 30:-30)*dt;
      } else {
        this.patrolTimer += dt;
        if (this.patrolTimer>2){ this.patrolTimer=0; this.patrolDir*=-1; }
        this.x += this.patrolDir * this.speed * 0.4 * dt;
      }
    } else {
      if (dist < 220){
        // chase
        this.x += (target.x>this.x? this.speed: -this.speed)*dt;
        if (Math.abs(target.x - this.x) < 40 && Math.abs(target.y - this.y) < 60){
          // attack
          this.attackTimer += dt;
          if (this.attackTimer > 1.0){
            this.attackTimer = 0;
            // damage if player close
            if (Math.abs(target.x - this.x) < 60) target.hp -= 8;
          }
        }
      } else {
        // patrol
        this.patrolTimer += dt;
        if (this.patrolTimer>1.8){ this.patrolTimer=0; this.patrolDir*=-1; }
        this.x += this.patrolDir * this.speed * dt;
      }
    }
  }
  draw(ctx, camX){
    if (this.dead) return;
    ctx.save();
    ctx.translate(Math.round(this.x - camX), Math.round(this.y));
    // simplistic drawing
    ctx.fillStyle = (this.type==="boss"?"purple": (this.isRanged?"orange": "green"));
    ctx.fillRect(-20, -35, 40, 50);
    // hp bar
    ctx.fillStyle = "red";
    ctx.fillRect(-20, -45, 40*(this.hp/this.maxHp), 5);
    ctx.restore();
  }
}

// projectile
class Projectile {
  constructor(x,y,vx,vy,owner="player"){ this.x=x; this.y=y; this.vx=vx; this.vy=vy; this.owner=owner; this.dead=false; }
  update(dt){
    this.x += this.vx*dt; this.y += this.vy*dt + 200*dt;
    if (this.x<0 || this.x>WORLD_WIDTH) this.dead=true;
    for (let p of players){
      if (this.owner==="enemy" && Math.hypot(p.x-this.x,p.y-this.y) < 30){ p.hp -= 10; this.dead=true; }
    }
  }
  draw(ctx,camX){ ctx.fillStyle="black"; ctx.fillRect(this.x-camX-4,this.y-4,8,8); }
}

// globals
let players = [
  new Player(200, 300, {left:"a", right:"d", jump:"w", attack:"f", special:"e"}, "teal")
];
let enemies = [];
let projectiles = [];
let coins = [];
let powerups = [];
let particles = [];

// populate world with enemies and items (multi-level by y positions)
function populateWorld(){
  enemies = [];
  for (let i=0;i<12;i++){
    let type = (i%8===0?"boss": (i%5===0?"ranged": (i%6===0?"flyer":"grunt")));
    let e = new Enemy(400 + i*260, 420 - (type==="flyer"?150:0), type);
    enemies.push(e);
  }
  // coins and powerups
  for (let i=0;i<60;i++){
    coins.push({x: 200 + i*60, y: 420 - (i%7)*20});
  }
  powerups.push({x: 800, y:380, name:"SmallHP", hp:20});
  powerups.push({x: 1600, y:420, name:"BigHP", hp:50});
}
populateWorld();

// particles
function spawnParticle(x,y,type){
  particles.push({x,y,type,life: Math.random()*0.6+0.3, t:0});
}

// camera
let camX = 0;
function updateCamera(){
  // center on first player average
  let target = players[0].x;
  camX += (target - camX - canvas.width/2 + 40) * 0.08;
  camX = Math.max(0, Math.min(WORLD_WIDTH - canvas.width, camX));
}

// shop
const SHOP_ITEMS = [
  {id:"hp20", name:"Heal 20", price:5, apply: (p)=> p.hp = Math.min(100, p.hp+20)},
  {id:"doubleJump", name:"Double Jump (not implemented demo)", price:8, apply: (p)=> p.inv.doubleJump=1}
];
function renderShop(){
  const el = document.getElementById('shopItems');
  el.innerHTML = "";
  SHOP_ITEMS.forEach(it=>{
    const div = document.createElement('div');
    div.style.marginBottom = "8px";
    div.innerHTML = `<b>${it.name}</b> - ${it.price} coins <button>Buy</button>`;
    div.querySelector('button').onclick = ()=>{
      if (players[0].coins >= it.price){ players[0].coins -= it.price; it.apply(players[0]); updateUI(); alert("Purchased "+it.name); }
      else alert("Not enough coins");
    };
    el.appendChild(div);
  });
}

// main loop
let last = performance.now();
function loop(now){
  let dt = Math.min(0.05, (now - last)/1000);
  last = now;
  update(dt); draw();
  requestAnimationFrame(loop);
}

function update(dt){
  players.forEach(p=> p.update(dt));
  enemies.forEach(e=> e.update(dt));
  projectiles.forEach(pr=> pr.update(dt));
  projectiles = projectiles.filter(p=> !p.dead);
  particles.forEach(pt=> pt.t += dt);
  particles = particles.filter(pt=> pt.t < pt.life);
  // pickups spawn occasionally
  if (Math.random() < 0.02 * dt*60){
    coins.push({x: Math.random()*(WORLD_WIDTH-200)+100, y: Math.random()*120+250});
  }
  updateCamera();
  updateUI();
}

function updateUI(){
  hpVal.textContent = Math.round(players[0].hp);
  coinVal.textContent = players[0].coins;
  invVal.textContent = JSON.stringify(players[0].inv);
}

// draw world tiles, parallax background, players, enemies
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // sky gradient is css; draw distant mountains (parallax)
  ctx.save();
  // parallax layer
  ctx.fillStyle = "#6bbf63";
  for (let i=0;i<Math.ceil(WORLD_WIDTH/300);i++){
    let x = -camX*0.2 + i*300;
    ctx.fillRect(x, 360, 280, 80);
  }
  ctx.restore();
  // ground tiles
  for (let x = 0; x < WORLD_WIDTH; x += TILE){
    let sx = x - camX;
    if (sx > -TILE && sx < canvas.width + TILE){
      ctx.fillStyle = (Math.floor(x/TILE)%2==0 ? "#8B5A2B" : "#a36a39");
      ctx.fillRect(sx, 460, TILE-2, TILE/2);
      // platform edges
      if (Math.random()<0.02) ctx.fillStyle = "#d3a86b";
    }
  }
  // draw coins
  for (let c of coins) {
    ctx.beginPath();
    ctx.arc(c.x - camX, c.y, 8, 0, Math.PI*2);
    ctx.fillStyle = "gold"; ctx.fill();
    ctx.strokeStyle = "brown"; ctx.stroke();
  }
  // powerups
  for (let p of powerups){
    ctx.fillStyle = "pink";
    ctx.fillRect(p.x - camX -8, p.y - 8, 16, 16);
  }
  // draw players
  players.forEach(p=> p.draw(ctx, camX));
  // draw enemies
  enemies.forEach(e=> e.draw(ctx, camX));
  // projectiles
  projectiles.forEach(pr=> pr.draw(ctx, camX));
  // particles
  particles.forEach(pt=>{
    const life = pt.life; const t = pt.t;
    if (pt.type==="spark"){
      ctx.fillStyle = "yellow"; ctx.beginPath();
      ctx.arc(pt.x - camX, pt.y, 4*(1 - t/life), 0, Math.PI*2); ctx.fill();
    } else if (pt.type==="explode" || pt.type==="boom_big"){
      ctx.fillStyle = "orange";
      ctx.beginPath(); ctx.arc(pt.x - camX, pt.y, 10*(1 - t/life)+2, 0, Math.PI*2); ctx.fill();
    } else if (pt.type==="coinBurst"){
      ctx.fillStyle="gold"; ctx.fillRect(pt.x - camX - 3, pt.y - 3, 6,6);
    } else if (pt.type==="blood"){
      ctx.fillStyle="rgba(200,50,50,0.9)"; ctx.fillRect(pt.x - camX -2, pt.y-2, 4,4);
    } else {
      ctx.fillStyle="white"; ctx.fillRect(pt.x - camX -2, pt.y-2, 3,3);
    }
  });
  // HUD - draw boss warning if boss present
  if (enemies.some(e=> e.type==="boss" && !e.dead)) {
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(canvas.width-220,10,200,36);
    ctx.fillStyle = "white"; ctx.fillText("Bosses present!", canvas.width-200, 34);
  }
}

// simple click to respawn a player or buy items in shop via UI already
canvas.onclick = (e)=> {
  // local respawn if dead
  players.forEach(p=> { if (p.hp<=0) { p.hp=60; p.x = Math.max(40, camX + 120); } });
};

// initial asset load and start
loadImages({'char':'assets/char_6.png'}).then(()=> {
  requestAnimationFrame(loop);
});

// Simple placeholder online multiplayer hook (requires server)
window.startOnline = function(){ alert("Online multiplayer would require a server (WebSocket). This demo supports local play."); };
