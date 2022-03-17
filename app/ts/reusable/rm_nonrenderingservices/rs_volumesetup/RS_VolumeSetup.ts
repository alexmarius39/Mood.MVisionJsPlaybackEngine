import amVolumeSetupServices  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_volumesetup/AS_VolumeSetup");

import amVolumeSetupServiceMain = require("../../../abstract/am_nonrenderingservices/as_volumesetup/AI_VolumeSetupMain");
import amVolumeSetupServiceConfig = require("../../../abstract/am_nonrenderingservices/as_volumesetup/AI_VolumeSetupConfig")

import amActivityLogMessageTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");
import amActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import amSDKService   = require("../../../abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amUtilsService = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");

import amError              = require("../../../abstract/am_general/a_error/A_Error");
import amContext            = require("../../../abstract/am_general/a_context/A_Context");
import amFactoryDescription = require("../../../abstract/am_general/a_factorydescription/A_FactoryDescription");
import amServiceContainer   = require("../../../abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amLogService         = require("../../../abstract/am_transversalservices/a_logservice/A_LogService");
import amSoundProperties    = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");

import rmNonRenderingServices = require("../r_nonrenderingservice/R_NonRenderingService");
import rmVolumeSetupMain     = require("./RI_VolumeSetup_Main");
import rmVolumeSetupConfig   = require("./RI_VolumeSetup_Config");

export module rm_nonrenderingservices
{
  export class RS_VolumeSetupService extends rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService 
                                      implements amVolumeSetupServices.am_nonrenderingservices.AS_VolumeSetupService
  {
    //---------- interfaces
    _iVolumeSetupMain : amVolumeSetupServiceMain.am_nonrenderingservices.AI_VolumeSetupMain;
    _iVolumeSetupConfig : amVolumeSetupServiceConfig.am_nonrenderingservices.AI_VolumeSetupConfig;

    //----------- composants 
    _aLogService : amLogService.am_transversalservices.A_LogService; 
    _aActivityLogService: amActivityLogService.am_transversalservices.AS_ActivityLogService;

    constructor( aFactoryDescription: amFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amLogService.am_transversalservices.A_LogService,
      error              : amError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iVolumeSetupMain = new rmVolumeSetupMain.rm_nonrenderingservices.RI_VolumeSetupMain(this);
      this._iVolumeSetupConfig = new rmVolumeSetupConfig.rm_nonrenderingservices.RI_MonitoringConfig(this);
      this._aLogService = aLogService;

      this._aActivityLogService = null;
    }

    public setSDKService(aSDKService: amSDKService.am_transversalservices.A_SDK_JsTV): void
    {
      this._aSDKService = aSDKService;
    }

    public setUtilsService(aUtilsService: amUtilsService.am_transversalservices.A_UtilsService) : void
    {
      this._aUtilsService = aUtilsService;    
    }

    //-----------------------------
    public getActivityLogService(): amActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._aActivityLogService;
    }

    public setActivityLogService( aActivityLogService: amActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      this._aActivityLogService = aActivityLogService;
    }

    public init(error : amError.am_general.A_Error) : void
    {
      this._aActivityLogService._IActivityLogServiceMessaging
      .addLogMessage(
        amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, this.getServiceName(),
        `Initializing Volume Setup Service ...`, null, null, null);
    }

    public getVolume(audioProperties: amSoundProperties.am_general.A_SoundProperties, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      const cbGetVolume = function(ctx1: amContext.am_general.A_Context) {
        if (ctx1 != null && !ctx1.isError()) {
          const deviceVolume: number = parseInt(ctx1.getResult());
          audioProperties.setVolumeLevel(deviceVolume);
        } else {
          let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
          if (self._debug) {
            console.log(`Volume setup service: error in getting device volume ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Volume setup service: error in getting device volume ${logMessage}</p>`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `error in getting device volume: ${logMessage}`, null, null, null);            
        }
      }

      const errorGetVolume: amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextGetVolume: amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextGetVolume.setRemoteCallback(true);
      return self._aSDKService._iSDKAudioSetup.getVolumeLevel(errorGetVolume, contextGetVolume, cbGetVolume);  
    }
    
    public setVolume(audioProperties: amSoundProperties.am_general.A_SoundProperties, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;

      const nVolume = audioProperties.getVolumeLevel();

      const cbSetVolume = function(ctx1: amContext.am_general.A_Context) {
        let logMessage: string = "";
        if (ctx1 != null && !ctx1.isError()) {
          logMessage = `device volume set ${nVolume}`;
          if (self._debug) {
            console.log(`Volume setup service: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Volume setup service: ${logMessage}</p>`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
            `${logMessage}`, null, null, null);
        } else {
          if (ctx1 != null) {
            error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
            logMessage = `[${error.getErrMsg()}]`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `error in setting device volume: ${logMessage}`, null, null, null);              
          if (self._debug) {
            console.log(`Volume setup: Error in setting device volume: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Volume setup: Error in setting device volume: ${logMessage}</p>`;
          }            
        }

        context != null && context.setError(error);
        callback != null && callback(context);
      }

      const errorSetVolume:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSetVolume:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextSetVolume.setRemoteCallback(true);
      self._aSDKService._iSDKAudioSetup.setVolumeLevel(audioProperties, errorSetVolume, contextSetVolume, cbSetVolume);
    }
  }
}
