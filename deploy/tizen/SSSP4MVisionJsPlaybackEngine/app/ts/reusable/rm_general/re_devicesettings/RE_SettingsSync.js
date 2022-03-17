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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RE_SettingsSync = /** @class */ (function (_super) {
            __extends(RE_SettingsSync, _super);
            function RE_SettingsSync() {
                return _super.call(this) || this;
            }
            RE_SettingsSync.prototype.setRemoteRelativePath = function (strRemoteRelativePath) {
                this._strRemoteRelativePath = strRemoteRelativePath;
            };
            RE_SettingsSync.prototype.getRemoteRelativePath = function () {
                return this._strRemoteRelativePath;
            };
            return RE_SettingsSync;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_SettingsSync = RE_SettingsSync;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_SettingsSync.js.map