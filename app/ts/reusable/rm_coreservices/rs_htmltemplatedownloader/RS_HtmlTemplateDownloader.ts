import amCoreServicesHtmlTemplateDownloader  = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AS_HtmlTemplateDownloader");

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
import amGeneralActivityLogMessageTypes = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");
import amTransversalServicesSDKService  = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");

import amIHtmlTemplateDownloaderConfig = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AI_HtmlTemplateDownloaderConfig");
import amIHtmlTemplateDownloaderBuilderMoodV5 = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AI_htmltemplateDownloaderBuilder_Mood_v5");
import amIHtmlTemplateDownloaderBuilderCustomV1 = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AI_HtmlTemplateDownloaderBuilder_Custom_v1");
import amIHtmlTemplateDownloaderMain   = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AI_HtmlTemplateDownloaderMain");

import rmGeneral    = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");

import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import rmIHtmlTemplateDownloaderConfig  = require("../../../../../app/ts/reusable/rm_coreservices/rs_htmltemplatedownloader/RI_HtmlTemplateDownloaderConfig");
import rmIHtmlTemplateDownloaderBuilderMoodV5   = require("../../../../../app/ts/reusable/rm_coreservices/rs_htmltemplatedownloader/RI_HtmlTemplateDownloaderBuilder_Mood_v5");
import rmIHtmlTemplateDownloaderBuilderCustomV1 = require("../../../../../app/ts/reusable/rm_coreservices/rs_htmltemplatedownloader/RI_HtmlTemplateDownloaderBuilder_Custom_v1");
import rmIHtmlTemplateDownloaderMain    = require("../../../../../app/ts/reusable/rm_coreservices/rs_htmltemplatedownloader/RI_htmltemplateDownloaderMain");
//import { string_to_bytes } from "../../rm_transversalservices/r_utilsservice/asmcryptoes5/other/utils";


export module rm_coreservices
{
  export class RS_HtmlTemplateDownloader extends  rmGeneral.rm_general.R_Service 
                                         implements amCoreServicesHtmlTemplateDownloader.am_coreservices.AS_HtmlTemplateDownloader
  {
    //---------- interfaces
    _iHtmlTemplateDownloaderConfig          : amIHtmlTemplateDownloaderConfig.am_coreservices.AI_HtmlTemplateDownloaderConfig ;
    _iHtmlTemplateDownloaderBuilderMoodV5   : amIHtmlTemplateDownloaderBuilderMoodV5.am_coreservices.AI_HtmlTemplateDownloaderBuilder_Mood_v5 ;
    _iHtmlTemplateDownloaderBuilderCustomV1 : amIHtmlTemplateDownloaderBuilderCustomV1.am_coreservices.AI_HtmlTemplateDownloaderBuilder_Custom_v1 ;
    _iHtmlTemplateDownloaderMain            : amIHtmlTemplateDownloaderMain.am_coreservices.AI_HtmlTemplateDownloaderMain ;

    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 
    _aPlaybackGlobalConfig : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;
    _aDownloadService      : amTransversalServicesDownloadService.am_transversalservices.AS_DownloadService;
    _aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;

    _fileTransferList : Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>;
    _htmlTemplatesTransferList : Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>;
    _htmlTemplateMainTransferList : Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>;
    _htmlTemplateDetailsTransferList : Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>;
    _htmlTemplateFeedDataFile     : amGeneralFileTransfer.am_general.AE_FileTransfer;
    _htmlTemplateInstanceDataFile : amGeneralFileTransfer.am_general.AE_FileTransfer;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iHtmlTemplateDownloaderConfig            = new rmIHtmlTemplateDownloaderConfig.rm_coreservices.RI_HtmlTemplateDownloaderConfig(this);
      this._iHtmlTemplateDownloaderBuilderMoodV5     = new rmIHtmlTemplateDownloaderBuilderMoodV5.rm_coreservices.RI_HtmlTemplateDownloaderBuilder_Mood_v5(this);
      this._iHtmlTemplateDownloaderBuilderCustomV1   = new rmIHtmlTemplateDownloaderBuilderCustomV1.rm_coreservices.RI_HtmlTemplateDownloaderBuilder_Custom_v1(this);
      this._iHtmlTemplateDownloaderMain              = new rmIHtmlTemplateDownloaderMain.rm_coreservices.RI_HtmlTemplateDownloaderMain(this);
    
      this._aLogService = aLogService;

      this._aPlaybackGlobalConfig = null;
      this._aDownloadService      = null;
      this._aActivityLogService   = null;

      this._fileTransferList          = null;
      this._htmlTemplatesTransferList = null;
      this._htmlTemplateDetailsTransferList = null;
      this._htmlTemplateMainTransferList = null;
      this._htmlTemplateFeedDataFile = null;
      this._htmlTemplateInstanceDataFile = null;

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

      this._fileTransferList = null;
      this._htmlTemplatesTransferList = null;
      this._htmlTemplateDetailsTransferList = null;
      this._htmlTemplateMainTransferList = null;
      this._htmlTemplateFeedDataFile = null;
      this._htmlTemplateInstanceDataFile = null;
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
    // set / get playlist controller config
    //---------------------------------------

    //----------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;

      var playlistStorage         : string = aPlaybackGlobalConfig._aPlaylistFile.getStorage();
      var playlistLocalUrlStorage : string = aPlaybackGlobalConfig._aPlaylistFile.getUrlStorage();
      
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
    //   download playlist
    //--------------------------------

    //-----------------------------
    //   html templates methods
    //-----------------------------
    //------------------------------------------------------------
    public applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion(
                  aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                  aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                  aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                  playlistType: string, 
                  aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      if (aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName() != "3109_video_overlay-1.0.2.zip") 
      {
        context.setError(error);
        context.setBoolResult(false);
        return callback(context);      
      }
      //-------
      var self = this;
      //----
      var extraPath          =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
      extraPath              =  self.getFileNameWithoutExtension(extraPath);
      var unzipStorageName   =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage() ;
      var unzipFolderJsName  =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
      //----
      var correctiveStorageName   =  self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getStorage() ;
      var correctiveFolderJsName  =  self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getPath() ;
      //--------------------------
      //--------------------
      var errorCopyTemplateLoader:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCopyTemplateLoader:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCopyTemplateLoader = function callbackCopyTemplateLoader(ctx6 : amGeneralContext.am_general.A_Context)
      {
        var copyFilesWell = true;
        if (ctx6.isError())
        {
          copyFilesWell = false;
        } 
        //context.setBoolResult(moveFilesWell);
        context.setError(error);
        return callback(context);                 
      }  
      //=======================================================
      contextCopyTemplateLoader.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.copyFile2( correctiveStorageName,  correctiveFolderJsName,  "index.html", 
                                                   unzipStorageName,       unzipFolderJsName,       "index.html", 
                                                   errorCopyTemplateLoader, contextCopyTemplateLoader, callbackCopyTemplateLoader);        
    }


    //------------------------------------------------------------ //maa
    public applyCorrectiveJs_forOneHtmlTemplate_forModifiedFile(
                  aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                  aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                  aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                  playlistType: string, 
                  aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var strFileToModified = "353684_video-with-supporting-text-1.0.0_1716216.json"; 
     // var strFoundPart = "{\"components\":[{";
     // var strNewPart   = "{\"components\":[{ \"videoParam\": \"../312372_1280x720_4.mp4\", ";

      var strVideoParamFile = aCrtHtmlTemplateFileTransfer.getAdditionalInfo();
      //strFoundPart = "[{";
      //strNewPart   = "[{ \"videoParam\": \"../312372_1280x720_4.mp4\", ";
      //strNewPart   = "[{ \"videoParam\": \"" + strVideoParamFile + "\", ";

      var strFoundPart = "\"name\":\"Media\",\"type\":\"mediaReference\",\"value\":[";
      //var strNewPart   = "\"name\":\"Media\",\"type\":\"mediaReference\",\"value\":[ \"../312372_1280x720_4.mp4\", ";
      var strNewPart   = "\"name\":\"Media\",\"type\":\"mediaReference\",\"value\":[ \"" + strVideoParamFile + "\", ";
      
      var self = this;
      //----
      var extraPath          =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
      extraPath              =  self.getFileNameWithoutExtension(extraPath);
      var unzipStorageName   =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage() ;
      var unzipFolderJsName  =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + "/";//extraPath + "/";
      //----
      var correctiveStorageName   =  self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getStorage() ;
      var correctiveFolderJsName  =  self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getPath() ;
      //--------------------------
      var mediaId               = aCrtHtmlTemplateFileTransfer.getMediaId();      
      var contentPlayerFileNameWithoutFileExtension = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName(); // = ContentPlayerFileName
      contentPlayerFileNameWithoutFileExtension = self.getFileNameWithoutExtension(contentPlayerFileNameWithoutFileExtension);
      var contentPlayerFileName = contentPlayerFileNameWithoutFileExtension +
                              self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name1 +  //"_",
                              mediaId + //contentFileId + 
                              self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name2 ;  //".json",
      strFileToModified = contentPlayerFileName;
      //--------------------------
      var errorTemplateLoader:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextTemplateLoader:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackTemplateLoader = function callbackTemplateLoader(ctx4 : amGeneralContext.am_general.A_Context)
      {
        
        if (ctx4.isError())
        {
          if (context != null)
          {
            context.setBoolResult(false);
            context.setError(error);
            return callback(context);  
          }
        }
        //---
        var htmlString = ctx4._result;
        //-
        var idxFound = -1;
        if (htmlString != null)
          idxFound = htmlString.indexOf(strFoundPart);

        //----
        var bWasFound = false;
        if (idxFound >= 0)
          bWasFound = true;
        //-----
        if (! bWasFound)
        {
          context.setError(error);
          //context.setBoolResult(true);
          return callback(context);  
        }      
        var htmlNewString  = htmlString.replace(strFoundPart, strNewPart);
        
      //detailSrcExtraPath     = detailSrcExtraPath + "/";

        //--------------------
        var errorCopyTemplateLoader:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextCopyTemplateLoader:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackCopyTemplateLoader = function callbackCopyTemplateLoader(ctx6 : amGeneralContext.am_general.A_Context)
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
        contextCopyTemplateLoader.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.writeTextFile2( unzipStorageName,       unzipFolderJsName,  strFileToModified,  htmlNewString,
                                                          errorCopyTemplateLoader, contextCopyTemplateLoader, callbackCopyTemplateLoader);        

      }
      //==================================================
      contextTemplateLoader.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.readTextFile2(
                                                     unzipStorageName, unzipFolderJsName, strFileToModified,  //unzipFolderJsName
                                                     errorTemplateLoader, contextTemplateLoader, callbackTemplateLoader);    
    }


    //------------------------------------------------------------ //maa
    public applyCorrectiveJs_forOneHtmlTemplate_forVideoWithText(
                  aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                  aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                  aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                  playlistType: string, 
                  aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      if (aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName() != "353684_video-with-supporting-text-1.0.0.zip") 
      {
        context.setError(error);
        context.setBoolResult(false);
        return callback(context);      
      }
      //-------
      var self = this;
      //----
      var extraPath          =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
      extraPath              =  self.getFileNameWithoutExtension(extraPath);
      var unzipStorageName   =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage() ;
      var unzipFolderJsName  =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
      //----
      var correctiveStorageName   =  self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getStorage() ;
      var correctiveFolderJsName  =  self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getPath() ;
      //--------------------------
      //--------------------
      var errorCopyTemplateLoader:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCopyTemplateLoader:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCopyTemplateLoader = function callbackCopyTemplateLoader(ctx6 : amGeneralContext.am_general.A_Context)
      {
        var copyFilesWell = true;
        if (ctx6.isError())
        {
          copyFilesWell = false;
        } 
        //context.setBoolResult(moveFilesWell);
        //--------------------
        var errorChangeJsonParameterFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextChangeJsonParameterFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackChangeJsonParameterFile = function callbackChangeJsonParamerFile(ctx7 : amGeneralContext.am_general.A_Context)
        {
          //--------------------
          var errorCopyTemplateFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextCopyTemplateFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackCopyTemplateFile = function callbackCopyTemplateFile(ctx7 : amGeneralContext.am_general.A_Context)
          {
            var copyFilesWell2 = true;
            if (ctx7.isError())
            {
              copyFilesWell = false;
            }     
            context.setError(error);
            return callback(context);    
          }
          //=======================================================
          contextCopyTemplateFile.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.copyFile2( correctiveStorageName,  correctiveFolderJsName,  "template_353684_video-with-supporting-text-1.0.0.js", 
                                                       unzipStorageName,       unzipFolderJsName + "js/",       "template.js", 
                                                       errorCopyTemplateFile, contextCopyTemplateFile, callbackCopyTemplateFile);        
       
        }    
        //======================================================= //maa
        contextCopyTemplateLoader.setRemoteCallback(true);
        self.applyCorrectiveJs_forOneHtmlTemplate_forModifiedFile(
            aCrtHtmlTemplateFileTransfer, 
            aHtmlTemplateMainFilesTransferList, 
            aHtmlTemplateDetailFilesTransferList, 
            playlistType, 
            aPlaylistTransferFile, 
            aMediaFilesTransferFileBase,
            aHtmlTemplatesFilesTransferFileBase,
            errorChangeJsonParameterFile, contextChangeJsonParameterFile, callbackChangeJsonParameterFile);
      }  
      //=======================================================
      contextCopyTemplateLoader.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.copyFile2( correctiveStorageName,  correctiveFolderJsName,  "index_353684_video-with-supporting-text-1.0.0.html", 
                                                   unzipStorageName,       unzipFolderJsName,       "index.html", 
                                                   errorCopyTemplateLoader, contextCopyTemplateLoader, callbackCopyTemplateLoader);        
    }


    //------------------------------------------------------------
    // rss-renderer.js
    public applyCorrectiveJs_forOneHtmlTemplate_forJsFile(
                      strJSFileName : string,
                      aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                      aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                      aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                      playlistType: string, 
                      aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                      aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                      aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      //--------------------------
      /*
      {
        context.setError(error);
        context.setBoolResult(false);
        return callback(context);    
      }*/
      var self = this;
      //----
      var extraPath          =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
      extraPath              =  self.getFileNameWithoutExtension(extraPath);
      extraPath              =  extraPath + "/" + "js";
      var unzipStorageName   =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage() ;
      var unzipFolderJsName  =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
      //----
      var correctiveStorageName   =  self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getStorage() ;
      var correctiveFolderJsName  =  self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getPath() ;
      //--------------------------
      var errorExistsRouterJs:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextExistsRouterJs:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackExistsRouterJs = function callbackExistsRouterJs(ctx0:amGeneralContext.am_general.A_Context)
      {
        //==
        var bExistsFile = false;
        if (ctx0 != null)
          bExistsFile = ctx0.getBoolResult();
        if (! bExistsFile)
        {
          if (context != null)
          {
            //if (self._debug)
            //{                
              //document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: PLAYLIST NOT EXISTS : TRUE</p>";
            //}
            context.setError(error);
            return callback(context); 
          }          
          return ;
        }
        //if (self._debug)
        //{                
          //document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: PLAYLIST EXISTS : TRUE</p>";
        //}
        //--------------------
        var errorCopyTemplateLoader:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextCopyTemplateLoader:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackCopyTemplateLoader = function callbackCopyTemplateLoader(ctx6 : amGeneralContext.am_general.A_Context)
        {
          var copyFilesWell = true;
          if (ctx6.isError())
          {
            copyFilesWell = false;
          } 
          context.setError(error);
          return callback(context);                 
        }  
        //=======================================================
        contextCopyTemplateLoader.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.copyFile2( correctiveStorageName,  correctiveFolderJsName, strJSFileName, //"router.js", 
                                                     unzipStorageName,       unzipFolderJsName,      strJSFileName, //"router.js", 
                                                     errorCopyTemplateLoader, contextCopyTemplateLoader, callbackCopyTemplateLoader);        

      }
      //==================================================
      contextExistsRouterJs.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.fileExists2( unzipStorageName, unzipFolderJsName, strJSFileName, //"router.js", 
                                                     errorExistsRouterJs, contextExistsRouterJs, callbackExistsRouterJs);    

    }



    //------------------------------------------------------------
    public applyCorrectiveJs_forOneHtmlTemplate_forTemplateLoaderIfNeeded(
                      aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                      aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                      aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                      playlistType: string, 
                      aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                      aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                      aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      //----
      var extraPath          =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
      extraPath              =  self.getFileNameWithoutExtension(extraPath);
      extraPath              =  extraPath + "/" + "js";
      var unzipStorageName   =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage() ;
      var unzipFolderJsName  =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
      //----
      var correctiveStorageName   =  self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getStorage() ;
      var correctiveFolderJsName  =  self._aPlaybackGlobalConfig._aHtmlTemplatesCorrectiveJsFolder.getPath() ;
      //--------------------------
      var errorTemplateLoader:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextTemplateLoader:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackTemplateLoader = function callbackTemplateLoader(ctx4 : amGeneralContext.am_general.A_Context)
      {
        
        if (ctx4.isError())
        {
          if (context != null)
          {
            context.setBoolResult(false);
            context.setError(error);
            return callback(context);  
          }
        }
        //---
        var jsString = ctx4._result;
        //-
        var idxTizen = -1;
        if (jsString != null)
          idxTizen = jsString.indexOf("\"tizen\"");
        //----
        var bHasTizen = false;
        if (idxTizen >= 0)
          bHasTizen = true;
        //-----
        if (bHasTizen)
        {
          context.setBoolResult(bHasTizen)
          context.setError(error);
          //context.setBoolResult(true);
          return callback(context);  
        }      
        //--------------------
        var errorCopyTemplateLoader:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextCopyTemplateLoader:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackCopyTemplateLoader = function callbackCopyTemplateLoader(ctx6 : amGeneralContext.am_general.A_Context)
        {
          var copyFilesWell = true;
          if (ctx6.isError())
          {
            copyFilesWell = false;
          } 
          //context.setBoolResult(moveFilesWell);
          context.setError(error);
          return callback(context);                 
        }  
        //=======================================================
        contextCopyTemplateLoader.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.copyFile2( correctiveStorageName,  correctiveFolderJsName, "template-loader.js", 
                                                     unzipStorageName,       unzipFolderJsName,      "template-loader.js", 
                                                     errorCopyTemplateLoader, contextCopyTemplateLoader, callbackCopyTemplateLoader);        

      }
      //==================================================
      contextTemplateLoader.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.readTextFile2(
                                                     unzipStorageName, unzipFolderJsName, "template-loader.js", 
                                                     errorTemplateLoader, contextTemplateLoader, callbackTemplateLoader);    

    }


    //------------------------------------------------------------
    public applyCorrectiveJs_forOneHtmlTemplate(
                                                  aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                                                  aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                                                  aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                                                  playlistType: string, 
                                                  aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                                  aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                                  aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      //-------------------------- not the main htmltemplate file - nothing to do 
      if (aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmltemplate")
      {
        context.setError(error);
        context.setBoolResult(false);
        return callback(context);    
      }
      //-------------------------------------
      var errorApplyCorrectiveJsTemplateLoader:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextApplyCorrectiveJsTemplateLoader:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
      var callbackApplyCorrectiveJsTemplateLoader = function callbackApplyCorrectiveJs(ctxApplyCorrectiveJsTemplateLoader)
      {
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate__forTemplateLoaderIfNeeded - Ok`, null, null, null);
        if (self._debug)
        {        
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate__forTemplateLoaderIfNeeded - Ok</p>";
        }  
        //-------------------------------------
        var errorApplyCorrectiveJsRouterJs:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextApplyCorrectiveJsRouterJs:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
        var callbackApplyCorrectiveJsRouterJs = function callbackApplyJsRouterJs(ctxApplyCorrectiveJsRouterJs)
        {
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile: router.js - Ok`, null, null, null);
          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile: router.js - Ok</p>";
          }  
          //-------------------------------------
          var errorApplyCorrectiveJsIndexHtmlAppVersion:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextApplyCorrectiveJsIndexHtmlAppVersion:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
          var callbackApplyCorrectiveJsIndexHtmlAppVersion = function callbackApplyCorrectiveJsIndexHtmlAppVersion(ctxApplyCorrectiveIndexHtmlAppVersion)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion - Ok`, null, null, null);
            if (self._debug)
            {        
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion - Ok</p>";
            }    
            //-------------------------------------
            var errorApplyCorrectiveRssRendererJs:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextApplyCorrectiveRssRendererJs:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
            var callbackApplyCorrectiveRssRendererJs = function callbackApplyCorrectiveRssRendererJs(ctxApplyCorrectiveRssRendererJs)
            {
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : rss-renderer.js - OK`, null, null, null);
              if (self._debug)
              {        
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : rss-renderer.js - OK</p>";
              }  
              //-------------------------------------
              var errorApplyCorrectiveNewsRendererJs:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
              var contextApplyCorrectiveNewsRendererJs:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
              var callbackApplyCorrectiveNewsRendererJs = function callbackApplyCorrectiveNewsRendererJs(ctxApplyCorrectiveNewsRendererJs)
              {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-renderer.js - OK`, null, null, null);

                if (self._debug)
                {        
                  document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-renderer.js - OK</p>";

                }        
                //-------------------------------------
                var errorApplyCorrectiveNewsApiWraperJs:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
                var contextApplyCorrectiveNewsApiWraperJs:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
                var callbackApplyCorrectiveNewsApiWraperJs = function callbackApplyCorrectiveNewsRendererJs(ctxApplyCorrectiveNewsApiWraperJs)
                {
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-api-wrapper.js - OK`, null, null, null);

                  if (self._debug)
                  {        
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-api-wrapper.js - OK</p>";

                  }  
                  //-------------------------------------
                  var errorApplyCorrectiveforVideoWithText:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
                  var contextApplyCorrectiveforVideoWithText:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
                  var callbackApplyCorrectiveforVideoWithText = function callbackforVideoWithText(ctxApplyCorrectiveNewsApiWraperJs)
                  {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forVideoWithText - is applicable - Ok`, null, null, null);

                    if (self._debug)
                    {        
                      document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forVideoWithText - is applicable - Ok</p>";

                    }    
                    //------------------ end - Ok //maa
                    if (context != null)
                    {
                      context.setError(error);
                      context.setBoolResult(true);
                      return callback(context);  
                    }
                    return;
                  }
                  //=====================================================================
                  // applyCorrectiveJs_forOneHtmlTemplate_forVideoWithText 
                  //=======================================================================
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forVideoWithText - is applicable...`, null, null, null);

                  if (self._debug)
                  {        
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forVideoWithText - is applicable...</p>";

                  }
                  contextApplyCorrectiveforVideoWithText.setRemoteCallback(true); 
                  self.applyCorrectiveJs_forOneHtmlTemplate_forVideoWithText(
                                                aCrtHtmlTemplateFileTransfer, 
                                                aHtmlTemplateMainFilesTransferList, 
                                                aHtmlTemplateDetailFilesTransferList, 
                                                playlistType, 
                                                aPlaylistTransferFile,
                                                aMediaFilesTransferFileBase,
                                                aHtmlTemplatesFilesTransferFileBase,
                                                errorApplyCorrectiveforVideoWithText, contextApplyCorrectiveforVideoWithText, callbackApplyCorrectiveforVideoWithText);  
                }
                //=====================================================================
                // applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-api-wrapper.js
                //=======================================================================
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-api-wrapper.js`, null, null, null);

                if (self._debug)
                {        
                  document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-api-wrapper.js</p>";

                }
                contextApplyCorrectiveJsRouterJs.setRemoteCallback(true); 
                self.applyCorrectiveJs_forOneHtmlTemplate_forJsFile( 
                                  "news-api-wrapper.js",
                                  aCrtHtmlTemplateFileTransfer, 
                                  aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                  playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                  errorApplyCorrectiveNewsApiWraperJs, contextApplyCorrectiveNewsApiWraperJs, callbackApplyCorrectiveNewsApiWraperJs);

              }
              //==================================================================
              // applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-renderer.js
              //==================================================================
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-renderer.js`, null, null, null);

              if (self._debug)
              {        
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : news-renderer.js</p>";

              }
              contextApplyCorrectiveJsRouterJs.setRemoteCallback(true); 
              self.applyCorrectiveJs_forOneHtmlTemplate_forJsFile( 
                                  "news-renderer.js",
                                  aCrtHtmlTemplateFileTransfer, 
                                  aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                  playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                  errorApplyCorrectiveNewsRendererJs, contextApplyCorrectiveNewsRendererJs, callbackApplyCorrectiveNewsRendererJs);
            }
            //==================================================================
            // applyCorrectiveJs_forOneHtmlTemplate_forJsFile : rss-renderer.js
            //==================================================================
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : rss-renderer.js`, null, null, null);

            if (self._debug)
            {        
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : rss-renderer.js</p>";

            }
            contextApplyCorrectiveJsRouterJs.setRemoteCallback(true); 
            self.applyCorrectiveJs_forOneHtmlTemplate_forJsFile( 
                                  "rss-renderer.js",
                                  aCrtHtmlTemplateFileTransfer, 
                                  aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                  playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                  errorApplyCorrectiveRssRendererJs, contextApplyCorrectiveRssRendererJs, callbackApplyCorrectiveRssRendererJs);
          }
          //================================================================
          // applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion
          //================================================================
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion`, null, null, null);

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion</p>";

          }
          contextApplyCorrectiveJsIndexHtmlAppVersion.setRemoteCallback(true); 
          self.applyCorrectiveJs_forOneHtmlTemplate_forIndexHtmlAppVersion( 
                                    aCrtHtmlTemplateFileTransfer, 
                                    aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                    playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                    errorApplyCorrectiveJsIndexHtmlAppVersion, contextApplyCorrectiveJsIndexHtmlAppVersion, callbackApplyCorrectiveJsIndexHtmlAppVersion);
        }
        //================================================================
        // applyCorrectiveJs_forOneHtmlTemplate_forJsFile : router.js
        //================================================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : router.js`, null, null, null);

        if (self._debug)
        {        
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forJsFile : router.js</p>";

        }
        contextApplyCorrectiveJsRouterJs.setRemoteCallback(true); 
        self.applyCorrectiveJs_forOneHtmlTemplate_forJsFile( 
                                  "router.js",
                                  aCrtHtmlTemplateFileTransfer, 
                                  aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                  playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                  errorApplyCorrectiveJsRouterJs, contextApplyCorrectiveJsRouterJs, callbackApplyCorrectiveJsRouterJs);
      }
      //================================================================
      // applyCorrectiveJs_forOneHtmlTemplate_forTemplateLoaderIfNeeded
      //================================================================
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forTemplateLoaderIfNeeded`, null, null, null);

      if (self._debug)
      {        
        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate_forTemplateLoaderIfNeeded</p>";

      }
      contextApplyCorrectiveJsTemplateLoader.setRemoteCallback(true); 
      self.applyCorrectiveJs_forOneHtmlTemplate_forTemplateLoaderIfNeeded( 
                                  aCrtHtmlTemplateFileTransfer, 
                                  aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                  playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                  errorApplyCorrectiveJsTemplateLoader, contextApplyCorrectiveJsTemplateLoader, callbackApplyCorrectiveJsTemplateLoader);
    }


    //--------------------------------------------
    //  instance data file 
    //  source URL: https://harmony.moodmedia.com/v6/htmlInstanceFile/${ID}?player=true&serial=${PLAYER_SERIAL}
    //  This file has no SHA-256 associated on the server side so the player will have to download it in memory every time, 
    //   calculate the SHA-256 in memory, and only write to disk if the SHA-256 is different from what is stored on the disk.
    //  The file needs to be stored in the media directory and will be named as: ${ContentPlayerFileName}_without_file_extension + "_" + ${ID} + ".json"
    //-------------------------------------------
    public addHtmlTemplate_HtmlInstanceDataFile( 
             htmlTemplatesDetailsFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
             aPlaylistFileTransfer        : amGeneralFileTransfer.am_general.AE_FileTransfer, 
             aMediaFilesFolderTransfer          : amGeneralFileTransfer.am_general.AE_FileTransfer, 
             aHtmlTemplatesFilesFolderTransfer  : amGeneralFileTransfer.am_general.AE_FileTransfer, 
             aCrtHtmlTemplateFileTransfer       : amGeneralFileTransfer.am_general.AE_FileTransfer,  
             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number
    {
      var self = this;

      var mediaId         : number;
      var contentFileId         : number;
      var contentFileName       : string;
      var shaFileValue          : string;
      var contentPlayerFileName : string;
      var contentPlayerFileNameWithoutFileExtension : string;
      var serialNumber : string;
      var srcFileType : string;
      var strInstanceDataFilePath : string;
      var self = this;
      if (htmlTemplatesDetailsFilesList.has(contentFileId))
        return 1;

      var newHtmlTemplateDetailsFileTransfer : amGeneralFileTransfer.am_general.AE_FileTransfer = self._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
      newHtmlTemplateDetailsFileTransfer.injectDependencies(null, self._aServiceLocator,null,null);

      //--- set the file transfers infos
      // https://harmony.moodmedia.com/v6/htmlInstanceFile/${ID}?player=true&serial=${PLAYER_SERIAL}
      // ${ContentPlayerFileName}_without_file_extension + "_" + ${ID} + ".json"
      // This file has no SHA-256 associated on the server side
      // parts - not done by parts due to the poor performances
      //----
      srcFileType           = "json";
      serialNumber          = self._aPlaybackGlobalConfig._strSerialNumber;
      mediaId               = aCrtHtmlTemplateFileTransfer.getMediaId();
      contentFileId         = aCrtHtmlTemplateFileTransfer.getSrcFileId();
      shaFileValue          = aCrtHtmlTemplateFileTransfer.getSrcShaFileValue();

      contentFileName         = "";
      
      contentPlayerFileNameWithoutFileExtension = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName(); // = ContentPlayerFileName
      contentPlayerFileNameWithoutFileExtension = self.getFileNameWithoutExtension(contentPlayerFileNameWithoutFileExtension);
      contentPlayerFileName = contentPlayerFileNameWithoutFileExtension +
                              self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name1 +  //"_",
                              mediaId + //contentFileId + 
                              self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name2 ;  //".json",

      //---
      newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setStorage(self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder3.getStorage());
      newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setPath( 
                                                    self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder3.getPath() + //"/v6/htmlInstanceFile/"
                                                    mediaId + //contentFileId + 
                                                    self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder4.getPath() + //"?player=true" + 
                                                    self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder5.getPath() + //"&serial=" + 
                                                    serialNumber
                                                   );
      newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setName( contentFileName);
      newHtmlTemplateDetailsFileTransfer.setSrcShaFileValue(shaFileValue);
      newHtmlTemplateDetailsFileTransfer.setSrcFileType(srcFileType);
      newHtmlTemplateDetailsFileTransfer.setSrcFileId(contentFileId);
      newHtmlTemplateDetailsFileTransfer.setSrcShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getSrcFileInfo()));

      //--- set the temporary file infos
      newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setStorage( aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getStorage());
      newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setPath( aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getPath());
      newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setName( contentPlayerFileName);
      newHtmlTemplateDetailsFileTransfer.setTmpShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));
      newHtmlTemplateDetailsFileTransfer.setComputedShaFileInfo(self.createComputedShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));

      //--- set the destination file infos
      newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setStorage( aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage());
      newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setPath( aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath());
      newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setName( contentPlayerFileName);
      newHtmlTemplateDetailsFileTransfer.setDstShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getDstFileInfo()));

      //-- add the new transfer in htmlTemplatesDetailsFilesList list
      //htmlTemplatesDetailsFilesList.set(contentFileId, newHtmlTemplateDetailsFileTransfer);

      self._htmlTemplateInstanceDataFile = newHtmlTemplateDetailsFileTransfer;
      
      return 0;

    }

    //-------------------------------------------
    //  HTML feed files will be downloaded into media directory under a directory named ${ContentFileID}
    //  The first file that needs to be downloaded is the list of files.
    //  https://harmony.moodmedia.com/v5/medias/${ContentFileID}/files.json
    //  This file will contain all other feed files that need to be downloaded.
    /// The file looks like this:
    //{
    //   "FilePath": "\\0A0271B966006650B30F14C894B937592E952793D252305F23F0E2850CB5F106.jpg",
    //   "ShaCode": "0A0271B966006650B30F14C894B937592E952793D252305F23F0E2850CB5F106"
    //},
    //--------------------------------------------
    public addHtmlTemplate_HtmlFeedDataFile( 
             htmlTemplatesDetailsFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
             aPlaylistFileTransfer        : amGeneralFileTransfer.am_general.AE_FileTransfer, 
             aMediaFilesFolderTransfer          : amGeneralFileTransfer.am_general.AE_FileTransfer, 
             aHtmlTemplatesFilesFolderTransfer  : amGeneralFileTransfer.am_general.AE_FileTransfer, 
             aCrtHtmlTemplateFileTransfer       : amGeneralFileTransfer.am_general.AE_FileTransfer,  
             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number
    {
      var self = this;

      var contentFileId         : number;
      var contentFileName       : string;
      var shaFileValue          : string;
      var contentPlayerFileName : string;
      var contentPlayerFileNameWithoutFileExtension : string;
      var serialNumber : string;
      var srcFileType : string;
      var strInstanceDataFilePath : string;
      var self = this;
      if (htmlTemplatesDetailsFilesList.has(contentFileId))
        return 1;

      var newHtmlTemplateDetailsFileTransfer : amGeneralFileTransfer.am_general.AE_FileTransfer = self._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
      newHtmlTemplateDetailsFileTransfer.injectDependencies(null, self._aServiceLocator,null,null);

      //--- set the file transfers infos
      // https://harmony.moodmedia.com/v5/medias/${ContentFileID}/files.json
      // ${ContentFileID} / files.json
      // This file has no SHA-256 associated on the server side
      // parts - not done by parts due to the poor performances
      //----
      srcFileType           = "json";
      serialNumber          = self._aPlaybackGlobalConfig._strSerialNumber;
      contentFileId         = aCrtHtmlTemplateFileTransfer.getSrcFileId();
      shaFileValue          = aCrtHtmlTemplateFileTransfer.getSrcShaFileValue();

      contentFileName         = self._aPlaybackGlobalConfig._html_templates_local_html_feed_file_name;
      
      contentPlayerFileNameWithoutFileExtension = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName(); // = ContentPlayerFileName
      contentPlayerFileNameWithoutFileExtension = self.getFileNameWithoutExtension(contentPlayerFileNameWithoutFileExtension);
      contentPlayerFileName = contentPlayerFileNameWithoutFileExtension +
                              self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name1 +  //"_",
                              contentFileId +
                              self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name2 ;  //".json",

      var extraPath =  contentFileId + "/";
      //---
      // https://harmony.moodmedia.com/v5/medias/${ContentFileID}/files.json
      newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setStorage(self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder3.getStorage()); //https://harmony.moodmedia.com
      newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setPath( 
                                                    self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder.getPath() + // /v5/medias/
                                                    contentFileId +  //${ContentFileID}
                                                    "/"
                                                   );
      newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setName(self._aPlaybackGlobalConfig._html_templates_remote_html_feed_file_name);
      newHtmlTemplateDetailsFileTransfer.setSrcShaFileValue(shaFileValue);
      newHtmlTemplateDetailsFileTransfer.setSrcFileType(srcFileType);
      newHtmlTemplateDetailsFileTransfer.setSrcFileId(contentFileId);
      newHtmlTemplateDetailsFileTransfer.setSrcShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getSrcFileInfo()));

      //--- set the temporary file infos
      newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setStorage( aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getStorage());
      newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setPath( aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getPath() + extraPath);
      newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setName( self._aPlaybackGlobalConfig._html_templates_local_temporary_html_feed_file_name);
      newHtmlTemplateDetailsFileTransfer.setTmpShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));
      newHtmlTemplateDetailsFileTransfer.setComputedShaFileInfo(self.createComputedShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));

      //--- set the destination file infos
      newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setStorage( aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage());
      newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setPath(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath);
      newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setName(self._aPlaybackGlobalConfig._html_templates_local_html_feed_file_name);
      newHtmlTemplateDetailsFileTransfer.setDstShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getDstFileInfo()));

      //-- add the new transfer in htmlTemplatesDetailsFilesList list
      //htmlTemplatesDetailsFilesList.set(contentFileId, newHtmlTemplateDetailsFileTransfer);

      self._htmlTemplateFeedDataFile    = newHtmlTemplateDetailsFileTransfer;

      return 0;

    }


    //-----------------------------
    public getFileNameWithoutExtension(strFileName : string)
    {
      var extraPath =  strFileName;
      if (extraPath.length >= 5)
      {
        extraPath = extraPath.substring(0,extraPath.length - 4);
      }
      return extraPath;
    }          

    //-----------------------------
    public getOnlyFileName(strFileName : string)
    {
      var onlyFileName =  strFileName;
      var idx = strFileName.lastIndexOf('\\');
      if (idx != -1)
      {
        onlyFileName = onlyFileName.substring(idx+1);
      }
      return onlyFileName;
    }

    //-----------------------------
    public getOnlyPath(strFileName : string)
    {
      var onlyPath =  strFileName;
      var idx = strFileName.lastIndexOf('\\');
      if (idx != -1)
      {
        onlyPath = onlyPath.substring(0,idx);
      }
      return onlyPath;
    }

    //--------------------------------------------
    // HTML feed files will be downloaded into media directory under a directory named ${ContentFileID}
    // The first file that needs to be downloaded is the list of files.
    // https://harmony.moodmedia.com/v5/medias/${ContentFileID}/files.json
    // This file will contain all other feed files that need to be downloaded.
    // The file looks like this:
    //   {
    //       "FilePath": "\\0A0271B966006650B30F14C894B937592E952793D252305F23F0E2850CB5F106.jpg",
    //       "ShaCode": "0A0271B966006650B30F14C894B937592E952793D252305F23F0E2850CB5F106"
    //   },
    //   {
    //      "FilePath": "\\70184A6684D03AB9BD293884CD21F7C8EC3F939211E0DCED0C3A5E1E262B45C2.png",
    //      "ShaCode": "70184A6684D03AB9BD293884CD21F7C8EC3F939211E0DCED0C3A5E1E262B45C2"
    //   },
    //   {
    //      "FilePath": "\\audio\\EAEAE989396B5CC074DD7711DBC1811F476CD4D197692D831D4F304D814DA3EF.mp3",
    //      "ShaCode": "EAEAE989396B5CC074DD7711DBC1811F476CD4D197692D831D4F304D814DA3EF"
    //   }
    // All files should be downloaded inside the ${ContentFileID} directory under the relative path specified in the FilePath field.    
    //-------------------------------------------
    public addHtmlTemplate_MediaFile( 
             aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
             jsonObject : any, 
             htmlTemplatesDetailsFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
             aPlaylistFileTransfer        : amGeneralFileTransfer.am_general.AE_FileTransfer, 
             aMediaFilesFolderTransfer    : amGeneralFileTransfer.am_general.AE_FileTransfer, 
             aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number
    {
      var self = this;

      var contentFileId         : number;
      var contentFileName       : string;
      var shaFileValue          : string;
      var contentPlayerFileName : string;
      var contentPlayerFileNameWithoutFileExtension : string;
      var serialNumber : string;
      var srcFileType : string;
      var strInstanceDataFilePath : string;
      var self = this;
      //if (htmlTemplatesDetailsFilesList.has(contentFileId))
        //return 1;

      var newHtmlTemplateDetailsFileTransfer : amGeneralFileTransfer.am_general.AE_FileTransfer = self._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
      newHtmlTemplateDetailsFileTransfer.injectDependencies(null, self._aServiceLocator,null,null);

      //--- set the file transfers infos
      // https://harmony.moodmedia.com/v5/medias/${ContentFileID}/files.json
      // ${ContentFileID} / files.json
      // This file has no SHA-256 associated on the server side
      // parts - not done by parts due to the poor performances
      //----
      srcFileType           = "bin";
      serialNumber          = self._aPlaybackGlobalConfig._strSerialNumber;
      contentFileId         = aCrtHtmlTemplateFileTransfer.getSrcFileId();
      shaFileValue          = jsonObject.ShaCode;//aCrtHtmlTemplateFileTransfer.getSrcShaFileValue();

      var strKey = jsonObject.FilePath;
      //contentFileName         = self._aPlaybackGlobalConfig._html_templates_local_html_feed_file_name;
      
      //contentPlayerFileNameWithoutFileExtension = aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName(); // = ContentPlayerFileName
      //contentPlayerFileNameWithoutFileExtension = self.getFileNameWithoutExtension(contentPlayerFileNameWithoutFileExtension);
      //contentPlayerFileName = contentPlayerFileNameWithoutFileExtension +
      //                        self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name1 +  //"_",
      //                        contentFileId +
      //                        self._aPlaybackGlobalConfig._html_templates_local_html_instance_data_file_partial_name2 ;  //".json",

      var extraPath =  contentFileId ;//+ "/";

      var relativePath       = jsonObject.FilePath;

      //var detailSrcExtraPath = relativePath;
      //detailSrcExtraPath     = detailSrcExtraPath.replace(/\\/g, "/");
      //detailSrcExtraPath     = detailSrcExtraPath + "/";

      var detailExtraPath    = self.getOnlyPath(relativePath);
      detailExtraPath        = detailExtraPath.replace(/\\/g, "/");
      detailExtraPath        = detailExtraPath + "/";

      var detailFileNameOnly = self.getOnlyFileName(relativePath); 
      //---
      // https://harmony.moodmedia.com/v5/medias/${ContentFileID}/files.json
      newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setStorage(self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder3.getStorage()); //https://harmony.moodmedia.com
      newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setPath( 
                                                    self._aPlaybackGlobalConfig._aHtmlTemplatesFilesRemoteBaseFolder.getPath() + // /v5/medias/
                                                    contentFileId + detailExtraPath  //${ContentFileID} + / relative-Path / detail_file_name
                                                   );
      newHtmlTemplateDetailsFileTransfer.getSrcFileInfo().setName(detailFileNameOnly);
      newHtmlTemplateDetailsFileTransfer.setSrcShaFileValue(shaFileValue);
      newHtmlTemplateDetailsFileTransfer.setSrcFileType(srcFileType);
      newHtmlTemplateDetailsFileTransfer.setSrcFileId(contentFileId);
      newHtmlTemplateDetailsFileTransfer.setSrcShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getSrcFileInfo()));

      //--- set the temporary file infos
      newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setStorage( aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getStorage());
      newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setPath( aCrtHtmlTemplateFileTransfer.getTmpFileInfo().getPath() + extraPath + detailExtraPath);
      newHtmlTemplateDetailsFileTransfer.getTmpFileInfo().setName(detailFileNameOnly);
      newHtmlTemplateDetailsFileTransfer.setTmpShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));
      newHtmlTemplateDetailsFileTransfer.setComputedShaFileInfo(self.createComputedShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getTmpFileInfo()));

      //--- set the destination file infos
      newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setStorage(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage());
      newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setPath( aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + detailExtraPath);
      newHtmlTemplateDetailsFileTransfer.getDstFileInfo().setName(detailFileNameOnly);
      newHtmlTemplateDetailsFileTransfer.setDstShaFileInfo(self.createShaFileInfoFromFileInfo(newHtmlTemplateDetailsFileTransfer.getDstFileInfo()));

      //-- add the new transfer in htmlTemplatesDetailsFilesList list
      //htmlTemplatesDetailsFilesList.set(contentFileId, newHtmlTemplateDetailsFileTransfer);
      newHtmlTemplateDetailsFileTransfer.setIgnoreErrors(true) ; //ma
      newHtmlTemplateDetailsFileTransfer.setCheckSha(false);
      self._htmlTemplateDetailsTransferList.set(strKey, newHtmlTemplateDetailsFileTransfer);
      return 0;
    }

    //HTML feed files will be downloaded into media directory under a directory named ${ContentFileID}
    //The first file that needs to be downloaded is the list of files.
    //https://harmony.moodmedia.com/v5/medias/${ContentFileID}/files.json


    //------------------------------------------------------------
    public downloadHtmlTemplateDetailFiles_forOneHtmlTemplate(
                aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                playlistType: string, 
                aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      //-------------------------- not an html feed  - nothing to do 
      if (aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmlfeed")
      {
        context.setError(error);
        context.setBoolResult(false);
        return callback(context);    
      }
      var errorDownloadDetailFiles:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextDownloadDetailFiles:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackDownloadDetailFiles = function callbackReadFeedFile(DownloadDetailFiles : amGeneralContext.am_general.A_Context)
      {
          //------------------ end - Ok
          if (context != null)
          {
            context.setError(error);
            context.setBoolResult(true);
            return callback(context);  
          }
      }
      var bIgnoreErrors = true;
      self._aDownloadService._iDownloadMain.downloadFiles_fromMap(
                                                     self._htmlTemplateDetailsTransferList, 
                                                     bIgnoreErrors,
                                                     errorDownloadDetailFiles, contextDownloadDetailFiles, callbackDownloadDetailFiles);
    }

    //------------------------------------------------------------
    public buildHtmlTemplateDetailFiles_forOneHtmlTemplate(
                aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                playlistType: string, 
                aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      //-------------------------- not an html feed  - nothing to do 
      if (aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmlfeed")
      {
        context.setError(error);
        context.setBoolResult(false);
        return callback(context);    
      }
      var errorReadFeedFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextReadFeedFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackReadFeedFile = function callbackReadFeedFile(ctxReadFeedFile : amGeneralContext.am_general.A_Context)
      {
        //---------- if -- error during unzip html template file -- stop on error
        if (ctxReadFeedFile.isError())
        {
          if (context != null)
          {
            error.setError(503,"ERROR 505: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + ctxReadFeedFile._error + "]");
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),`505: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: ["${ctxReadFeedFile._error}"]`, null, null, null);
            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "WARNING 699: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles - cannot read feed main file: [" + ctxReadFeedFile._error + "]";
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles - cannot read feed main file: [" ${ctxReadFeedFile._error} "]`, null, null, null);                                                                                   
            }    
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);  
          }
          return;  
        }
        //--------------------------- start parse file 
        var jsonString = ctxReadFeedFile._result;
        var jsonObject : any = null;    
        try
        {
          jsonObject = JSON.parse(jsonString);
          for (var j = 0; j < jsonObject.length; j++) 
          { 
            self.addHtmlTemplate_MediaFile( aCrtHtmlTemplateFileTransfer,
                                            jsonObject[j], 
                                            aHtmlTemplateDetailFilesTransferList, 
                                            aPlaylistTransferFile, 
                                            aMediaFilesTransferFileBase, 
                                            aHtmlTemplatesFilesTransferFileBase,  
                                            error, context, callback) ;
          }
          //----------------
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: readAndParseFeedFile...Ok`, null, null, null);                                                                                   

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: readAndParseFeedFile...Ok</p>";
          }
          //------------------ end - Ok
          if (context != null)
          {
            context.setError(error);
            context.setBoolResult(true);
            return callback(context);  
          }
        //---------------------------------- error  
        }catch(e){
          if (context != null)
          {
            error.setError(507,"ERROR 507: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + e.message + "]");
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),`507: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: ["${e.message}"]`, null, null, null);                                                                              

            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "ERROR 507: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + e.message.getErrMsg() + "]";
            }    
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);  
          }
        }
      }
      //==================================================
      //document.getElementById("rend.message").innerHTML += "<p>read server sha file"</p>";
      //----------------
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: readAndParseFeedFile...`, null, null, null);                                                                                   

      if (self._debug)
      {        
        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: readAndParseFeedFile...</p>";
      }
      contextReadFeedFile.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.readTextFile2( self._htmlTemplateFeedDataFile.getDstFileInfo().getStorage(),
                                                       self._htmlTemplateFeedDataFile.getDstFileInfo().getPath(),
                                                       self._htmlTemplateFeedDataFile.getDstFileInfo().getName(),
                                                       errorReadFeedFile, contextReadFeedFile, callbackReadFeedFile);    
    }

    //------------------------------------------------------------
    public buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate_Feed(
                aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                playlistType: string, 
                aPlaylistFileTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
    
      self.addHtmlTemplate_HtmlFeedDataFile(  aHtmlTemplateMainFilesTransferList, 
                                            aPlaylistFileTransferFile, 
                                            aMediaFilesTransferFileBase, 
                                            aHtmlTemplatesFilesTransferFileBase, 
                                            aCrtHtmlTemplateFileTransfer,  
                                            error, context, callback) ;

                                            var errorCreateDstFilesFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateDstFilesFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateDstFilesFolder = function callbackCreateDeleteMediaFilesTmpFolder(ctxDstFilesFolder : amGeneralContext.am_general.A_Context)
      {
          //-----------------------
          var errorDownloadFeedFile:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownloadFeedFile:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackDownloadFeedFile = function callbackDownloadFeedFile(cxtDownloadFeedFile)
          {
            //---------- if -- error during unzip html template file -- stop on error
            if (cxtDownloadFeedFile.isError())
            {
              if (context != null)
              {
                error.setError(510,"ERROR 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" + errorDownloadFeedFile + "]");
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),`810: downloadPlaylistAndMediaFiles: downloadInstanceFile: ["${errorDownloadFeedFile}"]`, null, null, null);                                                                                

                if (self._debug)
                {    
                  document.getElementById("rend.message").innerHTML += "WARNING 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" + errorDownloadFeedFile + "]";
                }    
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);  
              }
              return;  
            }
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: downloadFeedFile:...Ok`, null, null, null);                                                                                   

            if (self._debug)
            {        
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadFeedFile:...Ok</p>";
            }

            //-----------------------
            var errorDownloadFeedShaFile:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextDownloadFeedShaFile:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackDownloadFeedShaFile = function callbackDownloadFeedShaFile(cxtDownloadFeedFile)
            {
              //------------------ end - Ok
              if (context != null)
              {
                context.setError(error);
                context.setBoolResult(true);
                return callback(context);  
              }
            }
            //==================================================
            //   download feed sha file
            //==================================================
            contextDownloadFeedShaFile.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.downloadFile2( self._htmlTemplateFeedDataFile.getSrcShaFileInfo().getFullName(), 
                                                          self._htmlTemplateFeedDataFile.getDstShaFileInfo().getStorage(), 
                                                          self._htmlTemplateFeedDataFile.getDstShaFileInfo().getPath(), 
                                                          self._htmlTemplateFeedDataFile.getDstShaFileInfo().getName(), 
                                                          errorDownloadFeedShaFile, contextDownloadFeedShaFile, callbackDownloadFeedShaFile);    
            
          }
          //==================================================
          //   download feed file
          //==================================================
          //document.getElementById("rend.message").innerHTML += "<p>start download playlist"</p>";
          contextDownloadFeedFile.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.downloadFile2( self._htmlTemplateFeedDataFile.getSrcFileInfo().getFullName(), 
                                                          self._htmlTemplateFeedDataFile.getDstFileInfo().getStorage(), 
                                                          self._htmlTemplateFeedDataFile.getDstFileInfo().getPath(), 
                                                          self._htmlTemplateFeedDataFile.getDstFileInfo().getName(), 
                                                          errorDownloadFeedFile, contextDownloadFeedFile, callbackDownloadFeedFile);    
        }
        //==========================================
        contextCreateDstFilesFolder.setRemoteCallback(true);
        //document.getElementById("renderer.message").innerHTML += "<p>start create dst file folder"</p>";
        self._aSDKService._iSDKFileSystem.createFolder2( self._htmlTemplateFeedDataFile.getDstFileInfo().getStorage(), 
                                                      self._htmlTemplateFeedDataFile.getDstFileInfo().getPath(),
                                                      errorCreateDstFilesFolder, contextCreateDstFilesFolder, callbackCreateDstFilesFolder) ; 
    }


    //------------------------------------------------------------
    public createFolders_forOneHtmlTemplate_Feed(
                aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                playlistType: string, 
                aPlaylistFileTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
    
      var errorCreateDstFilesFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateDstFilesFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateDstFilesFolder = function callbackCreateDstFilesFolder(ctxDstFilesFolder : amGeneralContext.am_general.A_Context)
      {
          //-----------------------
          var errorCreateTmpFilesFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextCreateTmpFilesFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackCreateTmpFilesFolder = function callbackCreateTmpFilesFolder(ctxTmpFilesFolder : amGeneralContext.am_general.A_Context)
          {

            //------------------ end - Ok
            if (context != null)
            {
              context.setError(error);
              context.setBoolResult(true);
              return callback(context);  
            }
          }
          //==================================================
          contextCreateTmpFilesFolder.setRemoteCallback(true);
          //document.getElementById("renderer.message").innerHTML += "<p>start create dst file folder"</p>";
          self._aSDKService._iSDKFileSystem.createFolder2( self._htmlTemplateFeedDataFile.getTmpFileInfo().getStorage(), 
                                                           self._htmlTemplateFeedDataFile.getTmpFileInfo().getPath(),
                                                           errorCreateTmpFilesFolder, contextCreateTmpFilesFolder, callbackCreateTmpFilesFolder) ; 
          }
        //==========================================
        contextCreateDstFilesFolder.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.createFolder2( self._htmlTemplateFeedDataFile.getDstFileInfo().getStorage(), 
                                                         self._htmlTemplateFeedDataFile.getDstFileInfo().getPath(),
                                                        errorCreateDstFilesFolder, contextCreateDstFilesFolder, callbackCreateDstFilesFolder) ; 
    }

    //------------------------------------------------------------
    public buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate_Instance(
                aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                playlistType: string, 
                aPlaylistFileTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
    
      self.addHtmlTemplate_HtmlInstanceDataFile( aHtmlTemplateMainFilesTransferList, 
                                                 aPlaylistFileTransferFile, 
                                                 aMediaFilesTransferFileBase, 
                                                 aHtmlTemplatesFilesTransferFileBase, 
                                                 aCrtHtmlTemplateFileTransfer,  
                                                 error, context, callback) ;

        //-----------------------
        var errorDownloadInstanceFile:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextDownloadInstanceFile:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackDownloadInstanceFile = function callbackDownloadInstanceFile(cxtDownloadInstanceFile)
        {
            //---------- if -- error during unzip html template file -- stop on error
            if (cxtDownloadInstanceFile.isError())
            {
              if (context != null)
              {
                error.setError(510,"ERROR 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" + errorDownloadInstanceFile.getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),`810: downloadPlaylistAndMediaFiles: downloadInstanceFile: ["${errorDownloadInstanceFile.getErrMsg()}"]`, null, null, null);

                if (self._debug)
                {    
                  document.getElementById("rend.message").innerHTML += "ERROR 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" + errorDownloadInstanceFile.getErrMsg() + "]";
                }    
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);  
              }
              return;  
            }

          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: downloadInstanceFile:...Ok`, null, null, null);                                                                                   

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadInstanceFile:...Ok</p>";
          }
          if (context != null)
          {
            context.setError(error);
            context.setBoolResult(true);
            return callback(context);  
          }
        }
        //==================================================
        //   download instance file
        //==================================================
        //document.getElementById("rend.message").innerHTML += "<p>start download playlist"</p>";
        contextDownloadInstanceFile.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.downloadFile2( self._htmlTemplateInstanceDataFile.getSrcFileInfo().getFullName(), 
                                                        self._htmlTemplateInstanceDataFile.getDstFileInfo().getStorage(), 
                                                        self._htmlTemplateInstanceDataFile.getDstFileInfo().getPath(), 
                                                        self._htmlTemplateInstanceDataFile.getDstFileInfo().getName(), 
                                                        errorDownloadInstanceFile, contextDownloadInstanceFile, callbackDownloadInstanceFile);  
    }

    public buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate(
                aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                playlistType: string, 
                aPlaylistFileTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
    
      if (aCrtHtmlTemplateFileTransfer.getSrcFileType() == "htmlfeed")
      {
        return self.buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate_Feed(
                aCrtHtmlTemplateFileTransfer, 
                aHtmlTemplateMainFilesTransferList, 
                aHtmlTemplateDetailFilesTransferList, 
                playlistType, 
                aPlaylistFileTransferFile,
                aMediaFilesTransferFileBase,
                aHtmlTemplatesFilesTransferFileBase,
                error, context, callback) ;
      }
      if (aCrtHtmlTemplateFileTransfer.getSrcFileType() == "htmltemplate")
      {
        return self.buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate_Instance(
                aCrtHtmlTemplateFileTransfer, 
                aHtmlTemplateMainFilesTransferList, 
                aHtmlTemplateDetailFilesTransferList, 
                playlistType, 
                aPlaylistFileTransferFile,
                aMediaFilesTransferFileBase,
                aHtmlTemplatesFilesTransferFileBase,
                error, context, callback) ;
      }
      context.setError(error);
      context.setBoolResult(false);
      return callback(context);  
    } 
    //------------------------------------------------------------
    /*
    public buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate(
                aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                playlistType: string, 
                aPlaylistFileTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
    
      if (aCrtHtmlTemplateFileTransfer.getSrcFileType() == "htmlfeed")
      {
        self.addHtmlTemplate_HtmlFeedDataFile(  aHtmlTemplateMainFilesTransferList, 
                                              aPlaylistFileTransferFile, 
                                              aMediaFilesTransferFileBase, 
                                              aHtmlTemplatesFilesTransferFileBase, 
                                              aCrtHtmlTemplateFileTransfer,  
                                              error, context, callback) ;
      }
      if (aCrtHtmlTemplateFileTransfer.getSrcFileType() == "htmltemplate")
      {
       self.addHtmlTemplate_HtmlInstanceDataFile(  aHtmlTemplateMainFilesTransferList, 
                                              aPlaylistFileTransferFile, 
                                              aMediaFilesTransferFileBase, 
                                              aHtmlTemplatesFilesTransferFileBase, 
                                              aCrtHtmlTemplateFileTransfer,  
                                              error, context, callback) ;
       }
      var errorCreateDstFilesFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateDstFilesFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateDstFilesFolder = function callbackCreateDeleteMediaFilesTmpFolder(ctxDstFilesFolder : amGeneralContext.am_general.A_Context)
      {
        //-----------------------
        var errorDownloadInstanceFile:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextDownloadInstanceFile:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackDownloadInstanceFile = function callbackDownloadInstanceFile(cxtDownloadInstanceFile)
        {
            //---------- if -- error during unzip html template file -- stop on error
            if (cxtDownloadInstanceFile.isError())
            {
              if (context != null)
              {
                error.setError(510,"ERROR 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" + errorDownloadInstanceFile.getErrMsg() + "]");
                if (self._debug)
                {    
                  document.getElementById("rend.message").innerHTML += "ERROR 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" 
                                                                                                              + errorDownloadInstanceFile.getErrMsg() + "]";
                }    
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);  
              }
              return;  
            }

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadInstanceFile:...Ok</p>";
          }
          //-----------------------
          var errorDownloadFeedFile:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownloadFeedFile:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackDownloadFeedFile = function callbackDownloadFeedFile(cxtDownloadFeedFile)
          {
                      //---------- if -- error during unzip html template file -- stop on error
            if (cxtDownloadFeedFile.isError())
            {
              if (context != null)
              {
                error.setError(510,"ERROR 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" + errorDownloadFeedFile + "]");
                if (self._debug)
                {    
                  document.getElementById("rend.message").innerHTML += "ERROR 810: downloadPlaylistAndMediaFiles: downloadInstanceFile: [" 
                                                                                                              + errorDownloadFeedFile + "]";
                }    
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);  
              }
              return;  
            }
            if (self._debug)
            {        
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadFeedFile:...Ok</p>";
            }
            //------------------ end - Ok
            if (context != null)
            {
              context.setError(error);
              context.setBoolResult(true);
              return callback(context);  
            }
          }
          //==================================================
          //   download feed file
          //==================================================
          //document.getElementById("rend.message").innerHTML += "<p>start download playlist"</p>";
          contextDownloadFeedFile.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.downloadFile2( self._htmlTemplateFeedDataFile.getSrcFileInfo().getFullName(), 
                                                          self._htmlTemplateFeedDataFile.getDstFileInfo().getStorage(), 
                                                          self._htmlTemplateFeedDataFile.getDstFileInfo().getPath(), 
                                                          self._htmlTemplateFeedDataFile.getDstFileInfo().getName(), 
                                                          errorDownloadFeedFile, contextDownloadFeedFile, callbackDownloadFeedFile);    
        }
        //==================================================
        //   download instance file
        //==================================================
        //document.getElementById("rend.message").innerHTML += "<p>start download playlist"</p>";
        contextDownloadInstanceFile.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.downloadFile2( self._htmlTemplateInstanceDataFile.getSrcFileInfo().getFullName(), 
                                                        self._htmlTemplateInstanceDataFile.getDstFileInfo().getStorage(), 
                                                        self._htmlTemplateInstanceDataFile.getDstFileInfo().getPath(), 
                                                        self._htmlTemplateInstanceDataFile.getDstFileInfo().getName(), 
                                                        errorDownloadInstanceFile, contextDownloadInstanceFile, callbackDownloadInstanceFile);  
        //return self._aDownloadService._iDownloadMain.downloadFiles_fromMap(self._htmlTemplateMainTransferList, error, context, callback);   
        }                
        //==========================================

        contextCreateDstFilesFolder.setRemoteCallback(true);
        //document.getElementById("renderer.message").innerHTML += "<p>start create dst file folder"</p>";
        if (aCrtHtmlTemplateFileTransfer.getSrcFileType() == "htmlfeed")
        {
  
           self._aSDKService._iSDKFileSystem.createFolder2( self._htmlTemplateFeedDataFile.getDstFileInfo().getStorage(), 
                                                          self._htmlTemplateFeedDataFile.getDstFileInfo().getPath(),
                                                          errorCreateDstFilesFolder, contextCreateDstFilesFolder, callbackCreateDstFilesFolder) ; 
        }else{
          contextCreateDstFilesFolder.setError(errorCreateDstFilesFolder);
          callbackCreateDstFilesFolder(contextCreateDstFilesFolder);
        }

    }*/

    /*
    var errorDstFilesFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
    var contextDstFilesFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
    var callbackDstFilesFolder = function callbackDeleteMediaFilesTmpFolder(ctxDstFilesFolder : amGeneralContext.am_general.A_Context)
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
      //document.getElementById("renderer.message").innerHTML += "<p>start create dst file folder"</p>";
      self._aSDKService._iSDKFileSystem.createFolder2(aMediaFilesTmpFolder.getStorage(), aMediaFilesTmpFolder.getPath(), 
                                                      errorCreateMediaFilesTmpFolder, contextCreateMediaFilesTmpFolder, callbackCreateMediaFilesTmpFolder) ; 
*/

    //------------------------------------------------------------
    public unzipHtmlTemplateFile_forOneHtmlTemplate(
                aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                playlistType: string, 
                aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      //-------------------------- not the main htmltemplate file - nothing to do 
      if (aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmltemplate")
      {
        context.setError(error);
        context.setBoolResult(false);
        return callback(context);    
      }

      //-----------------------------
      var extraPath =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
      extraPath = self.getFileNameWithoutExtension(extraPath);
      /*
      if (extraPath.length >= 5)
      {
        extraPath = extraPath.substring(0,extraPath.length - 4);
      }*/
      var unzipFolderName =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
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
              error.setError(510,"ERROR 510: downloadPlaylistAndMediaFiles: unzipHtmlTemplate: [" + errorUnzipFile.getErrMsg() + "]");
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),`810: downloadPlaylistAndMediaFiles: unzipHtmlTemplate: ["${errorUnzipFile.getErrMsg()}"]`, null, null, null);

              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += "ERROR 504: downloadPlaylistAndMediaFiles: unzipHtmlTemplate: [" 
                                                                                                            + errorUnzipFile.getErrMsg() + "]";
              }    
              context.setError(error);
              context.setBoolResult(false);
              return callback(context);  
            }
            return;  
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: unzipHtmlTemplate:...Ok`, null, null, null);                                                                                   

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: unzipHtmlTemplate:...Ok</p>";
          }
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
                     aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage(),  //zipStorageName, 
                     aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath(),     //zipFolderName, 
                     aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName(),     //zipFileName, 
                     aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage(),  //unzipStorageName, 
                     unzipFolderName,                                             //aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath(),       //unzipFolderName, 
                     errorUnzipFile, contextUnzipFile, callbackUnzipFile);
      }
      //==============================================
      contextCreateTmpFolder.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.createFolder2(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage(), 
                                                      unzipFolderName, 
                                                      errorCreateTmpFolder, contextCreateTmpFolder, callbackCreateTmpFolder); 

    }

    //------------------------------------------------------------
    public cleanHtmlTemplateMainAndDetailFiles_forOneHtmlTemplate(
                aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                playlistType: string, 
                aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      context.setError(error);
      context.setBoolResult(true);
      return callback(context);  
    
      var self = this;
      //-----------------------------
      var extraPath =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getName();
      extraPath = self.getFileNameWithoutExtension(extraPath);
      /*
      if (extraPath.length >= 5)
      {
        extraPath = extraPath.substring(0,extraPath.length - 4);
      }*/
      var unzipFolderName =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath() + extraPath + "/";
      //var unzipFolderName =  aCrtHtmlTemplateFileTransfer.getDstFileInfo().getPath();
      //-----------------------
      var errorDeleteHtmlTemplateFolder:amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextDeleteHtmlTemplateFolder:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackDeleteHtmlTemplateFolder = function callbackDeleteHtmlTemplateFolder()
      {
          //------------------ end - Ok
          if (context != null)
          {
            context.setError(error);
            context.setBoolResult(true);
            return callback(context);  
          }
      }
      //==============================================
      contextDeleteHtmlTemplateFolder.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.deleteFolder2(aCrtHtmlTemplateFileTransfer.getDstFileInfo().getStorage(), 
                                                      unzipFolderName, 
                                                      errorDeleteHtmlTemplateFolder, contextDeleteHtmlTemplateFolder, callbackDeleteHtmlTemplateFolder); 

    }



    //------------------------------------------------------------
    // main method for the detail files of one html template 
    //------------------------------------------------------------
    public buildAndDownloadHtmlTemplateMainAndDetailFiles_forOneHtmlTemplate(
                aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                playlistType: string, 
                aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {

      var self = this;
      //-------------------------- not the main htmltemplate file - nothing to do - the additional files where downloaded already
      //if ((aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmltemplate") && (aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmlfeed"))
      if (aCrtHtmlTemplateFileTransfer.getSrcFileType() != "htmlfeed")
      {
        context.setBoolResult(true); //ma
        context.setError(error);
        return callback(context);    
      }
      if (aCrtHtmlTemplateFileTransfer.getSrcFileType() == "htmlfeed")
      {
        var a=1;
      }
      var bIsNewHtmTemplateFile = false;
      //--------------------------- start cleanup html templates details files
      var errorCreateFolders:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateFolders:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateFolders = function callbackCreateFolders(ctxCreateFolders)
      {

        //--------------------------- start cleanup html templates details files
        var errorIsNewHtmlTemplateFile:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextIsNewHtmlTemplateFile:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackIsNewHtmlTemplateFile = function callbackIsNewHtmlTemplateFile(ctxIsNewHtmlTemplateFile)
        {
          //---------- if -- error testing have a new playlist -- stop on error
          if (ctxIsNewHtmlTemplateFile.isError())
          {
            if (context != null)
            {
              error.setError(481,"ERROR 481: isNewHtmltemplateFile - Error while checking for a new htmltemplate file");
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                `481: isNewHtmltemplateFile - Error while checking for a new htmltemplate file`, 
                null, null, null
              );
              
              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += "<p>ERROR 481: isNewHtmltemplateFile - Error while checking for a new htmltemplate file</p>";
              }
              context.setError(error);
              context.setBoolResult(false);
              return callback(context);  
            }
            return;  
          }
          //----------- not a new html template file - nothing to do ----
          bIsNewHtmTemplateFile = ctxIsNewHtmlTemplateFile.getBoolResult();
          if (! bIsNewHtmTemplateFile)
          {
            if (context != null)
            {
              context.setError(error);
              context.setBoolResult(bIsNewHtmTemplateFile);
              return callback(context);  
            }
            return;  
          }

          //--------------------------- start cleanup html templates details files
          var errorCleanupHtmlTemplatesDetailsFiles:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextCleanupHtmlTemplatesDetailsFiles:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackCleanupHtmlTemplatesDetailsFiles = function callbackCleanupHtmlTemplatesDetailsFiles(ctxCleanupHtmlTemplatesDetailsFiles)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: cleanupHtmlTemplatesDetailsFiles:...Ok`, null, null, null);                                                                                   

            if (self._debug)
            {        
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: cleanupHtmlTemplatesDetailsFiles...Ok</p>";
            }

            //--------------------------- start unzip main html templates file
            var errorUnzipHtmlTemplateFile:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextUnzipHtmlTemplateFile:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackUnzipHtmlTemplateFile = function callbackUnzipHtmlTemplateFile(ctxUnzipHtmlTemplateFile)
            {
              //---------- if -- error during unzip html template file -- stop on error
              if (ctxUnzipHtmlTemplateFile.isError())
              {
                if (context != null)
                {
                  error.setError(503,"ERROR 503: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + errorUnzipHtmlTemplateFile.getErrMsg() + "]");
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),`503: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: ["${errorUnzipHtmlTemplateFile.getErrMsg()}"]`, null, null, null);

                  if (self._debug)
                  {    
                    document.getElementById("rend.message").innerHTML += "ERROR 504: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" 
                                                                                                                + errorUnzipHtmlTemplateFile.getErrMsg() + "]";
                  }    
                  context.setError(error);
                  context.setBoolResult(false);
                  return callback(context);  
                }
                return;  
              }
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: unzipHtmlTemplateFile_forOneHtmlTemplate:...Ok`, null, null, null);                                                                                   

              if (self._debug)
              {        
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: unzipHtmlTemplateFile_forOneHtmlTemplate...Ok</p>";
              }
              //--------------------------- start buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate
              var errorBuildAndDownloadMainFiles:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
              var contextBuildAndDownloadMainFiles:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
              var callbackBuildAndDownloadMainFiles = function callbackBuildAndDownloadMainFiles(ctxBuildAndDownloadMainFiles)
              {
                //---------- if -- error during BuildAndDownloadMainFiles -- stop on error
                if (ctxBuildAndDownloadMainFiles.isError())
                {
                  if (context != null)
                  {
                    error.setError(503,"ERROR 504: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + errorBuildAndDownloadMainFiles.getErrMsg() + "]");
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),`503: downloadPlaylistAndMediaFiles: errorBuildAndDownloadMainFiles: ["${errorBuildAndDownloadMainFiles.getErrMsg()}"]`, null, null, null);

                    if (self._debug)
                    {    
                      document.getElementById("rend.message").innerHTML += "ERROR 504: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" 
                                                                                                                + errorBuildAndDownloadMainFiles.getErrMsg() + "]";
                    }    
                    context.setError(error);
                    context.setBoolResult(false);
                    return callback(context);  
                  }
                  return;  
                }
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate:...Ok`, null, null, null);                                                                                   

                if (self._debug)
                {        
                  document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate...Ok</p>";
                }
                //--------------------------- start buildHtmlTemplateDetailFiles_forOneHtmlTemplate
                var errorBuildDetailsFiles:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
                var contextBuildDetailsFiles:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                var callbackBuildDetailsFiles = function callbackBuildDetailsFiles(ctxBuildDetailsFiles)
                {
                  //---------- if -- error during BuildDetailsFiles -- stop on error
                  if (ctxBuildDetailsFiles.isError())
                  {
                    if (context != null)
                    {
                      error.setError(503,"ERROR 504: downloadPlaylistAndMediaFiles: errorBuildDetailsFiles: [" + errorBuildDetailsFiles.getErrMsg() + "]");
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),`503: downloadPlaylistAndMediaFiles: errorBuildDetailsFiles: ["${errorBuildDetailsFiles.getErrMsg()}"]`, null, null, null);

                      if (self._debug)
                      {    
                        document.getElementById("rend.message").innerHTML += "ERROR 504: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" 
                                                                                                                + errorBuildDetailsFiles.getErrMsg() + "]";
                      }    
                      context.setError(error);
                      context.setBoolResult(false);
                      return callback(context);  
                    }
                    return;  
                  }
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildHtmlTemplateDetailFiles_forOneHtmlTemplate:...Ok`, null, null, null);                                                                                   

                  if (self._debug)
                  {        
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildHtmlTemplateDetailFiles_forOneHtmlTemplate...Ok</p>";
                  }
                  //--------------------------- start downloadHtmlTemplateDetailFiles_forOneHtmlTemplate
                  var errorDownloadDetailsFiles:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
                  var contextDownloadDetailsFiles:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                  var callbackDownloadDetailsFiles = function callbackDownloadDetailsFiles(ctxDownloadDetailsFiles)
                  {
                    //---------- if -- error during BuildDetailsFiles -- stop on error
                    if (ctxDownloadDetailsFiles.isError())
                    {
                      if (context != null)
                      {
                        error.setError(505,"ERROR 505: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + errorDownloadDetailsFiles.getErrMsg() + "]");
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),`503: downloadPlaylistAndMediaFiles: errorBuildDetailsFiles: ["${errorBuildDetailsFiles.getErrMsg()}"]`, null, null, null);


                        if (self._debug)
                        {    
                          document.getElementById("rend.message").innerHTML += "ERROR 505: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" 
                                                                                                                + errorDownloadDetailsFiles.getErrMsg() + "]";
                        }    
                        context.setError(error);
                        context.setBoolResult(false);
                        return callback(context);  
                      }
                      return;  
                    }
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: downloadHtmlTemplateDetailFiles_forOneHtmlTemplate:...Ok`, null, null, null);                                                                                   

                    if (self._debug)
                    {        
                      document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadHtmlTemplateDetailFiles_forOneHtmlTemplate...Ok</p>";

                    }
                    //-------------------------------------
                    var errorApplyCorrectiveJs:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
                    var contextApplyCorrectiveJs:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
                    var callbackApplyCorrectiveJs = function callbackApplyCorrectiveJs(ctxApplyCorrectiveJs)
                    {
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate...`, null, null, null);                                                                                   

                      if (self._debug)
                      {        
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate...</p>";

                      }  
                      //------------------ end - Ok
                      if (context != null)
                      {
                        context.setError(error);
                        context.setBoolResult(true);
                        return callback(context);  
                      }
                      return;
                    }
                    //=========================================================
                    // applyCorrectiveJs_forOneHtmlTemplate
                    //=========================================================
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate...`, null, null, null);                                                                                   

                    if (self._debug)
                    {        
                      document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: applyCorrectiveJs_forOneHtmlTemplate...</p>";

                    }
                    contextApplyCorrectiveJs.setRemoteCallback(true); 
                    self.applyCorrectiveJs_forOneHtmlTemplate( 
                                                aCrtHtmlTemplateFileTransfer, 
                                                aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                                playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                                errorApplyCorrectiveJs, contextApplyCorrectiveJs, callbackApplyCorrectiveJs);
                  }
                  //=========================================================
                  // downloadHtmlTemplateDetailFiles_forOneHtmlTemplate
                  //=========================================================
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: downloadHtmlTemplateDetailFiles_forOneHtmlTemplate...`, null, null, null);                                                                                   

                  if (self._debug)
                  {        
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadHtmlTemplateDetailFiles_forOneHtmlTemplate...</p>";

                  }
                  contextDownloadDetailsFiles.setRemoteCallback(true); 
                  self.downloadHtmlTemplateDetailFiles_forOneHtmlTemplate( 
                                              aCrtHtmlTemplateFileTransfer, 
                                              aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                              playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                              errorDownloadDetailsFiles, contextDownloadDetailsFiles, callbackDownloadDetailsFiles);

                }  
                //=========================================================
                // buildHtmlTemplateDetailFiles_forOneHtmlTemplate
                //=========================================================
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildHtmlTemplateDetailFiles_forOneHtmlTemplate...`, null, null, null);                                                                                   

                if (self._debug)
                {        
                  document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildHtmlTemplateDetailFiles_forOneHtmlTemplate...</p>";

                }
                contextBuildDetailsFiles.setRemoteCallback(true); 
                self.buildHtmlTemplateDetailFiles_forOneHtmlTemplate( 
                                              aCrtHtmlTemplateFileTransfer, 
                                              aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                              playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                              errorBuildDetailsFiles, contextBuildDetailsFiles, callbackBuildDetailsFiles);
              }
              //=========================================================
              // buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate
              //=========================================================
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate...`, null, null, null);                                                                                   

              if (self._debug)
              {        
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate...</p>";

              }
              contextBuildAndDownloadMainFiles.setRemoteCallback(true); 
              self.buildAndDownloadHtmlTemplateMainFiles_forOneHtmlTemplate( 
                                              aCrtHtmlTemplateFileTransfer, 
                                              aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                              playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                              errorBuildAndDownloadMainFiles, contextBuildAndDownloadMainFiles, callbackBuildAndDownloadMainFiles);
            }
            //=========================================
            // unzipHtmlTemplateFile_forOneHtmlTemplate
            //==========================================
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: unzipHtmlTemplateFile_forOneHtmlTemplate...`, null, null, null);                                                                                   

            if (self._debug)
            {        
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: unzipHtmlTemplateFile_forOneHtmlTemplate...</p>";

            }
            contextUnzipHtmlTemplateFile.setRemoteCallback(true); 
            self.unzipHtmlTemplateFile_forOneHtmlTemplate( 
                                              aCrtHtmlTemplateFileTransfer, 
                                              aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                              playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                              errorUnzipHtmlTemplateFile, contextUnzipHtmlTemplateFile, callbackUnzipHtmlTemplateFile);
          }
          //====================================
          // cleanupHtmlTemplatesDetailsFiles
          //=====================================
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: cleanupHtmlTemplatesDetailsFiles...`, null, null, null);                                                                                   

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: cleanupHtmlTemplatesDetailsFiles...</p>";

          }
          contextCleanupHtmlTemplatesDetailsFiles.setRemoteCallback(true); 
          self.cleanHtmlTemplateMainAndDetailFiles_forOneHtmlTemplate( 
                                              aCrtHtmlTemplateFileTransfer, 
                                              aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList,
                                              playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                              errorCleanupHtmlTemplatesDetailsFiles, contextCleanupHtmlTemplatesDetailsFiles, callbackCleanupHtmlTemplatesDetailsFiles);
        }
        //====================================
        // isNewHtmlTemplateFile
        //=====================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: isNewHtmlTemplateFile...`, null, null, null);                                                                                   

        if (self._debug)
        {        
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadHtmltemplateAndMediaFiles: isNewHtmlTemplateFile...</p>";

        }
        contextIsNewHtmlTemplateFile.setRemoteCallback(true); 

        self.isNewHtmlTemplateFile(  self._htmlTemplateFeedDataFile, //aCrtHtmlTemplateFileTransfer, 
                                      aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, 
                                      playlistType, 
                                      //aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                      aMediaFilesTransferFileBase,
                                      aHtmlTemplatesFilesTransferFileBase,
                                      errorIsNewHtmlTemplateFile, contextIsNewHtmlTemplateFile, callbackIsNewHtmlTemplateFile);

      }
      //============================================
      self.addHtmlTemplate_HtmlFeedDataFile(  aHtmlTemplateMainFilesTransferList, 
                                              null,//aPlaylistFileTransferFile, 
                                              aMediaFilesTransferFileBase, 
                                              aHtmlTemplatesFilesTransferFileBase, 
                                              aCrtHtmlTemplateFileTransfer,  
                                              error, context, callback) ;
      contextCreateFolders.setRemoteCallback(true); 
      self.createFolders_forOneHtmlTemplate_Feed(
                                    self._htmlTemplateFeedDataFile, //aCrtHtmlTemplateFileTransfer, 
                                    aHtmlTemplateMainFilesTransferList, aHtmlTemplateDetailFilesTransferList, 
                                    playlistType, 
                                    null,//aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    aMediaFilesTransferFileBase,
                                    aHtmlTemplatesFilesTransferFileBase,
                                    errorCreateFolders, contextCreateFolders, callbackCreateFolders);
                          
    }


    //--------------------------------
    public isNewHtmlTemplateFile( 
                aCrtHtmlTemplateFileTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer, 
                aHtmlTemplateMainFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                aHtmlTemplateDetailFilesTransferList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                playlistType: string, 
                //aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)

                           //playlistType: string, 
                           //aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                           //aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                           //aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                           //error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {     
      var self = this;
      //----------------
      var aPlaylistDstFile      = aCrtHtmlTemplateFileTransfer.getDstFileInfo();
      var aPlaylistSrcFile      = aCrtHtmlTemplateFileTransfer.getSrcFileInfo();
      var aPlaylistTmpFile      = aCrtHtmlTemplateFileTransfer.getTmpFileInfo();
      var aPlaylistShaSrcFile   = aCrtHtmlTemplateFileTransfer.getSrcShaFileInfo();
      var aPlaylistShaTmpFile   = aCrtHtmlTemplateFileTransfer.getTmpShaFileInfo();
      var aPlaylistShaCrtDstFile   = aCrtHtmlTemplateFileTransfer.getDstShaFileInfo();
      var aPlaylistComputedShaTmpFile   = aCrtHtmlTemplateFileTransfer.getComputedShaFileInfo();

      var errorNotExistsPlaylist:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextNotExistsPlaylist:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackNotExistsPlaylist = function callbackNotExistsPlaylist(ctx0:amGeneralContext.am_general.A_Context)
      {
        //==
        var bExistsFile = false;
        if (ctx0 != null)
          bExistsFile = ctx0.getBoolResult();
        if (! bExistsFile)
        {
          var hasNewPlaylistOnExistsFile = true;
          if (context != null)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: PLAYLIST NOT EXISTS : TRUE`, null, null, null);                                                                                   

            if (self._debug)
            {                
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile:: HtmlTemplate File NOT EXISTS : TRUE</p>";

            }
            context.setError(error);
            context.setBoolResult(hasNewPlaylistOnExistsFile);
            return callback(context); 
          }          
          return ;
        }
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: PLAYLIST EXISTS : TRUE`, null, null, null);                                                                                   

        if (self._debug)
        {                
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile:: HtmlTemplate File EXISTS : TRUE</p>";
        }
        //------------------------------------------
        var errorDownloadPlaylist:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextDownloadPlaylist:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackDownloadPlaylist = function callbackDownloadPlaylist(ctx1:amGeneralContext.am_general.A_Context)
        {
          //==
          if (ctx1.isError())
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),"hasNewPlaylist: : downloadPlaylistSha: [" + ctx1.getError().getErrMsg() + "]", null, null, null);                                                                                   

            if (self._debug)
            {                
              document.getElementById("rend.message").innerHTML += "<p>ERROR 4890: isNewHtmlTemplateFile: : downloadHtmlTemplateSha: [" + ctx1.getError().getErrMsg() + "]</p>"

            }
            if (error != null)
              error.setError(4890,"ERROR 4889: isNewHtmlTemplateFile:: download HtmlTemplate File: [" + ctx1.getError().getErrMsg() + "]");
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                `4889: isNewHtmlTemplateFile:: download HtmlTemplate File: ["${ctx1.getError().getErrMsg()}"]`, 
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
            return;           
          }
          //------------------------------------------
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: downloadPlaylist...OK`, null, null, null);                                                                                   

          if (self._debug)
          {
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile:: download HtmlTemplate File:...OK</p>";

          }
          var errorDownloadPlaylistSha:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownloadPlaylistSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackDownloadPlaylistSha = function callbackDownloadPlaylistSha(ctx2)
          {
            if (ctx2.isError())
            {
              var hasNewPlaylist = false;
              if (context != null)
              {
                error.setError(4890,"ERROR 4890: isNewHtmlTemplateFile:: download HtmlTemplate File Sha: [" + ctx2.getError().getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  `4890: isNewHtmlTemplateFile:: download HtmlTemplate File Sha: ["${ctx2.getError().getErrMsg()}"]`, 
                  null, 
                  null, 
                  null
                );

                if (self._debug)
                {                
                  document.getElementById("rend.message").innerHTML += "<p>ERROR 4890: isNewHtmlTemplateFile:: download HtmlTemplate File Sha : [" + ctx2.getError().getErrMsg() + "]";
                }
                context.setError(error);
                context.setBoolResult(hasNewPlaylist);
                return callback(context);  
              }
              return;  
            }
            //---------------------------------
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: downloadPlaylistSha...OK`, null, null, null);                                                                                   

            if (self._debug)
            {                
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile:: download HtmlTemplate File Sha...OK</p>";

            }
            var errorComputeSha:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextComputeSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var shaProperties:amGeneralShaProperties.am_general.A_ShaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);  
            shaProperties.setSrcFileInfo(aPlaylistTmpFile);
            shaProperties.setShaFileInfo(aPlaylistComputedShaTmpFile);
            var callbackComputeSha = function callbackComputeSha(ctx3 : amGeneralContext.am_general.A_Context)
            {
              if (ctx3.isError())
              {
                var hasNewPlaylist = false;
                if (context != null)
                {
                  error.setError(4891,"--> ERROR 4891: isNewHtmlTemplateFile:: HtmlTemplate File error compute sha: [" + ctx3.getError().getErrMsg() + "]");
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    `4890: isNewHtmlTemplateFile:: HtmlTemplate File: error compute sha: ["${ctx3.getError().getErrMsg()}"]`, 
                    null, 
                    null, 
                    null
                  );

                  if (self._debug)
                  {                
                    document.getElementById("rend.message").innerHTML += "<p>ERROR 4891: isNewHtmlTemplateFile:: HtmlTemplate File computeShaFile : error compute sha: [" 
                                                                                                            + ctx3.getError().getErrMsg() + "]";
                  }
                  context.setError(error);
                  context.setBoolResult(hasNewPlaylist);
                  return callback(context);  
                }
                return;  
              }
              var computeShaFile = ctx3.getResult();
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),"hasNewPlaylist: computeShaFile: " + computeShaFile, null, null, null);                                                                                   

              if (self._debug)
              {                
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile:: HtmlTemplate File computeShaFile...OK</p>";
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile:: HtmlTemplate File: computeShaFile: " + computeShaFile + "</p>";

              }
              //---------------------------------
              var errorReadTmpShaFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
              var contextReadTmpShaFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
              var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4 : amGeneralContext.am_general.A_Context)
              {
                if (ctx4.isError())
                {
                  var hasNewPlaylist = false;
                  if (context != null)
                  {
                    error.setError(4892,"--> ERROR 4892: isNewHtmlTemplateFile: readTmpShaFile : [" + ctx4.getError().getErrMsg() + "]");
                    self._aActivityLogService._IActivityLogServiceMessaging
                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                      `4892: isNewHtmlTemplateFile: readTmpShaFile: ["${ctx3.getError().getErrMsg()}"]`, 
                      null, 
                      null, 
                      null
                    );

                    if (self._debug)
                    {                
                      document.getElementById("rend.message").innerHTML += "<p>ERROR 4892: isNewHtmlTemplateFile: readTmpShaFile : [" 
                                                                                                                    + ctx4.getError().getErrMsg() + "]";
                    }
                    context.setError(error);
                    context.setBoolResult(hasNewPlaylist);
                    return callback(context);  
                  }
                  return;  
                }
                //---------------------------------
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: readTmpShaFile...OK`, null, null, null);                                                                                   

                if (self._debug)
                {                
                  document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile: readTmpShaFile...OK</p>";

                }
                var shaDownloadedFile = ctx4.getResult();
                var errorReadShaCrtDstFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
                var contextReadShaCrtDstFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                var callbackReadShaCrtDstFile = function callbackReadShaCrtDstFile(ctx5:amGeneralContext.am_general.A_Context)
                {
                  var hasNewPlaylist2 = false;
                  if (context != null)
                  {
                    if (ctx5.isError())
                    {
                      hasNewPlaylist2 = true;
                      context.setBoolResult(hasNewPlaylist2);
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: readCrtDstShaFile : no current playlist sha file...OK`, null, null, null);                                                                                   

                      if (self._debug)
                      {                
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile: readCrtDstShaFile : no current sha file...OK</p>";
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile: TRUE</p>";

                      }
                    }else{
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: readCrtDstShaFile...OK`, null, null, null);                                                                                   

                      if (self._debug)
                      {                
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile: download HtmlTemplate File: readCrtDstShaFile...OK</p>";

                      }
                      var shaCrtFile =  ctx5.getResult();
                      var b1 = aCrtHtmlTemplateFileTransfer.isTheSameShaValue(shaCrtFile, shaDownloadedFile);
                      var b2 = aCrtHtmlTemplateFileTransfer.isTheSameShaValue(shaCrtFile, computeShaFile);
                      if (b2)
                      {
                        hasNewPlaylist2 = false;
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: FALSE`, null, null, null);                                                                                   

                        if (self._debug)
                        {                
                          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile: FALSE</p>";

                        }
                      }else{
                        hasNewPlaylist2 = true;
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: TRUE`, null, null, null);                                                                                   

                        if (self._debug)
                        {    
                          document.getElementById("rend.message").innerHTML += "<p>MESSAGE:  isNewHtmlTemplateFile: TRUE</p>";

                        }
                      }
                    }  
                    context.setBoolResult(hasNewPlaylist2);
                    context.setError(error);
                    //context.setBoolResult(true);
                    return callback(context);  
                  }
                }
                //==================================================
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: readCrtDstShaFile...`, null, null, null);                                                                                   

                if (self._debug)
                {        
                  document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile: readCrtDstShaFile...</p>";

                }
                contextReadShaCrtDstFile.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.readTextFile2(
                                                            aPlaylistShaCrtDstFile.getStorage(), aPlaylistShaCrtDstFile.getPath(), aPlaylistShaCrtDstFile.getName(), 
                                                            errorReadShaCrtDstFile, contextReadShaCrtDstFile, callbackReadShaCrtDstFile);    

              }
              //==================================================
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: readTmpShaFile...`, null, null, null);                                                                                   

              if (self._debug)
              {      
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile: readTmpShaFile...</p>";

              }
              contextReadTmpShaFile.setRemoteCallback(true);
              self._aSDKService._iSDKFileSystem.readTextFile2(
                                                            aPlaylistShaTmpFile.getStorage(), aPlaylistShaTmpFile.getPath(), aPlaylistShaTmpFile.getName(), 
                                                            errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);    

            }
            //==================================================
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`isNewHtmlTemplateFile: computeFileSha....`, null, null, null);                                                                                   

            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile: computeFileSha...</p>";

            }
            contextComputeSha.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties,
                                                              errorComputeSha, contextComputeSha, callbackComputeSha);    
          }  
          //==================================================
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`isNewHtmlTemplateFile:  downloadPlaylistSha...`, null, null, null);                                                                                   

          if (self._debug)
          {  
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile: downloadPlaylistSha...</p>";

          }
          contextDownloadPlaylistSha.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.downloadFile2( aPlaylistShaSrcFile.getFullName(), 
                                                            aPlaylistShaTmpFile.getStorage(), aPlaylistShaTmpFile.getPath(), aPlaylistShaTmpFile.getName(), 
                                                            errorDownloadPlaylistSha, contextDownloadPlaylistSha, callbackDownloadPlaylistSha);    
        }
        //==================================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: downloadPlaylist...`, null, null, null);                                                                                   

        if (self._debug)
        {
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile: download HtmlTemplate File...</p>";

        }
        contextDownloadPlaylist.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.downloadFile2( aPlaylistSrcFile.getFullName(), 
                                                        aPlaylistTmpFile.getStorage(), aPlaylistTmpFile.getPath(), aPlaylistTmpFile.getName(), 
                                                        errorDownloadPlaylist, contextDownloadPlaylist, callbackDownloadPlaylist); 
      }    
      //==================================================
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: test notExistsPlaylist..`, null, null, null);                                                                                   

      if (self._debug)
      {
        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: isNewHtmlTemplateFile:  test notExists HtmlTemplate file...</p>";

      }
      contextNotExistsPlaylist.setRemoteCallback(true);
      this._aSDKService._iSDKFileSystem.fileExists2( aPlaylistDstFile.getStorage(), aPlaylistDstFile.getPath(), aPlaylistDstFile.getName(), 
                                                     errorNotExistsPlaylist, contextNotExistsPlaylist, callbackNotExistsPlaylist); 
    }



    //-------------------------------------------------                  
    public buildAndDownloadAllHtmlTemplatesMainAndDetailFiles_fromMap( 
                                 transferMediaFiles: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                                 playlistType: string, 
                                 aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                 aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                 aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                 error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var transferMediaFilesArray:Array<amGeneralFileTransfer.am_general.AE_FileTransfer> = Array.from(transferMediaFiles.values()) ;
      return this.buildAndDownloadAllHtmlTemplatesMainAndDetailFiles_fromArray( 
                                                         transferMediaFilesArray,
                                                         playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                                         error, context, callback)
    }


    //-------------------------------------------------                  
    public buildAndDownloadAllHtmlTemplatesMainAndDetailFiles_fromArray( 
                                  transferMediaFiles: Array<amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                                  playlistType: string, 
                                  aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                  aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                  aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      var nbFiles:number = transferMediaFiles.length;
      var startFileIdx = 0;
      //---
      var callbackDownloadOneFile = function callbackDownloadOneFile(crtFileIdx: number, ctx1: amGeneralContext.am_general.A_Context)
      {
        //-------- succesfully download all the files
        if (crtFileIdx + 1 > nbFiles)
        {
          context.setBoolResult(true);
          console.log( "Successfully downloaded all xml files"); 
          context.setError(error);
          //document.getElementById("renderer.message").innerHTML += "<p>success: " + crtFileIdx  + "</p>";
          if (callback != null)
            callback(context);     
          return ; 
        }
        //---------------------------
        var crtFileTransfer:amGeneralFileTransfer.am_general.AE_FileTransfer = transferMediaFiles[crtFileIdx];
        var fileFullName = "";///crtFileInfo.getStorage() + crtFileInfo.getPath() + crtFileInfo.getName();
        
        var callbackDownloadFile = function callbackDownloadFile(ctx2: amGeneralContext.am_general.A_Context)
        {
          /*
          var downloadFileWell = ctx2.getBoolResult();
          if (! downloadFileWell) //ctx2.isError())
          {
            context.setError(error);
            context.setObjectResult(null);
            //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
            if (callback != null)
              callback(context);  
            return;  
          }  */
          //-------------- store a new xml-json-text object
          //document.getElementById("rend.message").innerHTML += "<p>start createDefaultXmlDocument "  +  "</p>";  
          console.log( 'Succesfuly downloaded one file ' + fileFullName ); 
          return callbackDownloadOneFile(++crtFileIdx, ctx2);
        }
        //document.getElementById("rend.message").innerHTML += "<p>start _iSDKFileSystem.readTextFile2: "  + "</p>";  
        //============================================
        // buildAndDownloadHtmlTemplateMainAndDetailFiles_forOneHtmlTemplate
        //============================================
        self._htmlTemplateMainTransferList = new Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>();
        self._htmlTemplateDetailsTransferList = new Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>();
        self.buildAndDownloadHtmlTemplateMainAndDetailFiles_forOneHtmlTemplate( 
                                          crtFileTransfer, 
                                          self._htmlTemplateMainTransferList, 
                                          self._htmlTemplateDetailsTransferList, 
                                          playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                          error, ctx1, callbackDownloadFile) ; 
        //self.downloadFileIfNotAlreadyDownloaded( crtFileTransfer,  error, ctx1, callbackDownloadFile) ; 
      }

      callbackDownloadOneFile(startFileIdx, context);
    }


    //--------------------------------
    public downloadHtmlTemplatesFilesList( 
                      playlistType: string, 
                      aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                      aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                      aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {    
      var bIgnoreErrors = false;
      return this._aDownloadService._iDownloadMain.downloadFiles_fromMap(this._htmlTemplatesTransferList, bIgnoreErrors, error, context, callback);
    }


    //--------------------------------
    public buildAndDownloadHtmlTemplatesFilesList( 
                  playlistType: string, 
                  aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {    
      var self = this;
      
      //----------- start download html template files
      var errorDownloadHtmlTemplatesFilesList:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextDownloadHtmlTemplatesFilesList:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackDownloadHtmlTemplatesFilesList = function callbackDownloadHtmlTemplatesFiles(ctxDownloadHtmlTemplatesFilesList)
      {
        //---------- if -- error during the cleanup -- stop on error
        if (ctxDownloadHtmlTemplatesFilesList.isError())
        {
          if (context != null)
          {
            error.setError(501,"ERROR 501: downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList: [" + errorDownloadHtmlTemplatesFilesList.getErrMsg() + "]");
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
              `501: downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList: ["${errorDownloadHtmlTemplatesFilesList.getErrMsg()}"]`, 
              null, null, null
            );
            
            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "ERROR 501: downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList: [" 
                                                                                                             + errorDownloadHtmlTemplatesFilesList.getErrMsg() + "]";
            }    
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);  
          }
          return;  
        }
        //---------- succesfull download the html templates files list
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList...`, null, null, null);                                                                                   

        if (self._debug)
        {    
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList...OK</p>";

        }
        
        //----------- start download media file
        var errorBuildAndDownloadDetailFiles:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextBuildAndDownloadDetailFiles:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackBuildAndDownloadDetailFiles = function callbackBuildAndDownloadDetailFiles(ctxBuildAndDownloadDetailFiles)
        { 
          //---------- if -- error during the cleanup -- stop on error
          if (ctxBuildAndDownloadDetailFiles.isError())
          {
            if (context != null)
            {
              error.setError(503,"ERROR 503: downloadPlaylistAndMediaFiles: errorBuildAndDownloadDetailFiles: [" + errorBuildAndDownloadDetailFiles.getErrMsg() + "]");
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),`503: downloadPlaylistAndMediaFiles: errorBuildAndDownloadDetailFiles: ["${errorBuildAndDownloadDetailFiles.getErrMsg()}"]`, null, null, null);

              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += "ERROR 503: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" 
                                                                                                            + errorBuildAndDownloadDetailFiles.getErrMsg() + "]";
              }    
              context.setError(error);
              context.setBoolResult(false);
              return callback(context);  
            }
            return;  
          }
          //---------- succesfull build and download thml templates files list
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadAllHtmlTemplatesDetailFiles...`, null, null, null);                                                                                   

          if (self._debug)
          {    
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadAllHtmlTemplatesDetailFiles...OK</p>";

          }
          if (context != null)
          {
            context.setError(error);
            context.setBoolResult(true);
            return callback(context);  
          }
          return;  
        }
        //=====================================================
        // buildAndDownloadAllHtmlTemplatesDetailFiles_fromMap
        //=====================================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadAllHtmlTemplatesDetailFiles...`, null, null, null);                                                                                   

        if (self._debug)
        {        
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadAllHtmlTemplatesDetailFiles...</p>";

        }
        contextBuildAndDownloadDetailFiles.setRemoteCallback(true); 
        self.buildAndDownloadAllHtmlTemplatesMainAndDetailFiles_fromMap(
                                         self._htmlTemplatesTransferList, 
                                         playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase, 
                                         errorBuildAndDownloadDetailFiles, contextBuildAndDownloadDetailFiles, callbackBuildAndDownloadDetailFiles);
      }  
      //====================================
      // downloadHtmlTemplatesFilesList
      //=====================================
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFilesList...`, null, null, null);                                                                                   

      if (self._debug)
      {        
        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFilesList...</p>";

      }
      contextDownloadHtmlTemplatesFilesList.setRemoteCallback(true); 
      self.downloadHtmlTemplatesFilesList( playlistType, 
                                           aPlaylistTransferFile,
                                           aMediaFilesTransferFileBase,
                                           aHtmlTemplatesFilesTransferFileBase, 
                                           errorDownloadHtmlTemplatesFilesList, contextDownloadHtmlTemplatesFilesList, callbackDownloadHtmlTemplatesFilesList);            

    }

    //------------------------------------
    // ------- end html templates methods
    //------------------------------------


    //--------------------------------
    public downloadPlaylist( 
                                    playlistType: string, 
                                    aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      //----------------
      var self = this;
      var aPlaylistSrcFile      = aPlaylistTransferFile.getSrcFileInfo();
      var aPlaylistTmpFile      = aPlaylistTransferFile.getTmpFileInfo();
      var aPlaylistShaSrcFile   = aPlaylistTransferFile.getSrcShaFileInfo();
      var aPlaylistShaTmpFile   = aPlaylistTransferFile.getTmpShaFileInfo();
      var aPlaylistShaCrtDstFile   = aPlaylistTransferFile.getDstShaFileInfo();
      var aPlaylistComputedShaTmpFile   = aPlaylistTransferFile.getComputedShaFileInfo();

      var errorDownloadPlaylist:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextDownloadPlaylist:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackDownloadPlaylist = function callbackDownloadPlaylist(ctx1:amGeneralContext.am_general.A_Context)
      {
        //==
        var errorDownloadPlaylistSha:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextDownloadPlaylistSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        if (ctx1.isError())
        {
          //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
          if (error != null) {
            error.setError(ctx1.getError().getErrId(),ctx1.getError().getErrMsg());
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
              `${ctx1.getError().getErrId()}: downloadPlaylistAndMediaFiles: downloadHtmlTemplatesFilesList: ["${ctx1.getError().getErrMsg()}"]`, 
              null, null, null
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
        var callbackDownloadPlaylistSha = function callbackDownloadPlaylistSha(ctx2)
        {

          var errorComputeSha:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextComputeSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var shaProperties:amGeneralShaProperties.am_general.A_ShaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);  
          shaProperties.setSrcFileInfo(aPlaylistTmpFile);
          shaProperties.setShaFileInfo(aPlaylistComputedShaTmpFile);
          var callbackComputeSha = function callbackComputeSha(ctx3 : amGeneralContext.am_general.A_Context)
          {
            var shaComputeFile = ctx3.getResult();
            var errorReadTmpShaFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextReadTmpShaFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4 : amGeneralContext.am_general.A_Context)
            {
              var shaDownloadedFile = ctx4.getResult();
              var downloadPlaylistWell = true;
              if (context != null)
              {
                if (ctx4.isError())
                {
                  downloadPlaylistWell = false;
                }else{
                  downloadPlaylistWell = true; //false;//ma
                  if (aPlaylistTransferFile.isTheSameShaValue(shaComputeFile, shaDownloadedFile))
                    downloadPlaylistWell = true;
                }
                context.setBoolResult(downloadPlaylistWell)
                context.setError(error);
                //context.setBoolResult(true);
                return callback(context);  
              }
            }
            //==================================================
            //document.getElementById("rend.message").innerHTML += "<p>read server sha file"</p>";
            contextReadTmpShaFile.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.readTextFile2(
                                                           aPlaylistShaTmpFile.getStorage(), aPlaylistShaTmpFile.getPath(), aPlaylistShaTmpFile.getName(), 
                                                           errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);    

          }
          //==================================================
          //document.getElementById("rend.message").innerHTML += "<p>start download playlist"</p>";
          contextComputeSha.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties,
                                                            errorComputeSha, contextComputeSha, callbackComputeSha);    
        }  
        //==================================================
        //document.getElementById("rend.message").innerHTML += "<p>start download playlist"</p>";
        contextDownloadPlaylistSha.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.downloadFile2( aPlaylistShaSrcFile.getFullName(), 
                                                           aPlaylistShaTmpFile.getStorage(), aPlaylistShaTmpFile.getPath(), aPlaylistShaTmpFile.getName(), 
                                                           errorDownloadPlaylistSha, contextDownloadPlaylistSha, callbackDownloadPlaylistSha);    
      }
      //==================================================
      //document.getElementById("rend.message").innerHTML += "<p>start download playlist"</p>";
      contextDownloadPlaylist.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.downloadFile2( aPlaylistSrcFile.getFullName(), 
                                                       aPlaylistTmpFile.getStorage(), aPlaylistTmpFile.getPath(), aPlaylistTmpFile.getName(), 
                                                       errorDownloadPlaylist, contextDownloadPlaylist, callbackDownloadPlaylist);  
    }

    //--------------------------------
    public buildMediaFilesListToDownload(
                                    playlistType: string, 
                                    aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {    
      var self = this;
      
      self._fileTransferList = new Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>();
      self._htmlTemplatesTransferList = new Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>();
      
      var jsonPlaylist : any;
      var jsonPlaylistString: string;
      var aTmpPlayFile = aPlaylistTransferFile.getTmpFileInfo();  
      var callbackLoadPlaylist = function callbackLoadPlaylist(ctxLoad)
      {
        //-------------------------
        if (ctxLoad.isError())
        {
          if (callback != null)
          {
            if (error != null)
            {
              error.setError(ctxLoad.getError().getErrId(), "buildMediaFilesListToDownload - Error loading the playlist" + ctxLoad.getError().getErrMsg() );
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                `${ctxLoad.getError().getErrId()}: buildMediaFilesListToDownload - Error loading the playlist: ["${ctxLoad.getError().getErrMsg()}"]`, 
                null, 
                null, 
                null
              );

              if (self._debug)
              {             
                document.getElementById("rend.message").innerHTML += "<p>ERROR 11112: buildMediaFilesListToDownload - Error loading the playlist"
                                                                                                                  + ctxLoad.getError().getErrMsg() + "</p>";   
              }
              if (context != null)
                context.setError(error);
            }
            return callback(context);    
          }
        }
        //-------------------------
        var errorBuildMediaFilesList:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextBuildMediaFilesList:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        jsonPlaylistString   = ctxLoad._result;
        jsonPlaylist  = null;
        try{
          jsonPlaylist = JSON.parse(jsonPlaylistString);
          var callbackBuildMediaFilesList = function callbackBuildMediaFilesList(ctxBuild)
          {
            //-----------------
            if (callback != null)
            {
              return callback(context);    
            }       
          }
          self._iHtmlTemplateDownloaderBuilderMoodV5.loadMediaFilesList( playlistType, jsonPlaylist, //aTmpPlayFile, 
                                                                     self._fileTransferList, 
                                                                     self._htmlTemplatesTransferList,
                                                                     aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase,
                                                                     errorBuildMediaFilesList, contextBuildMediaFilesList, callbackBuildMediaFilesList);
        }catch(e){
          if (callback != null)
          {
            if (error != null)
            {
              error.setError(11111, "ERROR 12113: buildMediaFilesListToDownload - Error Parsing Json" + e.message );
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                `: buildMediaFilesListToDownload - Error loading the playlist: ["${e.message}"]`, 
                null, 
                null, 
                null
              );
              if (self._debug)
              {                
                document.getElementById("rend.message").innerHTML += "<p>ERROR 12113: buildMediaFilesListToDownload - Error Parsing Json" + e.message  + "</p>";
              }    
              if (context != null)
                context.setError(error);
             }
             return callback(context);    
          }
        }
      }  
      //--------------------------------------
      context.setRemoteCallback(true);
      //document.getElementById("renderer.message").innerHTML += "<p>start read xml files: " + fileFullName  + "</p>";
      this._aSDKService._iSDKFileSystem.readTextFile2( aTmpPlayFile.getStorage(), aTmpPlayFile.getPath(), aTmpPlayFile.getName(), 
                                                       error, context, callbackLoadPlaylist) ; 
    }

    
    //--------------------------------
    public downloadMediaFilesList( 
                                    playlistType: string, 
                                    aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {    
      var bIgnoreErrors = false;
      return this._aDownloadService._iDownloadMain.downloadFiles_fromMap(this._fileTransferList, bIgnoreErrors, error, context, callback);
    }

    //--------------------------------
    public hasNewPlaylist( playlistType: string, 
                           aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                           aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                           aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                           error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {     
      var self = this;
      //----------------
      var self = this;
      var aPlaylistDstFile      = aPlaylistTransferFile.getDstFileInfo();
      var aPlaylistSrcFile      = aPlaylistTransferFile.getSrcFileInfo();
      var aPlaylistTmpFile      = aPlaylistTransferFile.getTmpFileInfo();
      var aPlaylistShaSrcFile   = aPlaylistTransferFile.getSrcShaFileInfo();
      var aPlaylistShaTmpFile   = aPlaylistTransferFile.getTmpShaFileInfo();
      var aPlaylistShaCrtDstFile   = aPlaylistTransferFile.getDstShaFileInfo();
      var aPlaylistComputedShaTmpFile   = aPlaylistTransferFile.getComputedShaFileInfo();

      var errorNotExistsPlaylist:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextNotExistsPlaylist:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackNotExistsPlaylist = function callbackNotExistsPlaylist(ctx0:amGeneralContext.am_general.A_Context)
      {
        //==
        var bExistsFile = false;
        if (ctx0 != null)
          bExistsFile = ctx0.getBoolResult();
        if (! bExistsFile)
        {
          var hasNewPlaylistOnExistsFile = true;
          if (context != null)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: PLAYLIST NOT EXISTS : TRUE`, null, null, null);                                                                                   

            if (self._debug)
            {                
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: PLAYLIST NOT EXISTS : TRUE</p>";

            }
            context.setError(error);
            context.setBoolResult(hasNewPlaylistOnExistsFile);
            return callback(context); 
          }          
          return ;
        }
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: PLAYLIST EXISTS : TRUE`, null, null, null);                                                                                   

        if (self._debug)
        {                
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: PLAYLIST EXISTS : TRUE</p>";
        }
        //------------------------------------------
        var errorDownloadPlaylist:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextDownloadPlaylist:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackDownloadPlaylist = function callbackDownloadPlaylist(ctx1:amGeneralContext.am_general.A_Context)
        {
          //==
          if (ctx1.isError())
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),"hasNewPlaylist: : downloadPlaylistSha: [" + ctx1.getError().getErrMsg() + "]", null, null, null);                                                                                   

            if (self._debug)
            {                
              document.getElementById("rend.message").innerHTML += "<p>ERROR 4890: hasNewPlaylist: : downloadPlaylistSha: [" + ctx1.getError().getErrMsg() + "]</p>"

            }
            if (error != null)
              error.setError(4890,"ERROR 4889: hasNewPlaylist: : downloadPlaylist: [" + ctx1.getError().getErrMsg() + "]");
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                `4890: hasNewPlaylist: : downloadPlaylist: ["${ctx1.getError().getErrMsg()}"]`, 
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
            return;           
          }
          //------------------------------------------
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: downloadPlaylist...OK`, null, null, null);                                                                                   

          if (self._debug)
          {
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: downloadPlaylist...OK</p>";

          }
          var errorDownloadPlaylistSha:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownloadPlaylistSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackDownloadPlaylistSha = function callbackDownloadPlaylistSha(ctx2)
          {
            if (ctx2.isError())
            {
              var hasNewPlaylist = false;
              if (context != null)
              {
                error.setError(4890,"ERROR 4890: hasNewPlaylist: : downloadPlaylistSha: [" + ctx2.getError().getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  `4890: hasNewPlaylist: : downloadPlaylistSha: ["${ctx2.getError().getErrMsg()}"]`, 
                  null, 
                  null, 
                  null
                );

                if (self._debug)
                {                
                  document.getElementById("rend.message").innerHTML += "<p>ERROR 4890: hasNewPlaylist: downloadPlaylistSha : [" + ctx2.getError().getErrMsg() + "]";
                }
                context.setError(error);
                context.setBoolResult(hasNewPlaylist);
                return callback(context);  
              }
              return;  
            }
            //---------------------------------
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: downloadPlaylistSha...OK`, null, null, null);                                                                                   

            if (self._debug)
            {                
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: downloadPlaylistSha...OK</p>";

            }
            var errorComputeSha:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextComputeSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var shaProperties:amGeneralShaProperties.am_general.A_ShaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);  
            shaProperties.setSrcFileInfo(aPlaylistTmpFile);
            shaProperties.setShaFileInfo(aPlaylistComputedShaTmpFile);
            var callbackComputeSha = function callbackComputeSha(ctx3 : amGeneralContext.am_general.A_Context)
            {
              if (ctx3.isError())
              {
                var hasNewPlaylist = false;
                if (context != null)
                {
                  error.setError(4891,"--> ERROR 4891: hasNewPlaylist: : error compute sha: [" + ctx3.getError().getErrMsg() + "]");
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    `4890: hasNewPlaylist: : error compute sha: ["${ctx3.getError().getErrMsg()}"]`, 
                    null, 
                    null, 
                    null
                  );

                  if (self._debug)
                  {                
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
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),"hasNewPlaylist: computeShaFile: " + computeShaFile, null, null, null);                                                                                   

              if (self._debug)
              {                
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: computeShaFile...OK</p>";
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: computeShaFile: " + computeShaFile + "</p>";

              }
              //---------------------------------
              var errorReadTmpShaFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
              var contextReadTmpShaFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
              var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4 : amGeneralContext.am_general.A_Context)
              {
                if (ctx4.isError())
                {
                  var hasNewPlaylist = false;
                  if (context != null)
                  {
                    error.setError(4892,"--> ERROR 4892: hasNewPlaylist: readTmpShaFile : [" + ctx4.getError().getErrMsg() + "]");
                    self._aActivityLogService._IActivityLogServiceMessaging
                    .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                      `4892: hasNewPlaylist: readTmpShaFile: ["${ctx3.getError().getErrMsg()}"]`, 
                      null, 
                      null, 
                      null
                    );

                    if (self._debug)
                    {                
                      document.getElementById("rend.message").innerHTML += "<p>ERROR 4892: hasNewPlaylist: readTmpShaFile : [" 
                                                                                                                    + ctx4.getError().getErrMsg() + "]";
                    }
                    context.setError(error);
                    context.setBoolResult(hasNewPlaylist);
                    return callback(context);  
                  }
                  return;  
                }
                //---------------------------------
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: readTmpShaFile...OK`, null, null, null);                                                                                   

                if (self._debug)
                {                
                  document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: readTmpShaFile...OK</p>";

                }
                var shaDownloadedFile = ctx4.getResult();
                var errorReadShaCrtDstFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
                var contextReadShaCrtDstFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                var callbackReadShaCrtDstFile = function callbackReadShaCrtDstFile(ctx5:amGeneralContext.am_general.A_Context)
                {
                  var hasNewPlaylist2 = false;
                  if (context != null)
                  {
                    if (ctx5.isError())
                    {
                      hasNewPlaylist2 = true;
                      context.setBoolResult(hasNewPlaylist2);
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: readCrtDstShaFile : no current playlist sha file...OK`, null, null, null);                                                                                   

                      if (self._debug)
                      {                
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: readCrtDstShaFile : no current playlist sha file...OK</p>";
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: TRUE</p>";

                      }
                    }else{
                      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: readCrtDstShaFile...OK`, null, null, null);                                                                                   

                      if (self._debug)
                      {                
                        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: readCrtDstShaFile...OK</p>";

                      }
                      var shaCrtFile =  ctx5.getResult();
                      var b1 = aPlaylistTransferFile.isTheSameShaValue(shaCrtFile, shaDownloadedFile);
                      var b2 = aPlaylistTransferFile.isTheSameShaValue(shaCrtFile, computeShaFile);
                      if (b2)
                      {
                        hasNewPlaylist2 = false;
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: FALSE`, null, null, null);                                                                                   

                        if (self._debug)
                        {                
                          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: FALSE</p>";

                        }
                      }else{
                        hasNewPlaylist2 = true;
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: TRUE`, null, null, null);                                                                                   

                        if (self._debug)
                        {    
                          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: TRUE</p>";

                        }
                      }
                    }  
                    context.setBoolResult(hasNewPlaylist2);
                    context.setError(error);
                    //context.setBoolResult(true);
                    return callback(context);  
                  }
                }
                //==================================================
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: readCrtDstShaFile...`, null, null, null);                                                                                   

                if (self._debug)
                {        
                  document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: readCrtDstShaFile...</p>";

                }
                contextReadShaCrtDstFile.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.readTextFile2(
                                                            aPlaylistShaCrtDstFile.getStorage(), aPlaylistShaCrtDstFile.getPath(), aPlaylistShaCrtDstFile.getName(), 
                                                            errorReadShaCrtDstFile, contextReadShaCrtDstFile, callbackReadShaCrtDstFile);    

              }
              //==================================================
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: readTmpShaFile...`, null, null, null);                                                                                   

              if (self._debug)
              {      
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: readTmpShaFile...</p>";

              }
              contextReadTmpShaFile.setRemoteCallback(true);
              self._aSDKService._iSDKFileSystem.readTextFile2(
                                                            aPlaylistShaTmpFile.getStorage(), aPlaylistShaTmpFile.getPath(), aPlaylistShaTmpFile.getName(), 
                                                            errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);    

            }
            //==================================================
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: computeFileSha....`, null, null, null);                                                                                   

            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: computeFileSha...</p>";

            }
            contextComputeSha.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties,
                                                              errorComputeSha, contextComputeSha, callbackComputeSha);    
          }  
          //==================================================
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: downloadPlaylistSha...`, null, null, null);                                                                                   

          if (self._debug)
          {  
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: downloadPlaylistSha...</p>";

          }
          contextDownloadPlaylistSha.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.downloadFile2( aPlaylistShaSrcFile.getFullName(), 
                                                            aPlaylistShaTmpFile.getStorage(), aPlaylistShaTmpFile.getPath(), aPlaylistShaTmpFile.getName(), 
                                                            errorDownloadPlaylistSha, contextDownloadPlaylistSha, callbackDownloadPlaylistSha);    
        }
        //==================================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: downloadPlaylist...`, null, null, null);                                                                                   

        if (self._debug)
        {
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: downloadPlaylist...</p>";

        }
        contextDownloadPlaylist.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.downloadFile2( aPlaylistSrcFile.getFullName(), 
                                                        aPlaylistTmpFile.getStorage(), aPlaylistTmpFile.getPath(), aPlaylistTmpFile.getName(), 
                                                        errorDownloadPlaylist, contextDownloadPlaylist, callbackDownloadPlaylist); 
      }    
      //==================================================
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist: test notExistsPlaylist..`, null, null, null);                                                                                   

      if (self._debug)
      {
        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: hasNewPlaylist: test notExistsPlaylist...</p>";

      }
      contextNotExistsPlaylist.setRemoteCallback(true);
      this._aSDKService._iSDKFileSystem.fileExists2( aPlaylistDstFile.getStorage(), aPlaylistDstFile.getPath(), aPlaylistDstFile.getName(), 
                                                     errorNotExistsPlaylist, contextNotExistsPlaylist, callbackNotExistsPlaylist); 
    }

    //-----------------------------------
    public cleanupCurrentHtmlTemplatesFiles( playlistType: string, 
                                             aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                             aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                             aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
       //--------------------------------------
       var self = this;
       //var aPlaylistTmpFolder   = aPlaylistTransferFile.getTmpFileInfo();
       //var aMediaFilesTmpFolder = aMediaFilesTransferFileBase.getTmpFileInfo();
       var aHtmlTemplatesTmpFolder = aHtmlTemplatesFilesTransferFileBase.getTmpFileInfo();

       var errorDeleteHtmlTemplatesTmpFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
       var contextDeleteHtmlTemplatesTmpFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
       var callbackDeleteHtmlTemplatesTmpFolder = function callbackDeleteHtmlTemplatesTmpFolder(ctx1 : amGeneralContext.am_general.A_Context)
       {
         var errorCreateHtmlTemplatesTmpFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
         var contextCreateHtmlTemplatesTmpFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
         var callbackCreateHtmlTemplatesTmpFolder = function callbackCreateHtmlTemplatesTmpFolder(ctx2 : amGeneralContext.am_general.A_Context)
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
         contextCreateHtmlTemplatesTmpFolder.setRemoteCallback(true);
           //document.getElementById("renderer.message").innerHTML += "<p>start cleanup media folder"</p>";
         self._aSDKService._iSDKFileSystem.createFolder2(aHtmlTemplatesTmpFolder.getStorage(), aHtmlTemplatesTmpFolder.getPath(), 
                                                         errorCreateHtmlTemplatesTmpFolder, contextCreateHtmlTemplatesTmpFolder, callbackCreateHtmlTemplatesTmpFolder) ; 
       }
       //=======================================
       contextDeleteHtmlTemplatesTmpFolder.setRemoteCallback(true);
         //document.getElementById("renderer.message").innerHTML += "<p>start cleanup media folder"</p>";
       self._aSDKService._iSDKFileSystem.deleteFolder2(aHtmlTemplatesTmpFolder.getStorage(), aHtmlTemplatesTmpFolder.getPath(), 
                                                       errorDeleteHtmlTemplatesTmpFolder, contextDeleteHtmlTemplatesTmpFolder, callbackDeleteHtmlTemplatesTmpFolder) ; 
    }


    //-----------------------------------
    public cleanupCurrentPlaylistAndMediaFiles( playlistType: string, 
                                                aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
       //--------------------------------------
       var self = this;
       var aPlaylistTmpFolder   = aPlaylistTransferFile.getTmpFileInfo();
       var aMediaFilesTmpFolder = aMediaFilesTransferFileBase.getTmpFileInfo();
       var errorDeleteMediaFilesTmpFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
       var contextDeleteMediaFilesTmpFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
       var callbackDeleteMediaFilesTmpFolder = function callbackDeleteMediaFilesTmpFolder(ctx1 : amGeneralContext.am_general.A_Context)
       {
         var errorCreateMediaFilesTmpFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
         var contextCreateMediaFilesTmpFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
         var callbackCreateMediaFilesTmpFolder = function callbackCreateMediaFilesTmpFolder(ctx2 : amGeneralContext.am_general.A_Context)
         {
            var errorCreateHtmlTemplatesTmpFolder:amGeneralError.am_general.A_Error        = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextCreateHtmlTemplatesTmpFolder:amGeneralContext.am_general.A_Context  = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackCreateHtmlTemplatesTmpFolder = function callbackCreateHtmlTemplatesTmpFolder(ctx3 : amGeneralContext.am_general.A_Context)
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
            contextCreateHtmlTemplatesTmpFolder.setRemoteCallback(true);
              //document.getElementById("renderer.message").innerHTML += "<p>start cleanup media folder"</p>";
            self.cleanupCurrentHtmlTemplatesFiles( playlistType, aPlaylistTransferFile, aMediaFilesTransferFileBase, aHtmlTemplatesFilesTransferFileBase,
                                                   errorCreateHtmlTemplatesTmpFolder, contextCreateHtmlTemplatesTmpFolder, callbackCreateHtmlTemplatesTmpFolder);

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
    }

    //-----------------------------------
    /*
    public cleanupCurrentPlaylistAndMediaFiles( playlistType: string, 
                                                aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                                aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                                aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
       //--------------------------------------
       var self = this;
       var aPlaylistTmpFolder   = aPlaylistTransferFile.getTmpFileInfo();
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
    }*/


    //-----------------------------------
    public downloadPlaylistAndMediaFiles( playlistType: string, 
                                          aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                          aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                          aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      //self._fileTransferList = new Array<amGeneralFileTransfer.am_general.AE_FileTransfer>();
      //----------------
      var errorDownloadPlaylist:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextDownloadPlaylist:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackDownloadPlaylist = function callbackDownloadPlaylist(ctxDownloadPlaylist)
      {
        //---------- if -- error downloading the new playlist -- stop on error
        var downloadPlaylistWell:boolean = ctxDownloadPlaylist.getBoolResult(downloadPlaylistWell);
        if (!downloadPlaylistWell) //ctxDownloadPlaylist.isError())
        {
          if (context != null)
          {
            if (self._debug)
            {
              document.getElementById("rend.message").innerHTML += "<p>ERROR 486: downloadPlaylistAndMediaFiles: DownloadPlaylist - Error while download the Playlist</p>";
            }
            error.setError(486,"<p>ERROR 486: downloadPlaylistAndMediaFiles: Download Playlist - Error while download the Playlist</p>");
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
              `486: downloadPlaylistAndMediaFiles: Download Playlist - Error while download the Playlist`, 
              null, null, null
            );
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);  
          }
          return;  
        }
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: DownloadPlaylist...OK`, null, null, null);                                                                                   

        if (self._debug)
        {
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: DownloadPlaylist...OK</p>";

        }
        //------------------------------------------------------------------------------------
        var errorBuild:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextBuild:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackBuild = function callbackBuild(ctxBuild)
        {    
          //---------- if -- error downloading the new playlist -- stop on error
          if (ctxDownloadPlaylist.isError())
          {
            if (context != null)
            {
              error.setError(487,"ERROR 487: downloadPlaylistAndMediaFiles - Error Building the Media Files List to Download: [" + errorBuild.getErrMsg() + "]");
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                `487: downloadPlaylistAndMediaFiles - Error Building the Media Files List to Download: [${errorBuild.getErrMsg()}]`, 
                null, 
                null, 
                null
              );
              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += 
                                       "ERROR 487: downloadPlaylistAndMediaFiles: - Error Building the Media Files List to Download: [" + errorBuild.getErrMsg() + "]";
              }    
              context.setError(error);
              context.setBoolResult(false);
              return callback(context);  
            }
            return;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...OK`, null, null, null);                                                                                   

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...OK</p>";

          }
          //----------- start download media files
          var errorDownloadMediaFiles:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownloadMediaFiles:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackDownloadMediaFiles = function callbackDownloadMediaFiles(ctxDownloadMediaFiles)
          {
            //---------- if -- error during the cleanup -- stop on error
            if (ctxDownloadMediaFiles.isError())
            {
              if (context != null)
              {
                error.setError(482,"ERROR 482: downloadPlaylistAndMediaFiles: downloadMediaFilesList: [" + errorDownloadMediaFiles.getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  `482: downloadPlaylistAndMediaFiles: downloadMediaFilesList: [${errorDownloadMediaFiles.getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
                if (self._debug)
                {    
                  document.getElementById("rend.message").innerHTML += "ERROR 482: downloadPlaylistAndMediaFiles: downloadMediaFilesList: [" + errorDownloadMediaFiles.getErrMsg() + "]";
                }    
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);  
              }
              return;  
            }
            //---------- succesfull download the media files list
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: downloadMediaFilesList...OK`, null, null, null);                                                                                   

            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadMediaFilesList...OK</p>";

            }
            //----------- start download html template file
            var errorBuildAndDownloadHtmlTemplatesFiles:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextBuildAndDownloadHtmlTemplatesFiles:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackBuilAndDownloadHtmlTemplatesFiles = function callbackBuilAndDownloadHtmlTemplatesFiles(ctxBuildAndDownloadHtmlTemplatesFiles)
            { 
               //---------- if -- error during the cleanup -- stop on error
               if (ctxBuildAndDownloadHtmlTemplatesFiles.isError())
               {
                 if (context != null)
                 {
                   error.setError(492,"ERROR 492: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + errorDownloadMediaFiles.getErrMsg() + "]");
                   self._aActivityLogService._IActivityLogServiceMessaging
                   .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                     `492: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [${errorDownloadMediaFiles.getErrMsg()}]`, 
                     null, 
                     null, 
                     null
                   );
                   
                   if (self._debug)
                   {    
                     document.getElementById("rend.message").innerHTML += "ERROR 492: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" 
                                                                                                                     + errorDownloadMediaFiles.getErrMsg() + "]";
                   }    
                   context.setError(error);
                   context.setBoolResult(false);
                   return callback(context);  
                }
                return;  
              }
              //---------- succesfull build and download thml templates files list
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...OK`, null, null, null);                                                                                   

              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...OK</p>";

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
            // buildAndDownloadHtmlTemplatesFiles
            //=====================================
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...`, null, null, null);                                                                                   

            if (self._debug)
            {        
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...</p>";

            }
            contextDownloadMediaFiles.setRemoteCallback(true); 
            self.buildAndDownloadHtmlTemplatesFilesList( playlistType, 
                                         aPlaylistTransferFile,
                                         aMediaFilesTransferFileBase,
                                         aHtmlTemplatesFilesTransferFileBase, 
                                         errorBuildAndDownloadHtmlTemplatesFiles, contextBuildAndDownloadHtmlTemplatesFiles, callbackBuilAndDownloadHtmlTemplatesFiles);            
          }  
          //====================================
          // downloadMediaFilesListToDownload
          //=====================================
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: downloadMediaFilesList...`, null, null, null);                                                                                   

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadMediaFilesList...</p>";

          }
          contextDownloadMediaFiles.setRemoteCallback(true); 
          self.downloadMediaFilesList( playlistType, 
                                       aPlaylistTransferFile,
                                       aMediaFilesTransferFileBase,
                                       aHtmlTemplatesFilesTransferFileBase,
                                       errorDownloadMediaFiles, contextDownloadMediaFiles, callbackDownloadMediaFiles);
        }  
        //====================================
        // buildMediaFilesListToDownload
        //=====================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...`, null, null, null);                                                                                   

        if (self._debug)
        {      
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...</p>";

        }
        contextBuild.setRemoteCallback(true); 
        self.buildMediaFilesListToDownload( playlistType, 
                               aPlaylistTransferFile,
                               aMediaFilesTransferFileBase,
                               aHtmlTemplatesFilesTransferFileBase,
                               errorBuild, contextBuild, callbackBuild);
      }
      //====================================
      // downloadPlaylist 
      //=====================================
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: downloadPlaylist...`, null, null, null);                                                                                   

      if (self._debug)
      {    
        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadPlaylist...</p>";

      }
      contextDownloadPlaylist.setRemoteCallback(true); 
      self.downloadPlaylist( playlistType, 
                           aPlaylistTransferFile,
                           aMediaFilesTransferFileBase,
                           aHtmlTemplatesFilesTransferFileBase,
                           errorDownloadPlaylist, contextDownloadPlaylist, callbackDownloadPlaylist);
    }

     
    //====================================================
    public downloadAll( playlistType: string, 
                        aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                        aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                        aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      var bHasNewPlaylist = false;
      var errorHasNewPlaylist:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextHasNewPlaylist:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackHasNewPlaylist = function callbackHasNewPlaylist(ctxHasNewPlaylist :amGeneralContext.am_general.A_Context)
      {
        //---------- if -- error testing have a new playlist -- stop on error
        if (ctxHasNewPlaylist.isError())
        {
          if (context != null)
          {
            error.setError(481,"ERROR 481: DownloadAll - Error while checking for a new playlist");
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
              `481: DownloadAll - Error while checking for a new playlist`, 
              null, null, null
            );
            
            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "<p>ERROR 481: DownloadAll - Error while checking for a new playlist</p>";
            }
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);  
          }
          return;  
        }
        //----------- not a new playlist - nothing to do ----
        bHasNewPlaylist = ctxHasNewPlaylist.getBoolResult();
        if (! bHasNewPlaylist)
        {
          if (context != null)
          {
            context.setError(error);
            context.setBoolResult(bHasNewPlaylist);
            return callback(context);  
          }
          return;  
        }
        //----------- a new playlist exists - cleanup the current playlist and its media files
        var errorCleanup:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextCleanup:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackCleanup = function callbackCleanup()
        {
          //---------- if -- error during the cleanup -- stop on error
          if (contextCleanup.isError())
          {
            if (context != null)
            {
              error.setError(482,"ERROR 482: DownloadAll - Error during the cleanup of the current playlist folders: [" + errorCleanup.getErrMsg() + "]");
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                `482: DownloadAll - Error during the cleanup of the current playlist folders: [${errorCleanup.getErrMsg()}]`, 
                null, 
                null, 
                null
              );
              
              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += 
                                  "<p>ERROR 482: DownloadAll - Error during the cleanup of the current playlist folders: [" + errorCleanup.getErrMsg() + "]</p>";
              }
              context.setError(error);
              context.setBoolResult(false);
              return callback(context);  
            }
            return;  
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`cleanupCurrentPlaylistAndMediaFiles...Ok`, null, null, null);                                                                                   

          if (self._debug)
          {
            document.getElementById("rend.message").innerHTML += "<p>cleanupCurrentPlaylistAndMediaFiles...Ok</p>";

          }
          //----------- download playlist and media files.
          var errorDownload:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownload:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackDownload = function callbackDownload(ctx1:amGeneralContext.am_general.A_Context)
          {
            //---------- if -- error during the download set on error
            var playlistDownloadWell = ctx1.getBoolResult();
            if (!playlistDownloadWell) //contextDownload.isError())
            {
              if (error != null)
              {
                error.setError(483,"ERROR 482: Download Playlist - Error during the download of the playlist and media files: [" + ctx1.getError().getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  `483: Download Playlist - Error during the download of the playlist and media files: [${ctx1.getError().getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>downloadPlaylistAndMediaFiles...ERROR: " + error.getErrMsg() + "</p>";
                }
              }else{
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles...Ok`, null, null, null);                                                                                   

                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>downloadPlaylistAndMediaFiles...Ok</p>";

                }
              }
              if (context != null)
              {
                context.setError(error);
                context.setBoolResult(playlistDownloadWell);//sucessfully downloaded the playlist
                if (context.isError())
                  context.setBoolResult(false);//error on downloaded playlist
                return callback(context);  
              }
            }
            //-------------------------------------------
            var errorMovePlaylistToDst:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextMovePlaylistToDst:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackMovePlaylistToDst = function callbackMovePlaylistToDst(ctxMove: amGeneralContext.am_general.A_Context)
            {
              
              var playlistMoveWell = contextDownload.getBoolResult();
              //---------- if -- error during the download set on error
              if (ctxMove.isError())
              {
                if (error != null)
                {
                  error.setError(483,"ERROR 482: Download Playlist - Error during the download of the playlist and media files: [" + errorDownload.getErrMsg() + "]");
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    `483: Download Playlist - Error during the download of the playlist and media files: [${errorDownload.getErrMsg()}]`, 
                    null, 
                    null, 
                    null
                  );
                }
                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>movePlaylistAndShaFileToDst...ERROR: " + error.getErrMsg() + "</p>";
                }
              }else{
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`movePlaylistAndShaFileToDst...OK`, null, null, null);                                                                                   

                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>movePlaylistAndShaFileToDst...OK</p>";

                }
              }
              if (context != null)
              {
                context.setError(error);
                context.setBoolResult(playlistMoveWell); //=hasNewPlaylist
                return callback(context);  
              }
            }
            //====================================
            // move playlist to its final location
            //=====================================
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`movePlaylistAndShaFileToDst...`, null, null, null);                                                                                   

            if (self._debug)
            {  
              document.getElementById("rend.message").innerHTML += "<p>movePlaylistAndShaFileToDst...</p>";

            }
            contextMovePlaylistToDst.setRemoteCallback(true); 
            self._aDownloadService._iDownloadMain.moveFileAndShaFile( aPlaylistTransferFile.getTmpFileInfo(), aPlaylistTransferFile.getComputedShaFileInfo(), //ma//aPlaylistTransferFile.getTmpShaFileInfo(), 
                                                                      aPlaylistTransferFile.getDstFileInfo(), aPlaylistTransferFile.getDstShaFileInfo(), 
                                                                      errorMovePlaylistToDst, contextMovePlaylistToDst, callbackMovePlaylistToDst);   
            //----------------------  end ---------------------------------------
          }
          //====================================
          // downloadCurrentPlaylistAndMediaFiles 
          //=====================================
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles...`, null, null, null);                                                                                   

          if (self._debug)
          {    
            document.getElementById("rend.message").innerHTML += "<p>downloadPlaylistAndMediaFiles...</p>";

          }
          contextDownload.setRemoteCallback(true); 
          self.downloadPlaylistAndMediaFiles( playlistType, 
                                              aPlaylistTransferFile,
                                              aMediaFilesTransferFileBase,
                                              aHtmlTemplatesFilesTransferFileBase,
                                              errorDownload, contextDownload, callbackDownload);    
        }
        //====================================
        // cleanupCurrentPlaylistAndMediaFiles 
        //=====================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`cleanupCurrentPlaylistAndMediaFiles...`, null, null, null);                                                                                   

        if (self._debug)
        {  
          document.getElementById("rend.message").innerHTML += "<p>cleanupCurrentPlaylistAndMediaFiles...</p>";

        }
        contextCleanup.setRemoteCallback(true); 
        self.cleanupCurrentPlaylistAndMediaFiles( playlistType, 
                                                  aPlaylistTransferFile,
                                                  aMediaFilesTransferFileBase,
                                                  aHtmlTemplatesFilesTransferFileBase,
                                                  errorCleanup, contextCleanup, callbackCleanup);  

      }
      //====================================
      // hasNewPlaylistAndMediaFiles 
      //=====================================
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist...`, null, null, null);                                                                                   

      if (self._debug)
      {  
        document.getElementById("rend.message").innerHTML += "<p>hasNewPlaylist...</p>";

      }
      contextHasNewPlaylist.setRemoteCallback(true); 
      self.hasNewPlaylist( playlistType, 
                           aPlaylistTransferFile,
                           aMediaFilesTransferFileBase,
                           aHtmlTemplatesFilesTransferFileBase,
                           errorHasNewPlaylist, contextHasNewPlaylist, callbackHasNewPlaylist);
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
    public createFoldersIfTheyNotExists( playlistType: string, 
                                         aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                         aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                         aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      var aPlaylistTmpFolder           = this._aPlaybackGlobalConfig._aPlaylistTemporaryFile;
      var aMediaFilesTmpFolder         = this._aPlaybackGlobalConfig._aMediaFilesTemporaryFolder;
      var aHtmlTemplatesFilesTmpFolder = this._aPlaybackGlobalConfig._aHtmlTemplatesFilesTemporaryFolder;

      var aPlaylistFolder              = this._aPlaybackGlobalConfig._aPlaylistFile;
      var aMediaFilesFolder            = this._aPlaybackGlobalConfig._aMediaFilesFolder;
      var aHtmlTemplatesFilesFolder    = this._aPlaybackGlobalConfig._aHtmlTemplatesFilesFolder;

      //---------------------------------------------
      var errorCreatePlaylistTmpFolder:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreatePlaylistTmpFolder:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreatePlaylistTmpFolder = function callbackCreatePlaylistTmpFolder()
      {
        var errorCreateMediaFilesTmpFolder:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextCreateMediaFilesTmpFolder:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackCreateMediaFilesTmpFolder = function callbackCreateMediaFilesTmpFolder()
        {
          var errorCreatePlaylistFolder:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextCreatePlaylistFolder:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackCreatePlaylistFolder = function callbackCreatePlaylistFolder()
          {
            var errorCreateMediaFilesFolder:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextCreateMediaFilesFolder:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackCreateMediaFilesFolder = function callbackCreateMediaFilesFolder()
            {
              var errorCreateHtmlTemplatesFilesTmpFolder:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
              var contextCreateHtmlTemplatesFilesTmpFolder:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
              var callbackCreateHtmlTemplatesFilesTmpFolder = function callbackCreateHtmlTemplatesFilesTmpFolder()
              {
                var errorCreateHtmlTemplatesFilesFolder:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
                var contextCreateHtmlTemplatesFilesFolder:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                var callbackCreateHtmlTemplatesFilesFolder = function callbackCreateHtmlTemplatesFilesFolder()
                {
                  //======================= exit
                  if (context != null)
                  {
                    return callback(context);  
                  }   
                }
                //==============================================
                contextCreateHtmlTemplatesFilesFolder.setRemoteCallback(true);
                self._aSDKService._iSDKFileSystem.createFolder2(aHtmlTemplatesFilesFolder.getStorage(), aHtmlTemplatesFilesFolder.getPath(), 
                                      errorCreateHtmlTemplatesFilesFolder, contextCreateHtmlTemplatesFilesFolder, callbackCreateHtmlTemplatesFilesFolder); 

              } 
              //==============================================
              contextCreateHtmlTemplatesFilesTmpFolder.setRemoteCallback(true);
              self._aSDKService._iSDKFileSystem.createFolder2(aHtmlTemplatesFilesTmpFolder.getStorage(), aHtmlTemplatesFilesTmpFolder.getPath(), 
                                      errorCreateHtmlTemplatesFilesTmpFolder, contextCreateHtmlTemplatesFilesTmpFolder, callbackCreateHtmlTemplatesFilesTmpFolder); 

            }    
            //==============================================
            contextCreateMediaFilesFolder.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.createFolder2(aMediaFilesFolder.getStorage(), aMediaFilesFolder.getPath(), 
                                                             errorCreateMediaFilesFolder, contextCreateMediaFilesFolder, callbackCreateMediaFilesFolder); 
          }
          //==============================================
          contextCreatePlaylistFolder.setRemoteCallback(true);
          //document.getElementById("renderer.message").innerHTML += "<p>create playlist temprorary folder"</p>";
          self._aSDKService._iSDKFileSystem.createFolder2(aPlaylistFolder.getStorage(), aPlaylistFolder.getPath(), 
                                                          errorCreatePlaylistFolder, contextCreatePlaylistTmpFolder, callbackCreatePlaylistFolder); 
        }
        //==============================================
        contextCreateMediaFilesTmpFolder.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.createFolder2(aMediaFilesTmpFolder.getStorage(), aMediaFilesTmpFolder.getPath(), 
                                                        errorCreateMediaFilesTmpFolder, contextCreateMediaFilesTmpFolder, callbackCreateMediaFilesTmpFolder); 
       }
       //==============================================
       contextCreatePlaylistTmpFolder.setRemoteCallback(true);
       //document.getElementById("renderer.message").innerHTML += "<p>create playlist temprorary folder"</p>";
       self._aSDKService._iSDKFileSystem.createFolder2(aPlaylistTmpFolder.getStorage(), aPlaylistTmpFolder.getPath(), 
                                                       errorCreatePlaylistTmpFolder, contextCreatePlaylistTmpFolder, callbackCreatePlaylistTmpFolder); 
    }

    //====================================================
    public download(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`Download Playlist: Start download ....`, null, null, null);                                                                                   

      if (self._debug)
      {  
        document.getElementById("rend.message").innerHTML += "<p>Download Html Template Feeds: Start download ....</p>";

      }
      var playlistType: string        = this._aPlaybackGlobalConfig._playlist_type;
      var bEncryptedPlaylist: boolean = false;
      var aPlaylistTransfer  : amGeneralFileTransfer.am_general.AE_FileTransfer =  this._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
      var aMediaFilesTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer =  this._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
      var aHtmlTemplatesFilesTransfer: amGeneralFileTransfer.am_general.AE_FileTransfer =  this._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
      if (! bEncryptedPlaylist)
      {
        aPlaylistTransfer.setSrcFileInfo(this._aPlaybackGlobalConfig._aPlaylistRemoteFile)
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

      }else{
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
        self.downloadAll_new( playlistType, aPlaylistTransfer, aMediaFilesTransfer, aHtmlTemplatesFilesTransfer, 
                          error, context, callbackDownloadAll);
      }
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`createFoldersIfTheyNotExists....`, null, null, null);                                                                                   

      if (self._debug)
      {
        document.getElementById("rend.message").innerHTML += "<p>createFoldersIfTheyNotExists....</p>";

      }
      self.createFoldersIfTheyNotExists(playlistType, aPlaylistTransfer, aMediaFilesTransfer, aHtmlTemplatesFilesTransfer,
                                        errorCreateFolders, contextCreateFolders, callbackCreateFolders);
      
    }
  

    //========================================================
    //  html template new version 
    //========================================================


    //-----------------------------------
    public downloadPlaylistAndMediaFiles_new( playlistType: string, 
                                          aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                          aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                          aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      //self._fileTransferList = new Array<amGeneralFileTransfer.am_general.AE_FileTransfer>();
      //----------------
      var errorDownloadPlaylist:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextDownloadPlaylist:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackDownloadPlaylist = function callbackDownloadPlaylist(ctxDownloadPlaylist)
      {
        //---------- if -- error downloading the new playlist -- stop on error
        var downloadPlaylistWell:boolean = ctxDownloadPlaylist.getBoolResult(downloadPlaylistWell);
        if (!downloadPlaylistWell) //ctxDownloadPlaylist.isError())
        {
          if (context != null)
          {
            if (self._debug)
            {
              document.getElementById("rend.message").innerHTML += "<p>ERROR 486: downloadPlaylistAndMediaFiles: DownloadPlaylist - Error while download the Playlist</p>";
            }
            error.setError(486,"<p>ERROR 486: downloadPlaylistAndMediaFiles: Download Playlist - Error while download the Playlist</p>");
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
              `486: downloadPlaylistAndMediaFiles: Download Playlist - Error while download the Playlist`, 
              null, null, null
            );
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);  
          }
          return;  
        }
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: DownloadPlaylist...OK`, null, null, null);                                                                                   

        if (self._debug)
        {
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: DownloadPlaylist...OK</p>";

        }
        //------------------------------------------------------------------------------------
        var errorBuild:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextBuild:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackBuild = function callbackBuild(ctxBuild)
        {    
          //---------- if -- error downloading the new playlist -- stop on error
          if (ctxDownloadPlaylist.isError())
          {
            if (context != null)
            {
              error.setError(487,"ERROR 487: downloadPlaylistAndMediaFiles - Error Building the Media Files List to Download: [" + errorBuild.getErrMsg() + "]");
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                `487: downloadPlaylistAndMediaFiles - Error Building the Media Files List to Download: [${errorBuild.getErrMsg()}]`, 
                null, 
                null, 
                null
              );
              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += 
                                       "ERROR 487: downloadPlaylistAndMediaFiles: - Error Building the Media Files List to Download: [" + errorBuild.getErrMsg() + "]";
              }    
              context.setError(error);
              context.setBoolResult(false);
              return callback(context);  
            }
            return;
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...OK`, null, null, null);                                                                                   

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...OK</p>";

          }
          //----------- start download media files
          var errorDownloadMediaFiles:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownloadMediaFiles:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackDownloadMediaFiles = function callbackDownloadMediaFiles(ctxDownloadMediaFiles)
          {
            /*
            //---------- if -- error during the cleanup -- stop on error
            if (ctxDownloadMediaFiles.isError())
            {
              if (context != null)
              {
                error.setError(482,"ERROR 482: downloadPlaylistAndMediaFiles: downloadMediaFilesList: [" + errorDownloadMediaFiles.getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  `482: downloadPlaylistAndMediaFiles: downloadMediaFilesList: [${errorDownloadMediaFiles.getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
                if (self._debug)
                {    
                  document.getElementById("rend.message").innerHTML += "ERROR 482: downloadPlaylistAndMediaFiles: downloadMediaFilesList: [" + errorDownloadMediaFiles.getErrMsg() + "]";
                }    
                context.setError(error);
                context.setBoolResult(false);
                return callback(context);  
              }
              return;  
            }
            //---------- succesfull download the media files list
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: downloadMediaFilesList...OK`, null, null, null);                                                                                   

            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadMediaFilesList...OK</p>";

            }*/
            //----------- start download html template file
            var errorBuildAndDownloadHtmlTemplatesFiles:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextBuildAndDownloadHtmlTemplatesFiles:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackBuilAndDownloadHtmlTemplatesFiles = function callbackBuilAndDownloadHtmlTemplatesFiles(ctxBuildAndDownloadHtmlTemplatesFiles)
            { 
               //---------- if -- error during the cleanup -- stop on error
               if (ctxBuildAndDownloadHtmlTemplatesFiles.isError())
               {
                 if (context != null)
                 {
                   error.setError(492,"ERROR 492: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" + errorDownloadMediaFiles.getErrMsg() + "]");
                   self._aActivityLogService._IActivityLogServiceMessaging
                   .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                     `492: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [${errorDownloadMediaFiles.getErrMsg()}]`, 
                     null, 
                     null, 
                     null
                   );
                   
                   if (self._debug)
                   {    
                     document.getElementById("rend.message").innerHTML += "ERROR 492: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles: [" 
                                                                                                                     + errorDownloadMediaFiles.getErrMsg() + "]";
                   }    
                   context.setError(error);
                   context.setBoolResult(false);
                   return callback(context);  
                }
                return;  
              }
              //---------- succesfull build and download html templates files list
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...OK`, null, null, null);                                                                                   

              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...OK</p>";

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
            // buildAndDownloadHtmlTemplatesFiles
            //=====================================
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...`, null, null, null);                                                                                   

            if (self._debug)
            {        
              document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildAndDownloadHtmlTemplatesFiles...</p>";

            }
            contextDownloadMediaFiles.setRemoteCallback(true); 
            self.buildAndDownloadHtmlTemplatesFilesList( playlistType, 
                                         aPlaylistTransferFile,
                                         aMediaFilesTransferFileBase,
                                         aHtmlTemplatesFilesTransferFileBase, 
                                         errorBuildAndDownloadHtmlTemplatesFiles, contextBuildAndDownloadHtmlTemplatesFiles, callbackBuilAndDownloadHtmlTemplatesFiles);            
          }  
          //====================================
          // downloadMediaFilesListToDownload
          //=====================================
          /*
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: downloadMediaFilesList...`, null, null, null);                                                                                   

          if (self._debug)
          {        
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadMediaFilesList...</p>";

          }*/
          contextDownloadMediaFiles.setRemoteCallback(true); 
          contextDownloadMediaFiles.setRemoteCallback(true); 
          contextDownloadMediaFiles.setBoolResult(true); 
          contextDownloadMediaFiles.setError(errorDownloadMediaFiles);
          callbackDownloadMediaFiles(contextDownloadMediaFiles);
          /*
          self.downloadMediaFilesList( playlistType, 
                                       aPlaylistTransferFile,
                                       aMediaFilesTransferFileBase,
                                       aHtmlTemplatesFilesTransferFileBase,
                                       errorDownloadMediaFiles, contextDownloadMediaFiles, callbackDownloadMediaFiles);
          */
        }  
        //====================================
        // buildMediaFilesListToDownload
        //=====================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...`, null, null, null);                                                                                   

        if (self._debug)
        {      
          document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: buildMediaFilesListToDownload...</p>";

        }
        contextBuild.setRemoteCallback(true); 
        self.buildMediaFilesListToDownload( playlistType, 
                               aPlaylistTransferFile,
                               aMediaFilesTransferFileBase,
                               aHtmlTemplatesFilesTransferFileBase,
                               errorBuild, contextBuild, callbackBuild);
      }
      //====================================
      // downloadPlaylist 
      //=====================================
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles: downloadPlaylist...`, null, null, null);                                                                                   

      if (self._debug)
      {    
        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: downloadPlaylistAndMediaFiles: downloadPlaylist...</p>";

      }
      contextDownloadPlaylist.setRemoteCallback(true); 
      self.downloadPlaylist( playlistType, 
                           aPlaylistTransferFile,
                           aMediaFilesTransferFileBase,
                           aHtmlTemplatesFilesTransferFileBase,
                           errorDownloadPlaylist, contextDownloadPlaylist, callbackDownloadPlaylist);
    }



    //====================================================
    public downloadAll_new( playlistType: string, 
                        aPlaylistTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                        aMediaFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                        aHtmlTemplatesFilesTransferFileBase: amGeneralFileTransfer.am_general.AE_FileTransfer,
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
      var self = this;
      var bHasNewPlaylist = false;
      var errorHasNewPlaylist:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextHasNewPlaylist:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackHasNewPlaylist = function callbackHasNewPlaylist(ctxHasNewPlaylist :amGeneralContext.am_general.A_Context)
      {
        /*
        //---------- if -- error testing have a new playlist -- stop on error
        if (ctxHasNewPlaylist.isError())
        {
          if (context != null)
          {
            error.setError(481,"ERROR 481: DownloadAll - Error while checking for a new playlist");
            self._aActivityLogService._IActivityLogServiceMessaging
            .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
              `481: DownloadAll - Error while checking for a new playlist`, 
              null, null, null
            );
            
            if (self._debug)
            {    
              document.getElementById("rend.message").innerHTML += "<p>ERROR 481: DownloadAll - Error while checking for a new playlist</p>";
            }
            context.setError(error);
            context.setBoolResult(false);
            return callback(context);  
          }
          return;  
        }
        //----------- not a new playlist - nothing to do ----
        bHasNewPlaylist = ctxHasNewPlaylist.getBoolResult();
        if (! bHasNewPlaylist)
        {
          if (context != null)
          {
            context.setError(error);
            context.setBoolResult(bHasNewPlaylist);
            return callback(context);  
          }
          return;  
        }*/
        //----------- a new playlist exists - cleanup the current playlist and its media files
        var errorCleanup:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextCleanup:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackCleanup = function callbackCleanup()
        {
          //---------- if -- error during the cleanup -- stop on error
          if (contextCleanup.isError())
          {
            if (context != null)
            {
              error.setError(482,"ERROR 482: DownloadAll - Error during the cleanup of the current playlist folders: [" + errorCleanup.getErrMsg() + "]");
              self._aActivityLogService._IActivityLogServiceMessaging
              .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                `482: DownloadAll - Error during the cleanup of the current playlist folders: [${errorCleanup.getErrMsg()}]`, 
                null, 
                null, 
                null
              );
              
              if (self._debug)
              {    
                document.getElementById("rend.message").innerHTML += 
                                  "<p>ERROR 482: DownloadAll - Error during the cleanup of the current playlist folders: [" + errorCleanup.getErrMsg() + "]</p>";
              }
              context.setError(error);
              context.setBoolResult(false);
              return callback(context);  
            }
            return;  
          }
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`cleanupCurrentPlaylistAndMediaFiles...Ok`, null, null, null);                                                                                   

          if (self._debug)
          {
            document.getElementById("rend.message").innerHTML += "<p>cleanupCurrentPlaylistAndMediaFiles...Ok</p>";

          }
          //----------- download playlist and media files.
          var errorDownload:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownload:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackDownload = function callbackDownload(ctx1:amGeneralContext.am_general.A_Context)
          {
            //---------- if -- error during the download set on error
            var playlistDownloadWell = ctx1.getBoolResult();
            if (!playlistDownloadWell) //contextDownload.isError())
            {
              if (error != null)
              {
                error.setError(483,"ERROR 482: Download Playlist - Error during the download of the playlist and media files: [" + ctx1.getError().getErrMsg() + "]");
                self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                  `483: Download Playlist - Error during the download of the playlist and media files: [${ctx1.getError().getErrMsg()}]`, 
                  null, 
                  null, 
                  null
                );
                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>downloadPlaylistAndMediaFiles...ERROR: " + error.getErrMsg() + "</p>";
                }
              }else{
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles...Ok`, null, null, null);                                                                                   

                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>downloadPlaylistAndMediaFiles...Ok</p>";

                }
              }
              if (context != null)
              {
                context.setError(error);
                context.setBoolResult(playlistDownloadWell);//sucessfully downloaded the playlist
                if (context.isError())
                  context.setBoolResult(false);//error on downloaded playlist
                return callback(context);  
              }
            }
            //-------------------------------------------
            var errorMovePlaylistToDst:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextMovePlaylistToDst:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var callbackMovePlaylistToDst = function callbackMovePlaylistToDst(ctxMove: amGeneralContext.am_general.A_Context)
            {
              
              var playlistMoveWell = contextDownload.getBoolResult();
              /*
              //---------- if -- error during the download set on error
              if (ctxMove.isError())
              {
                if (error != null)
                {
                  error.setError(483,"ERROR 482: Download Playlist - Error during the download of the playlist and media files: [" + errorDownload.getErrMsg() + "]");
                  self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,self.getServiceName(),
                    `483: Download Playlist - Error during the download of the playlist and media files: [${errorDownload.getErrMsg()}]`, 
                    null, 
                    null, 
                    null
                  );
                }
                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>movePlaylistAndShaFileToDst...ERROR: " + error.getErrMsg() + "</p>";
                }
              }else{
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`movePlaylistAndShaFileToDst...OK`, null, null, null);                                                                                   

                if (self._debug)
                { 
                  document.getElementById("rend.message").innerHTML += "<p>movePlaylistAndShaFileToDst...OK</p>";

                }
              }*/
              if (context != null)
              {
                context.setError(error);
                context.setBoolResult(playlistMoveWell); //=hasNewPlaylist
                return callback(context);  
              }
            }
            //====================================
            // move playlist to its final location
            //=====================================
            /*
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`movePlaylistAndShaFileToDst...`, null, null, null);                                                                                   

            if (self._debug)
            {  
              document.getElementById("rend.message").innerHTML += "<p>movePlaylistAndShaFileToDst...</p>";

            }*/
            contextMovePlaylistToDst.setRemoteCallback(true); 
            contextMovePlaylistToDst.setBoolResult(true); 
            contextMovePlaylistToDst.setError(errorMovePlaylistToDst);
            callbackMovePlaylistToDst(contextMovePlaylistToDst);
            /*
            self._aDownloadService._iDownloadMain.moveFileAndShaFile( aPlaylistTransferFile.getTmpFileInfo(), aPlaylistTransferFile.getComputedShaFileInfo(), //ma//aPlaylistTransferFile.getTmpShaFileInfo(), 
                                                                      aPlaylistTransferFile.getDstFileInfo(), aPlaylistTransferFile.getDstShaFileInfo(), 
                                                                      errorMovePlaylistToDst, contextMovePlaylistToDst, callbackMovePlaylistToDst);   
            */
            //----------------------  end ---------------------------------------
          }
          //====================================
          // downloadCurrentPlaylistAndMediaFiles 
          //=====================================
          /*
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`downloadPlaylistAndMediaFiles...`, null, null, null);                                                                                   

          if (self._debug)
          {    
            document.getElementById("rend.message").innerHTML += "<p>downloadPlaylistAndMediaFiles...</p>";

          }*/
          contextDownload.setRemoteCallback(true); 
          self.downloadPlaylistAndMediaFiles_new( playlistType, 
                                              aPlaylistTransferFile,
                                              aMediaFilesTransferFileBase,
                                              aHtmlTemplatesFilesTransferFileBase,
                                              errorDownload, contextDownload, callbackDownload);    
        }
        //====================================
        // cleanupCurrentPlaylistAndMediaFiles 
        //=====================================
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`cleanupCurrentPlaylistAndMediaFiles...`, null, null, null);                                                                                   

        if (self._debug)
        {  
          document.getElementById("rend.message").innerHTML += "<p>cleanupCurrentPlaylistAndMediaFiles...</p>";

        }
        contextCleanup.setRemoteCallback(true); 
        self.cleanupCurrentPlaylistAndMediaFiles( playlistType, 
                                                  aPlaylistTransferFile,
                                                  aMediaFilesTransferFileBase,
                                                  aHtmlTemplatesFilesTransferFileBase,
                                                  errorCleanup, contextCleanup, callbackCleanup);  

      }
      //====================================
      // hasNewPlaylistAndMediaFiles 
      //=====================================
      /*
      self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info,self.getServiceName(),`hasNewPlaylist...`, null, null, null);                                                                                   

      if (self._debug)
      {  
        document.getElementById("rend.message").innerHTML += "<p>hasNewPlaylist...</p>";

      }*/
      contextHasNewPlaylist.setRemoteCallback(true); 
      contextHasNewPlaylist.setBoolResult(true); 
      contextHasNewPlaylist.setError(errorHasNewPlaylist);
      callbackHasNewPlaylist(contextHasNewPlaylist);
      /*
      self.hasNewPlaylist( playlistType, 
                           aPlaylistTransferFile,
                           aMediaFilesTransferFileBase,
                           aHtmlTemplatesFilesTransferFileBase,
                           errorHasNewPlaylist, contextHasNewPlaylist, callbackHasNewPlaylist);
      */
    }

    //=================================================
    //  run interface
    //=================================================


    //---------------------------------------------------------
    public setInterruptCallback(interruptCallback) : void
    {
      this._interruptCallback = interruptCallback;
      if (this._aDownloadService != null)
        this._aDownloadService._iServiceRun.setInterruptCallback(interruptCallback);

    }

    //-----------------------------------------------------
    public run(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var self = this;
      self._iServiceRun.setServiceStatus("status_all");
      //self._iServiceRun.setServiceStatus("status_playlist_changed");
      var callbackHtmlTemplateDownload = function callbackHtmlTemplateDownload()
      {
          //--------------------------------- 
          if (self._interruptCallback != null)
          {
            return self._interruptCallback();
          }
          //====================== Ok
          if (callback != null)
          {
            context.setObject2Result(self);
            return callback(context) ;
          }
          return; 
      }
      //================
      if (self._aPlaybackGlobalConfig._strSerialNumber == "local")
        return callbackHtmlTemplateDownload();
      self._iHtmlTemplateDownloaderMain.download(error, context, callbackHtmlTemplateDownload);
    }


    //-----------------------------
    public shutdown(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      //console.log(this._iService.getServiceName() + " instance: " + this._iService.getInstanceName() + "  - shutdown by interruption");
      //------------------ end 
      if (callback != null)
      {
        //context.setError(error);
        //context.setBoolResult(true);
        return callback(context);  
      }
    }

  }
}   

  