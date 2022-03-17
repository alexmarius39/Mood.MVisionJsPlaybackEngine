import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amTimeSyncSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_TimeSyncSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_TimeSyncSettings  extends rmEntity.rm_general.R_Entity
                                    implements amTimeSyncSettings.am_general.AE_TimeSyncSettings
  {
    _customNtpServerUrl: amDeviceSetting.am_general.AE_DeviceSetting;
    _syncMode: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._customNtpServerUrl  = null;
      this._syncMode            = null;
    }

    public setCustomNtpServerUrl(customNtpServerUrl: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customNtpServerUrl = customNtpServerUrl;
    }
    public getCustomNtpServerUrl() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customNtpServerUrl;
    }

    public setSyncMode(syncMode: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._syncMode = syncMode;
    }
    public getSyncMode() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._syncMode;
    }
  }
} 