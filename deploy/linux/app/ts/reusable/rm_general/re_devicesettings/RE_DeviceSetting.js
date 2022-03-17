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
    var RE_DeviceSettings = (function (_super) {
        __extends(RE_DeviceSettings, _super);
        function RE_DeviceSettings() {
            var _this = _super.call(this) || this;
            _this._value = null;
            _this._timestamp = 0;
            _this._bInherited = true;
            _this._strRiskLevel = "Low";
            _this._strOrigin = "System default";
            _this._strUser = "";
            return _this;
        }
        RE_DeviceSettings.prototype.setValue = function (value) {
            this._value = value;
        };
        RE_DeviceSettings.prototype.getValue = function () {
            return this._value;
        };
        RE_DeviceSettings.prototype.setTimestamp = function (timestamp) {
            this._timestamp = timestamp;
        };
        RE_DeviceSettings.prototype.getTimestamp = function () {
            return this._timestamp;
        };
        RE_DeviceSettings.prototype.setInherited = function (bInherited) {
            this._bInherited = bInherited;
        };
        RE_DeviceSettings.prototype.getInherited = function () {
            return this._bInherited;
        };
        RE_DeviceSettings.prototype.setRiskLevel = function (strRiskLevel) {
            this._strRiskLevel = strRiskLevel;
        };
        RE_DeviceSettings.prototype.getRiskLevel = function () {
            return this._strRiskLevel;
        };
        RE_DeviceSettings.prototype.setOrigin = function (strOrigin) {
            this._strOrigin = strOrigin;
        };
        RE_DeviceSettings.prototype.getOrigin = function () {
            return this._strOrigin;
        };
        RE_DeviceSettings.prototype.setUser = function (strUser) {
            this._strUser = strUser;
        };
        RE_DeviceSettings.prototype.getUser = function () {
            return this._strUser;
        };
        return RE_DeviceSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_DeviceSettings = RE_DeviceSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_DeviceSetting.js.map