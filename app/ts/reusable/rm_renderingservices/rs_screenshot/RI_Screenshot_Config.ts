import amScreenshotConfig = require("../../../abstract/am_renderingservices/as_screenshot/AI_ScreenshotConfig");

import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralScreenshotOptions = require("../../../abstract/am_general/ae_screenshotoptions/AE_ScreenshotOptions");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");


import rmScreenshotService = require("./RS_Screenshot");

export module rm_renderingservices
{
  export class RI_ScreenshotConfig implements amScreenshotConfig.am_renderingservices.AI_ScreenshotConfig
  {
    _name: string; 
    
    //----------- owner
    _owner: rmScreenshotService.rm_renderingservices.RS_ScreenshotService;

    //----------- constructor 
    constructor(owner: rmScreenshotService.rm_renderingservices.RS_ScreenshotService)  
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

    public setDefaultScreenshotOptions(aScreenshotOptions: amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions): void
    {
      this._owner.setDefaultScreenshotOptions(aScreenshotOptions);
    }

    public getDefaultScreenshotOptions(): amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions
    {
      return this._owner.getDefaultScreenshotOptions();
    }

    public setActivityLogService( aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      return this._owner.setActivityLogService(aActivityLogService);
    }

    //-----------------------------
    public getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._owner.getActivityLogService();
    }
  }
} 