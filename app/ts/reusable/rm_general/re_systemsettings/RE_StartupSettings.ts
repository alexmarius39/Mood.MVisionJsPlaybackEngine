import amStartupSystemSettings        = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_SystemSettings");
import amStartupAudioSettings         = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_AudioSettings");
import amStartupVideoSettings         = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_VideoSettings");
import amStartupTimeSettings          = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_TimeSettings");
import amStartupLanguageSettings      = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_LanguageSettings");
import amStartupSettings              = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_StartupSettings");

import rmEntity = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_StartupSettings extends rmEntity.rm_general.R_Entity
                                implements amStartupSettings.am_general.AE_StartupSettings
  {
    _systemSettings: amStartupSystemSettings.am_general.AE_SystemSettings;
    _audioSettings: amStartupAudioSettings.am_general.AE_AudioSettings;
    _videoSettings: amStartupVideoSettings.am_general.AE_VideoSettings;
    _timeSettings: amStartupTimeSettings.am_general.AE_TimeSettings;
    _languageSettings: amStartupLanguageSettings.am_general.AE_LanguageSettings;

    constructor()
    {
      super();

      this._systemSettings = null;
      this._audioSettings = null;
      this._videoSettings = null;
      this._timeSettings = null;
      this._languageSettings = null;
    }

    public getSystemSettings() : amStartupSystemSettings.am_general.AE_SystemSettings
    {
      return this._systemSettings;
    }
    public setSystemSettings(systemSettings: amStartupSystemSettings.am_general.AE_SystemSettings) : void
    {
      this._systemSettings = systemSettings;
    }

    public getAudioSettings() : amStartupAudioSettings.am_general.AE_AudioSettings
    {
      return this._audioSettings;
    }
    public setAudioSettings(audioSettings: amStartupAudioSettings.am_general.AE_AudioSettings) : void
    {
      this._audioSettings = audioSettings;
    }

    public getVideoSettings() : amStartupVideoSettings.am_general.AE_VideoSettings
    {
      return this._videoSettings;
    }
    public setVideoSettings(videoSettings: amStartupVideoSettings.am_general.AE_VideoSettings) : void
    {
      this._videoSettings = videoSettings;
    }

    public getTimeSettings() : amStartupTimeSettings.am_general.AE_TimeSettings
    {
      return this._timeSettings;
    }
    public setTimeSettings(timeSettings: amStartupTimeSettings.am_general.AE_TimeSettings) : void
    {
      this._timeSettings = timeSettings;
    }

    public getLanguageSettings() : amStartupLanguageSettings.am_general.AE_LanguageSettings
    {
      return this._languageSettings;
    }
    public setLanguageSettings(languageSettings: amStartupLanguageSettings.am_general.AE_LanguageSettings) : void
    {
      this._languageSettings = languageSettings;
    }
  }
} 