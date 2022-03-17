import amEntity               = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amError                = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amFactoryTimeSettings = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AEFactory_TimeSettings");

import rmTimeSettings  = require("./RE_TimeSettings");
import rmEntityFactory  = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_TimeSettings  extends    rmEntityFactory.rm_general.RFactory_Entity
                                        implements amFactoryTimeSettings.am_general.AEFactory_TimeSettings
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmTimeSettings.rm_general.RE_TimeSettings();
    }
  }
} 

