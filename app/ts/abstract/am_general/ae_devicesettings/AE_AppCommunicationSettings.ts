import amEntity = require("../a_entity/A_Entity");

import amMulticastSettings = require("./AE_MulticastSettings");
import amP2PSettings = require("./AE_P2PSettings");

export module am_general
{
  export interface AE_AppCommunicationSettings extends amEntity.am_general.A_Entity
  {
    setMulticastSettings(aMulticastSettings: amMulticastSettings.am_general.AE_MulticastSettings): void;
    getMulticastSettings(): amMulticastSettings.am_general.AE_MulticastSettings;

    setP2PSettings(aP2PSettings: amP2PSettings.am_general.AE_P2PSettings): void;
    getP2PSettings(): amP2PSettings.am_general.AE_P2PSettings;
  }
} 