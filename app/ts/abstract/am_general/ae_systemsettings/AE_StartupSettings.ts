import amEntity = require("../a_entity/A_Entity");

import amStartupSystemSettings        = require("./AE_SystemSettings");
import amStartupAudioSettings         = require("./AE_AudioSettings");
import amStartupVideoSettings         = require("./AE_VideoSettings");
import amStartupTimeSettings          = require("./AE_TimeSettings");
import amStartupLanguageSettings      = require("./AE_LanguageSettings");

export module am_general
{
  export interface AE_StartupSettings extends amEntity.am_general.A_Entity
  {
    getSystemSettings() : amStartupSystemSettings.am_general.AE_SystemSettings;
    setSystemSettings(systemSettings: amStartupSystemSettings.am_general.AE_SystemSettings) : void;

    getAudioSettings() : amStartupAudioSettings.am_general.AE_AudioSettings;
    setAudioSettings(audioSettings: amStartupAudioSettings.am_general.AE_AudioSettings) : void;

    getVideoSettings() : amStartupVideoSettings.am_general.AE_VideoSettings;
    setVideoSettings(videoSettings: amStartupVideoSettings.am_general.AE_VideoSettings) : void;

    getTimeSettings() : amStartupTimeSettings.am_general.AE_TimeSettings;
    setTimeSettings(timeSettings: amStartupTimeSettings.am_general.AE_TimeSettings) : void;

    getLanguageSettings() : amStartupLanguageSettings.am_general.AE_LanguageSettings;
    setLanguageSettings(languageSettings: amStartupLanguageSettings.am_general.AE_LanguageSettings) : void;
  }
} 