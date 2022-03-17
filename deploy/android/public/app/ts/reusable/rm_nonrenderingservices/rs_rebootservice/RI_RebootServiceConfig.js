define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RI_RebootServiceConfig = /** @class */ (function () {
            //----------- constructor 
            function RI_RebootServiceConfig(owner) {
                this._owner = owner;
            }
            //-----------------------------------------
            RI_RebootServiceConfig.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
                return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
            };
            //-----------------------------------------
            RI_RebootServiceConfig.prototype.getPlaybackGlobalConfig = function () {
                return this._owner.getPlaybackGlobalConfig();
            };
            /*
            //-----------------------------------------
            public setTestConfig(aCronConfiguration: amTestConfig.am_renderingservices.AE_TestConfiguration)
            {
              return this._owner.setTestConfig(aCronConfiguration);
            }
            //-----------------------------------------
            public getTestConfig() : amTestConfig.am_renderingservices.AE_TestConfiguration
            {
              return this._owner.getTestConfig();
            }
            */
            //-----------------------------------------
            RI_RebootServiceConfig.prototype.setActivityLogService = function (aActivityLogService) {
                return this._owner.setActivityLogService(aActivityLogService);
            };
            //--------------------------------------------
            RI_RebootServiceConfig.prototype.getActivityLogService = function () {
                return this._owner.getActivityLogService();
            };
            return RI_RebootServiceConfig;
        }());
        rm_nonrenderingservices.RI_RebootServiceConfig = RI_RebootServiceConfig;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RI_RebootServiceConfig.js.map