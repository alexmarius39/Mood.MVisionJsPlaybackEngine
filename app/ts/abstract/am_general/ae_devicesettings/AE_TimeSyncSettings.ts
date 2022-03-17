import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_TimeSyncSettings extends amEntity.am_general.A_Entity
  {
    setCustomNtpServerUrl(customNtpServerUrl: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomNtpServerUrl() : amDeviceSetting.am_general.AE_DeviceSetting;

    setSyncMode(syncMode: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getSyncMode() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 