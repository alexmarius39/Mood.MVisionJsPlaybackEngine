"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var RI_ScreenshotConfig = (function () {
        function RI_ScreenshotConfig(owner) {
            this._owner = owner;
        }
        RI_ScreenshotConfig.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
        };
        RI_ScreenshotConfig.prototype.getPlaybackGlobalConfig = function () {
            return this._owner.getPlaybackGlobalConfig();
        };
        RI_ScreenshotConfig.prototype.setDefaultScreenshotOptions = function (aScreenshotOptions) {
            this._owner.setDefaultScreenshotOptions(aScreenshotOptions);
        };
        RI_ScreenshotConfig.prototype.getDefaultScreenshotOptions = function () {
            return this._owner.getDefaultScreenshotOptions();
        };
        RI_ScreenshotConfig.prototype.setActivityLogService = function (aActivityLogService) {
            return this._owner.setActivityLogService(aActivityLogService);
        };
        RI_ScreenshotConfig.prototype.getActivityLogService = function () {
            return this._owner.getActivityLogService();
        };
        return RI_ScreenshotConfig;
    }());
    rm_renderingservices.RI_ScreenshotConfig = RI_ScreenshotConfig;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RI_Screenshot_Config.js.map