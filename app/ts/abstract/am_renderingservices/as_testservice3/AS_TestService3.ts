import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amITestService3Config = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice3/AI_TestService3Config");
import amITestService3Main   = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice3/AI_TestService3Main");

export module am_renderingservices
{
  export interface AS_TestService3 extends amGeneral.am_general.A_Service 
  {
    _iTestService3Config          : amITestService3Config.am_renderingservices.AI_TestService3Config ;
    _iTestService3Main            : amITestService3Main.am_renderingservices.AI_TestService3Main ;
  }
} 