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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/RFactory_Service", "../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/R_XmlConfigurator"], function (require, exports, rmGeneralServiceFactory, mod_R_XmlConfigurator) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //---
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var RFactory_XmlConfigurator = /** @class */ (function (_super) {
            __extends(RFactory_XmlConfigurator, _super);
            function RFactory_XmlConfigurator() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_XmlConfigurator.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                //require(["../../../../../app/ts/native/nm_renderingservices/n_videorenderer_webos/N_VideoRenderer_WebOS"], (dyn_N_VideoRenderer_WebOS : typeof mod_N_VideoRenderer_WebOS) => 
                //{  
                return new mod_R_XmlConfigurator.rm_transversalservices.R_XmlConfigurator(aFactoryDescription, aServiceContainer, aLogService, error);
                //});
                //return null;
            };
            return RFactory_XmlConfigurator;
        }(rmGeneralServiceFactory.rm_general.RFactory_Service));
        rm_transversalservices.RFactory_XmlConfigurator = RFactory_XmlConfigurator;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=RFactory_XmlConfigurator.js.map