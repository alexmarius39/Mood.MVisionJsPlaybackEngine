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
var rmGeneralPowerSaveModeInfo = require("../../../../../app/ts/reusable/rm_general/r_powersavemodeinfo/R_PowerSaveModeInfo");
var rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_general;
(function (rm_general) {
    var RFactory_PowerSaveModeInfo = (function (_super) {
        __extends(RFactory_PowerSaveModeInfo, _super);
        function RFactory_PowerSaveModeInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RFactory_PowerSaveModeInfo.prototype.createEntity = function (entityName, error) {
            return new rmGeneralPowerSaveModeInfo.rm_general.R_PowerSaveModeInfo();
        };
        return RFactory_PowerSaveModeInfo;
    }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
    rm_general.RFactory_PowerSaveModeInfo = RFactory_PowerSaveModeInfo;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RFactory_PowerSaveModeInfo.js.map