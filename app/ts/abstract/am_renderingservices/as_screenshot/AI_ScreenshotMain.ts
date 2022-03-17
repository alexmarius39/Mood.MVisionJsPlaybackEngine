import amGeneral = require("../../am_general/i_interface/I_Interface");
import amGeneralError   = require("../../am_general/a_error/A_Error");
import amGeneralContext = require("../../am_general/a_context/A_Context");
import amGeneralScreenshotOptions = require("../../am_general/ae_screenshotoptions/AE_ScreenshotOptions");

export module am_renderingservices
{
  export interface AI_ScreenshotMain extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    init(error: amGeneralError.am_general.A_Error) : void;
    generateAndSendScreenshot(aScreenshotOptions:  amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions,
                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void;
  }
} 