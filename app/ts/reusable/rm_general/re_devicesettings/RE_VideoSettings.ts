import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amVideoSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_VideoSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_VideoSettings extends rmEntity.rm_general.R_Entity
                                implements amVideoSettings.am_general.AE_VideoSettings
  {
    _playerType: amDeviceSetting.am_general.AE_DeviceSetting;
    _renderingMode: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._playerType    = null;
      this._renderingMode = null;
    }

    public setPlayerType(playerType: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._playerType = playerType;
    }
    public getPlayerType() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._playerType;
    }

    public setRenderingMode(renderingMode: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._renderingMode = renderingMode;
    }
    public getRenderingMode() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._renderingMode;
    }
  }
} 