import amGeneral = require("../../am_general/i_interface/I_Interface");
import amGeneralPlaybackGlobalConfig = require("../../am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amActivityLogService = require("../../am_transversalservices/as_activitylogservice/AS_ActivityLogService");
import amScreenshot = require("../../am_renderingservices/as_screenshot/AS_Screenshot");

import amGeneralMonitoringSettings = require("../../am_general/ae_monitoringsettings/AE_MonitoringSettings");

export module am_nonrenderingservices
{
  export interface AI_MonitoringConfig extends amGeneral.am_general.I_Interface
  {
    _name: string; 
    
    getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
    setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig);

    getDefaultMonitoringSettings() : amGeneralMonitoringSettings.am_general.AE_MonitoringSettings;
    setDefaultMonitoringSettings(aMonitoringSettings: amGeneralMonitoringSettings.am_general.AE_MonitoringSettings);

    getActivityLogService(): amActivityLogService.am_transversalservices.AS_ActivityLogService;
    setActivityLogService(aActivityLogService: amActivityLogService.am_transversalservices.AS_ActivityLogService);

    getScreeshotService(): amScreenshot.am_renderingservices.AS_ScreenshotService;
    setScreenshotService(aScreenshot: amScreenshot.am_renderingservices.AS_ScreenshotService);
  }
} 