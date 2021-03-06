import rmGeneral = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
import amGeneralError = require("../../../abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../abstract/am_general/a_context/A_Context");
import amGeneralHttpRequest = require("../../../abstract/am_general/a_httprequest/A_HttpRequest");
import amGeneralContentDispositionHeader = require("../../../../../app/ts/abstract/am_general/a_httprequest/A_ContentDispositionHeader");
import amGeneralFileInfo = require("../../../abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralDateTime = require("../../../abstract/am_general/a_datetime/A_DateTime");
import amGeneralActivityLogServiceSettings = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogServiceSettings");
import amGeneralActivityLogVerbosityTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogVerbosityTypes");
import amGeneralActivityLogMessageTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");

import asActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
import activityLogServiceMain = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/I_ActivityLogService_Main");
import activityLogServiceConfig = require("../../../abstract/am_transversalservices/as_activitylogservice/I_ActivityLogService_Config");
import activityLogServiceMessaging = require("../../../abstract/am_transversalservices/as_activitylogservice/I_ActivityLogService_Message");

import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralFactoryDescription = require("../../../abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService = require("../../../abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesSDKService = require("../../../abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");

import rmTransversalActivityLogServiceMain = require("./RI_ActivityLogService_Main");
import rmTransversalActivityLogServiceConfig = require("./RI_ActivityLogService_Config");
import rmTransversalActivityLogServiceMessaging = require("./RI_ActivityLogService_Message");

export module rm_transversalservices {
  export class RS_ActivityLogService
    extends rmGeneral.rm_general.R_Service
    implements
      asActivityLogService.am_transversalservices.AS_ActivityLogService
  {
    _IActivityLogServiceMain: activityLogServiceMain.am_transversalservices.I_ActivityLogService_Main;
    _IActivityLogServiceConfig: activityLogServiceConfig.am_transversalservices.I_ActivityLogService_Config;
    _IActivityLogServiceMessaging: activityLogServiceMessaging.am_transversalservices.I_ActivityLogService_Messaging;

    //----------- composants
    _aLogService: amTransversalServicesLogService.am_transversalservices.A_LogService;
    _aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
    _aHttpRequest: amGeneralHttpRequest.am_general.A_HttpRequest;
    _activityLogRetriedBefore: boolean;
    _activityLogSettings: amGeneralActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings;
    _aUnsentLogFiles: Map<number, amGeneralFileInfo.am_general.A_FileInfo>;
    _sendingPreviousLogsInProgress: boolean;
    _dailyLogFileName: string;
    _dailyLogFileDate: string;

    _saveActivityLogBuffer: string;
    _saveActivityLogBufferSavingInProgress: boolean;

    _sentActivityLogBuffer: string;

    //----------- constructor
    constructor(
      aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription,
      aServiceContainer: amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService: amTransversalServicesLogService.am_transversalservices.A_LogService,
      error: amGeneralError.am_general.A_Error
    ) {
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._IActivityLogServiceMain =
        new rmTransversalActivityLogServiceMain.rm_transversalservices.RI_ActivityLogServiceMain(
          this
        );
      this._IActivityLogServiceConfig =
        new rmTransversalActivityLogServiceConfig.rm_transversalservices.RI_ActivityLogServiceConfig(
          this
        );
      this._IActivityLogServiceMessaging =
        new rmTransversalActivityLogServiceMessaging.rm_transversalservices.RI_ActivityLogServiceMessage(
          this
        );

      this._sendingPreviousLogsInProgress = false;
      this._aLogService = aLogService;
      this._aHttpRequest = null;
      this._activityLogRetriedBefore = false;
      this._saveActivityLogBufferSavingInProgress = false;
      this._aUnsentLogFiles = new Map();
    }

    public setSDKService(
      aSDKService: amTransversalServicesSDKService.am_transversalservices.A_SDK_JsTV
    ): void {
      this._aSDKService = aSDKService;
    }

    public init(error: amGeneralError.am_general.A_Error): void {
      this._aHttpRequest =
        this._aServiceLocator._iEntityCreation.createDefaultHttpRequest(error);
      this._activityLogSettings =
        this._aPlaybackGlobalConfig.getActivityLogServiceSettings();
      this._sentActivityLogBuffer = "";
      this._saveActivityLogBuffer = "";
    }

    //--------------------------------------
    // set / get global config
    //---------------------------------------

    //----------------------------
    public setPlaybackGlobalConfig(
      aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    ) {
      this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
    }

    //-----------------------------
    public getPlaybackGlobalConfig(): amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig {
      return this._aPlaybackGlobalConfig;
    }

    public zipOldSaveLogFiles(): void {
      const self = this;

      const errorGetFilelist2: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextGetFileList2: amGeneralContext.am_general.A_Context =
        self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextGetFileList2.setRemoteCallback(true);

      const fileStorage: string =
        self._aPlaybackGlobalConfig._aTmpFolder.getStorage();
      const filePath: string =
        self._activityLogSettings.getLocalSavePath() + 
        "/";

      const callbackGetFileList2 = function(res: amGeneralContext.am_general.A_Context) {
        res._arrayResult.forEach((value) => {
          if ((value._fileName !== self._dailyLogFileName) && !value._fileName.includes(".zip")) {
            const errorZipFile2: amGeneralError.am_general.A_Error =
              self._aServiceLocator._iEntityCreation.createDefaultError();
            const contextZipFile2: amGeneralContext.am_general.A_Context =
              self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextZipFile2.setRemoteCallback(true);

            const fileNameZip: string =
              value._fileName.slice(0, -3) + "zip";

            const zipFile2CallBack = function(ctx2: amGeneralContext.am_general.A_Context) {
              if (ctx2.getBoolResult()) {
                const errorRemoveTxtFile: amGeneralError.am_general.A_Error =
                  self._aServiceLocator._iEntityCreation.createDefaultError();
                const contextRemoveTxtFile: amGeneralContext.am_general.A_Context =
                  self._aServiceLocator._iEntityCreation.createDefaultContext();

                self._aSDKService._iSDKFileSystem.removeFile2(
                  fileStorage,
                  filePath,
                  value._fileName,
                  errorRemoveTxtFile,
                  contextRemoveTxtFile,
                  null
                );
              }
            };

            self._aSDKService._iSDKFileSystem.zipFile2(
              fileStorage,
              filePath,
              value._fileName,
              fileStorage,
              filePath,
              fileNameZip,
              errorZipFile2,
              contextZipFile2,
              zipFile2CallBack
            );
          }
        })
      }

      self._aSDKService._iSDKFileSystem.getFileList2(
        self._aPlaybackGlobalConfig._aTmpFolder.getStorage(),
        self._activityLogSettings.getLocalSavePath(),
        errorGetFilelist2,
        contextGetFileList2,
        callbackGetFileList2
      );
    }

    public dailyLogSelector(
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ) {
      const self = this;

      if (!self._activityLogSettings.getFileEnabled()) {
        if (context != null && callback != null) {
          return callback(context);
        } else {
          return;
        }
      }

      const errorGetFilelist2: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextGetFileList2: amGeneralContext.am_general.A_Context =
        self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextGetFileList2.setRemoteCallback(true);

      const errorDateTime: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const aDateTime: amGeneralDateTime.am_general.A_DateTime =
        self._aServiceLocator._iEntityCreation.createDefaultDateTime(
          errorDateTime
        );

      const currentDateInString: string = self._aUtilsService._iUtilsDateTime
        .getCrtDateTimeAsISOString(aDateTime)
        .replace(/[^0-9]/g, "")
        .substring(0, 8);

      const callbackGetFileList2 = function (
        res: amGeneralContext.am_general.A_Context
      ) {
        if (
          res._arrayResult.some((value) => (value._fileName as string).includes(currentDateInString))
        ) {
          let dailyFilesCount: number = 0;

          res._arrayResult.forEach((value) => {
            if ((value._fileName as string).includes(currentDateInString)) {
              ++dailyFilesCount;
            }
          });

          if (dailyFilesCount > 0) {
            const dailyFileName: string = self._activityLogSettings.getLocalSaveBaseName() +
            "-" +
            currentDateInString +
            "-" +
            dailyFilesCount +
            ".log";
            self._dailyLogFileName = dailyFileName;
            self._dailyLogFileDate = currentDateInString;

            self.zipOldSaveLogFiles();
              
            if (context != null && callback != null) {
              context.setBoolResult(true);
              return callback(context);
            }
          } else {
            const dailyFileName: string = res._arrayResult.find((value) =>
              (value._fileName as string).includes(currentDateInString)
            )._fileName;
            self._dailyLogFileName = dailyFileName;
            self._dailyLogFileDate = dailyFileName.substring(
              dailyFileName.indexOf("-") + 1, 
              dailyFileName.lastIndexOf("-")
            );

            self.zipOldSaveLogFiles();
            if (context != null && callback != null) {
              context.setBoolResult(true);
              return callback(context);
            }
          }
        } else {
          const errorCreateDailyLogFile: amGeneralError.am_general.A_Error =
            self._aServiceLocator._iEntityCreation.createDefaultError();
          const contextCreateDailyLogFile: amGeneralContext.am_general.A_Context =
            self._aServiceLocator._iEntityCreation.createDefaultContext();

          contextCreateDailyLogFile.setRemoteCallback(true);

          const name: string =
            self._activityLogSettings.getLocalSaveBaseName() +
            "-" +
            currentDateInString +
            "-" +
            1;

          const callbackCreateDailyLogFile = function () {
            if (context != null && callback != null) {
              return callback(context);
            }
          }
          self.createDailyLogFile(
            name,
            currentDateInString,
            errorCreateDailyLogFile,
            contextCreateDailyLogFile,
            callbackCreateDailyLogFile
          );
        }
      };

      self._aSDKService._iSDKFileSystem.getFileList2(
        self._aPlaybackGlobalConfig._aTmpFolder.getStorage(),
        self._activityLogSettings.getLocalSavePath(),
        errorGetFilelist2,
        contextGetFileList2,
        callbackGetFileList2
      );
    }

    public createDailyLogFile(
      name: string,
      date: string,
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ) {
      const self = this;

      const fileStorage: string =
        self._aPlaybackGlobalConfig._aTmpFolder.getStorage();
      const filePath: string = self._activityLogSettings.getLocalSavePath();
      const fileName: string = name + ".log";

      const errorWriteTextFile: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextWriteTextFile: amGeneralContext.am_general.A_Context =
        self._aServiceLocator._iEntityCreation.createDefaultContext();

      contextWriteTextFile.setRemoteCallback(true);

      const callbackCreateNewLog = function (
        res: amGeneralContext.am_general.A_Context
      ) {
        self._dailyLogFileName = fileName;
        self._dailyLogFileDate = date;
        self._saveActivityLogBufferSavingInProgress = false;
        if (
          context != null &&
          callback != null &&
          (res.getBoolResult() || res.getResult() === "success :)")
        ) {
          self.zipOldSaveLogFiles();
          context.setBoolResult(true);
          return callback(context);
        }
      };
      self._aSDKService._iSDKFileSystem.writeTextFile2(
        fileStorage,
        filePath,
        fileName,
        "",
        errorWriteTextFile,
        contextWriteTextFile,
        callbackCreateNewLog
      );
    }

    public getCurrentSavedActivityLogBuggers(): string {
      return this._saveActivityLogBuffer;
    }

    public logger(
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ) {
      const self = this;
      self._saveActivityLogBufferSavingInProgress = true;
      const message: string = self._saveActivityLogBuffer;

      self._saveActivityLogBuffer = "";

      const fileStorage: string =
        self._aPlaybackGlobalConfig._aTmpFolder.getStorage();
      const filePath: string =
        self._activityLogSettings.getLocalSavePath() + 
        "/";

      const errorAppendTextToFile: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextAppendTextToFile: amGeneralContext.am_general.A_Context =
        self._aServiceLocator._iEntityCreation.createDefaultContext();

      contextAppendTextToFile.setRemoteCallback(true);

      const callbackAppendTextToFile = function (
        ctx1: amGeneralContext.am_general.A_Context
      ) {
        if (ctx1.getBoolResult() || ctx1.getResult() == "success :)") {
          const errorGetFilelist2: amGeneralError.am_general.A_Error =
            self._aServiceLocator._iEntityCreation.createDefaultError();
          const contextGetFileList2: amGeneralContext.am_general.A_Context =
            self._aServiceLocator._iEntityCreation.createDefaultContext();
          contextGetFileList2.setRemoteCallback(true);

          const callbackGetFiles2 = function (
            ctx: amGeneralContext.am_general.A_Context
          ) {
            const currentFileSize: number = ctx._arrayResult.find((value) =>
              (value._fileName as string).includes(self._dailyLogFileName)
            )._size;

            const allowedFileSize: number =
              self._activityLogSettings.getLocalSplitSizeInMb() *
              Math.pow(1024, 2);

            const errorDateTime: amGeneralError.am_general.A_Error =
              self._aServiceLocator._iEntityCreation.createDefaultError();
            const aDateTime: amGeneralDateTime.am_general.A_DateTime =
              self._aServiceLocator._iEntityCreation.createDefaultDateTime(
                errorDateTime
              );

            const currentDateInString: string =
              self._aUtilsService._iUtilsDateTime
                .getCrtDateTimeAsISOString(aDateTime)
                .replace(/[^0-9]/g, "")
                .substring(0, 8);     

            let numberOfDailyFiles: number = 0;
            ctx._arrayResult.forEach((value) => {
              if (
                (value._fileName as string).includes(self._dailyLogFileName)
              ) {
                ++numberOfDailyFiles;
              }
            });

            if (currentFileSize >= allowedFileSize || self._dailyLogFileDate !== currentDateInString) {
              const errorZipFile2: amGeneralError.am_general.A_Error =
                self._aServiceLocator._iEntityCreation.createDefaultError();
              const contextZipFile2: amGeneralContext.am_general.A_Context =
                self._aServiceLocator._iEntityCreation.createDefaultContext();
              contextZipFile2.setRemoteCallback(true);

              const fileNameZip: string = self._dailyLogFileName.slice(0, -3) + "zip";

              const zipFile2CallBack = function (
                ctx3: amGeneralContext.am_general.A_Context
              ) {
                if (ctx3.getBoolResult()) {
                  const errorRemoveTxtFile: amGeneralError.am_general.A_Error =
                    self._aServiceLocator._iEntityCreation.createDefaultError();
                  const contextRemoveTxtFile: amGeneralContext.am_general.A_Context =
                    self._aServiceLocator._iEntityCreation.createDefaultContext();
                  contextRemoveTxtFile.setRemoteCallback(true);
                  const callbackRemoveFile2 = function (
                    ctx4: amGeneralContext.am_general.A_Context
                  ) {
                    if (ctx4.getBoolResult()) {
                      const errorCreateDailyLogFile: amGeneralError.am_general.A_Error =
                        self._aServiceLocator._iEntityCreation.createDefaultError();
                      const contextCreateDailyLogFile: amGeneralContext.am_general.A_Context =
                        self._aServiceLocator._iEntityCreation.createDefaultContext();

                      const name: string =
                        self._activityLogSettings.getLocalSaveBaseName() +
                        "-" +
                        currentDateInString +
                        "-" +
                        (numberOfDailyFiles + 1);

                      const callbackCreateDailyLogFile = function () {
                        if (
                          self.getCurrentSavedActivityLogBuggers().length > 0
                        ) {
                          self.logger(null, null, null);
                        }
                      };
                      self.createDailyLogFile(
                        name,
                        currentDateInString,
                        errorCreateDailyLogFile,
                        contextCreateDailyLogFile,
                        callbackCreateDailyLogFile
                      );
                    } else {
                      console.error("Failed to remove log text file");
                    }
                  };
                  self._aSDKService._iSDKFileSystem.removeFile2(
                    fileStorage,
                    filePath,
                    self._dailyLogFileName,
                    errorRemoveTxtFile,
                    contextRemoveTxtFile,
                    callbackRemoveFile2
                  );
                }
              };
              self._aSDKService._iSDKFileSystem.zipFile2(
                fileStorage,
                filePath,
                self._dailyLogFileName,
                fileStorage,
                filePath,
                fileNameZip,
                errorZipFile2,
                contextZipFile2,
                zipFile2CallBack
              );
            } else {
              self._saveActivityLogBufferSavingInProgress = false;
              if (self.getCurrentSavedActivityLogBuggers().length > 0) {
                self.logger(null, null, null);
              }
            }
          };
          self._aSDKService._iSDKFileSystem.getFileList2(
            self._aPlaybackGlobalConfig._aTmpFolder.getStorage(),
            self._activityLogSettings.getLocalSavePath(),
            errorGetFilelist2,
            contextGetFileList2,
            callbackGetFiles2
          );
        }
      };
      self._aSDKService._iSDKFileSystem.appendTextToFile(
        fileStorage,
        filePath,
        self._dailyLogFileName,
        message,
        errorAppendTextToFile,
        contextAppendTextToFile,
        callbackAppendTextToFile
      );
    }

    public createInitialFolders(
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ): void {
      const self = this;
      const errorCreateFolder1: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextCreateFolder1: amGeneralContext.am_general.A_Context =
        self._aServiceLocator._iEntityCreation.createDefaultContext();

      const errorCreateFolder2: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextCreateFolder2: amGeneralContext.am_general.A_Context =
        self._aServiceLocator._iEntityCreation.createDefaultContext();

      contextCreateFolder1.setRemoteCallback(true);
      contextCreateFolder2.setRemoteCallback(true);

      const callbackCreateFolder1 = function () {
        const callbackCreateFolder2 = function () {
          return callback(context);
        };
        self._aSDKService._iSDKFileSystem.createFolder2(
          self._aPlaybackGlobalConfig._aTmpFolder.getStorage(),
          self._activityLogSettings.getLocalSentPath(),
          errorCreateFolder2,
          contextCreateFolder2,
          callbackCreateFolder2
        );
      };

      self._aSDKService._iSDKFileSystem.createFolder2(
        self._aPlaybackGlobalConfig._aTmpFolder.getStorage(),
        self._activityLogSettings.getLocalSavePath(),
        errorCreateFolder1,
        contextCreateFolder1,
        callbackCreateFolder1
      );
    }

    public getActivityLogServiceSettings(): amGeneralActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings {
      return this._activityLogSettings;
    }

    public setActivityLogServiceSettings(
      settings: amGeneralActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings
    ) {
      this._aPlaybackGlobalConfig.setActivityLogServiceSettings(settings);
    }

    public startActivityLogService(
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ): void {
      const self = this;
      if (!self._activityLogSettings.getActivityLogEnable()) {
        if (context != null && callback != null) {
          return callback(context);
        } else {
          return;
        }
      }

      const errorCreateInitialFolders: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextCreateInitialFolders: amGeneralContext.am_general.A_Context =
        self._aServiceLocator._iEntityCreation.createDefaultContext();

      contextCreateInitialFolders.setRemoteCallback(true);

      const callbackCreateInitialFolders = function (
        ctx1: amGeneralContext.am_general.A_Context
      ) {
        const errorDailyLogSelector: amGeneralError.am_general.A_Error =
          self._aServiceLocator._iEntityCreation.createDefaultError();
        const contextDailyLogSelector: amGeneralContext.am_general.A_Context =
          self._aServiceLocator._iEntityCreation.createDefaultContext();

        contextDailyLogSelector.setRemoteCallback(true);

        const callbackDailySelector = function (
          ctx2: amGeneralContext.am_general.A_Context
        ) {
          self.getUnsentActivityLogFiles();

          if (self._activityLogSettings.getAutoUploadEnabled()) {
            self.startActivityLogsTimer();
          }
          if (context != null && callback != null) {
            return callback(context);
          }
        };

        self.dailyLogSelector(
          errorDailyLogSelector,
          contextDailyLogSelector,
          callbackDailySelector
        );
      };

      self.createInitialFolders(
        errorCreateInitialFolders,
        contextCreateInitialFolders,
        callbackCreateInitialFolders
      );
    }

    public startActivityLogsTimer(): void {
      const self = this;

      setInterval(() => {
        const errorCreateActivityLogReport: amGeneralError.am_general.A_Error =
          self._aServiceLocator._iEntityCreation.createDefaultError();
        const contextCreateActivityLogReport: amGeneralContext.am_general.A_Context =
          self._aServiceLocator._iEntityCreation.createDefaultContext();

        self.createActivityLogReport(
          errorCreateActivityLogReport,
          contextCreateActivityLogReport,
          null
        );
      }, self._activityLogSettings.getAutoUploadIntervalSeconds() * 1000);
    }

    public getUnsentActivityLogFiles(): void {
      const self = this;
      const errorGetFileList2: amGeneralError.am_general.A_Error =
        this._aServiceLocator._iEntityCreation.createDefaultError();
      const contextGetFileList2: amGeneralContext.am_general.A_Context =
        this._aServiceLocator._iEntityCreation.createDefaultContext();

      contextGetFileList2.setRemoteCallback(true);

      const callback = function (res: amGeneralContext.am_general.A_Context) {
        let fList = res._arrayResult;

        fList.forEach((value, index) => {
          if (fList[index]._type == "file") {
            const logFileName: string = fList[index]._fileName;
            if (logFileName.includes("zip")) {
              self.addLogsToUnsentMap(logFileName);
            } else {
              const errorZipFile2: amGeneralError.am_general.A_Error =
                self._aServiceLocator._iEntityCreation.createDefaultError();
              const contextZipFile2: amGeneralContext.am_general.A_Context =
                self._aServiceLocator._iEntityCreation.createDefaultContext();
      
              contextZipFile2.setRemoteCallback(true);

              const fileNameZip: string = logFileName.slice(0, -3) + "zip";
              const fileStorage: string =
                self._aPlaybackGlobalConfig._aTmpFolder.getStorage();
              const filePath: string =
                self._activityLogSettings.getLocalSentPath();

              const zipFile2CallBack = function (
                ctx3: amGeneralContext.am_general.A_Context
              ) {
                if (ctx3.getBoolResult()) {
                  const errorRemoveTxtFile: amGeneralError.am_general.A_Error =
                    self._aServiceLocator._iEntityCreation.createDefaultError();
                  const contextRemoveTxtFile: amGeneralContext.am_general.A_Context =
                    self._aServiceLocator._iEntityCreation.createDefaultContext();
                  contextRemoveTxtFile.setRemoteCallback(true);
  
                  const callbackRemoveFile2 = function (
                    ctx4: amGeneralContext.am_general.A_Context
                  ) {
                    if (ctx4.getBoolResult()) {
                      self.addLogsToUnsentMap(fileNameZip);
                    } else {
                      console.error("Failed to remove log text file");
                    }
                  };
  
                  self._aSDKService._iSDKFileSystem.removeFile2(
                    fileStorage,
                    filePath,
                    logFileName,
                    errorRemoveTxtFile,
                    contextRemoveTxtFile,
                    callbackRemoveFile2
                  );
                }
              };
              self._aSDKService._iSDKFileSystem.zipFile2(
                fileStorage,
                filePath,
                logFileName,
                fileStorage,
                filePath,
                fileNameZip,
                errorZipFile2,
                contextZipFile2,
                zipFile2CallBack
              );
            }
          }
        });
      };

      this._aSDKService._iSDKFileSystem.getFileList2(
        this._aPlaybackGlobalConfig._aTmpFolder.getStorage(),
        this._activityLogSettings.getLocalSentPath(),
        errorGetFileList2,
        contextGetFileList2,
        callback
      );
    }

    public addLogsToUnsentMap(
      fileName: string,
      file?: amGeneralFileInfo.am_general.A_FileInfo
    ): void {
      const self = this;
      const errorNewFileInfo: amGeneralError.am_general.A_Error =
        this._aServiceLocator._iEntityCreation.createDefaultError();
      const newFileInfo: amGeneralFileInfo.am_general.A_FileInfo =
        this._aServiceLocator._iEntityCreation.createDefaultFileInfo(
          errorNewFileInfo
        );

      if (file !== undefined) {
        self._aUnsentLogFiles.set(self._aUnsentLogFiles.size + 1, file);
      } else {
        newFileInfo.setName(fileName);
        newFileInfo.setPath(
          this._activityLogSettings.getLocalSentPath()
        );
        newFileInfo.setStorage(
          self._aPlaybackGlobalConfig._aTmpFolder.getStorage()
        );

        self._aUnsentLogFiles.set(self._aUnsentLogFiles.size + 1, newFileInfo);
      }
    }

    public removeNnnecessaryUnsentLogs(): void {
      if (!this._activityLogSettings.getAutoUploadEnabled()) {
        return;
      }

      const numberOfAllowedUnsentLogs: number = 3;

      this._aUnsentLogFiles.forEach(
        (item: amGeneralFileInfo.am_general.A_FileInfo, key: number) => {
          if (key > numberOfAllowedUnsentLogs) {
            const errorHandleRemoveFile: amGeneralError.am_general.A_Error =
              this._aServiceLocator._iEntityCreation.createDefaultError();
            const contextHandleRemoveFile: amGeneralContext.am_general.A_Context =
              this._aServiceLocator._iEntityCreation.createDefaultContext();

            this._aUnsentLogFiles.delete(key);
            this.handleSentActivityLogs(
              item.getName(),
              errorHandleRemoveFile,
              contextHandleRemoveFile,
              null
            );
          }
        }
      );
    }

    public addLogMessage(
      messageType: amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes,
      messagePrefix: string,
      message: string,
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ): void {
      const self = this;
      if (!self._activityLogSettings.getActivityLogEnable()) return;

      const verbosity: amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType =
        this._activityLogSettings.getVerbosityType();

      if (
        messageType ==
        amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes
            .Debug &&
        verbosity !==
        amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType
            .AllAndDebug
      ) {
        return;
      }
      if (
        messageType ==
        amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes
            .Info &&
        (verbosity ==
          amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType
            .ErrorsAndWarnings ||
          verbosity ==
          amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType
              .Errors)
      ) {
        return;
      }
      if (
        messageType ==
        amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes
            .Warning &&
        verbosity ==
        amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType.Errors
      ) {
        return;
      }
      var errorLogMessage: amGeneralError.am_general.A_Error = error;
      var contextLogMessage: amGeneralContext.am_general.A_Context = context;
      //--------------
      var callbackLogMessage = function callbackLogMessage(
        ctxCb: amGeneralContext.am_general.A_Context
      ) {};
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
      self.addLogMessage2(
        messageType,
        messagePrefix,
        message,
        errorLogMessage,
        contextLogMessage,
        callbackLogMessage
      );
    }

    public addLogMessage2(
      messageType: amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes,
      messagePrefix: string,
      message: string,
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ) {
      const self = this;
      const strCrtDateTime =
        self._aUtilsService._iUtilsDateTime.getCrtDateTimeAsString2(
          "YYYYMMDD",
          "HH:mm:ss.SSS",
          " - "
        );
      const newMessage =
        strCrtDateTime +
        "\t\t" +
        messageType +
        ": in " +
        messagePrefix +
        " with message: " +
        message +
        "\r\n";
      self._sentActivityLogBuffer += newMessage;

      const currentSentBufferSize: number = self._sentActivityLogBuffer.length;
      const allowedSentBufferSize: number = self._activityLogSettings.getSendBufferMaxSizeKb() * Math.pow(1024, 1);

      const currentSaveBufferSize: number = self._saveActivityLogBuffer.length;
      const allowedSaveBufferSize: number = self._activityLogSettings.getSaveBufferMaxSizeKb() * Math.pow(1024, 1);

      if (
        self._activityLogSettings.getFileEnabled()
      ) {
        self._saveActivityLogBuffer += newMessage;
        if (!self._saveActivityLogBufferSavingInProgress && (currentSaveBufferSize >= allowedSaveBufferSize)) {
          self.logger(error, context, callback);
        }
      }

      if (
        (currentSentBufferSize >= allowedSentBufferSize) &&
        self._activityLogSettings.getAutoUploadEnabled()
      ) {
        self.createActivityLogReport(error, context, callback);
      }
    }

    public createActivityLogReport(
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ): void {
      const self = this;
      if (self._sentActivityLogBuffer.length === 0) {
        return;
      }
      const reports: string = self._sentActivityLogBuffer;
      self._sentActivityLogBuffer = "";

      const errorDateTime: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const aDateTime: amGeneralDateTime.am_general.A_DateTime =
        self._aServiceLocator._iEntityCreation.createDefaultDateTime(
          errorDateTime
        );
      const uniqueFileName: string =
        self._activityLogSettings.getLocalSentBaseName() + "-" +
        self._aUtilsService._iUtilsDateTime
          .getCrtDateTimeAsISOString(aDateTime)
          .replace(/[^0-9]/g, "");
      const fileStorage: string =
        self._aPlaybackGlobalConfig._aTmpFolder.getStorage();
      const filePath: string =
        self._activityLogSettings.getLocalSentPath();
      const fileNameText: string = uniqueFileName + ".log";
      const fileNameZip: string = uniqueFileName + ".zip";

      const errorWriteTextFile: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextWriteTextFile: amGeneralContext.am_general.A_Context =
        self._aServiceLocator._iEntityCreation.createDefaultContext();

      contextWriteTextFile.setRemoteCallback(true);

      if (!this._sendingPreviousLogsInProgress) {
        const writeTextFileCallback = function (
          ctx1: amGeneralContext.am_general.A_Context
        ) {
          if (ctx1.getBoolResult() || ctx1.getResult() === "success :)") {
            const errorZipFile2: amGeneralError.am_general.A_Error =
              self._aServiceLocator._iEntityCreation.createDefaultError();
            const contextZipFile2: amGeneralContext.am_general.A_Context =
              self._aServiceLocator._iEntityCreation.createDefaultContext();
            contextZipFile2.setRemoteCallback(true);
            const zipFile2CallBack = function (
              ctx3: amGeneralContext.am_general.A_Context
            ) {
              if (ctx3.getBoolResult()) {
                const errorRemoveTxtFile: amGeneralError.am_general.A_Error =
                  self._aServiceLocator._iEntityCreation.createDefaultError();
                const contextRemoveTxtFile: amGeneralContext.am_general.A_Context =
                  self._aServiceLocator._iEntityCreation.createDefaultContext();
                contextRemoveTxtFile.setRemoteCallback(true);

                const callbackRemoveFile2 = function (
                  ctx4: amGeneralContext.am_general.A_Context
                ) {
                  if (ctx4.getBoolResult()) {
                    self.sendActivityLogReport(
                      fileNameZip,
                      error,
                      context,
                      callback
                    );
                  } else {
                    console.error("Failed to remove log text file");
                  }
                };

                self._aSDKService._iSDKFileSystem.removeFile2(
                  fileStorage,
                  filePath,
                  fileNameText,
                  errorRemoveTxtFile,
                  contextRemoveTxtFile,
                  callbackRemoveFile2
                );
              }
            };
            self._aSDKService._iSDKFileSystem.zipFile2(
              fileStorage,
              filePath,
              fileNameText,
              fileStorage,
              filePath,
              fileNameZip,
              errorZipFile2,
              contextZipFile2,
              zipFile2CallBack
            );
          }
        };
        self._aSDKService._iSDKFileSystem.writeTextFile2(
          fileStorage,
          filePath,
          fileNameText,
          reports,
          errorWriteTextFile,
          contextWriteTextFile,
          writeTextFileCallback
        );
      }
    }

    public sendActivityLogReport(
      fileName: string,
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ): void {
      const self = this;
      const errorSendPreviousActivityLogReports: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextSendPreviousActivityLogReports: amGeneralContext.am_general.A_Context =
        self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextSendPreviousActivityLogReports.setRemoteCallback(true);

      const sendActivityLogReportFunction = function () {
        const aZipFile: amGeneralFileInfo.am_general.A_FileInfo =
          self._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
        aZipFile.setStorage(
          self._aPlaybackGlobalConfig._aTmpFolder.getStorage()
        );
        aZipFile.setPath(
          self._activityLogSettings.getLocalSentPath()
        );
        aZipFile.setName(fileName);

        self.sendActivityLogReportSingle(
          fileName,
          aZipFile,
          false,
          error,
          context,
          callback
        );
      };

      if (this._aUnsentLogFiles.size > 0) {
        this.removeNnnecessaryUnsentLogs();
        this.sendPreviousActivityLogReports(
          false,
          errorSendPreviousActivityLogReports,
          contextSendPreviousActivityLogReports,
          sendActivityLogReportFunction
        );
      } else {
        sendActivityLogReportFunction();
      }
    }

    public sendActivityLogReportSingle(
      fileName: string,
      file: amGeneralFileInfo.am_general.A_FileInfo,
      isOldLog: boolean,
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ): void {
      const self = this;
      const url = `${self._aPlaybackGlobalConfig.getBaseServerApiUrl()}/${self._activityLogSettings.getServerEndpointPath()}/${self._activityLogSettings.getServerEndpoint()}`;
      
      self._aHttpRequest.reset();
      self._aHttpRequest.setMethod("POST");
      self._aHttpRequest.setUrlPath(url);

      let logFilename: string = "";
      if (fileName.length > 4 && fileName.slice(-4) == ".zip") {
        logFilename = fileName.slice(0, -3) + "log";
      }

      const urlParams = {
        filename: logFilename,
        serial: self._aPlaybackGlobalConfig.getSerialNumber(),
      };
      self._aHttpRequest.setUrlParams(JSON.stringify(urlParams));
      self._aHttpRequest.setBoundary("380009360982575615081974");
      self._aHttpRequest.setMultipart();

      const errorCDHeader: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const aCDHeader: amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader =
        self._aServiceLocator._iEntityCreation.createDefaultContentDispositionHeader(
          errorCDHeader
        );
      aCDHeader.setHeaderName("file");
      aCDHeader.setHeaderFileBinary(true);
      aCDHeader.setHeaderFile(file);
      self._aHttpRequest.addCDHeader(aCDHeader);

      const errorSendRequest: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextSendRequest: amGeneralContext.am_general.A_Context =
        self._aServiceLocator._iEntityCreation.createDefaultContext();
      const requestSent = function (
        ctx1: amGeneralContext.am_general.A_Context
      ) {
        if (
          typeof ctx1 !== "undefined" &&
          ctx1 &&
          !ctx1.isError() &&
          context != null
        ) {
          context.setBoolResult(true);
          document.getElementById("rend.message").innerHTML +=
            "<p>Activity log request sent succesfully</p>";
          self.handleSentActivityLogs(fileName, null, null, null);
          if (callback !== null) {
            return callback(context);
          }
        } else {
          context.setBoolResult(false);
          error.setError(
            ctx1.getError().getErrId(),
            ctx1.getError().getErrMsg()
          );
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
      self._aUtilsService._iUtilsWeb.sendHttpRequest(
        self._aHttpRequest,
        errorSendRequest,
        contextSendRequest,
        requestSent
      );
    }

    public retryReport(
      fileName: string,
      file: amGeneralFileInfo.am_general.A_FileInfo,
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ): void {
      if (!this._activityLogRetriedBefore) {
        this.addLogMessage(
          amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes
            .Error,
          this.getServiceName(),
          "Log send failed: retrying",
          error,
          context,
          callback
        );
        this._activityLogRetriedBefore = true;
        this.sendActivityLogReportSingle(
          fileName,
          file,
          false,
          error,
          context,
          callback
        );
      } else {
        this.addLogsToUnsentMap(fileName, file);
        if (callback !== null) {
          return callback(context);
        }
      }
    }

    public handleSentActivityLogs(
      fileName: string,
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ): void {
      const self = this;
      const errorDeleteFile2: amGeneralError.am_general.A_Error =
        self._aServiceLocator._iEntityCreation.createDefaultError();
      const contextDeleteFile2: amGeneralContext.am_general.A_Context =
        self._aServiceLocator._iEntityCreation.createDefaultContext();
      contextDeleteFile2.setRemoteCallback(true);

      const callbackDeleteFile2 = (
        ctx2: amGeneralContext.am_general.A_Context
      ) => {
        if (ctx2.getBoolResult() && context != null) {
          context.setBoolResult(true);
          if (callback !== null) {
            return callback(context);
          }
        } else {
          if (context != null) {
            context.setError(error);
          }
        }
      };

      self._aSDKService._iSDKFileSystem.removeFile2(
        self._aPlaybackGlobalConfig._aTmpFolder.getStorage(),
        self._activityLogSettings.getLocalSentPath(),
        fileName,
        errorDeleteFile2,
        contextDeleteFile2,
        callbackDeleteFile2
      );
    }

    public sendPreviousActivityLogReports(
      bIgnoreErrors: boolean,
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ) {
      const logs: Map<number, amGeneralFileInfo.am_general.A_FileInfo> =
        this._aUnsentLogFiles;
      var transferMediaFilesArray: Array<amGeneralFileInfo.am_general.A_FileInfo> =
        Array.from(logs.values());

      return this.sendReportsOneByOne(
        transferMediaFilesArray,
        bIgnoreErrors,
        error,
        context,
        callback
      );
    }

    public sendReportsOneByOne(
      transferMediaFilesArray: Array<amGeneralFileInfo.am_general.A_FileInfo>,
      bIgnoreErrors: boolean,
      error: amGeneralError.am_general.A_Error,
      context: amGeneralContext.am_general.A_Context,
      callback
    ) {
      const self = this;
      const nbFiles: number = transferMediaFilesArray.length;
      let startFileIdx = 0;
      let logsSentSuccessfully: [number, string][] = [];
      self._sendingPreviousLogsInProgress = true;
      self._activityLogRetriedBefore = true;

      //---
      const callbackDownloadOneFile = function callbackDownloadOneFile(
        crtFileIdx: number,
        ctx1: amGeneralContext.am_general.A_Context
      ) {
        //-------- succesfully sent all the files
        if (crtFileIdx >= nbFiles) {
          if (logsSentSuccessfully.length > 0) {
            logsSentSuccessfully.forEach((logArray: [number, string]) => {
              const logId: number = logArray[0];
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

        const crtFileTransfer: amGeneralFileInfo.am_general.A_FileInfo =
          transferMediaFilesArray[crtFileIdx];

        var callbackSendFile = function callbackSendFile(
          ctx2: amGeneralContext.am_general.A_Context
        ) {
          var downloadFileWell = ctx2.getBoolResult();
          if (!bIgnoreErrors) {
            if (!downloadFileWell) {
              context.setError(error);
              context.setObjectResult(null);
              return;
            } else {
              error.setError(0, "");
              logsSentSuccessfully.push([
                crtFileIdx,
                crtFileTransfer.getName(),
              ]);
            }
          } else {
            error.setError(0, "");
            logsSentSuccessfully.push([crtFileIdx, crtFileTransfer.getName()]);
          }
          return callbackDownloadOneFile(++crtFileIdx, ctx2);
        };
        self.sendActivityLogReportSingle(
          crtFileTransfer.getName(),
          crtFileTransfer,
          true,
          error,
          context,
          callbackSendFile
        );
      };

      callbackDownloadOneFile(startFileIdx, context);
    }
  }
}
