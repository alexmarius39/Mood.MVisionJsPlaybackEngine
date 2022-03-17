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
    var RE_TimeSettings = (function (_super) {
        __extends(RE_TimeSettings, _super);
        function RE_TimeSettings() {
            var _this = _super.call(this) || this;
            _this._bUseMoodServer = true;
            _this._strServerUrl = null;
            _this._strServerTimeZone = null;
            _this._bApplyServerTimeAsDeviceTimeAtStartup = false;
            _this._strDefaultDeviceTimeZone = null;
            _this._strLastDeviceTimeZone = null;
            _this._bApplyDefaultDeviceTimeZoneAtStartup = false;
            _this._bUseNTP = false;
            _this._bLastUseNTP = false;
            _this._strNTPServerUrl = null;
            _this._strLastNTPServerUrl = null;
            _this._strNTPTimeZone = null;
            _this._strLastNTPTimeZone = null;
            return _this;
        }
        RE_TimeSettings.prototype.getUseMoodServer = function () {
            return this._bUseMoodServer;
        };
        RE_TimeSettings.prototype.setUseMoodServer = function (bUseModdServer) {
            this._bUseMoodServer = bUseModdServer;
        };
        RE_TimeSettings.prototype.getServerUrl = function () {
            return this._strServerUrl;
        };
        RE_TimeSettings.prototype.setServerUrl = function (strServerUrl) {
            this._strServerUrl = strServerUrl;
        };
        RE_TimeSettings.prototype.getServerTimeZone = function () {
            return this._strServerTimeZone;
        };
        RE_TimeSettings.prototype.setServerTimeZone = function (strServerTimeZone) {
            this._strServerTimeZone = strServerTimeZone;
        };
        RE_TimeSettings.prototype.getApplyServerTimeAsDevieTimeAtStartup = function () {
            return this._bApplyServerTimeAsDeviceTimeAtStartup;
        };
        RE_TimeSettings.prototype.setApplyServerTimeAsDevieTimeAtStartup = function (bApplyServerTime) {
            this._bApplyServerTimeAsDeviceTimeAtStartup = bApplyServerTime;
        };
        RE_TimeSettings.prototype.getDefaultDeviceTimeZone = function () {
            return this._strDefaultDeviceTimeZone;
        };
        RE_TimeSettings.prototype.setDefaultDeviceTimeZone = function (strDefaultDeviceTimeZone) {
            this._strDefaultDeviceTimeZone = strDefaultDeviceTimeZone;
        };
        RE_TimeSettings.prototype.getLastDeviceTimeZone = function () {
            return this._strLastDeviceTimeZone;
        };
        RE_TimeSettings.prototype.setLastDeviceTimeZone = function (strLastDeviceTimeZone) {
            this._strLastDeviceTimeZone = strLastDeviceTimeZone;
        };
        RE_TimeSettings.prototype.getApplyDefaultDeviceTimeZoneAtStartup = function () {
            return this._bApplyDefaultDeviceTimeZoneAtStartup;
        };
        RE_TimeSettings.prototype.setApplyDefaultDeviceTimeZoneAtStartup = function (bApplyDeviceTimeZone) {
            this._bApplyDefaultDeviceTimeZoneAtStartup = bApplyDeviceTimeZone;
        };
        RE_TimeSettings.prototype.getUseNTP = function () {
            return this._bUseNTP;
        };
        RE_TimeSettings.prototype.setUseNTP = function (bUseNTP) {
            this._bUseNTP = bUseNTP;
        };
        RE_TimeSettings.prototype.getLastUseNTP = function () {
            return this._bLastUseNTP;
        };
        RE_TimeSettings.prototype.setLastUseNTP = function (bLastUseNTP) {
            this._bLastUseNTP = bLastUseNTP;
        };
        RE_TimeSettings.prototype.getNTPServerUrl = function () {
            return this._strNTPServerUrl;
        };
        RE_TimeSettings.prototype.setNTPServerUrl = function (strNTPServerUrl) {
            this._strNTPServerUrl = strNTPServerUrl;
        };
        RE_TimeSettings.prototype.getLastNTPServerUrl = function () {
            return this._strLastNTPServerUrl;
        };
        RE_TimeSettings.prototype.setLastNTPServerUrl = function (strLastNTPServerUrl) {
            this._strLastNTPServerUrl = strLastNTPServerUrl;
        };
        RE_TimeSettings.prototype.getNTPTimeZone = function () {
            return this._strNTPTimeZone;
        };
        RE_TimeSettings.prototype.setNTPTimeZone = function (strNTPTimeZone) {
            this._strNTPTimeZone = strNTPTimeZone;
        };
        RE_TimeSettings.prototype.getLastNTPTimeZone = function () {
            return this._strLastNTPTimeZone;
        };
        RE_TimeSettings.prototype.setLastNTPTimeZone = function (strNTPTimeZone) {
            this._strLastNTPTimeZone = strNTPTimeZone;
        };
        return RE_TimeSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_TimeSettings = RE_TimeSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_TimeSettings.js.map