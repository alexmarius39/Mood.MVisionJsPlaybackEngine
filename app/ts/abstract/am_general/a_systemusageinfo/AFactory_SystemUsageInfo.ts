import amEntity  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralEntityFactory = require("../../../../../app/ts/abstract/am_general/a_entity/AFactory_Entity");

export module am_general
{
  export interface AFactory_SystemUsageInfo  extends amGeneralEntityFactory.am_general.AFactory_Entity
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity;
  }
}  


