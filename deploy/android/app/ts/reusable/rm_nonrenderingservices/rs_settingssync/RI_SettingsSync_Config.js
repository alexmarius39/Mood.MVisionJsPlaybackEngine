"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RI_SettingsSyncConfig = (function () {
        function RI_SettingsSyncConfig(owner) {
            this._owner = owner;
        }
        RI_SettingsSyncConfig.prototype.getPlaybackGlobalConfig = function () {
            return this._owner.getPlaybackGlobalConfig();
        };
        RI_SettingsSyncConfig.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
        };
        RI_SettingsSyncConfig.prototype.getDefaultSettingsSync = function () {
            return this._owner.getDefaultSettingsSync();
        };
        RI_SettingsSyncConfig.prototype.setDefaultSettingsSync = function (aSettingsSync) {
            this._owner.setDefaultSettingsSync(aSettingsSync);
        };
        RI_SettingsSyncConfig.prototype.getDefaultServerDeviceSettingsConfiguration = function () {
            return this._owner.getDefaultServerDeviceSettingsConfiguration();
        };
        RI_SettingsSyncConfig.prototype.setDefaultServerDeviceSettingsConfiguration = function (aServerDeviceSettingsConfiguration) {
            this._owner.setDefaultServerDeviceSettingsConfiguration(aServerDeviceSettingsConfiguration);
        };
        RI_SettingsSyncConfig.prototype.getActivityLogService = function () {
            return this._owner.getActivityLogService();
        };
        RI_SettingsSyncConfig.prototype.setActivityLogService = function (aActivityLogService) {
            return this._owner.setActivityLogService(aActivityLogService);
        };
        RI_SettingsSyncConfig.prototype.getFileSettingsUpdate = function () {
            return this._owner.getFileSettingsUpdate();
        };
        RI_SettingsSyncConfig.prototype.setFileSettingsUpdate = function (aFileSettingsUpdate) {
            return this._owner.setFileSettingsUpdate(aFileSettingsUpdate);
        };
        return RI_SettingsSyncConfig;
    }());
    rm_nonrenderingservices.RI_SettingsSyncConfig = RI_SettingsSyncConfig;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RI_SettingsSync_Config.js.map