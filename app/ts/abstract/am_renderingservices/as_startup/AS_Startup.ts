import amRenderingServices = require("../a_renderingservice/A_RenderingService");

import amStartupMain = require("./AI_StartupMain");
import amStartupConfig = require("./AI_StartupConfig");

export module am_renderingservices
{
  export interface AS_StartupService extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iStartupMain : amStartupMain.am_renderingservices.AI_StartupMain ;
    _iStartupConfig : amStartupConfig.am_renderingservices.AI_StartupConfig ;
  }
} 