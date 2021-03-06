define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_notifyTimeSetup_SDKConnector = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_notifyTimeSetup_SDKConnector(owner) {
                this._owner = owner;
            }
            //---------------------------------------
            //             CrtTime set/get
            //---------------------------------------
            //--------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_setCrtDateTime = function (crtDateTime, error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_setCrtDateTime(crtDateTime, error, context, callback);
            };
            //--------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_promise_setCrtDateTime = function (crtDateTime, error, context, callback) {
            };
            //--------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_getCrtDateTime = function (error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getCrtDateTime(error, context, callback);
            };
            //---------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_promise_getCrtDateTime = function (error, context, callback) {
            };
            //--------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_getGoodCrtDateTime = function (error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getGoodCrtDateTime(error, context, callback);
            };
            //---------------------------------------
            //             TimeZone set/get
            //---------------------------------------
            //---------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_setTimeZone = function (crtTimeZone, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_promise_setTimeZone = function (crtTimeZone, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_getTimeZone = function (error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_promise_getTimeZone = function (error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_getTimeZoneOffset = function (aTimeZone, error, context, callback) {
                this._owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getTimeZoneOffset(aTimeZone, error, context, callback);
            };
            //---------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_setNTPServer = function (strServerUrl, error, context, callback) {
            };
            //---------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_getNTPServer = function (error, context, callback) {
            };
            //---------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_setUseNTP = function (bUse, error, context, callback) {
            };
            //---------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_getUseNTP = function (error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_getTimeZoneList = function (error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_notifyTimeSetup_SDKConnector.prototype.notify_promise_getTimeZoneList = function (error, context, callback) {
            };
            return IImpl_SDK_notifyTimeSetup_SDKConnector;
        }());
        rm_transversalservices.IImpl_SDK_notifyTimeSetup_SDKConnector = IImpl_SDK_notifyTimeSetup_SDKConnector;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_notifyTimeSetup_SDKConnector.js.map