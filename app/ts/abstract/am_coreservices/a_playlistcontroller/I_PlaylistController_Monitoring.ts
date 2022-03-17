import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralService              = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralScreenProperties     = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amPlaylist      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist");
import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
import amRenderParametersIdentification = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Identification");
import amMonitoring  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_monitoring/AS_Monitoring");


export module am_coreservices
{
  export interface I_PlaylistController_Monitoring extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    setMonitoringService(monitoringService: amMonitoring.am_nonrenderingservices.AS_MonitoringService);
    getMonitoringService() : amMonitoring.am_nonrenderingservices.AS_MonitoringService;
    
    sendLastPlayedItem(paramIdentifier: amRenderParametersIdentification.am_renderingservices.AE_RenderParams_Identification): void;
  }
  
} 