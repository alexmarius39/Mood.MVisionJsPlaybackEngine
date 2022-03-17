
import amMonitoringServiceConfig = require("../../../abstract/am_nonrenderingservices/as_monitoring/AI_MonitoringConfig");
import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
import amMonitoringSettings = require("../../../abstract/am_general/ae_monitoringsettings/AE_MonitoringSettings");
import amScreenshot = require("../../../../../app/ts/abstract/am_renderingservices/as_screenshot/AS_Screenshot");

import rmCoreServicesMonitoring = require("./RS_Monitoring");

export module rm_nonrenderingservices
{
  export class RI_MonitoringConfig implements amMonitoringServiceConfig.am_nonrenderingservices.AI_MonitoringConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesMonitoring.rm_nonrenderingservices.RS_MonitoringService;

    //----------- constructor 
    constructor(owner: rmCoreServicesMonitoring.rm_nonrenderingservices.RS_MonitoringService)  
    {
      this._owner = owner;  
    }

    //--------------------------------------
    // set / get playlist controller config
    //---------------------------------------

    //-----------------------------
    public getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._owner.getPlaybackGlobalConfig();
    }

    //----------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    }

    //-----------------------------
    public getDefaultMonitoringSettings() : amMonitoringSettings.am_general.AE_MonitoringSettings
    {
      return this._owner.getDefaultMonitoringSettings();
    }
    
    //-----------------------------
    public setDefaultMonitoringSettings(aMonitoringSettings: amMonitoringSettings.am_general.AE_MonitoringSettings)
    {
      this._owner.setDefaultMonitoringSettings(aMonitoringSettings);
    }

    //-----------------------------
    public getActivityLogService(): amActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._owner.getActivityLogService();
    }
    
    public setActivityLogService( aActivityLogService: amActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      this._owner.setActivityLogService(aActivityLogService);
    }

    public getScreeshotService(): amScreenshot.am_renderingservices.AS_ScreenshotService
    {
      return this._owner.getScreeshotService();
    }
    public setScreenshotService(aScreenshot: amScreenshot.am_renderingservices.AS_ScreenshotService)
    {
      this._owner.setScreenshotService(aScreenshot);
    }

  }
} 