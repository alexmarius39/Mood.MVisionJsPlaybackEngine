import amGeneral  = require("../../../abstract/am_general/a_entity/A_Entity");
import amGeneralError  = require("../../../abstract/am_general/a_error/A_Error");
import amGeneralFactoryContentDispositionHeader = require("../../../../../app/ts/abstract/am_general/a_httprequest/AFactory_ContentDispositionHeader");

import rmGeneralEntityFactory             = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
import rmGeneralContentDispositionHeader  = require("../../../../../app/ts/reusable/rm_general/r_httpRequest/R_ContentDispositionHeader");

export module rm_general
{
  export class RFactory_ContentDispositionHeader extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                    implements amGeneralFactoryContentDispositionHeader.am_general.AFactory_ContentDispositionHeader                                  
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralContentDispositionHeader.rm_general.R_ContentDispositionHeader();
    }
  }
} 

