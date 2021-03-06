define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_PowerSetup_SDKConnector = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_PowerSetup_SDKConnector(owner) {
                this._owner = owner;
            }
            //---------------------
            // Power Save Mode Info mode parameters.
            //  powerSaveModeInfo:
            //     ses: Enable/disable Smart Energy Saving mode
            //     dpmMode: Set Display Power Managerment mode. Refer to Signage.DpmMode for more information.
            //     automaticStandby: Set Automatic Standby mode. Refer to Signage.AutomaticStandbyMode for more information.
            //     do15MinOff: Enable/disable 15 Minute Off feature.	
            //-----------------------
            //----------------------------
            IImpl_SDK_PowerSetup_SDKConnector.prototype.setPowerSaveMode = function (powerSaveMode, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_setPowerSaveMode = function (failureModeInfo, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_PowerSetup_SDKConnector.prototype.getPowerSaveMode = function (error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_getPowerSaveMode = function (error, context, callback) {
            };
            //-----------------------------
            // Execute Power command
            //-----------------------------
            IImpl_SDK_PowerSetup_SDKConnector.prototype.executePowerCommand = function (powerProperties, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    owner._iNotify_SDKPowerSetup.notify_executePowerCommand(powerProperties, error, context, callback);
                };
                owner._aSDKJsTV._iSDKPowerSetup.executePowerCommand(powerProperties, error, context, callback2);
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_executePowerCommand = function (powerProperties, error, context, callback) {
            };
            //-----------------------------
            // get/set Power Mng Mode
            //-----------------------------
            IImpl_SDK_PowerSetup_SDKConnector.prototype.setPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_setPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.getPowerMngMode = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_getPowerMngMode = function (error, context, callback) {
            };
            //-----------------------------
            // get/set Power OnDelay
            //-----------------------------
            IImpl_SDK_PowerSetup_SDKConnector.prototype.setPowerOnDelayTime = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_setPowerOnDelayTime = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.getPowerOnDelayTime = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_getPowerOnDelayTime = function (error, context, callback) {
            };
            //-----------------------------
            // get/set Display Power Mng Mode and WakeUp Signal
            //-----------------------------
            IImpl_SDK_PowerSetup_SDKConnector.prototype.setDisplayPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_setDisplayPowerMngMode = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.getDisplayPowerMngMode = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_getDisplayPowerMngMode = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.setDisplayPowerMngWakeupSignal = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_setDisplayPowerMngWakeupSignal = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.getDisplayPowerMngWakeupSignal = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_getDisplayPowerMngWakeupSignal = function (error, context, callback) {
            };
            //-----------------------------
            // get/set Wake On Lan 
            //-----------------------------
            IImpl_SDK_PowerSetup_SDKConnector.prototype.setWakeOnLan = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_setWakeOnLan = function (powerProperties, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.getWakeOnLan = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_getWakeOnLan = function (error, context, callback) {
            };
            //-----------------------------
            // Device Timer management 
            //-----------------------------
            IImpl_SDK_PowerSetup_SDKConnector.prototype.addOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_addOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.addOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_addOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.deleteOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_deleteOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.deleteOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_deleteOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.getOffDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_getOffDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.getOnDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_getOnDeviceTimerList = function (error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.enableAllOffDeviceTimers = function (enable, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_enableAllOffDeviceTimers = function (enable, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.enableAllOnDeviceTimers = function (enable, error, context, callback) {
            };
            IImpl_SDK_PowerSetup_SDKConnector.prototype.promise_enableAllOnDeviceTimers = function (enable, error, context, callback) {
            };
            return IImpl_SDK_PowerSetup_SDKConnector;
        }());
        rm_transversalservices.IImpl_SDK_PowerSetup_SDKConnector = IImpl_SDK_PowerSetup_SDKConnector;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_PowerSetup_SDKConnector.js.map