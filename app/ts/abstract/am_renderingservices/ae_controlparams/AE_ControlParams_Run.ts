import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_renderingservices
{
  export interface AE_ControlParams_Run extends amGeneral.am_general.A_Entity
  {
    reset() : void;
    copy(src : AE_ControlParams_Run) : number ;
        
    isFree() : boolean ;
    setIsFree(isFree: boolean)  : boolean;

  }

} 