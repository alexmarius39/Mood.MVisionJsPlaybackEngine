import amGeneralIRemoteService = require("../../../../../app/ts/abstract/am_general/a_service/I_RemoteService");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");


import rmTransversalServicesSDKClient = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/R_SDK_Client");
                                                     
import rmGeneralRemoteService = require("../../../../../app/ts/reusable/rm_general/r_service/IImpl_RemoteService_R");

export module rm_transversalservices
{
  export class IImpl_RemoteService_SDKClient extends    rmGeneralRemoteService.rm_general.IImpl_RemoteService_R
                                             implements amGeneralIRemoteService.am_general.I_RemoteService
                                             
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServicesSDKClient.rm_transversalservices.R_SDK_Client;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKClient.rm_transversalservices.R_SDK_Client)  
    {
      super(owner);
      this._owner = owner;  
    }

    //---------------------------------------------
    public setRemoteUrl(url: string): void
    {
      //this._owner.setRemoteUrl(url);  
    }

    //------------------------------
    public send(socket: any, params: any) : void
    {
    }

    //------------------------------
    public receive(socket: any, params: any) : void
    {
      var owner = this._owner;
      //-------------------------
      this._owner._socket.on('sdk.filesystem.ret-get-file-list', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = strFileSystem;        
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileList(null,null, ctx, null);
          return;
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.filesystem.ret-get-file-list2', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getFileList2(null,null,null, ctx, null);
          return;
        }        
      });

      //-------------------------
      this._owner._socket.on('sdk.filesystem.ret-get-nb-files2', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getNbFiles2(null,null, null, ctx, null);
          return;
        }        
      });

      //-------------------------
      this._owner._socket.on('sdk.filesystem.ret-read-text-file2', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_readTextFile2(null,null,null,null, ctx, null);
          return;
        }        
      });

      //-------------------------
      this._owner._socket.on('sdk.filesystem.ret-read-binary-file', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_readBinaryFile(null,null,null,null, ctx, null);
          return;
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.filesystem.ret-file-exists2', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_fileExists2(null,null,null,null, ctx, null);
          return;
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.filesystem.ret-write-text-file2', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-write-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_writeTextFile2(null,null,null,null,null, ctx, null);
        }
      });
      this._owner._socket.on('sdk.filesystem.ret-append-text-file', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_appendTextToFile(null,null,null,null,null, ctx, null);
        }
      });
      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-remove-file2', function(ctx) 
      {
        //document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-remove-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_removeFile2(null,null,null,null, ctx, null);
        }
      });      

      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-copy-file2', function(ctx) 
      {
        ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-copy-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFile2(null,null,null, null,null,null, null,ctx,null);
        }
      });

      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-move-file2', function(ctx) 
      {
        ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-download-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_moveFile2(null,null,null, null,null,null, null,ctx,null);
        }
      });
      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-download-file2', function(ctx) 
      {
        ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-download-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_downloadFile2(null, null,null,null, null,ctx,null);
        }
      });
      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-upload-file2', function(ctx) 
      {
        ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-upload-file2';
        owner._aSDKConsumer._iNotify_SDKFileSystem.notify_uploadFile2(null,null,null, null,null,null, null,ctx,null);
      });
      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-unzip-file2', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          //document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-unzip-file2';
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_unzipFile2(null,null,null, null,null, null,ctx,null);
          return;
        }        

      });
      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-zip-file2', function(ctx) 
      {
        ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-upload-file2';      
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_zipFile2(null,null,null, null,null,null, null,ctx,null);
          return;
        }        

      });


      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-create-folder2', function(ctx) 
      {
        ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-create-folder2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_createFolder2(null,null,null, ctx, null);
        }
      });
      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-delete-folder2', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-delete-folder2';
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_deleteFolder2(null,null,null, ctx, null);
        }
      });
      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-copy-folder2', function(ctx) 
      {
        //document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-copy-folder2';
        if (! owner._iService.runCallback(ctx))
        {
          ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-compute-filesha2';
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_copyFolder2(null,null, null,null, null,ctx,null);
        }        

      });      
      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-move-folder2', function(ctx) 
      {
        ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-upload-file2';        
        if (! owner._iService.runCallback(ctx))
        {
          ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-compute-filesha2';
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_moveFolder2(null,null, null,null, null,ctx,null);
        }        
      });
      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-zip-folder2', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-compute-filesha2';
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_zipFolder2(null,null, null,null,null, null,ctx,null);
        }
      });

      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-getlastmodified', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_getLastModified(null, null, ctx, null);
        }
      });

      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-computefilesha2', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          ///document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.ret-compute-filesha2';
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_computeFileSha2(null, null,ctx,null);
        }
      });
      
      //---------------------------
      this._owner._socket.on('sdk.filesystem.ret-computeandsavefilesha2', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          //document.getElementById("sdk.message").innerHTML = 'sdk.filesystem.computeandsavefilesha2: ' + ctx._result;
          owner._aSDKConsumer._iNotify_SDKFileSystem.notify_computeFileShaAndSaveShaFile2(null, null,ctx,null);
        }
      });
      //-------------------------
      this._owner._socket.on('sdk.audiosetup.ret-get-volume', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_getVolumeLevel(null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.audiosetup.ret-set-volume', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_setVolumeLevel(null, null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.audiosetup.ret-get-mute', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_getMute(null, null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.audiosetup.ret-set-mute', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKAudioSetup.notify_setMute(null, null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.hardwaresetup.ret-get-networkinfo', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getNewtworkInfo(null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.hardwaresetup.ret-get-systemusageinfo', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getSystemUsageInfo(null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.hardwaresetup.ret-get-cpuinfo', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getCPUInfo(null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.generalconfiguration.ret-get-screenproperties', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKGeneralConfiguration.notify_promise_getScreenProperties(null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.generalconfiguration.ret-set-screenproperties', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKGeneralConfiguration.notify_setScreenProperties(null, null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.generalconfiguration.ret-get-language', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKGeneralConfiguration.notify_getOSDLanguages(null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.generalconfiguration.ret-set-language', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKGeneralConfiguration.notify_setOSDLanguages(null, null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.generalconfiguration.ret-get-uptime', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKGeneralConfiguration.notify_getUpTime(null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.firmwaresetup.ret-get-firmwareversion', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKFirmwareSetup.notify_getFirmwareVersion(null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.hardwaresetup.ret-get-serialnumber', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKHardwareSetup.notify_getSerialNumber(null, ctx, null);
        }        
      });      
      //-------------------------
      this._owner._socket.on('sdk.timesetup.ret-set-date', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_setCrtDateTime(null, null, ctx, null);
        }        
      });      
      //-------------------------
      this._owner._socket.on('sdk.timesetup.ret-get-date', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getCrtDateTime(null, ctx, null);
        }        
      });      
      //-------------------------
      this._owner._socket.on('sdk.timesetup.ret-get-timezoneoffset', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getTimeZoneOffset(null, null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.timesetup.ret-set-ntpserver', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_setNTPServer(null, null, null, ctx);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.timesetup.ret-get-ntpserver', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getNTPServer(null, null, ctx);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.timesetup.ret-set-usentp', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_setUseNTP(null, null, null, ctx);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.timesetup.ret-get-usentp', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getUseNTP(null, null, ctx);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.timesetup.ret-get-timezone', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_getTimeZone(null, null, ctx);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.timesetup.ret-set-timezone', function(ctx) 
      {
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKTimeSetup.notify_setTimeZone(null, null, ctx, null);
        }        
      });
      //-------------------------
      this._owner._socket.on('sdk.tvsignagesetup.ret-capture-screen', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKTvSignageSetup.notify_captureScreen(null, null, ctx, null);
        }        
      });      
      //-------------------------
      this._owner._socket.on('sdk.powersetup.ret-exec-cmd', function(ctx) 
      {
        //document.getElementById("filesystem").innerHTML = 'sdk.filesystem.ret-read-text-file2';
        if (! owner._iService.runCallback(ctx))
        {
          owner._aSDKConsumer._iNotify_SDKPowerSetup.notify_executePowerCommand(null, null, ctx, null);
        }        
      });      

    }
    
    //-----------------------------------
    public startup_withConnectClient(remoteServerUrl: string) : void
    {
      return this._owner.startup_withConnectClient(remoteServerUrl);
    }

    //-----------------------------------
    public startup(socket: any) : void
    {
      return this._owner.startup(socket);
    }
    
  }
} 