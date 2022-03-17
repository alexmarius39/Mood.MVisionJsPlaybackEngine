import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_NetworkLinkSettings extends amEntity.am_general.A_Entity
  {
    setDNS1(dns1: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getDNS1() : amDeviceSetting.am_general.AE_DeviceSetting;

    setDNS2(dns2: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getDNS2() : amDeviceSetting.am_general.AE_DeviceSetting;

    setGateway(gateway: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getGateway() : amDeviceSetting.am_general.AE_DeviceSetting;

    setIPAddress(ipAddress: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getIPAddress() : amDeviceSetting.am_general.AE_DeviceSetting;

    setNetmask(netmask: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getNetmask() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 