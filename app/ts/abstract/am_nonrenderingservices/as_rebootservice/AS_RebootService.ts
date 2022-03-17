import amNonRenderingServices = require("../../../../../app/ts/abstract/am_nonrenderingservices/a_nonrenderingservice/A_NonRenderingService");

import amNonRenderingServices2 = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_rebootservice/AI_RebootServiceRun");
import amNonRenderingServices3 = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_rebootservice/AI_RebootServiceConfig");

export module am_nonrenderingservices
{
  export interface AS_RebootService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
     _iRebootServiceRun    : amNonRenderingServices2.am_nonrenderingservices.AI_RebootServiceRun ;
     _iRebootServiceConfig : amNonRenderingServices3.am_nonrenderingservices.AI_RebootServiceConfig;
  }
} 