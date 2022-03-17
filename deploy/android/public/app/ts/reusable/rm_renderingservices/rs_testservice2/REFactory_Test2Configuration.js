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
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/rs_testservice2/RE_Test2Configuration", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmTest2Configuration, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var REFactory_Test2Configuration = /** @class */ (function (_super) {
            __extends(REFactory_Test2Configuration, _super);
            function REFactory_Test2Configuration() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_Test2Configuration.prototype.createEntity = function (entityName, error) {
                return new rmTest2Configuration.rm_renderingservices.RE_Test2Configuration();
            };
            return REFactory_Test2Configuration;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_nonrenderingservices.REFactory_Test2Configuration = REFactory_Test2Configuration;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=REFactory_Test2Configuration.js.map