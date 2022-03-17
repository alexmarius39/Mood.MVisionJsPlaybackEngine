import amEntity               = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amError                = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amFactoryLanguageSettings = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AEFactory_LanguageSettings");

import rmLanguageSettings  = require("./RE_LanguageSettings");
import rmEntityFactory  = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_LanguageSettings  extends    rmEntityFactory.rm_general.RFactory_Entity
                                        implements amFactoryLanguageSettings.am_general.AEFactory_LanguageSettings
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmLanguageSettings.rm_general.RE_LanguageSettings();
    }
  }
} 

