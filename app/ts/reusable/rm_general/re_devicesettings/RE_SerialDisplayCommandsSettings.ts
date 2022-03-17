import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amSerialDisplayCommandsSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_SerialDisplayCommandsSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_SerialDisplayCommandsSettings extends rmEntity.rm_general.R_Entity
                                                implements amSerialDisplayCommandsSettings.am_general.AE_SerialDisplayCommandsSettings
  {
    _commandsMap: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._commandsMap    = null;
    }

    public setCommandsMap(commandsMap: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._commandsMap = commandsMap;
    }
    public getCommandsMap() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._commandsMap;
    }
  }
} 