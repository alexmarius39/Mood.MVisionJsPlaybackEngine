"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_TvSignageSetup_Tizen = (function () {
        function IImpl_SDK_TvSignageSetup_Tizen(owner) {
            this._owner = owner;
        }
        IImpl_SDK_TvSignageSetup_Tizen.prototype.captureScreen = function (captureScreenInfo, error, context, callback) {
            var self = this;
            function onSuccessCaptureScreen(screenshotFilePath) {
                var screenshotFileDir = screenshotFilePath.substring(0, screenshotFilePath.lastIndexOf('/'));
                function onResolveDirectorySuccess(dirPathHandle) {
                    var screenshotTmpFile = captureScreenInfo.getFileInfo().getFullName();
                    function onCopySuccess() {
                        function onResolveFileSuccess(filePathHandle) {
                            var myNewExif = null;
                            try {
                                myNewExif = new tizen.ExifInformation();
                                myNewExif.uri = filePathHandle.toURI();
                                if (captureScreenInfo.getOrientation() === "PORTRAIT") {
                                    myNewExif.orientation = "ROTATE_90";
                                }
                            }
                            catch (e) {
                                error != null && error.setError(9024, "[Tizen]: captureScreen error Exif object error " + e.message);
                                context != null && context.setError(error);
                                callback != null && callback(context);
                                return;
                            }
                            tizen.exif.saveExifInfo(myNewExif, function () {
                                context != null && context.setError(error);
                                callback != null && callback(context);
                            }, function (e) {
                                if (self._owner._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>[Tizen]: captureScreen save Exif object error " + e.message + "</p>";
                                }
                                error != null && error.setError(9024, "[Tizen]: captureScreen save Exif object error " + e.message);
                                context != null && context.setError(error);
                                callback != null && callback(context);
                            });
                        }
                        function onResolveFileError(e) {
                            if (self._owner._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>[Tizen]: captureScreen resolve file " + screenshotTmpFile + " error " + e.message + "</p>";
                            }
                            error != null && error.setError(9023, "[Tizen]: captureScreen resolve file " + screenshotTmpFile + " error " + e.message);
                            context != null && context.setError(error);
                            callback != null && callback(context);
                        }
                        try {
                            tizen.filesystem.resolve(screenshotTmpFile, onResolveFileSuccess, onResolveFileError);
                        }
                        catch (e) {
                            error != null && error.setError(9023, "[Tizen]: captureScreen exception " + e.message);
                            context != null && context.setError(error);
                            callback != null && callback(context);
                        }
                    }
                    function onCopyError(e) {
                        if (self._owner._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>SDK capture screen copy file error " + screenshotFilePath + " " + screenshotTmpFile + " " + e.message + "</p>";
                        }
                        error != null && error.setError(9022, "[Tizen]: captureScreen copy file error " + e.message);
                        context != null && context.setError(error);
                        callback != null && callback(context);
                    }
                    dirPathHandle.copyTo(screenshotFilePath, screenshotTmpFile, true, onCopySuccess, onCopyError);
                }
                function onResolveDirectoryError(e) {
                    if (self._owner._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>[Tizen]: captureScreen resolve directory " + screenshotFileDir + " error " + e.message + "</p>";
                    }
                    error != null && error.setError(9021, "[Tizen]: captureScreen resolve directory " + screenshotFileDir + " error " + e.message);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
                try {
                    tizen.filesystem.resolve(screenshotFileDir, onResolveDirectorySuccess, onResolveDirectoryError);
                }
                catch (e) {
                    error != null && error.setError(9021, "[Tizen]: captureScreen exception " + e.message);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            }
            function onErrorCaptureScreen(err) {
                if (self._owner._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>SDK capture screen error " + err.message + "</p>";
                }
                error != null && error.setError(9020, "[Tizen]: captureScreen function error " + err.message);
                context != null && context.setError(error);
                callback != null && callback(context);
            }
            try {
                b2bapis.b2bcontrol.captureScreen(onSuccessCaptureScreen, onErrorCaptureScreen);
            }
            catch (e) {
                error != null && error.setError(9020, "[Tizen]: captureScreen exception " + e.message);
                context != null && context.setError(error);
                callback != null && callback(context);
            }
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_captureScreen = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setFailureMode = function (failureModeInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setFailureMode = function (failureModeInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getFailureMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getFailureMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getIntelligentAuto = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getIntelligentAuto = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getSignageInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getSignageInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setPortraitMode = function (portraitMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setPortraitMode = function (portraitMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getPortraitMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getPortraitMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setStudioMode = function (studioMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setStudioMode = function (studioMode, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getStudioMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getStudioMode = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setISMMethod = function (ismMethod, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setISMMethod = function (ismMethod, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getISMMethod = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getISMMethod = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setTileInfo = function (tileInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setTileInfo = function (tileInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getTileInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getTileInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.unregisterSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_unregisterSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getSystemMonitorInfo = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getUsageData = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getUsageData = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.setUsagePermissions = function (usagePermissions, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setUsagePermissions = function (usagePermissions, error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.getUsagePermissions = function (error, context, callback) {
        };
        IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getUsagePermissions = function (error, context, callback) {
        };
        return IImpl_SDK_TvSignageSetup_Tizen;
    }());
    nm_transversalservices.IImpl_SDK_TvSignageSetup_Tizen = IImpl_SDK_TvSignageSetup_Tizen;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_TvSignageSetup_Tizen.js.map