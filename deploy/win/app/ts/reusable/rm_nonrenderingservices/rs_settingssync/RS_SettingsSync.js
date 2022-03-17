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
var rmNonRenderingServices = require("../r_nonrenderingservice/R_NonRenderingService");
var rmSettingsSyncMain = require("./RI_SettingsSync_Main");
var rmSettingsSyncConfig = require("./RI_SettingsSync_Config");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RS_SettingsSyncService = (function (_super) {
        __extends(RS_SettingsSyncService, _super);
        function RS_SettingsSyncService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iSettingsSyncMain = new rmSettingsSyncMain.rm_nonrenderingservices.RI_SettingsSyncMain(_this);
            _this._iSettingsSyncConfig = new rmSettingsSyncConfig.rm_nonrenderingservices.RI_SettingsSyncConfig(_this);
            _this._aLogService = aLogService;
            _this._aPlaybackGlobalConfig = null;
            _this._aActivityLogService = null;
            _this._aFileSettingsUpdate = null;
            _this._aSettingsSync = null;
            _this._aServerDeviceSettingsConfiguration = null;
            _this._aHttpRequest = null;
            _this._strFulfillmentAppServerBase = null;
            _this._strFulfillmentMediaServerBase = null;
            _this._jsonSettingsV2 = null;
            return _this;
        }
        RS_SettingsSyncService.prototype.setSDKService = function (aSDKService) {
            this._aSDKService = aSDKService;
        };
        RS_SettingsSyncService.prototype.setUtilsService = function (aUtilsService) {
            this._aUtilsService = aUtilsService;
        };
        RS_SettingsSyncService.prototype.getPlaybackGlobalConfig = function () {
            return this._aPlaybackGlobalConfig;
        };
        RS_SettingsSyncService.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
        };
        RS_SettingsSyncService.prototype.getDefaultServerDeviceSettingsConfiguration = function () {
            return this._aServerDeviceSettingsConfiguration;
        };
        RS_SettingsSyncService.prototype.setDefaultServerDeviceSettingsConfiguration = function (aServerDeviceSettingsConfiguration) {
            this._aServerDeviceSettingsConfiguration = aServerDeviceSettingsConfiguration;
        };
        RS_SettingsSyncService.prototype.getDefaultSettingsSync = function () {
            return this._aSettingsSync;
        };
        RS_SettingsSyncService.prototype.setDefaultSettingsSync = function (aSettingsSync) {
            this._aSettingsSync = aSettingsSync;
        };
        RS_SettingsSyncService.prototype.getActivityLogService = function () {
            return this._aActivityLogService;
        };
        RS_SettingsSyncService.prototype.setActivityLogService = function (aActivityLogService) {
            this._aActivityLogService = aActivityLogService;
        };
        RS_SettingsSyncService.prototype.getFileSettingsUpdate = function () {
            return this._aFileSettingsUpdate;
        };
        RS_SettingsSyncService.prototype.setFileSettingsUpdate = function (aFileSettingsUpdate) {
            this._aFileSettingsUpdate = aFileSettingsUpdate;
        };
        RS_SettingsSyncService.prototype.init = function (error) {
            this._aHttpRequest = this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
        };
        RS_SettingsSyncService.prototype.saveSettingsFile = function (strFileName, error, context, callback) {
            var self = this;
            var jsonSettings = null;
            if (strFileName === "device_settings.json") {
                jsonSettings = self._aPlaybackGlobalConfig.getJsonDeviceSettings();
            }
            else if (strFileName === "settings_v2.json") {
                jsonSettings = self._jsonSettingsV2;
            }
            else {
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
            }
            var errorSaveFile = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSaveFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var aFile = self._aPlaybackGlobalConfig.getSettingsFolder();
            aFile.setName(strFileName);
            contextSaveFile.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.writeTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), JSON.stringify(jsonSettings, null, 2), errorSaveFile, contextSaveFile, callback);
        };
        RS_SettingsSyncService.prototype.readActivityLogSettings = function (activityLogSettings) {
            var activityLogEnable = activityLogSettings.activity_log_enable;
            var autoUploadIntervalSeconds = activityLogSettings.auto_upload_interval_seconds / 1000;
            var autoUploadEnabled = activityLogSettings.auto_upload_enabled;
            var fileEnabled = activityLogSettings.file_enabled;
            var sendBufferMaxSizeKb = activityLogSettings.send_buffer_max_size_kb / 1024;
            var sendLocalSentPath = activityLogSettings.send_local_sent_path;
            var sendLocalBaseName = activityLogSettings.send_local_base_name;
            var saveBufferMaxSizeKb = activityLogSettings.save_buffer_max_size_kb;
            var saveLocalPath = activityLogSettings.save_local_path;
            var saveLocalBaseName = activityLogSettings.save_local_base_name;
            var saveLocalFileSplitSizeInMb = activityLogSettings.save_local_file_split_size_in_mb;
            var serverEndpoint = activityLogSettings.server_endpoint;
            var serverEndpointPath = activityLogSettings.server_endpoint_path;
            var verbosityType = activityLogSettings.verbosity_type;
            var activityLogService = this._aPlaybackGlobalConfig.getActivityLogServiceSettings();
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
        };
        RS_SettingsSyncService.prototype.saveAppServerBaseFile = function (error, context, callback) {
            var self = this;
            var strCloudAPIUpgradeUrl = self._aServerDeviceSettingsConfiguration.getServerDeviceSettingsConfiguration().getCloudAPISettings().getBaseServerUpgradeUrl().getValue();
            if (typeof strCloudAPIUpgradeUrl != "string" || strCloudAPIUpgradeUrl.length == 0) {
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
            }
            var aFile = self._aPlaybackGlobalConfig.getBootSettingsFolder();
            aFile.setName("app_server_base_url.json");
            var cbReadFile = function (ctx1) {
                var strContent = ctx1.getResult();
                var logMessage = "";
                var jsonContent = null;
                if (ctx1 != null && !ctx1.isError()) {
                    try {
                        jsonContent = JSON.parse(strContent);
                    }
                    catch (e) {
                        logMessage = "Settings Sync exception [saveAppServerBaseFile]: " + e.message;
                        if (self._debug) {
                            console.log("" + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>" + logMessage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "saveAppServerBaseFile: " + logMessage, null, null, null);
                        error.setError(ctx1.getError().getErrId(), "" + logMessage);
                        jsonContent = null;
                    }
                    if (jsonContent != null) {
                        logMessage = "Boot Settings app server url changed " + strCloudAPIUpgradeUrl;
                        if (self._debug) {
                            console.log("saveAppServerBaseFile: " + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>saveAppServerBaseFile: " + logMessage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "saveAppServerBaseFile: " + logMessage, null, null, null);
                        jsonContent["app_server_base_url"] = strCloudAPIUpgradeUrl;
                        var cbWriteFile = function (ctx2) {
                            var jsonSettingsV2 = self._jsonSettingsV2;
                            var _a = self._aUtilsService._iUtilsStrings.splitUrl(strCloudAPIUpgradeUrl), strUrlDomain = _a.strUrlDomain, strUrlPath = _a.strUrlPath;
                            if (jsonSettingsV2 != null) {
                                if (jsonSettingsV2["software_tizen"] != null && strUrlDomain.length > 0) {
                                    var tagNameArray = ["software_remote_server_url",
                                        "softwareconfig_remote_server_url",
                                        "software_encrypted_remote_server_url",
                                        "softwareconfig_encrypted_remote_server_url"];
                                    for (var _i = 0, tagNameArray_1 = tagNameArray; _i < tagNameArray_1.length; _i++) {
                                        var tagName = tagNameArray_1[_i];
                                        jsonSettingsV2["software_tizen"][tagName] = strUrlDomain;
                                    }
                                    tagNameArray = ["software_remote_folder",
                                        "softwareconfig_remote_folder",
                                        "software_encrypted_remote_folder",
                                        "softwareconfig_encrypted_remote_folder"];
                                    for (var _b = 0, tagNameArray_2 = tagNameArray; _b < tagNameArray_2.length; _b++) {
                                        var tagName = tagNameArray_2[_b];
                                        jsonSettingsV2["software_tizen"][tagName] = strUrlPath;
                                    }
                                    return self.saveSettingsFile("settings_v2.json", error, context, callback);
                                }
                            }
                            context != null && context.setError(error);
                            callback != null && callback(context);
                        };
                        var errorWriteFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextWriteFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        contextWriteFile.setRemoteCallback(true);
                        return self._aSDKService._iSDKFileSystem.writeTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), JSON.stringify(jsonContent, null, 2), errorWriteFile, contextWriteFile, cbWriteFile);
                    }
                }
                else {
                    if (ctx1 != null) {
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        logMessage = "[" + error.getErrMsg() + "]";
                    }
                    if (self._debug) {
                        console.log("Settings Sync: read App Server file failed: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Settings Sync: read App Server file failed: " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging
                        .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "App Media Server file failed: " + logMessage, null, null, null);
                }
                context != null && context.setError(error);
                callback != null && callback(context);
            };
            var errorReadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextReadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextReadFile.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.readTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), errorReadFile, contextReadFile, cbReadFile);
        };
        RS_SettingsSyncService.prototype.saveMediaServerBaseFile = function (error, context, callback) {
            var self = this;
            var strCloudAPIUrl = self._aServerDeviceSettingsConfiguration.getServerDeviceSettingsConfiguration().getCloudAPISettings().getBaseServerAPIUrl().getValue();
            var strUrlDomain = self._aUtilsService._iUtilsStrings.splitUrl(strCloudAPIUrl).strUrlDomain;
            if (strUrlDomain.length == 0) {
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
            }
            var aFile = this._aPlaybackGlobalConfig.getBootSettingsFolder();
            aFile.setName("media_server_base_url.json");
            var cbReadFile = function (ctx1) {
                var strContent = ctx1.getResult();
                var logMessage = "";
                var jsonContent = null;
                if (ctx1 != null && !ctx1.isError()) {
                    try {
                        jsonContent = JSON.parse(strContent);
                    }
                    catch (e) {
                        logMessage = "Settings Sync exception [saveMediaServerBaseFile]: " + e.message;
                        if (self._debug) {
                            console.log("" + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>" + logMessage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "saveMediaServerBaseFile: " + logMessage, null, null, null);
                        error.setError(ctx1.getError().getErrId(), "" + logMessage);
                        jsonContent = null;
                    }
                    if (jsonContent != null) {
                        logMessage = "Boot Settings media server url changed " + strUrlDomain;
                        if (self._debug) {
                            console.log("saveMediaServerBaseFile: " + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>saveMediaServerBaseFile: " + logMessage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "saveMediaServerBaseFile: " + logMessage, null, null, null);
                        jsonContent["media_server_base_url"] = strUrlDomain;
                        var cbWriteFile = function (ctx2) {
                            var jsonSettingsV2 = self._jsonSettingsV2;
                            if (jsonSettingsV2 != null) {
                                if (jsonSettingsV2["cloudApiSettings"] == null) {
                                    jsonSettingsV2["cloudApiSettings"] = {};
                                }
                                jsonSettingsV2["cloudApiSettings"]["baseServerApiUrl"] = strUrlDomain;
                                return self.saveSettingsFile("settings_v2.json", error, context, callback);
                            }
                            context != null && context.setError(error);
                            callback != null && callback(context);
                        };
                        var errorWriteFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextWriteFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        contextWriteFile.setRemoteCallback(true);
                        return self._aSDKService._iSDKFileSystem.writeTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), JSON.stringify(jsonContent, null, 2), errorWriteFile, contextWriteFile, cbWriteFile);
                    }
                }
                else {
                    if (ctx1 != null) {
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        logMessage = "[" + error.getErrMsg() + "]";
                    }
                    if (self._debug) {
                        console.log("Settings Sync: read Media Server file failed: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Settings Sync: read Media Server file failed: " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging
                        .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Read Media Server file failed: " + logMessage, null, null, null);
                }
                context != null && context.setError(error);
                callback != null && callback(context);
            };
            var errorReadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextReadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextReadFile.setRemoteCallback(true);
            return self._aSDKService._iSDKFileSystem.readTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), errorReadFile, contextReadFile, cbReadFile);
        };
        RS_SettingsSyncService.prototype.saveFulfillmentSettings = function (error, context, callback) {
            var self = this;
            var strSettingsV2CloudApiUrl = self._aPlaybackGlobalConfig.getBaseServerApiUrl();
            var strCloudAPIUrl = self._aServerDeviceSettingsConfiguration.getServerDeviceSettingsConfiguration().getCloudAPISettings().getBaseServerAPIUrl().getValue();
            var bCloudApiUrlChanged = strCloudAPIUrl.indexOf(strSettingsV2CloudApiUrl) == -1 ? true : false;
            var strCloudAPIUpgradeUrl = self._aServerDeviceSettingsConfiguration.getServerDeviceSettingsConfiguration().getCloudAPISettings().getBaseServerUpgradeUrl().getValue();
            var strAppServerUrl = self._aFileSettingsUpdate._iFileSettingsUpdateConfig.getAppServerBaseUrl() + self._aFileSettingsUpdate._iFileSettingsUpdateConfig.getAppServerBasePath();
            var bCloudApiUpgradeUrlChanged = strCloudAPIUpgradeUrl !== strAppServerUrl;
            var cbSaveAppServerBaseFile = function () {
                self.saveAppServerBaseFile(error, context, callback);
            };
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
        };
        RS_SettingsSyncService.prototype.saveDeviceSettingsFile = function (error, context, callback) {
            var self = this;
            var bDeviceSettingsChanged = self._aServerDeviceSettingsConfiguration.getServerDeviceSettingsChanged();
            if (bDeviceSettingsChanged) {
                var cbSaveDeviceSettingsFile = function () {
                    var logMessage = "Sync server settings service: updated local device settings";
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>" + logMessage + "</p>";
                        console.log("<p>" + logMessage + "</p>");
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "" + logMessage, null, null, null);
                    self.saveFulfillmentSettings(error, context, callback);
                };
                return self.saveSettingsFile("device_settings.json", error, context, cbSaveDeviceSettingsFile);
            }
            self.saveFulfillmentSettings(error, context, callback);
        };
        RS_SettingsSyncService.prototype.start = function (aSettingsSync, error, context, callback) {
            var self = this;
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
            self._aHttpRequest.setUrlPath(self._aPlaybackGlobalConfig.getBaseServerApiUrl() + "/" + aSettingsSync.getRemoteRelativePath() + "/" + self._aPlaybackGlobalConfig.getSerialNumber());
            var reqHeaders = {
                "Authorization": "FB5ED944377FC2E532B28C3F5B844A94BE01C072FC99A34A95FBD99278468D64"
            };
            self._aHttpRequest.setHeaders(JSON.stringify(reqHeaders));
            var requestSent = function (ctx1) {
                var logMessage = "";
                if (ctx1 != null && !ctx1.isError()) {
                    var strResult = ctx1.getResult();
                    var jsonSettings = null;
                    if (strResult.length > 0) {
                        try {
                            jsonSettings = JSON.parse(strResult);
                        }
                        catch (e) {
                            logMessage = "Settings Sync exception: " + e.message;
                            if (self._debug) {
                                console.log(logMessage);
                                document.getElementById("rend.message").innerHTML += "<p>" + logMessage + "</p>";
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "" + logMessage, null, null, null);
                            error.setError(ctx1.getError().getErrId(), "" + logMessage);
                            jsonSettings = null;
                        }
                        if (jsonSettings != null) {
                            var aJsonDeviceSettings = self._aPlaybackGlobalConfig.getJsonDeviceSettings();
                            var strCloudAPIUrlValue = null;
                            var strCloudAPIUpgradeUrlValue = null;
                            var strCloudAPIUrlTimestamp = null;
                            var strCloudAPIUpgradeUrlTimestamp = null;
                            try {
                                strCloudAPIUrlValue = aJsonDeviceSettings["cloudApiSettings.baseServerApiUrl"]["value"];
                                strCloudAPIUpgradeUrlValue = aJsonDeviceSettings["cloudApiSettings.baseServerUpgradeUrl"]["value"];
                                strCloudAPIUrlTimestamp = aJsonDeviceSettings["cloudApiSettings.baseServerApiUrl"]["timestamp"];
                                strCloudAPIUpgradeUrlTimestamp = aJsonDeviceSettings["cloudApiSettings.baseServerUpgradeUrl"]["timestamp"];
                            }
                            catch (e) {
                                strCloudAPIUrlValue = null;
                                strCloudAPIUpgradeUrlValue = null;
                                strCloudAPIUrlTimestamp = null;
                                strCloudAPIUpgradeUrlTimestamp = null;
                            }
                            if (typeof strCloudAPIUrlValue === "string" && strCloudAPIUrlValue.length > 0 && strCloudAPIUrlValue[0] === '$') {
                                jsonSettings["cloudApiSettings.baseServerApiUrl"] = {
                                    value: self._strFulfillmentMediaServerBase,
                                    timestamp: strCloudAPIUrlTimestamp
                                };
                            }
                            if (typeof strCloudAPIUpgradeUrlValue === "string" && strCloudAPIUpgradeUrlValue.length > 0 && strCloudAPIUpgradeUrlValue[0] === '$') {
                                jsonSettings["cloudApiSettings.baseServerUpgradeUrl"] = {
                                    value: self._strFulfillmentAppServerBase,
                                    timestamp: strCloudAPIUpgradeUrlTimestamp
                                };
                            }
                            self._aPlaybackGlobalConfig.setJsonDeviceSettings(jsonSettings);
                            self._aServerDeviceSettingsConfiguration.setServerDeviceSettingsChanged(false);
                            self._aServerDeviceSettingsConfiguration.copyFromJson(jsonSettings);
                            return self.saveDeviceSettingsFile(error, context, callback);
                        }
                    }
                    else {
                        if (self._debug) {
                            console.log("Settings Sync: no settings");
                            document.getElementById("rend.message").innerHTML += "<p>Settings Sync: no settings</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Settings Sync: no settings", null, null, null);
                    }
                }
                else {
                    if (ctx1 != null) {
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        logMessage = "[" + error.getErrMsg() + "]";
                    }
                    if (self._debug) {
                        console.log("Get device settings FAILED: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Get device settings FAILED: " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging
                        .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Get device settings FAILED: " + logMessage, null, null, null);
                }
                context != null && context.setError(error);
                callback != null && callback(context);
            };
            var errorSendRequest = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSendRequest = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextSendRequest.setRemoteCallback(true);
            self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
        };
        RS_SettingsSyncService.prototype.updateServerSettings = function (jsonSetting, aSettingsSync, error, context, callback) {
            var self = this;
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
            self._aHttpRequest.setUrlPath(self._aPlaybackGlobalConfig.getBaseServerApiUrl() + "/" + aSettingsSync.getRemoteRelativePath() + "/" + self._aPlaybackGlobalConfig.getSerialNumber());
            var reqHeaders = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "FB5ED944377FC2E532B28C3F5B844A94BE01C072FC99A34A95FBD99278468D64"
            };
            self._aHttpRequest.setHeaders(JSON.stringify(reqHeaders));
            self._aHttpRequest.setBody(JSON.stringify(jsonSetting));
            var requestSent = function (ctx1) {
                var logMessage = "";
                if (ctx1 != null && !ctx1.isError()) {
                    logMessage = "Settings reported to server";
                }
                else {
                    if (ctx1 != null && error != null) {
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        logMessage = "[" + error.getErrMsg() + "]";
                    }
                }
                if (self._debug) {
                    console.log("Sync server settings service [updateServerSettings]: " + logMessage);
                    document.getElementById("rend.message").innerHTML += "<p>Sync server settings service [updateServerSettings]: " + logMessage + "</p>";
                }
                context != null && context.setError(error);
                callback != null && callback(context);
            };
            var errorSendRequest = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSendRequest = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextSendRequest.setRemoteCallback(true);
            self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
        };
        RS_SettingsSyncService.prototype.uploadFulfillmentSettings = function (error, context, callback) {
            var self = this;
            var aJsonDeviceSettings = self._aPlaybackGlobalConfig.getJsonDeviceSettings();
            if (aJsonDeviceSettings == null) {
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
            }
            var strCloudAPIUrlValue = null;
            var strCloudAPIUpgradeUrlValue = null;
            try {
                strCloudAPIUrlValue = aJsonDeviceSettings["cloudApiSettings.baseServerApiUrl"]["value"];
                strCloudAPIUpgradeUrlValue = aJsonDeviceSettings["cloudApiSettings.baseServerUpgradeUrl"]["value"];
            }
            catch (e) {
                strCloudAPIUrlValue = null;
                strCloudAPIUpgradeUrlValue = null;
            }
            var aJsonFile = self._aPlaybackGlobalConfig.getBootSettingsFolder();
            var jsonDeviceContent = self._aPlaybackGlobalConfig.getJsonDeviceSettings();
            var jsonUpdateContent = null;
            try {
                jsonUpdateContent = JSON.parse(JSON.stringify(jsonDeviceContent));
            }
            catch (e) {
                jsonUpdateContent = null;
            }
            if (jsonUpdateContent == null) {
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
            }
            var cbReadFile = function (ctx1) {
                var strContent = ctx1.getResult();
                var logMessage = "";
                var jsonContent = null;
                if (ctx1 != null && !ctx1.isError()) {
                    try {
                        jsonContent = JSON.parse(strContent);
                    }
                    catch (e) {
                        logMessage = "Settings Sync exception [uploadFulfillmentSettings]: " + e.message;
                        if (self._debug) {
                            console.log("" + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>" + logMessage + "</p>";
                        }
                        error.setError(ctx1.getError().getErrId(), "" + logMessage);
                        jsonContent = null;
                    }
                    if (jsonContent != null) {
                        var strAppServerBaseUrl = jsonContent["app_server_base_url"];
                        var strMediaServerBaseUrl = jsonContent["media_server_base_url"];
                        if (typeof strAppServerBaseUrl === "string" && strAppServerBaseUrl.length > 0) {
                            self._strFulfillmentAppServerBase = strAppServerBaseUrl;
                            if (jsonUpdateContent["cloudApiSettings.baseServerUpgradeUrl"] == null) {
                                jsonUpdateContent["cloudApiSettings.baseServerUpgradeUrl"] = {};
                            }
                            jsonUpdateContent["cloudApiSettings.baseServerUpgradeUrl"]["value"] = strAppServerBaseUrl;
                            if (strCloudAPIUrlValue != null && strCloudAPIUrlValue.length > 0 && strCloudAPIUrlValue[0] === '$') {
                                aJsonFile.setName("media_server_base_url.json");
                                var errorReadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextReadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                contextReadFile.setRemoteCallback(true);
                                return self._aSDKService._iSDKFileSystem.readTextFile2(aJsonFile.getStorage(), aJsonFile.getPath(), aJsonFile.getName(), errorReadFile, contextReadFile, cbReadFile);
                            }
                        }
                        else if (typeof strMediaServerBaseUrl === "string" && strMediaServerBaseUrl.length > 0) {
                            self._strFulfillmentMediaServerBase = strMediaServerBaseUrl;
                            if (jsonUpdateContent["cloudApiSettings.baseServerApiUrl"] == null) {
                                jsonUpdateContent["cloudApiSettings.baseServerApiUrl"] = {};
                            }
                            jsonUpdateContent["cloudApiSettings.baseServerApiUrl"]["value"] = strMediaServerBaseUrl;
                        }
                        var crtTimestamp = Date.now();
                        for (var key in jsonUpdateContent) {
                            var settingValue = jsonUpdateContent[key];
                            if (settingValue != null) {
                                settingValue["timestamp"] = crtTimestamp;
                            }
                        }
                        return self.updateServerSettings(jsonUpdateContent, null, error, context, callback);
                    }
                }
                else {
                    if (ctx1 != null) {
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        logMessage = "[" + error.getErrMsg() + "]";
                    }
                    if (self._debug) {
                        console.log("Settings Sync: read file failed: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Settings Sync: read file failed: " + logMessage + "</p>";
                    }
                }
                context != null && context.setError(error);
                callback != null && callback(context);
            };
            if (strCloudAPIUpgradeUrlValue != null && strCloudAPIUpgradeUrlValue.length > 0 && strCloudAPIUpgradeUrlValue[0] === '$') {
                aJsonFile.setName("app_server_base_url.json");
                var errorReadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextReadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextReadFile.setRemoteCallback(true);
                return self._aSDKService._iSDKFileSystem.readTextFile2(aJsonFile.getStorage(), aJsonFile.getPath(), aJsonFile.getName(), errorReadFile, contextReadFile, cbReadFile);
            }
            if (strCloudAPIUrlValue != null && strCloudAPIUrlValue.length > 0 && strCloudAPIUrlValue[0] === '$') {
                aJsonFile.setName("media_server_base_url.json");
                var errorReadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextReadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextReadFile.setRemoteCallback(true);
                return self._aSDKService._iSDKFileSystem.readTextFile2(aJsonFile.getStorage(), aJsonFile.getPath(), aJsonFile.getName(), errorReadFile, contextReadFile, cbReadFile);
            }
            context != null && context.setError(error);
            callback != null && callback(context);
        };
        RS_SettingsSyncService.prototype.loadLocalDeviceSettings = function (error, context, callback) {
            var self = this;
            var aLocalSettingsFile = this._aPlaybackGlobalConfig.getSettingsFolder();
            aLocalSettingsFile.setName("device_settings.json");
            var errorReadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextReadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextReadFile.setRemoteCallback(true);
            var callbackLoadSettings = function (ctx1) {
                var fileName = aLocalSettingsFile.getName();
                var logMessage = "";
                if (ctx1 != null && !ctx1.isError()) {
                    var strResult = ctx1.getResult();
                    var jsonSettings = null;
                    try {
                        jsonSettings = JSON.parse(strResult);
                    }
                    catch (e) {
                        logMessage = "Settings Sync exception [loadLocalDeviceSettings]: " + e.message;
                        if (self._debug) {
                            console.log("" + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>" + logMessage + "</p>";
                        }
                        error.setError(ctx1.getError().getErrId(), "" + logMessage);
                        jsonSettings = null;
                    }
                    if (jsonSettings != null) {
                        if (fileName == "device_settings.json") {
                            self._aPlaybackGlobalConfig.setJsonDeviceSettings(jsonSettings);
                            self._aServerDeviceSettingsConfiguration.copyFromJson(jsonSettings);
                        }
                        else if (fileName == "settings_v2.json") {
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
                }
                else {
                    if (ctx1 != null) {
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        logMessage = "[" + error.getErrMsg() + "]";
                    }
                    if (self._debug) {
                        console.log("Settings Sync: read Device Settings file failed: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Settings Sync: read Device Settings file failed: " + logMessage + "</p>";
                    }
                }
                if (fileName == "device_settings.json") {
                    aLocalSettingsFile.setName("settings_v2.json");
                    return self._aSDKService._iSDKFileSystem.readTextFile2(aLocalSettingsFile.getStorage(), aLocalSettingsFile.getPath(), aLocalSettingsFile.getName(), errorReadFile, contextReadFile, callbackLoadSettings);
                }
                return self.uploadFulfillmentSettings(error, context, callback);
            };
            self._aSDKService._iSDKFileSystem.readTextFile2(aLocalSettingsFile.getStorage(), aLocalSettingsFile.getPath(), aLocalSettingsFile.getName(), errorReadFile, contextReadFile, callbackLoadSettings);
        };
        return RS_SettingsSyncService;
    }(rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService));
    rm_nonrenderingservices.RS_SettingsSyncService = RS_SettingsSyncService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RS_SettingsSync.js.map