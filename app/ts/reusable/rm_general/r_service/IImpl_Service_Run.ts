import amGeneralIServiceRun = require("../../../../../app/ts/abstract/am_general/a_service/I_Service_Run");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");


import rmGeneralService = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
                                                     

export module rm_general
{
  export class IImpl_Service_Run implements amGeneralIServiceRun.am_general.I_Service_Run
  {
    _name: string;    

    //----------- owner
    _owner: rmGeneralService.rm_general.R_Service;

    //----------- constructor 
    constructor(owner: rmGeneralService.rm_general.R_Service)  
    {
      this._owner = owner;  
    }

    //-----------------------------
    public setServiceStatus(serviceStatus : string) : number
    {
      return this._owner.setServiceStatus(serviceStatus);
    }

    //-----------------------------
    public getServiceStatus() : string
    {
      return this._owner.getServiceStatus();
    }

    //-----------------------------
    public run(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.run(error, context, callback);
    }
    //-----------------------------
    public shutdown(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      this._owner.shutdown(error, context, callback);
    }

    //-----------------------------
    public setInterruptCallback(interruptCallback) : void
    {
      this._owner.setInterruptCallback(interruptCallback);
    }
 
    //------------------------------------
    public isInterrupted() : boolean
    {
      return this._owner.isInterrupted();
    }

    //---------------------------------------------------
    setIsInterrupted(isInterrupted : boolean) : void
    {
      this.setIsInterrupted(isInterrupted);
    }

    //-----------------------------
    public addPostponedServiceAbstractName(postponeServiceAbstractName: string)
    {
      this._owner.addPostponedServiceAbstractName(postponeServiceAbstractName);
    }

    //-----------------------------------------------------------
    public getPostponedServiceAbstractNameList() : Array<string>
    {
      return this._owner.getPostponedServiceAbstractNameList();
    }

  }
} 