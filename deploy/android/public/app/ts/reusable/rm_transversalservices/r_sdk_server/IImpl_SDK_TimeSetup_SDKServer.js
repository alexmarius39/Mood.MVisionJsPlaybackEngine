define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_TimeSetup_SDKServer = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_TimeSetup_SDKServer(owner) {
                this._owner = owner;
            }
            //--------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.setTimeConvertor = function (aTimeZoneConvertor) {
            };
            //---------------------------------------
            //             CrtTime set/get
            //---------------------------------------
            //--------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.setCrtDateTime = function (crtDateTime, error, context, callback) {
                this._owner._aTargetSDK._iSDKTimeSetup.setCrtDateTime(crtDateTime, error, context, callback);
            };
            //--------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.promise_setCrtDateTime = function (crtDateTime, error, context, callback) {
            };
            //--------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.getCrtDateTime = function (error, context, callback) {
                this._owner._aTargetSDK._iSDKTimeSetup.getCrtDateTime(error, context, callback);
            };
            //---------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.promise_getCrtDateTime = function (error, context, callback) {
            };
            //--------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.getGoodCrtDateTime = function (error, context, callback) {
                return this._owner.getGoodCrtDateTime(error, context, callback);
            };
            //--------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.getSyncGoodCrtDateTime = function (error, context) {
                return this._owner.getSyncGoodCrtDateTime(error, context);
            };
            //---------------------------------------
            //             TimeZone set/get
            //---------------------------------------
            //---------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.setNTPServer = function (strServerUrl, error, context, callback) {
                this._owner._aTargetSDK._iSDKTimeSetup.setNTPServer(strServerUrl, error, context, callback);
            };
            //---------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.getNTPServer = function (error, context, callback) {
                this._owner._aTargetSDK._iSDKTimeSetup.getNTPServer(error, context, callback);
            };
            //---------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.setUseNTP = function (bUse, error, context, callback) {
                this._owner._aTargetSDK._iSDKTimeSetup.setUseNTP(bUse, error, context, callback);
            };
            //---------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.getUseNTP = function (error, context, callback) {
                this._owner._aTargetSDK._iSDKTimeSetup.getUseNTP(error, context, callback);
            };
            //---------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.setTimeZone = function (crtTimeZone, error, context, callback) {
                this._owner._aTargetSDK._iSDKTimeSetup.setTimeZone(crtTimeZone, error, context, callback);
            };
            //----------------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.promise_setTimeZone = function (crtTimeZone, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.getTimeZone = function (error, context, callback) {
                this._owner._aTargetSDK._iSDKTimeSetup.getTimeZone(error, context, callback);
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.promise_getTimeZone = function (error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.getTimeZoneOffset = function (aTimeZone, error, context, callback) {
                this._owner._aTargetSDK._iSDKTimeSetup.getTimeZoneOffset(aTimeZone, error, context, callback);
            };
            //-------------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.getTimeZoneList = function (error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_TimeSetup_SDKServer.prototype.promise_getTimeZoneList = function (error, context, callback) {
            };
            return IImpl_SDK_TimeSetup_SDKServer;
        }());
        rm_transversalservices.IImpl_SDK_TimeSetup_SDKServer = IImpl_SDK_TimeSetup_SDKServer;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_TimeSetup_SDKServer.js.map