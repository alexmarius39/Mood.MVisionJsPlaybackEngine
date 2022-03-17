"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_coreservices;
(function (rm_coreservices) {
    var IImpl_RenderingController_Config = (function () {
        function IImpl_RenderingController_Config(owner) {
            this._owner = owner;
        }
        IImpl_RenderingController_Config.prototype.setActivityLogService = function (aActivityLogService) {
            return this._owner.setActivityLogService(aActivityLogService);
        };
        IImpl_RenderingController_Config.prototype.getActivityLogService = function () {
            return this._owner.getActivityLogService();
        };
        return IImpl_RenderingController_Config;
    }());
    rm_coreservices.IImpl_RenderingController_Config = IImpl_RenderingController_Config;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=IImpl_RenderingController_Config.js.map