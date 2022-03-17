import amDeviceSetting = require("../../../abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amCronSettings = require("../../../abstract/am_general/ae_devicesettings/AE_CronSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_CronSettings  extends rmEntity.rm_general.R_Entity
                                implements amCronSettings.am_general.AE_CronSettings
  {
    _monitorDataUploadInterval: amDeviceSetting.am_general.AE_DeviceSetting;
    _playerFilesDownloadInterval: amDeviceSetting.am_general.AE_DeviceSetting;
    _playlistFeedsUpdateInterval: amDeviceSetting.am_general.AE_DeviceSetting;
    _playlistUpdateInterval: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._monitorDataUploadInterval   = null;
      this._playerFilesDownloadInterval = null;
      this._playlistFeedsUpdateInterval   = null;
      this._playlistUpdateInterval      = null;
    }

    public setMonitorDataUploadInterval(monitorDataUploadInterval: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._monitorDataUploadInterval = monitorDataUploadInterval;
    }
    public getMonitorDataUploadInterval() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._monitorDataUploadInterval;
    }

    public setPlayerFilesDownloadInterval(playerFilesDownloadInterval: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._playerFilesDownloadInterval = playerFilesDownloadInterval;
    }
    public getPlayerFilesDownloadInterval() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._playerFilesDownloadInterval;
    }

    public setPlaylistFeedsUpdateInterval(playlistFeedsUpdateInterval: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._playlistFeedsUpdateInterval = playlistFeedsUpdateInterval;
    }
    public getPlaylistFeedsUpdateInterval() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._playlistFeedsUpdateInterval;
    }

    public setPlaylistUpdateInterval(playlistUpdateInterval: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._playlistUpdateInterval = playlistUpdateInterval;
    }
    public getPlaylistUpdateInterval() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._playlistUpdateInterval;
    }
  }
} 