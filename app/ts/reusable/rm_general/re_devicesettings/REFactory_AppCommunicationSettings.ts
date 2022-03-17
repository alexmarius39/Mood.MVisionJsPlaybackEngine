import amEntity                   = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amError                    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amFactoryAppCommunicationSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AEFactory_AppCommunicationSettings");

import rmAppCommunicationSettings = require("./RE_AppCommunicationSettings");
import rmEntityFactory            = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_AppCommunicationSettings extends rmEntityFactory.rm_general.RFactory_Entity
                                                  implements amFactoryAppCommunicationSettings.am_general.AEFactory_AppCommunicationSettings
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmAppCommunicationSettings.rm_general.RE_AppCommunicationSettings();
    }
  }
} 

