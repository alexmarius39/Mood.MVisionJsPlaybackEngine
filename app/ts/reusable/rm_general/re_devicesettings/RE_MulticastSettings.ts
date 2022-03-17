import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amMulticastSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_MulticastSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_MulticastSettings extends rmEntity.rm_general.R_Entity
                                    implements amMulticastSettings.am_general.AE_MulticastSettings
  {
    _multicastAddress: amDeviceSetting.am_general.AE_DeviceSetting;
    _multicastPort: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._multicastAddress  = null;
      this._multicastPort     = null;
    }

    public setAddress(multicastAddress: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._multicastAddress = multicastAddress;
    }
    public getAddress() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._multicastAddress;
    }

    public setPort(multicastPort: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._multicastPort = multicastPort;
    }
    public getPort() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._multicastPort;
    }
  }
} 