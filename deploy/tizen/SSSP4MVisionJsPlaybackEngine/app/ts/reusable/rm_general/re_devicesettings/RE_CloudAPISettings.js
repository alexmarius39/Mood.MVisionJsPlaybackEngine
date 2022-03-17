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
        var RE_CloudAPISettings = /** @class */ (function (_super) {
            __extends(RE_CloudAPISettings, _super);
            function RE_CloudAPISettings() {
                var _this = _super.call(this) || this;
                _this._baseServerAPIUrl = null;
                _this._baseServerUpgradeUrl = null;
                return _this;
            }
            RE_CloudAPISettings.prototype.setBaseServerAPIUrl = function (baseServerAPIUrl) {
                this._baseServerAPIUrl = baseServerAPIUrl;
            };
            RE_CloudAPISettings.prototype.getBaseServerAPIUrl = function () {
                return this._baseServerAPIUrl;
            };
            RE_CloudAPISettings.prototype.setBaseServerUpgradeUrl = function (baseServerUpgradeUrl) {
                this._baseServerUpgradeUrl = baseServerUpgradeUrl;
            };
            RE_CloudAPISettings.prototype.getBaseServerUpgradeUrl = function () {
                return this._baseServerUpgradeUrl;
            };
            return RE_CloudAPISettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_CloudAPISettings = RE_CloudAPISettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_CloudAPISettings.js.map