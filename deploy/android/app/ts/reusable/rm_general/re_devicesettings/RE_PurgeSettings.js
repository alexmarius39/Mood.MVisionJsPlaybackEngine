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
    var RE_PurgeSettings = (function (_super) {
        __extends(RE_PurgeSettings, _super);
        function RE_PurgeSettings() {
            var _this = _super.call(this) || this;
            _this._customDirs = null;
            _this._musicTracksPurgeUntouched = null;
            _this._purgeLogsUntouched = null;
            _this._purgeMediaFilesUntouched = null;
            _this._statsUntouched = null;
            return _this;
        }
        RE_PurgeSettings.prototype.setCustomDirs = function (customDirs) {
            this._customDirs = customDirs;
        };
        RE_PurgeSettings.prototype.getCustomDirs = function () {
            return this._customDirs;
        };
        RE_PurgeSettings.prototype.setMusicTracksPurgeUntouched = function (musicTracksPurgeUntouched) {
            this._musicTracksPurgeUntouched = musicTracksPurgeUntouched;
        };
        RE_PurgeSettings.prototype.getMusicTracksPurgeUntouched = function () {
            return this._musicTracksPurgeUntouched;
        };
        RE_PurgeSettings.prototype.setPurgeLogsUntouched = function (purgeLogsUntouched) {
            this._purgeLogsUntouched = purgeLogsUntouched;
        };
        RE_PurgeSettings.prototype.getPurgeLogsUntouched = function () {
            return this._purgeLogsUntouched;
        };
        RE_PurgeSettings.prototype.setPurgeMediaFilesUntouched = function (purgeMediaFilesUntouched) {
            this._purgeMediaFilesUntouched = purgeMediaFilesUntouched;
        };
        RE_PurgeSettings.prototype.getPurgeMediaFilesUntouched = function () {
            return this._purgeMediaFilesUntouched;
        };
        RE_PurgeSettings.prototype.setStatsUntouched = function (statsUntouched) {
            this._statsUntouched = statsUntouched;
        };
        RE_PurgeSettings.prototype.getStatsUntouched = function () {
            return this._statsUntouched;
        };
        return RE_PurgeSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_PurgeSettings = RE_PurgeSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_PurgeSettings.js.map