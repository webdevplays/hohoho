
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper || {};

/**
 * Behavior generated from Platformer gamepad mapper
 */
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper = class PlatformerGamepadMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PlatformerCharacter = behaviorData.PlatformerCharacter !== undefined ? behaviorData.PlatformerCharacter : "";
    this._behaviorData.GamepadIdentifier = behaviorData.GamepadIdentifier !== undefined ? behaviorData.GamepadIdentifier : Number("1") || 0;
    this._behaviorData.UseArrows = behaviorData.UseArrows !== undefined ? behaviorData.UseArrows : true;
    this._behaviorData.UseLeftStick = behaviorData.UseLeftStick !== undefined ? behaviorData.UseLeftStick : true;
    this._behaviorData.UseRightStick = behaviorData.UseRightStick !== undefined ? behaviorData.UseRightStick : false;
    this._behaviorData.JumpButton = behaviorData.JumpButton !== undefined ? behaviorData.JumpButton : "A or Cross";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PlatformerCharacter !== newBehaviorData.PlatformerCharacter)
      this._behaviorData.PlatformerCharacter = newBehaviorData.PlatformerCharacter;
    if (oldBehaviorData.GamepadIdentifier !== newBehaviorData.GamepadIdentifier)
      this._behaviorData.GamepadIdentifier = newBehaviorData.GamepadIdentifier;
    if (oldBehaviorData.UseArrows !== newBehaviorData.UseArrows)
      this._behaviorData.UseArrows = newBehaviorData.UseArrows;
    if (oldBehaviorData.UseLeftStick !== newBehaviorData.UseLeftStick)
      this._behaviorData.UseLeftStick = newBehaviorData.UseLeftStick;
    if (oldBehaviorData.UseRightStick !== newBehaviorData.UseRightStick)
      this._behaviorData.UseRightStick = newBehaviorData.UseRightStick;
    if (oldBehaviorData.JumpButton !== newBehaviorData.JumpButton)
      this._behaviorData.JumpButton = newBehaviorData.JumpButton;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    PlatformerCharacter: this._behaviorData.PlatformerCharacter,
    GamepadIdentifier: this._behaviorData.GamepadIdentifier,
    UseArrows: this._behaviorData.UseArrows,
    UseLeftStick: this._behaviorData.UseLeftStick,
    UseRightStick: this._behaviorData.UseRightStick,
    JumpButton: this._behaviorData.JumpButton,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.PlatformerCharacter !== undefined)
      this._behaviorData.PlatformerCharacter = networkSyncData.props.PlatformerCharacter;
    if (networkSyncData.props.GamepadIdentifier !== undefined)
      this._behaviorData.GamepadIdentifier = networkSyncData.props.GamepadIdentifier;
    if (networkSyncData.props.UseArrows !== undefined)
      this._behaviorData.UseArrows = networkSyncData.props.UseArrows;
    if (networkSyncData.props.UseLeftStick !== undefined)
      this._behaviorData.UseLeftStick = networkSyncData.props.UseLeftStick;
    if (networkSyncData.props.UseRightStick !== undefined)
      this._behaviorData.UseRightStick = networkSyncData.props.UseRightStick;
    if (networkSyncData.props.JumpButton !== undefined)
      this._behaviorData.JumpButton = networkSyncData.props.JumpButton;
  }

  // Properties:
  
  _getPlatformerCharacter() {
    return this._behaviorData.PlatformerCharacter !== undefined ? this._behaviorData.PlatformerCharacter : "";
  }
  _setPlatformerCharacter(newValue) {
    this._behaviorData.PlatformerCharacter = newValue;
  }
  _getGamepadIdentifier() {
    return this._behaviorData.GamepadIdentifier !== undefined ? this._behaviorData.GamepadIdentifier : Number("1") || 0;
  }
  _setGamepadIdentifier(newValue) {
    this._behaviorData.GamepadIdentifier = newValue;
  }
  _getUseArrows() {
    return this._behaviorData.UseArrows !== undefined ? this._behaviorData.UseArrows : true;
  }
  _setUseArrows(newValue) {
    this._behaviorData.UseArrows = newValue;
  }
  _toggleUseArrows() {
    this._setUseArrows(!this._getUseArrows());
  }
  _getUseLeftStick() {
    return this._behaviorData.UseLeftStick !== undefined ? this._behaviorData.UseLeftStick : true;
  }
  _setUseLeftStick(newValue) {
    this._behaviorData.UseLeftStick = newValue;
  }
  _toggleUseLeftStick() {
    this._setUseLeftStick(!this._getUseLeftStick());
  }
  _getUseRightStick() {
    return this._behaviorData.UseRightStick !== undefined ? this._behaviorData.UseRightStick : false;
  }
  _setUseRightStick(newValue) {
    this._behaviorData.UseRightStick = newValue;
  }
  _toggleUseRightStick() {
    this._setUseRightStick(!this._getUseRightStick());
  }
  _getJumpButton() {
    return this._behaviorData.JumpButton !== undefined ? this._behaviorData.JumpButton : "A or Cross";
  }
  _setJumpButton(newValue) {
    this._behaviorData.JumpButton = newValue;
  }
}

/**
 * Shared data generated from Platformer gamepad mapper
 */
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.SharedData = class PlatformerGamepadMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Gamepads_PlatformerGamepadMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Gamepads_PlatformerGamepadMapperSharedData = new gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._Gamepads_PlatformerGamepadMapperSharedData;
}

// Methods:
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Up", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateUpKey();
}
}
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateLadderKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Down", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateDownKey();
}
}
}

}


};gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", "Left", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", "Right", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", "Up", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateUpKey();
}
}
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateLadderKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Left", "Down", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateDownKey();
}
}
}

}


};gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", "Left", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateLeftKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", "Right", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", "Up", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateUpKey();
}
}
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateLadderKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), "Right", "Down", eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateDownKey();
}
}
}

}


};gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUseArrows();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUseLeftStick();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getUseRightStick();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), eventsFunctionContext.sceneVariablesForExtension.getFromIndex(0).getChild(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpButton()).getAsString(), eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).simulateJumpKey();
}
}
}

}


};gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Controller_X_is_connected.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getGamepadIdentifier(), eventsFunctionContext);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Gamepads"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Gamepads"),
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

gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}


gdjs.registerBehavior("Gamepads::PlatformerGamepadMapper", gdjs.evtsExt__Gamepads__PlatformerGamepadMapper.PlatformerGamepadMapper);
