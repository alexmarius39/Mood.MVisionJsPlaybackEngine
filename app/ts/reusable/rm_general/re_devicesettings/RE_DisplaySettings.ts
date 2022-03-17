import amDeviceSetting = require("../../../abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amDisplaySettings = require("../../../abstract/am_general/ae_devicesettings/AE_DisplaySettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_DisplaySettings extends rmEntity.rm_general.R_Entity
                                  implements amDisplaySettings.am_general.AE_DisplaySettings
  {
    _brightness: amDeviceSetting.am_general.AE_DeviceSetting;
    _density: amDeviceSetting.am_general.AE_DeviceSetting;
    _orientation: amDeviceSetting.am_general.AE_DeviceSetting;
    _resolution: amDeviceSetting.am_general.AE_DeviceSetting;
    _scale: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._brightness  = null;
      this._density     = null;
      this._orientation = null;
      this._resolution  = null;
      this._scale       = null;
    }

    public setBrightness(brightness: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._brightness = brightness;
    }
    public getBrightness() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._brightness;
    }

    public setDensity(density: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._density = density;
    }
    public getDensity() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._density;
    }

    public setOrientation(orientation: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._orientation = orientation;
    }
    public getOrientation() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._orientation;
    }

    public setResolution(resolution: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._resolution = resolution;
    }
    public getResolution() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._resolution;
    }

    public setScale(scale: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._scale = scale;
    }
    public getScale() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._scale;
    }
  }
} 