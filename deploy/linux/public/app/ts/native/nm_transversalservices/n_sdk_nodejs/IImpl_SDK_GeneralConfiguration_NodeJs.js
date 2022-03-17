define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_GeneralConfiguration_NodeJs = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_GeneralConfiguration_NodeJs(owner) {
                this._owner = owner;
            }
            //-------------------------------------
            //     clear Cache 
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.clearChache = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_clearCache = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set Screen Properties
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.setScreenProperties = function (newScreenProperties, error, context, callback) {
                var brightnessLevel = null;
                var brightness = null;
                try {
                    brightness = require('brightness');
                    brightnessLevel = newScreenProperties.getBrightness() / 100;
                }
                catch (e) {
                    error != null && error.setError(9030, "[Node.js]: set brightness exception " + e.message);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                    return;
                }
                if (brightness != null && typeof brightness.set === "function") {
                    brightness.set(brightnessLevel)
                        .then(function () {
                    })
                        .catch(function (err) {
                        error != null && error.setError(9030, "[Node.js]: set brightness error " + err.message);
                    })
                        .finally(function () {
                        context != null && context.setError(error);
                        callback(context);
                    });
                }
                else {
                    error != null && error.setError(9030, "[Node.js]: error in setScreenProperties function");
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_setScreenProperties = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.getScreenProperties = function (error, context, callback) {
                if (callback == null)
                    return;
                var brightness = null;
                try {
                    brightness = require('brightness');
                }
                catch (e) {
                    error != null && error.setError(9031, "[Node.js]: getScreenProperties exception " + e.message);
                    context != null && context.setError(error);
                    return callback(context);
                }
                if (brightness != null && typeof brightness.get === "function") {
                    brightness.get()
                        .then(function (level) {
                        if (level == null || isNaN(level)) {
                            error != null && error.setError(9013, "[Node.js]: get brightness level error " + level);
                        }
                        else {
                            context != null && context.setIntResult(level * 100);
                        }
                    })
                        .catch(function (err) {
                        error != null && error.setError(9013, "[Node.js]: get brightness error " + err.message);
                    })
                        .finally(function () {
                        context != null && context.setError(error);
                        callback(context);
                    });
                }
                else {
                    error != null && error.setError(9030, "[Node.js]: error in getScreenProperties function");
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_getScreenProperties = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set Screen Mode
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.setScreenMode = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_setScreenMode = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.getScreenMode = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_getScreenMode = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set OSD Languages
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.setOSDLanguages = function (osdLanguages, error, context, callback) {
                if (context != null) {
                    context.setBoolResult(false);
                    context.setError(error);
                }
                callback && callback(context);
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_setOsdLanguages = function (crtDateTime, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.getOSDLanguages = function (error, context, callback) {
                if (callback == null)
                    return;
                var osLocale = null;
                try {
                    osLocale = require('os-locale');
                }
                catch (e) {
                    error != null && error.setError(9043, "[Node.js]: getOSDLanguages exception " + e.message);
                    context != null && context.setError(error);
                    return callback(context);
                }
                if (osLocale != null) {
                    osLocale(function (err, locale) {
                        if (err) {
                            error != null && error.setError(9043, "[Node.js]: getOSDLanguages error " + err.message);
                        }
                        else {
                            context != null && context.setResult(locale);
                        }
                        context != null && context.setError(error);
                        callback(context);
                    });
                }
                else {
                    error != null && error.setError(9043, "[Node.js]: error in getOSDLanguages function");
                    context != null && context.setError(error);
                    callback(context);
                }
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_getOsdLanguages = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set OSD Lock
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.setOSDLock = function (osdLock, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_setOsdLock = function (osdLock, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.getOSDLock = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_getOSDLock = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set VirtualKeybordLanguages
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.setVirtualKeybordLanguages = function (virtKeyboardLanguages, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_setVirtualKeyboardLanguages = function (virtKeyboardLanguages, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.getVirtualKeyboardLanguages = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_getVirtualKeyboardLanguages = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.getUpTime = function (error, context, callback) {
                if (callback == null)
                    return;
                try {
                    var os = require("os");
                    var upTime = os.uptime() / 60; // minutes
                    upTime != null && context != null && context.setIntResult(Math.floor(upTime));
                }
                catch (err) {
                    error != null && error.setError(9093, "[Node.js]: getUpTime error " + err.message);
                }
                context != null && context.setError(error);
                callback(context);
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_getUpTime = function (error, context, callback) {
            };
            //--------------------------------
            //     get/set USB Lock
            //--------------------------------
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.setUSBLock = function (lockUsb, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_getUSB = function (lockUsb, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.getUSBLock = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_setUSBLock = function (error, context, callback) {
            };
            //--------------------------------
            //     get/set General Property
            //--------------------------------
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.setGeneralProperty = function (property, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_setGeneralProperty = function (property, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.getGeneralProperty = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_NodeJs.prototype.promise_getGeneralProperty = function (error, context, callback) {
            };
            return IImpl_SDK_GeneralConfiguration_NodeJs;
        }());
        nm_transversalservices.IImpl_SDK_GeneralConfiguration_NodeJs = IImpl_SDK_GeneralConfiguration_NodeJs;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_GeneralConfiguration_NodeJs.js.map