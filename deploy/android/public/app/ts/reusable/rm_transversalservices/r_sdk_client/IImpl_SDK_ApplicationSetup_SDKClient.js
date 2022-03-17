define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_SDK_ApplicationSetup_SDKClient = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_ApplicationSetup_SDKClient(owner) {
                this._owner = owner;
            }
            //---------------------------------
            // Install / Uninstall Application 
            //---------------------------------
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKClient.prototype.installApplication = function (appServerProperties, error, context, callback) {
                // to do
                console.log("Installation ... to do");
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKClient.prototype.uninstallApplication = function (appServerProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKClient.prototype.getAppProperties = function (appInstallProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKClient.prototype.setAppProperties = function (appServerProperties, error, context, callback) {
            };
            //-----------------------------
            // AppServer get/set Properties 
            //-----------------------------
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKClient.prototype.getAppServerProperties = function (appServerProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_SDKClient.prototype.setAppServerProperties = function (appServerProperties, error, context, callback) {
            };
            return IImpl_SDK_ApplicationSetup_SDKClient;
        }());
        rm_transversalservices.IImpl_SDK_ApplicationSetup_SDKClient = IImpl_SDK_ApplicationSetup_SDKClient;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_ApplicationSetup_SDKClient.js.map