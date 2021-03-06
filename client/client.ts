declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

import amConfigurationServicesServiceLocator   = require("../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amGeneralContext = require("../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralError   = require("../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralDateTime = require("../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone = require("../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import rmConfigurationServicesServiceLocator   = require("../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");
import nmodSDKWebOS = require("../app/ts/native/nm_transversalservices/n_sdk_webos/N_SDK_WebOS");
//import nmodSDKTizen = require("../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");

//import * as nmodSDKWebOS from "./rmod_tizentest/tizentest";
//nmodSDKWebOS.init();
//--------------------------------------------
//import rmConfigurationServicesServiceContainer = require("../app/ts/reusable/rm_configurationservices/r_servicecontainer/R_ServiceContainer");
//rmConfigurationServicesServiceContainer.rm_configurationservices.R_ServiceContainer.startup();
//--------------------------------------------


//-- the variables
var error             : amGeneralError.am_general.A_Error = null;
var aSrvLocator       : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator;
aSrvLocator = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultServiceLocator(null,error);
var context:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
var error:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
var fileFullName = "file://usb:2/StartupConfig.ts";

//variables for testing filesystem on WebOS
var storageName = "file://usb:2/";
var folderName  = "";
var fileName    = "StartupConfig.ts";

//variables for testing filesystem on Tizen
//var storageName = "removable_sda1";
//var folderName = "";
//var folderName = "/tests2/";
//var fileName = "70.zip";
var fileContent = "+++ this is a test for a test append";
//--- the call
var nSDKWebOS:nmodSDKWebOS.nm_transversalservices.N_SDK_WebOS = new nmodSDKWebOS.nm_transversalservices.N_SDK_WebOS(null, null, null, error);
//var nSDKWebOS:nmodSDKTizen.nm_transversalservices.N_SDK_Tizen = new nmodSDKTizen.nm_transversalservices.N_SDK_Tizen(null, null, null, error);
var bUseCallback:boolean =true;
var bRunTest = "download-file";//"set-get-time-zone";
//"set-get-time-zone";
//"get-time-zone";
//"set-crt-time";
//"set-get-crt-time";
//"get-crt-time";//"download-file";//"read-text-file-2";//"unzip-file2";
//"read-text-file";
//"read-text-file-2";
//"write-text-file";
//"get-file-list"
//"get-file-list2"
//"file-exists";
//"file-exists2";
//"folder-exists";
//"create-folder" ; 
//"delete-folder" ; 
//"write-text-file";
//"append-text-to-file"
//"remove-file"
//"remove-directory"
//"create-directory"
//"unzip-file2"

//----------------------------------------------------------  
//                          test read-file
//----------------------------------------------------------  
if (bRunTest == "read-text-file") 
{ 
  if ( bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<p>" + context.getResult() + "</p>";
      console.log( ctx.getResult);
    }
    document.getElementById("testreadfile").innerHTML += "<p>before call</p>";
    nSDKWebOS._iSDKFileSystem.readTextFile(fileFullName,error, context, callback);
    //-------------------------
  }else{
    nSDKWebOS._iSDKFileSystem.promise_readTextFile(fileFullName,error, context, null)//callback)
   .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += ctx.getResult();
      console.log( ctx.getResult);
    });
  }
} 
if (bRunTest == "read-text-file-2") 
{ 
  if ( bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<p>" + context.getResult() + "</p>";
      console.log( ctx.getResult);
    }
    nSDKWebOS._iSDKFileSystem.readTextFile2(storageName, folderName, fileName, error, context, callback);
    //-------------------------
  }else{
  //   nSDKWebOS._iSDKFileSystem.promise_readTextFile2(storageName, folderName, fileName, error, context, null)//callback)
  //  .then(ctx => 
  //   { 
  //     document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
  //     document.getElementById("testreadfile").innerHTML += ctx.getResult();
  //     console.log( ctx.getResult);
  //   });
  }
} 


//-------------------------  
// test write-file
//-------------------------
if ( bRunTest == "write-text-file")
{ 
  var fileFullName2 = "file://usb:2/StartupConfig2.ts";
  //var fileContent: string = "tra la la 2";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    nSDKWebOS._iSDKFileSystem.writeTextFile2(storageName,folderName,fileName, fileContent, error, context, callback);
    //nSDKWebOS._iSDKFileSystem.writeTextFile(fileFullName2, fileContent, error, context, callback);
    //-------------------------
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test append text to a file
//-------------------------
if ( bRunTest == "append-text-to-file")
{ 
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    nSDKWebOS._iSDKFileSystem.appendTextToFile(storageName, folderName, fileName, fileContent, error, context, callback);
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test unzip file
//-------------------------
if ( bRunTest == "unzip-file2")
{ 
  if (bUseCallback == true) 
  {

    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      //document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    nSDKWebOS._iSDKFileSystem.unzipFile2(storageName, folderName, fileName, "storageDestination", "folderDestination", error, context, callback);
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test remove file
//-------------------------
if ( bRunTest == "remove-file")
{ 
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    nSDKWebOS._iSDKFileSystem.removeFile2(storageName, folderName, fileName, error, context, callback);
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test remove directory
//-------------------------
if ( bRunTest == "remove-directory")
{ 
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    nSDKWebOS._iSDKFileSystem.deleteFolder2(storageName, folderName, error, context, callback);
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test create directory
//-------------------------
if ( bRunTest == "create-directory")
{ 
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += context.getResult();
      //console.log( context.getResult);
    }
    nSDKWebOS._iSDKFileSystem.createFolder2(storageName, folderName, error, context, callback);
  }else{
    // nSDKWebOS._iSDKFileSystem.promise_writeTextFile(fileFullName2, fileContent, error, context, null)
    // .then(ctx => 
    // { 
    //   document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
    //   //document.getElementById("testreadfile").innerHTML += ctx.getResult();
    //   //console.log( ctx.getResult);
    // });
  }
}

//-------------------------  
// test get-file-list
//-------------------------
if ( bRunTest == "get-file-list")
{ 
  var folderFullName = "file://usb:2/";
  var fileContent: string = "tra la la 2";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      var fileInfoList = ctx.getArrayResult();
      document.getElementById("testreadfile").innerHTML += "<h3> Folder: " + folderFullName + "</h3>";
      for(var i = 0 ; i < fileInfoList.length; ++i)
      {
        var fileInfo = fileInfoList[i];	
        document.getElementById("testreadfile").innerHTML += "<p>" + fileInfo.name; + "</p>";
        console.log( ctx.getResult);
      } 
    }
    nSDKWebOS._iSDKFileSystem.getFileList(folderFullName, error, context, callback);
    //-------------------------
  }else{
    nSDKWebOS._iSDKFileSystem.promise_getFileList(folderFullName, error, context, null)//callback)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      var fileInfoList = ctx.getArrayResult();
      document.getElementById("testreadfile").innerHTML += "<h3> Folder: " + folderFullName + "</h3>";
      for(var i = 0 ; i < fileInfoList.length; ++i)
      {
        var fileInfo = fileInfoList[i];	
        document.getElementById("testreadfile").innerHTML += "<p>" + fileInfo.name; + "</p>";
        console.log( ctx.getResult);
      } 
    });
  }
}


//-------------------------  
// test get-file-list Tizen
//-------------------------
if ( bRunTest == "get-file-list2")
{ 
  var folderFullName = "/tests/";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      var fileInfoList = ctx.getArrayResult();
      document.getElementById("testreadfile").innerHTML += "<h3> Folder: " + folderFullName + "</h3>";
      for(var i = 0 ; i < fileInfoList.length; ++i)
      {
        var fileInfo = fileInfoList[i];	
        document.getElementById("testreadfile").innerHTML += "<p>" + fileInfo + "</p>";
        console.log( ctx.getResult);
      } 
    }
    nSDKWebOS._iSDKFileSystem.getFileList2(storageName, folderFullName, error, context, callback);
    //-------------------------
  }else{
    /*nSDKWebOS._iSDKFileSystem.promise_getFileList(folderFullName, error, context, null)//callback)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      var fileInfoList = ctx.getArrayResult();
      document.getElementById("testreadfile").innerHTML += "<h3> Folder: " + folderFullName + "</h3>";
      for(var i = 0 ; i < fileInfoList.length; ++i)
      {
        var fileInfo = fileInfoList[i];	
        document.getElementById("testreadfile").innerHTML += "<p>" + fileInfo.name; + "</p>";
        console.log( ctx.getResult);
      } 
    });*/
  }
}

//-------------------------  
// create-folder
//-------------------------
if ( bRunTest == "create-folder")
{ 
  var newFolderFullName = "file://usb:2/folder1/folder2";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> Folder created: " + newFolderFullName + "</h3>";
      console.log( "Folder created: " + folderFullName );
    }
    nSDKWebOS._iSDKFileSystem.createFolder(newFolderFullName, error, context, callback);
    //-------------------------
  }else{
    nSDKWebOS._iSDKFileSystem.promise_createFolder(newFolderFullName, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> Folder created: " + newFolderFullName + "</h3>";
      console.log( "Folder created: " + folderFullName );
    });
  }
}

//-------------------------  
// delete-folder
//-------------------------
if ( bRunTest == "delete-folder")
{ 
  var folderToBeRemoved = "file://usb:2/folder1/folder2";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Folder: " + folderToBeRemoved + " was deleted.</h3>";
      console.log( "Folder: " + folderToBeRemoved + " was deleted." + folderToBeRemoved);
    }
    nSDKWebOS._iSDKFileSystem.deleteFolder(folderToBeRemoved, error, context, callback);
    //-------------------------
  }else{
    nSDKWebOS._iSDKFileSystem.promise_deleteFolder(folderToBeRemoved, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Folder: " + folderToBeRemoved + " was deleted.</h3>";
      console.log( "Folder: " + folderToBeRemoved + " was deleted." + folderToBeRemoved);
    });
  }
}


//--------------------------------------------------------------------  
//                    test file-exists
//--------------------------------------------------------------------
if ( bRunTest == "file-exists")
{ 
  var fileThatExists = "file://usb:2/StartupConfig.ts";
  var fileThatDoesNotExists = "file://usb:2/StartupConfig100.ts";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "File exists?: " + ctx.getBoolResult());
    }
    nSDKWebOS._iSDKFileSystem.fileExists(fileThatExists, error, context, callback);
    
    
    //--   the callback
    var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
    {
       document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
       document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatDoesNotExists + " exists? " + ctx.getBoolResult() + "</h3>";
       console.log( "File exists?: " + ctx.getBoolResult());
    }
    nSDKWebOS._iSDKFileSystem.fileExists(fileThatDoesNotExists, error, context, callback2);
    
    //-------------------------
  }else{
    nSDKWebOS._iSDKFileSystem.promise_fileExists(fileThatExists, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promised</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "File exists?: " + ctx.getBoolResult());
    });
    nSDKWebOS._iSDKFileSystem.promise_fileExists(fileThatDoesNotExists, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promised</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatDoesNotExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "File exists?: " + ctx.getBoolResult());
    });
  }
}

//-------------------------  
// file-exists2 -Tizen
//-------------------------
if ( bRunTest == "file-exists2")
{ 
  var fileThatExists = "index.html";
  var fileThatDoesNotExists = "index1000.html";
  if (bUseCallback == true) 
  {
   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "File exists?: " + ctx.getBoolResult());
    }
    nSDKWebOS._iSDKFileSystem.fileExists2(storageName, folderName, fileThatExists, error, context, callback);
    
    
    //--   the callback
    var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
    {
       document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
       document.getElementById("testreadfile").innerHTML += "<h3> File " + fileThatDoesNotExists + " exists? " + ctx.getBoolResult() + "</h3>";
       console.log( "File exists?: " + ctx.getBoolResult());
    }
    nSDKWebOS._iSDKFileSystem.fileExists2(storageName, folderName ,fileThatDoesNotExists, error, context, callback2);
    
    //-------------------------
  }else{
    
  }
}

//-------------------------  
// folder-exists
//-------------------------
if ( bRunTest == "folder-exists")
{ 
  var folderThatExists = "file://usb:2/folder1";
  var folderThatDoesNotExists = "file://usb:2/folder100";
  if (bUseCallback == true) 
  {   
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> Folder " + folderThatExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "Folder exists?: " + ctx.getBoolResult());
    }
    nSDKWebOS._iSDKFileSystem.folderExists(folderThatExists, error, context, callback);
    
    
    //--   the callback
    var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
    {
       document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
       document.getElementById("testreadfile").innerHTML += "<h3> Folder " + folderThatDoesNotExists + " exists? " + ctx.getBoolResult() + "</h3>";
       console.log( "Folder exists?: " + ctx.getBoolResult());
    }
    nSDKWebOS._iSDKFileSystem.folderExists(folderThatDoesNotExists, error, context, callback2);
    
    //-------------------------
  }else{
    nSDKWebOS._iSDKFileSystem.promise_folderExists(folderThatExists, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promised</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> Folder " + folderThatExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "Folder exists?: " + ctx.getBoolResult());
    });
    nSDKWebOS._iSDKFileSystem.promise_folderExists(folderThatDoesNotExists, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promised</p>";
      document.getElementById("testreadfile").innerHTML += "<h3> Folder " + folderThatDoesNotExists + " exists? " + ctx.getBoolResult() + "</h3>";
      console.log( "Folder exists?: " + ctx.getBoolResult());
    });
  }
}

//-------------------------  
// copy-file
//-------------------------
if ( bRunTest == "copy-file")
{ 
  var srcFileFullName = "file://usb:2/StartupConfig.ts";
  var dstFileFullName = "file://usb:2/folder1/StartupConfig.ts";
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Src File: " + srcFileFullName + " was copied to " + dstFileFullName + "</h3>";
      console.log("Src File: " + srcFileFullName + " was copied to " + dstFileFullName);
    }
    nSDKWebOS._iSDKFileSystem.copyFile(srcFileFullName, dstFileFullName, error, context, callback);
    //-------------------------
  }else{
    nSDKWebOS._iSDKFileSystem.promise_copyFile(srcFileFullName, dstFileFullName, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Src File: " + srcFileFullName + " was copied to " + dstFileFullName + "</h3>";
      console.log("Src File: " + srcFileFullName + " was copied to " + dstFileFullName);
    });
  }
}

//-------------------------  
// copy-file
//-------------------------
if ( bRunTest == "download-file")
{ 
  var remoteFileFullName = "https://woondu.com/images/airplanes/planes-landing-over-maho-bay/maho-beach-st-maarten2.jpg";
  var dstFileFullName2 = "file://internal/maho_beach_st_maarten2.jpg";//"./maho_beach_st_maarten2.jpg"; //"file://internal/maho_beach_st_maarten2.jpg";//"file://usb:2/maho_beach_st_maarten2.jpg";
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Remote File: " + remoteFileFullName + " was copied to " + dstFileFullName2 + "</h3>";
      var htmlImg:HTMLImageElement  = <HTMLImageElement>document.getElementById("testimg");
      htmlImg.src = "http://127.0.0.1:9080/maho_beach_st_maarten2.jpg";
                       //"./content/maho_beach_st_maarten2.jpg"; //";//"http://127.0.0.1:9080/usb:2/procentric/scap/application/content/maho_beach_st_maarten2.jpg"; //"http://127.0.0.1:9080/[usb:2]:procentric/scap/application/content/maho_beach_st_maarten2.jpg";
                      //"./content/maho_beach_st_maarten2.jpg"; 
                      //"http://127.0.0.1:9080/maho_beach_st_maarten2.jpg"; good
                      //"file://usb:2/maho_beach_st_maarten2.jpg";
                      //"http://127.0.0.1:9080/[usb:2]:maho_beach_st_maarten2.jpg" ;
      console.log("File: " + remoteFileFullName + " was downloaded to " + dstFileFullName);
    }
    nSDKWebOS._iSDKFileSystem.downloadFile(remoteFileFullName, dstFileFullName2, error, context, callback);
    //-------------------------
  }else{
    nSDKWebOS._iSDKFileSystem.promise_downloadFile(remoteFileFullName, dstFileFullName2, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Remote File: " + remoteFileFullName + " was copied to " + dstFileFullName2 + "</h3>";
      console.log("File: " + remoteFileFullName + " was downloaded to " + dstFileFullName2);
    });
  }
}

//-------------------------  
// set-crt-time
//-------------------------
if (( bRunTest == "set-crt-time") || ( bRunTest == "set-get-crt-time"))
{ 
  var crtDateTime = aSrvLocator._iEntityCreation.createDefaultDateTime(error);
  crtDateTime.setYear(2019) ;
  crtDateTime.setMonth(7) ;
  crtDateTime.setDay(2) ;
  crtDateTime.setHour(12) ;
  crtDateTime.setMinutes(11) ;
  crtDateTime.setSeconds(10) ;
  crtDateTime.setMilliseconds(0) ;
  context.setObjectResult(crtDateTime);
  document.getElementById("testreadfile").innerHTML += "<p>Start set crt time...</p>";
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      //var resDateTime = <amGeneralDateTime.am_general.A_DateTime>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Set Current Time : " + crtDateTime.getAsString() + " succesfully</h3>";
      console.log("Set Current Time : " + crtDateTime.getAsString() + " succesfully");
    }
    nSDKWebOS._iSDKTimeSetup.setCrtDateTime(crtDateTime, error, context, callback);
    //-------------------------
  }else{
    nSDKWebOS._iSDKTimeSetup.promise_setCrtDateTime(crtDateTime, error, context, null)
    .then(ctx => 
    { 
      var resDateTime = <amGeneralDateTime.am_general.A_DateTime>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Set Current Time : " + crtDateTime.getAsString() + " succesfully</h3>";
      console.log("Set Current Time : " + crtDateTime.getAsString() + " succesfully");
    });
  }
}


//-------------------------  
// get-crt-time
//-------------------------
if (( bRunTest == "get-crt-time") || ( bRunTest == "set-get-crt-time"))
{ 
  var crtDateTime = aSrvLocator._iEntityCreation.createDefaultDateTime(error);
  context.setObjectResult(crtDateTime);
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      var resDateTime = <amGeneralDateTime.am_general.A_DateTime>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Current Time is : " + resDateTime.getAsString() + "</h3>";
      console.log("Current Time is : " + crtDateTime.getAsString());
    }
    nSDKWebOS._iSDKTimeSetup.getCrtDateTime(error, context, callback);
    //-------------------------
  }else{
    nSDKWebOS._iSDKTimeSetup.promise_getCrtDateTime(error, context, null)
    .then(ctx => 
    { 
      var resDateTime = <amGeneralDateTime.am_general.A_DateTime>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Current Time is : " + resDateTime.getAsString() + "</h3>";
      console.log("Current Time is : " + crtDateTime.getAsString());
    });
  }
}

//-------------------------  
// set-time-zone
//-------------------------
if (( bRunTest == "set-time-zone") || ( bRunTest == "set-get-time-zone"))
{ 
  var newTimeZone2 = aSrvLocator._iEntityCreation.createDefaultTimeZone(error);
  newTimeZone2.setContinent("Europe") ;
  newTimeZone2.setCountry("Romania") ;
  newTimeZone2.setCity("Bucharest") ;
  //context.setObjectResult(newTimeZone2);
  document.getElementById("testreadfile").innerHTML += "<p>Start set crt time...</p>";
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      if (ctx.isError())
        document.getElementById("testreadfile").innerHTML += "<h3>Set Current Time Zone: " + newTimeZone2.getAsString() + " ERROR: "+ ctx.getError().getErrMsg() + "</h3>";
      else
        document.getElementById("testreadfile").innerHTML += "<h3>Set Current Time Zone: " + newTimeZone2.getAsString() + " succesfully</h3>";
      console.log("Set Time Zone: " + newTimeZone2.getAsString() + " succesfully");

      if (( bRunTest == "get-time-zone") || ( bRunTest == "set-get-time-zone"))
      { 
        var crtTimeZone = aSrvLocator._iEntityCreation.createDefaultTimeZone(error);
        context.setObjectResult(crtTimeZone);
        document.getElementById("testreadfile").innerHTML += "<p>Start get time zone...</p>";
        if (bUseCallback == true) 
        {
          //--   the callback
          var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
          {
            var resTimeZone = <amGeneralTimeZone.am_general.A_TimeZone>ctx.getObjectResult();
            document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
            document.getElementById("testreadfile").innerHTML += "<h3>Current Time Zone is : " + resTimeZone.getAsString() + "</h3>";
            console.log("Current Time Zone is : " + crtTimeZone.getAsString());
          }
          nSDKWebOS._iSDKTimeSetup.getTimeZone(error, context, callback2);
        }  
      }
    }
    nSDKWebOS._iSDKTimeSetup.setTimeZone(newTimeZone2, error, context, callback);

    //-------------------------
  }else{
    nSDKWebOS._iSDKTimeSetup.promise_setTimeZone(newTimeZone2, error, context, null)
    .then(ctx => 
    { 
      //var resDateTime = <amGeneralDateTime.am_general.A_DateTime>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Set Current Time : " + newTimeZone2.getAsString() + " succesfully</h3>";
      console.log("Set Current Time Zone : " + newTimeZone2.getAsString() + " succesfully");
    });
  }
}

//-------------------------  
// get-time-zone
//-------------------------
if (( bRunTest == "get-time-zone") )
{ 
  var crtTimeZone = aSrvLocator._iEntityCreation.createDefaultTimeZone(error);
  context.setObjectResult(crtTimeZone);
  document.getElementById("testreadfile").innerHTML += "<p>Start get time zone...</p>";
  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      var resTimeZone = <amGeneralTimeZone.am_general.A_TimeZone>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Current Time Zone is : " + resTimeZone.getAsString() + "</h3>";
      console.log("Current Time Zone is : " + crtTimeZone.getAsString());
    }
    nSDKWebOS._iSDKTimeSetup.getTimeZone(error, context, callback);
    //-------------------------
  }else{
    nSDKWebOS._iSDKTimeSetup.promise_getTimeZone(error, context, null)
    .then(ctx => 
    { 
      var resTimeZone = <amGeneralTimeZone.am_general.A_TimeZone>ctx.getObjectResult();
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Current Time Zone is : " + resTimeZone.getAsString() + "</h3>";
      console.log("Current Time Zone is : " + crtTimeZone.getAsString());
    });
  }
}

//-------------------------  
// capture-screen
//-------------------------
if ( bRunTest == "capture-screen")
{ 
  var fileCapturedScreen = "file://usb:2/CaptureScreen.jpg";//"file://internal/CaptureScreen.jpg";//"file://internal/CaptureScreen.jpg";//"./maho_beach_st_maarten2.jpg"; //"file://internal/maho_beach_st_maarten2.jpg";//"file://usb:2/CaptureScreen.jpg";
  var captureScreenInfo = aSrvLocator._iEntityCreation.createDefaultCaptureScreenInfo(error);
  // captureScreenInfo.setImageSystemPath(fileCapturedScreen);

  if (bUseCallback == true) 
  {
    //--   the callback
    var callback = function(ctx: amGeneralContext.am_general.A_Context)
    {
      
      //document.getElementById("testreadfile").innerHTML += "<p>use-callback</p>";
      //document.getElementById("testreadfile").innerHTML += "<h3>Capture Screen File: " + captureScreenInfo.getImageSystemPath() + "</h3>";
      //var htmlImg:HTMLImageElement  = <HTMLImageElement>document.getElementById("testimg");
      //htmlImg.src = captureScreenInfo.getImageSystemPath();
      

    }
    nSDKWebOS._iSDKTvSignageSetup.captureScreen(captureScreenInfo, error, context, callback);
    //-------------------------
  }else{
    nSDKWebOS._iSDKTvSignageSetup.promise_captureScreen(captureScreenInfo, error, context, null)
    .then(ctx => 
    { 
      document.getElementById("testreadfile").innerHTML += "<p>use-promise</p>";
      document.getElementById("testreadfile").innerHTML += "<h3>Remote File: " + remoteFileFullName + " was copied to " + dstFileFullName2 + "</h3>";
      console.log("File: " + remoteFileFullName + " was downloaded to " + dstFileFullName2);
    });
  }
}

//}

//=====================================================================================================
//=====================================================================================================
/*
public writeTextFile( fileFullName: string, fileContent: string,
  error: amGeneralError.am_general.A_Error, 
  context: amGeneralContext.am_general.A_Context, callback) 
*/

//--------------------------------------------------------- previous tests ---------------------------------
/*
//import rmFileReader = require("./rmod_filereader/FileReader");

//import rmFileReader = require("../app/ts/native/nm_transversalservices/n_sdk_webos/FileReader");
//import { AsyncResource } from "async_hooks";
var rFileReader:rmFileReader.rmod_filereader.FileReader = new rmFileReader.rmod_filereader.FileReader();
//rFileReader.ReadFile(fileFullName);

var context = { 
  result: "",
  step: 1
}; 

var ret = rFileReader.promise_api_readFile_text(fileFullName, null, context) ;
if (ret == 0)
{
  document.getElementById("testreadfile").innerHTML += "<p>return 0</p>";
}
document.getElementById("testreadfile").innerHTML += "<p>return 1</p>";
*/

//async() =>
//{
  //rFileReader.api_readFile_text(fileFullName, null, context);   //ReadFile(fileFullName); //rFileReader.readTextFile(fileFullName, context) ;
  //document.getElementById("testreadfile").innerHTML += context.result;
  //console.log( context.result);
//}
/*
function asyncFunc() {
  return new Promise(
      function (resolve, reject) {
          rFileReader.api_readFile_text(fileFullName, null, context);
          resolve(context.result);
          //···
          //reject(error);
      });
}*/

/*
document.getElementById("testreadfile").innerHTML += "<p>before promise</p>";
console.log( "<p>before promise</p>");
rFileReader.api_readFile_text(fileFullName, null, context)
.then(result => 
  { 
    document.getElementById("testreadfile").innerHTML += context.result;
    console.log( context.result);
    document.getElementById("testreadfile").innerHTML += "<p>after read file</p>";
  });
  document.getElementById("testreadfile").innerHTML += "<p>after promise</p>";
  console.log( "<p>after promise</p>");
*/

//.catch(error => 
  //  { ··· });

/*
asyncFunc()
.then(result => { ··· })
.catch(error => { ··· });
*/

//--------------------------------------------
//import rmConfigurationServicesServiceContainer = require("../app/ts/reusable/rm_configurationservices/r_servicecontainer/R_ServiceContainer");
//rmConfigurationServicesServiceContainer.rm_configurationservices.R_ServiceContainer.startup();
//--------------------------------------------
/*
import * as rmodPersonal from "./rmod_personal/person";
import * as rmodPersonal2 from "./rmod_personal/salary";
import * as rmodPersonal3 from "./rmod_personal/person";

import * as rmConfig from "../config/StartupConfig";
import * as rmConfigWebOS             from "../config/PlaybackEngine_DefaultConfiguration_forWebOS_406";
import * as rmConfigTizen             from "../config/PlaybackEngine_DefaultConfiguration_forTizen_SSSP4";
import * as rmConfigNodeJs            from "../config/PlaybackEngine_DefaultConfiguration_forNodeJs_10153LTS";
import * as rmConfigStandaloneBrowser from "../config/PlaybackEngine_DefaultConfiguration_forStandaloneBrowser_101";


function greeterPerson (person: rmodPersonal.rmod_personal.Person){ 
    return "name: "+person.name;
}

function greeterSalary (salary: rmodPersonal2.rmod_personal.Salary){ 
    return "salary: "+salary.value;
}

var message = "nothing";
var os ="webos";


var strStartupConfig = "";
var oStartupConfig = null;

var strPlatformConfig = "";
var oPlatformConfig = null;
//alert("start");
require(["../config/StartupConfig"], (dynRMConfig: typeof rmConfig) => {
   
  strStartupConfig = dynRMConfig.rm_config.strStartupConfig;
  //alert(strStartupConfig);
  try{
    //strStartupConfig = '{ "os":"webos", "firmware":"SSSP4", "customerid":"renaultv1.01", "appbasepath":"/moodmedia", "mediafilesbasepath":"/media_files"}';
    oStartupConfig = JSON.parse(strStartupConfig);
  }catch(e)
  {
    alert("Fatal Error : StartupConfig - Invalid json format"); 
  }
  if (oStartupConfig != null)
  {
    os = oStartupConfig.os;
    //-----------------------
    if       (os =="WebOS")
    {
      //alert(os);
      require(["../config/PlaybackEngine_DefaultConfiguration_forWebOS_406"], (dynRMConfigWebOS: typeof rmConfigWebOS) => {
        strPlatformConfig = dynRMConfigWebOS.rm_config.strPlatformConfiguration_forWebOS_406 ;
        //alert(strPlatformConfig);
        load(os);
      });
    //-----------------------
    }else if (os == "Tizen"){
      require(["../config/PlaybackEngine_DefaultConfiguration_forTizen_SSSP4"], (dynRMConfigTizen: typeof rmConfigTizen) => {
        strPlatformConfig = dynRMConfigTizen.rm_config.strPlatformConfiguration_forTizen_SSSP4 ;
        //alert(strPlatformConfig);
        load(os);
      });
    //-----------------------
    }else if (os == "NodeJs"){
      require(["../config/PlaybackEngine_DefaultConfiguration_forNodeJs_10153LTS"], (dynRMConfigNodeJs: typeof rmConfigNodeJs) => {
        strPlatformConfig = dynRMConfigNodeJs.rm_config.strPlatformConfiguration_forNodeJs_10153LTS;
        //alert(strPlatformConfig);
        load(os);
      });
    //-----------------------
    }else if (os == "StandaloneBrowser"){
      require(["../config/PlaybackEngine_DefaultConfiguration_forStandaloneBrowser_101"], (dynRMConfigStandaloneBrowser: typeof rmConfigStandaloneBrowser) => {
        strPlatformConfig = dynRMConfigStandaloneBrowser.rm_config.strPlatformConfiguration_forStandaloneBrowser_101;
        //alert(strPlatformConfig);
        load(os);
      });
    }
    
  }
  
});
*/

/*
  var txt = '';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
  if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
    txt = xmlhttp.responseText;
    var StartupConfig = JSON.parse(txt);
    os = StartupConfig.os;
    //alert(os);
    load(os);
    }
    //else{
      //  load("tizen");
    //}
  };
  //let fileUrl = URL.createObjectURL("./StartupConfig.json");
  xmlhttp.open("GET","./StartupConfig.json",true);
  xmlhttp.send();
*/
/*
function load(os: string) : void
{
   // your page initialization code here
   // the DOM will be available here
   if (os=="WebOS") {

     require(["./rmod_personal/person"], (dynRModPersonal: typeof rmodPersonal) => {
         var person= new dynRModPersonal.rmod_personal.Person("John");
         message = greeterPerson(person);
         document.getElementById("maindiv").innerHTML=message;
         //alert(message);
     });
   }
   else if (os=="Tizen")
   { 
     require(["./rmod_personal/salary"], (dynRModPersonal2: typeof rmodPersonal2) => {
        var salary = new dynRModPersonal2.rmod_personal.Salary("30.000 $");
        message = greeterSalary(salary);
        document.getElementById("maindiv").innerHTML=message;
        //alert(message);
     });
   }
   else if (os=="NodeJs")
   {
    require(["./rmod_personal/person"], (dynRModPersonal: typeof rmodPersonal) => {
      var person= new dynRModPersonal.rmod_personal.Person("NodeJs");
      message = greeterPerson(person);
      document.getElementById("maindiv").innerHTML=message;
      //alert(message);
    });
  }else if (os=="StandaloneBrowser")
    { 
       require(["./rmod_personal/salary"], (dynRModPersonal2: typeof rmodPersonal2) => {
            var salary = new dynRModPersonal2.rmod_personal.Salary("10.000 $");
            message = greeterSalary(salary);
            document.getElementById("maindiv").innerHTML=message;
            //alert(message);
         });
    }
           
 }
//);
*/

//(function() {
  //  document.getElementById("maindiv").innerHTML=message;
//});

//$(document).ready(function(){
  //  var message = greeter(person);
  //  $("#status")[0].innerHTML=message;
//});
