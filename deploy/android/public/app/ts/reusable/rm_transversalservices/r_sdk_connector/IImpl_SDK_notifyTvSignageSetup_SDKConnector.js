define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_notifyTvSignageSetup_SDKConnector = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_notifyTvSignageSetup_SDKConnector(owner) {
                this._owner = owner;
            }
            //-------------------------------
            //       Capture Screen
            //-------------------------------
            //---------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_captureScreen = function (captureScreenInfo, error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKTvSignageSetup.notify_captureScreen(captureScreenInfo, error, context, callback);
            };
            //------------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_captureScreen = function (soundProperties, error, context, callback) {
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
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_enableCheckScreen = function (enabledCheckScreen, error, context, callback) {
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
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_setFailureMode = function (failureModeInfo, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_setFailureMode = function (failureModeInfo, error, context, callback) {
            };
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_getFailureMode = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_getFailureMode = function (error, context, callback) {
            };
            //--------------------
            // Intelligent Auto
            // Adjusts the size, position, and phase of the monitor's screen automatically at the recognized resolution. 
            // This feature is available only in RGB input mode (to be checked).
            //----------------------
            //----------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_setIntelligentAuto = function (enabledIntelligentAuto, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_getIntelligentAuto = function (error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_getIntelligentAuto = function (error, context, callback) {
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
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_getSignageInfo = function (error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_getSignageInfo = function (error, context, callback) {
            };
            //------------------
            //  portraitMode
            //------------------
            //---------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_setPortraitMode = function (portraitMode, error, context, callback) {
            };
            //------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_setPortraitMode = function (portraitMode, error, context, callback) {
            };
            //--------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_getPortraitMode = function (error, context, callback) {
            };
            //---------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_getPortraitMode = function (error, context, callback) {
            };
            //------------------
            //  studioMode
            //------------------
            //-------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_setStudioMode = function (studioMode, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_setStudioMode = function (studioMode, error, context, callback) {
            };
            //----------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_getStudioMode = function (error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_getStudioMode = function (error, context, callback) {
            };
            //------------------
            //  setISMMethod
            //------------------
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_setISMMethod = function (ismMethod, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_setISMMethod = function (ismMethod, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_getISMMethod = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_getISMMethod = function (error, context, callback) {
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
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_setTileInfo = function (tileInfo, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_setTileInfo = function (tileInfo, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_getTileInfo = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_getTileInfo = function (error, context, callback) {
            };
            //------------------
            //  register/unregister/get Monitoring Info
            //-----------------
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_registerSystemMonitorInfo = function (systemMonitoringInfo, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_unregisterSystemMonitorInfo = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_unregisterSystemMonitorInfo = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_getSystemMonitorInfo = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_getSystemMonitorInfo = function (error, context, callback) {
            };
            //------------------
            //  get usage data : uptime, etc.
            //------------------
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_getUsageData = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_getUsageData = function (error, context, callback) {
            };
            //---------------------
            //  get usage permissions
            //----------------------
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_setUsagePermissions = function (usagePermissions, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_setUsagePermissions = function (usagePermissions, error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_getUsagePermissions = function (error, context, callback) {
            };
            //------------------------------
            IImpl_SDK_notifyTvSignageSetup_SDKConnector.prototype.notify_promise_getUsagePermissions = function (error, context, callback) {
            };
            return IImpl_SDK_notifyTvSignageSetup_SDKConnector;
        }());
        rm_transversalservices.IImpl_SDK_notifyTvSignageSetup_SDKConnector = IImpl_SDK_notifyTvSignageSetup_SDKConnector;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_notifyTvSignageSetup_SDKConnector.js.map