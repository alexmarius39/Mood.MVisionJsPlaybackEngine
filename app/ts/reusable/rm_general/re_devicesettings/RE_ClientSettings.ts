import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amClientSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_ClientSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_ClientSettings  extends rmEntity.rm_general.R_Entity
                                  implements amClientSettings.am_general.AE_ClientSettings
  {
    _projectId: amDeviceSetting.am_general.AE_DeviceSetting;
    _earlyAdopter: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._earlyAdopter = null;
      this._projectId = null;
    }

    public setEarlyAdopter(earlyAdopter: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._earlyAdopter = earlyAdopter;
    }
    public getEarlyAdopter() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._earlyAdopter;
    }

    public setProjectId(projectId: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._projectId = projectId;
    }
    public getProjectId() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._projectId;
    }
  }
} 