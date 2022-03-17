import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_rebootservice/AI_RebootServiceConfig");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_rebootservice/RS_RebootService");
                                                     
import amPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
//import amTestConfig           = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AE_TestConfiguration");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
                                                     

export module rm_nonrenderingservices
{
  export class RI_RebootServiceConfig implements amNonRenderingServices.am_nonrenderingservices.AI_RebootServiceConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.RS_RebootService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.RS_RebootService)  
    {
      this._owner = owner;  
    }

    //-----------------------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    }
    //-----------------------------------------
    public getPlaybackGlobalConfig() : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._owner.getPlaybackGlobalConfig();
    }

    /*
    //-----------------------------------------
    public setTestConfig(aCronConfiguration: amTestConfig.am_renderingservices.AE_TestConfiguration)
    {
      return this._owner.setTestConfig(aCronConfiguration);
    }
    //-----------------------------------------
    public getTestConfig() : amTestConfig.am_renderingservices.AE_TestConfiguration
    {
      return this._owner.getTestConfig();
    }
    */
   
    //-----------------------------------------
    public setActivityLogService( aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      return this._owner.setActivityLogService(aActivityLogService);
    }
    //--------------------------------------------
    public getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._owner.getActivityLogService();
    }


  }
} 