import amGeneral = require("../../am_general/i_interface/I_Interface");
import amGeneralError   = require("../../am_general/a_error/A_Error");
import amGeneralContext = require("../../am_general/a_context/A_Context");

import amStartupSystemSettings = require("../../am_general/ae_systemsettings/AE_SystemSettings");
import amStartupAudioSettings = require("../../am_general/ae_systemsettings/AE_AudioSettings");
import amStartupVideoSettings = require("../../am_general/ae_systemsettings/AE_VideoSettings");
import amStartupTimeSettings  = require("../../am_general/ae_systemsettings/AE_TimeSettings");
import amStartupLanguageSettings = require("../../am_general/ae_systemsettings/AE_LanguageSettings");
import amStartupSettings = require("../../am_general/ae_systemsettings/AE_StartupSettings");
import amGeneralTimeZone          = require("../../am_general/a_timezone/A_TimeZone");

import amGeneralPlaybackGlobalConfig = require("../../am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");

export module am_renderingservices
{
  export interface AI_StartupMain extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    init(error: amGeneralError.am_general.A_Error) : void;

    setSystemStartupSettings(aStartupSettings: amStartupSettings.am_general.AE_StartupSettings,
      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void;
  }
} 