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
var rmStartupMain = require("./RI_Startup_Main");
var rmStartupConfig = require("./RI_Startup_Config");
var rmRenderingServices = require("../r_renderingservice/R_RenderingService");
var amActivityLogMessageTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RS_StartupService = (function (_super) {
        __extends(RS_StartupService, _super);
        function RS_StartupService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iStartupMain = new rmStartupMain.rm_renderingservices.RI_StartupMain(_this);
            _this._iStartupConfig = new rmStartupConfig.rm_renderingservices.RI_StartupConfig(_this);
            _this._aLogService = aLogService;
            _this._aHttpRequest = null;
            _this._aStartupSettings = null;
            _this._aActivityLogService = null;
            _this._bSetDefaultSettingsAtStartup = true;
            _this._jsonSettingsV2Unmapped = null;
            _this._jsonSettingsV2 = null;
            return _this;
        }
        RS_StartupService.prototype.setSDKService = function (aSDKService) {
            this._aSDKService = aSDKService;
        };
        RS_StartupService.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
        };
        RS_StartupService.prototype.getPlaybackGlobalConfig = function () {
            return this._aPlaybackGlobalConfig;
        };
        RS_StartupService.prototype.getDefaultStartupSettings = function () {
            return this._aStartupSettings;
        };
        RS_StartupService.prototype.setDefaultStartupSettings = function (aStartupSettings) {
            this._aStartupSettings = aStartupSettings;
        };
        RS_StartupService.prototype.getActivityLogService = function () {
            return this._aActivityLogService;
        };
        RS_StartupService.prototype.setActivityLogService = function (aActivityLogService) {
            this._aActivityLogService = aActivityLogService;
        };
        RS_StartupService.prototype.init = function (error) {
            if (this._debug) {
                console.log("Initializing Startup Service ...");
                document.getElementById("rend.message").innerHTML += "<p>Initializing Startup Service ...</p>";
            }
            this._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, this.getServiceName(), "Initializing Startup Service ...", null, null, null);
            this._aHttpRequest = this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
        };
        RS_StartupService.prototype.saveSettingsV2File = function (strFileName, error, context, callback) {
            var self = this;
            var aFile = self._aPlaybackGlobalConfig.getSettingsFolder();
            var errorSaveFile = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSaveFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextSaveFile.setRemoteCallback(true);
            var cbWriteFileModified = function (ctx) {
                aFile.setName("settings_v2_modified.json");
                self._aSDKService._iSDKFileSystem.writeTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), JSON.stringify(self._jsonSettingsV2, null, 2), errorSaveFile, contextSaveFile, callback);
            };
            if (strFileName == "settings_v2_modified.json") {
                return cbWriteFileModified(null);
            }
            else if (strFileName === "settings_v2.json") {
                aFile.setName("settings_v2.json");
                return this._aSDKService._iSDKFileSystem.writeTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), JSON.stringify(self._jsonSettingsV2Unmapped, null, 2), errorSaveFile, contextSaveFile, cbWriteFileModified);
            }
            context != null && context.setError(error);
            callback != null && callback(context);
        };
        RS_StartupService.prototype.restartDevice = function (error, context, callback, nextCbName) {
            var self = this;
            var cbReboot = function (ctx1) {
                if (ctx1 != null && !ctx1.isError()) {
                    if (ctx1.getResult() === "not supported") {
                        if (self._debug) {
                            console.log("Startup service: device restart feature not supported");
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: device restart feature not supported</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), "device restart feature not supported", null, null, null);
                    }
                    else {
                        var retReboot = ctx1.getBoolResult();
                        if (retReboot == false) {
                            if (self._debug) {
                                console.log("Startup service: device restart failed");
                                document.getElementById("rend.message").innerHTML += "<p>Startup service: device restart failed</p>";
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "device restart failed", null, null, null);
                        }
                    }
                }
                if (nextCbName === "setDefaultTimeSettings") {
                    self.setDefaultTimeSettings(null, error, context, callback);
                }
                else if (nextCbName === "getDeviceTimezone") {
                    self.getDeviceTimezone(null, error, context, callback);
                }
                else {
                    self.saveLastValues(null, error, context, callback);
                }
            };
            var aPowerProperties = self._aServiceLocator._iEntityCreation.createDefaultPowerProperties(error);
            aPowerProperties.setPowerCommand("reboot");
            var errorExecPowerCmd = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextExecPowerCmd = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextExecPowerCmd.setRemoteCallback(true);
            self._aSDKService._iSDKPowerSetup.executePowerCommand(aPowerProperties, errorExecPowerCmd, contextExecPowerCmd, cbReboot);
        };
        RS_StartupService.prototype.saveLastValues = function (aSystemSettings, error, context, callback) {
            context != null && context.setError(error);
            callback != null && callback(context);
            var self = this;
            if (aSystemSettings == null) {
                aSystemSettings = self._aStartupSettings.getSystemSettings();
            }
            if (aSystemSettings == null) {
                return;
            }
            var bSaveLastValuesAtStartup = aSystemSettings.getSaveSettingsLastValuesAtStartup();
            if (bSaveLastValuesAtStartup === true) {
                setTimeout(function saveLastValuesFn() {
                    var aAudioSettings = self._aStartupSettings.getAudioSettings();
                    var aTimeSettings = self._aStartupSettings.getTimeSettings();
                    var aVideoSettings = self._aStartupSettings.getVideoSettings();
                    var aLanguageSettings = self._aStartupSettings.getLanguageSettings();
                    var bSettingsChanged = false;
                    var cbGetVolume = function (ctx1) {
                        if (ctx1 != null && !ctx1.isError() && aAudioSettings != null) {
                            try {
                                var audioVolume = parseInt(ctx1.getResult());
                                if (!isNaN(audioVolume) && audioVolume !== aAudioSettings.getLastVolumeLevel()) {
                                    if (self._debug) {
                                        console.log("Startup service: saved last volume " + audioVolume);
                                        document.getElementById("rend.message").innerHTML += "<p>Startup service: saved last volume " + audioVolume + "</p>";
                                    }
                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "saved last volume " + audioVolume, null, null, null);
                                    self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_audio_settings"]["last_volume_level"] = audioVolume;
                                    self._jsonSettingsV2["startup"]["default_system_settings"]["default_audio_settings"]["last_volume_level"] = audioVolume;
                                    aAudioSettings.setLastVolumeLevel(audioVolume);
                                    bSettingsChanged = true;
                                }
                            }
                            catch (e) {
                                if (self._debug) {
                                    console.log("Startup service: saveLastValues exception " + e.message);
                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues exception " + e.message + "</p>";
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Startup service: saveLastValues exception " + e.message, null, null, null);
                            }
                        }
                        else {
                            var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                            if (self._debug) {
                                console.log("Startup service: saveLastValues error in getting device volume " + logMessage);
                                document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues error in getting device volume " + logMessage + "</p>";
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "saveLastValues error in getting device volume: " + logMessage, null, null, null);
                        }
                        var _a = window.screen, height = _a.height, orientation = _a.orientation, width = _a.width;
                        var strOrientation = orientation.type.toString().split("-")[0].toLowerCase();
                        try {
                            if (height != aVideoSettings.getLastScreenHeight()) {
                                if (self._debug) {
                                    console.log("Startup service: saved last screen height " + height);
                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: saved last screen height " + height + "</p>";
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "saved last screen height " + height, null, null, null);
                                self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_display_settings"]["last_screen_height"] = height;
                                self._jsonSettingsV2["startup"]["default_system_settings"]["default_display_settings"]["last_screen_height"] = height;
                                aVideoSettings.setLastScreenHeight(height);
                                bSettingsChanged = true;
                            }
                            if (width != aVideoSettings.getLastScreenWidth()) {
                                if (self._debug) {
                                    console.log("Startup service: saved last screen width " + width);
                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: saved last screen width " + width + "</p>";
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "saved last screen width " + width, null, null, null);
                                self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_display_settings"]["last_screen_width"] = width;
                                self._jsonSettingsV2["startup"]["default_system_settings"]["default_display_settings"]["last_screen_width"] = width;
                                aVideoSettings.setLastScreenWidth(width);
                                bSettingsChanged = true;
                            }
                            if (strOrientation != aVideoSettings.getLastScreenOrientation()) {
                                if (self._debug) {
                                    console.log("Startup service: saved last screen orientation " + strOrientation);
                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: saved last screen orientation " + strOrientation + "</p>";
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "saved last screen orientation " + strOrientation, null, null, null);
                                self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_display_settings"]["last_screen_orientation"] = strOrientation;
                                self._jsonSettingsV2["startup"]["default_system_settings"]["default_display_settings"]["last_screen_orientation"] = strOrientation;
                                aVideoSettings.setLastScreenOrientation(strOrientation);
                                bSettingsChanged = true;
                            }
                        }
                        catch (e) {
                            if (self._debug) {
                                console.log("Startup service: saveLastValues exception " + e.message);
                                document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues exception " + e.message + "</p>";
                            }
                        }
                        var cbGetScreenProps = function (ctx2) {
                            if (ctx2 != null && !ctx2.isError() && aVideoSettings != null) {
                                var brightnessLevel = ctx2.getIntResult();
                                if (brightnessLevel !== aVideoSettings.getLastBrightnessLevel()) {
                                    try {
                                        if (self._debug) {
                                            console.log("Startup service: saved last brightness " + brightnessLevel);
                                            document.getElementById("rend.message").innerHTML += "<p>Startup service: saved last brightness " + brightnessLevel + "</p>";
                                        }
                                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "saved last brightness " + brightnessLevel, null, null, null);
                                        self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_display_settings"]["last_brightness_level"] = brightnessLevel;
                                        self._jsonSettingsV2["startup"]["default_system_settings"]["default_display_settings"]["last_brightness_level"] = brightnessLevel;
                                        aVideoSettings.setLastBrightnessLevel(brightnessLevel);
                                        bSettingsChanged = true;
                                    }
                                    catch (e) {
                                        if (self._debug) {
                                            console.log("Startup service: saveLastValues exception " + e.message);
                                            document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues exception " + e.message + "</p>";
                                        }
                                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Startup service: saveLastValues exception " + e.message, null, null, null);
                                    }
                                }
                            }
                            else {
                                var logMessage = (ctx2 != null) ? "[" + ctx2.getError().getErrMsg() + "]" : "";
                                if (self._debug) {
                                    console.log("Startup service: saveLastValues error in getting screen properties: " + logMessage);
                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues error in getting screen properties: " + logMessage + "</p>";
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "saveLastValues error in getting screen properties: " + logMessage, null, null, null);
                            }
                            var cbGetTimeZone = function (ctx3) {
                                if (ctx3 != null && !ctx3.isError() && aTimeSettings != null) {
                                    var timeZone = ctx3.getObjectResult();
                                    var timeZoneLocal = self._aServiceLocator._iEntityCreation.createDefaultTimeZone(error);
                                    timeZoneLocal.copyFromJson(timeZone);
                                    var deviceTimezone = timeZoneLocal.getIANAString();
                                    if (deviceTimezone !== aTimeSettings.getLastDeviceTimeZone()) {
                                        try {
                                            if (self._debug) {
                                                console.log("Startup service: saved last timezone " + deviceTimezone);
                                                document.getElementById("rend.message").innerHTML += "<p>Startup service: saved last timezone " + deviceTimezone + "</p>";
                                            }
                                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "saved last timezone " + deviceTimezone, null, null, null);
                                            self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_time_settings"]["last_device_time_zone"] = deviceTimezone;
                                            self._jsonSettingsV2["startup"]["default_system_settings"]["default_time_settings"]["last_device_time_zone"] = deviceTimezone;
                                            aTimeSettings.setLastDeviceTimeZone(deviceTimezone);
                                            self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_time_settings"]["last_ntp_timezone"] = deviceTimezone;
                                            self._jsonSettingsV2["startup"]["default_system_settings"]["default_time_settings"]["last_ntp_timezone"] = deviceTimezone;
                                            aTimeSettings.setLastNTPTimeZone(deviceTimezone);
                                            bSettingsChanged = true;
                                        }
                                        catch (e) {
                                            if (self._debug) {
                                                console.log("Startup service: saveLastValues exception " + e.message);
                                                document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues exception " + e.message + "</p>";
                                            }
                                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Startup service: saveLastValues exception " + e.message, null, null, null);
                                        }
                                    }
                                }
                                else {
                                    var logMessage = (ctx3 != null) ? "[" + ctx3.getError().getErrMsg() + "]" : "";
                                    if (self._debug) {
                                        console.log("Startup service: saveLastValues error in getting device timezone: " + logMessage);
                                        document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues error in getting device timezone: " + logMessage + "</p>";
                                    }
                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "saveLastValues error in getting device timezone: " + logMessage, null, null, null);
                                }
                                var cbGetUseNTP = function (ctx4) {
                                    if (ctx4 != null && !ctx4.isError() && ctx4.getResult() !== "not supported" && aTimeSettings != null) {
                                        var bUseNTP = ctx4.getBoolResult();
                                        if (bUseNTP !== aTimeSettings.getLastUseNTP()) {
                                            try {
                                                var strNTPUse = bUseNTP ? "USE" : "UNUSE";
                                                if (self._debug) {
                                                    console.log("Startup service: saved last NTP use " + strNTPUse);
                                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: saved last NTP use " + strNTPUse + "</p>";
                                                }
                                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "saved last NTP use " + strNTPUse, null, null, null);
                                                self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_time_settings"]["last_use_ntp"] = bUseNTP;
                                                self._jsonSettingsV2["startup"]["default_system_settings"]["default_time_settings"]["last_use_ntp"] = bUseNTP;
                                                aTimeSettings.setLastUseNTP(bUseNTP);
                                                bSettingsChanged = true;
                                            }
                                            catch (e) {
                                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Startup service: saveLastValues exception " + e.message, null, null, null);
                                                if (self._debug) {
                                                    console.log("Startup service: saveLastValues exception " + e.message);
                                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues exception " + e.message + "</p>";
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        var logMessage = (ctx4 != null) ? "[" + ctx4.getError().getErrMsg() + "]" : "";
                                        if (self._debug) {
                                            console.log("Startup service: saveLastValues error in getting Use NTP: " + logMessage);
                                            document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues error in getting Use NTP: " + logMessage + "</p>";
                                        }
                                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "saveLastValues error in getting Use NTP: " + logMessage, null, null, null);
                                    }
                                    var cbGetNTPServerUrl = function (ctx5) {
                                        if (ctx5 != null && !ctx5.isError() && ctx5.getBoolResult() !== false && aTimeSettings != null) {
                                            var strNTPServer = ctx5.getResult();
                                            if (strNTPServer !== aTimeSettings.getLastNTPServerUrl()) {
                                                try {
                                                    if (self._debug) {
                                                        console.log("Startup service: saved last NTP server " + strNTPServer);
                                                        document.getElementById("rend.message").innerHTML += "<p>Startup service: saved last NTP server " + strNTPServer + "</p>";
                                                    }
                                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "saved last NTP server " + strNTPServer, null, null, null);
                                                    self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_time_settings"]["last_ntp_server_url"] = strNTPServer;
                                                    self._jsonSettingsV2["startup"]["default_system_settings"]["default_time_settings"]["last_ntp_server_url"] = strNTPServer;
                                                    aTimeSettings.setLastNTPServerUrl(strNTPServer);
                                                    bSettingsChanged = true;
                                                }
                                                catch (e) {
                                                    if (self._debug) {
                                                        console.log("Startup service: saveLastValues exception " + e.message);
                                                        document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues exception " + e.message + "</p>";
                                                    }
                                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Startup service: saveLastValues exception " + e.message, null, null, null);
                                                }
                                            }
                                        }
                                        var cbGetLanguage = function (ctx6) {
                                            if (ctx6 != null && !ctx6.isError() && aLanguageSettings != null) {
                                                var systemLanguage = ctx6.getResult();
                                                try {
                                                    var strSystemLanguage = systemLanguage.replace('_', '-');
                                                    if (strSystemLanguage !== aLanguageSettings.getLastLanguage()) {
                                                        if (self._debug) {
                                                            console.log("Startup service: saved last language " + strSystemLanguage);
                                                            document.getElementById("rend.message").innerHTML += "<p>Startup service: saved last language " + strSystemLanguage + "</p>";
                                                        }
                                                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "saved last language " + strSystemLanguage, null, null, null);
                                                        self._jsonSettingsV2Unmapped["startup"]["default_system_settings"]["default_language_settings"]["last_device_main_language"] = strSystemLanguage;
                                                        self._jsonSettingsV2["startup"]["default_system_settings"]["default_language_settings"]["last_device_main_language"] = strSystemLanguage;
                                                        aLanguageSettings.setLastLanguage(strSystemLanguage);
                                                        bSettingsChanged = true;
                                                    }
                                                }
                                                catch (e) {
                                                    if (self._debug) {
                                                        console.log("Startup service: saveLastValues exception " + e.message);
                                                        document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues exception " + e.message + "</p>";
                                                    }
                                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Startup service: saveLastValues exception " + e.message, null, null, null);
                                                }
                                            }
                                            else {
                                                var logMessage = (ctx6 != null) ? "[" + ctx6.getError().getErrMsg() + "]" : "";
                                                if (self._debug) {
                                                    console.log("Startup service: saveLastValues error in getting device language: " + logMessage);
                                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: saveLastValues error in getting device language: " + logMessage + "</p>";
                                                }
                                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "saveLastValues error in getting device language: " + logMessage, null, null, null);
                                            }
                                            if (bSettingsChanged === true) {
                                                self.saveSettingsV2File("settings_v2.json", error, context, null);
                                            }
                                        };
                                        var errorGetLanguage = self._aServiceLocator._iEntityCreation.createDefaultError();
                                        var contextGetLanguage = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                        contextGetLanguage.setRemoteCallback(true);
                                        self._aSDKService._iSDKGeneralConfiguration.getOSDLanguages(errorGetLanguage, contextGetLanguage, cbGetLanguage);
                                    };
                                    var errorGetNTPServerUrl = self._aServiceLocator._iEntityCreation.createDefaultError();
                                    var contextGetNTPServerUrl = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                    contextGetNTPServerUrl.setRemoteCallback(true);
                                    self._aSDKService._iSDKTimeSetup.getNTPServer(errorGetNTPServerUrl, contextGetNTPServerUrl, cbGetNTPServerUrl);
                                };
                                var errorGetUseNTP = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextGetUseNTP = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                contextGetUseNTP.setRemoteCallback(true);
                                self._aSDKService._iSDKTimeSetup.getUseNTP(errorGetUseNTP, contextGetUseNTP, cbGetUseNTP);
                            };
                            var errorGetTimeZone = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextGetTimeZone = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            contextGetTimeZone.setRemoteCallback(true);
                            self._aSDKService._iSDKTimeSetup.getTimeZone(errorGetTimeZone, contextGetTimeZone, cbGetTimeZone);
                        };
                        var errorGetBrightness = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextGetBrightness = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        contextGetBrightness.setRemoteCallback(true);
                        self._aSDKService._iSDKGeneralConfiguration.getScreenProperties(errorGetBrightness, contextGetBrightness, cbGetScreenProps);
                    };
                    var errorGetVolume = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextGetVolume = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    contextGetVolume.setRemoteCallback(true);
                    self._aSDKService._iSDKAudioSetup.getVolumeLevel(errorGetVolume, contextGetVolume, cbGetVolume);
                    var bSaveLastValuesAtRefreshRate = aSystemSettings.getSaveSettingsLastValuesAtRefreshRate();
                    var nIntervalSaveLastValues = aSystemSettings.getSaveSettingsLastValuesRefreshTime();
                    if (bSaveLastValuesAtRefreshRate === true && nIntervalSaveLastValues != null && nIntervalSaveLastValues > 0) {
                        setTimeout(saveLastValuesFn, nIntervalSaveLastValues * 1000);
                    }
                }, 2000);
            }
        };
        RS_StartupService.prototype.setDefaultLanguage = function (strDefaultLanguage, error, context, callback) {
            var self = this;
            var strLanguage = strDefaultLanguage.replace('-', '_');
            var arrayLanguages = new Array();
            arrayLanguages.push(strLanguage);
            var cbSetLanguage = function (ctx1) {
                if (ctx1 != null && !ctx1.isError()) {
                    if (ctx1.getBoolResult() === false) {
                        if (self._debug) {
                            console.log("Set language feature not supported");
                            document.getElementById("rend.message").innerHTML += "<p>Set language feature not supported</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), "set language feature not supported", null, null, null);
                    }
                    else {
                        if (self._debug) {
                            console.log("Startup service: set default language " + strDefaultLanguage);
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: set default language " + strDefaultLanguage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "set default language: " + strDefaultLanguage, null, null, null);
                    }
                }
                else {
                    var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                    if (self._debug) {
                        console.log("Startup service: set default language error: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Startup service: set default language error: " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "set default language error: " + logMessage, null, null, null);
                }
                self.saveLastValues(null, error, context, callback);
            };
            var errorSetLanguage = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSetLanguage = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextSetLanguage.setRemoteCallback(true);
            self._aSDKService._iSDKGeneralConfiguration.setOSDLanguages(arrayLanguages, errorSetLanguage, contextSetLanguage, cbSetLanguage);
        };
        RS_StartupService.prototype.setDefaultLanguageSettings = function (aLanguageSettings, error, context, callback) {
            var self = this;
            if (aLanguageSettings == null) {
                aLanguageSettings = self._aStartupSettings.getLanguageSettings();
            }
            if (aLanguageSettings == null) {
                return self.saveLastValues(null, error, context, callback);
            }
            var settingsLanguage = aLanguageSettings.getDefaultLanguage();
            var bApplyDefaultLanguage = aLanguageSettings.getApplyDefaultLanguage();
            if (settingsLanguage != null && settingsLanguage.length > 0 && bApplyDefaultLanguage === true && self._bSetDefaultSettingsAtStartup === true) {
                var cbGetLanguage = function (ctx1) {
                    if (ctx1 != null && !ctx1.isError()) {
                        var deviceLanguage = ctx1.getResult();
                        var strDeviceLanguage = deviceLanguage.replace('_', '-');
                        if (settingsLanguage === strDeviceLanguage) {
                            return self.saveLastValues(null, error, context, callback);
                        }
                    }
                    else {
                        var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                        if (self._debug) {
                            console.log("Startup service: Error in getting device language: " + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in getting device language: " + logMessage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in getting device language: " + logMessage, null, null, null);
                    }
                    self.setDefaultLanguage(settingsLanguage, error, context, callback);
                };
                var errorGetLanguage = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextGetLanguage = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextGetLanguage.setRemoteCallback(true);
                return self._aSDKService._iSDKGeneralConfiguration.getOSDLanguages(errorGetLanguage, contextGetLanguage, cbGetLanguage);
            }
            self.saveLastValues(null, error, context, callback);
        };
        RS_StartupService.prototype.setDeviceTimeAsDeviceTime = function (error, context, callback) {
            var self = this;
            var cbGetTime = function (ctx1) {
                if (ctx1 != null && !ctx1.isError()) {
                    var resDateTime_1 = ctx1.getResult();
                    var errorDateTime = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var newDateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
                    self._aUtilsService._iUtilsDateTime.getDateTime(newDateTime, resDateTime_1);
                    var cbSetDate = function (ctx2) {
                        if (ctx2 != null && !ctx2.isError()) {
                            if (self._debug) {
                                console.log("Startup service: set device time as device time " + resDateTime_1.toString());
                                document.getElementById("rend.message").innerHTML += "<p>Startup service: set device time as device time " + resDateTime_1.toString() + "</p>";
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "set device time as device time " + resDateTime_1.toString(), null, null, null);
                            var crtDate = new Date();
                            var year = crtDate.getFullYear();
                            if (year < 2020) {
                                if (self._debug) {
                                    console.log("Startup service: invalid JS date " + crtDate.toString());
                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: invalid JS date " + crtDate.toString() + "</p>";
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), "invaid JS date " + crtDate.toString(), null, null, null);
                            }
                        }
                        else {
                            var logMessage = (ctx2 != null) ? "[" + ctx2.getError().getErrMsg() + "]" : "";
                            if (self._debug) {
                                console.log("Startup service: Error in setting device time as device time: " + logMessage);
                                document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in setting device time as device time: " + logMessage + "</p>";
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in setting device time as device time: " + logMessage, null, null, null);
                        }
                        self.setDefaultLanguageSettings(null, error, context, callback);
                    };
                    var errorSetDate = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextSetDate = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    contextSetDate.setRemoteCallback(true);
                    return self._aSDKService._iSDKTimeSetup.setCrtDateTime(newDateTime, errorSetDate, contextSetDate, cbSetDate);
                }
                else {
                    var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                    if (self._debug) {
                        console.log("Startup service: Error in getting device time: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in getting device time: " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in getting device time: " + logMessage, null, null, null);
                }
                self.setDefaultLanguageSettings(null, error, context, callback);
            };
            var errorGetCrtDate = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextGetCrtDate = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextGetCrtDate.setRemoteCallback(true);
            self._aSDKService._iSDKTimeSetup.getCrtDateTime(errorGetCrtDate, contextGetCrtDate, cbGetTime);
        };
        RS_StartupService.prototype.setDeviceTimeAsServerTime = function (nTimezoneOffset, error, context, callback) {
            var self = this;
            var bUseMoodServer = self._aStartupSettings.getTimeSettings().getUseMoodServer();
            var strServerUrlRelativePath = self._aStartupSettings.getTimeSettings().getServerUrl();
            if (strServerUrlRelativePath == null || strServerUrlRelativePath == "") {
                if (self._debug) {
                    console.log("Startup service: setDeviceTimeAsServerTime empty server URL");
                    document.getElementById("rend.message").innerHTML += "<p>Startup service: setDeviceTimeAsServerTime empty server URL</p>";
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in setDeviceTimeAsServerTime: server time url missing", null, null, null);
                return self.setDefaultLanguageSettings(null, error, context, callback);
            }
            var strServerUrl = bUseMoodServer === true ? self._aPlaybackGlobalConfig.getBaseServerApiUrl() + "/" + strServerUrlRelativePath : strServerUrlRelativePath;
            self._aHttpRequest.reset();
            self._aHttpRequest.setMethod("GET");
            self._aHttpRequest.setUrlPath(strServerUrl);
            var strHttpServerUrl = "";
            var requestSent = function (ctx1) {
                if (ctx1 != null && !ctx1.isError()) {
                    strHttpServerUrl.length == 0 && (strHttpServerUrl = strServerUrl);
                    var strServerTime = ctx1.getResult();
                    try {
                        if (strServerTime != null) {
                            var res = strServerTime.split(" ");
                            if (res != null && res.length == 2) {
                                var part1 = res[0];
                                var _a = part1.split('-'), monthIndex = _a[0], day = _a[1], year = _a[2];
                                var part2 = res[1];
                                var _b = part2.split(':'), hours = _b[0], minutes = _b[1], secs = _b[2];
                                var nMonths = parseInt(monthIndex);
                                var nDay = parseInt(day);
                                var nYear = parseInt(year);
                                var nHours = parseInt(hours);
                                var nMinutes = parseInt(minutes);
                                var nSecs = parseInt(secs);
                                if (!isNaN(nMonths) && nMonths >= 1 && nMonths <= 12 &&
                                    !isNaN(nDay) && nDay >= 1 && nDay <= 31 &&
                                    !isNaN(nYear) && nYear >= 2020 &&
                                    !isNaN(nHours) && nHours >= 0 && nHours <= 23 &&
                                    !isNaN(nMinutes) && nMinutes >= 0 && nMinutes <= 59 &&
                                    !isNaN(nSecs) && nSecs >= 0 && nSecs <= 59) {
                                    var newDate_1 = new Date(nYear, nMonths - 1, nDay, nHours, nMinutes + nTimezoneOffset, nSecs);
                                    var errorDateTime = self._aServiceLocator._iEntityCreation.createDefaultError();
                                    var newDateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
                                    self._aUtilsService._iUtilsDateTime.getDateTime(newDateTime, newDate_1.toString());
                                    var cbSetDate = function (ctx2) {
                                        if (ctx2 != null && !ctx2.isError()) {
                                            if (self._debug) {
                                                console.log("Startup service: set time as server time " + newDate_1.toString());
                                                document.getElementById("rend.message").innerHTML += "<p>Startup service: set time as server time " + newDate_1.toString() + "</p>";
                                            }
                                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "set device time as server time " + newDate_1.toString(), null, null, null);
                                        }
                                        else {
                                            var logMessage = (ctx2 != null) ? "[" + ctx2.getError().getErrMsg() + "]" : "";
                                            if (self._debug) {
                                                console.log("Startup service: Error in setting device time as server time: " + logMessage);
                                                document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in setting device time as server time: " + logMessage + "</p>";
                                            }
                                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in setting device time as server time: " + logMessage, null, null, null);
                                        }
                                        self.setDefaultLanguageSettings(null, error, context, callback);
                                    };
                                    var errorSetDate = self._aServiceLocator._iEntityCreation.createDefaultError();
                                    var contextSetDate = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                    contextSetDate.setRemoteCallback(true);
                                    return self._aSDKService._iSDKTimeSetup.setCrtDateTime(newDateTime, errorSetDate, contextSetDate, cbSetDate);
                                }
                            }
                        }
                    }
                    catch (e) {
                        if (self._debug) {
                            console.log("Startup service: setDeviceTimeAsServerTime exception " + e.message);
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: setDeviceTimeAsServerTime exception " + e.message + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "setDeviceTimeAsServerTime exception " + e.message, null, null, null);
                    }
                }
                else {
                    var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                    if (self._debug) {
                        console.log("Startup service: error in http request " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Startup service: error in http request " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in http request " + logMessage, null, null, null);
                }
                if (strHttpServerUrl.length == 0) {
                    strHttpServerUrl = strServerUrl;
                    if (strHttpServerUrl.startsWith("https://")) {
                        strHttpServerUrl = strHttpServerUrl.substr(0, 4) + strHttpServerUrl.substr(5);
                    }
                    else {
                        strHttpServerUrl = "http://" + strHttpServerUrl;
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "setDeviceTimeAsServerTime fallback to http " + strHttpServerUrl, null, null, null);
                    self._aHttpRequest.reset();
                    self._aHttpRequest.setMethod("GET");
                    self._aHttpRequest.setUrlPath(strHttpServerUrl);
                    var errorSendRequest1 = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextSendRequest1 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    contextSendRequest1.setRemoteCallback(true);
                    self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest1, contextSendRequest1, requestSent);
                }
                else {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "setDeviceTimeAsServerTime fallback to device time", null, null, null);
                    self.setDeviceTimeAsDeviceTime(error, context, callback);
                }
            };
            var errorSendRequest = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSendRequest = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextSendRequest.setRemoteCallback(true);
            self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
        };
        RS_StartupService.prototype.setDefaultTimeSettings = function (aTimeSettings, error, context, callback) {
            var _a;
            var self = this;
            if (aTimeSettings == null) {
                aTimeSettings = self._aStartupSettings.getTimeSettings();
            }
            if (aTimeSettings == null) {
                return self.setDefaultLanguageSettings(null, error, context, callback);
            }
            var bApplyServerTime = aTimeSettings.getApplyServerTimeAsDevieTimeAtStartup();
            var bApplyDeviceTimeZone = aTimeSettings.getApplyDefaultDeviceTimeZoneAtStartup();
            var deviceTimezone = aTimeSettings.getDefaultDeviceTimeZone();
            var serverTimezone = aTimeSettings.getServerTimeZone();
            if (deviceTimezone != null && deviceTimezone.length > 0 && serverTimezone != null && serverTimezone.length > 0 &&
                bApplyServerTime === true && self._bSetDefaultSettingsAtStartup === true) {
                var errorTimeZone = self._aServiceLocator._iEntityCreation.createDefaultError();
                var aServerTimezone = self._aServiceLocator._iEntityCreation.createDefaultTimeZone(errorTimeZone);
                var _b = serverTimezone.split('/'), continent = _b[0], country = _b[1], city = _b[2];
                continent != null && aServerTimezone.setContinent(continent);
                country != null && aServerTimezone.setCountry(country);
                city != null && aServerTimezone.setCity(city);
                var aDeviceTimezone = self._aServiceLocator._iEntityCreation.createDefaultTimeZone(errorTimeZone);
                _a = deviceTimezone.split('/'), continent = _a[0], country = _a[1], city = _a[2];
                continent != null && aDeviceTimezone.setContinent(continent);
                country != null && aDeviceTimezone.setCountry(country);
                city != null && aDeviceTimezone.setCity(city);
                var cbGetServerTZOffset = function (ctx1) {
                    var nServerTimeZoneOffset = 0, nDeviceTimeZoneOffset = 0, nTZOffset = 0;
                    if (ctx1 != null && !ctx1.isError()) {
                        nServerTimeZoneOffset = ctx1.getIntResult();
                        var cbGetDeviceTZOffset = function (ctx2) {
                            if (ctx2 != null && !ctx2.isError()) {
                                nDeviceTimeZoneOffset = ctx2.getIntResult();
                                nTZOffset = bApplyDeviceTimeZone === true ? nDeviceTimeZoneOffset - nServerTimeZoneOffset : nServerTimeZoneOffset;
                            }
                            else {
                                var logMessage = (ctx2 != null) ? "[" + ctx2.getError().getErrMsg() + "]" : "";
                                if (self._debug) {
                                    console.log("Startup service: Error in getting device timezone offset " + deviceTimezone + ": " + logMessage);
                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in getting device timezone offset " + deviceTimezone + ": " + logMessage + "</p>";
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in getting device timezone offset " + deviceTimezone + ": " + logMessage, null, null, null);
                                nTZOffset = nServerTimeZoneOffset;
                            }
                            self.setDeviceTimeAsServerTime(nTZOffset, error, context, callback);
                        };
                        var errorGetTimezoneOffset1 = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextGetTimezoneOffset1 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        contextGetTimezoneOffset1.setRemoteCallback(true);
                        self._aSDKService._iSDKTimeSetup.getTimeZoneOffset(aDeviceTimezone, errorGetTimezoneOffset1, contextGetTimezoneOffset1, cbGetDeviceTZOffset);
                    }
                    else {
                        var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                        if (self._debug) {
                            console.log("Startup service: Error in getting server timezone offset " + serverTimezone + ": " + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in getting server timezone offset " + serverTimezone + ": " + logMessage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in getting server timezone offset " + serverTimezone + ": " + logMessage, null, null, null);
                        self.setDefaultLanguageSettings(null, error, context, callback);
                    }
                };
                var errorGetTimezoneOffset = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextGetTimezoneOffset = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextGetTimezoneOffset.setRemoteCallback(true);
                return self._aSDKService._iSDKTimeSetup.getTimeZoneOffset(aServerTimezone, errorGetTimezoneOffset, contextGetTimezoneOffset, cbGetServerTZOffset);
            }
            self.setDefaultLanguageSettings(null, error, context, callback);
        };
        RS_StartupService.prototype.setDeviceTimezone = function (aTimeZone, error, context, callback) {
            var self = this;
            var cbSetTimeZone = function (ctx1) {
                if (ctx1 != null && !ctx1.isError()) {
                    if (self._debug) {
                        console.log("Startup service: set device timezone " + aTimeZone.getIANAString());
                        document.getElementById("rend.message").innerHTML += "<p>Startup service: set device timezone " + aTimeZone.getIANAString() + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "set device timezone " + aTimeZone.getIANAString(), null, null, null);
                }
                else {
                    var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                    if (self._debug) {
                        console.log("Startup service: Error in setting device timezone " + aTimeZone.getIANAString() + ": " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in setting device timezone " + aTimeZone.getIANAString() + ": " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in setting device timezone " + aTimeZone.getIANAString() + ": " + logMessage, null, null, null);
                }
                self.setDefaultTimeSettings(null, error, context, callback);
            };
            var errorSetTimeZone = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSetTimeZone = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextSetTimeZone.setRemoteCallback(true);
            self._aSDKService._iSDKTimeSetup.setTimeZone(aTimeZone, errorSetTimeZone, contextSetTimeZone, cbSetTimeZone);
        };
        RS_StartupService.prototype.getDeviceTimezone = function (aTimeSettings, error, context, callback) {
            var self = this;
            if (aTimeSettings == null) {
                aTimeSettings = self._aStartupSettings.getTimeSettings();
            }
            if (aTimeSettings == null) {
                return self.setDefaultLanguageSettings(null, error, context, callback);
            }
            var bApplyDeviceTimeZone = aTimeSettings.getApplyDefaultDeviceTimeZoneAtStartup();
            var strNTPTimezone = aTimeSettings.getNTPTimeZone();
            if (strNTPTimezone != null && strNTPTimezone.length > 0 && bApplyDeviceTimeZone === true && self._bSetDefaultSettingsAtStartup === true) {
                var cbGetTimeZone = function (ctx1) {
                    var errorTimeZone = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var aTimeZone = self._aServiceLocator._iEntityCreation.createDefaultTimeZone(errorTimeZone);
                    var _a = strNTPTimezone.split('/'), continent = _a[0], country = _a[1], city = _a[2];
                    continent != null && aTimeZone.setContinent(continent);
                    country != null && aTimeZone.setCountry(country);
                    city != null && aTimeZone.setCity(city);
                    if (ctx1 != null && !ctx1.isError()) {
                        var timeZone = ctx1.getObjectResult();
                        var timeZoneLocal = self._aServiceLocator._iEntityCreation.createDefaultTimeZone(error);
                        timeZoneLocal.copyFromJson(timeZone);
                        var deviceTimezone = timeZoneLocal.getIANAString();
                        if (deviceTimezone === strNTPTimezone) {
                            return self.setDefaultTimeSettings(null, error, context, callback);
                        }
                    }
                    else {
                        var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                        if (self._debug) {
                            console.log("Startup service: Error in getting device timezone: " + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in getting device timezone: " + logMessage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in getting device timezone: " + logMessage, null, null, null);
                    }
                    self.setDeviceTimezone(aTimeZone, error, context, callback);
                };
                var errorGetTimeZone = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextGetTimeZone = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextGetTimeZone.setRemoteCallback(true);
                return self._aSDKService._iSDKTimeSetup.getTimeZone(errorGetTimeZone, contextGetTimeZone, cbGetTimeZone);
            }
            self.setDefaultTimeSettings(null, error, context, callback);
        };
        RS_StartupService.prototype.setDeviceNTPServer = function (strServerUrl, error, context, callback) {
            var self = this;
            var cbSetNTPServerUrl = function (ctx1) {
                if (ctx1 != null && !ctx1.isError()) {
                    if (ctx1.getBoolResult() === false) {
                        if (self._debug) {
                            console.log("Set NTP server feature not supported");
                            document.getElementById("rend.message").innerHTML += "<p>Set NTP server feature not supported</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), "set NTP server feature not supported", null, null, null);
                    }
                    else {
                        if (self._debug) {
                            console.log("Startup service: set NTP server " + strServerUrl + ". Restarting...");
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: set NTP server " + strServerUrl + ". Restarting...</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "set NTP server " + strServerUrl + ". Restarting...", null, null, null);
                        return self.restartDevice(error, context, callback, "getDeviceTimezone");
                    }
                }
                else {
                    var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                    if (self._debug) {
                        console.log("startup service: Error in setting NTP server " + strServerUrl + ": " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in setting NTP server " + strServerUrl + ": " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in setting NTP server " + strServerUrl + ": " + logMessage, null, null, null);
                }
                self.getDeviceTimezone(null, error, context, callback);
            };
            var errorSetNTPServerUrl = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSetNTPServerUrl = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextSetNTPServerUrl.setRemoteCallback(true);
            self._aSDKService._iSDKTimeSetup.setNTPServer(strServerUrl, errorSetNTPServerUrl, contextSetNTPServerUrl, cbSetNTPServerUrl);
        };
        RS_StartupService.prototype.checkJSTimeAndSetNTPUNUSE = function (strNTPServer, error, context, callback) {
            var self = this;
            var crtDate = new Date();
            var year = crtDate.getFullYear();
            if (year < 2020) {
                if (self._debug) {
                    console.log("Startup service: invalid JS date for NTP server " + strNTPServer + ". Set NTP UNUSE ...");
                    document.getElementById("rend.message").innerHTML += "<p>Startup service: invalid JS date for NTP server " + strNTPServer + ". Set NTP UNUSE ...</p>";
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), "invaid JS date for NTP server " + strNTPServer + ". Set NTP UNUSE ...", null, null, null);
                var cbUseNTP = function (ctx1) {
                    if (ctx1 != null && !ctx1.isError()) {
                        if (ctx1.getBoolResult() === false) {
                            if (self._debug) {
                                console.log("Startup service: invalid JS date for NTP server " + strNTPServer + " -> set NTP USE/UNUSE feature not supported");
                                document.getElementById("rend.message").innerHTML += "<p>Startup service: invalid JS date for NTP server " + strNTPServer + " -> set NTP USE/UNUSE feature not supported</p>";
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), "invaid JS date for NTP server " + strNTPServer + " -> set NTP USE/UNUSE feature not supported", null, null, null);
                        }
                        else {
                            if (self._debug) {
                                console.log("Startup service: invalid JS date for NTP server " + strNTPServer + " -> set NTP UNUSE successfully");
                                document.getElementById("rend.message").innerHTML += "<p>Startup service: invalid JS date for NTP server " + strNTPServer + " -> set NTP UNUSE successfully</p>";
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "invalid JS date for NTP server " + strNTPServer + " -> set NTP UNUSE successfully", null, null, null);
                            try {
                                self._jsonSettingsV2["startup"]["default_system_settings"]["default_time_settings"]["use_ntp"] = "NTP_DEFAULT";
                                self._aPlaybackGlobalConfig.getStartupSettings().getTimeSettings().setUseNTP(false);
                            }
                            catch (e) {
                                if (self._debug) {
                                    console.log("Startup service: exeption in setting NTP UNUSE " + e.message);
                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: Startup service: exeption in setting NTP UNUSE " + e.message + "</p>";
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "exeption in setting NTP UNUSE " + e.message, null, null, null);
                                return self.restartDevice(error, context, callback, "getDeviceTimezone");
                            }
                            var cbSaveSettingsV2File = function (ctx2) {
                                if (self._debug) {
                                    console.log("Startup service: invalid JS date for NTP server " + strNTPServer + " -> saved NTP UNUSE. Restarting...");
                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: invalid JS date for NTP server " + strNTPServer + " -> saved NTP UNUSE. Restarting...</p>";
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "invalid JS date for NTP server " + strNTPServer + " -> saved NTP UNUSE. Restarting...", null, null, null);
                                self.restartDevice(error, context, callback, "getDeviceTimezone");
                            };
                            return self.saveSettingsV2File("settings_v2_modified.json", error, context, cbSaveSettingsV2File);
                        }
                    }
                    else {
                        var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                        if (self._debug) {
                            console.log("Startup service: invalid JS date for NTP server " + strNTPServer + " -> set NTP UNUSE error " + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: invalid JS date for NTP server " + strNTPServer + " -> set NTP UNUSE error " + logMessage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "invalid JS date for NTP server " + strNTPServer + " -> set NTP UNUSE error " + logMessage, null, null, null);
                    }
                    self.getDeviceTimezone(null, error, context, callback);
                };
                var errorUseNTP = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextUseNTP = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextUseNTP.setRemoteCallback(true);
                self._aSDKService._iSDKTimeSetup.setUseNTP(false, errorUseNTP, contextUseNTP, cbUseNTP);
            }
            else {
                self.getDeviceTimezone(null, error, context, callback);
            }
        };
        RS_StartupService.prototype.getDeviceNTPServer = function (aTimeSettings, error, context, callback) {
            var self = this;
            if (aTimeSettings == null) {
                aTimeSettings = self._aStartupSettings.getTimeSettings();
            }
            if (aTimeSettings == null) {
                return self.setDefaultLanguageSettings(null, error, context, callback);
            }
            if (self._bSetDefaultSettingsAtStartup === true) {
                var bUseNTP = aTimeSettings.getUseNTP();
                var strNTPServerUrl_1 = aTimeSettings.getNTPServerUrl();
                if (bUseNTP == true && strNTPServerUrl_1 != null && strNTPServerUrl_1.length > 0) {
                    var cbGetNTPServerUrl = function (ctx1) {
                        if (ctx1 != null && !ctx1.isError()) {
                            if (ctx1.getBoolResult() === false) {
                                if (self._debug) {
                                    console.log("Startup service: Get NTP server feature not supported");
                                    document.getElementById("rend.message").innerHTML += "<p>Startup service: Get NTP server feature not supported</p>";
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), "get NTP server feature not supported", null, null, null);
                            }
                            else {
                                var strNTPServer = ctx1.getResult();
                                if (strNTPServer === strNTPServerUrl_1) {
                                    return self.checkJSTimeAndSetNTPUNUSE(strNTPServer, error, context, callback);
                                }
                            }
                        }
                        else {
                            var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                            if (self._debug) {
                                console.log("Startup service: Error in getting NTP server: " + logMessage);
                                document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in getting NTP server: " + logMessage + "</p>";
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in getting NTP server : " + logMessage, null, null, null);
                        }
                        self.setDeviceNTPServer(strNTPServerUrl_1, error, context, callback);
                    };
                    var errorGetNTPServerUrl = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextGetNTPServerUrl = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    contextGetNTPServerUrl.setRemoteCallback(true);
                    self._aSDKService._iSDKTimeSetup.getNTPServer(errorGetNTPServerUrl, contextGetNTPServerUrl, cbGetNTPServerUrl);
                }
                else {
                    self.setDefaultTimeSettings(null, error, context, callback);
                }
            }
            else {
                self.setDefaultLanguageSettings(null, error, context, callback);
            }
        };
        RS_StartupService.prototype.setDeviceUseNTP = function (bUseNTP, error, context, callback) {
            var self = this;
            var cbUseNTP = function (ctx1) {
                if (ctx1 != null && !ctx1.isError()) {
                    if (ctx1.getBoolResult() === false) {
                        if (self._debug) {
                            console.log("Startup service: set Use NTP feature not supported");
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: set Use NTP feature not supported</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), "set Use NTP feature not supported", null, null, null);
                    }
                    else {
                        if (self._debug) {
                            console.log("Startup service: set NTP " + bUseNTP + ". Restarting...");
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: set NTP " + bUseNTP + ". Restarting...</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "set NTP " + bUseNTP + ". Restarting...", null, null, null);
                        self.restartDevice(error, context, callback, "setDefaultTimeSettings");
                    }
                }
                else {
                    var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                    var strUseNTP = bUseNTP ? "USE" : "UNUSE";
                    if (self._debug) {
                        console.log("Startup service: set NTP " + strUseNTP + " error " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Startup service: set NTP " + strUseNTP + " error " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "set NTP " + strUseNTP + " error " + logMessage, null, null, null);
                }
                self.setDefaultTimeSettings(null, error, context, callback);
            };
            var errorUseNTP = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextUseNTP = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextUseNTP.setRemoteCallback(true);
            return self._aSDKService._iSDKTimeSetup.setUseNTP(bUseNTP, errorUseNTP, contextUseNTP, cbUseNTP);
        };
        RS_StartupService.prototype.getDeviceUseNTP = function (aTimeSettings, error, context, callback) {
            var self = this;
            if (aTimeSettings == null) {
                aTimeSettings = self._aStartupSettings.getTimeSettings();
            }
            if (aTimeSettings == null) {
                return self.setDefaultLanguageSettings(null, error, context, callback);
            }
            var bUseNTPFromSettings = aTimeSettings.getUseNTP();
            if (bUseNTPFromSettings != null && self._bSetDefaultSettingsAtStartup === true) {
                var cbGetUseNTP = function (ctx1) {
                    if (ctx1 != null && !ctx1.isError()) {
                        if (ctx1.getResult() == "not supported") {
                            if (self._debug) {
                                console.log("Startup service: Get Use NTP feature not supported. Try to set timezone anyway");
                                document.getElementById("rend.message").innerHTML += "<p>Startup service: Get Use NTP feature not supported.  Try to set timezone anyway</p>";
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), "get Use NTP feature not supported. Try to set timezone anyway", null, null, null);
                            return self.getDeviceTimezone(null, error, context, callback);
                        }
                        else {
                            var bUseNTP = ctx1.getBoolResult();
                            if (bUseNTP === bUseNTPFromSettings) {
                                return self.getDeviceNTPServer(null, error, context, callback);
                            }
                        }
                    }
                    else {
                        var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                        if (self._debug) {
                            console.log("Startup service: Error in getting Use NTP: " + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in getting Use NTP: " + logMessage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in getting Use NTP: " + logMessage, null, null, null);
                    }
                    self.setDeviceUseNTP(bUseNTPFromSettings, error, context, callback);
                };
                var errorGetUseNTP = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextGetUseNTP = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextGetUseNTP.setRemoteCallback(true);
                self._aSDKService._iSDKTimeSetup.getUseNTP(errorGetUseNTP, contextGetUseNTP, cbGetUseNTP);
            }
            else {
                self.setDefaultLanguageSettings(null, error, context, callback);
            }
        };
        RS_StartupService.prototype.setDefaultBrightness = function (defaultBrightness, error, context, callback) {
            var self = this;
            var cbSetBrightness = function (ctx1) {
                if (ctx1 != null && !ctx1.isError()) {
                    if (ctx1.getBoolResult() === false) {
                        if (self._debug) {
                            console.log("Startup service: Set brightness feature not supported");
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: Set brightness feature not supported</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), "set brightness feature not supported", null, null, null);
                    }
                    else {
                        if (self._debug) {
                            console.log("Startup service: device brightness set " + defaultBrightness);
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: device brightness set " + defaultBrightness + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "device brightness set: " + defaultBrightness, null, null, null);
                    }
                }
                else {
                    var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                    if (self._debug) {
                        console.log("Startup service: Error in setting device brightness: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in setting device brightness: " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in setting device brightness: " + logMessage, null, null, null);
                }
                self.getDeviceUseNTP(null, error, context, callback);
            };
            var screenProperties = self._aServiceLocator._iEntityCreation.createDefaultScreenProperties(error);
            screenProperties.setBrightness(defaultBrightness);
            var errorSetBrightness = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSetBrightness = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextSetBrightness.setRemoteCallback(true);
            self._aSDKService._iSDKGeneralConfiguration.setScreenProperties(screenProperties, errorSetBrightness, contextSetBrightness, cbSetBrightness);
        };
        RS_StartupService.prototype.setDefaultVideoSettings = function (aVideoSettings, error, context, callback) {
            var self = this;
            if (aVideoSettings == null) {
                aVideoSettings = self._aStartupSettings.getVideoSettings();
            }
            if (aVideoSettings == null) {
                return self.getDeviceUseNTP(null, error, context, callback);
            }
            var bApplyDefaultBrightness = aVideoSettings.getApplyDefaultBrightnessLevelAtStartup();
            var settingsBrightness = aVideoSettings.getDefaultBrightnessLevel();
            if (settingsBrightness != null && bApplyDefaultBrightness === true && self._bSetDefaultSettingsAtStartup === true) {
                var cbGetScreenProps = function (ctx1) {
                    if (ctx1 != null && !ctx1.isError()) {
                        var deviceBrightness = ctx1.getIntResult();
                        if (deviceBrightness === settingsBrightness) {
                            return self.getDeviceUseNTP(null, error, context, callback);
                        }
                    }
                    else {
                        var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                        if (self._debug) {
                            console.log("Startup service: Error in getting screen properties: " + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in getting screen properties: " + logMessage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in getting screen properties: " + logMessage, null, null, null);
                    }
                    self.setDefaultBrightness(settingsBrightness, error, context, callback);
                };
                var errorGetBrightness = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextGetBrightness = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextGetBrightness.setRemoteCallback(true);
                return self._aSDKService._iSDKGeneralConfiguration.getScreenProperties(errorGetBrightness, contextGetBrightness, cbGetScreenProps);
            }
            self.getDeviceUseNTP(null, error, context, callback);
        };
        RS_StartupService.prototype.setDeviceVolume = function (nVolume, error, context, callback) {
            var self = this;
            var cbSetVolume = function (ctx1) {
                if (ctx1 != null && !ctx1.isError()) {
                    if (self._debug) {
                        console.log("Startup service: device volume set " + nVolume);
                        document.getElementById("rend.message").innerHTML += "<p>Startup service: device volume set " + nVolume + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "device volume set: " + nVolume, null, null, null);
                }
                else {
                    var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in setting device volume: " + logMessage, null, null, null);
                    if (self._debug) {
                        console.log("Startup service: Error in setting device volume: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in setting device volume: " + logMessage + "</p>";
                    }
                }
                self.setDefaultVideoSettings(null, error, context, callback);
            };
            var audioProperties = self._aServiceLocator._iEntityCreation.createDefaultSoundProperties(error);
            audioProperties.setVolumeLevel(nVolume);
            var errorSetVolume = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSetVolume = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextSetVolume.setRemoteCallback(true);
            self._aSDKService._iSDKAudioSetup.setVolumeLevel(audioProperties, errorSetVolume, contextSetVolume, cbSetVolume);
        };
        RS_StartupService.prototype.setDefaultAudioSettings = function (aAudioSettings, error, context, callback) {
            var self = this;
            if (aAudioSettings == null) {
                aAudioSettings = self._aStartupSettings.getAudioSettings();
            }
            if (aAudioSettings == null) {
                return self.setDefaultVideoSettings(null, error, context, callback);
            }
            var bApplyDefaultVolume = aAudioSettings.getApplyDefaultVolumeAtStartup();
            var settingsVolume = aAudioSettings.getDefaultVolumeLevel();
            if (settingsVolume != null && bApplyDefaultVolume === true && self._bSetDefaultSettingsAtStartup === true) {
                return self.setDeviceVolume(settingsVolume, error, context, callback);
            }
            self.setDefaultVideoSettings(null, error, context, callback);
        };
        RS_StartupService.prototype.setSerialNoIfEmpty = function (aPlaybackGlobalConfig, error, context, callback) {
            var self = this;
            if (aPlaybackGlobalConfig == null) {
                aPlaybackGlobalConfig = self._aPlaybackGlobalConfig;
            }
            if (aPlaybackGlobalConfig == null) {
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
            }
            var strSerialNumber = aPlaybackGlobalConfig.getSerialNumber();
            if (strSerialNumber != null && strSerialNumber !== "") {
                self.setDefaultAudioSettings(null, error, context, callback);
            }
            else {
                var cbGetSerialNumber = function (ctx1) {
                    if (ctx1 != null && !ctx1.isError()) {
                        strSerialNumber = ctx1.getResult();
                        for (var _i = 0, _a = [self._jsonSettingsV2Unmapped, self._jsonSettingsV2]; _i < _a.length; _i++) {
                            var jsonSetting = _a[_i];
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
                        aPlaybackGlobalConfig.setDefaultPlaylistFileUrl(aPlaybackGlobalConfig._strBaseServerApiUrl + "v5/player_playlists/" + strSerialNumber + "/" + "playlist.json");
                        aPlaybackGlobalConfig.setDefaultPlaylistShaFileUrl(aPlaybackGlobalConfig.getDefaultPlaylistFileUrl() + ".sha");
                        var cbSaveSettingsV2File = function (ctx2) {
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>Startup service: device Serial Number updated " + strSerialNumber + "</p>";
                                console.log("<p>Startup service: device Serial Number updated " + strSerialNumber + "</p>");
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "device Serial Number updated " + strSerialNumber, null, null, null);
                            self.setDefaultAudioSettings(null, error, context, callback);
                        };
                        self.saveSettingsV2File("settings_v2.json", error, context, cbSaveSettingsV2File);
                    }
                    else {
                        var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>Startup service: Error in getting device Serial Number: " + logMessage + "</p>";
                            console.log("<p>Startup service: Error in getting device Serial Number: " + logMessage + "</p>");
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in getting device Serial Number: " + logMessage, null, null, null);
                        self.setDefaultAudioSettings(null, error, context, callback);
                    }
                };
                var errorGetSerialNumber = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextGetSerialNumber = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextGetSerialNumber.setRemoteCallback(true);
                self._aSDKService._iSDKHardwareSetup.getSerialNumber(errorGetSerialNumber, contextGetSerialNumber, cbGetSerialNumber);
            }
        };
        RS_StartupService.prototype.setSystemStartupSettings = function (aStartupSettings, error, context, callback) {
            var self = this;
            if (aStartupSettings == null) {
                aStartupSettings = self._aStartupSettings;
            }
            if (aStartupSettings == null || aStartupSettings.getSystemSettings() == null) {
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
            }
            var startupSystemSettings = aStartupSettings.getSystemSettings();
            self._bSetDefaultSettingsAtStartup = startupSystemSettings.getApplyDefaultSettingsAtStartup();
            if (self._bSetDefaultSettingsAtStartup == null) {
                self._bSetDefaultSettingsAtStartup = false;
            }
            var cbReadFile = function (ctx1) {
                var logMessage = "";
                var jsonContent = null;
                var strContent = ctx1.getResult();
                if (ctx1 != null && !ctx1.isError()) {
                    try {
                        jsonContent = JSON.parse(strContent);
                        self._jsonSettingsV2 = JSON.parse(JSON.stringify(jsonContent));
                    }
                    catch (e) {
                        logMessage = "Startup exception [read settings_v2]: " + e.message;
                        if (self._debug) {
                            console.log("" + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>" + logMessage + "</p>";
                        }
                        error.setError(ctx1.getError().getErrId(), "" + logMessage);
                        jsonContent = null;
                        self._jsonSettingsV2 = null;
                    }
                    if (jsonContent != null && self._jsonSettingsV2 != null) {
                        self._jsonSettingsV2Unmapped = jsonContent;
                        self._aPlaybackGlobalConfig.mapSettingsLocalToV2(self._jsonSettingsV2);
                        if (startupSystemSettings.getUpdateSerialNoIfNonEmpty()) {
                            self.setSerialNoIfEmpty(null, error, context, callback);
                        }
                        else {
                            self.setDefaultAudioSettings(null, error, context, callback);
                        }
                        return;
                    }
                }
                else {
                    if (ctx1 != null) {
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        logMessage = "[" + error.getErrMsg() + "]";
                    }
                    if (self._debug) {
                        console.log("Startup: read settings_v2 file failed: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Startup: read settings_v2 file failed: " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging
                        .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "read settings_v2 file failed: " + logMessage, null, null, null);
                }
                context != null && context.setError(error);
                callback != null && callback(context);
            };
            var aSettingsV2File = this._aPlaybackGlobalConfig.getSettingsFolder();
            aSettingsV2File.setName("settings_v2.json");
            var errorReadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextReadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextReadFile.setRemoteCallback(true);
            return self._aSDKService._iSDKFileSystem.readTextFile2(aSettingsV2File.getStorage(), aSettingsV2File.getPath(), aSettingsV2File.getName(), errorReadFile, contextReadFile, cbReadFile);
        };
        return RS_StartupService;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.RS_StartupService = RS_StartupService;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RS_Startup.js.map