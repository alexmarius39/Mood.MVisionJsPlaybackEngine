"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var RI_TestService2Config = (function () {
        function RI_TestService2Config(owner) {
            this._owner = owner;
        }
        RI_TestService2Config.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
        };
        RI_TestService2Config.prototype.getPlaybackGlobalConfig = function () {
            return this._owner.getPlaybackGlobalConfig();
        };
        RI_TestService2Config.prototype.setTestConfig = function (aCronConfiguration) {
            return this._owner.setTestConfig(aCronConfiguration);
        };
        RI_TestService2Config.prototype.getTestConfig = function () {
            return this._owner.getTestConfig();
        };
        RI_TestService2Config.prototype.setActivityLogService = function (aActivityLogService) {
            return this._owner.setActivityLogService(aActivityLogService);
        };
        RI_TestService2Config.prototype.getActivityLogService = function () {
            return this._owner.getActivityLogService();
        };
        return RI_TestService2Config;
    }());
    rm_renderingservices.RI_TestService2Config = RI_TestService2Config;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RI_TestService2Config.js.map