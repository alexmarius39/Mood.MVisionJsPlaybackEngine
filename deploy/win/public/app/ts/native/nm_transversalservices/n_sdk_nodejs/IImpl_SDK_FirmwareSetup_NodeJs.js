define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_FirmwareSetup_NodeJs = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_FirmwareSetup_NodeJs(owner) {
                this._owner = owner;
            }
            //-------------------------------------
            //   download Firmware
            //-------------------------------------   
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_NodeJs.prototype.downloadFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_NodeJs.prototype.promise_downloadFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------
            //   upgrade Firmware
            //-------------------------------------   
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_NodeJs.prototype.upgradeFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_NodeJs.prototype.promise_upgradeFirmware = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_NodeJs.prototype.getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
            };
            //-------------------------------------   
            IImpl_SDK_FirmwareSetup_NodeJs.prototype.promise_getFirmwareUpgradeStatus = function (firmwareProperties, error, context, callback) {
            };
            IImpl_SDK_FirmwareSetup_NodeJs.prototype.getFirmwareVersion = function (error, context, callback) {
                if (callback == null)
                    return;
                var version = null;
                try {
                    var os = require("os");
                    version = os.version();
                }
                catch (e) {
                    error != null && error.setError(9090, "sdk:getFirmwareVersion error getting firmware version");
                    version = null;
                }
                if (version != null) {
                    context != null && context.setResult(version);
                }
                context != null && context.setError(error);
                callback(context);
            };
            IImpl_SDK_FirmwareSetup_NodeJs.prototype.promise_getFirmwareVersion = function (error, context, callback) {
            };
            return IImpl_SDK_FirmwareSetup_NodeJs;
        }());
        nm_transversalservices.IImpl_SDK_FirmwareSetup_NodeJs = IImpl_SDK_FirmwareSetup_NodeJs;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_FirmwareSetup_NodeJs.js.map