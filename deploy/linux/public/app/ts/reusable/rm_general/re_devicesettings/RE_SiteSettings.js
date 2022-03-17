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
define(["require", "exports", "../r_entity/R_Entity"], function (require, exports, rmEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RE_SiteSettings = /** @class */ (function (_super) {
            __extends(RE_SiteSettings, _super);
            function RE_SiteSettings() {
                var _this = _super.call(this) || this;
                _this._bandwidthSettings = null;
                _this._contentDownloadWindows = null;
                _this._latitude = null;
                _this._longitude = null;
                _this._openingHour = null;
                _this._siteId = null;
                _this._sleepMode = null;
                _this._zipCode = null;
                _this._maintenanceWindow = null;
                _this._customParamsMap1 = null;
                _this._customParamsMap2 = null;
                _this._customParamsMap3 = null;
                _this._customParamsMap4 = null;
                _this._customParamsMap5 = null;
                _this._customParamsMap6 = null;
                _this._customParamsMap7 = null;
                _this._customParamsMap8 = null;
                _this._customParamsMap9 = null;
                _this._customParamsMap10 = null;
                _this._customParamsMap11 = null;
                _this._customParamsMap12 = null;
                _this._customParamsMap13 = null;
                _this._customParamsMap14 = null;
                _this._customParamsMap15 = null;
                return _this;
            }
            RE_SiteSettings.prototype.setBandwidthSettings = function (bandwidthSettings) {
                this._bandwidthSettings = bandwidthSettings;
            };
            RE_SiteSettings.prototype.getBandwidthSettings = function () {
                return this._bandwidthSettings;
            };
            RE_SiteSettings.prototype.setContentDownloadWindows = function (contentDownloadWindows) {
                this._contentDownloadWindows = contentDownloadWindows;
            };
            RE_SiteSettings.prototype.getContentDownloadWindows = function () {
                return this._contentDownloadWindows;
            };
            RE_SiteSettings.prototype.setLatitude = function (latitude) {
                this._latitude = latitude;
            };
            RE_SiteSettings.prototype.getLatitude = function () {
                return this._latitude;
            };
            RE_SiteSettings.prototype.setLongitude = function (longitude) {
                this._longitude = longitude;
            };
            RE_SiteSettings.prototype.getLongitude = function () {
                return this._longitude;
            };
            RE_SiteSettings.prototype.setOpeningHour = function (openingHour) {
                this._openingHour = openingHour;
            };
            RE_SiteSettings.prototype.getOpeningHour = function () {
                return this._openingHour;
            };
            RE_SiteSettings.prototype.setSiteId = function (siteId) {
                this._siteId = siteId;
            };
            RE_SiteSettings.prototype.getSiteId = function () {
                return this._siteId;
            };
            RE_SiteSettings.prototype.setSleepMode = function (sleepMode) {
                this._sleepMode = sleepMode;
            };
            RE_SiteSettings.prototype.getSleepMode = function () {
                return this._sleepMode;
            };
            RE_SiteSettings.prototype.setZipCode = function (zipCode) {
                this._zipCode = zipCode;
            };
            RE_SiteSettings.prototype.getZipCode = function () {
                return this._zipCode;
            };
            RE_SiteSettings.prototype.setMaintenanceWindow = function (maintenanceWindow) {
                this._maintenanceWindow = maintenanceWindow;
            };
            RE_SiteSettings.prototype.getMaintenanceWindow = function () {
                return this._maintenanceWindow;
            };
            RE_SiteSettings.prototype.setCustomParamsMap1 = function (customParamsMap1) {
                this._customParamsMap1 = customParamsMap1;
            };
            RE_SiteSettings.prototype.getCustomParamsMap1 = function () {
                return this._customParamsMap1;
            };
            RE_SiteSettings.prototype.setCustomParamsMap2 = function (customParamsMap2) {
                this._customParamsMap2 = customParamsMap2;
            };
            RE_SiteSettings.prototype.getCustomParamsMap2 = function () {
                return this._customParamsMap2;
            };
            RE_SiteSettings.prototype.setCustomParamsMap3 = function (customParamsMap3) {
                this._customParamsMap3 = customParamsMap3;
            };
            RE_SiteSettings.prototype.getCustomParamsMap3 = function () {
                return this._customParamsMap3;
            };
            RE_SiteSettings.prototype.setCustomParamsMap4 = function (customParamsMap4) {
                this._customParamsMap4 = customParamsMap4;
            };
            RE_SiteSettings.prototype.getCustomParamsMap4 = function () {
                return this._customParamsMap4;
            };
            RE_SiteSettings.prototype.setCustomParamsMap5 = function (customParamsMap5) {
                this._customParamsMap5 = customParamsMap5;
            };
            RE_SiteSettings.prototype.getCustomParamsMap5 = function () {
                return this._customParamsMap5;
            };
            RE_SiteSettings.prototype.setCustomParamsMap6 = function (customParamsMap6) {
                this._customParamsMap6 = customParamsMap6;
            };
            RE_SiteSettings.prototype.getCustomParamsMap6 = function () {
                return this._customParamsMap6;
            };
            RE_SiteSettings.prototype.setCustomParamsMap7 = function (customParamsMap7) {
                this._customParamsMap7 = customParamsMap7;
            };
            RE_SiteSettings.prototype.getCustomParamsMap7 = function () {
                return this._customParamsMap7;
            };
            RE_SiteSettings.prototype.setCustomParamsMap8 = function (customParamsMap8) {
                this._customParamsMap8 = customParamsMap8;
            };
            RE_SiteSettings.prototype.getCustomParamsMap8 = function () {
                return this._customParamsMap8;
            };
            RE_SiteSettings.prototype.setCustomParamsMap9 = function (customParamsMap9) {
                this._customParamsMap9 = customParamsMap9;
            };
            RE_SiteSettings.prototype.getCustomParamsMap9 = function () {
                return this._customParamsMap9;
            };
            RE_SiteSettings.prototype.setCustomParamsMap10 = function (customParamsMap10) {
                this._customParamsMap10 = customParamsMap10;
            };
            RE_SiteSettings.prototype.getCustomParamsMap10 = function () {
                return this._customParamsMap10;
            };
            RE_SiteSettings.prototype.setCustomParamsMap11 = function (customParamsMap11) {
                this._customParamsMap11 = customParamsMap11;
            };
            RE_SiteSettings.prototype.getCustomParamsMap11 = function () {
                return this._customParamsMap11;
            };
            RE_SiteSettings.prototype.setCustomParamsMap12 = function (customParamsMap12) {
                this._customParamsMap12 = customParamsMap12;
            };
            RE_SiteSettings.prototype.getCustomParamsMap12 = function () {
                return this._customParamsMap12;
            };
            RE_SiteSettings.prototype.setCustomParamsMap13 = function (customParamsMap13) {
                this._customParamsMap13 = customParamsMap13;
            };
            RE_SiteSettings.prototype.getCustomParamsMap13 = function () {
                return this._customParamsMap13;
            };
            RE_SiteSettings.prototype.setCustomParamsMap14 = function (customParamsMap14) {
                this._customParamsMap14 = customParamsMap14;
            };
            RE_SiteSettings.prototype.getCustomParamsMap14 = function () {
                return this._customParamsMap14;
            };
            RE_SiteSettings.prototype.setCustomParamsMap15 = function (customParamsMap15) {
                this._customParamsMap15 = customParamsMap15;
            };
            RE_SiteSettings.prototype.getCustomParamsMap15 = function () {
                return this._customParamsMap15;
            };
            return RE_SiteSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_SiteSettings = RE_SiteSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_SiteSettings.js.map