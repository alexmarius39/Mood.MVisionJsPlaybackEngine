import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amPlatformSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_PlatformSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_PlatformSettings  extends rmEntity.rm_general.R_Entity
                                    implements amPlatformSettings.am_general.AE_PlatformSettings
  {
    _adbEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _usePowerKeyForScreenOff: amDeviceSetting.am_general.AE_DeviceSetting;
    _wsusUrl: amDeviceSetting.am_general.AE_DeviceSetting;
    _zidooSoundOutputRaw: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._adbEnabled              = null;
      this._usePowerKeyForScreenOff = null;
      this._wsusUrl                 = null;
      this._zidooSoundOutputRaw     = null;
    }

    public setAdbEnabled(adbEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._adbEnabled = adbEnabled;
    }
    public getAdbEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._adbEnabled;
    }

    public setUsePowerKeyForScreenOff(usePowerKeyForScreenOff: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._usePowerKeyForScreenOff = usePowerKeyForScreenOff;
    }
    public getUsePowerKeyForScreenOff() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._usePowerKeyForScreenOff;
    }

    public setWsusUrl(wsusUrl: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._wsusUrl = wsusUrl;
    }
    public getWsusUrl() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._wsusUrl;
    }

    public setZidooSoundOutputRaw(zidooSoundOutputRaw: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._zidooSoundOutputRaw = zidooSoundOutputRaw;
    }
    public getZidooSoundOutputRaw() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._zidooSoundOutputRaw;
    }
  }
} 