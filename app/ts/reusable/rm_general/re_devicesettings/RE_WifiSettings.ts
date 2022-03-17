import amDeviceSetting = require("../../../abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amWifiSettings = require("../../../abstract/am_general/ae_devicesettings/AE_WifiSettings");
import amNetworkLinkSettings = require("../../../abstract/am_general/ae_devicesettings/AE_NetworkLinkSettings");
import amWifiAccessPointSettings = require("../../../abstract/am_general/ae_devicesettings/AE_WifiAccessPointSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_WifiSettings  extends rmEntity.rm_general.R_Entity
                                implements amWifiSettings.am_general.AE_WifiSettings
  {

    _allowConfigurationChange: amDeviceSetting.am_general.AE_DeviceSetting;
    _enableDHCP: amDeviceSetting.am_general.AE_DeviceSetting;
    _interfaceEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _networkLinkSettings: amNetworkLinkSettings.am_general.AE_NetworkLinkSettings;
    _vlanConfigurations: amDeviceSetting.am_general.AE_DeviceSetting;
    _wifiAccessPointSettings: amWifiAccessPointSettings.am_general.AE_WifiAccessPointSettings;

    constructor()
    {
      super();

      this._allowConfigurationChange  = null;
      this._enableDHCP                = null;
      this._interfaceEnabled          = null;
      this._networkLinkSettings       = null;
      this._vlanConfigurations        = null;
      this._wifiAccessPointSettings   = null;
    }

    public setAllowConfigurationChange(allowConfigurationChange: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._allowConfigurationChange = allowConfigurationChange;
    }
    public getAllowConfigurationChange() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._allowConfigurationChange;
    }

    public setEnableDHCP(enableDHCP: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._enableDHCP = enableDHCP;
    }
    public getEnableDHCP() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._enableDHCP;
    }

    public setInterfaceEnabled(interfaceEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._interfaceEnabled = interfaceEnabled;
    }
    public getInterfaceEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._interfaceEnabled;
    }

    public setNetworkLinkSettings(networkLinkSettings: amNetworkLinkSettings.am_general.AE_NetworkLinkSettings) : void
    {
      this._networkLinkSettings = networkLinkSettings;
    }
    public getNetworkLinkSettings() : amNetworkLinkSettings.am_general.AE_NetworkLinkSettings
    {
      return this._networkLinkSettings;
    }

    public setVLANConfigurations(vlanConfigurations: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._vlanConfigurations = vlanConfigurations;
    }
    public getVLANConfigurations() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._vlanConfigurations;
    }

    public setWifiAccessPointSettings(wifiAccessPointSettings: amWifiAccessPointSettings.am_general.AE_WifiAccessPointSettings) : void
    {
      this._wifiAccessPointSettings = wifiAccessPointSettings;
    }
    public getWifiAccessPointSettings() : amWifiAccessPointSettings.am_general.AE_WifiAccessPointSettings
    {
      return this._wifiAccessPointSettings;
    }

  }
} 