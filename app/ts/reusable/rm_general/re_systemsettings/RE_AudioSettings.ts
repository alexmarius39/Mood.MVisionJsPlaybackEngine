import amStartupAudioSettings = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_AudioSettings");
import rmEntity = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_AudioSettings extends rmEntity.rm_general.R_Entity
                                implements amStartupAudioSettings.am_general.AE_AudioSettings
  {
    _nDefaultVolumeLevel: number;
    _nLastVolumeNumber: number;
    _bApplyDefaultVolumeAtStartup: boolean;
    
    constructor()
    {
      super();

      this._nDefaultVolumeLevel = null;
      this._nLastVolumeNumber = null;

      this._bApplyDefaultVolumeAtStartup = false;
    }

    public getDefaultVolumeLevel() : number
    {
      return this._nDefaultVolumeLevel;
    }
    public setDefaultVolumeLevel(nVolumeLevel: number) : void
    {
      this._nDefaultVolumeLevel = nVolumeLevel;
    }

    public getLastVolumeLevel() : number
    {
      return this._nLastVolumeNumber;
    }
    public setLastVolumeLevel(nVolumeLevel: number) : void
    {
      this._nLastVolumeNumber = nVolumeLevel;
    }

    public getApplyDefaultVolumeAtStartup(): boolean
    {
      return this._bApplyDefaultVolumeAtStartup;
    }
    public setApplyDefaultVolumeAtStartup(bApplyVolume: boolean): void
    {
      this._bApplyDefaultVolumeAtStartup = bApplyVolume;
    }
  }
} 