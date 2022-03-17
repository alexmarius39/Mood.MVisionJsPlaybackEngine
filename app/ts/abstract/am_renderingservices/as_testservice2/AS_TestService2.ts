import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amITestService2Config = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice2/AI_TestService2Config");
import amITestService2Main   = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice2/AI_TestService2Main");

export module am_renderingservices
{
  export interface AS_TestService2 extends amGeneral.am_general.A_Service 
  {
    _iTestService2Config          : amITestService2Config.am_renderingservices.AI_TestService2Config ;
    _iTestService2Main            : amITestService2Main.am_renderingservices.AI_TestService2Main ;
  }
} 