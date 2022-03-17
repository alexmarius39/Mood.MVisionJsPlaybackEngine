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
define(["require", "exports", "../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RE_CronSchedule", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmCronSchedule, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var REFactory_CronSchedule = /** @class */ (function (_super) {
            __extends(REFactory_CronSchedule, _super);
            function REFactory_CronSchedule() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_CronSchedule.prototype.createEntity = function (entityName, error) {
                return new rmCronSchedule.rm_nonrenderingservices.RE_CronSchedule();
            };
            return REFactory_CronSchedule;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_nonrenderingservices.REFactory_CronSchedule = REFactory_CronSchedule;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=REFactory_CronSchedule.js.map