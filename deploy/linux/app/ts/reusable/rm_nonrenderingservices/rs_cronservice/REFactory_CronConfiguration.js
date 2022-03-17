"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var rmCronConfiguration = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RE_CronConfiguration");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var REFactory_CronConfiguration = (function (_super) {
        __extends(REFactory_CronConfiguration, _super);
        function REFactory_CronConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        REFactory_CronConfiguration.prototype.createEntity = function (entityName, error) {
            return new rmCronConfiguration.rm_nonrenderingservices.RE_CronConfiguration();
        };
        return REFactory_CronConfiguration;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_nonrenderingservices.REFactory_CronConfiguration = REFactory_CronConfiguration;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=REFactory_CronConfiguration.js.map