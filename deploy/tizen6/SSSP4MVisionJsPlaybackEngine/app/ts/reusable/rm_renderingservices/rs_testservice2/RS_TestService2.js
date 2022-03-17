var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService", "../../../../../app/ts/reusable/rm_renderingservices/rs_testservice2/RI_TestService2Main", "../../../../../app/ts/reusable/rm_renderingservices/rs_testservice2/RI_TestService2Config"], function (require, exports, rmRenderingServices, rmITestService2Main, rmITestService2Config) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //=========================================================================================================
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RS_TestService2 = /** @class */ (function (_super) {
            __extends(RS_TestService2, _super);
            //----------- constructor 
            function RS_TestService2(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iTestService2Main = new rmITestService2Main.rm_renderingservices.RI_TestService2Main(_this);
                _this._iTestService2Config = new rmITestService2Config.rm_renderingservices.RI_TestService2Config(_this);
                _this._aLogService = aLogService;
                _this._aPlaybackGlobalConfig = null;
                _this._aActivityLogService = null;
                _this._aTestConfiguration = null;
                RS_TestService2._serviceInstance++;
                return _this;
            }
            //=========================================
            //  implementation of config interface
            //=========================================
            //-----------------------------------------
            RS_TestService2.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
                this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
            };
            //-----------------------------------------
            RS_TestService2.prototype.getPlaybackGlobalConfig = function () {
                return this._aPlaybackGlobalConfig;
            };
            //-----------------------------------------
            RS_TestService2.prototype.setTestConfig = function (aTestConfiguration) {
                this._aTestConfiguration = aTestConfiguration;
            };
            //-----------------------------------------
            RS_TestService2.prototype.getTestConfig = function () {
                return this._aTestConfiguration;
            };
            //-----------------------------------------
            RS_TestService2.prototype.setActivityLogService = function (aActivityLogService) {
                this._aActivityLogService = aActivityLogService;
            };
            //--------------------------------------------
            RS_TestService2.prototype.getActivityLogService = function () {
                return this._aActivityLogService;
            };
            //=========================================
            //  implementation of main interface
            //=========================================
            // sleep time expects milliseconds
            RS_TestService2.prototype.sleep = function (time) {
                return new Promise(function (resolve) { return setTimeout(resolve, time); });
            };
            //--------------------------------------------------
            RS_TestService2.prototype.test = function (iteration, error, context, callback) {
                var _this = this;
                if (iteration > 8) {
                    if (callback != null) {
                        context.setObject2Result(this);
                        return callback(context);
                    }
                    return;
                }
                console.log(this._iService.getServiceName() + " instance: " + this._iService.getInstanceName() + "  iteration:" + iteration);
                if (this._interruptCallback != null) {
                    return this._interruptCallback();
                }
                // Usage!
                this.sleep(2000).then(function () {
                    _this.test(++iteration, error, context, callback);
                });
            };
            //-----------------------------
            RS_TestService2.prototype.run = function (error, context, callback) {
                this.test(0, error, context, callback);
            };
            //-----------------------------
            RS_TestService2.prototype.shutdown = function (error, context, callback) {
                //console.log(this._iService.getServiceName() + " instance: " + this._iService.getInstanceName() + "  - shutdown by interruption");
                //------------------ end 
                if (callback != null) {
                    //context.setError(error);
                    //context.setBoolResult(true);
                    return callback(context);
                }
            };
            RS_TestService2._serviceInstance = 0;
            return RS_TestService2;
        }(rmRenderingServices.rm_renderingservices.R_RenderingService));
        rm_renderingservices.RS_TestService2 = RS_TestService2;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RS_TestService2.js.map