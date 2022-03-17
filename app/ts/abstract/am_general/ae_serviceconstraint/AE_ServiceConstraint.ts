import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralServiceConstraintType = require("../../../../../app/ts/abstract/am_general/ae_serviceconstrainttype/AE_ServiceConstraintType");

export module am_general
{
  export interface AE_ServiceConstraint extends amGeneral.am_general.A_Entity
  {
    getStrServiceConstraintType()  : string;
    setStrServiceConstraintType(strServiceConstraintType: string) : number;
    getServiceConstraintType()  : amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType;
    setServiceConstraintType(aServiceConstraintType: amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType) : number;

    getReferenceServiceName()  : string;
    setReferenceServiceName(strReferenceServiceName: string) : void;

    getReferenceServiceAbstractName()  : string;
    setReferenceServiceAbstractName(strReferenceServiceAbstractName: string) : void;

    getCurrentServiceStatus()  : string;
    setCurrentServiceStatus(strCurrentServiceStatus: string) : void;

    copyFromJson(jsonServiceConstraint : any) : number;

 }

} 