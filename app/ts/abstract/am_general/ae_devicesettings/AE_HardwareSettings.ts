import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_HardwareSettings extends amEntity.am_general.A_Entity
  {
    setEarlyAdopter(earlyAdopter: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getEarlyAdopter() : amDeviceSetting.am_general.AE_DeviceSetting;

    setKnownSerialProductIds(knownSerialProductIds: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getKnownSerialProductIds() : amDeviceSetting.am_general.AE_DeviceSetting;

    setNetworkHostname(networkHostname: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getNetworkHostname() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 