import amGeneral = require("../../am_general/i_interface/I_Interface");
import amError   = require("../../am_general/a_error/A_Error");
import amContext = require("../../am_general/a_context/A_Context");

import amSettingsSync = require("../../am_general/ae_devicesettings/AE_SettingsSync");

export module am_nonrenderingservices
{
  export interface AI_SettingsSyncMain extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    init(error: amError.am_general.A_Error): void;

    start(aSettingsSync: amSettingsSync.am_general.AE_SettingsSync, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback);
    updateServerSettings(jsonSetting: any, aSettingsSync: amSettingsSync.am_general.AE_SettingsSync, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback);
    loadLocalDeviceSettings(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback);

    saveSettingsFile(strFileName: string, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void;
  }
} 