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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RE_Parameter = /** @class */ (function (_super) {
            __extends(RE_Parameter, _super);
            //----------- constructor 
            function RE_Parameter() {
                var _this = _super.call(this) || this;
                _this._paramType = "";
                _this._paramName = "";
                _this._paramValue = "";
                return _this;
            }
            //---------------------------
            RE_Parameter.prototype.getParameterType = function () {
                return this._paramType;
            };
            //------------------------------
            RE_Parameter.prototype.setParameterType = function (paramType) {
                this._paramName = paramType;
            };
            //---------------------------
            RE_Parameter.prototype.getParameterName = function () {
                return this._paramName;
            };
            //------------------------------
            RE_Parameter.prototype.setParameterName = function (paramName) {
                this._paramName = paramName;
            };
            //---------------------------
            RE_Parameter.prototype.getParameterValue = function () {
                return this._paramValue;
            };
            //------------------------------
            RE_Parameter.prototype.setParameterValue = function (paramValue) {
                this._paramValue = paramValue;
            };
            //------------------------------------------------
            RE_Parameter.prototype.copyFromJson = function (jsonParameter) {
                if (jsonParameter == null)
                    return 1;
                //--------------------  
                this.setParameterType(jsonParameter.param_type);
                //--------------------  
                this.setParameterName(jsonParameter.param_name);
                //--------------------  
                this.setParameterValue(jsonParameter.param_value);
                return 0;
            };
            return RE_Parameter;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.RE_Parameter = RE_Parameter;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
/*

               {
                 "param_type" :  "number",
                 "param_name" :  "p1",
                 "param_value":  "10"
               },
*/ 
//# sourceMappingURL=RE_Parameter.js.map