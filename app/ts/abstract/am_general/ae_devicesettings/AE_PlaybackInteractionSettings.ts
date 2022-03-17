import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_PlaybackInteractionSettings extends amEntity.am_general.A_Entity
  {
    setOnTouchAction(onTouchAction: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getOnTouchAction() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 