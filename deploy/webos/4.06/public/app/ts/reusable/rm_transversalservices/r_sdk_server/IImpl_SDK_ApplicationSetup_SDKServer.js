define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_ApplicationSetup_SDKServer = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_ApplicationSetup_SDKServer(owner) {
                this._owner = owner;
            }
            //---------------------------------
            // Install / Uninstall Application 
            //---------------------------------
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKServer.prototype.installApplication = function (appServerProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKServer.prototype.uninstallApplication = function (appServerProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKServer.prototype.getAppProperties = function (appInstallProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKServer.prototype.setAppProperties = function (appServerProperties, error, context, callback) {
            };
            //-----------------------------
            // AppServer get/set Properties 
            //-----------------------------
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKServer.prototype.getAppServerProperties = function (appServerProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKServer.prototype.setAppServerProperties = function (appServerProperties, error, context, callback) {
            };
            return IImpl_SDK_ApplicationSetup_SDKServer;
        }());
        rm_transversalservices.IImpl_SDK_ApplicationSetup_SDKServer = IImpl_SDK_ApplicationSetup_SDKServer;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_ApplicationSetup_SDKServer.js.map