import amGeneral = require("../../am_general/i_interface/I_Interface");
import amGeneralError   = require("../../am_general/a_error/A_Error");
import amGeneralContext = require("../../am_general/a_context/A_Context");

import amGeneralMonitoringSettings = require("../../am_general/ae_monitoringsettings/AE_MonitoringSettings");
import amRenderParametersIdentification = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Identification");

export module am_nonrenderingservices
{
  export interface AI_MonitoringMain extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    init(error: amGeneralError.am_general.A_Error) : void;
    sendMonitoringReport(aMonitoringSettings: amGeneralMonitoringSettings.am_general.AE_MonitoringSettings, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void;
    startMonitoring(aMonitoringSettings: amGeneralMonitoringSettings.am_general.AE_MonitoringSettings, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void;
    receivedLastPlayedItem(paramIdentifier: amRenderParametersIdentification.am_renderingservices.AE_RenderParams_Identification): void
  }
} 