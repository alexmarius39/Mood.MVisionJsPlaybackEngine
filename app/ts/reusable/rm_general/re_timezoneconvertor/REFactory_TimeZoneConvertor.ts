import amEntity                   = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amError                    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amFactoryTimeZoneConvertor = require("../../../../../app/ts/abstract/am_general/ae_timezoneconvertor/AEFactory_TimeZoneConvertor");

import rmTimeZoneConvertor  = require("./RE_TimeZoneConvertor");
import rmEntityFactory      = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_VideoSettings  extends    rmEntityFactory.rm_general.RFactory_Entity
                                        implements amFactoryTimeZoneConvertor.am_general.AEFactory_TimeZoneConvertor
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmTimeZoneConvertor.rm_general.RE_TimeZoneConvertor();
    }
  }
} 

