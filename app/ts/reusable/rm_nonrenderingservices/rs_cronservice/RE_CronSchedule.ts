import amCronSchedule           = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AE_CronSchedule");

import amService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amScheduleInfo = require("../../../../../app/ts/abstract/am_general/ae_scheduleinfo/AE_ScheduleInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_nonrenderingservices
{
  export class RE_CronSchedule extends    rmGeneralEntity.rm_general.R_Entity
                               implements amCronSchedule.am_nonrenderingservices.AE_CronSchedule
  {  
    _iTimerId       : number;
    _aScheduleInfo  : amScheduleInfo.am_general.AE_ScheduleInfo;
    _aCrtService    : amService.am_general.A_Service;
    _aPrevService   : amService.am_general.A_Service;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._iTimerId       = 0;
      this._aScheduleInfo  = null;
      this._aCrtService    = null;
      this._aPrevService   = null;
    }

    //--------------------------------------------------
    public getScheduleInfo() : amScheduleInfo.am_general.AE_ScheduleInfo
    {
      return this._aScheduleInfo;
    }
    //--------------------------------------------------
    public setScheduleInfo(aScheduleInfo : amScheduleInfo.am_general.AE_ScheduleInfo)
    {
      this._aScheduleInfo = aScheduleInfo;
      return 0;
    }

    //--------------------------------------------------
    public getTimerId(): number
    {
      return this._iTimerId ;
    }
    //--------------------------------------------------
    public setTimerId(iTimerId: number) : number
    {
      this._iTimerId = iTimerId;
      return 0;
    }

    //--------------------------------------------------
    public getCrtService(): amService.am_general.A_Service
    {
      return this._aCrtService ;
    }
    //--------------------------------------------------
    public setCrtService(aCrtService: amService.am_general.A_Service) : number
    {
      this._aCrtService = aCrtService;
      return 0;
    }

    //--------------------------------------------------
    public getPrevService(): amService.am_general.A_Service
    {
      return this._aPrevService ;
    }
    //--------------------------------------------------
    public setPrevService(aPrevService: amService.am_general.A_Service) : number
    {
      this._aPrevService = aPrevService;
      return 0;
    }


  }
} 