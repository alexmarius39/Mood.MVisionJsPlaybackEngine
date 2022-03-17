import amTestService3        = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice3/AS_TestService3");
import amITestService3Main   = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice3/AI_TestService3Main");
import amITestService3Config = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice3/AI_TestService3Config");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amTestConfig           = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AE_TestConfiguration");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");


import rmRenderingServices     = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");

import rmITestService3Main    = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice3/RI_TestService3Main");
import rmITestService3Config  = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice3/RI_TestService3Config");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

//=========================================================================================================
export module rm_renderingservices
{
  export class RS_TestService3 extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                               implements amTestService3.am_renderingservices.AS_TestService3
  {
    //---------- interfaces
    _iTestService3Main   : amITestService3Main.am_renderingservices.AI_TestService3Main ;
    _iTestService3Config : amITestService3Config.am_renderingservices.AI_TestService3Config;

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

      this._iTestService3Main   = new rmITestService3Main.rm_renderingservices.RI_TestService3Main(this) ;
      this._iTestService3Config = new rmITestService3Config.rm_renderingservices.RI_TestService3Config(this) ;

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
        //console.log(this._iService.getServiceName() + " instance: " + this._iService.getInstanceName() + "  - shutdown");
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