import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralScheduleInfo = require("../../../../../app/ts/abstract/am_general/ae_scheduleinfo/AE_ScheduleInfo");

export module am_nonrenderingservices
{
  export interface AE_CronConfiguration extends amGeneral.am_general.A_Entity
  {
    copyFromJson(aJsonCronConfiguration : any);

    getScheduleInfoList() : Array<amGeneralScheduleInfo.am_general.AE_ScheduleInfo>;
    setScheduleInfoList(aScheduleInfoList : Array<amGeneralScheduleInfo.am_general.AE_ScheduleInfo>);

    addScheduleInfo(aScheduleInfo : amGeneralScheduleInfo.am_general.AE_ScheduleInfo) : number;
  }

} 