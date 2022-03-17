import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amLoggingSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_LoggingSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_LoggingSettings  extends rmEntity.rm_general.R_Entity
                                  implements amLoggingSettings.am_general.AE_LoggingSettings
  {
    _activityLogsBufferMaxSizeBytes: amDeviceSetting.am_general.AE_DeviceSetting;
    _activityLogsAutoUploadIntervalMillis: amDeviceSetting.am_general.AE_DeviceSetting;
    _activityLogsAutoUploadEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _activityLogsFileEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _playbackLogsFileEnabled: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._activityLogsBufferMaxSizeBytes        = null;
      this._activityLogsAutoUploadIntervalMillis  = null;
      this._activityLogsAutoUploadEnabled         = null;
      this._activityLogsFileEnabled               = null;
      this._playbackLogsFileEnabled               = null;
    }

    public setActivityLogsBufferMaxSizeBytes(activityLogsBufferMaxSizeBytes: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._activityLogsBufferMaxSizeBytes = activityLogsBufferMaxSizeBytes;
    }
    public getActivityLogsBufferMaxSizeBytes() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._activityLogsBufferMaxSizeBytes;
    }

    public setActivityLogsAutoUploadIntervalMillis(activityLogsAutoUploadIntervalMillis: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._activityLogsAutoUploadIntervalMillis = activityLogsAutoUploadIntervalMillis;
    }
    public getActivityLogsAutoUploadIntervalMillis() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._activityLogsAutoUploadIntervalMillis;
    }

    public setActivityLogsAutoUploadEnabled(activityLogsAutoUploadEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._activityLogsAutoUploadEnabled = activityLogsAutoUploadEnabled;
    }
    public getActivityLogsAutoUploadEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._activityLogsAutoUploadEnabled;
    }

    public setActivityLogsFileEnabled(activityLogsFileEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._activityLogsFileEnabled = activityLogsFileEnabled;
    }
    public getActivityLogsFileEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._activityLogsFileEnabled;
    }

    public setPlaybackLogsFileEnabled(playbackLogsFileEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._playbackLogsFileEnabled = playbackLogsFileEnabled;
    }
    public getPlaybackLogsFileEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._playbackLogsFileEnabled;
    }
  }
} 