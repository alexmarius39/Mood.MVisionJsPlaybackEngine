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
        var RE_WebPageSettings = /** @class */ (function (_super) {
            __extends(RE_WebPageSettings, _super);
            function RE_WebPageSettings() {
                var _this = _super.call(this) || this;
                _this._allowedUrls = null;
                _this._purgeCacheOnStart = null;
                _this._crosswalkUseTextureView = null;
                return _this;
            }
            RE_WebPageSettings.prototype.setAllowedUrls = function (allowedUrls) {
                this._allowedUrls = allowedUrls;
            };
            RE_WebPageSettings.prototype.getAllowedUrls = function () {
                return this._allowedUrls;
            };
            RE_WebPageSettings.prototype.setPurgeCacheOnStart = function (purgeCacheOnStart) {
                this._purgeCacheOnStart = purgeCacheOnStart;
            };
            RE_WebPageSettings.prototype.getPurgeCacheOnStart = function () {
                return this._purgeCacheOnStart;
            };
            RE_WebPageSettings.prototype.setCrosswalkUseTextureView = function (crosswalkUseTextureView) {
                this._crosswalkUseTextureView = crosswalkUseTextureView;
            };
            RE_WebPageSettings.prototype.getCrosswalkUseTextureView = function () {
                return this._crosswalkUseTextureView;
            };
            return RE_WebPageSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_WebPageSettings = RE_WebPageSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_WebPageSettings.js.map