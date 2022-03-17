import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_PlatformSettings extends amEntity.am_general.A_Entity
  {
    setAdbEnabled(adbEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getAdbEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setUsePowerKeyForScreenOff(usePowerKeyForScreenOff: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getUsePowerKeyForScreenOff() : amDeviceSetting.am_general.AE_DeviceSetting;

    setWsusUrl(wsusUrl: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getWsusUrl() : amDeviceSetting.am_general.AE_DeviceSetting;

    setZidooSoundOutputRaw(zidooSoundOutputRaw: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getZidooSoundOutputRaw() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 