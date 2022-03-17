import amRenderingServices = require("../a_renderingservice/A_RenderingService");

import amSettingsSyncInterfaceMain = require("./I_SettingsSyncInterfaceMain");
import amSettingsSyncInterfaceConfig = require("./I_SettingsSyncInterfaceConfig");

export module am_renderingservices
{
  export interface A_SettingsSyncInterfaceService extends amRenderingServices.am_renderingservices.A_RenderingService
  {
    _iSettingsSyncInterfaceMain : amSettingsSyncInterfaceMain.am_renderingservices.AI_SettingsSyncInterfaceMain;
    _iSettingsSyncInterfaceConfig : amSettingsSyncInterfaceConfig.am_renderingservices.AI_SettingsSyncInterfaceConfig;
  }
} 