import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amNetworkLinkSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_NetworkLinkSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_NetworkLinkSettings extends rmEntity.rm_general.R_Entity
                                    implements amNetworkLinkSettings.am_general.AE_NetworkLinkSettings
  {
    _dns1: amDeviceSetting.am_general.AE_DeviceSetting;
    _dns2: amDeviceSetting.am_general.AE_DeviceSetting;
    _gateway: amDeviceSetting.am_general.AE_DeviceSetting;
    _ipAddress: amDeviceSetting.am_general.AE_DeviceSetting;
    _netmask: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._dns1 = null;
      this._dns2 = null;
      this._gateway = null;
      this._ipAddress = null;
      this._netmask = null;
    }

    public setDNS1(dns1: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._dns1 = dns1;
    }
    public getDNS1() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._dns1;
    }

    public setDNS2(dns2: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._dns2 = dns2;
    }
    public getDNS2() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._dns2;
    }

    public setGateway(gateway: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._gateway = gateway;
    }
    public getGateway() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._gateway;
    }

    public setIPAddress(ipAddress: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._ipAddress = ipAddress;
    }
    public getIPAddress() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._ipAddress;
    }

    public setNetmask(netmask: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._netmask = netmask;
    }
    public getNetmask() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._netmask;
    }
  }
} 