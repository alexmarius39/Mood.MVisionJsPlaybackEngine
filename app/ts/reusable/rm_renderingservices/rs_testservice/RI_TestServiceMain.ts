import amITestServiceMain = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AI_TestServiceMain");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice/RS_TestService");
                                                     
//==================================================================                                                     
export module rm_renderingservices
{
  export class RI_TestServiceMain implements amITestServiceMain.am_renderingservices.AI_TestServiceMain
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.RS_TestService;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.RS_TestService)  
    {
      this._owner = owner;  
    }

    //--------------------------------------------------
    public test(iteration : number, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this._owner.test(iteration, error, context, callback);
    }


  }
} 