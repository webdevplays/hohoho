
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton || {};

/**
 * Behavior generated from Multitouch button
 */
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton = class MultitouchButton extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ControllerIdentifier = behaviorData.ControllerIdentifier !== undefined ? behaviorData.ControllerIdentifier : Number("1") || 0;
    this._behaviorData.ButtonIdentifier = behaviorData.ButtonIdentifier !== undefined ? behaviorData.ButtonIdentifier : "A";
    this._behaviorData.TouchId = Number("0") || 0;
    this._behaviorData.TouchIndex = Number("") || 0;
    this._behaviorData.IsReleased = false;
    this._behaviorData.IsJustPressed = false;
    this._behaviorData.Radius = behaviorData.Radius !== undefined ? behaviorData.Radius : Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ControllerIdentifier !== newBehaviorData.ControllerIdentifier)
      this._behaviorData.ControllerIdentifier = newBehaviorData.ControllerIdentifier;
    if (oldBehaviorData.ButtonIdentifier !== newBehaviorData.ButtonIdentifier)
      this._behaviorData.ButtonIdentifier = newBehaviorData.ButtonIdentifier;
    if (oldBehaviorData.TouchId !== newBehaviorData.TouchId)
      this._behaviorData.TouchId = newBehaviorData.TouchId;
    if (oldBehaviorData.TouchIndex !== newBehaviorData.TouchIndex)
      this._behaviorData.TouchIndex = newBehaviorData.TouchIndex;
    if (oldBehaviorData.IsReleased !== newBehaviorData.IsReleased)
      this._behaviorData.IsReleased = newBehaviorData.IsReleased;
    if (oldBehaviorData.IsJustPressed !== newBehaviorData.IsJustPressed)
      this._behaviorData.IsJustPressed = newBehaviorData.IsJustPressed;
    if (oldBehaviorData.Radius !== newBehaviorData.Radius)
      this._behaviorData.Radius = newBehaviorData.Radius;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    ControllerIdentifier: this._behaviorData.ControllerIdentifier,
    ButtonIdentifier: this._behaviorData.ButtonIdentifier,
    TouchId: this._behaviorData.TouchId,
    TouchIndex: this._behaviorData.TouchIndex,
    IsReleased: this._behaviorData.IsReleased,
    IsJustPressed: this._behaviorData.IsJustPressed,
    Radius: this._behaviorData.Radius,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.ControllerIdentifier !== undefined)
      this._behaviorData.ControllerIdentifier = networkSyncData.props.ControllerIdentifier;
    if (networkSyncData.props.ButtonIdentifier !== undefined)
      this._behaviorData.ButtonIdentifier = networkSyncData.props.ButtonIdentifier;
    if (networkSyncData.props.TouchId !== undefined)
      this._behaviorData.TouchId = networkSyncData.props.TouchId;
    if (networkSyncData.props.TouchIndex !== undefined)
      this._behaviorData.TouchIndex = networkSyncData.props.TouchIndex;
    if (networkSyncData.props.IsReleased !== undefined)
      this._behaviorData.IsReleased = networkSyncData.props.IsReleased;
    if (networkSyncData.props.IsJustPressed !== undefined)
      this._behaviorData.IsJustPressed = networkSyncData.props.IsJustPressed;
    if (networkSyncData.props.Radius !== undefined)
      this._behaviorData.Radius = networkSyncData.props.Radius;
  }

  // Properties:
  
  _getControllerIdentifier() {
    return this._behaviorData.ControllerIdentifier !== undefined ? this._behaviorData.ControllerIdentifier : Number("1") || 0;
  }
  _setControllerIdentifier(newValue) {
    this._behaviorData.ControllerIdentifier = newValue;
  }
  _getButtonIdentifier() {
    return this._behaviorData.ButtonIdentifier !== undefined ? this._behaviorData.ButtonIdentifier : "A";
  }
  _setButtonIdentifier(newValue) {
    this._behaviorData.ButtonIdentifier = newValue;
  }
  _getTouchId() {
    return this._behaviorData.TouchId !== undefined ? this._behaviorData.TouchId : Number("0") || 0;
  }
  _setTouchId(newValue) {
    this._behaviorData.TouchId = newValue;
  }
  _getTouchIndex() {
    return this._behaviorData.TouchIndex !== undefined ? this._behaviorData.TouchIndex : Number("") || 0;
  }
  _setTouchIndex(newValue) {
    this._behaviorData.TouchIndex = newValue;
  }
  _getIsReleased() {
    return this._behaviorData.IsReleased !== undefined ? this._behaviorData.IsReleased : false;
  }
  _setIsReleased(newValue) {
    this._behaviorData.IsReleased = newValue;
  }
  _toggleIsReleased() {
    this._setIsReleased(!this._getIsReleased());
  }
  _getIsJustPressed() {
    return this._behaviorData.IsJustPressed !== undefined ? this._behaviorData.IsJustPressed : false;
  }
  _setIsJustPressed(newValue) {
    this._behaviorData.IsJustPressed = newValue;
  }
  _toggleIsJustPressed() {
    this._setIsJustPressed(!this._getIsJustPressed());
  }
  _getRadius() {
    return this._behaviorData.Radius !== undefined ? this._behaviorData.Radius : Number("0") || 0;
  }
  _setRadius(newValue) {
    this._behaviorData.Radius = newValue;
  }
}

/**
 * Shared data generated from Multitouch button
 */
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.SharedData = class MultitouchButtonSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteMultitouchJoystick_MultitouchButtonSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteMultitouchJoystick_MultitouchButtonSharedData = new gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteMultitouchJoystick_MultitouchButtonSharedData;
}

// Methods:
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3_1final = [];

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4);

for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].isCollidingWithPoint(gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIndex()), (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getLayer()), 0), gdjs.evtTools.input.getTouchY(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIndex()), (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i].getLayer()), 0)) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4);

{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRadius() > gdjs.evtTools.common.distanceBetweenPositions((( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[0].getCenterXInScene()), (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[0].getCenterYInScene()), gdjs.evtTools.input.getTouchX(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIndex()), (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[0].getLayer()), 0), gdjs.evtTools.input.getTouchY(runtimeScene, gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIndex()), (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[0].getLayer()), 0)));
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3_1final.push(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3_1final, gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchId(gdjs.evtTools.input.getStartedTouchOrMouseIdentifier(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIndex()))
}
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetButtonState("JustPressed", eventsFunctionContext);
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsJustPressed(true)
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIndex(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIndex()+1)
}
}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


const repeatCount2 = gdjs.evtTools.input.getStartedTouchOrMouseCount(runtimeScene);
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsReleased();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsReleased(false)
}
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetButtonState("Idle", eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsJustPressed();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsJustPressed(false)
}
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetButtonState("Pressed", eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsPressed(eventsFunctionContext)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasAnyTouchOrMouseStarted(runtimeScene);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIndex(0)
}

{ //Subevents
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsPressed(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.hasTouchEnded(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId());
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetButtonState("Released", eventsFunctionContext);
}
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsReleased(true)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsJustPressed(false)
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchId(0)
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsJustPressedContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsJustPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsJustPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsJustPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsJustPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsJustPressed();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsJustPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsJustPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsJustPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsJustPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsJustPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsJustPressedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId() != 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsReleased();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleased = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.idToCallbackMap = new Map();
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects2= [];


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__SpriteMultitouchJoystick__SetButtonState.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getButtonIdentifier(), eventsFunctionContext.getArgument("ButtonState"), eventsFunctionContext);
}
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonState = function(ButtonState, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("SpriteMultitouchJoystick"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("SpriteMultitouchJoystick"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ButtonState") return ButtonState;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("SpriteMultitouchJoystick::MultitouchButton", gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton);
