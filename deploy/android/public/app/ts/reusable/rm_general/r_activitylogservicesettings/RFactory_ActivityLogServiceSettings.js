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
define(["require", "exports", "./RE_ActivityLogServiceSettings", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmGeneralActivityLogServiceSettings, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RFactory_ActivityLogServiceSettings = /** @class */ (function (_super) {
            __extends(RFactory_ActivityLogServiceSettings, _super);
            function RFactory_ActivityLogServiceSettings() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_ActivityLogServiceSettings.prototype.createEntity = function (entityName, error) {
                return new rmGeneralActivityLogServiceSettings.rm_general.R_ActivityLogServiceSettings();
            };
            return RFactory_ActivityLogServiceSettings;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_general.RFactory_ActivityLogServiceSettings = RFactory_ActivityLogServiceSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RFactory_ActivityLogServiceSettings.js.map