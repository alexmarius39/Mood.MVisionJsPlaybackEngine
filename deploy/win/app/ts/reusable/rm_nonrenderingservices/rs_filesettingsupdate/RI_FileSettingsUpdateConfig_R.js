"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RI_FileSettingsUpdateConfig_R = (function () {
        function RI_FileSettingsUpdateConfig_R(owner) {
            this._owner = owner;
        }
        RI_FileSettingsUpdateConfig_R.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
        };
        RI_FileSettingsUpdateConfig_R.prototype.getPlaybackGlobalConfig = function () {
            return this._owner.getPlaybackGlobalConfig();
        };
        RI_FileSettingsUpdateConfig_R.prototype.setActivityLogService = function (aActivityLogService) {
            return this._owner.setActivityLogService(aActivityLogService);
        };
        RI_FileSettingsUpdateConfig_R.prototype.getActivityLogService = function () {
            return this._owner.getActivityLogService();
        };
        RI_FileSettingsUpdateConfig_R.prototype.getMainDebugParamAsBoolean = function () {
            return this._owner.getMainDebugParamAsBoolean();
        };
        RI_FileSettingsUpdateConfig_R.prototype.getAppServerBaseUrl = function () {
            return this._owner.getAppServerBaseUrl();
        };
        RI_FileSettingsUpdateConfig_R.prototype.getAppServerBasePath = function () {
            return this._owner.getAppServerBasePath();
        };
        return RI_FileSettingsUpdateConfig_R;
    }());
    rm_nonrenderingservices.RI_FileSettingsUpdateConfig_R = RI_FileSettingsUpdateConfig_R;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RI_FileSettingsUpdateConfig_R.js.map