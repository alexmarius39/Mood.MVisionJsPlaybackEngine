import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_DebugSettings extends amEntity.am_general.A_Entity
  {
    setDebugViewVisible(debugViewVisible: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getDebugViewVisible() : amDeviceSetting.am_general.AE_DeviceSetting;

    setDeleteMediaOnLaunch(deleteMediaOnLaunch: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getDeleteMediaOnLaunch() : amDeviceSetting.am_general.AE_DeviceSetting;

    setDeletePlaylistOnLaunch(deletePlaylistOnLaunch: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getDeletePlaylistOnLaunch() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMonitoringDisabled(monitoringDisabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMonitoringDisabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setNetworkSetupDisabled(networkSetupDisabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getNetworkSetupDisabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPlaybackLogsUploadDisabled(playbackLogsUploadDisabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPlaybackLogsUploadDisabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPlayerFilesUpdateDisabled(playerFilesUpdateDisabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPlayerFilesUpdateDisabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setCrashLoggerEnabled(crashLoggerEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCrashLoggerEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setLastPlayerChangeId(lastPlayerChangeId: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getLastPlayerChangeId() : amDeviceSetting.am_general.AE_DeviceSetting;

    setStreamMusicTracks(streamMusicTracks: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getStreamMusicTracks() : amDeviceSetting.am_general.AE_DeviceSetting;

    setUseHeadlessSetupWebAppDevBuild(useHeadlessSetupWebAppDevBuild: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getUseHeadlessSetupWebAppDevBuild() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 