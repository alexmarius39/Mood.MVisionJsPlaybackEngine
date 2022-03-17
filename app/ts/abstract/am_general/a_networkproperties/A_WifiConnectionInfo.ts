import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_WifiConnectionInfo extends amGeneral.am_general.A_Entity
  {
    copyFromJson(jsonWifiConnection: any): void;
    
    getSSID() : string;
    setSSID(ssid: string) : void ;

    getWifiPassword() : string;
    setWifiPassword(pwd: string) : void ;

    getWifiSignalLevel() : string;
    setWifiSignalLevel(level: string) : void ;  
  }
} 