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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/RFactory_Service", "../../../../../app/ts/reusable/rm_coreservices/rs_playlistdownloader/RS_PlaylistDownloader"], function (require, exports, rmGeneralServiceFactory, mod_RS_PlaylistDownloader) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RSFactory_PlaylistDownloader = /** @class */ (function (_super) {
            __extends(RSFactory_PlaylistDownloader, _super);
            function RSFactory_PlaylistDownloader() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RSFactory_PlaylistDownloader.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                //require(["../../../../../app/ts/native/nm_renderingservices/n_videorenderer_webos/N_VideoRenderer_WebOS"], (dyn_N_VideoRenderer_WebOS : typeof mod_N_VideoRenderer_WebOS) => 
                //{  
                return new mod_RS_PlaylistDownloader.rm_coreservices.RS_PlaylistDownloader(aFactoryDescription, aServiceContainer, aLogService, error);
                //});
                //return null;
            };
            return RSFactory_PlaylistDownloader;
        }(rmGeneralServiceFactory.rm_general.RFactory_Service));
        rm_coreservices.RSFactory_PlaylistDownloader = RSFactory_PlaylistDownloader;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RSFactory_PlaylistDownloader.js.map