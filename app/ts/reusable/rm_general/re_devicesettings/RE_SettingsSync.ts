import amSettingsSync = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_SettingsSync");
import rmEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class RE_SettingsSync  extends rmEntity.rm_general.R_Entity
                                implements amSettingsSync.am_general.AE_SettingsSync
  {
    _strRemoteRelativePath : string;

    constructor()
    {
      super();
    }

    public setRemoteRelativePath(strRemoteRelativePath: string)
    {
      this._strRemoteRelativePath = strRemoteRelativePath;
    }
    public getRemoteRelativePath() : string
    {
      return this._strRemoteRelativePath;
    }
  }
} 