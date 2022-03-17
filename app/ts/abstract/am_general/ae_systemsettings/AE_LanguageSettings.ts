import amEntity = require("../a_entity/A_Entity");

export module am_general
{
  export interface AE_LanguageSettings extends amEntity.am_general.A_Entity
  {
    getDefaultLanguage() : string;
    setDefaultLanguage(strDefaultLanguage: string) : void;

    getLastLanguage() : string;
    setLastLanguage(strLastLanguage: string) : void;

    getApplyDefaultLanguage(): boolean;
    setApplyDefaultLanguage(bApplyDefaultLanguage: boolean): void;
  }
} 