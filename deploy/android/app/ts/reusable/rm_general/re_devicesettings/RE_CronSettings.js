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
    var RE_CronSettings = (function (_super) {
        __extends(RE_CronSettings, _super);
        function RE_CronSettings() {
            var _this = _super.call(this) || this;
            _this._monitorDataUploadInterval = null;
            _this._playerFilesDownloadInterval = null;
            _this._playlistFeedsUpdateInterval = null;
            _this._playlistUpdateInterval = null;
            return _this;
        }
        RE_CronSettings.prototype.setMonitorDataUploadInterval = function (monitorDataUploadInterval) {
            this._monitorDataUploadInterval = monitorDataUploadInterval;
        };
        RE_CronSettings.prototype.getMonitorDataUploadInterval = function () {
            return this._monitorDataUploadInterval;
        };
        RE_CronSettings.prototype.setPlayerFilesDownloadInterval = function (playerFilesDownloadInterval) {
            this._playerFilesDownloadInterval = playerFilesDownloadInterval;
        };
        RE_CronSettings.prototype.getPlayerFilesDownloadInterval = function () {
            return this._playerFilesDownloadInterval;
        };
        RE_CronSettings.prototype.setPlaylistFeedsUpdateInterval = function (playlistFeedsUpdateInterval) {
            this._playlistFeedsUpdateInterval = playlistFeedsUpdateInterval;
        };
        RE_CronSettings.prototype.getPlaylistFeedsUpdateInterval = function () {
            return this._playlistFeedsUpdateInterval;
        };
        RE_CronSettings.prototype.setPlaylistUpdateInterval = function (playlistUpdateInterval) {
            this._playlistUpdateInterval = playlistUpdateInterval;
        };
        RE_CronSettings.prototype.getPlaylistUpdateInterval = function () {
            return this._playlistUpdateInterval;
        };
        return RE_CronSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_CronSettings = RE_CronSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_CronSettings.js.map