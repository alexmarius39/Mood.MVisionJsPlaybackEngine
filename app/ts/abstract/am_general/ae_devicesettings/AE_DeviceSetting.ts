import amEntity = require("../a_entity/A_Entity");

export module am_general
{
  export interface AE_DeviceSetting extends amEntity.am_general.A_Entity
  {
    setValue(value: any) : void;
    getValue() : any;

    setInherited(bInherited: boolean) : void;
    getInherited() : boolean;

    setRiskLevel(strRiskLevel: string) : void;
    getRiskLevel() : string;

    setTimestamp(nTimestamp: number) : void;
    getTimestamp() : number;

    setOrigin(strOrigin: string) : void;
    getOrigin() : string;

    setUser(strUser: string): void;
    getUser(): string;
  }
} 