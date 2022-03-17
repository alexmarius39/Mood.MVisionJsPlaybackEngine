import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_CloudAPISettings extends amEntity.am_general.A_Entity
  {
    setBaseServerAPIUrl(baseServerAPIUrl: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getBaseServerAPIUrl() : amDeviceSetting.am_general.AE_DeviceSetting;

    setBaseServerUpgradeUrl(baseServerUpgradeUrl: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getBaseServerUpgradeUrl() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 