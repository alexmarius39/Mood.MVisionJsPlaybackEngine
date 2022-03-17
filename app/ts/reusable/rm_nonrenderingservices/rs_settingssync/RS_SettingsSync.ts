import amSettingsSyncServices  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_settingssync/AS_SettingsSync");
import amSettingsSyncServiceMain = require("../../../abstract/am_nonrenderingservices/as_settingssync/I_SettingsSyncMain");
import amSettingsSyncServiceConfig = require("../../../abstract/am_nonrenderingservices/as_settingssync/I_SettingsSyncConfig");

import amPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amActivityLogMessageTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");

import amActivityLogService = require("../../../abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
import amFileSettingsUpdate = require("../../../abstract/am_nonrenderingservices/as_filesettingsupdate/AS_FileSettingsUpdate");

import amSDKService   = require("../../../abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amUtilsService = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");
import amHttpRequest  = require("../../../abstract/am_general/a_httprequest/A_HttpRequest");

import amError              = require("../../../abstract/am_general/a_error/A_Error");
import amContext            = require("../../../abstract/am_general/a_context/A_Context");
import amFileInfo           = require("../../../abstract/am_general/a_fileinfo/A_FileInfo");
import amFactoryDescription = require("../../../abstract/am_general/a_factorydescription/A_FactoryDescription");
import amServiceContainer   = require("../../../abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amLogService         = require("../../../abstract/am_transversalservices/a_logservice/A_LogService");

import rmNonRenderingServices = require("../r_nonrenderingservice/R_NonRenderingService");
import rmSettingsSyncMain     = require("./RI_SettingsSync_Main");
import rmSettingsSyncConfig   = require("./RI_SettingsSync_Config");

import amSettingsSync                 = require("../../../abstract/am_general/ae_devicesettings/AE_SettingsSync");

import amServerDeviceSettingsConfiguration  = require("../../../abstract/am_nonrenderingservices/as_settingssync/AE_ServerDeviceSettingsConfiguration");

export module rm_nonrenderingservices
{
  export class RS_SettingsSyncService extends rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService 
                                      implements amSettingsSyncServices.am_nonrenderingservices.A_SettingsSyncService
  {
    //---------- interfaces
    _iSettingsSyncMain : amSettingsSyncServiceMain.am_nonrenderingservices.AI_SettingsSyncMain;
    _iSettingsSyncConfig : amSettingsSyncServiceConfig.am_nonrenderingservices.AI_SettingsSyncConfig;

    //----------- composants 
    _aLogService : amLogService.am_transversalservices.A_LogService; 
    _aPlaybackGlobalConfig : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;

    _aActivityLogService: amActivityLogService.am_transversalservices.AS_ActivityLogService;
    _aFileSettingsUpdate: amFileSettingsUpdate.am_nonrenderingservices.AS_FileSettingsUpdate;

    _aServerDeviceSettingsConfiguration: amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration;
    _aSettingsSync:         amSettingsSync.am_general.AE_SettingsSync;

    _aHttpRequest : amHttpRequest.am_general.A_HttpRequest;

    _strFulfillmentAppServerBase: string;
    _strFulfillmentMediaServerBase: string;

    _jsonSettingsV2: any;

    //----------- constructor 
    constructor( aFactoryDescription: amFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amLogService.am_transversalservices.A_LogService,
      error              : amError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iSettingsSyncMain = new rmSettingsSyncMain.rm_nonrenderingservices.RI_SettingsSyncMain(this)
      this._iSettingsSyncConfig = new rmSettingsSyncConfig.rm_nonrenderingservices.RI_SettingsSyncConfig(this);
      this._aLogService = aLogService;

      this._aPlaybackGlobalConfig = null;
      this._aActivityLogService   = null;
      this._aFileSettingsUpdate   = null;

      this._aSettingsSync         = null;
      this._aServerDeviceSettingsConfiguration = null;
      this._aHttpRequest          = null;

      this._strFulfillmentAppServerBase = null;
      this._strFulfillmentMediaServerBase = null;

      this._jsonSettingsV2 = null;
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

    //----------------------------
    public getDefaultServerDeviceSettingsConfiguration(): amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration
    {
      return this._aServerDeviceSettingsConfiguration;
    }
    //----------------------------
    public setDefaultServerDeviceSettingsConfiguration(aServerDeviceSettingsConfiguration: amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration): void
    {
      this._aServerDeviceSettingsConfiguration = aServerDeviceSettingsConfiguration;
    }
    
    //----------------------------
    public getDefaultSettingsSync() : amSettingsSync.am_general.AE_SettingsSync
    {
      return this._aSettingsSync;
    }
    //----------------------------
    public setDefaultSettingsSync(aSettingsSync: amSettingsSync.am_general.AE_SettingsSync)
    {
      this._aSettingsSync = aSettingsSync;
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

    //-----------------------------
    public getFileSettingsUpdate(): amFileSettingsUpdate.am_nonrenderingservices.AS_FileSettingsUpdate
    {
      return this._aFileSettingsUpdate;
    }

    public setFileSettingsUpdate(aFileSettingsUpdate: amFileSettingsUpdate.am_nonrenderingservices.AS_FileSettingsUpdate)
    {
      this._aFileSettingsUpdate = aFileSettingsUpdate;
    }

    public init(error : amError.am_general.A_Error) : void
    {
      this._aHttpRequest = this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
    }

    public saveSettingsFile(strFileName: string, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;

      let jsonSettings = null;
      if (strFileName === "device_settings.json") {
        jsonSettings = self._aPlaybackGlobalConfig.getJsonDeviceSettings();
      } else if (strFileName === "settings_v2.json") {
        jsonSettings = self._jsonSettingsV2;
      } else {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }
 
      const errorSaveFile:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSaveFile:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      const aFile:amFileInfo.am_general.A_FileInfo          = self._aPlaybackGlobalConfig.getSettingsFolder();
      aFile.setName(strFileName);

      contextSaveFile.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.writeTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), 
              JSON.stringify(jsonSettings, null, 2), errorSaveFile, contextSaveFile, callback);
    }

    public readActivityLogSettings(activityLogSettings: any)
    {
      const activityLogEnable = activityLogSettings.activity_log_enable;
      const autoUploadIntervalSeconds = activityLogSettings.auto_upload_interval_seconds / 1000;
      const autoUploadEnabled = activityLogSettings.auto_upload_enabled;
      const fileEnabled = activityLogSettings.file_enabled;

      const sendBufferMaxSizeKb = activityLogSettings.send_buffer_max_size_kb / 1024;
      const sendLocalSentPath = activityLogSettings.send_local_sent_path;
      const sendLocalBaseName = activityLogSettings.send_local_base_name;

      const saveBufferMaxSizeKb = activityLogSettings.save_buffer_max_size_kb;
      const saveLocalPath = activityLogSettings.save_local_path;
      const saveLocalBaseName = activityLogSettings.save_local_base_name;
      const saveLocalFileSplitSizeInMb = activityLogSettings.save_local_file_split_size_in_mb;

      const serverEndpoint = activityLogSettings.server_endpoint;
      const serverEndpointPath = activityLogSettings.server_endpoint_path;
      const verbosityType = activityLogSettings.verbosity_type;

      const activityLogService = this._aPlaybackGlobalConfig.getActivityLogServiceSettings();
      if (typeof activityLogService != null) {
        typeof activityLogEnable == "boolean" && activityLogService.setActivityLogEnable(activityLogEnable);
        typeof autoUploadIntervalSeconds == "number" && activityLogService.setAutoUploadIntervalSeconds(autoUploadIntervalSeconds);
        typeof autoUploadEnabled == "boolean" && activityLogService.setAutoUploadEnabled(autoUploadEnabled);
        typeof fileEnabled == "boolean" && activityLogService.setFileEnabled(fileEnabled);

        typeof sendBufferMaxSizeKb == "number" && activityLogService.setSendBufferMaxSizeKb(sendBufferMaxSizeKb);
        typeof sendLocalSentPath == "string" && activityLogService.setLocalSentPath(sendLocalSentPath);
        typeof sendLocalBaseName == "string" && activityLogService.setLocalSentBaseName(sendLocalBaseName);

        typeof saveBufferMaxSizeKb == "number" && activityLogService.setSaveBufferMaxSizeKb(saveBufferMaxSizeKb);
        typeof saveLocalPath == "string" && activityLogService.setLocalSavePath(saveLocalPath);
        typeof saveLocalBaseName == "string" && activityLogService.setLocalSaveBaseName(saveLocalBaseName);
        typeof saveLocalFileSplitSizeInMb == "number" && activityLogService.setLocalSplitSizeInMb(saveLocalFileSplitSizeInMb);

        typeof serverEndpoint == "string" && activityLogService.setServerEndpoint(serverEndpoint);
        typeof serverEndpointPath == "string" && activityLogService.setServerEndpointPath(serverEndpointPath);
        typeof verbosityType != null && activityLogService.setVerbosityType(verbosityType);
      }
    }

    public saveAppServerBaseFile(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback) {
      const self = this;

      const strCloudAPIUpgradeUrl = self._aServerDeviceSettingsConfiguration.getServerDeviceSettingsConfiguration().getCloudAPISettings().getBaseServerUpgradeUrl().getValue();
      if (typeof strCloudAPIUpgradeUrl != "string" || strCloudAPIUpgradeUrl.length == 0) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      const aFile:amFileInfo.am_general.A_FileInfo = self._aPlaybackGlobalConfig.getBootSettingsFolder();
      aFile.setName("app_server_base_url.json");

      const cbReadFile = function(ctx1: amContext.am_general.A_Context) {
        const strContent = ctx1.getResult();
        let logMessage: string = "";
        let jsonContent = null;
        if (ctx1 != null && !ctx1.isError()) {
          try {
            jsonContent = JSON.parse(strContent);
          } catch(e) {
            logMessage = `Settings Sync exception [saveAppServerBaseFile]: ${e.message}`;
            if (self._debug) {
              console.log(`${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>${logMessage}</p>`;    
            }

            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `saveAppServerBaseFile: ${logMessage}`, null, null, null);
            
            error.setError(ctx1.getError().getErrId(), `${logMessage}`);
            jsonContent = null;
          }

          if (jsonContent != null) {
            logMessage = `Boot Settings app server url changed ${strCloudAPIUpgradeUrl}`;
            if (self._debug) {
              console.log(`saveAppServerBaseFile: ${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>saveAppServerBaseFile: ${logMessage}</p>`;    
            }
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `saveAppServerBaseFile: ${logMessage}`, null, null, null);

            jsonContent["app_server_base_url"] = strCloudAPIUpgradeUrl;

            const cbWriteFile = function(ctx2: amContext.am_general.A_Context) {
              // save settings_v2 file with the latest cloudApiUpgradeUrl server value
              const jsonSettingsV2 = self._jsonSettingsV2;

              const {strUrlDomain, strUrlPath} = self._aUtilsService._iUtilsStrings.splitUrl(strCloudAPIUpgradeUrl);
              if (jsonSettingsV2 != null) {
                if (jsonSettingsV2["software_tizen"] != null && strUrlDomain.length > 0) {
                  let tagNameArray = ["software_remote_server_url", 
                                      "softwareconfig_remote_server_url", 
                                      "software_encrypted_remote_server_url", 
                                      "softwareconfig_encrypted_remote_server_url"];
                  for (const tagName of tagNameArray) {
                    jsonSettingsV2["software_tizen"][tagName] = strUrlDomain;  
                  }
                  tagNameArray = ["software_remote_folder", 
                                  "softwareconfig_remote_folder", 
                                  "software_encrypted_remote_folder", 
                                  "softwareconfig_encrypted_remote_folder"];
                  for (const tagName of tagNameArray) {
                    jsonSettingsV2["software_tizen"][tagName] = strUrlPath;  
                  }

                  return self.saveSettingsFile("settings_v2.json", error, context, callback);
                }
              }
              
              context != null && context.setError(error);
              callback != null && callback(context);      
            }
            const errorWriteFile:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
            const contextWriteFile:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextWriteFile.setRemoteCallback(true);
            return self._aSDKService._iSDKFileSystem.writeTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), 
                          JSON.stringify(jsonContent, null, 2), errorWriteFile, contextWriteFile, cbWriteFile);  
          }
        } else {
          if (ctx1 != null) {
            error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
            logMessage = `[${error.getErrMsg()}]`;
          }
          if (self._debug) {
            console.log(`Settings Sync: read App Server file failed: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Settings Sync: read App Server file failed: ${logMessage}</p>`;    
          }
          self._aActivityLogService._IActivityLogServiceMessaging
          .addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `App Media Server file failed: ${logMessage}`, null, null, null);
        }
        context != null && context.setError(error);
        callback != null && callback(context);
      }

      const errorReadFile:amError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextReadFile:amContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextReadFile.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.readTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), 
                                  errorReadFile, contextReadFile, cbReadFile);  
    }

    public saveMediaServerBaseFile(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;

      const strCloudAPIUrl: string = self._aServerDeviceSettingsConfiguration.getServerDeviceSettingsConfiguration().getCloudAPISettings().getBaseServerAPIUrl().getValue();
      const {strUrlDomain} = self._aUtilsService._iUtilsStrings.splitUrl(strCloudAPIUrl);
      if (strUrlDomain.length == 0) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      const aFile:amFileInfo.am_general.A_FileInfo = this._aPlaybackGlobalConfig.getBootSettingsFolder();
      aFile.setName("media_server_base_url.json");

      const cbReadFile = function(ctx1: amContext.am_general.A_Context) {
        const strContent = ctx1.getResult();
        let logMessage: string = "";
        let jsonContent = null;
        if (ctx1 != null && !ctx1.isError()) {
          try {
            jsonContent = JSON.parse(strContent);
          } catch(e) {
            logMessage = `Settings Sync exception [saveMediaServerBaseFile]: ${e.message}`;
            if (self._debug) {
              console.log(`${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>${logMessage}</p>`;    
            }

            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `saveMediaServerBaseFile: ${logMessage}`, null, null, null);

            error.setError(ctx1.getError().getErrId(), `${logMessage}`);
            jsonContent = null;
          }

          if (jsonContent != null) {
            logMessage = `Boot Settings media server url changed ${strUrlDomain}`;
            if (self._debug) {
              console.log(`saveMediaServerBaseFile: ${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>saveMediaServerBaseFile: ${logMessage}</p>`;    
            }
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `saveMediaServerBaseFile: ${logMessage}`, null, null, null);

            jsonContent["media_server_base_url"] = strUrlDomain;

            const cbWriteFile = function(ctx2: amContext.am_general.A_Context) {
              // save settings_v2 file with the latest cloudApiUrl server value
              const jsonSettingsV2 = self._jsonSettingsV2;
              if (jsonSettingsV2 != null) {
                if (jsonSettingsV2["cloudApiSettings"] == null) {
                  jsonSettingsV2["cloudApiSettings"] = {};
                }
                jsonSettingsV2["cloudApiSettings"]["baseServerApiUrl"] = strUrlDomain;

                return self.saveSettingsFile("settings_v2.json", error, context, callback);
              }

              context != null && context.setError(error);
              callback != null && callback(context);    
            }
            const errorWriteFile:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
            const contextWriteFile:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextWriteFile.setRemoteCallback(true);
            return self._aSDKService._iSDKFileSystem.writeTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), 
                          JSON.stringify(jsonContent, null, 2), errorWriteFile, contextWriteFile, cbWriteFile);  
          }
        } else {
          if (ctx1 != null) {
            error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
            logMessage = `[${error.getErrMsg()}]`;
          }
          if (self._debug) {
            console.log(`Settings Sync: read Media Server file failed: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Settings Sync: read Media Server file failed: ${logMessage}</p>`;    
          }
          self._aActivityLogService._IActivityLogServiceMessaging
          .addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `Read Media Server file failed: ${logMessage}`, null, null, null);
        }
        context != null && context.setError(error);
        callback != null && callback(context);
      }
      
      const errorReadFile:amError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextReadFile:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextReadFile.setRemoteCallback(true);
      return self._aSDKService._iSDKFileSystem.readTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), errorReadFile, contextReadFile, cbReadFile);
    }

    public saveFulfillmentSettings(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      const self = this;

      const strSettingsV2CloudApiUrl = self._aPlaybackGlobalConfig.getBaseServerApiUrl();
      const strCloudAPIUrl = self._aServerDeviceSettingsConfiguration.getServerDeviceSettingsConfiguration().getCloudAPISettings().getBaseServerAPIUrl().getValue();
      let bCloudApiUrlChanged = strCloudAPIUrl.indexOf(strSettingsV2CloudApiUrl) == -1 ? true : false;
      const strCloudAPIUpgradeUrl = self._aServerDeviceSettingsConfiguration.getServerDeviceSettingsConfiguration().getCloudAPISettings().getBaseServerUpgradeUrl().getValue();
      const strAppServerUrl = self._aFileSettingsUpdate._iFileSettingsUpdateConfig.getAppServerBaseUrl() + self._aFileSettingsUpdate._iFileSettingsUpdateConfig.getAppServerBasePath();
      let bCloudApiUpgradeUrlChanged = strCloudAPIUpgradeUrl !== strAppServerUrl;

      const cbSaveAppServerBaseFile = function() {
        self.saveAppServerBaseFile(error, context, callback);
      }

      if (bCloudApiUrlChanged) {
        if (bCloudApiUpgradeUrlChanged) {
          return self.saveMediaServerBaseFile(error, context, cbSaveAppServerBaseFile);
        }
        return self.saveMediaServerBaseFile(error, context, callback);
      }
      if (bCloudApiUpgradeUrlChanged) {
        return self.saveAppServerBaseFile(error, context, callback);
      }
      context != null && context.setError(error);
      callback != null && callback(context);
    }

    public saveDeviceSettingsFile(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback) {
      const self = this;

      const bDeviceSettingsChanged: boolean = self._aServerDeviceSettingsConfiguration.getServerDeviceSettingsChanged();
      if (bDeviceSettingsChanged) {
        // update device_settings.json file
        const cbSaveDeviceSettingsFile = function() {
          const logMessage: string = `Sync server settings service: updated local device settings`;
          if (self._debug) {    
            document.getElementById("rend.message").innerHTML += `<p>${logMessage}</p>`;
            console.log(`<p>${logMessage}</p>`);
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
            `${logMessage}`, null, null, null);

          self.saveFulfillmentSettings(error, context, callback);
        }      
        return self.saveSettingsFile("device_settings.json", error, context, cbSaveDeviceSettingsFile);
      }

      self.saveFulfillmentSettings(error, context, callback);
    }
    
    public start(aSettingsSync: amSettingsSync.am_general.AE_SettingsSync,                  
                  error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      const self = this;
      if (aSettingsSync == null) {
        aSettingsSync = self._aSettingsSync;
      }

      if (aSettingsSync == null) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      self._aHttpRequest.reset();
      self._aHttpRequest.setMethod("GET");
      self._aHttpRequest.setUrlPath(`${self._aPlaybackGlobalConfig.getBaseServerApiUrl()}/${aSettingsSync.getRemoteRelativePath()}/${self._aPlaybackGlobalConfig.getSerialNumber()}`);
      const reqHeaders = {
        "Authorization" : "FB5ED944377FC2E532B28C3F5B844A94BE01C072FC99A34A95FBD99278468D64"
      };
      self._aHttpRequest.setHeaders(JSON.stringify(reqHeaders));
  
      const requestSent = function(ctx1: amContext.am_general.A_Context) {
        let logMessage: string = "";
        if (ctx1 != null && !ctx1.isError()) {
          const strResult: string = ctx1.getResult();
          let jsonSettings = null;
          if (strResult.length > 0) {
            try {
              jsonSettings = JSON.parse(strResult);
            } catch(e) {
              logMessage = `Settings Sync exception: ${e.message}`;
              if (self._debug) {
                console.log(logMessage);
                document.getElementById("rend.message").innerHTML += `<p>${logMessage}</p>`;    
              }

              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                `${logMessage}`, null, null, null);

              error.setError(ctx1.getError().getErrId(), `${logMessage}`);
              jsonSettings = null;
            }

            if (jsonSettings != null) {
              const aJsonDeviceSettings = self._aPlaybackGlobalConfig.getJsonDeviceSettings();
              let strCloudAPIUrlValue = null;
              let strCloudAPIUpgradeUrlValue = null;
              let strCloudAPIUrlTimestamp = null;
              let strCloudAPIUpgradeUrlTimestamp = null;

              try {
                strCloudAPIUrlValue = aJsonDeviceSettings["cloudApiSettings.baseServerApiUrl"]["value"];
                strCloudAPIUpgradeUrlValue = aJsonDeviceSettings["cloudApiSettings.baseServerUpgradeUrl"]["value"];
                strCloudAPIUrlTimestamp = aJsonDeviceSettings["cloudApiSettings.baseServerApiUrl"]["timestamp"];
                strCloudAPIUpgradeUrlTimestamp = aJsonDeviceSettings["cloudApiSettings.baseServerUpgradeUrl"]["timestamp"];
              } catch(e){
                strCloudAPIUrlValue = null;
                strCloudAPIUpgradeUrlValue = null;
                strCloudAPIUrlTimestamp = null;
                strCloudAPIUpgradeUrlTimestamp = null;
              }

              if (typeof strCloudAPIUrlValue === "string" && strCloudAPIUrlValue.length > 0 && strCloudAPIUrlValue[0] === '$') {
                jsonSettings["cloudApiSettings.baseServerApiUrl"] = {
                  value : self._strFulfillmentMediaServerBase,
                  timestamp : strCloudAPIUrlTimestamp
                };
              }

              if (typeof strCloudAPIUpgradeUrlValue === "string" && strCloudAPIUpgradeUrlValue.length > 0 && strCloudAPIUpgradeUrlValue[0] === '$') {
                jsonSettings["cloudApiSettings.baseServerUpgradeUrl"] = {
                  value : self._strFulfillmentAppServerBase,
                  timestamp : strCloudAPIUpgradeUrlTimestamp
                };
              }

              self._aPlaybackGlobalConfig.setJsonDeviceSettings(jsonSettings);
              self._aServerDeviceSettingsConfiguration.setServerDeviceSettingsChanged(false);
              self._aServerDeviceSettingsConfiguration.copyFromJson(jsonSettings);

              return self.saveDeviceSettingsFile(error, context, callback);
            }
          } else {
            if (self._debug) {
              console.log(`Settings Sync: no settings`);
              document.getElementById("rend.message").innerHTML += `<p>Settings Sync: no settings</p>`;    
            }
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `Settings Sync: no settings`, null, null, null);
          }
        } else {
          if (ctx1 != null) {
            error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
            logMessage = `[${error.getErrMsg()}]`;
          }
          if (self._debug) {
            console.log(`Get device settings FAILED: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Get device settings FAILED: ${logMessage}</p>`;    
          }
          self._aActivityLogService._IActivityLogServiceMessaging
          .addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `Get device settings FAILED: ${logMessage}`, null, null, null);
        }

        context != null && context.setError(error);
        callback != null && callback(context);
      }
      const errorSendRequest:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSendRequest:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      
      contextSendRequest.setRemoteCallback(true);
      self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
    }

    public updateServerSettings(jsonSetting: any, aSettingsSync: amSettingsSync.am_general.AE_SettingsSync, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      const self = this;
      if (aSettingsSync == null) {
        aSettingsSync = self._aSettingsSync;
      }

      if (aSettingsSync == null) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      self._aHttpRequest.reset();
      self._aHttpRequest.setMethod("PUT");
      self._aHttpRequest.setUrlPath(`${self._aPlaybackGlobalConfig.getBaseServerApiUrl()}/${aSettingsSync.getRemoteRelativePath()}/${self._aPlaybackGlobalConfig.getSerialNumber()}`);
      const reqHeaders = {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : "FB5ED944377FC2E532B28C3F5B844A94BE01C072FC99A34A95FBD99278468D64"
      };
      self._aHttpRequest.setHeaders(JSON.stringify(reqHeaders));
      self._aHttpRequest.setBody(JSON.stringify(jsonSetting));

      const requestSent = function(ctx1: amContext.am_general.A_Context) {
        let logMessage: string = "";
        if (ctx1 != null && !ctx1.isError()) {
          logMessage = "Settings reported to server";
        } else {
          if (ctx1 != null && error != null) {
            error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
            logMessage = `[${error.getErrMsg()}]`;
          }
        }

        if (self._debug) {
          console.log(`Sync server settings service [updateServerSettings]: ${logMessage}`);
          document.getElementById("rend.message").innerHTML += `<p>Sync server settings service [updateServerSettings]: ${logMessage}</p>`;
        }

        context != null && context.setError(error);
        callback != null && callback(context);
      }

      const errorSendRequest:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSendRequest:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      
      contextSendRequest.setRemoteCallback(true);
      self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
    }

    public uploadFulfillmentSettings(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      const self = this;
      const aJsonDeviceSettings = self._aPlaybackGlobalConfig.getJsonDeviceSettings();

      if (aJsonDeviceSettings == null) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      let strCloudAPIUrlValue = null;
      let strCloudAPIUpgradeUrlValue = null;
      try {
        strCloudAPIUrlValue = aJsonDeviceSettings["cloudApiSettings.baseServerApiUrl"]["value"];
        strCloudAPIUpgradeUrlValue = aJsonDeviceSettings["cloudApiSettings.baseServerUpgradeUrl"]["value"];
      } catch(e){
        strCloudAPIUrlValue = null;
        strCloudAPIUpgradeUrlValue = null;
      }

      const aJsonFile:amFileInfo.am_general.A_FileInfo = self._aPlaybackGlobalConfig.getBootSettingsFolder();

      const jsonDeviceContent = self._aPlaybackGlobalConfig.getJsonDeviceSettings();
      let jsonUpdateContent = null;
      try {
        jsonUpdateContent = JSON.parse(JSON.stringify(jsonDeviceContent));
      } catch(e) {
        jsonUpdateContent = null;
      }
      
      if (jsonUpdateContent == null) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }
      
      const cbReadFile = function(ctx1: amContext.am_general.A_Context) {
        const strContent = ctx1.getResult();
        let logMessage: string = "";
        let jsonContent = null;
        if (ctx1 != null && !ctx1.isError()) {
          try {
            jsonContent = JSON.parse(strContent);
          } catch(e) {
            logMessage = `Settings Sync exception [uploadFulfillmentSettings]: ${e.message}`;
            if (self._debug) {
              console.log(`${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>${logMessage}</p>`;    
            }
    
            error.setError(ctx1.getError().getErrId(), `${logMessage}`);
            jsonContent = null;
          }

          if (jsonContent != null) {
            const strAppServerBaseUrl = jsonContent["app_server_base_url"];
            const strMediaServerBaseUrl = jsonContent["media_server_base_url"];

            if (typeof strAppServerBaseUrl === "string" && strAppServerBaseUrl.length > 0) {
              self._strFulfillmentAppServerBase = strAppServerBaseUrl;
              if (jsonUpdateContent["cloudApiSettings.baseServerUpgradeUrl"] == null) {
                jsonUpdateContent["cloudApiSettings.baseServerUpgradeUrl"] = {};  
              } 
              jsonUpdateContent["cloudApiSettings.baseServerUpgradeUrl"]["value"] = strAppServerBaseUrl;

              if (strCloudAPIUrlValue != null && strCloudAPIUrlValue.length > 0 && strCloudAPIUrlValue[0] === '$') {
                aJsonFile.setName("media_server_base_url.json");
                const errorReadFile:amError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
                const contextReadFile:amContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextReadFile.setRemoteCallback(true);
                return self._aSDKService._iSDKFileSystem.readTextFile2(aJsonFile.getStorage(), aJsonFile.getPath(), aJsonFile.getName(), 
                                            errorReadFile, contextReadFile, cbReadFile);
              }
            } else if (typeof strMediaServerBaseUrl === "string" && strMediaServerBaseUrl.length > 0) {
              self._strFulfillmentMediaServerBase = strMediaServerBaseUrl;
              if (jsonUpdateContent["cloudApiSettings.baseServerApiUrl"] == null) {
                jsonUpdateContent["cloudApiSettings.baseServerApiUrl"] = {};
              }
              jsonUpdateContent["cloudApiSettings.baseServerApiUrl"]["value"] = strMediaServerBaseUrl;
            }

            const crtTimestamp: number = Date.now();
            for (const key in jsonUpdateContent) {
              let settingValue = jsonUpdateContent[key];
              if (settingValue != null) {
                settingValue["timestamp"] = crtTimestamp;
              }
            }

            return self.updateServerSettings(jsonUpdateContent, null, error, context, callback);
          }
        } else {
          if (ctx1 != null) {
            error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
            logMessage = `[${error.getErrMsg()}]`;
          }
          if (self._debug) {
            console.log(`Settings Sync: read file failed: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Settings Sync: read file failed: ${logMessage}</p>`;    
          }
        }

        context != null && context.setError(error);
        callback != null && callback(context);
      }

      if (strCloudAPIUpgradeUrlValue != null && strCloudAPIUpgradeUrlValue.length > 0 && strCloudAPIUpgradeUrlValue[0] === '$') {
        aJsonFile.setName("app_server_base_url.json");
        const errorReadFile:amError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextReadFile:amContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextReadFile.setRemoteCallback(true);
        return self._aSDKService._iSDKFileSystem.readTextFile2(aJsonFile.getStorage(), aJsonFile.getPath(), aJsonFile.getName(), 
                                    errorReadFile, contextReadFile, cbReadFile);
      }

      if (strCloudAPIUrlValue != null && strCloudAPIUrlValue.length > 0 && strCloudAPIUrlValue[0] === '$') {
        aJsonFile.setName("media_server_base_url.json");
        const errorReadFile:amError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextReadFile:amContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextReadFile.setRemoteCallback(true);
        return self._aSDKService._iSDKFileSystem.readTextFile2(aJsonFile.getStorage(), aJsonFile.getPath(), aJsonFile.getName(), 
                                    errorReadFile, contextReadFile, cbReadFile);
      }

      context != null && context.setError(error);
      callback != null && callback(context);
    }

    public loadLocalDeviceSettings(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      const self = this;

      const aLocalSettingsFile:amFileInfo.am_general.A_FileInfo = this._aPlaybackGlobalConfig.getSettingsFolder();
      aLocalSettingsFile.setName("device_settings.json");

      const errorReadFile:amError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextReadFile:amContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextReadFile.setRemoteCallback(true);

      const callbackLoadSettings = function(ctx1: amContext.am_general.A_Context) {
        const fileName: string = aLocalSettingsFile.getName();
        let logMessage: string = "";
        if (ctx1 != null && !ctx1.isError()) {
          const strResult : string = ctx1.getResult();
          let jsonSettings = null;
          try {
            jsonSettings = JSON.parse(strResult);
          } catch(e) {
            logMessage = `Settings Sync exception [loadLocalDeviceSettings]: ${e.message}`;
            if (self._debug) {
              console.log(`${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>${logMessage}</p>`;    
            }
            error.setError(ctx1.getError().getErrId(), `${logMessage}`);
            jsonSettings = null;
          }

          if (jsonSettings != null) {
            if (fileName == "device_settings.json") {
              self._aPlaybackGlobalConfig.setJsonDeviceSettings(jsonSettings);
              self._aServerDeviceSettingsConfiguration.copyFromJson(jsonSettings);
            } else if (fileName == "settings_v2.json") {
              self._aPlaybackGlobalConfig.mapSettingsLocalToV2(jsonSettings);
              self._jsonSettingsV2 = jsonSettings;

              if (self._jsonSettingsV2["cloudApiSettings"] != null && self._jsonSettingsV2["cloudApiSettings"]["baseServerApiUrl"] != null) {
                self._aPlaybackGlobalConfig.setBaseServerApiUrl(self._jsonSettingsV2["cloudApiSettings"]["baseServerApiUrl"]);
              }
              if (self._jsonSettingsV2["hardwareSettings"] != null && self._jsonSettingsV2["hardwareSettings"]["serial"] != null) {
                self._aPlaybackGlobalConfig.setSerialNumber(self._jsonSettingsV2["hardwareSettings"]["serial"]);
              }
              if (self._jsonSettingsV2["syncsettings"] != null && self._jsonSettingsV2["syncsettings"]["remote_relative_path"] != null) {
                self._aPlaybackGlobalConfig.getSettingsSync().setRemoteRelativePath(self._jsonSettingsV2["syncsettings"]["remote_relative_path"]);
              }
              if (self._jsonSettingsV2["activity_log"] != null) {
                self.readActivityLogSettings(self._jsonSettingsV2["activity_log"]);
              }                    
            }
          }
        } else {
          if (ctx1 != null) {
            error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
            logMessage = `[${error.getErrMsg()}]`;
          }
          if (self._debug) {
            console.log(`Settings Sync: read Device Settings file failed: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Settings Sync: read Device Settings file failed: ${logMessage}</p>`;    
          }
        }

        if (fileName == "device_settings.json") {
          aLocalSettingsFile.setName("settings_v2.json");
          return self._aSDKService._iSDKFileSystem.readTextFile2(aLocalSettingsFile.getStorage(), aLocalSettingsFile.getPath(), aLocalSettingsFile.getName(), 
                              errorReadFile, contextReadFile, callbackLoadSettings);            
        }

        // we get here after the device_settings.json and settings_v2.json are both parsed
        return self.uploadFulfillmentSettings(error, context, callback);
      }

      self._aSDKService._iSDKFileSystem.readTextFile2(aLocalSettingsFile.getStorage(), aLocalSettingsFile.getPath(), aLocalSettingsFile.getName(), 
                          errorReadFile, contextReadFile, callbackLoadSettings); 
    }
  }
} 