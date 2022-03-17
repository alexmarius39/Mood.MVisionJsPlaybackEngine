"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_SDK_TimeSetup_SDKConnector = (function () {
        function IImpl_SDK_TimeSetup_SDKConnector(owner) {
            this._owner = owner;
        }
        IImpl_SDK_TimeSetup_SDKConnector.prototype.setTimeConvertor = function (aTimeZoneConvertor) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.setCrtDateTime = function (crtDateTime, error, context, callback) {
            var owner = this._owner;
            var callback2 = function (ctx) {
                owner._iNotify_SDKTimeSetup.notify_setCrtDateTime(crtDateTime, error, context, callback);
            };
            owner._aSDKJsTV._iSDKTimeSetup.setCrtDateTime(crtDateTime, error, context, callback2);
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.promise_setCrtDateTime = function (crtDateTime, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.getCrtDateTime = function (error, context, callback) {
            var owner = this._owner;
            var callback2 = function (ctx) {
                owner._iNotify_SDKTimeSetup.notify_getCrtDateTime(error, context, callback);
            };
            owner._aSDKJsTV._iSDKTimeSetup.getCrtDateTime(error, context, callback2);
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.promise_getCrtDateTime = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.getGoodCrtDateTime = function (error, context, callback) {
            var owner = this._owner;
            var callback2 = function (ctx) {
                owner._iNotify_SDKTimeSetup.notify_getGoodCrtDateTime(error, context, callback);
            };
            owner._aSDKJsTV._iSDKTimeSetup.getGoodCrtDateTime(error, context, callback2);
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.getSyncGoodCrtDateTime = function (error, context) {
            return this._owner.getSyncGoodCrtDateTime(error, context);
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.setNTPServer = function (strServerUrl, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.getNTPServer = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.setUseNTP = function (bUse, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.getUseNTP = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.setTimeZone = function (crtTimeZone, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.promise_setTimeZone = function (crtTimeZone, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.getTimeZone = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.promise_getTimeZone = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.getTimeZoneOffset = function (aTimeZone, error, context, callback) {
            var owner = this._owner;
            var callback2 = function (ctx) {
                owner._iNotify_SDKTimeSetup.notify_getTimeZoneOffset(aTimeZone, error, context, callback);
            };
            owner._aSDKJsTV._iSDKTimeSetup.getTimeZoneOffset(aTimeZone, error, context, callback2);
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.getTimeZoneList = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_SDKConnector.prototype.promise_getTimeZoneList = function (error, context, callback) {
        };
        return IImpl_SDK_TimeSetup_SDKConnector;
    }());
    rm_transversalservices.IImpl_SDK_TimeSetup_SDKConnector = IImpl_SDK_TimeSetup_SDKConnector;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_TimeSetup_SDKConnector.js.map