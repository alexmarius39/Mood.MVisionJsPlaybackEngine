import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");
import amPurgeSettings = require("./AE_PurgeSettings");

export module am_general
{
  export interface AE_ContentSettings extends amEntity.am_general.A_Entity
  {
    setNetworkNotAvailableMessage(aMessage: amDeviceSetting.am_general.AE_DeviceSetting): void;
    getNetworkNotAvailableMessage(): amDeviceSetting.am_general.AE_DeviceSetting;

    setPurgeSettings(aPurgeSettings: amPurgeSettings.am_general.AE_PurgeSettings): void;
    getPurgeSettings(): amPurgeSettings.am_general.AE_PurgeSettings;

    setStoreTracksCountLimit(aCountLimit: amDeviceSetting.am_general.AE_DeviceSetting): void;
    getStoreTracksCountLimit(): amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 