import amGeneral = require("../../am_general/i_interface/I_Interface");
import amGeneralPlaybackGlobalConfig = require("../../am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralScreenshotOptions = require("../../am_general/ae_screenshotoptions/AE_ScreenshotOptions");
import amTransversalServicesActivityLogService = require("../../am_transversalservices/as_activitylogservice/AS_ActivityLogService");


export module am_renderingservices
{
  export interface AI_ScreenshotConfig extends amGeneral.am_general.I_Interface
  {
    _name: string; 
    
    getPlaybackGlobalConfig(): amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
    setPlaybackGlobalConfig(aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig): void;

    getDefaultScreenshotOptions(): amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions;
    setDefaultScreenshotOptions(aScreenshotOptions: amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions): void;

    getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;
    setActivityLogService(aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService);
  }
} 