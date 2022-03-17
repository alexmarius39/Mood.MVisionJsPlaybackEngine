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
var rmRenderingServices = require("../r_renderingservice/R_RenderingService");
var rmSettingsSyncInterfaceMain = require("./RI_SettingsSyncInterface_Main");
var rmSettingsSyncInterfaceConfig = require("./RI_SettingsSyncInterface_Config");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RS_SettingsSyncInterfaceService = (function (_super) {
        __extends(RS_SettingsSyncInterfaceService, _super);
        function RS_SettingsSyncInterfaceService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iSettingsSyncInterfaceMain = new rmSettingsSyncInterfaceMain.rm_renderingservices.RI_SettingsSyncInterfaceMain(_this);
            _this._iSettingsSyncInterfaceConfig = new rmSettingsSyncInterfaceConfig.rm_renderingservices.RI_SettingsSyncInterfaceConfig(_this);
            _this._aLogService = aLogService;
            return _this;
        }
        RS_SettingsSyncInterfaceService.prototype.setSDKService = function (aSDKService) {
            this._aSDKService = aSDKService;
        };
        RS_SettingsSyncInterfaceService.prototype.setUtilsService = function (aUtilsService) {
            this._aUtilsService = aUtilsService;
        };
        RS_SettingsSyncInterfaceService.prototype.start = function (error, context, callback) {
            var htmlUISettingsButton = document.getElementById("sync_settings_id");
            if (htmlUISettingsButton) {
                htmlUISettingsButton.style.display = "block";
                htmlUISettingsButton.style.position = "absolute";
                htmlUISettingsButton.style.zIndex = "99999997";
                htmlUISettingsButton.style.top = "10";
                htmlUISettingsButton.style.left = "10";
            }
            context != null && context.setError(error);
            callback != null && callback(context);
        };
        RS_SettingsSyncInterfaceService.prototype.stop = function (error, context, callback) {
            var uiWindow = document.getElementById("myModal");
            if (uiWindow) {
                while (uiWindow.firstChild) {
                    uiWindow.removeChild(uiWindow.firstChild);
                }
                uiWindow.style.display = "none";
            }
            var htmlUISettingsButton = document.getElementById("sync_settings_id");
            if (htmlUISettingsButton) {
                htmlUISettingsButton.style.display = "none";
            }
            context != null && context.setError(error);
            callback != null && callback(context);
        };
        return RS_SettingsSyncInterfaceService;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.RS_SettingsSyncInterfaceService = RS_SettingsSyncInterfaceService;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RS_SettingsSyncInterface.js.map