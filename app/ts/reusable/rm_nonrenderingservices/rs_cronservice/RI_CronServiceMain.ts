import amICronServiceMain = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AI_CronServiceMain");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RS_CronService");
                                                     
//==================================================================                                                     
export module rm_nonrenderingservices
{
  export class RI_CronServiceMain implements amICronServiceMain.am_nonrenderingservices.AI_CronServiceMain
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.RS_CronService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.RS_CronService)  
    {
      this._owner = owner;  
    }

    //--------------------------------------------------
    public startup_schedule(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this._owner.startup_schedule(error, context, callback);
    }

    //------------------------------------
    public shutdown_schedule(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this._owner.shutdown_schedule(error, context, callback);
    }

  }
} 