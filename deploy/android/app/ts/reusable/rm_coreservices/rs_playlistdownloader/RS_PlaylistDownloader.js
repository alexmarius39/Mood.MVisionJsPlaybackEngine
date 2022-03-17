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
var rmIImplPlaylistDownloaderConfig = require("../../../../../app/ts/reusable/rm_coreservices/rs_playlistdownloader/IImpl_PlaylistDownloaderConfig_R");
var rmIImplPlaylistDownloaderBuilderMoodV5 = require("../../../../../app/ts/reusable/rm_coreservices/rs_playlistdownloader/IImpl_PlaylistDownloaderBuilder_Mood_v5");
var rmIImplPlaylistDownloaderBuilderCustomV1 = require("../../../../../app/ts/reusable/rm_coreservices/rs_playlistdownloader/IImpl_PlaylistDownloaderBuilder_Custom_v1");
var rmIImplPlaylistDownloaderMain = require("../../../../../app/ts/reusable/rm_coreservices/rs_playlistdownloader/IImpl_PlaylistDownloaderMain_R");
var rm_coreservices;
(function (rm_coreservices) {
    var RS_PlaylistDownloader = (function (_super) {
        __extends(RS_PlaylistDownloader, _super);
        function RS_PlaylistDownloader(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iPlaylistDownloaderConfig = new rmIImplPlaylistDownloaderConfig.rm_coreservices.IImpl_PlaylistDownloaderConfig_R(_this);
            _this._iPlaylistDownloaderBuilderMoodV5 = new rmIImplPlaylistDownloaderBuilderMoodV5.rm_coreservices.IImpl_PlaylistDownloaderBuilder_Mood_v5(_this);
            _this._iPlaylistDownloaderBuilderCustomV1 = new rmIImplPlaylistDownloaderBuilderCustomV1.rm_coreservices.IImpl_PlaylistDownloaderBuilder_Custom_v1(_this);
            _this._iPlaylistDownloaderMain = new rmIImplPlaylistDownloaderMain.rm_coreservices.IImpl_PlaylistDownloaderMain_R(_this);
            _this._aLogService = aLogService;
            _this._aPlaybackGlobalConfig = null;
            _this._aDownloadService = null;
            _this._aActivityLogService = null;
            _this._fileTransferList = null;
            _this._htmlTemplatesTransferList = null;
            _this._htmlTemplateDetailsTransferList = null;
            _this._htmlTemplateMainTransferList = null;
            _this._htmlTemplateFeedDataFile = null;
            _this._htmlTemplateInstanceDataFile = null;
            return _this;
        }
        RS_PlaylistDownloader.prototype.injectDependencies = function (aServiceContainer, aServiceLocator, aLogService, error) {
            this._aServiceLocator = aServiceLocator;
            var id = 0;
            this._aDownloadService = this._aServiceLocator._iServiceCreation.createDefaultService_DownloadService(this._aServiceContainer, this._aServiceLocator, this._aLogService, id, error);
            this._fileTransferList = null;
            this._htmlTemplatesTransferList = null;
            this._htmlTemplateDetailsTransferList = null;
            this._htmlTemplateMainTransferList = null;
            this._htmlTemplateFeedDataFile = null;
            this._htmlTemplateInstanceDataFile = null;
            return 0;
        };
        RS_PlaylistDownloader.prototype.setSDKService = function (aSDKService) {
            this._aSDKService = aSDKService;
            if (this._aDownloadService != null)
                this._aDownloadService._iService.setSDKService(aSDKService);
        };
        RS_PlaylistDownloader.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
            var playlistStorage = aPlaybackGlobalConfig._aPlaylistFile.getStorage();
            var playlistLocalUrlStorage = aPlaybackGlobalConfig._aPlaylistFile.getUrlStorage();
        };
        RS_PlaylistDownloader.prototype.getPlaybackGlobalConfig = function () {
            return this._aPlaybackGlobalConfig;
        };
        RS_PlaylistDownloader.prototype.setDownloadService = function (aDownloadService) {
            this._aDownloadService = aDownloadService;
        };
        RS_PlaylistDownloader.prototype.getDownloadService = function () {
            return this._aDownloadService;
        };
        RS_PlaylistDownloader.prototype.setActivityLogService = function (aActivityLogService) {
            this._aActivityLogService = aActivityLogService;
        };
        RS_PlaylistDownloader.prototype.getActivityLogService = function () {
            return this._aActivityLogService;
        };
        RS_PlaylistDownloader.prototype.applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            if (aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName() != "3109_video_overlay-1.0.2.zip") {
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);
            }
            var self = this;
            var extraPath = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
            extraPath = self.getFileNameWithoutExtension(extraPath);
            var unzipStorageName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage();
            var unzipFolderJsName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
            var correctiveStorageName = self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getStorage();
            var correctiveFolderJsName = self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getPath();
            var errorCopyTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCopyTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackCopyTemplateLoader = function callbackCopyTemplateLoader(ctx6) {
                var copyFilesWell = true;
                if (ctx6.isError()) {
                    copyFilesWell = false;
                }
                context.setError(error);
                return callback(context);
            };
            contextCopyTemplateLoader.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.copyFile2(correctiveStorageName, correctiveFolderJsName, "index.html", unzipStorageName, unzipFolderJsName, "index.html", errorCopyTemplateLoader, contextCopyTemplateLoader, callbackCopyTemplateLoader);
        };
        RS_PlaylistDownloader.prototype.applyCorrectiveJs_forOneHtmlTemplate_forModifiedFile = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var strFileToModified = "353684_video-with-supporting-text-1.0.0_1716216.json";
            var strVideoParamFile = aCrtHtmlTemplateFileTransfer.getAdditionalInfo();
            var strFoundPart = "\"name\":\"Media\",\"type\":\"mediaReference\",\"value\":[";
            var strNewPart = "\"name\":\"Media\",\"type\":\"mediaReference\",\"value\":[ \"" + strVideoParamFile + "\", ";
            var self = this;
            var extraPath = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
            extraPath = self.getFileNameWithoutExtension(extraPath);
            var unzipStorageName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage();
            var unzipFolderJsName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + "/";
            var correctiveStorageName = self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getStorage();
            var correctiveFolderJsName = self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getPath();
            var mediaId = aCrtHtmlTemplateFileTransfer.getMediaId();
            var contentPlayerFileNameWithoutFileExtension = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
            contentPlayerFileNameWithoutFileExtension = self.getFileNameWithoutExtension(contentPlayerFileNameWithoutFileExtension);
            var contentPlayerFileName = contentPlayerFileNameWithoutFileExtension +
                self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name1 +
                mediaId +
                self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name2;
            strFileToModified = contentPlayerFileName;
            var errorTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackTemplateLoader = function callbackTemplateLoader(ctx4) {
                if (ctx4.isError()) {
                    if (context != null) {
                        context.setBoolResult(false);
                        context.setError(error);
                        return callback(context);
                    }
                }
                var htmlString = ctx4._result;
                var idxFound = -1;
                if (htmlString != null)
                    idxFound = htmlString.indexOf(strFoundPart);
                var bWasFound = false;
                if (idxFound >= 0)
                    bWasFound = true;
                if (!bWasFound) {
                    context.setError(error);
                    return callback(context);
                }
                var htmlNewString = htmlString.replace(strFoundPart, strNewPart);
                var errorCopyTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCopyTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCopyTemplateLoader = function callbackCopyTemplateLoader(ctx6) {
                    var writeFilesWell = true;
                    if (ctx6.isError()) {
                        writeFilesWell = false;
                    }
                    context.setError(error);
                    return callback(context);
                };
                contextCopyTemplateLoader.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.writeTextFile2(unzipStorageName, unzipFolderJsName, strFileToModified, htmlNewString, errorCopyTemplateLoader, contextCopyTemplateLoader, callbackCopyTemplateLoader);
            };
            contextTemplateLoader.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.readTextFile2(unzipStorageName, unzipFolderJsName, strFileToModified, errorTemplateLoader, contextTemplateLoader, callbackTemplateLoader);
        };
        RS_PlaylistDownloader.prototype.applyCorrectiveJs_forOneHtmlTemplate_forVideoWithText = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            if (aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName() != "353684_video-with-supporting-text-1.0.0.zip") {
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);
            }
            var self = this;
            var extraPath = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
            extraPath = self.getFileNameWithoutExtension(extraPath);
            var unzipStorageName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage();
            var unzipFolderJsName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
            var correctiveStorageName = self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getStorage();
            var correctiveFolderJsName = self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getPath();
            var errorCopyTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCopyTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackCopyTemplateLoader = function callbackCopyTemplateLoader(ctx6) {
                var copyFilesWell = true;
                if (ctx6.isError()) {
                    copyFilesWell = false;
                }
                var errorChangeJsonParameterFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextChangeJsonParameterFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackChangeJsonParameterFile = function callbackChangeJsonParamerFile(ctx7) {
                    var errorCopyTemplateFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextCopyTemplateFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackCopyTemplateFile = function callbackCopyTemplateFile(ctx7) {
                        var copyFilesWell2 = true;
                        if (ctx7.isError()) {
                            copyFilesWell = false;
                        }
                        context.setError(error);
                        return callback(context);
                    };
                    contextCopyTemplateFile.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.copyFile2(correctiveStorageName, correctiveFolderJsName, "template_353684_video-with-supporting-text-1.0.0.js", unzipStorageName, unzipFolderJsName + "js/", "template.js", errorCopyTemplateFile, contextCopyTemplateFile, callbackCopyTemplateFile);
                };
                contextCopyTemplateLoader.setRemoteCallback(true);
                self.applyCorrectiveJs_forOneHtmlTemplate_forModifiedFile(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorChangeJsonParameterFile, contextChangeJsonParameterFile, callbackChangeJsonParameterFile);
            };
            contextCopyTemplateLoader.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.copyFile2(correctiveStorageName, correctiveFolderJsName, "index_353684_video-with-supporting-text-1.0.0.html", unzipStorageName, unzipFolderJsName, "index.html", errorCopyTemplateLoader, contextCopyTemplateLoader, callbackCopyTemplateLoader);
        };
        RS_PlaylistDownloader.prototype.applyCorrectiveJs_forOneHtmlTemplate_forJsFile = function (strJSFileName, aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var extraPath = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
            extraPath = self.getFileNameWithoutExtension(extraPath);
            extraPath = extraPath + "/" + "js";
            var unzipStorageName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage();
            var unzipFolderJsName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
            var correctiveStorageName = self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getStorage();
            var correctiveFolderJsName = self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getPath();
            var errorExistsRouterJs = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextExistsRouterJs = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackExistsRouterJs = function callbackExistsRouterJs(ctx0) {
                var bExistsFile = false;
                if (ctx0 != null)
                    bExistsFile = ctx0.getBoolResult();
                if (!bExistsFile) {
                    if (context != null) {
                        context.setError(error);
                        return callback(context);
                    }
                    return;
                }
                var errorCopyTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCopyTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCopyTemplateLoader = function callbackCopyTemplateLoader(ctx6) {
                    var copyFilesWell = true;
                    if (ctx6.isError()) {
                        copyFilesWell = false;
                    }
                    context.setError(error);
                    return callback(context);
                };
                contextCopyTemplateLoader.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.copyFile2(correctiveStorageName, correctiveFolderJsName, strJSFileName, unzipStorageName, unzipFolderJsName, strJSFileName, errorCopyTemplateLoader, contextCopyTemplateLoader, callbackCopyTemplateLoader);
            };
            contextExistsRouterJs.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.fileExists2(unzipStorageName, unzipFolderJsName, strJSFileName, errorExistsRouterJs, contextExistsRouterJs, callbackExistsRouterJs);
        };
        RS_PlaylistDownloader.prototype.applyCorrectiveJs_forOneHtmlTemplate_forTemplateLoaderIfNeeded = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var extraPath = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
            extraPath = self.getFileNameWithoutExtension(extraPath);
            extraPath = extraPath + "/" + "js";
            var unzipStorageName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage();
            var unzipFolderJsName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
            var correctiveStorageName = self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getStorage();
            var correctiveFolderJsName = self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getPath();
            var errorTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackTemplateLoader = function callbackTemplateLoader(ctx4) {
                if (ctx4.isError()) {
                    if (context != null) {
                        context.setBoolResult(false);
                        context.setError(error);
                        return callback(context);
                    }
                }
                var jsString = ctx4._result;
                var idxTizen = -1;
                if (jsString != null)
                    idxTizen = jsString.indexOf("\"tizen\"");
                var bHasTizen = false;
                if (idxTizen >= 0)
                    bHasTizen = true;
                if (bHasTizen) {
                    context.setBoolResult(bHasTizen);
                    context.setError(error);
                    return callback(context);
                }
                var errorCopyTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCopyTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCopyTemplateLoader = function callbackCopyTemplateLoader(ctx6) {
                    var copyFilesWell = true;
                    if (ctx6.isError()) {
                        copyFilesWell = false;
                    }
                    context.setError(error);
                    return callback(context);
                };
                contextCopyTemplateLoader.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.copyFile2(correctiveStorageName, correctiveFolderJsName, "template-loader.js", unzipStorageName, unzipFolderJsName, "template-loader.js", errorCopyTemplateLoader, contextCopyTemplateLoader, callbackCopyTemplateLoader);
            };
            contextTemplateLoader.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.readTextFile2(unzipStorageName, unzipFolderJsName, "template-loader.js", errorTemplateLoader, contextTemplateLoader, callbackTemplateLoader);
        };
        RS_PlaylistDownloader.prototype.applyCorrectiveJs_forOneHtmlTemplate = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            if (aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmltemplate") {
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);
            }
            var errorApplyCorrectiveJsTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextApplyCorrectiveJsTemplateLoader = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackApplyCorrectiveJsTemplateLoader = function callbackApplyCorrectiveJs(ctxApplyCorrectiveJsTemplateLoader) {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate__forTemplateLoaderIfNeeded - Ok", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate__forTemplateLoaderIfNeeded - Ok</p>";
                }
                var errorApplyCorrectiveJsRouterJs = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextApplyCorrectiveJsRouterJs = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackApplyCorrectiveJsRouterJs = function callbackApplyJsRouterJs(ctxApplyCorrectiveJsRouterJs) {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile: router.js - Ok", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile: router.js - Ok</p>";
                    }
                    var errorApplyCorrectiveJsIndexHtmlAppVersion = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextApplyCorrectiveJsIndexHtmlAppVersion = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackApplyCorrectiveJsIndexHtmlAppVersion = function callbackApplyCorrectiveJsIndexHtmlAppVersion(ctxApplyCorrectiveIndexHtmlAppVersion) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion - Ok", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion - Ok</p>";
                        }
                        var errorApplyCorrectiveRssRendererJs = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextApplyCorrectiveRssRendererJs = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var callbackApplyCorrectiveRssRendererJs = function callbackApplyCorrectiveRssRendererJs(ctxApplyCorrectiveRssRendererJs) {
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : rss-renderer.js - OK", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : rss-renderer.js - OK</p>";
                            }
                            var errorApplyCorrectiveNewsRendererJs = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextApplyCorrectiveNewsRendererJs = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            var callbackApplyCorrectiveNewsRendererJs = function callbackApplyCorrectiveNewsRendererJs(ctxApplyCorrectiveNewsRendererJs) {
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-renderer.js - OK", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-renderer.js - OK</p>";
                                }
                                var errorApplyCorrectiveNewsApiWraperJs = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextApplyCorrectiveNewsApiWraperJs = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                var callbackApplyCorrectiveNewsApiWraperJs = function callbackApplyCorrectiveNewsRendererJs(ctxApplyCorrectiveNewsApiWraperJs) {
                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-api-wrapper.js - OK", null, null, null);
                                    if (self._debug) {
                                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-api-wrapper.js - OK</p>";
                                    }
                                    var errorApplyCorrectiveforVideoWithText = self._aServiceLocator._iEntityCreation.createDefaultError();
                                    var contextApplyCorrectiveforVideoWithText = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                    var callbackApplyCorrectiveforVideoWithText = function callbackforVideoWithText(ctxApplyCorrectiveNewsApiWraperJs) {
                                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forVideoWithText - is applicable - Ok", null, null, null);
                                        if (self._debug) {
                                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forVideoWithText - is applicable - Ok</p>";
                                        }
                                        var errorApplyCorrectiveWeatherRendererJs = self._aServiceLocator._iEntityCreation.createDefaultError();
                                        var contextApplyCorrectiveWeatherRendererJs = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                        var callbackApplyCorrectiveWeatherRendererJs = function callbackApplyCorrectiveWeatherRendererJs(ctxApplyCorrectiveWeatherRendererJs) {
                                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forWeatherRendererJs - is applicable - Ok", null, null, null);
                                            if (self._debug) {
                                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forWeatherRendererJs - is applicable - Ok</p>";
                                            }
                                            var errorApplyCorrectiveWeatherApiWrapperJs = self._aServiceLocator._iEntityCreation.createDefaultError();
                                            var contextApplyCorrectiveWeatherApiWrapperJs = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                            var callbackApplyCorrectiveWeatherApiWrapperJs = function callbackApplyCorrectiveWeatherApiWrapperJs(ctxApplyCorrectiveWeatherApiWrapperJs) {
                                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forWeatherApiWrapper - is applicable - Ok", null, null, null);
                                                if (self._debug) {
                                                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forWeatherApiWrapper - is applicable - Ok</p>";
                                                }
                                                if (context != null) {
                                                    context.setError(error);
                                                    context.setBoolResult(true);
                                                    return callback(context);
                                                }
                                                return;
                                            };
                                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : weather-api-wrapper.js", null, null, null);
                                            if (self._debug) {
                                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : weather-api-wrapper.js</p>";
                                            }
                                            contextApplyCorrectiveWeatherApiWrapperJs.setRemoteCallback(true);
                                            self.applyCorrectiveJs_forOneHtmlTemplate_forJsFile("weather-api-wrapper.js", aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorApplyCorrectiveWeatherApiWrapperJs, contextApplyCorrectiveWeatherApiWrapperJs, callbackApplyCorrectiveWeatherApiWrapperJs);
                                        };
                                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : weather-renderer.js", null, null, null);
                                        if (self._debug) {
                                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : weather-renderer.js</p>";
                                        }
                                        contextApplyCorrectiveWeatherRendererJs.setRemoteCallback(true);
                                        self.applyCorrectiveJs_forOneHtmlTemplate_forJsFile("weather-renderer.js", aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorApplyCorrectiveWeatherRendererJs, contextApplyCorrectiveWeatherRendererJs, callbackApplyCorrectiveWeatherRendererJs);
                                    };
                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forVideoWithText - is applicable...", null, null, null);
                                    if (self._debug) {
                                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forVideoWithText - is applicable...</p>";
                                    }
                                    contextApplyCorrectiveforVideoWithText.setRemoteCallback(true);
                                    self.applyCorrectiveJs_forOneHtmlTemplate_forVideoWithText(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorApplyCorrectiveforVideoWithText, contextApplyCorrectiveforVideoWithText, callbackApplyCorrectiveforVideoWithText);
                                };
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-api-wrapper.js", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-api-wrapper.js</p>";
                                }
                                contextApplyCorrectiveNewsApiWraperJs.setRemoteCallback(true);
                                self.applyCorrectiveJs_forOneHtmlTemplate_forJsFile("news-api-wrapper.js", aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorApplyCorrectiveNewsApiWraperJs, contextApplyCorrectiveNewsApiWraperJs, callbackApplyCorrectiveNewsApiWraperJs);
                            };
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-renderer.js", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-renderer.js</p>";
                            }
                            contextApplyCorrectiveNewsRendererJs.setRemoteCallback(true);
                            self.applyCorrectiveJs_forOneHtmlTemplate_forJsFile("news-renderer.js", aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorApplyCorrectiveNewsRendererJs, contextApplyCorrectiveNewsRendererJs, callbackApplyCorrectiveNewsRendererJs);
                        };
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : rss-renderer.js", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : rss-renderer.js</p>";
                        }
                        contextApplyCorrectiveRssRendererJs.setRemoteCallback(true);
                        self.applyCorrectiveJs_forOneHtmlTemplate_forJsFile("rss-renderer.js", aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorApplyCorrectiveRssRendererJs, contextApplyCorrectiveRssRendererJs, callbackApplyCorrectiveRssRendererJs);
                    };
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion</p>";
                    }
                    contextApplyCorrectiveJsIndexHtmlAppVersion.setRemoteCallback(true);
                    self.applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorApplyCorrectiveJsIndexHtmlAppVersion, contextApplyCorrectiveJsIndexHtmlAppVersion, callbackApplyCorrectiveJsIndexHtmlAppVersion);
                };
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : router.js", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : router.js</p>";
                }
                contextApplyCorrectiveJsRouterJs.setRemoteCallback(true);
                self.applyCorrectiveJs_forOneHtmlTemplate_forJsFile("router.js", aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorApplyCorrectiveJsRouterJs, contextApplyCorrectiveJsRouterJs, callbackApplyCorrectiveJsRouterJs);
            };
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forTemplateLoaderIfNeeded", null, null, null);
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forTemplateLoaderIfNeeded</p>";
            }
            contextApplyCorrectiveJsTemplateLoader.setRemoteCallback(true);
            self.applyCorrectiveJs_forOneHtmlTemplate_forTemplateLoaderIfNeeded(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorApplyCorrectiveJsTemplateLoader, contextApplyCorrectiveJsTemplateLoader, callbackApplyCorrectiveJsTemplateLoader);
        };
        RS_PlaylistDownloader.prototype.addHtmlTemplate_HtmlInstanceDataFile = function (htmlTemplatesDetailsFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, aCrtHtmlTemplateFileTransfer, error, context, callback) {
            var self = this;
            var mediaId;
            var contentFileId;
            var contentFileName;
            var shaFileValue;
            var contentPlayerFileName;
            var contentPlayerFileNameWithoutFileExtension;
            var serialNumber;
            var srcFileType;
            var strInstanceDataFilePath;
            var self = this;
            if (htmlTemplatesDetailsFilesList.has(contentFileId))
                return 1;
            var newHtmlTemplateDetailsFileTransfer = self._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
            newHtmlTemplateDetailsFileTransfer.injectDependencies(null, self._aServiceLocator, null, null);
            srcFileType = "json";
            serialNumber = self._aPlaybackGlobalConfig._strSerialNumber;
            mediaId = aCrtHtmlTemplateFileTransfer.getMediaId();
            contentFileId = aCrtHtmlTemplateFileTransfer.getSrcFileId();
            shaFileValue = aCrtHtmlTemplateFileTransfer.getSrcShaFileValue();
            contentFileName = "";
            contentPlayerFileNameWithoutFileExtension = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
            contentPlayerFileNameWithoutFileExtension = self.getFileNameWithoutExtension(contentPlayerFileNameWithoutFileExtension);
            contentPlayerFileName = contentPlayerFileNameWithoutFileExtension +
                self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name1 +
                mediaId +
                self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name2;
            newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setStorage(self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder3.getStorage());
            newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setPath(self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder3.getPath() +
                mediaId +
                self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder4.getPath() +
                self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder5.getPath() +
                serialNumber);
            newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setName(contentFileName);
            newHtmlTemplateDetailsFileTransfer.setSrcShaFileValue(shaFileValue);
            newHtmlTemplateDetailsFileTransfer.setSrcFileType(srcFileType);
            newHtmlTemplateDetailsFileTransfer.setSrcFileId(contentFileId);
            newHtmlTemplateDetailsFileTransfer.setSrcShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getSrcFileInfo()));
            newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setStorage(aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getStorage());
            newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setPath(aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getPath());
            newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setName(contentPlayerFileName);
            newHtmlTemplateDetailsFileTransfer.setTmpShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));
            newHtmlTemplateDetailsFileTransfer.setComputedShaFileInfo(self.createComputedShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));
            newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setStorage(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage());
            newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setPath(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath());
            newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setName(contentPlayerFileName);
            newHtmlTemplateDetailsFileTransfer.setDstShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getDstFileInfo()));
            self._htmlTemplateInstanceDataFile = newHtmlTemplateDetailsFileTransfer;
            return 0;
        };
        RS_PlaylistDownloader.prototype.addHtmlTemplate_HtmlFeedDataFile = function (htmlTemplatesDetailsFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, aCrtHtmlTemplateFileTransfer, error, context, callback) {
            var self = this;
            var contentFileId;
            var contentFileName;
            var shaFileValue;
            var contentPlayerFileName;
            var contentPlayerFileNameWithoutFileExtension;
            var serialNumber;
            var srcFileType;
            var strInstanceDataFilePath;
            var self = this;
            if (htmlTemplatesDetailsFilesList.has(contentFileId))
                return 1;
            var newHtmlTemplateDetailsFileTransfer = self._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
            newHtmlTemplateDetailsFileTransfer.injectDependencies(null, self._aServiceLocator, null, null);
            srcFileType = "json";
            serialNumber = self._aPlaybackGlobalConfig._strSerialNumber;
            contentFileId = aCrtHtmlTemplateFileTransfer.getSrcFileId();
            shaFileValue = aCrtHtmlTemplateFileTransfer.getSrcShaFileValue();
            contentFileName = self._aPlaybackGlobalConfig._html_templates_local_html_feed_file_name;
            contentPlayerFileNameWithoutFileExtension = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
            contentPlayerFileNameWithoutFileExtension = self.getFileNameWithoutExtension(contentPlayerFileNameWithoutFileExtension);
            contentPlayerFileName = contentPlayerFileNameWithoutFileExtension +
                self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name1 +
                contentFileId +
                self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name2;
            var extraPath = contentFileId + "/";
            newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setStorage(self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder3.getStorage());
            newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setPath(self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder.getPath() +
                contentFileId +
                "/");
            newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setName(self._aPlaybackGlobalConfig._html_templates_remote_html_feed_file_name);
            newHtmlTemplateDetailsFileTransfer.setSrcShaFileValue(shaFileValue);
            newHtmlTemplateDetailsFileTransfer.setSrcFileType(srcFileType);
            newHtmlTemplateDetailsFileTransfer.setSrcFileId(contentFileId);
            newHtmlTemplateDetailsFileTransfer.setSrcShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getSrcFileInfo()));
            newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setStorage(aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getStorage());
            newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setPath(aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getPath() + extraPath);
            newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setName(self._aPlaybackGlobalConfig._html_templates_local_temporary_html_feed_file_name);
            newHtmlTemplateDetailsFileTransfer.setTmpShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));
            newHtmlTemplateDetailsFileTransfer.setComputedShaFileInfo(self.createComputedShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));
            newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setStorage(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage());
            newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setPath(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath);
            newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setName(self._aPlaybackGlobalConfig._html_templates_local_html_feed_file_name);
            newHtmlTemplateDetailsFileTransfer.setDstShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getDstFileInfo()));
            self._htmlTemplateFeedDataFile = newHtmlTemplateDetailsFileTransfer;
            return 0;
        };
        RS_PlaylistDownloader.prototype.getFileNameWithoutExtension = function (strFileName) {
            var extraPath = strFileName;
            if (extraPath.length >= 5) {
                extraPath = extraPath.substring(0, extraPath.length - 4);
            }
            return extraPath;
        };
        RS_PlaylistDownloader.prototype.getOnlyFileName = function (strFileName) {
            var onlyFileName = strFileName;
            var idx = strFileName.lastIndexOf('\\');
            if (idx != -1) {
                onlyFileName = onlyFileName.substring(idx + 1);
            }
            return onlyFileName;
        };
        RS_PlaylistDownloader.prototype.getOnlyPath = function (strFileName) {
            var onlyPath = strFileName;
            var idx = strFileName.lastIndexOf('\\');
            if (idx != -1) {
                onlyPath = onlyPath.substring(0, idx);
            }
            return onlyPath;
        };
        RS_PlaylistDownloader.prototype.addHtmlTemplate_MediaFile = function (aCrtHtmlTemplateFileTransfer, jsonObject, htmlTemplatesDetailsFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var contentFileId;
            var contentFileName;
            var shaFileValue;
            var contentPlayerFileName;
            var contentPlayerFileNameWithoutFileExtension;
            var serialNumber;
            var srcFileType;
            var strInstanceDataFilePath;
            var self = this;
            var newHtmlTemplateDetailsFileTransfer = self._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
            newHtmlTemplateDetailsFileTransfer.injectDependencies(null, self._aServiceLocator, null, null);
            srcFileType = "bin";
            serialNumber = self._aPlaybackGlobalConfig._strSerialNumber;
            contentFileId = aCrtHtmlTemplateFileTransfer.getSrcFileId();
            shaFileValue = jsonObject.ShaCode;
            var strKey = jsonObject.FilePath;
            var extraPath = contentFileId;
            var relativePath = jsonObject.FilePath;
            var detailExtraPath = self.getOnlyPath(relativePath);
            detailExtraPath = detailExtraPath.replace(/\\/g, "/");
            detailExtraPath = detailExtraPath + "/";
            var detailFileNameOnly = self.getOnlyFileName(relativePath);
            newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setStorage(self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder3.getStorage());
            newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setPath(self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder.getPath() +
                contentFileId + detailExtraPath);
            newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setName(detailFileNameOnly);
            newHtmlTemplateDetailsFileTransfer.setSrcShaFileValue(shaFileValue);
            newHtmlTemplateDetailsFileTransfer.setSrcFileType(srcFileType);
            newHtmlTemplateDetailsFileTransfer.setSrcFileId(contentFileId);
            newHtmlTemplateDetailsFileTransfer.setSrcShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getSrcFileInfo()));
            newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setStorage(aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getStorage());
            newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setPath(aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getPath() + extraPath + detailExtraPath);
            newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setName(detailFileNameOnly);
            newHtmlTemplateDetailsFileTransfer.setTmpShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));
            newHtmlTemplateDetailsFileTransfer.setComputedShaFileInfo(self.createComputedShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));
            newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setStorage(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage());
            newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setPath(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + detailExtraPath);
            newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setName(detailFileNameOnly);
            newHtmlTemplateDetailsFileTransfer.setDstShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getDstFileInfo()));
            newHtmlTemplateDetailsFileTransfer.setIgnoreErrors(true);
            newHtmlTemplateDetailsFileTransfer.setCheckSha(false);
            self._htmlTemplateDetailsTransferList.set(strKey, newHtmlTemplateDetailsFileTransfer);
            return 0;
        };
        RS_PlaylistDownloader.prototype.downloadHtmlTemplateDetailFiles_forOneHtmlTemplate = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            if (aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmlfeed") {
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);
            }
            var errorDownloadDetailFiles = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDownloadDetailFiles = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackDownloadDetailFiles = function callbackReadFeedFile(DownloadDetailFiles) {
                if (context != null) {
                    context.setError(error);
                    context.setBoolResult(true);
                    return callback(context);
                }
            };
            var bIgnoreErrors = true;
            self._aDownloadService._iDownloadMain.downloadFiles_fromMap(self._htmlTemplateDetailsTransferList, bIgnoreErrors, errorDownloadDetailFiles, contextDownloadDetailFiles, callbackDownloadDetailFiles);
        };
        RS_PlaylistDownloader.prototype.buildHtmlTemplateDetailFiles_forOneHtmlTemplate = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            if (aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmlfeed") {
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);
            }
            var errorReadFeedFile = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextReadFeedFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackReadFeedFile = function callbackReadFeedFile(ctxReadFeedFile) {
                if (ctxReadFeedFile.isError()) {
                    if (context != null) {
                        error.setError(503, "ERROR 505: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + ctxReadFeedFile._error + "]");
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "505: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [\"" + ctxReadFeedFile._error + "\"]", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "WARNING 699: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles - cannot read feed main file: [" + ctxReadFeedFile._error + "]";
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles - cannot read feed main file: [\" " + ctxReadFeedFile._error + " \"]", null, null, null);
                        }
                        context.setError(error);
                        context.setBoolResult(false);
                        return callback(context);
                    }
                    return;
                }
                var jsonString = ctxReadFeedFile._result;
                var jsonObject = null;
                try {
                    jsonObject = JSON.parse(jsonString);
                    for (var j = 0; j < jsonObject.length; j++) {
                        self.addHtmlTemplate_MediaFile(aCrtHtmlTemplateFileTransfer, jsonObject[j], aHtmlTemplateDetailFilesTransferList, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback);
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: readAndParseFeedFile...Ok", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: readAndParseFeedFile...Ok</p>";
                    }
                    if (context != null) {
                        context.setError(error);
                        context.setBoolResult(true);
                        return callback(context);
                    }
                }
                catch (e) {
                    if (context != null) {
                        error.setError(507, "ERROR 507: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + e.message + "]");
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "507: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [\"" + e.message + "\"]", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "ERROR 507: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + e.message.getErrMsg() + "]";
                        }
                        context.setError(error);
                        context.setBoolResult(false);
                        return callback(context);
                    }
                }
            };
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: readAndParseFeedFile...", null, null, null);
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: readAndParseFeedFile...</p>";
            }
            contextReadFeedFile.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.readTextFile2(self._htmlTemplateFeedDataFile.getDstFileInfo().getStorage(), self._htmlTemplateFeedDataFile.getDstFileInfo().getPath(), self._htmlTemplateFeedDataFile.getDstFileInfo().getName(), errorReadFeedFile, contextReadFeedFile, callbackReadFeedFile);
        };
        RS_PlaylistDownloader.prototype.buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate_Feed = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistFileTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            self.addHtmlTemplate_HtmlFeedDataFile(aHtmlTemplateMainFilesTransferList, aPlaylistFileTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, aCrtHtmlTemplateFileTransfer, error, context, callback);
            var errorCreateDstFilesFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCreateDstFilesFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackCreateDstFilesFolder = function callbackCreateDeleteMediaFilesTmpFolder(ctxDstFilesFolder) {
                var errorDownloadFeedFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextDownloadFeedFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackDownloadFeedFile = function callbackDownloadFeedFile(cxtDownloadFeedFile) {
                    if (cxtDownloadFeedFile.isError()) {
                        if (context != null) {
                            error.setError(510, "ERROR 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" + errorDownloadFeedFile + "]");
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [\"" + errorDownloadFeedFile + "\"]", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "WARNING 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" + errorDownloadFeedFile + "]";
                            }
                            context.setError(error);
                            context.setBoolResult(false);
                            return callback(context);
                        }
                        return;
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: downloadFeedFile:...Ok", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadFeedFile:...Ok</p>";
                    }
                    var errorDownloadFeedShaFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextDownloadFeedShaFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackDownloadFeedShaFile = function callbackDownloadFeedShaFile(cxtDownloadFeedFile) {
                        if (context != null) {
                            context.setError(error);
                            context.setBoolResult(true);
                            return callback(context);
                        }
                    };
                    contextDownloadFeedShaFile.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.downloadFile2(self._htmlTemplateFeedDataFile.getSrcShaFileInfo().getFullName(), self._htmlTemplateFeedDataFile.getDstShaFileInfo().getStorage(), self._htmlTemplateFeedDataFile.getDstShaFileInfo().getPath(), self._htmlTemplateFeedDataFile.getDstShaFileInfo().getName(), errorDownloadFeedShaFile, contextDownloadFeedShaFile, callbackDownloadFeedShaFile);
                };
                contextDownloadFeedFile.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.downloadFile2(self._htmlTemplateFeedDataFile.getSrcFileInfo().getFullName(), self._htmlTemplateFeedDataFile.getDstFileInfo().getStorage(), self._htmlTemplateFeedDataFile.getDstFileInfo().getPath(), self._htmlTemplateFeedDataFile.getDstFileInfo().getName(), errorDownloadFeedFile, contextDownloadFeedFile, callbackDownloadFeedFile);
            };
            contextCreateDstFilesFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.createFolder2(self._htmlTemplateFeedDataFile.getDstFileInfo().getStorage(), self._htmlTemplateFeedDataFile.getDstFileInfo().getPath(), errorCreateDstFilesFolder, contextCreateDstFilesFolder, callbackCreateDstFilesFolder);
        };
        RS_PlaylistDownloader.prototype.buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate_Instance = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistFileTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            self.addHtmlTemplate_HtmlInstanceDataFile(aHtmlTemplateMainFilesTransferList, aPlaylistFileTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, aCrtHtmlTemplateFileTransfer, error, context, callback);
            var errorDownloadInstanceFile = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDownloadInstanceFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackDownloadInstanceFile = function callbackDownloadInstanceFile(cxtDownloadInstanceFile) {
                if (cxtDownloadInstanceFile.isError()) {
                    if (context != null) {
                        error.setError(510, "ERROR 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" + errorDownloadInstanceFile.getErrMsg() + "]");
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [\"" + errorDownloadInstanceFile.getErrMsg() + "\"]", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "ERROR 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" + errorDownloadInstanceFile.getErrMsg() + "]";
                        }
                        context.setError(error);
                        context.setBoolResult(false);
                        return callback(context);
                    }
                    return;
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: downloadInstanceFile:...Ok", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadInstanceFile:...Ok</p>";
                }
                if (context != null) {
                    context.setError(error);
                    context.setBoolResult(true);
                    return callback(context);
                }
            };
            contextDownloadInstanceFile.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.downloadFile2(self._htmlTemplateInstanceDataFile.getSrcFileInfo().getFullName(), self._htmlTemplateInstanceDataFile.getDstFileInfo().getStorage(), self._htmlTemplateInstanceDataFile.getDstFileInfo().getPath(), self._htmlTemplateInstanceDataFile.getDstFileInfo().getName(), errorDownloadInstanceFile, contextDownloadInstanceFile, callbackDownloadInstanceFile);
        };
        RS_PlaylistDownloader.prototype.buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistFileTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            if (aCrtHtmlTemplateFileTransfer.getSrcFileType() == "htmlfeed") {
                return self.buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate_Feed(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistFileTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback);
            }
            if (aCrtHtmlTemplateFileTransfer.getSrcFileType() == "htmltemplate") {
                return self.buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate_Instance(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistFileTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback);
            }
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);
        };
        RS_PlaylistDownloader.prototype.unzipHtmlTemplateFile_forOneHtmlTemplate = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            if (aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmltemplate") {
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);
            }
            var extraPath = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
            extraPath = self.getFileNameWithoutExtension(extraPath);
            var unzipFolderName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
            var errorCreateTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCreateTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackCreateTmpFolder = function callbackCreateTmpFolder() {
                var errorUnzipFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextUnzipFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackUnzipFile = function callbackUnzipFile(ctxUnzipFile) {
                    if (ctxUnzipFile.isError()) {
                        if (context != null) {
                            error.setError(510, "ERROR 510: downloadPlaylistAndMediaFiles: unzipHtmlTemplate: [" + errorUnzipFile.getErrMsg() + "]");
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "810: downloadPlaylistAndMediaFiles: unzipHtmlTemplate: [\"" + errorUnzipFile.getErrMsg() + "\"]", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "ERROR 504: downloadPlaylistAndMediaFiles: unzipHtmlTemplate: ["
                                    + errorUnzipFile.getErrMsg() + "]";
                            }
                            context.setError(error);
                            context.setBoolResult(false);
                            return callback(context);
                        }
                        return;
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: unzipHtmlTemplate:...Ok", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: unzipHtmlTemplate:...Ok</p>";
                    }
                    if (context != null) {
                        context.setError(error);
                        context.setBoolResult(true);
                        return callback(context);
                    }
                };
                contextUnzipFile.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.unzipFile2(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage(), aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath(), aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName(), aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage(), unzipFolderName, errorUnzipFile, contextUnzipFile, callbackUnzipFile);
            };
            contextCreateTmpFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.createFolder2(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage(), unzipFolderName, errorCreateTmpFolder, contextCreateTmpFolder, callbackCreateTmpFolder);
        };
        RS_PlaylistDownloader.prototype.cleanHtmlTemplateMainAndDetailFiles_forOneHtmlTemplate = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            context.setError(error);
            context.setBoolResult(true);
            return callback(context);
            var self = this;
            var extraPath = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
            extraPath = self.getFileNameWithoutExtension(extraPath);
            var unzipFolderName = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
            var errorDeleteHtmlTemplateFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDeleteHtmlTemplateFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackDeleteHtmlTemplateFolder = function callbackDeleteHtmlTemplateFolder() {
                if (context != null) {
                    context.setError(error);
                    context.setBoolResult(true);
                    return callback(context);
                }
            };
            contextDeleteHtmlTemplateFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.deleteFolder2(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage(), unzipFolderName, errorDeleteHtmlTemplateFolder, contextDeleteHtmlTemplateFolder, callbackDeleteHtmlTemplateFolder);
        };
        RS_PlaylistDownloader.prototype.buildAndDownloadHtmlTemplateMainAndDetailFiles_forOneHtmlTemplate = function (aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            if ((aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmltemplate") && (aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmlfeed")) {
                context.setBoolResult(true);
                context.setError(error);
                return callback(context);
            }
            var errorCleanupHtmlTemplatesDetailsFiles = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCleanupHtmlTemplatesDetailsFiles = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackCleanupHtmlTemplatesDetailsFiles = function callbackCleanupHtmlTemplatesDetailsFiles(ctxCleanupHtmlTemplatesDetailsFiles) {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: cleanupHtmlTemplatesDetailsFiles:...Ok", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: cleanupHtmlTemplatesDetailsFiles...Ok</p>";
                }
                var errorUnzipHtmlTemplateFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextUnzipHtmlTemplateFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackUnzipHtmlTemplateFile = function callbackUnzipHtmlTemplateFile(ctxUnzipHtmlTemplateFile) {
                    if (ctxUnzipHtmlTemplateFile.isError()) {
                        if (context != null) {
                            error.setError(503, "ERROR 503: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + errorUnzipHtmlTemplateFile.getErrMsg() + "]");
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "503: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [\"" + errorUnzipHtmlTemplateFile.getErrMsg() + "\"]", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "ERROR 504: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: ["
                                    + errorUnzipHtmlTemplateFile.getErrMsg() + "]";
                            }
                            context.setError(error);
                            context.setBoolResult(false);
                            return callback(context);
                        }
                        return;
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: unzipHtmlTemplateFile_forOneHtmlTemplate:...Ok", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: unzipHtmlTemplateFile_forOneHtmlTemplate...Ok</p>";
                    }
                    var errorBuildAndDownloadMainFiles = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextBuildAndDownloadMainFiles = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackBuildAndDownloadMainFiles = function callbackBuildAndDownloadMainFiles(ctxBuildAndDownloadMainFiles) {
                        if (ctxBuildAndDownloadMainFiles.isError()) {
                            if (context != null) {
                                error.setError(503, "ERROR 504: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + errorBuildAndDownloadMainFiles.getErrMsg() + "]");
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "503: downloadPlaylistAndMediaFiles: errorBuildAndDownloadMainFiles: [\"" + errorBuildAndDownloadMainFiles.getErrMsg() + "\"]", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "ERROR 504: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: ["
                                        + errorBuildAndDownloadMainFiles.getErrMsg() + "]";
                                }
                                context.setError(error);
                                context.setBoolResult(false);
                                return callback(context);
                            }
                            return;
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate:...Ok", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate...Ok</p>";
                        }
                        var errorBuildDetailsFiles = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextBuildDetailsFiles = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var callbackBuildDetailsFiles = function callbackBuildDetailsFiles(ctxBuildDetailsFiles) {
                            if (ctxBuildDetailsFiles.isError()) {
                                if (context != null) {
                                    error.setError(503, "ERROR 504: downloadPlaylistAndMediaFiles: errorBuildDetailsFiles: [" + errorBuildDetailsFiles.getErrMsg() + "]");
                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "503: downloadPlaylistAndMediaFiles: errorBuildDetailsFiles: [\"" + errorBuildDetailsFiles.getErrMsg() + "\"]", null, null, null);
                                    if (self._debug) {
                                        document.getElementById("rend.message").innerHTML += "ERROR 504: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: ["
                                            + errorBuildDetailsFiles.getErrMsg() + "]";
                                    }
                                    context.setError(error);
                                    context.setBoolResult(false);
                                    return callback(context);
                                }
                                return;
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildHtmlTemplateDetailFiles_forOneHtmlTemplate:...Ok", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildHtmlTemplateDetailFiles_forOneHtmlTemplate...Ok</p>";
                            }
                            var errorDownloadDetailsFiles = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextDownloadDetailsFiles = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            var callbackDownloadDetailsFiles = function callbackDownloadDetailsFiles(ctxDownloadDetailsFiles) {
                                if (ctxDownloadDetailsFiles.isError()) {
                                    if (context != null) {
                                        error.setError(505, "ERROR 505: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + errorDownloadDetailsFiles.getErrMsg() + "]");
                                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "503: downloadPlaylistAndMediaFiles: errorBuildDetailsFiles: [\"" + errorBuildDetailsFiles.getErrMsg() + "\"]", null, null, null);
                                        if (self._debug) {
                                            document.getElementById("rend.message").innerHTML += "ERROR 505: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: ["
                                                + errorDownloadDetailsFiles.getErrMsg() + "]";
                                        }
                                        context.setError(error);
                                        context.setBoolResult(false);
                                        return callback(context);
                                    }
                                    return;
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: downloadHtmlTemplateDetailFiles_forOneHtmlTemplate:...Ok", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadHtmlTemplateDetailFiles_forOneHtmlTemplate...Ok</p>";
                                }
                                var errorApplyCorrectiveJs = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextApplyCorrectiveJs = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                var callbackApplyCorrectiveJs = function callbackApplyCorrectiveJs(ctxApplyCorrectiveJs) {
                                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate...", null, null, null);
                                    if (self._debug) {
                                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate...</p>";
                                    }
                                    if (context != null) {
                                        context.setError(error);
                                        context.setBoolResult(true);
                                        return callback(context);
                                    }
                                    return;
                                };
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate...", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate...</p>";
                                }
                                contextApplyCorrectiveJs.setRemoteCallback(true);
                                self.applyCorrectiveJs_forOneHtmlTemplate(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorApplyCorrectiveJs, contextApplyCorrectiveJs, callbackApplyCorrectiveJs);
                            };
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: downloadHtmlTemplateDetailFiles_forOneHtmlTemplate...", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadHtmlTemplateDetailFiles_forOneHtmlTemplate...</p>";
                            }
                            contextDownloadDetailsFiles.setRemoteCallback(true);
                            self.downloadHtmlTemplateDetailFiles_forOneHtmlTemplate(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorDownloadDetailsFiles, contextDownloadDetailsFiles, callbackDownloadDetailsFiles);
                        };
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildHtmlTemplateDetailFiles_forOneHtmlTemplate...", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildHtmlTemplateDetailFiles_forOneHtmlTemplate...</p>";
                        }
                        contextBuildDetailsFiles.setRemoteCallback(true);
                        self.buildHtmlTemplateDetailFiles_forOneHtmlTemplate(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorBuildDetailsFiles, contextBuildDetailsFiles, callbackBuildDetailsFiles);
                    };
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate...", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate...</p>";
                    }
                    contextBuildAndDownloadMainFiles.setRemoteCallback(true);
                    self.buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorBuildAndDownloadMainFiles, contextBuildAndDownloadMainFiles, callbackBuildAndDownloadMainFiles);
                };
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: unzipHtmlTemplateFile_forOneHtmlTemplate...", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: unzipHtmlTemplateFile_forOneHtmlTemplate...</p>";
                }
                contextUnzipHtmlTemplateFile.setRemoteCallback(true);
                self.unzipHtmlTemplateFile_forOneHtmlTemplate(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorUnzipHtmlTemplateFile, contextUnzipHtmlTemplateFile, callbackUnzipHtmlTemplateFile);
            };
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: cleanupHtmlTemplatesDetailsFiles...", null, null, null);
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: cleanupHtmlTemplatesDetailsFiles...</p>";
            }
            contextCleanupHtmlTemplatesDetailsFiles.setRemoteCallback(true);
            self.cleanHtmlTemplateMainAndDetailFiles_forOneHtmlTemplate(aCrtHtmlTemplateFileTransfer, aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorCleanupHtmlTemplatesDetailsFiles, contextCleanupHtmlTemplatesDetailsFiles, callbackCleanupHtmlTemplatesDetailsFiles);
        };
        RS_PlaylistDownloader.prototype.buildAndDownloadAllHtmlTemplatesMainAndDetailFiles_fromMap = function (transferMediaFiles, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var transferMediaFilesArray = Array.from(transferMediaFiles.values());
            return this.buildAndDownloadAllHtmlTemplatesMainAndDetailFiles_fromArray(transferMediaFilesArray, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback);
        };
        RS_PlaylistDownloader.prototype.buildAndDownloadAllHtmlTemplatesMainAndDetailFiles_fromArray = function (transferMediaFiles, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var nbFiles = transferMediaFiles.length;
            var startFileIdx = 0;
            var callbackDownloadOneFile = function callbackDownloadOneFile(crtFileIdx, ctx1) {
                if (crtFileIdx + 1 > nbFiles) {
                    context.setBoolResult(true);
                    console.log("Successfully downloaded all xml files");
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                var crtFileTransfer = transferMediaFiles[crtFileIdx];
                var fileFullName = "";
                var callbackDownloadFile = function callbackDownloadFile(ctx2) {
                    var downloadFileWell = ctx2.getBoolResult();
                    if (!downloadFileWell) {
                        context.setError(error);
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    console.log('Succesfuly downloaded one file ' + fileFullName);
                    return callbackDownloadOneFile(++crtFileIdx, ctx2);
                };
                self._htmlTemplateMainTransferList = new Map();
                self._htmlTemplateDetailsTransferList = new Map();
                self.buildAndDownloadHtmlTemplateMainAndDetailFiles_forOneHtmlTemplate(crtFileTransfer, self._htmlTemplateMainTransferList, self._htmlTemplateDetailsTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, ctx1, callbackDownloadFile);
            };
            callbackDownloadOneFile(startFileIdx, context);
        };
        RS_PlaylistDownloader.prototype.downloadHtmlTemplatesFilesList = function (playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var bIgnoreErrors = false;
            return this._aDownloadService._iDownloadMain.downloadFiles_fromMap(this._htmlTemplatesTransferList, bIgnoreErrors, error, context, callback);
        };
        RS_PlaylistDownloader.prototype.buildAndDownloadHtmlTemplatesFilesList = function (playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var errorDownloadHtmlTemplatesFilesList = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDownloadHtmlTemplatesFilesList = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackDownloadHtmlTemplatesFilesList = function callbackDownloadHtmlTemplatesFiles(ctxDownloadHtmlTemplatesFilesList) {
                if (ctxDownloadHtmlTemplatesFilesList.isError()) {
                    if (context != null) {
                        error.setError(501, "ERROR 501: downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList: [" + errorDownloadHtmlTemplatesFilesList.getErrMsg() + "]");
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "501: downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList: [\"" + errorDownloadHtmlTemplatesFilesList.getErrMsg() + "\"]", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "ERROR 501: downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList: ["
                                + errorDownloadHtmlTemplatesFilesList.getErrMsg() + "]";
                        }
                        context.setError(error);
                        context.setBoolResult(false);
                        return callback(context);
                    }
                    return;
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList...", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList...OK</p>";
                }
                var errorBuildAndDownloadDetailFiles = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextBuildAndDownloadDetailFiles = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackBuildAndDownloadDetailFiles = function callbackBuildAndDownloadDetailFiles(ctxBuildAndDownloadDetailFiles) {
                    if (ctxBuildAndDownloadDetailFiles.isError()) {
                        if (context != null) {
                            error.setError(503, "ERROR 503: downloadPlaylistAndMediaFiles: errorBuildAndDownloadDetailFiles: [" + errorBuildAndDownloadDetailFiles.getErrMsg() + "]");
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "503: downloadPlaylistAndMediaFiles: errorBuildAndDownloadDetailFiles: [\"" + errorBuildAndDownloadDetailFiles.getErrMsg() + "\"]", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "ERROR 503: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: ["
                                    + errorBuildAndDownloadDetailFiles.getErrMsg() + "]";
                            }
                            context.setError(error);
                            context.setBoolResult(false);
                            return callback(context);
                        }
                        return;
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildAndDownloadAllHtmlTemplatesDetailFiles...", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadAllHtmlTemplatesDetailFiles...OK</p>";
                    }
                    if (context != null) {
                        context.setError(error);
                        context.setBoolResult(true);
                        return callback(context);
                    }
                    return;
                };
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildAndDownloadAllHtmlTemplatesDetailFiles...", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadAllHtmlTemplatesDetailFiles...</p>";
                }
                contextBuildAndDownloadDetailFiles.setRemoteCallback(true);
                self.buildAndDownloadAllHtmlTemplatesMainAndDetailFiles_fromMap(self._htmlTemplatesTransferList, playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorBuildAndDownloadDetailFiles, contextBuildAndDownloadDetailFiles, callbackBuildAndDownloadDetailFiles);
            };
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFilesList...", null, null, null);
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFilesList...</p>";
            }
            contextDownloadHtmlTemplatesFilesList.setRemoteCallback(true);
            self.downloadHtmlTemplatesFilesList(playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorDownloadHtmlTemplatesFilesList, contextDownloadHtmlTemplatesFilesList, callbackDownloadHtmlTemplatesFilesList);
        };
        RS_PlaylistDownloader.prototype.downloadPlaylist = function (playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var aPlaylistSrcFile = aPlaylistTransferFile.getSrcFileInfo();
            var aPlaylistTmpFile = aPlaylistTransferFile.getTmpFileInfo();
            var aPlaylistShaSrcFile = aPlaylistTransferFile.getSrcShaFileInfo();
            var aPlaylistShaTmpFile = aPlaylistTransferFile.getTmpShaFileInfo();
            var aPlaylistShaCrtDstFile = aPlaylistTransferFile.getDstShaFileInfo();
            var aPlaylistComputedShaTmpFile = aPlaylistTransferFile.getComputedShaFileInfo();
            var errorDownloadPlaylist = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDownloadPlaylist = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackDownloadPlaylist = function callbackDownloadPlaylist(ctx1) {
                var errorDownloadPlaylistSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextDownloadPlaylistSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                if (ctx1.isError()) {
                    if (error != null) {
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), ctx1.getError().getErrId() + ": downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList: [\"" + ctx1.getError().getErrMsg() + "\"]", null, null, null);
                    }
                    if (context != null) {
                        context.setError(error);
                        return callback(context);
                    }
                    return;
                }
                var callbackDownloadPlaylistSha = function callbackDownloadPlaylistSha(ctx2) {
                    var errorComputeSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextComputeSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var shaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);
                    shaProperties.setSrcFileInfo(aPlaylistTmpFile);
                    shaProperties.setShaFileInfo(aPlaylistComputedShaTmpFile);
                    var callbackComputeSha = function callbackComputeSha(ctx3) {
                        var shaComputeFile = ctx3.getResult();
                        var errorReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4) {
                            var shaDownloadedFile = ctx4.getResult();
                            var downloadPlaylistWell = true;
                            if (context != null) {
                                if (ctx4.isError()) {
                                    downloadPlaylistWell = false;
                                }
                                else {
                                    downloadPlaylistWell = true;
                                    if (aPlaylistTransferFile.isTheSameShaValue(shaComputeFile, shaDownloadedFile))
                                        downloadPlaylistWell = true;
                                }
                                context.setBoolResult(downloadPlaylistWell);
                                context.setError(error);
                                return callback(context);
                            }
                        };
                        contextReadTmpShaFile.setRemoteCallback(true);
                        self._aSDKService._iSDKFileSystem.readTextFile2(aPlaylistShaTmpFile.getStorage(), aPlaylistShaTmpFile.getPath(), aPlaylistShaTmpFile.getName(), errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);
                    };
                    contextComputeSha.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, errorComputeSha, contextComputeSha, callbackComputeSha);
                };
                contextDownloadPlaylistSha.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.downloadFile2(aPlaylistShaSrcFile.getFullName(), aPlaylistShaTmpFile.getStorage(), aPlaylistShaTmpFile.getPath(), aPlaylistShaTmpFile.getName(), errorDownloadPlaylistSha, contextDownloadPlaylistSha, callbackDownloadPlaylistSha);
            };
            contextDownloadPlaylist.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.downloadFile2(aPlaylistSrcFile.getFullName(), aPlaylistTmpFile.getStorage(), aPlaylistTmpFile.getPath(), aPlaylistTmpFile.getName(), errorDownloadPlaylist, contextDownloadPlaylist, callbackDownloadPlaylist);
        };
        RS_PlaylistDownloader.prototype.buildMediaFilesListToDownload = function (playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            self._fileTransferList = new Map();
            self._htmlTemplatesTransferList = new Map();
            var jsonPlaylist;
            var jsonPlaylistString;
            var aTmpPlayFile = aPlaylistTransferFile.getTmpFileInfo();
            var callbackLoadPlaylist = function callbackLoadPlaylist(ctxLoad) {
                if (ctxLoad.isError()) {
                    if (callback != null) {
                        if (error != null) {
                            error.setError(ctxLoad.getError().getErrId(), "buildMediaFilesListToDownload - Error loading the playlist" + ctxLoad.getError().getErrMsg());
                            self._aActivityLogService._IActivityLogServiceMessaging
                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), ctxLoad.getError().getErrId() + ": buildMediaFilesListToDownload - Error loading the playlist: [\"" + ctxLoad.getError().getErrMsg() + "\"]", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>ERROR 11112: buildMediaFilesListToDownload - Error loading the playlist"
                                    + ctxLoad.getError().getErrMsg() + "</p>";
                            }
                            if (context != null)
                                context.setError(error);
                        }
                        return callback(context);
                    }
                }
                var errorBuildMediaFilesList = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextBuildMediaFilesList = self._aServiceLocator._iEntityCreation.createDefaultContext();
                jsonPlaylistString = ctxLoad._result;
                jsonPlaylist = null;
                try {
                    jsonPlaylist = JSON.parse(jsonPlaylistString);
                    var callbackBuildMediaFilesList = function callbackBuildMediaFilesList(ctxBuild) {
                        if (callback != null) {
                            return callback(context);
                        }
                    };
                    self._iPlaylistDownloaderBuilderMoodV5.loadMediaFilesList(playlistType, jsonPlaylist, self._fileTransferList, self._htmlTemplatesTransferList, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorBuildMediaFilesList, contextBuildMediaFilesList, callbackBuildMediaFilesList);
                }
                catch (e) {
                    if (callback != null) {
                        if (error != null) {
                            error.setError(11111, "ERROR 12113: buildMediaFilesListToDownload - Error Parsing Json" + e.message);
                            self._aActivityLogService._IActivityLogServiceMessaging
                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), ": buildMediaFilesListToDownload - Error loading the playlist: [\"" + e.message + "\"]", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>ERROR 12113: buildMediaFilesListToDownload - Error Parsing Json" + e.message + "</p>";
                            }
                            if (context != null)
                                context.setError(error);
                        }
                        return callback(context);
                    }
                }
            };
            context.setRemoteCallback(true);
            this._aSDKService._iSDKFileSystem.readTextFile2(aTmpPlayFile.getStorage(), aTmpPlayFile.getPath(), aTmpPlayFile.getName(), error, context, callbackLoadPlaylist);
        };
        RS_PlaylistDownloader.prototype.downloadMediaFilesList = function (playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var bIgnoreErrors = false;
            return this._aDownloadService._iDownloadMain.downloadFiles_fromMap(this._fileTransferList, bIgnoreErrors, error, context, callback);
        };
        RS_PlaylistDownloader.prototype.hasNewPlaylist = function (playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var self = this;
            var aPlaylistDstFile = aPlaylistTransferFile.getDstFileInfo();
            var aPlaylistSrcFile = aPlaylistTransferFile.getSrcFileInfo();
            var aPlaylistTmpFile = aPlaylistTransferFile.getTmpFileInfo();
            var aPlaylistShaSrcFile = aPlaylistTransferFile.getSrcShaFileInfo();
            var aPlaylistShaTmpFile = aPlaylistTransferFile.getTmpShaFileInfo();
            var aPlaylistShaCrtDstFile = aPlaylistTransferFile.getDstShaFileInfo();
            var aPlaylistComputedShaTmpFile = aPlaylistTransferFile.getComputedShaFileInfo();
            var errorNotExistsPlaylist = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextNotExistsPlaylist = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackNotExistsPlaylist = function callbackNotExistsPlaylist(ctx0) {
                var bExistsFile = false;
                if (ctx0 != null)
                    bExistsFile = ctx0.getBoolResult();
                if (!bExistsFile) {
                    var hasNewPlaylistOnExistsFile = true;
                    if (context != null) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: PLAYLIST NOT EXISTS : TRUE", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: PLAYLIST NOT EXISTS : TRUE</p>";
                        }
                        context.setError(error);
                        context.setBoolResult(hasNewPlaylistOnExistsFile);
                        return callback(context);
                    }
                    return;
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: PLAYLIST EXISTS : TRUE", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: PLAYLIST EXISTS : TRUE</p>";
                }
                var errorDownloadPlaylist = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextDownloadPlaylist = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackDownloadPlaylist = function callbackDownloadPlaylist(ctx1) {
                    if (ctx1.isError()) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: : downloadPlaylistSha: [" + ctx1.getError().getErrMsg() + "]", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>ERROR 4890: hasNewPlaylist: : downloadPlaylistSha: [" + ctx1.getError().getErrMsg() + "]</p>";
                        }
                        if (error != null)
                            error.setError(4890, "ERROR 4889: hasNewPlaylist: : downloadPlaylist: [" + ctx1.getError().getErrMsg() + "]");
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "4890: hasNewPlaylist: : downloadPlaylist: [\"" + ctx1.getError().getErrMsg() + "\"]", null, null, null);
                        if (context != null) {
                            context.setError(error);
                            return callback(context);
                        }
                        return;
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: downloadPlaylist...OK", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: downloadPlaylist...OK</p>";
                    }
                    var errorDownloadPlaylistSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextDownloadPlaylistSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackDownloadPlaylistSha = function callbackDownloadPlaylistSha(ctx2) {
                        if (ctx2.isError()) {
                            var hasNewPlaylist = false;
                            if (context != null) {
                                error.setError(4890, "ERROR 4890: hasNewPlaylist: : downloadPlaylistSha: [" + ctx2.getError().getErrMsg() + "]");
                                self._aActivityLogService._IActivityLogServiceMessaging
                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "4890: hasNewPlaylist: : downloadPlaylistSha: [\"" + ctx2.getError().getErrMsg() + "\"]", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>ERROR 4890: hasNewPlaylist: downloadPlaylistSha : [" + ctx2.getError().getErrMsg() + "]";
                                }
                                context.setError(error);
                                context.setBoolResult(hasNewPlaylist);
                                return callback(context);
                            }
                            return;
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: downloadPlaylistSha...OK", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: downloadPlaylistSha...OK</p>";
                        }
                        var errorComputeSha = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextComputeSha = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var shaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);
                        shaProperties.setSrcFileInfo(aPlaylistTmpFile);
                        shaProperties.setShaFileInfo(aPlaylistComputedShaTmpFile);
                        var callbackComputeSha = function callbackComputeSha(ctx3) {
                            if (ctx3.isError()) {
                                var hasNewPlaylist = false;
                                if (context != null) {
                                    error.setError(4891, "--> ERROR 4891: hasNewPlaylist: : error compute sha: [" + ctx3.getError().getErrMsg() + "]");
                                    self._aActivityLogService._IActivityLogServiceMessaging
                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "4890: hasNewPlaylist: : error compute sha: [\"" + ctx3.getError().getErrMsg() + "\"]", null, null, null);
                                    if (self._debug) {
                                        document.getElementById("rend.message").innerHTML += "<p>ERROR 4891: hasNewPlaylist: computeShaFile : error compute sha: ["
                                            + ctx3.getError().getErrMsg() + "]";
                                    }
                                    context.setError(error);
                                    context.setBoolResult(hasNewPlaylist);
                                    return callback(context);
                                }
                                return;
                            }
                            var computeShaFile = ctx3.getResult();
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: computeShaFile: " + computeShaFile, null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: computeShaFile...OK</p>";
                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: computeShaFile: " + computeShaFile + "</p>";
                            }
                            var errorReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextReadTmpShaFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4) {
                                if (ctx4.isError()) {
                                    var hasNewPlaylist = false;
                                    if (context != null) {
                                        error.setError(4892, "--> ERROR 4892: hasNewPlaylist: readTmpShaFile : [" + ctx4.getError().getErrMsg() + "]");
                                        self._aActivityLogService._IActivityLogServiceMessaging
                                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "4892: hasNewPlaylist: readTmpShaFile: [\"" + ctx3.getError().getErrMsg() + "\"]", null, null, null);
                                        if (self._debug) {
                                            document.getElementById("rend.message").innerHTML += "<p>ERROR 4892: hasNewPlaylist: readTmpShaFile : ["
                                                + ctx4.getError().getErrMsg() + "]";
                                        }
                                        context.setError(error);
                                        context.setBoolResult(hasNewPlaylist);
                                        return callback(context);
                                    }
                                    return;
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: readTmpShaFile...OK", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: readTmpShaFile...OK</p>";
                                }
                                var shaDownloadedFile = ctx4.getResult();
                                var errorReadShaCrtDstFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextReadShaCrtDstFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                var callbackReadShaCrtDstFile = function callbackReadShaCrtDstFile(ctx5) {
                                    var hasNewPlaylist2 = false;
                                    if (context != null) {
                                        if (ctx5.isError()) {
                                            hasNewPlaylist2 = true;
                                            context.setBoolResult(hasNewPlaylist2);
                                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: readCrtDstShaFile : no current playlist sha file...OK", null, null, null);
                                            if (self._debug) {
                                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: readCrtDstShaFile : no current playlist sha file...OK</p>";
                                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: TRUE</p>";
                                            }
                                        }
                                        else {
                                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: readCrtDstShaFile...OK", null, null, null);
                                            if (self._debug) {
                                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: readCrtDstShaFile...OK</p>";
                                            }
                                            var shaCrtFile = ctx5.getResult();
                                            var b1 = aPlaylistTransferFile.isTheSameShaValue(shaCrtFile, shaDownloadedFile);
                                            var b2 = aPlaylistTransferFile.isTheSameShaValue(shaCrtFile, computeShaFile);
                                            if (b2) {
                                                hasNewPlaylist2 = false;
                                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: FALSE", null, null, null);
                                                if (self._debug) {
                                                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: FALSE</p>";
                                                }
                                            }
                                            else {
                                                hasNewPlaylist2 = true;
                                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: TRUE", null, null, null);
                                                if (self._debug) {
                                                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: TRUE</p>";
                                                }
                                            }
                                        }
                                        context.setBoolResult(hasNewPlaylist2);
                                        context.setError(error);
                                        return callback(context);
                                    }
                                };
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: readCrtDstShaFile...", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: readCrtDstShaFile...</p>";
                                }
                                contextReadShaCrtDstFile.setRemoteCallback(true);
                                self._aSDKService._iSDKFileSystem.readTextFile2(aPlaylistShaCrtDstFile.getStorage(), aPlaylistShaCrtDstFile.getPath(), aPlaylistShaCrtDstFile.getName(), errorReadShaCrtDstFile, contextReadShaCrtDstFile, callbackReadShaCrtDstFile);
                            };
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: readTmpShaFile...", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: readTmpShaFile...</p>";
                            }
                            contextReadTmpShaFile.setRemoteCallback(true);
                            self._aSDKService._iSDKFileSystem.readTextFile2(aPlaylistShaTmpFile.getStorage(), aPlaylistShaTmpFile.getPath(), aPlaylistShaTmpFile.getName(), errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);
                        };
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: computeFileSha....", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: computeFileSha...</p>";
                        }
                        contextComputeSha.setRemoteCallback(true);
                        self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, errorComputeSha, contextComputeSha, callbackComputeSha);
                    };
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: downloadPlaylistSha...", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: downloadPlaylistSha...</p>";
                    }
                    contextDownloadPlaylistSha.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.downloadFile2(aPlaylistShaSrcFile.getFullName(), aPlaylistShaTmpFile.getStorage(), aPlaylistShaTmpFile.getPath(), aPlaylistShaTmpFile.getName(), errorDownloadPlaylistSha, contextDownloadPlaylistSha, callbackDownloadPlaylistSha);
                };
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: downloadPlaylist...", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: downloadPlaylist...</p>";
                }
                contextDownloadPlaylist.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.downloadFile2(aPlaylistSrcFile.getFullName(), aPlaylistTmpFile.getStorage(), aPlaylistTmpFile.getPath(), aPlaylistTmpFile.getName(), errorDownloadPlaylist, contextDownloadPlaylist, callbackDownloadPlaylist);
            };
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist: test notExistsPlaylist..", null, null, null);
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: test notExistsPlaylist...</p>";
            }
            contextNotExistsPlaylist.setRemoteCallback(true);
            this._aSDKService._iSDKFileSystem.fileExists2(aPlaylistDstFile.getStorage(), aPlaylistDstFile.getPath(), aPlaylistDstFile.getName(), errorNotExistsPlaylist, contextNotExistsPlaylist, callbackNotExistsPlaylist);
        };
        RS_PlaylistDownloader.prototype.cleanupCurrentHtmlTemplatesFiles = function (playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var aHtmlTemplatesTmpFolder = aHtmlTemplatesFilesTransferFileBase.getTmpFileInfo();
            var errorDeleteHtmlTemplatesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDeleteHtmlTemplatesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackDeleteHtmlTemplatesTmpFolder = function callbackDeleteHtmlTemplatesTmpFolder(ctx1) {
                var errorCreateHtmlTemplatesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreateHtmlTemplatesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCreateHtmlTemplatesTmpFolder = function callbackCreateHtmlTemplatesTmpFolder(ctx2) {
                    if (context != null) {
                        context.setError(error);
                        return callback(context);
                    }
                    return;
                };
                contextCreateHtmlTemplatesTmpFolder.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.createFolder2(aHtmlTemplatesTmpFolder.getStorage(), aHtmlTemplatesTmpFolder.getPath(), errorCreateHtmlTemplatesTmpFolder, contextCreateHtmlTemplatesTmpFolder, callbackCreateHtmlTemplatesTmpFolder);
            };
            contextDeleteHtmlTemplatesTmpFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.deleteFolder2(aHtmlTemplatesTmpFolder.getStorage(), aHtmlTemplatesTmpFolder.getPath(), errorDeleteHtmlTemplatesTmpFolder, contextDeleteHtmlTemplatesTmpFolder, callbackDeleteHtmlTemplatesTmpFolder);
        };
        RS_PlaylistDownloader.prototype.cleanupCurrentPlaylist = function (aPlaylistTransferFile, error, context, callback) {
            var self = this;
            var aPlaylistTmpFolder = aPlaylistTransferFile.getTmpFileInfo();
            var callbackDeletePlaylistTmpFolder = function callbackDeletePlaylistTmpFolder(ctx1) {
                var callbackCreatePlaylistTmpFolder = function callbackCreatePlaylistTmpFolder(ctx2) {
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                var errorCreatePlaylistTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreatePlaylistTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextCreatePlaylistTmpFolder.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.createFolder2(aPlaylistTmpFolder.getStorage(), aPlaylistTmpFolder.getPath(), errorCreatePlaylistTmpFolder, contextCreatePlaylistTmpFolder, callbackCreatePlaylistTmpFolder);
            };
            var errorDeletePlaylistTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDeletePlaylistTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextDeletePlaylistTmpFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.deleteFolder2(aPlaylistTmpFolder.getStorage(), aPlaylistTmpFolder.getPath(), errorDeletePlaylistTmpFolder, contextDeletePlaylistTmpFolder, callbackDeletePlaylistTmpFolder);
        };
        RS_PlaylistDownloader.prototype.cleanupCurrentPlaylistAndMediaFiles = function (playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var aPlaylistTmpFolder = aPlaylistTransferFile.getTmpFileInfo();
            var aMediaFilesTmpFolder = aMediaFilesTransferFileBase.getTmpFileInfo();
            var errorDeleteMediaFilesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDeleteMediaFilesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackDeleteMediaFilesTmpFolder = function callbackDeleteMediaFilesTmpFolder(ctx1) {
                var errorCreateMediaFilesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreateMediaFilesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCreateMediaFilesTmpFolder = function callbackCreateMediaFilesTmpFolder(ctx2) {
                    var errorCreateHtmlTemplatesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextCreateHtmlTemplatesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackCreateHtmlTemplatesTmpFolder = function callbackCreateHtmlTemplatesTmpFolder(ctx3) {
                        if (context != null) {
                            context.setError(error);
                            return callback(context);
                        }
                        return;
                    };
                    contextCreateHtmlTemplatesTmpFolder.setRemoteCallback(true);
                    self.cleanupCurrentHtmlTemplatesFiles(playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorCreateHtmlTemplatesTmpFolder, contextCreateHtmlTemplatesTmpFolder, callbackCreateHtmlTemplatesTmpFolder);
                };
                contextCreateMediaFilesTmpFolder.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.createFolder2(aMediaFilesTmpFolder.getStorage(), aMediaFilesTmpFolder.getPath(), errorCreateMediaFilesTmpFolder, contextCreateMediaFilesTmpFolder, callbackCreateMediaFilesTmpFolder);
            };
            contextDeleteMediaFilesTmpFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.deleteFolder2(aMediaFilesTmpFolder.getStorage(), aMediaFilesTmpFolder.getPath(), errorDeleteMediaFilesTmpFolder, contextDeleteMediaFilesTmpFolder, callbackDeleteMediaFilesTmpFolder);
        };
        RS_PlaylistDownloader.prototype.downloadPlaylistAndMediaFiles = function (playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var errorDownloadPlaylist = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDownloadPlaylist = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackDownloadPlaylist = function callbackDownloadPlaylist(ctxDownloadPlaylist) {
                var downloadPlaylistWell = ctxDownloadPlaylist.getBoolResult(downloadPlaylistWell);
                if (!downloadPlaylistWell) {
                    if (context != null) {
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>ERROR 486: downloadPlaylistAndMediaFiles: DownloadPlaylist - Error while download the Playlist</p>";
                        }
                        error.setError(486, "<p>ERROR 486: downloadPlaylistAndMediaFiles: Download Playlist - Error while download the Playlist</p>");
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "486: downloadPlaylistAndMediaFiles: Download Playlist - Error while download the Playlist", null, null, null);
                        context.setError(error);
                        context.setBoolResult(false);
                        return callback(context);
                    }
                    return;
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: DownloadPlaylist...OK", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: DownloadPlaylist...OK</p>";
                }
                var errorBuild = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextBuild = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackBuild = function callbackBuild(ctxBuild) {
                    if (ctxDownloadPlaylist.isError()) {
                        if (context != null) {
                            error.setError(487, "ERROR 487: downloadPlaylistAndMediaFiles - Error Building the Media Files List to Download: [" + errorBuild.getErrMsg() + "]");
                            self._aActivityLogService._IActivityLogServiceMessaging
                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "487: downloadPlaylistAndMediaFiles - Error Building the Media Files List to Download: [" + errorBuild.getErrMsg() + "]", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML +=
                                    "ERROR 487: downloadPlaylistAndMediaFiles: - Error Building the Media Files List to Download: [" + errorBuild.getErrMsg() + "]";
                            }
                            context.setError(error);
                            context.setBoolResult(false);
                            return callback(context);
                        }
                        return;
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...OK", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...OK</p>";
                    }
                    var errorDownloadMediaFiles = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextDownloadMediaFiles = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackDownloadMediaFiles = function callbackDownloadMediaFiles(ctxDownloadMediaFiles) {
                        if (ctxDownloadMediaFiles.isError()) {
                            if (context != null) {
                                error.setError(482, "ERROR 482: downloadPlaylistAndMediaFiles: downloadMediaFilesList: [" + errorDownloadMediaFiles.getErrMsg() + "]");
                                self._aActivityLogService._IActivityLogServiceMessaging
                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "482: downloadPlaylistAndMediaFiles: downloadMediaFilesList: [" + errorDownloadMediaFiles.getErrMsg() + "]", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "ERROR 482: downloadPlaylistAndMediaFiles: downloadMediaFilesList: [" + errorDownloadMediaFiles.getErrMsg() + "]";
                                }
                                context.setError(error);
                                context.setBoolResult(false);
                                return callback(context);
                            }
                            return;
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: downloadMediaFilesList...OK", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadMediaFilesList...OK</p>";
                        }
                        var errorBuildAndDownloadHtmlTemplatesFiles = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextBuildAndDownloadHtmlTemplatesFiles = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var callbackBuilAndDownloadHtmlTemplatesFiles = function callbackBuilAndDownloadHtmlTemplatesFiles(ctxBuildAndDownloadHtmlTemplatesFiles) {
                            if (ctxBuildAndDownloadHtmlTemplatesFiles.isError()) {
                                if (context != null) {
                                    error.setError(492, "ERROR 492: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + errorDownloadMediaFiles.getErrMsg() + "]");
                                    self._aActivityLogService._IActivityLogServiceMessaging
                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "492: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + errorDownloadMediaFiles.getErrMsg() + "]", null, null, null);
                                    if (self._debug) {
                                        document.getElementById("rend.message").innerHTML += "ERROR 492: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: ["
                                            + errorDownloadMediaFiles.getErrMsg() + "]";
                                    }
                                    context.setError(error);
                                    context.setBoolResult(false);
                                    return callback(context);
                                }
                                return;
                            }
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...OK", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...OK</p>";
                            }
                            if (context != null) {
                                context.setError(error);
                                context.setBoolResult(true);
                                return callback(context);
                            }
                            return;
                        };
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...</p>";
                        }
                        contextDownloadMediaFiles.setRemoteCallback(true);
                        self.buildAndDownloadHtmlTemplatesFilesList(playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorBuildAndDownloadHtmlTemplatesFiles, contextBuildAndDownloadHtmlTemplatesFiles, callbackBuilAndDownloadHtmlTemplatesFiles);
                    };
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: downloadMediaFilesList...", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadMediaFilesList...</p>";
                    }
                    contextDownloadMediaFiles.setRemoteCallback(true);
                    self.downloadMediaFilesList(playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorDownloadMediaFiles, contextDownloadMediaFiles, callbackDownloadMediaFiles);
                };
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...</p>";
                }
                contextBuild.setRemoteCallback(true);
                self.buildMediaFilesListToDownload(playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorBuild, contextBuild, callbackBuild);
            };
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles: downloadPlaylist...", null, null, null);
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadPlaylist...</p>";
            }
            contextDownloadPlaylist.setRemoteCallback(true);
            self.downloadPlaylist(playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorDownloadPlaylist, contextDownloadPlaylist, callbackDownloadPlaylist);
        };
        RS_PlaylistDownloader.prototype.downloadAll = function (playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var bHasNewPlaylist = false;
            var errorHasNewPlaylist = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextHasNewPlaylist = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackHasNewPlaylist = function callbackHasNewPlaylist(ctxHasNewPlaylist) {
                if (ctxHasNewPlaylist.isError()) {
                    if (context != null) {
                        error.setError(481, "ERROR 481: DownloadAll - Error while checking for a new playlist");
                        self._aActivityLogService._IActivityLogServiceMessaging
                            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "481: DownloadAll - Error while checking for a new playlist", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>ERROR 481: DownloadAll - Error while checking for a new playlist</p>";
                        }
                        context.setError(error);
                        context.setBoolResult(false);
                        return callback(context);
                    }
                    return;
                }
                bHasNewPlaylist = ctxHasNewPlaylist.getBoolResult();
                if (!bHasNewPlaylist) {
                    if (context != null) {
                        context.setError(error);
                        context.setBoolResult(bHasNewPlaylist);
                        return callback(context);
                    }
                    return;
                }
                var errorCleanup = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCleanup = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCleanup = function callbackCleanup() {
                    if (contextCleanup.isError()) {
                        if (context != null) {
                            error.setError(482, "ERROR 482: DownloadAll - Error during the cleanup of the current playlist folders: [" + errorCleanup.getErrMsg() + "]");
                            self._aActivityLogService._IActivityLogServiceMessaging
                                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "482: DownloadAll - Error during the cleanup of the current playlist folders: [" + errorCleanup.getErrMsg() + "]", null, null, null);
                            if (self._debug) {
                                document.getElementById("rend.message").innerHTML +=
                                    "<p>ERROR 482: DownloadAll - Error during the cleanup of the current playlist folders: [" + errorCleanup.getErrMsg() + "]</p>";
                            }
                            context.setError(error);
                            context.setBoolResult(false);
                            return callback(context);
                        }
                        return;
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "cleanupCurrentPlaylistAndMediaFiles...Ok", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>cleanupCurrentPlaylistAndMediaFiles...Ok</p>";
                    }
                    var errorDownload = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextDownload = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackDownload = function callbackDownload(ctx1) {
                        var playlistDownloadWell = ctx1.getBoolResult();
                        if (!playlistDownloadWell) {
                            if (error != null) {
                                error.setError(483, "ERROR 482: Download Playlist - Error during the download of the playlist and media files: [" + ctx1.getError().getErrMsg() + "]");
                                self._aActivityLogService._IActivityLogServiceMessaging
                                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "483: Download Playlist - Error during the download of the playlist and media files: [" + ctx1.getError().getErrMsg() + "]", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>downloadPlaylistAndMediaFiles...ERROR: " + error.getErrMsg() + "</p>";
                                }
                            }
                            else {
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles...Ok", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>downloadPlaylistAndMediaFiles...Ok</p>";
                                }
                            }
                            if (context != null) {
                                context.setError(error);
                                context.setBoolResult(playlistDownloadWell);
                                if (context.isError())
                                    context.setBoolResult(false);
                                return callback(context);
                            }
                        }
                        var errorMovePlaylistToDst = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextMovePlaylistToDst = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var callbackMovePlaylistToDst = function callbackMovePlaylistToDst(ctxMove) {
                            var playlistMoveWell = contextDownload.getBoolResult();
                            if (ctxMove.isError()) {
                                if (error != null) {
                                    error.setError(483, "ERROR 482: Download Playlist - Error during the download of the playlist and media files: [" + errorDownload.getErrMsg() + "]");
                                    self._aActivityLogService._IActivityLogServiceMessaging
                                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "483: Download Playlist - Error during the download of the playlist and media files: [" + errorDownload.getErrMsg() + "]", null, null, null);
                                }
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>movePlaylistAndShaFileToDst...ERROR: " + error.getErrMsg() + "</p>";
                                }
                            }
                            else {
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "movePlaylistAndShaFileToDst...OK", null, null, null);
                                if (self._debug) {
                                    document.getElementById("rend.message").innerHTML += "<p>movePlaylistAndShaFileToDst...OK</p>";
                                }
                            }
                            if (context != null) {
                                self._iServiceRun.setServiceStatus("status_playlist_changed");
                                context.setError(error);
                                context.setBoolResult(playlistMoveWell);
                                return callback(context);
                            }
                        };
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "movePlaylistAndShaFileToDst...", null, null, null);
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>movePlaylistAndShaFileToDst...</p>";
                        }
                        contextMovePlaylistToDst.setRemoteCallback(true);
                        self._aDownloadService._iDownloadMain.moveFileAndShaFile(aPlaylistTransferFile.getTmpFileInfo(), aPlaylistTransferFile.getComputedShaFileInfo(), aPlaylistTransferFile.getDstFileInfo(), aPlaylistTransferFile.getDstShaFileInfo(), errorMovePlaylistToDst, contextMovePlaylistToDst, callbackMovePlaylistToDst);
                    };
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "downloadPlaylistAndMediaFiles...", null, null, null);
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>downloadPlaylistAndMediaFiles...</p>";
                    }
                    contextDownload.setRemoteCallback(true);
                    self.downloadPlaylistAndMediaFiles(playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorDownload, contextDownload, callbackDownload);
                };
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "cleanupCurrentPlaylistAndMediaFiles...", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>cleanupCurrentPlaylistAndMediaFiles...</p>";
                }
                contextCleanup.setRemoteCallback(true);
                self.cleanupCurrentPlaylistAndMediaFiles(playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorCleanup, contextCleanup, callbackCleanup);
            };
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "hasNewPlaylist...", null, null, null);
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>hasNewPlaylist...</p>";
            }
            contextHasNewPlaylist.setRemoteCallback(true);
            self.hasNewPlaylist(playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, errorHasNewPlaylist, contextHasNewPlaylist, callbackHasNewPlaylist);
        };
        RS_PlaylistDownloader.prototype.createComputedShaFileInfoFromFileInfo = function (aFileInfo) {
            var aShaFileInfo = this._aServiceLocator._iEntityCreation.createDefaultFileInfo(null);
            aShaFileInfo.setStorage(aFileInfo.getStorage());
            aShaFileInfo.setPath(aFileInfo.getPath());
            aShaFileInfo.setName(aFileInfo.getName() + ".comp.sha");
            aShaFileInfo.setUrlStorage(aFileInfo.getUrlStorage());
            aShaFileInfo.setUrlPath(aFileInfo.getUrlPath());
            aShaFileInfo.setUrlName(aFileInfo.getUrlName() + ".comp.sha");
            return aShaFileInfo;
        };
        RS_PlaylistDownloader.prototype.createShaFileInfoFromFileInfo = function (aFileInfo) {
            var aShaFileInfo = this._aServiceLocator._iEntityCreation.createDefaultFileInfo(null);
            aShaFileInfo.setStorage(aFileInfo.getStorage());
            aShaFileInfo.setPath(aFileInfo.getPath());
            aShaFileInfo.setName(aFileInfo.getName() + ".sha");
            aShaFileInfo.setUrlStorage(aFileInfo.getUrlStorage());
            aShaFileInfo.setUrlPath(aFileInfo.getUrlPath());
            aShaFileInfo.setUrlName(aFileInfo.getUrlName() + ".sha");
            return aShaFileInfo;
        };
        RS_PlaylistDownloader.prototype.createPlaylistFoldersIfTheyNotExists = function (error, context, callback) {
            var self = this;
            var aPlaylistTmpFolder = this._aPlaybackGlobalConfig._aPlaylistTemporaryFile;
            var aPlaylistFolder = this._aPlaybackGlobalConfig._aPlaylistFile;
            var callbackCreatePlaylistTmpFolder = function callbackCreatePlaylistTmpFolder() {
                var callbackCreatePlaylistFolder = function callbackCreatePlaylistFolder() {
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                var errorCreatePlaylistFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreatePlaylistFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextCreatePlaylistFolder.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.createFolder2(aPlaylistFolder.getStorage(), aPlaylistFolder.getPath(), errorCreatePlaylistFolder, contextCreatePlaylistTmpFolder, callbackCreatePlaylistFolder);
            };
            var errorCreatePlaylistTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCreatePlaylistTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextCreatePlaylistTmpFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.createFolder2(aPlaylistTmpFolder.getStorage(), aPlaylistTmpFolder.getPath(), errorCreatePlaylistTmpFolder, contextCreatePlaylistTmpFolder, callbackCreatePlaylistTmpFolder);
        };
        RS_PlaylistDownloader.prototype.createFoldersIfTheyNotExists = function (playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, error, context, callback) {
            var self = this;
            var aPlaylistTmpFolder = this._aPlaybackGlobalConfig._aPlaylistTemporaryFile;
            var aMediaFilesTmpFolder = this._aPlaybackGlobalConfig._aMediaFilesTemporaryFolder;
            var aHtmlTemplatesFilesTmpFolder = this._aPlaybackGlobalConfig._aHtmlTemplatesFilesTemporaryFolder;
            var aPlaylistFolder = this._aPlaybackGlobalConfig._aPlaylistFile;
            var aMediaFilesFolder = this._aPlaybackGlobalConfig._aMediaFilesFolder;
            var aHtmlTemplatesFilesFolder = this._aPlaybackGlobalConfig._aHtmlTemplatesFilesFolder;
            var errorCreatePlaylistTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCreatePlaylistTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackCreatePlaylistTmpFolder = function callbackCreatePlaylistTmpFolder() {
                var errorCreateMediaFilesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreateMediaFilesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCreateMediaFilesTmpFolder = function callbackCreateMediaFilesTmpFolder() {
                    var errorCreatePlaylistFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextCreatePlaylistFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackCreatePlaylistFolder = function callbackCreatePlaylistFolder() {
                        var errorCreateMediaFilesFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextCreateMediaFilesFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        var callbackCreateMediaFilesFolder = function callbackCreateMediaFilesFolder() {
                            var errorCreateHtmlTemplatesFilesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextCreateHtmlTemplatesFilesTmpFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            var callbackCreateHtmlTemplatesFilesTmpFolder = function callbackCreateHtmlTemplatesFilesTmpFolder() {
                                var errorCreateHtmlTemplatesFilesFolder = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextCreateHtmlTemplatesFilesFolder = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                var callbackCreateHtmlTemplatesFilesFolder = function callbackCreateHtmlTemplatesFilesFolder() {
                                    if (context != null) {
                                        return callback(context);
                                    }
                                };
                                contextCreateHtmlTemplatesFilesFolder.setRemoteCallback(true);
                                self._aSDKService._iSDKFileSystem.createFolder2(aHtmlTemplatesFilesFolder.getStorage(), aHtmlTemplatesFilesFolder.getPath(), errorCreateHtmlTemplatesFilesFolder, contextCreateHtmlTemplatesFilesFolder, callbackCreateHtmlTemplatesFilesFolder);
                            };
                            contextCreateHtmlTemplatesFilesTmpFolder.setRemoteCallback(true);
                            self._aSDKService._iSDKFileSystem.createFolder2(aHtmlTemplatesFilesTmpFolder.getStorage(), aHtmlTemplatesFilesTmpFolder.getPath(), errorCreateHtmlTemplatesFilesTmpFolder, contextCreateHtmlTemplatesFilesTmpFolder, callbackCreateHtmlTemplatesFilesTmpFolder);
                        };
                        contextCreateMediaFilesFolder.setRemoteCallback(true);
                        self._aSDKService._iSDKFileSystem.createFolder2(aMediaFilesFolder.getStorage(), aMediaFilesFolder.getPath(), errorCreateMediaFilesFolder, contextCreateMediaFilesFolder, callbackCreateMediaFilesFolder);
                    };
                    contextCreatePlaylistFolder.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.createFolder2(aPlaylistFolder.getStorage(), aPlaylistFolder.getPath(), errorCreatePlaylistFolder, contextCreatePlaylistTmpFolder, callbackCreatePlaylistFolder);
                };
                contextCreateMediaFilesTmpFolder.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.createFolder2(aMediaFilesTmpFolder.getStorage(), aMediaFilesTmpFolder.getPath(), errorCreateMediaFilesTmpFolder, contextCreateMediaFilesTmpFolder, callbackCreateMediaFilesTmpFolder);
            };
            contextCreatePlaylistTmpFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.createFolder2(aPlaylistTmpFolder.getStorage(), aPlaylistTmpFolder.getPath(), errorCreatePlaylistTmpFolder, contextCreatePlaylistTmpFolder, callbackCreatePlaylistTmpFolder);
        };
        RS_PlaylistDownloader.prototype.download = function (error, context, callback) {
            var self = this;
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Download Playlist: Start download ....", null, null, null);
            if (self._debug) {
                document.getElementById("rend.message").innerHTML = "<p>Download Playlist: Start download ....</p>";
            }
            var playlistType = this._aPlaybackGlobalConfig._playlist_type;
            var bEncryptedPlaylist = false;
            var aPlaylistTransfer = this._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
            var aMediaFilesTransfer = this._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
            var aHtmlTemplatesFilesTransfer = this._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
            if (!bEncryptedPlaylist) {
                aPlaylistTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aPlaylistRemoteFile);
                aPlaylistTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aPlaylistTemporaryFile);
                aPlaylistTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aPlaylistFile);
                aPlaylistTransfer.setSrcShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aPlaylistRemoteFile));
                aPlaylistTransfer.setTmpShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aPlaylistTemporaryFile));
                aPlaylistTransfer.setDstShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aPlaylistFile));
                aPlaylistTransfer.setComputedShaFileInfo(this.createComputedShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aPlaylistTemporaryFile));
                aMediaFilesTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aMediaFilesRemoteBaseFolder);
                aMediaFilesTransfer.setSrcFileInfo2(this._aPlaybackGlobalConfig._aMediaFilesRemoteBaseFolder2);
                aMediaFilesTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aMediaFilesTemporaryFolder);
                aMediaFilesTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aMediaFilesFolder);
                aHtmlTemplatesFilesTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder);
                aHtmlTemplatesFilesTransfer.setSrcFileInfo2(this._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder2);
                aHtmlTemplatesFilesTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aHtmlTemplatesFilesTemporaryFolder);
                aHtmlTemplatesFilesTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aHtmlTemplatesFilesFolder);
            }
            else {
                aPlaylistTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aEncryptedPlaylistRemoteFile);
                aPlaylistTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aEncryptedPlaylistTemporaryFile);
                aPlaylistTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aEncryptedPlaylistFile);
                aPlaylistTransfer.setSrcShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aEncryptedPlaylistRemoteFile));
                aPlaylistTransfer.setTmpShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aEncryptedPlaylistTemporaryFile));
                aPlaylistTransfer.setDstShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aEncryptedPlaylistFile));
                aPlaylistTransfer.setComputedShaFileInfo(this.createComputedShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aEncryptedPlaylistTemporaryFile));
                aMediaFilesTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aEncryptedMediaFilesRemoteBaseFolder);
                aMediaFilesTransfer.setSrcFileInfo2(this._aPlaybackGlobalConfig._aEncryptedMediaFilesRemoteBaseFolder2);
                aMediaFilesTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aEncryptedMediaFilesTemporaryFolder);
                aMediaFilesTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aEncryptedMediaFilesFolder);
                aHtmlTemplatesFilesTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aEncryptedHtmlTemplatesFilesRemoteBaseFolder);
                aHtmlTemplatesFilesTransfer.setSrcFileInfo2(this._aPlaybackGlobalConfig._aEncryptedHtmlTemplatesFilesRemoteBaseFolder2);
                aHtmlTemplatesFilesTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aEncryptedHtmlTemplatesFilesTemporaryFolder);
                aHtmlTemplatesFilesTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aEncryptedHtmlTemplatesFilesFolder);
            }
            var errorCreateFolders = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCreateFolders = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackCreateFolders = function callbackCreateFolders() {
                var callbackDownloadAll = function callbackDownloadAll() {
                    if (context != null) {
                        return callback(context);
                    }
                };
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "createFoldersIfTheyNotExists....OK", null, null, null);
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>createFoldersIfTheyNotExists....OK</p>";
                }
                self.downloadAll(playlistType, aPlaylistTransfer, aMediaFilesTransfer, aHtmlTemplatesFilesTransfer, error, context, callbackDownloadAll);
            };
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "createFoldersIfTheyNotExists....", null, null, null);
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>createFoldersIfTheyNotExists....</p>";
            }
            self.createFoldersIfTheyNotExists(playlistType, aPlaylistTransfer, aMediaFilesTransfer, aHtmlTemplatesFilesTransfer, errorCreateFolders, contextCreateFolders, callbackCreateFolders);
        };
        RS_PlaylistDownloader.prototype.updatePlaylist = function (error, context, callback) {
            var self = this;
            var errorPlaylistTransferFile = self._aServiceLocator._iEntityCreation.createDefaultError();
            var aPlaylistTransferFile = self._aServiceLocator._iEntityCreation.createDefaultFileTransfer(errorPlaylistTransferFile);
            aPlaylistTransferFile.setSrcFileInfo(self._aPlaybackGlobalConfig._aPlaylistRemoteFile);
            aPlaylistTransferFile.setTmpFileInfo(self._aPlaybackGlobalConfig._aPlaylistTemporaryFile);
            aPlaylistTransferFile.setDstFileInfo(self._aPlaybackGlobalConfig._aPlaylistFile);
            aPlaylistTransferFile.setSrcShaFileInfo(self.createShaFileInfoFromFileInfo(self._aPlaybackGlobalConfig._aPlaylistRemoteFile));
            aPlaylistTransferFile.setTmpShaFileInfo(self.createShaFileInfoFromFileInfo(self._aPlaybackGlobalConfig._aPlaylistTemporaryFile));
            aPlaylistTransferFile.setDstShaFileInfo(self.createShaFileInfoFromFileInfo(self._aPlaybackGlobalConfig._aPlaylistFile));
            aPlaylistTransferFile.setComputedShaFileInfo(self.createComputedShaFileInfoFromFileInfo(self._aPlaybackGlobalConfig._aPlaylistTemporaryFile));
            var cbCreatePlaylistFolders = function cbCreatePlaylistFolders(ctx0) {
                var cbHasNewPlaylist = function cbHasNewPlaylist(ctx1) {
                    if (ctx1 != null && !ctx1.isError()) {
                        var bHasNewPlaylist = ctx1.getBoolResult();
                        if (bHasNewPlaylist === false) {
                            context != null && context.setError(error);
                            callback != null && callback(context);
                            return;
                        }
                        var cbCleanup = function cbCleanup(ctx2) {
                            if (ctx2 != null && !ctx2.isError()) {
                                var cbDownload = function cbDownload(ctx3) {
                                    if (ctx3 != null && !ctx3.isError()) {
                                        var playlistDownloadWell = ctx3.getBoolResult();
                                        if (playlistDownloadWell === false) {
                                            context != null && context.setError(error);
                                            callback != null && callback(context);
                                            return;
                                        }
                                        var cbMovePlaylistToDst = function cbMovePlaylistToDst(ctx4) {
                                            var playlistMoveWell = true;
                                            var logMessage = "";
                                            if (ctx4 != null && !ctx4.isError()) {
                                                playlistMoveWell = ctx4.getBoolResult();
                                                if (playlistMoveWell === false) {
                                                    logMessage = " - updatePlaylist: moveFileAndShaFile failed";
                                                }
                                            }
                                            else {
                                                logMessage = (ctx4 != null) ? " - updatePlaylist: moveFileAndShaFile error  [" + ctx4.getError().getErrMsg() + "]" : "";
                                            }
                                            if (logMessage.length > 0) {
                                                if (self._debug) {
                                                    console.log("RS_PlaylistDownloader - " + logMessage);
                                                    document.getElementById("rend.message").innerHTML += "<p>RS_PlaylistDownloader - " + logMessage + "</p>";
                                                }
                                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), "" + logMessage, null, null, null);
                                            }
                                            context != null && context.setError(error);
                                            callback != null && callback(context);
                                        };
                                        var errorMovePlaylistToDst = self._aServiceLocator._iEntityCreation.createDefaultError();
                                        var contextMovePlaylistToDst = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                        contextMovePlaylistToDst.setRemoteCallback(true);
                                        self._aDownloadService._iDownloadMain.moveFileAndShaFile(aPlaylistTransferFile.getTmpFileInfo(), aPlaylistTransferFile.getComputedShaFileInfo(), aPlaylistTransferFile.getDstFileInfo(), aPlaylistTransferFile.getDstShaFileInfo(), errorMovePlaylistToDst, contextMovePlaylistToDst, cbMovePlaylistToDst);
                                    }
                                    else {
                                        var logMessage = (ctx3 != null) ? "[" + ctx3.getError().getErrMsg() + "]" : "";
                                        if (self._debug) {
                                            console.log("RS_PlaylistDownloader - updatePlaylist: downloadPlaylist error " + logMessage);
                                            document.getElementById("rend.message").innerHTML += "<p>RS_PlaylistDownloader - updatePlaylist: downloadPlaylist error " + logMessage + "</p>";
                                        }
                                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " - updatePlaylist: downloadPlaylist error " + logMessage, null, null, null);
                                        context != null && context.setError(error);
                                        callback != null && callback(context);
                                    }
                                };
                                var errorDownload = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextDownload = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                contextDownload.setRemoteCallback(true);
                                self.downloadPlaylist(null, aPlaylistTransferFile, null, null, errorDownload, contextDownload, cbDownload);
                            }
                            else {
                                var logMessage = (ctx2 != null) ? "[" + ctx2.getError().getErrMsg() + "]" : "";
                                if (self._debug) {
                                    console.log("RS_PlaylistDownloader - updatePlaylist: cleanupCurrentPlaylist error " + logMessage);
                                    document.getElementById("rend.message").innerHTML += "<p>RS_PlaylistDownloader - updatePlaylist: cleanupCurrentPlaylist error " + logMessage + "</p>";
                                }
                                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " - updatePlaylist: cleanupCurrentPlaylist error " + logMessage, null, null, null);
                                context != null && context.setError(error);
                                callback != null && callback(context);
                            }
                        };
                        var errorCleanup = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextCleanup = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        contextCleanup.setRemoteCallback(true);
                        self.cleanupCurrentPlaylist(aPlaylistTransferFile, errorCleanup, contextCleanup, cbCleanup);
                    }
                    else {
                        var logMessage = (ctx1 != null) ? "[" + ctx1.getError().getErrMsg() + "]" : "";
                        if (self._debug) {
                            console.log("RS_PlaylistDownloader - updatePlaylist: hasNewPlaylist error " + logMessage);
                            document.getElementById("rend.message").innerHTML += "<p>RS_PlaylistDownloader - updatePlaylist: hasNewPlaylist error " + logMessage + "</p>";
                        }
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error, self.getServiceName(), " - updatePlaylist: hasNewPlaylist error " + logMessage, null, null, null);
                        context != null && context.setError(error);
                        callback != null && callback(context);
                    }
                };
                var errorHasNewPlaylist = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextHasNewPlaylist = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextHasNewPlaylist.setRemoteCallback(true);
                self.hasNewPlaylist(null, aPlaylistTransferFile, null, null, errorHasNewPlaylist, contextHasNewPlaylist, cbHasNewPlaylist);
            };
            var errorCreateFolders = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextCreateFolders = self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextCreateFolders.setRemoteCallback(true);
            self.createPlaylistFoldersIfTheyNotExists(errorCreateFolders, contextCreateFolders, cbCreatePlaylistFolders);
        };
        RS_PlaylistDownloader.prototype.setInterruptCallback = function (interruptCallback) {
            this._interruptCallback = interruptCallback;
            if (this._aDownloadService != null)
                this._aDownloadService._iServiceRun.setInterruptCallback(interruptCallback);
        };
        RS_PlaylistDownloader.prototype.run = function (error, context, callback) {
            var self = this;
            self._iServiceRun.setServiceStatus("status_playlist_unchanged");
            var callbackPlaylistDownload = function callbackPlaylistDownload() {
                if (self._interruptCallback != null) {
                    return self._interruptCallback();
                }
                if (callback != null) {
                    context.setObject2Result(self);
                    return callback(context);
                }
                return;
            };
            if (self._aPlaybackGlobalConfig._strSerialNumber == "local")
                return callbackPlaylistDownload();
            self._iPlaylistDownloaderMain.download(error, context, callbackPlaylistDownload);
        };
        RS_PlaylistDownloader.prototype.shutdown = function (error, context, callback) {
            if (callback != null) {
                return callback(context);
            }
        };
        return RS_PlaylistDownloader;
    }(rmGeneral.rm_general.R_Service));
    rm_coreservices.RS_PlaylistDownloader = RS_PlaylistDownloader;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RS_PlaylistDownloader.js.map