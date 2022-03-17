import amITestService2Main = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice2/AI_TestService2Main");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmRenderingServices = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice2/RS_TestService2");
                                                     
//==================================================================                                                     
export module rm_renderingservices
{
  export class RI_TestService2Main implements amITestService2Main.am_renderingservices.AI_TestService2Main
  {
    _name: string;    

    //----------- owner
    _owner: rmRenderingServices.rm_renderingservices.RS_TestService2;

    //----------- constructor 
    constructor(owner: rmRenderingServices.rm_renderingservices.RS_TestService2)  
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