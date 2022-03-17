import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amHTTPProxySettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_HTTPProxySettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_HTTPProxySettings extends rmEntity.rm_general.R_Entity
                                    implements amHTTPProxySettings.am_general.AE_HTTPProxySettings
  {
    _proxyEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _excludedHosts: amDeviceSetting.am_general.AE_DeviceSetting;
    _host: amDeviceSetting.am_general.AE_DeviceSetting;
    _password: amDeviceSetting.am_general.AE_DeviceSetting;
    _port: amDeviceSetting.am_general.AE_DeviceSetting;
    _username: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._proxyEnabled  = null;
      this._excludedHosts = null;
      this._host          = null;
      this._password      = null;
      this._port          = null;
      this._username      = null;
    }

    public setProxyEnabled(proxyEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._proxyEnabled = proxyEnabled;
    }
    public getProxyEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._proxyEnabled;
    }

    public setExcludedHosts(excludedHosts: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._excludedHosts = excludedHosts;
    }
    public getExcludedHosts() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._excludedHosts;
    }

    public setHost(host: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._host = host;
    }
    public getHost() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._host;
    }

    public setPassword(password: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._password = password;
    }
    public getPassword() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._password;
    }

    public setPort(port: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._port = port;
    }
    public getPort() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._port;
    }

    public setUsername(username: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._username = username;
    }
    public getUsername() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._username;
    }
  }
} 