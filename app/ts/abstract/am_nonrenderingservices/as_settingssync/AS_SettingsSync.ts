import amNonRenderingServices = require("../a_nonrenderingservice/A_NonRenderingService");

import amSettingsSyncMain = require("./I_SettingsSyncMain");
import amSettingsSyncConfig = require("./I_SettingsSyncConfig");

export module am_nonrenderingservices
{
  export interface A_SettingsSyncService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iSettingsSyncMain : amSettingsSyncMain.am_nonrenderingservices.AI_SettingsSyncMain ;
    _iSettingsSyncConfig : amSettingsSyncConfig.am_nonrenderingservices.AI_SettingsSyncConfig ;
  }
} 