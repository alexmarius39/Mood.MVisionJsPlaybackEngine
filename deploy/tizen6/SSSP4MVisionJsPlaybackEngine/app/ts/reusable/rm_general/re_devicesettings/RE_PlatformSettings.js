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
        var RE_PlatformSettings = /** @class */ (function (_super) {
            __extends(RE_PlatformSettings, _super);
            function RE_PlatformSettings() {
                var _this = _super.call(this) || this;
                _this._adbEnabled = null;
                _this._usePowerKeyForScreenOff = null;
                _this._wsusUrl = null;
                _this._zidooSoundOutputRaw = null;
                return _this;
            }
            RE_PlatformSettings.prototype.setAdbEnabled = function (adbEnabled) {
                this._adbEnabled = adbEnabled;
            };
            RE_PlatformSettings.prototype.getAdbEnabled = function () {
                return this._adbEnabled;
            };
            RE_PlatformSettings.prototype.setUsePowerKeyForScreenOff = function (usePowerKeyForScreenOff) {
                this._usePowerKeyForScreenOff = usePowerKeyForScreenOff;
            };
            RE_PlatformSettings.prototype.getUsePowerKeyForScreenOff = function () {
                return this._usePowerKeyForScreenOff;
            };
            RE_PlatformSettings.prototype.setWsusUrl = function (wsusUrl) {
                this._wsusUrl = wsusUrl;
            };
            RE_PlatformSettings.prototype.getWsusUrl = function () {
                return this._wsusUrl;
            };
            RE_PlatformSettings.prototype.setZidooSoundOutputRaw = function (zidooSoundOutputRaw) {
                this._zidooSoundOutputRaw = zidooSoundOutputRaw;
            };
            RE_PlatformSettings.prototype.getZidooSoundOutputRaw = function () {
                return this._zidooSoundOutputRaw;
            };
            return RE_PlatformSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_PlatformSettings = RE_PlatformSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_PlatformSettings.js.map