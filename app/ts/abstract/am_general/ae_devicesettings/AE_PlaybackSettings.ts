import amEntity                       = require("../a_entity/A_Entity");
import amDeviceSetting                = require("./AE_DeviceSetting");
import amAudioSettings                = require("./AE_AudioSettings");
import amFlashMediaSettings           = require("./AE_FlashMediaSettings");
import amPlaybackInteractionSettings  = require("./AE_PlaybackInteractionSettings");
import amVODSettings                  = require("./AE_VODSettings");
import amVideoSettings                = require("./AE_VideoSettings");
import amWebPageSettings              = require("./AE_WebPageSettings");

export module am_general
{
  export interface AE_PlaybackSettings extends amEntity.am_general.A_Entity
  {
    setAudioSettings(audioSettings: amAudioSettings.am_general.AE_AudioSettings) : void;
    getAudioSettings() : amAudioSettings.am_general.AE_AudioSettings;

    setFlashMediaSettings(flashMediaSettings: amFlashMediaSettings.am_general.AE_FlashMediaSettings) : void;
    getFlashMediaSettings() : amFlashMediaSettings.am_general.AE_FlashMediaSettings;

    setForceReportNowPlayingData(forceReportNowPlayingData: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getForceReportNowPlayingData() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPlaylistUpdateInstantReload(playlistUpdateInstantReload: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPlaylistUpdateInstantReload() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMultiZoneNoMediaFillColor(multiZoneNoMediaFillColor: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMultiZoneNoMediaFillColor() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPlaybackInteractionSettings(playbackInteractionSettings: amPlaybackInteractionSettings.am_general.AE_PlaybackInteractionSettings) : void;
    getPlaybackInteractionSettings() : amPlaybackInteractionSettings.am_general.AE_PlaybackInteractionSettings;

    setPlaybackRestartTimeoutMillis(playbackRestartTimeoutMillis: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPlaybackRestartTimeoutMillis() : amDeviceSetting.am_general.AE_DeviceSetting;

    setSyncPlaybackTimeoutMillis(syncPlaybackTimeoutMillis: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getSyncPlaybackTimeoutMillis() : amDeviceSetting.am_general.AE_DeviceSetting;

    setVODSettings(vodSettings: amVODSettings.am_general.AE_VODSettings) : void;
    getVODSettings() : amVODSettings.am_general.AE_VODSettings;

    setVideoSettings(videoSettings: amVideoSettings.am_general.AE_VideoSettings) : void;
    getVideoSettings() : amVideoSettings.am_general.AE_VideoSettings;

    setWatchdogEnabled(watchdogEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getWatchdogEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setWebPageSettings(webPageSettings: amWebPageSettings.am_general.AE_WebPageSettings) : void;
    getWebPageSettings() : amWebPageSettings.am_general.AE_WebPageSettings;
  }
} 