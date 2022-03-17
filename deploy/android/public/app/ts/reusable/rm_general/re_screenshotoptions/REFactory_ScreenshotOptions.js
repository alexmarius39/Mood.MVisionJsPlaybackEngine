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
define(["require", "exports", "./RE_ScreenshotOptions", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmScreenshotOptions, rmEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var REFactory_ScreenshotOptions = /** @class */ (function (_super) {
            __extends(REFactory_ScreenshotOptions, _super);
            function REFactory_ScreenshotOptions() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_ScreenshotOptions.prototype.createEntity = function (entityName, error) {
                return new rmScreenshotOptions.rm_general.RE_ScreenshotOptions();
            };
            return REFactory_ScreenshotOptions;
        }(rmEntityFactory.rm_general.RFactory_Entity));
        rm_general.REFactory_ScreenshotOptions = REFactory_ScreenshotOptions;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=REFactory_ScreenshotOptions.js.map