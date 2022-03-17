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
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var RE_FileTransfer = (function (_super) {
        __extends(RE_FileTransfer, _super);
        function RE_FileTransfer() {
            var _this = _super.call(this) || this;
            _this._srcFileInfo = null;
            _this._srcFileInfo2 = null;
            _this._srcShaFileInfo = null;
            _this._srcShaFileValue = null;
            _this._dstFileInfo = null;
            _this._dstShaFileInfo = null;
            _this._dstShaFileValue = null;
            _this._tmpFileInfo = null;
            _this._tmpShaFileInfo = null;
            _this._tmpShaFileValue = null;
            _this._computedShaFileInfo = null;
            _this._computedShaFileValue = null;
            _this._additionalFileTransfers = null;
            _this._srcFileId = 0;
            _this._srcFileType = "";
            _this._mediaId = 0;
            _this._bDoDownload = true;
            _this._bIgnoreErrors = false;
            _this._bCheckSha = true;
            _this._strAdditionalInfo = "";
            _this._bComputeSha = true;
            _this._bCopyFile = false;
            _this._bCopyFileIfExists = true;
            return _this;
        }
        RE_FileTransfer.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
            _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
            this._srcFileInfo = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
            this._srcShaFileInfo = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
            this._srcShaFileValue = null;
            this._dstFileInfo = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
            this._dstShaFileInfo = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
            this._srcShaFileValue = null;
            this._tmpFileInfo = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
            this._tmpShaFileInfo = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
            this._tmpShaFileValue = null;
            this._computedShaFileInfo = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
            this._computedShaFileValue = null;
            this._additionalFileTransfers = null;
            this._srcFileId = 0;
            this._srcFileType = "";
            this._mediaId = 0;
            this._bDoDownload = true;
            this._bIgnoreErrors = false;
            this._bCheckSha = true;
            this._strAdditionalInfo = "";
            return 0;
        };
        RE_FileTransfer.prototype.getMediaId = function () {
            return this._mediaId;
        };
        RE_FileTransfer.prototype.setMediaId = function (mediaId) {
            this._mediaId = mediaId;
        };
        RE_FileTransfer.prototype.setDoDownload = function (bDoDownload) {
            this._bDoDownload = bDoDownload;
        };
        RE_FileTransfer.prototype.getDoDownload = function () {
            return this._bDoDownload;
        };
        RE_FileTransfer.prototype.setIgnoreErrors = function (bIgnoreErrors) {
            this._bIgnoreErrors = bIgnoreErrors;
        };
        RE_FileTransfer.prototype.getIgnoreErrors = function () {
            return this._bIgnoreErrors;
        };
        RE_FileTransfer.prototype.setCheckSha = function (bCheckSha) {
            this._bCheckSha = bCheckSha;
        };
        RE_FileTransfer.prototype.getCheckSha = function () {
            return this._bCheckSha;
        };
        RE_FileTransfer.prototype.setComputeSha = function (bComputeSha) {
            this._bComputeSha = bComputeSha;
        };
        RE_FileTransfer.prototype.getComputeSha = function () {
            return this._bComputeSha;
        };
        RE_FileTransfer.prototype.getSrcFileId = function () {
            return this._srcFileId;
        };
        RE_FileTransfer.prototype.setSrcFileId = function (srcFileId) {
            this._srcFileId = srcFileId;
        };
        RE_FileTransfer.prototype.getSrcFileType = function () {
            return this._srcFileType;
        };
        RE_FileTransfer.prototype.setSrcFileType = function (srcFileType) {
            this._srcFileType = srcFileType;
        };
        RE_FileTransfer.prototype.getSrcFileInfo = function () {
            return this._srcFileInfo;
        };
        RE_FileTransfer.prototype.setSrcFileInfo = function (srcFileInfo) {
            this._srcFileInfo = srcFileInfo;
        };
        RE_FileTransfer.prototype.getSrcFileInfo2 = function () {
            return this._srcFileInfo2;
        };
        RE_FileTransfer.prototype.setSrcFileInfo2 = function (srcFileInfo2) {
            this._srcFileInfo2 = srcFileInfo2;
        };
        RE_FileTransfer.prototype.getSrcShaFileInfo = function () {
            return this._srcShaFileInfo;
        };
        RE_FileTransfer.prototype.setSrcShaFileInfo = function (srcShaFileInfo) {
            this._srcShaFileInfo = srcShaFileInfo;
        };
        RE_FileTransfer.prototype.getSrcShaFileValue = function () {
            return this._srcShaFileValue;
        };
        RE_FileTransfer.prototype.setSrcShaFileValue = function (srcShaFileValue) {
            this._srcShaFileValue = srcShaFileValue;
        };
        RE_FileTransfer.prototype.getDstFileInfo = function () {
            return this._dstFileInfo;
        };
        RE_FileTransfer.prototype.setDstFileInfo = function (dstFileInfo) {
            this._dstFileInfo = dstFileInfo;
        };
        RE_FileTransfer.prototype.getDstShaFileInfo = function () {
            return this._dstShaFileInfo;
        };
        RE_FileTransfer.prototype.setDstShaFileInfo = function (dstShaFileInfo) {
            this._dstShaFileInfo = dstShaFileInfo;
        };
        RE_FileTransfer.prototype.getDstShaFileValue = function () {
            return this._dstShaFileValue;
        };
        RE_FileTransfer.prototype.setDstShaFileValue = function (dstShaFileValue) {
            this._dstShaFileValue = dstShaFileValue;
        };
        RE_FileTransfer.prototype.getComputedShaFileInfo = function () {
            return this._computedShaFileInfo;
        };
        RE_FileTransfer.prototype.setComputedShaFileInfo = function (computedShaFileInfo) {
            this._computedShaFileInfo = computedShaFileInfo;
        };
        RE_FileTransfer.prototype.getComputedShaFileValue = function () {
            return this._computedShaFileValue;
        };
        RE_FileTransfer.prototype.setComputedShaFileValue = function (computedShaFileValue) {
            this._computedShaFileValue = computedShaFileValue;
        };
        RE_FileTransfer.prototype.getTmpFileInfo = function () {
            return this._tmpFileInfo;
        };
        RE_FileTransfer.prototype.setTmpFileInfo = function (dstFileInfo) {
            this._tmpFileInfo = dstFileInfo;
        };
        RE_FileTransfer.prototype.getTmpShaFileInfo = function () {
            return this._tmpShaFileInfo;
        };
        RE_FileTransfer.prototype.setTmpShaFileInfo = function (tmpShaFileInfo) {
            this._tmpShaFileInfo = tmpShaFileInfo;
        };
        RE_FileTransfer.prototype.getTmpShaFileValue = function () {
            return this._tmpShaFileValue;
        };
        RE_FileTransfer.prototype.setTmpShaFileValue = function (tmpShaFileValue) {
            this._tmpShaFileValue = tmpShaFileValue;
        };
        RE_FileTransfer.prototype.isTheSameShaValue = function (sha1, sha2) {
            if (sha1 == null)
                return false;
            if (sha2 == null)
                return false;
            var sha1f = sha1.toLowerCase().trim();
            var sha2f = sha2.toLowerCase().trim();
            if (sha1f != sha2f)
                return false;
            return true;
        };
        RE_FileTransfer.prototype.getAdditionalFileTransfers = function () {
            return this._additionalFileTransfers;
        };
        RE_FileTransfer.prototype.setAdditionalFileTransfers = function (additionalFileTransfers) {
            this._additionalFileTransfers = additionalFileTransfers;
        };
        RE_FileTransfer.prototype.addAdditionalFileTransfer = function (additionalFileTransfer) {
            if (this._additionalFileTransfers == null)
                this._additionalFileTransfers = new Array();
            this._additionalFileTransfers.push(additionalFileTransfer);
        };
        RE_FileTransfer.prototype.getAdditionalInfo = function () {
            return this._strAdditionalInfo;
        };
        RE_FileTransfer.prototype.setAdditionalInfo = function (strAdditionalInfo) {
            this._strAdditionalInfo = strAdditionalInfo;
        };
        RE_FileTransfer.prototype.setCopyFile = function (bCopyFile) {
            this._bCopyFile = bCopyFile;
        };
        RE_FileTransfer.prototype.getCopyFile = function () {
            return this._bCopyFile;
        };
        RE_FileTransfer.prototype.setCopyFileIfExists = function (bCopyFileIfExists) {
            this._bCopyFileIfExists = bCopyFileIfExists;
        };
        RE_FileTransfer.prototype.getCopyFileIfExists = function () {
            return this._bCopyFileIfExists;
        };
        return RE_FileTransfer;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.RE_FileTransfer = RE_FileTransfer;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_FileTransfer.js.map