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
        var RE_DisplaySettings = /** @class */ (function (_super) {
            __extends(RE_DisplaySettings, _super);
            function RE_DisplaySettings() {
                var _this = _super.call(this) || this;
                _this._brightness = null;
                _this._density = null;
                _this._orientation = null;
                _this._resolution = null;
                _this._scale = null;
                return _this;
            }
            RE_DisplaySettings.prototype.setBrightness = function (brightness) {
                this._brightness = brightness;
            };
            RE_DisplaySettings.prototype.getBrightness = function () {
                return this._brightness;
            };
            RE_DisplaySettings.prototype.setDensity = function (density) {
                this._density = density;
            };
            RE_DisplaySettings.prototype.getDensity = function () {
                return this._density;
            };
            RE_DisplaySettings.prototype.setOrientation = function (orientation) {
                this._orientation = orientation;
            };
            RE_DisplaySettings.prototype.getOrientation = function () {
                return this._orientation;
            };
            RE_DisplaySettings.prototype.setResolution = function (resolution) {
                this._resolution = resolution;
            };
            RE_DisplaySettings.prototype.getResolution = function () {
                return this._resolution;
            };
            RE_DisplaySettings.prototype.setScale = function (scale) {
                this._scale = scale;
            };
            RE_DisplaySettings.prototype.getScale = function () {
                return this._scale;
            };
            return RE_DisplaySettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_DisplaySettings = RE_DisplaySettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_DisplaySettings.js.map