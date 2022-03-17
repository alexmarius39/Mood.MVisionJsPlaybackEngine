import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amTransversalServicesDownloadService    = require("../../../../../app/ts/abstract/am_transversalservices/as_downloadservice/AS_DownloadService");
import amGeneralFileInfo                       = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amGeneralFileTransfer                   = require("../../../../../app/ts/abstract/am_general/ae_filetransfer/AE_FileTransfer");
import amGeneralShaProperties                  = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");
import amGeneralContext                        = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralService                        = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amTransversalServicesIDownloadMain   = require("../../../../../app/ts/abstract/am_transversalservices/as_downloadservice/I_DownloadMain");
import amTransversalServicesIDownloadConfig = require("../../../../../app/ts/abstract/am_transversalservices/as_downloadservice/I_DownloadConfig");

import rmGeneral               = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");


import amTransversalServicesSDK         = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amTransversalServicesUtilsService        = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");

import rmTransversalServicesILogMain    = require("../../../../../app/ts/reusable/rm_transversalservices/rs_downloadservice/IImpl_DownloadMain_R");
import rmTransversalServicesILogConfig  = require("../../../../../app/ts/reusable/rm_transversalservices/rs_downloadservice/IImpl_DownloadConfig_R");

export module rm_transversalservices
{
  export class RS_DownloadService  extends rmGeneral.rm_general.R_Service 
                                   implements amTransversalServicesDownloadService.am_transversalservices.AS_DownloadService
  {

    //---------- properties
    //_fileInfo    : amGeneralFileInfo.am_general.A_FileInfo;
    //_fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo; 

    //---------- interfaces
    _iDownloadMain   : amTransversalServicesIDownloadMain.am_transversalservices.I_DownloadMain ;
    _iDownloadConfig : amTransversalServicesIDownloadConfig.am_transversalservices.I_DownloadConfig ;

    //----------- composants 
    _aTargetSDK : amTransversalServicesSDK.am_transversalservices.A_SDK_JsTV; 
    _aUtilsService : amTransversalServicesUtilsService.am_transversalservices.A_UtilsService;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {  
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      //this._fileInfo    = null;
      //this._fileUrlInfo = null;

      this._aTargetSDK = null;
      this._aUtilsService = null;
      
      this._iDownloadMain    = new rmTransversalServicesILogMain.rm_transversalservices.IImpl_DownloadMain_R(this) ;
      this._iDownloadConfig  = new rmTransversalServicesILogConfig.rm_transversalservices.IImpl_DownloadConfig_R(this) ;

      this._aLogService = aLogService;
    }

    //----------------
    public log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var message;
      var callback2 = function callback2(ctx)
      {
        ctx.setResult(message);
        if (callback != null)
          callback (ctx);
      } 
      //this._aTargetSDK._iSDKFileSystem.appendTextToFile(this._fileInfo.getStorage(), this._fileInfo.getPath(), this._fileInfo.getName(), 
        //                                                message, error, context, callback2) ;
    }


    //-----------------------------------------
    public setTargetService(targetService: amGeneralService.am_general.A_Service)
    {
      this._aTargetSDK = <amTransversalServicesSDK.am_transversalservices.A_SDK_JsTV>targetService;
    }
    
    //-------------------------------------------------                  
    public moveFileAndShaFile( aSrcFile: amGeneralFileInfo.am_general.A_FileInfo, aSrcShaFile: amGeneralFileInfo.am_general.A_FileInfo, 
                               aDstFile: amGeneralFileInfo.am_general.A_FileInfo, aDstShaFile: amGeneralFileInfo.am_general.A_FileInfo,
                               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      var moveFilesWell = false;
      //---------------------------------
      var errorMoveFileToDst:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextMoveFileToDst:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackMoveFileToDst = function callbackMoveTmpFileToDst(ctx5 : amGeneralContext.am_general.A_Context)
      {
        if (ctx5.isError())
        {
          moveFilesWell = false;
          if (error != null)
            error.setError(11601,"Move File: Cannot move file from to the destination [" + ctx5.getError().getErrMsg() + "]");
          context.setBoolResult(moveFilesWell)
          context.setError(error);
          return callback(context); 
        }
        //------------------------------------------------
        var errorMoveShaFileToDst:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextMoveShaFileToDst:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackMoveShaFileToDst = function callbackMoveShaTmpFileToDst(ctx6 : amGeneralContext.am_general.A_Context)
        {
          moveFilesWell = true;
          if (ctx6.isError())
          {
            moveFilesWell = false;
            if (error != null)
              error.setError(11502,"Download File: Cannot move sha file to the destination [" + ctx6.getError().getErrMsg() + "]");
          } 
          context.setBoolResult(moveFilesWell)
          context.setError(error);
          return callback(context);                 
        }  
        //=======================================================
        contextMoveShaFileToDst.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.moveFile2( aSrcShaFile.getStorage(), aSrcShaFile.getPath(), aSrcShaFile.getName(), 
                                                       aDstShaFile.getStorage(), aDstShaFile.getPath(), aDstShaFile.getName(), 
                                                       errorMoveShaFileToDst, contextMoveShaFileToDst, callbackMoveShaFileToDst);      
        //self._aSDKService._iSDKFileSystem.copyFile2( aSrcShaFile.getStorage(), aSrcShaFile.getPath(), aSrcShaFile.getName(), 
         //                                            aDstShaFile.getStorage(), aDstShaFile.getPath(), aDstShaFile.getName(), 
         //                                            errorMoveShaFileToDst, contextMoveShaFileToDst, callbackMoveShaFileToDst);        

      }      
      //=======================================================
      contextMoveFileToDst.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.moveFile2(  aSrcFile.getStorage(), aSrcFile.getPath(), aSrcFile.getName(), 
                                                    aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                                                    errorMoveFileToDst, contextMoveFileToDst, callbackMoveFileToDst);      
      //self._aSDKService._iSDKFileSystem.copyFile2(  aSrcFile.getStorage(), aSrcFile.getPath(), aSrcFile.getName(), 
      //                                              aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
      //                                              errorMoveFileToDst, contextMoveFileToDst, callbackMoveFileToDst);        
  
    }


    //-------------------------------------------------                  
    public checkFileIfAlreadyDownloaded( aTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      var aSrcFile            = aTransferFile.getSrcFileInfo();
      var aTmpFile            = aTransferFile.getTmpFileInfo();
      var aShaSrcFile         = aTransferFile.getSrcShaFileInfo();
      var aShaTmpFile         = aTransferFile.getTmpShaFileInfo();
      var aShaCrtDstFile      = aTransferFile.getDstShaFileInfo();
      var aComputedShaTmpFile = aTransferFile.getComputedShaFileInfo();
      //==
      var errorDownloadFileSha:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextDownloadFileSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackDownloadFileSha = function callbackDownloadFileSha(ctx2)
      {
        var errorReadTmpShaFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextReadTmpShaFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4 : amGeneralContext.am_general.A_Context)
        {
          var shaDownloadedFile = ctx4.getResult();
          var errorReadShaCrtDstFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextReadShaCrtDstFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          var callbackReadShaCrtDstFile = function callbackReadShaCrtDstFile(ctx5: amGeneralContext.am_general.A_Context)
          {
            var hasSameShaFile = false;
            if (context != null)
            {
              if (ctx5.isError())
              {
                hasSameShaFile = false;
                context.setBoolResult(hasSameShaFile);
              }else{
                var shaCrtFile =  ctx5.getResult();
                hasSameShaFile = false;
                if (aTransferFile.isTheSameShaValue(shaCrtFile, shaDownloadedFile))
                  hasSameShaFile = true;
                context.setBoolResult(hasSameShaFile);
              }  
              context.setError(error);
              //context.setBoolResult(true);
              return callback(context);  
            }
          }
          //==================================================
          //document.getElementById("rend.message").innerHTML += "<p>read current sha file"</p>";
          contextReadShaCrtDstFile.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.readTextFile2( aShaCrtDstFile.getStorage(), aShaCrtDstFile.getPath(), aShaCrtDstFile.getName(), 
                                                           errorReadShaCrtDstFile, contextReadShaCrtDstFile, callbackReadShaCrtDstFile);    
        }
        //==================================================
        //document.getElementById("rend.message").innerHTML += "<p>read tmp sha file"</p>";
        contextReadTmpShaFile.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.readTextFile2(
                                                        aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                                        errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);    
      }  
      //==================================================
      //document.getElementById("rend.message").innerHTML += "<p>start download sha file as temp sha file"</p>";
      contextDownloadFileSha.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.downloadFile2( aShaSrcFile.getFullName(), 
                                                       aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                                       errorDownloadFileSha, contextDownloadFileSha, callbackDownloadFileSha);    
    }



    //-------------------------------------------------                  
    public createTmpAndDstFoldersIfNeeded( aTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      //var aSrcFile          = aTransferFile.getSrcFileInfo();
      var aTmpFile            = aTransferFile.getTmpFileInfo();
      var aDstFile            = aTransferFile.getDstFileInfo();
      //var aShaSrcFile       = aTransferFile.getSrcShaFileInfo();
      var aShaTmpFile         = aTransferFile.getTmpShaFileInfo();
      var aShaDstFile         = aTransferFile.getDstShaFileInfo();
      //-----------------------
      var errorCreateTmpFolder:amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateTmpFolder:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateTmpFolder = function callbackCreateTmpFolder()
      {
        //-----------------------
        var errorCreateDstFolder:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextCreateDstFolder:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackCreateDstFolder = function callbackCreateDstFolder()
        {
          //======================= exit sha folders are the same with src/tmp/dst folders
          if (context != null)
          {
            return callback(context);  
          }   
        }  
        //==============================================
        contextCreateDstFolder.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.createFolder2(aDstFile.getStorage(), aDstFile.getPath(), 
                                                      errorCreateDstFolder, contextCreateDstFolder, callbackCreateDstFolder); 

      }
      //==============================================
      contextCreateTmpFolder.setRemoteCallback(true);
      self._aSDKService._iSDKFileSystem.createFolder2(aTmpFile.getStorage(), aTmpFile.getPath(), 
                                                      errorCreateTmpFolder, contextCreateTmpFolder, callbackCreateTmpFolder); 
  
    }

    //-------------------------------------------------                  
    public downloadFile_withNoShaCheck( aTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      var aSrcFile            = aTransferFile.getSrcFileInfo();
      var aTmpFile            = aTransferFile.getTmpFileInfo();
      var aDstFile            = aTransferFile.getDstFileInfo();
      var aShaSrcFile         = aTransferFile.getSrcShaFileInfo();
      var aShaTmpFile         = aTransferFile.getTmpShaFileInfo();
      var aShaDstFile         = aTransferFile.getDstShaFileInfo();
      //var aShaCrtDstFile      = aTransferFile.getDstShaFileInfo();
      var aComputedShaTmpFile = aTransferFile.getComputedShaFileInfo();

      var bCopyFile = aTransferFile.getCopyFile();
      var bCopyFileIfExists = aTransferFile.getCopyFileIfExists();

      var errorCreateTmpAndDstFolders:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateTmpAndDstFolders:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateTmpAndDstFolders = function callbackCreateTmpAndDstFolders(ctx1:amGeneralContext.am_general.A_Context)
      {
        var errorFileExists:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextFileExists:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  

        var errorDownloadFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextDownloadFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackDownloadFile = function callbackDownloadFile(ctx1:amGeneralContext.am_general.A_Context)
        {
          //==
          var errorDownloadFileSha:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownloadFileSha:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          if (ctx1.isError())
          {
            //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
            if (error != null)
              error.setError(11506,"Download File: Cannot download The src file from the url [" 
                                                                                    + ctx1.getError().getErrMsg() + "]");
            if (context != null)
            {
              context.setError(error);
              //context.setBoolResult(true);
              return callback(context);  
            }
            return;  
          }
          var callbackDownloadFileSha = function callbackDownloadFileSha(ctx2)
          {
            if (ctx2.isError())
            {
              //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
              if (error != null)
                error.setError(11507,"Download File: Cannot download the src sha file from the server1 [" + ctx2.getError().getErrMsg() + "]");
              if (context != null)
              {
                context.setError(error);
                //context.setBoolResult(true);
                return callback(context);  
              }
              return;  
            }  
            //------------------------------------------
            var errorComputeSha:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextComputeSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var shaProperties:amGeneralShaProperties.am_general.A_ShaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);  
            shaProperties.setSrcFileInfo(aTmpFile);
            shaProperties.setShaFileInfo(aComputedShaTmpFile);
            var callbackComputeSha = function callbackComputeSha(ctx3 : amGeneralContext.am_general.A_Context)
            {
              var shaComputeFile = ctx3.getResult();
              var errorReadTmpShaFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
              var contextReadTmpShaFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
              var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4 : amGeneralContext.am_general.A_Context)
              {
                var shaDownloadedFile = ctx4.getResult();
                var downloadFileWell = true;
                if (context != null)
                {
                  if (ctx4.isError())
                  {
                    downloadFileWell = false;
                    if (error != null)
                      error.setError(11502,"Download Playlist - Download File: Cannot read sha file from tmp folder [" + ctx4.getError().getErrMsg() + "]");

                  }else{
                    //downloadFileWell = false;
                    //if (aTransferFile.isTheSameShaValue(shaComputeFile, shaDownloadedFile))
                      //downloadFileWell = true;
                    downloadFileWell = true;
                    if (! downloadFileWell)    
                    { 
                      if (error != null)
                        error.setError(11505,"Download Playlist - Download File: The src sha file is not the same with the computed shat file [" 
                                                                                                            + ctx4.getError().getErrMsg() + "]");
                    }
                  }
                  if (! downloadFileWell)
                  {
                    context.setBoolResult(downloadFileWell)
                    context.setError(error);
                    return callback(context);
                  }
                  //---------------------------------
                  var errorMoveTmpFileToDst:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
                  var contextMoveTmpFileToDst:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                  var callbackMoveTmpFileToDst = function callbackMoveTmpFileToDst(ctx5 : amGeneralContext.am_general.A_Context)
                  {
                    if (ctx5.isError())
                    {
                      downloadFileWell = false;
                      if (error != null)
                        error.setError(11501,"Download Playlist - Download File: Cannot move file from tmp folder to the destination [" 
                                                                                                        + ctx5.getError().getErrMsg() + "]");
                      context.setBoolResult(downloadFileWell)
                      context.setError(error);
                      return callback(context); 
                    }
                    //------------------------------------------------
                    var errorMoveShaTmpFileToDst:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
                    var contextMoveShaTmpFileToDst:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                    var callbackMoveShaTmpFileToDst = function callbackMoveShaTmpFileToDst(ctx6 : amGeneralContext.am_general.A_Context)
                    {
                      downloadFileWell = true;
                      if (ctx6.isError())
                      {
                        downloadFileWell = false;
                        if (error != null)
                          error.setError(11502,"Download Playlist - Download File: Cannot move sha file from tmp folder to the destination [" 
                                                                                                        + ctx6.getError().getErrMsg() + "]");
                      } 
                      context.setBoolResult(downloadFileWell)
                      context.setError(error);
                      return callback(context);                 
                    }  
                    //=======================================================
                    contextMoveShaTmpFileToDst.setRemoteCallback(true);
                    callbackMoveShaTmpFileToDst(contextMoveShaTmpFileToDst);
                    //self._aSDKService._iSDKFileSystem.moveFile2( aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                     //                                            aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), 
                      //                                           errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);     
                    //self._aSDKService._iSDKFileSystem.copyFile2( aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                    //                                             aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), 
                    //                                             errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);        
   
                  }      
                  //=======================================================
                  contextMoveTmpFileToDst.setRemoteCallback(true);
                  self._aSDKService._iSDKFileSystem.moveFile2(  aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                                                aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                                                                errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);      
                  //self._aSDKService._iSDKFileSystem.copyFile2(  aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                  //                                              aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                  //                                             errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);        
                }
              }
              //==================================================
              //document.getElementById("rend.message").innerHTML += "<p>read downloaded sha"</p>";
              contextReadTmpShaFile.setRemoteCallback(true);
              callbackReadTmpShaFile(contextReadTmpShaFile);
              //self._aSDKService._iSDKFileSystem.readTextFile2(
               //                                             aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
               //                                             errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);    
            }
            //==================================================
            //document.getElementById("rend.message").innerHTML += "<p>compute sha and save sha file2"</p>";
            contextComputeSha.setRemoteCallback(true);
            callbackComputeSha(contextComputeSha);
            //self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties,
            //                                                  errorComputeSha, contextComputeSha, callbackComputeSha);    
          }  
          //==================================================
          //document.getElementById("rend.message").innerHTML += "<p>start download sha"</p>";
          contextDownloadFileSha.setRemoteCallback(true);
          callbackDownloadFileSha(contextDownloadFileSha);
          //self._aSDKService._iSDKFileSystem.downloadFile2( aShaSrcFile.getFullName(), 
            //                                              aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
              //                                            errorDownloadFileSha, contextDownloadFileSha, callbackDownloadFileSha);    
        }
        //==================================================
        //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
        contextDownloadFile.setRemoteCallback(true);
        if (! bCopyFile){
          self._aSDKService._iSDKFileSystem.downloadFile2( aSrcFile.getFullName(), 
                                                           aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                                            errorDownloadFile, contextDownloadFile, callbackDownloadFile);  
        }else{
          if (bCopyFileIfExists)
          {
            self._aSDKService._iSDKFileSystem.copyFile2( aSrcFile.getStorage(),  aSrcFile.getPath(), aSrcFile.getName(), 
                                                         aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                                         errorDownloadFile, contextDownloadFile, callbackDownloadFile);  
          }else{
            //==================================================
            contextFileExists.setRemoteCallback(true);
            var callbackFileExists = function callbackFileExists(ctxFE:amGeneralContext.am_general.A_Context)
            {    
              //==
              var bExistsFile = false;
              if (ctxFE != null)
                if (! ctxFE.isError())
                  bExistsFile = ctxFE.getBoolResult();
              // ---    
              if (bExistsFile)
              {
                var downloadFileWell2 = true;
                context.setBoolResult(downloadFileWell2)
                context.setError(error);
                return callback(context);                 
              }
              //===========================
              self._aSDKService._iSDKFileSystem.copyFile2( aSrcFile.getStorage(),  aSrcFile.getPath(), aSrcFile.getName(), 
                                                           aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                                          errorDownloadFile, contextDownloadFile, callbackDownloadFile);  
            }
            //=============================
            self._aSDKService._iSDKFileSystem.fileExists2( aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                                                           errorFileExists, contextFileExists, callbackFileExists);    
          }                                                         
        }
      }
      //==================================================
      //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
      contextCreateTmpAndDstFolders.setRemoteCallback(true);
      self.createTmpAndDstFoldersIfNeeded( aTransferFile,
                                           errorCreateTmpAndDstFolders, contextCreateTmpAndDstFolders, callbackCreateTmpAndDstFolders);

    }



    //-------------------------------------------------    
    // ma3              
    public downloadFile_noComputeSha( aTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      var aSrcFile            = aTransferFile.getSrcFileInfo();
      var aTmpFile            = aTransferFile.getTmpFileInfo();
      var aDstFile            = aTransferFile.getDstFileInfo();
      var aShaSrcFile         = aTransferFile.getSrcShaFileInfo();
      var aShaTmpFile         = aTransferFile.getTmpShaFileInfo();
      var aShaDstFile         = aTransferFile.getDstShaFileInfo();
      //var aShaCrtDstFile      = aTransferFile.getDstShaFileInfo();
      var aComputedShaTmpFile = aTransferFile.getComputedShaFileInfo();

      var bCopyFile = aTransferFile.getCopyFile();
      var bCopyFileIfExists = aTransferFile.getCopyFileIfExists();

      var bHasSameShaFile  = false;
      var downloadFileWell = false;
      var errorCreateTmpAndDstFolders:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateTmpAndDstFolders:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateTmpAndDstFolders = function callbackCreateTmpAndDstFolders(ctx1:amGeneralContext.am_general.A_Context)
      {
        var errorDownloadFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextDownloadFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackDownloadFile = function callbackDownloadFile(ctx1:amGeneralContext.am_general.A_Context)
        {
          //==
          var errorDownloadFileSha:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownloadFileSha:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          if (ctx1.isError())
          {
            //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
            if (error != null)
              error.setError(11506,"Download File: Cannot download The src file from the url [" 
                                                                                    + ctx1.getError().getErrMsg() + "]");
            if (context != null)
            {
              context.setError(error);
              //context.setBoolResult(true);
              return callback(context);  
            }
            return;  
          }
          var callbackDownloadFileSha = function callbackDownloadFileSha(ctx2)
          {
            if (ctx2.isError())
            {
              //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
              if (error != null)
                error.setError(11507,"Download File: Cannot download the src sha file from the server1 [" + ctx2.getError().getErrMsg() + "]");
              if (context != null)
              {
                context.setError(error);
                //context.setBoolResult(true);
                return callback(context);  
              }
              return;  
            }  
            //------------------------------------------
            //var errorComputeSha:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
            //var contextComputeSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var errorReadDstShaFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextReadDstShaFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext(); 
            // -- 
            var shaProperties:amGeneralShaProperties.am_general.A_ShaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);  
            shaProperties.setSrcFileInfo(aTmpFile);
            shaProperties.setShaFileInfo(aComputedShaTmpFile);
            var callbackReadDstShaFile = function callbackReadDstShaFile(ctx3 : amGeneralContext.am_general.A_Context)
            {
              /*
              var shaDstFile = "";
              if (! ctx3.isError())
              {
                shaDstFile = ctx3.getResult();
              }*/
              // -----
              var errorReadTmpShaFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
              var contextReadTmpShaFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
              var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4 : amGeneralContext.am_general.A_Context)
              {
                
                var shaDownloadedFile = ctx4.getResult();
                var downloadFileWell = true;
                if (context != null)
                {
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
                  var errorMoveTmpFileToDst:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
                  var contextMoveTmpFileToDst:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                  var callbackMoveTmpFileToDst = function callbackMoveTmpFileToDst(ctx5 : amGeneralContext.am_general.A_Context)
                  {
                    if (ctx5.isError())
                    {
                      downloadFileWell = false;
                      if (error != null)
                        error.setError(11501,"Download Playlist - Download File: Cannot move file from tmp folder to the destination [" 
                                                                                                        + ctx5.getError().getErrMsg() + "]");
                      context.setBoolResult(downloadFileWell)
                      context.setError(error);
                      return callback(context); 
                    }
                    //------------------------------------------------
                    var errorMoveShaTmpFileToDst:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
                    var contextMoveShaTmpFileToDst:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                    var callbackMoveShaTmpFileToDst = function callbackMoveShaTmpFileToDst(ctx6 : amGeneralContext.am_general.A_Context)
                    {
                      downloadFileWell = true;
                      if (ctx6.isError())
                      {
                        downloadFileWell = false;
                        if (error != null)
                          error.setError(11502,"Download Playlist - Download File: Cannot move sha file from tmp folder to the destination [" 
                                                                                                        + ctx6.getError().getErrMsg() + "]");
                      } 
                      context.setBoolResult(downloadFileWell)
                      context.setError(error);
                      return callback(context);                 
                    }  
                    //=======================================================
                    contextMoveShaTmpFileToDst.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.moveFile2( aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                                                 aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), 
                                                                 errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);     
                    //self._aSDKService._iSDKFileSystem.copyFile2( aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                    //                                             aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), 
                    //                                             errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);        
   
                  }      
                  //=======================================================
                  contextMoveTmpFileToDst.setRemoteCallback(true);
                  self._aSDKService._iSDKFileSystem.moveFile2(  aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                                                aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                                                                errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);      
                  //self._aSDKService._iSDKFileSystem.copyFile2(  aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                  //                                              aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                  //                                             errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);        
                }
              }
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
            }
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

          }  
          //==================================================
          //document.getElementById("rend.message").innerHTML += "<p>start download sha"</p>";
          contextDownloadFileSha.setRemoteCallback(true);
          if (! bCopyFile){
            if (! bCopyFileIfExists)
            {
              self._aSDKService._iSDKFileSystem.downloadFile2( aShaSrcFile.getFullName(), 
                                                               aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                                               errorDownloadFileSha, contextDownloadFileSha, callbackDownloadFileSha);  
            }else{
              self._aSDKService._iSDKFileSystem.downloadFile2( aShaSrcFile.getFullName(), 
                                                               aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                                               errorDownloadFileSha, contextDownloadFileSha, callbackDownloadFileSha);  

            }
          }else{
            contextDownloadFileSha.setError(errorDownloadFileSha);
            callbackDownloadFileSha(contextDownloadFileSha);
          }  
        }
        //==================================================
        //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
        contextDownloadFile.setRemoteCallback(true);
        if (! bCopyFile){
          self._aSDKService._iSDKFileSystem.downloadFile2( aSrcFile.getFullName(), 
                                                          aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                                          errorDownloadFile, contextDownloadFile, callbackDownloadFile);  
        }else{
          self._aSDKService._iSDKFileSystem.copyFile2( aSrcFile.getStorage(),  aSrcFile.getPath(), aSrcFile.getName(), 
                                                       aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                                       errorDownloadFile, contextDownloadFile, callbackDownloadFile);  
        }
      }
      //==================================================
      //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
      contextCreateTmpAndDstFolders.setRemoteCallback(true);
      self.createTmpAndDstFoldersIfNeeded( aTransferFile,
                                           errorCreateTmpAndDstFolders, contextCreateTmpAndDstFolders, callbackCreateTmpAndDstFolders);

    }


    //-------------------------------------------------                  
    public downloadFile( aTransferFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      var aSrcFile            = aTransferFile.getSrcFileInfo();
      var aTmpFile            = aTransferFile.getTmpFileInfo();
      var aDstFile            = aTransferFile.getDstFileInfo();
      var aShaSrcFile         = aTransferFile.getSrcShaFileInfo();
      var aShaTmpFile         = aTransferFile.getTmpShaFileInfo();
      var aShaDstFile         = aTransferFile.getDstShaFileInfo();
      //var aShaCrtDstFile      = aTransferFile.getDstShaFileInfo();
      var aComputedShaTmpFile = aTransferFile.getComputedShaFileInfo();

      var errorCreateTmpAndDstFolders:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCreateTmpAndDstFolders:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCreateTmpAndDstFolders = function callbackCreateTmpAndDstFolders(ctx1:amGeneralContext.am_general.A_Context)
      {
        var errorDownloadFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextDownloadFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackDownloadFile = function callbackDownloadFile(ctx1:amGeneralContext.am_general.A_Context)
        {
          //==
          var errorDownloadFileSha:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextDownloadFileSha:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
          if (ctx1.isError())
          {
            //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
            if (error != null)
              error.setError(11506,"Download File: Cannot download The src file from the url [" 
                                                                                    + ctx1.getError().getErrMsg() + "]");
            if (context != null)
            {
              context.setError(error);
              //context.setBoolResult(true);
              return callback(context);  
            }
            return;  
          }
          var callbackDownloadFileSha = function callbackDownloadFileSha(ctx2)
          {
            if (ctx2.isError())
            {
              //document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
              if (error != null)
                error.setError(11507,"Download File: Cannot download the src sha file from the server1 [" + ctx2.getError().getErrMsg() + "]");
              if (context != null)
              {
                context.setError(error);
                //context.setBoolResult(true);
                return callback(context);  
              }
              return;  
            }  
            //------------------------------------------
            var errorComputeSha:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextComputeSha:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
            var shaProperties:amGeneralShaProperties.am_general.A_ShaProperties = self._aServiceLocator._iEntityCreation.createDefaultShaProperties(null);  
            shaProperties.setSrcFileInfo(aTmpFile);
            shaProperties.setShaFileInfo(aComputedShaTmpFile);
            var callbackComputeSha = function callbackComputeSha(ctx3 : amGeneralContext.am_general.A_Context)
            {
              var shaComputeFile = ctx3.getResult();
              var errorReadTmpShaFile:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
              var contextReadTmpShaFile:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
              var callbackReadTmpShaFile = function callbackReadTmpShaFile(ctx4 : amGeneralContext.am_general.A_Context)
              {
                var shaDownloadedFile = ctx4.getResult();
                var downloadFileWell = true;
                if (context != null)
                {
                  if (ctx4.isError())
                  {
                    downloadFileWell = false;
                    if (error != null)
                      error.setError(11502,"Download Playlist - Download File: Cannot read sha file from tmp folder [" + ctx4.getError().getErrMsg() + "]");

                  }else{
                    downloadFileWell = false;
                    if (aTransferFile.isTheSameShaValue(shaComputeFile, shaDownloadedFile))
                      downloadFileWell = true;
                    if (! downloadFileWell)    
                    { 
                      if (error != null)
                        error.setError(11505,"Download Playlist - Download File: The src sha file is not the same with the computed shat file [" 
                                                                                                            + ctx4.getError().getErrMsg() + "]");
                    }
                  }
                  if (! downloadFileWell)
                  {
                    context.setBoolResult(downloadFileWell)
                    context.setError(error);
                    return callback(context);
                  }
                  //---------------------------------
                  var errorMoveTmpFileToDst:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
                  var contextMoveTmpFileToDst:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                  var callbackMoveTmpFileToDst = function callbackMoveTmpFileToDst(ctx5 : amGeneralContext.am_general.A_Context)
                  {
                    if (ctx5.isError())
                    {
                      downloadFileWell = false;
                      if (error != null)
                        error.setError(11501,"Download Playlist - Download File: Cannot move file from tmp folder to the destination [" 
                                                                                                        + ctx5.getError().getErrMsg() + "]");
                      context.setBoolResult(downloadFileWell)
                      context.setError(error);
                      return callback(context); 
                    }
                    //------------------------------------------------
                    var errorMoveShaTmpFileToDst:amGeneralError.am_general.A_Error         = self._aServiceLocator._iEntityCreation.createDefaultError();   
                    var contextMoveShaTmpFileToDst:amGeneralContext.am_general.A_Context   = self._aServiceLocator._iEntityCreation.createDefaultContext();  
                    var callbackMoveShaTmpFileToDst = function callbackMoveShaTmpFileToDst(ctx6 : amGeneralContext.am_general.A_Context)
                    {
                      downloadFileWell = true;
                      if (ctx6.isError())
                      {
                        downloadFileWell = false;
                        if (error != null)
                          error.setError(11502,"Download Playlist - Download File: Cannot move sha file from tmp folder to the destination [" 
                                                                                                        + ctx6.getError().getErrMsg() + "]");
                      } 
                      context.setBoolResult(downloadFileWell)
                      context.setError(error);
                      return callback(context);                 
                    }  
                    //=======================================================
                    contextMoveShaTmpFileToDst.setRemoteCallback(true);
                    self._aSDKService._iSDKFileSystem.moveFile2( aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                                                 aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), 
                                                                 errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);     
                    //self._aSDKService._iSDKFileSystem.copyFile2( aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                    //                                             aShaDstFile.getStorage(), aShaDstFile.getPath(), aShaDstFile.getName(), 
                    //                                             errorMoveShaTmpFileToDst, contextMoveShaTmpFileToDst, callbackMoveShaTmpFileToDst);        
   
                  }      
                  //=======================================================
                  contextMoveTmpFileToDst.setRemoteCallback(true);
                  self._aSDKService._iSDKFileSystem.moveFile2(  aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                                                aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                                                                errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);      
                  //self._aSDKService._iSDKFileSystem.copyFile2(  aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                  //                                              aDstFile.getStorage(), aDstFile.getPath(), aDstFile.getName(), 
                  //                                             errorMoveTmpFileToDst, contextMoveTmpFileToDst, callbackMoveTmpFileToDst);        
                }
              }
              //==================================================
              //document.getElementById("rend.message").innerHTML += "<p>read downloaded sha"</p>";
              contextReadTmpShaFile.setRemoteCallback(true);
              self._aSDKService._iSDKFileSystem.readTextFile2(
                                                            aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                                            errorReadTmpShaFile, contextReadTmpShaFile, callbackReadTmpShaFile);    
            }
            //==================================================
            //document.getElementById("rend.message").innerHTML += "<p>compute sha and save sha file2"</p>";
            contextComputeSha.setRemoteCallback(true);
            self._aSDKService._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties,
                                                              errorComputeSha, contextComputeSha, callbackComputeSha);    
          }  
          //==================================================
          //document.getElementById("rend.message").innerHTML += "<p>start download sha"</p>";
          contextDownloadFileSha.setRemoteCallback(true);
          self._aSDKService._iSDKFileSystem.downloadFile2( aShaSrcFile.getFullName(), 
                                                          aShaTmpFile.getStorage(), aShaTmpFile.getPath(), aShaTmpFile.getName(), 
                                                          errorDownloadFileSha, contextDownloadFileSha, callbackDownloadFileSha);    
        }
        //==================================================
        //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
        contextDownloadFile.setRemoteCallback(true);
        self._aSDKService._iSDKFileSystem.downloadFile2( aSrcFile.getFullName(), 
                                                        aTmpFile.getStorage(), aTmpFile.getPath(), aTmpFile.getName(), 
                                                        errorDownloadFile, contextDownloadFile, callbackDownloadFile);  
      }
      //==================================================
      //document.getElementById("rend.message").innerHTML += "<p>start download file"</p>";
      contextCreateTmpAndDstFolders.setRemoteCallback(true);
      self.createTmpAndDstFoldersIfNeeded( aTransferFile,
                                           errorCreateTmpAndDstFolders, contextCreateTmpAndDstFolders, callbackCreateTmpAndDstFolders);

    }

    //-------------------------------------------------                  
    public downloadFileIfNotAlreadyDownloaded_withNoShaCkeck( transferMediaFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      if (transferMediaFile.getDoDownload() == false)
      {
        context.setBoolResult(true);//downloadFileWell);
        context.setError(error);
        //document.getElementById("rend.message").innerHTML += "<p>skip download file + "</p>";  
        if (callback != null)
          callback(context);  
        return;  
      }
      //----------------------------
      var strFileName =  transferMediaFile.getDstFileInfo().getName();
      if (strFileName.endsWith(".sha"))
      {
        context.setBoolResult(true);//downloadFileWell);
        context.setError(error);
        //document.getElementById("rend.message").innerHTML += "<p>skip download file + "</p>";  
        if (callback != null)
          callback(context);  
        return;  
      }
      var errorDownloadFile:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextDownloadFile:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
      var callbackDownloadFile = function callbackDownloadFile(ctx2: amGeneralContext.am_general.A_Context) 
      {
        var downloadFileWell = ctx2.getBoolResult();
        if (! downloadFileWell) //ctx2.isError())
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
      }
      //==============================================
      self.downloadFile_withNoShaCheck( transferMediaFile, errorDownloadFile, contextDownloadFile, callbackDownloadFile);
    }




    //-------------------------------------------------                  
    public downloadFileIfNotAlreadyDownloaded( transferMediaFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      if (transferMediaFile.getDoDownload() == false)
      {
        context.setBoolResult(true);//downloadFileWell);
        context.setError(error);
        //document.getElementById("rend.message").innerHTML += "<p>skip download file + "</p>";  
        if (callback != null)
          callback(context);  
        return;  
      }
      //----------------------------
      var strFileName =  transferMediaFile.getDstFileInfo().getName();
      if (strFileName.endsWith(".sha"))
      {
        context.setBoolResult(true);//downloadFileWell);
        context.setError(error);
        //document.getElementById("rend.message").innerHTML += "<p>skip download file + "</p>";  
        if (callback != null)
          callback(context);  
        return;  
      }
      //--------------------
      var errorCheckFileIfAlreadyDownloaded:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextCheckFileIfAlreadyDownloaded:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackCheckFileIfAlreadyDownloaded = function callbackDownloadFile(ctx1:amGeneralContext.am_general.A_Context)
      {
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
        var errorDownloadFile:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextDownloadFile:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();    
        var callbackDownloadFile = function callbackDownloadFile(ctx2: amGeneralContext.am_general.A_Context) 
        {
          var downloadFileWell = ctx2.getBoolResult();
          if (! downloadFileWell) //ctx2.isError())
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
        }
        //==============================================
        // ma3
        if (transferMediaFile.getComputeSha() == true)
          self.downloadFile( transferMediaFile, errorDownloadFile, contextDownloadFile, callbackDownloadFile);
        else
          self.downloadFile_noComputeSha( transferMediaFile, errorDownloadFile, contextDownloadFile, callbackDownloadFile);

      }
      //==============================================
      self.checkFileIfAlreadyDownloaded( transferMediaFile, errorCheckFileIfAlreadyDownloaded, contextCheckFileIfAlreadyDownloaded, callbackCheckFileIfAlreadyDownloaded);
    }


    //-------------------------------------------------                  
    public downloadFiles_fromMap( transferMediaFiles: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                                  bIgnoreErrors: boolean,
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var transferMediaFilesArray:Array<amGeneralFileTransfer.am_general.AE_FileTransfer> = Array.from(transferMediaFiles.values()) ;
      return this.downloadFiles_fromArray( transferMediaFilesArray, bIgnoreErrors, error, context, callback)
    }

    //-------------------------------------------------                  
    public downloadFiles_fromArray( transferMediaFiles: Array<amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                                    bIgnoreErrors: boolean,
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
          //--------------------------------- 
          if (self._interruptCallback != null)
          {
            return self._interruptCallback();
          }          
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
          var downloadFileWell = ctx2.getBoolResult();
          if (! bIgnoreErrors)
          {
            if (! crtFileTransfer.getIgnoreErrors())
            {
              if (! downloadFileWell) //ctx2.isError())
              {
                context.setError(error);
                context.setObjectResult(null);
                //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
                if (callback != null)
                  callback(context);  
                return;  
              }  
            }else{
              error.setError(0, "");
            }
          }else{
            error.setError(0, "");
          }
          //-------------- store a new xml-json-text object
          //document.getElementById("rend.message").innerHTML += "<p>start createDefaultXmlDocument "  +  "</p>";  
          console.log( 'Succesfuly downloaded one file ' + fileFullName ); 
          fileFullName = crtFileTransfer.getDstFileInfo().getFullName();
          document.getElementById("rend.message").innerHTML = "<p>file" + crtFileIdx +  "</p>";  
          //document.getElementById("rend.message").innerHTML += "<p>"  + fileFullName + "</p>";

          //ma
          //setTimeout(()=>{callbackDownloadOneFile(++crtFileIdx, ctx2);}, 10);
          return callbackDownloadOneFile(++crtFileIdx, ctx2);
        }
        //document.getElementById("rend.message").innerHTML += "<p>start _iSDKFileSystem.readTextFile2: "  + "</p>";  
        if (crtFileTransfer.getCheckSha()) //ma
          self.downloadFileIfNotAlreadyDownloaded( crtFileTransfer,  error, ctx1, callbackDownloadFile) ; 
        else
          self.downloadFileIfNotAlreadyDownloaded_withNoShaCkeck( crtFileTransfer,  error, ctx1, callbackDownloadFile) ; 
      }

      callbackDownloadOneFile(startFileIdx, context);
    }

  }

} 