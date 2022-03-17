define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var IImpl_UpdateSoftwareConfig_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_UpdateSoftwareConfig_R(owner) {
                this._owner = owner;
            }
            //--------------------------------------
            // set / get playlist controller config
            //---------------------------------------
            //----------------------------
            IImpl_UpdateSoftwareConfig_R.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
                return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
            };
            //-----------------------------
            IImpl_UpdateSoftwareConfig_R.prototype.getPlaybackGlobalConfig = function () {
                return this._owner.getPlaybackGlobalConfig();
            };
            IImpl_UpdateSoftwareConfig_R.prototype.setActivityLogService = function (aActivityLogService) {
                return this._owner.setActivityLogService(aActivityLogService);
            };
            //-----------------------------
            IImpl_UpdateSoftwareConfig_R.prototype.getActivityLogService = function () {
                return this._owner.getActivityLogService();
            };
            return IImpl_UpdateSoftwareConfig_R;
        }());
        rm_nonrenderingservices.IImpl_UpdateSoftwareConfig_R = IImpl_UpdateSoftwareConfig_R;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=IImpl_UpdateSoftwareConfig_R.js.map