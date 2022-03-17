
import amVolumeSetupConfig = require("../../../abstract/am_nonrenderingservices/as_volumesetup/AI_VolumeSetupConfig");
import amActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import rmVolumeSetupService = require("./RS_VolumeSetup");

export module rm_nonrenderingservices
{
  export class RI_MonitoringConfig implements amVolumeSetupConfig.am_nonrenderingservices.AI_VolumeSetupConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmVolumeSetupService.rm_nonrenderingservices.RS_VolumeSetupService;

    //----------- constructor 
    constructor(owner: rmVolumeSetupService.rm_nonrenderingservices.RS_VolumeSetupService)  
    {
      this._owner = owner;  
    }

    //--------------------------------------
    // set / get playlist controller config
    //---------------------------------------

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

  }
} 