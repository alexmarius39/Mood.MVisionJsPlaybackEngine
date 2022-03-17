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
    var RE_VideoSettings = (function (_super) {
        __extends(RE_VideoSettings, _super);
        function RE_VideoSettings() {
            var _this = _super.call(this) || this;
            _this._nDefaultScreenWidth = null;
            _this._nDefaultScreenHeight = null;
            _this._nDefaultScreenOrientation = null;
            _this._nDefaultContrastLevel = null;
            _this._nDefaultBrightnessLevel = null;
            _this._nLastScreenWidth = null;
            _this._nLastScreenHeight = null;
            _this._nLastScreenOrientation = null;
            _this._nLastContrastLevel = null;
            _this._nLastBrightnessLevel = null;
            _this._bApplyDefaultScreenWidthAtStartup = false;
            _this._bApplyDefaultScreenHeightAtStartup = false;
            _this._bApplyDefaultScreenOrientationAtStartup = false;
            _this._bApplyDefaultContrastLevelAtStartup = false;
            _this._bApplyDefaultBrightnessLevelAtStartup = false;
            return _this;
        }
        RE_VideoSettings.prototype.getDefaultScreenWidth = function () {
            return this._nDefaultScreenWidth;
        };
        RE_VideoSettings.prototype.setDefaultScreenWidth = function (nWidth) {
            this._nDefaultScreenWidth = nWidth;
        };
        RE_VideoSettings.prototype.getDefaultScreenHeight = function () {
            return this._nDefaultScreenHeight;
        };
        RE_VideoSettings.prototype.setDefaultScreenHeight = function (nHeight) {
            this._nDefaultScreenHeight = nHeight;
        };
        RE_VideoSettings.prototype.getDefaultScreenOrientation = function () {
            return this._nDefaultScreenOrientation;
        };
        RE_VideoSettings.prototype.setDefaultScreenOrientation = function (strOrientation) {
            this._nDefaultScreenOrientation = strOrientation;
        };
        RE_VideoSettings.prototype.getDefaultContrastLevel = function () {
            return this._nDefaultContrastLevel;
        };
        RE_VideoSettings.prototype.setDefaultContrastLevel = function (nContrastLevel) {
            this._nDefaultContrastLevel = nContrastLevel;
        };
        RE_VideoSettings.prototype.getDefaultBrightnessLevel = function () {
            return this._nDefaultBrightnessLevel;
        };
        RE_VideoSettings.prototype.setDefaultBrightnessLevel = function (nBrightnessLevel) {
            this._nDefaultBrightnessLevel = nBrightnessLevel;
        };
        RE_VideoSettings.prototype.getLastScreenWidth = function () {
            return this._nLastScreenWidth;
        };
        RE_VideoSettings.prototype.setLastScreenWidth = function (nWidth) {
            this._nLastScreenWidth = nWidth;
        };
        RE_VideoSettings.prototype.getLastScreenHeight = function () {
            return this._nLastScreenHeight;
        };
        RE_VideoSettings.prototype.setLastScreenHeight = function (nHeight) {
            this._nLastScreenHeight = nHeight;
        };
        RE_VideoSettings.prototype.getLastScreenOrientation = function () {
            return this._nLastScreenOrientation;
        };
        RE_VideoSettings.prototype.setLastScreenOrientation = function (strOrientation) {
            this._nLastScreenOrientation = strOrientation;
        };
        RE_VideoSettings.prototype.getLastContrastLevel = function () {
            return this._nLastContrastLevel;
        };
        RE_VideoSettings.prototype.setLastContrastLevel = function (nContrastLevel) {
            this._nLastContrastLevel = nContrastLevel;
        };
        RE_VideoSettings.prototype.getLastBrightnessLevel = function () {
            return this._nLastBrightnessLevel;
        };
        RE_VideoSettings.prototype.setLastBrightnessLevel = function (nBrightnessLevel) {
            this._nLastBrightnessLevel = nBrightnessLevel;
        };
        RE_VideoSettings.prototype.getApplyDefaultScreenWidthAtStartup = function () {
            return this._bApplyDefaultScreenWidthAtStartup;
        };
        RE_VideoSettings.prototype.setApplyDefaultScreenWidthAtStartup = function (bApplyWidth) {
            this._bApplyDefaultScreenWidthAtStartup = bApplyWidth;
        };
        RE_VideoSettings.prototype.getApplyDefaultScreenHeightAtStartup = function () {
            return this._bApplyDefaultScreenHeightAtStartup;
        };
        RE_VideoSettings.prototype.setApplyDefaultScreenHeightAtStartup = function (bApplyHeight) {
            this._bApplyDefaultScreenHeightAtStartup = bApplyHeight;
        };
        RE_VideoSettings.prototype.getApplyDefaultScreenOrientationAtStartup = function () {
            return this._bApplyDefaultScreenOrientationAtStartup;
        };
        RE_VideoSettings.prototype.setApplyDefaultScreenOrientationAtStartup = function (bApplyOrientation) {
            this._bApplyDefaultScreenOrientationAtStartup = bApplyOrientation;
        };
        RE_VideoSettings.prototype.getApplyDefaultContrastLevelAtStartup = function () {
            return this._bApplyDefaultContrastLevelAtStartup;
        };
        RE_VideoSettings.prototype.setApplyDefaultContrastLevelAtStartup = function (bApplyContrastLevel) {
            this._bApplyDefaultContrastLevelAtStartup = bApplyContrastLevel;
        };
        RE_VideoSettings.prototype.getApplyDefaultBrightnessLevelAtStartup = function () {
            return this._bApplyDefaultBrightnessLevelAtStartup;
        };
        RE_VideoSettings.prototype.setApplyDefaultBrightnessLevelAtStartup = function (bApplyBrightnessLevel) {
            this._bApplyDefaultBrightnessLevelAtStartup = bApplyBrightnessLevel;
        };
        return RE_VideoSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_VideoSettings = RE_VideoSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_VideoSettings.js.map