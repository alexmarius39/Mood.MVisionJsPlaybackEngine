import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface A_PowerProperties extends amGeneral.am_general.A_Entity
  {
    copyFromJson(jsonPowerProperties: any): void;
    
    getPowerCommand() : string;
    setPowerCommand(powerCommand : string) : void;
  }

} 