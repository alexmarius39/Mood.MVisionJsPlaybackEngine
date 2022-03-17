import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_ApplicationSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralAppServerProperties = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");
import amGeneralAppInstallProperties = require("../../../../../app/ts/abstract/am_general/a_appinstallproperties/A_AppInstallProperties");

import rmTransversalServicesSDKClient = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/R_SDK_Client");

export module rm_transversalservices
{
  export class IImpl_SDK_ApplicationSetup_SDKClient implements amGeneral.am_transversalservices.I_SDK_ApplicationSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKClient.rm_transversalservices.R_SDK_Client;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKClient.rm_transversalservices.R_SDK_Client)  
    {
      this._owner = owner;  
    }

    
    //---------------------------------
    // Install / Uninstall Application 
    //---------------------------------

    //-------------------------------------
    public installApplication(appServerProperties: amGeneralAppInstallProperties.am_general.A_AppInstallProperties, 
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      // to do
      console.log("Installation ... to do");
      context.setBoolResult(true);
      context.setError(error);
      if (callback != null)
        callback(context);    
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
    public getAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-------------------------------------
    public setAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, 
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
    }

  }
} 