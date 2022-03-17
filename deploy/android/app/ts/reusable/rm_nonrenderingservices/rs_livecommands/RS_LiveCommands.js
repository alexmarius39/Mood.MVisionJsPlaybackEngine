"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var amActivityLogMessageTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");
var amServerCommand = require("../../../abstract/am_general/ae_livecommands/AE_ServerCommand");
var rmNonRenderingServices = require("../r_nonrenderingservice/R_NonRenderingService");
var rmLiveCommandsMain = require("./RI_LiveCommands_Main");
var rmLiveCommandsConfig = require("./RI_LiveCommands_Config");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RS_LiveCommandsService = (function (_super) {
        __extends(RS_LiveCommandsService, _super);
        function RS_LiveCommandsService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iLiveCommandsMain = new rmLiveCommandsMain.rm_nonrenderingservices.RI_LiveCommandsMain(_this);
            _this._iLiveCommandsConfig = new rmLiveCommandsConfig.rm_nonrenderingservices.RI_LiveCommandsConfig(_this);
            _this._aLogService = aLogService;
            _this._aPlaybackGlobalConfig = null;
            _this._aLiveCommandsSettings = null;
            _this._aActivityLogService = null;
            _this._aVolumeSetupService = null;
            _this._aMonitoringService = null;
            _this._aHttpRequest = null;
            return _this;
        }
        RS_LiveCommandsService.prototype.setSDKService = function (aSDKService) {
            this._aSDKService = aSDKService;
        };
        RS_LiveCommandsService.prototype.setUtilsService = function (aUtilsService) {
            this._aUtilsService = aUtilsService;
        };
        RS_LiveCommandsService.prototype.getPlaybackGlobalConfig = function () {
            return this._aPlaybackGlobalConfig;
        };
        RS_LiveCommandsService.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
        };
        RS_LiveCommandsService.prototype.getDefaultLiveCommandsSettings = function () {
            return this._aLiveCommandsSettings;
        };
        RS_LiveCommandsService.prototype.setDefaultLiveCommandsSettings = function (aLiveCommandsSettings) {
            this._aLiveCommandsSettings = aLiveCommandsSettings;
        };
        RS_LiveCommandsService.prototype.getActivityLogService = function () {
            return this._aActivityLogService;
        };
        RS_LiveCommandsService.prototype.setActivityLogService = function (aActivityLogService) {
            this._aActivityLogService = aActivityLogService;
        };
        RS_LiveCommandsService.prototype.getVolumeSetupService = function () {
            return this._aVolumeSetupService;
        };
        RS_LiveCommandsService.prototype.setVolumeSetupService = function (aVolumeSetupService) {
            this._aVolumeSetupService = aVolumeSetupService;
        };
        RS_LiveCommandsService.prototype.getMonitoringService = function () {
            return this._aMonitoringService;
        };
        RS_LiveCommandsService.prototype.setMonitoringService = function (aMonitoringService) {
            this._aMonitoringService = aMonitoringService;
        };
        RS_LiveCommandsService.prototype.getSettingsSyncService = function () {
            return this._aSettingsSyncService;
        };
        RS_LiveCommandsService.prototype.setSettingsSyncService = function (aSettingsSyncService) {
            this._aSettingsSyncService = aSettingsSyncService;
        };
        RS_LiveCommandsService.prototype.init = function (error) {
            this._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, this.getServiceName(), "Initializing Live Commands Service ...", null, null, null);
            this._aHttpRequest = this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
        };
        RS_LiveCommandsService.prototype.startListener = function (aLiveCommandsSettings, error, context, callback) {
            var self = this;
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
            self._aHttpRequest.setUrlPath("" + self._aPlaybackGlobalConfig.getBaseServerApiUrl() + aLiveCommandsSettings.getAuthTokenRelativePath() + "/" + self._aPlaybackGlobalConfig.getSerialNumber());
            var requestSent = function (ctx1) {
                var logMessage = "";
                if (ctx1 != null && !ctx1.isError()) {
                    var strAuthToken = ctx1.getResult();
                    logMessage = (strAuthToken.length > 0) ? "Auth token SUCCESS" : "Empty auth token";
                    self._aActivityLogService._IActivityLogServiceMessaging
                        .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), logMessage, null, null, null);
                    if (strAuthToken.length > 0) {
                        if (self._debug) {
                            console.log(logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>" + logMessage + "</p>";
                        }
                        self._aUtilsService._iUtilsSignalR.createConnection("" + self._aPlaybackGlobalConfig.getBaseServerApiUrl() + aLiveCommandsSettings.getSignalRHubRelativePath(), strAuthToken);
                        var signalRConnection = self._aUtilsService._iUtilsSignalR.getConnection();
                        if (signalRConnection != null) {
                            self._aUtilsService._iUtilsSignalR.setMaxStartConnectionAttempts(3);
                            var errorSignalR_1 = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextSignalR_1 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            var cbConnectionStarted_1 = function (ctx2) {
                                if (ctx2 != null && !ctx2.isError()) {
                                    if (self._debug) {
                                        console.log("LiveCommands service: SignalR connection started");
                                        document.getElementById("rend.message").innerHTML += "<p>LiveCommands service: SignalR connection started</p>";
                                    }
                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "LiveCommands service: SignalR connection started", null, null, null);
                                }
                                else {
                                    var logMessage_1 = (ctx2 != null) ? "[" + ctx2.getError().getErrMsg() + "]" : "";
                                    if (self._debug) {
                                        console.log("LiveCommands service: error " + logMessage_1);
                                        document.getElementById("rend.message").innerHTML += "<p>LiveCommands service: error " + logMessage_1 + "</p>";
                                    }
                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "LiveCommands service: error " + logMessage_1, null, null, null);
                                }
                            };
                            self._aUtilsService._iUtilsSignalR.startConnection(errorSignalR_1, contextSignalR_1, cbConnectionStarted_1);
                            signalRConnection.on(aLiveCommandsSettings.getSignalRHubMethodName(), function (user, message) {
                                var logMessage = "invalid handler args when method " + aLiveCommandsSettings.getSignalRHubMethodName() + " is invoked: " + user + ", " + message;
                                var msgType = amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error;
                                var errorServerCommand = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var aServerCommand = self._aServiceLocator._iEntityCreation.createDefaultServerCommand(errorServerCommand);
                                if (user != null && user.name != null && user.id != null && aServerCommand != null) {
                                    logMessage = "received comand name: " + user.name + ", id: " + user.id;
                                    var nId = +user.id;
                                    if (!isNaN(nId)) {
                                        aServerCommand.setId(nId);
                                    }
                                    aServerCommand.setName(user.name);
                                    if (user.params != null) {
                                        aServerCommand.setParams(user.params);
                                    }
                                    self.runCommand(aServerCommand);
                                    msgType = amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info;
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(msgType, self.getServiceName(), logMessage, null, null, null);
                                if (self._debug) {
                                    console.log("LiveCommands service: " + logMessage);
                                    document.getElementById("rend.message").innerHTML += "<p>LiveCommands service: " + logMessage + "</p>";
                                }
                            });
                            signalRConnection.onclose(function () {
                                self._aUtilsService._iUtilsSignalR.startConnection(errorSignalR_1, contextSignalR_1, cbConnectionStarted_1);
                            });
                        }
                    }
                }
                else {
                    if (ctx1 != null) {
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        logMessage = "[" + error.getErrMsg() + "]";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging
                        .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Auth token FAILED: " + logMessage, null, null, null);
                }
                context != null && context.setError(error);
                callback != null && callback(context);
            };
            var errorSendRequest = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSendRequest = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextSendRequest.setRemoteCallback(true);
            self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
        };
        RS_LiveCommandsService.prototype.runCommand = function (aServerCommand) {
            var self = this;
            if (aServerCommand != null) {
                var cmdId = aServerCommand.getId();
                var cmdParams = aServerCommand.getParams();
                switch (cmdId) {
                    case amServerCommand.am_general.Type.CAPTURE_SCREENSHOT:
                        self.sendScreenshot();
                        break;
                    case amServerCommand.am_general.Type.PLAYLIST_UPDATE:
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
        };
        RS_LiveCommandsService.prototype.setVolume = function (nVolume) {
            var self = this;
            var errorAudioProperties = self._aServiceLocator._iEntityCreation.createDefaultError();
            var audioProperties = self._aServiceLocator._iEntityCreation.createDefaultSoundProperties(errorAudioProperties);
            audioProperties.setVolumeLevel(nVolume);
            var cbSetVolume = function (ctx1) {
                if (ctx1 != null && !ctx1.isError()) {
                    var jsonSettings = self._aPlaybackGlobalConfig.getJsonDeviceSettings();
                    if (jsonSettings != null && jsonSettings["soundSettings.volumeLevels"] != null) {
                        var crtTimestamp = Date.now();
                        jsonSettings["soundSettings.volumeLevels"] = {
                            "timestamp": crtTimestamp,
                            "value": {
                                "MEDIA": audioProperties.getVolumeLevel()
                            }
                        };
                        var aServerDeviceSettingsConfiguration = self._aSettingsSyncService._iSettingsSyncConfig.getDefaultServerDeviceSettingsConfiguration();
                        self._aPlaybackGlobalConfig.setJsonDeviceSettings(jsonSettings);
                        aServerDeviceSettingsConfiguration.setServerDeviceSettingsChanged(false);
                        aServerDeviceSettingsConfiguration.copyFromJson(jsonSettings);
                        var cbUpdateServerSettings = function (ctx2) {
                            if (ctx2 != null && !ctx2.isError()) {
                                var errorSaveFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextSaveFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                return self._aSettingsSyncService._iSettingsSyncMain.saveSettingsFile("device_settings.json", errorSaveFile, contextSaveFile, null);
                            }
                        };
                        var errorUpdateSettings = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextUpdateSettings = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        return self._aSettingsSyncService._iSettingsSyncMain.updateServerSettings(jsonSettings, null, errorUpdateSettings, contextUpdateSettings, cbUpdateServerSettings);
                    }
                }
            };
            var errorVolumeSetup = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextVolumeSetup = self._aServiceLocator._iEntityCreation.createDefaultContext();
            self._aVolumeSetupService._iVolumeSetupMain.setVolume(audioProperties, errorVolumeSetup, contextVolumeSetup, cbSetVolume);
        };
        RS_LiveCommandsService.prototype.sendScreenshot = function () {
            var self = this;
            var errorSendScreenshot = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSendScreenshot = self._aServiceLocator._iEntityCreation.createDefaultContext();
            self._aMonitoringService._iMonitoringConfig.getScreeshotService()._iScreenshotMain.generateAndSendScreenshot(null, errorSendScreenshot, contextSendScreenshot, null);
        };
        RS_LiveCommandsService.prototype.updatePlaylistAndContent = function (updateParams) {
            var self = this;
            var updateType = (typeof updateParams.mode == "string") ? updateParams.mode : "";
            var errorCreateService = self._aServiceLocator._iEntityCreation.createDefaultError();
            var aPlaylistDownloader = self._aServiceLocator._iServiceCreation.createDefaultService_PlaylistDownloader(self._aServiceContainer, self._aServiceLocator, self._aLogService, 0, errorCreateService);
            aPlaylistDownloader._iService.setSDKService(self._aSDKService);
            aPlaylistDownloader._iService.setUtilsService(self._aUtilsService);
            aPlaylistDownloader._iPlaylistDownloaderConfig.setPlaybackGlobalConfig(self._aPlaybackGlobalConfig);
            aPlaylistDownloader._iPlaylistDownloaderConfig.setActivityLogService(self._aActivityLogService);
            aPlaylistDownloader._iServiceConfig.setDebug(self._debug);
            var errorPlaylistDownload = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextPlaylistDownload = self._aServiceLocator._iEntityCreation.createDefaultContext();
            if (updateType === "UPDATE_PLAYLIST_AND_DEPENDENCIES") {
                aPlaylistDownloader._iPlaylistDownloaderMain.download(errorPlaylistDownload, contextPlaylistDownload, function () { });
            }
            else if (updateType === "UPDATE_PLAYLIST_ONLY") {
                aPlaylistDownloader._iPlaylistDownloaderMain.updatePlaylist(errorPlaylistDownload, contextPlaylistDownload, null);
            }
        };
        RS_LiveCommandsService.prototype.sendMonitoring = function () {
            var self = this;
            var errorSendScreenshot = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSendScreenshot = self._aServiceLocator._iEntityCreation.createDefaultContext();
            self._aMonitoringService._iMonitoringMain.sendMonitoringReport(null, errorSendScreenshot, contextSendScreenshot, null);
        };
        RS_LiveCommandsService.prototype.rebootDevice = function () {
            var self = this;
            var errorPowerProperties = self._aServiceLocator._iEntityCreation.createDefaultError();
            var aPowerProperties = self._aServiceLocator._iEntityCreation.createDefaultPowerProperties(errorPowerProperties);
            aPowerProperties.setPowerCommand("reboot");
            var errorExecPowerCmd = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextExecPowerCmd = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextExecPowerCmd.setRemoteCallback(true);
            self._aSDKService._iSDKPowerSetup.executePowerCommand(aPowerProperties, errorExecPowerCmd, contextExecPowerCmd, null);
        };
        return RS_LiveCommandsService;
    }(rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService));
    rm_nonrenderingservices.RS_LiveCommandsService = RS_LiveCommandsService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RS_LiveCommands.js.map