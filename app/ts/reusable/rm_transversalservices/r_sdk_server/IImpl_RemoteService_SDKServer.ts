import amGeneralIRemoteService = require("../../../../../app/ts/abstract/am_general/a_service/I_RemoteService");

import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralShaProperties = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");
import amGeneralCaptureScreenInfo = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");
import amGeneralDateTime          = require("../../../abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone          = require("../../../abstract/am_general/a_timezone/A_TimeZone");
import amGeneralScreenProperties = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralSoundProperties   = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");
import amGeneralPowerProperties   = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");

import rmTransversalServicesSDKServer = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_server/R_SDK_Server");
                                                     
export module rm_transversalservices
{
  export class IImpl_RemoteService_SDKServer implements amGeneralIRemoteService.am_general.I_RemoteService
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServicesSDKServer.rm_transversalservices.R_SDK_Server;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKServer.rm_transversalservices.R_SDK_Server)  
    {
      this._owner = owner;  
    }

    //------------------------------
    public send(socket: any, params: any) : void
    {
    }

    //------------------------------
    public receive(socket: any, params: any) : void
    {
      // whenever we receive a 'message' we log it out
      var owner = this._owner;
      socket.on("message", function(message: any) {
        console.log(message);
        socket.emit("ret-get-message", message);
      });
      
      //------------------------------------------      
      socket.on('sdk.filesystem.get-file-list', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        console.log("sdk.filesystem.get-file-list" + JSON.stringify(parameters));
        //socket.emit("ret-get-file-list", parameters);//JSON.stringify(parameters)); //users[currentDrawer].ioid);
        //return;
        //--   callback
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
          //-- debug
          /*
           var fileInfoList = ctx.getArrayResult();
           for(var i = 0 ; i < fileInfoList.length; ++i)
           {
              var fileInfo = fileInfoList[i];	
              console.log( fileInfo);
           } */
           //-- enddebug
           socket.emit("sdk.filesystem.ret-get-file-list", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.getFileList(parameters.pathFullName, error, context, callback);
      });  
      //------------------------------------------------------------------------
      socket.on('sdk.filesystem.get-file-list2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        console.log("sdk.filesystem.get-file-list2" + JSON.stringify(parameters));
        //socket.emit("ret-get-file-list", parameters);//JSON.stringify(parameters)); //users[currentDrawer].ioid);
        //return;
        //--   callback
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
          //-- debug
          /*
           var fileInfoList = ctx.getArrayResult();
           for(var i = 0 ; i < fileInfoList.length; ++i)
           {
              var fileInfo = fileInfoList[i];	
              console.log( fileInfo);
           } */
           //-- enddebug
           socket.emit("sdk.filesystem.ret-get-file-list2", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.getFileList2(parameters.storageName, parameters.pathName, error, context, callback);
      });   
      //------------------------------------------------------------------------
      socket.on('sdk.filesystem.get-nb-files2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        console.log("sdk.filesystem.get-nb-files2" + JSON.stringify(parameters));
        //--   callback
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
           socket.emit("sdk.filesystem.ret-get-nb-files2", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.getNbFiles2(parameters.storageName, parameters.pathName, error, context, callback);
      });   

      //=================================
      //  File functions
      //=================================

      //------------------------------------------
      socket.on('sdk.filesystem.read-text-file2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
          
          socket.emit("sdk.filesystem.ret-read-text-file2", ctx);
        }
        //console.log("sdk.filesystem.read-text-file2 " + JSON.stringify(parameters));
        context.setCallId(parameters.callId);   
        console.log("---------------------------------------------------------------------------------------- sdk.filesystem.read-text-file2 ");
        owner._iSDKFileSystem.readTextFile2(parameters.storageName, parameters.folderName, parameters.fileName, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.filesystem.read-binary-file', function (parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       

        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
          socket.emit("sdk.filesystem.ret-read-binary-file", ctx);
        }
        context.setCallId(parameters.callId);
        owner._iSDKFileSystem.readBinaryFile(parameters.storageName, parameters.folderName, parameters.fileName, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.filesystem.file-exists2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
          
          socket.emit("sdk.filesystem.ret-file-exists2", ctx);
        }
        //console.log("sdk.filesystem.file-exists2 " + JSON.stringify(parameters));
        context.setCallId(parameters.callId);   
        console.log("---------------------------------------------------------------------------------------- sdk.filesystem.file-exists2 ");
        owner._iSDKFileSystem.fileExists2(parameters.storageName, parameters.folderName, parameters.fileName, error, context, callback);
      });
      
      //------------------------------------------
      socket.on('sdk.filesystem.write-text-file2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
           socket.emit("sdk.filesystem.ret-write-text-file2", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.writeTextFile2(parameters.storageName, parameters.folderName, parameters.fileName, parameters.fileContent, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.filesystem.append-text-file', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
           socket.emit("sdk.filesystem.ret-append-text-file", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.appendTextToFile(parameters.storageName, parameters.folderName, parameters.fileName, parameters.fileContent, error, context, callback);
      });      

      //------------------------------------------
      socket.on('sdk.filesystem.remove-file2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-remove-file2", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.removeFile2(parameters.storageName, parameters.folderName, parameters.fileName, error, context, callback);
      });
      //------------------------------------------
      socket.on('sdk.filesystem.copy-file2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-copy-file2", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.copyFile2(parameters.srcStorageName, parameters.srcFolderName, parameters.srcFileName, 
                                        parameters.dstStorageName, parameters.dstFolderName, parameters.dstFileName, error, context, callback);
      });      
      //------------------------------------------
      socket.on('sdk.filesystem.move-file2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-move-file2", ctx);
        }
        context.setCallId(parameters.callId);
        owner._iSDKFileSystem.moveFile2(parameters.srcStorageName, parameters.srcFolderName, parameters.srcFileName, 
                                        parameters.dstStorageName, parameters.dstFolderName, parameters.dstFileName, error, context, callback);
      });
      //------------------------------------------
      socket.on('sdk.filesystem.upload-file2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-upload-file2", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.uploadFile2(parameters.srcStorageName, parameters.srcFolderName,    parameters.srcFileName, 
                                          parameters.remoteUrlName,  parameters.remoteFolderName, parameters.remoteFileName, error, context, callback);
      });
      //------------------------------------------
      socket.on('sdk.filesystem.download-file2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-download-file2", ctx);
        }
        context.setCallId(parameters.callId);
        owner._iSDKFileSystem.downloadFile2(parameters.remoteUrlName, 
                                          parameters.dstStorageName, parameters.dstFolderName, parameters.dstFileName, error, context, callback);
      });
      //------------------------------------------
      socket.on('sdk.filesystem.unzip-file2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-unzip-file2", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.unzipFile2(parameters.zipStorageName,    parameters.zipFolderName,    parameters.zipFileName, 
                                         parameters.unzipStorageName,  parameters.unzipFolderName, error, context, callback);
      });
      //------------------------------------------
      socket.on('sdk.filesystem.zip-file2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-zip-file2", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKFileSystem.zipFile2(parameters.storageName,     parameters.folderName,    parameters.fileName, 
                                      parameters.zipStorageName,  parameters.zipFolderName, parameters.zipFileName, error, context, callback);
      });

      //=================================
      //  Folder functions
      //=================================

      //------------------------------------------
      socket.on('sdk.filesystem.create-folder2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-create-folder2", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.createFolder2(parameters.storageName, parameters.folderName, error, context, callback);
      });
      //------------------------------------------
      socket.on('sdk.filesystem.delete-folder2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-delete-folder2", ctx);
        }
        context.setCallId(parameters.callId);
        owner._iSDKFileSystem.deleteFolder2(parameters.storageName, parameters.folderName, error, context, callback);
      });
      //------------------------------------------
      socket.on('sdk.filesystem.copy-folder2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-copy-folder2", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.copyFolder2( parameters.srcStorageName,  parameters.srcFolderName, 
                                           parameters.dstStorageName,  parameters.dstFolderName, error, context, callback);
      });
      //------------------------------------------
      socket.on('sdk.filesystem.move-folder2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-move-folder2", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKFileSystem.moveFolder2( parameters.srcStorageName,  parameters.srcFolderName, 
                                           parameters.dstStorageName,  parameters.dstFolderName, error, context, callback);
      });
      //------------------------------------------
      socket.on('sdk.filesystem.zip-folder2', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-zip-folder2", ctx);
        }
        context.setCallId(parameters.callId);   
        owner._iSDKFileSystem.zipFolder2( parameters.storageName,     parameters.folderName,   
                                          parameters.zipStorageName,  parameters.zipFolderName, parameters.zipFileName, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.filesystem.getlastmodified', function(parameters: any) 
      {
        const context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        const error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();  
        
        const errFileInfo: amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();
        const fileInfo:amGeneralFileInfo.am_general.A_FileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(errFileInfo);
        fileInfo.copyFromJson(parameters.fileInfo);

        const callback = function(ctx: amGeneralContext.am_general.A_Context) {
            socket.emit("sdk.filesystem.ret-getlastmodified", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKFileSystem.getLastModified(fileInfo, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.filesystem.computefilesha2', function(parameters: any) 
      {
        console.log("sdk.filesystem.computefilesha2");
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();    
     
        var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
        fileInfo.setStorage(parameters.srcStorageName);
        fileInfo.setPath(parameters.srcFolderName);
        fileInfo.setName(parameters.srcFileName);
        context.setObjectResult(fileInfo);
  
        var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
        fileInfo2.setStorage(parameters.shaStorageName);
        fileInfo2.setPath(parameters.shaFolderName);
        fileInfo2.setName(parameters.shaFileName);
        context.setObject2Result(fileInfo2);
  
        var shaProperties:amGeneralShaProperties.am_general.A_ShaProperties = owner._aServiceLocator._iEntityCreation.createDefaultShaProperties(error);
        shaProperties.setSrcFileInfo(fileInfo);
        shaProperties.setShaFileInfo(fileInfo2);
  
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-computefilesha2", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKFileSystem.computeFileSha2(shaProperties, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.filesystem.computeandsavefilesha2', function(parameters: any) 
      {
        console.log("sdk.filesystem.computeandsavefilesha2");
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();    
     
        var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
        fileInfo.setStorage(parameters.srcStorageName);
        fileInfo.setPath(parameters.srcFolderName);
        fileInfo.setName(parameters.srcFileName);
        context.setObjectResult(fileInfo);
  
        var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = owner._aServiceLocator._iEntityCreation.createDefaultFileInfo(error);
        fileInfo2.setStorage(parameters.shaStorageName);
        fileInfo2.setPath(parameters.shaFolderName);
        fileInfo2.setName(parameters.shaFileName);
        context.setObject2Result(fileInfo2);
  
        var shaProperties:amGeneralShaProperties.am_general.A_ShaProperties = owner._aServiceLocator._iEntityCreation.createDefaultShaProperties(error);
        shaProperties.setSrcFileInfo(fileInfo);
        shaProperties.setShaFileInfo(fileInfo2);
  
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.filesystem.ret-computeandsavefilesha2", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKFileSystem.computeFileShaAndSaveShaFile2(shaProperties, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.audiosetup.get-volume', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.audiosetup.ret-get-volume", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKAudioSetup.getVolumeLevel(error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.audiosetup.set-volume', function(parameters: any) 
      {
        const context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        const error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();
        
        const errAudioProperties: amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();
        const audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties = owner._aServiceLocator._iEntityCreation.createDefaultSoundProperties(errAudioProperties);

        audioProperties.copyFromJson(parameters.audioProperties);
        const callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.audiosetup.ret-set-volume", ctx);
        }
        context.setCallId(parameters.callId);
        owner._iSDKAudioSetup.setVolumeLevel(audioProperties, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.audiosetup.get-mute', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();
        
        const errAudioProperties: amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();
        const audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties = owner._aServiceLocator._iEntityCreation.createDefaultSoundProperties(errAudioProperties);

        audioProperties.copyFromJson(parameters.audioProperties);   
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.audiosetup.ret-get-mute", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKAudioSetup.getMute(audioProperties, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.audiosetup.set-mute', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       

        const errAudioProperties: amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();
        const audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties = owner._aServiceLocator._iEntityCreation.createDefaultSoundProperties(errAudioProperties);

        audioProperties.copyFromJson(parameters.audioProperties);   
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.audiosetup.ret-set-mute", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKAudioSetup.setMute(audioProperties, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.hardwaresetup.get-networkinfo', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.hardwaresetup.ret-get-networkinfo", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKHardwareSetup.getNewtworkInfo(error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.hardwaresetup.get-systemusageinfo', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.hardwaresetup.ret-get-systemusageinfo", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKHardwareSetup.getSystemUsageInfo(error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.hardwaresetup.get-cpuinfo', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.hardwaresetup.ret-get-cpuinfo", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKHardwareSetup.getCPUInfo(error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.generalconfiguration.get-screenproperties', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.generalconfiguration.ret-get-screenproperties", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKGeneralConfiguration.getScreenProperties(error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.generalconfiguration.set-screenproperties', function(parameters: any) 
      {
        const context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        const error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();

        const errScreenProperties: amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();
        const aScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties = owner._aServiceLocator._iEntityCreation.createDefaultScreenProperties(errScreenProperties);      

        aScreenProperties.copyFromJson(parameters.screenProperties)
        const callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.generalconfiguration.ret-set-screenproperties", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKGeneralConfiguration.setScreenProperties(aScreenProperties, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.generalconfiguration.get-language', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.generalconfiguration.ret-get-language", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKGeneralConfiguration.getOSDLanguages(error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.generalconfiguration.set-language', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();     
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.generalconfiguration.ret-set-language", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKGeneralConfiguration.setOSDLanguages(parameters.languages, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.generalconfiguration.get-uptime', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.generalconfiguration.ret-get-uptime", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKGeneralConfiguration.getUpTime(error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.firmwaresetup.get-firmwareversion', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.firmwaresetup.ret-get-firmwareversion", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKFirmwareSetup.getFirmwareVersion(error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.hardwaresetup.get-serialnumber', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();       
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.hardwaresetup.ret-get-serialnumber", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKHardwareSetup.getSerialNumber(error, context, callback);
      });
      
      //------------------------------------------
      socket.on('sdk.timesetup.set-date', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();   
        
        const errorDateTime:amGeneralError.am_general.A_Error       = owner._aServiceLocator._iEntityCreation.createDefaultError();   
        const crtDateTime: amGeneralDateTime.am_general.A_DateTime  = owner._aServiceLocator._iEntityCreation.createDefaultDateTime(errorDateTime);
        crtDateTime.copyFromJson(parameters.crtTime);
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.timesetup.ret-set-date", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKTimeSetup.setCrtDateTime(crtDateTime, error, context, callback);
      });
      
      //------------------------------------------
      socket.on('sdk.timesetup.get-date', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();   

        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.timesetup.ret-get-date", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKTimeSetup.getCrtDateTime(error, context, callback);
      });
      
      //------------------------------------------
      socket.on('sdk.timesetup.get-timezoneoffset', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();   

        const errorTimeZone:amGeneralError.am_general.A_Error       = owner._aServiceLocator._iEntityCreation.createDefaultError();   
        const aTimeZone: amGeneralTimeZone.am_general.A_TimeZone  = owner._aServiceLocator._iEntityCreation.createDefaultTimeZone(errorTimeZone);
        aTimeZone.copyFromJson(parameters.timeZone);

        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.timesetup.ret-get-timezoneoffset", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKTimeSetup.getTimeZoneOffset(aTimeZone, error, context, callback);
      });
      
      //------------------------------------------
      socket.on('sdk.timesetup.set-ntpserver', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();   
        
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.timesetup.ret-set-ntpserver", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKTimeSetup.setNTPServer(parameters.strServerUrl, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.timesetup.get-ntpserver', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();   
        
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.timesetup.ret-get-ntpserver", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKTimeSetup.getNTPServer(error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.timesetup.set-usentp', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();   
        
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.timesetup.ret-set-usentp", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKTimeSetup.setUseNTP(parameters.use, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.timesetup.get-usentp', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();   
        
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.timesetup.ret-get-usentp", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKTimeSetup.getUseNTP(error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.timesetup.get-timezone', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();   
        
        const errorDateTime:amGeneralError.am_general.A_Error       = owner._aServiceLocator._iEntityCreation.createDefaultError();   
        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.timesetup.ret-get-timezone", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKTimeSetup.getTimeZone(error, context, callback);
      });
      
      //------------------------------------------
      socket.on('sdk.timesetup.set-timezone', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();   
        
        const errorTimeZone:amGeneralError.am_general.A_Error    = owner._aServiceLocator._iEntityCreation.createDefaultError();   
        const aTimeZone: amGeneralTimeZone.am_general.A_TimeZone = owner._aServiceLocator._iEntityCreation.createDefaultTimeZone(errorTimeZone);
        aTimeZone.copyFromJson(parameters.timeZone);

        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.timesetup.ret-set-timezone", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKTimeSetup.setTimeZone(aTimeZone, error, context, callback);
      });
      
      //------------------------------------------
      socket.on('sdk.tvsignagesetup.capture-screen', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();

        const captureScreenInfo: amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo = owner._aServiceLocator._iEntityCreation.createDefaultCaptureScreenInfo(error);
        captureScreenInfo.copyFromJson(parameters.captureScreen);

        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
            socket.emit("sdk.tvsignagesetup.ret-capture-screen", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKTvSignageSetup.captureScreen(captureScreenInfo, error, context, callback);
      });

      //------------------------------------------
      socket.on('sdk.powersetup.exec-cmd', function(parameters: any) 
      {
        var context:amGeneralContext.am_general.A_Context = owner._aServiceLocator._iEntityCreation.createDefaultContext();
        var error:amGeneralError.am_general.A_Error = owner._aServiceLocator._iEntityCreation.createDefaultError();

        const powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties = owner._aServiceLocator._iEntityCreation.createDefaultPowerProperties(error);
        powerProperties.copyFromJson(parameters.powerProperties);

        var callback = function(ctx: amGeneralContext.am_general.A_Context)
        {
          socket.emit("sdk.powersetup.ret-exec-cmd", ctx);
        }
        context.setCallId(parameters.callId); 
        owner._iSDKPowerSetup.executePowerCommand(powerProperties, error, context, callback);
      });
    }
    
    //-----------------------------------
    public startup_withConnectClient(remoteServerUrl: string) : void
    {
    }

    //-----------------------------------
    public startup(socket: any) : void
    {
    }
    
  }
} 