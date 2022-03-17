"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_AudioSetup_Tizen = (function () {
        function IImpl_SDK_AudioSetup_Tizen(owner) {
            this._owner = owner;
        }
        IImpl_SDK_AudioSetup_Tizen.prototype.setVolumeLevel = function (audioProperties, error, context, callback) {
            try {
                tizen.tvaudiocontrol.setVolume(audioProperties.getVolumeLevel());
            }
            catch (err) {
                error != null && error.setError(9012, "[Tizen]: setVolumeLevel exception " + err.message);
            }
            context != null && context.setError(error);
            callback != null && callback(context);
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.promise_setVolumeLevel = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.getVolumeLevel = function (error, context, callback) {
            if (callback == null)
                return;
            try {
                var volumeLevel = tizen.tvaudiocontrol.getVolume();
                volumeLevel != null && context != null && context.setResult(volumeLevel.toString());
            }
            catch (err) {
                error != null && error.setError(9011, "[Tizen]: getVolumeLevel exception " + err.message);
            }
            context != null && context.setError(error);
            callback(context);
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.promise_getVolumeLevel = function (error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.setMute = function (soundProperties, error, context, callback) {
            try {
                tizen.tvaudiocontrol.setMute(soundProperties.isMute());
            }
            catch (err) {
                error != null && error.setError(9017, "[Tizen]: setMute exception " + err.message);
            }
            context != null && context.setError(error);
            callback != null && callback(context);
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.promise_setMute = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.getMute = function (audioProperties, error, context, callback) {
            if (callback == null)
                return;
            try {
                var isMute = tizen.tvaudiocontrol.isMute();
                isMute != null && context != null && context.setBoolResult(isMute);
            }
            catch (err) {
                error != null && error.setError(9018, "[Tizen]: getMute exception " + err.message);
            }
            context != null && context.setError(error);
            callback(context);
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.promise_getMute = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.setSoundMode = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.promise_setSoundMode = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.getSoundMode = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.promise_getSoundMode = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.setSoundSpeaker = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.promise_setSoundSpeaker = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.getSoundSpeaker = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.promise_getSoundSpeaker = function (soundProperties, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.setDigitalAudioInputMode = function (inputSourceList, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.promise_setDigitalAudioInputModes = function (inputSourceList, error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.getDigitalAudioInputMode = function (error, context, callback) {
        };
        IImpl_SDK_AudioSetup_Tizen.prototype.promise_getDigitalAudioInputModes = function (error, context, callback) {
        };
        return IImpl_SDK_AudioSetup_Tizen;
    }());
    nm_transversalservices.IImpl_SDK_AudioSetup_Tizen = IImpl_SDK_AudioSetup_Tizen;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_AudioSetup_Tizen.js.map