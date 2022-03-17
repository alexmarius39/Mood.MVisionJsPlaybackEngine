import amEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amSystemStorageInfo = require("../../../../../app/ts/abstract/am_general/a_systemstorageinfo/A_SystemStorageInfo");

export module am_general
{
  export interface A_SystemUsageInfo extends amEntity.am_general.A_Entity
  {
    copyFromJson(jsonSystemUsageInfo: any): void;

    getTotalMemory(): number;
    setTotalMemory(totalMemory: number): void;

    getAvailableMemory(): number;
    setAvailableMemory(availableMemory: number): void;

    getSystemStorageUnits(): Array<amSystemStorageInfo.am_general.A_SystemStorageInfo>;
    setSystemStorageUnits(systemStorageUnits: Array<amSystemStorageInfo.am_general.A_SystemStorageInfo>): void;

    addSystemStorage(systemStorage: amSystemStorageInfo.am_general.A_SystemStorageInfo);
  }
} 