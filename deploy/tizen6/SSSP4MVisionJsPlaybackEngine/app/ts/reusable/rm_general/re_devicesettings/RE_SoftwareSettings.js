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
define(["require", "exports", "../r_entity/R_Entity"], function (require, exports, rmEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RE_SoftwareSettings = /** @class */ (function (_super) {
            __extends(RE_SoftwareSettings, _super);
            function RE_SoftwareSettings() {
                var _this = _super.call(this) || this;
                _this._debugSettings = null;
                _this._earlyAdopter = null;
                _this._httpServiceMaxWorkers = null;
                _this._headlessSetupEnabled = null;
                _this._liveCommandsEnabled = null;
                _this._projectId = null;
                _this._resetSettings = null;
                return _this;
            }
            RE_SoftwareSettings.prototype.setDebugSettings = function (debugSettings) {
                this._debugSettings = debugSettings;
            };
            RE_SoftwareSettings.prototype.getDebugSettings = function () {
                return this._debugSettings;
            };
            RE_SoftwareSettings.prototype.setEarlyAdopter = function (earlyAdopter) {
                this._earlyAdopter = earlyAdopter;
            };
            RE_SoftwareSettings.prototype.getEarlyAdopter = function () {
                return this._earlyAdopter;
            };
            RE_SoftwareSettings.prototype.setHttpServiceMaxWorkers = function (httpServiceMaxWorkers) {
                this._httpServiceMaxWorkers = httpServiceMaxWorkers;
            };
            RE_SoftwareSettings.prototype.getHttpServiceMaxWorkers = function () {
                return this._httpServiceMaxWorkers;
            };
            RE_SoftwareSettings.prototype.setHeadlessSetupEnabled = function (headlessSetupEnabled) {
                this._headlessSetupEnabled = headlessSetupEnabled;
            };
            RE_SoftwareSettings.prototype.getHeadlessSetupEnabled = function () {
                return this._headlessSetupEnabled;
            };
            RE_SoftwareSettings.prototype.setLiveCommandsEnabled = function (liveCommandsEnabled) {
                this._liveCommandsEnabled = liveCommandsEnabled;
            };
            RE_SoftwareSettings.prototype.getLiveCommandsEnabled = function () {
                return this._liveCommandsEnabled;
            };
            RE_SoftwareSettings.prototype.setProjectId = function (projectId) {
                this._projectId = projectId;
            };
            RE_SoftwareSettings.prototype.getProjectId = function () {
                return this._projectId;
            };
            RE_SoftwareSettings.prototype.setResetSettings = function (resetSettings) {
                this._resetSettings = resetSettings;
            };
            RE_SoftwareSettings.prototype.getResetSettings = function () {
                return this._resetSettings;
            };
            return RE_SoftwareSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_SoftwareSettings = RE_SoftwareSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_SoftwareSettings.js.map