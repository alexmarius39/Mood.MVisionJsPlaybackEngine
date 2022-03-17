import amGeneral = require("../../am_general/i_interface/I_Interface");
import amPlaybackGlobalConfig = require("../../am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amActivityLogService = require("../../am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import amVolumeSetup           = require("../../../abstract/am_nonrenderingservices/as_volumesetup/AS_VolumeSetup");
import amMonitoringService     = require("../../../abstract/am_nonrenderingservices/as_monitoring/AS_Monitoring");
import amSettingsSyncService   = require("../../../abstract/am_nonrenderingservices/as_settingssync/AS_SettingsSync");

import amLiveCommandsSettings = require("../../am_general/ae_livecommands/AE_LiveCommandsSettings");

export module am_nonrenderingservices
{
  export interface AI_LiveCommandsConfig extends amGeneral.am_general.I_Interface
  {
    _name: string; 
    
    getPlaybackGlobalConfig() : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
    setPlaybackGlobalConfig( aPlaybackGlobalConfig: amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig);

    getDefaultLiveCommandsSettings() : amLiveCommandsSettings.am_general.AE_LiveCommandsSettings;
    setDefaultLiveCommandsSettings(aLiveCommandsSettings: amLiveCommandsSettings.am_general.AE_LiveCommandsSettings);

    getActivityLogService(): amActivityLogService.am_transversalservices.AS_ActivityLogService;
    setActivityLogService(aActivityLogService: amActivityLogService.am_transversalservices.AS_ActivityLogService);

    getVolumeSetupService(): amVolumeSetup.am_nonrenderingservices.AS_VolumeSetupService;
    setVolumeSetupService(aVolumeSetupService: amVolumeSetup.am_nonrenderingservices.AS_VolumeSetupService);

    getMonitoringService(): amMonitoringService.am_nonrenderingservices.AS_MonitoringService;
    setMonitoringService(aMonitoringService: amMonitoringService.am_nonrenderingservices.AS_MonitoringService);

    getSettingsSyncService(): amSettingsSyncService.am_nonrenderingservices.A_SettingsSyncService;
    setSettingsSyncService(aSettingsSyncService: amSettingsSyncService.am_nonrenderingservices.A_SettingsSyncService);
  }
} 