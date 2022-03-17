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
define(["require", "exports", "../../rm_general/r_service/RFactory_Service", "./RS_LiveCommands"], function (require, exports, rmGeneralServiceFactory, R_LiveCommandsService) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RFactory_LiveCommandsService = /** @class */ (function (_super) {
            __extends(RFactory_LiveCommandsService, _super);
            function RFactory_LiveCommandsService() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_LiveCommandsService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                return new R_LiveCommandsService.rm_nonrenderingservices.RS_LiveCommandsService(aFactoryDescription, aServiceContainer, aLogService, error);
            };
            return RFactory_LiveCommandsService;
        }(rmGeneralServiceFactory.rm_general.RFactory_Service));
        rm_nonrenderingservices.RFactory_LiveCommandsService = RFactory_LiveCommandsService;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RFactory_LiveCommands.js.map