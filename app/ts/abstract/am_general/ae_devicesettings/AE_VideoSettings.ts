import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_VideoSettings extends amEntity.am_general.A_Entity
  {
    setPlayerType(playerType: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPlayerType() : amDeviceSetting.am_general.AE_DeviceSetting;

    setRenderingMode(renderingMode: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getRenderingMode() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 