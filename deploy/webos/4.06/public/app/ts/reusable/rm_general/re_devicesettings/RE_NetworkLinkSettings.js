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
define(["require", "exports", "../r_entity/R_Entity"], function (require, exports, rmEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RE_NetworkLinkSettings = /** @class */ (function (_super) {
            __extends(RE_NetworkLinkSettings, _super);
            function RE_NetworkLinkSettings() {
                var _this = _super.call(this) || this;
                _this._dns1 = null;
                _this._dns2 = null;
                _this._gateway = null;
                _this._ipAddress = null;
                _this._netmask = null;
                return _this;
            }
            RE_NetworkLinkSettings.prototype.setDNS1 = function (dns1) {
                this._dns1 = dns1;
            };
            RE_NetworkLinkSettings.prototype.getDNS1 = function () {
                return this._dns1;
            };
            RE_NetworkLinkSettings.prototype.setDNS2 = function (dns2) {
                this._dns2 = dns2;
            };
            RE_NetworkLinkSettings.prototype.getDNS2 = function () {
                return this._dns2;
            };
            RE_NetworkLinkSettings.prototype.setGateway = function (gateway) {
                this._gateway = gateway;
            };
            RE_NetworkLinkSettings.prototype.getGateway = function () {
                return this._gateway;
            };
            RE_NetworkLinkSettings.prototype.setIPAddress = function (ipAddress) {
                this._ipAddress = ipAddress;
            };
            RE_NetworkLinkSettings.prototype.getIPAddress = function () {
                return this._ipAddress;
            };
            RE_NetworkLinkSettings.prototype.setNetmask = function (netmask) {
                this._netmask = netmask;
            };
            RE_NetworkLinkSettings.prototype.getNetmask = function () {
                return this._netmask;
            };
            return RE_NetworkLinkSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_NetworkLinkSettings = RE_NetworkLinkSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_NetworkLinkSettings.js.map