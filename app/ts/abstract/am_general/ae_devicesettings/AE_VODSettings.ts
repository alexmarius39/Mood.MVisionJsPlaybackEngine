import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_VODSettings extends amEntity.am_general.A_Entity
  {
    setHintEnabled(hintEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getHintEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMediaFrameBgColor(mediaFrameBgColor: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMediaFrameBgColor() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMediaFrameFocusBgColor(mediaFrameFocusBgColor: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMediaFrameFocusBgColor() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMediaListZoneFrameLandscape(mediaListZoneFrameLandscape: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMediaListZoneFrameLandscape() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMediaListZoneFramePortrait(mediaListZoneFramePortrait: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMediaListZoneFramePortrait() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMediaTitleTextColorFocused(mediaTitleTextColorFocused: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMediaTitleTextColorFocused() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setMediaTitleTextColor(mediaTitleTextColor: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMediaTitleTextColor() : amDeviceSetting.am_general.AE_DeviceSetting;

    setTimeoutIntervalSecs(timeoutIntervalSecs: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getTimeoutIntervalSecs() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 