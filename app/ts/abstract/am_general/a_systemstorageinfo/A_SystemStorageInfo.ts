import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_SystemStorageInfo extends amGeneral.am_general.A_Entity
  {
    copyFromJson(jsonSystemStorageInfo: any): void;

    getType(): string;
    setType(type: string): void;

    getCapacity(): number;
    setCapacity(capacity: number): void;

    getAvailableCapacity(): number;
    setAvailableCapacity(availableCapacity: number): void;
  }
} 