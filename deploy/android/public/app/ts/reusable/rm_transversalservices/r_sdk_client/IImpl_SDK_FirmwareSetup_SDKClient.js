define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_FirmwareSetup_SDKClient = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_FirmwareSetup_SDKClient(owner) {
                this._owner = owner;
            }
            //-------------------------------------
            //   download Firmware
            //-------------------------------------   
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_SDKClient.prototype.downloadFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_SDKClient.prototype.promise_downloadFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------
            //   upgrade Firmware
            //-------------------------------------   
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_SDKClient.prototype.upgradeFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_SDKClient.prototype.promise_upgradeFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_SDKClient.prototype.getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_SDKClient.prototype.promise_getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
            };
            IImpl_SDK_FirmwareSetup_SDKClient.prototype.getFirmwareVersion = function (error, context, callback) {
                var callId = this._owner.addCallback(context, callback);
                var params = {
                    "callId": callId,
                };
                this._owner._socket.emit('sdk.firmwaresetup.get-firmwareversion', params);
            };
            IImpl_SDK_FirmwareSetup_SDKClient.prototype.promise_getFirmwareVersion = function (error, context, callback) {
            };
            return IImpl_SDK_FirmwareSetup_SDKClient;
        }());
        rm_transversalservices.IImpl_SDK_FirmwareSetup_SDKClient = IImpl_SDK_FirmwareSetup_SDKClient;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_FirmwareSetup_SDKClient.js.map