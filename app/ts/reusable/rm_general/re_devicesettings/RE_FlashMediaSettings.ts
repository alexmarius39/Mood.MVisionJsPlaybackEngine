import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amFlashMediaSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_FlashMediaSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_FlashMediaSettings  extends rmEntity.rm_general.R_Entity
                                      implements amFlashMediaSettings.am_general.AE_FlashMediaSettings
  {
    _useAirRuntime: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._useAirRuntime = null;
    }

    public setUseAirRuntime(useAirRuntime: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._useAirRuntime = useAirRuntime;
    }
    public getUseAirRuntime() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._useAirRuntime;
    }
  }
} 