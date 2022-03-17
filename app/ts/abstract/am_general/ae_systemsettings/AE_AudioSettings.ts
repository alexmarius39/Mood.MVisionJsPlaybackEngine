import amEntity = require("../a_entity/A_Entity");

export module am_general
{
  export interface AE_AudioSettings extends amEntity.am_general.A_Entity
  {
    getDefaultVolumeLevel() : number;
    setDefaultVolumeLevel(nVolumeLevel: number) : void;

    getLastVolumeLevel() : number;
    setLastVolumeLevel(nVolumeLevel: number) : void;

    getApplyDefaultVolumeAtStartup(): boolean;
    setApplyDefaultVolumeAtStartup(bApplyVolume: boolean): void;
  }
} 