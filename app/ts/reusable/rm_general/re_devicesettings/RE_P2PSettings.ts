import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amP2PSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_P2PSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_P2PSettings extends rmEntity.rm_general.R_Entity
                              implements amP2PSettings.am_general.AE_P2PSettings
  {
    _p2pPort: amDeviceSetting.am_general.AE_DeviceSetting;
    _p2pServerEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _p2pClientEnabled: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._p2pPort           = null;
      this._p2pServerEnabled  = null;
      this._p2pClientEnabled  = null;
    }

    public setPort(p2pPort: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._p2pPort = p2pPort;
    }
    public getPort() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._p2pPort;
    }

    public setServerEnabled(p2pServerEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._p2pServerEnabled = p2pServerEnabled;
    }
    public getServerEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._p2pServerEnabled;
    }

    public setClientEnabled(p2pClientEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._p2pClientEnabled = p2pClientEnabled;
    }
    public getClientEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._p2pClientEnabled;
    }

  }
} 