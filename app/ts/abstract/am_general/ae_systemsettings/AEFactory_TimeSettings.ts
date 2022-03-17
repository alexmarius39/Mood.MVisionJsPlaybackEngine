import amEntity = require("../a_entity/A_Entity");
import amError  = require("../a_error/A_Error");
import amFactoryEntity = require("../a_entity/AFactory_Entity");

export module am_general
{
  export interface AEFactory_TimeSettings extends amFactoryEntity.am_general.AFactory_Entity
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity;
  }
}  


