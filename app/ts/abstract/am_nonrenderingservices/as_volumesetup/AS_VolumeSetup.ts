import amNonRenderingServices = require("../a_nonrenderingservice/A_NonRenderingService");

import amVolumeSetupMain = require("./AI_VolumeSetupMain");
import amVolumeSetupConfig = require("./AI_VolumeSetupConfig");

export module am_nonrenderingservices
{
  export interface AS_VolumeSetupService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iVolumeSetupMain : amVolumeSetupMain.am_nonrenderingservices.AI_VolumeSetupMain;
    _iVolumeSetupConfig : amVolumeSetupConfig.am_nonrenderingservices.AI_VolumeSetupConfig;
  }
} 