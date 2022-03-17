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
var rmITestService3Main = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice3/RI_TestService3Main");
var rmITestService3Config = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice3/RI_TestService3Config");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RS_TestService3 = (function (_super) {
        __extends(RS_TestService3, _super);
        function RS_TestService3(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iTestService3Main = new rmITestService3Main.rm_renderingservices.RI_TestService3Main(_this);
            _this._iTestService3Config = new rmITestService3Config.rm_renderingservices.RI_TestService3Config(_this);
            _this._aLogService = aLogService;
            _this._aPlaybackGlobalConfig = null;
            _this._aActivityLogService = null;
            _this._aTestConfiguration = null;
            return _this;
        }
        RS_TestService3.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
        };
        RS_TestService3.prototype.getPlaybackGlobalConfig = function () {
            return this._aPlaybackGlobalConfig;
        };
        RS_TestService3.prototype.setTestConfig = function (aTestConfiguration) {
            this._aTestConfiguration = aTestConfiguration;
        };
        RS_TestService3.prototype.getTestConfig = function () {
            return this._aTestConfiguration;
        };
        RS_TestService3.prototype.setActivityLogService = function (aActivityLogService) {
            this._aActivityLogService = aActivityLogService;
        };
        RS_TestService3.prototype.getActivityLogService = function () {
            return this._aActivityLogService;
        };
        RS_TestService3.prototype.sleep = function (time) {
            return new Promise(function (resolve) { return setTimeout(resolve, time); });
        };
        RS_TestService3.prototype.test = function (iteration, error, context, callback) {
            var _this = this;
            console.log(this._iService.getServiceName() + " instance: " + this._iService.getInstanceName() + "  iteration:" + iteration);
            if (this._interruptCallback != null) {
                return this._interruptCallback();
            }
            this.sleep(2000).then(function () {
                _this.test(++iteration, error, context, callback);
            });
        };
        RS_TestService3.prototype.run = function (error, context, callback) {
            this.test(0, error, context, callback);
        };
        RS_TestService3.prototype.shutdown = function (error, context, callback) {
            if (callback != null) {
                return callback(context);
            }
        };
        return RS_TestService3;
    }(rmRenderingServices.rm_renderingservices.R_RenderingService));
    rm_renderingservices.RS_TestService3 = RS_TestService3;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RS_TestService3.js.map