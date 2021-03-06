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
define(["require", "exports", "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_JsTV_NodeJs", "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_FileSystem_NodeJs", "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_ApplicationSetup_NodeJs", "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_AudioSetup_NodeJs", "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_FirmwareSetup_NodeJs", "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_GeneralConfiguration_NodeJs", "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_InputSourceSetup_NodeJs", "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_PowerSetup_NodeJs", "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_TimeSetup_NodeJs", "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_TvSignageSetup_NodeJs", "../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/IImpl_SDK_HardwareSetup_NodeJs", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/R_SDK_JsTV"], function (require, exports, nmTransversalServicesJsTV, nmTransversalServicesFileSystem, nmTransversalServicesApplicationSetup, nmTransversalServicesAudioSetup, nmTransversalServicesFirmwareSetup, nmTransversalServicesGeneralConfiguration, nmTransversalServicesInputSourceSetup, nmTransversalServicesPowerSetup, nmTransversalServicesTimeSetup, nmTransversalServicesTvSignageSetup, nmTransversalServicesHardwareSetup, rmTransversalServicesSDKJsTV) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var N_SDK_NodeJs = /** @class */ (function (_super) {
            __extends(N_SDK_NodeJs, _super); // extends rmGeneralService.rm_general.R_Service 
            function N_SDK_NodeJs(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._service_abstract_name = "A_SDK_JsTV";
                _this._service_name = "N_SDK_NodeJs";
                _this._iSDKJsTV = new nmTransversalServicesJsTV.nm_transversalservices.IImpl_SDK_JsTV_NodeJs(_this);
                _this._iSDKFileSystem = new nmTransversalServicesFileSystem.nm_transversalservices.IImpl_SDK_FileSystem_NodeJs(_this);
                _this._iSDKApplicationSetup = new nmTransversalServicesApplicationSetup.nm_transversalservices.IImpl_SDK_ApplicationSetup_NodeJs(_this);
                _this._iSDKAudioSetup = new nmTransversalServicesAudioSetup.nm_transversalservices.IImpl_SDK_AudioSetup_NodeJs(_this);
                _this._iSDKFirmwareSetup = new nmTransversalServicesFirmwareSetup.nm_transversalservices.IImpl_SDK_FirmwareSetup_NodeJs(_this);
                _this._iSDKGeneralConfiguration = new nmTransversalServicesGeneralConfiguration.nm_transversalservices.IImpl_SDK_GeneralConfiguration_NodeJs(_this);
                _this._iSDKInputSourceSetup = new nmTransversalServicesInputSourceSetup.nm_transversalservices.IImpl_SDK_InputSourceSetup_NodeJs(_this);
                _this._iSDKPowerSetup = new nmTransversalServicesPowerSetup.nm_transversalservices.IImpl_SDK_PowerSetup_NodeJs(_this);
                _this._iSDKTimeSetup = new nmTransversalServicesTimeSetup.nm_transversalservices.IImpl_SDK_TimeSetup_NodeJs(_this);
                _this._iSDKTvSignageSetup = new nmTransversalServicesTvSignageSetup.nm_transversalservices.IImpl_SDK_TvSignageSetup_NodeJs(_this);
                _this._iSDKHardwareSetup = new nmTransversalServicesHardwareSetup.nm_transversalservices.IImpl_SDK_HardwareSetup_NodeJs(_this);
                return _this;
                //this._aLogService = aLogService;
            }
            return N_SDK_NodeJs;
        }(rmTransversalServicesSDKJsTV.rm_transversalservices.R_SDK_JsTV // extends rmGeneralService.rm_general.R_Service 
        ));
        nm_transversalservices.N_SDK_NodeJs = N_SDK_NodeJs;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=N_SDK_NodeJs.js.map