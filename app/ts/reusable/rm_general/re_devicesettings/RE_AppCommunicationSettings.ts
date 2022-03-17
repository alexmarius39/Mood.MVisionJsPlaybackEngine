import amAppCommunicationSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_AppCommunicationSettings");
import rmEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

import amMulticastSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_MulticastSettings");
import amP2PSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_P2PSettings");

export module rm_general
{
  export class RE_AppCommunicationSettings extends rmEntity.rm_general.R_Entity
                                           implements amAppCommunicationSettings.am_general.AE_AppCommunicationSettings
  {
    _aMulticastSettings: amMulticastSettings.am_general.AE_MulticastSettings;
    _aP2PSettings: amP2PSettings.am_general.AE_P2PSettings;

    constructor()
    {
      super();

      this._aMulticastSettings  = null;
      this._aP2PSettings        = null;
    }

    public setMulticastSettings(aMulticastSettings: amMulticastSettings.am_general.AE_MulticastSettings): void
    {
      this._aMulticastSettings = aMulticastSettings;
    }
    public getMulticastSettings() : amMulticastSettings.am_general.AE_MulticastSettings
    {
      return this._aMulticastSettings;
    }

    public setP2PSettings(aP2PSettings: amP2PSettings.am_general.AE_P2PSettings): void
    {
      this._aP2PSettings = aP2PSettings;
    }
    public getP2PSettings() : amP2PSettings.am_general.AE_P2PSettings
    {
      return this._aP2PSettings;
    }
  }
} 