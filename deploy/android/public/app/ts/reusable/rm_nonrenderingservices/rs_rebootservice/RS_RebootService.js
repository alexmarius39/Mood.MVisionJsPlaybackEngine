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
define(["require", "exports", "../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/R_NonRenderingService", "../../../../../app/ts/reusable/rm_nonrenderingservices/rs_rebootservice/RI_RebootServiceRun", "../../../../../app/ts/reusable/rm_nonrenderingservices/rs_rebootservice/RI_RebootServiceConfig"], function (require, exports, rmNonRenderingServices, rmNonRenderingServices2, rmNonRenderingServices3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RS_RebootService = /** @class */ (function (_super) {
            __extends(RS_RebootService, _super);
            //----------- constructor 
            function RS_RebootService(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._iRebootServiceRun = new rmNonRenderingServices2.rm_nonrenderingservices.RI_RebootServiceRun(_this);
                _this._iRebootServiceConfig = new rmNonRenderingServices3.rm_nonrenderingservices.RI_RebootServiceConfig(_this);
                _this._aLogService = aLogService;
                _this._aPlaybackGlobalConfig = null;
                _this._aActivityLogService = null;
                return _this;
                //this._aTestConfiguration    = null;
            }
            //------------------------------
            RS_RebootService.prototype.injectDependencies = function (aServiceContainer, aServiceLocator, aLogService, error) {
                this._aServiceLocator = aServiceLocator; //;<amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator>this._aServiceContainer._iServiceManager.getServiceByAbstractName("A_ServiceLocator", null, error);
                return 0;
            };
            //=========================================
            //  implementation of config interface
            //=========================================
            //-----------------------------------------
            RS_RebootService.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
                this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
            };
            //-----------------------------------------
            RS_RebootService.prototype.getPlaybackGlobalConfig = function () {
                return this._aPlaybackGlobalConfig;
            };
            /*
            //-----------------------------------------
            public setTestConfig(aTestConfiguration: amTestConfig.am_renderingservices.AE_TestConfiguration)
            {
              this._aTestConfiguration = aTestConfiguration;
            }
            //-----------------------------------------
            public getTestConfig() : amTestConfig.am_renderingservices.AE_TestConfiguration
            {
              return this._aTestConfiguration;
            }
            */
            //-----------------------------------------
            RS_RebootService.prototype.setActivityLogService = function (aActivityLogService) {
                this._aActivityLogService = aActivityLogService;
            };
            //--------------------------------------------
            RS_RebootService.prototype.getActivityLogService = function () {
                return this._aActivityLogService;
            };
            // sleep time expects milliseconds
            RS_RebootService.prototype.sleep = function (time) {
                return new Promise(function (resolve) { return setTimeout(resolve, time); });
            };
            //--------------------------------------------------
            RS_RebootService.prototype.test = function (iteration, error, context, callback) {
                var _this = this;
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
            RS_RebootService.prototype.run = function (error, context, callback) {
                //this.test(0, error, context,callback);  
                var self = this;
                var iteration = 1;
                console.log(this._iService.getServiceName() + " instance: " + this._iService.getInstanceName() + "  iteration:" + iteration);
                var aPowerProperties = self._aServiceLocator._iEntityCreation.createDefaultPowerProperties(error);
                aPowerProperties.setPowerCommand("reboot");
                var errorExecPowerCmd = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextExecPowerCmd = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackReboot = function callbackReboot() {
                };
                contextExecPowerCmd.setRemoteCallback(true);
                if (self._aPlaybackGlobalConfig._realPlatform == "tizen")
                    self._aSDKService._iSDKPowerSetup.executePowerCommand(aPowerProperties, errorExecPowerCmd, contextExecPowerCmd, callbackReboot);
                else
                    callbackReboot();
            };
            //-----------------------------
            RS_RebootService.prototype.shutdown = function (error, context, callback) {
                //console.log(this._iService.getServiceName() + " instance: " + this._iService.getInstanceName() + "  - shutdown");
                //------------------ end 
                if (callback != null) {
                    //context.setError(error);
                    //context.setBoolResult(true);
                    return callback(context);
                }
            };
            return RS_RebootService;
        }(rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService));
        rm_nonrenderingservices.RS_RebootService = RS_RebootService;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RS_RebootService.js.map