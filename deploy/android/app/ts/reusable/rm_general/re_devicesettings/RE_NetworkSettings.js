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
    var RE_NetworkSettings = (function (_super) {
        __extends(RE_NetworkSettings, _super);
        function RE_NetworkSettings() {
            var _this = _super.call(this) || this;
            _this._ethernetSettings = null;
            _this._httpProxySettings = null;
            _this._wifiSettings = null;
            return _this;
        }
        RE_NetworkSettings.prototype.setEthernetSettings = function (ethernetSettings) {
            this._ethernetSettings = ethernetSettings;
        };
        RE_NetworkSettings.prototype.getEthernetSettings = function () {
            return this._ethernetSettings;
        };
        RE_NetworkSettings.prototype.setHTTPProxySettings = function (httpProxySettings) {
            this._httpProxySettings = httpProxySettings;
        };
        RE_NetworkSettings.prototype.getHTTPProxySettings = function () {
            return this._httpProxySettings;
        };
        RE_NetworkSettings.prototype.setWifiSettings = function (wifiSettings) {
            this._wifiSettings = wifiSettings;
        };
        RE_NetworkSettings.prototype.getWifiSettings = function () {
            return this._wifiSettings;
        };
        return RE_NetworkSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_NetworkSettings = RE_NetworkSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_NetworkSettings.js.map