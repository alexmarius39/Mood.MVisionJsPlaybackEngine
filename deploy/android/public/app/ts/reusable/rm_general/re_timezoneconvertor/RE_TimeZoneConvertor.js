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
        var RE_TimeZoneConvertor = /** @class */ (function (_super) {
            __extends(RE_TimeZoneConvertor, _super);
            function RE_TimeZoneConvertor() {
                var _this = _super.call(this) || this;
                _this._mapTZMoodToNative = new Map();
                _this._mapTZNativeToMood = new Map();
                return _this;
            }
            RE_TimeZoneConvertor.prototype.setMoodToNativeTZ = function (strMoodTZ, strNativeTZ) {
                if (this._mapTZMoodToNative != null) {
                    this._mapTZMoodToNative.set(strMoodTZ, strNativeTZ);
                }
            };
            RE_TimeZoneConvertor.prototype.setNativeToMoodTZ = function (strNativeTZ, strMoodTZ) {
                if (this._mapTZNativeToMood != null) {
                    this._mapTZNativeToMood.set(strNativeTZ, strMoodTZ);
                }
            };
            RE_TimeZoneConvertor.prototype.getMoodTZ = function (strTimezone) {
                return this._mapTZNativeToMood != null ? this._mapTZNativeToMood.get(strTimezone) : null;
            };
            RE_TimeZoneConvertor.prototype.getNativeTZ = function (strTimezone) {
                return this._mapTZMoodToNative != null ? this._mapTZMoodToNative.get(strTimezone) : null;
            };
            return RE_TimeZoneConvertor;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_TimeZoneConvertor = RE_TimeZoneConvertor;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_TimeZoneConvertor.js.map