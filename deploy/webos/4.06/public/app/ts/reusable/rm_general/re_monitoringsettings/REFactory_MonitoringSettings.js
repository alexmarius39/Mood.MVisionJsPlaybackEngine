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
define(["require", "exports", "./RE_MonitoringSettings", "../r_entity/RFactory_Entity"], function (require, exports, rmMonitoringSettings, rmEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var REFactory_MonitoringSettings = /** @class */ (function (_super) {
            __extends(REFactory_MonitoringSettings, _super);
            function REFactory_MonitoringSettings() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_MonitoringSettings.prototype.createEntity = function (entityName, error) {
                return new rmMonitoringSettings.rm_general.RE_MonitoringSettings;
            };
            return REFactory_MonitoringSettings;
        }(rmEntityFactory.rm_general.RFactory_Entity));
        rm_general.REFactory_MonitoringSettings = REFactory_MonitoringSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=REFactory_MonitoringSettings.js.map