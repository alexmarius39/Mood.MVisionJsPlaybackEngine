import amDeviceSetting = require("../../../abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amEthernetSettings = require("../../../abstract/am_general/ae_devicesettings/AE_EthernetSettings");
import amNetworkLinkSettings = require("../../../abstract/am_general/ae_devicesettings/AE_NetworkLinkSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_EthernetSettings extends rmEntity.rm_general.R_Entity
                                  implements amEthernetSettings.am_general.AE_EthernetSettings
  {

    _allowConfigurationChange: amDeviceSetting.am_general.AE_DeviceSetting;
    _enableDHCP: amDeviceSetting.am_general.AE_DeviceSetting;
    _interfaceEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _networkLinkSettings: amNetworkLinkSettings.am_general.AE_NetworkLinkSettings;
    _vlanConfigurations: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._allowConfigurationChange  = null;
      this._enableDHCP                = null;
      this._interfaceEnabled          = null;
      this._networkLinkSettings       = null;
      this._vlanConfigurations        = null;
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
  }
} 