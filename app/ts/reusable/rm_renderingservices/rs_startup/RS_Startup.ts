import amStartupMain = require("../../../abstract/am_renderingservices/as_startup/AI_StartupMain");
import amStartupConfig = require("../../../abstract/am_renderingservices/as_startup/AI_StartupConfig");
import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");

import amGeneralFactoryDescription             = require("../../../abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesSDKService         = require("../../../abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amTransversalServicesActivityLogService = require("../../../abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import amFileInfo = require("../../../abstract/am_general/a_fileinfo/A_FileInfo");

import amContext = require("../../../abstract/am_general/a_context/A_Context");
import amError   = require("../../../abstract/am_general/a_error/A_Error");
import amStartupService = require("../../../abstract/am_renderingservices/as_Startup/AS_Startup");

import rmStartupMain        = require("./RI_Startup_Main");
import rmStartupConfig      = require("./RI_Startup_Config");
import rmRenderingServices  = require("../r_renderingservice/R_RenderingService");

import amStartupSystemSettings    = require("../../../abstract/am_general/ae_systemsettings/AE_SystemSettings");
import amStartupAudioSettings     = require("../../../abstract/am_general/ae_systemsettings/AE_AudioSettings");
import amStartupVideoSettings     = require("../../../abstract/am_general/ae_systemsettings/AE_VideoSettings");
import amStartupTimeSettings      = require("../../../abstract/am_general/ae_systemsettings/AE_TimeSettings");
import amStartupLanguageSettings  = require("../../../abstract/am_general/ae_systemsettings/AE_LanguageSettings");
import amStartupSettings          = require("../../../abstract/am_general/ae_systemsettings/AE_StartupSettings");

import amGeneralSoundProperties   = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");
import amGeneralScreenProperties  = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralHttpRequest       = require("../../../abstract/am_general/a_httprequest/A_HttpRequest");
import amGeneralDateTime          = require("../../../abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone          = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");
import amGeneralPowerProperties   = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");

import amActivityLogMessageTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");

export module rm_renderingservices
{
  export class RS_StartupService extends rmRenderingServices.rm_renderingservices.R_RenderingService
                                    implements amStartupService.am_renderingservices.AS_StartupService
  {
    _iStartupMain : amStartupMain.am_renderingservices.AI_StartupMain;
    _iStartupConfig : amStartupConfig.am_renderingservices.AI_StartupConfig;

    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    _aPlaybackGlobalConfig : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
    _aHttpRequest : amGeneralHttpRequest.am_general.A_HttpRequest;

    _aStartupSettings: amStartupSettings.am_general.AE_StartupSettings;
    _aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;

    _bSetDefaultSettingsAtStartup: boolean;
    _jsonSettingsV2Unmapped: any;
    _jsonSettingsV2: any;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      error              : amError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iStartupMain = new rmStartupMain.rm_renderingservices.RI_StartupMain(this);
      this._iStartupConfig = new rmStartupConfig.rm_renderingservices.RI_StartupConfig(this);
      this._aLogService = aLogService;

      this._aHttpRequest = null;
      this._aStartupSettings = null;
      this._aActivityLogService = null;

      this._bSetDefaultSettingsAtStartup = true;

      this._jsonSettingsV2Unmapped = null;
      this._jsonSettingsV2 = null;
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

    public getDefaultStartupSettings(): amStartupSettings.am_general.AE_StartupSettings
    {
      return this._aStartupSettings;
    }
    public setDefaultStartupSettings(aStartupSettings: amStartupSettings.am_general.AE_StartupSettings): void
    {
      this._aStartupSettings = aStartupSettings;
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
    
    public init(error : amError.am_general.A_Error) : void
    {
      if (this._debug) {
        console.log(`Initializing Startup Service ...`);
        document.getElementById("rend.message").innerHTML += `<p>Initializing Startup Service ...</p>`;                    
      }
      this._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
        amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, this.getServiceName(),
        `Initializing Startup Service ...`, null, null, null);

      this._aHttpRequest = this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
    }

    public saveSettingsV2File(strFileName: string, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;

      const aFile:amFileInfo.am_general.A_FileInfo = self._aPlaybackGlobalConfig.getSettingsFolder();
      const errorSaveFile:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSaveFile:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextSaveFile.setRemoteCallback(true);

      const cbWriteFileModified = function(ctx: amContext.am_general.A_Context) {
        aFile.setName("settings_v2_modified.json");
        self._aSDKService._iSDKFileSystem.writeTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), 
                JSON.stringify(self._jsonSettingsV2, null, 2), errorSaveFile, contextSaveFile, callback); 
      }

      if (strFileName == "settings_v2_modified.json") {
        return cbWriteFileModified(null);
      } else if (strFileName === "settings_v2.json") {
        aFile.setName("settings_v2.json");
        return this._aSDKService._iSDKFileSystem.writeTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), 
                JSON.stringify(self._jsonSettingsV2Unmapped, null, 2), errorSaveFile, contextSaveFile, cbWriteFileModified);  
      }

      context != null && context.setError(error);
      callback != null && callback(context);
    }

    public restartDevice(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback, nextCbName: string): void
    {
      const self = this;

      const cbReboot = function (ctx1: amContext.am_general.A_Context) {
        if (ctx1 != null && !ctx1.isError()) {
          if (ctx1.getResult() === "not supported") {
            if (self._debug) {
              console.log(`Startup service: device restart feature not supported`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: device restart feature not supported</p>`;                    
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(),
              `device restart feature not supported`, null, null, null);
          } else {
            const retReboot: boolean = ctx1.getBoolResult();
            if (retReboot == false) {
              if (self._debug) {
                console.log(`Startup service: device restart failed`);
                document.getElementById("rend.message").innerHTML += `<p>Startup service: device restart failed</p>`;                    
              }
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                `device restart failed`, null, null, null);
            }
          }
        }

        if (nextCbName === "setDefaultTimeSettings") {
          self.setDefaultTimeSettings(null, error, context, callback);
        } else if (nextCbName === "getDeviceTimezone") {
          self.getDeviceTimezone(null, error, context, callback);
        } else {
          self.saveLastValues(null, error, context, callback);
        }
      }

      const aPowerProperties: amGeneralPowerProperties.am_general.A_PowerProperties = self._aServiceLocator._iEntityCreation.createDefaultPowerProperties(error);
      aPowerProperties.setPowerCommand("reboot");

      const errorExecPowerCmd:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextExecPowerCmd:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextExecPowerCmd.setRemoteCallback(true);
      self._aSDKService._iSDKPowerSetup.executePowerCommand(aPowerProperties, errorExecPowerCmd, contextExecPowerCmd, cbReboot);
    }

    public saveLastValues(aSystemSettings: amStartupSystemSettings.am_general.AE_SystemSettings,
      error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      context != null && context.setError(error);
      callback != null && callback(context);

      const self = this;
      if (aSystemSettings == null) {
        aSystemSettings = self._aStartupSettings.getSystemSettings();
      }

      if (aSystemSettings == null) {
        return;
      }

      const bSaveLastValuesAtStartup: boolean = aSystemSettings.getSaveSettingsLastValuesAtStartup();
      if (bSaveLastValuesAtStartup === true) {
        setTimeout(
          function saveLastValuesFn() {
            const aAudioSettings: amStartupAudioSettings.am_general.AE_AudioSettings = self._aStartupSettings.getAudioSettings();
            const aTimeSettings: amStartupTimeSettings.am_general.AE_TimeSettings = self._aStartupSettings.getTimeSettings();
            const aVideoSettings: amStartupVideoSettings.am_general.AE_VideoSettings = self._aStartupSettings.getVideoSettings();
            const aLanguageSettings: amStartupLanguageSettings.am_general.AE_LanguageSettings = self._aStartupSettings.getLanguageSettings();
            let bSettingsChanged: boolean = false;
      
            const cbGetVolume = function(ctx1: amContext.am_general.A_Context) {
              if (ctx1 != null && !ctx1.isError() && aAudioSettings != null) {
                try {
                  const audioVolume: number = parseInt(ctx1.getResult());
                  if (!isNaN(audioVolume) && audioVolume !== aAudioSettings.getLastVolumeLevel()) {
                    if (self._debug) {
                      console.log(`Startup service: saved last volume ${audioVolume}`);
                      document.getElementById("rend.message").innerHTML += `<p>Startup service: saved last volume ${audioVolume}</p>`;                    
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                      amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                      `saved last volume ${audioVolume}`, null, null, null);

                    self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_audio_settings"]["last_volume_level"] = audioVolume;
                    self._jsonSettingsV2["startup"]["default_system_settings"]["default_audio_settings"]["last_volume_level"] = audioVolume;
                    aAudioSettings.setLastVolumeLevel(audioVolume);
                    bSettingsChanged = true;
                  }  
                } catch (e) {
                  if (self._debug) {
                    console.log(`Startup service: saveLastValues exception ${e.message}`);
                    document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues exception ${e.message}</p>`;    
                  }          
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                    amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                    `Startup service: saveLastValues exception ${e.message}`, null, null, null);
                }
              } else {
                let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
                if (self._debug) {
                  console.log(`Startup service: saveLastValues error in getting device volume ${logMessage}`);
                  document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues error in getting device volume ${logMessage}</p>`;
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                  amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                  `saveLastValues error in getting device volume: ${logMessage}`, null, null, null);
              }

              const { height, orientation, width } = window.screen;
              const strOrientation = orientation.type.toString().split("-")[0].toLowerCase();
        
              try {
                if (height != aVideoSettings.getLastScreenHeight()) {
                  if (self._debug) {
                    console.log(`Startup service: saved last screen height ${height}`);
                    document.getElementById("rend.message").innerHTML += `<p>Startup service: saved last screen height ${height}</p>`;                    
                  }
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                    amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                    `saved last screen height ${height}`, null, null, null);

                  self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_display_settings"]["last_screen_height"] = height;
                  self._jsonSettingsV2["startup"]["default_system_settings"]["default_display_settings"]["last_screen_height"] = height;
                  aVideoSettings.setLastScreenHeight(height);  
                  bSettingsChanged = true;
                }
                if (width != aVideoSettings.getLastScreenWidth()) {
                  if (self._debug) {
                    console.log(`Startup service: saved last screen width ${width}`);
                    document.getElementById("rend.message").innerHTML += `<p>Startup service: saved last screen width ${width}</p>`;                    
                  }
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                    amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                    `saved last screen width ${width}`, null, null, null);

                  self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_display_settings"]["last_screen_width"] = width;
                  self._jsonSettingsV2["startup"]["default_system_settings"]["default_display_settings"]["last_screen_width"] = width;
                  aVideoSettings.setLastScreenWidth(width);  
                  bSettingsChanged = true;
                }
                if (strOrientation != aVideoSettings.getLastScreenOrientation()) {
                  if (self._debug) {
                    console.log(`Startup service: saved last screen orientation ${strOrientation}`);
                    document.getElementById("rend.message").innerHTML += `<p>Startup service: saved last screen orientation ${strOrientation}</p>`;                    
                  }
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                    amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                    `saved last screen orientation ${strOrientation}`, null, null, null);

                  self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_display_settings"]["last_screen_orientation"] = strOrientation;
                  self._jsonSettingsV2["startup"]["default_system_settings"]["default_display_settings"]["last_screen_orientation"] = strOrientation;
                  aVideoSettings.setLastScreenOrientation(strOrientation);  
                  bSettingsChanged = true;
                }  
              } catch(e) {
                if (self._debug) {
                  console.log(`Startup service: saveLastValues exception ${e.message}`);
                  document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues exception ${e.message}</p>`;    
                }
              }

              const cbGetScreenProps = function(ctx2: amContext.am_general.A_Context) {
                if (ctx2 != null && !ctx2.isError() && aVideoSettings != null) {
                  const brightnessLevel: number = ctx2.getIntResult();
                  if (brightnessLevel !== aVideoSettings.getLastBrightnessLevel()) {
                    try {
                      if (self._debug) {
                        console.log(`Startup service: saved last brightness ${brightnessLevel}`);
                        document.getElementById("rend.message").innerHTML += `<p>Startup service: saved last brightness ${brightnessLevel}</p>`;                    
                      }
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                        amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                        `saved last brightness ${brightnessLevel}`, null, null, null);
    
                      self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_display_settings"]["last_brightness_level"] = brightnessLevel;
                      self._jsonSettingsV2["startup"]["default_system_settings"]["default_display_settings"]["last_brightness_level"] = brightnessLevel;
                      aVideoSettings.setLastBrightnessLevel(brightnessLevel);        
                      bSettingsChanged = true;  
                    } catch(e) {
                      if (self._debug) {
                        console.log(`Startup service: saveLastValues exception ${e.message}`);
                        document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues exception ${e.message}</p>`;    
                      }              
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                        amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                        `Startup service: saveLastValues exception ${e.message}`, null, null, null);
                    }
                  }
                } else {
                  let logMessage: string = (ctx2 != null) ? `[${ctx2.getError().getErrMsg()}]` : "";
                  if (self._debug) {
                    console.log(`Startup service: saveLastValues error in getting screen properties: ${logMessage}`);
                    document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues error in getting screen properties: ${logMessage}</p>`;    
                  }
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                    amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                    `saveLastValues error in getting screen properties: ${logMessage}`, null, null, null);      
                }

                const cbGetTimeZone = function(ctx3: amContext.am_general.A_Context) {
                  if (ctx3 != null && !ctx3.isError() && aTimeSettings != null) {
                    const timeZone: amGeneralTimeZone.am_general.A_TimeZone = <amGeneralTimeZone.am_general.A_TimeZone>ctx3.getObjectResult();
                    const timeZoneLocal: amGeneralTimeZone.am_general.A_TimeZone = self._aServiceLocator._iEntityCreation.createDefaultTimeZone(error);
                    timeZoneLocal.copyFromJson(timeZone);

                    const deviceTimezone: string = timeZoneLocal.getIANAString();
                    if (deviceTimezone !== aTimeSettings.getLastDeviceTimeZone()) {
                      try {
                        if (self._debug) {
                          console.log(`Startup service: saved last timezone ${deviceTimezone}`);
                          document.getElementById("rend.message").innerHTML += `<p>Startup service: saved last timezone ${deviceTimezone}</p>`;                    
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                          amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                          `saved last timezone ${deviceTimezone}`, null, null, null);
  
                        self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_time_settings"]["last_device_time_zone"] = deviceTimezone;
                        self._jsonSettingsV2["startup"]["default_system_settings"]["default_time_settings"]["last_device_time_zone"] = deviceTimezone;
                        aTimeSettings.setLastDeviceTimeZone(deviceTimezone);
                        self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_time_settings"]["last_ntp_timezone"] = deviceTimezone;
                        self._jsonSettingsV2["startup"]["default_system_settings"]["default_time_settings"]["last_ntp_timezone"] = deviceTimezone;
                        aTimeSettings.setLastNTPTimeZone(deviceTimezone); 
                        bSettingsChanged = true;  
                      } catch(e) {
                        if (self._debug) {
                          console.log(`Startup service: saveLastValues exception ${e.message}`);
                          document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues exception ${e.message}</p>`;    
                        }             
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                          amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                          `Startup service: saveLastValues exception ${e.message}`, null, null, null);
                      }
                    }
                  } else {
                    let logMessage: string = (ctx3 != null) ? `[${ctx3.getError().getErrMsg()}]` : "";
                    if (self._debug) {
                      console.log(`Startup service: saveLastValues error in getting device timezone: ${logMessage}`);
                      document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues error in getting device timezone: ${logMessage}</p>`;
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                      amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                      `saveLastValues error in getting device timezone: ${logMessage}`, null, null, null);
                  }

                  const cbGetUseNTP = function(ctx4: amContext.am_general.A_Context) {
                    if (ctx4 != null && !ctx4.isError() && ctx4.getResult() !== "not supported" && aTimeSettings != null ) {
                      const bUseNTP = ctx4.getBoolResult();
                      if (bUseNTP !== aTimeSettings.getLastUseNTP()) {
                        try {
                          let strNTPUse: string = bUseNTP ? "USE" : "UNUSE";
                          if (self._debug) {
                            console.log(`Startup service: saved last NTP use ${strNTPUse}`);
                            document.getElementById("rend.message").innerHTML += `<p>Startup service: saved last NTP use ${strNTPUse}</p>`;                    
                          }
                          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                            `saved last NTP use ${strNTPUse}`, null, null, null);
  
                          self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_time_settings"]["last_use_ntp"] = bUseNTP;
                          self._jsonSettingsV2["startup"]["default_system_settings"]["default_time_settings"]["last_use_ntp"] = bUseNTP;
                          aTimeSettings.setLastUseNTP(bUseNTP);        
                          bSettingsChanged = true;  
                        } catch(e) {
                          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                            `Startup service: saveLastValues exception ${e.message}`, null, null, null);

                          if (self._debug) {
                            console.log(`Startup service: saveLastValues exception ${e.message}`);
                            document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues exception ${e.message}</p>`;    
                          }             
                        }
                      }
                    } else {
                      let logMessage: string = (ctx4 != null) ? `[${ctx4.getError().getErrMsg()}]` : "";
                      if (self._debug) {
                        console.log(`Startup service: saveLastValues error in getting Use NTP: ${logMessage}`);
                        document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues error in getting Use NTP: ${logMessage}</p>`;
                      }
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                        amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                        `saveLastValues error in getting Use NTP: ${logMessage}`, null, null, null);          
                    }
                    
                    const cbGetNTPServerUrl = function(ctx5: amContext.am_general.A_Context) {
                      if (ctx5 != null && !ctx5.isError() && ctx5.getBoolResult() !== false && aTimeSettings != null) {
                        const strNTPServer: string = ctx5.getResult();
                        if (strNTPServer !== aTimeSettings.getLastNTPServerUrl()) {
                          try {
                            if (self._debug) {
                              console.log(`Startup service: saved last NTP server ${strNTPServer}`);
                              document.getElementById("rend.message").innerHTML += `<p>Startup service: saved last NTP server ${strNTPServer}</p>`;                    
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                              `saved last NTP server ${strNTPServer}`, null, null, null);
  
                            self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_time_settings"]["last_ntp_server_url"] = strNTPServer;
                            self._jsonSettingsV2["startup"]["default_system_settings"]["default_time_settings"]["last_ntp_server_url"] = strNTPServer;
                            aTimeSettings.setLastNTPServerUrl(strNTPServer);        
                            bSettingsChanged = true;  
                          } catch(e) {
                            if (self._debug) {
                              console.log(`Startup service: saveLastValues exception ${e.message}`);
                              document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues exception ${e.message}</p>`;    
                            }             
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                              `Startup service: saveLastValues exception ${e.message}`, null, null, null);
                          }  
                        }
                      }

                      const cbGetLanguage = function(ctx6: amContext.am_general.A_Context) {
                        if (ctx6 != null && !ctx6.isError() && aLanguageSettings != null) {
                          const systemLanguage: string = ctx6.getResult();
                          try {
                            const strSystemLanguage: string = systemLanguage.replace('_', '-');
                            if (strSystemLanguage !== aLanguageSettings.getLastLanguage()) {
                              if (self._debug) {
                                console.log(`Startup service: saved last language ${strSystemLanguage}`);
                                document.getElementById("rend.message").innerHTML += `<p>Startup service: saved last language ${strSystemLanguage}</p>`;                    
                              }
                              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                                amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                                `saved last language ${strSystemLanguage}`, null, null, null);
  
                              self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_language_settings"]["last_device_main_language"] = strSystemLanguage;
                              self._jsonSettingsV2["startup"]["default_system_settings"]["default_language_settings"]["last_device_main_language"] = strSystemLanguage;
                              aLanguageSettings.setLastLanguage(strSystemLanguage);        
                              bSettingsChanged = true;
                            }  
                          } catch(e) {
                            if (self._debug) {
                              console.log(`Startup service: saveLastValues exception ${e.message}`);
                              document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues exception ${e.message}</p>`;    
                            }              
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                              `Startup service: saveLastValues exception ${e.message}`, null, null, null);
                          }
                        } else {
                          let logMessage: string = (ctx6 != null) ? `[${ctx6.getError().getErrMsg()}]` : "";
                          if (self._debug) {
                            console.log(`Startup service: saveLastValues error in getting device language: ${logMessage}`);
                            document.getElementById("rend.message").innerHTML += `<p>Startup service: saveLastValues error in getting device language: ${logMessage}</p>`;
                          }
                          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                            `saveLastValues error in getting device language: ${logMessage}`, null, null, null);       
                        }
      
                        if (bSettingsChanged === true) {
                          // self._aPlaybackGlobalConfig.setSettingsV2FromDisk(jsonSettingsV2FromDisk);
                          self.saveSettingsV2File("settings_v2.json", error, context, null);
                        }
                      }
      
                      const errorGetLanguage:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                      const contextGetLanguage:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
                      contextGetLanguage.setRemoteCallback(true);
                      self._aSDKService._iSDKGeneralConfiguration.getOSDLanguages(errorGetLanguage, contextGetLanguage, cbGetLanguage);                        
                    }

                    const errorGetNTPServerUrl:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                    const contextGetNTPServerUrl:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    contextGetNTPServerUrl.setRemoteCallback(true);
                    self._aSDKService._iSDKTimeSetup.getNTPServer(errorGetNTPServerUrl, contextGetNTPServerUrl, cbGetNTPServerUrl);  
                  }

                  const errorGetUseNTP:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                  const contextGetUseNTP:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
                  contextGetUseNTP.setRemoteCallback(true);
                  self._aSDKService._iSDKTimeSetup.getUseNTP(errorGetUseNTP, contextGetUseNTP, cbGetUseNTP);          
                }

                const errorGetTimeZone:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                const contextGetTimeZone:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextGetTimeZone.setRemoteCallback(true);
                self._aSDKService._iSDKTimeSetup.getTimeZone(errorGetTimeZone, contextGetTimeZone, cbGetTimeZone);  
              }

              const errorGetBrightness:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
              const contextGetBrightness:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
              contextGetBrightness.setRemoteCallback(true);
              self._aSDKService._iSDKGeneralConfiguration.getScreenProperties(errorGetBrightness, contextGetBrightness, cbGetScreenProps);
            }

            const errorGetVolume:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
            const contextGetVolume:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextGetVolume.setRemoteCallback(true);
            self._aSDKService._iSDKAudioSetup.getVolumeLevel(errorGetVolume, contextGetVolume, cbGetVolume);

            const bSaveLastValuesAtRefreshRate: boolean = aSystemSettings.getSaveSettingsLastValuesAtRefreshRate();
            const nIntervalSaveLastValues: number = aSystemSettings.getSaveSettingsLastValuesRefreshTime();
            if (bSaveLastValuesAtRefreshRate === true && nIntervalSaveLastValues != null && nIntervalSaveLastValues > 0) {
              setTimeout(saveLastValuesFn, nIntervalSaveLastValues * 1000);
            }
          }, 2000);
      }
    }

    public setDefaultLanguage(strDefaultLanguage: string, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;

      const strLanguage: string = strDefaultLanguage.replace('-', '_');
      const arrayLanguages:Array<string> = new Array<string>();
      arrayLanguages.push(strLanguage);

      const cbSetLanguage = function(ctx1: amContext.am_general.A_Context) {
        if (ctx1 != null && !ctx1.isError()) {
          if (ctx1.getBoolResult() === false) {
            if (self._debug) {
              console.log(`Set language feature not supported`);
              document.getElementById("rend.message").innerHTML += `<p>Set language feature not supported</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(),
              `set language feature not supported`, null, null, null);  
          } else {
            if (self._debug) {
              console.log(`Startup service: set default language ${strDefaultLanguage}`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: set default language ${strDefaultLanguage}</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
              `set default language: ${strDefaultLanguage}`, null, null, null);  
          }
        } else {
          let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
          if (self._debug) {
            console.log(`Startup service: set default language error: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Startup service: set default language error: ${logMessage}</p>`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `set default language error: ${logMessage}`, null, null, null);
        }
        self.saveLastValues(null, error, context, callback);
      }

      const errorSetLanguage:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSetLanguage:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextSetLanguage.setRemoteCallback(true);
      self._aSDKService._iSDKGeneralConfiguration.setOSDLanguages(arrayLanguages, errorSetLanguage, contextSetLanguage, cbSetLanguage);
    }

    public setDefaultLanguageSettings(aLanguageSettings: amStartupLanguageSettings.am_general.AE_LanguageSettings,
      error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      if (aLanguageSettings == null) {
        aLanguageSettings = self._aStartupSettings.getLanguageSettings();
      }

      if (aLanguageSettings == null) {
        return self.saveLastValues(null, error, context, callback);
      }

      const settingsLanguage: string = aLanguageSettings.getDefaultLanguage();
      const bApplyDefaultLanguage: boolean = aLanguageSettings.getApplyDefaultLanguage();

      if (settingsLanguage != null && settingsLanguage.length > 0 && bApplyDefaultLanguage === true && self._bSetDefaultSettingsAtStartup === true) {
        const cbGetLanguage = function(ctx1: amContext.am_general.A_Context) {
          if (ctx1 != null && !ctx1.isError()) {
            const deviceLanguage: string = ctx1.getResult();
            const strDeviceLanguage: string = deviceLanguage.replace('_', '-');
            if (settingsLanguage === strDeviceLanguage) {
              return self.saveLastValues(null, error, context, callback);
            }
          } else {
            let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
            if (self._debug) {
              console.log(`Startup service: Error in getting device language: ${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in getting device language: ${logMessage}</p>`;    
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `error in getting device language: ${logMessage}`, null, null, null);              
          }
          self.setDefaultLanguage(settingsLanguage, error, context, callback);
        }  
        const errorGetLanguage:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextGetLanguage:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextGetLanguage.setRemoteCallback(true);
        return self._aSDKService._iSDKGeneralConfiguration.getOSDLanguages(errorGetLanguage, contextGetLanguage, cbGetLanguage);  
      }
      self.saveLastValues(null, error, context, callback);
    }

    public setDeviceTimeAsDeviceTime(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      const cbGetTime = function(ctx1: amContext.am_general.A_Context) {
        if (ctx1 != null && !ctx1.isError()) {
          const resDateTime: string = ctx1.getResult();
          const errorDateTime:amError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          const newDateTime: amGeneralDateTime.am_general.A_DateTime  = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
          self._aUtilsService._iUtilsDateTime.getDateTime(newDateTime, resDateTime);
          const cbSetDate = function(ctx2: amContext.am_general.A_Context) {
            if (ctx2 != null && !ctx2.isError()) {
              if (self._debug) {
                console.log(`Startup service: set device time as device time ${resDateTime.toString()}`);
                document.getElementById("rend.message").innerHTML += `<p>Startup service: set device time as device time ${resDateTime.toString()}</p>`;
              }
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                `set device time as device time ${resDateTime.toString()}`, null, null, null);

              const crtDate = new Date();
              const year: number = crtDate.getFullYear();
              if (year < 2020) { // invalid JS date - probably the device have no Intervet connection and is was just turned on
                if (self._debug) {
                  console.log(`Startup service: invalid JS date ${crtDate.toString()}`);
                  document.getElementById("rend.message").innerHTML += `<p>Startup service: invalid JS date ${crtDate.toString()}</p>`;
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                  amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(),
                  `invaid JS date ${crtDate.toString()}`, null, null, null);
              }
            } else {
              let logMessage: string = (ctx2 != null) ? `[${ctx2.getError().getErrMsg()}]` : "";
              if (self._debug) {
                console.log(`Startup service: Error in setting device time as device time: ${logMessage}`);
                document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in setting device time as device time: ${logMessage}</p>`;
              }
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                `error in setting device time as device time: ${logMessage}`, null, null, null);
            }
            self.setDefaultLanguageSettings(null, error, context, callback);
          }
          const errorSetDate:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
          const contextSetDate:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
          contextSetDate.setRemoteCallback(true);    
          return self._aSDKService._iSDKTimeSetup.setCrtDateTime(newDateTime, errorSetDate, contextSetDate, cbSetDate);    
        } else {
          let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
          if (self._debug) {
            console.log(`Startup service: Error in getting device time: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in getting device time: ${logMessage}</p>`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `error in getting device time: ${logMessage}`, null, null, null);
        }
        self.setDefaultLanguageSettings(null, error, context, callback);
      }
      const errorGetCrtDate:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextGetCrtDate:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextGetCrtDate.setRemoteCallback(true);
      self._aSDKService._iSDKTimeSetup.getCrtDateTime(errorGetCrtDate, contextGetCrtDate, cbGetTime);
    }

    public setDeviceTimeAsServerTime(nTimezoneOffset: number, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;

      const bUseMoodServer: boolean = self._aStartupSettings.getTimeSettings().getUseMoodServer();
      const strServerUrlRelativePath: string = self._aStartupSettings.getTimeSettings().getServerUrl();
      if (strServerUrlRelativePath == null || strServerUrlRelativePath == "") {
        if (self._debug) {
          console.log(`Startup service: setDeviceTimeAsServerTime empty server URL`);
          document.getElementById("rend.message").innerHTML += `<p>Startup service: setDeviceTimeAsServerTime empty server URL</p>`;
        }
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
          amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
          `error in setDeviceTimeAsServerTime: server time url missing`, null, null, null);

        return self.setDefaultLanguageSettings(null, error, context, callback);
      }

      const strServerUrl: string = bUseMoodServer === true ? `${self._aPlaybackGlobalConfig.getBaseServerApiUrl()}/${strServerUrlRelativePath}` : strServerUrlRelativePath;

      self._aHttpRequest.reset();
      self._aHttpRequest.setMethod("GET");
      self._aHttpRequest.setUrlPath(strServerUrl);

      let strHttpServerUrl = "";

      const requestSent = function(ctx1: amContext.am_general.A_Context) {
        if (ctx1 != null && !ctx1.isError()) {
          strHttpServerUrl.length == 0 && (strHttpServerUrl = strServerUrl); 
          const strServerTime: string = ctx1.getResult();
          try {
            if (strServerTime != null) {
              const res = strServerTime.split(" ");
              if (res != null && res.length == 2) {
                const part1: string = res[0];
                const [monthIndex, day, year] = part1.split('-');
                const part2: string = res[1];
                const [hours, minutes, secs] = part2.split(':');
                const nMonths: number = parseInt(monthIndex);
                const nDay: number = parseInt(day);
                const nYear: number = parseInt(year);
                const nHours: number = parseInt(hours);
                const nMinutes: number = parseInt(minutes);
                const nSecs: number = parseInt(secs);
                
                if (!isNaN(nMonths) && nMonths >= 1 && nMonths <= 12 &&
                    !isNaN(nDay) && nDay >= 1 && nDay <= 31 && 
                    !isNaN(nYear) && nYear >= 2020 && 
                    !isNaN(nHours) && nHours >= 0 && nHours <= 23 && 
                    !isNaN(nMinutes) && nMinutes >= 0 && nMinutes <= 59 && 
                    !isNaN(nSecs) && nSecs >= 0 && nSecs <= 59) {
                  const newDate = new Date(nYear, nMonths - 1, nDay, nHours, nMinutes + nTimezoneOffset, nSecs);

                  // set system time
                  const errorDateTime:amError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
                  const newDateTime: amGeneralDateTime.am_general.A_DateTime  = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);            
                  self._aUtilsService._iUtilsDateTime.getDateTime(newDateTime, newDate.toString());

                  const cbSetDate = function(ctx2: amContext.am_general.A_Context) {
                    if (ctx2 != null && !ctx2.isError()) {
                      if (self._debug) {
                        console.log(`Startup service: set time as server time ${newDate.toString()}`);
                        document.getElementById("rend.message").innerHTML += `<p>Startup service: set time as server time ${newDate.toString()}</p>`;
                      }
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                        amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                        `set device time as server time ${newDate.toString()}`, null, null, null);
                    } else {
                      let logMessage: string = (ctx2 != null) ? `[${ctx2.getError().getErrMsg()}]` : "";
                      if (self._debug) {
                        console.log(`Startup service: Error in setting device time as server time: ${logMessage}`);
                        document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in setting device time as server time: ${logMessage}</p>`;
                      }
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                        amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                        `error in setting device time as server time: ${logMessage}`, null, null, null);
                    }
                    self.setDefaultLanguageSettings(null, error, context, callback);
                  }
                  const errorSetDate:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                  const contextSetDate:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
                  contextSetDate.setRemoteCallback(true);            
                  return self._aSDKService._iSDKTimeSetup.setCrtDateTime(newDateTime, errorSetDate, contextSetDate, cbSetDate);
                }
              }
            }            
          } catch (e) {
            if (self._debug) {
              console.log(`Startup service: setDeviceTimeAsServerTime exception ${e.message}`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: setDeviceTimeAsServerTime exception ${e.message}</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `setDeviceTimeAsServerTime exception ${e.message}`, null, null, null);
          }
        } else {
          let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
          if (self._debug) {
            console.log(`Startup service: error in http request ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Startup service: error in http request ${logMessage}</p>`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `error in http request ${logMessage}`, null, null, null); 
        }

        if (strHttpServerUrl.length == 0) {
          // fallback to http
          strHttpServerUrl = strServerUrl;
          if (strHttpServerUrl.startsWith("https://")) {
            strHttpServerUrl = strHttpServerUrl.substr(0, 4) + strHttpServerUrl.substr(5);
          } else {
            strHttpServerUrl = `http://${strHttpServerUrl}`; 
          }

          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
            `setDeviceTimeAsServerTime fallback to http ${strHttpServerUrl}`, null, null, null);
  
          self._aHttpRequest.reset();
          self._aHttpRequest.setMethod("GET");
          self._aHttpRequest.setUrlPath(strHttpServerUrl);
  
          const errorSendRequest1:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
          const contextSendRequest1:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      
          contextSendRequest1.setRemoteCallback(true);
          self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest1, contextSendRequest1, requestSent);            
        } else {
          // fallback to device time
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
            `setDeviceTimeAsServerTime fallback to device time`, null, null, null);

          self.setDeviceTimeAsDeviceTime(error, context, callback);
        }
      }

      const errorSendRequest:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSendRequest:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      
      contextSendRequest.setRemoteCallback(true);
      self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
    }

    public setDefaultTimeSettings(aTimeSettings: amStartupTimeSettings.am_general.AE_TimeSettings,
      error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      if (aTimeSettings == null) {
        aTimeSettings = self._aStartupSettings.getTimeSettings();
      }

      if (aTimeSettings == null) {
        return self.setDefaultLanguageSettings(null, error, context, callback);
      }

      const bApplyServerTime: boolean = aTimeSettings.getApplyServerTimeAsDevieTimeAtStartup();
      const bApplyDeviceTimeZone: boolean = aTimeSettings.getApplyDefaultDeviceTimeZoneAtStartup();
      const deviceTimezone: string = aTimeSettings.getDefaultDeviceTimeZone();
      const serverTimezone: string = aTimeSettings.getServerTimeZone();

      if (deviceTimezone != null && deviceTimezone.length > 0 && serverTimezone != null && serverTimezone.length > 0 && 
          bApplyServerTime === true && self._bSetDefaultSettingsAtStartup === true) 
      {
        const errorTimeZone:amError.am_general.A_Error    = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var aServerTimezone: amGeneralTimeZone.am_general.A_TimeZone = self._aServiceLocator._iEntityCreation.createDefaultTimeZone(errorTimeZone);
        let [continent, country, city] = serverTimezone.split('/');
        continent != null && aServerTimezone.setContinent(continent);
        country != null && aServerTimezone.setCountry(country);
        city != null && aServerTimezone.setCity(city);

        var aDeviceTimezone: amGeneralTimeZone.am_general.A_TimeZone = self._aServiceLocator._iEntityCreation.createDefaultTimeZone(errorTimeZone);
        [continent, country, city] = deviceTimezone.split('/');
        continent != null && aDeviceTimezone.setContinent(continent);
        country != null && aDeviceTimezone.setCountry(country);
        city != null && aDeviceTimezone.setCity(city);

        const cbGetServerTZOffset = function(ctx1: amContext.am_general.A_Context) {
          let nServerTimeZoneOffset:number = 0, nDeviceTimeZoneOffset:number = 0, nTZOffset = 0;
          if (ctx1 != null && !ctx1.isError()) {
            nServerTimeZoneOffset = ctx1.getIntResult();
            const cbGetDeviceTZOffset = function(ctx2: amContext.am_general.A_Context) {
              if (ctx2 != null && !ctx2.isError()) {
                nDeviceTimeZoneOffset = ctx2.getIntResult();
                nTZOffset = bApplyDeviceTimeZone === true ? nDeviceTimeZoneOffset - nServerTimeZoneOffset : nServerTimeZoneOffset;
              } else {
                let logMessage: string = (ctx2 != null) ? `[${ctx2.getError().getErrMsg()}]` : "";
                if (self._debug) {
                  console.log(`Startup service: Error in getting device timezone offset ${deviceTimezone}: ${logMessage}`);
                  document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in getting device timezone offset ${deviceTimezone}: ${logMessage}</p>`;
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                  amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                  `error in getting device timezone offset ${deviceTimezone}: ${logMessage}`, null, null, null); 
                nTZOffset = nServerTimeZoneOffset;
              }
              self.setDeviceTimeAsServerTime(nTZOffset, error, context, callback);
            }
            const errorGetTimezoneOffset1:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
            const contextGetTimezoneOffset1:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextGetTimezoneOffset1.setRemoteCallback(true);
            self._aSDKService._iSDKTimeSetup.getTimeZoneOffset(aDeviceTimezone, errorGetTimezoneOffset1, contextGetTimezoneOffset1, cbGetDeviceTZOffset);
          } else {
            let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
            if (self._debug) {
              console.log(`Startup service: Error in getting server timezone offset ${serverTimezone}: ${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in getting server timezone offset ${serverTimezone}: ${logMessage}</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `error in getting server timezone offset ${serverTimezone}: ${logMessage}`, null, null, null);  
            self.setDefaultLanguageSettings(null, error, context, callback);
          }
        }
        const errorGetTimezoneOffset:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextGetTimezoneOffset:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextGetTimezoneOffset.setRemoteCallback(true);
        return self._aSDKService._iSDKTimeSetup.getTimeZoneOffset(aServerTimezone, errorGetTimezoneOffset, contextGetTimezoneOffset, cbGetServerTZOffset);
      }

      self.setDefaultLanguageSettings(null, error, context, callback);
    }

    public setDeviceTimezone(aTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;

      const cbSetTimeZone = function(ctx1: amContext.am_general.A_Context) {
        if (ctx1 != null && !ctx1.isError()) {
          if (self._debug) {
            console.log(`Startup service: set device timezone ${aTimeZone.getIANAString()}`);
            document.getElementById("rend.message").innerHTML += `<p>Startup service: set device timezone ${aTimeZone.getIANAString()}</p>`; 
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
            `set device timezone ${aTimeZone.getIANAString()}`, null, null, null);
        } else {
          let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
          if (self._debug) {
            console.log(`Startup service: Error in setting device timezone ${aTimeZone.getIANAString()}: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in setting device timezone ${aTimeZone.getIANAString()}: ${logMessage}</p>`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `error in setting device timezone ${aTimeZone.getIANAString()}: ${logMessage}`, null, null, null);
        }
        self.setDefaultTimeSettings(null, error, context, callback);
      }
      const errorSetTimeZone:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSetTimeZone:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextSetTimeZone.setRemoteCallback(true);
      self._aSDKService._iSDKTimeSetup.setTimeZone(aTimeZone, errorSetTimeZone, contextSetTimeZone, cbSetTimeZone);
    }

    public getDeviceTimezone(aTimeSettings: amStartupTimeSettings.am_general.AE_TimeSettings,
      error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      if (aTimeSettings == null) {
        aTimeSettings = self._aStartupSettings.getTimeSettings();
      }

      if (aTimeSettings == null) {
        return self.setDefaultLanguageSettings(null, error, context, callback);
      }

      const bApplyDeviceTimeZone: boolean = aTimeSettings.getApplyDefaultDeviceTimeZoneAtStartup();
      const strNTPTimezone: string = aTimeSettings.getNTPTimeZone();
      if (strNTPTimezone != null && strNTPTimezone.length > 0 && bApplyDeviceTimeZone === true && self._bSetDefaultSettingsAtStartup === true) {
        const cbGetTimeZone = function(ctx1: amContext.am_general.A_Context) {
          const errorTimeZone:amError.am_general.A_Error    = self._aServiceLocator._iEntityCreation.createDefaultError();   
          const aTimeZone: amGeneralTimeZone.am_general.A_TimeZone = self._aServiceLocator._iEntityCreation.createDefaultTimeZone(errorTimeZone);
          
          const [continent, country, city] = strNTPTimezone.split('/');
          continent != null && aTimeZone.setContinent(continent);
          country != null && aTimeZone.setCountry(country);
          city != null && aTimeZone.setCity(city);
          
          if (ctx1 != null && !ctx1.isError()) {
            const timeZone: amGeneralTimeZone.am_general.A_TimeZone = <amGeneralTimeZone.am_general.A_TimeZone>ctx1.getObjectResult();
            const timeZoneLocal: amGeneralTimeZone.am_general.A_TimeZone = self._aServiceLocator._iEntityCreation.createDefaultTimeZone(error);
            timeZoneLocal.copyFromJson(timeZone);

            const deviceTimezone: string = timeZoneLocal.getIANAString();
            if (deviceTimezone === strNTPTimezone) {
              return self.setDefaultTimeSettings(null, error, context, callback);
            }
          } else {
            let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
            if (self._debug) {
              console.log(`Startup service: Error in getting device timezone: ${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in getting device timezone: ${logMessage}</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `error in getting device timezone: ${logMessage}`, null, null, null);
          }
          self.setDeviceTimezone(aTimeZone, error, context, callback);
        }
        const errorGetTimeZone:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextGetTimeZone:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextGetTimeZone.setRemoteCallback(true);
        return self._aSDKService._iSDKTimeSetup.getTimeZone(errorGetTimeZone, contextGetTimeZone, cbGetTimeZone);  
      }
      
      self.setDefaultTimeSettings(null, error, context, callback);  
    }

    public setDeviceNTPServer(strServerUrl: string, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;

      const cbSetNTPServerUrl = function(ctx1: amContext.am_general.A_Context) {
        if (ctx1 != null && !ctx1.isError()) {
          if (ctx1.getBoolResult() === false) {
            if (self._debug) {
              console.log(`Set NTP server feature not supported`);
              document.getElementById("rend.message").innerHTML += `<p>Set NTP server feature not supported</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(),
              `set NTP server feature not supported`, null, null, null);
          } else {
            if (self._debug) {
              console.log(`Startup service: set NTP server ${strServerUrl}. Restarting...`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: set NTP server ${strServerUrl}. Restarting...</p>`; 
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
              `set NTP server ${strServerUrl}. Restarting...`, null, null, null);

            return self.restartDevice(error, context, callback, "getDeviceTimezone");
          }
        } else {
          let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
          if (self._debug) {
            console.log(`startup service: Error in setting NTP server ${strServerUrl}: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in setting NTP server ${strServerUrl}: ${logMessage}</p>`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `error in setting NTP server ${strServerUrl}: ${logMessage}`, null, null, null);
        }
        self.getDeviceTimezone(null, error, context, callback);
      }

      const errorSetNTPServerUrl:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSetNTPServerUrl:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextSetNTPServerUrl.setRemoteCallback(true);
      self._aSDKService._iSDKTimeSetup.setNTPServer(strServerUrl, errorSetNTPServerUrl, contextSetNTPServerUrl, cbSetNTPServerUrl);
    }

    public checkJSTimeAndSetNTPUNUSE(strNTPServer: string, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;

      const crtDate = new Date();
      const year: number = crtDate.getFullYear();
      if (year < 2020) { // NTP server is invalid -> set NTP off
        if (self._debug) {
          console.log(`Startup service: invalid JS date for NTP server ${strNTPServer}. Set NTP UNUSE ...`);
          document.getElementById("rend.message").innerHTML += `<p>Startup service: invalid JS date for NTP server ${strNTPServer}. Set NTP UNUSE ...</p>`;
        }
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
          amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(),
          `invaid JS date for NTP server ${strNTPServer}. Set NTP UNUSE ...`, null, null, null);

        const cbUseNTP = function(ctx1: amContext.am_general.A_Context) {
          if (ctx1 != null && !ctx1.isError()) {
            if (ctx1.getBoolResult() === false) {
              if (self._debug) {
                console.log(`Startup service: invalid JS date for NTP server ${strNTPServer} -> set NTP USE/UNUSE feature not supported`);
                document.getElementById("rend.message").innerHTML += `<p>Startup service: invalid JS date for NTP server ${strNTPServer} -> set NTP USE/UNUSE feature not supported</p>`;
              }
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(),
                `invaid JS date for NTP server ${strNTPServer} -> set NTP USE/UNUSE feature not supported`, null, null, null);
            } else {
              if (self._debug) {
                console.log(`Startup service: invalid JS date for NTP server ${strNTPServer} -> set NTP UNUSE successfully`);
                document.getElementById("rend.message").innerHTML += `<p>Startup service: invalid JS date for NTP server ${strNTPServer} -> set NTP UNUSE successfully</p>`;
              }
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                `invalid JS date for NTP server ${strNTPServer} -> set NTP UNUSE successfully`, null, null, null);

              try {
                self._jsonSettingsV2["startup"]["default_system_settings"]["default_time_settings"]["use_ntp"] = "NTP_DEFAULT";
                self._aPlaybackGlobalConfig.getStartupSettings().getTimeSettings().setUseNTP(false);  
              } catch(e) {
                if (self._debug) {
                  console.log(`Startup service: exeption in setting NTP UNUSE ${e.message}`);
                  document.getElementById("rend.message").innerHTML += `<p>Startup service: Startup service: exeption in setting NTP UNUSE ${e.message}</p>`;
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                  amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                  `exeption in setting NTP UNUSE ${e.message}`, null, null, null);  
                return self.restartDevice(error, context, callback, "getDeviceTimezone");
              }

              const cbSaveSettingsV2File = function(ctx2: amContext.am_general.A_Context) {
                if (self._debug) {
                  console.log(`Startup service: invalid JS date for NTP server ${strNTPServer} -> saved NTP UNUSE. Restarting...`);
                  document.getElementById("rend.message").innerHTML += `<p>Startup service: invalid JS date for NTP server ${strNTPServer} -> saved NTP UNUSE. Restarting...</p>`;
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                  amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                  `invalid JS date for NTP server ${strNTPServer} -> saved NTP UNUSE. Restarting...`, null, null, null);
                
                self.restartDevice(error, context, callback, "getDeviceTimezone");
              }

              return self.saveSettingsV2File("settings_v2_modified.json", error, context, cbSaveSettingsV2File);
            }
          } else {
            let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
            if (self._debug) {
              console.log(`Startup service: invalid JS date for NTP server ${strNTPServer} -> set NTP UNUSE error ${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: invalid JS date for NTP server ${strNTPServer} -> set NTP UNUSE error ${logMessage}</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `invalid JS date for NTP server ${strNTPServer} -> set NTP UNUSE error ${logMessage}`, null, null, null);
          }
          self.getDeviceTimezone(null, error, context, callback);
        }
        const errorUseNTP:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextUseNTP:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextUseNTP.setRemoteCallback(true);
        self._aSDKService._iSDKTimeSetup.setUseNTP(false, errorUseNTP, contextUseNTP, cbUseNTP);  
      } else {
        self.getDeviceTimezone(null, error, context, callback);
      }
    }

    public getDeviceNTPServer(aTimeSettings: amStartupTimeSettings.am_general.AE_TimeSettings, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      if (aTimeSettings == null) {
        aTimeSettings = self._aStartupSettings.getTimeSettings();
      }

      if (aTimeSettings == null) {
        return self.setDefaultLanguageSettings(null, error, context, callback);
      }

      if (self._bSetDefaultSettingsAtStartup === true) {
        const bUseNTP: boolean = aTimeSettings.getUseNTP();
        const strNTPServerUrl: string = aTimeSettings.getNTPServerUrl();
        if (bUseNTP == true && strNTPServerUrl != null && strNTPServerUrl.length > 0) {
          const cbGetNTPServerUrl = function(ctx1: amContext.am_general.A_Context) {
            if (ctx1 != null && !ctx1.isError()) {
              if (ctx1.getBoolResult() === false) {
                if (self._debug) {
                  console.log(`Startup service: Get NTP server feature not supported`);
                  document.getElementById("rend.message").innerHTML += `<p>Startup service: Get NTP server feature not supported</p>`;
                }    
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                  amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(),
                  `get NTP server feature not supported`, null, null, null);  
              } else {
                const strNTPServer: string = ctx1.getResult();
                if (strNTPServer === strNTPServerUrl) { // check JS time
                  return self.checkJSTimeAndSetNTPUNUSE(strNTPServer, error, context, callback)
                }
              }
            } else {
              let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
              if (self._debug) {
                console.log(`Startup service: Error in getting NTP server: ${logMessage}`);
                document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in getting NTP server: ${logMessage}</p>`;
              }
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                `error in getting NTP server : ${logMessage}`, null, null, null);
            }
            self.setDeviceNTPServer(strNTPServerUrl, error, context, callback);
          }
          const errorGetNTPServerUrl:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
          const contextGetNTPServerUrl:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
          contextGetNTPServerUrl.setRemoteCallback(true);
          self._aSDKService._iSDKTimeSetup.getNTPServer(errorGetNTPServerUrl, contextGetNTPServerUrl, cbGetNTPServerUrl);  
        } else {
          self.setDefaultTimeSettings(null, error, context, callback);
        }
      } else {
        self.setDefaultLanguageSettings(null, error, context, callback);
      }
    }

    public setDeviceUseNTP(bUseNTP: boolean, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      const cbUseNTP = function(ctx1: amContext.am_general.A_Context) {
        if (ctx1 != null && !ctx1.isError()) {
          if (ctx1.getBoolResult() === false) {
            if (self._debug) {
              console.log(`Startup service: set Use NTP feature not supported`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: set Use NTP feature not supported</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(),
              `set Use NTP feature not supported`, null, null, null);
          } else {
            if (self._debug) {
              console.log(`Startup service: set NTP ${bUseNTP}. Restarting...`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: set NTP ${bUseNTP}. Restarting...</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
              `set NTP ${bUseNTP}. Restarting...`, null, null, null);
            
            self.restartDevice(error, context, callback, "setDefaultTimeSettings");
          }
        } else {
          let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
          let strUseNTP: string = bUseNTP ? "USE" : "UNUSE";
          if (self._debug) {
            console.log(`Startup service: set NTP ${strUseNTP} error ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Startup service: set NTP ${strUseNTP} error ${logMessage}</p>`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `set NTP ${strUseNTP} error ${logMessage}`, null, null, null);
        }
        self.setDefaultTimeSettings(null, error, context, callback);
      }
      const errorUseNTP:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextUseNTP:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextUseNTP.setRemoteCallback(true);
      return self._aSDKService._iSDKTimeSetup.setUseNTP(bUseNTP, errorUseNTP, contextUseNTP, cbUseNTP); 
    }

    public getDeviceUseNTP(aTimeSettings: amStartupTimeSettings.am_general.AE_TimeSettings, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      if (aTimeSettings == null) {
        aTimeSettings = self._aStartupSettings.getTimeSettings();
      }

      if (aTimeSettings == null) {
        return self.setDefaultLanguageSettings(null, error, context, callback);
      }

      const bUseNTPFromSettings: boolean = aTimeSettings.getUseNTP();
      if (bUseNTPFromSettings != null && self._bSetDefaultSettingsAtStartup === true) {
        const cbGetUseNTP = function(ctx1: amContext.am_general.A_Context) {
          if (ctx1 != null && !ctx1.isError()) {
            if (ctx1.getResult() == "not supported") {
              if (self._debug) {
                console.log(`Startup service: Get Use NTP feature not supported. Try to set timezone anyway`);
                document.getElementById("rend.message").innerHTML += `<p>Startup service: Get Use NTP feature not supported.  Try to set timezone anyway</p>`;
              }
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(),
                `get Use NTP feature not supported. Try to set timezone anyway`, null, null, null);
              return self.getDeviceTimezone(null, error, context, callback);
            } else {
              const bUseNTP: boolean = ctx1.getBoolResult();
              if (bUseNTP === bUseNTPFromSettings) {
                return self.getDeviceNTPServer(null, error, context, callback);
              }
            }
          } else {
            let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
            if (self._debug) {
              console.log(`Startup service: Error in getting Use NTP: ${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in getting Use NTP: ${logMessage}</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `error in getting Use NTP: ${logMessage}`, null, null, null);
          }
          self.setDeviceUseNTP(bUseNTPFromSettings, error, context, callback);
        }
        const errorGetUseNTP:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextGetUseNTP:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextGetUseNTP.setRemoteCallback(true);
        self._aSDKService._iSDKTimeSetup.getUseNTP(errorGetUseNTP, contextGetUseNTP, cbGetUseNTP);
      } else {
        self.setDefaultLanguageSettings(null, error, context, callback);
      }
    }

    public setDefaultBrightness(defaultBrightness: number, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;

      const cbSetBrightness = function(ctx1: amContext.am_general.A_Context) {
        if (ctx1 != null && !ctx1.isError()) {
          if (ctx1.getBoolResult() === false) {
            if (self._debug) {
              console.log(`Startup service: Set brightness feature not supported`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: Set brightness feature not supported</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(),
              `set brightness feature not supported`, null, null, null);
          } else {
            if (self._debug) {
              console.log(`Startup service: device brightness set ${defaultBrightness}`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: device brightness set ${defaultBrightness}</p>`;
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
              `device brightness set: ${defaultBrightness}`, null, null, null);  
          }
        } else {
          let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
          if (self._debug) {
            console.log(`Startup service: Error in setting device brightness: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in setting device brightness: ${logMessage}</p>`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `error in setting device brightness: ${logMessage}`, null, null, null);            
        }
        self.getDeviceUseNTP(null, error, context, callback);
      }

      const screenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties = self._aServiceLocator._iEntityCreation.createDefaultScreenProperties(error);
      screenProperties.setBrightness(defaultBrightness);

      const errorSetBrightness:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSetBrightness:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextSetBrightness.setRemoteCallback(true);
      self._aSDKService._iSDKGeneralConfiguration.setScreenProperties(screenProperties, errorSetBrightness, contextSetBrightness, cbSetBrightness);
    }

    public setDefaultVideoSettings(aVideoSettings: amStartupVideoSettings.am_general.AE_VideoSettings,
      error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      if (aVideoSettings == null) {
        aVideoSettings = self._aStartupSettings.getVideoSettings();
      }

      if (aVideoSettings == null) {
        return self.getDeviceUseNTP(null, error, context, callback);
      }

      const bApplyDefaultBrightness: boolean = aVideoSettings.getApplyDefaultBrightnessLevelAtStartup();
      const settingsBrightness: number = aVideoSettings.getDefaultBrightnessLevel();
      if (settingsBrightness != null && bApplyDefaultBrightness === true && self._bSetDefaultSettingsAtStartup === true){
        const cbGetScreenProps = function(ctx1: amContext.am_general.A_Context) {
          if (ctx1 != null && !ctx1.isError()) {
            const deviceBrightness: number = ctx1.getIntResult();
            if (deviceBrightness === settingsBrightness) {
              return self.getDeviceUseNTP(null, error, context, callback);
            }
          } else {
            let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
            if (self._debug) {
              console.log(`Startup service: Error in getting screen properties: ${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in getting screen properties: ${logMessage}</p>`;    
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `error in getting screen properties: ${logMessage}`, null, null, null);
          }

          self.setDefaultBrightness(settingsBrightness, error, context, callback);
        }
        const errorGetBrightness:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextGetBrightness:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextGetBrightness.setRemoteCallback(true);
        return self._aSDKService._iSDKGeneralConfiguration.getScreenProperties(errorGetBrightness, contextGetBrightness, cbGetScreenProps);  
      }

      self.getDeviceUseNTP(null, error, context, callback);
    }

    public setDeviceVolume(nVolume: number, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      const cbSetVolume = function(ctx1: amContext.am_general.A_Context) {
        if (ctx1 != null && !ctx1.isError()) {
          if (self._debug) {
            console.log(`Startup service: device volume set ${nVolume}`);
            document.getElementById("rend.message").innerHTML += `<p>Startup service: device volume set ${nVolume}</p>`;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
            `device volume set: ${nVolume}`, null, null, null);
        } else {
          let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `error in setting device volume: ${logMessage}`, null, null, null);              
          if (self._debug) {
            console.log(`Startup service: Error in setting device volume: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in setting device volume: ${logMessage}</p>`;
          }            
        }
        self.setDefaultVideoSettings(null, error, context, callback);
      }

      const audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties = self._aServiceLocator._iEntityCreation.createDefaultSoundProperties(error);
      audioProperties.setVolumeLevel(nVolume);

      const errorSetVolume:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextSetVolume:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextSetVolume.setRemoteCallback(true);
      self._aSDKService._iSDKAudioSetup.setVolumeLevel(audioProperties, errorSetVolume, contextSetVolume, cbSetVolume);
    }

    public setDefaultAudioSettings(aAudioSettings: amStartupAudioSettings.am_general.AE_AudioSettings,
      error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      if (aAudioSettings == null) {
        aAudioSettings = self._aStartupSettings.getAudioSettings();
      }

      if (aAudioSettings == null) {
        return self.setDefaultVideoSettings(null, error, context, callback);
      }

      const bApplyDefaultVolume: boolean = aAudioSettings.getApplyDefaultVolumeAtStartup();
      const settingsVolume: number = aAudioSettings.getDefaultVolumeLevel();
      if (settingsVolume != null && bApplyDefaultVolume === true && self._bSetDefaultSettingsAtStartup === true) {
        return self.setDeviceVolume(settingsVolume, error, context, callback);
      }

      self.setDefaultVideoSettings(null, error, context, callback);
    }

    public setSerialNoIfEmpty(aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig,
      error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      if (aPlaybackGlobalConfig == null) {
        aPlaybackGlobalConfig = self._aPlaybackGlobalConfig;
      }

      if (aPlaybackGlobalConfig == null) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      let strSerialNumber: string = aPlaybackGlobalConfig.getSerialNumber();
      if (strSerialNumber != null && strSerialNumber !== "") {
        self.setDefaultAudioSettings(null, error, context, callback);
      } else {
        const cbGetSerialNumber = function(ctx1) {
          if (ctx1 != null && !ctx1.isError()) {
            strSerialNumber = ctx1.getResult();

            for (const jsonSetting of [self._jsonSettingsV2Unmapped, self._jsonSettingsV2]) {
              if (jsonSetting["hardwareSettings"] == null) {
                jsonSetting["hardwareSettings"] = {};
              }
              jsonSetting["hardwareSettings"]["serial"] = strSerialNumber;  
            }

            aPlaybackGlobalConfig.setSerialNumber(strSerialNumber);
            aPlaybackGlobalConfig._aPlaylistRemoteFile.setPath(aPlaybackGlobalConfig._playlist_remote_base_folder + strSerialNumber + "/");   
            aPlaybackGlobalConfig._aPlaylistRemoteFile.setUrlPath(aPlaybackGlobalConfig._playlist_remote_base_folder + strSerialNumber + "/");      
            aPlaybackGlobalConfig._aEncryptedPlaylistRemoteFile.setPath(aPlaybackGlobalConfig._playlist_encrypted_remote_base_folder + strSerialNumber + "/");   
            aPlaybackGlobalConfig._aEncryptedPlaylistRemoteFile.setUrlPath(aPlaybackGlobalConfig._playlist_encrypted_remote_base_folder + strSerialNumber + "/");      
            aPlaybackGlobalConfig.setDefaultPlaylistFileUrl(aPlaybackGlobalConfig._strBaseServerApiUrl + "v5/player_playlists/" + strSerialNumber + "/" + "playlist.json") ;
            aPlaybackGlobalConfig.setDefaultPlaylistShaFileUrl(aPlaybackGlobalConfig.getDefaultPlaylistFileUrl() + ".sha");

            const cbSaveSettingsV2File = function(ctx2: amContext.am_general.A_Context) {
              if (self._debug) {    
                document.getElementById("rend.message").innerHTML += `<p>Startup service: device Serial Number updated ${strSerialNumber}</p>`;
                console.log(`<p>Startup service: device Serial Number updated ${strSerialNumber}</p>`);
              }
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                `device Serial Number updated ${strSerialNumber}`, null, null, null);

              self.setDefaultAudioSettings(null, error, context, callback);
            }
            self.saveSettingsV2File("settings_v2.json", error, context, cbSaveSettingsV2File);
          } else {
            let logMessage: string = (ctx1 != null) ? `[${ctx1.getError().getErrMsg()}]` : "";
            if (self._debug) {    
              document.getElementById("rend.message").innerHTML += `<p>Startup service: Error in getting device Serial Number: ${logMessage}</p>`;
              console.log(`<p>Startup service: Error in getting device Serial Number: ${logMessage}</p>`);
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
              amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
              `error in getting device Serial Number: ${logMessage}`, null, null, null);

            self.setDefaultAudioSettings(null, error, context, callback);
          }
        } 

        const errorGetSerialNumber:amError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextGetSerialNumber:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextGetSerialNumber.setRemoteCallback(true);
        self._aSDKService._iSDKHardwareSetup.getSerialNumber(errorGetSerialNumber, contextGetSerialNumber, cbGetSerialNumber);
      }
    }

    public setSystemStartupSettings(aStartupSettings: amStartupSettings.am_general.AE_StartupSettings,
      error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      const self = this;
      if (aStartupSettings == null) {
        aStartupSettings = self._aStartupSettings;
      }

      if (aStartupSettings == null || aStartupSettings.getSystemSettings() == null) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      const startupSystemSettings: amStartupSystemSettings.am_general.AE_SystemSettings = aStartupSettings.getSystemSettings();
      self._bSetDefaultSettingsAtStartup = startupSystemSettings.getApplyDefaultSettingsAtStartup();
      if (self._bSetDefaultSettingsAtStartup == null) {
        self._bSetDefaultSettingsAtStartup = false;
      }

      const cbReadFile = function(ctx1: amContext.am_general.A_Context) {
        let logMessage: string = "";
        let jsonContent = null;
        const strContent: string = ctx1.getResult();
        if (ctx1 != null && !ctx1.isError()) {
          try {
            jsonContent = JSON.parse(strContent);
            self._jsonSettingsV2 = JSON.parse(JSON.stringify(jsonContent));
          } catch(e) {
            logMessage = `Startup exception [read settings_v2]: ${e.message}`;
            if (self._debug) {
              console.log(`${logMessage}`);
              document.getElementById("rend.message").innerHTML += `<p>${logMessage}</p>`;    
            }
            error.setError(ctx1.getError().getErrId(), `${logMessage}`);
            jsonContent = null;
            self._jsonSettingsV2 = null;
          }

          if (jsonContent != null && self._jsonSettingsV2 != null) {
            self._jsonSettingsV2Unmapped = jsonContent;
            self._aPlaybackGlobalConfig.mapSettingsLocalToV2(self._jsonSettingsV2);
            if (startupSystemSettings.getUpdateSerialNoIfNonEmpty()) {
              self.setSerialNoIfEmpty(null, error, context, callback);
            } else {
              self.setDefaultAudioSettings(null, error, context, callback);
            }
            return;
          }
        } else {
          if (ctx1 != null) {
            error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
            logMessage = `[${error.getErrMsg()}]`;
          }
          if (self._debug) {
            console.log(`Startup: read settings_v2 file failed: ${logMessage}`);
            document.getElementById("rend.message").innerHTML += `<p>Startup: read settings_v2 file failed: ${logMessage}</p>`;    
          }
          self._aActivityLogService._IActivityLogServiceMessaging
          .addLogMessage(
            amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
            `read settings_v2 file failed: ${logMessage}`, null, null, null);
        }

        context != null && context.setError(error);
        callback != null && callback(context);
      }

      const aSettingsV2File:amFileInfo.am_general.A_FileInfo = this._aPlaybackGlobalConfig.getSettingsFolder();
      aSettingsV2File.setName("settings_v2.json");

      const errorReadFile:amError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextReadFile:amContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextReadFile.setRemoteCallback(true);
      return self._aSDKService._iSDKFileSystem.readTextFile2(aSettingsV2File.getStorage(), aSettingsV2File.getPath(), aSettingsV2File.getName(), 
                            errorReadFile, contextReadFile, cbReadFile);
    }
  }
} 