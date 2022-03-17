import amEntity               = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amError                = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amFactoryVideoSettings = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AEFactory_VideoSettings");

import rmVideoSettings  = require("./RE_VideoSettings");
import rmEntityFactory  = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_VideoSettings  extends    rmEntityFactory.rm_general.RFactory_Entity
                                        implements amFactoryVideoSettings.am_general.AEFactory_VideoSettings
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmVideoSettings.rm_general.RE_VideoSettings();
    }
  }
} 

