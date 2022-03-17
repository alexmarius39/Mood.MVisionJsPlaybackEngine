import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amResetSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_ResetSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_ResetSettings extends rmEntity.rm_general.R_Entity
                                implements amResetSettings.am_general.AE_ResetSettings
  {
    _exceptions: amDeviceSetting.am_general.AE_DeviceSetting;
    _resetMode:  amDeviceSetting.am_general.AE_DeviceSetting;
    _resetTime:  amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._exceptions  = null;
      this._resetMode   = null;
      this._resetTime   = null;
    }

    public setExceptions(exceptions: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._exceptions = exceptions;
    }
    public getExceptions() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._exceptions;
    }

    public setResetMode(resetMode: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._resetMode = resetMode;
    }
    public getResetMode() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._resetMode;
    }

    public setResetTime(resetTime: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._resetTime = resetTime;
    }
    public getResetTime() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._resetTime;
    }

  }
} 