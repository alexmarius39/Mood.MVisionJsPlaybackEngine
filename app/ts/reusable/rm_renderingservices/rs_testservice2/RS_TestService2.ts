import amTestService2        = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice2/AS_TestService2");
import amITestService2Main   = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice2/AI_TestService2Main");
import amITestService2Config = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice2/AI_TestService2Config");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amTestConfig           = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AE_TestConfiguration");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");


import rmRenderingServices     = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");

import rmITestService2Main    = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice2/RI_TestService2Main");
import rmITestService2Config  = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice2/RI_TestService2Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

//=========================================================================================================
export module rm_renderingservices
{
  export class RS_TestService2 extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                               implements amTestService2.am_renderingservices.AS_TestService2
  {
    static _serviceInstance = 0;
    //---------- interfaces
    _iTestService2Main   : amITestService2Main.am_renderingservices.AI_TestService2Main ;
    _iTestService2Config : amITestService2Config.am_renderingservices.AI_TestService2Config;

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

      this._iTestService2Main   = new rmITestService2Main.rm_renderingservices.RI_TestService2Main(this) ;
      this._iTestService2Config = new rmITestService2Config.rm_renderingservices.RI_TestService2Config(this) ;

      this._aLogService = aLogService;

      this._aPlaybackGlobalConfig = null;
      this._aActivityLogService   = null;
      this._aTestConfiguration    = null;

      RS_TestService2._serviceInstance++;
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
      if (iteration > 8)
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