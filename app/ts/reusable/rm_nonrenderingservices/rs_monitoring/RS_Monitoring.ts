import amGeneralContext = require("../../../abstract/am_general/a_context/A_Context");
import amGeneralError   = require("../../../abstract/am_general/a_error/A_Error");
import amMonitoringService  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_monitoring/AS_Monitoring");

import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amGeneralFileInfo        = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amMonitoringServiceMain = require("../../../abstract/am_nonrenderingservices/as_monitoring/AI_MonitoringMain");
import amMonitoringServiceConfig = require("../../../abstract/am_nonrenderingservices/as_monitoring/AI_MonitoringConfig");
import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralActivityLogMessageTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");

import amGeneralFactoryDescription             = require("../../../abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesActivityLogService = require("../../../abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import amScreenshot = require("../../../../../app/ts/abstract/am_renderingservices/as_screenshot/AS_Screenshot");

import amGeneralService              = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amPlaylistController = require("../../../abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");

import rmNonRenderingServices     = require("../r_nonrenderingservice/R_NonRenderingService");

import rmMonitoringMain    = require("./RI_Monitoring_Main");
import rmMonitoringConfig  = require("./RI_Monitoring_Config");

import amGeneralHttpRequest = require("../../../abstract/am_general/a_httprequest/A_HttpRequest");

import amGeneralDateTime = require("../../../abstract/am_general/a_datetime/A_DateTime");

import amGeneralNetworkProperties = require("../../../abstract/am_general/a_networkproperties/A_NetworkProperties");

import amGeneralSystemUsageInfo   = require("../../../abstract/am_general/a_systemusageinfo/A_SystemUsageInfo");
import amGeneralSystemStorageInfo = require("../../../abstract/am_general/a_systemstorageinfo/A_SystemStorageInfo");

import amGeneralMonitoringSettings  = require("../../../abstract/am_general/ae_monitoringsettings/AE_MonitoringSettings");
import amScreenshotOptions          = require("../../../../../app/ts/abstract/am_general/ae_screenshotoptions/AE_ScreenshotOptions");

import amRenderingServicesScreenshotService   = require("../../../../../app/ts/abstract/am_renderingservices/as_screenshot/AS_Screenshot");
import amRenderParametersIdentification = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Identification");

import rmGeneralGuid = require("../../rm_general/r_guid/r_guid");

export module rm_nonrenderingservices
{
  export class RS_MonitoringService extends rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService 
                                   implements amMonitoringService.am_nonrenderingservices.AS_MonitoringService
  {
    //---------- interfaces
    _iMonitoringMain : amMonitoringServiceMain.am_nonrenderingservices.AI_MonitoringMain;
    _iMonitoringConfig : amMonitoringServiceConfig.am_nonrenderingservices.AI_MonitoringConfig;

    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    _aPlaybackGlobalConfig : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
    _aPlaylistController : amPlaylistController.am_coreservices.A_PlaylistController;

    // timeouts
    _iStartMonitoringTimeout: number;
    _iMonitoringInterval: number;

    // last played items
    _nLastPlayedItems: number;
    _lastPlayedItems: any;

    _aMonitoringSettings: amGeneralMonitoringSettings.am_general.AE_MonitoringSettings;
    _aHttpRequest : amGeneralHttpRequest.am_general.A_HttpRequest;
    _aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;
    _aScreenshotService: amRenderingServicesScreenshotService.am_renderingservices.AS_ScreenshotService;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iMonitoringMain = new rmMonitoringMain.rm_nonrenderingservices.RI_MonitoringMain(this);
      this._iMonitoringConfig = new rmMonitoringConfig.rm_nonrenderingservices.RI_MonitoringConfig(this);
      this._aLogService = aLogService;

      this._aHttpRequest = null;
      this._aPlaybackGlobalConfig = null;
      this._aActivityLogService = null;
      this._aPlaylistController = null;
      this._aScreenshotService = null;
      this._aMonitoringSettings = null;

      this._lastPlayedItems = [];
    }

    public setTargetService(targetService: amGeneralService.am_general.A_Service)
    {
      this._aPlaylistController = <amPlaylistController.am_coreservices.A_PlaylistController>targetService;
    }
    //--------------------------------------
    // set / get global config
    //---------------------------------------

    //-----------------------------
    public getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._aPlaybackGlobalConfig;
    }

    //----------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;      
    }

    //-----------------------------
    public getDefaultMonitoringSettings() : amGeneralMonitoringSettings.am_general.AE_MonitoringSettings
    {
      return this._aMonitoringSettings;
    }
    
    //-----------------------------
    public setDefaultMonitoringSettings(aMonitoringSettings: amGeneralMonitoringSettings.am_general.AE_MonitoringSettings)
    {
      this._aMonitoringSettings = aMonitoringSettings;
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

    //-----------------------------
    public getScreeshotService(): amScreenshot.am_renderingservices.AS_ScreenshotService
    {
      return this._aScreenshotService;
    }
    public setScreenshotService(aScreenshot: amScreenshot.am_renderingservices.AS_ScreenshotService)
    {
      this._aScreenshotService = aScreenshot;
    }

    //-----------------------------
    public createMonitoringError(aDateTime: amGeneralDateTime.am_general.A_DateTime, errorName: string, errorState: number = 0, errorType: number = 2): any
    {
      const jsonError = {
        "errorDateTime" : this._aUtilsService._iUtilsDateTime.getCrtDateTimeAsISOString(aDateTime),
        "id" : rmGeneralGuid.rm_general.R_Guid.raw(),
        "name" : errorName,
        "state" : errorState,
        "type" : errorType
      };

      return jsonError;
    }

    //-----------------------------
    public init(error : amGeneralError.am_general.A_Error) : void
    {
      this._aActivityLogService._IActivityLogServiceMessaging
      .addLogMessage(
        amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, this.getServiceName(),
        `Initializing Monitoring Service ...`, null, null, null);

      const iStartMonitoringTimeout: number = this._aMonitoringSettings.getStartTimeout();
      this._iStartMonitoringTimeout = iStartMonitoringTimeout * 1000;
      const iMonitoringInterval: number = this._aMonitoringSettings.getInterval();
      this._iMonitoringInterval = iMonitoringInterval * 1000;
      this._nLastPlayedItems = this._aMonitoringSettings.getLastPlayedItemsNumber();

      this._aHttpRequest = this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
    }

    //-----------------------------
    public receivedLastPlayedItem(paramIdentifier: amRenderParametersIdentification.am_renderingservices.AE_RenderParams_Identification): void
    {
      let _stream = {};
      let bFound: boolean = false;
      for ( let index = 0; index < this._lastPlayedItems.length; index++ ) {
        const stream = this._lastPlayedItems[index];
        if ( stream["id"] != null && stream["id"] === paramIdentifier.getStreamId()) {
          _stream = stream;
          bFound = true;
        }
      }
      
      if (!bFound) {
        _stream["id"] = paramIdentifier.getStreamId();
        _stream["media"] = [];
        this._lastPlayedItems.push(_stream);
      }

      const errorDateTime:amGeneralError.am_general.A_Error    = this._aServiceLocator._iEntityCreation.createDefaultError();   
      const aDateTime: amGeneralDateTime.am_general.A_DateTime = this._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);

      const _mediaItem = {};
      _mediaItem["playedDateTime"] = this._aUtilsService._iUtilsDateTime.getCrtDateTimeAsISOString(aDateTime); 
      _mediaItem["id"] = paramIdentifier.getId();
      _mediaItem["filename"] = paramIdentifier.getName();

      _stream["media"].push(_mediaItem);
      if (_stream["media"].length == this._nLastPlayedItems + 1) {
        _stream["media"].shift();
      }
    }

    //-----------------------------
    public sendMonitoringReport(aMonitoringSettings: amGeneralMonitoringSettings.am_general.AE_MonitoringSettings, 
          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      const self = this;

      if (aMonitoringSettings == null) {
        aMonitoringSettings = self._aMonitoringSettings;
      }

      if (aMonitoringSettings == null) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      const errorDateTime:amGeneralError.am_general.A_Error = self._aServiceLocator._iEntityCreation.createDefaultError();   

      const mediaFilesFolder: amGeneralFileInfo.am_general.A_FileInfo       = self._aPlaybackGlobalConfig.getMediaFilesFolder();
      const aMediaFilesDateTime: amGeneralDateTime.am_general.A_DateTime    = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
      const htmlTemplatesFolder: amGeneralFileInfo.am_general.A_FileInfo    = self._aPlaybackGlobalConfig.getHtmlTemplatesFolder();
      const aHtmlTemplatesDateTime: amGeneralDateTime.am_general.A_DateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);

      const aDateTime: amGeneralDateTime.am_general.A_DateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
      const localTime:string = self._aUtilsService._iUtilsDateTime.getCrtDateTimeAsISOString(aDateTime);
      const localUTCTime:string = self._aUtilsService._iUtilsDateTime.getCrtUTCDateTimeAsISOString(aDateTime);

      const jsonMonitoringObject = {};
      jsonMonitoringObject["content"] = {};
      jsonMonitoringObject["custom"] = {};
      jsonMonitoringObject["errors"] = [];
      jsonMonitoringObject["hardware"] = {};
      jsonMonitoringObject["hardware"]["network"] = {};
      jsonMonitoringObject["hardware"]["disks"] = [];
      jsonMonitoringObject["hardware"]["processors"] = [];
      jsonMonitoringObject["version"] = {};

      jsonMonitoringObject["localDateTime"] = localTime;
      jsonMonitoringObject["utcDateTime"] = localUTCTime;

      jsonMonitoringObject["serial"] = self._aPlaybackGlobalConfig.getSerialNumber();

      // display settings
      const { height, orientation, width } = window.screen;
      const strOrientation = orientation.type.toString().split("-")[0].toUpperCase();
      
      jsonMonitoringObject["custom"]["displaySettings"] = `Resolution ${width} x ${height}, Orientation: ${strOrientation}`;
      jsonMonitoringObject["custom"]["batteryStatus"] = "No battery";
      jsonMonitoringObject["content"]["streams"] = self._lastPlayedItems;

      // callbacks
      const cbMediaFilesLastModified = function(ctx10: amGeneralContext.am_general.A_Context) {
        if (ctx10 != null && !ctx10.isError()) {
          const strDate: string = ctx10.getResult();
          self._aUtilsService._iUtilsDateTime.getDateTime(aMediaFilesDateTime, strDate);
          mediaFilesFolder.setLastModifiedDate(aMediaFilesDateTime);
        }

        const cbHtmlTemplatesLastModified = function(ctx9: amGeneralContext.am_general.A_Context) {
          if (ctx9 != null && !ctx9.isError()) {
            const strDate: string = ctx9.getResult();
            self._aUtilsService._iUtilsDateTime.getDateTime(aHtmlTemplatesDateTime, strDate);
            htmlTemplatesFolder.setLastModifiedDate(aHtmlTemplatesDateTime);
            jsonMonitoringObject["content"]["lastContentUpdate"] = 
              aMediaFilesDateTime.isGreater(aHtmlTemplatesDateTime) ? aMediaFilesDateTime.getAsISOString() : aHtmlTemplatesDateTime.getAsISOString();
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(
              amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), 
              `Last content updated ${jsonMonitoringObject["content"]["lastContentUpdate"]}`, null, null, null); 
          }

          const playlistFile: amGeneralFileInfo.am_general.A_FileInfo             = self._aPlaybackGlobalConfig.getPlaylistFile();
          const cbPlaylistLastModified = function(ctx8: amGeneralContext.am_general.A_Context) {
            if (ctx8 != null && !ctx8.isError()) {
              const strDate: string = ctx8.getResult();
              const aPlaylistDateTime: amGeneralDateTime.am_general.A_DateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
              self._aUtilsService._iUtilsDateTime.getDateTime(aPlaylistDateTime, strDate);
              playlistFile.setLastModifiedDate(aPlaylistDateTime);
              jsonMonitoringObject["content"]["lastPlaylistUpdate"] = aPlaylistDateTime.getAsISOString();
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(
                amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                `Last playlist modified ${jsonMonitoringObject["content"]["lastPlaylistUpdate"]}`, null, null, null); 
            }

            const cbGetFirmwareVersion = function(ctx7: amGeneralContext.am_general.A_Context) {
              if (ctx7 != null && !ctx7.isError()) {
                const firmwareVersion: string = ctx7.getResult();
                jsonMonitoringObject["version"]["hardware"] = firmwareVersion;
                jsonMonitoringObject["version"]["software"] = self._aPlaybackGlobalConfig.getAppVersion() + " build " + self._aPlaybackGlobalConfig.getAppBuildNo();
                jsonMonitoringObject["version"]["softwareEA"] = aMonitoringSettings.getEarlyAdopter();
                
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(
                  amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), 
                  `Firmware version obtained successfully ${firmwareVersion}`, null, null, null);
              } else {
                jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "Firmware version"));
                let logMessage: string = (ctx7 != null) ? `[${ctx7.getError().getErrMsg()}]` : "";
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(
                  amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                  `Error in obtaining Firmware version: ${logMessage}`, null, null, null);
              }

              const cbGetUpTime = function(ctx6: amGeneralContext.am_general.A_Context) {
                if (ctx6 != null && !ctx6.isError()) {
                  const upTime: number = ctx6.getIntResult();
                  jsonMonitoringObject["uptime"] = upTime;
                  
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(
                    amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                    `Device Uptime obtained successfully ${upTime}`, null, null, null);
                } else {
                  jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "UpTime"));
                  let logMessage: string = (ctx6 != null) ? `[${ctx6.getError().getErrMsg()}]` : "";
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(
                    amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                    `Error in obtaining device UpTime: ${logMessage}`, null, null, null);
                }

                const cbGetCPUInfo = function(ctx5: amGeneralContext.am_general.A_Context) {
                  if (ctx5 != null && !ctx5.isError()) {
                    const cpusLoad = ctx5.getArrayResult();
                    let cpuLogResults: string = "";
                    for (let i = 0; i < cpusLoad.length; i++) {
                      let processor = {};
                      processor["id"] = `CPU ${i}`;
                      processor["load"] = cpusLoad[i];
                      cpuLogResults += `CPU${i} load ${cpusLoad[i]}; `;
                      jsonMonitoringObject["hardware"]["processors"].push(processor);
                    }
                    if (cpuLogResults.length > 2) {
                      cpuLogResults = cpuLogResults.slice(0, -2);
                    }
                    
                    self._aActivityLogService._IActivityLogServiceMessaging
                    .addLogMessage(
                      amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                      `CPU Info obtained successfully: ${cpuLogResults}`, null, null, null);
                  } else {
                    jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "CPU info"));
                    let logMessage: string = (ctx5 != null) ? `[${ctx5.getError().getErrMsg()}]` : "";
                    self._aActivityLogService._IActivityLogServiceMessaging
                    .addLogMessage(
                      amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                      `Error in obtaining CPU info: ${logMessage}`, null, null, null);
                  }

                  const cbGetSystemUsageInfo = function(ctx4: amGeneralContext.am_general.A_Context) {
                    if (ctx4 != null && !ctx4.isError()) {
                      const memoryInfo: amGeneralSystemUsageInfo.am_general.A_SystemUsageInfo = <amGeneralSystemUsageInfo.am_general.A_SystemUsageInfo>ctx4.getObjectResult();
                      const memoryInfoLocal: amGeneralSystemUsageInfo.am_general.A_SystemUsageInfo = self._aServiceLocator._iEntityCreation.createDefaultSystemUsageInfo(error);
                      memoryInfoLocal.copyFromJson(memoryInfo);

                      const availableMem: number = memoryInfoLocal.getAvailableMemory();
                      const totalMemory: number = memoryInfoLocal.getTotalMemory();
                      const systemStorageUnits: Array<amGeneralSystemStorageInfo.am_general.A_SystemStorageInfo> = memoryInfoLocal.getSystemStorageUnits();
                      jsonMonitoringObject["hardware"]["availableMemory"] = availableMem;
                      jsonMonitoringObject["hardware"]["totalMemory"] = totalMemory;

                      let storageResults: string = "Drives: ";
                      for (let i = 0; i < systemStorageUnits.length; i++) {
                        let jsonDisk = {};
                        let storageUnit: amGeneralSystemStorageInfo.am_general.A_SystemStorageInfo = systemStorageUnits[i];
                        jsonDisk["available"] = storageUnit.getAvailableCapacity();
                        jsonDisk["total"] = storageUnit.getCapacity();
                        const mountPoint: string = storageUnit.getType();
                        jsonDisk["id"] = mountPoint;

                        const aJsonFileSettingsV2:amGeneralFileInfo.am_general.A_FileInfo = self._aPlaybackGlobalConfig.getSettingsFolder();
                        const strStorage: string = aJsonFileSettingsV2.getStorage().substring(0, 2).toLowerCase();
                        const strPartition: string = mountPoint.substring(0, 2).toLowerCase();
                        if (strStorage === strPartition) {
                          jsonDisk["id"] += " [MAIN]"
                        }
                        jsonMonitoringObject["hardware"]["disks"].push(jsonDisk);
                        storageResults += `${jsonDisk["id"]} total: ${jsonDisk["total"]} available: ${jsonDisk["available"]}; `;
                      }
                      if (storageResults.length > 2) {
                        storageResults = storageResults.slice(0, -2);
                      }

                      self._aActivityLogService._IActivityLogServiceMessaging
                      .addLogMessage(
                        amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                        `System usage obtained successfully: ${storageResults}`, null, null, null); 
                    } else {
                      jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "System usage"));
                      let logMessage: string = (ctx4 != null) ? `[${ctx4.getError().getErrMsg()}]` : "";
                      self._aActivityLogService._IActivityLogServiceMessaging
                      .addLogMessage(
                        amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                        `Error in obtaining System usage: ${logMessage}`, null, null, null);
                    }
                        
                    const cbGetNetworkInfo = function(ctx3: amGeneralContext.am_general.A_Context) {
                      if (ctx3 != null && !ctx3.isError()) {
                        const networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties = <amGeneralNetworkProperties.am_general.A_NetworkProperties>ctx3.getObjectResult();
                        const networkPropertiesLocal: amGeneralNetworkProperties.am_general.A_NetworkProperties = self._aServiceLocator._iEntityCreation.createDefaultNetworkProperties(error);
                        networkPropertiesLocal.copyFromJson(networkProperties);
            
                        const isWifi: boolean = networkPropertiesLocal.getWifiNetCardProperties().isEnable();
                        jsonMonitoringObject["hardware"]["network"]["dhcpEnabled"] = isWifi ?
                                networkPropertiesLocal.getWifiNetCardProperties().isDynamic() : 
                                networkPropertiesLocal.getWiredNetCardProperties().isDynamic();
                        jsonMonitoringObject["hardware"]["network"]["macAddress"] = isWifi ?
                                networkPropertiesLocal.getWifiNetCardProperties().getMacAddress() : 
                                networkPropertiesLocal.getWiredNetCardProperties().getMacAddress();
                        jsonMonitoringObject["hardware"]["network"]["localIPAddress"] = isWifi ?
                                networkPropertiesLocal.getWifiNetCardProperties().getIPAddress() : 
                                networkPropertiesLocal.getWiredNetCardProperties().getIPAddress();
                        jsonMonitoringObject["hardware"]["network"]["type"] = isWifi ? 2 : 1;
                        jsonMonitoringObject["custom"]["wifiStatus"] = isWifi ? networkPropertiesLocal.getWifiConnInfo().getWifiSignalLevel() : "OFF";

                        self._aActivityLogService._IActivityLogServiceMessaging
                        .addLogMessage(
                          amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                          `Network Info obtained successfully`, null, null, null);
                      } else {
                        jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "Network info"));
                        let logMessage: string = (ctx3 != null) ? `[${ctx3.getError().getErrMsg()}]` : "";
                        self._aActivityLogService._IActivityLogServiceMessaging
                        .addLogMessage(
                          amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                          `Error in obtaining Network Info: ${logMessage}`, null, null, null);
                      }

                      const cbGetMediaVolume = function(ctx2: amGeneralContext.am_general.A_Context) {
                        if (ctx2 != null && !ctx2.isError()) {
                          jsonMonitoringObject["custom"]["mediaVolume"] = ctx2.getResult();
                          self._aActivityLogService._IActivityLogServiceMessaging
                          .addLogMessage(
                            amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                            `Media volume obtained successfully`, null, null, null);
                        } else {
                          jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "Media volume"));
                          let logMessage: string = (ctx2 != null) ? `[${ctx2.getError().getErrMsg()}]` : "";
                          self._aActivityLogService._IActivityLogServiceMessaging
                          .addLogMessage(
                            amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(),
                            `Error in obtaining Media volume: ${logMessage}`, null, null, null);
                        }                       

                        self._aHttpRequest.reset();
                        self._aHttpRequest.setMethod("POST");
                        self._aHttpRequest.setUrlPath(`${self._aPlaybackGlobalConfig.getBaseServerApiUrl()}/${aMonitoringSettings.getRemoteRelativePath()}`);
                        const reqHeaders = {
                          "Content-Type" : "application/json",
                          "Accept" : "application/json",
                          "Authorization" : "FB5ED944377FC2E532B28C3F5B844A94BE01C072FC99A34A95FBD99278468D64"
                        };
                        self._aHttpRequest.setHeaders(JSON.stringify(reqHeaders));
                        self._aHttpRequest.setBody(JSON.stringify(jsonMonitoringObject));

                        const requestSent = function(ctx1: amGeneralContext.am_general.A_Context) {
                          if (ctx1 != null && !ctx1.isError()) {
                            self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(
                              amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                              `Monitoring report sent`, null, null, null);
                            if (self._debug) {
                              console.log("Monitoring report sent");
                              document.getElementById("rend.message").innerHTML += "<p>Monitoring report sent</p>";
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
                              `Monitoring report sent FAILED: ${logMessage}`, null, null, null);
                          }

                          context != null && context.setError(error);
                          callback != null && callback(context);
                        }
                        const errorSendRequest:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                        const contextSendRequest:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();      
                        contextSendRequest.setRemoteCallback(true);
                        self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
                      }
                      const errorGetMediaVolume:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                      const contextGetMediaVolume:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();    
                      contextGetMediaVolume.setRemoteCallback(true);
                      self._aSDKService._iSDKAudioSetup.getVolumeLevel(errorGetMediaVolume, contextGetMediaVolume, cbGetMediaVolume);
                    }
                    const errorGetNetworkInfo:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                    const contextGetNetworkInfo:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    contextGetNetworkInfo.setRemoteCallback(true);
                    self._aSDKService._iSDKHardwareSetup.getNewtworkInfo(errorGetNetworkInfo, contextGetNetworkInfo, cbGetNetworkInfo);
                  }
                  const errorGetSystemUsageInfo:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                  const contextGetSystemUsageInfo:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
                  contextGetSystemUsageInfo.setRemoteCallback(true);
                  self._aSDKService._iSDKHardwareSetup.getSystemUsageInfo(errorGetSystemUsageInfo, contextGetSystemUsageInfo, cbGetSystemUsageInfo);
                }
                const errorGetCPUInfo:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
                const contextGetCPUInfo:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextGetCPUInfo.setRemoteCallback(true);
                self._aSDKService._iSDKHardwareSetup.getCPUInfo(errorGetCPUInfo, contextGetCPUInfo, cbGetCPUInfo);          
              }
              const errorGetUpTime:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
              const contextGetUpTime:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
              contextGetUpTime.setRemoteCallback(true);
              self._aSDKService._iSDKGeneralConfiguration.getUpTime(errorGetUpTime, contextGetUpTime, cbGetUpTime);
            }
            const errorGetFirmwareVersion:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
            const contextGetFirmwareVersion:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextGetFirmwareVersion.setRemoteCallback(true);
            self._aSDKService._iSDKFirmwareSetup.getFirmwareVersion(errorGetFirmwareVersion, contextGetFirmwareVersion, cbGetFirmwareVersion);
          }
          const errorPlaylistLastModifies:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          const contextPlaylistLastModifies:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
          contextPlaylistLastModifies.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.getLastModified(playlistFile, errorPlaylistLastModifies, contextPlaylistLastModifies, cbPlaylistLastModified);
        }
        const errorHtmlTemplatesLastModifies:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextHtmlTemplatesLastModifies:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
        contextHtmlTemplatesLastModifies.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.getLastModified(htmlTemplatesFolder, errorHtmlTemplatesLastModifies, contextHtmlTemplatesLastModifies, cbHtmlTemplatesLastModified);
      }
      const errorMediaFilesLastModifies:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      const contextMediaFilesLastModifies:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextMediaFilesLastModifies.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.getLastModified(mediaFilesFolder, errorMediaFilesLastModifies, contextMediaFilesLastModifies, cbMediaFilesLastModified);
    }

    //-----------------------------
    public startMonitoring(aMonitoringSettings: amGeneralMonitoringSettings.am_general.AE_MonitoringSettings,
          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      const self = this;

      if (aMonitoringSettings == null) {
        aMonitoringSettings = self._aMonitoringSettings;
      }

      if (aMonitoringSettings == null) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      self._aActivityLogService._IActivityLogServiceMessaging
      .addLogMessage(
        amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
        `Starting Monitoring Timeout`, null, null, null);
      setTimeout(
        function sendMonitoringFn() {
          self.sendMonitoringReport(aMonitoringSettings, error, context, callback);          
          if (self._aScreenshotService != null) {
            self._aScreenshotService._iScreenshotMain.generateAndSendScreenshot(self._aScreenshotService._iScreenshotConfig.getDefaultScreenshotOptions(), error, context, null);
          }
          setTimeout(sendMonitoringFn, self._iMonitoringInterval);
        }, self._iStartMonitoringTimeout);
    }
  }
} 