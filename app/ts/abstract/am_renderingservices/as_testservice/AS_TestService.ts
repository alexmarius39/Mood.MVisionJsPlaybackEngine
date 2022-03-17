import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amITestServiceConfig = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AI_TestServiceConfig");
import amITestServiceMain   = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AI_TestServiceMain");

export module am_renderingservices
{
  export interface AS_TestService extends amGeneral.am_general.A_Service 
  {
    _iTestServiceConfig          : amITestServiceConfig.am_renderingservices.AI_TestServiceConfig ;
    _iTestServiceMain            : amITestServiceMain.am_renderingservices.AI_TestServiceMain ;
  }
} 