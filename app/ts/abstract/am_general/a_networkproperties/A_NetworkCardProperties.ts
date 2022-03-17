import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_NetworkCardProperties extends amGeneral.am_general.A_Entity
  {
    copyFromJson(jsonNetworkCardProperties: any): void;

    isEnable() : boolean;
    setEnable(isEnabled: boolean) : void;

    isDynamic() : boolean;
    setDynamic(isDynamic: boolean) : void;

    getMethod() : string;
    setMethod(method: string) : void;

    getIPAddress() : string;
    setIpAddress(ipAddress: string) : void;

    getMacAddress() : string;
    setMacAddress(macAddress: string) : void;

    getNetmask() : string;
    setNetmask(netmask: string) : void;

    getGateway() : string;
    setGateway(gateway: string) : void;

    getDNS1() : string;
    setDNS1(dns1: string) : void;

    getDNS2() : string;
    setDNS2(dns1: string) : void;
  }
} 