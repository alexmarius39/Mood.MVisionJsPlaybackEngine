
import amEntity  = require("../../../abstract/am_general/a_entity/A_Entity");
import amFactoryLiveCommandsSettings = require("../../../abstract/am_general/ae_livecommands/AEFactory_LiveCommandsSettings");

import amError = require("../../../abstract/am_general/a_error/A_Error");

import rmLiveCommandsSettings = require("./RE_LiveCommandsSettings");
import rmEntityFactory = require("../r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_LiveCommandsSettings extends rmEntityFactory.rm_general.RFactory_Entity
                                        implements amFactoryLiveCommandsSettings.am_general.AEFactory_LiveCommandsSettings
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmLiveCommandsSettings.rm_general.RE_LiveCommandsSettings;
    }
  }
}