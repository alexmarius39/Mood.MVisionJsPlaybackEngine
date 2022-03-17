import amNonrenderingServicesUpdateSoftware  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_updatesoftware/AS_UpdateSoftware");

import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amTransversalServicesDownloadService   = require("../../../../../app/ts/abstract/am_transversalservices/as_downloadservice/AS_DownloadService");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFileInfo                       = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralFileTransfer                   = require("../../../../../app/ts/abstract/am_general/ae_filetransfer/AE_FileTransfer");
import amGeneralShaProperties                  = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");
import amGeneralContext                        = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amGeneralActivityLogMessageTypes     = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");

import amTransversalServicesSDKService         = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import  amAppInstallProperties          = require("../../../../../app/ts/abstract/am_general/a_appinstallproperties/A_AppInstallProperties");

import amIUpdateSoftwareConfig = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_updatesoftware/I_UpdateSoftwareConfig");
import amIUpdateSoftwareMain   = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_updatesoftware/I_UpdateSoftwareMain");

import rmGeneral    = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");

import rmIImplUpdateSoftwareConfig  = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_updatesoftware/IImpl_UpdateSoftwareConfig_R");
import rmIImplUpdateSoftwareMain    = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_updatesoftware/IImpl_UpdateSoftwareMain_R");


export module rm_nonrenderingservices
{
  export class RS_UpdateSoftware extends  rmGeneral.rm_general.R_Service 
                                 implements amNonrenderingServicesUpdateSoftware.am_nonrenderingservices.AS_UpdateSoftware 
  {
    //---------- interfaces
    _iUpdateSoftwareConfig          : amIUpdateSoftwareConfig.am_nonrenderingservices.I_UpdateSoftwareConfig ;
    _iUpdateSoftwareMain            : amIUpdateSoftwareMain.am_nonrenderingservices.I_UpdateSoftwareMain ;

    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    _aPlaybackGlobalConfig : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
    _aDownloadService      : amTransversalServicesDownloadService.am_transversalservices.AS_DownloadService;
    _aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;

    _fileTransferList : Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>;

    _aAppInstallProperties : amAppInstallProperties.am_general.A_AppInstallProperties;

    _bWithActivityLog : boolean;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iUpdateSoftwareConfig            = new rmIImplUpdateSoftwareConfig.rm_nonrenderingservices.IImpl_UpdateSoftwareConfig_R(this);
      this._iUpdateSoftwareMain              = new rmIImplUpdateSoftwareMain.rm_nonrenderingservices.IImpl_UpdateSoftwareMain_R(this);

      this._aLogService = aLogService;

      this._aPlaybackGlobalConfig = null;
      this._aDownloadService      = null;
      this._aActivityLogService   = null;
      this._fileTransferList      = null;
      this._aAppInstallProperties = null;

      this._bWithActivityLog = false;
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
            if (self._bWithActivityLog)
            {
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                `${ctx1.getError().getErrId()}: ${ctx1.getError().getErrMsg()}`, 
                null, 
                null, 
                null
              );
            }
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
                if (self._bWithActivityLog)
                {    
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    `493: hasNewSoftwareOrNewConfig: [${ctxHasNewSoftwareOrNewConfig.getError().getErrMsg()}]`, 
                    null, 
                    null, 
                    null
                  );
                }
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
                if (self._bWithActivityLog)
                {    
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    ` 493: configureEmptyUrl: [${ctxInstall.getError().getErrMsg()}]`, 
                    null, 
                    null, 
                    null
                  );
                }
              }

            }
            if (! softwareInstalledWell)
            {
              softwareInstalledWell = false;
              if (self._debug)
              { 
                  document.getElementById("rend.message").innerHTML += "<p>configureEmptyUrl ERROR 993: - Error configureEmptyUrl" + "[" + ctxInstall.getError().getErrMsg() + "]</p>";
                  if (self._bWithActivityLog)
                  {      
                    self._aActivityLogService._IActivityLogServiceMessaging
                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                      ` 993: Install Software - Error configureEmptyUrl: [${ctxInstall.getError().getErrMsg()}]`, 
                      null, 
                      null, 
                      null
                    );
                  }
              }
            }else{
              softwareInstalledWell = true;
              if (self._bWithActivityLog)
              {
                 self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`configureEmptyUrl...OK`, null, null, null);
              }
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
          if (self._bWithActivityLog)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`configureEmptyUrl...`, null, null, null);
          }
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
        if (self._bWithActivityLog)
        {
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewSoftwareOrNewConfig...`, null, null, null);
        }
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
            if (self._bWithActivityLog)
            {
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                ` 481: DownloadAll - Error while checking for a new software: [${ctxHasNewSoftware.getError().getErrMsg()}]`, 
                null, 
                null, 
                null
              );
            }
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
              if (self._bWithActivityLog)
              {  
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  ` 481: DownloadAll - Error while checking for a new software config: [${ctxHasNewConfig.getError().getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
              }
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
              if (self._bWithActivityLog)
              {  
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`bHasNewSoftwareOrNewConfig: TRUE`, null, null, null);
              }
            } else {
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: bHasNewSoftwareOrNewConfig: FALSE</p>";            
              if (self._bWithActivityLog)
              {  
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`bHasNewSoftwareOrNewConfig: FALSE`, null, null, null);
              }
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
        if (self._bWithActivityLog)
        {
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewSoftwareConfig...`, null, null, null);
        }
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
      if (self._bWithActivityLog)
      {
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewSoftware...`, null, null, null);
      }
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
            if (self._bWithActivityLog)
            {
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                ` 4889: ${aTracingMsg} downloadFile: [${ctx1.getError().getErrMsg()}]`, 
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
              if (self._bWithActivityLog)
              {  
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  ` 4890: ${aTracingMsg} downloadFileSha: [${ctx2.getError().getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
              }
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
          if (self._bWithActivityLog)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadFileSha...OK`, null, null, null);
          }
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
                if (self._bWithActivityLog)
                {    
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    ` 4891: ${aTracingMsg} error compute sha: [${ctx3.getError().getErrMsg()}]`, 
                    null, 
                    null, 
                    null
                  );
                }
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
            if (self._bWithActivityLog)
            {
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`computeShaFile...OK`, null, null, null);
            }
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
                  if (self._bWithActivityLog)
                  {      
                    self._aActivityLogService._IActivityLogServiceMessaging
                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                      ` 4891: ${aTracingMsg} readTmpShaFile: [${ctx4.getError().getErrMsg()}]`, 
                      null, 
                      null, 
                      null
                    );
                  }
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
              if (self._bWithActivityLog)
              {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`readTmpShaFile...OK`, null, null, null);
              }
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
                    if (self._bWithActivityLog)
                    {
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`readCrtDstShaFile...OK`, null, null, null);
                    }
                    if (self._debug)
                    {                
                      document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": readCrtDstShaFile...OK</p>";
                    }
                    var shaCrtFile =  ctx5.getResult();
                    if (aTransferFile.isTheSameShaValue(shaCrtFile, shaDownloadedFile))
                    {
                      hasNewSoftware2 = false;
                      if (self._bWithActivityLog)
                      {          
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": FALSE", null, null, null);
                      }
                      if (self._debug)
                      {                
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": FALSE</p>";
                      }
                    }else{
                      hasNewSoftware2 = true;
                      if (self._bWithActivityLog)
                      {          
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": TRUE", null, null, null);
                      }
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
              if (self._bWithActivityLog)
              {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": readCrtDstShaFile...", null, null, null);
              }
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
            if (self._bWithActivityLog)
            {
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": readTmpShaFile...", null, null, null);
            }
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
          if (self._bWithActivityLog)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": computeFileSha...", null, null, null);
          }
          if (self._debug)
          {    
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: " + aTracingMsg + ": computeFileSha...</p>";

          }
          contextComputeSha.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties,
                                                            errorComputeSha, contextComputeSha, callbackComputeSha);    
        }  
        //==================================================
        if (self._bWithActivityLog)
        {
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": downloadFileSha...", null, null, null);
        }
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
      if (self._bWithActivityLog)
      {
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),aTracingMsg + ": downloadFile...", null, null, null);
      }
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
            if (self._bWithActivityLog)
            {
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                ` 486: downloadSoftwareFiles: Download Software - Error while download the Software`, 
                null, 
                null, 
                null
              );
            }
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);  
          }
          return;  
        }
        if (self._bWithActivityLog)
        {
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: DownloadSoftware...OK`, null, null, null);
        }
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
              if (self._bWithActivityLog)
              {  
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  ` 487: downloadSoftwareFiles - Error Building the Software Files List to Download: [${errorBuild.getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
              }
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
          if (self._bWithActivityLog)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: buildSoftwareFilesListToDownload...OK`, null, null, null);
          }
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
                if (self._bWithActivityLog)
                {
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    ` 482:downloadSoftwareFiles: downloadSoftwareFilesList: [${errorDownloadSoftwareFiles.getErrMsg()}]`, 
                    null, 
                    null, 
                    null
                  );
                }
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
            if (self._bWithActivityLog)
            {
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: downloadMediaFilesList...OK`, null, null, null);
            }
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
          if (self._bWithActivityLog)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: downloadMediaFilesList...`, null, null, null);
          }
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
        if (self._bWithActivityLog)
        {
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: buildSoftwareFilesListToDownload...`, null, null, null);
        }
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
      if (self._bWithActivityLog)
      {
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles: downloadSoftware...`, null, null, null);
      }
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
            if (self._bWithActivityLog)
            {
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                ` 481: DownloadAll - Error while checking for a new software`, 
                null, 
                null, 
                null
              );
            }
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
              if (self._bWithActivityLog)
              {  
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  ` 482: DownloadAll - Error during the cleanup of the current software folders: [${errorCleanup.getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
              }
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
          if (self._bWithActivityLog)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`cleanupCurrentSoftwareFiles...Ok`, null, null, null);
          }
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
                if (self._bWithActivityLog)
                {    
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    ` 482: Download Software - Error during the download of the software and its files: [${ctx1.getError().getErrMsg()}]`, 
                    null, 
                    null, 
                    null
                  );
                }
                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>downloadSoftwareFiles...ERROR: " + error.getErrMsg() + "</p>";
                }
              }else{
                if (self._bWithActivityLog)
                {
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles...Ok`, null, null, null);
                }
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
                  if (self._bWithActivityLog)
                  {      
                    self._aActivityLogService._IActivityLogServiceMessaging
                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                      ` 483: Download Software - Error during the download of the software  files: [${errorDownload.getErrMsg()}]`, 
                      null, 
                      null, 
                      null
                    );
                  }
                }
                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>moveSoftwareToDst...ERROR: " + error.getErrMsg() + "</p>";
                }
              }else{
                if (self._bWithActivityLog)
                {    
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`moveSoftwareToDst...OK`, null, null, null);
                }
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
                    if (self._bWithActivityLog)
                    {        
                      self._aActivityLogService._IActivityLogServiceMessaging
                      .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                        ` 493: Install Software - Error during software installation: [${ctxInstall.getError().getErrMsg()}]`, 
                        null, 
                        null, 
                        null
                      );
                    }
                  }

                }
                if (! softwareInstalledWell)
                {
                  softwareInstalledWell = false;
                  if (self._debug)
                  { 
                     document.getElementById("rend.message").innerHTML += "<p>installSoftware ERROR 893: - Error during software installation:" + "[" + ctxInstall.getError().getErrMsg() + "]</p>";
                     if (self._bWithActivityLog)
                     {         
                        self._aActivityLogService._IActivityLogServiceMessaging
                        .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                          ` 493: Install Software - Error during software installation: [${ctxInstall.getError().getErrMsg()}]`, 
                          null, 
                          null, 
                          null
                        );      
                     }                             
                  }
                }else{
                  softwareInstalledWell = true;
                  if (self._bWithActivityLog)
                  {      
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`installSoftware...OK`, null, null, null);
                  }
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
              if (self._bWithActivityLog)
              {  
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`installSoftware...`, null, null, null);
              }
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
            if (self._bWithActivityLog)
            {
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`moveSoftwareAndShaFileToDst...`, null, null, null);
            }
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
          if (self._bWithActivityLog)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadSoftwareFiles...`, null, null, null);
          }
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
        if (self._bWithActivityLog)
        {
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`cleanupCurrentSoftwareFiles...`, null, null, null);
        }
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
      if (self._bWithActivityLog)
      {
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewSoftware...`, null, null, null);
      }
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
    public update(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      if (self._bWithActivityLog)
      {
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`Update Software: Start ....`, null, null, null);
      }
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
        if (self._bWithActivityLog)
        {
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`createFoldersIfTheyNotExists....OK`, null, null, null);
        }
        if (self._debug)
        {  
          document.getElementById("rend.message").innerHTML += "<p>createFoldersIfTheyNotExists....OK</p>";

        }
        self.downloadAll( softwareType, aSoftwareTransfer, aSoftwareConfigTransfer, error, context, callbackDownloadAll);
      }
      if (self._bWithActivityLog)
      {
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`createFoldersIfTheyNotExists....`, null, null, null);
      }
      if (self._debug)
      {
        document.getElementById("rend.message").innerHTML += "<p>createFoldersIfTheyNotExists....</p>";
      }
      self.createFoldersIfTheyNotExists(softwareType, aSoftwareTransfer, aSoftwareConfigTransfer, errorCreateFolders, contextCreateFolders, callbackCreateFolders);
      
    }
  
 
  }
} 


