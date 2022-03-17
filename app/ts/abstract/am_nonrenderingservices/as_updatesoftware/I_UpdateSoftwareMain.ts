import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

export module am_nonrenderingservices
{
  export interface I_UpdateSoftwareMain extends amGeneral.am_general.I_Interface
  {
    _name: string;  
    
    update(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    
  }
} 