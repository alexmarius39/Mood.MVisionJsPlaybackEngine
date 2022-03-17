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
define(["require", "exports", "../../rm_general/r_service/RFactory_Service", "./RS_Screenshot"], function (require, exports, rmGeneralServiceFactory, rmScreenshotService) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RFactory_ScreenshotService = /** @class */ (function (_super) {
            __extends(RFactory_ScreenshotService, _super);
            function RFactory_ScreenshotService() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_ScreenshotService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                return new rmScreenshotService.rm_renderingservices.RS_ScreenshotService(aFactoryDescription, aServiceContainer, aLogService, error);
            };
            return RFactory_ScreenshotService;
        }(rmGeneralServiceFactory.rm_general.RFactory_Service));
        rm_renderingservices.RFactory_ScreenshotService = RFactory_ScreenshotService;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RFactory_Screenshot.js.map