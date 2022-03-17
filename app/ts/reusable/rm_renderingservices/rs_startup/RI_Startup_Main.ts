import amStartupMain = require("../../../abstract/am_renderingservices/as_startup/AI_StartupMain");
import amGeneralError   = require("../../../abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../abstract/am_general/a_context/A_Context");

import amStartupSystemSettings = require("../../../abstract/am_general/ae_systemsettings/AE_SystemSettings");
import amStartupAudioSettings = require("../../../abstract/am_general/ae_systemsettings/AE_AudioSettings");
import amStartupVideoSettings = require("../../../abstract/am_general/ae_systemsettings/AE_VideoSettings");
import amStartupTimeSettings  = require("../../../abstract/am_general/ae_systemsettings/AE_TimeSettings");
import amStartupLanguageSettings = require("../../../abstract/am_general/ae_systemsettings/AE_LanguageSettings");
import amStartupSettings = require("../../../abstract/am_general/ae_systemsettings/AE_StartupSettings");

import amGeneralTimeZone          = require("../../../abstract/am_general/a_timezone/A_TimeZone");

import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");

import rmStartupService = require("./RS_Startup");

export module rm_renderingservices
{
  export class RI_StartupMain implements amStartupMain.am_renderingservices.AI_StartupMain
  {
    _name: string;    

    //----------- owner
    _owner: rmStartupService.rm_renderingservices.RS_StartupService;

    //----------- constructor 
    constructor(owner: rmStartupService.rm_renderingservices.RS_StartupService)  
    {
      this._owner = owner;  
    }

    public init(error : amGeneralError.am_general.A_Error) : void
    {
      this._owner.init(error);
    }

    public setSystemStartupSettings(aStartupSettings: amStartupSettings.am_general.AE_StartupSettings,
      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._owner.setSystemStartupSettings(aStartupSettings, error, context, callback);
    }

  }
} 