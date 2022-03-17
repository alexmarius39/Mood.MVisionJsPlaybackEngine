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
    var RE_HTTPProxySettings = (function (_super) {
        __extends(RE_HTTPProxySettings, _super);
        function RE_HTTPProxySettings() {
            var _this = _super.call(this) || this;
            _this._proxyEnabled = null;
            _this._excludedHosts = null;
            _this._host = null;
            _this._password = null;
            _this._port = null;
            _this._username = null;
            return _this;
        }
        RE_HTTPProxySettings.prototype.setProxyEnabled = function (proxyEnabled) {
            this._proxyEnabled = proxyEnabled;
        };
        RE_HTTPProxySettings.prototype.getProxyEnabled = function () {
            return this._proxyEnabled;
        };
        RE_HTTPProxySettings.prototype.setExcludedHosts = function (excludedHosts) {
            this._excludedHosts = excludedHosts;
        };
        RE_HTTPProxySettings.prototype.getExcludedHosts = function () {
            return this._excludedHosts;
        };
        RE_HTTPProxySettings.prototype.setHost = function (host) {
            this._host = host;
        };
        RE_HTTPProxySettings.prototype.getHost = function () {
            return this._host;
        };
        RE_HTTPProxySettings.prototype.setPassword = function (password) {
            this._password = password;
        };
        RE_HTTPProxySettings.prototype.getPassword = function () {
            return this._password;
        };
        RE_HTTPProxySettings.prototype.setPort = function (port) {
            this._port = port;
        };
        RE_HTTPProxySettings.prototype.getPort = function () {
            return this._port;
        };
        RE_HTTPProxySettings.prototype.setUsername = function (username) {
            this._username = username;
        };
        RE_HTTPProxySettings.prototype.getUsername = function () {
            return this._username;
        };
        return RE_HTTPProxySettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_HTTPProxySettings = RE_HTTPProxySettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_HTTPProxySettings.js.map