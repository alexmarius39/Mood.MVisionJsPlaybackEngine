define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //==================================================================                                                                                                          
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RI_TestServiceConfig = /** @class */ (function () {
            //----------- constructor 
            function RI_TestServiceConfig(owner) {
                this._owner = owner;
            }
            //-----------------------------------------
            RI_TestServiceConfig.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
                return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
            };
            //-----------------------------------------
            RI_TestServiceConfig.prototype.getPlaybackGlobalConfig = function () {
                return this._owner.getPlaybackGlobalConfig();
            };
            //-----------------------------------------
            RI_TestServiceConfig.prototype.setTestConfig = function (aCronConfiguration) {
                return this._owner.setTestConfig(aCronConfiguration);
            };
            //-----------------------------------------
            RI_TestServiceConfig.prototype.getTestConfig = function () {
                return this._owner.getTestConfig();
            };
            //-----------------------------------------
            RI_TestServiceConfig.prototype.setActivityLogService = function (aActivityLogService) {
                return this._owner.setActivityLogService(aActivityLogService);
            };
            //--------------------------------------------
            RI_TestServiceConfig.prototype.getActivityLogService = function () {
                return this._owner.getActivityLogService();
            };
            return RI_TestServiceConfig;
        }());
        rm_renderingservices.RI_TestServiceConfig = RI_TestServiceConfig;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RI_TestServiceConfig.js.map