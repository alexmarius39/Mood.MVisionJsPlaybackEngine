import amITestService3Main = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice3/AI_TestService3Main");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice3/RS_TestService3");
                                                     
//==================================================================                                                     
export module rm_renderingservices
{
  export class RI_TestService3Main implements amITestService3Main.am_renderingservices.AI_TestService3Main
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.RS_TestService3;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.RS_TestService3)  
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