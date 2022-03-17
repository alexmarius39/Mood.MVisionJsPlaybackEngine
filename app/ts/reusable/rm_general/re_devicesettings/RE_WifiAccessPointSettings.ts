import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amWifiAccessPointSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_WifiAccessPointSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_WifiAccessPointSettings extends rmEntity.rm_general.R_Entity
                                          implements amWifiAccessPointSettings.am_general.AE_WifiAccessPointSettings
  {
    _authenticationType: amDeviceSetting.am_general.AE_DeviceSetting;
    _password: amDeviceSetting.am_general.AE_DeviceSetting;
    _ssid: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._authenticationType  = null;
      this._password            = null;
      this._ssid                = null;
    }

    public setAuthenticationType(authenticationType: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._authenticationType = authenticationType;
    }
    public getAuthenticationType() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._authenticationType;
    }

    public setPassword(password: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._password = password;
    }
    public getPassword() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._password;
    }

    public setSSID(ssid: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._ssid = ssid;
    }
    public getSSID() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._ssid;
    }
  }
} 