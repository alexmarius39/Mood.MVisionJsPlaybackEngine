import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_SerialDisplayCommandsSettings extends amEntity.am_general.A_Entity
  {
    setCommandsMap(commandsMap: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCommandsMap() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 