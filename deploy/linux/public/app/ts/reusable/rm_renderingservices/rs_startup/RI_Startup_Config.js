define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RI_StartupConfig = /** @class */ (function () {
            //----------- constructor 
            function RI_StartupConfig(owner) {
                this._owner = owner;
            }
            RI_StartupConfig.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
                this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
            };
            RI_StartupConfig.prototype.getPlaybackGlobalConfig = function () {
                return this._owner.getPlaybackGlobalConfig();
            };
            RI_StartupConfig.prototype.getDefaultStartupSettings = function () {
                return this._owner.getDefaultStartupSettings();
            };
            RI_StartupConfig.prototype.setDefaultStartupSettings = function (aStartupSettings) {
                this._owner.setDefaultStartupSettings(aStartupSettings);
            };
            //-----------------------------
            RI_StartupConfig.prototype.getActivityLogService = function () {
                return this._owner.getActivityLogService();
            };
            RI_StartupConfig.prototype.setActivityLogService = function (aActivityLogService) {
                return this._owner.setActivityLogService(aActivityLogService);
            };
            return RI_StartupConfig;
        }());
        rm_renderingservices.RI_StartupConfig = RI_StartupConfig;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RI_Startup_Config.js.map