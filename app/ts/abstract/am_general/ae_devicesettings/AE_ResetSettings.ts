import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_ResetSettings extends amEntity.am_general.A_Entity
  {
    setExceptions(exceptions: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getExceptions() : amDeviceSetting.am_general.AE_DeviceSetting;

    setResetMode(resetMode: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getResetMode() : amDeviceSetting.am_general.AE_DeviceSetting;

    setResetTime(resetTime: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getResetTime() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 