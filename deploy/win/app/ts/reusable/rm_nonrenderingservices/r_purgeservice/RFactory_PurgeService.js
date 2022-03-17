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
var mod_R_PurgeService = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_purgeservice/R_PurgeService");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RFactory_PurgeService = (function (_super) {
        __extends(RFactory_PurgeService, _super);
        function RFactory_PurgeService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_PurgeService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new mod_R_PurgeService.rm_nonrenderingservices.R_PurgeService(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_PurgeService;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_nonrenderingservices.RFactory_PurgeService = RFactory_PurgeService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RFactory_PurgeService.js.map