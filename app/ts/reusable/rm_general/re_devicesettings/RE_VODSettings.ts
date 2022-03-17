import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amVODSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_VODSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_VODSettings extends rmEntity.rm_general.R_Entity
                              implements amVODSettings.am_general.AE_VODSettings
  {
    _hintEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _mediaFrameBgColor: amDeviceSetting.am_general.AE_DeviceSetting;
    _mediaFrameFocusBgColor: amDeviceSetting.am_general.AE_DeviceSetting;
    _mediaListZoneFrameLandscape: amDeviceSetting.am_general.AE_DeviceSetting;
    _mediaListZoneFramePortrait: amDeviceSetting.am_general.AE_DeviceSetting;
    _mediaTitleTextColorFocused: amDeviceSetting.am_general.AE_DeviceSetting;
    _mediaTitleTextColor: amDeviceSetting.am_general.AE_DeviceSetting;
    _timeoutIntervalSecs: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._hintEnabled                 = null;
      this._mediaFrameBgColor           = null;
      this._mediaFrameFocusBgColor      = null;
      this._mediaListZoneFrameLandscape = null;
      this._mediaListZoneFramePortrait  = null;
      this._mediaTitleTextColorFocused  = null;
      this._mediaTitleTextColor         = null;
      this._timeoutIntervalSecs         = null;
    }

    public setHintEnabled(hintEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._hintEnabled = hintEnabled;
    }
    public getHintEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._hintEnabled;
    }

    public setMediaFrameBgColor(mediaFrameBgColor: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._mediaFrameBgColor = mediaFrameBgColor;
    }
    public getMediaFrameBgColor() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._mediaFrameBgColor;
    }

    public setMediaFrameFocusBgColor(mediaFrameFocusBgColor: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._mediaFrameFocusBgColor = mediaFrameFocusBgColor;
    }
    public getMediaFrameFocusBgColor() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._mediaFrameFocusBgColor;
    }

    public setMediaListZoneFrameLandscape(mediaListZoneFrameLandscape: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._mediaListZoneFrameLandscape = mediaListZoneFrameLandscape;
    }
    public getMediaListZoneFrameLandscape() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._mediaListZoneFrameLandscape;
    }

    public setMediaListZoneFramePortrait(mediaListZoneFramePortrait: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._mediaListZoneFramePortrait = mediaListZoneFramePortrait;
    }
    public getMediaListZoneFramePortrait() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._mediaListZoneFramePortrait;
    }

    public setMediaTitleTextColorFocused(mediaTitleTextColorFocused: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._mediaTitleTextColorFocused = mediaTitleTextColorFocused;
    }
    public getMediaTitleTextColorFocused() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._mediaTitleTextColorFocused;
    }
    
    public setMediaTitleTextColor(mediaTitleTextColor: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._mediaTitleTextColor = mediaTitleTextColor;
    }
    public getMediaTitleTextColor() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._mediaTitleTextColor;
    }

    public setTimeoutIntervalSecs(timeoutIntervalSecs: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._timeoutIntervalSecs = timeoutIntervalSecs;
    }
    public getTimeoutIntervalSecs() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._timeoutIntervalSecs;
    }
  }
} 