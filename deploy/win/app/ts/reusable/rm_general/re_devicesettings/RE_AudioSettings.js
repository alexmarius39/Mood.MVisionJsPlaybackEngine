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
    var RE_AudioSettings = (function (_super) {
        __extends(RE_AudioSettings, _super);
        function RE_AudioSettings() {
            var _this = _super.call(this) || this;
            _this._duckingPercent = null;
            _this._duckingDuration = null;
            _this._musicCrossfadeMode = null;
            _this._musicSmoothStopPercent = null;
            _this._musicSmoothStopDurationMillis = null;
            _this._musicStaticCrossfadeDurationMillis = null;
            _this._musicTracksVolume = null;
            _this._volumePercentFactorZoneLeft = null;
            _this._volumePercentFactorZoneRight = null;
            _this._audioPlayerType = null;
            _this._volumeTracksVolumeZoneLeft = null;
            _this._volumeTracksVolumeZoneRight = null;
            return _this;
        }
        RE_AudioSettings.prototype.setDuckingPercent = function (duckingPercent) {
            this._duckingPercent = duckingPercent;
        };
        RE_AudioSettings.prototype.getDuckingPercent = function () {
            return this._duckingPercent;
        };
        RE_AudioSettings.prototype.setDuckingDuration = function (duckingDuration) {
            this._duckingDuration = duckingDuration;
        };
        RE_AudioSettings.prototype.getDuckingDuration = function () {
            return this._duckingDuration;
        };
        RE_AudioSettings.prototype.setMusicCrossfadeMode = function (musicCrossfadeMode) {
            this._musicCrossfadeMode = musicCrossfadeMode;
        };
        RE_AudioSettings.prototype.getMusicCrossfadeMode = function () {
            return this._musicCrossfadeMode;
        };
        RE_AudioSettings.prototype.setMusicSmoothStopPercent = function (musicSmoothStopPercent) {
            this._musicSmoothStopPercent = musicSmoothStopPercent;
        };
        RE_AudioSettings.prototype.getMusicSmoothStopPercent = function () {
            return this._musicSmoothStopPercent;
        };
        RE_AudioSettings.prototype.setMusicSmoothStopDurationMillis = function (musicSmoothStopDurationMillis) {
            this._musicSmoothStopDurationMillis = musicSmoothStopDurationMillis;
        };
        RE_AudioSettings.prototype.getMusicSmoothStopDurationMillis = function () {
            return this._musicSmoothStopDurationMillis;
        };
        RE_AudioSettings.prototype.setMusicStaticCrossfadeDurationMillis = function (musicStaticCrossfadeDurationMillis) {
            this._musicStaticCrossfadeDurationMillis = musicStaticCrossfadeDurationMillis;
        };
        RE_AudioSettings.prototype.getMusicStaticCrossfadeDurationMillis = function () {
            return this._musicStaticCrossfadeDurationMillis;
        };
        RE_AudioSettings.prototype.setMusicTracksVolume = function (musicTracksVolume) {
            this._musicTracksVolume = musicTracksVolume;
        };
        RE_AudioSettings.prototype.getMusicTracksVolume = function () {
            return this._musicTracksVolume;
        };
        RE_AudioSettings.prototype.setVolumePercentFactorZoneLeft = function (volumePercentFactorZoneLeft) {
            this._volumePercentFactorZoneLeft = volumePercentFactorZoneLeft;
        };
        RE_AudioSettings.prototype.getVolumePercentFactorZoneLeft = function () {
            return this._volumePercentFactorZoneLeft;
        };
        RE_AudioSettings.prototype.setVolumePercentFactorZoneRight = function (volumePercentFactorZoneRight) {
            this._volumePercentFactorZoneRight = volumePercentFactorZoneRight;
        };
        RE_AudioSettings.prototype.getVolumePercentFactorZoneRight = function () {
            return this._volumePercentFactorZoneRight;
        };
        RE_AudioSettings.prototype.setAudioPlayerType = function (audioPlayerType) {
            this._audioPlayerType = audioPlayerType;
        };
        RE_AudioSettings.prototype.getAudioPlayerType = function () {
            return this._audioPlayerType;
        };
        RE_AudioSettings.prototype.setVolumeTracksVolumeZoneLeft = function (volumeTracksVolumeZoneLeft) {
            this._volumeTracksVolumeZoneLeft = volumeTracksVolumeZoneLeft;
        };
        RE_AudioSettings.prototype.getVolumeTracksVolumeZoneLeft = function () {
            return this._volumeTracksVolumeZoneLeft;
        };
        RE_AudioSettings.prototype.setVolumeTracksVolumeZoneRight = function (volumeTracksVolumeZoneRight) {
            this._volumeTracksVolumeZoneRight = volumeTracksVolumeZoneRight;
        };
        RE_AudioSettings.prototype.getVolumeTracksVolumeZoneRight = function () {
            return this._volumeTracksVolumeZoneRight;
        };
        return RE_AudioSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_AudioSettings = RE_AudioSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_AudioSettings.js.map