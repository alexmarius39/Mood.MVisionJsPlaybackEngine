import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_HTTPProxySettings extends amEntity.am_general.A_Entity
  {
    setProxyEnabled(proxyEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getProxyEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setExcludedHosts(excludedHosts: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getExcludedHosts() : amDeviceSetting.am_general.AE_DeviceSetting;

    setHost(host: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getHost() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPassword(password: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPassword() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPort(port: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPort() : amDeviceSetting.am_general.AE_DeviceSetting;

    setUsername(username: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getUsername() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 