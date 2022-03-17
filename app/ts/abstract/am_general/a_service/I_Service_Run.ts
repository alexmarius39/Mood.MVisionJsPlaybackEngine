import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

//import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module am_general
{
  export interface I_Service_Run extends amGeneral.am_general.I_Interface
  {
    _name: string; 

    setServiceStatus(serviceStatus : string) : number;
    getServiceStatus() : string;

    run(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void;
    shutdown(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void;

    setInterruptCallback(interruptCallback) : void;
    isInterrupted() : boolean;
    setIsInterrupted(isInterrupted : boolean) : void;

    addPostponedServiceAbstractName(postponeServiceAbstractName: string);
    getPostponedServiceAbstractNameList() : Array<string>;
  }
} 