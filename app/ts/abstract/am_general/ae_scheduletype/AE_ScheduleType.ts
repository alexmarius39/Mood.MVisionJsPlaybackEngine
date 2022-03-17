import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralParameter = require("../../../../../app/ts/abstract/am_general/ae_parameter/AE_Parameter");

export module am_general
{
  export enum AE_ScheduleType 
  {
    ScheduleType_None            = 1, 
    ScheduleType_AtTimeInterval  = 2, 
    ScheduleType_Daily           = 3, 
    ScheduleType_Weekly          = 4, 
    ScheduleType_Monthly         = 6,
    ScheduleType_Once            = 7                  
  }
}

 