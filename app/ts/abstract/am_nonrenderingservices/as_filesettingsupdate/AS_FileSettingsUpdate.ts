import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amAIFileSettingsConfig = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_filesettingsupdate/AI_FileSettingsUpdateConfig");
import amAIFileSettingsMain   = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_filesettingsupdate/AI_FileSettingsUpdateMain");

export module am_nonrenderingservices
{
  export interface AS_FileSettingsUpdate extends amGeneral.am_general.A_Service 
  {
    _iFileSettingsUpdateConfig          : amAIFileSettingsConfig.am_nonrenderingservices.AI_FileSettingsUpdateConfig ;
    _iFileSettingsUpdateMain            : amAIFileSettingsMain.am_nonrenderingservices.AI_FileSettingsUpdateMain ;
  }
} 