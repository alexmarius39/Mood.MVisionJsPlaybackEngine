import amScreenshotMain = require("../../../abstract/am_renderingservices/as_screenshot/AI_ScreenshotMain");
import amScreenshotConfig = require("../../../../../app/ts/abstract/am_renderingservices/as_screenshot/AI_ScreenshotConfig");
import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");

import amGeneralFactoryDescription             = require("../../../abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesSDKService         = require("../../../abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");

import amCaptureScreenInfo = require("../../../abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");

import amHttpRequest  = require("../../../../../app/ts/abstract/am_general/a_httprequest/A_HttpRequest");
import amGeneralContentDispositionHeader = require("../../../../../app/ts/abstract/am_general/a_httprequest/A_ContentDispositionHeader");
import amFileInfo     = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amGeneralContext = require("../../../abstract/am_general/a_context/A_Context");
import amGeneralError   = require("../../../abstract/am_general/a_error/A_Error");
import amScreenshotService  = require("../../../abstract/am_renderingservices/as_screenshot/AS_Screenshot");

import amGeneralScreenshotOptions = require("../../../abstract/am_general/ae_screenshotoptions/AE_ScreenshotOptions");

import rmScreenshotMain = require("./RI_Screenshot_Main");
import rmScreenshotConfig = require("./RI_Screenshot_Config");
import rmRenderingServices = require("../r_renderingservice/R_RenderingService");

import amGeneralActivityLogMessageTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");
import amTransversalServicesActivityLogService = require("../../../abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");


export module rm_renderingservices
{
  export class RS_ScreenshotService extends rmRenderingServices.rm_renderingservices.R_RenderingService
                                    implements amScreenshotService.am_renderingservices.AS_ScreenshotService
  {
    _iScreenshotMain : amScreenshotMain.am_renderingservices.AI_ScreenshotMain;
    _iScreenshotConfig : amScreenshotConfig.am_renderingservices.AI_ScreenshotConfig;

    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    _aPlaybackGlobalConfig : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;

    _aScreenshotOptions: amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions;
    _aHttpRequest : amHttpRequest.am_general.A_HttpRequest;
    _aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;


    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iScreenshotMain = new rmScreenshotMain.rm_renderingservices.RI_ScreenshotMain(this);
      this._iScreenshotConfig = new rmScreenshotConfig.rm_renderingservices.RI_ScreenshotConfig(this);
      this._aLogService = aLogService;

      this._aHttpRequest = null;
      this._aScreenshotOptions = null;
      this._aPlaybackGlobalConfig = null;
    }

    public setSDKService(aSDKService: amTransversalServicesSDKService.am_transversalservices.A_SDK_JsTV): void
    {
      this._aSDKService = aSDKService;    
    }

    //----------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;      
    }

    //-----------------------------
    public getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._aPlaybackGlobalConfig;
    }

    public setDefaultScreenshotOptions(aScreenshotOptions: amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions): void
    {
      this._aScreenshotOptions = aScreenshotOptions;
    }

    public getDefaultScreenshotOptions(): amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions
    {
      return this._aScreenshotOptions;
    }

    //-----------------------------
    public getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._aActivityLogService;
    }

    public setActivityLogService( aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      this._aActivityLogService = aActivityLogService;
    }

    public init(error : amGeneralError.am_general.A_Error) : void
    {
      this._aActivityLogService._IActivityLogServiceMessaging
      .addLogMessage(
        amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, this.getServiceName(),
        `Initializing Screenshot Service ...`, null, null, null);

      this._aHttpRequest = this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
    }

    public saveFileAndReturnBytes(aScreenshotOptions:  amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions,
      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      const self = this;
      const aScreenshotFile: amFileInfo.am_general.A_FileInfo = aScreenshotOptions.getCaptureScreenInfo().getFileInfo();

      if (aScreenshotOptions.getSaveInMemory() === true) {
        const cbReadBinaryFile = function(ctx: amGeneralContext.am_general.A_Context) {
          if (ctx != null) {
            if (!ctx.isError()) {
              if (aScreenshotOptions.getSaveInFile() === false) {
                const errorRemoveFile1:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                const contextRemoveFile1:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();    
                contextRemoveFile1.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.removeFile2(aScreenshotFile.getStorage(), aScreenshotFile.getPath(), aScreenshotFile.getName(), errorRemoveFile1, contextRemoveFile1, null);
              }
              context != null && context.setArrayResult(ctx.getArrayResult());
            } else {
              error.setError(ctx.getError().getErrId(), ctx.getError().getErrMsg());
            }
          }
          context != null && context.setError(error);
          callback != null && callback(context);
        }
        const errorReadFile:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextReadFile:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextReadFile.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.readBinaryFile(aScreenshotFile.getStorage(), aScreenshotFile.getPath(), aScreenshotFile.getName(), errorReadFile, contextReadFile, cbReadBinaryFile);      
      } else {
        if (aScreenshotOptions.getSaveInFile() === false) {
          const errorRemoveFile:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
          const contextRemoveFile:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();    
          contextRemoveFile.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.removeFile2(aScreenshotFile.getStorage(), aScreenshotFile.getPath(), aScreenshotFile.getName(), errorRemoveFile, contextRemoveFile, null);
        }
        context != null && context.setError(error);
        callback != null && callback(context);
      }
    }

    public generateAndSendScreenshot(aScreenshotOptions:  amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions,
          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      const self = this;

      if (aScreenshotOptions == null) {
        aScreenshotOptions = self._aScreenshotOptions;
      }

      if (aScreenshotOptions == null) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      const aCaptureScreen: amCaptureScreenInfo.am_general.A_CaptureScreenInfo = aScreenshotOptions.getCaptureScreenInfo();
      const { orientation } = window.screen;
      const strOrientation = orientation.type.toString().split("-")[0].toUpperCase();
      aCaptureScreen.setOrientation(strOrientation);
      
      const aScreenshotFile: amFileInfo.am_general.A_FileInfo = aCaptureScreen.getFileInfo();

      const cbCreateFolder = function(ctx3: amGeneralContext.am_general.A_Context) {
        const cbCaptureScreen = function(ctx2: amGeneralContext.am_general.A_Context) {
          if (ctx2 != null && !ctx2.isError()) {
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(
              amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
              `Screenshot Capture Success`, null, null, null);

            if (aScreenshotOptions.getSendToServer()) {
              const localTime:string = self._aUtilsService._iUtilsDateTime.getCrtDateTimeAsString2("yyyy-mm-dd", "hh-mm-ss", "_");

              self._aHttpRequest.reset();
              self._aHttpRequest.setMethod("POST");
              self._aHttpRequest.setUrlPath(`${self._aPlaybackGlobalConfig.getBaseServerApiUrl()}/${aScreenshotOptions.getRemoteRelativePath()}`);

              const urlParams = {
                "serial" : self._aPlaybackGlobalConfig.getSerialNumber(),
                "date" : localTime,
                "stream" : "x"
              };
              self._aHttpRequest.setUrlParams(JSON.stringify(urlParams));
              self._aHttpRequest.setBoundary("380009360982575615081974");
              self._aHttpRequest.setMultipart();

              const errorCDHeader:amGeneralError.am_general.A_Error = self._aServiceLocator._iEntityCreation.createDefaultError();  
              const aCDHeader: amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader = self._aServiceLocator._iEntityCreation.createDefaultContentDispositionHeader(errorCDHeader);
              aCDHeader.setHeaderName("filelist");
              aCDHeader.setHeaderFileBinary(true);
              aCDHeader.setHeaderFile(aScreenshotFile);
              self._aHttpRequest.addCDHeader(aCDHeader);

              const requestSent = function(ctx1: amGeneralContext.am_general.A_Context) {
                if (ctx1 != null && !ctx1.isError()) {
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(
                    amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                    `Monitoring screenshot sent`, null, null, null);

                  if (self._debug) {
                    console.log("Monitoring screenshot sent");
                    document.getElementById("rend.message").innerHTML += "<p>Monitoring screenshot sent</p>";
                  }
                } else {
                  let logMessage: string = "";
                  if (ctx1 != null) {
                    error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                    logMessage = `[${error.getErrMsg()}]`;
                  }
      
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(
                    amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                    `Monitoring screenshot send FAILED: ${logMessage}`, null, null, null); 
                }

                context != null && context.setError(error);
                self.saveFileAndReturnBytes(aScreenshotOptions, error, context, callback);
              }
              const errorSendRequest:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
              const contextSendRequest:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      
              contextSendRequest.setRemoteCallback(true);
              self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
            } else {
              self.saveFileAndReturnBytes(aScreenshotOptions, error, context, callback);
            }
          } else {
            let logMessage: string = "";
            if (ctx2 != null) {
              error.setError(ctx2.getError().getErrId(), ctx2.getError().getErrMsg());
              logMessage = `[${error.getErrMsg()}]`;
            }

            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(
              amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `Screenshot capture failed: ${logMessage}`, null, null, null);
          }

          context != null && context.setError(error);
          callback != null && callback(context);
        }
        const errorScreenshot:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextScreenshot:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextScreenshot.setRemoteCallback(true);
        self._aSDKService._iSDKTvSignageSetup.captureScreen(aCaptureScreen, errorScreenshot, contextScreenshot, cbCaptureScreen);
      }
      const errorCreateFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextCreateFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextCreateFolder.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.createFolder2(aScreenshotFile.getStorage(), aScreenshotFile.getPath(), errorCreateFolder, contextCreateFolder, cbCreateFolder)
    }  
  }
} 