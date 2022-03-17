import amGeneral     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amScheduleInfo     = require("../../../../../app/ts/abstract/am_general/ae_scheduleinfo/AE_ScheduleInfo");
import amGeneralParameter = require("../../../../../app/ts/abstract/am_general/ae_parameter/AE_Parameter");

import amGeneralScheduleType = require("../../../../../app/ts/abstract/am_general/ae_scheduletype/AE_ScheduleType");
import amGeneralServiceConstraint   = require("../../../../../app/ts/abstract/am_general/ae_serviceconstraint/AE_ServiceConstraint");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");


export module rm_general
{
  export class RE_ScheduleInfo    extends rmGeneralEntity.rm_general.R_Entity
                                  implements amScheduleInfo.am_general.AE_ScheduleInfo
  {
    //--- properties
    _strScheduleType : string;
    _aScheduleType   : amGeneralScheduleType.am_general.AE_ScheduleType;

    _strServiceName          :  string;
    _strServiceAbstractName  :  string;
    _strServiceAction        :  string;

    _aServiceActionParameterList    :  Array<amGeneralParameter.am_general.AE_Parameter>;
    _aServiceConstraintList         :  Array<amGeneralServiceConstraint.am_general.AE_ServiceConstraint>;

    _schedule_strFromDate           :  string;
    _schedule_dtFromDate            :  Date;

    _schedule_strToDate             :  string;
    _schedule_dtToDate              :  Date;

    _schedule_strInWeekdays         :  string;

    _schedule_strFromTime           :  string;
    _schedule_dtFromTime            :  Date;

    _schedule_strToTime             :  string;
    _schedule_dtToTime              :  Date;

    _schedule_strTimeRepeatIntervalInSeconds : string;
    _schedule_iTimeRepeatIntervalInSeconds   : number;

    _schedule_strAtDate             :  string;
    _schedule_dtAtDate              :  Date;

    _schedule_strAtYear             :  string;
    _schedule_iAtYear               :  number;

    _schedule_strAtMonth            :  string;
    _schedule_iAtMonth              :  number;

    _schedule_strAtDay              :  string;
    _schedule_iAtDay                :  number;

    _schedule_bStartAlsoInTheSameDayAsStartAppDay : boolean;
    
    _schedule_strAtTime             :  string;
    _schedule_dtAtTime              :  Date;

    _schedule_strAtHour             :  string;
    _schedule_iAtHour               :  number;

    _schedule_strAtMinute           :  string;
    _schedule_iAtMinute             :  number;

    _schedule_strAtSecond           :  string;
    _schedule_iAtSecond             :  number;

    _schedule_strRunAtStartup       : string;
    _schedule_bRunAtStartup         : boolean;

    _schedule_strStartupPriority    : string;
    _schedule_iStartupPriority      : number;

    _schedule_strWaitAtStartupToFinish : string;
    _schedule_bWaitAtStartupToFinish   : boolean;

    _schedule_strRunOnlyOneInstanceOnce : string;
    _schedule_bRunOnlyOneInstanceOnce   : boolean;
    
    //----------- constructor 
    constructor()  
    {  
      super();
      this._strScheduleType = "schedule_type_none";
      this._aScheduleType   = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_None;
  
      this._strServiceAbstractName = "";
      this._strServiceName   = "";
      this._strServiceAction = "";

      this._aServiceActionParameterList  = null;
      this._aServiceConstraintList       = null;

      this._schedule_strFromDate = "";
      this._schedule_dtFromDate  = new Date(0,0,0,0,0,0,0);

      this._schedule_strToDate   = "";
      this._schedule_dtToDate    = new Date(0,0,0,0,0,0,0);

      this._schedule_strInWeekdays = "";

      this._schedule_strFromTime  = "";
      this._schedule_dtFromTime   = new Date(0,0,0,0,0,0,0);

      this._schedule_strToTime    = "";
      this._schedule_dtToTime     = new Date(0,0,0,0,0,0,0);

      this._schedule_strTimeRepeatIntervalInSeconds = "";
      this._schedule_iTimeRepeatIntervalInSeconds   = 0;

      this._schedule_bStartAlsoInTheSameDayAsStartAppDay = false;

      this._schedule_strAtDate             = "200-01-01";
      this._schedule_dtAtDate              = new Date(2000,1,1,0,0,0,0);
  
      this._schedule_strAtYear    = "2000";
      this._schedule_iAtYear      = 2000;
  
      this._schedule_strAtMonth   = "01";
      this._schedule_iAtMonth     = 1;
  
      this._schedule_strAtDay     = "01";
      this._schedule_iAtDay       = 1;

      this._schedule_strAtTime    = "00:00:00";
      this._schedule_dtAtTime     = new Date(0,0,0,0,0,0,0);

      this._schedule_strAtHour           = "00";
      this._schedule_iAtHour             = 0;

      this._schedule_strAtMinute         = "00";
      this._schedule_iAtMinute           = 0;
  
      this._schedule_strAtSecond         = "00";
      this._schedule_iAtSecond           = 0;

      this._aServiceActionParameterList    = new  Array<amGeneralParameter.am_general.AE_Parameter>();
      this._aServiceConstraintList         = new  Array<amGeneralServiceConstraint.am_general.AE_ServiceConstraint>();
  
      this._schedule_strRunAtStartup  = "no";
      this._schedule_bRunAtStartup    = false;

      this._schedule_strStartupPriority    = "0";
      this._schedule_iStartupPriority      = 0;
  
      this._schedule_strWaitAtStartupToFinish   = "no";
      this._schedule_bWaitAtStartupToFinish     = false;
    }

    //-----------------------------------------
    public getStrScheduleType()   : string
    {
      return this._strScheduleType;
    }                   
    //-----------------------------------------
    public setStrScheduleType(strScheduleType  : string) : number
    {
      this._strScheduleType = strScheduleType;
      if (this._strScheduleType == "schedule_none")
      {
        this._aScheduleType  = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_None;
        return 0;
      }else if (this._strScheduleType == "schedule_type_at_time_interval")
      {
        this._aScheduleType  = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_AtTimeInterval;
        return 0;
      }else if (this._strScheduleType == "schedule_type_daily")
      {
        this._aScheduleType  = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Daily;
        return 0;
      }else if (this._strScheduleType == "schedule_type_weekly")
      {
        this._aScheduleType  = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Weekly;
        return 0;
      }else if (this._strScheduleType == "schedule_type_monthly")
      {
        this._aScheduleType  = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Monthly;
        return 0;
      }else if (this._strScheduleType == "schedule_type_once")
      {
        this._aScheduleType  = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Once;
        return 0;
      }

      this._strScheduleType          = "schedule_type_none";
      this._aScheduleType            = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_None;
      return 0;
    }
    //----------------------------------------
    public getScheduleType()   : amGeneralScheduleType.am_general.AE_ScheduleType
    {
      return this._aScheduleType;
    }
    //----------------------------------------
    public setScheduleType(aScheduleType  : amGeneralScheduleType.am_general.AE_ScheduleType) : number
    {
      this._aScheduleType = aScheduleType;
      if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_None)
      {
        this._strScheduleType  = "schedule_type_none";
        return 0;
      }else if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_AtTimeInterval)
      {
        this._strScheduleType  = "schedule_type_at_time_interval";
        return 0;
      }else if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Daily)
      {
        this._strScheduleType  = "schedule_type_daily";
        return 0;
      }else if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Weekly)
      {
        this._strScheduleType  = "schedule_type_weekly";
        return 0;
      }else if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Monthly)
      {
        this._strScheduleType  = "schedule_type_monthly";
        return 0;
      }else if (this._aScheduleType == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Once)
      {
        this._strScheduleType  = "schedule_type_once";
        return 0;
      }

      this._strScheduleType          = "schedule_type_none";
      this._aScheduleType            = amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_None;
      return 0;

    }  
  
    //----------------------------------------
    public getServiceAbstractName(): string
    {
      return this._strServiceAbstractName;
    }
    //----------------------------------------
    public setServiceAbstractName(strServiceAbstractName: string) : number
    {
      this._strServiceAbstractName = strServiceAbstractName;
      return 0;
    }

    //----------------------------------------
    public getServiceName(): string
    {
      return this._strServiceName;
    }
    //----------------------------------------
    public setServiceName(strServiceName: string) : number
    {
      this._strServiceName = strServiceName;
      return 0;
    }

    //-------------------------------------------
    public getServiceAction(): string
    {
      return this._strServiceAction;
    }
    //-------------------------------------------
    public setServiceAction(strServiceAction: string) : number
    {
   
      this._strServiceAction = strServiceAction;
      return 0;
    }

    //-------------------------------------------
    public getServiceActionParametersList(): Array<amGeneralParameter.am_general.AE_Parameter>
    {
      return this._aServiceActionParameterList;
    }
    //-------------------------------------------
    public setServiceActionParametersList(aServiceActionParameterList: Array<amGeneralParameter.am_general.AE_Parameter>) : number
    {
      this._aServiceActionParameterList = aServiceActionParameterList;
      return 0;
    }

    //-------------------------------------------
    public getServiceActionParameterByName(strParamName: string) : amGeneralParameter.am_general.AE_Parameter
    {
      for (let crtParam of this._aServiceActionParameterList) 
      {
        if (crtParam.getParameterName() == strParamName) 
          return crtParam;
      }
      return null;
    }
    
    //-------------------------------------------
    public addServiceActionParameter(newParameter: amGeneralParameter.am_general.AE_Parameter): number
    {
      if (newParameter)
      return 1;

      if (this._aServiceActionParameterList == null)
        this._aServiceActionParameterList   = new Array<amGeneralParameter.am_general.AE_Parameter>();

      this._aServiceActionParameterList .push(newParameter);
      return 0;
    }


 
    //----------------------------------------
    public getScheduleAvailability_strFromDate()  : string                     //2001-01-01
    {
      return this._schedule_strFromDate;
    }
    //----------------------------------------
    public setScheduleAvailability_strFromDate(strScheduleFromDate  : string) : number  //2001-01-01
    {
      this._schedule_strFromDate = strScheduleFromDate;
      return 0;
    }
    //----------------------------------------
    public getScheduleAvailability_fromDate()  : Date                    //2001-01-01
    {
      return this._schedule_dtFromDate;
    }
    //----------------------------------------
    public setScheduleAvailability_fromDate(dtScheduleFromDate  : Date) : number  //2001-01-01
    {
      this._schedule_dtFromDate = dtScheduleFromDate;
      return 0;
    }

    //----------------------------------------
    public getScheduleAvailability_strToDate() : string                      //2099-12-31
    {
      return this._schedule_strToDate;
    }
    //----------------------------------------
    public setScheduleAvailability_strToDate(strToDate : string) : number      //2001-12-31
    {
      this._schedule_strToDate = strToDate; 
      return 0;
    }
    //----------------------------------------
    public getScheduleAvailability_toDate()  : Date                    //2001-01-01
    {
      return this._schedule_dtFromDate;
    }
    //----------------------------------------
    public setScheduleAvailability_toDate(dtToDate  : Date) : number  //2001-01-01
    {
      this._schedule_dtToDate = dtToDate;
      return 0;
    }

    //----------------------------------------
    public getScheduleAvailability_strInWeekdays()  : string                 //1111111
    {
      return this._schedule_strInWeekdays;
    }
    //----------------------------------------
    public setScheduleAvailability_strInWeekdays(strScheduleInWeekdays: string) : number   //1111111
    {
      //---
      if (strScheduleInWeekdays == null)
      {
        this._schedule_strInWeekdays = "1111111";
        return 1;
      }  
      //---
      if (strScheduleInWeekdays == "")
      {
        this._schedule_strInWeekdays = "1111111";
        return 1;
      }  
      //---
      if (strScheduleInWeekdays.length != 7)
      {
        this._schedule_strInWeekdays = "1111111";
        return 1;
      }  
      //---
      this._schedule_strInWeekdays = strScheduleInWeekdays; 
      return 0;
    }


    //----------------------------------------
    public getScheduleAvailability_strFromTime() : string                       //2001-01-01
    {
      return this._schedule_strFromTime;
    }
    //----------------------------------------
    public setScheduleAvailability_strFromTime(strFromTime  : string) : number  //2001-01-01
    {
      this._schedule_strFromTime = strFromTime;
      return 0;     
    }
    //----------------------------------------
    public getScheduleAvailability_fromTime()  : Date                    //2001-01-01
    {
      return this._schedule_dtFromTime;
    }
    //----------------------------------------
    public setScheduleAvailability_fromTime(dtFromTime  : Date) : number  //2001-01-01
    {
      this._schedule_dtFromTime = dtFromTime;
      return 0;
    }


    //----------------------------------------
    public getScheduleAvailability_strToTime() : string                        //00:00:01
    {
      return this._schedule_strToTime;
    }
    //----------------------------------------
    public setScheduleAvailability_strToTime(strToTime : string) : number      //00:00:01
    {
      this._schedule_strToTime = strToTime;
      return 0;
    }
    //----------------------------------------
    public getScheduleAvailability_toTime()  : Date                    //23:59:59
    {
      return this._schedule_dtToTime;
    }
    //----------------------------------------
    public setScheduleAvailability_toTime(dtToTime  : Date) : number  //23:59:59
    {
      this._schedule_dtToTime = dtToTime;
      return 0;
    }


    //----------------------------------------
    public getScheduleTimeInterval_strRepeatIntervalInSeconds() : string
    {
      return this._schedule_strTimeRepeatIntervalInSeconds;
    }                                         
    //----------------------------------------
    public setScheduleTimeInterval_strRepeatIntervalInSeconds(strTimeRepeatIntervalInSeconds : string) : number   //600
    {
      this._schedule_strTimeRepeatIntervalInSeconds = strTimeRepeatIntervalInSeconds;
      return 0;
    }
    //----------------------------------------
    public getScheduleTimeInterval_repeatIntervalInSeconds() : number
    { 
      return this._schedule_iTimeRepeatIntervalInSeconds;   
    }   
    //----------------------------------------
    public setScheduleTimeInterval_repeatIntervalInSeconds(iTimeRepeatIntervalinSeconds : number) : number
    {
      this._schedule_iTimeRepeatIntervalInSeconds = iTimeRepeatIntervalinSeconds;
      return 0;
    }
  

    //----------------------------------------
    public getScheduleAtStartup_strRunAtStartup(): string
    {
      return this._schedule_strRunAtStartup;
    }
    //----------------------------------------
    public setScheduleAtStartup_strRunAtStartup(strScheduleRunAtStartup : string) : number
    {
      this._schedule_strRunAtStartup = strScheduleRunAtStartup;
      return 0;
    }
    //----------------------------------------
    public getScheduleAtStartup_runAtStartup(): boolean
    {
      return this._schedule_bRunAtStartup;
          
    }
    //----------------------------------------
    public setScheduleAtStartup_runAtStartup(bScheduleRunAtStartup : boolean) : number
    {
      this._schedule_bRunAtStartup = bScheduleRunAtStartup; 
      return 0;
    }

    //----------------------------------------
    public getScheduleAtStartup_strStartupPriority(): string
    {
      return this._schedule_strStartupPriority;
    }
    //----------------------------------------
    public setScheduleAtStartup_strStartupPriority(strScheduleStartupPriority : string) : number
    {
      this._schedule_strStartupPriority = strScheduleStartupPriority; 
      return 0;
    }
    //----------------------------------------
    public getScheduleAtStartup_startupPriority(): number
    {
      return this._schedule_iStartupPriority;
    }
    //----------------------------------------
    public setScheduleAtStartup_startupPriority(iScheduleStartupPriority : number) : number
    {
      this._schedule_iStartupPriority = iScheduleStartupPriority;
      return 0;
    }

    //----------------------------------------
    public getScheduleAtStartup_strWaitAtStartupToFinish() : string
    {
      return this._schedule_strWaitAtStartupToFinish;
    }
    //----------------------------------------
    public setScheduleAtStartup_strWaitAtStartupToFinish(strScheduleWaitAtStartupToFinish : string) : number
    {
      this._schedule_strWaitAtStartupToFinish = strScheduleWaitAtStartupToFinish;
      return 0;
    }
    //----------------------------------------
    public getScheduleAtStartup_waitAtStartupToFinish(): boolean
    {
      return this._schedule_bWaitAtStartupToFinish;
          
    }
    //----------------------------------------
    public setScheduleAtStartup_waitAtStartupToFinish(bScheduleWaitAtStartupToFinish : boolean) : number
    {
      this._schedule_bWaitAtStartupToFinish = bScheduleWaitAtStartupToFinish; 
      return 0;
    }


    //----------------------------------------
    public getSchedule_strRunOnlyOneInstanceOnce(): string
    {
      return this._schedule_strRunOnlyOneInstanceOnce;  
    }
    //----------------------------------------
    public setSchedule_strRunOnlyOneInstanceOnce(strScheduleRunOnlyOneInstanceOnce : string) : number
    {
      this._schedule_strRunOnlyOneInstanceOnce = strScheduleRunOnlyOneInstanceOnce;  
      return 0;
    }
    //----------------------------------------
    public getSchedule_runOnlyOneInstanceOnce(): boolean
    {
      return this._schedule_bRunOnlyOneInstanceOnce;        
    }
    //----------------------------------------
    public setSchedule_runOnlyOneInstanceOnce(bScheduleRunOnlyOneInstanceOnce : boolean) : number
    {
      this._schedule_bRunOnlyOneInstanceOnce = bScheduleRunOnlyOneInstanceOnce;
      return 0;
    }

    //----------------------------------------
    public getScheduleStart_strAtDate() : string                        //00:00:01
    {
      return this._schedule_strAtDate;
    }
    //----------------------------------------
    public setScheduleStart_strAtDate(strAtDate : string) : number      //00:00:01
    {
      this._schedule_strAtDate = strAtDate;
      this.setScheduleStart_strAtYear(strAtDate);
      this.setScheduleStart_strAtMonth(strAtDate);
      this.setScheduleStart_strAtDay(strAtDate);
      return 0;
    }

    //----------------------------------------
    public getScheduleStart_atDate()  : Date                    //23:59:59
    {
      return this._schedule_dtAtDate;
    }
    //----------------------------------------
    public setScheduleStart_atDate(dtAtDate  : Date) : number  //23:59:59
    {
      this._schedule_dtAtDate = dtAtDate;
      return 0;
    }


    //----------------------------------------
    public setScheduleStart_strAtYear(strAtDate : string) : number      //00:00:01
    {
      if (strAtDate == null)
      {
       this._schedule_strAtYear = "2000";
       this._schedule_iAtYear   = 2000;
       return 0;
      }
      if (strAtDate.length < 5)
      {
        this._schedule_strAtYear = "2000";
        this._schedule_iAtYear   = 2000;
        return 0;
      }
      var strAtYear = strAtDate.substring(0,4);
      var iAtYear   = parseInt(strAtYear, 10);
      if (iAtYear == NaN)
      {
        this._schedule_strAtYear = "2000";
        this._schedule_iAtYear   = 0;
        return 0;
      }
      this._schedule_strAtYear = strAtYear;
      this._schedule_iAtYear  = iAtYear;
      return 0;
    }

    //----------------------------------------
    public getScheduleStart_strAtYear() : string                        //00
    {
      return this._schedule_strAtYear;
    }

    //----------------------------------------
    public getScheduleStart_iAtYear() : number                        //0
    {
      return this._schedule_iAtYear;
    }


    //----------------------------------------
    public setScheduleStart_strAtMonth(strAtDate : string) : number      //00:00:01
    {
      if (strAtDate == null)
      {
       this._schedule_strAtMonth = "01";
       this._schedule_iAtMonth   = 1;
       return 0;
      }
      if (strAtDate.length < 7)
      {
        this._schedule_strAtMonth = "01";
        this._schedule_iAtMonth   = 1;
        return 0;
      }
      var strAtMonth = strAtDate.substring(5,7);
      var iAtMonth   = parseInt(strAtMonth, 10);
      if (iAtMonth == NaN)
      {
        this._schedule_strAtMonth = "01";
        this._schedule_iAtMonth  = 1;
        return 0;
      }
      this._schedule_strAtMonth = strAtMonth;
      this._schedule_iAtMonth   = iAtMonth;
      return 0;
    }

    //----------------------------------------
    public getScheduleStart_strAtMonth() : string                        //00
    {
      return this._schedule_strAtMonth;
    }

    //----------------------------------------
    public getScheduleStart_iAtMonth() : number                        //0
    {
      return this._schedule_iAtMonth;
    }


    //----------------------------------------
    public setScheduleStart_strAtDay(strAtDate : string) : number      //00:00:01
    {
      if (strAtDate == null)
      {
       this._schedule_strAtDay = "01";
       this._schedule_iAtDay   = 1;
       return 0;
      }
      if (strAtDate.length < 10)
      {
        this._schedule_strAtDay = "01";
        this._schedule_iAtDay   = 1;
        return 0;
      }
      var strAtDay = strAtDate.substring(8,10);
      var iAtDay   = parseInt(strAtDay, 10);
      if (iAtDay == NaN)
      {
        this._schedule_strAtDay = "01";
        this._schedule_iAtDay   = 1;
        return 0;
      }
      this._schedule_strAtDay = strAtDay;
      this._schedule_iAtDay   = iAtDay;
      return 0;
    }


    //----------------------------------------
    public getScheduleStart_strAtDay() : string                        //00
    {
      return this._schedule_strAtDay;
    }

    //----------------------------------------
    public getScheduleStart_iAtDay() : number                        //0
    {
      return this._schedule_iAtDay;
    }



    //----------------------------------------
    public getScheduleStart_strAtTime() : string                        //00:00:01
    {
      return this._schedule_strAtTime;
    }

    //----------------------------------------
    public setScheduleStart_strAtTime(strAtTime : string) : number      //00:00:01
    {
      this._schedule_strAtTime = strAtTime;
      this.setScheduleStart_strAtHour(strAtTime);
      this.setScheduleStart_strAtMinute(strAtTime);
      this.setScheduleStart_strAtSecond(strAtTime);
      return 0;
    }

    //----------------------------------------
    public getScheduleStart_atTime()  : Date                    //23:59:59
    {
      return this._schedule_dtAtTime;
    }
    //----------------------------------------
    public setScheduleStart_atTime(dtAtTime  : Date) : number  //23:59:59
    {
      this._schedule_dtAtTime = dtAtTime;
      return 0;
    }


    //----------------------------------------
    public setScheduleStart_strAtHour(strAtTime : string) : number      //00:00:01
    {
      if (strAtTime == null)
      {
       this._schedule_strAtHour = "00";
       this._schedule_iAtHour   = 0;
       return 0;
      }
      if (strAtTime.length < 3)
      {
        this._schedule_strAtHour = "00";
        this._schedule_iAtHour   = 0;
        return 0;
      }
      var strAtHour = strAtTime.substring(0,2);
      var iAtHour   = parseInt(strAtHour, 10);
      if (iAtHour == NaN)
      {
        this._schedule_strAtHour = "00";
        this._schedule_iAtHour   = 0;
        return 0;
      }
      this._schedule_strAtHour = strAtHour;
      this._schedule_iAtHour   = iAtHour;
      return 0;
    }

    //----------------------------------------
    public getScheduleStart_strAtHour() : string                        //00
    {
      return this._schedule_strAtHour;
    }

    //----------------------------------------
    public getScheduleStart_iAtHour() : number                        //0
    {
      return this._schedule_iAtHour;
    }


    //----------------------------------------
    public setScheduleStart_strAtMinute(strAtTime : string) : number      //00:00:01
    {
      if (strAtTime == null)
      {
       this._schedule_strAtMinute = "00";
       this._schedule_iAtMinute   = 0;
       return 0;
      }
      if (strAtTime.length < 5)
      {
        this._schedule_strAtMinute = "00";
        this._schedule_iAtMinute   = 0;
        return 0;
      }
      var strAtMinute = strAtTime.substring(3,5);
      var iAtMinute   = parseInt(strAtMinute, 10);
      if (iAtMinute == NaN)
      {
        this._schedule_strAtMinute = "00";
        this._schedule_iAtMinute  = 0;
        return 0;
      }
      this._schedule_strAtMinute = strAtMinute;
      this._schedule_iAtMinute   = iAtMinute;
      return 0;
    }

    //----------------------------------------
    public getScheduleStart_strAtMinute() : string                        //00
    {
      return this._schedule_strAtMinute;
    }

    //----------------------------------------
    public getScheduleStart_iAtMinute() : number                        //0
    {
      return this._schedule_iAtMinute;
    }


    //----------------------------------------
    public setScheduleStart_strAtSecond(strAtTime : string) : number      //00:00:01
    {
      if (strAtTime == null)
      {
       this._schedule_strAtSecond = "00";
       this._schedule_iAtSecond   = 0;
       return 0;
      }
      if (strAtTime.length < 5)
      {
        this._schedule_strAtSecond = "00";
        this._schedule_iAtSecond   = 0;
        return 0;
      }
      var strAtSecond = strAtTime.substring(6,8);
      var iAtSecond   = parseInt(strAtSecond, 10);
      if (iAtSecond == NaN)
      {
        this._schedule_strAtSecond = "00";
        this._schedule_iAtSecond   = 0;
        return 0;
      }
      this._schedule_strAtSecond = strAtSecond;
      this._schedule_iAtSecond   = iAtSecond;
      return 0;
    }


    //----------------------------------------
    public getScheduleStart_strAtSecond() : string                        //00
    {
      return this._schedule_strAtSecond;
    }

    //----------------------------------------
    public getScheduleStart_iAtSecond() : number                        //0
    {
      return this._schedule_iAtSecond;
    }

    

    //----------------------------------------
    public getScheduleStart_bStartAlsoInTheSameDayAsStartAppDay()  : boolean                   //true/false
    {
      return this._schedule_bStartAlsoInTheSameDayAsStartAppDay;
    }
    //----------------------------------------
    public setScheduleStart_bStartAlsoInTheSameDayAsStartAppDay(bStartAlsoInTheSameDayAsStartAppDay  : boolean) : number 
    {
      this._schedule_bStartAlsoInTheSameDayAsStartAppDay = bStartAlsoInTheSameDayAsStartAppDay;
      return 0;
    }


    //----------------------------------------
    public getServiceConstraintList(): Array<amGeneralServiceConstraint.am_general.AE_ServiceConstraint>
    {
      return this._aServiceConstraintList;
    }
    //----------------------------------------
    public setServiceConstraintList(aServiceConstraintList: Array<amGeneralServiceConstraint.am_general.AE_ServiceConstraint>) : number
    {
      this._aServiceConstraintList = aServiceConstraintList;
      return 0;
    }

    //------------------------------------------
    public addServiceConstraint(newServiceConstraint : amGeneralServiceConstraint.am_general.AE_ServiceConstraint): number
    {
      if (newServiceConstraint)
        return 1;

      if (this._aServiceConstraintList == null)
        this._aServiceConstraintList  = new Array<amGeneralServiceConstraint.am_general.AE_ServiceConstraint>();

      this._aServiceConstraintList.push(newServiceConstraint);
      return 0;
    }
  
    //-----------------------------------------------------------
    public copyFromJson(jsonScheduleInfo : any) : number
    {
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
      var crtServiceActionParameter : amGeneralParameter.am_general.AE_Parameter = null;
      for (var k = 0; k < jsonScheduleInfo.service_action_parameters.length; k++) 
      {
        crtServiceActionParameter = this._aSrvLocator._iEntityCreation.createDefaultParameter(null);
        crtServiceActionParameter.injectDependencies( this._aSrvContainer, this._aSrvLocator, this._aSrvLog, null); //error);
        crtServiceActionParameter.copyFromJson(jsonScheduleInfo.service_action_parameters[k]);
        this.getServiceActionParametersList().push(crtServiceActionParameter);
      }

      //---------- set service constraints
      var crtServiceConstraint : amGeneralServiceConstraint.am_general.AE_ServiceConstraint = null;
      for (var j = 0; j < jsonScheduleInfo.service_constraints.length; j++) 
      {
        crtServiceConstraint = this._aSrvLocator._iEntityCreation.createDefaultServiceConstraint(null);
        crtServiceConstraint.injectDependencies( this._aSrvContainer, this._aSrvLocator, this._aSrvLog, null); //error);
        crtServiceConstraint.copyFromJson(jsonScheduleInfo.service_constraints[j]);
        this.getServiceConstraintList().push(crtServiceConstraint);
      }

      return 0;
    }


  }
} 


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
