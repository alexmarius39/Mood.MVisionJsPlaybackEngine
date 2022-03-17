import amTestService        = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AS_TestService");
import amITestServiceMain   = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AI_TestServiceMain");
import amITestServiceConfig = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AI_TestServiceConfig");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amTestConfig           = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AE_TestConfiguration");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");


import rmRenderingServices     = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");

import rmITestServiceMain    = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice/RI_TestServiceMain");
import rmITestServiceConfig  = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice/RI_TestServiceConfig");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

//=========================================================================================================
export module rm_renderingservices
{
  export class RS_TestService extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                              implements amTestService.am_renderingservices.AS_TestService
  {
    //---------- interfaces
    _iTestServiceMain   : amITestServiceMain.am_renderingservices.AI_TestServiceMain ;
    _iTestServiceConfig : amITestServiceConfig.am_renderingservices.AI_TestServiceConfig;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    _aPlaybackGlobalConfig : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;

    _aActivityLogService   : amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;

    _aTestConfiguration    : amTestConfig.am_renderingservices.AE_TestConfiguration;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iTestServiceMain   = new rmITestServiceMain.rm_renderingservices.RI_TestServiceMain(this) ;
      this._iTestServiceConfig = new rmITestServiceConfig.rm_renderingservices.RI_TestServiceConfig(this) ;

      this._aLogService = aLogService;

      this._aPlaybackGlobalConfig = null;
      this._aActivityLogService   = null;
      this._aTestConfiguration    = null;
    }

    //=========================================
    //  implementation of config interface
    //=========================================

    //-----------------------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
    }
    //-----------------------------------------
    public getPlaybackGlobalConfig() : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._aPlaybackGlobalConfig;
    }

    //-----------------------------------------
    public setTestConfig(aTestConfiguration: amTestConfig.am_renderingservices.AE_TestConfiguration)
    {
      this._aTestConfiguration = aTestConfiguration;
    }
    //-----------------------------------------
    public getTestConfig() : amTestConfig.am_renderingservices.AE_TestConfiguration
    {
      return this._aTestConfiguration;
    }

    //-----------------------------------------
    public setActivityLogService( aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      this._aActivityLogService = aActivityLogService;
    }
    //--------------------------------------------
    public getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._aActivityLogService;
    }
    

    //=========================================
    //  implementation of main interface
    //=========================================

    // sleep time expects milliseconds
    public sleep (time) 
    {
      return new Promise((resolve) => setTimeout(resolve, time));
    }

    //--------------------------------------------------
    public test(iteration : number, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      if (iteration > 3)
      {
        if (callback != null)
        {
          context.setObject2Result(this);
          return callback(context) ;
        }
        return ;
      }

      console.log(this._iService.getServiceName() + " instance: " + this._iService.getInstanceName() + "  iteration:" + iteration);
    
      if (this._interruptCallback != null)
      {
        return this._interruptCallback();
      }

      // Usage!
      this.sleep(2000).then(() => {
              this.test(++iteration, error, context, callback);
      });
      
    }
    
    //-----------------------------
    public run(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._iServiceRun.setServiceStatus("status_playlist_changed");
      this.test(0, error, context,callback);      
    }


    //-----------------------------
    public shutdown(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      //console.log(this._iService.getServiceName() + " instance: " + this._iService.getInstanceName() + "  - shutdown by interruption");
      //------------------ end 
      if (callback != null)
      {
        //context.setError(error);
        //context.setBoolResult(true);
        return callback(context);  
      }
    }
    
    
  }
} 