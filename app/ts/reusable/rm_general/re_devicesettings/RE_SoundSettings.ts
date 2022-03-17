import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amSoundSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_SoundSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_SoundSettings extends rmEntity.rm_general.R_Entity
                                implements amSoundSettings.am_general.AE_SoundSettings
  {
    _volumeLevels: amDeviceSetting.am_general.AE_DeviceSetting

    constructor()
    {
      super();

      this._volumeLevels = null;
    }

    public setVolumeLevels(volumeLevels: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._volumeLevels = volumeLevels;
    }
    public getVolumeLevels() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._volumeLevels;
    }
  }
} 