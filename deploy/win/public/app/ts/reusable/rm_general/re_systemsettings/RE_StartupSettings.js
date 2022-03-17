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
        var RE_StartupSettings = /** @class */ (function (_super) {
            __extends(RE_StartupSettings, _super);
            function RE_StartupSettings() {
                var _this = _super.call(this) || this;
                _this._systemSettings = null;
                _this._audioSettings = null;
                _this._videoSettings = null;
                _this._timeSettings = null;
                _this._languageSettings = null;
                return _this;
            }
            RE_StartupSettings.prototype.getSystemSettings = function () {
                return this._systemSettings;
            };
            RE_StartupSettings.prototype.setSystemSettings = function (systemSettings) {
                this._systemSettings = systemSettings;
            };
            RE_StartupSettings.prototype.getAudioSettings = function () {
                return this._audioSettings;
            };
            RE_StartupSettings.prototype.setAudioSettings = function (audioSettings) {
                this._audioSettings = audioSettings;
            };
            RE_StartupSettings.prototype.getVideoSettings = function () {
                return this._videoSettings;
            };
            RE_StartupSettings.prototype.setVideoSettings = function (videoSettings) {
                this._videoSettings = videoSettings;
            };
            RE_StartupSettings.prototype.getTimeSettings = function () {
                return this._timeSettings;
            };
            RE_StartupSettings.prototype.setTimeSettings = function (timeSettings) {
                this._timeSettings = timeSettings;
            };
            RE_StartupSettings.prototype.getLanguageSettings = function () {
                return this._languageSettings;
            };
            RE_StartupSettings.prototype.setLanguageSettings = function (languageSettings) {
                this._languageSettings = languageSettings;
            };
            return RE_StartupSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_StartupSettings = RE_StartupSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_StartupSettings.js.map