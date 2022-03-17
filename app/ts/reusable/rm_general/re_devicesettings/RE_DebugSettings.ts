import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amDebugSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DebugSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_DebugSettings extends rmEntity.rm_general.R_Entity
                                implements amDebugSettings.am_general.AE_DebugSettings
  {
    _debugViewVisible: amDeviceSetting.am_general.AE_DeviceSetting;
    _deleteMediaOnLaunch: amDeviceSetting.am_general.AE_DeviceSetting;
    _deletePlaylistOnLaunch: amDeviceSetting.am_general.AE_DeviceSetting;
    _monitoringDisabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _networkSetupDisabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _playbackLogsUploadDisabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _playerFilesUpdateDisabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _crashLoggerEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _lastPlayerChangeId: amDeviceSetting.am_general.AE_DeviceSetting;
    _streamMusicTracks: amDeviceSetting.am_general.AE_DeviceSetting;
    _useHeadlessSetupWebAppDevBuild: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._debugViewVisible                = null;
      this._deleteMediaOnLaunch             = null;
      this._deletePlaylistOnLaunch          = null;
      this._monitoringDisabled              = null;
      this._networkSetupDisabled            = null;
      this._playbackLogsUploadDisabled      = null;
      this._playerFilesUpdateDisabled       = null;
      this._crashLoggerEnabled              = null;
      this._lastPlayerChangeId              = null;
      this._streamMusicTracks               = null;
      this._useHeadlessSetupWebAppDevBuild  = null;
    }

    public setDebugViewVisible(debugViewVisible: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._debugViewVisible = debugViewVisible;
    }
    public getDebugViewVisible() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._debugViewVisible;
    }

    public setDeleteMediaOnLaunch(deleteMediaOnLaunch: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._deleteMediaOnLaunch = deleteMediaOnLaunch;
    }
    public getDeleteMediaOnLaunch() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._deleteMediaOnLaunch;
    }

    public setDeletePlaylistOnLaunch(deletePlaylistOnLaunch: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._deletePlaylistOnLaunch = deletePlaylistOnLaunch;
    }
    public getDeletePlaylistOnLaunch() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._deletePlaylistOnLaunch;
    }

    public setMonitoringDisabled(monitoringDisabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._monitoringDisabled = monitoringDisabled;
    }
    public getMonitoringDisabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._monitoringDisabled;
    }

    public setNetworkSetupDisabled(networkSetupDisabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._networkSetupDisabled = networkSetupDisabled;
    }
    public getNetworkSetupDisabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._networkSetupDisabled;
    }

    public setPlaybackLogsUploadDisabled(playbackLogsUploadDisabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._playbackLogsUploadDisabled = playbackLogsUploadDisabled;
    }
    public getPlaybackLogsUploadDisabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._playbackLogsUploadDisabled;
    }

    public setPlayerFilesUpdateDisabled(playerFilesUpdateDisabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._playerFilesUpdateDisabled = playerFilesUpdateDisabled;
    }
    public getPlayerFilesUpdateDisabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._playerFilesUpdateDisabled;
    }

    public setCrashLoggerEnabled(crashLoggerEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._crashLoggerEnabled = crashLoggerEnabled;
    }
    public getCrashLoggerEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._crashLoggerEnabled;
    }

    public setLastPlayerChangeId(lastPlayerChangeId: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._lastPlayerChangeId = lastPlayerChangeId;
    }
    public getLastPlayerChangeId() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._lastPlayerChangeId;
    }

    public setStreamMusicTracks(streamMusicTracks: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._streamMusicTracks = streamMusicTracks;
    }
    public getStreamMusicTracks() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._streamMusicTracks;
    }

    public setUseHeadlessSetupWebAppDevBuild(useHeadlessSetupWebAppDevBuild: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._useHeadlessSetupWebAppDevBuild = useHeadlessSetupWebAppDevBuild;
    }
    public getUseHeadlessSetupWebAppDevBuild() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._useHeadlessSetupWebAppDevBuild;
    }
  }
} 