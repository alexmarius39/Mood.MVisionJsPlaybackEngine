"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_coreservices;
(function (rm_coreservices) {
    var IImpl_PlaylistDownloaderConfig_R = (function () {
        function IImpl_PlaylistDownloaderConfig_R(owner) {
            this._owner = owner;
        }
        IImpl_PlaylistDownloaderConfig_R.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
        };
        IImpl_PlaylistDownloaderConfig_R.prototype.getPlaybackGlobalConfig = function () {
            return this._owner.getPlaybackGlobalConfig();
        };
        IImpl_PlaylistDownloaderConfig_R.prototype.setActivityLogService = function (aActivityLogService) {
            return this._owner.setActivityLogService(aActivityLogService);
        };
        IImpl_PlaylistDownloaderConfig_R.prototype.getActivityLogService = function () {
            return this._owner.getActivityLogService();
        };
        return IImpl_PlaylistDownloaderConfig_R;
    }());
    rm_coreservices.IImpl_PlaylistDownloaderConfig_R = IImpl_PlaylistDownloaderConfig_R;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=IImpl_PlaylistDownloaderConfig_R.js.map