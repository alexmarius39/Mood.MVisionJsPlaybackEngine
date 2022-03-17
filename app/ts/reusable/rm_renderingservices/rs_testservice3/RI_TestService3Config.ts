import amITestService3Config = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice3/AI_TestService3Config");

import amPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amTestConfig           = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AE_TestConfiguration");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice3/RS_TestService3");
                                                     
//==================================================================                                                                                                          
export module rm_renderingservices
{
  export class RI_TestService3Config implements amITestService3Config.am_renderingservices.AI_TestService3Config
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.RS_TestService3;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.RS_TestService3)  
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