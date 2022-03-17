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
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RE_CronConfiguration = (function (_super) {
        __extends(RE_CronConfiguration, _super);
        function RE_CronConfiguration() {
            var _this = _super.call(this) || this;
            _this._aScheduleInfoList = new Array();
            return _this;
        }
        RE_CronConfiguration.prototype.copyFromJson = function (aJsonCronConfiguration) {
            if (aJsonCronConfiguration == 0)
                return 0;
            var crtScheduleInfo = null;
            for (var k = 0; k < aJsonCronConfiguration.schedule_infos.length; k++) {
                crtScheduleInfo = this._aSrvLocator._iEntityCreation.createDefaultScheduleInfo(null);
                crtScheduleInfo.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, null);
                crtScheduleInfo.copyFromJson(aJsonCronConfiguration.schedule_infos[k]);
                this.addScheduleInfo(crtScheduleInfo);
            }
        };
        RE_CronConfiguration.prototype.getScheduleInfoList = function () {
            return this._aScheduleInfoList;
        };
        RE_CronConfiguration.prototype.setScheduleInfoList = function (aScheduleInfoList) {
            this._aScheduleInfoList = aScheduleInfoList;
        };
        RE_CronConfiguration.prototype.addScheduleInfo = function (aScheduleInfo) {
            this._aScheduleInfoList.push(aScheduleInfo);
            return 0;
        };
        return RE_CronConfiguration;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_nonrenderingservices.RE_CronConfiguration = RE_CronConfiguration;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RE_CronConfiguration.js.map