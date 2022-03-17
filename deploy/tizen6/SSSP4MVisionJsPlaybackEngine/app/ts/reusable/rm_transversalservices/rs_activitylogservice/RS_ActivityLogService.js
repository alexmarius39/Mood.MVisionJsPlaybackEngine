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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/R_Service", "../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogVerbosityTypes", "../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes", "./RI_ActivityLogService_Main", "./RI_ActivityLogService_Config", "./RI_ActivityLogService_Message"], function (require, exports, rmGeneral, amGeneralActivityLogVerbosityTypes, amGeneralActivityLogMessageTypes, rmTransversalActivityLogServiceMain, rmTransversalActivityLogServiceConfig, rmTransversalActivityLogServiceMessaging) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var RS_ActivityLogService = /** @class */ (function (_super) {
            __extends(RS_ActivityLogService, _super);
            //----------- constructor
            function RS_ActivityLogService(aFactoryDescription, aServiceContainer, aLogService, error) {
                var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
                _this._IActivityLogServiceMain =
                    new rmTransversalActivityLogServiceMain.rm_transversalservices.RI_ActivityLogServiceMain(_this);
                _this._IActivityLogServiceConfig =
                    new rmTransversalActivityLogServiceConfig.rm_transversalservices.RI_ActivityLogServiceConfig(_this);
                _this._IActivityLogServiceMessaging =
                    new rmTransversalActivityLogServiceMessaging.rm_transversalservices.RI_ActivityLogServiceMessage(_this);
                _this._sendingPreviousLogsInProgress = false;
                _this._aLogService = aLogService;
                _this._aHttpRequest = null;
                _this._activityLogRetriedBefore = false;
                _this._saveActivityLogBufferSavingInProgress = false;
                _this._aUnsentLogFiles = new Map();
                return _this;
            }
            RS_ActivityLogService.prototype.setSDKService = function (aSDKService) {
                this._aSDKService = aSDKService;
            };
            RS_ActivityLogService.prototype.init = function (error) {
                this._aHttpRequest =
                    this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
                this._activityLogSettings =
                    this._aPlaybackGlobalConfig.getActivityLogServiceSettings();
                this._sentActivityLogBuffer = "";
                this._saveActivityLogBuffer = "";
            };
            //--------------------------------------
            // set / get global config
            //---------------------------------------
            //----------------------------
            RS_ActivityLogService.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
                this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
            };
            //-----------------------------
            RS_ActivityLogService.prototype.getPlaybackGlobalConfig = function () {
                return this._aPlaybackGlobalConfig;
            };
            RS_ActivityLogService.prototype.zipOldSaveLogFiles = function () {
                var self = this;
                var errorGetFilelist2 = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextGetFileList2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextGetFileList2.setRemoteCallback(true);
                var fileStorage = self._aPlaybackGlobalConfig._aTmpFolder.getStorage();
                var filePath = self._activityLogSettings.getLocalSavePath() +
                    "/";
                var callbackGetFileList2 = function (res) {
                    res._arrayResult.forEach(function (value) {
                        if ((value._fileName !== self._dailyLogFileName) && !value._fileName.includes(".zip")) {
                            var errorZipFile2 = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextZipFile2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            contextZipFile2.setRemoteCallback(true);
                            var fileNameZip = value._fileName.slice(0, -3) + "zip";
                            var zipFile2CallBack = function (ctx2) {
                                if (ctx2.getBoolResult()) {
                                    var errorRemoveTxtFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                                    var contextRemoveTxtFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                    self._aSDKService._iSDKFileSystem.removeFile2(fileStorage, filePath, value._fileName, errorRemoveTxtFile, contextRemoveTxtFile, null);
                                }
                            };
                            self._aSDKService._iSDKFileSystem.zipFile2(fileStorage, filePath, value._fileName, fileStorage, filePath, fileNameZip, errorZipFile2, contextZipFile2, zipFile2CallBack);
                        }
                    });
                };
                self._aSDKService._iSDKFileSystem.getFileList2(self._aPlaybackGlobalConfig._aTmpFolder.getStorage(), self._activityLogSettings.getLocalSavePath(), errorGetFilelist2, contextGetFileList2, callbackGetFileList2);
            };
            RS_ActivityLogService.prototype.dailyLogSelector = function (error, context, callback) {
                var self = this;
                if (!self._activityLogSettings.getFileEnabled()) {
                    if (context != null && callback != null) {
                        return callback(context);
                    }
                    else {
                        return;
                    }
                }
                var errorGetFilelist2 = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextGetFileList2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextGetFileList2.setRemoteCallback(true);
                var errorDateTime = self._aServiceLocator._iEntityCreation.createDefaultError();
                var aDateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
                var currentDateInString = self._aUtilsService._iUtilsDateTime
                    .getCrtDateTimeAsISOString(aDateTime)
                    .replace(/[^0-9]/g, "")
                    .substring(0, 8);
                var callbackGetFileList2 = function (res) {
                    if (res._arrayResult.some(function (value) { return value._fileName.includes(currentDateInString); })) {
                        var dailyFilesCount_1 = 0;
                        res._arrayResult.forEach(function (value) {
                            if (value._fileName.includes(currentDateInString)) {
                                ++dailyFilesCount_1;
                            }
                        });
                        if (dailyFilesCount_1 > 0) {
                            var dailyFileName = self._activityLogSettings.getLocalSaveBaseName() +
                                "-" +
                                currentDateInString +
                                "-" +
                                dailyFilesCount_1 +
                                ".log";
                            self._dailyLogFileName = dailyFileName;
                            self._dailyLogFileDate = currentDateInString;
                            self.zipOldSaveLogFiles();
                            if (context != null && callback != null) {
                                context.setBoolResult(true);
                                return callback(context);
                            }
                        }
                        else {
                            var dailyFileName = res._arrayResult.find(function (value) {
                                return value._fileName.includes(currentDateInString);
                            })._fileName;
                            self._dailyLogFileName = dailyFileName;
                            self._dailyLogFileDate = dailyFileName.substring(dailyFileName.indexOf("-") + 1, dailyFileName.lastIndexOf("-"));
                            self.zipOldSaveLogFiles();
                            if (context != null && callback != null) {
                                context.setBoolResult(true);
                                return callback(context);
                            }
                        }
                    }
                    else {
                        var errorCreateDailyLogFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextCreateDailyLogFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        contextCreateDailyLogFile.setRemoteCallback(true);
                        var name_1 = self._activityLogSettings.getLocalSaveBaseName() +
                            "-" +
                            currentDateInString +
                            "-" +
                            1;
                        var callbackCreateDailyLogFile = function () {
                            if (context != null && callback != null) {
                                return callback(context);
                            }
                        };
                        self.createDailyLogFile(name_1, currentDateInString, errorCreateDailyLogFile, contextCreateDailyLogFile, callbackCreateDailyLogFile);
                    }
                };
                self._aSDKService._iSDKFileSystem.getFileList2(self._aPlaybackGlobalConfig._aTmpFolder.getStorage(), self._activityLogSettings.getLocalSavePath(), errorGetFilelist2, contextGetFileList2, callbackGetFileList2);
            };
            RS_ActivityLogService.prototype.createDailyLogFile = function (name, date, error, context, callback) {
                var self = this;
                var fileStorage = self._aPlaybackGlobalConfig._aTmpFolder.getStorage();
                var filePath = self._activityLogSettings.getLocalSavePath();
                var fileName = name + ".log";
                var errorWriteTextFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextWriteTextFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextWriteTextFile.setRemoteCallback(true);
                var callbackCreateNewLog = function (res) {
                    self._dailyLogFileName = fileName;
                    self._dailyLogFileDate = date;
                    self._saveActivityLogBufferSavingInProgress = false;
                    if (context != null &&
                        callback != null &&
                        (res.getBoolResult() || res.getResult() === "success :)")) {
                        self.zipOldSaveLogFiles();
                        context.setBoolResult(true);
                        return callback(context);
                    }
                };
                self._aSDKService._iSDKFileSystem.writeTextFile2(fileStorage, filePath, fileName, "", errorWriteTextFile, contextWriteTextFile, callbackCreateNewLog);
            };
            RS_ActivityLogService.prototype.getCurrentSavedActivityLogBuggers = function () {
                return this._saveActivityLogBuffer;
            };
            RS_ActivityLogService.prototype.logger = function (error, context, callback) {
                var self = this;
                self._saveActivityLogBufferSavingInProgress = true;
                var message = self._saveActivityLogBuffer;
                self._saveActivityLogBuffer = "";
                var fileStorage = self._aPlaybackGlobalConfig._aTmpFolder.getStorage();
                var filePath = self._activityLogSettings.getLocalSavePath() +
                    "/";
                var errorAppendTextToFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextAppendTextToFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextAppendTextToFile.setRemoteCallback(true);
                var callbackAppendTextToFile = function (ctx1) {
                    if (ctx1.getBoolResult() || ctx1.getResult() == "success :)") {
                        var errorGetFilelist2 = self._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextGetFileList2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                        contextGetFileList2.setRemoteCallback(true);
                        var callbackGetFiles2 = function (ctx) {
                            var currentFileSize = ctx._arrayResult.find(function (value) {
                                return value._fileName.includes(self._dailyLogFileName);
                            })._size;
                            var allowedFileSize = self._activityLogSettings.getLocalSplitSizeInMb() *
                                Math.pow(1024, 2);
                            var errorDateTime = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var aDateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
                            var currentDateInString = self._aUtilsService._iUtilsDateTime
                                .getCrtDateTimeAsISOString(aDateTime)
                                .replace(/[^0-9]/g, "")
                                .substring(0, 8);
                            var numberOfDailyFiles = 0;
                            ctx._arrayResult.forEach(function (value) {
                                if (value._fileName.includes(self._dailyLogFileName)) {
                                    ++numberOfDailyFiles;
                                }
                            });
                            if (currentFileSize >= allowedFileSize || self._dailyLogFileDate !== currentDateInString) {
                                var errorZipFile2 = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextZipFile2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                contextZipFile2.setRemoteCallback(true);
                                var fileNameZip = self._dailyLogFileName.slice(0, -3) + "zip";
                                var zipFile2CallBack = function (ctx3) {
                                    if (ctx3.getBoolResult()) {
                                        var errorRemoveTxtFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                                        var contextRemoveTxtFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                        contextRemoveTxtFile.setRemoteCallback(true);
                                        var callbackRemoveFile2 = function (ctx4) {
                                            if (ctx4.getBoolResult()) {
                                                var errorCreateDailyLogFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                                                var contextCreateDailyLogFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                                var name_2 = self._activityLogSettings.getLocalSaveBaseName() +
                                                    "-" +
                                                    currentDateInString +
                                                    "-" +
                                                    (numberOfDailyFiles + 1);
                                                var callbackCreateDailyLogFile = function () {
                                                    if (self.getCurrentSavedActivityLogBuggers().length > 0) {
                                                        self.logger(null, null, null);
                                                    }
                                                };
                                                self.createDailyLogFile(name_2, currentDateInString, errorCreateDailyLogFile, contextCreateDailyLogFile, callbackCreateDailyLogFile);
                                            }
                                            else {
                                                console.error("Failed to remove log text file");
                                            }
                                        };
                                        self._aSDKService._iSDKFileSystem.removeFile2(fileStorage, filePath, self._dailyLogFileName, errorRemoveTxtFile, contextRemoveTxtFile, callbackRemoveFile2);
                                    }
                                };
                                self._aSDKService._iSDKFileSystem.zipFile2(fileStorage, filePath, self._dailyLogFileName, fileStorage, filePath, fileNameZip, errorZipFile2, contextZipFile2, zipFile2CallBack);
                            }
                            else {
                                self._saveActivityLogBufferSavingInProgress = false;
                                if (self.getCurrentSavedActivityLogBuggers().length > 0) {
                                    self.logger(null, null, null);
                                }
                            }
                        };
                        self._aSDKService._iSDKFileSystem.getFileList2(self._aPlaybackGlobalConfig._aTmpFolder.getStorage(), self._activityLogSettings.getLocalSavePath(), errorGetFilelist2, contextGetFileList2, callbackGetFiles2);
                    }
                };
                self._aSDKService._iSDKFileSystem.appendTextToFile(fileStorage, filePath, self._dailyLogFileName, message, errorAppendTextToFile, contextAppendTextToFile, callbackAppendTextToFile);
            };
            RS_ActivityLogService.prototype.createInitialFolders = function (error, context, callback) {
                var self = this;
                var errorCreateFolder1 = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreateFolder1 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var errorCreateFolder2 = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreateFolder2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextCreateFolder1.setRemoteCallback(true);
                contextCreateFolder2.setRemoteCallback(true);
                var callbackCreateFolder1 = function () {
                    var callbackCreateFolder2 = function () {
                        return callback(context);
                    };
                    self._aSDKService._iSDKFileSystem.createFolder2(self._aPlaybackGlobalConfig._aTmpFolder.getStorage(), self._activityLogSettings.getLocalSentPath(), errorCreateFolder2, contextCreateFolder2, callbackCreateFolder2);
                };
                self._aSDKService._iSDKFileSystem.createFolder2(self._aPlaybackGlobalConfig._aTmpFolder.getStorage(), self._activityLogSettings.getLocalSavePath(), errorCreateFolder1, contextCreateFolder1, callbackCreateFolder1);
            };
            RS_ActivityLogService.prototype.getActivityLogServiceSettings = function () {
                return this._activityLogSettings;
            };
            RS_ActivityLogService.prototype.setActivityLogServiceSettings = function (settings) {
                this._aPlaybackGlobalConfig.setActivityLogServiceSettings(settings);
            };
            RS_ActivityLogService.prototype.startActivityLogService = function (error, context, callback) {
                var self = this;
                if (!self._activityLogSettings.getActivityLogEnable()) {
                    if (context != null && callback != null) {
                        return callback(context);
                    }
                    else {
                        return;
                    }
                }
                var errorCreateInitialFolders = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCreateInitialFolders = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextCreateInitialFolders.setRemoteCallback(true);
                var callbackCreateInitialFolders = function (ctx1) {
                    var errorDailyLogSelector = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextDailyLogSelector = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    contextDailyLogSelector.setRemoteCallback(true);
                    var callbackDailySelector = function (ctx2) {
                        self.getUnsentActivityLogFiles();
                        if (self._activityLogSettings.getAutoUploadEnabled()) {
                            self.startActivityLogsTimer();
                        }
                        if (context != null && callback != null) {
                            return callback(context);
                        }
                    };
                    self.dailyLogSelector(errorDailyLogSelector, contextDailyLogSelector, callbackDailySelector);
                };
                self.createInitialFolders(errorCreateInitialFolders, contextCreateInitialFolders, callbackCreateInitialFolders);
            };
            RS_ActivityLogService.prototype.startActivityLogsTimer = function () {
                var self = this;
                setInterval(function () {
                    var errorCreateActivityLogReport = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextCreateActivityLogReport = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    self.createActivityLogReport(errorCreateActivityLogReport, contextCreateActivityLogReport, null);
                }, self._activityLogSettings.getAutoUploadIntervalSeconds() * 1000);
            };
            RS_ActivityLogService.prototype.getUnsentActivityLogFiles = function () {
                var self = this;
                var errorGetFileList2 = this._aServiceLocator._iEntityCreation.createDefaultError();
                var contextGetFileList2 = this._aServiceLocator._iEntityCreation.createDefaultContext();
                contextGetFileList2.setRemoteCallback(true);
                var callback = function (res) {
                    var fList = res._arrayResult;
                    fList.forEach(function (value, index) {
                        if (fList[index]._type == "file") {
                            var logFileName_1 = fList[index]._fileName;
                            if (logFileName_1.includes("zip")) {
                                self.addLogsToUnsentMap(logFileName_1);
                            }
                            else {
                                var errorZipFile2 = self._aServiceLocator._iEntityCreation.createDefaultError();
                                var contextZipFile2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                contextZipFile2.setRemoteCallback(true);
                                var fileNameZip_1 = logFileName_1.slice(0, -3) + "zip";
                                var fileStorage_1 = self._aPlaybackGlobalConfig._aTmpFolder.getStorage();
                                var filePath_1 = self._activityLogSettings.getLocalSentPath();
                                var zipFile2CallBack = function (ctx3) {
                                    if (ctx3.getBoolResult()) {
                                        var errorRemoveTxtFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                                        var contextRemoveTxtFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                        contextRemoveTxtFile.setRemoteCallback(true);
                                        var callbackRemoveFile2 = function (ctx4) {
                                            if (ctx4.getBoolResult()) {
                                                self.addLogsToUnsentMap(fileNameZip_1);
                                            }
                                            else {
                                                console.error("Failed to remove log text file");
                                            }
                                        };
                                        self._aSDKService._iSDKFileSystem.removeFile2(fileStorage_1, filePath_1, logFileName_1, errorRemoveTxtFile, contextRemoveTxtFile, callbackRemoveFile2);
                                    }
                                };
                                self._aSDKService._iSDKFileSystem.zipFile2(fileStorage_1, filePath_1, logFileName_1, fileStorage_1, filePath_1, fileNameZip_1, errorZipFile2, contextZipFile2, zipFile2CallBack);
                            }
                        }
                    });
                };
                this._aSDKService._iSDKFileSystem.getFileList2(this._aPlaybackGlobalConfig._aTmpFolder.getStorage(), this._activityLogSettings.getLocalSentPath(), errorGetFileList2, contextGetFileList2, callback);
            };
            RS_ActivityLogService.prototype.addLogsToUnsentMap = function (fileName, file) {
                var self = this;
                var errorNewFileInfo = this._aServiceLocator._iEntityCreation.createDefaultError();
                var newFileInfo = this._aServiceLocator._iEntityCreation.createDefaultFileInfo(errorNewFileInfo);
                if (file !== undefined) {
                    self._aUnsentLogFiles.set(self._aUnsentLogFiles.size + 1, file);
                }
                else {
                    newFileInfo.setName(fileName);
                    newFileInfo.setPath(this._activityLogSettings.getLocalSentPath());
                    newFileInfo.setStorage(self._aPlaybackGlobalConfig._aTmpFolder.getStorage());
                    self._aUnsentLogFiles.set(self._aUnsentLogFiles.size + 1, newFileInfo);
                }
            };
            RS_ActivityLogService.prototype.removeNnnecessaryUnsentLogs = function () {
                var _this = this;
                if (!this._activityLogSettings.getAutoUploadEnabled()) {
                    return;
                }
                var numberOfAllowedUnsentLogs = 3;
                this._aUnsentLogFiles.forEach(function (item, key) {
                    if (key > numberOfAllowedUnsentLogs) {
                        var errorHandleRemoveFile = _this._aServiceLocator._iEntityCreation.createDefaultError();
                        var contextHandleRemoveFile = _this._aServiceLocator._iEntityCreation.createDefaultContext();
                        _this._aUnsentLogFiles.delete(key);
                        _this.handleSentActivityLogs(item.getName(), errorHandleRemoveFile, contextHandleRemoveFile, null);
                    }
                });
            };
            RS_ActivityLogService.prototype.addLogMessage = function (messageType, messagePrefix, message, error, context, callback) {
                var self = this;
                if (!self._activityLogSettings.getActivityLogEnable())
                    return;
                var verbosity = this._activityLogSettings.getVerbosityType();
                if (messageType ==
                    amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes
                        .Debug &&
                    verbosity !==
                        amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType
                            .AllAndDebug) {
                    return;
                }
                if (messageType ==
                    amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes
                        .Info &&
                    (verbosity ==
                        amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType
                            .ErrorsAndWarnings ||
                        verbosity ==
                            amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType
                                .Errors)) {
                    return;
                }
                if (messageType ==
                    amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes
                        .Warning &&
                    verbosity ==
                        amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType.Errors) {
                    return;
                }
                var errorLogMessage = error;
                var contextLogMessage = context;
                //--------------
                var callbackLogMessage = function callbackLogMessage(ctxCb) { };
                //-----------
                if (callback != null) {
                    callbackLogMessage = callback;
                }
                //-------
                if (error == null) {
                    errorLogMessage =
                        self._aServiceLocator._iEntityCreation.createDefaultError();
                }
                if (context == null) {
                    contextLogMessage =
                        self._aServiceLocator._iEntityCreation.createDefaultContext();
                }
                //--------
                self.addLogMessage2(messageType, messagePrefix, message, errorLogMessage, contextLogMessage, callbackLogMessage);
            };
            RS_ActivityLogService.prototype.addLogMessage2 = function (messageType, messagePrefix, message, error, context, callback) {
                var self = this;
                var strCrtDateTime = self._aUtilsService._iUtilsDateTime.getCrtDateTimeAsString2("YYYYMMDD", "HH:mm:ss.SSS", " - ");
                var newMessage = strCrtDateTime +
                    "\t\t" +
                    messageType +
                    ": in " +
                    messagePrefix +
                    " with message: " +
                    message +
                    "\r\n";
                self._sentActivityLogBuffer += newMessage;
                var currentSentBufferSize = self._sentActivityLogBuffer.length;
                var allowedSentBufferSize = self._activityLogSettings.getSendBufferMaxSizeKb() * Math.pow(1024, 1);
                var currentSaveBufferSize = self._saveActivityLogBuffer.length;
                var allowedSaveBufferSize = self._activityLogSettings.getSaveBufferMaxSizeKb() * Math.pow(1024, 1);
                if (self._activityLogSettings.getFileEnabled()) {
                    self._saveActivityLogBuffer += newMessage;
                    if (!self._saveActivityLogBufferSavingInProgress && (currentSaveBufferSize >= allowedSaveBufferSize)) {
                        self.logger(error, context, callback);
                    }
                }
                if ((currentSentBufferSize >= allowedSentBufferSize) &&
                    self._activityLogSettings.getAutoUploadEnabled()) {
                    self.createActivityLogReport(error, context, callback);
                }
            };
            RS_ActivityLogService.prototype.createActivityLogReport = function (error, context, callback) {
                var self = this;
                if (self._sentActivityLogBuffer.length === 0) {
                    return;
                }
                var reports = self._sentActivityLogBuffer;
                self._sentActivityLogBuffer = "";
                var errorDateTime = self._aServiceLocator._iEntityCreation.createDefaultError();
                var aDateTime = self._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
                var uniqueFileName = self._activityLogSettings.getLocalSentBaseName() + "-" +
                    self._aUtilsService._iUtilsDateTime
                        .getCrtDateTimeAsISOString(aDateTime)
                        .replace(/[^0-9]/g, "");
                var fileStorage = self._aPlaybackGlobalConfig._aTmpFolder.getStorage();
                var filePath = self._activityLogSettings.getLocalSentPath();
                var fileNameText = uniqueFileName + ".log";
                var fileNameZip = uniqueFileName + ".zip";
                var errorWriteTextFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextWriteTextFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextWriteTextFile.setRemoteCallback(true);
                if (!this._sendingPreviousLogsInProgress) {
                    var writeTextFileCallback = function (ctx1) {
                        if (ctx1.getBoolResult() || ctx1.getResult() === "success :)") {
                            var errorZipFile2 = self._aServiceLocator._iEntityCreation.createDefaultError();
                            var contextZipFile2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                            contextZipFile2.setRemoteCallback(true);
                            var zipFile2CallBack = function (ctx3) {
                                if (ctx3.getBoolResult()) {
                                    var errorRemoveTxtFile = self._aServiceLocator._iEntityCreation.createDefaultError();
                                    var contextRemoveTxtFile = self._aServiceLocator._iEntityCreation.createDefaultContext();
                                    contextRemoveTxtFile.setRemoteCallback(true);
                                    var callbackRemoveFile2 = function (ctx4) {
                                        if (ctx4.getBoolResult()) {
                                            self.sendActivityLogReport(fileNameZip, error, context, callback);
                                        }
                                        else {
                                            console.error("Failed to remove log text file");
                                        }
                                    };
                                    self._aSDKService._iSDKFileSystem.removeFile2(fileStorage, filePath, fileNameText, errorRemoveTxtFile, contextRemoveTxtFile, callbackRemoveFile2);
                                }
                            };
                            self._aSDKService._iSDKFileSystem.zipFile2(fileStorage, filePath, fileNameText, fileStorage, filePath, fileNameZip, errorZipFile2, contextZipFile2, zipFile2CallBack);
                        }
                    };
                    self._aSDKService._iSDKFileSystem.writeTextFile2(fileStorage, filePath, fileNameText, reports, errorWriteTextFile, contextWriteTextFile, writeTextFileCallback);
                }
            };
            RS_ActivityLogService.prototype.sendActivityLogReport = function (fileName, error, context, callback) {
                var self = this;
                var errorSendPreviousActivityLogReports = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextSendPreviousActivityLogReports = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextSendPreviousActivityLogReports.setRemoteCallback(true);
                var sendActivityLogReportFunction = function () {
                    var aZipFile = self._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
                    aZipFile.setStorage(self._aPlaybackGlobalConfig._aTmpFolder.getStorage());
                    aZipFile.setPath(self._activityLogSettings.getLocalSentPath());
                    aZipFile.setName(fileName);
                    self.sendActivityLogReportSingle(fileName, aZipFile, false, error, context, callback);
                };
                if (this._aUnsentLogFiles.size > 0) {
                    this.removeNnnecessaryUnsentLogs();
                    this.sendPreviousActivityLogReports(false, errorSendPreviousActivityLogReports, contextSendPreviousActivityLogReports, sendActivityLogReportFunction);
                }
                else {
                    sendActivityLogReportFunction();
                }
            };
            RS_ActivityLogService.prototype.sendActivityLogReportSingle = function (fileName, file, isOldLog, error, context, callback) {
                var self = this;
                var url = self._aPlaybackGlobalConfig.getBaseServerApiUrl() + "/" + self._activityLogSettings.getServerEndpointPath() + "/" + self._activityLogSettings.getServerEndpoint();
                self._aHttpRequest.reset();
                self._aHttpRequest.setMethod("POST");
                self._aHttpRequest.setUrlPath(url);
                var logFilename = "";
                if (fileName.length > 4 && fileName.slice(-4) == ".zip") {
                    logFilename = fileName.slice(0, -3) + "log";
                }
                var urlParams = {
                    filename: logFilename,
                    serial: self._aPlaybackGlobalConfig.getSerialNumber(),
                };
                self._aHttpRequest.setUrlParams(JSON.stringify(urlParams));
                self._aHttpRequest.setBoundary("380009360982575615081974");
                self._aHttpRequest.setMultipart();
                var errorCDHeader = self._aServiceLocator._iEntityCreation.createDefaultError();
                var aCDHeader = self._aServiceLocator._iEntityCreation.createDefaultContentDispositionHeader(errorCDHeader);
                aCDHeader.setHeaderName("file");
                aCDHeader.setHeaderFileBinary(true);
                aCDHeader.setHeaderFile(file);
                self._aHttpRequest.addCDHeader(aCDHeader);
                var errorSendRequest = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextSendRequest = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var requestSent = function (ctx1) {
                    if (typeof ctx1 !== "undefined" &&
                        ctx1 &&
                        !ctx1.isError() &&
                        context != null) {
                        context.setBoolResult(true);
                        document.getElementById("rend.message").innerHTML +=
                            "<p>Activity log request sent succesfully</p>";
                        self.handleSentActivityLogs(fileName, null, null, null);
                        if (callback !== null) {
                            return callback(context);
                        }
                    }
                    else {
                        context.setBoolResult(false);
                        error.setError(ctx1.getError().getErrId(), ctx1.getError().getErrMsg());
                        context.setError(error);
                        if (!isOldLog) {
                            self.retryReport(fileName, file, error, context, callback);
                        }
                        if (callback !== null) {
                            return callback(context);
                        }
                    }
                };
                contextSendRequest.setRemoteCallback(true);
                self._aUtilsService._iUtilsWeb.sendHttpRequest(self._aHttpRequest, errorSendRequest, contextSendRequest, requestSent);
            };
            RS_ActivityLogService.prototype.retryReport = function (fileName, file, error, context, callback) {
                if (!this._activityLogRetriedBefore) {
                    this.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes
                        .Error, this.getServiceName(), "Log send failed: retrying", error, context, callback);
                    this._activityLogRetriedBefore = true;
                    this.sendActivityLogReportSingle(fileName, file, false, error, context, callback);
                }
                else {
                    this.addLogsToUnsentMap(fileName, file);
                    if (callback !== null) {
                        return callback(context);
                    }
                }
            };
            RS_ActivityLogService.prototype.handleSentActivityLogs = function (fileName, error, context, callback) {
                var self = this;
                var errorDeleteFile2 = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextDeleteFile2 = self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextDeleteFile2.setRemoteCallback(true);
                var callbackDeleteFile2 = function (ctx2) {
                    if (ctx2.getBoolResult() && context != null) {
                        context.setBoolResult(true);
                        if (callback !== null) {
                            return callback(context);
                        }
                    }
                    else {
                        if (context != null) {
                            context.setError(error);
                        }
                    }
                };
                self._aSDKService._iSDKFileSystem.removeFile2(self._aPlaybackGlobalConfig._aTmpFolder.getStorage(), self._activityLogSettings.getLocalSentPath(), fileName, errorDeleteFile2, contextDeleteFile2, callbackDeleteFile2);
            };
            RS_ActivityLogService.prototype.sendPreviousActivityLogReports = function (bIgnoreErrors, error, context, callback) {
                var logs = this._aUnsentLogFiles;
                var transferMediaFilesArray = Array.from(logs.values());
                return this.sendReportsOneByOne(transferMediaFilesArray, bIgnoreErrors, error, context, callback);
            };
            RS_ActivityLogService.prototype.sendReportsOneByOne = function (transferMediaFilesArray, bIgnoreErrors, error, context, callback) {
                var self = this;
                var nbFiles = transferMediaFilesArray.length;
                var startFileIdx = 0;
                var logsSentSuccessfully = [];
                self._sendingPreviousLogsInProgress = true;
                self._activityLogRetriedBefore = true;
                //---
                var callbackDownloadOneFile = function callbackDownloadOneFile(crtFileIdx, ctx1) {
                    //-------- succesfully sent all the files
                    if (crtFileIdx >= nbFiles) {
                        if (logsSentSuccessfully.length > 0) {
                            logsSentSuccessfully.forEach(function (logArray) {
                                var logId = logArray[0];
                                self._aUnsentLogFiles.delete(logId);
                            });
                        }
                        self._sendingPreviousLogsInProgress = false;
                        self._activityLogRetriedBefore = false;
                        context.setBoolResult(true);
                        context.setError(error);
                        if (callback != null) {
                            callback(context);
                        }
                        return;
                    }
                    var crtFileTransfer = transferMediaFilesArray[crtFileIdx];
                    var callbackSendFile = function callbackSendFile(ctx2) {
                        var downloadFileWell = ctx2.getBoolResult();
                        if (!bIgnoreErrors) {
                            if (!downloadFileWell) {
                                context.setError(error);
                                context.setObjectResult(null);
                                return;
                            }
                            else {
                                error.setError(0, "");
                                logsSentSuccessfully.push([
                                    crtFileIdx,
                                    crtFileTransfer.getName(),
                                ]);
                            }
                        }
                        else {
                            error.setError(0, "");
                            logsSentSuccessfully.push([crtFileIdx, crtFileTransfer.getName()]);
                        }
                        return callbackDownloadOneFile(++crtFileIdx, ctx2);
                    };
                    self.sendActivityLogReportSingle(crtFileTransfer.getName(), crtFileTransfer, true, error, context, callbackSendFile);
                };
                callbackDownloadOneFile(startFileIdx, context);
            };
            return RS_ActivityLogService;
        }(rmGeneral.rm_general.R_Service));
        rm_transversalservices.RS_ActivityLogService = RS_ActivityLogService;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=RS_ActivityLogService.js.map