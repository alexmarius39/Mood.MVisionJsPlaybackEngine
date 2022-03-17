import amSystemSettings = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_SystemSettings");
import rmEntity = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_SystemSettings extends rmEntity.rm_general.R_Entity
                                  implements amSystemSettings.am_general.AE_SystemSettings
  {
    _bUpdateSerialNoIfNotEmpty: boolean;
    _bApplyDefaultSettingsAtStartup: boolean;
    _bSaveSettingsLastValuesAtStartup: boolean;
    _bSaveSettingsLastValuesAtRefreshRate: boolean;
    _nSaveSettingsLastValuesRefreshTime: number;

    constructor()
    {
      super();

      this._bUpdateSerialNoIfNotEmpty = false;
      this._bApplyDefaultSettingsAtStartup = false;
      this._bSaveSettingsLastValuesAtStartup = false;
      this._bSaveSettingsLastValuesAtRefreshRate = false;
      this._nSaveSettingsLastValuesRefreshTime = 0;
    }

    public getUpdateSerialNoIfNonEmpty(): boolean
    {
      return this._bUpdateSerialNoIfNotEmpty;
    }
    public setUpdateSerialNoIfNonEmpty(bUpdateSN: boolean): void
    {
      this._bUpdateSerialNoIfNotEmpty = bUpdateSN;
    }

    public getApplyDefaultSettingsAtStartup(): boolean
    {
      return this._bApplyDefaultSettingsAtStartup;
    }
    public setApplyDefaultSettingsAtStartup(bApplySettingsAtStartup: boolean): void
    {
      this._bApplyDefaultSettingsAtStartup = bApplySettingsAtStartup;
    }

    public getSaveSettingsLastValuesAtStartup(): boolean
    {
      return this._bSaveSettingsLastValuesAtStartup;
    }
    public setSaveSettingsLastValuesAtStartup(bSaveLastValuesAtStartup: boolean): void
    {
      this._bSaveSettingsLastValuesAtStartup = bSaveLastValuesAtStartup;
    }

    public getSaveSettingsLastValuesAtRefreshRate(): boolean
    {
      return this._bSaveSettingsLastValuesAtRefreshRate;
    }
    public setSaveSettingsLastValuesAtRefreshRate(bSaveLastValuesAtRefreshRate: boolean): void
    {
      this._bSaveSettingsLastValuesAtRefreshRate = bSaveLastValuesAtRefreshRate;
    }

    public getSaveSettingsLastValuesRefreshTime(): number
    {
      return this._nSaveSettingsLastValuesRefreshTime;
    }
    public setSaveSettingsLastValuesRefreshTime(nSaveLastValuesRefreshTime: number): void
    {
      this._nSaveSettingsLastValuesRefreshTime = nSaveLastValuesRefreshTime;
    }
  }
} 