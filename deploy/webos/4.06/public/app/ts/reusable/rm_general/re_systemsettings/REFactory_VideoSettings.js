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
define(["require", "exports", "./RE_VideoSettings", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmVideoSettings, rmEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var REFactory_VideoSettings = /** @class */ (function (_super) {
            __extends(REFactory_VideoSettings, _super);
            function REFactory_VideoSettings() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_VideoSettings.prototype.createEntity = function (entityName, error) {
                return new rmVideoSettings.rm_general.RE_VideoSettings();
            };
            return REFactory_VideoSettings;
        }(rmEntityFactory.rm_general.RFactory_Entity));
        rm_general.REFactory_VideoSettings = REFactory_VideoSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=REFactory_VideoSettings.js.map