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
    var RE_CronSchedule = (function (_super) {
        __extends(RE_CronSchedule, _super);
        function RE_CronSchedule() {
            var _this = _super.call(this) || this;
            _this._iTimerId = 0;
            _this._aScheduleInfo = null;
            _this._aCrtService = null;
            _this._aPrevService = null;
            return _this;
        }
        RE_CronSchedule.prototype.getScheduleInfo = function () {
            return this._aScheduleInfo;
        };
        RE_CronSchedule.prototype.setScheduleInfo = function (aScheduleInfo) {
            this._aScheduleInfo = aScheduleInfo;
            return 0;
        };
        RE_CronSchedule.prototype.getTimerId = function () {
            return this._iTimerId;
        };
        RE_CronSchedule.prototype.setTimerId = function (iTimerId) {
            this._iTimerId = iTimerId;
            return 0;
        };
        RE_CronSchedule.prototype.getCrtService = function () {
            return this._aCrtService;
        };
        RE_CronSchedule.prototype.setCrtService = function (aCrtService) {
            this._aCrtService = aCrtService;
            return 0;
        };
        RE_CronSchedule.prototype.getPrevService = function () {
            return this._aPrevService;
        };
        RE_CronSchedule.prototype.setPrevService = function (aPrevService) {
            this._aPrevService = aPrevService;
            return 0;
        };
        return RE_CronSchedule;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_nonrenderingservices.RE_CronSchedule = RE_CronSchedule;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RE_CronSchedule.js.map