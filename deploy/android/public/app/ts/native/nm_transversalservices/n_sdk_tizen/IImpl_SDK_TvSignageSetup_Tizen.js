define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_TvSignageSetup_Tizen = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_TvSignageSetup_Tizen(owner) {
                this._owner = owner;
            }
            //-------------------------------
            //       Capture Screen
            //-------------------------------
            //---------------------
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
            //------------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_captureScreen = function (soundProperties, error, context, callback) {
            };
            //-------------------------------
            //       Check Screen
            //  The Check Screen feature judges whether there are abnormalities at the edges of the screen. R, G, and B OSDs
            //     are formed on the screen at one second intervals and an RGB Sensor tests the areas.
            //  If set to On, the Check Screen feature is enabled.
            //  If set to Off, the Check Screen feature is disabled.
            // When the Portrait mode is On, the Check Screen feature is Off and deactivated    
            //----------------------------------
            //--------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
            };
            //------------------------------------------------------------------------
            //Fail Over
            //The input source with the highest priority will be selected.
            //-- Off
            //   The Auto-Fail Over feature is disabled.
            //--- Auto
            // The input source changes according to the specified order. When several input sources are found, the input
            // source with the highest priority will be selected.
            // Priority: 1.HDMI, 2.DVI-D, 3.DISPLAYPORT, and 4.OPS, 5.RGB, 6.Internal Memory
            //-- Manual
            // The input source changes according to the specified order. When several input sources are found, the input
            // source with the highest priority will be selected.
            // y You can set Priority 1 - Priority 6.
            //-- NOTE:
            // Content copied using My Media will be saved in the root folder.
            // If the input is switched to Internal Memory due to Fail Over, videos files or image files saved in the top-level
            //   folder in the Internal Memory will be displayed.
            // If there are both video files and image files in the same folder, then only the video files will be played.
            // Content distributed by SuperSign will be saved in the folder named 'normal' in the internal memory. Therefore,
            //content distributed by SuperSign will not be automatically played due to Fail Over.
            //---------------------
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.setFailureMode = function (failureModeInfo, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setFailureMode = function (failureModeInfo, error, context, callback) {
            };
            IImpl_SDK_TvSignageSetup_Tizen.prototype.getFailureMode = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getFailureMode = function (error, context, callback) {
            };
            //--------------------
            // Intelligent Auto
            // Adjusts the size, position, and phase of the monitor's screen automatically at the recognized resolution. 
            // This feature is available only in RGB input mode (to be checked).
            //----------------------
            //----------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.getIntelligentAuto = function (error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getIntelligentAuto = function (error, context, callback) {
            };
            //------------------
            //  getSignageInfo supplies all general information about the signage tv
            //    like:
            // 		    Portrait mode. Refer to the Signage.OsdPortraitMode for more detail.
            //        ISM(Image Sticking Minimization) method. Refer to the Signage.IsmMethod for more detail.
            //        Digital Audio Input Mode. An object with input type/Signage.DigitalAudioInput pair.
            //        check screen information
            //-------------------
            //----------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.getSignageInfo = function (error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getSignageInfo = function (error, context, callback) {
            };
            //------------------
            //  portraitMode
            //------------------
            //---------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.setPortraitMode = function (portraitMode, error, context, callback) {
            };
            //------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setPortraitMode = function (portraitMode, error, context, callback) {
            };
            //--------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.getPortraitMode = function (error, context, callback) {
            };
            //---------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getPortraitMode = function (error, context, callback) {
            };
            //------------------
            //  studioMode
            //------------------
            //-------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.setStudioMode = function (studioMode, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setStudioMode = function (studioMode, error, context, callback) {
            };
            //----------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.getStudioMode = function (error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getStudioMode = function (error, context, callback) {
            };
            //------------------
            //  setISMMethod
            //------------------
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.setISMMethod = function (ismMethod, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setISMMethod = function (ismMethod, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.getISMMethod = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getISMMethod = function (error, context, callback) {
            };
            //------------------
            //  setTileInfo
            //
            //You can configure the integrated screen in the same way as each screen is configured.
            // To use this function
            //    - Must be used with multiple monitors.
            //    - Must be operated after connecting the monitors using DP Cable and distributor.
            //    - Tile mode: row x column (r = 1 to 15, c = 1 to 15)
            //    - 15 x 15 available
            //-- Row (1-15)
            //   Set the number of Tile rows.
            //-- Column (1-15)
            //   Set the number of Tile columns.
            //-- Tile ID (1-225)
            //   Set an ID for the Tile.
            // The ID you selected will be displayed on the screen.
            //-- Natural
            //   For more natural display, the image is partly omitted to account for the distance between the screens.
            //-- Reset
            //   Resets the Tile Mode option.
            //    If you select Tile Reset, all Tile settings are reset and the screen returns to the Full Screen Mode.
            //------------------
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.setTileInfo = function (tileInfo, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setTileInfo = function (tileInfo, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.getTileInfo = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getTileInfo = function (error, context, callback) {
            };
            //------------------
            //  register/unregister/get Monitoring Info
            //-----------------
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.unregisterSystemMonitorInfo = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_unregisterSystemMonitorInfo = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.getSystemMonitorInfo = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getSystemMonitorInfo = function (error, context, callback) {
            };
            //------------------
            //  get usage data : uptime, etc.
            //------------------
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.getUsageData = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getUsageData = function (error, context, callback) {
            };
            //---------------------
            //  get usage permissions
            //----------------------
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.setUsagePermissions = function (usagePermissions, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_setUsagePermissions = function (usagePermissions, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.getUsagePermissions = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_TvSignageSetup_Tizen.prototype.promise_getUsagePermissions = function (error, context, callback) {
            };
            return IImpl_SDK_TvSignageSetup_Tizen;
        }());
        nm_transversalservices.IImpl_SDK_TvSignageSetup_Tizen = IImpl_SDK_TvSignageSetup_Tizen;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_TvSignageSetup_Tizen.js.map