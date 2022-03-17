import amNonrenderingServicesFileSettingsUpdate  = require("../../../abstract/am_nonrenderingservices/as_filesettingsupdate/AS_FileSettingsUpdate");

import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amConfigurationServicesServiceLocator   = require("../../../abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amTransversalServicesDownloadService   = require("../../../abstract/am_transversalservices/as_downloadservice/AS_DownloadService");

import amGeneralError                          = require("../../../abstract/am_general/a_error/A_Error");
import amGeneralFileInfo                       = require("../../../abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralFileTransfer                   = require("../../../abstract/am_general/ae_filetransfer/AE_FileTransfer");
import amGeneralShaProperties                  = require("../../../abstract/am_general/a_shaproperties/A_ShaProperties");
import amGeneralContext                        = require("../../../abstract/am_general/a_context/A_Context");
import amGeneralFactoryDescription             = require("../../../abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../abstract/am_transversalservices/a_logservice/A_LogService");
import amGeneralActivityLogMessageTypes        = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");

import amGeneralaAppServerProperties           = require("../../../abstract/am_general/a_appserverproperties/A_AppServerProperties");


import amTransversalServicesSDKService         = require("../../../abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amTransversalServicesActivityLogService = require("../../../abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import  amAppInstallProperties          = require("../../../abstract/am_general/a_appinstallproperties/A_AppInstallProperties");

import amAIFileSettingsUpdateConfig = require("../../../abstract/am_nonrenderingservices/as_filesettingsupdate/AI_FileSettingsUpdateConfig");
import amAIFileSettingsUpdateMain   = require("../../../abstract/am_nonrenderingservices/as_filesettingsupdate/AI_FileSettingsUpdateMain");

import amFileSettingsUpdateConfiguration = require("../../../abstract/am_nonrenderingservices/as_filesettingsupdate/AE_FileSettingsUpdateConfiguration");

import rmGeneral    = require("../../rm_general/r_service/R_Service");

import rmRIFileSettingsUpdateConfig  = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_filesettingsupdate/RI_FileSettingsUpdateConfig_R");
import rmRIFileSettingsUpdateMain    = require("./RI_FileSettingsUpdateMain_R");


export module rm_nonrenderingservices
{
  export class RS_FileSettingsUpdate extends  rmGeneral.rm_general.R_Service 
                                     implements amNonrenderingServicesFileSettingsUpdate.am_nonrenderingservices.AS_FileSettingsUpdate
  {
    //---------- interfaces
    _iFileSettingsUpdateConfig          : amAIFileSettingsUpdateConfig.am_nonrenderingservices.AI_FileSettingsUpdateConfig ;
    _iFileSettingsUpdateMain            : amAIFileSettingsUpdateMain.am_nonrenderingservices.AI_FileSettingsUpdateMain ;

    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    _aPlaybackGlobalConfig : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
    _aDownloadService      : amTransversalServicesDownloadService.am_transversalservices.AS_DownloadService;
    _aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;

    _fileTransferList : Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>;

    _aAppInstallProperties : amAppInstallProperties.am_general.A_AppInstallProperties;

    _bWithActivityLog : boolean;

    _aFileSettingsUpdateConfiguration         : amFileSettingsUpdateConfiguration.am_nonrenderingservices.AE_FileSettingsUpdateConfiguration ;


    _appServerBaseUrl        : string ;//= "http://192.168.0.222:9080/";
    _appServerBasePath       : string ; //= "app/tizen/";
    _serialNo                : string ; //= "PC100001";
    _mediaServerBaseUrl      : string ; //= "https://mvision-qa.moodnet.eu/";

    _hardwareAppServerBaseUrl : string;
    _hardwareSerialNo         : string;

    _strMainDebugParam        : string;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iFileSettingsUpdateConfig            = new rmRIFileSettingsUpdateConfig.rm_nonrenderingservices.RI_FileSettingsUpdateConfig_R(this);
      this._iFileSettingsUpdateMain              = new rmRIFileSettingsUpdateMain.rm_nonrenderingservices.RI_FileSettingsUpdateMain_R(this);

      this._aLogService = aLogService;

      this._aPlaybackGlobalConfig = null;
      this._aDownloadService      = null;
      this._aActivityLogService   = null;
      this._fileTransferList      = null;
      this._aAppInstallProperties = null;

      this._bWithActivityLog = false;

      this._aFileSettingsUpdateConfiguration = null;

      this._appServerBaseUrl        = "";//"http://192.168.0.222:9080/";
      this._appServerBasePath       = "";//"app/tizen/";
      this._serialNo                = "";//"PC100001";
      this._mediaServerBaseUrl      = "";//"https://mvision-qa.moodnet.eu/";
  
      this._hardwareAppServerBaseUrl = "";
      this._hardwareSerialNo         = "";

      this._strMainDebugParam        = "false"
    }


    //------------------------------
    public injectDependencies( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                               error : amGeneralError.am_general.A_Error) : number     
 
    {
      this._aServiceLocator    = aServiceLocator; //;<amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator>this._aServiceContainer._iServiceManager.getServiceByAbstractName("A_ServiceLocator", null, error);

      var id = 0;
      this._aDownloadService   = this._aServiceLocator._iServiceCreation.createDefaultService_DownloadService(
                                                                             this._aServiceContainer, this._aServiceLocator, this._aLogService, id, error );

      this._aAppInstallProperties = this._aServiceLocator._iEntityCreation.createDefaultAppInstallProperties(error);

      this._fileTransferList = null;

      return 0;

    }

    //----------------------------------------
    public setSDKService(aSDKService: amTransversalServicesSDKService.am_transversalservices.A_SDK_JsTV)
    {
      this._aSDKService = aSDKService;    
      if (this._aDownloadService != null)
        this._aDownloadService._iService.setSDKService(aSDKService);
    }
    
    //--------------------------------------
    // set / get global config
    //---------------------------------------

    //----------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;      
    }

    //-----------------------------
    public getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._aPlaybackGlobalConfig;
    }


    //--------------------------------------
    // set / get download service
    //---------------------------------------

    //----------------------------
    public setDownloadService( aDownloadService: amTransversalServicesDownloadService.am_transversalservices.AS_DownloadService)
    {
      this._aDownloadService = aDownloadService;
    }

    //-----------------------------
    public getDownloadService() : amTransversalServicesDownloadService.am_transversalservices.AS_DownloadService
    {
      return this._aDownloadService;
    }

    //--------------------------------------
    // set / get activity log service
    //---------------------------------------

    public setActivityLogService( aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      this._aActivityLogService = aActivityLogService;
    }

    //-----------------------------
    public getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._aActivityLogService;
    }

    //--------------------------------
    //   download software
    //--------------------------------

    //--------------------------------
    public downloadSoftware( softwareType: string, 
                             aSoftwareTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      //----------------
      var self = this;
      var aSoftwareSrcFile      = aSoftwareTransferFile.getSrcFileInfo();
      var aSoftwareTmpFile      = aSoftwareTransferFile.getTmpFileInfo();
      var aSoftwareShaSrcFile   = aSoftwareTransferFile.getSrcShaFileInfo();
      var aSoftwareShaTmpFile   = aSoftwareTransferFile.getTmpShaFileInfo();
      var aSoftwareShaCrtDstFile   = aSoftwareTransferFile.getDstShaFileInfo();
      var aSoftwareComputedShaTmpFile   = aSoftwareTransferFile.getComputedShaFileInfo();

      var errorDownloadSoftware:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextDownloadSoftware:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackDownloadSoftware = function callbackDownloadSoftware(ctx1:amGeneralContext.am_general.A_Context)
      {
        //==
        var errorDownloadSoftwareSha:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextDownloadSoftwareSha:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        if (ctx1.isError())
        {
          //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
          if (error != null) {
            error.setError(ctx1.getError().getErrId(),ctx1.getError().getErrMsg());
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
              `${ctx1.getError().getErrId()}: ${ctx1.getError().getErrMsg()}`, 
              null, 
              null, 
              null
            );
          }

          if (context != null)
          {
            context.setError(error);
            //context.setBoolResult(true);
            return callback(context);  
          }
          return;  
        }
        var callbackDownloadSoftwareSha = function callbackDownloadSoftwareSha(ctx2)
        {

          var errorComputeSha:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextComputeSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var shaProperties:amGeneralShaProperties.am_general.A_ShaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);  
          shaProperties.setSrcFileInfo(aSoftwareTmpFile);
          shaProperties.setShaFileInfo(aSoftwareComputedShaTmpFile);
          var callbackComputeSha = function callbackComputeSha(ctx3 : amGeneralContext.am_general.A_Context)
          {
            var shaComputeFile = ctx3.getResult();
            var errorReadTmpShaFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextReadTmpShaFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4 : amGeneralContext.am_general.A_Context)
            {
              var shaDownloadedFile = ctx4.getResult();
              var downloadSoftwareWell = true;
              if (context != null)
              {
                if (ctx4.isError())
                {
                  downloadSoftwareWell = false;
                }else{
                  downloadSoftwareWell = false;
                  if (aSoftwareTransferFile.isTheSameShaValue(shaComputeFile, shaDownloadedFile))
                    downloadSoftwareWell = true;
                }
                context.setBoolResult(downloadSoftwareWell)
                context.setError(error);
                //context.setBoolResult(true);
                return callback(context);  
              }
            }
            //==================================================
            //document.getElementById("rend.message").innerHTML += "<p>read server sha file"</p>";
            contextReadTmpShaFile.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.readTextFile2(
                                                           aSoftwareShaTmpFile.getStorage(), aSoftwareShaTmpFile.getPath(), aSoftwareShaTmpFile.getName(), 
                                                           errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);    

          }
          //==================================================
          //document.getElementById("rend.message").innerHTML += "<p>start download software"</p>";
          contextComputeSha.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties,
                                                            errorComputeSha, contextComputeSha, callbackComputeSha);    
        }  
        //==================================================
        //document.getElementById("rend.message").innerHTML += "<p>start download software"</p>";
        contextDownloadSoftwareSha.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.downloadFile2( aSoftwareShaSrcFile.getFullName(), 
                                                         aSoftwareShaTmpFile.getStorage(), aSoftwareShaTmpFile.getPath(), aSoftwareShaTmpFile.getName(), 
                                                         errorDownloadSoftwareSha, contextDownloadSoftwareSha, callbackDownloadSoftwareSha);    
      }
      //==================================================
      //document.getElementById("rend.message").innerHTML += "<p>start download software"</p>";
      contextDownloadSoftware.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.downloadFile2( aSoftwareSrcFile.getFullName(), 
                                                       aSoftwareTmpFile.getStorage(), aSoftwareTmpFile.getPath(), aSoftwareTmpFile.getName(), 
                                                       errorDownloadSoftware, contextDownloadSoftware, callbackDownloadSoftware);  
    }

        //-------------------------------------------
    public existsMediaFile( contentFileId : number,
                            mediaFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>) : boolean
                            
    {
      if (mediaFilesList.has(contentFileId))
        return true;
      return false;
    }

    
    //-------------------------------------------
    public addSoftwareFile( aSoftwareType: string, 
                            softwareFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                            aSoftwareFileTransfer     : amGeneralFileTransfer.am_general.AE_FileTransfer, 
                            contentFileId : number,  srcFileType: string,
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number
    {
      var self = this;
      if ( this.existsMediaFile(contentFileId, softwareFilesList))
         return 1;
      softwareFilesList.set(contentFileId, aSoftwareFileTransfer);
      return 0;
    }

    //--------------------------------
    public buildSoftwareFilesListToDownload( softwareType: string, 
                                             aSoftwareTransferFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                             aSoftwareConfigFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {  
      var self = this;
      self._fileTransferList = new Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>();
   
      this.addSoftwareFile( softwareType, self._fileTransferList, 
                            aSoftwareConfigFileTransfer, 
                            0,//
                            "xml",
                            error, context, callback) ;
      if (context != null)
        context.setError(error);
          
      return callback(context);    
    }

    
    //--------------------------------
    public downloadSoftwareFilesList( 
                                    softwareType: string, 
                                    aSoftwareFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    aSoftwareConfigTransferFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {    
      var bIgnoreErrors = false;
      return this._aDownloadService._iDownloadMain.downloadFiles_fromMap(this._fileTransferList, bIgnoreErrors, error, context, callback);
    }


    //===============================
    //===============================

    //====================================================
    public hasNewSoftwareOrNewConfigAndIfNotInstallEmptyUrl( softwareType: string, 
                                      aSoftwareTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                      aSoftwareConfigTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      var bHasNewSoftwareOrNewConfig = false;
      var errorHasNewSoftware:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextHasNewSoftware:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackHasNewSoftwareOrNewConfig = function callbackHasNewSoftwareOrNewConfig(ctxHasNewSoftwareOrNewConfig :amGeneralContext.am_general.A_Context)
      {
          //----------- not a new software  - nothing to do ----
          bHasNewSoftwareOrNewConfig =ctxHasNewSoftwareOrNewConfig.getBoolResult();
          if (bHasNewSoftwareOrNewConfig)
          {
            if (error != null)
            {
              if (ctxHasNewSoftwareOrNewConfig.isError()) {
                error.setError(493,"ERROR 993: hasNewSoftwareOrNewConfig: [" + ctxHasNewSoftwareOrNewConfig.getError().getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  `493: hasNewSoftwareOrNewConfig: [${ctxHasNewSoftwareOrNewConfig.getError().getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
              }

            } 
            if (context != null)
            {
              context.setError(error);
              context.setBoolResult(bHasNewSoftwareOrNewConfig); 
              return callback(context);  
            }
            return;
          }
          //====================================
          var errorAppInstall:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextAppInstall:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
          var callbackAppInstall2 = function callbackAppInstall2(ctxInstall: amGeneralContext.am_general.A_Context)
          {
            var softwareInstalledWell = ctxInstall.getBoolResult();
            if (error != null)
            {
              if (! softwareInstalledWell) {
                error.setError(493,"ERROR 993: configureEmptyUrl: [" + ctxInstall.getError().getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  ` 493: configureEmptyUrl: [${ctxInstall.getError().getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
              }

            }
            if (! softwareInstalledWell)
            {
              softwareInstalledWell = false;
              if (self._debug)
              { 
                  document.getElementById("rend.message").innerHTML += "<p>configureEmptyUrl ERROR 993: - Error configureEmptyUrl" + "[" + ctxInstall.getError().getErrMsg() + "]</p>";
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    ` 993: Install Software - Error configureEmptyUrl: [${ctxInstall.getError().getErrMsg()}]`, 
                    null, 
                    null, 
                    null
                  );
              }
            }else{
              softwareInstalledWell = true;
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`configureEmptyUrl...OK`, null, null, null);

              if (self._debug)
              { 
                document.getElementById("rend.message").innerHTML += "<p>configureEmptyUrl...OK</p>";
              }
            }
            if (context != null)
            {
              context.setError(error);
              context.setBoolResult(bHasNewSoftwareOrNewConfig) //softwareInstalledWell); 
              return callback(context);  
            }
          }
          //====================================
          // install Software 
          //=====================================
          self._aAppInstallProperties.setSoftwareFileTransfer(aSoftwareTransferFile);
          self._aAppInstallProperties.setReboot(false);
          self._aAppInstallProperties.setUseAppEmptyUrl(true);
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`configureEmptyUrl...`, null, null, null);

          if (self._debug)
          {  
            document.getElementById("rend.message").innerHTML += "<p>configureEmptyUrl...</p>";
          }
          contextAppInstall.setRemoteCallback(true); 
          self._aSDKService._iSDKApplicationSetup.installApplication( self._aAppInstallProperties,
                                                                      errorAppInstall, contextAppInstall, callbackAppInstall2);   
        }
        //====================================
        // hasNewSoftwareOrNewConfig
        //=====================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewSoftwareOrNewConfig...`, null, null, null);

        if (self._debug)
        {  
          document.getElementById("rend.message").innerHTML += "<p>hasNewSoftwareOrNewConfig...</p>";
        }
        contextHasNewSoftware.setRemoteCallback(true); 
        self.hasNewSoftwareOrNewConfig( softwareType, 
                                        aSoftwareTransferFile,
                                        aSoftwareConfigTransferFile,
                                        errorHasNewSoftware, contextHasNewSoftware, callbackHasNewSoftwareOrNewConfig);

    }
    
    
    //====================================================
    public hasNewSoftwareOrNewConfig( softwareType: string, 
                                      aSoftwareTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                      aSoftwareConfigTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      var bHasNewSoftware = false;
      var errorHasNewSoftware:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextHasNewSoftware:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackHasNewSoftware2 = function callbackHasNewSoftware2(ctxHasNewSoftware :amGeneralContext.am_general.A_Context)
      {
        //---------- if -- error testing have a new Software -- stop on error
        if (ctxHasNewSoftware.isError())
        {
          if (context != null)
          {
            error.setError(481,"ERROR 481: DownloadAll - Error while checking for a new software");
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
              ` 481: DownloadAll - Error while checking for a new software: [${ctxHasNewSoftware.getError().getErrMsg()}]`, 
              null, 
              null, 
              null
            );
            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "<p>ERROR 481: DownloadAll - Error while checking for a new software</p>";
            }
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);  
          }
          return;  
        }
        //----------- not a new software  - nothing to do ----
        bHasNewSoftware = ctxHasNewSoftware.getBoolResult();
        /*
        if (! bHasNewSoftware)
        {
          if (context != null)
          {
            context.setError(error);
            context.setBoolResult(bHasNewSoftware);
            return callback(context);  
          }
          return;  
        }*/
        //----------------------------------------------------
        var bHasNewConfig = false;
        var errorHasNewConfig:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextHasNewConfig:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackHasNewConfig2 = function callbackHasNewConfig2(ctxHasNewConfig :amGeneralContext.am_general.A_Context)
        {
          //===========================================================
          //---------- if -- error testing have a new Software Config  -- stop on error
          if (ctxHasNewConfig.isError())
          {
            if (context != null)
            {
              error.setError(481,"ERROR 4811: DownloadAll - Error while checking for a new software config");
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                ` 481: DownloadAll - Error while checking for a new software config: [${ctxHasNewConfig.getError().getErrMsg()}]`, 
                null, 
                null, 
                null
              );
              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += "<p>ERROR 481: DownloadAll - Error while checking for a new software config</p>";
              }
              context.setError(error);
              context.setBoolResult(false);
              return callback(context);  
            }
            return;  
          }
          //----------- not a new software config - nothing to do ----
          bHasNewConfig = ctxHasNewConfig.getBoolResult();
          var bHasNewSoftwareOrNewConfig = false;
          if (bHasNewSoftware)
            bHasNewSoftwareOrNewConfig = true;
          if (bHasNewConfig)
            bHasNewSoftwareOrNewConfig = true;
          if (self._debug)
          {    
            if (bHasNewSoftwareOrNewConfig) {
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: bHasNewSoftwareOrNewConfig: TRUE</p>";
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`bHasNewSoftwareOrNewConfig: TRUE`, null, null, null);
            } else {
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: bHasNewSoftwareOrNewConfig: FALSE</p>";            
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`bHasNewSoftwareOrNewConfig: FALSE`, null, null, null);
            }
          }
          if (context != null)
          {
            context.setError(error);
            context.setBoolResult(bHasNewSoftwareOrNewConfig);
            return callback(context);  
          }
          //===========================================================
        }
        //====================================
        // hasNewConfig
        //=====================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewSoftwareConfig...`, null, null, null);

        if (self._debug)
        {  
          document.getElementById("rend.message").innerHTML += "<p>hasNewSoftwareConfig...</p>";
        }
        contextHasNewConfig.setRemoteCallback(true); 
        self.hasNewSoftwareConfig( softwareType, 
                                   aSoftwareConfigTransferFile,
                                   errorHasNewConfig, contextHasNewConfig, callbackHasNewConfig2);

      }  
      //====================================
      // hasNewSoftware
      //=====================================
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewSoftware...`, null, null, null);

      if (self._debug)
      {  
        document.getElementById("rend.message").innerHTML += "<p>hasNewSoftware...</p>";
      }
      contextHasNewSoftware.setRemoteCallback(true); 
      self.hasNewSoftware( softwareType, 
                           aSoftwareTransferFile,
                           errorHasNewSoftware, contextHasNewSoftware, callbackHasNewSoftware2);

    }

    //--------------------------------
    public hasNewSoftware( softwareType: string, 
                           aSoftwareTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                           error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {     
      return this.hasNewFile( softwareType, aSoftwareTransferFile, "hasNewSoftware", error, context, callback);
    }
  
    //--------------------------------
    public hasNewSoftwareConfig( softwareType: string, 
                                 aSoftwareConfigTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {     
      return this.hasNewFile( softwareType, aSoftwareConfigTransferFile, "hasNewSoftwareConfig", error, context, callback);
    }



    //--------------------------------
    public hasNewFile( softwareType: string, 
                           aTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                           aTracingMsg : string,
                           error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {     
      var self = this;
      //----------------
      var self = this;
      var aSoftwareSrcFile              = aTransferFile.getSrcFileInfo();
      var aSoftwareTmpFile              = aTransferFile.getTmpFileInfo();
      var aSoftwareShaSrcFile           = aTransferFile.getSrcShaFileInfo();
      var aSoftwareShaTmpFile           = aTransferFile.getTmpShaFileInfo();
      var aSoftwareShaCrtDstFile        = aTransferFile.getDstShaFileInfo();
      var aSoftwareComputedShaTmpFile   = aTransferFile.getComputedShaFileInfo();

      var errorDownloadSoftware:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextDownloadSoftware:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackDownloadSoftware = function callbackDownloadSoftware(ctx1:amGeneralContext.am_general.A_Context)
      {
        //==
        if (ctx1.isError())
        {
          if (self._debug)
          {                
            document.getElementById("rend.message").innerHTML += "<p>ERROR 4890: " + aTracingMsg + ": downloadFile: [" + ctx1.getError().getErrMsg() + "]</p>"
          }
          if (error != null) {
            error.setError(4890,"ERROR 4889: " + aTracingMsg + ": downloadFile: [" + ctx1.getError().getErrMsg() + "]");
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
              ` 4889: ${aTracingMsg} downloadFile: [${ctx1.getError().getErrMsg()}]`, 
              null, 
              null, 
              null
            );
            if (context != null)
            {
            context.setError(error);
            //context.setBoolResult(true);
            return callback(context);  
            }
          }

          return;           
        }
        //------------------------------------------
        if (self._debug)
        {
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + " downloadFile...OK</p>";
        }
        var errorDownloadSoftwareSha:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextDownloadSoftwareSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackDownloadSoftwareSha = function callbackDownloadSoftwareSha(ctx2)
        {
          if (ctx2.isError())
          {
            var hasNewSoftware = false;
            if (context != null)
            {
              error.setError(4890,"ERROR 4890: " + aTracingMsg + ": downloadFileSha: [" + ctx2.getError().getErrMsg() + "]");
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                ` 4890: ${aTracingMsg} downloadFileSha: [${ctx2.getError().getErrMsg()}]`, 
                null, 
                null, 
                null
              );
              if (self._debug)
              {                
                document.getElementById("rend.message").innerHTML += "<p>ERROR 4890: " + aTracingMsg + ": downloadFileSha : [" + ctx2.getError().getErrMsg() + "]";
              }
              context.setError(error);
              context.setBoolResult(hasNewSoftware);
              return callback(context);  
            }
            return;  
          }
          //---------------------------------
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadFileSha...OK`, null, null, null);

          if (self._debug)
          {                
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": downloadFileSha...OK</p>";

          }
          var errorComputeSha:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextComputeSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var shaProperties:amGeneralShaProperties.am_general.A_ShaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);  
          shaProperties.setSrcFileInfo(aSoftwareTmpFile);
          shaProperties.setShaFileInfo(aSoftwareComputedShaTmpFile);
          var callbackComputeSha = function callbackComputeSha(ctx3 : amGeneralContext.am_general.A_Context)
          {
            if (ctx3.isError())
            {
              var hasNewSoftware = false;
              if (context != null)
              {
                error.setError(4891,"--> ERROR 4890: " + aTracingMsg + ": error compute sha: [" + ctx3.getError().getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  ` 4891: ${aTracingMsg} error compute sha: [${ctx3.getError().getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
                if (self._debug)
                {                
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
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`computeShaFile...OK`, null, null, null);

            if (self._debug)
            {                
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": computeShaFile...OK</p>";
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": computeShaFile: " + computeShaFile + "</p>";

            }
            //---------------------------------
            var errorReadTmpShaFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextReadTmpShaFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4 : amGeneralContext.am_general.A_Context)
            {
              if (ctx4.isError())
              {
                var hasNewSoftware = false;
                if (context != null)
                {
                  error.setError(4892,"--> ERROR 4892: " + aTracingMsg + ": readTmpShaFile : [" + ctx4.getError().getErrMsg() + "]");
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    ` 4891: ${aTracingMsg} readTmpShaFile: [${ctx4.getError().getErrMsg()}]`, 
                    null, 
                    null, 
                    null
                  );
                  if (self._debug)
                  {                
                    document.getElementById("rend.message").innerHTML += "<p>ERROR 4892: " + aTracingMsg + ": readTmpShaFile : [" 
                                                                                                                  + ctx4.getError().getErrMsg() + "]";
                  }
                  context.setError(error);
                  context.setBoolResult(hasNewSoftware);
                  return callback(context);  
                }
                return;  
              }
              //---------------------------------
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`readTmpShaFile...OK`, null, null, null);

              if (self._debug)
              {                
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": readTmpShaFile...OK</p>";

              }
              var shaDownloadedFile = ctx4.getResult();
              var errorReadShaCrtDstFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
              var contextReadShaCrtDstFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
              var callbackReadShaCrtDstFile = function callbackReadShaCrtDstFile(ctx5:amGeneralContext.am_general.A_Context)
              {
                var hasNewSoftware2 = false;
                if (context != null)
                {
                  if (ctx5.isError())
                  {
                    hasNewSoftware2 = true;
                    context.setBoolResult(hasNewSoftware2);
                    if (self._debug)
                    {                
                      document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": readCrtDstShaFile : no current Software sha file...OK</p>";
                      document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": TRUE</p>";
                    }
                  }else{
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`readCrtDstShaFile...OK`, null, null, null);

                    if (self._debug)
                    {                
                      document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": readCrtDstShaFile...OK</p>";
                    }
                    var shaCrtFile =  ctx5.getResult();
                    if (aTransferFile.isTheSameShaValue(shaCrtFile, shaDownloadedFile))
                    {
                      hasNewSoftware2 = false;
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": FALSE", null, null, null);

                      if (self._debug)
                      {                
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": FALSE</p>";
                      }
                    }else{
                      hasNewSoftware2 = true;
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": TRUE", null, null, null);

                      if (self._debug)
                      {    
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": TRUE</p>";

                      }
                    }
                  }  
                  context.setBoolResult(hasNewSoftware2);
                  context.setError(error);
                  //context.setBoolResult(true);
                  return callback(context);  
                }
              }
              //==================================================
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": readCrtDstShaFile...", null, null, null);

              if (self._debug)
              {        
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": readCrtDstShaFile...</p>";

              }
              contextReadShaCrtDstFile.setRemoteCallback(true);
              self._aSDKService._iSDKFileSystem.readTextFile2(
                                                           aSoftwareShaCrtDstFile.getStorage(), aSoftwareShaCrtDstFile.getPath(), aSoftwareShaCrtDstFile.getName(), 
                                                           errorReadShaCrtDstFile, contextReadShaCrtDstFile, callbackReadShaCrtDstFile);    

            }
            //==================================================
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": readTmpShaFile...", null, null, null);

            if (self._debug)
            {      
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": readTmpShaFile...</p>";

            }
            contextReadTmpShaFile.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.readTextFile2(
                                                           aSoftwareShaTmpFile.getStorage(), aSoftwareShaTmpFile.getPath(), aSoftwareShaTmpFile.getName(), 
                                                           errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);    

          }
          //==================================================
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": computeFileSha...", null, null, null);

          if (self._debug)
          {    
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": computeFileSha...</p>";

          }
          contextComputeSha.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties,
                                                            errorComputeSha, contextComputeSha, callbackComputeSha);    
        }  
        //==================================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": downloadFileSha...", null, null, null);

        if (self._debug)
        {  
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": downloadFileSha...</p>";

        }
        contextDownloadSoftwareSha.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.downloadFile2( aSoftwareShaSrcFile.getFullName(), 
                                                         aSoftwareShaTmpFile.getStorage(), aSoftwareShaTmpFile.getPath(), aSoftwareShaTmpFile.getName(), 
                                                         errorDownloadSoftwareSha, contextDownloadSoftwareSha, callbackDownloadSoftwareSha);    
      }
      //==================================================
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": downloadFile...", null, null, null);

      if (self._debug)
      {
        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": downloadFile...</p>";

      }
      contextDownloadSoftware.setRemoteCallback(true);
      this._aSDKService._iSDKFileSystem.downloadFile2( aSoftwareSrcFile.getFullName(), 
                                                       aSoftwareTmpFile.getStorage(), aSoftwareTmpFile.getPath(), aSoftwareTmpFile.getName(), 
                                                       errorDownloadSoftware, contextDownloadSoftware, callbackDownloadSoftware);  
    }

    //-----------------------------------
    public cleanupCurrentSoftwareFiles( softwareType: string, 
                                        aSoftwareFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                        aSoftwareConfigFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
        //---------- succesfull cleanup
        if (context != null)
        {
          context.setError(error);
          //context.setBoolResult(true);
          return callback(context);  
        }
        return;  
       /*      
       //--------------------------------------
       var self = this;
       var aSoftwareTmpFolder   = aPlaylistTransferFile.getTmpFileInfo();
       var aMediaFilesTmpFolder = aMediaFilesTransferFileBase.getTmpFileInfo();
       var errorDeleteMediaFilesTmpFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
       var contextDeleteMediaFilesTmpFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
       var callbackDeleteMediaFilesTmpFolder = function callbackDeleteMediaFilesTmpFolder(ctx1 : amGeneralContext.am_general.A_Context)
       {
         var errorCreateMediaFilesTmpFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
         var contextCreateMediaFilesTmpFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
         var callbackCreateMediaFilesTmpFolder = function callbackCreateMediaFilesTmpFolder(ctx2 : amGeneralContext.am_general.A_Context)
         {
            //---------- succesfull cleanup
            if (context != null)
            {
              context.setError(error);
              //context.setBoolResult(true);
              return callback(context);  
            }
            return;  
         }
         //==========================================
         contextCreateMediaFilesTmpFolder.setRemoteCallback(true);
           //document.getElementById("renderer.message").innerHTML += "<p>start cleanup media folder"</p>";
         self._aSDKService._iSDKFileSystem.createFolder2(aMediaFilesTmpFolder.getStorage(), aMediaFilesTmpFolder.getPath(), 
                                                         errorCreateMediaFilesTmpFolder, contextCreateMediaFilesTmpFolder, callbackCreateMediaFilesTmpFolder) ; 
       }
       //=======================================
       contextDeleteMediaFilesTmpFolder.setRemoteCallback(true);
         //document.getElementById("renderer.message").innerHTML += "<p>start cleanup media folder"</p>";
       self._aSDKService._iSDKFileSystem.deleteFolder2(aMediaFilesTmpFolder.getStorage(), aMediaFilesTmpFolder.getPath(), 
                                                       errorDeleteMediaFilesTmpFolder, contextDeleteMediaFilesTmpFolder, callbackDeleteMediaFilesTmpFolder) ; 
       */                                                       
  }

    //-----------------------------------
    public downloadSoftwareFiles( softwareType: string, 
                                  aSoftwareFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                  aSoftwareConfigFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      //self._fileTransferList = new Array<amGeneralFileTransfer.am_general.AE_FileTransfer>();
      //----------------
      var errorDownloadSoftware:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextDownloadSoftware:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackDownloadSoftware = function callbackDownloadSoftware(ctxDownloadSoftware)
      {
        //---------- if -- error downloading the new software -- stop on error
        var downloadSoftwareWell:boolean = ctxDownloadSoftware.getBoolResult(downloadSoftwareWell);
        if (!downloadSoftwareWell) //ctxDownloadSoftware.isError())
        {
          if (context != null)
          {
            if (self._debug)
            {
              document.getElementById("rend.message").innerHTML += "<p>ERROR 486: downloadSoftwareFiles: DownloadSoftware - Error while download the Software</p>";
            }
            error.setError(486,"<p>ERROR 486: downloadSoftwareFiles: Download Software - Error while download the Software</p>");
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
              ` 486: downloadSoftwareFiles: Download Software - Error while download the Software`, 
              null, 
              null, 
              null
            );
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);  
          }
          return;  
        }
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: DownloadSoftware...OK`, null, null, null);

        if (self._debug)
        {
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: DownloadSoftware...OK</p>";
        }
        //------------------------------------------------------------------------------------
        var errorBuild:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextBuild:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackBuild = function callbackBuild(ctxBuild)
        {    
          //---------- if -- error downloading the new software -- stop on error
          if (ctxDownloadSoftware.isError())
          {
            if (context != null)
            {
              error.setError(487,"ERROR 487: downloadSoftwareFiles - Error Building the Software Files List to Download: [" + errorBuild.getErrMsg() + "]");
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                ` 487: downloadSoftwareFiles - Error Building the Software Files List to Download: [${errorBuild.getErrMsg()}]`, 
                null, 
                null, 
                null
              );
              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += 
                                       "ERROR 487: downloadSoftwareFiles: - Error Building the Software Files List to Download: [" + errorBuild.getErrMsg() + "]";
              }    
              context.setError(error);
              context.setBoolResult(false);
              return callback(context);  
            }
            return;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: buildSoftwareFilesListToDownload...OK`, null, null, null);

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: buildSoftwareFilesListToDownload...OK</p>";
          }
          //----------- a new software exists - cleanup the current software and its media files
          var errorDownloadSoftwareFiles:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownloadSoftwareFiles:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackDownloadSoftwareFiles = function callbackDownloadMediaFiles(ctxDownloadMediaFiles)
          {
            //---------- if -- error during the cleanup -- stop on error
            if (ctxDownloadMediaFiles.isError())
            {
              if (context != null)
              {
                error.setError(482,"ERROR 482: downloadSoftwareFiles: downloadSoftwareFilesList: [" + errorDownloadSoftwareFiles.getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  ` 482:downloadSoftwareFiles: downloadSoftwareFilesList: [${errorDownloadSoftwareFiles.getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
                if (self._debug)
                {    
                  document.getElementById("rend.message").innerHTML += "ERROR 482: downloadSoftwareFiles: downloadSoftwareFilesList: [" + errorDownloadSoftwareFiles.getErrMsg() + "]";
                }    
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);  
              }
              return;  
            }
            //---------- succesfull download the software
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: downloadMediaFilesList...OK`, null, null, null);

            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: downloadMediaFilesList...OK</p>";
            }
            if (context != null)
            {
              context.setError(error);
              context.setBoolResult(true);
              return callback(context);  
            }
            return;  
          }  
          //====================================
          // downloadMediaFilesListToDownload
          //=====================================
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: downloadMediaFilesList...`, null, null, null);

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: downloadMediaFilesList...</p>";
          }
          contextDownloadSoftwareFiles.setRemoteCallback(true); 
          self.downloadSoftwareFilesList( softwareType, 
                                       aSoftwareFileTransfer,
                                       aSoftwareConfigFileTransfer,
                                       errorDownloadSoftwareFiles, contextDownloadSoftwareFiles, callbackDownloadSoftwareFiles);
        }  
        //====================================
        // buildMediaFilesListToDownload
        //=====================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: buildSoftwareFilesListToDownload...`, null, null, null);

        if (self._debug)
        {      
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: buildSoftwareFilesListToDownload...</p>";
        }
        contextBuild.setRemoteCallback(true); 
        self.buildSoftwareFilesListToDownload( softwareType, 
                               aSoftwareFileTransfer,
                               aSoftwareConfigFileTransfer,
                               errorBuild, contextBuild, callbackBuild);
      }
      //====================================
      // downloadSoftware
      //=====================================
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: downloadSoftware...`, null, null, null);

      if (self._debug)
      {    
        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadSoftwareFiles: downloadSoftware...</p>";
      }
      contextDownloadSoftware.setRemoteCallback(true); 
      self.downloadSoftware( softwareType, 
                           aSoftwareFileTransfer,
                           //aSoftwareConfigFileTransfer,
                           errorDownloadSoftware, contextDownloadSoftware, callbackDownloadSoftware);
    }

     
    //====================================================
    public downloadAll( softwareType: string, 
                        aSoftwareTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                        aSoftwareConfigTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      var bHasNewSoftware = false;
      var errorHasNewSoftware:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextHasNewSoftware:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackHasNewSoftware = function callbackHasNewSoftware(ctxHasNewSoftware :amGeneralContext.am_general.A_Context)
      {
        //---------- if -- error testing have a new Software -- stop on error
        if (ctxHasNewSoftware.isError())
        {
          if (context != null)
          {
            error.setError(481,"ERROR 481: DownloadAll - Error while checking for a new software");
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
              ` 481: DownloadAll - Error while checking for a new software`, 
              null, 
              null, 
              null
            );
            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "<p>ERROR 481: DownloadAll - Error while checking for a new software</p>";
            }
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);  
          }
          return;  
        }
        //----------- not a new software  - nothing to do ----
        bHasNewSoftware = ctxHasNewSoftware.getBoolResult();
        if (! bHasNewSoftware)
        {
          if (context != null)
          {
            context.setError(error);
            context.setBoolResult(bHasNewSoftware);
            return callback(context);  
          }
          return;  
        }
        //----------- a new Software exists - cleanup the current software files
        var errorCleanup:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextCleanup:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackCleanup = function callbackCleanup()
        {
          //---------- if -- error during the cleanup -- stop on error
          if (contextCleanup.isError())
          {
            if (context != null)
            {
              error.setError(482,"ERROR 482: DownloadAll - Error during the cleanup of the current software folders: [" + errorCleanup.getErrMsg() + "]");
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                ` 482: DownloadAll - Error during the cleanup of the current software folders: [${errorCleanup.getErrMsg()}]`, 
                null, 
                null, 
                null
              );
              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += 
                                  "<p>ERROR 482: DownloadAll - Error during the cleanup of the current software folders: [" + errorCleanup.getErrMsg() + "]</p>";
              }
              context.setError(error);
              context.setBoolResult(false);
              return callback(context);  
            }
            return;  
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`cleanupCurrentSoftwareFiles...Ok`, null, null, null);

          if (self._debug)
          {
            document.getElementById("rend.message").innerHTML += "<p>cleanupCurrentSoftwareFiles...Ok</p>";

          }
          //----------- download Software and media files.
          var errorDownload:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownload:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackDownload = function callbackDownload(ctx1:amGeneralContext.am_general.A_Context)
          {
            //---------- if -- error during the download set on error
            var softwareDownloadedWell = ctx1.getBoolResult();
            if (!softwareDownloadedWell) //contextDownload.isError())
            {
              if (error != null)
              {
                error.setError(483,"ERROR 482: Download Software - Error during the download of the software and its files: [" + ctx1.getError().getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  ` 482: Download Software - Error during the download of the software and its files: [${ctx1.getError().getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>downloadSoftwareFiles...ERROR: " + error.getErrMsg() + "</p>";
                }
              }else{
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles...Ok`, null, null, null);

                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>downloadSoftwareFiles...Ok</p>";

                }
              }
              if (context != null)
              {
                context.setError(error);
                context.setBoolResult(softwareDownloadedWell);//sucessfully downloaded the Software
                if (context.isError())
                  context.setBoolResult(false);//error on downloaded Software
                return callback(context);  
              }
            }
            //-------------------------------------------
            var errorMoveSoftwareToDst:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextMoveSoftwareToDst:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackMoveSoftwareToDst = function callbackMoveSoftwareToDst(ctxMove: amGeneralContext.am_general.A_Context)
            {
              
              var softwareMoveWell = contextDownload.getBoolResult();
              //---------- if -- error during the download set on error
              if (ctxMove.isError())
              {
                if (error != null)
                {
                  error.setError(483,"ERROR 482: Download Software - Error during the download of the software  files: [" + errorDownload.getErrMsg() + "]");
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    ` 483: Download Software - Error during the download of the software  files: [${errorDownload.getErrMsg()}]`, 
                    null, 
                    null, 
                    null
                  );
                }
                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>moveSoftwareToDst...ERROR: " + error.getErrMsg() + "</p>";
                }
              }else{
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`moveSoftwareToDst...OK`, null, null, null);

                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>moveSoftwareToDst...OK</p>";

                }
              }
              //------------------------
              var errorAppInstall:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
              var contextAppInstall:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
              var callbackAppInstall = function callbackAppInstall(ctxInstall: amGeneralContext.am_general.A_Context)
              {
                var softwareInstalledWell = ctxInstall.getBoolResult();
                if (error != null)
                {
                  if (! softwareInstalledWell) {
                    error.setError(493,"ERROR 893: Install Software - Error during software installation: [" + ctxInstall.getError().getErrMsg() + "]");
                    self._aActivityLogService._IActivityLogServiceMessaging
                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                      ` 493: Install Software - Error during software installation: [${ctxInstall.getError().getErrMsg()}]`, 
                      null, 
                      null, 
                      null
                    );
                  }

                }
                if (! softwareInstalledWell)
                {
                  softwareInstalledWell = false;
                  if (self._debug)
                  { 
                     document.getElementById("rend.message").innerHTML += "<p>installSoftware ERROR 893: - Error during software installation:" + "[" + ctxInstall.getError().getErrMsg() + "]</p>";
                     self._aActivityLogService._IActivityLogServiceMessaging
                     .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                       ` 493: Install Software - Error during software installation: [${ctxInstall.getError().getErrMsg()}]`, 
                       null, 
                       null, 
                       null
                     );                                   
                  }
                }else{
                  softwareInstalledWell = true;
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`installSoftware...OK`, null, null, null);

                  if (self._debug)
                  { 
                    document.getElementById("rend.message").innerHTML += "<p>installSoftware...OK</p>";

                  }
                }
                if (context != null)
                {
                  context.setError(error);
                  context.setBoolResult(softwareInstalledWell); 
                  return callback(context);  
                }
              }
              //====================================
              // install Software 
              //=====================================
              self._aAppInstallProperties.setSoftwareFileTransfer(aSoftwareTransferFile);
              self._aAppInstallProperties.setReboot(true);
              self._aAppInstallProperties.setUseAppEmptyUrl(false);    
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`installSoftware...`, null, null, null);

              if (self._debug)
              {  
                document.getElementById("rend.message").innerHTML += "<p>installSoftware...</p>";

              }
              contextAppInstall.setRemoteCallback(true); 
              self._aSDKService._iSDKApplicationSetup.installApplication( self._aAppInstallProperties,
                                                                          errorAppInstall, contextAppInstall, callbackAppInstall);   
            }
            //====================================
            // move Software to its final location
            //=====================================
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`moveSoftwareAndShaFileToDst...`, null, null, null);

            if (self._debug)
            {  
              document.getElementById("rend.message").innerHTML += "<p>moveSoftwareAndShaFileToDst...</p>";

            }
            contextMoveSoftwareToDst.setRemoteCallback(true); 
            self._aDownloadService._iDownloadMain.moveFileAndShaFile( aSoftwareTransferFile.getTmpFileInfo(), aSoftwareTransferFile.getTmpShaFileInfo(), 
                                                                      aSoftwareTransferFile.getDstFileInfo(), aSoftwareTransferFile.getDstShaFileInfo(), 
                                                                      errorMoveSoftwareToDst, contextMoveSoftwareToDst, callbackMoveSoftwareToDst);   
            //----------------------  end ---------------------------------------
          }
          //====================================
          // downloadCurrentSoftwareFiles 
          //=====================================
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles...`, null, null, null);

          if (self._debug)
          {    
            document.getElementById("rend.message").innerHTML += "<p>downloadSoftwareFiles...</p>";
          }
          contextDownload.setRemoteCallback(true); 
          self.downloadSoftwareFiles( softwareType, 
                                      aSoftwareTransferFile,
                                      aSoftwareConfigTransferFile,
                                      errorDownload, contextDownload, callbackDownload);    
        }
        //====================================
        // cleanupCurrentSoftwareFiles 
        //=====================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`cleanupCurrentSoftwareFiles...`, null, null, null);

        if (self._debug)
        {  
          document.getElementById("rend.message").innerHTML += "<p>cleanupCurrentSoftwareFiles...</p>";

        }
        contextCleanup.setRemoteCallback(true); 
        self.cleanupCurrentSoftwareFiles( softwareType, 
                                          aSoftwareTransferFile,
                                          aSoftwareConfigTransferFile,
                                          errorCleanup, contextCleanup, callbackCleanup);  

      }
      //====================================
      // hasNewSoftwareFiles 
      //=====================================
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewSoftware...`, null, null, null);

      if (self._debug)
      {  
        document.getElementById("rend.message").innerHTML += "<p>hasNewSoftware...</p>";

      }
      contextHasNewSoftware.setRemoteCallback(true); 
      self.hasNewSoftwareOrNewConfigAndIfNotInstallEmptyUrl( softwareType, 
                                      aSoftwareTransferFile,
                                      aSoftwareConfigTransferFile,
                                      errorHasNewSoftware, contextHasNewSoftware, callbackHasNewSoftware);
    }

    //====================================================
    public createComputedShaFileInfoFromFileInfo(aFileInfo  : amGeneralFileInfo.am_general.A_FileInfo) : amGeneralFileInfo.am_general.A_FileInfo
    {   
      var aShaFileInfo  : amGeneralFileInfo.am_general.A_FileInfo =  this._aServiceLocator._iEntityCreation.createDefaultFileInfo(null);
      aShaFileInfo.setStorage(aFileInfo.getStorage());       
      aShaFileInfo.setPath(aFileInfo.getPath());   
      aShaFileInfo.setName(aFileInfo.getName()+ ".comp.sha");   
      aShaFileInfo.setUrlStorage(aFileInfo.getUrlStorage()); 
      aShaFileInfo.setUrlPath(aFileInfo.getUrlPath());      
      aShaFileInfo.setUrlName(aFileInfo.getUrlName() + ".comp.sha");   
      return aShaFileInfo;
    }

    //====================================================
    public createShaFileInfoFromFileInfo(aFileInfo  : amGeneralFileInfo.am_general.A_FileInfo) : amGeneralFileInfo.am_general.A_FileInfo
    {   
      var aShaFileInfo  : amGeneralFileInfo.am_general.A_FileInfo =  this._aServiceLocator._iEntityCreation.createDefaultFileInfo(null);
      aShaFileInfo.setStorage(aFileInfo.getStorage());       
      aShaFileInfo.setPath(aFileInfo.getPath());   
      aShaFileInfo.setName(aFileInfo.getName()+ ".sha");   
      aShaFileInfo.setUrlStorage(aFileInfo.getUrlStorage()); 
      aShaFileInfo.setUrlPath(aFileInfo.getUrlPath());      
      aShaFileInfo.setUrlName(aFileInfo.getUrlName() + ".sha");   
      return aShaFileInfo;
    }
    //========================================================
    public createFoldersIfTheyNotExists( softwareType: string, 
                                         aSoftwareTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                         aSoftwareConfigTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      var aSoftwareTmpFolder       = this._aPlaybackGlobalConfig._aSoftwareTemporaryFile;
      var aSoftwareConfigTmpFolder = this._aPlaybackGlobalConfig._aMediaFilesTemporaryFolder;
      var aSoftwareFolder          = this._aPlaybackGlobalConfig._aSoftwareFile;
      var aSoftwareConfigFolder    = this._aPlaybackGlobalConfig._aMediaFilesFolder;

      //---------------------------------------------
      var errorCreateSoftwareTmpFolder:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateSoftwareTmpFolder:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateSoftwareTmpFolder = function callbackCreateSoftwareTmpFolder()
      {
        var errorCreateSoftwareConfigTmpFolder:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextCreateSoftwareConfigTmpFolder:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackCreateSoftwareConfigTmpFolder = function callbackCreateSoftwareConfigTmpFolder()
        {
          var errorCreateSoftwareFolder:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextCreateSoftwareFolder:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackCreateSoftwareFolder = function callbackCreateSoftwareFolder()
          {
            var errorCreateSoftwareConfigFolder:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextCreateSoftwareConfigFolder:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackCreateSoftwareConfigFolder = function callbackCreateSoftwareConfigFolder()
            {
              //======================= exit
              if (context != null)
              {
                return callback(context);  
              }    
            }    
            //==============================================
            contextCreateSoftwareConfigFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.createFolder2(aSoftwareConfigFolder.getStorage(), aSoftwareConfigFolder.getPath(), 
                                                             errorCreateSoftwareConfigFolder, contextCreateSoftwareConfigFolder, callbackCreateSoftwareConfigFolder); 
          }
          //==============================================
          contextCreateSoftwareFolder.setRemoteCallback(true);
          //document.getElementById("renderer.message").innerHTML += "<p>create Software temprorary folder"</p>";
          self._aSDKService._iSDKFileSystem.createFolder2(aSoftwareFolder.getStorage(), aSoftwareFolder.getPath(), 
                                                          errorCreateSoftwareFolder, contextCreateSoftwareTmpFolder, callbackCreateSoftwareFolder); 
        }
        //==============================================
        contextCreateSoftwareConfigTmpFolder.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.createFolder2(aSoftwareConfigTmpFolder.getStorage(), aSoftwareConfigTmpFolder.getPath(), 
                                                        errorCreateSoftwareConfigTmpFolder, contextCreateSoftwareConfigTmpFolder, callbackCreateSoftwareConfigTmpFolder); 
       }
       //==============================================
       contextCreateSoftwareTmpFolder.setRemoteCallback(true);
       //document.getElementById("renderer.message").innerHTML += "<p>create Software temprorary folder"</p>";
       self._aSDKService._iSDKFileSystem.createFolder2(aSoftwareTmpFolder.getStorage(), aSoftwareTmpFolder.getPath(), 
                                                       errorCreateSoftwareTmpFolder, contextCreateSoftwareTmpFolder, callbackCreateSoftwareTmpFolder); 
    }

    //====================================================
    public update2(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`Update Software: Start ....`, null, null, null);

      if (self._debug)
      {  
        document.getElementById("rend.message").innerHTML += "<p>Update Software: Start ...</p>";

      }
      var softwareType: string        = this._aPlaybackGlobalConfig._software_type;
      var bEncryptedSoftware: boolean = false;
      var aSoftwareTransfer  : amGeneralFileTransfer.am_general.AE_FileTransfer =  this._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
      var aSoftwareConfigTransfer  : amGeneralFileTransfer.am_general.AE_FileTransfer =  this._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
      if (! bEncryptedSoftware)
      {
        aSoftwareTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aSoftwareRemoteFile)
        aSoftwareTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aSoftwareTemporaryFile);
        aSoftwareTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aSoftwareFile);

        aSoftwareTransfer.setSrcShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareRemoteFile));
        aSoftwareTransfer.setTmpShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareTemporaryFile));
        aSoftwareTransfer.setDstShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareFile));
        aSoftwareTransfer.setComputedShaFileInfo(this.createComputedShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareTemporaryFile));

        aSoftwareConfigTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigRemoteFile)
        aSoftwareConfigTransfer.setTmpFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigTemporaryFile);
        aSoftwareConfigTransfer.setDstFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigFile);

        aSoftwareConfigTransfer.setSrcShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigRemoteFile));
        aSoftwareConfigTransfer.setTmpShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigTemporaryFile));
        aSoftwareConfigTransfer.setDstShaFileInfo(this.createShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigFile));
        aSoftwareConfigTransfer.setComputedShaFileInfo(this.createComputedShaFileInfoFromFileInfo(this._aPlaybackGlobalConfig._aSoftwareConfigTemporaryFile));

      }else{
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

      var errorCreateFolders:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateFolders:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateFolders = function callbackCreateFolders()
      {
        var callbackDownloadAll = function callbackDownloadAll()
        {
          if (context != null)
          {
            return callback(context);  
          }
        } 
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`createFoldersIfTheyNotExists....OK`, null, null, null);

        if (self._debug)
        {  
          document.getElementById("rend.message").innerHTML += "<p>createFoldersIfTheyNotExists....OK</p>";

        }
        self.downloadAll( softwareType, aSoftwareTransfer, aSoftwareConfigTransfer, error, context, callbackDownloadAll);
      }
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`createFoldersIfTheyNotExists....`, null, null, null);

      if (self._debug)
      {
        document.getElementById("rend.message").innerHTML += "<p>createFoldersIfTheyNotExists....</p>";
      }
      self.createFoldersIfTheyNotExists(softwareType, aSoftwareTransfer, aSoftwareConfigTransfer, errorCreateFolders, contextCreateFolders, callbackCreateFolders);
      
    }
  


    //=================================================================================
    //             NEW IMPLEMENTATION
    //=================================================================================

    //====================================================   
    // still to do : in order to setup debugMain even earlier...
    // function s() {
    //console.log("invoked s()!");
    //}  
    //(window as any).s = s; 
    //====================================================    
    public getMainDebugParamAsBoolean(): boolean
    {
      if (this._strMainDebugParam == "true")
        return true;
      return false;  
    }
    
    //====================================================    
    public getAppServerBaseUrl(): string
    {
      return this._appServerBaseUrl;
    }

    //====================================================    
    public getAppServerBasePath(): string
    {
      return this._appServerBasePath;
    }

    //====================================================    
    //====================================================    
    public getPrevContent(input: string, marker: string) : string
    {
      if (input == null)
        return null;
      var idx = input.indexOf(marker) ;
      if (idx == -1)
        return "";
      var res = input.substr(0, idx); 
      return res ;
    }

    
    //====================================================    
    //====================================================    
    public getNextContent(input: string, marker: string) : string
    {
      if (input == null)
        return null;
      var idx = input.indexOf(marker) ;
      if (idx == -1)
        return "";
      if (idx+1 == input.length) 
        return "";
      var res = input.substr(idx + marker.length, input.length); 
      return res ;
    }


    //====================================================    
    //====================================================    
    public getFieldValue(input: string, startmarker: string, endmarker: string) : string
    {
      if (input == null)
        return "";
      if (startmarker == null)
        return "";

      //--  
      var idx1 = input.indexOf(startmarker) ;
      if (idx1 == -1)
        return "";
      if (idx1 + startmarker.length >= input.length) 
        return "";
      //--  
      var idx2 = input.indexOf(endmarker, idx1 + startmarker.length) ;
      if (idx2 == -1)
          return "";  
      if (idx2+1 == input.length) 
        return "";
      //--  
      if (idx1 + startmarker.length >= idx2)
        return "";   
      //--  
      var res = input.substr(idx1 + startmarker.length, idx2 - idx1 - startmarker.length); 
      return res ;
    }

    //====================================================    
    //====================================================    
    public replaceAll(str, find, replace) {
      return str.replace(RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace); //escapeRegExp(find)
    }


    //====================================================    
    //====================================================    
    public replaceKeysInString(
                  strInputString : string,
                  jsonBootSettingsParametersList: any, 
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context) : string
    {
      var crtBootParameter = null;
      var strCrtKey = "";
      var strCrtValue = "";
      var strOutputString = strInputString;
      // -----------------------
      for (var idx = 0; idx < jsonBootSettingsParametersList["boot_parameters"].length; idx++)
      {
        crtBootParameter = jsonBootSettingsParametersList["boot_parameters"][idx];
        strCrtKey   = crtBootParameter.key;
        strCrtValue = crtBootParameter.value;
        strOutputString  = this.replaceAll(strOutputString, strCrtKey, strCrtValue);
      }
      return strOutputString;
    }


    //====================================================    
    //====================================================    
    public replaceKeysInFile(
                  jsonBootSettingsParametersList: any, 
                  srcStorageName,  srcFolderName, srcFileName,
                  dstStorageName,  dstFolderName, dstFileName,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;  
      //-------------------------
      var strInputFileContent : string;
      var strOutputFileContent : string;
      //--------------------------
      var errorReadTextFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextReadTextFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackReadTextFile = function callbackReadTextFile(ctx4 : amGeneralContext.am_general.A_Context)
      {
        
        if (ctx4.isError())
        {
          if (context != null)
          {
            context.setBoolResult(false);
            context.setError(error);
            return callback(context);  
          }
          return;
        }
        //---
        strInputFileContent = ctx4._result;
        //---
        strOutputFileContent = self.replaceKeysInString(strInputFileContent,jsonBootSettingsParametersList, error,context);
        //--------------------
        var errorWriteTextFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextWriteTextFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackWriteTextFile = function callbackWriteTextFile(ctx6 : amGeneralContext.am_general.A_Context)
        {
          var writeFilesWell = true;
          if (ctx6.isError())
          {
            writeFilesWell = false;
          } 
          //context.setBoolResult(moveFilesWell);
          context.setError(error);
          return callback(context);                 
        }  
        //=======================================================
        contextWriteTextFile.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.writeTextFile2( dstStorageName,  dstFolderName, dstFileName,  strOutputFileContent,
                                                          errorWriteTextFile, contextWriteTextFile, callbackWriteTextFile);        

      }
      //==================================================
      contextReadTextFile.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.readTextFile2(srcStorageName,     srcFolderName, srcFileName,
                                                      errorReadTextFile, contextReadTextFile, callbackReadTextFile);    
    }






    //====================================================    
    //====================================================    
    public updateBootParameters_unused(
                      bootSettingsLocalFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;  
      var errorUpdateSerialNo:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextUpdateSerialNo:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackUpdateSerialNo = function callbackUpdateSerialNo(ctx1 : amGeneralContext.am_general.A_Context)
      {
        // --------------------------
        if (ctx1.isError())
        {
            error.setError(2001,"WARNING 2031: No Serial No see file : [" + ctx1.getError().getErrMsg() + "]");
            if (self._bWithActivityLog)
            {        
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                                       amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                                       ` 2031: No Serial No see file : [${ctx1.getError().getErrMsg()}]`, null, null, null);
            }
        }else{

        }
        var errorUpdateMediaServerBaseUrl   :amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextUpdateMediaServerBaseUrl :amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackUpdateMediaServerBaseUrl = function callbackUpdateMediaServerBaseUrl(ctx1 : amGeneralContext.am_general.A_Context)
        {
            if (callback != null)
            return callback(context);
        }    
        // =================================================================
        var mediaServerBaseUrlFileTransfer = bootSettingsLocalFilesList.get(3);
        var srcStorageName2 = mediaServerBaseUrlFileTransfer.getDstFileInfo().getStorage();
        var srcFolderName2  = mediaServerBaseUrlFileTransfer.getDstFileInfo().getPath();
        var srcFileName2    = mediaServerBaseUrlFileTransfer.getDstFileInfo().getName();
        var dstStorageName2 = mediaServerBaseUrlFileTransfer.getDstFileInfo().getStorage();
        var dstFolderName2  = mediaServerBaseUrlFileTransfer.getDstFileInfo().getPath();
        var dstFileName2    = mediaServerBaseUrlFileTransfer.getDstFileInfo().getName();
        self.updateMediaServerBaseUrl(
                  srcStorageName2,  srcFolderName2, srcFileName2,
                  dstStorageName2,  dstFolderName2, dstFileName2,
                  errorUpdateMediaServerBaseUrl, contextUpdateMediaServerBaseUrl, callbackUpdateMediaServerBaseUrl)

      }
      // =================================================================
      var seedSerialNoFileTransfer = bootSettingsLocalFilesList.get(2);
      var srcStorageName1 = seedSerialNoFileTransfer.getDstFileInfo().getStorage();
      var srcFolderName1  = seedSerialNoFileTransfer.getDstFileInfo().getPath();
      var srcFileName1    = seedSerialNoFileTransfer.getDstFileInfo().getName();
      var dstStorageName1 = seedSerialNoFileTransfer.getDstFileInfo().getStorage();
      var dstFolderName1  = seedSerialNoFileTransfer.getDstFileInfo().getPath();
      var dstFileName1    = seedSerialNoFileTransfer.getDstFileInfo().getName();
      self.updateSerialNo(
                  srcStorageName1,  srcFolderName1, srcFileName1,
                  dstStorageName1,  dstFolderName1, dstFileName1,
                  errorUpdateSerialNo, contextUpdateSerialNo, callbackUpdateSerialNo)
    }


    
    //====================================================    
    //====================================================    
    public setBootParameters( jsonBootSettingsParametersList: any, 
                              appServerBaseUrl: string, appServerBasePath: string,
                              serialNo: string,
                              mediaServerBaseUrl : string,
                              mainDebugParam : string,
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var crtBootParameter = null;
      for (var idx = 0; idx < jsonBootSettingsParametersList["boot_parameters"].length; idx++)
      {
        crtBootParameter = jsonBootSettingsParametersList["boot_parameters"][idx];
        // ---
        if ( crtBootParameter.key == "$BOOT_SETTINGS_APP_SERVER_BASE_URL")
        {
          crtBootParameter.value = appServerBaseUrl;
          continue;
        }
        // ---
        if ( crtBootParameter.key == "$BOOT_SETTINGS_APP_SERVER_BASE_PATH")
        {
          crtBootParameter.value = appServerBasePath;
          continue;
        }
        // ---
        if ( crtBootParameter.key == "$BOOT_SETTINGS_SERIAL_NO")
        {
          crtBootParameter.value = serialNo;
          continue;
        }
        // ---
        if ( crtBootParameter.key == "$BOOT_SETTINGS_MEDIA_SERVER_BASE_URL")
        {
          crtBootParameter.value = mediaServerBaseUrl;
          continue;
        }
        // ---
        if ( crtBootParameter.key == "$BOOT_SETTINGS_MAIN_DEBUG")
        {
          crtBootParameter.value = mainDebugParam
          continue;
        }        
      }
    }

    //====================================================    
    //====================================================    
    public initSettingsLists(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
    }

    //------------------------------------------------------------
    public unzipSettings(
                zipStorageName,  zipFolderName, zipFileName,
                unzipStorageName,  unzipFolderName, 
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;

      //-----------------------------
      /*
      if (extraPath.length >= 5)
      {
        extraPath = extraPath.substring(0,extraPath.length - 4);
      }*/
      //var unzipFolderName =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath();
      //-----------------------
      var errorCreateTmpFolder:amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateTmpFolder:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateTmpFolder = function callbackCreateTmpFolder()
      {
        //-----------------------
        var errorUnzipFile:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextUnzipFile:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackUnzipFile = function callbackUnzipFile(ctxUnzipFile)
        {
          //---------- if -- error during unzip html template file -- stop on error
          if (ctxUnzipFile.isError())
          {
            if (context != null)
            {
              error.setError(510,"ERROR 510: Unzip Settings: [" + errorUnzipFile.getErrMsg() + "]");

              //if (self._debug)
              //{    
                //document.getElementById("rend.message").innerHTML += "ERROR 5104: Unzip Settings Error: [" 
                //                                                                                            + errorUnzipFile.getErrMsg() + "]";
              //}    
              context.setError(error);
              context.setBoolResult(false);
              return callback(context);  
            }
            return;  
          }

          //if (self._debug)
          //{        
            //document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: unzipHtmlTemplate:...Ok</p>";
          //}
          //------------------ end - Ok
          if (context != null)
          {
            context.setError(error);
            context.setBoolResult(true);
            return callback(context);  
          }
        }  
        //==============================================
        contextUnzipFile.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.unzipFile2(
                     zipStorageName, 
                     zipFolderName, 
                     zipFileName, 
                     unzipStorageName, 
                     unzipFolderName, 
                     errorUnzipFile, contextUnzipFile, callbackUnzipFile);
      }
      //==============================================
      contextCreateTmpFolder.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.createFolder2(unzipStorageName, 
                                                      unzipFolderName, 
                                                      errorCreateTmpFolder, contextCreateTmpFolder, callbackCreateTmpFolder); 

    }

    //====================================================    
    //====================================================    
    public update(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      if (self._bWithActivityLog)
      {
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                   amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`File Settings Update: Start ....`, null, null, null);
      }
      if (self._debug)
      {  
        document.getElementById("rend.message").innerHTML += "<p>File Settings Update: Start ...</p>";
      }
      //----------------
      self._aFileSettingsUpdateConfiguration = self._aServiceLocator._iEntityCreation.createDefaultFileSettingsUpdateConfiguration(error);
      var jsonRemoteSettingsFilesList     = self._aFileSettingsUpdateConfiguration.getRemoteSettingsFilesList();
      var jsonLocalSettingsFilesList      = self._aFileSettingsUpdateConfiguration.getLocalSettingsFilesList();
      var jsonUnzipSettings               = self._aFileSettingsUpdateConfiguration.getLocalUnzipSettings();
      var jsonBootSettingsParametersList  = self._aFileSettingsUpdateConfiguration.getBootSettingsParametersList();
      var jsonBootSettingsLocalFilesList  = self._aFileSettingsUpdateConfiguration.getBootSettingsLocalFilesList();
      //----------------
      //----------------
      //var software_remote_server_url = "http://192.168.0.222:9080/";
      //var software_remote_folder     = "app/tizen/";
      //var software_remote_server_full_url = software_remote_server_url + software_remote_folder

      //----------------
      var copy_mainSrcStorage  : string = self._aPlaybackGlobalConfig.getDefaultResourceStorageName();
      var copy_mainSrcPath     : string = "";
      var copy_mainTmpStorage  : string = self._aPlaybackGlobalConfig.getDefaultResourceStorageName();
      var copy_mainTmpPath     : string = "";
      var copy_mainDstStorage  : string = self._aPlaybackGlobalConfig.getDefaultResourceStorageName();
      var copy_mainDstPath     : string = "";
      //----------------
      var zipStorageName   : string = copy_mainSrcStorage + jsonUnzipSettings["zipStorageName"];   //: "", 
      var zipFolderName    : string = jsonUnzipSettings["zipFolderName"];                          //: "/tmp/settings/",
      var zipFileName      : string = jsonUnzipSettings["zipFileName"];                            //: "soc_settings.zip" ,
      var unzipStorageName : string = copy_mainSrcStorage + jsonUnzipSettings["unzipStorageName"]; //: "",
      var unzipFolderName  : string = jsonUnzipSettings["unzipFolderName"];                        //:  "/tmp/unzip_settings/"      
      //----------------
      var localSettingsFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer> = new Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>();
      self.buildSettingsFilesList( localSettingsFilesList, jsonLocalSettingsFilesList,                                    
                                   copy_mainSrcStorage, copy_mainSrcPath,
                                   copy_mainTmpStorage, copy_mainTmpPath,
                                   copy_mainDstStorage, copy_mainDstPath,
                                   error, context, null);

      //----------------
      var bootSettingsLocalFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer> = new Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>();
      self.buildSettingsFilesList( bootSettingsLocalFilesList, jsonBootSettingsLocalFilesList,                                    
                                   copy_mainSrcStorage, copy_mainSrcPath,
                                   copy_mainTmpStorage, copy_mainTmpPath,
                                   copy_mainDstStorage, copy_mainDstPath,
                                   error, context, null);

      //----------------
      var errorMainDebugParam  :amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();
      var contextMainDebugParam :amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
      var callbackMainDebugParam = function callbackMainDebugParam(ctx1)
      {
        //----------------
        var errorUpdateSerialNo   :amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();
        var contextUpdateSerialNo :amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
        var callbackUpdateSerialNo = function callbackUpdateSerialNo(ctx1)
        {
          //----------------
          var errorUpdateAppServerBaseUrl   :amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();
          var contextUpdateAppServerBaseUrl :amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
          var callbackUpdateAppServerBaseUrl = function callbackUpdateAppServerBaseUrl(ctx1)
          {
            //----------------
            var errorDownloadRemoteSettingsFiles   :amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextDownloadRemoteSettingsFiles :amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackRemoteSettingsFiles = function callbackRemoteSettingsFiles(ctx2)
            {
              // --------------------------
              if (ctx2.isError())
              {
                  error.setError(2001,"ERROR 2001: Update File Settings - Error downloaning remote settings file: [" + ctx2.getError().getErrMsg() + "]");
                  if (self._bWithActivityLog)
                  {        
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                                            amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                                            ` 2001: Update File Settings - Error downloaning remote settings file: [${ctx2.getError().getErrMsg()}]`, null, null, null);
                  }
                  context.setError(error);
                  if (callback != null)
                    return callback(context);
                  return ;
              }
              //----------------
              var errorUnzipFile   :amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();
              var contextUnzipFile :amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
              var callbackUnzipFile = function callbackUnzipFile(ctx3)
              {
                // --------------------------
                if (ctx3.isError())
                {
                  error.setError(2002,"ERROR 2002: Update File Settings - Cannot unzip SOC Settings File: [" + ctx3.getError().getErrMsg() + "]");
                  if (self._bWithActivityLog)
                  {        
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                                            amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,
                                            self.getServiceName(),
                                            ` 2002: Update File Settings - Cannot unzip SOC Settings File: [${ctx3.getError().getErrMsg()}]`, null, null, null);
                  }
                  context.setError(error);
                  if (callback != null)
                    return callback(context);
                  return ;
                }
                //----------------
                var errorCopyLocalSettingsFiles   :amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextCopyLocalSettingsFiles :amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackCopyLocalSettingsFiles = function callbackCopyLocalSettingsFiles(ctx4)
                {
                  // --------------------------
                  if (ctx4.isError())
                  {
                    error.setError(2003,"ERROR 2003: Cannot Copy File Settings - Cannot copy SOC Settings File: [" + ctx4.getError().getErrMsg() + "]");
                    if (self._bWithActivityLog)
                    {        
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                                              amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,
                                              self.getServiceName(),
                                              ` 2003: Cannot Copy File Settings - Cannot copy SOC Settings File: [${ctx4.getError().getErrMsg()}]`, null, null, null);
                    }
                    context.setError(error);
                    if (callback != null)
                      return callback(context);
                    return ;  
                  }
                  //----------------
                  var errorUpdateMediaServerBaseUrl  :amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();
                  var contextUpdateMediaServerBaseUrl :amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
                  var callbackUpdateMediaServerBaseUrl = function callbackUpdateMediaServerBaseUrl(ctx10)
                  {
                    if (ctx10.isError())
                    {
                      error.setError(2011,"ERROR 2011: Cannot Update Boot Parameters: [" + ctx10.getError().getErrMsg() + "]");
                      if (self._bWithActivityLog)
                      {        
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                                                amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,
                                                self.getServiceName(),
                                                ` 2011: Cannot Update Boot Parameters: [${ctx10.getError().getErrMsg()}]`, null, null, null);
                      }
                      context.setError(error);
                      if (callback != null)
                        return callback(context);
                      return ;  
                    }
                    //----------------
                    var errorSetBootSettingsParams  :amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextSetBootSettingsParams :amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackSetBootSettingsParams = function callbackSetBootSettingsParams(ctx5)
                    {
                      if (ctx5.isError())
                      {
                        error.setError(2004,"ERROR 2004: Cannot Set Boot Seetings Params in settings_v2.json: [" + ctx5.getError().getErrMsg() + "]");
                        if (self._bWithActivityLog)
                        {        
                          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                                                  amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,
                                                  self.getServiceName(),
                                                  ` 2004: Cannot Set Boot Seetings Params in settings_v2.json:: [${ctx5.getError().getErrMsg()}]`, null, null, null);
                        }
                        context.setError(error);
                        if (callback != null)
                          return callback(context);
                        return ;  
                      }
                      //====================== Ok
                      context.setError(error);
                      if (callback != null)
                        return callback(context);
                      return;      
                    }
                    //===============================================
                    var settingsV2FileTransfer = localSettingsFilesList.get(1); // key 1 => settings_v2.json
                    var srcStorageName = settingsV2FileTransfer.getDstFileInfo().getStorage();
                    var srcFolderName  = settingsV2FileTransfer.getDstFileInfo().getPath();
                    var srcFileName    = settingsV2FileTransfer.getDstFileInfo().getName();
                    var dstStorageName = settingsV2FileTransfer.getDstFileInfo().getStorage();
                    var dstFolderName  = settingsV2FileTransfer.getDstFileInfo().getPath();
                    var dstFileName    = settingsV2FileTransfer.getDstFileInfo().getName();
                    self.setBootParameters(  jsonBootSettingsParametersList, 
                                            self._appServerBaseUrl, self._appServerBasePath, 
                                            self._serialNo, self._mediaServerBaseUrl,
                                            self._strMainDebugParam,
                                            error, context, null);//callback)
                    self.replaceKeysInFile( jsonBootSettingsParametersList, 
                                            srcStorageName,  srcFolderName, srcFileName,
                                            dstStorageName,  dstFolderName, dstFileName,
                                            errorSetBootSettingsParams, contextSetBootSettingsParams, callbackSetBootSettingsParams) ;   
                  }
                  // =================================================================
                  var mediaServerBaseUrlFileTransfer = bootSettingsLocalFilesList.get(3);
                  var srcStorageName2 = mediaServerBaseUrlFileTransfer.getSrcFileInfo().getStorage();
                  var srcFolderName2  = mediaServerBaseUrlFileTransfer.getSrcFileInfo().getPath();
                  var srcFileName2    = mediaServerBaseUrlFileTransfer.getSrcFileInfo().getName();
                  var dstStorageName2 = mediaServerBaseUrlFileTransfer.getDstFileInfo().getStorage();
                  var dstFolderName2  = mediaServerBaseUrlFileTransfer.getDstFileInfo().getPath();
                  var dstFileName2    = mediaServerBaseUrlFileTransfer.getDstFileInfo().getName();
                  contextUpdateMediaServerBaseUrl.setRemoteCallback(true)
                  self.updateMediaServerBaseUrl(
                        srcStorageName2,  srcFolderName2, srcFileName2,
                        dstStorageName2,  dstFolderName2, dstFileName2,
                        errorUpdateMediaServerBaseUrl, contextUpdateMediaServerBaseUrl, callbackUpdateMediaServerBaseUrl);
        
                }
                //============================================== 
                var bIgnoreErrors = true;
                contextCopyLocalSettingsFiles.setRemoteCallback(true)
                self._aDownloadService._iDownloadMain.downloadFiles_fromMap(
                                      localSettingsFilesList, 
                                      bIgnoreErrors,
                                      errorCopyLocalSettingsFiles, contextCopyLocalSettingsFiles, callbackCopyLocalSettingsFiles);   
              }
              //==============================================
              contextUnzipFile.setRemoteCallback(true);
              self.unzipSettings( zipStorageName, zipFolderName, zipFileName, 
                                  unzipStorageName, unzipFolderName,                                            
                                  errorUnzipFile, contextUnzipFile, callbackUnzipFile);
            }
            //=================================================
            //----------------
            var download_mainSrcStorage  : string = self._appServerBaseUrl+ self._appServerBasePath; //software_remote_server_url + software_remote_folder;
            var download_mainSrcPath     : string = ""
            var download_mainTmpStorage  : string = self._aPlaybackGlobalConfig.getDefaultResourceStorageName();
            var download_mainTmpPath     : string = "";
            var download_mainDstStorage  : string = self._aPlaybackGlobalConfig.getDefaultResourceStorageName();
            var download_mainDstPath     : string = "";
            //---------------
            var remoteSettingsFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer> = new Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>();
            self.buildSettingsFilesList( remoteSettingsFilesList, jsonRemoteSettingsFilesList, 
                                      download_mainSrcStorage, download_mainSrcPath,
                                      download_mainTmpStorage, download_mainTmpPath,
                                      download_mainDstStorage, download_mainDstPath,
                                      error, context, null);

            var bIgnoreErrors = false;
            contextDownloadRemoteSettingsFiles.setRemoteCallback(true)
            self._aDownloadService._iDownloadMain.downloadFiles_fromMap(
                                  remoteSettingsFilesList, 
                                  bIgnoreErrors,
                                  errorDownloadRemoteSettingsFiles, contextDownloadRemoteSettingsFiles, callbackRemoteSettingsFiles);

          }
          // =============================================
          var appServerBaseUrlFileTransfer = bootSettingsLocalFilesList.get(1);
          var srcStorageName = appServerBaseUrlFileTransfer.getDstFileInfo().getStorage();
          var srcFolderName  = appServerBaseUrlFileTransfer.getDstFileInfo().getPath();
          var srcFileName    = appServerBaseUrlFileTransfer.getDstFileInfo().getName();
          var dstStorageName = appServerBaseUrlFileTransfer.getDstFileInfo().getStorage();
          var dstFolderName  = appServerBaseUrlFileTransfer.getDstFileInfo().getPath();
          var dstFileName    = appServerBaseUrlFileTransfer.getDstFileInfo().getName();
          self.updateAppServerBaseUrl(
                      srcStorageName,  srcFolderName, srcFileName,
                      dstStorageName,  dstFolderName, dstFileName,
                      errorUpdateAppServerBaseUrl, contextUpdateAppServerBaseUrl, callbackUpdateAppServerBaseUrl);
        }
        // =================================================================
        var seedSerialNoFileTransfer = bootSettingsLocalFilesList.get(2);
        var srcStorageName1 = seedSerialNoFileTransfer.getDstFileInfo().getStorage();
        var srcFolderName1  = seedSerialNoFileTransfer.getDstFileInfo().getPath();
        var srcFileName1    = seedSerialNoFileTransfer.getDstFileInfo().getName();
        var dstStorageName1 = seedSerialNoFileTransfer.getDstFileInfo().getStorage();
        var dstFolderName1  = seedSerialNoFileTransfer.getDstFileInfo().getPath();
        var dstFileName1    = seedSerialNoFileTransfer.getDstFileInfo().getName();
        self.updateSerialNo(
                    srcStorageName1,  srcFolderName1, srcFileName1,
                    dstStorageName1,  dstFolderName1, dstFileName1,
                    errorUpdateSerialNo, contextUpdateSerialNo, callbackUpdateSerialNo);
      }
      // =================================================================
      var mainDebugParamFileTransfer = bootSettingsLocalFilesList.get(4);
      var srcStorageName4 = mainDebugParamFileTransfer.getDstFileInfo().getStorage();
      var srcFolderName4  = mainDebugParamFileTransfer.getDstFileInfo().getPath();
      var srcFileName4    = mainDebugParamFileTransfer.getDstFileInfo().getName();
      var dstStorageName4 = mainDebugParamFileTransfer.getDstFileInfo().getStorage();
      var dstFolderName4  = mainDebugParamFileTransfer.getDstFileInfo().getPath();
      var dstFileName4    = mainDebugParamFileTransfer.getDstFileInfo().getName();
      self.updateMainDebugParam(
                  srcStorageName4,  srcFolderName4, srcFileName4,
                  dstStorageName4,  dstFolderName4, dstFileName4,
                  errorMainDebugParam, contextMainDebugParam, callbackMainDebugParam);

    }
    




    //====================================================    
    //====================================================    
    public buildSettingsFilesList(  settingsFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                                    jsonSettingsFilesList: any,
                                    mainSrcStorage : string, mainSrcPath    : string, 
                                    mainTmpStorage : string, mainTmpPath    : string, 
                                    mainDstStorage : string, mainDstPath    : string, 
                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number
    {
      var self = this;
      for (var idx = 0; idx < jsonSettingsFilesList["files"].length; idx++)
      {
        self.addSettingsFile( jsonSettingsFilesList["files"][idx], settingsFilesList, 
                              mainSrcStorage, mainSrcPath, 
                              mainTmpStorage, mainTmpPath, 
                              mainDstStorage, mainDstPath, 
                              error, context, null);
        console.debug(jsonSettingsFilesList["files"][idx].src_file_path)
      }
      return 0;
    }



    //====================================================    
    //====================================================    
    public addSettingsFile(  
                         jsonObject : any, 
                         settingsFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                         mainSrcStorage : string, mainSrcPath    : string, 
                         mainTmpStorage : string, mainTmpPath    : string, 
                         mainDstStorage : string, mainDstPath    : string, 
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number
    {
       var self = this;
       var fileId      = jsonObject["file_id"];
       var srcFilePath = jsonObject["src_file_path"];
       var srcFileName = jsonObject["src_file_name"];
       var tmpFilePath = jsonObject["tmp_file_path"];
       var tmpFileName = jsonObject["tmp_file_name"];
       var dstFilePath = jsonObject["dst_file_path"];
       var dstFileName = jsonObject["dst_file_name"];
       var check_sha   = jsonObject["check_sha"];
       var copy_file   = jsonObject["copy_file"];
       var copy_file_if_exists  = jsonObject["copy_file_if_exists"];
          
       var newSettingsFileTransfer : amGeneralFileTransfer.am_general.AE_FileTransfer = this._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
       newSettingsFileTransfer.injectDependencies(null, this._aServiceLocator,null,null);
       
       //---
       /*
       if (self._aPlaybackGlobalConfig._realPlatform == "tizen")
       {
         sUrlStorage =  "wgt-package"; ///SSSP4MVisionJsPlaybackEngine/
         sFileStorage = self._aPlaybackGlobalConfig.getDefaultResourceStorageName();
       }else{
         sUrlStorage  = "C:/W/230/Mood.MVisionJsPlaybackEngine/deploy/win/public/";//self._aPlaybackGlobalConfig._defaultStorageUrlName;
         //if (sUrlStorage != null)
           //sUrlStorage = sUrlStorage.substring(sUrlStorage.length - 2)
         sFileStorage = self._aPlaybackGlobalConfig.getDefaultResourceStorageName();
       }*/
      
       newSettingsFileTransfer.getSrcFileInfo().setStorage(mainSrcStorage);
       newSettingsFileTransfer.getSrcFileInfo().setPath( mainSrcPath + srcFilePath + "/" );
       newSettingsFileTransfer.getSrcFileInfo().setName( srcFileName);
       //newSettingsFileTransfer.setSrcShaFileValue(shaFileValue);
       //newSettingsFileTransfer.setSrcFileType(srcFileType);
       newSettingsFileTransfer.setSrcFileId(fileId);
       newSettingsFileTransfer.setSrcShaFileInfo(this.createShaFileInfoFromFileInfo(newSettingsFileTransfer.getSrcFileInfo()));

       //--- set the temporary file infos
       newSettingsFileTransfer.getTmpFileInfo().setStorage(mainTmpStorage);
       newSettingsFileTransfer.getTmpFileInfo().setPath( mainTmpPath + tmpFilePath + "/" );
       newSettingsFileTransfer.getTmpFileInfo().setName( tmpFileName);
       newSettingsFileTransfer.setTmpShaFileInfo(this.createShaFileInfoFromFileInfo(newSettingsFileTransfer.getTmpFileInfo()));
       newSettingsFileTransfer.setComputedShaFileInfo(this.createComputedShaFileInfoFromFileInfo(newSettingsFileTransfer.getTmpFileInfo()));

       //--- set the destination file infos
       newSettingsFileTransfer.getDstFileInfo().setStorage(mainDstStorage);
       newSettingsFileTransfer.getDstFileInfo().setPath( mainDstPath + dstFilePath + "/" );
       newSettingsFileTransfer.getDstFileInfo().setName( dstFileName);
       newSettingsFileTransfer.setDstShaFileInfo(this.createShaFileInfoFromFileInfo(newSettingsFileTransfer.getDstFileInfo()));

       if (! check_sha)
         newSettingsFileTransfer.setCheckSha(false)

       if (copy_file)
         newSettingsFileTransfer.setCopyFile(true);

      if (! copy_file_if_exists)
        newSettingsFileTransfer.setCopyFileIfExists(false);

       //-- add the newRansfer in media file list
       settingsFilesList.set(fileId, newSettingsFileTransfer);

       return 0;

    }



    //====================================================    
    //====================================================    
    public getHardwareAppServerBaseUrl(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    { 
      var self = this;
      if (self._aPlaybackGlobalConfig._realPlatform  != "tizen")
      {
        self._hardwareAppServerBaseUrl =  "n/a";//"http://192.168.0.222:9080/app/tizen/" //"n/a";
        context.setError(error);
        context.setBoolResult(false);
        return callback(context);      
      }
      //--------------------------
      var errorGetHardwareBaseUrl:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextGetHardwareBaseUrl:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackGetHardwareBaseUrl = function callbackGetHardwareBaseUrl(ctx1 : amGeneralContext.am_general.A_Context)
      {
        if (ctx1.isError())
        {
          self._hardwareAppServerBaseUrl = "error";
        }else{
          self._hardwareAppServerBaseUrl = appServerProperties.getAppServerUrl();
        }
        if (context != null)
        {
          //context.setBoolResult(false);
          context.setError(error);
          return callback(context);  
        }

      }
      //==============================
      contextGetHardwareBaseUrl.setRemoteCallback(true);
      var appServerProperties : amGeneralaAppServerProperties.am_general.A_AppServerProperties = 
                                                                                    self._aServiceLocator._iEntityCreation.createDefaultAppServerProperties(error);
      self._aSDKService._iSDKApplicationSetup.getAppServerProperties(appServerProperties, 
                                                                     errorGetHardwareBaseUrl, contextGetHardwareBaseUrl, callbackGetHardwareBaseUrl);   
    }


    //====================================================    
    //====================================================    
    public  setAppServerBaseUrlAndAppServeBasePath(strAppServerBaseUrl: string) : number
    {
      var self = this;
      var errorNo = 0
      if (strAppServerBaseUrl.startsWith("https://"))
      {
        var strBaseUrl = self.getFieldValue(strAppServerBaseUrl,"https://","/");
        var strBasePath    = self.getNextContent(strAppServerBaseUrl,strBaseUrl + "/");
        self._appServerBaseUrl  = "https://" + strBaseUrl + "/";
        self._appServerBasePath = strBasePath;
      // -----  
      }else if (strAppServerBaseUrl.startsWith("http://")){
        var strBaseUrl = self.getFieldValue(strAppServerBaseUrl,"http://","/");
        var strBasePath    = self.getNextContent(strAppServerBaseUrl,strBaseUrl + "/");
        self._appServerBaseUrl  = "http://" + strBaseUrl + "/";
        self._appServerBasePath = strBasePath;
      // -----  
      }else{
        self._appServerBaseUrl  = "";
        self._appServerBasePath = "";
        errorNo = 1;
      }
      return errorNo;
    }


    //====================================================    
    //====================================================    
    public updateAppServerBaseUrl(
                  srcStorageName,  srcFolderName, srcFileName,
                  dstStorageName,  dstFolderName, dstFileName,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;  
      //-------------------------
      var strInputFileContent : string;
      var strOutputFileContent : string;
      var bNoNeedToWrite = false;
      //--------------------------
      var errorGetHardwareBaseUrl:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextGetHardwareBaseUrl:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackGetHardwareBaseUrl = function callbackGetHardwareBaseUrl(ctx21 : amGeneralContext.am_general.A_Context)
      {
        if (ctx21.isError())
        {
          self._appServerBaseUrl  = "";
          self._appServerBasePath = "";
        }else{
          var errorNo = self.setAppServerBaseUrlAndAppServeBasePath(self._hardwareAppServerBaseUrl) ;
        }
        //--------------------------
        var errorReadTextFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextReadTextFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackReadTextFile = function callbackReadTextFile(ctx4 : amGeneralContext.am_general.A_Context)
        {
          
          if (ctx4.isError())
          {
            //if (context != null)
            //{
              //context.setBoolResult(false);
              //context.setError(error);
              //return callback(context);  
            //}
            //---
            var errorNo = self.setAppServerBaseUrlAndAppServeBasePath(self._hardwareAppServerBaseUrl) ;
            strInputFileContent = "";
          }else{
            //---
            strInputFileContent = ctx4._result;
            try{
              const jsonSettings = JSON.parse(strInputFileContent);
              var strAppServerBaseUrl = jsonSettings["app_server_base_url"];  //"http://192.168.0.222:9080/app/tizen/"
              var errorNo = self.setAppServerBaseUrlAndAppServeBasePath(strAppServerBaseUrl) ;
            }catch(e){
              self._appServerBaseUrl  = "";
              self._appServerBasePath = "";
              var errorNo = self.setAppServerBaseUrlAndAppServeBasePath(self._hardwareAppServerBaseUrl) ;
            }
          }
          var strOutputFileContent =  "{\r\n"  +
                                           "\"app_server_base_url\" :  \"" + self._appServerBaseUrl + self._appServerBasePath + "\",\r\n" +
                                           "\"hardware_app_server_base_url\" :  \"" + self._hardwareAppServerBaseUrl + "\"\r\n" +
                                      "}\r\n"  ;
          //--------------------
          var errorWriteTextFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextWriteTextFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackWriteTextFile = function callbackWriteTextFile(ctx6 : amGeneralContext.am_general.A_Context)
          {
            var writeFilesWell = true;
            if (ctx6.isError())
            {
              writeFilesWell = false;
            } 
            //context.setBoolResult(moveFilesWell);
            context.setError(error);
            return callback(context);                 
          }  
          //=======================================================
          contextWriteTextFile.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.writeTextFile2( dstStorageName,  dstFolderName, dstFileName,  strOutputFileContent,
                                                            errorWriteTextFile, contextWriteTextFile, callbackWriteTextFile);        
        }
        //==================================================
        contextReadTextFile.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.readTextFile2(srcStorageName,     srcFolderName, srcFileName,
                                                        errorReadTextFile, contextReadTextFile, callbackReadTextFile);   
      }                                                         
      //==============================
      contextGetHardwareBaseUrl.setRemoteCallback(true);
      self.getHardwareAppServerBaseUrl(errorGetHardwareBaseUrl, contextGetHardwareBaseUrl, callbackGetHardwareBaseUrl);   
    }
 



    //====================================================    
    //====================================================    
    public getHardwareSerialNo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    { 
      var self = this;
      if (self._aPlaybackGlobalConfig._realPlatform  != "tizen")
      {
        self._hardwareSerialNo = "";//"PC100001"; 
        context.setError(error);
        context.setBoolResult(false);
        return callback(context);      
      }
      //--------------------------
      var errorGetHardwareSerialNo:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextGetHardwareSerialNo:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackGetHardwareSerialNo = function callbackGetHardwareSerialNo(ctx1 : amGeneralContext.am_general.A_Context)
      {
        if (ctx1.isError())
        {
          self._hardwareSerialNo = "error";
        }else{
          self._hardwareSerialNo = ctx1.getResult();
        }
        if (context != null)
        {
          //context.setBoolResult(false);
          context.setError(error);
          return callback(context);  
        }

      }
      //==============================
      contextGetHardwareSerialNo.setRemoteCallback(true);
      self._aSDKService._iSDKHardwareSetup.getSerialNumber(errorGetHardwareSerialNo, contextGetHardwareSerialNo, callbackGetHardwareSerialNo);   
    }



    //====================================================    
    //====================================================    
    public updateSerialNo(
                  srcStorageName,  srcFolderName, srcFileName,
                  dstStorageName,  dstFolderName, dstFileName,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;  
      //-------------------------
      var strInputFileContent : string;
      var strOutputFileContent : string;
      var bNoNeedToWrite = false;
      //--------------------------
      var errorCreateBootSettingsFolder:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateBootSettingsFolder:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateBootSettingsFolder = function callbackCreateBootSettingsFolder(ctx21 : amGeneralContext.am_general.A_Context)
      {
        //--------------------------
        var errorGetHardwareSerialNo:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextGetHardwareSerialNo:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackGetHardwareSerialNo = function callbackGetHardwareSerialNo(ctx21 : amGeneralContext.am_general.A_Context)
        {
          if (ctx21.isError())
          {
          }else{

          }
          //--------------------------
          var errorReadTextFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextReadTextFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackReadTextFile = function callbackReadTextFile(ctx4 : amGeneralContext.am_general.A_Context)
          {
            
            if (ctx4.isError())
            {
              //if (context != null)
              //{
                //context.setBoolResult(false);
                //context.setError(error);
                //return callback(context);  
              //}
              //---
              self._serialNo = self._hardwareSerialNo;
            }else{
              //---
              strInputFileContent = ctx4._result;
              try{
                const jsonSettings = JSON.parse(strInputFileContent);
                var strSerialNo = jsonSettings["seed_serial_no"];  //"http://192.168.0.222:9080/app/tizen/"
                if (strSerialNo == "") 
                  self._serialNo = self._hardwareSerialNo;
                else
                  self._serialNo = strSerialNo;
              }catch(e){
                self._serialNo  = self._hardwareSerialNo;
              }
            }
            var strOutputFileContent =  "{\r\n"  +
                                            "\"seed_serial_no\" :  \""     + self._serialNo + "\",\n\r" +
                                            "\"hardware_serial_no\" :  \"" + self._hardwareSerialNo + "\"\n\r" +
                                        "}\r\n"  ;
            //--------------------
            var errorWriteTextFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextWriteTextFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackWriteTextFile = function callbackWriteTextFile(ctx6 : amGeneralContext.am_general.A_Context)
            {
              var writeFilesWell = true;
              if (ctx6.isError())
              {
                writeFilesWell = false;
              } 
              //context.setBoolResult(moveFilesWell);
              context.setError(error);
              return callback(context);                 
            }  
            //=======================================================
            contextWriteTextFile.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.writeTextFile2( dstStorageName,  dstFolderName, dstFileName,  strOutputFileContent,
                                                              errorWriteTextFile, contextWriteTextFile, callbackWriteTextFile);        
          }
          //==================================================
          contextReadTextFile.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.readTextFile2(srcStorageName,     srcFolderName, srcFileName,
                                                          errorReadTextFile, contextReadTextFile, callbackReadTextFile);   
        }                                                         
        //==============================
        contextGetHardwareSerialNo.setRemoteCallback(true);
        self.getHardwareSerialNo(errorGetHardwareSerialNo, contextGetHardwareSerialNo, callbackGetHardwareSerialNo); 
      }  
      //==============================
      contextCreateBootSettingsFolder.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.createFolder2(dstStorageName, 
                                                      dstFolderName, 
                                                      errorCreateBootSettingsFolder, contextCreateBootSettingsFolder, callbackCreateBootSettingsFolder); 
      
    }



    //====================================================    
    //====================================================    
    public updateMediaServerBaseUrl(
                  srcStorageName,  srcFolderName, srcFileName,
                  dstStorageName,  dstFolderName, dstFileName,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;  
      //-------------------------
      var strInputFileContent : string;
      var strOutputFileContent : string;
      var bNoNeedToWrite = false;
      //--------------------------
      var errorReadDstTextFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextReadDstTextFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackReadDstTextFile = function callbackReadDstTextFile(ctx10 : amGeneralContext.am_general.A_Context)
      {
        if (! ctx10.isError())
        {
          //---
          strInputFileContent = ctx10._result;
          try{
            const jsonSettings = JSON.parse(strInputFileContent);
            var strMediaServerBaseUrl = jsonSettings["media_server_base_url"];  //"http://192.168.0.222:9080/app/tizen/"
            self._mediaServerBaseUrl = strMediaServerBaseUrl;
          }catch(e){
            self._mediaServerBaseUrl  = "";
          }
          // --------
          if (self._mediaServerBaseUrl  != "")
          {
            // ----
            if (context != null)
            {
              context.setBoolResult(false);
              context.setError(error);
              return callback(context);  
            }
          }
        }
        //--------------------------
        var errorReadTextFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextReadTextFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackReadTextFile = function callbackReadTextFile(ctx4 : amGeneralContext.am_general.A_Context)
        {
          
          if (ctx4.isError())
          {
            //if (context != null)
            //{
              //context.setBoolResult(false);
              //context.setError(error);
              //return callback(context);  
            //}
            //---
            self._mediaServerBaseUrl  = "";
          }else{
            //---
            strInputFileContent = ctx4._result;
            try{
              const jsonSettings = JSON.parse(strInputFileContent);
              var strMediaServerBaseUrl = jsonSettings["media_server_base_url"];  //"http://192.168.0.222:9080/app/tizen/"
              self._mediaServerBaseUrl = strMediaServerBaseUrl;
            }catch(e){
              self._mediaServerBaseUrl  = "";
            }
          }
          var strOutputFileContent =  "{\r\n"  +
                                            "\"media_server_base_url\" :  \""     + self._mediaServerBaseUrl + "\"\n\r" +
                                      "}\r\n"  ;
          //--------------------
          var errorWriteTextFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextWriteTextFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackWriteTextFile = function callbackWriteTextFile(ctx6 : amGeneralContext.am_general.A_Context)
          {
            var writeFilesWell = true;
            if (ctx6.isError())
            {
              writeFilesWell = false;
            } 
            //context.setBoolResult(moveFilesWell);
            context.setError(error);
            return callback(context);                 
          }  
          //=======================================================
          contextWriteTextFile.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.writeTextFile2( dstStorageName,  dstFolderName, dstFileName,  strOutputFileContent,
                                                            errorWriteTextFile, contextWriteTextFile, callbackWriteTextFile);        
        }
        //==================================================
        contextReadTextFile.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.readTextFile2(srcStorageName,     srcFolderName, srcFileName,
                                                        errorReadTextFile, contextReadTextFile, callbackReadTextFile);   
      }
      //================================================
      contextReadDstTextFile.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.readTextFile2(dstStorageName,       dstFolderName, dstFileName,
                                                      errorReadDstTextFile, contextReadDstTextFile, callbackReadDstTextFile);   
        
    }  




    //====================================================    
    //====================================================    
    public updateMainDebugParam(
                  srcStorageName,  srcFolderName, srcFileName,
                  dstStorageName,  dstFolderName, dstFileName,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;  
      //-------------------------
      var strInputFileContent : string;
      var strOutputFileContent : string;
      var bNoNeedToWrite = false;

      //--------------------------
      var errorCreateBootSettingsFolder:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateBootSettingsFolder:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateBootSettingsFolder = function callbackCreateBootSettingsFolder(ctx21 : amGeneralContext.am_general.A_Context)
      {
        //--------------------------
        var errorReadTextFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextReadTextFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackReadTextFile = function callbackReadTextFile(ctx4 : amGeneralContext.am_general.A_Context)
        {
          
          if (ctx4.isError())
          {
            //if (context != null)
            //{
              //context.setBoolResult(false);
              //context.setError(error);
              //return callback(context);  
            //}
            //---
            self._strMainDebugParam  = "false";
          }else{
            //---
            strInputFileContent = ctx4._result;
            try{
              const jsonSettings = JSON.parse(strInputFileContent);
              var strMainDebugParam = jsonSettings["main_debug_param"];  //"http://192.168.0.222:9080/app/tizen/"
              self._strMainDebugParam = strMainDebugParam;
            }catch(e){
              self._strMainDebugParam  = "false";
            }
          }
          var strOutputFileContent =  "{\r\n"  +
                                            "\"main_debug_param\" :  \""     + self._strMainDebugParam + "\"\n\r" +
                                      "}\r\n"  ;
          //--------------------
          var errorWriteTextFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextWriteTextFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackWriteTextFile = function callbackWriteTextFile(ctx6 : amGeneralContext.am_general.A_Context)
          {
            var writeFilesWell = true;
            if (ctx6.isError())
            {
              writeFilesWell = false;
            } 
            //context.setBoolResult(moveFilesWell);
            context.setError(error);
            return callback(context);                 
          }  
          //=======================================================
          contextWriteTextFile.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.writeTextFile2( dstStorageName,  dstFolderName, dstFileName,  strOutputFileContent,
                                                            errorWriteTextFile, contextWriteTextFile, callbackWriteTextFile);        
        }
        //==================================================
        contextReadTextFile.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.readTextFile2(srcStorageName,     srcFolderName, srcFileName,
                                                        errorReadTextFile, contextReadTextFile, callbackReadTextFile);   
      }
      //==============================
      contextCreateBootSettingsFolder.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.createFolder2(dstStorageName, 
                                                      dstFolderName, 
                                                      errorCreateBootSettingsFolder, contextCreateBootSettingsFolder, callbackCreateBootSettingsFolder); 
    }
  }
} 


