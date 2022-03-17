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
        var RE_VideoSettings = /** @class */ (function (_super) {
            __extends(RE_VideoSettings, _super);
            function RE_VideoSettings() {
                var _this = _super.call(this) || this;
                _this._playerType = null;
                _this._renderingMode = null;
                return _this;
            }
            RE_VideoSettings.prototype.setPlayerType = function (playerType) {
                this._playerType = playerType;
            };
            RE_VideoSettings.prototype.getPlayerType = function () {
                return this._playerType;
            };
            RE_VideoSettings.prototype.setRenderingMode = function (renderingMode) {
                this._renderingMode = renderingMode;
            };
            RE_VideoSettings.prototype.getRenderingMode = function () {
                return this._renderingMode;
            };
            return RE_VideoSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_VideoSettings = RE_VideoSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_VideoSettings.js.map