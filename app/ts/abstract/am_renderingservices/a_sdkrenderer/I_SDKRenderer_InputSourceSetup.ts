import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

export module am_renderingservices
{
  export interface I_SDKRenderer_InputSourceSetup extends amGeneral.am_general.I_Interface
  {
    _name: string;    



  }
} 