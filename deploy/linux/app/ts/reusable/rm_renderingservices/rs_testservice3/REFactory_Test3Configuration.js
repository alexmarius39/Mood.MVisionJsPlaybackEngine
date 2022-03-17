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
var rmTest3Configuration = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice3/RE_Test3Configuration");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var REFactory_Test3Configuration = (function (_super) {
        __extends(REFactory_Test3Configuration, _super);
        function REFactory_Test3Configuration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        REFactory_Test3Configuration.prototype.createEntity = function (entityName, error) {
            return new rmTest3Configuration.rm_renderingservices.RE_Test3Configuration();
        };
        return REFactory_Test3Configuration;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_nonrenderingservices.REFactory_Test3Configuration = REFactory_Test3Configuration;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=REFactory_Test3Configuration.js.map