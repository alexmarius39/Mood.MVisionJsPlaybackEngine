
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFactoryPlatformActivityLogServiceSetting  = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AFactory_ActivityLogServiceSettings");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import rmGeneralActivityLogServiceSettings    = require("./RE_ActivityLogServiceSettings");
import rmGeneralEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class RFactory_ActivityLogServiceSettings   extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                     implements amGeneralFactoryPlatformActivityLogServiceSetting.am_general.AFactory_ActivityLogServiceSettings
  {
    createEntity(entityName : string, error: amGeneralError.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmGeneralActivityLogServiceSettings.rm_general.R_ActivityLogServiceSettings();
    }
  }
} 