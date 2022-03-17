define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var RI_ActivityLogServiceConfig = /** @class */ (function () {
            function RI_ActivityLogServiceConfig(owner) {
                this._owner = owner;
            }
            RI_ActivityLogServiceConfig.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
                this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
            };
            RI_ActivityLogServiceConfig.prototype.getPlaybackGlobalConfig = function () {
                return this._owner.getPlaybackGlobalConfig();
            };
            RI_ActivityLogServiceConfig.prototype.setActivityLogServiceSettings = function (settings) {
                this._owner.setActivityLogServiceSettings(settings);
            };
            RI_ActivityLogServiceConfig.prototype.getActivityLogServiceSettings = function () {
                return this._owner.getActivityLogServiceSettings();
            };
            return RI_ActivityLogServiceConfig;
        }());
        rm_transversalservices.RI_ActivityLogServiceConfig = RI_ActivityLogServiceConfig;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=RI_ActivityLogService_Config.js.map