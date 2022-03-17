import amEntity                     = require("../../../abstract/am_general/a_entity/A_Entity");
import amError                      = require("../../../abstract/am_general/a_error/A_Error");
import amFactoryMonitoringSettings  = require("../../../../../app/ts/abstract/am_general/ae_monitoringsettings/AEFactory_MonitoringSettings");


import rmMonitoringSettings = require("./RE_MonitoringSettings");
import rmEntityFactory      = require("../r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_MonitoringSettings  extends    rmEntityFactory.rm_general.RFactory_Entity
                                            implements amFactoryMonitoringSettings.am_general.AEFactory_MonitoringSettings
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmMonitoringSettings.rm_general.RE_MonitoringSettings;
    }
  }
} 

