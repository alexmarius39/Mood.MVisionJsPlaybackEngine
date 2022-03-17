"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_SDK_GeneralConfiguration_SDKConnector = (function () {
        function IImpl_SDK_GeneralConfiguration_SDKConnector(owner) {
            this._owner = owner;
        }
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.clearChache = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_clearCache = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.setScreenProperties = function (newScreenProperties, error, context, callback) {
            var cb = function (ctx) {
                this._owner._iNotify_SDKGeneralConfiguration.notify_setScreenProperties(newScreenProperties, error, context, callback);
            };
            this._owner._aSDKJsTV._iSDKGeneralConfiguration.setScreenProperties(newScreenProperties, error, context, cb);
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_setScreenProperties = function (newScreenProperties, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.getScreenProperties = function (error, context, callback) {
            var cb = function (ctx) {
                this._owner._iNotify_SDKGeneralConfiguration.notify_getScreenProperties(error, context, callback);
            };
            this._owner._aSDKJsTV._iSDKGeneralConfiguration.getScreenProperties(error, context, cb);
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_getScreenProperties = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.setScreenMode = function (newScreenProperties, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_setScreenMode = function (newScreenProperties, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.getScreenMode = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_getScreenMode = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.setOSDLanguages = function (osdLanguages, error, context, callback) {
            var owner = this._owner;
            var callback2 = function (ctx) {
                console.log(ctx.getResult);
                owner._iNotify_SDKGeneralConfiguration.notify_setOSDLanguages(osdLanguages, error, context, callback);
            };
            owner._aSDKJsTV._iSDKGeneralConfiguration.setOSDLanguages(osdLanguages, error, context, callback2);
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_setOsdLanguages = function (crtDateTime, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.getOSDLanguages = function (error, context, callback) {
            var owner = this._owner;
            var callback2 = function (ctx) {
                console.log(ctx.getResult);
                owner._iNotify_SDKGeneralConfiguration.notify_getOSDLanguages(error, context, callback);
            };
            owner._aSDKJsTV._iSDKGeneralConfiguration.getOSDLanguages(error, context, callback2);
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_getOsdLanguages = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.setOSDLock = function (osdLock, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_setOsdLock = function (osdLock, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.getOSDLock = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_getOSDLock = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.setVirtualKeybordLanguages = function (virtKeyboardLanguages, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_setVirtualKeyboardLanguages = function (virtKeyboardLanguages, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.getVirtualKeyboardLanguages = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_getVirtualKeyboardLanguages = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.getUpTime = function (error, context, callback) {
            var owner = this._owner;
            var callback2 = function (ctx) {
                console.log(ctx.getResult);
                owner._iNotify_SDKGeneralConfiguration.notify_getUpTime(error, context, callback);
            };
            owner._aSDKJsTV._iSDKGeneralConfiguration.getUpTime(error, context, callback2);
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_getUpTime = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.setUSBLock = function (lockUsb, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_getUSB = function (lockUsb, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.getUSBLock = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_setUSBLock = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.setGeneralProperty = function (property, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_setGeneralProperty = function (property, error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.getGeneralProperty = function (error, context, callback) {
        };
        IImpl_SDK_GeneralConfiguration_SDKConnector.prototype.promise_getGeneralProperty = function (error, context, callback) {
        };
        return IImpl_SDK_GeneralConfiguration_SDKConnector;
    }());
    rm_transversalservices.IImpl_SDK_GeneralConfiguration_SDKConnector = IImpl_SDK_GeneralConfiguration_SDKConnector;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_GeneralConfiguration_SDKConnector.js.map