define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_ApplicationSetup_NodeJs = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_ApplicationSetup_NodeJs(owner) {
                this._owner = owner;
            }
            //---------------------------------
            // Install / Uninstall Application 
            //---------------------------------
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_NodeJs.prototype.installApplication = function (appServerProperties, error, context, callback) {
                console.log("Installation + Complete");
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null)
                    callback(context);
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_NodeJs.prototype.uninstallApplication = function (appServerProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_NodeJs.prototype.getAppProperties = function (appInstallProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_NodeJs.prototype.setAppProperties = function (appServerProperties, error, context, callback) {
            };
            //-----------------------------
            // AppServer get/set Properties 
            //-----------------------------
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_NodeJs.prototype.getAppServerProperties = function (appServerProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_NodeJs.prototype.setAppServerProperties = function (appServerProperties, error, context, callback) {
            };
            return IImpl_SDK_ApplicationSetup_NodeJs;
        }());
        nm_transversalservices.IImpl_SDK_ApplicationSetup_NodeJs = IImpl_SDK_ApplicationSetup_NodeJs;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_ApplicationSetup_NodeJs.js.map