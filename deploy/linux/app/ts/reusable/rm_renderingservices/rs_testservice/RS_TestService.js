"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingservice/R_RenderingService");
var rmITestServiceMain = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice/RI_TestServiceMain");
var rmITestServiceConfig = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice/RI_TestServiceConfig");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RS_TestService = (function (_super) {
        __extends(RS_TestService, _super);
        function RS_TestService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iTestServiceMain = new rmITestServiceMain.rm_renderingservices.RI_TestServiceMain(_this);
            _this._iTestServiceConfig = new rmITestServiceConfig.rm_renderingservices.RI_TestServiceConfig(_this);
            _this._aLogService = aLogService;
            _this._aPlaybackGlobalConfig = null;
            _this._aActivityLogService = null;
            _this._aTestConfiguration = null;
            return _this;
        }
        RS_TestService.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
        };
        RS_TestService.prototype.getPlaybackGlobalConfig = function () {
            return this._aPlaybackGlobalConfig;
        };
        RS_TestService.prototype.setTestConfig = function (aTestConfiguration) {
            this._aTestConfiguration = aTestConfiguration;
        };
        RS_TestService.prototype.getTestConfig = function () {
            return this._aTestConfiguration;
        };
        RS_TestService.prototype.setActivityLogService = function (aActivityLogService) {
            this._aActivityLogService = aActivityLogService;
        };
        RS_TestService.prototype.getActivityLogService = function () {
            return this._aActivityLogService;
        };
        RS_TestService.prototype.sleep = function (time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        };
        RS_TestService.prototype.test = function (iteration, error, context, callback) {
            var _this = this;
            if (iteration > 3) {
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
            this.sleep(2000).then(function () {
                _this.test(++iteration, error, context, callback);
            });
        };
        RS_TestService.prototype.run = function (error, context, callback) {
            this._iServiceRun.setServiceStatus("status_playlist_changed");
            this.test(0, error, context, callback);
        };
        RS_TestService.prototype.shutdown = function (error, context, callback) {
            if (callback != null) {
                return callback(context);
            }
        };
        return RS_TestService;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.RS_TestService = RS_TestService;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RS_TestService.js.map