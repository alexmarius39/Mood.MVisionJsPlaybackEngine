import amEntity                   = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amError                    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amFactoryScreenshotOptions = require("../../../../../app/ts/abstract/am_general/ae_screenshotoptions/AEFactory_ScreenshotOptions");

import rmScreenshotOptions  = require("./RE_ScreenshotOptions");
import rmEntityFactory      = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");

export module rm_general
{
  export class REFactory_ScreenshotOptions  extends    rmEntityFactory.rm_general.RFactory_Entity
                                            implements amFactoryScreenshotOptions.am_general.AEFactory_ScreenshotOptions
  {
    createEntity(entityName : string, error: amError.am_general.A_Error): amEntity.am_general.A_Entity
    {
      return new rmScreenshotOptions.rm_general.RE_ScreenshotOptions();
    }
  }
} 

