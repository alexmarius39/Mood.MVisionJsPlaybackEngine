define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_notifyAudioSetup_SDKConnector = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_notifyAudioSetup_SDKConnector(owner) {
                this._owner = owner;
            }
            //-----------------------------
            //  set/get Volume Level
            //-----------------------------
            //----------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_setVolumeLevel = function (audioProperties, error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_setVolumeLevel(audioProperties, error, context, callback);
            };
            //-----------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_promise_setVolumeLevel = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_getVolumeLevel = function (error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_getVolumeLevel(error, context, callback);
            };
            //-----------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_promise_getVolumeLevel = function (error, context, callback) {
            };
            //-----------------------------
            //  set/get Mute
            //-----------------------------
            //-----------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_setMute = function (soundProperties, error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_setMute(soundProperties, error, context, callback);
            };
            //-----------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_promise_setMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_getMute = function (audioProperties, error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_getMute(audioProperties, error, context, callback);
            };
            //--------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_promise_getMute = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Sound Mode
            //-----------------------------
            //--------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_promise_setSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_getSoundMode = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_promise_getSoundMode = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  set/get Output Speaker 
            //-----------------------------
            //--------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_promise_setSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_promise_getSoundSpeaker = function (soundProperties, error, context, callback) {
            };
            //-----------------------------
            //  get/set Digital Audio Input Mode
            //-----------------------------
            //-------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_setDigitalAudioInputMode = function (inputSourceList, error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_promise_setDigitalAudioInputModes = function (inputSourceList, error, context, callback) {
            };
            //-------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_getDigitalAudioInputMode = function (error, context, callback) {
            };
            //---------------------------------
            IImpl_SDK_notifyAudioSetup_SDKConnector.prototype.notify_promise_getDigitalAudioInputModes = function (error, context, callback) {
            };
            return IImpl_SDK_notifyAudioSetup_SDKConnector;
        }());
        rm_transversalservices.IImpl_SDK_notifyAudioSetup_SDKConnector = IImpl_SDK_notifyAudioSetup_SDKConnector;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_notifyAudioSetup_SDKConnector.js.map