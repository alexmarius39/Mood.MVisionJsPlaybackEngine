import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");
import amTimeSyncSettings = require("./AE_TimeSyncSettings");

export module am_general
{
  export interface AE_TimeSettings extends amEntity.am_general.A_Entity
  {
    setTimeSyncSettings(timeSyncSettings: amTimeSyncSettings.am_general.AE_TimeSyncSettings) : void;
    getTimeSyncSettings() : amTimeSyncSettings.am_general.AE_TimeSyncSettings;

    setTimezone(timezone: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getTimezone() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 