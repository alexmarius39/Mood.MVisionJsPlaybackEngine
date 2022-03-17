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
    var RE_WifiAccessPointSettings = (function (_super) {
        __extends(RE_WifiAccessPointSettings, _super);
        function RE_WifiAccessPointSettings() {
            var _this = _super.call(this) || this;
            _this._authenticationType = null;
            _this._password = null;
            _this._ssid = null;
            return _this;
        }
        RE_WifiAccessPointSettings.prototype.setAuthenticationType = function (authenticationType) {
            this._authenticationType = authenticationType;
        };
        RE_WifiAccessPointSettings.prototype.getAuthenticationType = function () {
            return this._authenticationType;
        };
        RE_WifiAccessPointSettings.prototype.setPassword = function (password) {
            this._password = password;
        };
        RE_WifiAccessPointSettings.prototype.getPassword = function () {
            return this._password;
        };
        RE_WifiAccessPointSettings.prototype.setSSID = function (ssid) {
            this._ssid = ssid;
        };
        RE_WifiAccessPointSettings.prototype.getSSID = function () {
            return this._ssid;
        };
        return RE_WifiAccessPointSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_WifiAccessPointSettings = RE_WifiAccessPointSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_WifiAccessPointSettings.js.map