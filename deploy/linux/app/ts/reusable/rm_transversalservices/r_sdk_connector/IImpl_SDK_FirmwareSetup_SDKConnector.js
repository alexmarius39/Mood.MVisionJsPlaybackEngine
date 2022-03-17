"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_SDK_FirmwareSetup_SDKConnector = (function () {
        function IImpl_SDK_FirmwareSetup_SDKConnector(owner) {
            this._owner = owner;
        }
        IImpl_SDK_FirmwareSetup_SDKConnector.prototype.downloadFirmware = function (firmwareProperties, error, context, callback) {
        };
        IImpl_SDK_FirmwareSetup_SDKConnector.prototype.promise_downloadFirmware = function (firmwareProperties, error, context, callback) {
        };
        IImpl_SDK_FirmwareSetup_SDKConnector.prototype.upgradeFirmware = function (firmwareProperties, error, context, callback) {
        };
        IImpl_SDK_FirmwareSetup_SDKConnector.prototype.promise_upgradeFirmware = function (firmwareProperties, error, context, callback) {
        };
        IImpl_SDK_FirmwareSetup_SDKConnector.prototype.getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
        };
        IImpl_SDK_FirmwareSetup_SDKConnector.prototype.promise_getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
        };
        IImpl_SDK_FirmwareSetup_SDKConnector.prototype.getFirmwareVersion = function (error, context, callback) {
            var owner = this._owner;
            var callback2 = function (ctx) {
                console.log(ctx.getResult);
                owner._iNotify_SDKFirmwareSetup.notify_getFirmwareVersion(error, context, callback);
            };
            owner._aSDKJsTV._iSDKFirmwareSetup.getFirmwareVersion(error, context, callback2);
        };
        IImpl_SDK_FirmwareSetup_SDKConnector.prototype.promise_getFirmwareVersion = function (error, context, callback) {
        };
        return IImpl_SDK_FirmwareSetup_SDKConnector;
    }());
    rm_transversalservices.IImpl_SDK_FirmwareSetup_SDKConnector = IImpl_SDK_FirmwareSetup_SDKConnector;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_FirmwareSetup_SDKConnector.js.map