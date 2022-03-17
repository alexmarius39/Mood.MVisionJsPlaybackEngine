import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");
import amNetworkLinkSettings = require("./AE_NetworkLinkSettings");

export module am_general
{
  export interface AE_EthernetSettings extends amEntity.am_general.A_Entity
  {
    setAllowConfigurationChange(allowConfigurationChange: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getAllowConfigurationChange() : amDeviceSetting.am_general.AE_DeviceSetting;

    setEnableDHCP(enableDHCP: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getEnableDHCP() : amDeviceSetting.am_general.AE_DeviceSetting;

    setInterfaceEnabled(interfaceEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getInterfaceEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setNetworkLinkSettings(networkLinkSettings: amNetworkLinkSettings.am_general.AE_NetworkLinkSettings) : void;
    getNetworkLinkSettings() : amNetworkLinkSettings.am_general.AE_NetworkLinkSettings;

    setVLANConfigurations(vlanConfigurations: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getVLANConfigurations() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 