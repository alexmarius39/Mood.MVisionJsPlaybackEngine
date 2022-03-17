import amDeviceSetting                = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amAudioSettings                = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_AudioSettings");
import amFlashMediaSettings           = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_FlashMediaSettings");
import amPlaybackInteractionSettings  = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_PlaybackInteractionSettings");
import amVODSettings                  = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_VODSettings");
import amVideoSettings                = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_VideoSettings");
import amWebPageSettings              = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_WebPageSettings");
import amPlaybackSettings             = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_PlaybackSettings");

import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_PlaybackSettings  extends rmEntity.rm_general.R_Entity
                                    implements amPlaybackSettings.am_general.AE_PlaybackSettings
  {
    _audioSettings: amAudioSettings.am_general.AE_AudioSettings;
    _flashMediaSettings: amFlashMediaSettings.am_general.AE_FlashMediaSettings;
    _forceReportNowPlayingData: amDeviceSetting.am_general.AE_DeviceSetting;
    _playlistUpdateInstantReload: amDeviceSetting.am_general.AE_DeviceSetting;
    _multiZoneNoMediaFillColor: amDeviceSetting.am_general.AE_DeviceSetting;
    _playbackInteractionSettings: amPlaybackInteractionSettings.am_general.AE_PlaybackInteractionSettings;
    _playbackRestartTimeoutMillis: amDeviceSetting.am_general.AE_DeviceSetting;
    _syncPlaybackTimeoutMillis: amDeviceSetting.am_general.AE_DeviceSetting;
    _vodSettings: amVODSettings.am_general.AE_VODSettings;
    _videoSettings: amVideoSettings.am_general.AE_VideoSettings;
    _watchdogEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _webPageSettings: amWebPageSettings.am_general.AE_WebPageSettings;

    constructor()
    {
      super();

      this._audioSettings                 = null;
      this._flashMediaSettings            = null;
      this._forceReportNowPlayingData     = null;
      this._playlistUpdateInstantReload   = null;
      this._multiZoneNoMediaFillColor     = null;
      this._playbackInteractionSettings   = null;
      this._playbackRestartTimeoutMillis  = null;
      this._syncPlaybackTimeoutMillis     = null;
      this._vodSettings                   = null;
      this._videoSettings                 = null;
      this._watchdogEnabled               = null;
      this._webPageSettings               = null;
    }

    public setAudioSettings(audioSettings: amAudioSettings.am_general.AE_AudioSettings) : void
    {
      this._audioSettings = audioSettings;
    }
    public getAudioSettings() : amAudioSettings.am_general.AE_AudioSettings
    {
      return this._audioSettings;
    }

    public setFlashMediaSettings(flashMediaSettings: amFlashMediaSettings.am_general.AE_FlashMediaSettings) : void
    {
      this._flashMediaSettings = flashMediaSettings;
    }
    public getFlashMediaSettings() : amFlashMediaSettings.am_general.AE_FlashMediaSettings
    {
      return this._flashMediaSettings;
    }

    public setForceReportNowPlayingData(forceReportNowPlayingData: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._forceReportNowPlayingData = forceReportNowPlayingData;
    }
    public getForceReportNowPlayingData() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._forceReportNowPlayingData;
    }

    public setPlaylistUpdateInstantReload(playlistUpdateInstantReload: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._playlistUpdateInstantReload = playlistUpdateInstantReload;
    }
    public getPlaylistUpdateInstantReload() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._playlistUpdateInstantReload;
    }

    public setMultiZoneNoMediaFillColor(multiZoneNoMediaFillColor: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._multiZoneNoMediaFillColor = multiZoneNoMediaFillColor;
    }
    public getMultiZoneNoMediaFillColor() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._multiZoneNoMediaFillColor;
    }

    public setPlaybackInteractionSettings(playbackInteractionSettings: amPlaybackInteractionSettings.am_general.AE_PlaybackInteractionSettings) : void
    {
      this._playbackInteractionSettings = playbackInteractionSettings;
    }
    public getPlaybackInteractionSettings() : amPlaybackInteractionSettings.am_general.AE_PlaybackInteractionSettings
    {
      return this._playbackInteractionSettings;
    }

    public setPlaybackRestartTimeoutMillis(playbackRestartTimeoutMillis: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._playbackRestartTimeoutMillis = playbackRestartTimeoutMillis;
    }
    public getPlaybackRestartTimeoutMillis() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._playbackRestartTimeoutMillis;
    }

    public setSyncPlaybackTimeoutMillis(syncPlaybackTimeoutMillis: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._syncPlaybackTimeoutMillis = syncPlaybackTimeoutMillis;
    }
    public getSyncPlaybackTimeoutMillis() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._syncPlaybackTimeoutMillis;
    }

    public setVODSettings(vodSettings: amVODSettings.am_general.AE_VODSettings) : void
    {
      this._vodSettings = vodSettings;
    }
    public getVODSettings() : amVODSettings.am_general.AE_VODSettings
    {
      return this._vodSettings;
    }

    public setVideoSettings(videoSettings: amVideoSettings.am_general.AE_VideoSettings) : void
    {
      this._videoSettings = videoSettings;
    }
    public getVideoSettings() : amVideoSettings.am_general.AE_VideoSettings
    {
      return this._videoSettings;
    }

    public setWatchdogEnabled(watchdogEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._watchdogEnabled = watchdogEnabled;
    }
    public getWatchdogEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._watchdogEnabled;
    }

    public setWebPageSettings(webPageSettings: amWebPageSettings.am_general.AE_WebPageSettings) : void
    {
      this._webPageSettings = webPageSettings;
    }
    public getWebPageSettings() : amWebPageSettings.am_general.AE_WebPageSettings
    {
      return this._webPageSettings;
    }
  }
} 