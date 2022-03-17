import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

export module am_coreservices
{
  export interface I_PlaylistDownloaderMain extends amGeneral.am_general.I_Interface
  {
    _name: string;  
    
    download(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    updatePlaylist(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
  }
} 