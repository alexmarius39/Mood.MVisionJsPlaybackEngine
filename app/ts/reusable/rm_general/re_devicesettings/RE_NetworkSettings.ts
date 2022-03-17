import amEthernetSettings    = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_EthernetSettings");
import amHTTPProxySettings  = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_HTTPProxySettings");
import amWifiSettings       = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_WifiSettings");
import amNetworkSettings    = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_NetworkSettings");

import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_NetworkSettings extends rmEntity.rm_general.R_Entity
                              implements amNetworkSettings.am_general.AE_NetworkSettings
  {
    _ethernetSettings: amEthernetSettings.am_general.AE_EthernetSettings;
    _httpProxySettings: amHTTPProxySettings.am_general.AE_HTTPProxySettings;
    _wifiSettings: amWifiSettings.am_general.AE_WifiSettings;

    constructor()
    {
      super();

      this._ethernetSettings  = null;
      this._httpProxySettings = null;
      this._wifiSettings      = null;
    }

    public setEthernetSettings(ethernetSettings: amEthernetSettings.am_general.AE_EthernetSettings) : void
    {
      this._ethernetSettings = ethernetSettings;
    }
    public getEthernetSettings() : amEthernetSettings.am_general.AE_EthernetSettings
    {
      return this._ethernetSettings;
    }

    public setHTTPProxySettings(httpProxySettings: amHTTPProxySettings.am_general.AE_HTTPProxySettings) : void
    {
      this._httpProxySettings = httpProxySettings;
    }
    public getHTTPProxySettings() : amHTTPProxySettings.am_general.AE_HTTPProxySettings
    {
      return this._httpProxySettings;
    }

    public setWifiSettings(wifiSettings: amWifiSettings.am_general.AE_WifiSettings) : void
    {
      this._wifiSettings = wifiSettings;
    }
    public getWifiSettings() : amWifiSettings.am_general.AE_WifiSettings
    {
      return this._wifiSettings;
    }
  }
} 