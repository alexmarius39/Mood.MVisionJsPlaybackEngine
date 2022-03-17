import amGeneral = require("../../am_general/i_interface/I_Interface");
import amGeneralPlaybackGlobalConfig = require("../../am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralStartupSettings = require("../../am_general/ae_systemsettings/AE_StartupSettings");
import amTransversalServicesActivityLogService = require("../../am_transversalservices/as_activitylogservice/AS_ActivityLogService");

export module am_renderingservices
{
  export interface AI_StartupConfig extends amGeneral.am_general.I_Interface
  {
    _name: string; 
    
    getPlaybackGlobalConfig(): amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
    setPlaybackGlobalConfig(aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig): void;

    getDefaultStartupSettings() : amGeneralStartupSettings.am_general.AE_StartupSettings;
    setDefaultStartupSettings(aMonitoringSettings: amGeneralStartupSettings.am_general.AE_StartupSettings);

    getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;
    setActivityLogService(aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService);
  }
} 