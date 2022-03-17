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
        var RE_ClientSettings = /** @class */ (function (_super) {
            __extends(RE_ClientSettings, _super);
            function RE_ClientSettings() {
                var _this = _super.call(this) || this;
                _this._earlyAdopter = null;
                _this._projectId = null;
                return _this;
            }
            RE_ClientSettings.prototype.setEarlyAdopter = function (earlyAdopter) {
                this._earlyAdopter = earlyAdopter;
            };
            RE_ClientSettings.prototype.getEarlyAdopter = function () {
                return this._earlyAdopter;
            };
            RE_ClientSettings.prototype.setProjectId = function (projectId) {
                this._projectId = projectId;
            };
            RE_ClientSettings.prototype.getProjectId = function () {
                return this._projectId;
            };
            return RE_ClientSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_ClientSettings = RE_ClientSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_ClientSettings.js.map