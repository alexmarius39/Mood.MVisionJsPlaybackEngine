import amSettingsSyncConfig   = require("../../../abstract/am_nonrenderingservices/as_settingssync/I_SettingsSyncConfig");
import amPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amActivityLogService   = require("../../../abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
import amFileSettingsUpdate   = require("../../../abstract/am_nonrenderingservices/as_filesettingsupdate/AS_FileSettingsUpdate");

import amSetttingsSync                      = require("../../../abstract/am_general/ae_devicesettings/AE_SettingsSync");
import amServerDeviceSettingsConfiguration  = require("../../../abstract/am_nonrenderingservices/as_settingssync/AE_ServerDeviceSettingsConfiguration");

import rmSettingsSync   = require("./RS_SettingsSync");

export module rm_nonrenderingservices
{
  export class RI_SettingsSyncConfig implements amSettingsSyncConfig.am_nonrenderingservices.AI_SettingsSyncConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmSettingsSync.rm_nonrenderingservices.RS_SettingsSyncService;

    //----------- constructor 
    constructor(owner: rmSettingsSync.rm_nonrenderingservices.RS_SettingsSyncService)  
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

    //----------------------------
    public getDefaultSettingsSync() : amSetttingsSync.am_general.AE_SettingsSync
    {
      return this._owner.getDefaultSettingsSync();
    }

    //----------------------------
    public setDefaultSettingsSync(aSettingsSync: amSetttingsSync.am_general.AE_SettingsSync)
    {
      this._owner.setDefaultSettingsSync(aSettingsSync);
    }

    //----------------------------
    public getDefaultServerDeviceSettingsConfiguration(): amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration
    {
      return this._owner.getDefaultServerDeviceSettingsConfiguration();
    }
    //----------------------------
    public setDefaultServerDeviceSettingsConfiguration(aServerDeviceSettingsConfiguration: amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration): void
    {
      this._owner.setDefaultServerDeviceSettingsConfiguration(aServerDeviceSettingsConfiguration);
    }

    //-----------------------------
    public getActivityLogService(): amActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._owner.getActivityLogService();
    }
    
    //-----------------------------
    public setActivityLogService( aActivityLogService: amActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      return this._owner.setActivityLogService(aActivityLogService);
    }

    //-----------------------------
    public getFileSettingsUpdate(): amFileSettingsUpdate.am_nonrenderingservices.AS_FileSettingsUpdate
    {
      return this._owner.getFileSettingsUpdate();
    }

    //-----------------------------
    public setFileSettingsUpdate(aFileSettingsUpdate: amFileSettingsUpdate.am_nonrenderingservices.AS_FileSettingsUpdate)
    {
      return this._owner.setFileSettingsUpdate(aFileSettingsUpdate);
    }
  }
} 