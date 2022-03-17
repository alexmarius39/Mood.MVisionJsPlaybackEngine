
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amTestConfiguration = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AEFactory_TestConfiguration");

import rmTestConfiguration = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice/RE_TestConfiguration");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_nonrenderingservices
{
  export class REFactory_TestConfiguration   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                             implements amTestConfiguration.am_renderingservices.AEFactory_TestConfiguration
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmTestConfiguration.rm_renderingservices.RE_TestConfiguration();
    }
  }
} 


