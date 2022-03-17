import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amAudioSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_AudioSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_AudioSettings extends rmEntity.rm_general.R_Entity
                                implements amAudioSettings.am_general.AE_AudioSettings
  {
    _duckingPercent: amDeviceSetting.am_general.AE_DeviceSetting;
    _duckingDuration: amDeviceSetting.am_general.AE_DeviceSetting;
    _musicCrossfadeMode: amDeviceSetting.am_general.AE_DeviceSetting;
    _musicSmoothStopPercent: amDeviceSetting.am_general.AE_DeviceSetting;
    _musicSmoothStopDurationMillis: amDeviceSetting.am_general.AE_DeviceSetting;
    _musicStaticCrossfadeDurationMillis: amDeviceSetting.am_general.AE_DeviceSetting;
    _musicTracksVolume: amDeviceSetting.am_general.AE_DeviceSetting;
    _volumePercentFactorZoneLeft: amDeviceSetting.am_general.AE_DeviceSetting;
    _volumePercentFactorZoneRight: amDeviceSetting.am_general.AE_DeviceSetting;
    _audioPlayerType: amDeviceSetting.am_general.AE_DeviceSetting;
    _volumeTracksVolumeZoneLeft: amDeviceSetting.am_general.AE_DeviceSetting;
    _volumeTracksVolumeZoneRight: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._duckingPercent                      = null;
      this._duckingDuration                     = null;
      this._musicCrossfadeMode                  = null;
      this._musicSmoothStopPercent              = null;
      this._musicSmoothStopDurationMillis       = null;
      this._musicStaticCrossfadeDurationMillis  = null;
      this._musicTracksVolume                   = null;
      this._volumePercentFactorZoneLeft         = null;
      this._volumePercentFactorZoneRight        = null;
      this._audioPlayerType                     = null;
      this._volumeTracksVolumeZoneLeft          = null;
      this._volumeTracksVolumeZoneRight         = null;
    }

    public setDuckingPercent(duckingPercent: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._duckingPercent = duckingPercent;
    }
    public getDuckingPercent() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._duckingPercent;
    }

    public setDuckingDuration(duckingDuration: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._duckingDuration = duckingDuration;
    }
    public getDuckingDuration() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._duckingDuration;
    }

    public setMusicCrossfadeMode(musicCrossfadeMode: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._musicCrossfadeMode = musicCrossfadeMode;
    }
    public getMusicCrossfadeMode() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._musicCrossfadeMode;
    }

    public setMusicSmoothStopPercent(musicSmoothStopPercent: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._musicSmoothStopPercent = musicSmoothStopPercent;
    }
    public getMusicSmoothStopPercent() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._musicSmoothStopPercent;
    }

    public setMusicSmoothStopDurationMillis(musicSmoothStopDurationMillis: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._musicSmoothStopDurationMillis = musicSmoothStopDurationMillis;
    }
    public getMusicSmoothStopDurationMillis() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._musicSmoothStopDurationMillis;
    }

    public setMusicStaticCrossfadeDurationMillis(musicStaticCrossfadeDurationMillis: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._musicStaticCrossfadeDurationMillis = musicStaticCrossfadeDurationMillis;
    }
    public getMusicStaticCrossfadeDurationMillis() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._musicStaticCrossfadeDurationMillis;
    }

    public setMusicTracksVolume(musicTracksVolume: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._musicTracksVolume = musicTracksVolume;
    }
    public getMusicTracksVolume() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._musicTracksVolume;
    }

    public setVolumePercentFactorZoneLeft(volumePercentFactorZoneLeft: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._volumePercentFactorZoneLeft = volumePercentFactorZoneLeft;
    }
    public getVolumePercentFactorZoneLeft() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._volumePercentFactorZoneLeft;
    }

    public setVolumePercentFactorZoneRight(volumePercentFactorZoneRight: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._volumePercentFactorZoneRight = volumePercentFactorZoneRight;
    }
    public getVolumePercentFactorZoneRight() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._volumePercentFactorZoneRight;
    }

    public setAudioPlayerType(audioPlayerType: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._audioPlayerType = audioPlayerType;
    }
    public getAudioPlayerType() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._audioPlayerType;
    }

    public setVolumeTracksVolumeZoneLeft(volumeTracksVolumeZoneLeft: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._volumeTracksVolumeZoneLeft = volumeTracksVolumeZoneLeft;
    }
    public getVolumeTracksVolumeZoneLeft() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._volumeTracksVolumeZoneLeft;
    }

    public setVolumeTracksVolumeZoneRight(volumeTracksVolumeZoneRight: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._volumeTracksVolumeZoneRight = volumeTracksVolumeZoneRight;
    }
    public getVolumeTracksVolumeZoneRight() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._volumeTracksVolumeZoneRight;
    }
  }
} 