
import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralNetworkCardProperties  = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkCardProperties");
import amGeneralNetworkProxyProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProxyProperties");
import amGeneralWifiConnectionInfo     = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_WifiConnectionInfo");

export module am_general
{
  export interface A_NetworkProperties extends amGeneral.am_general.A_Entity
  {
    copyFromJson(jsonNetworkProperties: any): void;
  
    getWiredNetCardProperties();
    getWifiNetCardProperties();
    getProxyNetProperties();
    getWifiConnInfo();
  }
} 