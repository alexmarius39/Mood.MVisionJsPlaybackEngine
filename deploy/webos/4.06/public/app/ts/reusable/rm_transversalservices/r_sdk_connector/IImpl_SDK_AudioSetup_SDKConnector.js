define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_AudioSetup_SDKConnector = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_AudioSetup_SDKConnector(owner) {
                this._owner = owner;
            }
            //-----------------------------
            //  set/get Volume Level
            //-----------------------------
            //----------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.setVolumeLevel = function (audioProperties, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    owner._iNotify_SDKAudioSetup.notify_setVolumeLevel(audioProperties, error, context, callback);
                };
                owner._aSDKJsTV._iSDKAudioSetup.setVolumeLevel(audioProperties, error, context, callback2);
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.promise_setVolumeLevel = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.getVolumeLevel = function (error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    owner._iNotify_SDKAudioSetup.notify_getVolumeLevel(error, context, callback);
                };
                owner._aSDKJsTV._iSDKAudioSetup.getVolumeLevel(error, context, callback2);
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.promise_getVolumeLevel = function (error, context, callback) {
            };
            //-----------------------------
            //  set/get Mute
            //-----------------------------
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.setMute = function (soundProperties, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    owner._iNotify_SDKAudioSetup.notify_setMute(soundProperties, error, context, callback);
                };
                owner._aSDKJsTV._iSDKAudioSetup.setMute(soundProperties, error, context, callback2);
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.promise_setMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.getMute = function (audioProperties, error, context, callback) {
                var owner = this._owner;
                //-----------------
                var callback2 = function (ctx) {
                    owner._iNotify_SDKAudioSetup.notify_getVolumeLevel(error, context, callback);
                };
                owner._aSDKJsTV._iSDKAudioSetup.getVolumeLevel(error, context, callback2);
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.promise_getMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Sound Mode
            //-----------------------------
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.promise_setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.getSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.promise_getSoundMode = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Output Speaker 
            //-----------------------------
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.promise_setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.promise_getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  get/set Digital Audio Input Mode
            //-----------------------------
            //-------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.setDigitalAudioInputMode = function (inputSourceList, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.promise_setDigitalAudioInputModes = function (inputSourceList, error, context, callback) {
            };
            //-------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.getDigitalAudioInputMode = function (error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_SDKConnector.prototype.promise_getDigitalAudioInputModes = function (error, context, callback) {
            };
            return IImpl_SDK_AudioSetup_SDKConnector;
        }());
        rm_transversalservices.IImpl_SDK_AudioSetup_SDKConnector = IImpl_SDK_AudioSetup_SDKConnector;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_AudioSetup_SDKConnector.js.map