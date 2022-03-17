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
var rmGeneralEntity = require("../r_entity/R_Entity");
var amGeneralActivityLogVerbosityTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogVerbosityTypes");
var rm_general;
(function (rm_general) {
    var R_ActivityLogServiceSettings = (function (_super) {
        __extends(R_ActivityLogServiceSettings, _super);
        function R_ActivityLogServiceSettings() {
            var _this = _super.call(this) || this;
            _this._activityLogEnable = false;
            _this._autoUploadIntervalSeconds = 7200;
            _this._autoUploadEnabled = false;
            _this._fileEnabled = false;
            _this._sendBufferMaxSizeKb = 5120;
            _this._sendLocalSentPath = "/moodmedia/send_activitylogs/";
            _this._sendLocalBaseName = "activityLog";
            _this._saveBufferMaxSizeKb = 2048;
            _this._saveLocalPath = "/moodmedia/save_activitylogs/";
            _this._saveLocalBaseName = "activityLog";
            _this._saveLocalFileSplitSizeInMb = 100;
            _this._serverEndpoint = "FilesHandler.ashx";
            _this._serverEndpointPath = "tcv5\\server_received_files\\";
            _this._verbosityType = amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType.All;
            return _this;
        }
        R_ActivityLogServiceSettings.prototype.getActivityLogEnable = function () {
            return this._activityLogEnable;
        };
        R_ActivityLogServiceSettings.prototype.setActivityLogEnable = function (value) {
            this._activityLogEnable = value;
        };
        R_ActivityLogServiceSettings.prototype.getAutoUploadIntervalSeconds = function () {
            return this._autoUploadIntervalSeconds;
        };
        R_ActivityLogServiceSettings.prototype.setAutoUploadIntervalSeconds = function (value) {
            this._autoUploadIntervalSeconds = value;
        };
        R_ActivityLogServiceSettings.prototype.getAutoUploadEnabled = function () {
            return this._autoUploadEnabled;
        };
        R_ActivityLogServiceSettings.prototype.setAutoUploadEnabled = function (value) {
            this._autoUploadEnabled = value;
        };
        R_ActivityLogServiceSettings.prototype.setFileEnabled = function (value) {
            this._fileEnabled = value;
        };
        R_ActivityLogServiceSettings.prototype.getFileEnabled = function () {
            return this._fileEnabled;
        };
        R_ActivityLogServiceSettings.prototype.getSendBufferMaxSizeKb = function () {
            return this._sendBufferMaxSizeKb;
        };
        R_ActivityLogServiceSettings.prototype.setSendBufferMaxSizeKb = function (value) {
            this._sendBufferMaxSizeKb = value;
        };
        R_ActivityLogServiceSettings.prototype.getLocalSentPath = function () {
            return this._sendLocalSentPath;
        };
        R_ActivityLogServiceSettings.prototype.setLocalSentPath = function (value) {
            this._sendLocalSentPath = value;
        };
        R_ActivityLogServiceSettings.prototype.getLocalSentBaseName = function () {
            return this._sendLocalBaseName;
        };
        R_ActivityLogServiceSettings.prototype.setLocalSentBaseName = function (value) {
            this._sendLocalBaseName = value;
        };
        R_ActivityLogServiceSettings.prototype.getSaveBufferMaxSizeKb = function () {
            return this._saveBufferMaxSizeKb;
        };
        R_ActivityLogServiceSettings.prototype.setSaveBufferMaxSizeKb = function (value) {
            this._saveBufferMaxSizeKb = value;
        };
        R_ActivityLogServiceSettings.prototype.getLocalSavePath = function () {
            return this._saveLocalPath;
        };
        R_ActivityLogServiceSettings.prototype.setLocalSavePath = function (value) {
            this._saveLocalPath = value;
        };
        R_ActivityLogServiceSettings.prototype.getLocalSaveBaseName = function () {
            return this._saveLocalBaseName;
        };
        R_ActivityLogServiceSettings.prototype.setLocalSaveBaseName = function (value) {
            this._saveLocalBaseName = value;
        };
        R_ActivityLogServiceSettings.prototype.getLocalSplitSizeInMb = function () {
            return this._saveLocalFileSplitSizeInMb;
        };
        R_ActivityLogServiceSettings.prototype.setLocalSplitSizeInMb = function (value) {
            this._saveLocalFileSplitSizeInMb = value;
        };
        R_ActivityLogServiceSettings.prototype.getServerEndpoint = function () {
            return this._serverEndpoint;
        };
        R_ActivityLogServiceSettings.prototype.setServerEndpoint = function (value) {
            this._serverEndpoint = value;
        };
        R_ActivityLogServiceSettings.prototype.setServerEndpointPath = function (value) {
            this._serverEndpointPath = value;
        };
        R_ActivityLogServiceSettings.prototype.getServerEndpointPath = function () {
            return this._serverEndpointPath;
        };
        R_ActivityLogServiceSettings.prototype.getVerbosityType = function () {
            return this._verbosityType;
        };
        ;
        R_ActivityLogServiceSettings.prototype.setVerbosityType = function (value) {
            this._verbosityType = value;
        };
        ;
        return R_ActivityLogServiceSettings;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_ActivityLogServiceSettings = R_ActivityLogServiceSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_ActivityLogServiceSettings.js.map