import amGeneral = require("../../am_general/i_interface/I_Interface");
import amError   = require("../../am_general/a_error/A_Error");
import amContext = require("../../am_general/a_context/A_Context");

import amLiveCommandsSettings = require("../../am_general/ae_livecommands/AE_LiveCommandsSettings");
export module am_nonrenderingservices
{
  export interface AI_LiveCommandsMain extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    init(error: amError.am_general.A_Error) : void;
    startListener(aLiveCommandsSettings: amLiveCommandsSettings.am_general.AE_LiveCommandsSettings,
      error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback);
  }

} 