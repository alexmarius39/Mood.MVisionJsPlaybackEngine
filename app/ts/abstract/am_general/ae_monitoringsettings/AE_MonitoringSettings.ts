import amEntity = require("../a_entity/A_Entity");

export module am_general
{
  export interface AE_MonitoringSettings extends amEntity.am_general.A_Entity
  {
    setStartTimeout(iStartTimeout: number) : void;
    getStartTimeout() : number;

    setInterval(iInterval: number) : void;
    getInterval() : number;

    setEarlyAdopter(bEarlyAdopter: boolean) : void;
    getEarlyAdopter() : boolean;

    setLastPlayedItemsNumber(nLastPlayedItems: number) : void;
    getLastPlayedItemsNumber() : number;

    getRemoteRelativePath(): string;
    setRemoteRelativePath(strRemoteRelativePath: string): void;
  }
} 