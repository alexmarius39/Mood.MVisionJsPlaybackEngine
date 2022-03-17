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
            RI_MonitoringConfig.prototype.getPlaybackGlobalConfig = function () {
                return this._owner.getPlaybackGlobalConfig();
            };
            //----------------------------
            RI_MonitoringConfig.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
                this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
            };
            //-----------------------------
            RI_MonitoringConfig.prototype.getDefaultMonitoringSettings = function () {
                return this._owner.getDefaultMonitoringSettings();
            };
            //-----------------------------
            RI_MonitoringConfig.prototype.setDefaultMonitoringSettings = function (aMonitoringSettings) {
                this._owner.setDefaultMonitoringSettings(aMonitoringSettings);
            };
            //-----------------------------
            RI_MonitoringConfig.prototype.getActivityLogService = function () {
                return this._owner.getActivityLogService();
            };
            RI_MonitoringConfig.prototype.setActivityLogService = function (aActivityLogService) {
                this._owner.setActivityLogService(aActivityLogService);
            };
            RI_MonitoringConfig.prototype.getScreeshotService = function () {
                return this._owner.getScreeshotService();
            };
            RI_MonitoringConfig.prototype.setScreenshotService = function (aScreenshot) {
                this._owner.setScreenshotService(aScreenshot);
            };
            return RI_MonitoringConfig;
        }());
        rm_nonrenderingservices.RI_MonitoringConfig = RI_MonitoringConfig;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RI_Monitoring_Config.js.map