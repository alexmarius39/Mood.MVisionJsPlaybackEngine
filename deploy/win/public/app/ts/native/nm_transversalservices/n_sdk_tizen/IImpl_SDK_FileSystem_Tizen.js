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
define(["require", "exports", "../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/asmcryptoes5/entry-export_all", "../../../../../app/ts/reusable/rm_transversalservices/r_sdk_jstv/IImpl_SDK_FileSystem_JsTV_R"], function (require, exports, rmAsmCrypto, rmTransversalServicesFileSystemJsTVJsTV) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        //declare var tizen : any;
        var IImpl_SDK_FileSystem_Tizen = /** @class */ (function (_super) {
            __extends(IImpl_SDK_FileSystem_Tizen, _super);
            //----------- constructor 
            function IImpl_SDK_FileSystem_Tizen(owner) {
                var _this = _super.call(this, owner) || this;
                _this._owner = owner;
                return _this;
            }
            //--------------------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.computeFileSha = function (storageName, folderName, fileName, error, context, callback) {
            };
            //----------------------
            //  compute file sha 
            //  and save sha in file
            //-----------------------
            //--------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getLastModified = function (aFileInfo, error, context, callback) {
                if (callback == null)
                    return;
                var fullName = aFileInfo.getFullName();
                function onResolve(handle) {
                    if (handle != null && (handle.isFile || handle.isDirectory) && handle.modified) {
                        context != null && context.setResult(handle.modified);
                    }
                    else {
                        error != null && error.setError(9088, "tizen: getLastModified error " + fullName + " stats : error [not a file or directory]");
                    }
                    context != null && context.setError(error);
                    callback(context);
                }
                function onResolveError(err) {
                    var errStr = err != null ? err.message : "not a file";
                    error != null && error.setError(9088, "tizen: getLastModified error " + fullName + " stats : error [ " + errStr + " ]");
                    context != null && context.setError(error);
                    callback(context);
                }
                try {
                    tizen.filesystem.resolve(fullName, onResolve, onResolveError, "r");
                }
                catch (e) {
                    error != null && error.setError(9089, "tizen: getLastModified exception " + e.message);
                    context != null && context.setError(error);
                    callback(context);
                }
            };
            //--------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.computeFileSha2 = function (shaProperties, error, context, callback) {
                // TODO: fix(verify) that
                if ((shaProperties === null) && (shaProperties.getSrcFileInfo() === null)) {
                    console.log("tizen:compute-filesha2 error: error [5051]: srcFileInfo is null");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 error: error [5051]: srcFileInfo is null" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5054, "tizen:compute-filesha2 error: tizen:compute-filesha2 error: error [5051]: srcFileInfo is null");
                    if (callback != null)
                        callback(context);
                }
                var storageName = shaProperties.getSrcFileInfo().getStorage();
                var folderName = shaProperties.getSrcFileInfo().getPath();
                var fileName = shaProperties.getSrcFileInfo().getName();
                //document.getElementById("sdk.message").innerHTML += "<p>computeFileSha2</p>";
                var fileFullName = storageName + folderName + fileName;
                //----
                var owner = this._owner;
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(storageName);
                aFileInfo2.setPath(folderName);
                aFileInfo2.setName(fileName);
                aFileInfo2.setType("file");
                context.setObject2Result(aFileInfo2);
                //-----------
                var callback_fileOpened = function (handle, fs) {
                    try {
                        //var ds = moment(new Date());
                        var sha256 = new rmAsmCrypto.Sha256();
                        var stringRaw = "";
                        var offset = 0;
                        var processed = 0;
                        var CHUNK_SIZE = 128 * 512;
                        var div = Math.floor(handle.fileSize / CHUNK_SIZE);
                        var rem = handle.fileSize % CHUNK_SIZE;
                        for (var cnt = 0; cnt < div; cnt++) {
                            var raw = new Uint8Array(fs.readBytes(CHUNK_SIZE)); //rmAsmCrypto.string_to_bytes(fs.readBytes(CHUNK_SIZE));//new Uint8Array(fs.readBytes(CHUNK_SIZE));
                            sha256.process(raw);
                        }
                        if (rem > 0) {
                            raw = new Uint8Array(fs.readBytes(rem)); //rmAsmCrypto.string_to_bytes(fs.readBytes(rem)); //new Uint8Array(fs.readBytes(rem));
                            sha256.process(raw);
                        }
                        //var de = moment(new Date());
                        //var duration = moment.duration(de.diff(ds));
                        //Helper.logToMain(`Sha generated in ${duration.asMinutes()} minutes, and file has ${handle.fileSize * 0.000001} MB`);
                        var hash = sha256.finish().result;
                        fs.close();
                        fs = null;
                        handle = null;
                        sha256 = null;
                        var res = rmAsmCrypto.bytes_to_hex(hash);
                        //context.setObjectResult(res); 
                        context.setResult(res);
                        shaProperties.setShaString(res);
                        //------
                        console.log("tizen:compute-filesha2 ok: Successfully compute the file " + fileFullName);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 ok: Successfully compute the file " + fileFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                        //------- error 
                    }
                    catch (e) {
                        console.log("tizen:compute-filesha2 ok: error [5054]: during sha computation of the file " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 ok: error [5054]: during sha computation of the file " + fileFullName  + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:compute-filesha2 ok: error [5054]: during sha computation of the file " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }
                };
                //--------------------------------------------------
                // open the file in read mode "r" (after we obtained the file object)
                var callback_fileObjectObtained = function (handle) {
                    //------------------------------
                    try {
                        handle.openStream("r", //FileMode mode,
                        //------------
                        //onsuccess,
                        //----------- 
                        function (fs) {
                            //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(fs) + "</p>"; 
                            callback_fileOpened(handle, fs);
                        }, 
                        //----------
                        // onerror
                        //----------
                        function (e) {
                            //console.log(JSON.stringify(error));
                            console.log("tizen:compute-filesha2 error [5084]: Cannot compute file sha. Error opening file " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                            context.setError(error);
                            //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 error [5084]: Cannot compute file sha. Error opening file " + fileFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                            if (context.getError() != null)
                                context.getError().setError(5084, "tizen:compute-filesha2 error [5084]: Cannot compute file sha. Error opening file " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                            if (callback != null)
                                callback(context);
                        }, 
                        //   
                        "UTF-8" //optional DOMString? encoding) 
                        ); //raises(WebAPIException);
                    }
                    catch (e) {
                        console.log("tizen:compute-filesha2 error [5085]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-shafile2 error [5085]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5085, "tizen:compute-shafile2 error [5085]: Cannot compute file sha " + fileFullName + " catch error on file open: error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }
                };
                //--------------------------------------------------
                // obtain the file object
                tizen.filesystem.resolve(storageName + folderName + fileName, 
                //----------- 
                function (handle) {
                    //-------------------- 
                    //document.getElementById("sdk.message").innerHTML += "<p>"+ "tizen:compute-filesha2 trace. fileObjectObtained : " + JSON.stringify(handle) + "</p>"; 
                    callback_fileObjectObtained(handle);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:compute-filesha2 error [5086]: Cannot compute file sha " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:compute-filesha2 error [5086]: Cannot compute file  sha. Cannot find " + fileFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5086, "tizen:compute-filesha2 error [5086]: Cannot compute file  sha. Cannot find " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'rw');
            };
            //-----------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_computeFileSha2 = function (shaProperties, error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
                var owner = this._owner;
                var thisInterface = this;
                //-----
                var callback2 = function (ctx1) {
                    if (ctx1.isError()) {
                        if (callback != null)
                            callback(ctx1);
                        return;
                    }
                    //var srcStorageName = shaProperties.getSrcFileInfo().getStorage();
                    //var srcFolderName = shaProperties.getSrcFileInfo().getPath();
                    //var srcFileName = shaProperties.getSrcFileInfo().getName();
                    var shaString = shaProperties.getShaString();
                    var shaStorageName = shaProperties.getShaFileInfo().getStorage();
                    var shaFolderName = shaProperties.getShaFileInfo().getPath();
                    var shaFileName = shaProperties.getShaFileInfo().getName();
                    //-------------
                    var callback3 = function (ctx2) {
                        if (!ctx2.isError()) {
                            var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                            aFileInfo.setStorage(shaStorageName);
                            aFileInfo.setPath(shaFolderName);
                            aFileInfo.setName(shaFileName);
                            aFileInfo.setType("file");
                            context.setObjectResult(aFileInfo);
                        }
                        else {
                            ctx2.setObjectResult(ctx2.getObject2Result());
                        }
                        context.setResult(shaProperties.getShaString());
                        if (callback != null)
                            return callback(ctx2);
                    };
                    thisInterface.writeTextFile2(shaStorageName, shaFolderName, shaFileName, shaString, error, ctx1, callback3);
                };
                this.computeFileSha2(shaProperties, error, context, callback2);
            };
            //-----------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_computeFileShaAndSaveShaFile2 = function (shaProperties, error, context, callback) {
            };
            //===========================
            //   Folder FileList functions 
            //===========================
            //------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileList = function (folderFullName, error, context, callback) {
            };
            //------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_getFileList = function (folderFullName, error, context, callback) {
            };
            //-----------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileList2 = function (storageName, folderName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 from: " +  storageName + ' ' +folderName + "</p>";
                var owner = this._owner;
                var aFileInfoRoot = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfoRoot.setStorage(storageName);
                aFileInfoRoot.setPath(folderName);
                aFileInfoRoot.setName("");
                aFileInfoRoot.setType("folder");
                context.setObjectResult(aFileInfoRoot);
                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 before try: " +  storageName + ' ' +folderName + "</p>";
                try {
                    var owner = this._owner;
                    var aFileInfo = null;
                    var fileInfoList = new Array();
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        removableStorage.listFiles(function (files) {
                            for (var i = 0; i < files.length; i++) {
                                var fileinfo = files[i];
                                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 file: " +  fileinfo.name + "</p>";
                                aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                                aFileInfo.setName(fileinfo.name);
                                aFileInfo.setStorage(storageName);
                                aFileInfo.setPath(folderName);
                                var aCreatedDate = owner._aServiceLocator._iEntityCreation.createDefaultDateTime(error);
                                aCreatedDate.setDateTime(fileinfo.created.year, fileinfo.created.monthIndex + 1, fileinfo.created.date, fileinfo.created.hours, fileinfo.created.minutes, fileinfo.created.seconds, fileinfo.created.milliseconds);
                                aFileInfo.setCreatedDate(aCreatedDate);
                                //aFileInfo.setCreatedDate();
                                if (fileinfo.isFile) {
                                    aFileInfo.setType("file");
                                    aFileInfo.setSize(fileinfo.fileSize);
                                }
                                else {
                                    aFileInfo.setType("folder");
                                    aFileInfo.setSize(0);
                                }
                                fileInfoList.push(aFileInfo);
                            }
                            context.setArrayResult(fileInfoList);
                            if (callback != null)
                                callback(context);
                        }, function (listFilesError) {
                            error.setError(listFilesError.code, listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        error.setError(resolveError.code, resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //-----------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getNbFiles2 = function (storageName, folderName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 from: " +  storageName + ' ' +folderName + "</p>";
                var owner = this._owner;
                var aFileInfoRoot = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfoRoot.setStorage(storageName);
                aFileInfoRoot.setPath(folderName);
                aFileInfoRoot.setName("");
                aFileInfoRoot.setType("folder");
                context.setObjectResult(aFileInfoRoot);
                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 before try: " +  storageName + ' ' +folderName + "</p>";
                try {
                    var owner = this._owner;
                    var aFileInfo = null;
                    var fileInfoList = new Array();
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        removableStorage.listFiles(function (files) {
                            var nbFiles = 0;
                            for (var i = 0; i < files.length; i++) {
                                var fileinfo = files[i];
                                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 file: " +  fileinfo.name + "</p>";
                                if (fileinfo.isFile) {
                                    nbFiles++; //aFileInfo.setType("file");
                                }
                                else {
                                    ; //aFileInfo.setType("folder");
                                }
                            }
                            context.setIntResult(nbFiles);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }, function (listFilesError) {
                            error.setError(listFilesError.code, listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        error.setError(resolveError.code, resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileList2_last = function (storageName, folderName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 from: " +  storageName + ' ' +folderName + "</p>";
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 : before try</p>";
                try {
                    var owner = this._owner;
                    var aFileInfo = null;
                    var fileInfoList = new Array();
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 : resolve ok</p>";
                        removableStorage.listFiles(function (files) {
                            for (var i = 0; i < files.length; i++) {
                                var fileinfo = files[i];
                                //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2" +  fileinfo.name + "</p>";
                                aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                                aFileInfo.setName(fileinfo.name);
                                aFileInfo.setStorage(storageName);
                                aFileInfo.setPath(folderName);
                                //aFileInfo.setCreatedDate();
                                if (fileinfo.isFile) {
                                    aFileInfo.setType("file");
                                    aFileInfo.setSize(fileinfo.fileSize);
                                }
                                else {
                                    aFileInfo.setType("folder");
                                    aFileInfo.setSize(0);
                                }
                                fileInfoList.push(aFileInfo);
                            }
                            //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 success </p>";
                            context.setArrayResult(fileInfoList);
                            if (callback != null)
                                callback(context);
                        }, function (listFilesError) {
                            //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 : listFilesErrors " + listFilesError.message + "</p>";
                            error.setError(listFilesError.code, listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 : resolve error " + resolveError.message + "</p>";
                        error.setError(resolveError.code, resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    //document.getElementById("sdk.message").innerHTML += "<p>sdktizen:getFileList2 : before try" + JSON.stringify(e) + "</p>";
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //----------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileList4 = function (storageName, folderFullName, error, context, callback) {
                var fileList = [];
                try {
                    tizen.filesystem.resolve(storageName + folderFullName, function (removableStorage) {
                        removableStorage.listFiles(function (files) {
                            for (var i = 0; i < files.length; i++) {
                                var fileName = files[i].name;
                                fileList.push(fileName);
                            }
                            context.setArrayResult(fileList);
                            if (callback != null)
                                callback(context);
                        }, function (listFilesError) {
                            error.setError(listFilesError.code, listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        error.setError(resolveError.code, resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //==============================
            //   File Functions 
            //=============================
            //---------------------
            //  read text file
            //--------------------
            //--------------
            IImpl_SDK_FileSystem_Tizen.prototype.readTextFile = function (fileFullName, error, context, callback) {
            };
            //--------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_readTextFile = function (fileFullName, error, context, callback) {
                return null;
            };
            /*
            files[i].readAsText(
              function(str) {
                console.log("The file content " + str);
              }, function(e) {
                console.log("Error " + e.message);
              }, "UTF-8"
          );*/
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                try {
                    tizen.filesystem.resolve(storageName + folderName + fileName, function (fileHandle) {
                        fileHandle.readAsText(function (str) {
                            context.setResult(str);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }, function (e) {
                            error.setError(775, "Cannot read file :" + storageName + folderName + fileName + " - " + JSON.stringify(e.message));
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }, "UTF-8");
                    }, function (e) {
                        error.setError(776, "Cannot open file :" + storageName + folderName + fileName + " - " + JSON.stringify(e.message));
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    }, "r");
                }
                catch (e) {
                    error.setError(777, JSON.stringify(e.message));
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.readBinaryFile = function (storageName, folderName, fileName, error, context, callback) {
                if (callback == null)
                    return;
                var errCreateFile = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
                var aFileInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(errCreateFile);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                var filePath = aFileInfo.getFullName();
                function onResolve(fileHandle) {
                    if (fileHandle != null && fileHandle.isFile === true) {
                        fileHandle.openStream("r", function (fs) {
                            var raw = fs.readBytes(fs.bytesAvailable);
                            if (context != null) {
                                context.setArrayResult(raw);
                                context.setError(error);
                            }
                            callback(context);
                        }, function (e) {
                            error != null && error.setError(780, "readBinaryFile: Cannot open stream file: " + filePath + " - " + e.message);
                            context != null && context.setError(error);
                            callback(context);
                        }, "UTF-8");
                    }
                    else {
                        error != null && error.setError(780, "readBinaryFile: Not a file: " + filePath);
                        context != null && context.setError(error);
                        callback(context);
                    }
                }
                function onResolveError(err) {
                    error != null && error.setError(776, "readBinaryFile: Cannot open file: " + filePath + " - " + err.message);
                    context != null && context.setError(error);
                    callback(context);
                }
                try {
                    tizen.filesystem.resolve(filePath, onResolve, onResolveError, "r");
                }
                catch (e) {
                    error != null && error.setError(777, "readBinaryFile exception " + e.message);
                    context != null && context.setError(error);
                    callback(context);
                }
            };
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.readTextFile2_previous = function (storageName, folderName, fileName, error, context, callback) {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                //var fileFullName = storageName + folderName + fileName;
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (dir) {
                        var data = dir.resolve(fileName);
                        if (data) {
                            data.readAsText(function (arg) {
                                //document.getElementsByClassName('ui-content')[0].innerText = arg;  
                                context.setResult(arg);
                                context.setError(error);
                                if (callback != null)
                                    callback(context);
                            });
                        }
                        else {
                            error.setError(779, "File Not Found :" + storageName + folderName + fileName);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                    }, function (e) {
                        console.log("Error " + e.message);
                        error.setError(775, JSON.stringify(e.message));
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    }, "r");
                }
                catch (e) {
                    error.setError(778, JSON.stringify(e.message));
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.readTextFile2_prev2 = function (storageName, folderName, fileName, error, context, callback) {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                //var fileFullName = storageName + folderName + fileName;
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (dir) {
                        var data = dir.resolve(fileName);
                        if (data) {
                            data.readAsText(function (arg) {
                                //document.getElementsByClassName('ui-content')[0].innerText = arg;  
                                context.setResult(arg);
                                context.setError(error);
                                if (callback != null)
                                    callback(context);
                            });
                        }
                        else {
                            error.setError(779, "File Not Found :" + storageName + folderName + fileName);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                    }, function (e) {
                        console.log("Error " + e.message);
                        error.setError(775, JSON.stringify(e.message));
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    }, "r");
                }
                catch (e) {
                    error.setError(778, JSON.stringify(e.message));
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.readTextFile2_prev = function (storageName, folderName, fileName, error, context, callback) {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                //var fileFullName = storageName + folderName + fileName;
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                var bFound = false;
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        removableStorage.listFiles(function (files) {
                            for (var i = 0; i < files.length; i++) {
                                if (files[i].name == fileName) {
                                    bFound = true;
                                    var file = removableStorage.resolve(fileName);
                                    if (file != null) {
                                        file.openStream("r", function (fs) {
                                            var fileContent = fs.read(file.fileSize);
                                            fs.close();
                                            context.setError(error);
                                            context.setResult(fileContent);
                                            if (callback != null)
                                                callback(context);
                                        }, function (e) {
                                            console.log("Error " + e.message);
                                            error.setError(775, JSON.stringify(e.message));
                                            context.setError(error);
                                            if (callback != null)
                                                callback(context);
                                        });
                                    }
                                }
                                /*
                                if (bFound == false)
                                {
                                  error.setError(779,"File Not Found :" + storageName + folderName + fileName);
                                  context.setError(error);
                                  if (callback != null)
                                    callback(context);
                                }*/
                            }
                        }, function (listFilesError) {
                            error.setError(776, listFilesError.code + " " + listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        error.setError(777, resolveError.code + " " + resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(778, JSON.stringify(e.message));
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
                //no need to call this:
                // this.readTextFile(storageName + folderName + fileName, error, context, callback);            
            };
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_readTextFile2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_readTextFile(storageName + folderName + fileName, error, context, callback);
            };
            //----------------------
            //   write  text file
            //----------------------
            //-----------------
            IImpl_SDK_FileSystem_Tizen.prototype.writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_writeTextFile = function (fileFullName, fileContent, error, context, callback) {
            };
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                var mode = "w";
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        try {
                            var file = removableStorage.resolve(fileName);
                            if (file == null) {
                                file = removableStorage.createFile(fileName);
                                mode = "w";
                            }
                        }
                        catch (e) {
                            file = removableStorage.createFile(fileName);
                            mode = "w";
                        }
                        if (file != null) {
                            file.openStream(mode, function (fs) {
                                fs.write(fileContent);
                                fs.close();
                                context.setResult("success :)");
                                if (callback != null)
                                    callback(context);
                            }, function (e) {
                                error.setError(0, e.message);
                                context.setError(error);
                                if (callback != null)
                                    callback(context);
                            }, "UTF-8");
                        }
                        else {
                            error.setError(0, "File created fail");
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //---------------------
            /*
            public writeTextFile4(storageName: string, folderName: string, fileName: string, fileContent: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
            {
              var owner = this._owner;
              var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
              aFileInfo.setStorage(storageName);
              aFileInfo.setPath(folderName);
              aFileInfo.setName(fileName);
              aFileInfo.setType("file");
              context.setObjectResult(aFileInfo);
              try{
               tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                  var file = removableStorage.createFile(fileName);
                  if(file != null){
                    file.openStream("w",
                             function(fs) {
                                 fs.write(fileContent);
                                 fs.close();
                                 context.setResult("success :)");
                                 if (callback != null)
                                    callback(context);
                             }, function(e) {
                                error.setError(0,e.message);
                                context.setError(error);
                                if (callback != null)
                                  callback(context);
                             }, "UTF-8"
                         );
                  }else{
                    error.setError(0, "File created fail");
                    context.setError(error);
                    if (callback != null)
                       callback(context);
                  }
               
              });
              }
              catch(e){
                error.setError(0, e);
                context.setError(error);
                if (callback != null)
                   callback(context);
              }
            }*/
            //---------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_writeTextFile2 = function (storageName, folderName, fileName, fileContent, error, context, callback) {
            };
            //----------------------
            //  remove file 
            //----------------------
            //--------------------
            IImpl_SDK_FileSystem_Tizen.prototype.removeFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_removeFile = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.removeFile2 = function (storageName, folderName, fileName, error, context, callback) {
                var fileFullName = storageName + folderName + fileName;
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName(fileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                //----- 
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        removableStorage.deleteFile(removableStorage.path + removableStorage.name + "/" + fileName, function () {
                            console.log("tizen:remove-file2: ok. Successfully remove the file " + fileFullName);
                            context.setResult("tizen:remove-file2: ok. Successfully remove the file " + fileFullName);
                            context.setBoolResult(true);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }, function (e) {
                            console.log("tizen:remove-file2 error [5005]: Cannot delete Folder " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                            context.setBoolResult(false);
                            context.setError(error);
                            if (context.getError() != null)
                                context.getError().setError(5005, "tizen:remove-file2 error [5005]: Cannot delete Folder " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                            if (callback != null)
                                callback(context);
                        });
                    });
                }
                catch (e) {
                    console.log("tizen:remove-file2 error [5005]: Cannot delete Folder " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setBoolResult(false);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(5005, "tizen:remove-file2 error [5005]: Cannot delete Folder " + fileFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }
            };
            //---------------------
            //   file exists
            //---------------------
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.fileExists = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.promise_fileExists = function (fileFullName, error, context, callback) {
            };
            //------------------------
            //  append text to file
            //------------------------
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.appendTextToFile_old = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        var file = removableStorage.resolve(fileName);
                        if (file != null) {
                            file.openStream("a", function (fs) {
                                fs.write(fileContent);
                                fs.close();
                                context.setResult("Append test to file completed with success. :)");
                                if (callback != null)
                                    callback(context);
                            }, function (e) {
                                error.setError(0, e.message);
                                context.setError(error);
                                if (callback != null)
                                    callback(context);
                            }, "UTF-8");
                        }
                        else {
                            error.setError(0, "Failed appending text to fail");
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //----------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.appendTextToFile = function (storageName, folderName, fileName, fileContent, error, context, callback) {
                var owner = this._owner;
                //var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                //aFileInfo.setStorage(storageName);
                //aFileInfo.setPath(folderName);
                //aFileInfo.setName(fileName);
                //aFileInfo.setType("file");
                //context.setObjectResult(aFileInfo);      
                var mode = "a";
                try {
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        try {
                            var file = removableStorage.resolve(fileName);
                            if (file == null) {
                                file = removableStorage.createFile(fileName);
                                mode = "w";
                            }
                        }
                        catch (e) {
                            file = removableStorage.createFile(fileName);
                            mode = "w";
                        }
                        if (file != null) {
                            file.openStream(mode, function (fs) {
                                fs.write(fileContent);
                                fs.close();
                                context.setResult("success :)");
                                if (callback != null)
                                    callback(context);
                            }, function (e) {
                                error.setError(0, e.message);
                                context.setError(error);
                                if (callback != null)
                                    callback(context);
                            }, "UTF-8");
                        }
                        else {
                            error.setError(0, "File created fail");
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.fileExists2 = function (storageName, folderName, fileName, error, context, callback) {
                try {
                    context.setBoolResult(false);
                    tizen.filesystem.resolve(storageName + folderName, function (removableStorage) {
                        removableStorage.listFiles(function (files) {
                            context.setBoolResult(false);
                            for (var i = 0; i < files.length; i++) {
                                if (files[i].name == fileName) {
                                    context.setBoolResult(true);
                                    break;
                                }
                            }
                            if (callback != null)
                                callback(context);
                        }, function (listFilesError) {
                            error.setError(listFilesError.code, listFilesError.message);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        });
                    }, function (resolveError) {
                        error.setError(resolveError.code, resolveError.message);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    });
                }
                catch (e) {
                    error.setError(0, e);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
            };
            //--------------------------------------
            //              copy file
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_copyFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>copyFile2</p>";
                var srcFileFullName = srcStorageName + srcFolderName + srcFileName;
                var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(dstStorageName);
                aFileInfo.setPath(dstFolderName);
                aFileInfo.setName(dstFileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                //----- 
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(srcStorageName);
                aFileInfo2.setPath(srcFolderName);
                aFileInfo2.setName(srcFileName);
                aFileInfo2.setType("file");
                context.setObject2Result(aFileInfo2);
                //---------------------------------------
                var callback_DstSrcStorage = function (objSrcStorage, objDstStorage) {
                    //------------------
                    var callback_copySuccess = function () {
                        console.log("tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName);
                        context.setResult("tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    };
                    //-------
                    var callback_copyError = function (e) {
                        console.log("tizen:copy-file2 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:copy-file2 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    };
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:copy-file2 source file: " + objSrcStorage.fullPath + "/" + srcFileName + "</p>"; 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:copy-file2 dest file: "   + objDstStorage.fullPath + "/" + dstFileName + "</p>"; 
                    objSrcStorage.copyTo(objSrcStorage.fullPath + "/" + srcFileName, objDstStorage.fullPath + "/" + dstFileName, true, callback_copySuccess, callback_copyError);
                };
                //--------------------------------------------------
                // obtain dest storage 
                //--------------------------------------------------
                var callback_SrcStorage = function (objSrcStorage) {
                    //--------------------------------------------
                    tizen.filesystem.resolve(dstStorageName + dstFolderName, 
                    //----------- 
                    function (objDstStorage) {
                        //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objDstStorage) + "</p>"; 
                        callback_DstSrcStorage(objSrcStorage, objDstStorage);
                        //-------------------- 
                    }, function (e) {
                        //console.log(JSON.stringify(error));
                        console.log("tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5055, "tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }, 'rw');
                };
                //--------------------------------------------------
                // obtain source storage 
                //--------------------------------------------------
                tizen.filesystem.resolve(srcStorageName + srcFolderName, 
                //----------- 
                function (objSrcStorage) {
                    //-------------------- 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objSrcStorage) + "</p>"; 
                    callback_SrcStorage(objSrcStorage);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5012, "tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'rw');
                /*
                console.log("copy done");
                context.setBoolResult(true);
                context.setError(error);
                console.log(context.getBoolResult());
                if (callback != null)
                  callback(context);
                */
                /*
               var localSrcStorageObj = null;
               tizen.filesystem.resolve(
                 srcStorageName, // + srcFolderName,
                 //----------------
                 function(srcStorageObj) {
                           localSrcStorageObj = srcStorageObj;
                           tizen.filesystem.resolve(
                             dstStorageName, //+ dstFolderName
                             //===
                             function(dstStorageObj) {
                                 
                               var srcFileFullName = localSrcStorageObj.fullPath + srcFolderName + srcFileName;
                               var dstFileFullName = dstStorageObj.fullPath + dstFolderName + dstFileName;
                               //----
                               function onSuccess() {
                                 console.log( "tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName);
                                 context.setResult( "tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName);
                                 document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 ok: Successfully copy the file " + srcFileFullName + "to " + dstFileFullName + "</p>";
                                 context.setError(error);
                                 if (callback != null)
                                   callback(context);
                               }
                               //----
                               var errorCallback = function(e) {
                                  console.log( "tizen:copy-file2 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                                  context.setError(error);
                                  document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "] </p>";
                                  if (context.getError() != null)
                                    context.getError().setError(5012, "tizen:copy-file4 error [5054]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                                  if (callback != null)
                                    callback(context);
                               }
                               tizen.filesystem.copyFile(srcFileFullName, dstFileFullName, true, onSuccess, errorCallback);
                               
                             },
                             //========
                             function(e) {
                               console.log( "tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                               context.setError(error);
                               document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>";
                               if (context.getError() != null)
                                 context.getError().setError(5012, "tizen:copy-file2 error [5055]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                               if (callback != null)
                                 callback(context);
                             },
                             'rw'
                           );
                 },
                 //--------------------
                 function(e) {
                   console.log( "tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                   context.setError(error);
                   document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>";
          
                   if (context.getError() != null)
                     context.getError().setError(5012, "tizen:copy-file2 error [5056]: Cannot copy file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                   if (callback != null)
                     callback(context);
                 },
                 'rw'
               );
                */
                /*
                documentsDir.copyTo(files[i].fullPath,
                  "images/backup/" + files[i].name,
                  false,
                  function() {console.log("file copied");});
           
                var filePathAndName = 'documents/exampleFile.jpg';
                var destination = 'images/copyOfExampleFile.jpg';
           
                function onSuccess() {
                   console.log('success');
                }
                var errorCallback = function(error) {
                   console.log(error);
                }
                tizen.filesystem.copyFile(filePathAndName, destination, true, onSuccess, errorCallback);
                */
            };
            //------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_copyFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                return this.promise_copyFile(srcStorageName + srcFolderName + srcFileName, dstStorageName + dstFolderName + dstFileName, error, context, callback);
            };
            //--------------------------------------
            //      download File 
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_downloadFile = function (remoteUrlName, dstFileFullName, error, context, callback) {
            };
            //------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                var debugDownload = false;
                var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
                var dstPathFullName = dstStorageName + dstFolderName;
                if (debugDownload)
                    document.getElementById("rend.message").innerHTML += "<p>prepare download : " + dstFileFullName + " " + "</p>";
                //----
                var self = this;
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(dstStorageName);
                aFileInfo.setPath(dstFolderName);
                aFileInfo.setName(dstFileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                // Check if Download API is supported not on a device.
                /*
                var download_api_capability = tizen.systeminfo.getCapability("http://tizen.org/feature/download");
                if (download_api_capability === false)
                {
                  console.log("Download API is not supported on this device.");
                  return;
                }*/
                var listener = {
                    onprogress: function (id, receivedSize, totalSize) {
                        //console.log('Received with id: ' + id + ', ' + receivedSize + '/' + totalSize);
                        if (debugDownload)
                            document.getElementById("rend.message").innerHTML += "<p>On Progress : " + 'Received with id: ' + id + ', ' + receivedSize + '/' + totalSize + "</p>";
                    },
                    onpaused: function (id) {
                        //console.log('Paused with id: ' + id);
                        if (debugDownload)
                            document.getElementById("rend.message").innerHTML += "<p>Paused with id : " + id + "</p>";
                    },
                    oncanceled: function (id) {
                        //console.log('Canceled with id: ' + id);
                        if (debugDownload)
                            document.getElementById("rend.message").innerHTML += "<p>Canceled with id: " + id + "</p>";
                    },
                    oncompleted: function (id, path) {
                        if (debugDownload)
                            document.getElementById("rend.message").innerHTML += "<p>Completed download file : " + remoteUrlName + " with id: " + id + ", path: " + path + "</p>";
                        //console.log("Completed download file : " +  remoteUrlName + " with id: " + id + ", path: " + path);
                        //void moveTo(DOMString originFilePath, DOMString destinationFilePath, boolean overwrite, optional SuccessCallback? onsuccess, optional ErrorCallback? onerror);
                        //==================================================
                        try {
                            tizen.filesystem.resolve(dstPathFullName, function (dir) {
                                dir.moveTo(path, dstFileFullName, true, function () {
                                    if (debugDownload)
                                        document.getElementById("rend.message").innerHTML += "<p>Completed download file to the final location: " + remoteUrlName + " with id: " + id + ", path: " + path + "</p>";
                                    context.setBoolResult(true);
                                    context.setError(error);
                                    console.log(context.getBoolResult());
                                    if (callback != null)
                                        callback(context);
                                }, function (e) {
                                    //console.log("Error " + e.message);
                                    context.setBoolResult(false);
                                    if (debugDownload)
                                        document.getElementById("rend.message").innerHTML += "<p>ERROR DOWNLOAD 975: Cannot rename downloaded file to :" + dstFileFullName + " - " + JSON.stringify(e.message) + "</p>";
                                    error.setError(975, "ERROR DOWNLOAD: Cannot rename downloaded file to :" + dstFileFullName + " - " + JSON.stringify(e.message));
                                    context.setError(error);
                                    if (callback != null)
                                        callback(context);
                                }, "UTF-8");
                            }, function (e) {
                                //console.log("Error " + e.message);
                                context.setBoolResult(false);
                                if (debugDownload)
                                    document.getElementById("rend.message").innerHTML += "<p>ERROR DOWNLOAD 976: Cannot open directory :" + dstPathFullName + " - " + JSON.stringify(e.message) + "</p>";
                                error.setError(976, "ERROR DOWNLOAD: Cannot open directory :" + dstPathFullName + " - " + JSON.stringify(e.message));
                                context.setError(error);
                                if (callback != null)
                                    callback(context);
                            }, "rw");
                        }
                        catch (e) {
                            context.setBoolResult(false);
                            if (debugDownload)
                                document.getElementById("rend.message").innerHTML += "<p>ERROR DOWNLOAD 977: File :" + dstPathFullName + " - error: " + JSON.stringify(e.message) + "</p>";
                            error.setError(977, "ERROR DOWNLOAD: " + JSON.stringify(e.message));
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                        //=================================================
                        /*
                        var srcStorageName = "";
                        var srcFolderName = "";
                        var srcFileName   = "";
                        var dstStorageName = "";
                        var dstFolderName  = "";
                        var dstFileName    = "";
                        var errorRename: amGeneralError.am_general.A_Error;
                        var contextRename: amGeneralContext.am_general.A_Context;
                        var callbackContextRename = function callbackContextRename()
                        {
                          context.setBoolResult(true);
                          context.setError(error);
                          console.log(context.getBoolResult());
                          if (callback != null)
                            callback(context);
                        }
                        self.moveFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callbackContextRename) ;
                        */
                        //=====================================
                        //context.setBoolResult(true);
                        //context.setError(error);
                        //console.log(context.getBoolResult()); 
                        //if (callback != null)
                        //callback(context);
                        //=====================================  
                        /*
                        var filePathAndName = path;            //'documents/exampleFile.jpg';
                        var destination     = dstFileFullName; //'images/copyOfExampleFile.jpg';
                        function onSuccess() {
                          console.log('Completed with id: ' + id + ', path: ' + path);
                          console.log("Download done");
                          context.setBoolResult(true);
                          context.setError(error);
                          console.log(context.getBoolResult());
                          if (callback != null)
                            callback(context);
                        }
                        var errorCallback = function(error) {
                          console.log(error);
                        }
                        tizen.filesystem.copyFile(filePathAndName, destination, true, onSuccess, errorCallback);
                        */
                    },
                    onfailed: function (id, tizenError) {
                        if (debugDownload)
                            document.getElementById("rend.message").innerHTML += "<p> Error download" + tizenError.name + " " + "</p>";
                        console.log('Failed with id: ' + id + ', error name: ' + tizenError.name);
                        var errorCode = id;
                        var errorText = tizenError.name;
                        console.log(" Error Code [" + errorCode + "]: " + errorText);
                        if (error != null)
                            error.setError(errorCode, errorText);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    }
                };
                //document.getElementById("rend.message").innerHTML += "<p>" + dstFileFullName + " " + "</p>";
                //document.getElementById("rend.message").innerHTML += "<p>" + remoteUrlName + " " + "</p>";
                // Starts downloading the file from the Web with the corresponding callbacks.
                try {
                    var downloadRequest = new tizen.DownloadRequest(remoteUrlName, dstPathFullName); //"downloads");//"http://download.tizen.org/tools/README.txt", "documents");
                    try {
                        if (self._owner._aDefaultHttpHeaders != null) {
                            //document.getElementById("rend.message").innerHTML = "<p>MESSAGE: Download - self._owner._aDefaultHttpHeaders != null </p>";
                            var aHttpHeaderList = self._owner._aDefaultHttpHeaders.getHttpHeaderList();
                            if (aHttpHeaderList != null) {
                                //document.getElementById("rend.message").innerHTML += "<p>MESSAGE: Download - aHttpHeaderList != null </p>";
                                var crtHttpHeader = null;
                                var crtHttpHeaderName = null;
                                var crtHttpHeaderValue = null;
                                for (var idxHeader = 0; idxHeader < aHttpHeaderList.length; idxHeader++) {
                                    //document.getElementById("rend.message").innerHTML += "<p>MESSAGE: Download - idxHeader " + idxHeader + "</p>";
                                    crtHttpHeader = aHttpHeaderList[idxHeader];
                                    if (crtHttpHeader == null)
                                        continue;
                                    crtHttpHeaderName = crtHttpHeader.getHeaderName();
                                    if (crtHttpHeaderName == null)
                                        continue;
                                    if (crtHttpHeaderName == "")
                                        continue;
                                    crtHttpHeaderValue = crtHttpHeader.getHeaderValue();
                                    downloadRequest.httpHeader[crtHttpHeaderName] = crtHttpHeaderValue;
                                    //document.getElementById("rend.message").innerHTML += "<p>MESSAGE: Download - " + crtHttpHeaderName + ":" 
                                    //                                                                               + downloadRequest.httpHeader[crtHttpHeaderName] + "</p>";
                                }
                                // var req = new tizen.DownloadRequest("http://download.tizen.org/tools/README.txt");
                                // req.httpHeader["Pragma"] = "no-cache";
                                // req.httpHeader["Cookie"] = "version=1; Skin=new";
                                // req.httpHeader["X-Agent"] = "Tizen Sample App";
                            }
                        }
                    }
                    catch (e) {
                        context.setBoolResult(false);
                        if (debugDownload)
                            document.getElementById("rend.message").innerHTML += "<p>ERROR DOWNLOAD 979: File :" + dstPathFullName + " - error: " + JSON.stringify(e.message) + "</p>";
                        error.setError(979, "ERROR DOWNLOAD SET HTTP HEADERS: " + JSON.stringify(e.message));
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    }
                    if (debugDownload)
                        document.getElementById("rend.message").innerHTML += "<p>start download : " + dstFileFullName + " " + "</p>";
                    var downloadId = tizen.download.start(downloadRequest, listener);
                }
                catch (e) {
                    context.setBoolResult(false);
                    if (debugDownload)
                        document.getElementById("rend.message").innerHTML += "<p>ERROR DOWNLOAD 971: File :" + dstPathFullName + " - error: " + JSON.stringify(e.message) + "</p>";
                    error.setError(971, "ERROR DOWNLOAD: " + JSON.stringify(e.message));
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                }
                // If you want to download a large file through Wi-Fi,
                /*
                var wifi_capability = tizen.systeminfo.getCapability("http://tizen.org/feature/network.wifi");
                var wifiDownloadRequest = new tizen.DownloadRequest("http://download.tizen.org/tools/archive/14.02.2/Ubuntu_12.04/qemu_1.6.0rc3.orig.tar.gz", "downloads", null, "WIFI");
          
                if (wifi_capability === true) {
                    var downlodId_wifi = tizen.download.start(wifiDownloadRequest, listener);
                } else {
                    // If you call tizen.download.start(), NotSupportedError will be thrown.
                    console.log("This device doesn't support Download API through Wi-Fi.");
                }*/
            };
            //------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_downloadFile2 = function (remoteUrlName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            };
            //--------------------------------------
            //      unzip File 
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_unzipFile = function (zipFullFileName, unzipFullPath, error, context, callback) {
            };
            //------------------------------------
            /*public unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string,
                               unzipStorageName: string, unzipFolderName: string,
                               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
            {
              this.unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
            }*/
            /*
                function errorCallback(error) {
                    console.log(error);
                }
        
                function successCallback() {
                    console.log("done");
                }
        
                function progressCallback(opId, val, name) {
                    console.log("extracting operation (: " + opId + ") is in progress (" + (val * 100).toFixed(1) + "%)");
                }
        
                function openSuccess(archive) {
                    archive.extractAll("music", successCallback, errorCallback, progressCallback);
                }
        
                tizen.archive.open("downloads/some_archive.zip", "r", openSuccess);
                file:///opt/media/USBDriveA1/
            */
            //------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                //----
                var self = this;
                var owner = this._owner;
                var bDebugUnzip2 = true;
                var tmpStorageName = "camera"; //"music";
                var tmpFolderName = "/temp";
                var tmpZipFileName = zipFileName;
                var callbackCreateTempFolder1 = function callbackCreateTempFolder1(ctx5) {
                    var callbackDeleteTempFolder = function callbackDeleteTempFolder(ctx2) {
                        if (ctx2.isError()) {
                            if (bDebugUnzip2) {
                                document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 WARNING: Cannot delete temp folder" + ctx2.getError().getErrMsg() + "</p>";
                            }
                        }
                        var callbackCreateTempFolder = function callbackCreateTempFolder(ctx3) {
                            if (ctx3.isError()) {
                                if (bDebugUnzip2) {
                                    document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 WARNING: Cannot create temp folder" + ctx3.getError().getErrMsg() + "</p>";
                                }
                            }
                            var callbackCopyArchive = function callbackCopyArchive() {
                                //--------------------------------------------------------------------------
                                //document.getElementById("rend.message").innerHTML += "<p>unzipFile2</p>";
                                var zipFileFullName = zipStorageName + zipFolderName + zipFileName;
                                var unzipFolderFullName = unzipStorageName + unzipFolderName;
                                //var unzipFolderTmpFullName = "documents/" + unzipFolderName; 
                                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                                aFileInfo.setStorage(unzipStorageName);
                                aFileInfo.setPath(unzipFolderName);
                                aFileInfo.setName("");
                                aFileInfo.setType("folder");
                                context.setObjectResult(aFileInfo);
                                //----- 
                                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                                aFileInfo2.setStorage(zipStorageName);
                                aFileInfo2.setPath(zipFolderName);
                                aFileInfo2.setName(zipFileName);
                                aFileInfo2.setType("file");
                                context.setObject2Result(aFileInfo2);
                                function errorCallback(tizenError) {
                                    if (bDebugUnzip2) {
                                        document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5052]: Cannot unzip archive " + " "
                                            + tmpStorageName + "/" + tmpFolderName + " " + dstStorageName + "/" + dstFolderName
                                            + " : error [" + JSON.stringify(tizenError.name) + "]</p>";
                                    }
                                    context.setError(error);
                                    if (context.getError() != null)
                                        context.getError().setError(5052, "tizen:unzip-file2 error [5054]: Cannot unzip file "
                                            + tmpStorageName + "/" + tmpFolderName + " " + dstStorageName + "/" + dstFolderName
                                            + " : error [" + JSON.stringify(tizenError.name) + "] ");
                                    if (callback != null)
                                        callback(context);
                                }
                                //------------------------------------------------------------
                                function successCallback() {
                                    if (bDebugUnzip2) {
                                        //console.log( "tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName); 
                                        //context.setResult( "tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName); 
                                        document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 ok: Successfully unzip the file - Ok "
                                            + " " + tmpStorageName + "/" + tmpFolderName +
                                            +" " + dstStorageName + "/" + dstFolderName + "</p>";
                                    }
                                    //==============================================================================
                                    var contextCopyFolder = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                                    var errorCopyFolder = owner._aServiceLocator._iEntityCreation.createDefaultError();
                                    var srcStorageName2 = tmpStorageName;
                                    var srcFolderName2 = tmpFolderName;
                                    var dstStorageName2 = unzipStorageName;
                                    var dstFolderName2 = unzipFolderName;
                                    var callbackCopyFolder = function callbackCopyFolder(ctxCopyFolder) {
                                        //---------- if -- error during BuildAndDownloadMainFiles -- stop on error
                                        if (ctxCopyFolder.isError()) {
                                            if (bDebugUnzip2) {
                                                document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5062]: Cannot copy tmp folder "
                                                    + " " + tmpStorageName + "/" + tmpFolderName +
                                                    +" " + dstStorageName + "/" + dstFolderName + "</p>";
                                            }
                                            if (context != null) {
                                                error.setError(1004, "ERROR 1004: unzip copy folder: [" + errorCopyFolder.getErrMsg() + "]");
                                                if (bDebugUnzip2) {
                                                    document.getElementById("rend.message").innerHTML += "ERROR 1004: unzip copy folder: ["
                                                        + errorCopyFolder.getErrMsg() + "]";
                                                }
                                                context.setError(error);
                                                context.setBoolResult(false);
                                                return callback(context);
                                            }
                                            return;
                                        }
                                        if (bDebugUnzip2) {
                                            document.getElementById("rend.message").innerHTML += "<p>tizen:unzip-file2 ok: Successfully copy tmp folder to "
                                                + " " + tmpStorageName + "/" + tmpFolderName +
                                                +" " + tmpStorageName + "/" + dstFolderName + "</p>";
                                        }
                                        //------------------------------------------
                                        var contextDeleteTempFolder2 = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                                        var errorDeleteTempFolder2 = owner._aServiceLocator._iEntityCreation.createDefaultError();
                                        var callbackDeleteTempFolder2 = function callbackDeleteTempFolder2(ctx6) {
                                            if (ctx6.isError()) {
                                                if (bDebugUnzip2) {
                                                    document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 WARNING: Cannot delete temp folder at the end "
                                                        + ctx6.getError().getErrMsg() + "</p>";
                                                }
                                            }
                                            var contextTmpZip = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                                            var errorTmpZip = owner._aServiceLocator._iEntityCreation.createDefaultError();
                                            var callbackDeleteTempZipFile = function callbackDeleteTempZipFile(ctx7) {
                                                if (ctx7.isError()) {
                                                    if (bDebugUnzip2) {
                                                        document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 WARNING: Cannot delete temp zip file at the end: ";
                                                        tmpStorageName + "/" + tmpZipFileName + "[" + ctx7.getError().getErrMsg() + "]</p>";
                                                    }
                                                }
                                                context.setError(error);
                                                context.setBoolResult(false);
                                                return callback(context);
                                            };
                                            //====================================================
                                            var tmpZipStorageName7 = tmpStorageName; //"";
                                            var tmpZipFolderName7 = "/"; //tmpFolderName;//"videos";
                                            var tmpZipFileName7 = tmpZipFileName; //zipFileName;
                                            self.removeFile2(tmpZipStorageName7, tmpZipFolderName7, tmpZipFileName7, errorTmpZip, contextTmpZip, callbackDeleteTempZipFile);
                                        };
                                        //====================================================
                                        var dstStorageName6 = tmpStorageName;
                                        ; //tmpStorageName;//"";
                                        var dstFolderName6 = tmpFolderName; //"videos";
                                        var dstFileName6 = tmpZipFileName; //zipFileName;
                                        self.deleteFolder2(dstStorageName6, dstFolderName6, errorDeleteTempFolder2, contextDeleteTempFolder2, callbackDeleteTempFolder2);
                                    };
                                    //====================================================
                                    self.copyFolder2(srcStorageName2, srcFolderName2, dstStorageName2, dstFolderName2, errorCopyFolder, contextCopyFolder, callbackCopyFolder);
                                }
                                //-------------------------------------------------------------
                                function progressCallback(opId, val, name) {
                                    if (bDebugUnzip2) {
                                        //document.getElementById("rend.message").innerHTML += "<p>" + "extracting operation (: " + opId + ") is in progress (" + (val * 100).toFixed(1) + "%)</p>";
                                        console.log("extracting operation (: " + opId + ") is in progress (" + (val * 100).toFixed(1) + "%)");
                                    }
                                }
                                function openError(tizenOpenError) {
                                    if (bDebugUnzip2) {
                                        document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5072]: Cannot open archive "
                                            + tmpStorageName + "/" + tmpZipFileName +
                                            +"to " + tmpStorageName + "/" + tmpFolderName + " : error [" + JSON.stringify(tizenOpenError.name) + "]</p>";
                                    }
                                    context.setError(error);
                                    if (context.getError() != null)
                                        context.getError().setError(5054, "tizen:unzip-file2 error [5072]: Cannot unzip file " + tmpStorageName + "/" + tmpZipFileName
                                            + " to " + tmpStorageName + "/" + tmpFolderName +
                                            +" : error [" + JSON.stringify(tizenOpenError.name) + "]");
                                    if (callback != null)
                                        callback(context);
                                }
                                function openSuccess(archive) {
                                    if (bDebugUnzip2) {
                                        document.getElementById("rend.message").innerHTML += "<p>succesfully open archive " + tmpStorageName + "/" + tmpZipFileName + " - OK</p>";
                                        document.getElementById("rend.message").innerHTML += "<p>start unzip all to folder " + tmpStorageName + "/" + tmpFolderName + "...</p>";
                                    }
                                    //archive.extractAll("file:///opt/media/USBDriveA1/__unzip", successCallback, errorCallback, progressCallback);
                                    //archive.extractAll("documents", successCallback, errorCallback, progressCallback);
                                    archive.extractAll(tmpStorageName + "/" + tmpFolderName, successCallback, errorCallback, progressCallback); //unzipFolderFullName
                                }
                                try {
                                    //-------------------
                                    if (bDebugUnzip2) {
                                        document.getElementById("rend.message").innerHTML += "<p>start open archive" + tmpStorageName + "/" + tmpZipFileName + "...</p>";
                                    }
                                    //tizen.archive.open("/opt/media/USBDriveA1/__unzip/archive.zip", "r", openSuccess, openError); //"downloads/some_archive.zip", "r", openSuccess); 
                                    //tizen.archive.open("downloads/" + zipFileName, "r", openSuccess, openError); //"downloads/some_archive.zip", "r", openSuccess); 
                                    //tizen.archive.open(zipFileFullName, "r", openSuccess, openError);//"downloads/some_archive.zip", "r", openSuccess);
                                    tizen.archive.open(tmpStorageName + "/" + tmpZipFileName, "r", openSuccess, openError); //"downloads/some_archive.zip", "r", openSuccess);
                                    //-------------------
                                }
                                catch (e) {
                                    if (bDebugUnzip2) {
                                        console.log("tizen:unzip-file2 error [5059]: Cannot open archive " + tmpStorageName + "/" + tmpZipFileName + " : error [" + JSON.stringify(e) + "]");
                                        context.setError(error);
                                        document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5059]: Cannot unzip file " + zipFileFullName
                                            + " to " + unzipFolderFullName + +" : error [" + JSON.stringify(e) + "]" + "</p>";
                                    }
                                    if (context.getError() != null)
                                        context.getError().setError(5054, "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + " to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                                    if (callback != null)
                                        callback(context);
                                }
                            };
                            //------------------------------------
                            var contextCopyFile = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                            var errorCopyFile = owner._aServiceLocator._iEntityCreation.createDefaultError();
                            var srcStorageName = zipStorageName;
                            var srcFolderName = zipFolderName;
                            var srcFileName = zipFileName;
                            var dstStorageName = ""; //tmpStorageName;//"";
                            var dstFolderName = tmpStorageName; //"videos";
                            var dstFileName = tmpZipFileName; //zipFileName;
                            self.copyFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, errorCopyFile, contextCopyFile, callbackCopyArchive);
                        };
                        var contextCreateTempFolder = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                        var errorCreateTempFolder = owner._aServiceLocator._iEntityCreation.createDefaultError();
                        var dstStorageName3 = tmpStorageName;
                        ; //tmpStorageName;//"";
                        var dstFolderName3 = tmpFolderName; //"videos";
                        var dstFileName3 = tmpZipFileName; //zipFileName;
                        self.createFolder2(dstStorageName3, dstFolderName3, errorCreateTempFolder, contextCreateTempFolder, callbackCreateTempFolder);
                    };
                    var contextDeleteTempFolder = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                    var errorDeleteTempFolder = owner._aServiceLocator._iEntityCreation.createDefaultError();
                    var dstStorageName4 = tmpStorageName;
                    ; //tmpStorageName;//"";
                    var dstFolderName4 = tmpFolderName; //"videos";
                    var dstFileName3 = tmpZipFileName; //zipFileName;
                    self.deleteFolder2(dstStorageName4, dstFolderName4, errorDeleteTempFolder, contextDeleteTempFolder, callbackDeleteTempFolder);
                };
                var contextCreateTempFolder1 = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var errorCreateTempFolder1 = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var dstStorageName5 = tmpStorageName;
                ; //tmpStorageName;//"";
                var dstFolderName5 = tmpFolderName; //"videos";
                var dstFileName5 = tmpZipFileName; //zipFileName;
                self.createFolder2(dstStorageName5, dstFolderName5, errorCreateTempFolder1, contextCreateTempFolder1, callbackCreateTempFolder1);
            };
            //================================= unzipFolderTmpFullName
            /*
            try
            {
              tizen.filesystem.copyDirectory("videos", unzipFolderFullName, true, successCopy, errorCopy);
            }
            catch (e1)
            {
              if (bDebugUnzip2)
              {
                document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5064]: Cannot copy unzip tmp folder " + unzipFolderTmpFullName
                                                                                          + " to " + unzipFolderFullName + +" : error [" + JSON.stringify(e1) + "]" + "</p>";
              }
              context.setError(error);
              if (context.getError() != null)
                context.getError().setError(5064, "tizen:unzip-file2 error [5064]: Cannot copy unzip tmp folder " + unzipFolderTmpFullName + " to "
                                                                                          + unzipFolderFullName + " : error [" + JSON.stringify(e1) + "]");
              if (callback != null)
                callback(context);
      
            }*/
            //=========================================
            /*
            //----------------------------
            function errorCopy(terror)
            {
              if (bDebugUnzip2)
              {
                document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5062]: Cannot copy tmp folder " + unzipFolderTmpFullName
                                      + "to " + unzipFolderFullName + " : error [" + JSON.stringify(terror.name) +  "]</p>";
                console.log( "tizen:unzip-file2 error [5062]: Cannot copy unzip tmp folder  " + unzipFolderTmpFullName  + "to " + unzipFolderFullName
                            + " : error [" + JSON.stringify(terror.name) + "]");
              }
              context.setError(error);
              if (context.getError() != null)
                context.getError().setError(5052, "tizen:unzip-file2 error [5062]: Cannot copy tmp folder " + unzipFolderTmpFullName + "to " + unzipFolderFullName
                                                    + " : error [" + JSON.stringify(terror.name) + "]" );
              if (callback != null)
                callback(context);
            }
            //------------------------------------
            function successCopy(path)
            {
              if (bDebugUnzip2)
              {
                document.getElementById("rend.message").innerHTML += "<p>tizen:unzip-file2 ok: Successfully copy tmp folder to "
                                                                                    +  path + " to " + unzipFolderFullName  + "- Ok</p>" ;
              }
              context.setError(error);
              if (callback != null)
                callback(context);
              console.log("The directory has been copied, path to copied directory: " + path);
              // Directory copy can now be accessed.
            }*/
            /*
            //------------------------------------------------
            public unzipFile2( zipStorageName: string, zipFolderName: string, zipFileName: string,
                               unzipStorageName: string, unzipFolderName: string,
                               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
            {
              //----
              var self = this;
              var owner = this._owner;
              var bDebugUnzip2 : boolean = true;
              var tmpStorageName = "music"; //"music";
              var tmpFolderName = "/temp2";
              var tmpZipFileName = zipFileName;
              var callbackCreateTempFolder1 = function callbackCreateTempFolder1(ctx5)
              {
              var callbackDeleteTempFolder = function callbackDeleteTempFolder(ctx2)
              {
                if (ctx2.isError())
                {
                  document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 WARNING: Cannot delete temp folder"  + ctx2.getError().getErrMsg() + "</p>"
                }
              var callbackCreateTempFolder = function callbackCreateTempFolder(ctx3)
              {
                if (ctx3.isError())
                {
                  document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 WARNING: Cannot create temp folder"   + ctx3.getError().getErrMsg() + "</p>"
                }
              var callbackCopyArchive = function callbackCopyArchive()
              {
                //--------------------------------------------------------------------------
                //document.getElementById("rend.message").innerHTML += "<p>unzipFile2</p>";
                var zipFileFullName = zipStorageName + zipFolderName + zipFileName;
                var unzipFolderFullName = unzipStorageName + unzipFolderName;
                //var unzipFolderTmpFullName = "documents/" + unzipFolderName;
        
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(unzipStorageName);
                aFileInfo.setPath(unzipFolderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //-----
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(zipStorageName);
                aFileInfo2.setPath(zipFolderName);
                aFileInfo2.setName(zipFileName);
                aFileInfo2.setType("file");
                context.setObject2Result(aFileInfo2);
        
                function errorCallback(tizenError) {
                    if (bDebugUnzip2)
                    {
                      document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5052]: Cannot unzip archive to folder " + " "
                                                                         + tmpStorageName + tmpFolderName + " "
                                                                           + " : error [" + JSON.stringify(tizenError.name) +  "]</p>";
                    }
                    context.setError(error);
                    if (context.getError() != null)
                      context.getError().setError(5052, "tizen:unzip-file2 error [5052]: Cannot unzip archive to folder "
                                                    + tmpStorageName + "/" + tmpFolderName + " "
                                                    + " : error [" + JSON.stringify(tizenError.name) +  "] ");
                    if (callback != null)
                      callback(context);
                }
                //------------------------------------------------------------
                function successCallback() {
                    if (bDebugUnzip2)
                    {
                      //console.log( "tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName);
                      //context.setResult( "tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName);
                      document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 ok: Successfully unzip the file - Ok "
                                                                                            + " " + tmpStorageName + "/" + tmpFolderName +
                                                                                            + " " + dstStorageName + "/" + dstFolderName + "</p>";
                    }
                    //==============================================================================
                    var contextCopyFolder:amGeneralContext.am_general.A_Context    = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                    var errorCopyFolder:amGeneralError.am_general.A_Error          = owner._aServiceLocator._iEntityCreation.createDefaultError();
                    var srcStorageName2: string  = tmpStorageName;
                    var srcFolderName2: string   = tmpFolderName;
                    var dstStorageName2: string  = unzipStorageName;
                    var dstFolderName2: string   = unzipFolderName;
                    var callbackCopyFolder = function callbackCopyFolder(ctxCopyFolder)
                    {
                      //---------- if -- error during BuildAndDownloadMainFiles -- stop on error
                      if (ctxCopyFolder.isError())
                      {
                        if (bDebugUnzip2)
                        {
                          document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5062]: Cannot copy tmp folder "
                                                          + " " + tmpStorageName + "/" + tmpFolderName +
                                                          + " " + dstStorageName + "/" + dstFolderName + "</p>";
                        }
                        if (context != null)
                        {
                          error.setError(1004,"ERROR 1004: unzip copy folder: [" + errorCopyFolder.getErrMsg() + "]");
                          if (bDebugUnzip2)
                          {
                            document.getElementById("rend.message").innerHTML += "ERROR 1004: unzip copy folder: ["
                                                                                      + errorCopyFolder.getErrMsg() + "]";
                          }
                          context.setError(error);
                          context.setBoolResult(false);
                          return callback(context);
                        }
                        return;
                      }
                      if (bDebugUnzip2)
                      {
                        document.getElementById("rend.message").innerHTML += "<p>tizen:unzip-file2 ok: Successfully copy tmp folder to "
                                                                             + " " + tmpStorageName + "/" + tmpFolderName +
                                                                             + " " + tmpStorageName + "/" + dstFolderName + "</p>";
                      }
                      context.setError(error);
                      context.setBoolResult(false);
                      return callback(context);
                    }
                    self.copyFolder2(srcStorageName2, srcFolderName2, dstStorageName2, dstFolderName2, errorCopyFolder, contextCopyFolder, callbackCopyFolder) ;
            
                }
                //-------------------------------------------------------------
                function progressCallback(opId, val, name) {
                  if (bDebugUnzip2)
                  {
                    //document.getElementById("rend.message").innerHTML += "<p>" + "extracting operation (: " + opId + ") is in progress (" + (val * 100).toFixed(1) + "%)</p>";
                    console.log("extracting operation (: " + opId + ") is in progress (" + (val * 100).toFixed(1) + "%)");
                  }
                }
                //------------------------------
                function openError(tizenOpenError) {
                  if (bDebugUnzip2)
                  {
        
                    document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5072]: Cannot open archive "
                                             + tmpStorageName + "/" + tmpZipFileName +
                                             + "to " + tmpStorageName + "/" + tmpFolderName + " : error [" + JSON.stringify(tizenOpenError.name) +  "]</p>";
                  }
                    context.setError(error);
                    if (context.getError() != null)
                      context.getError().setError(5054, "tizen:unzip-file2 error [5072]: Cannot unzip file " + tmpStorageName + "/" + tmpZipFileName
                                                          + " to " + tmpStorageName + "/" + tmpFolderName +
                                                          + " : error [" + JSON.stringify(tizenOpenError.name) + "]" );
                    if (callback != null)
                      callback(context);
                }
                //------------------------------
                function openSuccess(archive) {
                  if (bDebugUnzip2)
                  {
                    document.getElementById("rend.message").innerHTML += "<p>succesfully open archive " + tmpStorageName + "/" + tmpZipFileName + " - OK</p>" ;
                    document.getElementById("rend.message").innerHTML += "<p>start unzip all to folder " + tmpStorageName + "/" + tmpFolderName + "...</p>" ;
                  }
                  //archive.extractAll("file:///opt/media/USBDriveA1/__unzip", successCallback, errorCallback, progressCallback);
                  //archive.extractAll("documents", successCallback, errorCallback, progressCallback);
                  archive.extractAll(tmpStorageName + tmpFolderName, successCallback, errorCallback, progressCallback); //unzipFolderFullName
                }
                try {
                  //-------------------
                  if (bDebugUnzip2)
                  {
                     document.getElementById("rend.message").innerHTML += "<p>start open archive" + tmpStorageName + "/" + tmpZipFileName + "...</p>" ;
                  }
                  //tizen.archive.open("/opt/media/USBDriveA1/__unzip/archive.zip", "r", openSuccess, openError); //"downloads/some_archive.zip", "r", openSuccess);
                  //tizen.archive.open("downloads/" + zipFileName, "r", openSuccess, openError); //"downloads/some_archive.zip", "r", openSuccess);
                  //tizen.archive.open(zipFileFullName, "r", openSuccess, openError);//"downloads/some_archive.zip", "r", openSuccess);
                  tizen.archive.open(tmpStorageName + "/" + tmpZipFileName, "r", openSuccess, openError);//"downloads/some_archive.zip", "r", openSuccess);
                
                //-------------------
                }catch (e) {
                  if (bDebugUnzip2)
                  {
                    console.log("tizen:unzip-file2 error [5059]: Cannot open archive " + tmpStorageName + "/" + tmpZipFileName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5059]: Cannot unzip file " + zipFileFullName
                                                                                              + " to " + unzipFolderFullName + +" : error [" + JSON.stringify(e) + "]" + "</p>";
                  }
                  if (context.getError() != null)
                    context.getError().setError(5054, "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + " to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                  if (callback != null)
                    callback(context);
                }
              }
              //------------------------------------
              var contextCopyFile:amGeneralContext.am_general.A_Context    = owner._aServiceLocator._iEntityCreation.createDefaultContext();
              var errorCopyFile:amGeneralError.am_general.A_Error          = owner._aServiceLocator._iEntityCreation.createDefaultError();
              var srcStorageName = zipStorageName;
              var srcFolderName  = zipFolderName;
              var srcFileName    = zipFileName;
              var dstStorageName = "";//tmpStorageName;//"";
              var dstFolderName  = tmpStorageName;//"videos";
              var dstFileName    = tmpZipFileName//zipFileName;
              self.copyFile2( srcStorageName, srcFolderName, srcFileName,  dstStorageName, dstFolderName, dstFileName,
                              errorCopyFile, contextCopyFile, callbackCopyArchive) ;
              }
              var contextCreateTempFolder:amGeneralContext.am_general.A_Context    = owner._aServiceLocator._iEntityCreation.createDefaultContext();
              var errorCreateTempFolder:amGeneralError.am_general.A_Error          = owner._aServiceLocator._iEntityCreation.createDefaultError();
              var dstStorageName3 = tmpStorageName;;//tmpStorageName;//"";
              var dstFolderName3  = tmpFolderName;//"videos";
              var dstFileName3    = tmpZipFileName//zipFileName;
              self.createFolder2( dstStorageName3, dstFolderName3,
                                 errorCreateTempFolder, contextCreateTempFolder, callbackCreateTempFolder) ;
              }
              var contextDeleteTempFolder:amGeneralContext.am_general.A_Context    = owner._aServiceLocator._iEntityCreation.createDefaultContext();
              var errorDeleteTempFolder:amGeneralError.am_general.A_Error          = owner._aServiceLocator._iEntityCreation.createDefaultError();
              var dstStorageName4 = tmpStorageName;;//tmpStorageName;//"";
              var dstFolderName4  = tmpFolderName;//"videos";
              var dstFileName4    = tmpZipFileName//zipFileName;
              self.deleteFolder2( dstStorageName4, dstFolderName4,
                                  errorDeleteTempFolder, contextDeleteTempFolder, callbackDeleteTempFolder) ;
              }
              var contextCreateTempFolder1:amGeneralContext.am_general.A_Context    = owner._aServiceLocator._iEntityCreation.createDefaultContext();
              var errorCreateTempFolder1:amGeneralError.am_general.A_Error          = owner._aServiceLocator._iEntityCreation.createDefaultError();
              var dstStorageName5 = tmpStorageName;;//tmpStorageName;//"";
              var dstFolderName5  = tmpFolderName;//"videos";
              var dstFileName5    = tmpZipFileName//zipFileName;
              self.createFolder2( dstStorageName5, dstFolderName5,
                                 errorCreateTempFolder1, contextCreateTempFolder1, callbackCreateTempFolder1) ;
              }
              */
            //================================= unzipFolderTmpFullName
            /*
            try
            {
              tizen.filesystem.copyDirectory("videos", unzipFolderFullName, true, successCopy, errorCopy);
            }
            catch (e1)
            {
              if (bDebugUnzip2)
              {
                document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5064]: Cannot copy unzip tmp folder " + unzipFolderTmpFullName
                                                                                          + " to " + unzipFolderFullName + +" : error [" + JSON.stringify(e1) + "]" + "</p>";
              }
              context.setError(error);
              if (context.getError() != null)
                context.getError().setError(5064, "tizen:unzip-file2 error [5064]: Cannot copy unzip tmp folder " + unzipFolderTmpFullName + " to "
                                                                                          + unzipFolderFullName + " : error [" + JSON.stringify(e1) + "]");
              if (callback != null)
                callback(context);
      
            }*/
            //=========================================
            /*
            //----------------------------
            function errorCopy(terror)
            {
              if (bDebugUnzip2)
              {
                document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5062]: Cannot copy tmp folder " + unzipFolderTmpFullName
                                      + "to " + unzipFolderFullName + " : error [" + JSON.stringify(terror.name) +  "]</p>";
                console.log( "tizen:unzip-file2 error [5062]: Cannot copy unzip tmp folder  " + unzipFolderTmpFullName  + "to " + unzipFolderFullName
                            + " : error [" + JSON.stringify(terror.name) + "]");
              }
              context.setError(error);
              if (context.getError() != null)
                context.getError().setError(5052, "tizen:unzip-file2 error [5062]: Cannot copy tmp folder " + unzipFolderTmpFullName + "to " + unzipFolderFullName
                                                    + " : error [" + JSON.stringify(terror.name) + "]" );
              if (callback != null)
                callback(context);
            }
            //------------------------------------
            function successCopy(path)
            {
              if (bDebugUnzip2)
              {
                document.getElementById("rend.message").innerHTML += "<p>tizen:unzip-file2 ok: Successfully copy tmp folder to "
                                                                                    +  path + " to " + unzipFolderFullName  + "- Ok</p>" ;
              }
              context.setError(error);
              if (callback != null)
                callback(context);
              console.log("The directory has been copied, path to copied directory: " + path);
              // Directory copy can now be accessed.
            }*/
            /*
            }
            //------------------------------------
            var contextCopyFile:amGeneralContext.am_general.A_Context    = owner._aServiceLocator._iEntityCreation.createDefaultContext();
            var errorCopyFile:amGeneralError.am_general.A_Error          = owner._aServiceLocator._iEntityCreation.createDefaultError();
            var srcStorageName = zipStorageName;
            var srcFolderName  = zipFolderName;
            var srcFileName    = zipFileName;
            var dstStorageName = "";
            var dstFolderName  = "downloads";
            var dstFileName    = zipFileName;
            this.copyFile2( srcStorageName, srcFolderName, srcFileName,  dstStorageName, dstFolderName, dstFileName,
                            errorCopyFile, contextCopyFile, callbackCopyArchive) ;
      
                            try
        {
          tizen.filesystem.copyDirectory(
              "documents/foo_dir", "documents/bar_dir", true, successCallback, errorCallback);
        }
        catch (error)
        {
          console.log("Copy operation cannot be performed: " + error.message);
        }
            */
            //------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.unzipFile2__last = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                //----
                var owner = this._owner;
                var callbackCopyArchive = function callbackCopyArchive() {
                    //--------------------------------------------------------------------------
                    //document.getElementById("rend.message").innerHTML += "<p>unzipFile2</p>";
                    var zipFileFullName = zipStorageName + zipFolderName + zipFileName;
                    var unzipFolderFullName = unzipStorageName + unzipFolderName;
                    var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                    aFileInfo.setStorage(unzipStorageName);
                    aFileInfo.setPath(unzipFolderName);
                    aFileInfo.setName("");
                    aFileInfo.setType("folder");
                    context.setObjectResult(aFileInfo);
                    //----- 
                    var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                    aFileInfo2.setStorage(zipStorageName);
                    aFileInfo2.setPath(zipFolderName);
                    aFileInfo2.setName(zipFileName);
                    aFileInfo2.setType("file");
                    context.setObject2Result(aFileInfo2);
                    function errorCallback(tizenError) {
                        //document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5052]: Cannot unzip archive " + zipFileFullName 
                        //                      + "to " + unzipFolderFullName + " : error [" + JSON.stringify(tizenError.name) +  "]</p>"; 
                        console.log("tizen:unzip-file2 error [5052]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName
                            + " : error [" + JSON.stringify(tizenError.name) + "]");
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(5052, "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName
                                + " : error [" + JSON.stringify(tizenError.name) + "]");
                        if (callback != null)
                            callback(context);
                    }
                    function successCallback() {
                        console.log("tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName);
                        context.setResult("tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName);
                        document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 ok: Successfully unzip the file "
                            + zipFileFullName + "to " + unzipFolderFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    }
                    function progressCallback(opId, val, name) {
                        //document.getElementById("rend.message").innerHTML += "<p>" + "extracting operation (: " + opId + ") is in progress (" + (val * 100).toFixed(1) + "%)</p>";
                        console.log("extracting operation (: " + opId + ") is in progress (" + (val * 100).toFixed(1) + "%)");
                    }
                    function openError(tizenOpenError) {
                        document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5072]: Cannot open archive " + zipFileFullName
                            + "to " + unzipFolderFullName + " : error [" + JSON.stringify(tizenOpenError.name) + "]</p>";
                        console.log("tizen:unzip-file2 error [5072]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName
                            + " : error [" + JSON.stringify(tizenOpenError.name) + "]");
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(5052, "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName
                                + " : error [" + JSON.stringify(tizenOpenError.name) + "]");
                        if (callback != null)
                            callback(context);
                    }
                    function openSuccess(archive) {
                        document.getElementById("rend.message").innerHTML += "<p>succesfully open archive. start extract all...</p>";
                        archive.extractAll("file:///opt/media/USBDriveA1/__unzip", successCallback, errorCallback, progressCallback);
                        //archive.extractAll("documents", successCallback, errorCallback, progressCallback);
                        //archive.extractAll(unzipFolderFullName, successCallback, errorCallback, progressCallback);
                    }
                    try {
                        //-------------------
                        document.getElementById("rend.message").innerHTML += "<p>start open archive: documents/" + zipFileName + "</p>";
                        //tizen.archive.open("/opt/media/USBDriveA1/__unzip/archive.zip", "r", openSuccess, openError); //"downloads/some_archive.zip", "r", openSuccess); 
                        tizen.archive.open("documents/" + zipFileName, "r", openSuccess, openError); //"downloads/some_archive.zip", "r", openSuccess); 
                        //tizen.archive.open(zipFileFullName, "r", openSuccess);//"downloads/some_archive.zip", "r", openSuccess);
                        //-------------------
                    }
                    catch (e) {
                        console.log("tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + " to " + unzipFolderFullName + +" : error [" + JSON.stringify(e) + "]" + "</p>";
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + " to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }
                };
                //------------------------------------
                var contextCopyFile = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var errorCopyFile = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var srcStorageName = zipStorageName;
                var srcFolderName = zipFolderName;
                var srcFileName = zipFileName;
                var dstStorageName = "";
                var dstFolderName = "documents";
                var dstFileName = zipFileName;
                this.copyFile2(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, errorCopyFile, contextCopyFile, callbackCopyArchive);
            };
            //------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.unzipFile2_old = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                //--------------------------------------------------------------------------
                //document.getElementById("rend.message").innerHTML += "<p>unzipFile2</p>";
                var zipFileFullName = zipStorageName + zipFolderName + zipFileName;
                var unzipFolderFullName = unzipStorageName + unzipFolderName;
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(unzipStorageName);
                aFileInfo.setPath(unzipFolderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //----- 
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(zipStorageName);
                aFileInfo2.setPath(zipFolderName);
                aFileInfo2.setName(zipFileName);
                aFileInfo2.setType("file");
                context.setObject2Result(aFileInfo2);
                //---------------------------------------
                var callback_DstSrcStorage = function (objSrcStorage, objDstStorage) {
                    function errorCallback(e) {
                        //console.log(error);
                        console.log("tizen:unzip-file2 error [5052]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5052]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5052, "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }
                    function successCallback() {
                        //console.log("done");
                        console.log("tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName);
                        context.setResult("tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName);
                        //document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 ok: Successfully unzip the file " + zipFileFullName + "to " + unzipFolderFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    }
                    function progressCallback(opId, val, name) {
                        console.log("extracting operation (: " + opId + ") is in progress (" + (val * 100).toFixed(1) + "%)");
                    }
                    function openSuccess(archive) {
                        try {
                            //---------------
                            archive.extractAll(unzipFolderFullName, successCallback, errorCallback, progressCallback); //"music"
                            //---------------
                        }
                        catch (e) {
                            console.log("tizen:unzip-file2 error [5053]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                            context.setError(error);
                            //document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5053]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                            if (context.getError() != null)
                                context.getError().setError(5053, "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                            if (callback != null)
                                callback(context);
                        }
                    }
                    try {
                        //-------------------
                        tizen.archive.open(objSrcStorage, "r", openSuccess); //"downloads/some_archive.zip" //objSrcStorage.fullPath
                        //-------------------
                    }
                    catch (e) {
                        console.log("tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("rend.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:unzip-file2 error [5054]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }
                };
                //--------------------------------------------------
                // obtain dest storage 
                //--------------------------------------------------
                var callback_SrcStorage = function (objSrcStorage) {
                    callback_DstSrcStorage(objSrcStorage, null);
                    /*
                    //--------------------------------------------
                    tizen.filesystem.resolve(
                      unzipFolderFullName,
                      //-----------
                      function(objDstStorage) {
            
                        document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objDstStorage) + "</p>";
                        callback_DstSrcStorage(objSrcStorage, objDstStorage);
                        //--------------------
                      },
                      function(e) {
                        //console.log(JSON.stringify(error));
                        console.log( "tizen:unzip-file2 error [5055]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName +  " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5055]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName +  " : error [" + JSON.stringify(e) + "]" + "</p>";
                        if (context.getError() != null)
                          context.getError().setError(5055, "tizen:unzip-file2 error [5055]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName +  " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                          callback(context);
              
                      },
                      'rw'
                    );*/
                };
                //--------------------------------------------------
                // obtain source storage 
                //--------------------------------------------------
                tizen.filesystem.resolve(zipFileFullName, 
                //----------- 
                function (objSrcStorage) {
                    //-------------------- 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objSrcStorage) + "</p>"; 
                    callback_SrcStorage(objSrcStorage);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:unzip-file2 error [5056]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:unzip-file2 error [5056]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName +  " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5012, "tizen:unzip-file2 error [5056]: Cannot unzip file " + zipFileFullName + "to " + unzipFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'r');
            };
            /*
            try{
              var openSuccess;
             tizen.filesystem.resolve("/opt/storage/usb/sda1/tests2/70.zip", (handle) => {
               if (handle) {
                 openSuccess = function (archive) {
                     document.getElementById("maindiv").innerHTML += "<h3>" + "inside openSuccess" + "</h3>";
                       tizen.filesystem.resolve("/opt/storage/usb/sda1/tests2/", (handle) => {
                           function errorCallback(error) {
                             document.getElementById("maindiv").innerHTML += "<h3>" + "error callback" + error +  "</h3>";
                           }
                           function successCallback() {
                             document.getElementById("maindiv").innerHTML += "<h3>" + "done" + "</h3>";
                           }
       
                           function progressCallback(opId, val, name) {
                           }
       
                           archive.extractAll(handle, successCallback, errorCallback, progressCallback);
                       }, (error) => {
                         document.getElementById("maindiv").innerHTML += "<h3>" + "error tizen resolve" + error +  "</h3>";
                       });
                   }
                    tizen.archive.open(handle, "r", openSuccess);
               }
               else {
                 document.getElementById("maindiv").innerHTML += "<h3>" + "handle problem" +  "</h3>";
               }
           }, (error) => {
             document.getElementById("maindiv").innerHTML += "<h3>" + "error" + error +  "</h3>";
           });
           }
            catch(e){
             document.getElementById("maindiv").innerHTML += "<h3>" + "error inside try" + e +  "</h3>";
             error.setError(0, e);
             context.setError(error);
             if (callback != null)
                   callback(context);
            }
            */
            //------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_unzipFile2 = function (zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, error, context, callback) {
                this.promise_unzipFile(zipStorageName + zipFolderName + zipFileName, unzipStorageName + unzipFolderName, error, context, callback);
            };
            //--------------------------------------
            //      fsyncFile
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_fsyncFile = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
                this.fsyncFile(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_fsyncFile2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_fsyncFile(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            //      get File Info
            //--------------------------------------
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_getFileInfo = function (fileFullName, error, context, callback) {
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
                this.getFileInfo(storageName + folderName + fileName, error, context, callback);
            };
            //--------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_getFileInfo2 = function (storageName, folderName, fileName, error, context, callback) {
                return this.promise_getFileInfo(storageName + folderName + fileName, error, context, callback);
            };
            //------------------------
            //    Move File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_moveFile = function (srcFileFullName, dstFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>moveFile2</p>";
                var srcFileFullName = srcStorageName + srcFolderName + srcFileName;
                var dstFileFullName = dstStorageName + dstFolderName + dstFileName;
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(dstStorageName);
                aFileInfo.setPath(dstFolderName);
                aFileInfo.setName(dstFileName);
                aFileInfo.setType("file");
                context.setObjectResult(aFileInfo);
                //----- 
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(srcStorageName);
                aFileInfo2.setPath(srcFolderName);
                aFileInfo2.setName(srcFileName);
                aFileInfo2.setType("file");
                context.setObject2Result(aFileInfo2);
                //---------------------------------------
                var callback_DstSrcStorage = function (objSrcStorage, objDstStorage) {
                    //------------------
                    var callback_moveSuccess = function () {
                        console.log("tizen:move-file2 ok: Successfully move the file " + srcFileFullName + "to " + dstFileFullName);
                        context.setResult("tizen:move-file2 ok: Successfully move the file " + srcFileFullName + "to " + dstFileFullName);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-file2 ok: Successfully move the file " + srcFileFullName + "to " + dstFileFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    };
                    //-------
                    var callback_moveError = function (e) {
                        console.log("tizen:move-file2 error [5054]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-file2 error [5054]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:move-file2 error [5054]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    };
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:move-file2 source file: " + objSrcStorage.fullPath + "/" + srcFileName + "</p>"; 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:move-file2 dest file: "   + objDstStorage.fullPath + "/" + dstFileName + "</p>"; 
                    objSrcStorage.moveTo(objSrcStorage.fullPath + "/" + srcFileName, objDstStorage.fullPath + "/" + dstFileName, true, callback_moveSuccess, callback_moveError);
                };
                //--------------------------------------------------
                // obtain dest storage 
                //--------------------------------------------------
                var callback_SrcStorage = function (objSrcStorage) {
                    //--------------------------------------------
                    tizen.filesystem.resolve(dstStorageName + dstFolderName, 
                    //----------- 
                    function (objDstStorage) {
                        //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objDstStorage) + "</p>"; 
                        callback_DstSrcStorage(objSrcStorage, objDstStorage);
                        //-------------------- 
                    }, function (e) {
                        //console.log(JSON.stringify(error));
                        console.log("tizen:move-file2 error [5055]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-file2 error [5055]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5055, "tizen:move-file2 error [5055]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }, 'rw');
                };
                //--------------------------------------------------
                // obtain source storage 
                //--------------------------------------------------
                tizen.filesystem.resolve(srcStorageName + srcFolderName, 
                //----------- 
                function (objSrcStorage) {
                    //-------------------- 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objSrcStorage) + "</p>"; 
                    callback_SrcStorage(objSrcStorage);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:move-file2 error [5056]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-file2 error [5056]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5012, "tizen:move-file2 error [5056]: Cannot move file " + srcStorageName + srcFolderName + srcFileName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'rw');
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_moveFile2 = function (srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName, error, context, callback) {
            };
            //------------------------
            //    Upload File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_uploadFile = function (srcFileFullName, remoteUrlName, remoteFileFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_uploadFile2 = function (srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName, error, context, callback) {
            };
            //------------------------
            //    Zip File
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_zipFile = function (fullFileName, zipFullFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
                var self = this;
                var owner = self._owner;
                var tizenStorage = 'downloads/';
                var zipTizenFolderName = "activityLogs/";
                var deleteFolderError2 = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var deleteFolderContext2 = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var createFolderError = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var createFolderContext = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var deleteTxtError = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var deleteTxtContext = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var deleteZipError = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var deleteZipContext = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var copyZipError = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var copyZipContext = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var copyZipError2 = owner._aServiceLocator._iEntityCreation.createDefaultError();
                var copyZipContext2 = owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCreateFolder = function (ctx1) {
                    var callbackDeleteTxtFile = function (ctx2) {
                        var callbackDeleteZipFile = function (ctx3) {
                            var callbackCopyLogsToTizen = function (ctx4) {
                                var callbackSuccessOpenTizenZip = function (archive) {
                                    var callbackSuccessZipTizen = function () {
                                        var callbackCopyZip = function (ctx5) {
                                            var callbackDeleteFolder2 = function (ctx6) {
                                                context.setBoolResult(true);
                                                context.setError(error);
                                                if (callback != null)
                                                    callback(context);
                                            };
                                            self.deleteFolder2(tizenStorage, zipTizenFolderName, deleteFolderError2, deleteFolderContext2, callbackDeleteFolder2);
                                        };
                                        self.copyFile2(tizenStorage, zipTizenFolderName, zipFileName, zipStorageName, zipFolderName, zipFileName, copyZipError, copyZipContext, callbackCopyZip);
                                    };
                                    var callbackFailedZipTizen = function (error) {
                                        document.getElementById("rend.message").innerHTML += "<p>" + "ZIP FAILED4" + JSON.stringify(error) + "</p>";
                                        context.setError(error);
                                        context.setBoolResult(false);
                                        if (callback != null) {
                                            callback(context);
                                        }
                                    };
                                    try {
                                        archive.add(tizenStorage + zipTizenFolderName + fileName, callbackSuccessZipTizen, callbackFailedZipTizen);
                                    }
                                    catch (error2) {
                                        context.setError(error2);
                                        context.setBoolResult(false);
                                        if (callback != null) {
                                            callback(context);
                                        }
                                    }
                                };
                                var callbackErrorOpenTizenZip = function (error) {
                                    context.setError(error);
                                    context.setBoolResult(false);
                                    if (callback != null) {
                                        callback(context);
                                    }
                                };
                                try {
                                    tizen.archive.open(tizenStorage + zipTizenFolderName + zipFileName, "rw", callbackSuccessOpenTizenZip, callbackErrorOpenTizenZip);
                                }
                                catch (e) {
                                    context.setError(e);
                                    context.setBoolResult(false);
                                    if (callback != null) {
                                        callback(context);
                                    }
                                }
                            };
                            self.copyFile2(storageName, folderName, fileName, tizenStorage, zipTizenFolderName, fileName, copyZipError2, copyZipContext2, callbackCopyLogsToTizen);
                        };
                        self.removeFile2(tizenStorage, zipTizenFolderName, zipFileName, deleteZipError, deleteZipContext, callbackDeleteZipFile);
                    };
                    self.removeFile2(tizenStorage, zipTizenFolderName, fileName, deleteTxtError, deleteTxtContext, callbackDeleteTxtFile);
                };
                self.createFolder2(tizenStorage, zipTizenFolderName, createFolderError, createFolderContext, callbackCreateFolder);
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_zipFile2 = function (storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //============================
            //  Folder functions
            //============================
            //------------------------
            //    Create Folder 2
            //------------------------
            //---------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.createFolder = function (folderFullName, error, context, callback) {
            };
            //-------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_createFolder = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.createFolder2 = function (storageName, folderName, error, context, callback) {
                //----
                var folderFullName = storageName + folderName;
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //----- 
                try {
                    tizen.filesystem.resolve(storageName, function (removableStorage) {
                        try {
                            removableStorage.createDirectory(folderName);
                            //document.getElementById("sdk.message").innerHTML += "<p>create crt-storage "   + storageName + "</p>";
                            //document.getElementById("sdk.message").innerHTML += "<p>create crt-folder "    + folderName + "</p>";    
                            console.log("tizen:create-folder2 ok: Directory " + folderFullName + " created sucessfully.");
                            context.setResult("tizen:create-folder2 ok: Directory " + folderFullName + " created sucessfully.");
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }
                        catch (e) {
                            context.setError(error);
                            console.log("tizen:create-folder2 error [5010]: Cannot create Folder " + folderFullName + " error: " + JSON.stringify(e));
                            if (context.getError() != null)
                                context.getError().setError(5010, "tizen:create-folder2 error [5010]: Cannot create Folder " + folderFullName + " error: " + JSON.stringify(e));
                            if (callback != null)
                                callback(context);
                        }
                    });
                }
                catch (e) {
                    context.setError(error);
                    console.log("tizen:create-folder2 error [5010]: Cannot create Folder " + folderFullName + " error: " + JSON.stringify(e));
                    if (context.getError() != null)
                        context.getError().setError(5010, "tizen:create-folder2 error [5010]: Cannot create Folder " + folderFullName + " error: " + JSON.stringify(e));
                    if (callback != null)
                        callback(context);
                }
            };
            //------------------------
            //    Delete Folder 2
            //------------------------
            //---------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.deleteFolder = function (folderFullName, error, context, callback) {
            };
            //-------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_deleteFolder = function (fileFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            /*
            public deleteFolder2_notused(storageName: string, folderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
            {
              var folderFullName = storageName + folderName;
              var bDebugDeleteFolder2 = false;
              var owner = this._owner;
              var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
              aFileInfo.setStorage(storageName);
              aFileInfo.setPath(folderName);
              aFileInfo.setName("");
              aFileInfo.setType("folder");
              context.setObjectResult(aFileInfo);
        
              function errorCallback(e)
              {
                if (bDebugDeleteFolder2)
                {
                  document.getElementById("rend.message").innerHTML += "<p>" +
                                                 "tizen:delete-folder2 error [5011]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e.message) + "]</p>" ;
                }
                console.log( "tizen:delete-folder2 error [5011]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e.message) + "]");
                context.setError(error);
                if (context.getError() != null)
                  context.getError().setError(5011, "tizen:delete-folder2 error [5011]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e.message) + "]");
                if (callback != null)
                  callback(context);
        
              }
        
              function successCallback(path)
              {
                if (bDebugDeleteFolder2)
                {
                  document.getElementById("rend.message").innerHTML += "<p>" +
                                                 "tizen:delete-folder2 ok: The directory has been deleted, path to the parent of deleted directory:  " + path + "</p>" ;
                }
                console.log( "tizen:delete-folder2 ok: The directory has been deleted, path to the parent of deleted directory:  " + path);
                context.setResult( "tizen:delete-folder2 ok: The directory has been deleted, path to the parent of deleted directory:  " + path);
                context.setError(error);
                if (callback != null)
                  callback(context);
              }
        
              try
              {
                tizen.filesystem.deleteDirectory(storageName + folderName, true, successCallback, errorCallback);//"documents/foo_dir", true, successCallback, errorCallback);
              }
              catch (e1)
              {
                if (bDebugDeleteFolder2)
                {
                  document.getElementById("rend.message").innerHTML += "<p>" +
                                      "tizen:delete-folder2 error [5012]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e1.message) + "]</p>" ;
                }
                 console.log( "tizen:delete-folder2 error [5012]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e1.message) + "]");
                 context.setError(error);
                 if (context.getError() != null)
                   context.getError().setError(5012, "tizen:delete-folder2 error [5012]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e1.message) + "]");
                 if (callback != null)
                   callback(context);
        
              }
            }*/
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.deleteFolder2 = function (storageName, folderName, error, context, callback) {
                var bDebugDeleteFolder2 = false;
                var folderFullName = storageName + folderName;
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(storageName);
                aFileInfo.setPath(folderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //------
                try {
                    tizen.filesystem.resolve(storageName, function (removableStorage) {
                        removableStorage.deleteDirectory(removableStorage.path + removableStorage.name + folderName, true, function () {
                            if (bDebugDeleteFolder2) {
                                document.getElementById("rend.message").innerHTML += "<p>" +
                                    "tizen:delete-folder2 ok: The directory has been deleted, path to the parent of deleted directory:  "
                                    + removableStorage.path + removableStorage.name + folderName + "</p>";
                            }
                            console.log("tizen:delete-folder2 ok: Successfully remove the folder " + folderFullName);
                            context.setResult("tizen:delete-folder2 ok: Successfully remove the folder " + folderFullName);
                            context.setError(error);
                            if (callback != null)
                                callback(context);
                        }, function (e) {
                            if (bDebugDeleteFolder2) {
                                document.getElementById("rend.message").innerHTML += "<p>" +
                                    "tizen:delete-folder2 error [5011]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e.message) + "]</p>";
                            }
                            console.log("tizen:delete-folder2 error [5011]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e.message) + "]");
                            context.setError(error);
                            if (context.getError() != null)
                                context.getError().setError(5011, "tizen:delete-folder2 error [5011]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e.message) + "]");
                            if (callback != null)
                                callback(context);
                        });
                    });
                }
                catch (e1) {
                    if (bDebugDeleteFolder2) {
                        document.getElementById("rend.message").innerHTML += "<p>" +
                            "tizen:delete-folder2 error [5012]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e1.message) + "]</p>";
                    }
                    console.log("tizen:delete-folder2 error [5012]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e1.message) + "]");
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(5011, "tizen:delete-folder2 error [5012]: Cannot delete Folder " + folderFullName + " : error [" + JSON.stringify(e1.message) + "]");
                    if (callback != null)
                        callback(context);
                }
            };
            //-------------------------------------------------------------
            //    copy folder 
            //-------------------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            IImpl_SDK_FileSystem_Tizen.prototype.promise_copyFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //------------------------------------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>copyFolder2</p>";
                var srcFolderFullName = srcStorageName + srcFolderName;
                var dstFolderFullName = dstStorageName + dstFolderName;
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(dstStorageName);
                aFileInfo.setPath(dstFolderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //----- 
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(srcStorageName);
                aFileInfo2.setPath(srcFolderName);
                aFileInfo2.setName("");
                aFileInfo2.setType("folder");
                context.setObject2Result(aFileInfo2);
                //---------------------------------------
                var callback_DstSrcStorage = function (objSrcStorage, objDstStorage) {
                    //------------------
                    var callback_copySuccess = function () {
                        console.log("tizen:copy-folder2 ok: Successfully copy the folder " + srcFolderFullName + "to " + dstFolderFullName);
                        context.setResult("tizen:copy-folder2 ok: Successfully copy the folder " + srcFolderFullName + "to " + dstFolderFullName);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-folder2 ok: Successfully copy the folder " + srcFolderFullName + "to " + dstFolderFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    };
                    //-------
                    var callback_copyError = function (e) {
                        console.log("tizen:copy-folder2 error [5054]: Cannot copy folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-file2 error [5054]: Cannot copy folder " + + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:copy-folder2 error [5054]: Cannot copy folder " + +srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    };
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:copy-folder2 source folder: " + objSrcStorage.fullPath + srcFolderName + "</p>"; 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:copy-folder2 dest folder: "   + objDstStorage.fullPath + dstFolderName + "</p>"; 
                    objSrcStorage.copyTo(objSrcStorage.fullPath + srcFolderName, objDstStorage.fullPath + dstFolderName, true, callback_copySuccess, callback_copyError);
                };
                //--------------------------------------------------
                // obtain dest storage 
                //--------------------------------------------------
                var callback_SrcStorage = function (objSrcStorage) {
                    //--------------------------------------------
                    tizen.filesystem.resolve(dstStorageName + "/", //"dstFolderName,
                    //----------- 
                    function (objDstStorage) {
                        //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objDstStorage) + "</p>"; 
                        callback_DstSrcStorage(objSrcStorage, objDstStorage);
                        //-------------------- 
                    }, function (e) {
                        //console.log(JSON.stringify(error));
                        console.log("tizen:copy-folder2 error [5055]: Cannot copy file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-folder2 error [5055]: Cannot copy file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5055, "tizen:copy-folder2 error [5055]: Cannot copy file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }, 'rw');
                };
                //--------------------------------------------------
                // obtain source storage 
                //--------------------------------------------------
                tizen.filesystem.resolve(srcStorageName + "/", //srcFolderName,
                //----------- 
                function (objSrcStorage) {
                    //-------------------- 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objSrcStorage) + "</p>"; 
                    callback_SrcStorage(objSrcStorage);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:copy-folder2 error [5056]: Cannot copy folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:copy-folder2 error [5056]: Cannot copy folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5012, "tizen:copy-folder2 error [5056]: Cannot copy folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'rw');
            };
            //---------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_copyFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //------------------------
            //    Move Folder
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_moveFolder = function (srcFolderFullName, dstFolderFullName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
                //document.getElementById("sdk.message").innerHTML += "<p>moveFolder2</p>";
                var srcFolderFullName = srcStorageName + srcFolderName;
                var dstFolderFullName = dstStorageName + dstFolderName;
                //----
                var owner = this._owner;
                var aFileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo.setStorage(dstStorageName);
                aFileInfo.setPath(dstFolderName);
                aFileInfo.setName("");
                aFileInfo.setType("folder");
                context.setObjectResult(aFileInfo);
                //----- 
                var aFileInfo2 = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                aFileInfo2.setStorage(srcStorageName);
                aFileInfo2.setPath(srcFolderName);
                aFileInfo2.setName("");
                aFileInfo2.setType("folder");
                context.setObject2Result(aFileInfo2);
                //---------------------------------------
                var callback_DstSrcStorage = function (objSrcStorage, objDstStorage) {
                    //------------------
                    var callback_moveSuccess = function () {
                        console.log("tizen:move-folder2 ok: Successfully move the folder " + srcFolderFullName + "to " + dstFolderFullName);
                        context.setResult("tizen:move-folder2 ok: Successfully move the folder " + srcFolderFullName + "to " + dstFolderFullName);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-folder2 ok: Successfully move the folder " + srcFolderFullName + "to " + dstFolderFullName + "</p>";
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    };
                    //-------
                    var callback_moveError = function (e) {
                        console.log("tizen:move-folder2 error [5054]: Cannot move folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-file2 error [5054]: Cannot move folder " + + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5054, "tizen:move-folder2 error [5054]: Cannot move folder " + +srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    };
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:move-folder2 source folder: " + objSrcStorage.fullPath + srcFolderName + "</p>"; 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + " tizen:move-folder2 dest folder: "   + objDstStorage.fullPath + dstFolderName + "</p>"; 
                    objSrcStorage.moveTo(objSrcStorage.fullPath + srcFolderName, objDstStorage.fullPath + dstFolderName, true, callback_moveSuccess, callback_moveError);
                };
                //--------------------------------------------------
                // obtain dest storage 
                //--------------------------------------------------
                var callback_SrcStorage = function (objSrcStorage) {
                    //--------------------------------------------
                    tizen.filesystem.resolve(dstStorageName + "/", //"dstFolderName,
                    //----------- 
                    function (objDstStorage) {
                        //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objDstStorage) + "</p>"; 
                        callback_DstSrcStorage(objSrcStorage, objDstStorage);
                        //-------------------- 
                    }, function (e) {
                        //console.log(JSON.stringify(error));
                        console.log("tizen:move-folder2 error [5055]: Cannot move file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        context.setError(error);
                        //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-folder2 error [5055]: Cannot move file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                        if (context.getError() != null)
                            context.getError().setError(5055, "tizen:move-folder2 error [5055]: Cannot move file " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                        if (callback != null)
                            callback(context);
                    }, 'rw');
                };
                //--------------------------------------------------
                // obtain source storage 
                //--------------------------------------------------
                tizen.filesystem.resolve(srcStorageName + "/", //srcFolderName,
                //----------- 
                function (objSrcStorage) {
                    //-------------------- 
                    //document.getElementById("sdk.message").innerHTML += "<p>" + JSON.stringify(objSrcStorage) + "</p>"; 
                    callback_SrcStorage(objSrcStorage);
                }, function (e) {
                    //console.log(JSON.stringify(error));
                    console.log("tizen:move-folder2 error [5056]: Cannot move folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    context.setError(error);
                    //document.getElementById("sdk.message").innerHTML += "<p>" + "tizen:move-folder2 error [5056]: Cannot move folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]" + "</p>"; 
                    if (context.getError() != null)
                        context.getError().setError(5012, "tizen:move-folder2 error [5056]: Cannot move folder " + srcFolderFullName + "to " + dstFolderFullName + " : error [" + JSON.stringify(e) + "]");
                    if (callback != null)
                        callback(context);
                }, 'rw');
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_moveFolder2 = function (srcStorageName, srcFolderName, dstStorageName, dstFolderName, error, context, callback) {
            };
            //------------------------
            //    Zip Folder
            //------------------------
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_zipFolder = function (fullFolderName, zipFullFolderName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //-------------------------
            IImpl_SDK_FileSystem_Tizen.prototype.promise_zipFolder2 = function (storageName, folderName, zipStorageName, zipFolderName, zipFileName, error, context, callback) {
            };
            //------------------
            //  exists folder
            //------------------
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.folderExists = function (folderFullName, error, context, callback) {
            };
            //-----------------------------------------------------------  
            IImpl_SDK_FileSystem_Tizen.prototype.promise_folderExists = function (folderFullName, error, context, callback) {
            };
            return IImpl_SDK_FileSystem_Tizen;
        }(rmTransversalServicesFileSystemJsTVJsTV.rm_transversalservices.IImpl_SDK_FileSystem_JsTV_R));
        nm_transversalservices.IImpl_SDK_FileSystem_Tizen = IImpl_SDK_FileSystem_Tizen;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_FileSystem_Tizen.js.map