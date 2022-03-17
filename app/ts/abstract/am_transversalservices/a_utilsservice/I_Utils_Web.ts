import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralHttpRequest = require("../../../../../app/ts/abstract/am_general/a_httprequest/A_HttpRequest");

export module am_transversalservices
{
  export interface I_Utils_Web extends amGeneral.am_general.I_Interface
  {
    _name: string;

    sendHttpRequest(httpRequest: amGeneralHttpRequest.am_general.A_HttpRequest, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void;   
  }
} 