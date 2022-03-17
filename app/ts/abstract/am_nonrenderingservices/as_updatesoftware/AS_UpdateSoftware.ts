import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amIUpdateSoftwareConfig = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_updatesoftware/I_UpdateSoftwareConfig");
import amIUpdateSoftwareMain   = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_updatesoftware/I_UpdateSoftwareMain");

export module am_nonrenderingservices
{
  export interface AS_UpdateSoftware extends amGeneral.am_general.A_Service 
  {
    _iUpdateSoftwareConfig          : amIUpdateSoftwareConfig.am_nonrenderingservices.I_UpdateSoftwareConfig ;
    _iUpdateSoftwareMain            : amIUpdateSoftwareMain.am_nonrenderingservices.I_UpdateSoftwareMain ;
  }
} 