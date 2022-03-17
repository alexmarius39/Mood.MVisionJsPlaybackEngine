"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RI_LiveCommandsConfig = (function () {
        function RI_LiveCommandsConfig(owner) {
            this._owner = owner;
        }
        RI_LiveCommandsConfig.prototype.getPlaybackGlobalConfig = function () {
            return this._owner.getPlaybackGlobalConfig();
        };
        RI_LiveCommandsConfig.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
        };
        RI_LiveCommandsConfig.prototype.getDefaultLiveCommandsSettings = function () {
            return this._owner.getDefaultLiveCommandsSettings();
        };
        RI_LiveCommandsConfig.prototype.setDefaultLiveCommandsSettings = function (aLiveCommandsSettings) {
            this._owner.setDefaultLiveCommandsSettings(aLiveCommandsSettings);
        };
        RI_LiveCommandsConfig.prototype.getActivityLogService = function () {
            return this._owner.getActivityLogService();
        };
        RI_LiveCommandsConfig.prototype.setActivityLogService = function (aActivityLogService) {
            return this._owner.setActivityLogService(aActivityLogService);
        };
        RI_LiveCommandsConfig.prototype.getVolumeSetupService = function () {
            return this._owner.getVolumeSetupService();
        };
        RI_LiveCommandsConfig.prototype.setVolumeSetupService = function (aVolumeSetupService) {
            this._owner.setVolumeSetupService(aVolumeSetupService);
        };
        RI_LiveCommandsConfig.prototype.getMonitoringService = function () {
            return this._owner.getMonitoringService();
        };
        RI_LiveCommandsConfig.prototype.setMonitoringService = function (aMonitoringService) {
            this._owner.setMonitoringService(aMonitoringService);
        };
        RI_LiveCommandsConfig.prototype.getSettingsSyncService = function () {
            return this._owner.getSettingsSyncService();
        };
        RI_LiveCommandsConfig.prototype.setSettingsSyncService = function (aSettingsSyncService) {
            this._owner.setSettingsSyncService(aSettingsSyncService);
        };
        return RI_LiveCommandsConfig;
    }());
    rm_nonrenderingservices.RI_LiveCommandsConfig = RI_LiveCommandsConfig;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RI_LiveCommands_Config.js.map