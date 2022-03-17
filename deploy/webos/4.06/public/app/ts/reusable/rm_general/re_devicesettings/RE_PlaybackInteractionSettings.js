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
        var RE_PlaybackInteractionSettings = /** @class */ (function (_super) {
            __extends(RE_PlaybackInteractionSettings, _super);
            function RE_PlaybackInteractionSettings() {
                var _this = _super.call(this) || this;
                _this._onTouchAction = null;
                return _this;
            }
            RE_PlaybackInteractionSettings.prototype.setOnTouchAction = function (_onTouchAction) {
                this._onTouchAction = _onTouchAction;
            };
            RE_PlaybackInteractionSettings.prototype.getOnTouchAction = function () {
                return this._onTouchAction;
            };
            return RE_PlaybackInteractionSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_PlaybackInteractionSettings = RE_PlaybackInteractionSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_PlaybackInteractionSettings.js.map