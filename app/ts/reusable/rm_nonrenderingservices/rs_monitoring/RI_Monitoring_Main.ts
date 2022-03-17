import amNonRenderingServicesMonitorMain = require("../../../abstract/am_nonrenderingservices/as_monitoring/AI_MonitoringMain");
import amGeneralError   = require("../../../abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../abstract/am_general/a_context/A_Context");
import amGeneralMonitoringSettings = require("../../../abstract/am_general/ae_monitoringsettings/AE_MonitoringSettings");
import amRenderParametersIdentification = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Identification");

import rmMonitoringService = require("./RS_Monitoring");

export module rm_nonrenderingservices
{
  export class RI_MonitoringMain implements amNonRenderingServicesMonitorMain.am_nonrenderingservices.AI_MonitoringMain
  {
    _name: string;    

    //----------- owner
    _owner: rmMonitoringService.rm_nonrenderingservices.RS_MonitoringService;

    //----------- constructor 
    constructor(owner: rmMonitoringService.rm_nonrenderingservices.RS_MonitoringService)  
    {
      this._owner = owner;  
    }

    public init(error : amGeneralError.am_general.A_Error) : void
    {
      this._owner.init(error);
    }

    public sendMonitoringReport(aMonitoringSettings: amGeneralMonitoringSettings.am_general.AE_MonitoringSettings, 
          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._owner.sendMonitoringReport(aMonitoringSettings, error, context, callback);
    }

    public startMonitoring(aMonitoringSettings: amGeneralMonitoringSettings.am_general.AE_MonitoringSettings, 
          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._owner.startMonitoring(aMonitoringSettings, error, context, callback);
    }

    public receivedLastPlayedItem(paramIdentifier: amRenderParametersIdentification.am_renderingservices.AE_RenderParams_Identification): void
    {
      this._owner.receivedLastPlayedItem(paramIdentifier);
    }
  }
} 