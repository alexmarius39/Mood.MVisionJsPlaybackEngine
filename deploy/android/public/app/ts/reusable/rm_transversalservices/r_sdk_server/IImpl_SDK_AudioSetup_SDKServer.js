define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_AudioSetup_SDKServer = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_AudioSetup_SDKServer(owner) {
                this._owner = owner;
            }
            //-----------------------------
            //  set/get Volume Level
            //-----------------------------
            //----------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.setVolumeLevel = function (audioProperties, error, context, callback) {
                this._owner._aTargetSDK._iSDKAudioSetup.setVolumeLevel(audioProperties, error, context, callback);
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.promise_setVolumeLevel = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.getVolumeLevel = function (error, context, callback) {
                this._owner._aTargetSDK._iSDKAudioSetup.getVolumeLevel(error, context, callback);
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.promise_getVolumeLevel = function (error, context, callback) {
            };
            //-----------------------------
            //  set/get Mute
            //-----------------------------
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.setMute = function (soundProperties, error, context, callback) {
                this._owner._aTargetSDK._iSDKAudioSetup.setMute(soundProperties, error, context, callback);
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.promise_setMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.getMute = function (audioProperties, error, context, callback) {
                this._owner._aTargetSDK._iSDKAudioSetup.getMute(audioProperties, error, context, callback);
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.promise_getMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Sound Mode
            //-----------------------------
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.promise_setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.getSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.promise_getSoundMode = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Output Speaker 
            //-----------------------------
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.promise_setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.promise_getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  get/set Digital Audio Input Mode
            //-----------------------------
            //-------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.setDigitalAudioInputMode = function (inputSourceList, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.promise_setDigitalAudioInputModes = function (inputSourceList, error, context, callback) {
            };
            //-------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.getDigitalAudioInputMode = function (error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_AudioSetup_SDKServer.prototype.promise_getDigitalAudioInputModes = function (error, context, callback) {
            };
            return IImpl_SDK_AudioSetup_SDKServer;
        }());
        rm_transversalservices.IImpl_SDK_AudioSetup_SDKServer = IImpl_SDK_AudioSetup_SDKServer;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_AudioSetup_SDKServer.js.map