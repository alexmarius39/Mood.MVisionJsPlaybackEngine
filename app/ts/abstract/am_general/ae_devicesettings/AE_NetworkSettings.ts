import amEntity             = require("../a_entity/A_Entity");
import amEthernetSetting    = require("./AE_EthernetSettings");
import amHTTPProxySettings  = require("./AE_HTTPProxySettings");
import amWifiSettings       = require("./AE_WifiSettings");

export module am_general
{
  export interface AE_NetworkSettings extends amEntity.am_general.A_Entity
  {
    setEthernetSettings(ethernetSettings: amEthernetSetting.am_general.AE_EthernetSettings) : void;
    getEthernetSettings() : amEthernetSetting.am_general.AE_EthernetSettings;

    setHTTPProxySettings(httpProxySettings: amHTTPProxySettings.am_general.AE_HTTPProxySettings) : void;
    getHTTPProxySettings() : amHTTPProxySettings.am_general.AE_HTTPProxySettings;

    setWifiSettings(wifiSettings: amWifiSettings.am_general.AE_WifiSettings) : void;
    getWifiSettings() : amWifiSettings.am_general.AE_WifiSettings;
  }
} 