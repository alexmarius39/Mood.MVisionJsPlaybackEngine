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
define(["require", "exports", "../../rm_general/r_service/RFactory_Service", "./RS_VolumeSetup"], function (require, exports, rmGeneralServiceFactory, R_VolumeSetupService) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RFactory_VolumeSetupService = /** @class */ (function (_super) {
            __extends(RFactory_VolumeSetupService, _super);
            function RFactory_VolumeSetupService() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_VolumeSetupService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                return new R_VolumeSetupService.rm_nonrenderingservices.RS_VolumeSetupService(aFactoryDescription, aServiceContainer, aLogService, error);
            };
            return RFactory_VolumeSetupService;
        }(rmGeneralServiceFactory.rm_general.RFactory_Service));
        rm_nonrenderingservices.RFactory_VolumeSetupService = RFactory_VolumeSetupService;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RFactory_VolumeSetup.js.map