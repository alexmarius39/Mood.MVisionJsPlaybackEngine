import amEntity               = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amError                = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amFactorySystemSettings = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AEFactory_SystemSettings");

import rmSystemSettings  = require("./RE_SystemSettings");
import rmEntityFactory  = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_SystemSettings  extends    rmEntityFactory.rm_general.RFactory_Entity
                                        implements amFactorySystemSettings.am_general.AEFactory_SystemSettings
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmSystemSettings.rm_general.RE_SystemSettings();
    }
  }
} 

