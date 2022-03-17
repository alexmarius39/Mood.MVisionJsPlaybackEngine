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
    var RE_TimeSyncSettings = (function (_super) {
        __extends(RE_TimeSyncSettings, _super);
        function RE_TimeSyncSettings() {
            var _this = _super.call(this) || this;
            _this._customNtpServerUrl = null;
            _this._syncMode = null;
            return _this;
        }
        RE_TimeSyncSettings.prototype.setCustomNtpServerUrl = function (customNtpServerUrl) {
            this._customNtpServerUrl = customNtpServerUrl;
        };
        RE_TimeSyncSettings.prototype.getCustomNtpServerUrl = function () {
            return this._customNtpServerUrl;
        };
        RE_TimeSyncSettings.prototype.setSyncMode = function (syncMode) {
            this._syncMode = syncMode;
        };
        RE_TimeSyncSettings.prototype.getSyncMode = function () {
            return this._syncMode;
        };
        return RE_TimeSyncSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_TimeSyncSettings = RE_TimeSyncSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_TimeSyncSettings.js.map