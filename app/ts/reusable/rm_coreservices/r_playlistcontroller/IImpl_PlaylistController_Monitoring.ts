import amCoreServicesIPlaylistControllerMonitoring = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Monitoring");

import rmCoreServicesPlaylistController = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/R_PlaylistController");
                                                     
import amGeneralService              = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amRenderParametersIdentification = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Identification");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralScreenProperties     = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");

import amPlaylist      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist");
import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
//import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import amMonitoring  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_monitoring/AS_Monitoring");

export module rm_coreservices
{
  export class IImpl_PlaylistController_Monitoring implements  amCoreServicesIPlaylistControllerMonitoring.am_coreservices.I_PlaylistController_Monitoring
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController;

    _monitoringService: amMonitoring.am_nonrenderingservices.AS_MonitoringService;

    //----------- constructor 
    constructor(owner: rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController)  
    {
      this._owner = owner;  
      this._monitoringService = null;
    }

    //-----------------------------------------
    public setMonitoringService(aMonitoringService: amMonitoring.am_nonrenderingservices.AS_MonitoringService)
    {
      this._monitoringService = aMonitoringService;
    }

    //-----------------------------------------
    public getMonitoringService() : amMonitoring.am_nonrenderingservices.AS_MonitoringService
    {
      return this._monitoringService;
    }


    //---------------------------------------------
    public sendLastPlayedItem(paramIdentifier: amRenderParametersIdentification.am_renderingservices.AE_RenderParams_Identification): void
    {
      if (this._monitoringService != null)
      {
        this._monitoringService._iMonitoringMain.receivedLastPlayedItem(paramIdentifier);
      }
    }

  }
} 