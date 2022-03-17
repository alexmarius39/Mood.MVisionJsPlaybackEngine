import amGeneral = require("../../am_general/i_interface/I_Interface");
import amError   = require("../../am_general/a_error/A_Error");
import amContext = require("../../am_general/a_context/A_Context");

export module am_renderingservices
{
  export interface AI_SettingsSyncInterfaceMain extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    start(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback);
    stop(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback);
  }
} 