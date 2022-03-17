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
    var RE_P2PSettings = (function (_super) {
        __extends(RE_P2PSettings, _super);
        function RE_P2PSettings() {
            var _this = _super.call(this) || this;
            _this._p2pPort = null;
            _this._p2pServerEnabled = null;
            _this._p2pClientEnabled = null;
            return _this;
        }
        RE_P2PSettings.prototype.setPort = function (p2pPort) {
            this._p2pPort = p2pPort;
        };
        RE_P2PSettings.prototype.getPort = function () {
            return this._p2pPort;
        };
        RE_P2PSettings.prototype.setServerEnabled = function (p2pServerEnabled) {
            this._p2pServerEnabled = p2pServerEnabled;
        };
        RE_P2PSettings.prototype.getServerEnabled = function () {
            return this._p2pServerEnabled;
        };
        RE_P2PSettings.prototype.setClientEnabled = function (p2pClientEnabled) {
            this._p2pClientEnabled = p2pClientEnabled;
        };
        RE_P2PSettings.prototype.getClientEnabled = function () {
            return this._p2pClientEnabled;
        };
        return RE_P2PSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_P2PSettings = RE_P2PSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_P2PSettings.js.map