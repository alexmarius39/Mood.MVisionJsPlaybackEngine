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
        var RE_LanguageSettings = /** @class */ (function (_super) {
            __extends(RE_LanguageSettings, _super);
            function RE_LanguageSettings() {
                var _this = _super.call(this) || this;
                _this._strDefaultLangauge = null;
                _this._strLastLanguage = null;
                _this._bApplyDefaultlanguage = false;
                return _this;
            }
            RE_LanguageSettings.prototype.getDefaultLanguage = function () {
                return this._strDefaultLangauge;
            };
            RE_LanguageSettings.prototype.setDefaultLanguage = function (strDefaultLanguage) {
                this._strDefaultLangauge = strDefaultLanguage;
            };
            RE_LanguageSettings.prototype.getLastLanguage = function () {
                return this._strLastLanguage;
            };
            RE_LanguageSettings.prototype.setLastLanguage = function (strLastLanguage) {
                this._strLastLanguage = strLastLanguage;
            };
            RE_LanguageSettings.prototype.getApplyDefaultLanguage = function () {
                return this._bApplyDefaultlanguage;
            };
            RE_LanguageSettings.prototype.setApplyDefaultLanguage = function (bApplyDefaultLanguage) {
                this._bApplyDefaultlanguage = bApplyDefaultLanguage;
            };
            return RE_LanguageSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_LanguageSettings = RE_LanguageSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_LanguageSettings.js.map