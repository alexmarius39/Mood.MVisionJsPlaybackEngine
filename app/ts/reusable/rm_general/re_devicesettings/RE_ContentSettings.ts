import amContentSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_ContentSettings");
import rmEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amPurgeSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_PurgeSettings");

export module rm_general
{
  export class RE_ContentSettings extends rmEntity.rm_general.R_Entity
                                  implements amContentSettings.am_general.AE_ContentSettings
  {
    _aNetworkNotAvailableMessage: amDeviceSetting.am_general.AE_DeviceSetting;
    _aPurgeSettings: amPurgeSettings.am_general.AE_PurgeSettings;
    _aStoreTracksCountLimit: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._aNetworkNotAvailableMessage = null;
      this._aPurgeSettings              = null;
      this._aStoreTracksCountLimit      = null;
    }

    public setNetworkNotAvailableMessage(aMessage: amDeviceSetting.am_general.AE_DeviceSetting): void
    {
      this._aNetworkNotAvailableMessage = aMessage;
    }
    public getNetworkNotAvailableMessage(): amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._aNetworkNotAvailableMessage;
    }

    public setPurgeSettings(aPurgeSettings: amPurgeSettings.am_general.AE_PurgeSettings): void
    {
      this._aPurgeSettings = aPurgeSettings;
    }
    public getPurgeSettings(): amPurgeSettings.am_general.AE_PurgeSettings
    {
      return this._aPurgeSettings;
    }

    public setStoreTracksCountLimit(aCountLimit: amDeviceSetting.am_general.AE_DeviceSetting): void
    {
      this._aStoreTracksCountLimit = aCountLimit;
    }
    public getStoreTracksCountLimit(): amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._aStoreTracksCountLimit;
    }
  }
} 