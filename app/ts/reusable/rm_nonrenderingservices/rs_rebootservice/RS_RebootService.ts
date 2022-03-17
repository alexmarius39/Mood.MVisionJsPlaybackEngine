import amNonRenderingServices  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_rebootservice/AS_RebootService");
import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_rebootservice/AI_RebootServiceRun");
import amNonRenderingServices3 = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_rebootservice/AI_RebootServiceConfig");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext                        = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralPowerProperties                = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");

import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import rmNonRenderingServices     = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/R_NonRenderingService");
import rmNonRenderingServices2    = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_rebootservice/RI_RebootServiceRun");
import rmNonRenderingServices3    = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_rebootservice/RI_RebootServiceConfig");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amConfigurationServicesServiceLocator   = require("../../../abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");


import amPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amTestConfig           = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AE_TestConfiguration");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");




export module rm_nonrenderingservices
{
  export class RS_RebootService extends rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService 
                                implements amNonRenderingServices.am_nonrenderingservices.AS_RebootService
  {
    //---------- interfaces
    _iRebootServiceRun     : amNonRenderingServices2.am_nonrenderingservices.AI_RebootServiceRun ;
    _iRebootServiceConfig  : amNonRenderingServices3.am_nonrenderingservices.AI_RebootServiceConfig ;

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

      this._iRebootServiceRun    = new rmNonRenderingServices2.rm_nonrenderingservices.RI_RebootServiceRun(this) ;
      this._iRebootServiceConfig = new rmNonRenderingServices3.rm_nonrenderingservices.RI_RebootServiceConfig(this) ;

      this._aLogService = aLogService;
  
  
      this._aPlaybackGlobalConfig = null;
      this._aActivityLogService   = null;
      //this._aTestConfiguration    = null;
    }


    //------------------------------
    public injectDependencies( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                               error : amGeneralError.am_general.A_Error) : number     
 
    {
      this._aServiceLocator    = aServiceLocator; //;<amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator>this._aServiceContainer._iServiceManager.getServiceByAbstractName("A_ServiceLocator", null, error);
      return 0;

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

    /*
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
    */

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
       //this.test(0, error, context,callback);  
       var self = this; 
       var iteration = 1;
       console.log(this._iService.getServiceName() + " instance: " + this._iService.getInstanceName() + "  iteration:" + iteration);

       const aPowerProperties: amGeneralPowerProperties.am_general.A_PowerProperties = self._aServiceLocator._iEntityCreation.createDefaultPowerProperties(error);
       aPowerProperties.setPowerCommand("reboot");
 
       const errorExecPowerCmd:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
       const contextExecPowerCmd:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
       var callbackReboot = function callbackReboot()
       { 
       }
       contextExecPowerCmd.setRemoteCallback(true);
       if (self._aPlaybackGlobalConfig._realPlatform == "tizen")
        self._aSDKService._iSDKPowerSetup.executePowerCommand(aPowerProperties, errorExecPowerCmd, contextExecPowerCmd, callbackReboot);
      else
        callbackReboot();
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