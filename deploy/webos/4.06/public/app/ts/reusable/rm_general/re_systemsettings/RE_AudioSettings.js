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
        var RE_AudioSettings = /** @class */ (function (_super) {
            __extends(RE_AudioSettings, _super);
            function RE_AudioSettings() {
                var _this = _super.call(this) || this;
                _this._nDefaultVolumeLevel = null;
                _this._nLastVolumeNumber = null;
                _this._bApplyDefaultVolumeAtStartup = false;
                return _this;
            }
            RE_AudioSettings.prototype.getDefaultVolumeLevel = function () {
                return this._nDefaultVolumeLevel;
            };
            RE_AudioSettings.prototype.setDefaultVolumeLevel = function (nVolumeLevel) {
                this._nDefaultVolumeLevel = nVolumeLevel;
            };
            RE_AudioSettings.prototype.getLastVolumeLevel = function () {
                return this._nLastVolumeNumber;
            };
            RE_AudioSettings.prototype.setLastVolumeLevel = function (nVolumeLevel) {
                this._nLastVolumeNumber = nVolumeLevel;
            };
            RE_AudioSettings.prototype.getApplyDefaultVolumeAtStartup = function () {
                return this._bApplyDefaultVolumeAtStartup;
            };
            RE_AudioSettings.prototype.setApplyDefaultVolumeAtStartup = function (bApplyVolume) {
                this._bApplyDefaultVolumeAtStartup = bApplyVolume;
            };
            return RE_AudioSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_AudioSettings = RE_AudioSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_AudioSettings.js.map