
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryHttpRequest = require("../../../../../app/ts/abstract/am_general/a_httprequest/AFactory_HttpRequest");

import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
import rmGeneralHttpRequest   = require("../../../../../app/ts/reusable/rm_general/r_httpRequest/R_HttpRequest");

export module rm_general
{
  export class RFactory_HttpRequest extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                    implements amGeneralFactoryHttpRequest.am_general.AFactory_HttpRequest
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralHttpRequest.rm_general.R_HttpRequest();
    }
  }
} 


