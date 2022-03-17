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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var R_AppInstallProperties = /** @class */ (function (_super) {
            __extends(R_AppInstallProperties, _super);
            //----------- constructor 
            function R_AppInstallProperties() {
                var _this = _super.call(this) || this;
                _this._aAppSoftwareTransfer = null;
                _this._aAppServerProperties = null;
                _this._bUseAppEmptyUrl = false;
                _this._bReboot = false;
                return _this;
            }
            //-----------------------------------
            R_AppInstallProperties.prototype.getUseAppEmptyUrl = function () {
                return this._bUseAppEmptyUrl;
            };
            //-----------------------------------
            R_AppInstallProperties.prototype.setUseAppEmptyUrl = function (bUseAppEmptyUrl) {
                this._bUseAppEmptyUrl = bUseAppEmptyUrl;
            };
            //-----------------------------------
            R_AppInstallProperties.prototype.getReboot = function () {
                return this._bReboot;
            };
            //-----------------------------------
            R_AppInstallProperties.prototype.setReboot = function (bReboot) {
                this._bReboot = bReboot;
            };
            //--------------------------------
            R_AppInstallProperties.prototype.getSoftwareFileTransfer = function () {
                return this._aAppSoftwareTransfer;
            };
            //--------------------------------
            R_AppInstallProperties.prototype.setSoftwareFileTransfer = function (aAppSoftwareTransfer) {
                this._aAppSoftwareTransfer = aAppSoftwareTransfer;
            };
            //--------------------------------
            R_AppInstallProperties.prototype.getAppServerProperties = function () {
                return this._aAppServerProperties;
            };
            //--------------------------------
            R_AppInstallProperties.prototype.setAppServerProperties = function (aAppServerProperties) {
                this._aAppServerProperties = aAppServerProperties;
            };
            return R_AppInstallProperties;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_AppInstallProperties = R_AppInstallProperties;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_AppInstallProperties.js.map