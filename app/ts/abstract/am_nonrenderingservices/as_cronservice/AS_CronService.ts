import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amICronServiceConfig = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AI_CronServiceConfig");
import amICronServiceMain   = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AI_CronServiceMain");

export module am_nonrenderingservices
{
  export interface AS_CronService extends amGeneral.am_general.A_Service 
  {
    _iCronServiceConfig          : amICronServiceConfig.am_nonrenderingservices.AI_CronServiceConfig ;
    _iCronServiceMain            : amICronServiceMain.am_nonrenderingservices.AI_CronServiceMain ;
  }
} 