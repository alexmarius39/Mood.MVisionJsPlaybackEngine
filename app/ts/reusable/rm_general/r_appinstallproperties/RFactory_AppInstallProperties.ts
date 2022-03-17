
import amGeneralEntity    = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
//import amGeneralAppServerProperties  = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");

import amGeneralFactoryAppInstallProperties = require("../../../../../app/ts/abstract/am_general/a_appinstallproperties/AFactory_AppInstallProperties");

import rmGeneralAppInstallProperties        = require("../../../../../app/ts/reusable/rm_general/r_appinstallproperties/R_AppInstallProperties");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_AppInstallProperties extends  rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                 implements amGeneralFactoryAppInstallProperties.am_general.AFactory_AppInstallProperties
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneralEntity.am_general.A_Entity
    {
      return new rmGeneralAppInstallProperties.rm_general.R_AppInstallProperties();
    }
  }
} 


