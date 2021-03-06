"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_SDK_notifyFileSystem_SDKConsumer = (function () {
        function IImpl_SDK_notifyFileSystem_SDKConsumer(owner) {
            this._owner = owner;
        }
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_readTextFile = function (fileFullName, error, context, callback) {
            return null;
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_readTextFile = function (fileFullName, error, context, callback) {
            return null;
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this.notify_readTextFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.notify_promise_readTextFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_readBinaryFile = function (storageName, folderName, fileName, error, context, callback) {
            this.notify_readBinaryFile(storageName, folderName, fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            return this.notify_writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            return this.notify_promise_writeTextFile(storageName + folderName + fileName, fileContent, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_getFileList = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_getFileList = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_removeFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_removeFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_createFolder = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_createFolder = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_deleteFolder = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_deleteFolder = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_fileExists = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_fileExists = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_folderExists = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_folderExists = function (folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this.notify_copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            return this.notify_promise_copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            this.notify_downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            return this.notify_promise_downloadFile(remoteUrlName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this.notify_unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            this.notify_promise_unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            this.notify_fsyncFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.notify_promise_fsyncFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            this.notify_getFileInfo(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.notify_promise_getFileInfo(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_getFileList2 = function (storageName, folderFullName, error, context, callback) {
            this.notify_getFileList(storageName + folderFullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_getNbFiles2 = function (storageName, folderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.notify_removeFile(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_createFolder2 = function (storageName, folderfullName, error, context, callback) {
            return this.notify_createFolder(storageName + folderfullName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_deleteFolder2 = function (storageName, folderName, error, context, callback) {
            return this.notify_deleteFolder(storageName + folderName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
            return this.notify_fileExists(storageName + folderName + fileName, error, context, callback);
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_getLastModified = function (aFileInfo, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_computeFileSha2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_computeFileSha2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_notifyFileSystem_SDKConsumer.prototype.notify_promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
        };
        return IImpl_SDK_notifyFileSystem_SDKConsumer;
    }());
    rm_transversalservices.IImpl_SDK_notifyFileSystem_SDKConsumer = IImpl_SDK_notifyFileSystem_SDKConsumer;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_notifyFileSystem_SDKConsumer.js.map