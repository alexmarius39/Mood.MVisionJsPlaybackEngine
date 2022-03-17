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
var rmGeneralService = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rmTransversalServicesJsTV = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_JsTV_R");
var rmTransversalServicesFileSystem = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_FileSystem_JsTV_R");
var rmTransversalServicesApplicationSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_ApplicationSetup_JsTV_R");
var rmTransversalServicesAudioSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_AudioSetup_JsTV_R");
var rmTransversalServicesFirmwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_FirmwareSetup_JsTV_R");
var rmTransversalServicesGeneralConfiguration = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_GeneralConfiguration_JsTV_R");
var rmTransversalServicesInputSourceSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_InputSourceSetup_JsTV_R");
var rmTransversalServicesPowerSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_PowerSetup_JsTV_R");
var rmTransversalServicesTimeSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_TimeSetup_JsTV_R");
var rmTransversalServicesTvSignageSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_TvSignageSetup_JsTV_R");
var rmTransversalServicesHardwareSetup = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_HardwareSetup_JsTV_R");
var rm_transversalservices;
(function (rm_transversalservices) {
    var R_SDK_JsTV = (function (_super) {
        __extends(R_SDK_JsTV, _super);
        function R_SDK_JsTV(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iSDKJsTV = new rmTransversalServicesJsTV.rm_transversalservices.IImpl_SDK_JsTV_R(_this);
            _this._iSDKFileSystem = new rmTransversalServicesFileSystem.rm_transversalservices.IImpl_SDK_FileSystem_JsTV_R(_this);
            _this._iSDKApplicationSetup = new rmTransversalServicesApplicationSetup.rm_transversalservices.IImpl_SDK_ApplicationSetup_JsTV_R(_this);
            _this._iSDKAudioSetup = new rmTransversalServicesAudioSetup.rm_transversalservices.IImpl_SDK_AudioSetup_JsTV_R(_this);
            _this._iSDKFirmwareSetup = new rmTransversalServicesFirmwareSetup.rm_transversalservices.IImpl_SDK_FirmwareSetup_JsTV_R(_this);
            _this._iSDKGeneralConfiguration = new rmTransversalServicesGeneralConfiguration.rm_transversalservices.IImpl_SDK_GeneralConfiguration_JsTV_R(_this);
            _this._iSDKInputSourceSetup = new rmTransversalServicesInputSourceSetup.rm_transversalservices.IImpl_SDK_InputSourceSetup_JsTV_R(_this);
            _this._iSDKPowerSetup = new rmTransversalServicesPowerSetup.rm_transversalservices.IImpl_SDK_PowerSetup_JsTV_R(_this);
            _this._iSDKTimeSetup = new rmTransversalServicesTimeSetup.rm_transversalservices.IImpl_SDK_TimeSetup_JsTV_R(_this);
            _this._iSDKTvSignageSetup = new rmTransversalServicesTvSignageSetup.rm_transversalservices.IImpl_SDK_TvSignageSetup_JsTV_R(_this);
            _this._iSDKHardwareSetup = new rmTransversalServicesHardwareSetup.rm_transversalservices.IImpl_SDK_HardwareSetup_JsTV_R(_this);
            _this._strDefaultHttpHeadersSetName = "";
            _this._aDefaultHttpHeaders = null;
            return _this;
        }
        R_SDK_JsTV.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            this._strDefaultHttpHeadersSetName = "mood_default_http_headers_set";
            this._aDefaultHttpHeaders = this._aServiceLocator._iEntityCreation.createHttpHeaders(this._strDefaultHttpHeadersSetName, error);
            this._aDefaultHttpHeaders.injectDependencies(this._aServiceContainer, this._aServiceLocator, this._aLogService, error);
            return 0;
        };
        R_SDK_JsTV.prototype.getGoodCrtDateTime = function (error, context, callback) {
            var dtGoodCrtDate = new Date();
            if (false) {
                if (context != null)
                    context.setResult(dtGoodCrtDate.toString());
                if (callback != null)
                    return callback(context);
                return;
            }
            var callbackCrtTime = function callbackCrtTime(ctx) {
                if (ctx != null)
                    ctx.setError(error);
                if (callback != null)
                    return callback(ctx);
                return;
            };
            this._iSDKTimeSetup.getCrtDateTime(error, context, callbackCrtTime);
        };
        R_SDK_JsTV.prototype.getSyncGoodCrtDateTime = function (error, context) {
            return new Date();
        };
        return R_SDK_JsTV;
    }(rmGeneralService.rm_general.R_Service));
    rm_transversalservices.R_SDK_JsTV = R_SDK_JsTV;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=R_SDK_JsTV.js.map