import amScreenshotMain = require("../../../abstract/am_renderingservices/as_screenshot/AI_ScreenshotMain");
import amGeneralError   = require("../../../abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../abstract/am_general/a_context/A_Context");

import amGeneralScreenshotOptions = require("../../../abstract/am_general/ae_screenshotoptions/AE_ScreenshotOptions");

import rmScreenshotService = require("./RS_Screenshot");

export module rm_renderingservices
{
  export class RI_ScreenshotMain implements amScreenshotMain.am_renderingservices.AI_ScreenshotMain
  {
    _name: string;    

    //----------- owner
    _owner: rmScreenshotService.rm_renderingservices.RS_ScreenshotService;

    //----------- constructor 
    constructor(owner: rmScreenshotService.rm_renderingservices.RS_ScreenshotService)  
    {
      this._owner = owner;  
    }

    public init(error : amGeneralError.am_general.A_Error) : void
    {
      this._owner.init(error);
    }

    public saveFileAndReturnBytes(aScreenshotOptions:  amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions,
      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._owner.saveFileAndReturnBytes(aScreenshotOptions, error, context, callback);
    }

    public generateAndSendScreenshot(aScreenshotOptions:  amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions,
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._owner.generateAndSendScreenshot(aScreenshotOptions, error, context, callback);
    }
  }
} 