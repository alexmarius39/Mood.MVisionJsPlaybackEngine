"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var am_general;
(function (am_general) {
    var AE_ServiceConstraintType;
    (function (AE_ServiceConstraintType) {
        AE_ServiceConstraintType[AE_ServiceConstraintType["Constraint_None"] = 1] = "Constraint_None";
        AE_ServiceConstraintType[AE_ServiceConstraintType["Constraint_CannotRunIfReferenceServiceRun"] = 2] = "Constraint_CannotRunIfReferenceServiceRun";
        AE_ServiceConstraintType[AE_ServiceConstraintType["Constraint_RunReferenceServiceAtTheEndForStatus"] = 3] = "Constraint_RunReferenceServiceAtTheEndForStatus";
        AE_ServiceConstraintType[AE_ServiceConstraintType["Constraint_PostponeRunTillReferenceServiceEnded"] = 4] = "Constraint_PostponeRunTillReferenceServiceEnded";
        AE_ServiceConstraintType[AE_ServiceConstraintType["Constraint_InterruptReferenceServiceIfIsRunning"] = 5] = "Constraint_InterruptReferenceServiceIfIsRunning";
    })(AE_ServiceConstraintType = am_general.AE_ServiceConstraintType || (am_general.AE_ServiceConstraintType = {}));
})(am_general = exports.am_general || (exports.am_general = {}));
//# sourceMappingURL=AE_ServiceConstraintType.js.map