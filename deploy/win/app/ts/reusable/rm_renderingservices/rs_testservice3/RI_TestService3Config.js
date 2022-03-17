"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var RI_TestService3Config = (function () {
        function RI_TestService3Config(owner) {
            this._owner = owner;
        }
        RI_TestService3Config.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
        };
        RI_TestService3Config.prototype.getPlaybackGlobalConfig = function () {
            return this._owner.getPlaybackGlobalConfig();
        };
        RI_TestService3Config.prototype.setTestConfig = function (aCronConfiguration) {
            return this._owner.setTestConfig(aCronConfiguration);
        };
        RI_TestService3Config.prototype.getTestConfig = function () {
            return this._owner.getTestConfig();
        };
        RI_TestService3Config.prototype.setActivityLogService = function (aActivityLogService) {
            return this._owner.setActivityLogService(aActivityLogService);
        };
        RI_TestService3Config.prototype.getActivityLogService = function () {
            return this._owner.getActivityLogService();
        };
        return RI_TestService3Config;
    }());
    rm_renderingservices.RI_TestService3Config = RI_TestService3Config;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RI_TestService3Config.js.map