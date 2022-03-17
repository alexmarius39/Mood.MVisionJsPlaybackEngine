import amGeneral = require("../../am_general/i_interface/I_Interface");
import amPlaybackGlobalConfig = require("../../am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amTransversalServicesActivityLogService = require("../../../abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
import amFileSettingsUpdate = require("../../../abstract/am_nonrenderingservices/as_filesettingsupdate/AS_FileSettingsUpdate");

import amSetttingsSync                      = require("../../am_general/ae_devicesettings/AE_SettingsSync");
import amServerDeviceSettingsConfiguration  = require("./AE_ServerDeviceSettingsConfiguration");

export module am_nonrenderingservices
{
  export interface AI_SettingsSyncConfig extends amGeneral.am_general.I_Interface
  {
    _name: string; 
    
    getPlaybackGlobalConfig() : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
    setPlaybackGlobalConfig( aPlaybackGlobalConfig: amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig);

    getDefaultSettingsSync() : amSetttingsSync.am_general.AE_SettingsSync;
    setDefaultSettingsSync(aSettingsSync: amSetttingsSync.am_general.AE_SettingsSync);

    getDefaultServerDeviceSettingsConfiguration(): amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration;
    setDefaultServerDeviceSettingsConfiguration(aServerDeviceSettingsConfiguration: amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration): void;

    getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;
    setActivityLogService(aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService);

    getFileSettingsUpdate(): amFileSettingsUpdate.am_nonrenderingservices.AS_FileSettingsUpdate;
    setFileSettingsUpdate(aFileSettingsUpdate: amFileSettingsUpdate.am_nonrenderingservices.AS_FileSettingsUpdate);
  }
} 