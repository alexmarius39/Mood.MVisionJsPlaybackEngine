import amNonRenderingServices = require("../a_nonrenderingservice/A_NonRenderingService");

import amLiveCommandsMain = require("./AI_LiveCommandsMain");
import amLiveCommandsConfig = require("./AI_LiveCommandsConfig");

export module am_nonrenderingservices
{
  export interface AS_LiveCommandsService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iLiveCommandsMain : amLiveCommandsMain.am_nonrenderingservices.AI_LiveCommandsMain;
    _iLiveCommandsConfig: amLiveCommandsConfig.am_nonrenderingservices.AI_LiveCommandsConfig;
  }
} 