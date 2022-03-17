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
var amGeneralActivityLogMessageTypes = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");
var rmGeneral = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rmIImplUpdateSoftwareConfig = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_updatesoftware/IImpl_UpdateSoftwareConfig_R");
var rmIImplUpdateSoftwareMain = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_updatesoftware/IImpl_UpdateSoftwareMain_R");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RS_UpdateSoftware = (function (_super) {
        __extends(RS_UpdateSoftware, _super);
        function RS_UpdateSoftware(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iUpdateSoftwareConfig = new rmIImplUpdateSoftwareConfig.rm_nonrenderingservices.IImpl_UpdateSoftwareConfig_R(_this);
            _this._iUpdateSoftwareMain = new rmIImplUpdateSoftwareMain.rm_nonrenderingservices.IImpl_UpdateSoftwareMain_R(_this);
            _this._aLogService = aLogService;
            _this._aPlaybackGlobalConfig = null;
            _this._aDownloadService = null;
            _this._aActivityLogService = null;
            _this._fileTransferList = null;
            _this._aAppInstallProperties = null;
            _this._bWithActivityLog = false;
            return _this;
        }
        RS_UpdateSoftware.prototype.injectDependencies = function (aServiceContainer, aServiceLocator, aLogService, error) {
            this._aServiceLocator = aServiceLocator;
            var id = 0;
            this._aDownloadService = this._aServiceLocator._iServiceCreation.createDefaultService_DownloadService(this._aServiceContainer, this._aServiceLocator, this._aLogService, id, error);
            this._aAppInstallProperties = this._aServiceLocator._iEntityCreation.createDefaultAppInstallProperties(error);
            this._fileTransferList = null;
            return 0;
        };
        RS_UpdateSoftware.prototype.setSDKService = function (aSDKService) {
            this._aSDKService = aSDKService;
            if (this._aDownloadService != null)
                this._aDownloadService._iService.setSDKService(aSDKService);
        };
        RS_UpdateSoftware.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
        };
        RS_UpdateSoftware.prototype.getPlaybackGlobalConfig = function () {
            return this._aPlaybackGlobalConfig;
        };
        RS_UpdateSoftware.prototype.setDownloadService = function (aDownloadService) {
            this._aDownloadService = aDownloadService;
        };
        RS_UpdateSoftware.prototype.getDownloadService = function () {
            return this._aDownloadService;
        };
        RS_UpdateSoftware.prototype.setActivityLogService = function (aActivityLogService) {
            this._aActivityLogService = aActivityLogService;
        };
        RS_UpdateSoftware.prototype.getActivityLogService = function () {
            return this._aActivityLogService;
        };
        RS_UpdateSoftware.prototype.downloadSoftware = function (softwareType, aSoftwareTransferFile, error, context, callback) {
            var self = this;
            var aSoftwareSrcFile = aSoftwareTransferFile.getSrcFileInfo();
            var aSoftwareTmpFile = aSoftwareTransferFile.getTmpFileInfo();
            var aSoftwareShaSrcFile = aSoftwareTransferFile.getSrcShaFileInfo();
            var aSoftwareShaTmpFile = aSoftwareTransferFile.getTmpShaFileInfo();
            var aSoftwareShaCrtDstFile = aSoftwareTransferFile.getDstShaFileInfo();
            var aSoftwareComputedShaTmpFile = aSoftwareTransferFile.getComputedShaFileInfo();
            var errorDownloadSoftware = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDownloadSoftware = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackDownloadSoftware = function callbackDownloadSoftware(ctx1) {
                var errorDownloadSoftwareSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextDownloadSoftwareSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                if (ctx1.isError()) {
                    if (error != null) {
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        if (self._bWithActivityLog) {
                            self._aActivityLogService._IActivityLogServiceMessaging
                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), ctx1.getError().getErrId() + ": " + ctx1.getError().getErrMsg(), null, null, null);
                        }
                    }
                    if (context != null) {
                        context.setError(error);
                        return callback(context);
                    }
                    return;
                }
                var callbackDownloadSoftwareSha = function callbackDownloadSoftwareSha(ctx2) {
                    var errorComputeSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextComputeSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var shaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);
                    shaProperties.setSrcFileInfo(aSoftwareTmpFile);
                    shaProperties.setShaFileInfo(aSoftwareComputedShaTmpFile);
                    var callbackComputeSha = function callbackComputeSha(ctx3) {
                        var shaComputeFile = ctx3.getResult();
                        var errorReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4) {
                            var shaDownloadedFile = ctx4.getResult();
                            var downloadSoftwareWell = true;
                            if (context != null) {
                                if (ctx4.isError()) {
                                    downloadSoftwareWell = false;
                                }
                                else {
                                    downloadSoftwareWell = false;
                                    if (aSoftwareTransferFile.isTheSameShaValue(shaComputeFile, shaDownloadedFile))
                                        downloadSoftwareWell = true;
                                }
                                context.setBoolResult(downloadSoftwareWell);
                                context.setError(error);
                                return callback(context);
                            }
                        };
                        contextReadTmpShaFile.setRemoteCallback(true);
                        self._aSDKService._iSDKFileSystem.readTextFile2(aSoftwareShaTmpFile.getStorage(), aSoftwareShaTmpFile.getPath(), aSoftwareShaTmpFile.getName(), errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);
                    };
                    contextComputeSha.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, errorComputeSha, contextComputeSha, callbackComputeSha);
                };
                contextDownloadSoftwareSha.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.downloadFile2(aSoftwareShaSrcFile.getFullName(), aSoftwareShaTmpFile.getStorage(), aSoftwareShaTmpFile.getPath(), aSoftwareShaTmpFile.getName(), errorDownloadSoftwareSha, contextDownloadSoftwareSha, callbackDownloadSoftwareSha);
            };
            contextDownloadSoftware.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.downloadFile2(aSoftwareSrcFile.getFullName(), aSoftwareTmpFile.getStorage(), aSoftwareTmpFile.getPath(), aSoftwareTmpFile.getName(), errorDownloadSoftware, contextDownloadSoftware, callbackDownloadSoftware);
        };
        RS_UpdateSoftware.prototype.existsMediaFile = function (contentFileId, mediaFilesList) {
            if (mediaFilesList.has(contentFileId))
                return true;
            return false;
        };
        RS_UpdateSoftware.prototype.addSoftwareFile = function (aSoftwareType, softwareFilesList, aSoftwareFileTransfer, contentFileId, srcFileType, error, context, callback) {
            var self = this;
            if (this.existsMediaFile(contentFileId, softwareFilesList))
                return 1;
            softwareFilesList.set(contentFileId, aSoftwareFileTransfer);
            return 0;
        };
        RS_UpdateSoftware.prototype.buildSoftwareFilesListToDownload = function (softwareType, aSoftwareTransferFileTransfer, aSoftwareConfigFileTransfer, error, context, callback) {
            var self = this;
            self._fileTransferList = new Map();
            this.addSoftwareFile(softwareType, self._fileTransferList, aSoftwareConfigFileTransfer, 0, "xml", error, context, callback);
            if (context != null)
                context.setError(error);
            return callback(context);
        };
        RS_UpdateSoftware.prototype.downloadSoftwareFilesList = function (softwareType, aSoftwareFileTransfer, aSoftwareConfigTransferFileTransfer, error, context, callback) {
            var bIgnoreErrors = false;
            return this._aDownloadService._iDownloadMain.downloadFiles_fromMap(this._fileTransferList, bIgnoreErrors, error, context, callback);
        };
        RS_UpdateSoftware.prototype.hasNewSoftwareOrNewConfigAndIfNotInstallEmptyUrl = function (softwareType, aSoftwareTransferFile, aSoftwareConfigTransferFile, error, context, callback) {
            var self = this;
            var bHasNewSoftwareOrNewConfig = false;
            var errorHasNewSoftware = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextHasNewSoftware = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackHasNewSoftwareOrNewConfig = function callbackHasNewSoftwareOrNewConfig(ctxHasNewSoftwareOrNewConfig) {
                bHasNewSoftwareOrNewConfig = ctxHasNewSoftwareOrNewConfig.getBoolResult();
                if (bHasNewSoftwareOrNewConfig) {
                    if (error != null) {
                        if (ctxHasNewSoftwareOrNewConfig.isError()) {
                            error.setError(493, "ERROR 993: hasNewSoftwareOrNewConfig: [" + ctxHasNewSoftwareOrNewConfig.getError().getErrMsg() + "]");
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging
                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "493: hasNewSoftwareOrNewConfig: [" + ctxHasNewSoftwareOrNewConfig.getError().getErrMsg() + "]", null, null, null);
                            }
                        }
                    }
                    if (context != null) {
                        context.setError(error);
                        context.setBoolResult(bHasNewSoftwareOrNewConfig);
                        return callback(context);
                    }
                    return;
                }
                var errorAppInstall = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextAppInstall = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackAppInstall2 = function callbackAppInstall2(ctxInstall) {
                    var softwareInstalledWell = ctxInstall.getBoolResult();
                    if (error != null) {
                        if (!softwareInstalledWell) {
                            error.setError(493, "ERROR 993: configureEmptyUrl: [" + ctxInstall.getError().getErrMsg() + "]");
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging
                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 493: configureEmptyUrl: [" + ctxInstall.getError().getErrMsg() + "]", null, null, null);
                            }
                        }
                    }
                    if (!softwareInstalledWell) {
                        softwareInstalledWell = false;
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>configureEmptyUrl ERROR 993: - Error configureEmptyUrl" + "[" + ctxInstall.getError().getErrMsg() + "]</p>";
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging
                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 993: Install Software - Error configureEmptyUrl: [" + ctxInstall.getError().getErrMsg() + "]", null, null, null);
                            }
                        }
                    }
                    else {
                        softwareInstalledWell = true;
                        if (self._bWithActivityLog) {
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "configureEmptyUrl...OK", null, null, null);
                        }
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>configureEmptyUrl...OK</p>";
                        }
                    }
                    if (context != null) {
                        context.setError(error);
                        context.setBoolResult(bHasNewSoftwareOrNewConfig);
                        return callback(context);
                    }
                };
                self._aAppInstallProperties.setSoftwareFileTransfer(aSoftwareTransferFile);
                self._aAppInstallProperties.setReboot(false);
                self._aAppInstallProperties.setUseAppEmptyUrl(true);
                if (self._bWithActivityLog) {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "configureEmptyUrl...", null, null, null);
                }
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>configureEmptyUrl...</p>";
                }
                contextAppInstall.setRemoteCallback(true);
                self._aSDKService._iSDKApplicationSetup.installApplication(self._aAppInstallProperties, errorAppInstall, contextAppInstall, callbackAppInstall2);
            };
            if (self._bWithActivityLog) {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewSoftwareOrNewConfig...", null, null, null);
            }
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>hasNewSoftwareOrNewConfig...</p>";
            }
            contextHasNewSoftware.setRemoteCallback(true);
            self.hasNewSoftwareOrNewConfig(softwareType, aSoftwareTransferFile, aSoftwareConfigTransferFile, errorHasNewSoftware, contextHasNewSoftware, callbackHasNewSoftwareOrNewConfig);
        };
        RS_UpdateSoftware.prototype.hasNewSoftwareOrNewConfig = function (softwareType, aSoftwareTransferFile, aSoftwareConfigTransferFile, error, context, callback) {
            var self = this;
            var bHasNewSoftware = false;
            var errorHasNewSoftware = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextHasNewSoftware = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackHasNewSoftware2 = function callbackHasNewSoftware2(ctxHasNewSoftware) {
                if (ctxHasNewSoftware.isError()) {
                    if (context != null) {
                        error.setError(481, "ERROR 481: DownloadAll - Error while checking for a new software");
                        if (self._bWithActivityLog) {
                            self._aActivityLogService._IActivityLogServiceMessaging
                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 481: DownloadAll - Error while checking for a new software: [" + ctxHasNewSoftware.getError().getErrMsg() + "]", null, null, null);
                        }
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>ERROR 481: DownloadAll - Error while checking for a new software</p>";
                        }
                        context.setError(error);
                        context.setBoolResult(false);
                        return callback(context);
                    }
                    return;
                }
                bHasNewSoftware = ctxHasNewSoftware.getBoolResult();
                var bHasNewConfig = false;
                var errorHasNewConfig = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextHasNewConfig = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackHasNewConfig2 = function callbackHasNewConfig2(ctxHasNewConfig) {
                    if (ctxHasNewConfig.isError()) {
                        if (context != null) {
                            error.setError(481, "ERROR 4811: DownloadAll - Error while checking for a new software config");
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging
                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 481: DownloadAll - Error while checking for a new software config: [" + ctxHasNewConfig.getError().getErrMsg() + "]", null, null, null);
                            }
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>ERROR 481: DownloadAll - Error while checking for a new software config</p>";
                            }
                            context.setError(error);
                            context.setBoolResult(false);
                            return callback(context);
                        }
                        return;
                    }
                    bHasNewConfig = ctxHasNewConfig.getBoolResult();
                    var bHasNewSoftwareOrNewConfig = false;
                    if (bHasNewSoftware)
                        bHasNewSoftwareOrNewConfig = true;
                    if (bHasNewConfig)
                        bHasNewSoftwareOrNewConfig = true;
                    if (self._debug) {
                        if (bHasNewSoftwareOrNewConfig) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: bHasNewSoftwareOrNewConfig: TRUE</p>";
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "bHasNewSoftwareOrNewConfig: TRUE", null, null, null);
                            }
                        }
                        else {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: bHasNewSoftwareOrNewConfig: FALSE</p>";
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "bHasNewSoftwareOrNewConfig: FALSE", null, null, null);
                            }
                        }
                    }
                    if (context != null) {
                        context.setError(error);
                        context.setBoolResult(bHasNewSoftwareOrNewConfig);
                        return callback(context);
                    }
                };
                if (self._bWithActivityLog) {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewSoftwareConfig...", null, null, null);
                }
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>hasNewSoftwareConfig...</p>";
                }
                contextHasNewConfig.setRemoteCallback(true);
                self.hasNewSoftwareConfig(softwareType, aSoftwareConfigTransferFile, errorHasNewConfig, contextHasNewConfig, callbackHasNewConfig2);
            };
            if (self._bWithActivityLog) {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewSoftware...", null, null, null);
            }
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>hasNewSoftware...</p>";
            }
            contextHasNewSoftware.setRemoteCallback(true);
            self.hasNewSoftware(softwareType, aSoftwareTransferFile, errorHasNewSoftware, contextHasNewSoftware, callbackHasNewSoftware2);
        };
        RS_UpdateSoftware.prototype.hasNewSoftware = function (softwareType, aSoftwareTransferFile, error, context, callback) {
            return this.hasNewFile(softwareType, aSoftwareTransferFile, "hasNewSoftware", error, context, callback);
        };
        RS_UpdateSoftware.prototype.hasNewSoftwareConfig = function (softwareType, aSoftwareConfigTransferFile, error, context, callback) {
            return this.hasNewFile(softwareType, aSoftwareConfigTransferFile, "hasNewSoftwareConfig", error, context, callback);
        };
        RS_UpdateSoftware.prototype.hasNewFile = function (softwareType, aTransferFile, aTracingMsg, error, context, callback) {
            var self = this;
            var self = this;
            var aSoftwareSrcFile = aTransferFile.getSrcFileInfo();
            var aSoftwareTmpFile = aTransferFile.getTmpFileInfo();
            var aSoftwareShaSrcFile = aTransferFile.getSrcShaFileInfo();
            var aSoftwareShaTmpFile = aTransferFile.getTmpShaFileInfo();
            var aSoftwareShaCrtDstFile = aTransferFile.getDstShaFileInfo();
            var aSoftwareComputedShaTmpFile = aTransferFile.getComputedShaFileInfo();
            var errorDownloadSoftware = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDownloadSoftware = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackDownloadSoftware = function callbackDownloadSoftware(ctx1) {
                if (ctx1.isError()) {
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>ERROR 4890: " + aTracingMsg + ": downloadFile: [" + ctx1.getError().getErrMsg() + "]</p>";
                    }
                    if (error != null) {
                        error.setError(4890, "ERROR 4889: " + aTracingMsg + ": downloadFile: [" + ctx1.getError().getErrMsg() + "]");
                        if (self._bWithActivityLog) {
                            self._aActivityLogService._IActivityLogServiceMessaging
                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 4889: " + aTracingMsg + " downloadFile: [" + ctx1.getError().getErrMsg() + "]", null, null, null);
                        }
                        if (context != null) {
                            context.setError(error);
                            return callback(context);
                        }
                    }
                    return;
                }
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + " downloadFile...OK</p>";
                }
                var errorDownloadSoftwareSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextDownloadSoftwareSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackDownloadSoftwareSha = function callbackDownloadSoftwareSha(ctx2) {
                    if (ctx2.isError()) {
                        var hasNewSoftware = false;
                        if (context != null) {
                            error.setError(4890, "ERROR 4890: " + aTracingMsg + ": downloadFileSha: [" + ctx2.getError().getErrMsg() + "]");
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging
                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 4890: " + aTracingMsg + " downloadFileSha: [" + ctx2.getError().getErrMsg() + "]", null, null, null);
                            }
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>ERROR 4890: " + aTracingMsg + ": downloadFileSha : [" + ctx2.getError().getErrMsg() + "]";
                            }
                            context.setError(error);
                            context.setBoolResult(hasNewSoftware);
                            return callback(context);
                        }
                        return;
                    }
                    if (self._bWithActivityLog) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadFileSha...OK", null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": downloadFileSha...OK</p>";
                    }
                    var errorComputeSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextComputeSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var shaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);
                    shaProperties.setSrcFileInfo(aSoftwareTmpFile);
                    shaProperties.setShaFileInfo(aSoftwareComputedShaTmpFile);
                    var callbackComputeSha = function callbackComputeSha(ctx3) {
                        if (ctx3.isError()) {
                            var hasNewSoftware = false;
                            if (context != null) {
                                error.setError(4891, "--> ERROR 4890: " + aTracingMsg + ": error compute sha: [" + ctx3.getError().getErrMsg() + "]");
                                if (self._bWithActivityLog) {
                                    self._aActivityLogService._IActivityLogServiceMessaging
                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 4891: " + aTracingMsg + " error compute sha: [" + ctx3.getError().getErrMsg() + "]", null, null, null);
                                }
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>ERROR 4891: " + aTracingMsg + ": computeShaFile : error compute sha: ["
                                        + ctx3.getError().getErrMsg() + "]";
                                }
                                context.setError(error);
                                context.setBoolResult(hasNewSoftware);
                                return callback(context);
                            }
                            return;
                        }
                        var computeShaFile = ctx3.getResult();
                        if (self._bWithActivityLog) {
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "computeShaFile...OK", null, null, null);
                        }
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": computeShaFile...OK</p>";
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": computeShaFile: " + computeShaFile + "</p>";
                        }
                        var errorReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4) {
                            if (ctx4.isError()) {
                                var hasNewSoftware = false;
                                if (context != null) {
                                    error.setError(4892, "--> ERROR 4892: " + aTracingMsg + ": readTmpShaFile : [" + ctx4.getError().getErrMsg() + "]");
                                    if (self._bWithActivityLog) {
                                        self._aActivityLogService._IActivityLogServiceMessaging
                                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 4891: " + aTracingMsg + " readTmpShaFile: [" + ctx4.getError().getErrMsg() + "]", null, null, null);
                                    }
                                    if (self._debug) {
                                        document.getElementById("rend.message").innerHTML += "<p>ERROR 4892: " + aTracingMsg + ": readTmpShaFile : ["
                                            + ctx4.getError().getErrMsg() + "]";
                                    }
                                    context.setError(error);
                                    context.setBoolResult(hasNewSoftware);
                                    return callback(context);
                                }
                                return;
                            }
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "readTmpShaFile...OK", null, null, null);
                            }
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": readTmpShaFile...OK</p>";
                            }
                            var shaDownloadedFile = ctx4.getResult();
                            var errorReadShaCrtDstFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextReadShaCrtDstFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            var callbackReadShaCrtDstFile = function callbackReadShaCrtDstFile(ctx5) {
                                var hasNewSoftware2 = false;
                                if (context != null) {
                                    if (ctx5.isError()) {
                                        hasNewSoftware2 = true;
                                        context.setBoolResult(hasNewSoftware2);
                                        if (self._debug) {
                                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": readCrtDstShaFile : no current Software sha file...OK</p>";
                                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": TRUE</p>";
                                        }
                                    }
                                    else {
                                        if (self._bWithActivityLog) {
                                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "readCrtDstShaFile...OK", null, null, null);
                                        }
                                        if (self._debug) {
                                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": readCrtDstShaFile...OK</p>";
                                        }
                                        var shaCrtFile = ctx5.getResult();
                                        if (aTransferFile.isTheSameShaValue(shaCrtFile, shaDownloadedFile)) {
                                            hasNewSoftware2 = false;
                                            if (self._bWithActivityLog) {
                                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aTracingMsg + ": FALSE", null, null, null);
                                            }
                                            if (self._debug) {
                                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": FALSE</p>";
                                            }
                                        }
                                        else {
                                            hasNewSoftware2 = true;
                                            if (self._bWithActivityLog) {
                                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aTracingMsg + ": TRUE", null, null, null);
                                            }
                                            if (self._debug) {
                                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": TRUE</p>";
                                            }
                                        }
                                    }
                                    context.setBoolResult(hasNewSoftware2);
                                    context.setError(error);
                                    return callback(context);
                                }
                            };
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aTracingMsg + ": readCrtDstShaFile...", null, null, null);
                            }
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": readCrtDstShaFile...</p>";
                            }
                            contextReadShaCrtDstFile.setRemoteCallback(true);
                            self._aSDKService._iSDKFileSystem.readTextFile2(aSoftwareShaCrtDstFile.getStorage(), aSoftwareShaCrtDstFile.getPath(), aSoftwareShaCrtDstFile.getName(), errorReadShaCrtDstFile, contextReadShaCrtDstFile, callbackReadShaCrtDstFile);
                        };
                        if (self._bWithActivityLog) {
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aTracingMsg + ": readTmpShaFile...", null, null, null);
                        }
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": readTmpShaFile...</p>";
                        }
                        contextReadTmpShaFile.setRemoteCallback(true);
                        self._aSDKService._iSDKFileSystem.readTextFile2(aSoftwareShaTmpFile.getStorage(), aSoftwareShaTmpFile.getPath(), aSoftwareShaTmpFile.getName(), errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);
                    };
                    if (self._bWithActivityLog) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aTracingMsg + ": computeFileSha...", null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": computeFileSha...</p>";
                    }
                    contextComputeSha.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, errorComputeSha, contextComputeSha, callbackComputeSha);
                };
                if (self._bWithActivityLog) {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aTracingMsg + ": downloadFileSha...", null, null, null);
                }
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": downloadFileSha...</p>";
                }
                contextDownloadSoftwareSha.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.downloadFile2(aSoftwareShaSrcFile.getFullName(), aSoftwareShaTmpFile.getStorage(), aSoftwareShaTmpFile.getPath(), aSoftwareShaTmpFile.getName(), errorDownloadSoftwareSha, contextDownloadSoftwareSha, callbackDownloadSoftwareSha);
            };
            if (self._bWithActivityLog) {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aTracingMsg + ": downloadFile...", null, null, null);
            }
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": downloadFile...</p>";
            }
            contextDownloadSoftware.setRemoteCallback(true);
            this._aSDKService._iSDKFileSystem.downloadFile2(aSoftwareSrcFile.getFullName(), aSoftwareTmpFile.getStorage(), aSoftwareTmpFile.getPath(), aSoftwareTmpFile.getName(), errorDownloadSoftware, contextDownloadSoftware, callbackDownloadSoftware);
        };
        RS_UpdateSoftware.prototype.cleanupCurrentSoftwareFiles = function (softwareType, aSoftwareFileTransfer, aSoftwareConfigFileTransfer, error, context, callback) {
            if (context != null) {
                context.setError(error);
                return callback(context);
            }
            return;
        };
        RS_UpdateSoftware.prototype.downloadSoftwareFiles = function (softwareType, aSoftwareFileTransfer, aSoftwareConfigFileTransfer, error, context, callback) {
            var self = this;
            var errorDownloadSoftware = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDownloadSoftware = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackDownloadSoftware = function callbackDownloadSoftware(ctxDownloadSoftware) {
                var downloadSoftwareWell = ctxDownloadSoftware.getBoolResult(downloadSoftwareWell);
                if (!downloadSoftwareWell) {
                    if (context != null) {
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>ERROR 486: downloadSoftwareFiles: DownloadSoftware - Error while download the Software</p>";
                        }
                        error.setError(486, "<p>ERROR 486: downloadSoftwareFiles: Download Software - Error while download the Software</p>");
                        if (self._bWithActivityLog) {
                            self._aActivityLogService._IActivityLogServiceMessaging
                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 486: downloadSoftwareFiles: Download Software - Error while download the Software", null, null, null);
                        }
                        context.setError(error);
                        context.setBoolResult(false);
                        return callback(context);
                    }
                    return;
                }
                if (self._bWithActivityLog) {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadSoftwareFiles: DownloadSoftware...OK", null, null, null);
                }
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: DownloadSoftware...OK</p>";
                }
                var errorBuild = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextBuild = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackBuild = function callbackBuild(ctxBuild) {
                    if (ctxDownloadSoftware.isError()) {
                        if (context != null) {
                            error.setError(487, "ERROR 487: downloadSoftwareFiles - Error Building the Software Files List to Download: [" + errorBuild.getErrMsg() + "]");
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging
                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 487: downloadSoftwareFiles - Error Building the Software Files List to Download: [" + errorBuild.getErrMsg() + "]", null, null, null);
                            }
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML +=
                                    "ERROR 487: downloadSoftwareFiles: - Error Building the Software Files List to Download: [" + errorBuild.getErrMsg() + "]";
                            }
                            context.setError(error);
                            context.setBoolResult(false);
                            return callback(context);
                        }
                        return;
                    }
                    if (self._bWithActivityLog) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadSoftwareFiles: buildSoftwareFilesListToDownload...OK", null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: buildSoftwareFilesListToDownload...OK</p>";
                    }
                    var errorDownloadSoftwareFiles = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextDownloadSoftwareFiles = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackDownloadSoftwareFiles = function callbackDownloadMediaFiles(ctxDownloadMediaFiles) {
                        if (ctxDownloadMediaFiles.isError()) {
                            if (context != null) {
                                error.setError(482, "ERROR 482: downloadSoftwareFiles: downloadSoftwareFilesList: [" + errorDownloadSoftwareFiles.getErrMsg() + "]");
                                if (self._bWithActivityLog) {
                                    self._aActivityLogService._IActivityLogServiceMessaging
                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 482:downloadSoftwareFiles: downloadSoftwareFilesList: [" + errorDownloadSoftwareFiles.getErrMsg() + "]", null, null, null);
                                }
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "ERROR 482: downloadSoftwareFiles: downloadSoftwareFilesList: [" + errorDownloadSoftwareFiles.getErrMsg() + "]";
                                }
                                context.setError(error);
                                context.setBoolResult(false);
                                return callback(context);
                            }
                            return;
                        }
                        if (self._bWithActivityLog) {
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadSoftwareFiles: downloadMediaFilesList...OK", null, null, null);
                        }
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: downloadMediaFilesList...OK</p>";
                        }
                        if (context != null) {
                            context.setError(error);
                            context.setBoolResult(true);
                            return callback(context);
                        }
                        return;
                    };
                    if (self._bWithActivityLog) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadSoftwareFiles: downloadMediaFilesList...", null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: downloadMediaFilesList...</p>";
                    }
                    contextDownloadSoftwareFiles.setRemoteCallback(true);
                    self.downloadSoftwareFilesList(softwareType, aSoftwareFileTransfer, aSoftwareConfigFileTransfer, errorDownloadSoftwareFiles, contextDownloadSoftwareFiles, callbackDownloadSoftwareFiles);
                };
                if (self._bWithActivityLog) {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadSoftwareFiles: buildSoftwareFilesListToDownload...", null, null, null);
                }
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: buildSoftwareFilesListToDownload...</p>";
                }
                contextBuild.setRemoteCallback(true);
                self.buildSoftwareFilesListToDownload(softwareType, aSoftwareFileTransfer, aSoftwareConfigFileTransfer, errorBuild, contextBuild, callbackBuild);
            };
            if (self._bWithActivityLog) {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadSoftwareFiles: downloadSoftware...", null, null, null);
            }
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: downloadSoftware...</p>";
            }
            contextDownloadSoftware.setRemoteCallback(true);
            self.downloadSoftware(softwareType, aSoftwareFileTransfer, errorDownloadSoftware, contextDownloadSoftware, callbackDownloadSoftware);
        };
        RS_UpdateSoftware.prototype.downloadAll = function (softwareType, aSoftwareTransferFile, aSoftwareConfigTransferFile, error, context, callback) {
            var self = this;
            var bHasNewSoftware = false;
            var errorHasNewSoftware = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextHasNewSoftware = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackHasNewSoftware = function callbackHasNewSoftware(ctxHasNewSoftware) {
                if (ctxHasNewSoftware.isError()) {
                    if (context != null) {
                        error.setError(481, "ERROR 481: DownloadAll - Error while checking for a new software");
                        if (self._bWithActivityLog) {
                            self._aActivityLogService._IActivityLogServiceMessaging
                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 481: DownloadAll - Error while checking for a new software", null, null, null);
                        }
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>ERROR 481: DownloadAll - Error while checking for a new software</p>";
                        }
                        context.setError(error);
                        context.setBoolResult(false);
                        return callback(context);
                    }
                    return;
                }
                bHasNewSoftware = ctxHasNewSoftware.getBoolResult();
                if (!bHasNewSoftware) {
                    if (context != null) {
                        context.setError(error);
                        context.setBoolResult(bHasNewSoftware);
                        return callback(context);
                    }
                    return;
                }
                var errorCleanup = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCleanup = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCleanup = function callbackCleanup() {
                    if (contextCleanup.isError()) {
                        if (context != null) {
                            error.setError(482, "ERROR 482: DownloadAll - Error during the cleanup of the current software folders: [" + errorCleanup.getErrMsg() + "]");
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging
                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 482: DownloadAll - Error during the cleanup of the current software folders: [" + errorCleanup.getErrMsg() + "]", null, null, null);
                            }
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML +=
                                    "<p>ERROR 482: DownloadAll - Error during the cleanup of the current software folders: [" + errorCleanup.getErrMsg() + "]</p>";
                            }
                            context.setError(error);
                            context.setBoolResult(false);
                            return callback(context);
                        }
                        return;
                    }
                    if (self._bWithActivityLog) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "cleanupCurrentSoftwareFiles...Ok", null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>cleanupCurrentSoftwareFiles...Ok</p>";
                    }
                    var errorDownload = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextDownload = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackDownload = function callbackDownload(ctx1) {
                        var softwareDownloadedWell = ctx1.getBoolResult();
                        if (!softwareDownloadedWell) {
                            if (error != null) {
                                error.setError(483, "ERROR 482: Download Software - Error during the download of the software and its files: [" + ctx1.getError().getErrMsg() + "]");
                                if (self._bWithActivityLog) {
                                    self._aActivityLogService._IActivityLogServiceMessaging
                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 482: Download Software - Error during the download of the software and its files: [" + ctx1.getError().getErrMsg() + "]", null, null, null);
                                }
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>downloadSoftwareFiles...ERROR: " + error.getErrMsg() + "</p>";
                                }
                            }
                            else {
                                if (self._bWithActivityLog) {
                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadSoftwareFiles...Ok", null, null, null);
                                }
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>downloadSoftwareFiles...Ok</p>";
                                }
                            }
                            if (context != null) {
                                context.setError(error);
                                context.setBoolResult(softwareDownloadedWell);
                                if (context.isError())
                                    context.setBoolResult(false);
                                return callback(context);
                            }
                        }
                        var errorMoveSoftwareToDst = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextMoveSoftwareToDst = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var callbackMoveSoftwareToDst = function callbackMoveSoftwareToDst(ctxMove) {
                            var softwareMoveWell = contextDownload.getBoolResult();
                            if (ctxMove.isError()) {
                                if (error != null) {
                                    error.setError(483, "ERROR 482: Download Software - Error during the download of the software  files: [" + errorDownload.getErrMsg() + "]");
                                    if (self._bWithActivityLog) {
                                        self._aActivityLogService._IActivityLogServiceMessaging
                                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 483: Download Software - Error during the download of the software  files: [" + errorDownload.getErrMsg() + "]", null, null, null);
                                    }
                                }
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>moveSoftwareToDst...ERROR: " + error.getErrMsg() + "</p>";
                                }
                            }
                            else {
                                if (self._bWithActivityLog) {
                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "moveSoftwareToDst...OK", null, null, null);
                                }
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>moveSoftwareToDst...OK</p>";
                                }
                            }
                            var errorAppInstall = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextAppInstall = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            var callbackAppInstall = function callbackAppInstall(ctxInstall) {
                                var softwareInstalledWell = ctxInstall.getBoolResult();
                                if (error != null) {
                                    if (!softwareInstalledWell) {
                                        error.setError(493, "ERROR 893: Install Software - Error during software installation: [" + ctxInstall.getError().getErrMsg() + "]");
                                        if (self._bWithActivityLog) {
                                            self._aActivityLogService._IActivityLogServiceMessaging
                                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 493: Install Software - Error during software installation: [" + ctxInstall.getError().getErrMsg() + "]", null, null, null);
                                        }
                                    }
                                }
                                if (!softwareInstalledWell) {
                                    softwareInstalledWell = false;
                                    if (self._debug) {
                                        document.getElementById("rend.message").innerHTML += "<p>installSoftware ERROR 893: - Error during software installation:" + "[" + ctxInstall.getError().getErrMsg() + "]</p>";
                                        if (self._bWithActivityLog) {
                                            self._aActivityLogService._IActivityLogServiceMessaging
                                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " 493: Install Software - Error during software installation: [" + ctxInstall.getError().getErrMsg() + "]", null, null, null);
                                        }
                                    }
                                }
                                else {
                                    softwareInstalledWell = true;
                                    if (self._bWithActivityLog) {
                                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "installSoftware...OK", null, null, null);
                                    }
                                    if (self._debug) {
                                        document.getElementById("rend.message").innerHTML += "<p>installSoftware...OK</p>";
                                    }
                                }
                                if (context != null) {
                                    context.setError(error);
                                    context.setBoolResult(softwareInstalledWell);
                                    return callback(context);
                                }
                            };
                            self._aAppInstallProperties.setSoftwareFileTransfer(aSoftwareTransferFile);
                            self._aAppInstallProperties.setReboot(true);
                            self._aAppInstallProperties.setUseAppEmptyUrl(false);
                            if (self._bWithActivityLog) {
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "installSoftware...", null, null, null);
                            }
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>installSoftware...</p>";
                            }
                            contextAppInstall.setRemoteCallback(true);
                            self._aSDKService._iSDKApplicationSetup.installApplication(self._aAppInstallProperties, errorAppInstall, contextAppInstall, callbackAppInstall);
                        };
                        if (self._bWithActivityLog) {
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "moveSoftwareAndShaFileToDst...", null, null, null);
                        }
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>moveSoftwareAndShaFileToDst...</p>";
                        }
                        contextMoveSoftwareToDst.setRemoteCallback(true);
                        self._aDownloadService._iDownloadMain.moveFileAndShaFile(aSoftwareTransferFile.getTmpFileInfo(), aSoftwareTransferFile.getTmpShaFileInfo(), aSoftwareTransferFile.getDstFileInfo(), aSoftwareTransferFile.getDstShaFileInfo(), errorMoveSoftwareToDst, contextMoveSoftwareToDst, callbackMoveSoftwareToDst);
                    };
                    if (self._bWithActivityLog) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadSoftwareFiles...", null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>downloadSoftwareFiles...</p>";
                    }
                    contextDownload.setRemoteCallback(true);
                    self.downloadSoftwareFiles(softwareType, aSoftwareTransferFile, aSoftwareConfigTransferFile, errorDownload, contextDownload, callbackDownload);
                };
                if (self._bWithActivityLog) {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "cleanupCurrentSoftwareFiles...", null, null, null);
                }
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>cleanupCurrentSoftwareFiles...</p>";
                }
                contextCleanup.setRemoteCallback(true);
                self.cleanupCurrentSoftwareFiles(softwareType, aSoftwareTransferFile, aSoftwareConfigTransferFile, errorCleanup, contextCleanup, callbackCleanup);
            };
            if (self._bWithActivityLog) {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewSoftware...", null, null, null);
            }
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>hasNewSoftware...</p>";
            }
            contextHasNewSoftware.setRemoteCallback(true);
            self.hasNewSoftwareOrNewConfigAndIfNotInstallEmptyUrl(softwareType, aSoftwareTransferFile, aSoftwareConfigTransferFile, errorHasNewSoftware, contextHasNewSoftware, callbackHasNewSoftware);
        };
        RS_UpdateSoftware.prototype.createComputedShaFileInfoFromFileInfo = function (aFileInfo) {
            var aShaFileInfo = this._aServiceLocator._iEntityCreation.createDefaultFileInfo(null);
            aShaFileInfo.setStorage(aFileInfo.getStorage());
            aShaFileInfo.setPath(aFileInfo.getPath());
            aShaFileInfo.setName(aFileInfo.getName() + ".comp.sha");
            aShaFileInfo.setUrlStorage(aFileInfo.getUrlStorage());
            aShaFileInfo.setUrlPath(aFileInfo.getUrlPath());
            aShaFileInfo.setUrlName(aFileInfo.getUrlName() + ".comp.sha");
            return aShaFileInfo;
        };
        RS_UpdateSoftware.prototype.createShaFileInfoFromFileInfo = function (aFileInfo) {
            var aShaFileInfo = this._aServiceLocator._iEntityCreation.createDefaultFileInfo(null);
            aShaFileInfo.setStorage(aFileInfo.getStorage());
            aShaFileInfo.setPath(aFileInfo.getPath());
            aShaFileInfo.setName(aFileInfo.getName() + ".sha");
            aShaFileInfo.setUrlStorage(aFileInfo.getUrlStorage());
            aShaFileInfo.setUrlPath(aFileInfo.getUrlPath());
            aShaFileInfo.setUrlName(aFileInfo.getUrlName() + ".sha");
            return aShaFileInfo;
        };
        RS_UpdateSoftware.prototype.createFoldersIfTheyNotExists = function (softwareType, aSoftwareTransferFile, aSoftwareConfigTransferFile, error, context, callback) {
            var self = this;
            var aSoftwareTmpFolder = this._aPlaybackGlobalConfig._aSoftwareTemporaryFile;
            var aSoftwareConfigTmpFolder = this._aPlaybackGlobalConfig._aMediaFilesTemporaryFolder;
            var aSoftwareFolder = this._aPlaybackGlobalConfig._aSoftwareFile;
            var aSoftwareConfigFolder = this._aPlaybackGlobalConfig._aMediaFilesFolder;
            var errorCreateSoftwareTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCreateSoftwareTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackCreateSoftwareTmpFolder = function callbackCreateSoftwareTmpFolder() {
                var errorCreateSoftwareConfigTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreateSoftwareConfigTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCreateSoftwareConfigTmpFolder = function callbackCreateSoftwareConfigTmpFolder() {
                    var errorCreateSoftwareFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextCreateSoftwareFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackCreateSoftwareFolder = function callbackCreateSoftwareFolder() {
                        var errorCreateSoftwareConfigFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextCreateSoftwareConfigFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var callbackCreateSoftwareConfigFolder = function callbackCreateSoftwareConfigFolder() {
                            if (context != null) {
                                return callback(context);
                            }
                        };
                        contextCreateSoftwareConfigFolder.setRemoteCallback(true);
                        self._aSDKService._iSDKFileSystem.createFolder2(aSoftwareConfigFolder.getStorage(), aSoftwareConfigFolder.getPath(), errorCreateSoftwareConfigFolder, contextCreateSoftwareConfigFolder, callbackCreateSoftwareConfigFolder);
                    };
                    contextCreateSoftwareFolder.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.createFolder2(aSoftwareFolder.getStorage(), aSoftwareFolder.getPath(), errorCreateSoftwareFolder, contextCreateSoftwareTmpFolder, callbackCreateSoftwareFolder);
                };
                contextCreateSoftwareConfigTmpFolder.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.createFolder2(aSoftwareConfigTmpFolder.getStorage(), aSoftwareConfigTmpFolder.getPath(), errorCreateSoftwareConfigTmpFolder, contextCreateSoftwareConfigTmpFolder, callbackCreateSoftwareConfigTmpFolder);
            };
            contextCreateSoftwareTmpFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.createFolder2(aSoftwareTmpFolder.getStorage(), aSoftwareTmpFolder.getPath(), errorCreateSoftwareTmpFolder, contextCreateSoftwareTmpFolder, callbackCreateSoftwareTmpFolder);
        };
        RS_UpdateSoftware.prototype.update = function (error, context, callback) {
            var self = this;
            if (self._bWithActivityLog) {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Update Software: Start ....", null, null, null);
            }
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>Update Software: Start ...</p>";
            }
            var softwareType = this._aPlaybackGlobalConfig._software_type;
            var bEncryptedSoftware = false;
            var aSoftwareTransfer = this._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
            var aSoftwareConfigTransfer = this._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
            if (!bEncryptedSoftware) {
                aSoftwareTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aSoftwareRemoteFile);
                aSoftwareTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aSoftwareTemporaryFile);
                aSoftwareTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aSoftwareFile);
                aSoftwareTransfer.setSrcShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareRemoteFile));
                aSoftwareTransfer.setTmpShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareTemporaryFile));
                aSoftwareTransfer.setDstShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareFile));
                aSoftwareTransfer.setComputedShaFileInfo(this.createComputedShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareTemporaryFile));
                aSoftwareConfigTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigRemoteFile);
                aSoftwareConfigTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigTemporaryFile);
                aSoftwareConfigTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigFile);
                aSoftwareConfigTransfer.setSrcShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigRemoteFile));
                aSoftwareConfigTransfer.setTmpShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigTemporaryFile));
                aSoftwareConfigTransfer.setDstShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigFile));
                aSoftwareConfigTransfer.setComputedShaFileInfo(this.createComputedShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigTemporaryFile));
            }
            else {
                aSoftwareTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aSoftwareEncryptedRemoteFile);
                aSoftwareTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aSoftwareEncryptedTemporaryFile);
                aSoftwareTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aSoftwareEncryptedFile);
                aSoftwareTransfer.setSrcShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareEncryptedRemoteFile));
                aSoftwareTransfer.setTmpShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareEncryptedTemporaryFile));
                aSoftwareTransfer.setDstShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareEncryptedFile));
                aSoftwareTransfer.setComputedShaFileInfo(this.createComputedShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareEncryptedTemporaryFile));
                aSoftwareConfigTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigEncryptedRemoteFile);
                aSoftwareConfigTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigEncryptedTemporaryFile);
                aSoftwareConfigTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigEncryptedFile);
                aSoftwareConfigTransfer.setSrcShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigEncryptedRemoteFile));
                aSoftwareConfigTransfer.setTmpShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigEncryptedTemporaryFile));
                aSoftwareConfigTransfer.setDstShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigEncryptedFile));
                aSoftwareConfigTransfer.setComputedShaFileInfo(this.createComputedShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigEncryptedTemporaryFile));
            }
            var errorCreateFolders = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCreateFolders = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackCreateFolders = function callbackCreateFolders() {
                var callbackDownloadAll = function callbackDownloadAll() {
                    if (context != null) {
                        return callback(context);
                    }
                };
                if (self._bWithActivityLog) {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "createFoldersIfTheyNotExists....OK", null, null, null);
                }
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>createFoldersIfTheyNotExists....OK</p>";
                }
                self.downloadAll(softwareType, aSoftwareTransfer, aSoftwareConfigTransfer, error, context, callbackDownloadAll);
            };
            if (self._bWithActivityLog) {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "createFoldersIfTheyNotExists....", null, null, null);
            }
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>createFoldersIfTheyNotExists....</p>";
            }
            self.createFoldersIfTheyNotExists(softwareType, aSoftwareTransfer, aSoftwareConfigTransfer, errorCreateFolders, contextCreateFolders, callbackCreateFolders);
        };
        return RS_UpdateSoftware;
    }(rmGeneral.rm_general.R_Service));
    rm_nonrenderingservices.RS_UpdateSoftware = RS_UpdateSoftware;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RS_UpdateSoftware.js.map