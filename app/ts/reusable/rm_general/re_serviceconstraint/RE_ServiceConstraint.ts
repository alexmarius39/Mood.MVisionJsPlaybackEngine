import amGeneralServiceConstraint      = require("../../../../../app/ts/abstract/am_general/ae_serviceconstraint/AE_ServiceConstraint");
import amGeneralServiceConstraintType  = require("../../../../../app/ts/abstract/am_general/ae_serviceconstrainttype/AE_ServiceConstraintType");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class RE_ServiceConstraint  extends    rmGeneralEntity.rm_general.R_Entity
                                     implements amGeneralServiceConstraint.am_general.AE_ServiceConstraint
  {
    //--- properties
    _strServiceConstraintType : string;
    _aServiceConstraintType   : amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType;

    _strReferenceServiceName         : string;
    _strReferenceServiceAbstractName : string;

    _strCurrentServiceStatus : string;

    //----------- constructor 
    constructor()  
    {  
      super();

      this._strServiceConstraintType = "constraint_none";
      this._aServiceConstraintType   = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_None;
  
      this._strReferenceServiceName         = "";
      this._strReferenceServiceAbstractName = "";

      this._strCurrentServiceStatus = "status_none";
    }

    //-------------------------------------------
    public getStrServiceConstraintType()  : string
    {
      return this._strServiceConstraintType;
    }
    //-------------------------------------------
    public setStrServiceConstraintType(strServiceConstraintType: string) : number
    {
      this._strServiceConstraintType = strServiceConstraintType;
      if (this._strServiceConstraintType == "constraint_cannot_run_if_reference_service_run")
      {
        this._aServiceConstraintType   = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_CannotRunIfReferenceServiceRun;
        return 0;
      }else  if (this._strServiceConstraintType == "constraint_run_reference_service_at_the_end_for_status")
      {
        this._aServiceConstraintType   = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_RunReferenceServiceAtTheEndForStatus;
        return 0;
      }else if (this._strServiceConstraintType == "constraint_postpone_run_till_reference_service_ended")
      {
        this._aServiceConstraintType   = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_PostponeRunTillReferenceServiceEnded;
        return 0;
      }else if (this._strServiceConstraintType == "constraint_interrupt_reference_service_if_is_running")
      {
        this._aServiceConstraintType   = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_InterruptReferenceServiceIfIsRunning;
        return 0;
      }

      this._strServiceConstraintType = "none";
      this._aServiceConstraintType   = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_None;
      return 0;
    }

    
    //-------------------------------------------
    public getServiceConstraintType()  : amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType
    {
      return this._aServiceConstraintType;
    }
    //-------------------------------------------
    public setServiceConstraintType(aServiceConstraintType: amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType) : number
    {
      this._aServiceConstraintType = aServiceConstraintType;
      if (this._aServiceConstraintType == amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_CannotRunIfReferenceServiceRun)
      {
        this._strServiceConstraintType = "cannot_run_if_reference_service_run" ;
        return 0;
      }else if (this._aServiceConstraintType == amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_RunReferenceServiceAtTheEndForStatus)
      {
        this._strServiceConstraintType = "constraint_run_reference_service_at_the_end_for_status";
        return 0;
      }else if (this._aServiceConstraintType == amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_PostponeRunTillReferenceServiceEnded)
      {
        this._strServiceConstraintType = "constraint_postpone_run_till_reference_service_ended";
        return 0;
      }else if (this._aServiceConstraintType == amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_InterruptReferenceServiceIfIsRunning)
      {
        this._strServiceConstraintType = "constraint_interrupt_reference_service_if_is_running";
        return 0;
      }
      this._strServiceConstraintType = "none";
      this._aServiceConstraintType   = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_None;
      return 0;
    }

    //-------------------------------------------
    public getReferenceServiceName()  : string
    {
      return this._strReferenceServiceName;
    }
    //-------------------------------------------
    public setReferenceServiceName(strReferenceServiceName: string) : void
    {
      this._strReferenceServiceName = strReferenceServiceName;
    }

    //-------------------------------------------
    public getReferenceServiceAbstractName()  : string
    {
      return this._strReferenceServiceAbstractName;
    }
    //-------------------------------------------
    public setReferenceServiceAbstractName(strReferenceServiceAbstractName: string) : void
    {
      this._strReferenceServiceAbstractName = strReferenceServiceAbstractName;
    }

    //-------------------------------------------
    public getCurrentServiceStatus()  : string
    {
      return this._strCurrentServiceStatus;
    }
    //-------------------------------------------
    public setCurrentServiceStatus(strCurrentServiceStatus: string) : void
    {
      this._strCurrentServiceStatus = strCurrentServiceStatus;
    }

    //-----------------------------------------------------------
    public copyFromJson(jsonServiceConstraint : any) : number
    {
      if (jsonServiceConstraint == null)
        return 1;
      //--------------------  
      this.setStrServiceConstraintType(jsonServiceConstraint.constraint_type);

      //--------------------  
      this.setReferenceServiceName(jsonServiceConstraint.reference_service_name);

      //--------------------  
      this.setReferenceServiceAbstractName(jsonServiceConstraint.reference_service_abstract_name);

      //--------------------  
      this.setCurrentServiceStatus(jsonServiceConstraint.current_service_status);
      
      return 0;
    }

  }
} 


/*

                {
                  "constraint_type"                      : "cannot_run_if_reference_service_run",
                  "reference_service_name"               : "RS_TestService2",
                  "reference_service_abstract_name"      : "AS_TestService2"
                }

*/