
import amGeneral  = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral2  = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_error/AFactory_Error");

import rmFileSettingsUpdateConfiguration = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_filesettingsupdate/RE_FileSettingsUpdateConfiguration");
import rmGeneralEntityFactory  = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");


export module rm_nonrenderingservices
{
  export class REFactory_FileSettingsUpdateConfiguration extends    rmGeneralEntityFactory.rm_general.RFactory_Entity
                                                        implements amGeneral3.am_general.AFactory_Error
  {
    createEntity(entityName : string, error: amGeneral2.am_general.A_Error): amGeneral.am_general.A_Entity
    {
      return new rmFileSettingsUpdateConfiguration.rm_nonrenderingservices.RE_FileSettingsUpdateConfiguration();
    }
  }
} 


