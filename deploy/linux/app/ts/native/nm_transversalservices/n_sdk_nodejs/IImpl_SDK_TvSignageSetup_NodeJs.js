"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_TvSignageSetup_NodeJs = (function () {
        function IImpl_SDK_TvSignageSetup_NodeJs(owner) {
            this._owner = owner;
        }
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.captureScreen = function (captureScreenInfo, error, context, callback) {
            var self = this;
            var screenshot = null;
            var aDstFileInfo = null;
            var filePath = null;
            var screenshotOptions = {};
            var screenshotFormat = null;
            var bDifferentFormat = false;
            try {
                aDstFileInfo = captureScreenInfo.getFileInfo();
                filePath = aDstFileInfo.getFullName();
                var filePathExtension = filePath.split('.').pop();
                var screenshotQuality = captureScreenInfo.getQuality();
                var screenshotWidth = captureScreenInfo.getWidth();
                var screenshotHeight = captureScreenInfo.getHeight();
                if (screenshotQuality != null) {
                    screenshotOptions["quality"] = screenshotQuality;
                }
                if (screenshotWidth != null) {
                    screenshotOptions["width"] = screenshotWidth;
                }
                if (screenshotHeight != null) {
                    screenshotOptions["height"] = screenshotHeight;
                }
                screenshotFormat = captureScreenInfo.getFormat();
                if (screenshotFormat !== null && screenshotFormat !== filePathExtension) {
                    bDifferentFormat = true;
                    filePath += "." + screenshotFormat;
                }
                screenshot = require('desktop-screenshot');
            }
            catch (e) {
                error != null && error.setError(8011, "sdk:capture-screen error. Error capturing screen :" + e.message);
                context != null && context.setError(error);
                callback != null && callback(context);
                return;
            }
            if (screenshot != null) {
                screenshot(filePath, screenshotOptions, function (err, complete) {
                    err != null && error != null && error.setError(8011, "sdk:capture-screen error. Error capturing screen :" + JSON.stringify(err));
                    if (!error.isError() && bDifferentFormat == true) {
                        var cbMoveFile = function (ctx1) {
                            if (ctx1 != null && ctx1.isError()) {
                                error != null && error.setError(ctx1.getError().getErrId(), "Move File: Cannot move file from to the destination [" + ctx1.getError().getErrMsg() + "]");
                            }
                            context != null && context.setError(error);
                            callback != null && callback(context);
                        };
                        var errorMoveFile = self._owner._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextMoveFile = self._owner._aServiceLocator._iEntityCreation.createDefaultContext();
                        contextMoveFile.setRemoteCallback(true);
                        self._owner._iSDKFileSystem.moveFile2(aDstFileInfo.getStorage(), aDstFileInfo.getPath(), aDstFileInfo.getName() + ("." + screenshotFormat), aDstFileInfo.getStorage(), aDstFileInfo.getPath(), aDstFileInfo.getName(), errorMoveFile, contextMoveFile, cbMoveFile);
                    }
                    else {
                        context != null && context.setError(error);
                        callback != null && callback(context);
                    }
                });
            }
            else {
                error != null && error.setError(8011, "sdk:capture-screen desktop-screenshot module");
                context != null && context.setError(error);
                callback != null && callback(context);
            }
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_captureScreen = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setFailureMode = function (failureModeInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setFailureMode = function (failureModeInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getFailureMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getFailureMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getIntelligentAuto = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getIntelligentAuto = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getSignageInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getSignageInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setPortraitMode = function (portraitMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setPortraitMode = function (portraitMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getPortraitMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getPortraitMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setStudioMode = function (studioMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setStudioMode = function (studioMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getStudioMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getStudioMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setISMMethod = function (ismMethod, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setISMMethod = function (ismMethod, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getISMMethod = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getISMMethod = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setTileInfo = function (tileInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setTileInfo = function (tileInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getTileInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getTileInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.unregisterSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_unregisterSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getUsageData = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getUsageData = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.setUsagePermissions = function (usagePermissions, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_setUsagePermissions = function (usagePermissions, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.getUsagePermissions = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_NodeJs.prototype.promise_getUsagePermissions = function (error, context, callback) {
        };
        return IImpl_SDK_TvSignageSetup_NodeJs;
    }());
    nm_transversalservices.IImpl_SDK_TvSignageSetup_NodeJs = IImpl_SDK_TvSignageSetup_NodeJs;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_TvSignageSetup_NodeJs.js.map