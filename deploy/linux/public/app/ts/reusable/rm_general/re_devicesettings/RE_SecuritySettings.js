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
        var RE_SecuritySettings = /** @class */ (function (_super) {
            __extends(RE_SecuritySettings, _super);
            function RE_SecuritySettings() {
                var _this = _super.call(this) || this;
                _this._diagnosticsAppPassword = null;
                _this._encryptMediaFiles = null;
                _this._playerConfigAppPassword = null;
                _this._vodAppPassword = null;
                return _this;
            }
            RE_SecuritySettings.prototype.setDiagnosticsAppPassword = function (diagnosticsAppPassword) {
                this._diagnosticsAppPassword = diagnosticsAppPassword;
            };
            RE_SecuritySettings.prototype.getDiagnosticsAppPassword = function () {
                return this._diagnosticsAppPassword;
            };
            RE_SecuritySettings.prototype.setEncryptMediaFiles = function (encryptMediaFiles) {
                this._encryptMediaFiles = encryptMediaFiles;
            };
            RE_SecuritySettings.prototype.getEncryptMediaFiles = function () {
                return this._encryptMediaFiles;
            };
            RE_SecuritySettings.prototype.setPlayerConfigAppPassword = function (playerConfigAppPassword) {
                this._playerConfigAppPassword = playerConfigAppPassword;
            };
            RE_SecuritySettings.prototype.getPlayerConfigAppPassword = function () {
                return this._playerConfigAppPassword;
            };
            RE_SecuritySettings.prototype.setVodAppPassword = function (vodAppPassword) {
                this._vodAppPassword = vodAppPassword;
            };
            RE_SecuritySettings.prototype.getVodAppPassword = function () {
                return this._vodAppPassword;
            };
            return RE_SecuritySettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_SecuritySettings = RE_SecuritySettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_SecuritySettings.js.map