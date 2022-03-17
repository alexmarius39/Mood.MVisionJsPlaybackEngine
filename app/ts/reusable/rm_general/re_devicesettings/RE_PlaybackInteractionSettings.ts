import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amPlaybackInteractionSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_PlaybackInteractionSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_PlaybackInteractionSettings extends rmEntity.rm_general.R_Entity
                                              implements amPlaybackInteractionSettings.am_general.AE_PlaybackInteractionSettings
  {
    _onTouchAction: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._onTouchAction = null;
    }

    public setOnTouchAction(_onTouchAction: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._onTouchAction = _onTouchAction;
    }
    public getOnTouchAction() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._onTouchAction;
    }
  }
} 