import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_ApplicationSetup");

import nmTransversalServicesTizen = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralPowerProperties       = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");

import amGeneralAppServerProperties = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");
import amGeneralAppInstallProperties = require("../../../../../app/ts/abstract/am_general/a_appinstallproperties/A_AppInstallProperties");
//import * as tizenTest from "./tizentest";

declare var tizen : any;
declare var b2bapis : any;


export module nm_transversalservices
{

  export class IImpl_SDK_ApplicationSetup_Tizen implements amGeneral.am_transversalservices.I_SDK_ApplicationSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen;

    //----------- constructor 
    constructor(owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen)  
    {

      this._owner = owner;  
    }

    //-------------------------------------
    public installApplication( appServerProperties: amGeneralAppInstallProperties.am_general.A_AppInstallProperties, 
                               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var self = this;
      //self._owner._debug = true;
      var bReboot = appServerProperties.getReboot();
      
      var callbackConfigureApplicationUrl = function callbackConfigureApplicationUrl(ctx1)
      {
        var setupOk = ctx1.getBoolResult();

        if (!setupOk)
        {
          if (self._owner._debug)
          { 
             document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : configureApplicationUrl Error:"  
                                                                  + ctx1.getError().error.getErrId() + ctx1.getError().error.getErrMsg() + "</p>";
          }
          if (error != null)
            error.setError(ctx1.getError().error.getErrId(), ctx1.getError().error.getErrMsg());
          if (context != null)
          {
            context.setBoolResult(false);
            context.setError(error);
            callback(context);
          }
          return;
        }
        //----------- setup url Ok
        context.setBoolResult(true);
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : configureApplicationUrl ... OK</p>";    
        }
        //---------------------------------
        if (! bReboot)
        {
          if (self._owner._debug)
          { 
            document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : No Reboot...Ok</p>";
          }          
          if (context != null)
          {
            context.setBoolResult(true);
            context.setError(error);
            callback(context);
          }
          return;
        }
        //-------------------------------------
        var callbackReboot = function callbackReboot(ctx2 )
        {  
          var rebootOk = ctx2.getBoolResult();

          if (!rebootOk)
          {
            if (self._owner._debug)
            { 
              document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : reboot Error 6092:" 
                                                                         + ctx2.getError().error.getErrMsg() + "</p>";
            }
            if (error != null)
              error.setError(ctx2.getError().error.getErrId(), ctx2.getError().error.getErrMsg());
            if (context != null)
            {
              context.setBoolResult(false);
              context.setError(error);
              callback(context);
            }  
            return;
          }
          //------------------- rebootOk
          if (self._owner._debug)
          { 
            document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : reboot... OK</p>";     
          }
          if (context != null)
          {
            context.setBoolResult(true);
            context.setError(error);
            callback(context);
          }
        }
        //=============================
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : reboot...</p>";
        }        
        var aPowerProperties: amGeneralPowerProperties.am_general.A_PowerProperties = self._owner._aServiceLocator._iEntityCreation.createDefaultPowerProperties(error);
        aPowerProperties.setPowerCommand("reboot");
        self._owner._iSDKPowerSetup.executePowerCommand(aPowerProperties, error, context, callbackReboot);
      }
      //==============================
      if (self._owner._debug)
      { 
        document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : configureApplicationUrl...</p>";
      }      
      self.configureApplicationUrl(appServerProperties, error, context, callbackConfigureApplicationUrl);
    }




    //-----------------------------
    // Upgrade Application 
    //-----------------------------
    //-------------------------------------
    public configureApplicationUrl( appServerProperties: amGeneralAppInstallProperties.am_general.A_AppInstallProperties, 
                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var self = this;
      //self._owner._debug = true;
      var aSoftwareTransfer     = appServerProperties.getSoftwareFileTransfer();
      var aSoftwareDstFileInfo  = aSoftwareTransfer.getSrcFileInfo();
      var srcSoftwareUrlPath    = aSoftwareDstFileInfo.getStorage() + aSoftwareDstFileInfo.getPath(); //dstStorageName + dstFolderName + dstFileName; 
      //var dstPathFullName = dstStorageName + dstFolderName;

      var bUsedEmptyUrl = appServerProperties.getUseAppEmptyUrl();
      if (bUsedEmptyUrl)
        srcSoftwareUrlPath  = "";

      context.setBoolResult(false);
      var onSuccess = function(val) 
      {
        console.log("[setURLLauncherAddress] success : " + val);
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : setUrlLauncher ... OK</p>";
        }      
        context.setBoolResult(true);
        context.setError(error);
        if (callback != null)
        {
          callback(context);    
        }    
      }
      var onError = function(err) 
      {
        console.log( "[tizen:setURLLauncherAddress] code :" + err.code + " - " + err.name + " - " + err.message); 
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : setUrlLauncher...ERROR 6052:" + err.code + " - " + err.name + " - " + err.message + "</p>";
        }
        context.setBoolResult(false);
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(6052, "SDK installApplication : setUrlLauncher error [6052]: " + err.code + " - " + err.name + " - " + err.message );
        if (callback != null)
          callback(context);
      }
      console.log("SDK installApplication : setUrlLauncher");
      if (self._owner._debug)
      { 
        document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : setUrlLauncher [" + srcSoftwareUrlPath + "]...</p>";
      }      
      try{
        //=========================================================
        b2bapis.b2bcontrol.setURLLauncherAddress(srcSoftwareUrlPath, onSuccess, onError); //"http://10.88.43.36:8080/New2016/Test/", onSuccess, onError); 	
      }catch(err2){
        console.log( "[tizen:setURLLauncherAddress] code :" + err2.code + " - " + err2.name + " - " + err2.message); 
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : setUrlLauncher...ERROR 6053:" + err2.code + " - " + err2.name + " - " + err2.message + "</p>";
        }
        context.setBoolResult(false);
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(6052, "SDK installApplication : setUrlLauncher error [6053]: " + err2.code + " - " + err2.name + " - " + err2.message );
        if (callback != null)
          callback(context);
      }
    }


    //-------------------------------------
    public installApplication__(appServerProperties: amGeneralAppInstallProperties.am_general.A_AppInstallProperties, 
                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var self = this;
      //self._owner._debug = true;

      var aSoftwareTransfer = appServerProperties.getSoftwareFileTransfer();
      var aSoftwareDstFileInfo  = aSoftwareTransfer.getDstFileInfo();
      var dstSoftwareFileFullName = aSoftwareDstFileInfo.getFullUrlName(); //dstStorageName + dstFolderName + dstFileName; 
      //var dstPathFullName = dstStorageName + dstFolderName; 

      context.setBoolResult(false);
      var onInstallation = 
      {
        onprogress: function(packageId, percentage) {
            console.log("On installation(" + packageId + ") : progress(" + percentage + ")");
        },
        oncomplete: function(packageId) {
          if (self._owner._debug)
          { 
            document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : install ... OK</p>";
          }      
          console.log("Installation(" + packageId + ") Complete");
          context.setBoolResult(true);
          context.setError(error);
          if (callback != null)
            callback(context);    
        }
      }

      var onError = function (err3) 
      { 
        console.log("Error occurred on installation : " + err3.name);
        console.log( "tizen:application-setup error [6052]: Cannot install application " + " : error [" + JSON.stringify(err3.name) + "]"); 
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : install ERROR ... error [" + JSON.stringify(err3.name) + "]</p>";
        }
        context.setBoolResult(false);
        context.setError(error);
        if (context.getError() != null)
           context.getError().setError(6052, "tizen:application-setup error [6052]: Cannot install application " + " : error [" + JSON.stringify(err3.name) + "]" );
        if (callback != null)
          callback(context);
      }

      try{
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : resolve  ..." + dstSoftwareFileFullName + "</p>";
        }
        // Let's assume that the "test.wgt" file exists in the downloads directory
        tizen.filesystem.resolve(dstSoftwareFileFullName,  //"downloads/test.wgt",
          function (file) 
          {
              console.log("file URI : " + file.toURI());
              if (self._owner._debug)
              { 
                document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : resolve ... OK</p>";
                document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : install ... " + + file.toURI() + "</p>";
              }      
              tizen.package.install(file.toURI(), onInstallation, onError);
          },
          function (err2) 
          {
            if (self._owner._debug)
            { 
              document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : resolve ERROR ... error [" + JSON.stringify(err2.name) + "]</p>";
            }
            console.log( "tizen:application-setup error [6051]: Cannot resolve and open widget file" + " : error [" + JSON.stringify(err2.name) + "]"); 
            context.setBoolResult(false);
            context.setError(error);
            if (context.getError() != null)
              context.getError().setError(6051, "tizen:application-setup error [6051]: Cannot resolve and open widget file" + " : error [" + JSON.stringify(err2.name) + "]"); 
            if (callback != null)
              callback(context);
          },
          "r");
      }catch(err1)
      {
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : resolve catch ERROR ... error [" + JSON.stringify(err1.name) + "]</p>";
        }
        console.log( "tizen:application-setup error [6050]: Catch error trying to resolve and open widget file" + " : error [" + JSON.stringify(err1.name) + "]"); 
        context.setBoolResult(false);
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(6051, "tizen:application-setup error [6050]: Cannot resolve and open widget file" + " : error [" + JSON.stringify(err1.name) + "]"); 
        if (callback != null)
          callback(context);
      }
    }

    //-------------------------------------
    public uninstallApplication(appServerProperties: amGeneralAppInstallProperties.am_general.A_AppInstallProperties, 
                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    //-------------------------------------
    public getAppProperties(appInstallProperties: amGeneralAppInstallProperties.am_general.A_AppInstallProperties, 
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }

    //-------------------------------------
    public setAppProperties(appServerProperties: amGeneralAppInstallProperties.am_general.A_AppInstallProperties, 
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }


    //-----------------------------
    // AppServer get/set Properties 
    //-----------------------------

    //-------------------------------------
    public getAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var self = this;
      console.log("SDK Application Setup : getUrlLauncher");
      if (self._owner._debug)
      { 
        document.getElementById("rend.message").innerHTML += "<p>SDK getAppServerProperties : getUrlLauncher ...</p>";
      }      
      var URLLauncherAddress = null;
      try{
        URLLauncherAddress = b2bapis.b2bcontrol.getURLLauncherAddress();
        appServerProperties.setAppServerUrl(URLLauncherAddress);
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK getAppServerProperties : getUrlLauncher()" + URLLauncherAddress + "</p>";
        }        
        context.setBoolResult(true);
        context.setError(error);
        if (callback != null)
        {
          callback(context);    
        }    
        return;
      // -----------------------------  
      }catch(err2){
        console.log( "[tizen:getURLLauncherAddress] code :" + err2.code + " - " + err2.name + " - " + err2.message); 
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK getAppServerProperties error [7052]" + err2.code + " - " + err2.name + " - " + err2.message + "</p>";
        }
        context.setBoolResult(false);
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(7052, "SDK installApplication : getAppServerProperties error [7052]: " + err2.code + " - " + err2.name + " - " + err2.message );
        if (callback != null)
          callback(context);
      }
    }


    //-------------------------------------
    public setAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }
    


  }
} 


/*

var B2BApisService = {

    getURLLauncher: function () {
    	var URLLauncherAddress = null;
    	try {
    		URLLauncherAddress = b2bapis.b2bcontrol.getURLLauncherAddress();
    	} catch (e) {
    		logsComponent.log("[getURLLauncherAddress] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
    	}
    	if(null !== URLLauncherAddress){
    		logsComponent.log("[getURLLauncherAddress] call syncFunction type: " + URLLauncherAddress);
    	}
    },

    setURLLauncher: function () {
    	var onSuccess = function(val) {
    		logsComponent.log("[setURLLauncherAddress] success : " + val);
    	}
    	var onError = function(error) {
    		logsComponent.log("[setURLLauncherAddress] code :" + error.code + " error name: " + error.name + " message " + error.message);
    	}
    	console.log("[setURLLauncherAddress] ");
    	b2bapis.b2bcontrol.setURLLauncherAddress("http://10.88.43.36:8080/New2016/Test/", onSuccess, onError); 	
    },
    setURLLauncherTimeOut: function() {
    	var onSuccess = function(val) {
    		logsComponent.log("[setURLLauncherTimeOut] success : " + val);
    	}
    	var onError = function(error) {
    		logsComponent.log("[setURLLauncherTimeOut] code :" + error.code + " error name: " + error.name + " message " + error.message);
    	}
    	b2bapis.b2bcontrol.setURLLauncherTimeOut("90SEC", onSuccess, onError);
	},
	 getURLLauncherTimeOut: function () {
	    	var TIMEOUT = null;
	    	try {
	    		TIMEOUT = b2bapis.b2bcontrol.getURLLauncherTimeOut();
	    	} catch (e) {
	    		logsComponent.log("[getURLLauncherTimeOut] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
	    	}
	    	if(null !== TIMEOUT){
	    		logsComponent.log("[getURLLauncherTimeOut] call syncFunction type: " + TIMEOUT);
	    	}
	    },

}
*/