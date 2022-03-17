import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_P2PSettings extends amEntity.am_general.A_Entity
  {
    setPort(p2pPort: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPort() : amDeviceSetting.am_general.AE_DeviceSetting;

    setServerEnabled(p2pServerEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getServerEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setClientEnabled(p2pClientEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getClientEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 