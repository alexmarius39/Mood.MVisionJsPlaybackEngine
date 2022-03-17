
import amAIFileSettingsUpdateConfig = require("../../../abstract/am_nonrenderingservices/as_filesettingsupdate/AI_FileSettingsUpdateConfig");

import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralFileInfo             = require("../../../abstract/am_general/a_fileinfo/A_FileInfo");

import rmNonrenderingServicesFileSettingsUpdate = require("../rs_filesettingsupdate/RS_FileSettingsUpdate");
import amTransversalServicesActivityLogService = require("../../../abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

                                                     

export module rm_nonrenderingservices
{
  export class RI_FileSettingsUpdateConfig_R implements  amAIFileSettingsUpdateConfig.am_nonrenderingservices.AI_FileSettingsUpdateConfig
  {
    
    _name: string;    

    //----------- owner
    _owner: rmNonrenderingServicesFileSettingsUpdate.rm_nonrenderingservices.RS_FileSettingsUpdate;

    //----------- constructor 
    constructor(owner: rmNonrenderingServicesFileSettingsUpdate.rm_nonrenderingservices.RS_FileSettingsUpdate)  
    {
      this._owner = owner;  
    }


    //--------------------------------------
    // set / get playlist controller config
    //---------------------------------------

    //----------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    }

    //-----------------------------
    public getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._owner.getPlaybackGlobalConfig();
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

    //-----------------------------
    public getMainDebugParamAsBoolean(): boolean
    {
      return this._owner.getMainDebugParamAsBoolean();
    }
    
    //-----------------------------
    public getAppServerBaseUrl(): string
    {
      return this._owner.getAppServerBaseUrl();
    }

    //-----------------------------
    public getAppServerBasePath(): string
    {
      return this._owner.getAppServerBasePath();
    }

  }
} 