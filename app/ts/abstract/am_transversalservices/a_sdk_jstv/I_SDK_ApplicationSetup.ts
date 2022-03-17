import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralAppServerProperties = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");
import amGeneralAppInstallProperties = require("../../../../../app/ts/abstract/am_general/a_appinstallproperties/A_AppInstallProperties");


export module am_transversalservices
{
  export interface I_SDK_ApplicationSetup extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    //---------------------------------
    // Install / Uninstall Application 
    //---------------------------------

    //-------------------------------------
    installApplication(appServerProperties: amGeneralAppInstallProperties.am_general.A_AppInstallProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    uninstallApplication(appServerProperties: amGeneralAppInstallProperties.am_general.A_AppInstallProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;

    getAppProperties(appInstallProperties: amGeneralAppInstallProperties.am_general.A_AppInstallProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;
    setAppProperties(appServerProperties: amGeneralAppInstallProperties.am_general.A_AppInstallProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;

    getAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    setAppServerProperties(appServerProperties: amGeneralAppServerProperties.am_general.A_AppServerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;

  }
} 