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
    var RE_VODSettings = (function (_super) {
        __extends(RE_VODSettings, _super);
        function RE_VODSettings() {
            var _this = _super.call(this) || this;
            _this._hintEnabled = null;
            _this._mediaFrameBgColor = null;
            _this._mediaFrameFocusBgColor = null;
            _this._mediaListZoneFrameLandscape = null;
            _this._mediaListZoneFramePortrait = null;
            _this._mediaTitleTextColorFocused = null;
            _this._mediaTitleTextColor = null;
            _this._timeoutIntervalSecs = null;
            return _this;
        }
        RE_VODSettings.prototype.setHintEnabled = function (hintEnabled) {
            this._hintEnabled = hintEnabled;
        };
        RE_VODSettings.prototype.getHintEnabled = function () {
            return this._hintEnabled;
        };
        RE_VODSettings.prototype.setMediaFrameBgColor = function (mediaFrameBgColor) {
            this._mediaFrameBgColor = mediaFrameBgColor;
        };
        RE_VODSettings.prototype.getMediaFrameBgColor = function () {
            return this._mediaFrameBgColor;
        };
        RE_VODSettings.prototype.setMediaFrameFocusBgColor = function (mediaFrameFocusBgColor) {
            this._mediaFrameFocusBgColor = mediaFrameFocusBgColor;
        };
        RE_VODSettings.prototype.getMediaFrameFocusBgColor = function () {
            return this._mediaFrameFocusBgColor;
        };
        RE_VODSettings.prototype.setMediaListZoneFrameLandscape = function (mediaListZoneFrameLandscape) {
            this._mediaListZoneFrameLandscape = mediaListZoneFrameLandscape;
        };
        RE_VODSettings.prototype.getMediaListZoneFrameLandscape = function () {
            return this._mediaListZoneFrameLandscape;
        };
        RE_VODSettings.prototype.setMediaListZoneFramePortrait = function (mediaListZoneFramePortrait) {
            this._mediaListZoneFramePortrait = mediaListZoneFramePortrait;
        };
        RE_VODSettings.prototype.getMediaListZoneFramePortrait = function () {
            return this._mediaListZoneFramePortrait;
        };
        RE_VODSettings.prototype.setMediaTitleTextColorFocused = function (mediaTitleTextColorFocused) {
            this._mediaTitleTextColorFocused = mediaTitleTextColorFocused;
        };
        RE_VODSettings.prototype.getMediaTitleTextColorFocused = function () {
            return this._mediaTitleTextColorFocused;
        };
        RE_VODSettings.prototype.setMediaTitleTextColor = function (mediaTitleTextColor) {
            this._mediaTitleTextColor = mediaTitleTextColor;
        };
        RE_VODSettings.prototype.getMediaTitleTextColor = function () {
            return this._mediaTitleTextColor;
        };
        RE_VODSettings.prototype.setTimeoutIntervalSecs = function (timeoutIntervalSecs) {
            this._timeoutIntervalSecs = timeoutIntervalSecs;
        };
        RE_VODSettings.prototype.getTimeoutIntervalSecs = function () {
            return this._timeoutIntervalSecs;
        };
        return RE_VODSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_VODSettings = RE_VODSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_VODSettings.js.map