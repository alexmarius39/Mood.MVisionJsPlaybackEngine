
import amEntity  = require("../../../abstract/am_general/a_entity/A_Entity");
import amFactoryServerCommand = require("../../../abstract/am_general/ae_livecommands/AEFactory_ServerCommand");

import amError = require("../../../abstract/am_general/a_error/A_Error");

import rmServerCommand = require("./RE_ServerCommand");
import rmEntityFactory = require("../r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_ServerCommand extends rmEntityFactory.rm_general.RFactory_Entity
                                        implements amFactoryServerCommand.am_general.AEFactory_ServerCommand
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmServerCommand.rm_general.RE_ServerCommand;
    }
  }
}