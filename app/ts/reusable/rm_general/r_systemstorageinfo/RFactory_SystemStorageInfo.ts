
import amEntity  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amFactorySystemStorageInfo  = require("../../../../../app/ts/abstract/am_general/a_systemstorageinfo/AFactory_SystemStorageInfo");

import amError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmSystemStorageInfo    = require("../../../../../app/ts/reusable/rm_general/r_systemstorageinfo/R_SystemStorageInfo");
import rmEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_SystemUsageInfo extends rmEntityFactory.rm_general.RFactory_Entity
                                        implements amFactorySystemStorageInfo.am_general.AFactory_SystemStorageInfo
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmSystemStorageInfo.rm_general.R_SystemStorageInfo;
    }
  }
} 


