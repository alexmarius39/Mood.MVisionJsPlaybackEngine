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
var rmScreenshotMain = require("./RI_Screenshot_Main");
var rmScreenshotConfig = require("./RI_Screenshot_Config");
var rmRenderingServices = require("../r_renderingservice/R_RenderingService");
var amGeneralActivityLogMessageTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RS_ScreenshotService = (function (_super) {
        __extends(RS_ScreenshotService, _super);
        function RS_ScreenshotService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iScreenshotMain = new rmScreenshotMain.rm_renderingservices.RI_ScreenshotMain(_this);
            _this._iScreenshotConfig = new rmScreenshotConfig.rm_renderingservices.RI_ScreenshotConfig(_this);
            _this._aLogService = aLogService;
            _this._aHttpRequest = null;
            _this._aScreenshotOptions = null;
            _this._aPlaybackGlobalConfig = null;
            return _this;
        }
        RS_ScreenshotService.prototype.setSDKService = function (aSDKService) {
            this._aSDKService = aSDKService;
        };
        RS_ScreenshotService.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
        };
        RS_ScreenshotService.prototype.getPlaybackGlobalConfig = function () {
            return this._aPlaybackGlobalConfig;
        };
        RS_ScreenshotService.prototype.setDefaultScreenshotOptions = function (aScreenshotOptions) {
            this._aScreenshotOptions = aScreenshotOptions;
        };
        RS_ScreenshotService.prototype.getDefaultScreenshotOptions = function () {
            return this._aScreenshotOptions;
        };
        RS_ScreenshotService.prototype.getActivityLogService = function () {
            return this._aActivityLogService;
        };
        RS_ScreenshotService.prototype.setActivityLogService = function (aActivityLogService) {
            this._aActivityLogService = aActivityLogService;
        };
        RS_ScreenshotService.prototype.init = function (error) {
            this._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, this.getServiceName(), "Initializing Screenshot Service ...", null, null, null);
            this._aHttpRequest = this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
        };
        RS_ScreenshotService.prototype.saveFileAndReturnBytes = function (aScreenshotOptions, error, context, callback) {
            var self = this;
            var aScreenshotFile = aScreenshotOptions.getCaptureScreenInfo().getFileInfo();
            if (aScreenshotOptions.getSaveInMemory() === true) {
                var cbReadBinaryFile = function (ctx) {
                    if (ctx != null) {
                        if (!ctx.isError()) {
                            if (aScreenshotOptions.getSaveInFile() === false) {
                                var errorRemoveFile1 = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextRemoveFile1 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                contextRemoveFile1.setRemoteCallback(true);
                                self._aSDKService._iSDKFileSystem.removeFile2(aScreenshotFile.getStorage(), aScreenshotFile.getPath(), aScreenshotFile.getName(), errorRemoveFile1, contextRemoveFile1, null);
                            }
                            context != null && context.setArrayResult(ctx.getArrayResult());
                        }
                        else {
                            error.setError(ctx.getError().getErrId(), ctx.getError().getErrMsg());
                        }
                    }
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                var errorReadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextReadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextReadFile.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.readBinaryFile(aScreenshotFile.getStorage(), aScreenshotFile.getPath(), aScreenshotFile.getName(), errorReadFile, contextReadFile, cbReadBinaryFile);
            }
            else {
                if (aScreenshotOptions.getSaveInFile() === false) {
                    var errorRemoveFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextRemoveFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    contextRemoveFile.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.removeFile2(aScreenshotFile.getStorage(), aScreenshotFile.getPath(), aScreenshotFile.getName(), errorRemoveFile, contextRemoveFile, null);
                }
                context != null && context.setError(error);
                callback != null && callback(context);
            }
        };
        RS_ScreenshotService.prototype.generateAndSendScreenshot = function (aScreenshotOptions, error, context, callback) {
            var self = this;
            if (aScreenshotOptions == null) {
                aScreenshotOptions = self._aScreenshotOptions;
            }
            if (aScreenshotOptions == null) {
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
            }
            var aCaptureScreen = aScreenshotOptions.getCaptureScreenInfo();
            var orientation = window.screen.orientation;
            var strOrientation = orientation.type.toString().split("-")[0].toUpperCase();
            aCaptureScreen.setOrientation(strOrientation);
            var aScreenshotFile = aCaptureScreen.getFileInfo();
            var cbCreateFolder = function (ctx3) {
                var cbCaptureScreen = function (ctx2) {
                    if (ctx2 != null && !ctx2.isError()) {
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Screenshot Capture Success", null, null, null);
                        if (aScreenshotOptions.getSendToServer()) {
                            var localTime = self._aUtilsService._iUtilsDateTime.getCrtDateTimeAsString2("yyyy-mm-dd", "hh-mm-ss", "_");
                            self._aHttpRequest.reset();
                            self._aHttpRequest.setMethod("POST");
                            self._aHttpRequest.setUrlPath(self._aPlaybackGlobalConfig.getBaseServerApiUrl() + "/" + aScreenshotOptions.getRemoteRelativePath());
                            var urlParams = {
                                "serial": self._aPlaybackGlobalConfig.getSerialNumber(),
                                "date": localTime,
                                "stream": "x"
                            };
                            self._aHttpRequest.setUrlParams(JSON.stringify(urlParams));
                            self._aHttpRequest.setBoundary("380009360982575615081974");
                            self._aHttpRequest.setMultipart();
                            var errorCDHeader = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var aCDHeader = self._aServiceLocator._iEntityCreation.createDefaultContentDispositionHeader(errorCDHeader);
                            aCDHeader.setHeaderName("filelist");
                            aCDHeader.setHeaderFileBinary(true);
                            aCDHeader.setHeaderFile(aScreenshotFile);
                            self._aHttpRequest.addCDHeader(aCDHeader);
                            var requestSent = function (ctx1) {
                                if (ctx1 != null && !ctx1.isError()) {
                                    self._aActivityLogService._IActivityLogServiceMessaging
                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Monitoring screenshot sent", null, null, null);
                                    if (self._debug) {
                                        console.log("Monitoring screenshot sent");
                                        document.getElementById("rend.message").innerHTML += "<p>Monitoring screenshot sent</p>";
                                    }
                                }
                                else {
                                    var logMessage = "";
                                    if (ctx1 != null) {
                                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                                        logMessage = "[" + error.getErrMsg() + "]";
                                    }
                                    self._aActivityLogService._IActivityLogServiceMessaging
                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Monitoring screenshot send FAILED: " + logMessage, null, null, null);
                                }
                                context != null && context.setError(error);
                                self.saveFileAndReturnBytes(aScreenshotOptions, error, context, callback);
                            };
                            var errorSendRequest = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextSendRequest = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            contextSendRequest.setRemoteCallback(true);
                            self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
                        }
                        else {
                            self.saveFileAndReturnBytes(aScreenshotOptions, error, context, callback);
                        }
                    }
                    else {
                        var logMessage = "";
                        if (ctx2 != null) {
                            error.setError(ctx2.getError().getErrId(), ctx2.getError().getErrMsg());
                            logMessage = "[" + error.getErrMsg() + "]";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "Screenshot capture failed: " + logMessage, null, null, null);
                    }
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                var errorScreenshot = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextScreenshot = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextScreenshot.setRemoteCallback(true);
                self._aSDKService._iSDKTvSignageSetup.captureScreen(aCaptureScreen, errorScreenshot, contextScreenshot, cbCaptureScreen);
            };
            var errorCreateFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCreateFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextCreateFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.createFolder2(aScreenshotFile.getStorage(), aScreenshotFile.getPath(), errorCreateFolder, contextCreateFolder, cbCreateFolder);
        };
        return RS_ScreenshotService;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.RS_ScreenshotService = RS_ScreenshotService;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RS_Screenshot.js.map