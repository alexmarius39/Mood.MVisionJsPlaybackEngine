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
define(["require", "exports", "./RE_LanguageSettings", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmLanguageSettings, rmEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var REFactory_LanguageSettings = /** @class */ (function (_super) {
            __extends(REFactory_LanguageSettings, _super);
            function REFactory_LanguageSettings() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_LanguageSettings.prototype.createEntity = function (entityName, error) {
                return new rmLanguageSettings.rm_general.RE_LanguageSettings();
            };
            return REFactory_LanguageSettings;
        }(rmEntityFactory.rm_general.RFactory_Entity));
        rm_general.REFactory_LanguageSettings = REFactory_LanguageSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=REFactory_LanguageSettings.js.map