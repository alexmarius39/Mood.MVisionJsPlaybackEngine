import amEntity               = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amError                = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amFactoryStartupSettings = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AEFactory_StartupSettings");

import rmStartupSettings = require("./RE_StartupSettings");
import rmEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_StartupSettings  extends    rmEntityFactory.rm_general.RFactory_Entity
                                        implements amFactoryStartupSettings.am_general.AEFactory_StartupSettings
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmStartupSettings.rm_general.RE_StartupSettings();
    }
  }
} 

