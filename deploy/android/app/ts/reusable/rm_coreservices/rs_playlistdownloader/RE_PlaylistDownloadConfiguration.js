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
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_coreservices;
(function (rm_coreservices) {
    var RE_PlaylistDownloadConfiguration = (function (_super) {
        __extends(RE_PlaylistDownloadConfiguration, _super);
        function RE_PlaylistDownloadConfiguration() {
            return _super.call(this) || this;
        }
        return RE_PlaylistDownloadConfiguration;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_coreservices.RE_PlaylistDownloadConfiguration = RE_PlaylistDownloadConfiguration;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RE_PlaylistDownloadConfiguration.js.map