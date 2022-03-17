
import amLiveCommandsServiceConfig = require("../../../abstract/am_nonrenderingservices/as_livecommands/AI_LiveCommandsConfig");
import amPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
import amLiveCommandsSettings = require("../../../abstract/am_general/ae_livecommands/AE_LiveCommandsSettings");

import amVolumeSetup           = require("../../../abstract/am_nonrenderingservices/as_volumesetup/AS_VolumeSetup");
import amMonitoringService     = require("../../../abstract/am_nonrenderingservices/as_monitoring/AS_Monitoring");
import amSettingsSyncService   = require("../../../abstract/am_nonrenderingservices/as_settingssync/AS_SettingsSync");

import rmLiveCommandsService = require("./RS_LiveCommands");

export module rm_nonrenderingservices
{
  export class RI_LiveCommandsConfig implements amLiveCommandsServiceConfig.am_nonrenderingservices.AI_LiveCommandsConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmLiveCommandsService.rm_nonrenderingservices.RS_LiveCommandsService;

    //----------- constructor 
    constructor(owner: rmLiveCommandsService.rm_nonrenderingservices.RS_LiveCommandsService)  
    {
      this._owner = owner;  
    }

    //--------------------------------------
    // set / get playlist controller config
    //---------------------------------------

    //-----------------------------
    public getPlaybackGlobalConfig() : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._owner.getPlaybackGlobalConfig();
    }

    //----------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    }

    //-----------------------------
    public getDefaultLiveCommandsSettings() : amLiveCommandsSettings.am_general.AE_LiveCommandsSettings
    {
      return this._owner.getDefaultLiveCommandsSettings();
    }
    
    //-----------------------------
    public setDefaultLiveCommandsSettings(aLiveCommandsSettings: amLiveCommandsSettings.am_general.AE_LiveCommandsSettings)
    {
      this._owner.setDefaultLiveCommandsSettings(aLiveCommandsSettings);
    }

    //-----------------------------
    public getActivityLogService(): amActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._owner.getActivityLogService();
    }
    
    public setActivityLogService( aActivityLogService: amActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      return this._owner.setActivityLogService(aActivityLogService);
    }

    public getVolumeSetupService(): amVolumeSetup.am_nonrenderingservices.AS_VolumeSetupService
    {
      return this._owner.getVolumeSetupService();
    }
    public setVolumeSetupService(aVolumeSetupService: amVolumeSetup.am_nonrenderingservices.AS_VolumeSetupService)
    {
      this._owner.setVolumeSetupService(aVolumeSetupService);
    }

    public getMonitoringService(): amMonitoringService.am_nonrenderingservices.AS_MonitoringService
    {
      return this._owner.getMonitoringService();
    }
    public setMonitoringService(aMonitoringService: amMonitoringService.am_nonrenderingservices.AS_MonitoringService)
    {
      this._owner.setMonitoringService(aMonitoringService);
    }

    public getSettingsSyncService(): amSettingsSyncService.am_nonrenderingservices.A_SettingsSyncService
    {
      return this._owner.getSettingsSyncService();
    }
    public setSettingsSyncService(aSettingsSyncService: amSettingsSyncService.am_nonrenderingservices.A_SettingsSyncService)
    {
      this._owner.setSettingsSyncService(aSettingsSyncService);
    }

  }
} 