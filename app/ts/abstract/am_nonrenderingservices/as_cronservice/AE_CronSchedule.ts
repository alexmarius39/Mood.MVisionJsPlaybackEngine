import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amScheduleInfo = require("../../../../../app/ts/abstract/am_general/ae_scheduleinfo/AE_ScheduleInfo");

export module am_nonrenderingservices
{
  export interface AE_CronSchedule extends amGeneral.am_general.A_Entity
  {

    getScheduleInfo() : amScheduleInfo.am_general.AE_ScheduleInfo;
    setScheduleInfo(aScheduleInfo : amScheduleInfo.am_general.AE_ScheduleInfo) : number;

    getTimerId(): number;
    setTimerId(aTimerId: number) : number;

    getCrtService(): amService.am_general.A_Service;
    setCrtService(aCrtService: amService.am_general.A_Service) : number;

    getPrevService(): amService.am_general.A_Service;
    setPrevService(aPrevService: amService.am_general.A_Service) : number;

  }

} 