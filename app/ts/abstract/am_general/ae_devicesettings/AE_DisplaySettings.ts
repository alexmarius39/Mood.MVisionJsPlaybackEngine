import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_DisplaySettings extends amEntity.am_general.A_Entity
  {
    setBrightness(brightness: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getBrightness() : amDeviceSetting.am_general.AE_DeviceSetting;

    setDensity(density: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getDensity() : amDeviceSetting.am_general.AE_DeviceSetting;

    setOrientation(orientation: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getOrientation() : amDeviceSetting.am_general.AE_DeviceSetting;

    setResolution(resolution: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getResolution() : amDeviceSetting.am_general.AE_DeviceSetting;

    setScale(scale: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getScale() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 