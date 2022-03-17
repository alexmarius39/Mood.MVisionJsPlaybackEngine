import amICronServiceConfig = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AI_CronServiceConfig");

import amPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amCronConfig           = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AE_CronConfiguration");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RS_CronService");

import amMonitoring  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_monitoring/AS_Monitoring");
import amLiveCommands = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_livecommands/AS_LiveCommands");

//==================================================================                                                                                                          
export module rm_nonrenderingservices
{
  export class RI_CronServiceConfig implements amICronServiceConfig.am_nonrenderingservices.AI_CronServiceConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmNonRenderingServices.rm_nonrenderingservices.RS_CronService;

    //----------- constructor 
    constructor(owner: rmNonRenderingServices.rm_nonrenderingservices.RS_CronService)  
    {
      this._owner = owner;  
    }

    //-----------------------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    }
    //-----------------------------------------
    public getPlaybackGlobalConfig() : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._owner.getPlaybackGlobalConfig();
    }

    //-----------------------------------------
    public setCronConfig(aCronConfiguration: amCronConfig.am_nonrenderingservices.AE_CronConfiguration)
    {
      return this._owner.setCronConfig(aCronConfiguration);
    }
    //-----------------------------------------
    public getCronConfig() : amCronConfig.am_nonrenderingservices.AE_CronConfiguration
    {
      return this._owner.getCronConfig();
    }

    //-----------------------------------------
    public setActivityLogService( aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      return this._owner.setActivityLogService(aActivityLogService);
    }
    //--------------------------------------------
    public getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._owner.getActivityLogService();
    }

    //-----------------------------------------
    public setMonitoringService(monitoringService: amMonitoring.am_nonrenderingservices.AS_MonitoringService)
    {
      this._owner.setMonitoringService(monitoringService);
    }

    //-----------------------------------------
    public getMonitoringService() : amMonitoring.am_nonrenderingservices.AS_MonitoringService
    {
      return this._owner.getMonitoringService();
    }

  }
} 