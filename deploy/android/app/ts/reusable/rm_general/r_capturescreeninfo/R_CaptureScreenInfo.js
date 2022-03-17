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
var rmEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rmFileInfo = require("../../../../../app/ts/reusable/rm_general/r_fileinfo/R_FileInfo");
var rm_general;
(function (rm_general) {
    var R_CaptureScreenInfo = (function (_super) {
        __extends(R_CaptureScreenInfo, _super);
        function R_CaptureScreenInfo() {
            var _this = _super.call(this) || this;
            _this._bFullScreen = true;
            _this._nRectLeft = null;
            _this._nRectTop = null;
            _this._nRectRight = null;
            _this._nRectBottom = null;
            _this._strFormat = null;
            _this._nQuality = null;
            _this._nWidth = null;
            _this._nHeight = null;
            _this._strOrientation = null;
            _this._aFileInfo = new rmFileInfo.rm_general.R_FileInfo();
            return _this;
        }
        R_CaptureScreenInfo.prototype.copyFromJson = function (jsonCaptureScreen) {
            if (jsonCaptureScreen != null) {
                this._bFullScreen = jsonCaptureScreen._bFullScreen;
                this._nRectLeft = jsonCaptureScreen._nRectLeft;
                this._nRectTop = jsonCaptureScreen._nRectTop;
                this._nRectRight = jsonCaptureScreen._nRectRight;
                this._nRectBottom = jsonCaptureScreen._nRectBottom;
                this._strFormat = jsonCaptureScreen._strFormat;
                this._nQuality = jsonCaptureScreen._nQuality;
                this._nWidth = jsonCaptureScreen._nWidth;
                this._nHeight = jsonCaptureScreen._nHeight;
                this._strOrientation = jsonCaptureScreen._strOrientation;
                this._aFileInfo.copyFromJson(jsonCaptureScreen._aFileInfo);
            }
        };
        R_CaptureScreenInfo.prototype.getFullScreen = function () {
            return this._bFullScreen;
        };
        R_CaptureScreenInfo.prototype.setFullScreen = function (bFullScreen) {
            this._bFullScreen = bFullScreen;
        };
        R_CaptureScreenInfo.prototype.getRectLeft = function () {
            return this._nRectLeft;
        };
        R_CaptureScreenInfo.prototype.setRectLeft = function (nRectLeft) {
            this._nRectLeft = nRectLeft;
        };
        R_CaptureScreenInfo.prototype.getRectTop = function () {
            return this._nRectTop;
        };
        R_CaptureScreenInfo.prototype.setRectTop = function (nRectTop) {
            this._nRectTop = nRectTop;
        };
        R_CaptureScreenInfo.prototype.getRectRight = function () {
            return this._nRectRight;
        };
        R_CaptureScreenInfo.prototype.setRectRight = function (nRectRight) {
            this._nRectRight = nRectRight;
        };
        R_CaptureScreenInfo.prototype.getRectBottom = function () {
            return this._nRectBottom;
        };
        R_CaptureScreenInfo.prototype.setRectBottom = function (nRectBottom) {
            this._nRectBottom = nRectBottom;
        };
        R_CaptureScreenInfo.prototype.getFormat = function () {
            return this._strFormat;
        };
        R_CaptureScreenInfo.prototype.setFormat = function (strFormat) {
            this._strFormat = strFormat;
        };
        R_CaptureScreenInfo.prototype.getQuality = function () {
            return this._nQuality;
        };
        R_CaptureScreenInfo.prototype.setQuality = function (nQuality) {
            this._nQuality = nQuality;
        };
        R_CaptureScreenInfo.prototype.getWidth = function () {
            return this._nWidth;
        };
        R_CaptureScreenInfo.prototype.setWidth = function (nWidth) {
            this._nWidth = nWidth;
        };
        R_CaptureScreenInfo.prototype.getHeight = function () {
            return this._nHeight;
        };
        R_CaptureScreenInfo.prototype.setHeight = function (nHeight) {
            this._nHeight = nHeight;
        };
        R_CaptureScreenInfo.prototype.getOrientation = function () {
            return this._strOrientation;
        };
        R_CaptureScreenInfo.prototype.setOrientation = function (strOrientation) {
            this._strOrientation = strOrientation;
        };
        R_CaptureScreenInfo.prototype.getFileInfo = function () {
            return this._aFileInfo;
        };
        R_CaptureScreenInfo.prototype.setFileInfo = function (aFileInfo) {
            this._aFileInfo = aFileInfo;
        };
        return R_CaptureScreenInfo;
    }(rmEntity.rm_general.R_Entity));
    rm_general.R_CaptureScreenInfo = R_CaptureScreenInfo;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_CaptureScreenInfo.js.map