import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_ClientSettings extends amEntity.am_general.A_Entity
  {
    setEarlyAdopter(earlyAdopter: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getEarlyAdopter() : amDeviceSetting.am_general.AE_DeviceSetting;

    setProjectId(projectId: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getProjectId() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 