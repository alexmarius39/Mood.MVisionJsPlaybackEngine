define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_notifyHardwareSetup_SDKConnector = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_notifyHardwareSetup_SDKConnector(owner) {
                this._owner = owner;
            }
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_startWps = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_startWps = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_stopWps = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_stopWps = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_getWifiList = function (error, context, callback) {
                //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>, 
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getWifiList = function (error, context, callback) {
                //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>,   
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_connectWifi = function (wifiConnectionInfo, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_connectWifi = function (wifiConnectionInfo, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_setNewtworkInfo = function (networkProperties, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_setNewtworkInfo = function (networkProperties, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_getNewtworkInfo = function (error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getNewtworkInfo(error, context, callback);
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getNewtworkInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_setNewtworkProxyInfo = function (networkProperties, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_setNewtworkProxyInfo = function (networkProperties, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_getNewtworkProxyInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getNewtworkProxyInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_getMacAddress = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getMacAddress = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_getPlatformInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getPlatformInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_getSystemUsageInfo = function (error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getSystemUsageInfo(error, context, callback);
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getSystemUsageInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_getCPUInfo = function (error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getCPUInfo(error, context, callback);
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getCPUInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_getSerialNumber = function (error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getSerialNumber(error, context, callback);
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getSerialNumber = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_setBeaconInfo = function (beaconInfo, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_setBeaconInfo = function (beaconInfo, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_getBeaconInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getBeaconInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_setEddystoneInfo = function (eddystoneInfo, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_setEddystoneInfo = function (eddystoneInfo, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_getEddystoneInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getEddystoneInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_setWifiSoftAppInfo = function (wifiSoftAppInfo, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getWifiSoftApp = function (wifiSoftAppInfo, error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_getWifiSoftAppInfo = function (error, context, callback) {
            };
            IImpl_SDK_notifyHardwareSetup_SDKConnector.prototype.notify_promise_getWifiSoftAppInfo = function (error, context, callback) {
            };
            return IImpl_SDK_notifyHardwareSetup_SDKConnector;
        }());
        rm_transversalservices.IImpl_SDK_notifyHardwareSetup_SDKConnector = IImpl_SDK_notifyHardwareSetup_SDKConnector;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_notifyHardwareSetup_SDKConnector.js.map