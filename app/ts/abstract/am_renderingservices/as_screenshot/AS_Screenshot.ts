import amRenderingServices = require("../a_renderingservice/A_RenderingService");

import amScreenshotMain = require("./AI_ScreenshotMain");
import amScreenshotConfig = require("./AI_ScreenshotConfig");

export module am_renderingservices
{
  export interface AS_ScreenshotService extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iScreenshotMain : amScreenshotMain.am_renderingservices.AI_ScreenshotMain ;
    _iScreenshotConfig : amScreenshotConfig.am_renderingservices.AI_ScreenshotConfig ;
  }
} 