
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amTest3Factory = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice3/AEFactory_Test3Configuration");

import rmTest3Configuration = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice3/RE_Test3Configuration");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_nonrenderingservices
{
  export class REFactory_Test3Configuration   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                              implements amTest3Factory.am_renderingservices.AEFactory_Test3Configuration
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmTest3Configuration.rm_renderingservices.RE_Test3Configuration();
    }
  }
} 


