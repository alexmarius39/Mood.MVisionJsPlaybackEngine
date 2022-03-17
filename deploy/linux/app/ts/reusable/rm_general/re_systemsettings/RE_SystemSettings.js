"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var rmEntity = require("../r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var RE_SystemSettings = (function (_super) {
        __extends(RE_SystemSettings, _super);
        function RE_SystemSettings() {
            var _this = _super.call(this) || this;
            _this._bUpdateSerialNoIfNotEmpty = false;
            _this._bApplyDefaultSettingsAtStartup = false;
            _this._bSaveSettingsLastValuesAtStartup = false;
            _this._bSaveSettingsLastValuesAtRefreshRate = false;
            _this._nSaveSettingsLastValuesRefreshTime = 0;
            return _this;
        }
        RE_SystemSettings.prototype.getUpdateSerialNoIfNonEmpty = function () {
            return this._bUpdateSerialNoIfNotEmpty;
        };
        RE_SystemSettings.prototype.setUpdateSerialNoIfNonEmpty = function (bUpdateSN) {
            this._bUpdateSerialNoIfNotEmpty = bUpdateSN;
        };
        RE_SystemSettings.prototype.getApplyDefaultSettingsAtStartup = function () {
            return this._bApplyDefaultSettingsAtStartup;
        };
        RE_SystemSettings.prototype.setApplyDefaultSettingsAtStartup = function (bApplySettingsAtStartup) {
            this._bApplyDefaultSettingsAtStartup = bApplySettingsAtStartup;
        };
        RE_SystemSettings.prototype.getSaveSettingsLastValuesAtStartup = function () {
            return this._bSaveSettingsLastValuesAtStartup;
        };
        RE_SystemSettings.prototype.setSaveSettingsLastValuesAtStartup = function (bSaveLastValuesAtStartup) {
            this._bSaveSettingsLastValuesAtStartup = bSaveLastValuesAtStartup;
        };
        RE_SystemSettings.prototype.getSaveSettingsLastValuesAtRefreshRate = function () {
            return this._bSaveSettingsLastValuesAtRefreshRate;
        };
        RE_SystemSettings.prototype.setSaveSettingsLastValuesAtRefreshRate = function (bSaveLastValuesAtRefreshRate) {
            this._bSaveSettingsLastValuesAtRefreshRate = bSaveLastValuesAtRefreshRate;
        };
        RE_SystemSettings.prototype.getSaveSettingsLastValuesRefreshTime = function () {
            return this._nSaveSettingsLastValuesRefreshTime;
        };
        RE_SystemSettings.prototype.setSaveSettingsLastValuesRefreshTime = function (nSaveLastValuesRefreshTime) {
            this._nSaveSettingsLastValuesRefreshTime = nSaveLastValuesRefreshTime;
        };
        return RE_SystemSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_SystemSettings = RE_SystemSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_SystemSettings.js.map