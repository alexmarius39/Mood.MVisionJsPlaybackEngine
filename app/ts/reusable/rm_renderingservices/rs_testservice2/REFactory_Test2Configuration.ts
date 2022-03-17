
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amTest2Configuration = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice2/AEFactory_Test2Configuration");

import rmTest2Configuration = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice2/RE_Test2Configuration");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_nonrenderingservices
{
  export class REFactory_Test2Configuration   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                              implements amTest2Configuration.am_renderingservices.AEFactory_Test2Configuration
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmTest2Configuration.rm_renderingservices.RE_Test2Configuration();
    }
  }
} 


