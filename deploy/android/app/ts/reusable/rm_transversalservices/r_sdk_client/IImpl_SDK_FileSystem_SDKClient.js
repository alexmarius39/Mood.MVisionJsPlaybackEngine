"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_transversalservices;
(function (rm_transversalservices) {
    var IImpl_SDK_FileSystem_SDKClient = (function () {
        function IImpl_SDK_FileSystem_SDKClient(owner) {
            this._owner = owner;
        }
        IImpl_SDK_FileSystem_SDKClient.prototype.readTextFile = function (fileFullName, error, context, callback) {
            var params = {
                "fileFullName": fileFullName
            };
            this._owner._socket.emit('sdk.filesystem.read-text-file', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_readTextFile = function (fileFullName, error, context, callback) {
            var params = {
                "fileFullName": fileFullName
            };
            this._owner._socket.emit('sdk.filesystem.promise-read-text-file', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "fileName": fileName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.read-text-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "fileName": fileName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.promise-read-text-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.readBinaryFile = function (storageName, folderName, fileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "fileName": fileName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.read-binary-file', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            var params = {
                "fileFullName": fileFullName,
            };
            this._owner._socket.emit('sdk.filesystem.write-text-file', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            var params = {
                "fileFullName": fileFullName,
            };
            this._owner._socket.emit('sdk.filesystem.promise-write-text-file', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "fileName": fileName,
                "fileContent": fileContent,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.write-text-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "fileName": fileName,
                "fileContent": fileContent,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.promise-write-text-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.getFileList = function (folderFullName, error, context, callback) {
            var params = {
                "folderFullName": folderFullName
            };
            this._owner._socket.emit('sdk.filesystem.get-file-list', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_getFileList = function (folderFullName, error, context, callback) {
            var params = {
                "folderFullName": folderFullName
            };
            this._owner._socket.emit('sdk.filesystem.promise-get-file-list', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.getFileList2 = function (storageName, folderName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "pathName": folderName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.get-file-list2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.getNbFiles2 = function (storageName, folderName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "pathName": folderName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.get-nb-files2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.removeFile = function (fileFullName, error, context, callback) {
            var params = {
                "fileFullName": fileFullName
            };
            this._owner._socket.emit('sdk.filesystem.remove-file', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_removeFile = function (fileFullName, error, context, callback) {
            var params = {
                "fileFullName": fileFullName
            };
            this._owner._socket.emit('sdk.filesystem.promise-remove-file', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "fileName": fileName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.remove-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.createFolder = function (folderFullName, error, context, callback) {
            var params = {
                "folderFullName": folderFullName
            };
            this._owner._socket.emit('sdk.filesystem.create-folder', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_createFolder = function (folderFullName, error, context, callback) {
            var params = {
                "folderFullName": folderFullName
            };
            this._owner._socket.emit('sdk.filesystem.promise-create-folder', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.createFolder2 = function (storageName, folderName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.create-folder2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.deleteFolder = function (folderFullName, error, context, callback) {
            var params = {
                "folderFullName": folderFullName
            };
            this._owner._socket.emit('sdk.filesystem.delete-folder', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_deleteFolder = function (folderFullName, error, context, callback) {
            var params = {
                "folderFullName": folderFullName
            };
            this._owner._socket.emit('sdk.filesystem.promise-delete-folder', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.deleteFolder2 = function (storageName, folderName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.delete-folder2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.fileExists = function (fileFullName, error, context, callback) {
            var params = {
                "fileFullName": fileFullName
            };
            this._owner._socket.emit('sdk.filesystem.file-exists', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_fileExists = function (fileFullName, error, context, callback) {
            var params = {
                "fileFullName": fileFullName
            };
            this._owner._socket.emit('sdk.filesystem.promise-file-exists', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "fileName": fileName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.file-exists2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.folderExists = function (folderFullName, error, context, callback) {
            var params = {
                "folderFullName": folderFullName
            };
            this._owner._socket.emit('sdk.filesystem.folder-exists', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_folderExists = function (folderFullName, error, context, callback) {
            var params = {
                "folderFullName": folderFullName
            };
            this._owner._socket.emit('sdk.filesystem.promise-folder-exists', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.folderExists2 = function (storageName, folderName, fileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.folder-exists2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "srcStorageName": srcStorageName,
                "srcFolderName": srcFolderName,
                "srcFileName": srcFileName,
                "dstStorageName": dstStorageName,
                "dstFolderName": dstFolderName,
                "dstFileName": dstFileName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.copy-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "srcStorageName": srcStorageName,
                "srcFolderName": srcFolderName,
                "dstStorageName": dstStorageName,
                "dstFolderName": dstFolderName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.copy-folder2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "remoteUrlName": remoteUrlName,
                "dstStorageName": dstStorageName,
                "dstFolderName": dstFolderName,
                "dstFileName": dstFileName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.download-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "zipStorageName": zipStorageName,
                "zipFolderName": zipFolderName,
                "zipFileName": zipFileName,
                "unzipStorageName": unzipStorageName,
                "unzipFolderName": unzipFolderName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.unzip-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_fsyncFile = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_getFileInfo = function (fileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "fileName": fileName,
                "fileContent": fileContent,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.append-text-file', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "srcStorageName": srcStorageName,
                "srcFolderName": srcFolderName,
                "srcFileName": srcFileName,
                "dstStorageName": dstStorageName,
                "dstFolderName": dstFolderName,
                "dstFileName": dstFileName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.move-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            var params = {
                "srcStorageName": srcStorageName,
                "srcFolderName": srcFolderName,
                "srcFileName": srcFileName,
                "remoteUrlName": remoteUrlName,
                "remoteFolderName": remoteFolderName,
                "remoteFileName": remoteFileName
            };
            this._owner._socket.emit('sdk.filesystem.upload-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "fileName": fileName,
                "zipStorageName": zipStorageName,
                "zipFolderName": zipFolderName,
                "zipFileName": zipFileName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.zip-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "srcStorageName": srcStorageName,
                "srcFolderName": srcFolderName,
                "dstStorageName": dstStorageName,
                "dstFolderName": dstFolderName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.move-folder2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "zipStorageName": zipStorageName,
                "zipFolderName": zipFolderName,
                "zipFileName": zipFileName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.zip-folder2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.getLastModified = function (aFileInfo, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "callId": callId,
                "fileInfo": aFileInfo
            };
            this._owner._socket.emit('sdk.filesystem.getlastmodified', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.computeFileSha2 = function (shaProperties, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "srcStorageName": shaProperties.getSrcFileInfo().getStorage(),
                "srcFolderName": shaProperties.getSrcFileInfo().getPath(),
                "srcFileName": shaProperties.getSrcFileInfo().getName(),
                "shaStorageName": shaProperties.getShaFileInfo().getStorage(),
                "shaFolderName": shaProperties.getShaFileInfo().getPath(),
                "shaFileName": shaProperties.getShaFileInfo().getName(),
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.computefilesha2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_computeFileSha2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "srcStorageName": shaProperties.getSrcFileInfo().getStorage(),
                "srcFolderName": shaProperties.getSrcFileInfo().getPath(),
                "srcFileName": shaProperties.getSrcFileInfo().getName(),
                "shaStorageName": shaProperties.getShaFileInfo().getStorage(),
                "shaFolderName": shaProperties.getShaFileInfo().getPath(),
                "shaFileName": shaProperties.getShaFileInfo().getName(),
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.computeandsavefilesha2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.readAndParseXMLFile2 = function (storageName, folderName, fileName, urlStorageName, urlFolderName, urlFileName, error, context, callback) {
            var callId = this._owner.addCallback(context, callback);
            var params = {
                "storageName": storageName,
                "folderName": folderName,
                "fileName": fileName,
                "callId": callId,
            };
            this._owner._socket.emit('sdk.filesystem.read-text-file2', params);
        };
        IImpl_SDK_FileSystem_SDKClient.prototype.parseXMLString = function (xmlString, error, context, callback) {
            var parser = null;
            var xmlObject = null;
            var jsn = null;
            function isParseError(parsedDocument) {
                var parser = new DOMParser(), errorneousParse = parser.parseFromString('<', 'text/xml'), parsererrorNS = errorneousParse.getElementsByTagName("parsererror")[0].namespaceURI;
                if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
                    var xmlError = parsedDocument.getElementsByTagName("parsererror");
                    if (xmlError === null)
                        return false;
                    if (xmlError == "")
                        return false;
                    if (xmlError.length > 0)
                        return true;
                    return false;
                }
                var xmlError = parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror');
                if (xmlError === null)
                    return false;
                if (xmlError == "")
                    return false;
                if (xmlError.length > 1)
                    return true;
                return false;
            }
            ;
            if (typeof DOMParser != "undefined") {
                parser = new DOMParser();
                xmlObject = parser.parseFromString(xmlString, "text/xml");
                if (isParseError(xmlObject)) {
                    console.log('Error parsing xml file ' + xmlString);
                    context.setError(error);
                    context.setObjectResult(null);
                    if (context.getError() != null)
                        context.getError().setError(7009, 'Error parsing xml ' + xmlString);
                    if (callback != null)
                        callback(context);
                    return;
                }
                console.log(JSON.stringify(xmlObject));
                context.setObjectResult(xmlObject);
                console.log("Successfully parse xml object");
                context.setError(error);
                if (callback != null)
                    callback(context);
                return;
            }
            else if (false) {
                xmlObject = new ActiveXObject("Microsoft.XMLDOM");
                if (xmlObject == null) {
                    console.log('Error parsing xml ' + xmlString + " cannot create Microsoft.XMLDOM");
                    context.setError(error);
                    context.setObjectResult(null);
                    if (context.getError() != null)
                        context.getError().setError(7002, 'Error parsing xml ' + xmlString + " cannot create Microsoft.XMLDOM");
                    if (callback != null)
                        callback(context);
                    return;
                }
                xmlObject.async = "false";
                var bSucceed = xmlObject.loadXML(xmlString);
                if (!bSucceed) {
                    console.log('Error parsing xml file ' + xmlString);
                    context.setError(error);
                    context.setObjectResult(null);
                    if (context.getError() != null)
                        context.getError().setError(7009, 'Error parsing xml ' + xmlString);
                    if (callback != null)
                        callback(context);
                    return;
                }
                console.log(JSON.stringify(xmlObject));
                context.setObjectResult(xmlObject);
                console.log("Successfully parse xml object");
                context.setError(error);
                if (callback != null)
                    callback(context);
                return;
            }
            else {
                console.log('Error parsing xml ' + xmlString + " no xml parser found");
                context.setError(error);
                context.setObjectResult(null);
                if (context.getError() != null)
                    context.getError().setError(7001, 'Error parsing xml ' + xmlString + " no xml parser found");
                if (callback != null)
                    callback(context);
                return;
            }
        };
        return IImpl_SDK_FileSystem_SDKClient;
    }());
    rm_transversalservices.IImpl_SDK_FileSystem_SDKClient = IImpl_SDK_FileSystem_SDKClient;
})(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_FileSystem_SDKClient.js.map