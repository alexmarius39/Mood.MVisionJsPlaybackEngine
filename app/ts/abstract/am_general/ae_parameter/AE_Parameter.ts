import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export interface AE_Parameter extends amGeneral.am_general.A_Entity
  {
    getParameterType()  : string;
    setParameterType(paramType: string) : void;

    getParameterName()  : string;
    setParameterName(paramName: string) : void;

    getParameterValue()  : string;
    setParameterValue(paramValue: string) : void;

    copyFromJson(jsonServiceConstraint : any) : number;
 }

} 