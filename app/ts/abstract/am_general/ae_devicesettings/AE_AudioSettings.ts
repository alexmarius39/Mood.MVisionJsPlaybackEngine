import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_AudioSettings extends amEntity.am_general.A_Entity
  {
    setDuckingPercent(duckingPercent: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getDuckingPercent() : amDeviceSetting.am_general.AE_DeviceSetting;

    setDuckingDuration(duckingDuration: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getDuckingDuration() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMusicCrossfadeMode(musicCrossfadeMode: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMusicCrossfadeMode() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMusicSmoothStopPercent(musicSmoothStopPercent: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMusicSmoothStopPercent() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMusicSmoothStopDurationMillis(musicSmoothStopDurationMillis: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMusicSmoothStopDurationMillis() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMusicStaticCrossfadeDurationMillis(musicStaticCrossfadeDurationMillis: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMusicStaticCrossfadeDurationMillis() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMusicTracksVolume(musicTracksVolume: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMusicTracksVolume() : amDeviceSetting.am_general.AE_DeviceSetting;

    setVolumePercentFactorZoneLeft(volumePercentFactorZoneLeft: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getVolumePercentFactorZoneLeft() : amDeviceSetting.am_general.AE_DeviceSetting;

    setVolumePercentFactorZoneRight(volumePercentFactorZoneRight: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getVolumePercentFactorZoneRight() : amDeviceSetting.am_general.AE_DeviceSetting;

    setAudioPlayerType(audioPlayerType: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getAudioPlayerType() : amDeviceSetting.am_general.AE_DeviceSetting;

    setVolumeTracksVolumeZoneLeft(volumeTracksVolumeZoneLeft: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getVolumeTracksVolumeZoneLeft() : amDeviceSetting.am_general.AE_DeviceSetting;

    setVolumeTracksVolumeZoneRight(volumeTracksVolumeZoneRight: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getVolumeTracksVolumeZoneRight() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 