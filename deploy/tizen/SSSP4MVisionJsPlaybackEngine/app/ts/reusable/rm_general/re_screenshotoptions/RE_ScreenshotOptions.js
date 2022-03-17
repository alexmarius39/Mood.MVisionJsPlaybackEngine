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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RE_ScreenshotOptions = /** @class */ (function (_super) {
            __extends(RE_ScreenshotOptions, _super);
            function RE_ScreenshotOptions() {
                var _this = _super.call(this) || this;
                _this._aCaptureScreenInfo = null;
                _this._aHttpRequest = null;
                _this._bSaveInFile = true;
                _this._bSaveInMemory = false;
                _this._bSendToServer = true;
                _this._strRemoteRelativePath = null;
                _this._strRemoteFileName = null;
                return _this;
            }
            RE_ScreenshotOptions.prototype.getCaptureScreenInfo = function () {
                return this._aCaptureScreenInfo;
            };
            RE_ScreenshotOptions.prototype.setCaptureScreenInfo = function (aCaptureScreenInfo) {
                this._aCaptureScreenInfo = aCaptureScreenInfo;
            };
            RE_ScreenshotOptions.prototype.getSaveInFile = function () {
                return this._bSaveInFile;
            };
            RE_ScreenshotOptions.prototype.setSaveInFile = function (bSaveInFile) {
                this._bSaveInFile = bSaveInFile;
            };
            RE_ScreenshotOptions.prototype.getSaveInMemory = function () {
                return this._bSaveInMemory;
            };
            RE_ScreenshotOptions.prototype.setSaveInMemory = function (bSaveInMemory) {
                this._bSaveInMemory = bSaveInMemory;
            };
            RE_ScreenshotOptions.prototype.getSendToServer = function () {
                return this._bSendToServer;
            };
            RE_ScreenshotOptions.prototype.setSendToServer = function (bSendToServer) {
                this._bSendToServer = bSendToServer;
            };
            RE_ScreenshotOptions.prototype.getRemoteRelativePath = function () {
                return this._strRemoteRelativePath;
            };
            RE_ScreenshotOptions.prototype.setRemoteRelativePath = function (strRemoteRelativePath) {
                this._strRemoteRelativePath = strRemoteRelativePath;
            };
            RE_ScreenshotOptions.prototype.getRemoteFileName = function () {
                return this._strRemoteFileName;
            };
            RE_ScreenshotOptions.prototype.setRemoteFileName = function (strRemoteFileName) {
                this._strRemoteFileName = strRemoteFileName;
            };
            return RE_ScreenshotOptions;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_ScreenshotOptions = RE_ScreenshotOptions;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_ScreenshotOptions.js.map