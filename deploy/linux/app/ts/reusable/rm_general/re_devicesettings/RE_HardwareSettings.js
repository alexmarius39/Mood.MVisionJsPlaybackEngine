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
    var RE_HardwareSettings = (function (_super) {
        __extends(RE_HardwareSettings, _super);
        function RE_HardwareSettings() {
            var _this = _super.call(this) || this;
            _this._earlyAdopter = null;
            _this._knownSerialProductIds = null;
            _this._networkHostname = null;
            return _this;
        }
        RE_HardwareSettings.prototype.setEarlyAdopter = function (earlyAdopter) {
            this._earlyAdopter = earlyAdopter;
        };
        RE_HardwareSettings.prototype.getEarlyAdopter = function () {
            return this._earlyAdopter;
        };
        RE_HardwareSettings.prototype.setKnownSerialProductIds = function (knownSerialProductIds) {
            this._knownSerialProductIds = knownSerialProductIds;
        };
        RE_HardwareSettings.prototype.getKnownSerialProductIds = function () {
            return this._knownSerialProductIds;
        };
        RE_HardwareSettings.prototype.setNetworkHostname = function (networkHostname) {
            this._networkHostname = networkHostname;
        };
        RE_HardwareSettings.prototype.getNetworkHostname = function () {
            return this._networkHostname;
        };
        return RE_HardwareSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_HardwareSettings = RE_HardwareSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_HardwareSettings.js.map