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
define(["require", "exports", "../../../../../app/ts/abstract/am_general/ae_scheduletype/AE_ScheduleType", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, amGeneralScheduleType, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RE_ScheduleInfo = /** @class */ (function (_super) {
            __extends(RE_ScheduleInfo, _super);
            //----------- constructor 
            function RE_ScheduleInfo() {
                var _this = _super.call(this) || this;
                _this._strScheduleType = "schedule_type_none";
                _this._aScheduleType = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_None;
                _this._strServiceAbstractName = "";
                _this._strServiceName = "";
                _this._strServiceAction = "";
                _this._aServiceActionParameterList = null;
                _this._aServiceConstraintList = null;
                _this._schedule_strFromDate = "";
                _this._schedule_dtFromDate = new Date(0, 0, 0, 0, 0, 0, 0);
                _this._schedule_strToDate = "";
                _this._schedule_dtToDate = new Date(0, 0, 0, 0, 0, 0, 0);
                _this._schedule_strInWeekdays = "";
                _this._schedule_strFromTime = "";
                _this._schedule_dtFromTime = new Date(0, 0, 0, 0, 0, 0, 0);
                _this._schedule_strToTime = "";
                _this._schedule_dtToTime = new Date(0, 0, 0, 0, 0, 0, 0);
                _this._schedule_strTimeRepeatIntervalInSeconds = "";
                _this._schedule_iTimeRepeatIntervalInSeconds = 0;
                _this._schedule_bStartAlsoInTheSameDayAsStartAppDay = false;
                _this._schedule_strAtDate = "200-01-01";
                _this._schedule_dtAtDate = new Date(2000, 1, 1, 0, 0, 0, 0);
                _this._schedule_strAtYear = "2000";
                _this._schedule_iAtYear = 2000;
                _this._schedule_strAtMonth = "01";
                _this._schedule_iAtMonth = 1;
                _this._schedule_strAtDay = "01";
                _this._schedule_iAtDay = 1;
                _this._schedule_strAtTime = "00:00:00";
                _this._schedule_dtAtTime = new Date(0, 0, 0, 0, 0, 0, 0);
                _this._schedule_strAtHour = "00";
                _this._schedule_iAtHour = 0;
                _this._schedule_strAtMinute = "00";
                _this._schedule_iAtMinute = 0;
                _this._schedule_strAtSecond = "00";
                _this._schedule_iAtSecond = 0;
                _this._aServiceActionParameterList = new Array();
                _this._aServiceConstraintList = new Array();
                _this._schedule_strRunAtStartup = "no";
                _this._schedule_bRunAtStartup = false;
                _this._schedule_strStartupPriority = "0";
                _this._schedule_iStartupPriority = 0;
                _this._schedule_strWaitAtStartupToFinish = "no";
                _this._schedule_bWaitAtStartupToFinish = false;
                return _this;
            }
            //-----------------------------------------
            RE_ScheduleInfo.prototype.getStrScheduleType = function () {
                return this._strScheduleType;
            };
            //-----------------------------------------
            RE_ScheduleInfo.prototype.setStrScheduleType = function (strScheduleType) {
                this._strScheduleType = strScheduleType;
                if (this._strScheduleType == "schedule_none") {
                    this._aScheduleType = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_None;
                    return 0;
                }
                else if (this._strScheduleType == "schedule_type_at_time_interval") {
                    this._aScheduleType = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_AtTimeInterval;
                    return 0;
                }
                else if (this._strScheduleType == "schedule_type_daily") {
                    this._aScheduleType = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Daily;
                    return 0;
                }
                else if (this._strScheduleType == "schedule_type_weekly") {
                    this._aScheduleType = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Weekly;
                    return 0;
                }
                else if (this._strScheduleType == "schedule_type_monthly") {
                    this._aScheduleType = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Monthly;
                    return 0;
                }
                else if (this._strScheduleType == "schedule_type_once") {
                    this._aScheduleType = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Once;
                    return 0;
                }
                this._strScheduleType = "schedule_type_none";
                this._aScheduleType = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_None;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleType = function () {
                return this._aScheduleType;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleType = function (aScheduleType) {
                this._aScheduleType = aScheduleType;
                if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_None) {
                    this._strScheduleType = "schedule_type_none";
                    return 0;
                }
                else if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_AtTimeInterval) {
                    this._strScheduleType = "schedule_type_at_time_interval";
                    return 0;
                }
                else if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Daily) {
                    this._strScheduleType = "schedule_type_daily";
                    return 0;
                }
                else if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Weekly) {
                    this._strScheduleType = "schedule_type_weekly";
                    return 0;
                }
                else if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Monthly) {
                    this._strScheduleType = "schedule_type_monthly";
                    return 0;
                }
                else if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Once) {
                    this._strScheduleType = "schedule_type_once";
                    return 0;
                }
                this._strScheduleType = "schedule_type_none";
                this._aScheduleType = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_None;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getServiceAbstractName = function () {
                return this._strServiceAbstractName;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setServiceAbstractName = function (strServiceAbstractName) {
                this._strServiceAbstractName = strServiceAbstractName;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getServiceName = function () {
                return this._strServiceName;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setServiceName = function (strServiceName) {
                this._strServiceName = strServiceName;
                return 0;
            };
            //-------------------------------------------
            RE_ScheduleInfo.prototype.getServiceAction = function () {
                return this._strServiceAction;
            };
            //-------------------------------------------
            RE_ScheduleInfo.prototype.setServiceAction = function (strServiceAction) {
                this._strServiceAction = strServiceAction;
                return 0;
            };
            //-------------------------------------------
            RE_ScheduleInfo.prototype.getServiceActionParametersList = function () {
                return this._aServiceActionParameterList;
            };
            //-------------------------------------------
            RE_ScheduleInfo.prototype.setServiceActionParametersList = function (aServiceActionParameterList) {
                this._aServiceActionParameterList = aServiceActionParameterList;
                return 0;
            };
            //-------------------------------------------
            RE_ScheduleInfo.prototype.getServiceActionParameterByName = function (strParamName) {
                for (var _i = 0, _a = this._aServiceActionParameterList; _i < _a.length; _i++) {
                    var crtParam = _a[_i];
                    if (crtParam.getParameterName() == strParamName)
                        return crtParam;
                }
                return null;
            };
            //-------------------------------------------
            RE_ScheduleInfo.prototype.addServiceActionParameter = function (newParameter) {
                if (newParameter)
                    return 1;
                if (this._aServiceActionParameterList == null)
                    this._aServiceActionParameterList = new Array();
                this._aServiceActionParameterList.push(newParameter);
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAvailability_strFromDate = function () {
                return this._schedule_strFromDate;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAvailability_strFromDate = function (strScheduleFromDate) {
                this._schedule_strFromDate = strScheduleFromDate;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAvailability_fromDate = function () {
                return this._schedule_dtFromDate;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAvailability_fromDate = function (dtScheduleFromDate) {
                this._schedule_dtFromDate = dtScheduleFromDate;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAvailability_strToDate = function () {
                return this._schedule_strToDate;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAvailability_strToDate = function (strToDate) {
                this._schedule_strToDate = strToDate;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAvailability_toDate = function () {
                return this._schedule_dtFromDate;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAvailability_toDate = function (dtToDate) {
                this._schedule_dtToDate = dtToDate;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAvailability_strInWeekdays = function () {
                return this._schedule_strInWeekdays;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAvailability_strInWeekdays = function (strScheduleInWeekdays) {
                //---
                if (strScheduleInWeekdays == null) {
                    this._schedule_strInWeekdays = "1111111";
                    return 1;
                }
                //---
                if (strScheduleInWeekdays == "") {
                    this._schedule_strInWeekdays = "1111111";
                    return 1;
                }
                //---
                if (strScheduleInWeekdays.length != 7) {
                    this._schedule_strInWeekdays = "1111111";
                    return 1;
                }
                //---
                this._schedule_strInWeekdays = strScheduleInWeekdays;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAvailability_strFromTime = function () {
                return this._schedule_strFromTime;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAvailability_strFromTime = function (strFromTime) {
                this._schedule_strFromTime = strFromTime;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAvailability_fromTime = function () {
                return this._schedule_dtFromTime;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAvailability_fromTime = function (dtFromTime) {
                this._schedule_dtFromTime = dtFromTime;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAvailability_strToTime = function () {
                return this._schedule_strToTime;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAvailability_strToTime = function (strToTime) {
                this._schedule_strToTime = strToTime;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAvailability_toTime = function () {
                return this._schedule_dtToTime;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAvailability_toTime = function (dtToTime) {
                this._schedule_dtToTime = dtToTime;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleTimeInterval_strRepeatIntervalInSeconds = function () {
                return this._schedule_strTimeRepeatIntervalInSeconds;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleTimeInterval_strRepeatIntervalInSeconds = function (strTimeRepeatIntervalInSeconds) {
                this._schedule_strTimeRepeatIntervalInSeconds = strTimeRepeatIntervalInSeconds;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleTimeInterval_repeatIntervalInSeconds = function () {
                return this._schedule_iTimeRepeatIntervalInSeconds;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleTimeInterval_repeatIntervalInSeconds = function (iTimeRepeatIntervalinSeconds) {
                this._schedule_iTimeRepeatIntervalInSeconds = iTimeRepeatIntervalinSeconds;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAtStartup_strRunAtStartup = function () {
                return this._schedule_strRunAtStartup;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAtStartup_strRunAtStartup = function (strScheduleRunAtStartup) {
                this._schedule_strRunAtStartup = strScheduleRunAtStartup;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAtStartup_runAtStartup = function () {
                return this._schedule_bRunAtStartup;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAtStartup_runAtStartup = function (bScheduleRunAtStartup) {
                this._schedule_bRunAtStartup = bScheduleRunAtStartup;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAtStartup_strStartupPriority = function () {
                return this._schedule_strStartupPriority;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAtStartup_strStartupPriority = function (strScheduleStartupPriority) {
                this._schedule_strStartupPriority = strScheduleStartupPriority;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAtStartup_startupPriority = function () {
                return this._schedule_iStartupPriority;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAtStartup_startupPriority = function (iScheduleStartupPriority) {
                this._schedule_iStartupPriority = iScheduleStartupPriority;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAtStartup_strWaitAtStartupToFinish = function () {
                return this._schedule_strWaitAtStartupToFinish;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAtStartup_strWaitAtStartupToFinish = function (strScheduleWaitAtStartupToFinish) {
                this._schedule_strWaitAtStartupToFinish = strScheduleWaitAtStartupToFinish;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleAtStartup_waitAtStartupToFinish = function () {
                return this._schedule_bWaitAtStartupToFinish;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleAtStartup_waitAtStartupToFinish = function (bScheduleWaitAtStartupToFinish) {
                this._schedule_bWaitAtStartupToFinish = bScheduleWaitAtStartupToFinish;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getSchedule_strRunOnlyOneInstanceOnce = function () {
                return this._schedule_strRunOnlyOneInstanceOnce;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setSchedule_strRunOnlyOneInstanceOnce = function (strScheduleRunOnlyOneInstanceOnce) {
                this._schedule_strRunOnlyOneInstanceOnce = strScheduleRunOnlyOneInstanceOnce;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getSchedule_runOnlyOneInstanceOnce = function () {
                return this._schedule_bRunOnlyOneInstanceOnce;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setSchedule_runOnlyOneInstanceOnce = function (bScheduleRunOnlyOneInstanceOnce) {
                this._schedule_bRunOnlyOneInstanceOnce = bScheduleRunOnlyOneInstanceOnce;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_strAtDate = function () {
                return this._schedule_strAtDate;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleStart_strAtDate = function (strAtDate) {
                this._schedule_strAtDate = strAtDate;
                this.setScheduleStart_strAtYear(strAtDate);
                this.setScheduleStart_strAtMonth(strAtDate);
                this.setScheduleStart_strAtDay(strAtDate);
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_atDate = function () {
                return this._schedule_dtAtDate;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleStart_atDate = function (dtAtDate) {
                this._schedule_dtAtDate = dtAtDate;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleStart_strAtYear = function (strAtDate) {
                if (strAtDate == null) {
                    this._schedule_strAtYear = "2000";
                    this._schedule_iAtYear = 2000;
                    return 0;
                }
                if (strAtDate.length < 5) {
                    this._schedule_strAtYear = "2000";
                    this._schedule_iAtYear = 2000;
                    return 0;
                }
                var strAtYear = strAtDate.substring(0, 4);
                var iAtYear = parseInt(strAtYear, 10);
                if (iAtYear == NaN) {
                    this._schedule_strAtYear = "2000";
                    this._schedule_iAtYear = 0;
                    return 0;
                }
                this._schedule_strAtYear = strAtYear;
                this._schedule_iAtYear = iAtYear;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_strAtYear = function () {
                return this._schedule_strAtYear;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_iAtYear = function () {
                return this._schedule_iAtYear;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleStart_strAtMonth = function (strAtDate) {
                if (strAtDate == null) {
                    this._schedule_strAtMonth = "01";
                    this._schedule_iAtMonth = 1;
                    return 0;
                }
                if (strAtDate.length < 7) {
                    this._schedule_strAtMonth = "01";
                    this._schedule_iAtMonth = 1;
                    return 0;
                }
                var strAtMonth = strAtDate.substring(5, 7);
                var iAtMonth = parseInt(strAtMonth, 10);
                if (iAtMonth == NaN) {
                    this._schedule_strAtMonth = "01";
                    this._schedule_iAtMonth = 1;
                    return 0;
                }
                this._schedule_strAtMonth = strAtMonth;
                this._schedule_iAtMonth = iAtMonth;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_strAtMonth = function () {
                return this._schedule_strAtMonth;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_iAtMonth = function () {
                return this._schedule_iAtMonth;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleStart_strAtDay = function (strAtDate) {
                if (strAtDate == null) {
                    this._schedule_strAtDay = "01";
                    this._schedule_iAtDay = 1;
                    return 0;
                }
                if (strAtDate.length < 10) {
                    this._schedule_strAtDay = "01";
                    this._schedule_iAtDay = 1;
                    return 0;
                }
                var strAtDay = strAtDate.substring(8, 10);
                var iAtDay = parseInt(strAtDay, 10);
                if (iAtDay == NaN) {
                    this._schedule_strAtDay = "01";
                    this._schedule_iAtDay = 1;
                    return 0;
                }
                this._schedule_strAtDay = strAtDay;
                this._schedule_iAtDay = iAtDay;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_strAtDay = function () {
                return this._schedule_strAtDay;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_iAtDay = function () {
                return this._schedule_iAtDay;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_strAtTime = function () {
                return this._schedule_strAtTime;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleStart_strAtTime = function (strAtTime) {
                this._schedule_strAtTime = strAtTime;
                this.setScheduleStart_strAtHour(strAtTime);
                this.setScheduleStart_strAtMinute(strAtTime);
                this.setScheduleStart_strAtSecond(strAtTime);
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_atTime = function () {
                return this._schedule_dtAtTime;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleStart_atTime = function (dtAtTime) {
                this._schedule_dtAtTime = dtAtTime;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleStart_strAtHour = function (strAtTime) {
                if (strAtTime == null) {
                    this._schedule_strAtHour = "00";
                    this._schedule_iAtHour = 0;
                    return 0;
                }
                if (strAtTime.length < 3) {
                    this._schedule_strAtHour = "00";
                    this._schedule_iAtHour = 0;
                    return 0;
                }
                var strAtHour = strAtTime.substring(0, 2);
                var iAtHour = parseInt(strAtHour, 10);
                if (iAtHour == NaN) {
                    this._schedule_strAtHour = "00";
                    this._schedule_iAtHour = 0;
                    return 0;
                }
                this._schedule_strAtHour = strAtHour;
                this._schedule_iAtHour = iAtHour;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_strAtHour = function () {
                return this._schedule_strAtHour;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_iAtHour = function () {
                return this._schedule_iAtHour;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleStart_strAtMinute = function (strAtTime) {
                if (strAtTime == null) {
                    this._schedule_strAtMinute = "00";
                    this._schedule_iAtMinute = 0;
                    return 0;
                }
                if (strAtTime.length < 5) {
                    this._schedule_strAtMinute = "00";
                    this._schedule_iAtMinute = 0;
                    return 0;
                }
                var strAtMinute = strAtTime.substring(3, 5);
                var iAtMinute = parseInt(strAtMinute, 10);
                if (iAtMinute == NaN) {
                    this._schedule_strAtMinute = "00";
                    this._schedule_iAtMinute = 0;
                    return 0;
                }
                this._schedule_strAtMinute = strAtMinute;
                this._schedule_iAtMinute = iAtMinute;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_strAtMinute = function () {
                return this._schedule_strAtMinute;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_iAtMinute = function () {
                return this._schedule_iAtMinute;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleStart_strAtSecond = function (strAtTime) {
                if (strAtTime == null) {
                    this._schedule_strAtSecond = "00";
                    this._schedule_iAtSecond = 0;
                    return 0;
                }
                if (strAtTime.length < 5) {
                    this._schedule_strAtSecond = "00";
                    this._schedule_iAtSecond = 0;
                    return 0;
                }
                var strAtSecond = strAtTime.substring(6, 8);
                var iAtSecond = parseInt(strAtSecond, 10);
                if (iAtSecond == NaN) {
                    this._schedule_strAtSecond = "00";
                    this._schedule_iAtSecond = 0;
                    return 0;
                }
                this._schedule_strAtSecond = strAtSecond;
                this._schedule_iAtSecond = iAtSecond;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_strAtSecond = function () {
                return this._schedule_strAtSecond;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_iAtSecond = function () {
                return this._schedule_iAtSecond;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getScheduleStart_bStartAlsoInTheSameDayAsStartAppDay = function () {
                return this._schedule_bStartAlsoInTheSameDayAsStartAppDay;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setScheduleStart_bStartAlsoInTheSameDayAsStartAppDay = function (bStartAlsoInTheSameDayAsStartAppDay) {
                this._schedule_bStartAlsoInTheSameDayAsStartAppDay = bStartAlsoInTheSameDayAsStartAppDay;
                return 0;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.getServiceConstraintList = function () {
                return this._aServiceConstraintList;
            };
            //----------------------------------------
            RE_ScheduleInfo.prototype.setServiceConstraintList = function (aServiceConstraintList) {
                this._aServiceConstraintList = aServiceConstraintList;
                return 0;
            };
            //------------------------------------------
            RE_ScheduleInfo.prototype.addServiceConstraint = function (newServiceConstraint) {
                if (newServiceConstraint)
                    return 1;
                if (this._aServiceConstraintList == null)
                    this._aServiceConstraintList = new Array();
                this._aServiceConstraintList.push(newServiceConstraint);
                return 0;
            };
            //-----------------------------------------------------------
            RE_ScheduleInfo.prototype.copyFromJson = function (jsonScheduleInfo) {
                //----------- set service name and sdervice abstract name
                this.setServiceName(jsonScheduleInfo.service_name);
                this.setServiceAbstractName(jsonScheduleInfo.service_abstract_name);
                //----------- set schedule type
                this.setStrScheduleType(jsonScheduleInfo.schedule_type);
                this.setScheduleTimeInterval_repeatIntervalInSeconds(jsonScheduleInfo.schedule_time_interval.repeat_interval_in_s);
                //----------- set schedule availability 
                this.setScheduleAvailability_strFromTime(jsonScheduleInfo.schedule_availability.from_time);
                this.setScheduleAvailability_strFromDate(jsonScheduleInfo.schedule_availability.from_date);
                this.setScheduleAvailability_strToTime(jsonScheduleInfo.schedule_availability.to_time);
                this.setScheduleAvailability_strToDate(jsonScheduleInfo.schedule_availability.to_date);
                this.setScheduleAvailability_strInWeekdays(jsonScheduleInfo.schedule_availability.in_weekdays);
                //----------- set schedule AtDate and AtTime
                this.setScheduleStart_bStartAlsoInTheSameDayAsStartAppDay(jsonScheduleInfo.schedule_start.start_also_in_the_same_day_as_app_start_day);
                this.setScheduleStart_strAtTime(jsonScheduleInfo.schedule_start.at_time);
                this.setScheduleStart_strAtDate(jsonScheduleInfo.schedule_start.at_date);
                this.setScheduleAtStartup_runAtStartup(jsonScheduleInfo.schedule_at_startup.run_at_startup);
                this.setScheduleAtStartup_startupPriority(jsonScheduleInfo.schedule_at_startup.startup_priority);
                this.setScheduleAtStartup_waitAtStartupToFinish(jsonScheduleInfo.schedule_at_startup.wait_at_startup_to_finish);
                //----------- run only once instance flag
                this.setSchedule_runOnlyOneInstanceOnce(jsonScheduleInfo.schedule_run_only_one_service_instance_once);
                //---------- set service action 
                this.setServiceAction(jsonScheduleInfo.service_action);
                //---------- set service action parameters
                var crtServiceActionParameter = null;
                for (var k = 0; k < jsonScheduleInfo.service_action_parameters.length; k++) {
                    crtServiceActionParameter = this._aSrvLocator._iEntityCreation.createDefaultParameter(null);
                    crtServiceActionParameter.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, null); //error);
                    crtServiceActionParameter.copyFromJson(jsonScheduleInfo.service_action_parameters[k]);
                    this.getServiceActionParametersList().push(crtServiceActionParameter);
                }
                //---------- set service constraints
                var crtServiceConstraint = null;
                for (var j = 0; j < jsonScheduleInfo.service_constraints.length; j++) {
                    crtServiceConstraint = this._aSrvLocator._iEntityCreation.createDefaultServiceConstraint(null);
                    crtServiceConstraint.injectDependencies(this._aSrvContainer, this._aSrvLocator, this._aSrvLog, null); //error);
                    crtServiceConstraint.copyFromJson(jsonScheduleInfo.service_constraints[j]);
                    this.getServiceConstraintList().push(crtServiceConstraint);
                }
                return 0;
            };
            return RE_ScheduleInfo;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.RE_ScheduleInfo = RE_ScheduleInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
/*
            {
                "service_name": "RS_TestService",
                "service_abstract_name": "AS_TestService",
                "schedule_type": "schedule_type_at_time_interval",
                "schedule_time_interval" :
                {
                  "at_time_interval_in_s": 20
                },
                "schedule_start" :
                {
                  "at_time": "00:00:00",
                  "at_date": "2000-01-01"
                },
                "schedule_availability" :
                     {
                       "from_time": "00:00:00",
                       "from_date": "2000-01-01",
                       "to_time": "23:59:59",
                       "to_date": "2099-31-12",
                       "in_weekdays": "1111111"
                     },
                "schedule_at_startup" :
                    {
                      "run_at_startup": true,
                      "startup_priority": 1,
                      "wait_at_startup_to_finish": false
                    },
                "schedule_run_only_one_service_instance_once": true,
                "service_action": "run",
                "service_action_parameters": [
                    {
                        "param_type": "number",
                        "param_name": "p1",
                        "param_value": "10"
                    },
                    {
                        "param_type": "number",
                        "param_name": "p2",
                        "param_value": "20"
                    }
                ],
                "service_constraints": [
                    {
                        "constraint_type": "constraint_cannot_run_if_reference_service_run",
                        "reference_service_name": "RS_TestService2",
                        "reference_service_abstract_name": "AS_TestService2",
                        "current_service_status": "status_all"
                    },
                    {
                        "constraint_type": "reference_service_run_at_the_end_for_status",
                        "reference_service_name": "RS_TestService3",
                        "reference_service_abstract_name": "AS_TestService3",
                        "current_service_status": "status_playlist_changed"
                    }
*/
//# sourceMappingURL=RE_ScheduleInfo.js.map