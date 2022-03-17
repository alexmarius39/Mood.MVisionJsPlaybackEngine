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
        var RE_ResetSettings = /** @class */ (function (_super) {
            __extends(RE_ResetSettings, _super);
            function RE_ResetSettings() {
                var _this = _super.call(this) || this;
                _this._exceptions = null;
                _this._resetMode = null;
                _this._resetTime = null;
                return _this;
            }
            RE_ResetSettings.prototype.setExceptions = function (exceptions) {
                this._exceptions = exceptions;
            };
            RE_ResetSettings.prototype.getExceptions = function () {
                return this._exceptions;
            };
            RE_ResetSettings.prototype.setResetMode = function (resetMode) {
                this._resetMode = resetMode;
            };
            RE_ResetSettings.prototype.getResetMode = function () {
                return this._resetMode;
            };
            RE_ResetSettings.prototype.setResetTime = function (resetTime) {
                this._resetTime = resetTime;
            };
            RE_ResetSettings.prototype.getResetTime = function () {
                return this._resetTime;
            };
            return RE_ResetSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_ResetSettings = RE_ResetSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_ResetSettings.js.map