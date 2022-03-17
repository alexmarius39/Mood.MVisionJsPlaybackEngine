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
var rmGeneralServiceFactory = require("../../rm_general/r_service/RFactory_Service");
var R_SettingsSyncService = require("./RS_SettingsSync");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RFactory_SettingSyncService = (function (_super) {
        __extends(RFactory_SettingSyncService, _super);
        function RFactory_SettingSyncService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_SettingSyncService.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            return new R_SettingsSyncService.rm_nonrenderingservices.RS_SettingsSyncService(aFactoryDescription, aServiceContainer, aLogService, error);
        };
        return RFactory_SettingSyncService;
    }(rmGeneralServiceFactory.rm_general.RFactory_Service));
    rm_nonrenderingservices.RFactory_SettingSyncService = RFactory_SettingSyncService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RFactory_SettingsSync.js.map