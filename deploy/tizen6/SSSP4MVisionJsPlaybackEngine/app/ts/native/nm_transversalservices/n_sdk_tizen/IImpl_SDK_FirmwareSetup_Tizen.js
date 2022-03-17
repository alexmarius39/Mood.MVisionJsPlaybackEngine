define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_FirmwareSetup_Tizen = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_FirmwareSetup_Tizen(owner) {
                this._owner = owner;
            }
            //-------------------------------------
            //   download Firmware
            //-------------------------------------   
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_Tizen.prototype.downloadFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_Tizen.prototype.promise_downloadFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------
            //   upgrade Firmware
            //-------------------------------------   
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_Tizen.prototype.upgradeFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_Tizen.prototype.promise_upgradeFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_Tizen.prototype.getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_Tizen.prototype.promise_getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
            };
            IImpl_SDK_FirmwareSetup_Tizen.prototype.getFirmwareVersion = function (error, context, callback) {
                if (callback == null)
                    return;
                try {
                    var version = b2bapis.b2bcontrol.getFirmwareVersion();
                    version != null && context != null && context.setResult(version);
                }
                catch (e) {
                    error != null && error.setError(9031, "[Tizen]: getFirmwareVersion exception " + e.message);
                }
                context != null && context.setError(error);
                callback(context);
            };
            IImpl_SDK_FirmwareSetup_Tizen.prototype.promise_getFirmwareVersion = function (error, context, callback) {
            };
            return IImpl_SDK_FirmwareSetup_Tizen;
        }());
        nm_transversalservices.IImpl_SDK_FirmwareSetup_Tizen = IImpl_SDK_FirmwareSetup_Tizen;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_FirmwareSetup_Tizen.js.map