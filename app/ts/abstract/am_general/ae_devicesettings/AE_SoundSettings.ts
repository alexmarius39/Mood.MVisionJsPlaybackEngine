import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_SoundSettings extends amEntity.am_general.A_Entity
  {
    setVolumeLevels(volumeLevels: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getVolumeLevels() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 