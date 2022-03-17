import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_LoggingSettings extends amEntity.am_general.A_Entity
  {
    setActivityLogsBufferMaxSizeBytes(activityLogsBufferMaxSizeBytes: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getActivityLogsBufferMaxSizeBytes() : amDeviceSetting.am_general.AE_DeviceSetting;

    setActivityLogsAutoUploadIntervalMillis(activityLogsAutoUploadIntervalMillis: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getActivityLogsAutoUploadIntervalMillis() : amDeviceSetting.am_general.AE_DeviceSetting;

    setActivityLogsAutoUploadEnabled(activityLogsAutoUploadEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getActivityLogsAutoUploadEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setActivityLogsFileEnabled(activityLogsFileEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getActivityLogsFileEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPlaybackLogsFileEnabled(playbackLogsFileEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPlaybackLogsFileEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 