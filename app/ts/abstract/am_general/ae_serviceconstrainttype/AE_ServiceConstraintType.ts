import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
  export enum AE_ServiceConstraintType
  {
    Constraint_None = 1,
    Constraint_CannotRunIfReferenceServiceRun       = 2, // "cannot_run_if_reference_service_run"
    Constraint_RunReferenceServiceAtTheEndForStatus = 3, // "constraint_run_reference_service_at_the_end_for_status";
    Constraint_PostponeRunTillReferenceServiceEnded = 4, // "constraint_postpone_run_till_reference_service_ended";
    Constraint_InterruptReferenceServiceIfIsRunning = 5, // "constraint_interrupt_reference_service_if_is_running"
 }

} 