define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_TimeSetup_StandaloneBrowser = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_TimeSetup_StandaloneBrowser(owner) {
                this._owner = owner;
            }
            //--------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.setTimeConvertor = function (aTimeZoneConvertor) {
            };
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.setNTPServer = function (strServerUrl, error, context, callback) {
                context != null && context.setError(error);
                callback != null && callback(context);
            };
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.getNTPServer = function (error, context, callback) {
                if (context != null) {
                    context.setResult("");
                    context.setError(error);
                }
                callback != null && callback(context);
            };
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.setUseNTP = function (bUse, error, context, callback) {
                context.setError(error);
                callback != null && callback(context);
            };
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.getUseNTP = function (error, context, callback) {
                context.setError(error);
                callback != null && callback(context);
            };
            //---------------------------------------
            //             CrtTime set/get
            //---------------------------------------
            //--------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.setCrtDateTime = function (crtDateTime, error, context, callback) {
            };
            //--------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.promise_setCrtDateTime = function (crtDateTime, error, context, callback) {
            };
            //--------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.getCrtDateTime = function (error, context, callback) {
            };
            //---------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.promise_getCrtDateTime = function (error, context, callback) {
            };
            //--------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.getGoodCrtDateTime = function (error, context, callback) {
                return this._owner.getGoodCrtDateTime(error, context, callback);
            };
            //--------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.getSyncGoodCrtDateTime = function (error, context) {
                return this._owner.getSyncGoodCrtDateTime(error, context);
            };
            //---------------------------------------
            //             TimeZone set/get
            //---------------------------------------
            //---------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.setTimeZone = function (crtTimeZone, error, context, callback) {
            };
            //----------------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.promise_setTimeZone = function (crtTimeZone, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.getTimeZone = function (error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.promise_getTimeZone = function (error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.getTimeZoneOffset = function (aTimeZone, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.getTimeZoneList = function (error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_TimeSetup_StandaloneBrowser.prototype.promise_getTimeZoneList = function (error, context, callback) {
            };
            return IImpl_SDK_TimeSetup_StandaloneBrowser;
        }());
        nm_transversalservices.IImpl_SDK_TimeSetup_StandaloneBrowser = IImpl_SDK_TimeSetup_StandaloneBrowser;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_TimeSetup_StandaloneBrowser.js.map