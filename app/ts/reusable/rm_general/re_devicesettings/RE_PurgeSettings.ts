import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amPurgeSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_PurgeSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_PurgeSettings extends rmEntity.rm_general.R_Entity
                                implements amPurgeSettings.am_general.AE_PurgeSettings
  {
    _customDirs: amDeviceSetting.am_general.AE_DeviceSetting;
    _musicTracksPurgeUntouched: amDeviceSetting.am_general.AE_DeviceSetting;
    _purgeLogsUntouched: amDeviceSetting.am_general.AE_DeviceSetting;
    _purgeMediaFilesUntouched: amDeviceSetting.am_general.AE_DeviceSetting;
    _statsUntouched: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._customDirs                = null;
      this._musicTracksPurgeUntouched = null;
      this._purgeLogsUntouched        = null;
      this._purgeMediaFilesUntouched  = null;
      this._statsUntouched            = null;
    }

    public setCustomDirs(customDirs: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customDirs = customDirs;
    }
    public getCustomDirs() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customDirs;
    }

    public setMusicTracksPurgeUntouched(musicTracksPurgeUntouched: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._musicTracksPurgeUntouched = musicTracksPurgeUntouched;
    }
    public getMusicTracksPurgeUntouched() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._musicTracksPurgeUntouched;
    }

    public setPurgeLogsUntouched(purgeLogsUntouched: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._purgeLogsUntouched = purgeLogsUntouched;
    }
    public getPurgeLogsUntouched() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._purgeLogsUntouched;
    }

    public setPurgeMediaFilesUntouched(purgeMediaFilesUntouched: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._purgeMediaFilesUntouched = purgeMediaFilesUntouched;
    }
    public getPurgeMediaFilesUntouched() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._purgeMediaFilesUntouched;
    }

    public setStatsUntouched(statsUntouched: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._statsUntouched = statsUntouched;
    }
    public getStatsUntouched() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._statsUntouched;
    }
  }
} 