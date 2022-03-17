"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_coreservices;
(function (rm_coreservices) {
    var RI_HtmlTemplateDownloaderConfig = (function () {
        function RI_HtmlTemplateDownloaderConfig(owner) {
            this._owner = owner;
        }
        RI_HtmlTemplateDownloaderConfig.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
        };
        RI_HtmlTemplateDownloaderConfig.prototype.getPlaybackGlobalConfig = function () {
            return this._owner.getPlaybackGlobalConfig();
        };
        RI_HtmlTemplateDownloaderConfig.prototype.setActivityLogService = function (aActivityLogService) {
            return this._owner.setActivityLogService(aActivityLogService);
        };
        RI_HtmlTemplateDownloaderConfig.prototype.getActivityLogService = function () {
            return this._owner.getActivityLogService();
        };
        return RI_HtmlTemplateDownloaderConfig;
    }());
    rm_coreservices.RI_HtmlTemplateDownloaderConfig = RI_HtmlTemplateDownloaderConfig;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RI_HtmlTemplateDownloaderConfig.js.map