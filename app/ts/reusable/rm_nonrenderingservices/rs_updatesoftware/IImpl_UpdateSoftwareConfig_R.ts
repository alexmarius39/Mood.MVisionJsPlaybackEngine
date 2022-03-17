
import amIUpdateSoftwareConfig = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_updatesoftware/I_UpdateSoftwareConfig");

import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralFileInfo             = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import rmCoreServicesUpdateSoftware = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_updatesoftware/RS_UpdateSoftware");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

                                                     

export module rm_nonrenderingservices
{
  export class IImpl_UpdateSoftwareConfig_R implements  amIUpdateSoftwareConfig.am_nonrenderingservices.I_UpdateSoftwareConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesUpdateSoftware.rm_nonrenderingservices.RS_UpdateSoftware;

    //----------- constructor 
    constructor(owner: rmCoreServicesUpdateSoftware.rm_nonrenderingservices.RS_UpdateSoftware)  
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
  }
} 