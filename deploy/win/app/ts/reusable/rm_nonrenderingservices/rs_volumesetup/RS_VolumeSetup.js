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
var rmVolumeSetupMain = require("./RI_VolumeSetup_Main");
var rmVolumeSetupConfig = require("./RI_VolumeSetup_Config");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RS_VolumeSetupService = (function (_super) {
        __extends(RS_VolumeSetupService, _super);
        function RS_VolumeSetupService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iVolumeSetupMain = new rmVolumeSetupMain.rm_nonrenderingservices.RI_VolumeSetupMain(_this);
            _this._iVolumeSetupConfig = new rmVolumeSetupConfig.rm_nonrenderingservices.RI_MonitoringConfig(_this);
            _this._aLogService = aLogService;
            _this._aActivityLogService = null;
            return _this;
        }
        RS_VolumeSetupService.prototype.setSDKService = function (aSDKService) {
            this._aSDKService = aSDKService;
        };
        RS_VolumeSetupService.prototype.setUtilsService = function (aUtilsService) {
            this._aUtilsService = aUtilsService;
        };
        RS_VolumeSetupService.prototype.getActivityLogService = function () {
            return this._aActivityLogService;
        };
        RS_VolumeSetupService.prototype.setActivityLogService = function (aActivityLogService) {
            this._aActivityLogService = aActivityLogService;
        };
        RS_VolumeSetupService.prototype.init = function (error) {
            this._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, this.getServiceName(), "Initializing Volume Setup Service ...", null, null, null);
        };
        RS_VolumeSetupService.prototype.getVolume = function (audioProperties, error, context, callback) {
            var self = this;
            var cbGetVolume = function (ctx1) {
                if (ctx1 != null && !ctx1.isError()) {
                    var deviceVolume = parseInt(ctx1.getResult());
                    audioProperties.setVolumeLevel(deviceVolume);
                }
                else {
                    var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                    if (self._debug) {
                        console.log("Volume setup service: error in getting device volume " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Volume setup service: error in getting device volume " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in getting device volume: " + logMessage, null, null, null);
                }
            };
            var errorGetVolume = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextGetVolume = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextGetVolume.setRemoteCallback(true);
            return self._aSDKService._iSDKAudioSetup.getVolumeLevel(errorGetVolume, contextGetVolume, cbGetVolume);
        };
        RS_VolumeSetupService.prototype.setVolume = function (audioProperties, error, context, callback) {
            var self = this;
            var nVolume = audioProperties.getVolumeLevel();
            var cbSetVolume = function (ctx1) {
                var logMessage = "";
                if (ctx1 != null && !ctx1.isError()) {
                    logMessage = "device volume set " + nVolume;
                    if (self._debug) {
                        console.log("Volume setup service: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Volume setup service: " + logMessage + "</p>";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "" + logMessage, null, null, null);
                }
                else {
                    if (ctx1 != null) {
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        logMessage = "[" + error.getErrMsg() + "]";
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "error in setting device volume: " + logMessage, null, null, null);
                    if (self._debug) {
                        console.log("Volume setup: Error in setting device volume: " + logMessage);
                        document.getElementById("rend.message").innerHTML += "<p>Volume setup: Error in setting device volume: " + logMessage + "</p>";
                    }
                }
                context != null && context.setError(error);
                callback != null && callback(context);
            };
            var errorSetVolume = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextSetVolume = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextSetVolume.setRemoteCallback(true);
            self._aSDKService._iSDKAudioSetup.setVolumeLevel(audioProperties, errorSetVolume, contextSetVolume, cbSetVolume);
        };
        return RS_VolumeSetupService;
    }(rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService));
    rm_nonrenderingservices.RS_VolumeSetupService = RS_VolumeSetupService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RS_VolumeSetup.js.map