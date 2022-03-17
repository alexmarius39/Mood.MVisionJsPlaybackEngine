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
        var RE_MonitoringSettings = /** @class */ (function (_super) {
            __extends(RE_MonitoringSettings, _super);
            function RE_MonitoringSettings() {
                var _this = _super.call(this) || this;
                _this._iStartTimeout = 20;
                _this._iInterval = 300;
                _this._bEarlyAdopter = false;
                _this._nLastPlayedItems = 15;
                _this._strRemoteRelativePath = null;
                return _this;
            }
            RE_MonitoringSettings.prototype.setStartTimeout = function (iStartTimeout) {
                this._iStartTimeout = iStartTimeout;
            };
            RE_MonitoringSettings.prototype.getStartTimeout = function () {
                return this._iStartTimeout;
            };
            RE_MonitoringSettings.prototype.setInterval = function (iInterval) {
                this._iInterval = iInterval;
            };
            RE_MonitoringSettings.prototype.getInterval = function () {
                return this._iInterval;
            };
            RE_MonitoringSettings.prototype.setEarlyAdopter = function (bEarlyAdopter) {
                this._bEarlyAdopter = bEarlyAdopter;
            };
            RE_MonitoringSettings.prototype.getEarlyAdopter = function () {
                return this._bEarlyAdopter;
            };
            RE_MonitoringSettings.prototype.setLastPlayedItemsNumber = function (nLastPlayedItems) {
                this._nLastPlayedItems = nLastPlayedItems;
            };
            RE_MonitoringSettings.prototype.getLastPlayedItemsNumber = function () {
                return this._nLastPlayedItems;
            };
            RE_MonitoringSettings.prototype.getRemoteRelativePath = function () {
                return this._strRemoteRelativePath;
            };
            RE_MonitoringSettings.prototype.setRemoteRelativePath = function (strRemoteRelativePath) {
                this._strRemoteRelativePath = strRemoteRelativePath;
            };
            return RE_MonitoringSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_MonitoringSettings = RE_MonitoringSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_MonitoringSettings.js.map