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
    var RE_LoggingSettings = (function (_super) {
        __extends(RE_LoggingSettings, _super);
        function RE_LoggingSettings() {
            var _this = _super.call(this) || this;
            _this._activityLogsBufferMaxSizeBytes = null;
            _this._activityLogsAutoUploadIntervalMillis = null;
            _this._activityLogsAutoUploadEnabled = null;
            _this._activityLogsFileEnabled = null;
            _this._playbackLogsFileEnabled = null;
            return _this;
        }
        RE_LoggingSettings.prototype.setActivityLogsBufferMaxSizeBytes = function (activityLogsBufferMaxSizeBytes) {
            this._activityLogsBufferMaxSizeBytes = activityLogsBufferMaxSizeBytes;
        };
        RE_LoggingSettings.prototype.getActivityLogsBufferMaxSizeBytes = function () {
            return this._activityLogsBufferMaxSizeBytes;
        };
        RE_LoggingSettings.prototype.setActivityLogsAutoUploadIntervalMillis = function (activityLogsAutoUploadIntervalMillis) {
            this._activityLogsAutoUploadIntervalMillis = activityLogsAutoUploadIntervalMillis;
        };
        RE_LoggingSettings.prototype.getActivityLogsAutoUploadIntervalMillis = function () {
            return this._activityLogsAutoUploadIntervalMillis;
        };
        RE_LoggingSettings.prototype.setActivityLogsAutoUploadEnabled = function (activityLogsAutoUploadEnabled) {
            this._activityLogsAutoUploadEnabled = activityLogsAutoUploadEnabled;
        };
        RE_LoggingSettings.prototype.getActivityLogsAutoUploadEnabled = function () {
            return this._activityLogsAutoUploadEnabled;
        };
        RE_LoggingSettings.prototype.setActivityLogsFileEnabled = function (activityLogsFileEnabled) {
            this._activityLogsFileEnabled = activityLogsFileEnabled;
        };
        RE_LoggingSettings.prototype.getActivityLogsFileEnabled = function () {
            return this._activityLogsFileEnabled;
        };
        RE_LoggingSettings.prototype.setPlaybackLogsFileEnabled = function (playbackLogsFileEnabled) {
            this._playbackLogsFileEnabled = playbackLogsFileEnabled;
        };
        RE_LoggingSettings.prototype.getPlaybackLogsFileEnabled = function () {
            return this._playbackLogsFileEnabled;
        };
        return RE_LoggingSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_LoggingSettings = RE_LoggingSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_LoggingSettings.js.map