import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
import amGeneralCronConfig = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AE_CronConfiguration");
import amMonitoring  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_monitoring/AS_Monitoring");

export module am_nonrenderingservices
{
  export interface AI_CronServiceConfig extends amGeneral.am_general.I_Interface
  {
    _name: string; 
    
    setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig);
    getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;

    setCronConfig(aCronConfiguration: amGeneralCronConfig.am_nonrenderingservices.AE_CronConfiguration);
    getCronConfig() : amGeneralCronConfig.am_nonrenderingservices.AE_CronConfiguration;

    setActivityLogService(aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService);
    getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;

    setMonitoringService(monitoringService: amMonitoring.am_nonrenderingservices.AS_MonitoringService);
    getMonitoringService() : amMonitoring.am_nonrenderingservices.AS_MonitoringService;
  }
} 