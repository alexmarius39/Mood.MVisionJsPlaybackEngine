import amStartupConfig = require("../../../abstract/am_renderingservices/as_startup/AI_StartupConfig");

import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralStartupSettings = require("../../../abstract/am_general/ae_systemsettings/AE_StartupSettings");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import rmStartupService = require("./RS_Startup");

export module rm_renderingservices
{
  export class RI_StartupConfig implements amStartupConfig.am_renderingservices.AI_StartupConfig
  {
    _name: string; 
    
    //----------- owner
    _owner: rmStartupService.rm_renderingservices.RS_StartupService;

    //----------- constructor 
    constructor(owner: rmStartupService.rm_renderingservices.RS_StartupService)  
    {
      this._owner = owner;  
    }
    
    public setPlaybackGlobalConfig(aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig): void
    {
      this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    }

    public getPlaybackGlobalConfig(): amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._owner.getPlaybackGlobalConfig();
    }

    public getDefaultStartupSettings() : amGeneralStartupSettings.am_general.AE_StartupSettings
    {
      return this._owner.getDefaultStartupSettings();
    }
    public setDefaultStartupSettings(aStartupSettings: amGeneralStartupSettings.am_general.AE_StartupSettings)
    {
      this._owner.setDefaultStartupSettings(aStartupSettings);
    }

    //-----------------------------
    public getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._owner.getActivityLogService();
    }
    
    public setActivityLogService( aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      return this._owner.setActivityLogService(aActivityLogService);
    }
    
  }
} 