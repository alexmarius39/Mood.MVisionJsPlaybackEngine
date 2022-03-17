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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/re_httpheader/RE_HttpHeader", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmGeneralHttpHeader, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var REFactory_HttpHeader = /** @class */ (function (_super) {
            __extends(REFactory_HttpHeader, _super);
            function REFactory_HttpHeader() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_HttpHeader.prototype.createEntity = function (entityName, error) {
                return new rmGeneralHttpHeader.rm_general.RE_HttpHeader();
            };
            return REFactory_HttpHeader;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_general.REFactory_HttpHeader = REFactory_HttpHeader;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=REFactory_HttpHeader.js.map