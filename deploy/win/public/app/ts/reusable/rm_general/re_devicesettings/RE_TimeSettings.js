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
        var RE_TimeSettings = /** @class */ (function (_super) {
            __extends(RE_TimeSettings, _super);
            function RE_TimeSettings() {
                var _this = _super.call(this) || this;
                _this._timeSyncSettings = null;
                _this._timezone = null;
                return _this;
            }
            RE_TimeSettings.prototype.setTimeSyncSettings = function (timeSyncSettings) {
                this._timeSyncSettings = timeSyncSettings;
            };
            RE_TimeSettings.prototype.getTimeSyncSettings = function () {
                return this._timeSyncSettings;
            };
            RE_TimeSettings.prototype.setTimezone = function (timezone) {
                this._timezone = timezone;
            };
            RE_TimeSettings.prototype.getTimezone = function () {
                return this._timezone;
            };
            return RE_TimeSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_TimeSettings = RE_TimeSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_TimeSettings.js.map