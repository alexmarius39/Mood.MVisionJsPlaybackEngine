
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneral3 = require("../../../../../app/ts/abstract/am_general/ae_scheduleinfo/AEFactory_ScheduleInfo");

import rmGeneralError         = require("../../../../../app/ts/reusable/rm_general/r_error/R_Error");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_ScheduleInfo   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                        implements amGeneral3.am_general.AEFactory_ScheduleInfo
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralError.rm_general.R_Error();
    }
  }
} 


