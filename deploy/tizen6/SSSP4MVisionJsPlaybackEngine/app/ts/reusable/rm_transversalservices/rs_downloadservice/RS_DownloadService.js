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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../../../app/ts/reusable/rm_transversalservices/rs_downloadservice/IImpl_DownloadMain_R", "../../../../../app/ts/reusable/rm_transversalservices/rs_downloadservice/IImpl_DownloadConfig_R"], function (require, exports, rmGeneral, rmTransversalServicesILogMain, rmTransversalServicesILogConfig) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var RS_DownloadService = /** @class */ (function (_super) {
            __extends(RS_DownloadService, _super);
            //----------- constructor 
            function RS_DownloadService(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                //this._fileInfo    = null;
                //this._fileUrlInfo = null;
                _this._aTargetSDK = null;
                _this._aUtilsService = null;
                _this._iDownloadMain = new rmTransversalServicesILogMain.rm_transversalservices.IImpl_DownloadMain_R(_this);
                _this._iDownloadConfig = new rmTransversalServicesILogConfig.rm_transversalservices.IImpl_DownloadConfig_R(_this);
                _this._aLogService = aLogService;
                return _this;
            }
            //----------------
            RS_DownloadService.prototype.log = function (logMsgLevel, logMsg, error, context, callback) {
                var message;
                var callback2 = function callback2(ctx) {
                    ctx.setResult(message);
                    if (callback != null)
                        callback(ctx);
                };
                //this._aTargetSDK._iSDKFileSystem.appendTextToFile(this._fileInfo.getStorage(), this._fileInfo.getPath(), this._fileInfo.getName(), 
                //                                                message, error, context, callback2) ;
            };
            //-----------------------------------------
            RS_DownloadService.prototype.setTargetService = function (targetService) {
                this._aTargetSDK = targetService;
            };
            //-------------------------------------------------                  
            RS_DownloadService.prototype.moveFileAndShaFile = function (aSrcFile, aSrcShaFile, aDstFile, aDstShaFile, error, context, callback) {
                var self = this;
                var moveFilesWell = false;
                //---------------------------------
                var errorMoveFileToDst = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextMoveFileToDst = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackMoveFileToDst = function callbackMoveTmpFileToDst(ctx5) {
                    if (ctx5.isError()) {
                        moveFilesWell = false;
                        if (error != null)
                            error.setError(11601, "Move File: Cannot move file from to the destination [" + ctx5.getError().getErrMsg() + "]");
                        context.setBoolResult(moveFilesWell);
                        context.setError(error);
                        return callback(context);
                    }
                    //------------------------------------------------
                    var errorMoveShaFileToDst = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextMoveShaFileToDst = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackMoveShaFileToDst = function callbackMoveShaTmpFileToDst(ctx6) {
                        moveFilesWell = true;
                        if (ctx6.isError()) {
                            moveFilesWell = false;
                            if (error != null)
                                error.setError(11502, "Download File: Cannot move sha file to the destination [" + ctx6.getError().getErrMsg() + "]");
                        }
                        context.setBoolResult(moveFilesWell);
                        context.setError(error);
                        return callback(context);
                    };
                    //=======================================================
                    contextMoveShaFileToDst.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.moveFile2(aSrcShaFile.getStorage(), aSrcShaFile.getPath(), aSrcShaFile.getName(), aDstShaFile.getStorage(), aDstShaFile.getPath(), aDstShaFile.getName(), errorMoveShaFileToDst, contextMoveShaFileToDst, callbackMoveShaFileToDst);
                    //self._aSDKService._iSDKFileSystem.copyFile2( aSrcShaFile.getStorage(), aSrcShaFile.getPath(), aSrcShaFile.getName(), 
                    //                                            aDstShaFile.getStorage(), aDstShaFile.getPath(), aDstShaFile.getName(), 
                    //                                            errorMoveShaFileToDst, contextMoveShaFileToDst, callbackMoveShaFileToDst);        
                };
                //=======================================================
                contextMoveFileToDst.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.moveFile2(aSrcFile.getStorage(), aSrcFile.getPath(), aSrcFile.getName(), aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), errorMoveFileToDst, contextMoveFileToDst, callbackMoveFileToDst);
                //self._aSDKService._iSDKFileSystem.copyFile2(  aSrcFile.getStorage(), aSrcFile.getPath(), aSrcFile.getName(), 
                //                                              aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                //                                              errorMoveFileToDst, contextMoveFileToDst, callbackMoveFileToDst);        
            };
            //-------------------------------------------------                  
            RS_DownloadService.prototype.checkFileIfAlreadyDownloaded = function (aTransferFile, error, context, callback) {
                var self = this;
                var aSrcFile = aTransferFile.getSrcFileInfo();
                var aTmpFile = aTransferFile.getTmpFileInfo();
                var aShaSrcFile = aTransferFile.getSrcShaFileInfo();
                var aShaTmpFile = aTransferFile.getTmpShaFileInfo();
                var aShaCrtDstFile = aTransferFile.getDstShaFileInfo();
                var aComputedShaTmpFile = aTransferFile.getComputedShaFileInfo();
                //==
                var errorDownloadFileSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextDownloadFileSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackDownloadFileSha = function callbackDownloadFileSha(ctx2) {
                    var errorReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4) {
                        var shaDownloadedFile = ctx4.getResult();
                        var errorReadShaCrtDstFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextReadShaCrtDstFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var callbackReadShaCrtDstFile = function callbackReadShaCrtDstFile(ctx5) {
                            var hasSameShaFile = false;
                            if (context != null) {
                                if (ctx5.isError()) {
                                    hasSameShaFile = false;
                                    context.setBoolResult(hasSameShaFile);
                                }
                                else {
                                    var shaCrtFile = ctx5.getResult();
                                    hasSameShaFile = false;
                                    if (aTransferFile.isTheSameShaValue(shaCrtFile, shaDownloadedFile))
                                        hasSameShaFile = true;
                                    context.setBoolResult(hasSameShaFile);
                                }
                                context.setError(error);
                                //context.setBoolResult(true);
                                return callback(context);
                            }
                        };
                        //==================================================
                        //document.getElementById("rend.message").innerHTML += "<p>read current sha file"</p>";
                        contextReadShaCrtDstFile.setRemoteCallback(true);
                        self._aSDKService._iSDKFileSystem.readTextFile2(aShaCrtDstFile.getStorage(), aShaCrtDstFile.getPath(), aShaCrtDstFile.getName(), errorReadShaCrtDstFile, contextReadShaCrtDstFile, callbackReadShaCrtDstFile);
                    };
                    //==================================================
                    //document.getElementById("rend.message").innerHTML += "<p>read tmp sha file"</p>";
                    contextReadTmpShaFile.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.readTextFile2(aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);
                };
                //==================================================
                //document.getElementById("rend.message").innerHTML += "<p>start download sha file as temp sha file"</p>";
                contextDownloadFileSha.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.downloadFile2(aShaSrcFile.getFullName(), aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), errorDownloadFileSha, contextDownloadFileSha, callbackDownloadFileSha);
            };
            //-------------------------------------------------                  
            RS_DownloadService.prototype.createTmpAndDstFoldersIfNeeded = function (aTransferFile, error, context, callback) {
                var self = this;
                //var aSrcFile          = aTransferFile.getSrcFileInfo();
                var aTmpFile = aTransferFile.getTmpFileInfo();
                var aDstFile = aTransferFile.getDstFileInfo();
                //var aShaSrcFile       = aTransferFile.getSrcShaFileInfo();
                var aShaTmpFile = aTransferFile.getTmpShaFileInfo();
                var aShaDstFile = aTransferFile.getDstShaFileInfo();
                //-----------------------
                var errorCreateTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreateTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCreateTmpFolder = function callbackCreateTmpFolder() {
                    //-----------------------
                    var errorCreateDstFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextCreateDstFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackCreateDstFolder = function callbackCreateDstFolder() {
                        //======================= exit sha folders are the same with src/tmp/dst folders
                        if (context != null) {
                            return callback(context);
                        }
                    };
                    //==============================================
                    contextCreateDstFolder.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.createFolder2(aDstFile.getStorage(), aDstFile.getPath(), errorCreateDstFolder, contextCreateDstFolder, callbackCreateDstFolder);
                };
                //==============================================
                contextCreateTmpFolder.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.createFolder2(aTmpFile.getStorage(), aTmpFile.getPath(), errorCreateTmpFolder, contextCreateTmpFolder, callbackCreateTmpFolder);
            };
            //-------------------------------------------------                  
            RS_DownloadService.prototype.downloadFile_withNoShaCheck = function (aTransferFile, error, context, callback) {
                var self = this;
                var aSrcFile = aTransferFile.getSrcFileInfo();
                var aTmpFile = aTransferFile.getTmpFileInfo();
                var aDstFile = aTransferFile.getDstFileInfo();
                var aShaSrcFile = aTransferFile.getSrcShaFileInfo();
                var aShaTmpFile = aTransferFile.getTmpShaFileInfo();
                var aShaDstFile = aTransferFile.getDstShaFileInfo();
                //var aShaCrtDstFile      = aTransferFile.getDstShaFileInfo();
                var aComputedShaTmpFile = aTransferFile.getComputedShaFileInfo();
                var bCopyFile = aTransferFile.getCopyFile();
                var bCopyFileIfExists = aTransferFile.getCopyFileIfExists();
                var errorCreateTmpAndDstFolders = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreateTmpAndDstFolders = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCreateTmpAndDstFolders = function callbackCreateTmpAndDstFolders(ctx1) {
                    var errorFileExists = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextFileExists = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var errorDownloadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextDownloadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackDownloadFile = function callbackDownloadFile(ctx1) {
                        //==
                        var errorDownloadFileSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextDownloadFileSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        if (ctx1.isError()) {
                            //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
                            if (error != null)
                                error.setError(11506, "Download File: Cannot download The src file from the url ["
                                    + ctx1.getError().getErrMsg() + "]");
                            if (context != null) {
                                context.setError(error);
                                //context.setBoolResult(true);
                                return callback(context);
                            }
                            return;
                        }
                        var callbackDownloadFileSha = function callbackDownloadFileSha(ctx2) {
                            if (ctx2.isError()) {
                                //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
                                if (error != null)
                                    error.setError(11507, "Download File: Cannot download the src sha file from the server1 [" + ctx2.getError().getErrMsg() + "]");
                                if (context != null) {
                                    context.setError(error);
                                    //context.setBoolResult(true);
                                    return callback(context);
                                }
                                return;
                            }
                            //------------------------------------------
                            var errorComputeSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextComputeSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            var shaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);
                            shaProperties.setSrcFileInfo(aTmpFile);
                            shaProperties.setShaFileInfo(aComputedShaTmpFile);
                            var callbackComputeSha = function callbackComputeSha(ctx3) {
                                var shaComputeFile = ctx3.getResult();
                                var errorReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4) {
                                    var shaDownloadedFile = ctx4.getResult();
                                    var downloadFileWell = true;
                                    if (context != null) {
                                        if (ctx4.isError()) {
                                            downloadFileWell = false;
                                            if (error != null)
                                                error.setError(11502, "Download Playlist - Download File: Cannot read sha file from tmp folder [" + ctx4.getError().getErrMsg() + "]");
                                        }
                                        else {
                                            //downloadFileWell = false;
                                            //if (aTransferFile.isTheSameShaValue(shaComputeFile, shaDownloadedFile))
                                            //downloadFileWell = true;
                                            downloadFileWell = true;
                                            if (!downloadFileWell) {
                                                if (error != null)
                                                    error.setError(11505, "Download Playlist - Download File: The src sha file is not the same with the computed shat file ["
                                                        + ctx4.getError().getErrMsg() + "]");
                                            }
                                        }
                                        if (!downloadFileWell) {
                                            context.setBoolResult(downloadFileWell);
                                            context.setError(error);
                                            return callback(context);
                                        }
                                        //---------------------------------
                                        var errorMoveTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultError();
                                        var contextMoveTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                        var callbackMoveTmpFileToDst = function callbackMoveTmpFileToDst(ctx5) {
                                            if (ctx5.isError()) {
                                                downloadFileWell = false;
                                                if (error != null)
                                                    error.setError(11501, "Download Playlist - Download File: Cannot move file from tmp folder to the destination ["
                                                        + ctx5.getError().getErrMsg() + "]");
                                                context.setBoolResult(downloadFileWell);
                                                context.setError(error);
                                                return callback(context);
                                            }
                                            //------------------------------------------------
                                            var errorMoveShaTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultError();
                                            var contextMoveShaTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                            var callbackMoveShaTmpFileToDst = function callbackMoveShaTmpFileToDst(ctx6) {
                                                downloadFileWell = true;
                                                if (ctx6.isError()) {
                                                    downloadFileWell = false;
                                                    if (error != null)
                                                        error.setError(11502, "Download Playlist - Download File: Cannot move sha file from tmp folder to the destination ["
                                                            + ctx6.getError().getErrMsg() + "]");
                                                }
                                                context.setBoolResult(downloadFileWell);
                                                context.setError(error);
                                                return callback(context);
                                            };
                                            //=======================================================
                                            contextMoveShaTmpFileToDst.setRemoteCallback(true);
                                            callbackMoveShaTmpFileToDst(contextMoveShaTmpFileToDst);
                                            //self._aSDKService._iSDKFileSystem.moveFile2( aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                            //                                            aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), 
                                            //                                           errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);     
                                            //self._aSDKService._iSDKFileSystem.copyFile2( aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                            //                                             aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), 
                                            //                                             errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);        
                                        };
                                        //=======================================================
                                        contextMoveTmpFileToDst.setRemoteCallback(true);
                                        self._aSDKService._iSDKFileSystem.moveFile2(aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);
                                        //self._aSDKService._iSDKFileSystem.copyFile2(  aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                        //                                              aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                                        //                                             errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);        
                                    }
                                };
                                //==================================================
                                //document.getElementById("rend.message").innerHTML += "<p>read downloaded sha"</p>";
                                contextReadTmpShaFile.setRemoteCallback(true);
                                callbackReadTmpShaFile(contextReadTmpShaFile);
                                //self._aSDKService._iSDKFileSystem.readTextFile2(
                                //                                             aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                //                                             errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);    
                            };
                            //==================================================
                            //document.getElementById("rend.message").innerHTML += "<p>compute sha and save sha file2"</p>";
                            contextComputeSha.setRemoteCallback(true);
                            callbackComputeSha(contextComputeSha);
                            //self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties,
                            //                                                  errorComputeSha, contextComputeSha, callbackComputeSha);    
                        };
                        //==================================================
                        //document.getElementById("rend.message").innerHTML += "<p>start download sha"</p>";
                        contextDownloadFileSha.setRemoteCallback(true);
                        callbackDownloadFileSha(contextDownloadFileSha);
                        //self._aSDKService._iSDKFileSystem.downloadFile2( aShaSrcFile.getFullName(), 
                        //                                              aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                        //                                            errorDownloadFileSha, contextDownloadFileSha, callbackDownloadFileSha);    
                    };
                    //==================================================
                    //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
                    contextDownloadFile.setRemoteCallback(true);
                    if (!bCopyFile) {
                        self._aSDKService._iSDKFileSystem.downloadFile2(aSrcFile.getFullName(), aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), errorDownloadFile, contextDownloadFile, callbackDownloadFile);
                    }
                    else {
                        if (bCopyFileIfExists) {
                            self._aSDKService._iSDKFileSystem.copyFile2(aSrcFile.getStorage(), aSrcFile.getPath(), aSrcFile.getName(), aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), errorDownloadFile, contextDownloadFile, callbackDownloadFile);
                        }
                        else {
                            //==================================================
                            contextFileExists.setRemoteCallback(true);
                            var callbackFileExists = function callbackFileExists(ctxFE) {
                                //==
                                var bExistsFile = false;
                                if (ctxFE != null)
                                    if (!ctxFE.isError())
                                        bExistsFile = ctxFE.getBoolResult();
                                // ---    
                                if (bExistsFile) {
                                    var downloadFileWell2 = true;
                                    context.setBoolResult(downloadFileWell2);
                                    context.setError(error);
                                    return callback(context);
                                }
                                //===========================
                                self._aSDKService._iSDKFileSystem.copyFile2(aSrcFile.getStorage(), aSrcFile.getPath(), aSrcFile.getName(), aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), errorDownloadFile, contextDownloadFile, callbackDownloadFile);
                            };
                            //=============================
                            self._aSDKService._iSDKFileSystem.fileExists2(aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), errorFileExists, contextFileExists, callbackFileExists);
                        }
                    }
                };
                //==================================================
                //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
                contextCreateTmpAndDstFolders.setRemoteCallback(true);
                self.createTmpAndDstFoldersIfNeeded(aTransferFile, errorCreateTmpAndDstFolders, contextCreateTmpAndDstFolders, callbackCreateTmpAndDstFolders);
            };
            //-------------------------------------------------    
            // ma3              
            RS_DownloadService.prototype.downloadFile_noComputeSha = function (aTransferFile, error, context, callback) {
                var self = this;
                var aSrcFile = aTransferFile.getSrcFileInfo();
                var aTmpFile = aTransferFile.getTmpFileInfo();
                var aDstFile = aTransferFile.getDstFileInfo();
                var aShaSrcFile = aTransferFile.getSrcShaFileInfo();
                var aShaTmpFile = aTransferFile.getTmpShaFileInfo();
                var aShaDstFile = aTransferFile.getDstShaFileInfo();
                //var aShaCrtDstFile      = aTransferFile.getDstShaFileInfo();
                var aComputedShaTmpFile = aTransferFile.getComputedShaFileInfo();
                var bCopyFile = aTransferFile.getCopyFile();
                var bCopyFileIfExists = aTransferFile.getCopyFileIfExists();
                var bHasSameShaFile = false;
                var downloadFileWell = false;
                var errorCreateTmpAndDstFolders = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreateTmpAndDstFolders = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCreateTmpAndDstFolders = function callbackCreateTmpAndDstFolders(ctx1) {
                    var errorDownloadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextDownloadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackDownloadFile = function callbackDownloadFile(ctx1) {
                        //==
                        var errorDownloadFileSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextDownloadFileSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        if (ctx1.isError()) {
                            //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
                            if (error != null)
                                error.setError(11506, "Download File: Cannot download The src file from the url ["
                                    + ctx1.getError().getErrMsg() + "]");
                            if (context != null) {
                                context.setError(error);
                                //context.setBoolResult(true);
                                return callback(context);
                            }
                            return;
                        }
                        var callbackDownloadFileSha = function callbackDownloadFileSha(ctx2) {
                            if (ctx2.isError()) {
                                //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
                                if (error != null)
                                    error.setError(11507, "Download File: Cannot download the src sha file from the server1 [" + ctx2.getError().getErrMsg() + "]");
                                if (context != null) {
                                    context.setError(error);
                                    //context.setBoolResult(true);
                                    return callback(context);
                                }
                                return;
                            }
                            //------------------------------------------
                            //var errorComputeSha:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
                            //var contextComputeSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                            var errorReadDstShaFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextReadDstShaFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            // -- 
                            var shaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);
                            shaProperties.setSrcFileInfo(aTmpFile);
                            shaProperties.setShaFileInfo(aComputedShaTmpFile);
                            var callbackReadDstShaFile = function callbackReadDstShaFile(ctx3) {
                                /*
                                var shaDstFile = "";
                                if (! ctx3.isError())
                                {
                                  shaDstFile = ctx3.getResult();
                                }*/
                                // -----
                                var errorReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4) {
                                    var shaDownloadedFile = ctx4.getResult();
                                    var downloadFileWell = true;
                                    if (context != null) {
                                        /*
                                        if (ctx4.isError())
                                        {
                                          downloadFileWell = false;
                                          if (error != null)
                                            error.setError(11502,"Download Playlist - Download File: Cannot read sha file from tmp folder [" + ctx4.getError().getErrMsg() + "]");
                      
                                        }else{
                                          downloadFileWell = true;
                                          bHasSameShaFile = false;
                                          if (aTransferFile.isTheSameShaValue(shaDstFile, shaDownloadedFile))
                                            bHasSameShaFile = true;
                                        }
                                        //------------------ cannot download file well
                                        if (! downloadFileWell)
                                        {
                                          context.setBoolResult(downloadFileWell)
                                          context.setError(error);
                                          return callback(context);
                                        }
                                        //---------------------------------
                                        if (bHasSameShaFile)
                                        {
                                          context.setBoolResult(true)
                                          context.setError(error);
                                          return callback(context);
                                        }*/
                                        //---------------------------------
                                        var errorMoveTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultError();
                                        var contextMoveTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                        var callbackMoveTmpFileToDst = function callbackMoveTmpFileToDst(ctx5) {
                                            if (ctx5.isError()) {
                                                downloadFileWell = false;
                                                if (error != null)
                                                    error.setError(11501, "Download Playlist - Download File: Cannot move file from tmp folder to the destination ["
                                                        + ctx5.getError().getErrMsg() + "]");
                                                context.setBoolResult(downloadFileWell);
                                                context.setError(error);
                                                return callback(context);
                                            }
                                            //------------------------------------------------
                                            var errorMoveShaTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultError();
                                            var contextMoveShaTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                            var callbackMoveShaTmpFileToDst = function callbackMoveShaTmpFileToDst(ctx6) {
                                                downloadFileWell = true;
                                                if (ctx6.isError()) {
                                                    downloadFileWell = false;
                                                    if (error != null)
                                                        error.setError(11502, "Download Playlist - Download File: Cannot move sha file from tmp folder to the destination ["
                                                            + ctx6.getError().getErrMsg() + "]");
                                                }
                                                context.setBoolResult(downloadFileWell);
                                                context.setError(error);
                                                return callback(context);
                                            };
                                            //=======================================================
                                            contextMoveShaTmpFileToDst.setRemoteCallback(true);
                                            self._aSDKService._iSDKFileSystem.moveFile2(aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);
                                            //self._aSDKService._iSDKFileSystem.copyFile2( aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                            //                                             aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), 
                                            //                                             errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);        
                                        };
                                        //=======================================================
                                        contextMoveTmpFileToDst.setRemoteCallback(true);
                                        self._aSDKService._iSDKFileSystem.moveFile2(aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);
                                        //self._aSDKService._iSDKFileSystem.copyFile2(  aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                        //                                              aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                                        //                                             errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);        
                                    }
                                };
                                //==================================================
                                //document.getElementById("rend.message").innerHTML += "<p>read downloaded sha"</p>";
                                contextReadTmpShaFile.setRemoteCallback(true);
                                /*
                                self._aSDKService._iSDKFileSystem.readTextFile2(
                                                                              aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(),
                                                                              errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);
                                */
                                contextReadTmpShaFile.setError(errorReadTmpShaFile);
                                callbackReadTmpShaFile(contextReadTmpShaFile);
                            };
                            //==================================================
                            //document.getElementById("rend.message").innerHTML += "<p>compute sha and save sha file2"</p>";
                            contextReadDstShaFile.setRemoteCallback(true);
                            //self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties,
                            //                                                  errorComputeSha, contextComputeSha, callbackComputeSha);  
                            /*
                            self._aSDKService._iSDKFileSystem.readTextFile2(
                                                aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(),
                                                errorReadDstShaFile, contextReadDstShaFile, callbackReadDstShaFile);
                            */
                            contextReadDstShaFile.setError(errorReadDstShaFile);
                            callbackReadDstShaFile(contextReadDstShaFile);
                        };
                        //==================================================
                        //document.getElementById("rend.message").innerHTML += "<p>start download sha"</p>";
                        contextDownloadFileSha.setRemoteCallback(true);
                        if (!bCopyFile) {
                            if (!bCopyFileIfExists) {
                                self._aSDKService._iSDKFileSystem.downloadFile2(aShaSrcFile.getFullName(), aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), errorDownloadFileSha, contextDownloadFileSha, callbackDownloadFileSha);
                            }
                            else {
                                self._aSDKService._iSDKFileSystem.downloadFile2(aShaSrcFile.getFullName(), aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), errorDownloadFileSha, contextDownloadFileSha, callbackDownloadFileSha);
                            }
                        }
                        else {
                            contextDownloadFileSha.setError(errorDownloadFileSha);
                            callbackDownloadFileSha(contextDownloadFileSha);
                        }
                    };
                    //==================================================
                    //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
                    contextDownloadFile.setRemoteCallback(true);
                    if (!bCopyFile) {
                        self._aSDKService._iSDKFileSystem.downloadFile2(aSrcFile.getFullName(), aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), errorDownloadFile, contextDownloadFile, callbackDownloadFile);
                    }
                    else {
                        self._aSDKService._iSDKFileSystem.copyFile2(aSrcFile.getStorage(), aSrcFile.getPath(), aSrcFile.getName(), aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), errorDownloadFile, contextDownloadFile, callbackDownloadFile);
                    }
                };
                //==================================================
                //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
                contextCreateTmpAndDstFolders.setRemoteCallback(true);
                self.createTmpAndDstFoldersIfNeeded(aTransferFile, errorCreateTmpAndDstFolders, contextCreateTmpAndDstFolders, callbackCreateTmpAndDstFolders);
            };
            //-------------------------------------------------                  
            RS_DownloadService.prototype.downloadFile = function (aTransferFile, error, context, callback) {
                var self = this;
                var aSrcFile = aTransferFile.getSrcFileInfo();
                var aTmpFile = aTransferFile.getTmpFileInfo();
                var aDstFile = aTransferFile.getDstFileInfo();
                var aShaSrcFile = aTransferFile.getSrcShaFileInfo();
                var aShaTmpFile = aTransferFile.getTmpShaFileInfo();
                var aShaDstFile = aTransferFile.getDstShaFileInfo();
                //var aShaCrtDstFile      = aTransferFile.getDstShaFileInfo();
                var aComputedShaTmpFile = aTransferFile.getComputedShaFileInfo();
                var errorCreateTmpAndDstFolders = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreateTmpAndDstFolders = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCreateTmpAndDstFolders = function callbackCreateTmpAndDstFolders(ctx1) {
                    var errorDownloadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextDownloadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackDownloadFile = function callbackDownloadFile(ctx1) {
                        //==
                        var errorDownloadFileSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextDownloadFileSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        if (ctx1.isError()) {
                            //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
                            if (error != null)
                                error.setError(11506, "Download File: Cannot download The src file from the url ["
                                    + ctx1.getError().getErrMsg() + "]");
                            if (context != null) {
                                context.setError(error);
                                //context.setBoolResult(true);
                                return callback(context);
                            }
                            return;
                        }
                        var callbackDownloadFileSha = function callbackDownloadFileSha(ctx2) {
                            if (ctx2.isError()) {
                                //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
                                if (error != null)
                                    error.setError(11507, "Download File: Cannot download the src sha file from the server1 [" + ctx2.getError().getErrMsg() + "]");
                                if (context != null) {
                                    context.setError(error);
                                    //context.setBoolResult(true);
                                    return callback(context);
                                }
                                return;
                            }
                            //------------------------------------------
                            var errorComputeSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextComputeSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            var shaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);
                            shaProperties.setSrcFileInfo(aTmpFile);
                            shaProperties.setShaFileInfo(aComputedShaTmpFile);
                            var callbackComputeSha = function callbackComputeSha(ctx3) {
                                var shaComputeFile = ctx3.getResult();
                                var errorReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4) {
                                    var shaDownloadedFile = ctx4.getResult();
                                    var downloadFileWell = true;
                                    if (context != null) {
                                        if (ctx4.isError()) {
                                            downloadFileWell = false;
                                            if (error != null)
                                                error.setError(11502, "Download Playlist - Download File: Cannot read sha file from tmp folder [" + ctx4.getError().getErrMsg() + "]");
                                        }
                                        else {
                                            downloadFileWell = false;
                                            if (aTransferFile.isTheSameShaValue(shaComputeFile, shaDownloadedFile))
                                                downloadFileWell = true;
                                            if (!downloadFileWell) {
                                                if (error != null)
                                                    error.setError(11505, "Download Playlist - Download File: The src sha file is not the same with the computed shat file ["
                                                        + ctx4.getError().getErrMsg() + "]");
                                            }
                                        }
                                        if (!downloadFileWell) {
                                            context.setBoolResult(downloadFileWell);
                                            context.setError(error);
                                            return callback(context);
                                        }
                                        //---------------------------------
                                        var errorMoveTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultError();
                                        var contextMoveTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                        var callbackMoveTmpFileToDst = function callbackMoveTmpFileToDst(ctx5) {
                                            if (ctx5.isError()) {
                                                downloadFileWell = false;
                                                if (error != null)
                                                    error.setError(11501, "Download Playlist - Download File: Cannot move file from tmp folder to the destination ["
                                                        + ctx5.getError().getErrMsg() + "]");
                                                context.setBoolResult(downloadFileWell);
                                                context.setError(error);
                                                return callback(context);
                                            }
                                            //------------------------------------------------
                                            var errorMoveShaTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultError();
                                            var contextMoveShaTmpFileToDst = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                            var callbackMoveShaTmpFileToDst = function callbackMoveShaTmpFileToDst(ctx6) {
                                                downloadFileWell = true;
                                                if (ctx6.isError()) {
                                                    downloadFileWell = false;
                                                    if (error != null)
                                                        error.setError(11502, "Download Playlist - Download File: Cannot move sha file from tmp folder to the destination ["
                                                            + ctx6.getError().getErrMsg() + "]");
                                                }
                                                context.setBoolResult(downloadFileWell);
                                                context.setError(error);
                                                return callback(context);
                                            };
                                            //=======================================================
                                            contextMoveShaTmpFileToDst.setRemoteCallback(true);
                                            self._aSDKService._iSDKFileSystem.moveFile2(aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);
                                            //self._aSDKService._iSDKFileSystem.copyFile2( aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                            //                                             aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), 
                                            //                                             errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);        
                                        };
                                        //=======================================================
                                        contextMoveTmpFileToDst.setRemoteCallback(true);
                                        self._aSDKService._iSDKFileSystem.moveFile2(aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);
                                        //self._aSDKService._iSDKFileSystem.copyFile2(  aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                        //                                              aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                                        //                                             errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);        
                                    }
                                };
                                //==================================================
                                //document.getElementById("rend.message").innerHTML += "<p>read downloaded sha"</p>";
                                contextReadTmpShaFile.setRemoteCallback(true);
                                self._aSDKService._iSDKFileSystem.readTextFile2(aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);
                            };
                            //==================================================
                            //document.getElementById("rend.message").innerHTML += "<p>compute sha and save sha file2"</p>";
                            contextComputeSha.setRemoteCallback(true);
                            self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, errorComputeSha, contextComputeSha, callbackComputeSha);
                        };
                        //==================================================
                        //document.getElementById("rend.message").innerHTML += "<p>start download sha"</p>";
                        contextDownloadFileSha.setRemoteCallback(true);
                        self._aSDKService._iSDKFileSystem.downloadFile2(aShaSrcFile.getFullName(), aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), errorDownloadFileSha, contextDownloadFileSha, callbackDownloadFileSha);
                    };
                    //==================================================
                    //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
                    contextDownloadFile.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.downloadFile2(aSrcFile.getFullName(), aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), errorDownloadFile, contextDownloadFile, callbackDownloadFile);
                };
                //==================================================
                //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
                contextCreateTmpAndDstFolders.setRemoteCallback(true);
                self.createTmpAndDstFoldersIfNeeded(aTransferFile, errorCreateTmpAndDstFolders, contextCreateTmpAndDstFolders, callbackCreateTmpAndDstFolders);
            };
            //-------------------------------------------------                  
            RS_DownloadService.prototype.downloadFileIfNotAlreadyDownloaded_withNoShaCkeck = function (transferMediaFile, error, context, callback) {
                var self = this;
                if (transferMediaFile.getDoDownload() == false) {
                    context.setBoolResult(true); //downloadFileWell);
                    context.setError(error);
                    //document.getElementById("rend.message").innerHTML += "<p>skip download file + "</p>";  
                    if (callback != null)
                        callback(context);
                    return;
                }
                //----------------------------
                var strFileName = transferMediaFile.getDstFileInfo().getName();
                if (strFileName.endsWith(".sha")) {
                    context.setBoolResult(true); //downloadFileWell);
                    context.setError(error);
                    //document.getElementById("rend.message").innerHTML += "<p>skip download file + "</p>";  
                    if (callback != null)
                        callback(context);
                    return;
                }
                var errorDownloadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextDownloadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackDownloadFile = function callbackDownloadFile(ctx2) {
                    var downloadFileWell = ctx2.getBoolResult();
                    if (!downloadFileWell) //ctx2.isError())
                     {
                        if (error != null)
                            error.setError(ctx2.getError().getErrId(), ctx2.getError().getErrMsg());
                    }
                    context.setBoolResult(downloadFileWell);
                    context.setError(error);
                    //document.getElementById("rend.message").innerHTML += "<p>download file + "</p>";  
                    if (callback != null)
                        callback(context);
                    return;
                };
                //==============================================
                self.downloadFile_withNoShaCheck(transferMediaFile, errorDownloadFile, contextDownloadFile, callbackDownloadFile);
            };
            //-------------------------------------------------                  
            RS_DownloadService.prototype.downloadFileIfNotAlreadyDownloaded = function (transferMediaFile, error, context, callback) {
                var self = this;
                if (transferMediaFile.getDoDownload() == false) {
                    context.setBoolResult(true); //downloadFileWell);
                    context.setError(error);
                    //document.getElementById("rend.message").innerHTML += "<p>skip download file + "</p>";  
                    if (callback != null)
                        callback(context);
                    return;
                }
                //----------------------------
                var strFileName = transferMediaFile.getDstFileInfo().getName();
                if (strFileName.endsWith(".sha")) {
                    context.setBoolResult(true); //downloadFileWell);
                    context.setError(error);
                    //document.getElementById("rend.message").innerHTML += "<p>skip download file + "</p>";  
                    if (callback != null)
                        callback(context);
                    return;
                }
                //--------------------
                var errorCheckFileIfAlreadyDownloaded = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCheckFileIfAlreadyDownloaded = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCheckFileIfAlreadyDownloaded = function callbackDownloadFile(ctx1) {
                    //-------------------------------------------
                    var fileAlreadyDownloaded = ctx1.getBoolResult();
                    if (fileAlreadyDownloaded) //ctx2.isError())
                     {
                        var fileDownloadedWell = true;
                        context.setError(error);
                        context.setBoolResult(fileDownloadedWell);
                        //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    var errorDownloadFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextDownloadFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackDownloadFile = function callbackDownloadFile(ctx2) {
                        var downloadFileWell = ctx2.getBoolResult();
                        if (!downloadFileWell) //ctx2.isError())
                         {
                            if (error != null)
                                error.setError(ctx2.getError().getErrId(), ctx2.getError().getErrMsg());
                        }
                        context.setBoolResult(downloadFileWell);
                        context.setError(error);
                        //document.getElementById("rend.message").innerHTML += "<p>download file + "</p>";  
                        if (callback != null)
                            callback(context);
                        return;
                    };
                    //==============================================
                    // ma3
                    if (transferMediaFile.getComputeSha() == true)
                        self.downloadFile(transferMediaFile, errorDownloadFile, contextDownloadFile, callbackDownloadFile);
                    else
                        self.downloadFile_noComputeSha(transferMediaFile, errorDownloadFile, contextDownloadFile, callbackDownloadFile);
                };
                //==============================================
                self.checkFileIfAlreadyDownloaded(transferMediaFile, errorCheckFileIfAlreadyDownloaded, contextCheckFileIfAlreadyDownloaded, callbackCheckFileIfAlreadyDownloaded);
            };
            //-------------------------------------------------                  
            RS_DownloadService.prototype.downloadFiles_fromMap = function (transferMediaFiles, bIgnoreErrors, error, context, callback) {
                var transferMediaFilesArray = Array.from(transferMediaFiles.values());
                return this.downloadFiles_fromArray(transferMediaFilesArray, bIgnoreErrors, error, context, callback);
            };
            //-------------------------------------------------                  
            RS_DownloadService.prototype.downloadFiles_fromArray = function (transferMediaFiles, bIgnoreErrors, error, context, callback) {
                var self = this;
                var nbFiles = transferMediaFiles.length;
                var startFileIdx = 0;
                //---
                var callbackDownloadOneFile = function callbackDownloadOneFile(crtFileIdx, ctx1) {
                    //-------- succesfully download all the files
                    if (crtFileIdx + 1 > nbFiles) {
                        //--------------------------------- 
                        if (self._interruptCallback != null) {
                            return self._interruptCallback();
                        }
                        context.setBoolResult(true);
                        console.log("Successfully downloaded all xml files");
                        context.setError(error);
                        //document.getElementById("renderer.message").innerHTML += "<p>success: " + crtFileIdx  + "</p>";
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    //---------------------------
                    var crtFileTransfer = transferMediaFiles[crtFileIdx];
                    var fileFullName = ""; ///crtFileInfo.getStorage() + crtFileInfo.getPath() + crtFileInfo.getName();
                    var callbackDownloadFile = function callbackDownloadFile(ctx2) {
                        var downloadFileWell = ctx2.getBoolResult();
                        if (!bIgnoreErrors) {
                            if (!crtFileTransfer.getIgnoreErrors()) {
                                if (!downloadFileWell) //ctx2.isError())
                                 {
                                    context.setError(error);
                                    context.setObjectResult(null);
                                    //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
                                    if (callback != null)
                                        callback(context);
                                    return;
                                }
                            }
                            else {
                                error.setError(0, "");
                            }
                        }
                        else {
                            error.setError(0, "");
                        }
                        //-------------- store a new xml-json-text object
                        //document.getElementById("rend.message").innerHTML += "<p>start createDefaultXmlDocument "  +  "</p>";  
                        console.log('Succesfuly downloaded one file ' + fileFullName);
                        fileFullName = crtFileTransfer.getDstFileInfo().getFullName();
                        document.getElementById("rend.message").innerHTML = "<p>file" + crtFileIdx + "</p>";
                        //document.getElementById("rend.message").innerHTML += "<p>"  + fileFullName + "</p>";
                        //ma
                        //setTimeout(()=>{callbackDownloadOneFile(++crtFileIdx, ctx2);}, 10);
                        return callbackDownloadOneFile(++crtFileIdx, ctx2);
                    };
                    //document.getElementById("rend.message").innerHTML += "<p>start _iSDKFileSystem.readTextFile2: "  + "</p>";  
                    if (crtFileTransfer.getCheckSha()) //ma
                        self.downloadFileIfNotAlreadyDownloaded(crtFileTransfer, error, ctx1, callbackDownloadFile);
                    else
                        self.downloadFileIfNotAlreadyDownloaded_withNoShaCkeck(crtFileTransfer, error, ctx1, callbackDownloadFile);
                };
                callbackDownloadOneFile(startFileIdx, context);
            };
            return RS_DownloadService;
        }(rmGeneral.rm_general.R_Service));
        rm_transversalservices.RS_DownloadService = RS_DownloadService;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=RS_DownloadService.js.map