import amNonRenderingServices = require("../a_nonrenderingservice/A_NonRenderingService");

import amMonitoringMain = require("./AI_MonitoringMain");
import amMonitoringConfig = require("./AI_MonitoringConfig");

export module am_nonrenderingservices
{
  export interface AS_MonitoringService extends amNonRenderingServices.am_nonrenderingservices.A_NonRenderingService
  {
    _iMonitoringMain : amMonitoringMain.am_nonrenderingservices.AI_MonitoringMain ;
    _iMonitoringConfig : amMonitoringConfig.am_nonrenderingservices.AI_MonitoringConfig ;
  }
} 