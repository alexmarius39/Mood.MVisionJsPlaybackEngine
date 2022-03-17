import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_PurgeSettings extends amEntity.am_general.A_Entity
  {
    setCustomDirs(customDirs: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomDirs() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMusicTracksPurgeUntouched(musicTracksPurgeUntouched: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMusicTracksPurgeUntouched() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPurgeLogsUntouched(purgeLogsUntouched: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPurgeLogsUntouched() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPurgeMediaFilesUntouched(purgeMediaFilesUntouched: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPurgeMediaFilesUntouched() : amDeviceSetting.am_general.AE_DeviceSetting;

    setStatsUntouched(statsUntouched: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getStatsUntouched() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 