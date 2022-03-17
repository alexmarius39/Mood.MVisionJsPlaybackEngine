
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneral3 = require("../../../../../app/ts/abstract/am_general/ae_httpheader/AEFactory_HttpHeader");

import rmGeneralHttpHeader        = require("../../../../../app/ts/reusable/rm_general/re_httpheader/RE_HttpHeader");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_HttpHeader   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                                            implements amGeneral3.am_general.AEFactory_HttpHeader
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
        return new rmGeneralHttpHeader.rm_general.RE_HttpHeader();
    }
  }
} 


