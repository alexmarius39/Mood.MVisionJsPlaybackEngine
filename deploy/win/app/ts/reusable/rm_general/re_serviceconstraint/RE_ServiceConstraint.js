"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var amGeneralServiceConstraintType = require("../../../../../app/ts/abstract/am_general/ae_serviceconstrainttype/AE_ServiceConstraintType");
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var RE_ServiceConstraint = (function (_super) {
        __extends(RE_ServiceConstraint, _super);
        function RE_ServiceConstraint() {
            var _this = _super.call(this) || this;
            _this._strServiceConstraintType = "constraint_none";
            _this._aServiceConstraintType = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_None;
            _this._strReferenceServiceName = "";
            _this._strReferenceServiceAbstractName = "";
            _this._strCurrentServiceStatus = "status_none";
            return _this;
        }
        RE_ServiceConstraint.prototype.getStrServiceConstraintType = function () {
            return this._strServiceConstraintType;
        };
        RE_ServiceConstraint.prototype.setStrServiceConstraintType = function (strServiceConstraintType) {
            this._strServiceConstraintType = strServiceConstraintType;
            if (this._strServiceConstraintType == "constraint_cannot_run_if_reference_service_run") {
                this._aServiceConstraintType = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_CannotRunIfReferenceServiceRun;
                return 0;
            }
            else if (this._strServiceConstraintType == "constraint_run_reference_service_at_the_end_for_status") {
                this._aServiceConstraintType = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_RunReferenceServiceAtTheEndForStatus;
                return 0;
            }
            else if (this._strServiceConstraintType == "constraint_postpone_run_till_reference_service_ended") {
                this._aServiceConstraintType = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_PostponeRunTillReferenceServiceEnded;
                return 0;
            }
            else if (this._strServiceConstraintType == "constraint_interrupt_reference_service_if_is_running") {
                this._aServiceConstraintType = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_InterruptReferenceServiceIfIsRunning;
                return 0;
            }
            this._strServiceConstraintType = "none";
            this._aServiceConstraintType = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_None;
            return 0;
        };
        RE_ServiceConstraint.prototype.getServiceConstraintType = function () {
            return this._aServiceConstraintType;
        };
        RE_ServiceConstraint.prototype.setServiceConstraintType = function (aServiceConstraintType) {
            this._aServiceConstraintType = aServiceConstraintType;
            if (this._aServiceConstraintType == amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_CannotRunIfReferenceServiceRun) {
                this._strServiceConstraintType = "cannot_run_if_reference_service_run";
                return 0;
            }
            else if (this._aServiceConstraintType == amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_RunReferenceServiceAtTheEndForStatus) {
                this._strServiceConstraintType = "constraint_run_reference_service_at_the_end_for_status";
                return 0;
            }
            else if (this._aServiceConstraintType == amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_PostponeRunTillReferenceServiceEnded) {
                this._strServiceConstraintType = "constraint_postpone_run_till_reference_service_ended";
                return 0;
            }
            else if (this._aServiceConstraintType == amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_InterruptReferenceServiceIfIsRunning) {
                this._strServiceConstraintType = "constraint_interrupt_reference_service_if_is_running";
                return 0;
            }
            this._strServiceConstraintType = "none";
            this._aServiceConstraintType = amGeneralServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_None;
            return 0;
        };
        RE_ServiceConstraint.prototype.getReferenceServiceName = function () {
            return this._strReferenceServiceName;
        };
        RE_ServiceConstraint.prototype.setReferenceServiceName = function (strReferenceServiceName) {
            this._strReferenceServiceName = strReferenceServiceName;
        };
        RE_ServiceConstraint.prototype.getReferenceServiceAbstractName = function () {
            return this._strReferenceServiceAbstractName;
        };
        RE_ServiceConstraint.prototype.setReferenceServiceAbstractName = function (strReferenceServiceAbstractName) {
            this._strReferenceServiceAbstractName = strReferenceServiceAbstractName;
        };
        RE_ServiceConstraint.prototype.getCurrentServiceStatus = function () {
            return this._strCurrentServiceStatus;
        };
        RE_ServiceConstraint.prototype.setCurrentServiceStatus = function (strCurrentServiceStatus) {
            this._strCurrentServiceStatus = strCurrentServiceStatus;
        };
        RE_ServiceConstraint.prototype.copyFromJson = function (jsonServiceConstraint) {
            if (jsonServiceConstraint == null)
                return 1;
            this.setStrServiceConstraintType(jsonServiceConstraint.constraint_type);
            this.setReferenceServiceName(jsonServiceConstraint.reference_service_name);
            this.setReferenceServiceAbstractName(jsonServiceConstraint.reference_service_abstract_name);
            this.setCurrentServiceStatus(jsonServiceConstraint.current_service_status);
            return 0;
        };
        return RE_ServiceConstraint;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.RE_ServiceConstraint = RE_ServiceConstraint;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_ServiceConstraint.js.map