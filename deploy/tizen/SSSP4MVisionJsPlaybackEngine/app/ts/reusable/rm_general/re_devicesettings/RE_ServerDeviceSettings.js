var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RE_ServerDeviceSettings = /** @class */ (function (_super) {
            __extends(RE_ServerDeviceSettings, _super);
            function RE_ServerDeviceSettings() {
                var _this = _super.call(this) || this;
                _this._aAppCommunicationSettings = null;
                _this._aClientSettings = null;
                _this._aCloudAPISettings = null;
                _this._aContentSettings = null;
                _this._aCronSettings = null;
                _this._aDisplaySettings = null;
                _this._aHardwareSetts = null;
                _this._aLoggingSettings = null;
                _this._aNetworkSettings = null;
                _this._aPlatformSettings = null;
                _this._aPlaybackSettings = null;
                _this._aSecuritySettings = null;
                _this._aSerialDisplayCommandsSettings = null;
                _this._aSiteSettings = null;
                _this._aSoftwareSettings = null;
                _this._aSoundSettings = null;
                _this._aTimeSettings = null;
                return _this;
            }
            RE_ServerDeviceSettings.prototype.getAppCommunicationSettings = function () {
                return this._aAppCommunicationSettings;
            };
            RE_ServerDeviceSettings.prototype.setAppCommunicationSettings = function (aAppCommunicationSettings) {
                this._aAppCommunicationSettings = aAppCommunicationSettings;
            };
            RE_ServerDeviceSettings.prototype.getClientSettings = function () {
                return this._aClientSettings;
            };
            RE_ServerDeviceSettings.prototype.setClientSettings = function (aClientSettings) {
                this._aClientSettings = aClientSettings;
            };
            RE_ServerDeviceSettings.prototype.getCloudAPISettings = function () {
                return this._aCloudAPISettings;
            };
            RE_ServerDeviceSettings.prototype.setCloudAPISettings = function (aCloudAPISettings) {
                this._aCloudAPISettings = aCloudAPISettings;
            };
            RE_ServerDeviceSettings.prototype.getContentSettings = function () {
                return this._aContentSettings;
            };
            RE_ServerDeviceSettings.prototype.setContentSettings = function (aContentSettings) {
                this._aContentSettings = aContentSettings;
            };
            RE_ServerDeviceSettings.prototype.getCronSettings = function () {
                return this._aCronSettings;
            };
            RE_ServerDeviceSettings.prototype.setCronSettings = function (aCronSettings) {
                this._aCronSettings = aCronSettings;
            };
            RE_ServerDeviceSettings.prototype.getDisplaySettings = function () {
                return this._aDisplaySettings;
            };
            RE_ServerDeviceSettings.prototype.setDisplaySettings = function (aDisplaySettings) {
                this._aDisplaySettings = aDisplaySettings;
            };
            RE_ServerDeviceSettings.prototype.getHardwareSetts = function () {
                return this._aHardwareSetts;
            };
            RE_ServerDeviceSettings.prototype.setHardwareSetts = function (aHardwareSetts) {
                this._aHardwareSetts = aHardwareSetts;
            };
            RE_ServerDeviceSettings.prototype.getLoggingSettings = function () {
                return this._aLoggingSettings;
            };
            RE_ServerDeviceSettings.prototype.setLoggingSettings = function (aLoggingSettings) {
                this._aLoggingSettings = aLoggingSettings;
            };
            RE_ServerDeviceSettings.prototype.getNetworkSettings = function () {
                return this._aNetworkSettings;
            };
            RE_ServerDeviceSettings.prototype.setNetworkSettings = function (aNetworkSettings) {
                this._aNetworkSettings = aNetworkSettings;
            };
            RE_ServerDeviceSettings.prototype.getPlatformSettings = function () {
                return this._aPlatformSettings;
            };
            RE_ServerDeviceSettings.prototype.setPlatformSettings = function (aPlatformSettings) {
                this._aPlatformSettings = aPlatformSettings;
            };
            RE_ServerDeviceSettings.prototype.getPlaybackSettings = function () {
                return this._aPlaybackSettings;
            };
            RE_ServerDeviceSettings.prototype.setPlaybackSettings = function (aPlaybackSettings) {
                this._aPlaybackSettings = aPlaybackSettings;
            };
            RE_ServerDeviceSettings.prototype.getSecuritySettings = function () {
                return this._aSecuritySettings;
            };
            RE_ServerDeviceSettings.prototype.setSecuritySettings = function (aSecuritySettings) {
                this._aSecuritySettings = aSecuritySettings;
            };
            RE_ServerDeviceSettings.prototype.getSerialDisplayCommandsSettings = function () {
                return this._aSerialDisplayCommandsSettings;
            };
            RE_ServerDeviceSettings.prototype.setSerialDisplayCommandsSettings = function (aSerialDisplayCommandsSettings) {
                this._aSerialDisplayCommandsSettings = aSerialDisplayCommandsSettings;
            };
            RE_ServerDeviceSettings.prototype.getSiteSettings = function () {
                return this._aSiteSettings;
            };
            RE_ServerDeviceSettings.prototype.setSiteSettings = function (aSiteSettings) {
                this._aSiteSettings = aSiteSettings;
            };
            RE_ServerDeviceSettings.prototype.getSoftwareSettings = function () {
                return this._aSoftwareSettings;
            };
            RE_ServerDeviceSettings.prototype.setSoftwareSettings = function (aSoftwareSettings) {
                this._aSoftwareSettings = aSoftwareSettings;
            };
            RE_ServerDeviceSettings.prototype.getSoundSettings = function () {
                return this._aSoundSettings;
            };
            RE_ServerDeviceSettings.prototype.setSoundSettings = function (aSoundSettings) {
                this._aSoundSettings = aSoundSettings;
            };
            RE_ServerDeviceSettings.prototype.getTimeSettings = function () {
                return this._aTimeSettings;
            };
            RE_ServerDeviceSettings.prototype.setTimeSettings = function (aTimeSettings) {
                this._aTimeSettings = aTimeSettings;
            };
            return RE_ServerDeviceSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_ServerDeviceSettings = RE_ServerDeviceSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_ServerDeviceSettings.js.map