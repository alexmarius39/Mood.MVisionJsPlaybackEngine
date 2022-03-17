"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_SDK_TimeSetup_JsTV_R = (function () {
        function IImpl_SDK_TimeSetup_JsTV_R(owner) {
            this._owner = owner;
        }
        IImpl_SDK_TimeSetup_JsTV_R.prototype.setTimeConvertor = function (aTimeZoneConvertor) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.setCrtDateTime = function (crtDateTime, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.promise_setCrtDateTime = function (crtDateTime, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.getCrtDateTime = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.promise_getCrtDateTime = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.getGoodCrtDateTime = function (error, context, callback) {
            return this._owner.getGoodCrtDateTime(error, context, callback);
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.getSyncGoodCrtDateTime = function (error, context) {
            return this._owner.getSyncGoodCrtDateTime(error, context);
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.setNTPServer = function (strServerUrl, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.getNTPServer = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.setUseNTP = function (bUse, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.getUseNTP = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.setTimeZone = function (crtTimeZone, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.promise_setTimeZone = function (crtTimeZone, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.getTimeZone = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.promise_getTimeZone = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.getTimeZoneOffset = function (aTimeZone, error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.getTimeZoneList = function (error, context, callback) {
        };
        IImpl_SDK_TimeSetup_JsTV_R.prototype.promise_getTimeZoneList = function (error, context, callback) {
        };
        return IImpl_SDK_TimeSetup_JsTV_R;
    }());
    rm_transversalservices.IImpl_SDK_TimeSetup_JsTV_R = IImpl_SDK_TimeSetup_JsTV_R;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_TimeSetup_JsTV_R.js.map