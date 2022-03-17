define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_GeneralConfiguration_Tizen = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_GeneralConfiguration_Tizen(owner) {
                this._owner = owner;
            }
            //-------------------------------------
            //     clear Cache 
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.clearChache = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_clearCache = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set Screen Properties
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.setScreenProperties = function (newScreenProperties, error, context, callback) {
                if (context != null) {
                    context.setBoolResult(false);
                    context.setError(error);
                }
                callback != null && callback(context);
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_setScreenProperties = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.getScreenProperties = function (error, context, callback) {
                if (callback == null)
                    return;
                function onDisplay(displayData) {
                    if (displayData != null && displayData.brightness != null) {
                        context != null && context.setIntResult(displayData.brightness * 100);
                    }
                    else {
                        error != null && error.setError(9093, "[Tizen]: getScreenProperties error");
                    }
                    context != null && context.setError(error);
                    callback(context);
                }
                function onDisplayError(e) {
                    error != null && error.setError(9096, "[Tizen]: getScreenProperties error " + e.message);
                    context != null && context.setError(error);
                    callback(context);
                }
                try {
                    tizen.systeminfo.getPropertyValue('DISPLAY', onDisplay, onDisplayError);
                }
                catch (e) {
                    error != null && error.setError(9092, "[Tizen]: getScreenProperties exception " + e.message);
                    context != null && context.setError(error);
                    callback(context);
                }
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_getScreenProperties = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set Screen Mode
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.setScreenMode = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_setScreenMode = function (newScreenProperties, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.getScreenMode = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_getScreenMode = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set OSD Languages
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.setOSDLanguages = function (osdLanguages, error, context, callback) {
                if (osdLanguages.length === 0) {
                    context != null && context.setError(error);
                    callback != null && callback(context);
                    return;
                }
                var b2bapisVersion = null;
                try {
                    b2bapisVersion = b2bapis.b2bcontrol.getVersion();
                }
                catch (e) {
                    error != null && error.setError(9043, "[Tizen]: setOSDLanguages exception " + e.message);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                    return;
                }
                if (b2bapisVersion != null) {
                    if (b2bapisVersion >= "1.9") {
                        var onSetLanguageSuccess = function (val) {
                            context != null && context.setError(error);
                            callback != null && callback(context);
                        };
                        var onSetLanguageError = function (err) {
                            error != null && error.setError(9044, "[Tizen]: setOSDLanguages error " + err.name);
                            context != null && context.setError(error);
                            callback != null && callback(context);
                        };
                        try {
                            var strLanguage = osdLanguages[0];
                            b2bapis.b2bcontrol.setLanguage(strLanguage, onSetLanguageSuccess, onSetLanguageError);
                        }
                        catch (e) {
                            error != null && error.setError(9045, "[Tizen]: setOSDLanguages exception " + e.message);
                            context != null && context.setError(error);
                            callback != null && callback(context);
                        }
                    }
                    else {
                        if (context != null) {
                            context.setBoolResult(false);
                            context.setError(error);
                        }
                        callback != null && callback(context);
                    }
                }
                else {
                    error != null && error.setError(9043, "[Tizen]: setOSDLanguages b2bapis.b2bcontrol.getVersion is null");
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_setOsdLanguages = function (crtDateTime, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.getOSDLanguages = function (error, context, callback) {
                if (callback == null)
                    return;
                var OSDLanguage = null;
                var b2bapisVersion = null;
                try {
                    b2bapisVersion = b2bapis.b2bcontrol.getVersion();
                    if (b2bapisVersion >= "1.9") {
                        OSDLanguage = b2bapis.b2bcontrol.getLanguage().toString();
                    }
                }
                catch (e) { }
                if (OSDLanguage != null && OSDLanguage.length > 0) {
                    if (context != null) {
                        context.setResult(OSDLanguage);
                        context.setError(error);
                    }
                    return callback(context);
                }
                function onLocale(localeInfo) {
                    if (localeInfo != null && localeInfo.language != null) {
                        context != null && context.setResult(localeInfo.language);
                    }
                    else {
                        error != null && error.setError(9044, "[Tizen]: getOSDLanguages systemLocale error");
                    }
                    context != null && context.setError(error);
                    callback(context);
                }
                function onLocaleError(e) {
                    error != null && error.setError(9044, "[Tizen]: getOSDLanguages systemLocale error " + e.message);
                    context != null && context.setError(error);
                    callback(context);
                }
                try {
                    tizen.systeminfo.getPropertyValue('LOCALE', onLocale, onLocaleError);
                }
                catch (e) {
                    error != null && error.setError(9045, "[Tizen]: getOSDLanguages exception " + e.message);
                    context != null && context.setError(error);
                    callback(context);
                }
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_getOsdLanguages = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set OSD Lock
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.setOSDLock = function (osdLock, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_setOsdLock = function (osdLock, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.getOSDLock = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_getOSDLock = function (error, context, callback) {
            };
            //-------------------------------------
            //     get/set VirtualKeybordLanguages
            //-------------------------------------
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.setVirtualKeybordLanguages = function (virtKeyboardLanguages, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_setVirtualKeyboardLanguages = function (virtKeyboardLanguages, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.getVirtualKeyboardLanguages = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_getVirtualKeyboardLanguages = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.getUpTime = function (error, context, callback) {
                if (callback == null)
                    return;
                try {
                    var upTime = b2bapis.b2bcontrol.getSystemUpTime() / 60; // minutes
                    upTime != null && context != null && context.setIntResult(Math.floor(upTime));
                }
                catch (err) {
                    error != null && error.setError(9093, "[Tizen] getUpTime error " + err.message);
                }
                context != null && context.setError(error);
                callback(context);
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_getUpTime = function (error, context, callback) {
            };
            //--------------------------------
            //     get/set USB Lock
            //--------------------------------
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.setUSBLock = function (lockUsb, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_getUSB = function (lockUsb, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.getUSBLock = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_setUSBLock = function (error, context, callback) {
            };
            //--------------------------------
            //     get/set General Property
            //--------------------------------
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.setGeneralProperty = function (property, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_setGeneralProperty = function (property, error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.getGeneralProperty = function (error, context, callback) {
            };
            IImpl_SDK_GeneralConfiguration_Tizen.prototype.promise_getGeneralProperty = function (error, context, callback) {
            };
            return IImpl_SDK_GeneralConfiguration_Tizen;
        }());
        nm_transversalservices.IImpl_SDK_GeneralConfiguration_Tizen = IImpl_SDK_GeneralConfiguration_Tizen;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_GeneralConfiguration_Tizen.js.map