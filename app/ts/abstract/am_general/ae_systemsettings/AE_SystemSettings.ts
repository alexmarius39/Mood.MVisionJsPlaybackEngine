import amEntity = require("../a_entity/A_Entity");

export module am_general
{
  export interface AE_SystemSettings extends amEntity.am_general.A_Entity
  {
    getUpdateSerialNoIfNonEmpty(): boolean;
    setUpdateSerialNoIfNonEmpty(bUpdateSN: boolean): void;

    getApplyDefaultSettingsAtStartup(): boolean;
    setApplyDefaultSettingsAtStartup(bApplySettingsAtStartup: boolean): void;

    getSaveSettingsLastValuesAtStartup(): boolean;
    setSaveSettingsLastValuesAtStartup(bSaveLastValuesAtStartup: boolean): void;

    getSaveSettingsLastValuesAtRefreshRate(): boolean;
    setSaveSettingsLastValuesAtRefreshRate(bSaveLastValuesAtRefreshRate: boolean): void;

    getSaveSettingsLastValuesRefreshTime(): number;
    setSaveSettingsLastValuesRefreshTime(nSaveLastValuesRefreshTime: number): void;
  }
} 