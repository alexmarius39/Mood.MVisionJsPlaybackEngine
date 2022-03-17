import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_MulticastSettings extends amEntity.am_general.A_Entity
  {
    setAddress(multicastAddress: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getAddress() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPort(multicastPort: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPort() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 