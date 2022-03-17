import amLanguageSettings = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_LanguageSettings");
import rmEntity = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_LanguageSettings extends rmEntity.rm_general.R_Entity
                                implements amLanguageSettings.am_general.AE_LanguageSettings
  {
    _strDefaultLangauge: string;
    _strLastLanguage: string;
    _bApplyDefaultlanguage: boolean;

    constructor()
    {
      super();

      this._strDefaultLangauge = null;
      this._strLastLanguage = null;
      this._bApplyDefaultlanguage = false;
    }

    public getDefaultLanguage() : string
    {
      return this._strDefaultLangauge;
    }
    public setDefaultLanguage(strDefaultLanguage: string) : void
    {
      this._strDefaultLangauge = strDefaultLanguage;
    }

    public getLastLanguage() : string
    {
      return this._strLastLanguage;
    }
    public setLastLanguage(strLastLanguage: string) : void
    {
      this._strLastLanguage = strLastLanguage;
    }

    public getApplyDefaultLanguage(): boolean
    {
      return this._bApplyDefaultlanguage;
    }
    public setApplyDefaultLanguage(bApplyDefaultLanguage: boolean): void
    {
      this._bApplyDefaultlanguage = bApplyDefaultLanguage;
    }
  }
} 