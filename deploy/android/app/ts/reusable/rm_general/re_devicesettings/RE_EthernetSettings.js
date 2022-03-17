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
var rmEntity = require("../r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var RE_EthernetSettings = (function (_super) {
        __extends(RE_EthernetSettings, _super);
        function RE_EthernetSettings() {
            var _this = _super.call(this) || this;
            _this._allowConfigurationChange = null;
            _this._enableDHCP = null;
            _this._interfaceEnabled = null;
            _this._networkLinkSettings = null;
            _this._vlanConfigurations = null;
            return _this;
        }
        RE_EthernetSettings.prototype.setAllowConfigurationChange = function (allowConfigurationChange) {
            this._allowConfigurationChange = allowConfigurationChange;
        };
        RE_EthernetSettings.prototype.getAllowConfigurationChange = function () {
            return this._allowConfigurationChange;
        };
        RE_EthernetSettings.prototype.setEnableDHCP = function (enableDHCP) {
            this._enableDHCP = enableDHCP;
        };
        RE_EthernetSettings.prototype.getEnableDHCP = function () {
            return this._enableDHCP;
        };
        RE_EthernetSettings.prototype.setInterfaceEnabled = function (interfaceEnabled) {
            this._interfaceEnabled = interfaceEnabled;
        };
        RE_EthernetSettings.prototype.getInterfaceEnabled = function () {
            return this._interfaceEnabled;
        };
        RE_EthernetSettings.prototype.setNetworkLinkSettings = function (networkLinkSettings) {
            this._networkLinkSettings = networkLinkSettings;
        };
        RE_EthernetSettings.prototype.getNetworkLinkSettings = function () {
            return this._networkLinkSettings;
        };
        RE_EthernetSettings.prototype.setVLANConfigurations = function (vlanConfigurations) {
            this._vlanConfigurations = vlanConfigurations;
        };
        RE_EthernetSettings.prototype.getVLANConfigurations = function () {
            return this._vlanConfigurations;
        };
        return RE_EthernetSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_EthernetSettings = RE_EthernetSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_EthernetSettings.js.map