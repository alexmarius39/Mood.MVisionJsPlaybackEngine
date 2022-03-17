import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralParameter    = require("../../../../../app/ts/abstract/am_general/ae_parameter/AE_Parameter");
import amGeneralScheduleType = require("../../../../../app/ts/abstract/am_general/ae_scheduletype/AE_ScheduleType");

import amGeneralServiceConstraint   = require("../../../../../app/ts/abstract/am_general/ae_serviceconstraint/AE_ServiceConstraint");

export module am_general
{
  export interface AE_ScheduleInfo extends amGeneral.am_general.A_Entity
  {

    copyFromJson(jsonScheduleInfo : any);

    getStrScheduleType()   : string;                     
    setStrScheduleType(strScheduleType  : string) : number;  
    getScheduleType()   : amGeneralScheduleType.am_general.AE_ScheduleType; 
    setScheduleType(aScheduleType  : amGeneralScheduleType.am_general.AE_ScheduleType) : number;  

    getServiceAbstractName(): string;
    setServiceAbstractName(strAbstractServiceName: string) : number;

    getServiceName(): string;
    setServiceName(strServiceName: string) : number;

    getServiceAction(): string;
    setServiceAction(strServiceActive: string) : number;

    getServiceActionParametersList(): Array<amGeneralParameter.am_general.AE_Parameter>;
    setServiceActionParametersList(aServiceActionParameterList: Array<amGeneralParameter.am_general.AE_Parameter>) : number;

    getServiceActionParameterByName(strParamName: string) : amGeneralParameter.am_general.AE_Parameter;
    
    addServiceActionParameter(newParameter: amGeneralParameter.am_general.AE_Parameter): number;

    getScheduleAvailability_strFromDate()   : string;                     //2001-01-01
    setScheduleAvailability_strFromDate(strDateFrom  : string) : number;  //2001-01-01
    getScheduleAvailability_fromDate()   : Date;                          //2001-01-01
    setScheduleAvailability_fromDate(dtFromDate  : Date) : number;     //2001-01-01

    getScheduleAvailability_strToDate()   : string;                    //2099-12-31
    setScheduleAvailability_strToDate(strDateTo : string) : number;    //2001-12-31
    getScheduleAvailability_toDate()   : Date;                         //2099-12-31
    setScheduleAvailability_toDate(strDateTo : Date) : number;         //2001-12-31

    getScheduleAvailability_strInWeekdays() : string;                          //1111111
    setScheduleAvailability_strInWeekdays(strActiveWeekDays : string) : number;  //1111111

    getScheduleAvailability_strFromTime()   : string;                     //12:00:01
    setScheduleAvailability_strFromTime(strTimeFrom  : string) : number;  //12:00:01
    getScheduleAvailability_fromTime()      : Date;                       //12:00:01
    setScheduleAvailability_fromTime(dtToTime : Date) : number;           //12:00:01

    getScheduleAvailability_strToTime()   : string;                       //12:00:01
    setScheduleAvailability_strToTime(strTimeTo : string) : number;       //12:00:01
    getScheduleAvailability_toTime()      : Date;                         //12:00:01
    setScheduleAvailability_toTime(dtToTime : Date) : number;             //12:00:01

    setScheduleStart_strAtYear(strAtDate : string) : number;
    getScheduleStart_strAtYear() : string;
    getScheduleStart_iAtYear() : number;

    setScheduleStart_strAtMonth(strAtDate : string) : number;
    getScheduleStart_strAtMonth() : string;
    getScheduleStart_iAtMonth() : number;

    setScheduleStart_strAtDay(strAtDay : string) : number;
    getScheduleStart_strAtDay() : string;               
    getScheduleStart_iAtDay() : number;         


    setScheduleStart_strAtHour(strAtTime : string) : number;
    getScheduleStart_strAtHour() : string;
    getScheduleStart_iAtHour() : number;

    setScheduleStart_strAtMinute(strAtTime : string) : number;
    getScheduleStart_strAtMinute() : string;
    getScheduleStart_iAtMinute() : number;

    setScheduleStart_strAtSecond(strAtTime : string) : number;
    getScheduleStart_strAtSecond() : string;               
    getScheduleStart_iAtSecond() : number;         

    getScheduleStart_bStartAlsoInTheSameDayAsStartAppDay()  : boolean;
    setScheduleStart_bStartAlsoInTheSameDayAsStartAppDay(bStartAlsoInTheSameDayAsStartAppDay  : boolean) : number ;

    getScheduleTimeInterval_strRepeatIntervalInSeconds() : string;                                           //600
    setScheduleTimeInterval_strRepeatIntervalInSeconds(strTimeRepeatIntervalinSeconds : string) : number;    //600

    getScheduleTimeInterval_repeatIntervalInSeconds() : number;                                           
    setScheduleTimeInterval_repeatIntervalInSeconds(iTimeRepeatIntervalinSeconds : number) : number;    

    getScheduleAtStartup_strRunAtStartup(): string;
    setScheduleAtStartup_strRunAtStartup(strRunAtStartup : string) : number;
    getScheduleAtStartup_runAtStartup(): boolean;
    setScheduleAtStartup_runAtStartup(bRunAtStartup : boolean) : number;

    getScheduleAtStartup_strStartupPriority(): string;
    setScheduleAtStartup_strStartupPriority(strStartupPriority : string) : number;
    getScheduleAtStartup_startupPriority(): number;
    setScheduleAtStartup_startupPriority(iStartupPriority : number) : number;

    getScheduleAtStartup_strWaitAtStartupToFinish() : string;
    setScheduleAtStartup_strWaitAtStartupToFinish(strScheduleWaitAtStartupToFinish : string) : number;
    getScheduleAtStartup_waitAtStartupToFinish(): boolean;
    setScheduleAtStartup_waitAtStartupToFinish(bScheduleWaitAtStartupToFinish : boolean) : number;

    getSchedule_strRunOnlyOneInstanceOnce(): string;
    setSchedule_strRunOnlyOneInstanceOnce(strRunOnlyOneInstanceOnce : string) : number;
    getSchedule_runOnlyOneInstanceOnce(): boolean;
    setSchedule_runOnlyOneInstanceOnce(bRunOnlyOneInstanceOnce : boolean) : number;

    getScheduleStart_strAtDate()   : string;                     //2001-01-01
    setScheduleStart_strAtDate(strDateFrom  : string) : number;  //2001-01-01
    getScheduleStart_atDate()   : Date;                          //2001-01-01
    setScheduleStart_atDate(dtFromDate  : Date) : number;         //2001-01-01

    getScheduleStart_strAtTime()   : string;                       //12:00:01
    setScheduleStart_strAtTime(strTimeTo : string) : number;       //12:00:01
    getScheduleStart_atTime()      : Date;                         //12:00:01
    setScheduleStart_atTime(dtToTime : Date) : number;             //12:00:01


    getServiceConstraintList(): Array<amGeneralServiceConstraint.am_general.AE_ServiceConstraint>;
    setServiceConstraintList(aServiceConstraintList: Array<amGeneralServiceConstraint.am_general.AE_ServiceConstraint>) : number;

    addServiceConstraint(newServiceConstraint: amGeneralServiceConstraint.am_general.AE_ServiceConstraint): number;
  }
}

