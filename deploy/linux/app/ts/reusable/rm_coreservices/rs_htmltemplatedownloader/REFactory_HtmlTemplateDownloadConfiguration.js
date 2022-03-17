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
var rmHtmlTemplateDownloadConfiguration = require("../../../../../app/ts/reusable/rm_coreservices/rs_htmltemplatedownloader/RE_HtmlTemplateDownloadConfiguration");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_transversalservices;
(function (rm_transversalservices) {
    var REFactory_HtmlTemplateDownloadConfiguration = (function (_super) {
        __extends(REFactory_HtmlTemplateDownloadConfiguration, _super);
        function REFactory_HtmlTemplateDownloadConfiguration() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        REFactory_HtmlTemplateDownloadConfiguration.prototype.createEntity = function (entityName, error) {
            return new rmHtmlTemplateDownloadConfiguration.rm_coreservices.RE_HtmlTemplateDownloadConfiguration();
        };
        return REFactory_HtmlTemplateDownloadConfiguration;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_transversalservices.REFactory_HtmlTemplateDownloadConfiguration = REFactory_HtmlTemplateDownloadConfiguration;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=REFactory_HtmlTemplateDownloadConfiguration.js.map