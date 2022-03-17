var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes", "../r_nonrenderingservice/R_NonRenderingService", "./RI_Monitoring_Main", "./RI_Monitoring_Config", "../../rm_general/r_guid/r_guid"], function (require, exports, amGeneralActivityLogMessageTypes, rmNonRenderingServices, rmMonitoringMain, rmMonitoringConfig, rmGeneralGuid) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RS_MonitoringService = /** @class */ (function (_super) {
            __extends(RS_MonitoringService, _super);
            //----------- constructor 
            function RS_MonitoringService(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iMonitoringMain = new rmMonitoringMain.rm_nonrenderingservices.RI_MonitoringMain(_this);
                _this._iMonitoringConfig = new rmMonitoringConfig.rm_nonrenderingservices.RI_MonitoringConfig(_this);
                _this._aLogService = aLogService;
                _this._aHttpRequest = null;
                _this._aPlaybackGlobalConfig = null;
                _this._aActivityLogService = null;
                _this._aPlaylistController = null;
                _this._aScreenshotService = null;
                _this._aMonitoringSettings = null;
                _this._lastPlayedItems = [];
                return _this;
            }
            RS_MonitoringService.prototype.setTargetService = function (targetService) {
                this._aPlaylistController = targetService;
            };
            //--------------------------------------
            // set / get global config
            //---------------------------------------
            //-----------------------------
            RS_MonitoringService.prototype.getPlaybackGlobalConfig = function () {
                return this._aPlaybackGlobalConfig;
            };
            //----------------------------
            RS_MonitoringService.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
                this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
            };
            //-----------------------------
            RS_MonitoringService.prototype.getDefaultMonitoringSettings = function () {
                return this._aMonitoringSettings;
            };
            //-----------------------------
            RS_MonitoringService.prototype.setDefaultMonitoringSettings = function (aMonitoringSettings) {
                this._aMonitoringSettings = aMonitoringSettings;
            };
            //-----------------------------
            RS_MonitoringService.prototype.getActivityLogService = function () {
                return this._aActivityLogService;
            };
            RS_MonitoringService.prototype.setActivityLogService = function (aActivityLogService) {
                this._aActivityLogService = aActivityLogService;
            };
            //-----------------------------
            RS_MonitoringService.prototype.getScreeshotService = function () {
                return this._aScreenshotService;
            };
            RS_MonitoringService.prototype.setScreenshotService = function (aScreenshot) {
                this._aScreenshotService = aScreenshot;
            };
            //-----------------------------
            RS_MonitoringService.prototype.createMonitoringError = function (aDateTime, errorName, errorState, errorType) {
                if (errorState === void 0) { errorState = 0; }
                if (errorType === void 0) { errorType = 2; }
                var jsonError = {
                    "errorDateTime": this._aUtilsService._iUtilsDateTime.getCrtDateTimeAsISOString(aDateTime),
                    "id": rmGeneralGuid.rm_general.R_Guid.raw(),
                    "name": errorName,
                    "state": errorState,
                    "type": errorType
                };
                return jsonError;
            };
            //-----------------------------
            RS_MonitoringService.prototype.init = function (error) {
                this._aActivityLogService._IActivityLogServiceMessaging
                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, this.getServiceName(), "Initializing Monitoring Service ...", null, null, null);
                var iStartMonitoringTimeout = this._aMonitoringSettings.getStartTimeout();
                this._iStartMonitoringTimeout = iStartMonitoringTimeout * 1000;
                var iMonitoringInterval = this._aMonitoringSettings.getInterval();
                this._iMonitoringInterval = iMonitoringInterval * 1000;
                this._nLastPlayedItems = this._aMonitoringSettings.getLastPlayedItemsNumber();
                this._aHttpRequest = this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
            };
            //-----------------------------
            RS_MonitoringService.prototype.receivedLastPlayedItem = function (paramIdentifier) {
                var _stream = {};
                var bFound = false;
                for (var index = 0; index < this._lastPlayedItems.length; index++) {
                    var stream = this._lastPlayedItems[index];
                    if (stream["id"] != null && stream["id"] === paramIdentifier.getStreamId()) {
                        _stream = stream;
                        bFound = true;
                    }
                }
                if (!bFound) {
                    _stream["id"] = paramIdentifier.getStreamId();
                    _stream["media"] = [];
                    this._lastPlayedItems.push(_stream);
                }
                var errorDateTime = this._aServiceLocator._iEntityCreation.createDefaultError();
                var aDateTime = this._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
                var _mediaItem = {};
                _mediaItem["playedDateTime"] = this._aUtilsService._iUtilsDateTime.getCrtDateTimeAsISOString(aDateTime);
                _mediaItem["id"] = paramIdentifier.getId();
                _mediaItem["filename"] = paramIdentifier.getName();
                _stream["media"].push(_mediaItem);
                if (_stream["media"].length == this._nLastPlayedItems + 1) {
                    _stream["media"].shift();
                }
            };
            //-----------------------------
            RS_MonitoringService.prototype.sendMonitoringReport = function (aMonitoringSettings, error, context, callback) {
                var self = this;
                if (aMonitoringSettings == null) {
                    aMonitoringSettings = self._aMonitoringSettings;
                }
                if (aMonitoringSettings == null) {
                    context != null && context.setError(error);
                    callback != null && callback(context);
                    return;
                }
                var errorDateTime = self._aServiceLocator._iEntityCreation.createDefaultError();
                var mediaFilesFolder = self._aPlaybackGlobalConfig.getMediaFilesFolder();
                var aMediaFilesDateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
                var htmlTemplatesFolder = self._aPlaybackGlobalConfig.getHtmlTemplatesFolder();
                var aHtmlTemplatesDateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
                var aDateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
                var localTime = self._aUtilsService._iUtilsDateTime.getCrtDateTimeAsISOString(aDateTime);
                var localUTCTime = self._aUtilsService._iUtilsDateTime.getCrtUTCDateTimeAsISOString(aDateTime);
                var jsonMonitoringObject = {};
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
                var _a = window.screen, height = _a.height, orientation = _a.orientation, width = _a.width;
                var strOrientation = orientation.type.toString().split("-")[0].toUpperCase();
                jsonMonitoringObject["custom"]["displaySettings"] = "Resolution " + width + " x " + height + ", Orientation: " + strOrientation;
                jsonMonitoringObject["custom"]["batteryStatus"] = "No battery";
                jsonMonitoringObject["content"]["streams"] = self._lastPlayedItems;
                // callbacks
                var cbMediaFilesLastModified = function (ctx10) {
                    if (ctx10 != null && !ctx10.isError()) {
                        var strDate = ctx10.getResult();
                        self._aUtilsService._iUtilsDateTime.getDateTime(aMediaFilesDateTime, strDate);
                        mediaFilesFolder.setLastModifiedDate(aMediaFilesDateTime);
                    }
                    var cbHtmlTemplatesLastModified = function (ctx9) {
                        if (ctx9 != null && !ctx9.isError()) {
                            var strDate = ctx9.getResult();
                            self._aUtilsService._iUtilsDateTime.getDateTime(aHtmlTemplatesDateTime, strDate);
                            htmlTemplatesFolder.setLastModifiedDate(aHtmlTemplatesDateTime);
                            jsonMonitoringObject["content"]["lastContentUpdate"] =
                                aMediaFilesDateTime.isGreater(aHtmlTemplatesDateTime) ? aMediaFilesDateTime.getAsISOString() : aHtmlTemplatesDateTime.getAsISOString();
                            self._aActivityLogService._IActivityLogServiceMessaging
                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Last content updated " + jsonMonitoringObject["content"]["lastContentUpdate"], null, null, null);
                        }
                        var playlistFile = self._aPlaybackGlobalConfig.getPlaylistFile();
                        var cbPlaylistLastModified = function (ctx8) {
                            if (ctx8 != null && !ctx8.isError()) {
                                var strDate = ctx8.getResult();
                                var aPlaylistDateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
                                self._aUtilsService._iUtilsDateTime.getDateTime(aPlaylistDateTime, strDate);
                                playlistFile.setLastModifiedDate(aPlaylistDateTime);
                                jsonMonitoringObject["content"]["lastPlaylistUpdate"] = aPlaylistDateTime.getAsISOString();
                                self._aActivityLogService._IActivityLogServiceMessaging
                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Last playlist modified " + jsonMonitoringObject["content"]["lastPlaylistUpdate"], null, null, null);
                            }
                            var cbGetFirmwareVersion = function (ctx7) {
                                if (ctx7 != null && !ctx7.isError()) {
                                    var firmwareVersion = ctx7.getResult();
                                    jsonMonitoringObject["version"]["hardware"] = firmwareVersion;
                                    jsonMonitoringObject["version"]["software"] = self._aPlaybackGlobalConfig.getAppVersion() + " build " + self._aPlaybackGlobalConfig.getAppBuildNo();
                                    jsonMonitoringObject["version"]["softwareEA"] = aMonitoringSettings.getEarlyAdopter();
                                    self._aActivityLogService._IActivityLogServiceMessaging
                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Firmware version obtained successfully " + firmwareVersion, null, null, null);
                                }
                                else {
                                    jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "Firmware version"));
                                    var logMessage = (ctx7 != null) ? "[" + ctx7.getError().getErrMsg() + "]" : "";
                                    self._aActivityLogService._IActivityLogServiceMessaging
                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Error in obtaining Firmware version: " + logMessage, null, null, null);
                                }
                                var cbGetUpTime = function (ctx6) {
                                    if (ctx6 != null && !ctx6.isError()) {
                                        var upTime = ctx6.getIntResult();
                                        jsonMonitoringObject["uptime"] = upTime;
                                        self._aActivityLogService._IActivityLogServiceMessaging
                                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Device Uptime obtained successfully " + upTime, null, null, null);
                                    }
                                    else {
                                        jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "UpTime"));
                                        var logMessage = (ctx6 != null) ? "[" + ctx6.getError().getErrMsg() + "]" : "";
                                        self._aActivityLogService._IActivityLogServiceMessaging
                                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Error in obtaining device UpTime: " + logMessage, null, null, null);
                                    }
                                    var cbGetCPUInfo = function (ctx5) {
                                        if (ctx5 != null && !ctx5.isError()) {
                                            var cpusLoad = ctx5.getArrayResult();
                                            var cpuLogResults = "";
                                            for (var i = 0; i < cpusLoad.length; i++) {
                                                var processor = {};
                                                processor["id"] = "CPU " + i;
                                                processor["load"] = cpusLoad[i];
                                                cpuLogResults += "CPU" + i + " load " + cpusLoad[i] + "; ";
                                                jsonMonitoringObject["hardware"]["processors"].push(processor);
                                            }
                                            if (cpuLogResults.length > 2) {
                                                cpuLogResults = cpuLogResults.slice(0, -2);
                                            }
                                            self._aActivityLogService._IActivityLogServiceMessaging
                                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "CPU Info obtained successfully: " + cpuLogResults, null, null, null);
                                        }
                                        else {
                                            jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "CPU info"));
                                            var logMessage = (ctx5 != null) ? "[" + ctx5.getError().getErrMsg() + "]" : "";
                                            self._aActivityLogService._IActivityLogServiceMessaging
                                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Error in obtaining CPU info: " + logMessage, null, null, null);
                                        }
                                        var cbGetSystemUsageInfo = function (ctx4) {
                                            if (ctx4 != null && !ctx4.isError()) {
                                                var memoryInfo = ctx4.getObjectResult();
                                                var memoryInfoLocal = self._aServiceLocator._iEntityCreation.createDefaultSystemUsageInfo(error);
                                                memoryInfoLocal.copyFromJson(memoryInfo);
                                                var availableMem = memoryInfoLocal.getAvailableMemory();
                                                var totalMemory = memoryInfoLocal.getTotalMemory();
                                                var systemStorageUnits = memoryInfoLocal.getSystemStorageUnits();
                                                jsonMonitoringObject["hardware"]["availableMemory"] = availableMem;
                                                jsonMonitoringObject["hardware"]["totalMemory"] = totalMemory;
                                                var storageResults = "Drives: ";
                                                for (var i = 0; i < systemStorageUnits.length; i++) {
                                                    var jsonDisk = {};
                                                    var storageUnit = systemStorageUnits[i];
                                                    jsonDisk["available"] = storageUnit.getAvailableCapacity();
                                                    jsonDisk["total"] = storageUnit.getCapacity();
                                                    var mountPoint = storageUnit.getType();
                                                    jsonDisk["id"] = mountPoint;
                                                    var aJsonFileSettingsV2 = self._aPlaybackGlobalConfig.getSettingsFolder();
                                                    var strStorage = aJsonFileSettingsV2.getStorage().substring(0, 2).toLowerCase();
                                                    var strPartition = mountPoint.substring(0, 2).toLowerCase();
                                                    if (strStorage === strPartition) {
                                                        jsonDisk["id"] += " [MAIN]";
                                                    }
                                                    jsonMonitoringObject["hardware"]["disks"].push(jsonDisk);
                                                    storageResults += jsonDisk["id"] + " total: " + jsonDisk["total"] + " available: " + jsonDisk["available"] + "; ";
                                                }
                                                if (storageResults.length > 2) {
                                                    storageResults = storageResults.slice(0, -2);
                                                }
                                                self._aActivityLogService._IActivityLogServiceMessaging
                                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "System usage obtained successfully: " + storageResults, null, null, null);
                                            }
                                            else {
                                                jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "System usage"));
                                                var logMessage = (ctx4 != null) ? "[" + ctx4.getError().getErrMsg() + "]" : "";
                                                self._aActivityLogService._IActivityLogServiceMessaging
                                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Error in obtaining System usage: " + logMessage, null, null, null);
                                            }
                                            var cbGetNetworkInfo = function (ctx3) {
                                                if (ctx3 != null && !ctx3.isError()) {
                                                    var networkProperties = ctx3.getObjectResult();
                                                    var networkPropertiesLocal = self._aServiceLocator._iEntityCreation.createDefaultNetworkProperties(error);
                                                    networkPropertiesLocal.copyFromJson(networkProperties);
                                                    var isWifi = networkPropertiesLocal.getWifiNetCardProperties().isEnable();
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
                                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Network Info obtained successfully", null, null, null);
                                                }
                                                else {
                                                    jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "Network info"));
                                                    var logMessage = (ctx3 != null) ? "[" + ctx3.getError().getErrMsg() + "]" : "";
                                                    self._aActivityLogService._IActivityLogServiceMessaging
                                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Error in obtaining Network Info: " + logMessage, null, null, null);
                                                }
                                                var cbGetMediaVolume = function (ctx2) {
                                                    if (ctx2 != null && !ctx2.isError()) {
                                                        jsonMonitoringObject["custom"]["mediaVolume"] = ctx2.getResult();
                                                        self._aActivityLogService._IActivityLogServiceMessaging
                                                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Media volume obtained successfully", null, null, null);
                                                    }
                                                    else {
                                                        jsonMonitoringObject["errors"].push(self.createMonitoringError(aDateTime, "Media volume"));
                                                        var logMessage = (ctx2 != null) ? "[" + ctx2.getError().getErrMsg() + "]" : "";
                                                        self._aActivityLogService._IActivityLogServiceMessaging
                                                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Error in obtaining Media volume: " + logMessage, null, null, null);
                                                    }
                                                    self._aHttpRequest.reset();
                                                    self._aHttpRequest.setMethod("POST");
                                                    self._aHttpRequest.setUrlPath(self._aPlaybackGlobalConfig.getBaseServerApiUrl() + "/" + aMonitoringSettings.getRemoteRelativePath());
                                                    var reqHeaders = {
                                                        "Content-Type": "application/json",
                                                        "Accept": "application/json",
                                                        "Authorization": "FB5ED944377FC2E532B28C3F5B844A94BE01C072FC99A34A95FBD99278468D64"
                                                    };
                                                    self._aHttpRequest.setHeaders(JSON.stringify(reqHeaders));
                                                    self._aHttpRequest.setBody(JSON.stringify(jsonMonitoringObject));
                                                    var requestSent = function (ctx1) {
                                                        if (ctx1 != null && !ctx1.isError()) {
                                                            self._aActivityLogService._IActivityLogServiceMessaging
                                                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Monitoring report sent", null, null, null);
                                                            if (self._debug) {
                                                                console.log("Monitoring report sent");
                                                                document.getElementById("rend.message").innerHTML += "<p>Monitoring report sent</p>";
                                                            }
                                                        }
                                                        else {
                                                            var logMessage = "";
                                                            if (ctx1 != null) {
                                                                error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                                                                logMessage = "[" + error.getErrMsg() + "]";
                                                            }
                                                            self._aActivityLogService._IActivityLogServiceMessaging
                                                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Monitoring report sent FAILED: " + logMessage, null, null, null);
                                                        }
                                                        context != null && context.setError(error);
                                                        callback != null && callback(context);
                                                    };
                                                    var errorSendRequest = self._aServiceLocator._iEntityCreation.createDefaultError();
                                                    var contextSendRequest = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                                    contextSendRequest.setRemoteCallback(true);
                                                    self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
                                                };
                                                var errorGetMediaVolume = self._aServiceLocator._iEntityCreation.createDefaultError();
                                                var contextGetMediaVolume = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                                contextGetMediaVolume.setRemoteCallback(true);
                                                self._aSDKService._iSDKAudioSetup.getVolumeLevel(errorGetMediaVolume, contextGetMediaVolume, cbGetMediaVolume);
                                            };
                                            var errorGetNetworkInfo = self._aServiceLocator._iEntityCreation.createDefaultError();
                                            var contextGetNetworkInfo = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                            contextGetNetworkInfo.setRemoteCallback(true);
                                            self._aSDKService._iSDKHardwareSetup.getNewtworkInfo(errorGetNetworkInfo, contextGetNetworkInfo, cbGetNetworkInfo);
                                        };
                                        var errorGetSystemUsageInfo = self._aServiceLocator._iEntityCreation.createDefaultError();
                                        var contextGetSystemUsageInfo = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                        contextGetSystemUsageInfo.setRemoteCallback(true);
                                        self._aSDKService._iSDKHardwareSetup.getSystemUsageInfo(errorGetSystemUsageInfo, contextGetSystemUsageInfo, cbGetSystemUsageInfo);
                                    };
                                    var errorGetCPUInfo = self._aServiceLocator._iEntityCreation.createDefaultError();
                                    var contextGetCPUInfo = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                    contextGetCPUInfo.setRemoteCallback(true);
                                    self._aSDKService._iSDKHardwareSetup.getCPUInfo(errorGetCPUInfo, contextGetCPUInfo, cbGetCPUInfo);
                                };
                                var errorGetUpTime = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextGetUpTime = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                contextGetUpTime.setRemoteCallback(true);
                                self._aSDKService._iSDKGeneralConfiguration.getUpTime(errorGetUpTime, contextGetUpTime, cbGetUpTime);
                            };
                            var errorGetFirmwareVersion = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextGetFirmwareVersion = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            contextGetFirmwareVersion.setRemoteCallback(true);
                            self._aSDKService._iSDKFirmwareSetup.getFirmwareVersion(errorGetFirmwareVersion, contextGetFirmwareVersion, cbGetFirmwareVersion);
                        };
                        var errorPlaylistLastModifies = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextPlaylistLastModifies = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        contextPlaylistLastModifies.setRemoteCallback(true);
                        self._aSDKService._iSDKFileSystem.getLastModified(playlistFile, errorPlaylistLastModifies, contextPlaylistLastModifies, cbPlaylistLastModified);
                    };
                    var errorHtmlTemplatesLastModifies = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextHtmlTemplatesLastModifies = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    contextHtmlTemplatesLastModifies.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.getLastModified(htmlTemplatesFolder, errorHtmlTemplatesLastModifies, contextHtmlTemplatesLastModifies, cbHtmlTemplatesLastModified);
                };
                var errorMediaFilesLastModifies = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextMediaFilesLastModifies = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextMediaFilesLastModifies.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.getLastModified(mediaFilesFolder, errorMediaFilesLastModifies, contextMediaFilesLastModifies, cbMediaFilesLastModified);
            };
            //-----------------------------
            RS_MonitoringService.prototype.startMonitoring = function (aMonitoringSettings, error, context, callback) {
                var self = this;
                if (aMonitoringSettings == null) {
                    aMonitoringSettings = self._aMonitoringSettings;
                }
                if (aMonitoringSettings == null) {
                    context != null && context.setError(error);
                    callback != null && callback(context);
                    return;
                }
                self._aActivityLogService._IActivityLogServiceMessaging
                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Starting Monitoring Timeout", null, null, null);
                setTimeout(function sendMonitoringFn() {
                    self.sendMonitoringReport(aMonitoringSettings, error, context, callback);
                    if (self._aScreenshotService != null) {
                        self._aScreenshotService._iScreenshotMain.generateAndSendScreenshot(self._aScreenshotService._iScreenshotConfig.getDefaultScreenshotOptions(), error, context, null);
                    }
                    setTimeout(sendMonitoringFn, self._iMonitoringInterval);
                }, self._iStartMonitoringTimeout);
            };
            return RS_MonitoringService;
        }(rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService));
        rm_nonrenderingservices.RS_MonitoringService = RS_MonitoringService;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RS_Monitoring.js.map