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
    var RE_DebugSettings = (function (_super) {
        __extends(RE_DebugSettings, _super);
        function RE_DebugSettings() {
            var _this = _super.call(this) || this;
            _this._debugViewVisible = null;
            _this._deleteMediaOnLaunch = null;
            _this._deletePlaylistOnLaunch = null;
            _this._monitoringDisabled = null;
            _this._networkSetupDisabled = null;
            _this._playbackLogsUploadDisabled = null;
            _this._playerFilesUpdateDisabled = null;
            _this._crashLoggerEnabled = null;
            _this._lastPlayerChangeId = null;
            _this._streamMusicTracks = null;
            _this._useHeadlessSetupWebAppDevBuild = null;
            return _this;
        }
        RE_DebugSettings.prototype.setDebugViewVisible = function (debugViewVisible) {
            this._debugViewVisible = debugViewVisible;
        };
        RE_DebugSettings.prototype.getDebugViewVisible = function () {
            return this._debugViewVisible;
        };
        RE_DebugSettings.prototype.setDeleteMediaOnLaunch = function (deleteMediaOnLaunch) {
            this._deleteMediaOnLaunch = deleteMediaOnLaunch;
        };
        RE_DebugSettings.prototype.getDeleteMediaOnLaunch = function () {
            return this._deleteMediaOnLaunch;
        };
        RE_DebugSettings.prototype.setDeletePlaylistOnLaunch = function (deletePlaylistOnLaunch) {
            this._deletePlaylistOnLaunch = deletePlaylistOnLaunch;
        };
        RE_DebugSettings.prototype.getDeletePlaylistOnLaunch = function () {
            return this._deletePlaylistOnLaunch;
        };
        RE_DebugSettings.prototype.setMonitoringDisabled = function (monitoringDisabled) {
            this._monitoringDisabled = monitoringDisabled;
        };
        RE_DebugSettings.prototype.getMonitoringDisabled = function () {
            return this._monitoringDisabled;
        };
        RE_DebugSettings.prototype.setNetworkSetupDisabled = function (networkSetupDisabled) {
            this._networkSetupDisabled = networkSetupDisabled;
        };
        RE_DebugSettings.prototype.getNetworkSetupDisabled = function () {
            return this._networkSetupDisabled;
        };
        RE_DebugSettings.prototype.setPlaybackLogsUploadDisabled = function (playbackLogsUploadDisabled) {
            this._playbackLogsUploadDisabled = playbackLogsUploadDisabled;
        };
        RE_DebugSettings.prototype.getPlaybackLogsUploadDisabled = function () {
            return this._playbackLogsUploadDisabled;
        };
        RE_DebugSettings.prototype.setPlayerFilesUpdateDisabled = function (playerFilesUpdateDisabled) {
            this._playerFilesUpdateDisabled = playerFilesUpdateDisabled;
        };
        RE_DebugSettings.prototype.getPlayerFilesUpdateDisabled = function () {
            return this._playerFilesUpdateDisabled;
        };
        RE_DebugSettings.prototype.setCrashLoggerEnabled = function (crashLoggerEnabled) {
            this._crashLoggerEnabled = crashLoggerEnabled;
        };
        RE_DebugSettings.prototype.getCrashLoggerEnabled = function () {
            return this._crashLoggerEnabled;
        };
        RE_DebugSettings.prototype.setLastPlayerChangeId = function (lastPlayerChangeId) {
            this._lastPlayerChangeId = lastPlayerChangeId;
        };
        RE_DebugSettings.prototype.getLastPlayerChangeId = function () {
            return this._lastPlayerChangeId;
        };
        RE_DebugSettings.prototype.setStreamMusicTracks = function (streamMusicTracks) {
            this._streamMusicTracks = streamMusicTracks;
        };
        RE_DebugSettings.prototype.getStreamMusicTracks = function () {
            return this._streamMusicTracks;
        };
        RE_DebugSettings.prototype.setUseHeadlessSetupWebAppDevBuild = function (useHeadlessSetupWebAppDevBuild) {
            this._useHeadlessSetupWebAppDevBuild = useHeadlessSetupWebAppDevBuild;
        };
        RE_DebugSettings.prototype.getUseHeadlessSetupWebAppDevBuild = function () {
            return this._useHeadlessSetupWebAppDevBuild;
        };
        return RE_DebugSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_DebugSettings = RE_DebugSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_DebugSettings.js.map