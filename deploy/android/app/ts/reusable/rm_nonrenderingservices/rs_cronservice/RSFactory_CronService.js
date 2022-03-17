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
var rmGeneralServiceFactory = require("../../../../../app/ts/reusable/rm_general/r_service/RFactory_Service");
var mod_R_ChronService = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RS_CronService");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RSFactory_CronService = (function (_super) {
        __extends(RSFactory_CronService, _super);
        function RSFactory_CronService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RSFactory_CronService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_ChronService.rm_nonrenderingservices.RS_CronService(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RSFactory_CronService;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_nonrenderingservices.RSFactory_CronService = RSFactory_CronService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RSFactory_CronService.js.map