import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_CronSettings extends amEntity.am_general.A_Entity
  {
    setMonitorDataUploadInterval(monitorDataUploadInterval: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMonitorDataUploadInterval() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPlayerFilesDownloadInterval(playerFilesDownloadInterval: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPlayerFilesDownloadInterval() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPlaylistFeedsUpdateInterval(playlistFeedsUpdateInterval: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPlaylistFeedsUpdateInterval() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPlaylistUpdateInterval(playlistUpdateInterval: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPlaylistUpdateInterval() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 