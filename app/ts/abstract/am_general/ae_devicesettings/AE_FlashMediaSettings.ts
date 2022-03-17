import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_FlashMediaSettings extends amEntity.am_general.A_Entity
  {
    setUseAirRuntime(useAirRuntime: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getUseAirRuntime() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 