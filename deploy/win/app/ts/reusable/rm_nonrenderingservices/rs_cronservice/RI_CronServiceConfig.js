"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RI_CronServiceConfig = (function () {
        function RI_CronServiceConfig(owner) {
            this._owner = owner;
        }
        RI_CronServiceConfig.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
        };
        RI_CronServiceConfig.prototype.getPlaybackGlobalConfig = function () {
            return this._owner.getPlaybackGlobalConfig();
        };
        RI_CronServiceConfig.prototype.setCronConfig = function (aCronConfiguration) {
            return this._owner.setCronConfig(aCronConfiguration);
        };
        RI_CronServiceConfig.prototype.getCronConfig = function () {
            return this._owner.getCronConfig();
        };
        RI_CronServiceConfig.prototype.setActivityLogService = function (aActivityLogService) {
            return this._owner.setActivityLogService(aActivityLogService);
        };
        RI_CronServiceConfig.prototype.getActivityLogService = function () {
            return this._owner.getActivityLogService();
        };
        RI_CronServiceConfig.prototype.setMonitoringService = function (monitoringService) {
            this._owner.setMonitoringService(monitoringService);
        };
        RI_CronServiceConfig.prototype.getMonitoringService = function () {
            return this._owner.getMonitoringService();
        };
        return RI_CronServiceConfig;
    }());
    rm_nonrenderingservices.RI_CronServiceConfig = RI_CronServiceConfig;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RI_CronServiceConfig.js.map