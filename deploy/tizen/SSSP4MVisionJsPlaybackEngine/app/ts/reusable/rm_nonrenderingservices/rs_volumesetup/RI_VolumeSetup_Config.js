define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RI_MonitoringConfig = /** @class */ (function () {
            //----------- constructor 
            function RI_MonitoringConfig(owner) {
                this._owner = owner;
            }
            //--------------------------------------
            // set / get playlist controller config
            //---------------------------------------
            //-----------------------------
            RI_MonitoringConfig.prototype.getActivityLogService = function () {
                return this._owner.getActivityLogService();
            };
            //-----------------------------
            RI_MonitoringConfig.prototype.setActivityLogService = function (aActivityLogService) {
                return this._owner.setActivityLogService(aActivityLogService);
            };
            return RI_MonitoringConfig;
        }());
        rm_nonrenderingservices.RI_MonitoringConfig = RI_MonitoringConfig;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RI_VolumeSetup_Config.js.map