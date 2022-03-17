import amDeviceSetting    = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amTimeSyncSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_TimeSyncSettings");
import amTimeSettings     = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_TimeSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_TimeSettings  extends rmEntity.rm_general.R_Entity
                                implements amTimeSettings.am_general.AE_TimeSettings
  {
    _timeSyncSettings: amTimeSyncSettings.am_general.AE_TimeSyncSettings;
    _timezone: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._timeSyncSettings  = null;
      this._timezone          = null;
    }

    public setTimeSyncSettings(timeSyncSettings: amTimeSyncSettings.am_general.AE_TimeSyncSettings) : void
    {
      this._timeSyncSettings = timeSyncSettings;
    }
    public getTimeSyncSettings() : amTimeSyncSettings.am_general.AE_TimeSyncSettings
    {
      return this._timeSyncSettings;
    }

    public setTimezone(timezone: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._timezone = timezone;
    }
    public getTimezone() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._timezone;
    }
  }
} 