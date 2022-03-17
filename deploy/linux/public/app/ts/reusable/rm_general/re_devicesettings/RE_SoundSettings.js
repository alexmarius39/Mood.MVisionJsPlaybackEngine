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
        var RE_SoundSettings = /** @class */ (function (_super) {
            __extends(RE_SoundSettings, _super);
            function RE_SoundSettings() {
                var _this = _super.call(this) || this;
                _this._volumeLevels = null;
                return _this;
            }
            RE_SoundSettings.prototype.setVolumeLevels = function (volumeLevels) {
                this._volumeLevels = volumeLevels;
            };
            RE_SoundSettings.prototype.getVolumeLevels = function () {
                return this._volumeLevels;
            };
            return RE_SoundSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_SoundSettings = RE_SoundSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_SoundSettings.js.map