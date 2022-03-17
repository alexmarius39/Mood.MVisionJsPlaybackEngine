"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_SDK_TimeSetup_SDKClient = (function () {
        function IImpl_SDK_TimeSetup_SDKClient(owner) {
            this._owner = owner;
        }
        IImpl_SDK_TimeSetup_SDKClient.prototype.setTimeConvertor = function (aTimeZoneConvertor) {
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.setCrtDateTime = function (crtDateTime, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "callId": callId,
                "crtTime": crtDateTime
            };
            this._owner._socket.emit('sdk.timesetup.set-date', params);
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.promise_setCrtDateTime = function (crtDateTime, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.getCrtDateTime = function (error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "callId": callId,
            };
            this._owner._socket.emit('sdk.timesetup.get-date', params);
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.promise_getCrtDateTime = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.getGoodCrtDateTime = function (error, context, callback) {
            return this._owner.getGoodCrtDateTime(error, context, callback);
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.getSyncGoodCrtDateTime = function (error, context) {
            return this._owner.getSyncGoodCrtDateTime(error, context);
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.setNTPServer = function (strServerUrl, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "callId": callId,
                "ntpServer": strServerUrl
            };
            this._owner._socket.emit('sdk.timesetup.set-ntpserver', params);
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.getNTPServer = function (error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "callId": callId,
            };
            this._owner._socket.emit('sdk.timesetup.get-ntpserver', params);
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.setUseNTP = function (bUse, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "callId": callId,
                "use": bUse
            };
            this._owner._socket.emit('sdk.timesetup.set-usentp', params);
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.getUseNTP = function (error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "callId": callId
            };
            this._owner._socket.emit('sdk.timesetup.get-usentp', params);
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.setTimeZone = function (crtTimeZone, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "callId": callId,
                "timeZone": crtTimeZone,
            };
            this._owner._socket.emit('sdk.timesetup.set-timezone', params);
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.promise_setTimeZone = function (crtTimeZone, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.getTimeZone = function (error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "callId": callId,
            };
            this._owner._socket.emit('sdk.timesetup.get-timezone', params);
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.promise_getTimeZone = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.getTimeZoneOffset = function (aTimeZone, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "callId": callId,
                "timeZone": aTimeZone
            };
            this._owner._socket.emit('sdk.timesetup.get-timezoneoffset', params);
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.getTimeZoneList = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKClient.prototype.promise_getTimeZoneList = function (error, context, callback) {
        };
        return IImpl_SDK_TimeSetup_SDKClient;
    }());
    rm_transversalservices.IImpl_SDK_TimeSetup_SDKClient = IImpl_SDK_TimeSetup_SDKClient;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_TimeSetup_SDKClient.js.map