define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var IImpl_DownloadMain_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_DownloadMain_R(owner) {
                this._owner = owner;
            }
            //----------------
            IImpl_DownloadMain_R.prototype.log = function (logMsgLevel, logMsg, error, context, callback) {
                this._owner.log(logMsgLevel, logMsg, error, context, callback);
            };
            //-----------------
            IImpl_DownloadMain_R.prototype.moveFileAndShaFile = function (aSrcFile, aSrcShaFile, aDstFile, aDstShaFile, error, context, callback) {
                return this._owner.moveFileAndShaFile(aSrcFile, aSrcShaFile, aDstFile, aDstShaFile, error, context, callback);
            };
            //-------------------------------------------------                  
            IImpl_DownloadMain_R.prototype.checkFileIfAlreadyDownloaded = function (transferMediaFile, error, context, callback) {
                return this._owner.checkFileIfAlreadyDownloaded(transferMediaFile, error, context, callback);
            };
            //-------------------------------------------------                  
            IImpl_DownloadMain_R.prototype.downloadFile = function (transferMediaFile, error, context, callback) {
                return this._owner.downloadFile(transferMediaFile, error, context, callback);
            };
            //-------------------------------------------------                  
            IImpl_DownloadMain_R.prototype.downloadFileIfNotAlreadyDownloaded = function (transferMediaFile, error, context, callback) {
                return this._owner.downloadFileIfNotAlreadyDownloaded(transferMediaFile, error, context, callback);
            };
            //-------------------------------------------------                  
            IImpl_DownloadMain_R.prototype.downloadFiles_fromMap = function (transferMediaFiles, bIgnoreErrors, error, context, callback) {
                return this._owner.downloadFiles_fromMap(transferMediaFiles, bIgnoreErrors, error, context, callback);
            };
            //-------------------------------------------------                  
            IImpl_DownloadMain_R.prototype.downloadFiles_fromArray = function (transferMediaFiles, bIgnoreErrors, error, context, callback) {
                return this._owner.downloadFiles_fromArray(transferMediaFiles, bIgnoreErrors, error, context, callback);
            };
            return IImpl_DownloadMain_R;
        }());
        rm_transversalservices.IImpl_DownloadMain_R = IImpl_DownloadMain_R;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_DownloadMain_R.js.map