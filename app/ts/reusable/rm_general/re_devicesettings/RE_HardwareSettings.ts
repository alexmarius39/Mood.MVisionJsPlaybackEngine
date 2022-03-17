import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amHardwareSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_HardwareSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_HardwareSettings  extends rmEntity.rm_general.R_Entity
                                  implements amHardwareSettings.am_general.AE_HardwareSettings
  {
    _earlyAdopter: amDeviceSetting.am_general.AE_DeviceSetting;
    _knownSerialProductIds: amDeviceSetting.am_general.AE_DeviceSetting;
    _networkHostname: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._earlyAdopter          = null;
      this._knownSerialProductIds = null;
      this._networkHostname       = null;
    }

    public setEarlyAdopter(earlyAdopter: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._earlyAdopter = earlyAdopter;
    }
    public getEarlyAdopter() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._earlyAdopter;
    }

    public setKnownSerialProductIds(knownSerialProductIds: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._knownSerialProductIds = knownSerialProductIds;
    }
    public getKnownSerialProductIds() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._knownSerialProductIds;
    }

    public setNetworkHostname(networkHostname: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._networkHostname = networkHostname;
    }
    public getNetworkHostname() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._networkHostname;
    }
  }
} 