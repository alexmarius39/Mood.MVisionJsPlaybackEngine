import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amCloudAPISettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_CloudAPISettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_CloudAPISettings  extends rmEntity.rm_general.R_Entity
                                  implements amCloudAPISettings.am_general.AE_CloudAPISettings
  {
    _baseServerAPIUrl: amDeviceSetting.am_general.AE_DeviceSetting;
    _baseServerUpgradeUrl: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._baseServerAPIUrl      = null;
      this._baseServerUpgradeUrl  = null;
    }

    public setBaseServerAPIUrl(baseServerAPIUrl: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._baseServerAPIUrl = baseServerAPIUrl;
    }
    public getBaseServerAPIUrl() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._baseServerAPIUrl;
    }

    public setBaseServerUpgradeUrl(baseServerUpgradeUrl: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._baseServerUpgradeUrl = baseServerUpgradeUrl;
    }
    public getBaseServerUpgradeUrl() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._baseServerUpgradeUrl;
    }
  }
} 