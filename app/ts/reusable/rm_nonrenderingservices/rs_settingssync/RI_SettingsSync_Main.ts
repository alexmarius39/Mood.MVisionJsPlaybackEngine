import amSettingSyncServiceMain = require("../../../abstract/am_nonrenderingservices/as_settingssync/I_SettingsSyncMain");

import amError    = require("../../../abstract/am_general/a_error/A_Error");
import amContext  = require("../../../abstract/am_general/a_context/A_Context");
import amSettingsSync = require("../../../abstract/am_general/ae_devicesettings/AE_SettingsSync");

import rmSettingSyncService = require("./RS_SettingsSync");
                                                     
export module rm_nonrenderingservices
{
  export class RI_SettingsSyncMain implements amSettingSyncServiceMain.am_nonrenderingservices.AI_SettingsSyncMain
  {
    _name: string;    

    //----------- owner
    _owner: rmSettingSyncService.rm_nonrenderingservices.RS_SettingsSyncService;

    //----------- constructor 
    constructor(owner: rmSettingSyncService.rm_nonrenderingservices.RS_SettingsSyncService)  
    {
      this._owner = owner;  
    }

    public init(error : amError.am_general.A_Error) : void
    {
      this._owner.init(error);
    }

    public loadLocalDeviceSettings(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      this._owner.loadLocalDeviceSettings(error, context, callback);
    }

    public updateServerSettings(jsonSetting: any, aSettingsSync: amSettingsSync.am_general.AE_SettingsSync, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      this._owner.updateServerSettings(jsonSetting, aSettingsSync, error, context, callback);
    }

    public saveSettingsFile(strFileName: string, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      this._owner.saveSettingsFile(strFileName, error, context, callback);
    }

    public start(aSettingsSync: amSettingsSync.am_general.AE_SettingsSync, 
                  error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      this._owner.start(aSettingsSync, error, context, callback);
    }
  }
} 