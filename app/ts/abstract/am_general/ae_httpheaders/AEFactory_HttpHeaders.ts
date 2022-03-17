import amGeneral  = require("../a_entity/A_Entity");
import amGeneral2  = require("../a_error/A_Error");
import amGeneralEntityFactory = require("../a_entity/AFactory_Entity");

export module am_general
{
  export interface AEFactory_HttpHeaders  extends amGeneralEntityFactory.am_general.AFactory_Entity
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity;
  }
}  


