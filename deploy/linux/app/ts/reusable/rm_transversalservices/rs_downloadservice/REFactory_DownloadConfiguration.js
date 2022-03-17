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
var rmDownloadConfiguration = require("../../../../../app/ts/reusable/rm_transversalservices/rs_downloadservice/RE_DownloadConfiguration");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_transversalservices;
(function (rm_transversalservices) {
    var REFactory_DownloadConfiguration = (function (_super) {
        __extends(REFactory_DownloadConfiguration, _super);
        function REFactory_DownloadConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        REFactory_DownloadConfiguration.prototype.createEntity = function (entityName, error) {
            return new rmDownloadConfiguration.rm_transversalservices.RE_DownloadConfiguration();
        };
        return REFactory_DownloadConfiguration;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_transversalservices.REFactory_DownloadConfiguration = REFactory_DownloadConfiguration;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=REFactory_DownloadConfiguration.js.map