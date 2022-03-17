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
define(["require", "exports", "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/IImpl_SDK_JsTV_StandaloneBrowser", "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/IImpl_SDK_FileSystem_StandaloneBrowser", "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/IImpl_SDK_ApplicationSetup_StandaloneBrowser", "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/IImpl_SDK_AudioSetup_StandaloneBrowser", "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/IImpl_SDK_FirmwareSetup_StandaloneBrowser", "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/IImpl_SDK_GeneralConfiguration_StandaloneBrowser", "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/IImpl_SDK_InputSourceSetup_StandaloneBrowser", "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/IImpl_SDK_PowerSetup_StandaloneBrowser", "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/IImpl_SDK_TimeSetup_StandaloneBrowser", "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/IImpl_SDK_TvSignageSetup_StandaloneBrowser", "../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/IImpl_SDK_HardwareSetup_StandaloneBrowser", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/R_SDK_JsTV"], function (require, exports, nmTransversalServicesJsTV, nmTransversalServicesFileSystem, nmTransversalServicesApplicationSetup, nmTransversalServicesAudioSetup, nmTransversalServicesFirmwareSetup, nmTransversalServicesGeneralConfiguration, nmTransversalServicesInputSourceSetup, nmTransversalServicesPowerSetup, nmTransversalServicesTimeSetup, nmTransversalServicesTvSignageSetup, nmTransversalServicesHardwareSetup, rmTransversalServicesSDKJsTV) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // -----------------------------------------------------------------
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var N_SDK_StandaloneBrowser = /** @class */ (function (_super) {
            __extends(N_SDK_StandaloneBrowser, _super); // extends rmGeneralService.rm_general.R_Service 
            function N_SDK_StandaloneBrowser(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._service_abstract_name = "A_SDK_JsTV";
                _this._service_name = "N_SDK_StandaloneBrowser";
                _this._iSDKJsTV = new nmTransversalServicesJsTV.nm_transversalservices.IImpl_SDK_JsTV_StandaloneBrowser(_this);
                _this._iSDKFileSystem = new nmTransversalServicesFileSystem.nm_transversalservices.IImpl_SDK_FileSystem_StandaloneBrowser(_this);
                _this._iSDKApplicationSetup = new nmTransversalServicesApplicationSetup.nm_transversalservices.IImpl_SDK_ApplicationSetup_StandaloneBrowser(_this);
                _this._iSDKAudioSetup = new nmTransversalServicesAudioSetup.nm_transversalservices.IImpl_SDK_AudioSetup_StandaloneBrowser(_this);
                _this._iSDKFirmwareSetup = new nmTransversalServicesFirmwareSetup.nm_transversalservices.IImpl_SDK_FirmwareSetup_StandaloneBrowser(_this);
                _this._iSDKGeneralConfiguration = new nmTransversalServicesGeneralConfiguration.nm_transversalservices.IImpl_SDK_GeneralConfiguration_StandaloneBrowser(_this);
                _this._iSDKInputSourceSetup = new nmTransversalServicesInputSourceSetup.nm_transversalservices.IImpl_SDK_InputSourceSetup_StandaloneBrowser(_this);
                _this._iSDKPowerSetup = new nmTransversalServicesPowerSetup.nm_transversalservices.IImpl_SDK_PowerSetup_StandaloneBrowser(_this);
                _this._iSDKTimeSetup = new nmTransversalServicesTimeSetup.nm_transversalservices.IImpl_SDK_TimeSetup_StandaloneBrowser(_this);
                _this._iSDKTvSignageSetup = new nmTransversalServicesTvSignageSetup.nm_transversalservices.IImpl_SDK_TvSignageSetup_StandaloneBrowser(_this);
                _this._iSDKHardwareSetup = new nmTransversalServicesHardwareSetup.nm_transversalservices.IImpl_SDK_HardwareSetup_StandaloneBrowser(_this);
                return _this;
                //this._aLogService = aLogService;
            }
            return N_SDK_StandaloneBrowser;
        }(rmTransversalServicesSDKJsTV.rm_transversalservices.R_SDK_JsTV // extends rmGeneralService.rm_general.R_Service 
        ));
        nm_transversalservices.N_SDK_StandaloneBrowser = N_SDK_StandaloneBrowser;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=N_SDK_StandaloneBrowser.js.map