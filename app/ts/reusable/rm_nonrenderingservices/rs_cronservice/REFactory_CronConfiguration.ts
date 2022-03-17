
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amCronConfigurationFactory = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AEFactory_CronConfiguration");

import rmCronConfiguration = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RE_CronConfiguration");

import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_nonrenderingservices
{
  export class REFactory_CronConfiguration   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                             implements amCronConfigurationFactory.am_nonrenderingservices.AEFactory_CronConfiguration
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmCronConfiguration.rm_nonrenderingservices.RE_CronConfiguration();
    }
  }
} 


