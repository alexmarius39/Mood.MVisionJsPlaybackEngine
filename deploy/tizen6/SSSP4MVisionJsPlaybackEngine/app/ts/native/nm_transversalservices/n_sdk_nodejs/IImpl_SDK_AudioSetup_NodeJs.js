define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_AudioSetup_NodeJs = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_AudioSetup_NodeJs(owner) {
                this._owner = owner;
            }
            //-----------------------------
            //  set/get Volume Level
            //-----------------------------
            //----------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.setVolumeLevel = function (audioProperties, error, context, callback) {
                var volumeLevel = null;
                var loudness = null;
                try {
                    volumeLevel = audioProperties.getVolumeLevel();
                    loudness = require('loudness');
                }
                catch (e) {
                    error != null && error.setError(9012, "[Node.js]: setVolumeLevel exception " + e.message);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                    return;
                }
                if (loudness != null && typeof loudness.setVolume === "function" && volumeLevel != null) {
                    if (volumeLevel === 0) {
                        volumeLevel = 0.1; // workaround to set volume to 0 on Windows. 0 value is not working
                    }
                    loudness.setVolume(volumeLevel)
                        .then(function () { })
                        .catch(function (err) {
                        error != null && error.setError(9013, "[Node.js]: setVolumeLevel error " + err.message);
                    })
                        .finally(function () {
                        context != null && context.setError(error);
                        callback != null && callback(context);
                    });
                }
                else {
                    error != null && error.setError(9014, "[Node.js]: setVolumeLevel error on loudness");
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_setVolumeLevel = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.getVolumeLevel = function (error, context, callback) {
                if (callback == null)
                    return;
                var loudness = null;
                try {
                    loudness = require('loudness');
                }
                catch (e) {
                    error != null && error.setError(9012, "[Node.js]: getVolumeLevel exception " + e.message);
                    context != null && context.setError(error);
                    return callback(context);
                }
                if (loudness != null && typeof loudness.getVolume === "function") {
                    loudness.getVolume()
                        .then(function (volumeLevel) {
                        if (volumeLevel == null || isNaN(volumeLevel)) {
                            error != null && error.setError(9011, "[Node.js]: getVolumeLevel error " + volumeLevel);
                        }
                        else {
                            context != null && context.setResult(volumeLevel.toString());
                        }
                    })
                        .catch(function (err) {
                        error != null && error.setError(9011, "[Node.js]: getVolumeLevel error " + err.message);
                    })
                        .finally(function () {
                        context != null && context.setError(error);
                        callback(context);
                    });
                }
                else {
                    error != null && error.setError(9014, "[Node.js]: getVolumeLevel error on loudness");
                    context != null && context.setError(error);
                    callback(context);
                }
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_getVolumeLevel = function (error, context, callback) {
            };
            //-----------------------------
            //  set/get Mute
            //-----------------------------
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.setMute = function (soundProperties, error, context, callback) {
                var loudness = null;
                var isMute = null;
                try {
                    isMute = soundProperties.isMute();
                    loudness = require('loudness');
                }
                catch (e) {
                    error != null && error.setError(9012, "[Node.js]: setMute exception " + e.message);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                    return;
                }
                if (loudness != null && typeof loudness.setMuted === "function" && isMute != null) {
                    loudness.setMuted(isMute)
                        .then(function () { })
                        .catch(function (err) {
                        error != null && error.setError(9015, "[Node.js]: setMute error " + err.message);
                    })
                        .finally(function () {
                        context != null && context.setError(error);
                        callback != null && callback(context);
                    });
                }
                else {
                    error != null && error.setError(9014, "[Node.js]: setMute error on loudness");
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_setMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.getMute = function (audioProperties, error, context, callback) {
                if (callback == null)
                    return;
                var loudness = null;
                try {
                    loudness = require('loudness');
                }
                catch (e) {
                    error != null && error.setError(9012, "[Node.js]: getMute exception " + e.message);
                    context != null && context.setError(error);
                    return callback(context);
                }
                if (loudness != null && typeof loudness.getMuted === "function") {
                    loudness.getMuted()
                        .then(function (muted) {
                        context != null && context.setBoolResult(muted);
                    })
                        .catch(function (err) {
                        error != null && error.setError(9016, "[Node.js]: getMute error " + err.message);
                    })
                        .finally(function () {
                        context != null && context.setError(error);
                        callback(context);
                    });
                }
                else {
                    error != null && error.setError(9014, "[Node.js]: getMute error on loudness");
                    context != null && context.setError(error);
                    callback(context);
                }
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_getMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Sound Mode
            //-----------------------------
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.getSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_getSoundMode = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Output Speaker 
            //-----------------------------
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  get/set Digital Audio Input Mode
            //-----------------------------
            //-------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.setDigitalAudioInputMode = function (inputSourceList, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_setDigitalAudioInputModes = function (inputSourceList, error, context, callback) {
            };
            //-------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.getDigitalAudioInputMode = function (error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_NodeJs.prototype.promise_getDigitalAudioInputModes = function (error, context, callback) {
            };
            return IImpl_SDK_AudioSetup_NodeJs;
        }());
        nm_transversalservices.IImpl_SDK_AudioSetup_NodeJs = IImpl_SDK_AudioSetup_NodeJs;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_AudioSetup_NodeJs.js.map