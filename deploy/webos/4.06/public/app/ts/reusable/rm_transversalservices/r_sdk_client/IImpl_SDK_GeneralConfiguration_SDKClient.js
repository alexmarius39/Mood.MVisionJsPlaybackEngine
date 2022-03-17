define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_GeneralConfiguration_SDKClient = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_GeneralConfiguration_SDKClient(owner) {
                this._owner = owner;
            }
            //-------------------------------------
            //     clear Cache 
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.clearChache = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_clearCache = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set Screen Properties
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.setScreenProperties = function (newScreenProperties, error, context, callback) {
                var callId = this._owner.addCallback(context, callback);
                var params = {
                    "callId": callId,
                    "screenProperties": newScreenProperties
                };
                this._owner._socket.emit('sdk.generalconfiguration.set-screenproperties', params);
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_setScreenProperties = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.getScreenProperties = function (error, context, callback) {
                var callId = this._owner.addCallback(context, callback);
                var params = {
                    "callId": callId,
                };
                this._owner._socket.emit('sdk.generalconfiguration.get-screenproperties', params);
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_getScreenProperties = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set Screen Mode
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.setScreenMode = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_setScreenMode = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.getScreenMode = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_getScreenMode = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set OSD Languages
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.setOSDLanguages = function (osdLanguages, error, context, callback) {
                var callId = this._owner.addCallback(context, callback);
                var params = {
                    "callId": callId,
                    "languages": osdLanguages
                };
                this._owner._socket.emit('sdk.generalconfiguration.set-language', params);
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_setOsdLanguages = function (crtDateTime, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.getOSDLanguages = function (error, context, callback) {
                var callId = this._owner.addCallback(context, callback);
                var params = {
                    "callId": callId,
                };
                this._owner._socket.emit('sdk.generalconfiguration.get-language', params);
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_getOsdLanguages = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set OSD Lock
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.setOSDLock = function (osdLock, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_setOsdLock = function (osdLock, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.getOSDLock = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_getOSDLock = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set VirtualKeybordLanguages
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.setVirtualKeybordLanguages = function (virtKeyboardLanguages, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_setVirtualKeyboardLanguages = function (virtKeyboardLanguages, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.getVirtualKeyboardLanguages = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_getVirtualKeyboardLanguages = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.getUpTime = function (error, context, callback) {
                var callId = this._owner.addCallback(context, callback);
                var params = {
                    "callId": callId,
                };
                this._owner._socket.emit('sdk.generalconfiguration.get-uptime', params);
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_getUpTime = function (error, context, callback) {
            };
            //--------------------------------
            //     get/set USB Lock
            //--------------------------------
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.setUSBLock = function (lockUsb, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_getUSB = function (lockUsb, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.getUSBLock = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_setUSBLock = function (error, context, callback) {
            };
            //--------------------------------
            //     get/set General Property
            //--------------------------------
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.setGeneralProperty = function (property, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_setGeneralProperty = function (property, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.getGeneralProperty = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_SDKClient.prototype.promise_getGeneralProperty = function (error, context, callback) {
            };
            return IImpl_SDK_GeneralConfiguration_SDKClient;
        }());
        rm_transversalservices.IImpl_SDK_GeneralConfiguration_SDKClient = IImpl_SDK_GeneralConfiguration_SDKClient;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_GeneralConfiguration_SDKClient.js.map