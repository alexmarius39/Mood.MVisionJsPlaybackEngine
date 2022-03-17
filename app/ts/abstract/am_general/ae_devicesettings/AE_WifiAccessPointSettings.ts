import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_WifiAccessPointSettings extends amEntity.am_general.A_Entity
  {
    setAuthenticationType(authenticationType: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getAuthenticationType() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPassword(password: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPassword() : amDeviceSetting.am_general.AE_DeviceSetting;

    setSSID(ssid: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getSSID() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 