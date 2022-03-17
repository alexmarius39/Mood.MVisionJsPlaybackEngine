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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/rs_testservice/RE_TestConfiguration", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmTestConfiguration, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var REFactory_TestConfiguration = /** @class */ (function (_super) {
            __extends(REFactory_TestConfiguration, _super);
            function REFactory_TestConfiguration() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_TestConfiguration.prototype.createEntity = function (entityName, error) {
                return new rmTestConfiguration.rm_renderingservices.RE_TestConfiguration();
            };
            return REFactory_TestConfiguration;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_nonrenderingservices.REFactory_TestConfiguration = REFactory_TestConfiguration;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=REFactory_TestConfiguration.js.map