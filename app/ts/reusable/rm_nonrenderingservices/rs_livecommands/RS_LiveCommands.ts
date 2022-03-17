import amLiveCommandsServices  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_livecommands/AS_LiveCommands");
import amLiveCommandsServiceMain = require("../../../abstract/am_nonrenderingservices/as_livecommands/AI_LiveCommandsMain");
import amLiveCommandsServiceConfig = require("../../../abstract/am_nonrenderingservices/as_livecommands/AI_LiveCommandsConfig");

import amPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amActivityLogMessageTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");

import amActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
import amLiveCommandsSettings = require("../../../abstract/am_general/ae_livecommands/AE_LiveCommandsSettings");
import amServerCommand = require("../../../abstract/am_general/ae_livecommands/AE_ServerCommand");

import amSDKService   = require("../../../abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amUtilsService = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");
import amHttpRequest  = require("../../../abstract/am_general/a_httprequest/A_HttpRequest");

import amError              = require("../../../abstract/am_general/a_error/A_Error");
import amContext            = require("../../../abstract/am_general/a_context/A_Context");
import amFactoryDescription = require("../../../abstract/am_general/a_factorydescription/A_FactoryDescription");
import amServiceContainer   = require("../../../abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amLogService         = require("../../../abstract/am_transversalservices/a_logservice/A_LogService");
import amGeneralSoundProperties   = require("../../../abstract/am_general/a_soundproperties/A_SoundProperties");
import amServerDeviceSettingsConfiguration  = require("../../../abstract/am_nonrenderingservices/as_settingssync/AE_ServerDeviceSettingsConfiguration");

import rmNonRenderingServices = require("../r_nonrenderingservice/R_NonRenderingService");
import rmLiveCommandsMain     = require("./RI_LiveCommands_Main");
import rmLiveCommandsConfig   = require("./RI_LiveCommands_Config");

import amVolumeSetup           = require("../../../abstract/am_nonrenderingservices/as_volumesetup/AS_VolumeSetup");

import amPlaylistDownloader    = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/AS_PlaylistDownloader");

import amMonitoringService     = require("../../../abstract/am_nonrenderingservices/as_monitoring/AS_Monitoring");

import amSettingsSyncService   = require("../../../abstract/am_nonrenderingservices/as_settingssync/AS_SettingsSync");

import amPowerProperties       = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");

export module rm_nonrenderingservices
{
  export class RS_LiveCommandsService extends rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService 
                                      implements amLiveCommandsServices.am_nonrenderingservices.AS_LiveCommandsService
  {
    //---------- interfaces
    _iLiveCommandsMain : amLiveCommandsServiceMain.am_nonrenderingservices.AI_LiveCommandsMain;
    _iLiveCommandsConfig : amLiveCommandsServiceConfig.am_nonrenderingservices.AI_LiveCommandsConfig;

    //----------- composants 
    _aLogService : amLogService.am_transversalservices.A_LogService; 
    _aPlaybackGlobalConfig : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;

    _aLiveCommandsSettings: amLiveCommandsSettings.am_general.AE_LiveCommandsSettings;
    _aActivityLogService: amActivityLogService.am_transversalservices.AS_ActivityLogService;

    _aVolumeSetupService: amVolumeSetup.am_nonrenderingservices.AS_VolumeSetupService;
    _aMonitoringService: amMonitoringService.am_nonrenderingservices.AS_MonitoringService;
    _aSettingsSyncService: amSettingsSyncService.am_nonrenderingservices.A_SettingsSyncService;

    _aHttpRequest : amHttpRequest.am_general.A_HttpRequest;

    //----------- constructor 
    constructor( aFactoryDescription: amFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amLogService.am_transversalservices.A_LogService,
      error              : amError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iLiveCommandsMain = new rmLiveCommandsMain.rm_nonrenderingservices.RI_LiveCommandsMain(this);
      this._iLiveCommandsConfig = new rmLiveCommandsConfig.rm_nonrenderingservices.RI_LiveCommandsConfig(this);
      this._aLogService = aLogService;

      this._aPlaybackGlobalConfig = null;
      this._aLiveCommandsSettings = null;
      this._aActivityLogService = null;

      this._aVolumeSetupService = null;
      this._aMonitoringService = null;
      this._aHttpRequest = null;
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
    public getPlaybackGlobalConfig() : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._aPlaybackGlobalConfig;
    }

    //----------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;      
    }

    //-----------------------------
    public getDefaultLiveCommandsSettings() : amLiveCommandsSettings.am_general.AE_LiveCommandsSettings
    {
      return this._aLiveCommandsSettings;
    }
    
    //-----------------------------
    public setDefaultLiveCommandsSettings(aLiveCommandsSettings: amLiveCommandsSettings.am_general.AE_LiveCommandsSettings)
    {
      this._aLiveCommandsSettings = aLiveCommandsSettings;
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


    public getVolumeSetupService(): amVolumeSetup.am_nonrenderingservices.AS_VolumeSetupService
    {
      return this._aVolumeSetupService;
    }
    public setVolumeSetupService(aVolumeSetupService: amVolumeSetup.am_nonrenderingservices.AS_VolumeSetupService)
    {
      this._aVolumeSetupService = aVolumeSetupService;
    }

    public getMonitoringService(): amMonitoringService.am_nonrenderingservices.AS_MonitoringService
    {
      return this._aMonitoringService;
    }
    public setMonitoringService(aMonitoringService: amMonitoringService.am_nonrenderingservices.AS_MonitoringService)
    {
      this._aMonitoringService = aMonitoringService;
    }

    public getSettingsSyncService(): amSettingsSyncService.am_nonrenderingservices.A_SettingsSyncService
    {
      return this._aSettingsSyncService;
    }
    public setSettingsSyncService(aSettingsSyncService: amSettingsSyncService.am_nonrenderingservices.A_SettingsSyncService)
    {
      this._aSettingsSyncService = aSettingsSyncService;
    }

    public init(error : amError.am_general.A_Error) : void
    {
      this._aActivityLogService._IActivityLogServiceMessaging
      .addLogMessage(
        amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, this.getServiceName(),
        `Initializing Live Commands Service ...`, null, null, null);

      this._aHttpRequest = this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
    }

    public startListener(aLiveCommandsSettings: amLiveCommandsSettings.am_general.AE_LiveCommandsSettings,
          error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      const self = this;
      if (aLiveCommandsSettings == null) {
        aLiveCommandsSettings = self._aLiveCommandsSettings;
      }

      if (aLiveCommandsSettings == null) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      self._aHttpRequest.reset();
      self._aHttpRequest.setMethod("POST");
      self._aHttpRequest.setUrlPath(`${self._aPlaybackGlobalConfig.getBaseServerApiUrl()}${aLiveCommandsSettings.getAuthTokenRelativePath()}/${self._aPlaybackGlobalConfig.getSerialNumber()}`);

      const requestSent = function(ctx1: amContext.am_general.A_Context) {
        let logMessage: string = "";
        if (ctx1 != null && !ctx1.isError()) {
          const strAuthToken: string = ctx1.getResult();
          logMessage = (strAuthToken.length > 0) ? "Auth token SUCCESS" : "Empty auth token"; 

          self._aActivityLogService._IActivityLogServiceMessaging
          .addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
            logMessage, null, null, null);

          if (strAuthToken.length > 0) {
            if (self._debug) {
              console.log(logMessage);
              document.getElementById("rend.message").innerHTML += `<p>${logMessage}</p>`;
            }
            
            // listen to live commands
            self._aUtilsService._iUtilsSignalR.createConnection(
                `${self._aPlaybackGlobalConfig.getBaseServerApiUrl()}${aLiveCommandsSettings.getSignalRHubRelativePath()}`, strAuthToken);
            const signalRConnection = self._aUtilsService._iUtilsSignalR.getConnection();
            if (signalRConnection != null) {
              self._aUtilsService._iUtilsSignalR.setMaxStartConnectionAttempts(3);

              const errorSignalR:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
              const contextSignalR:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      

              const cbConnectionStarted = function(ctx2: amContext.am_general.A_Context) {
                if (ctx2 != null && !ctx2.isError()) {
                  if (self._debug) {
                    console.log(`LiveCommands service: SignalR connection started`);
                    document.getElementById("rend.message").innerHTML += `<p>LiveCommands service: SignalR connection started</p>`;
                  }
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                    amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                    `LiveCommands service: SignalR connection started`, null, null, null); 
                } else {
                  let logMessage: string = (ctx2 != null) ? `[${ctx2.getError().getErrMsg()}]` : "";
                  if (self._debug) {
                    console.log(`LiveCommands service: error ${logMessage}`);
                    document.getElementById("rend.message").innerHTML += `<p>LiveCommands service: error ${logMessage}</p>`;
                  }
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                    amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                    `LiveCommands service: error ${logMessage}`, null, null, null); 
                }
              }
              self._aUtilsService._iUtilsSignalR.startConnection(errorSignalR, contextSignalR, cbConnectionStarted);

              signalRConnection.on(aLiveCommandsSettings.getSignalRHubMethodName(), (user, message) => {
                let logMessage: string = `invalid handler args when method ${aLiveCommandsSettings.getSignalRHubMethodName()} is invoked: ${user}, ${message}`;
                let msgType: amActivityLogMessageTypes.am_general.AE_LogMessageTypes = amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error;
                const errorServerCommand: amError.am_general.A_Error = self._aServiceLocator._iEntityCreation.createDefaultError();
                const aServerCommand: amServerCommand.am_general.AE_ServerCommand = self._aServiceLocator._iEntityCreation.createDefaultServerCommand(errorServerCommand);
                if (user != null && user.name != null && user.id != null && aServerCommand != null) {
                  logMessage = `received comand name: ${user.name}, id: ${user.id}`;
                  const nId: number = +user.id;
                  if (!isNaN(nId)) {
                    aServerCommand.setId(nId);
                  }
                  aServerCommand.setName(user.name)
                  if (user.params != null) {
                    aServerCommand.setParams(user.params);
                  }
                  self.runCommand(aServerCommand);
                  msgType = amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info;
                }

                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(msgType, self.getServiceName(), logMessage, null, null, null);
                if (self._debug) {
                  console.log(`LiveCommands service: ${logMessage}`);
                  document.getElementById("rend.message").innerHTML += `<p>LiveCommands service: ${logMessage}</p>`;
                }  
              });
              
              signalRConnection.onclose(() => {
                self._aUtilsService._iUtilsSignalR.startConnection(errorSignalR, contextSignalR, cbConnectionStarted);
              });
            }
          } 
        } else {
          if (ctx1 != null) {
            error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
            logMessage = `[${error.getErrMsg()}]`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging
          .addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `Auth token FAILED: ${logMessage}`, null, null, null);
        }

        context != null && context.setError(error);
        callback != null && callback(context);
      }
      const errorSendRequest:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSendRequest:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      
      contextSendRequest.setRemoteCallback(true);
      self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
    }

    public runCommand(aServerCommand: amServerCommand.am_general.AE_ServerCommand)
    {
      const self = this;
      if (aServerCommand != null) {
        const cmdId: number = aServerCommand.getId();
        const cmdParams = aServerCommand.getParams();

        switch (cmdId)
        {
          case amServerCommand.am_general.Type.CAPTURE_SCREENSHOT:
            self.sendScreenshot();
            break;
          case amServerCommand.am_general.Type.PLAYLIST_UPDATE:
            // self.updatePlaylistAndContent(cmdParams);
            break;
          case amServerCommand.am_general.Type.MONITORING:
            self.sendMonitoring();
            break;
          case amServerCommand.am_general.Type.DEVICE_REBOOT:
            self.rebootDevice();
            break;
          case amServerCommand.am_general.Type.MEDIA_VOLUME_SET:
            self.setVolume(cmdParams);
            break;
          default: 
            break;
        }

      }
    }

    public setVolume(nVolume: number)
    {
      const self = this;

      const errorAudioProperties:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();
      const audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties = self._aServiceLocator._iEntityCreation.createDefaultSoundProperties(errorAudioProperties);
      audioProperties.setVolumeLevel(nVolume);

      const cbSetVolume = function(ctx1: amContext.am_general.A_Context) {
        if (ctx1 != null && !ctx1.isError()) {
          // update device_settings.json and sync server settings
          const jsonSettings = self._aPlaybackGlobalConfig.getJsonDeviceSettings();
          if (jsonSettings != null && jsonSettings["soundSettings.volumeLevels"] != null) {
            const crtTimestamp: number = Date.now();
            jsonSettings["soundSettings.volumeLevels"] = {
              "timestamp": crtTimestamp,
              "value" : {
                "MEDIA" : audioProperties.getVolumeLevel()  
              }
            }

            const aServerDeviceSettingsConfiguration: amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration = self._aSettingsSyncService._iSettingsSyncConfig.getDefaultServerDeviceSettingsConfiguration();
            self._aPlaybackGlobalConfig.setJsonDeviceSettings(jsonSettings);
            aServerDeviceSettingsConfiguration.setServerDeviceSettingsChanged(false);
            aServerDeviceSettingsConfiguration.copyFromJson(jsonSettings);

            const cbUpdateServerSettings = function(ctx2: amContext.am_general.A_Context) {
              if (ctx2 != null && !ctx2.isError()) {
                const errorSaveFile:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                const contextSaveFile:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      
                return self._aSettingsSyncService._iSettingsSyncMain.saveSettingsFile("device_settings.json", errorSaveFile, contextSaveFile, null);
              }
            }
            const errorUpdateSettings:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
            const contextUpdateSettings:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      
            return self._aSettingsSyncService._iSettingsSyncMain.updateServerSettings(jsonSettings, null, errorUpdateSettings, contextUpdateSettings, cbUpdateServerSettings);
          }
        }
      }

      const errorVolumeSetup:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextVolumeSetup:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      self._aVolumeSetupService._iVolumeSetupMain.setVolume(audioProperties, errorVolumeSetup, contextVolumeSetup, cbSetVolume);
    }

    public sendScreenshot()
    {
      const self = this;

      const errorSendScreenshot:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSendScreenshot:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      
      self._aMonitoringService._iMonitoringConfig.getScreeshotService()._iScreenshotMain.generateAndSendScreenshot(null, errorSendScreenshot, contextSendScreenshot, null);
    }

    public updatePlaylistAndContent(updateParams: any)
    {
      const self = this;

      // TODO: fix - take aPlaylistDownloader from Cron service(shouldn't be created here)
      let updateType: string = (typeof updateParams.mode == "string") ? updateParams.mode : "";
      
      const errorCreateService: amError.am_general.A_Error = self._aServiceLocator._iEntityCreation.createDefaultError();
      const aPlaylistDownloader: amPlaylistDownloader.am_coreservices.AS_PlaylistDownloader = 
      self._aServiceLocator._iServiceCreation.createDefaultService_PlaylistDownloader(self._aServiceContainer, self._aServiceLocator, self._aLogService, 0, errorCreateService);

      aPlaylistDownloader._iService.setSDKService(self._aSDKService);
      aPlaylistDownloader._iService.setUtilsService(self._aUtilsService);
      aPlaylistDownloader._iPlaylistDownloaderConfig.setPlaybackGlobalConfig(self._aPlaybackGlobalConfig);
      aPlaylistDownloader._iPlaylistDownloaderConfig.setActivityLogService(self._aActivityLogService);

      aPlaylistDownloader._iServiceConfig.setDebug(self._debug);

      const errorPlaylistDownload:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextPlaylistDownload:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      

      if (updateType === "UPDATE_PLAYLIST_AND_DEPENDENCIES") {
        aPlaylistDownloader._iPlaylistDownloaderMain.download(errorPlaylistDownload, contextPlaylistDownload, () => {});
      } else if (updateType === "UPDATE_PLAYLIST_ONLY") {
        aPlaylistDownloader._iPlaylistDownloaderMain.updatePlaylist(errorPlaylistDownload, contextPlaylistDownload, null);
      }
    }

    public sendMonitoring()
    {
      const self = this;

      const errorSendScreenshot:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSendScreenshot:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      
      self._aMonitoringService._iMonitoringMain.sendMonitoringReport(null, errorSendScreenshot, contextSendScreenshot, null);
    }

    public rebootDevice()
    {
      const self = this;

      const errorPowerProperties: amError.am_general.A_Error = self._aServiceLocator._iEntityCreation.createDefaultError();
      const aPowerProperties: amPowerProperties.am_general.A_PowerProperties = self._aServiceLocator._iEntityCreation.createDefaultPowerProperties(errorPowerProperties);
      aPowerProperties.setPowerCommand("reboot");

      const errorExecPowerCmd:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextExecPowerCmd:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextExecPowerCmd.setRemoteCallback(true);
      self._aSDKService._iSDKPowerSetup.executePowerCommand(aPowerProperties, errorExecPowerCmd, contextExecPowerCmd, null);
    }
  }

} 