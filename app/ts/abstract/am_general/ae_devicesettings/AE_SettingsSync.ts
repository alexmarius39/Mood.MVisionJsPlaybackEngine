import amEntity = require("../a_entity/A_Entity");

export module am_general
{
  export interface AE_SettingsSync extends amEntity.am_general.A_Entity
  {
    setRemoteRelativePath(strRemoteRelativePath: string) : void;
    getRemoteRelativePath() : string;
  }
} 