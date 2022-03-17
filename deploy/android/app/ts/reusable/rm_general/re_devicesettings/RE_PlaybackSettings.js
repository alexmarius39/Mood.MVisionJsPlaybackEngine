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
    var RE_PlaybackSettings = (function (_super) {
        __extends(RE_PlaybackSettings, _super);
        function RE_PlaybackSettings() {
            var _this = _super.call(this) || this;
            _this._audioSettings = null;
            _this._flashMediaSettings = null;
            _this._forceReportNowPlayingData = null;
            _this._playlistUpdateInstantReload = null;
            _this._multiZoneNoMediaFillColor = null;
            _this._playbackInteractionSettings = null;
            _this._playbackRestartTimeoutMillis = null;
            _this._syncPlaybackTimeoutMillis = null;
            _this._vodSettings = null;
            _this._videoSettings = null;
            _this._watchdogEnabled = null;
            _this._webPageSettings = null;
            return _this;
        }
        RE_PlaybackSettings.prototype.setAudioSettings = function (audioSettings) {
            this._audioSettings = audioSettings;
        };
        RE_PlaybackSettings.prototype.getAudioSettings = function () {
            return this._audioSettings;
        };
        RE_PlaybackSettings.prototype.setFlashMediaSettings = function (flashMediaSettings) {
            this._flashMediaSettings = flashMediaSettings;
        };
        RE_PlaybackSettings.prototype.getFlashMediaSettings = function () {
            return this._flashMediaSettings;
        };
        RE_PlaybackSettings.prototype.setForceReportNowPlayingData = function (forceReportNowPlayingData) {
            this._forceReportNowPlayingData = forceReportNowPlayingData;
        };
        RE_PlaybackSettings.prototype.getForceReportNowPlayingData = function () {
            return this._forceReportNowPlayingData;
        };
        RE_PlaybackSettings.prototype.setPlaylistUpdateInstantReload = function (playlistUpdateInstantReload) {
            this._playlistUpdateInstantReload = playlistUpdateInstantReload;
        };
        RE_PlaybackSettings.prototype.getPlaylistUpdateInstantReload = function () {
            return this._playlistUpdateInstantReload;
        };
        RE_PlaybackSettings.prototype.setMultiZoneNoMediaFillColor = function (multiZoneNoMediaFillColor) {
            this._multiZoneNoMediaFillColor = multiZoneNoMediaFillColor;
        };
        RE_PlaybackSettings.prototype.getMultiZoneNoMediaFillColor = function () {
            return this._multiZoneNoMediaFillColor;
        };
        RE_PlaybackSettings.prototype.setPlaybackInteractionSettings = function (playbackInteractionSettings) {
            this._playbackInteractionSettings = playbackInteractionSettings;
        };
        RE_PlaybackSettings.prototype.getPlaybackInteractionSettings = function () {
            return this._playbackInteractionSettings;
        };
        RE_PlaybackSettings.prototype.setPlaybackRestartTimeoutMillis = function (playbackRestartTimeoutMillis) {
            this._playbackRestartTimeoutMillis = playbackRestartTimeoutMillis;
        };
        RE_PlaybackSettings.prototype.getPlaybackRestartTimeoutMillis = function () {
            return this._playbackRestartTimeoutMillis;
        };
        RE_PlaybackSettings.prototype.setSyncPlaybackTimeoutMillis = function (syncPlaybackTimeoutMillis) {
            this._syncPlaybackTimeoutMillis = syncPlaybackTimeoutMillis;
        };
        RE_PlaybackSettings.prototype.getSyncPlaybackTimeoutMillis = function () {
            return this._syncPlaybackTimeoutMillis;
        };
        RE_PlaybackSettings.prototype.setVODSettings = function (vodSettings) {
            this._vodSettings = vodSettings;
        };
        RE_PlaybackSettings.prototype.getVODSettings = function () {
            return this._vodSettings;
        };
        RE_PlaybackSettings.prototype.setVideoSettings = function (videoSettings) {
            this._videoSettings = videoSettings;
        };
        RE_PlaybackSettings.prototype.getVideoSettings = function () {
            return this._videoSettings;
        };
        RE_PlaybackSettings.prototype.setWatchdogEnabled = function (watchdogEnabled) {
            this._watchdogEnabled = watchdogEnabled;
        };
        RE_PlaybackSettings.prototype.getWatchdogEnabled = function () {
            return this._watchdogEnabled;
        };
        RE_PlaybackSettings.prototype.setWebPageSettings = function (webPageSettings) {
            this._webPageSettings = webPageSettings;
        };
        RE_PlaybackSettings.prototype.getWebPageSettings = function () {
            return this._webPageSettings;
        };
        return RE_PlaybackSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_PlaybackSettings = RE_PlaybackSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_PlaybackSettings.js.map