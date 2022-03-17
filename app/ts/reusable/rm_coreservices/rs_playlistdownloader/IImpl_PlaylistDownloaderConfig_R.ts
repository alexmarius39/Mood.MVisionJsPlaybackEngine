
import amIPlaylistDownloaderConfig = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/I_PlaylistDownloaderConfig");

import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralFileInfo             = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import rmCoreServicesPlaylistDownloader = require("../../../../../app/ts/reusable/rm_coreservices/rs_playlistdownloader/RS_PlaylistDownloader");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
                                                     
                                                     

export module rm_coreservices
{
  export class IImpl_PlaylistDownloaderConfig_R implements  amIPlaylistDownloaderConfig.am_coreservices.I_PlaylistDownloaderConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesPlaylistDownloader.rm_coreservices.RS_PlaylistDownloader;

    //----------- constructor 
    constructor(owner: rmCoreServicesPlaylistDownloader.rm_coreservices.RS_PlaylistDownloader)  
    {
      this._owner = owner;  
    }

    //--------------------------------------
    // set / get playlist controller config
    //---------------------------------------

    //----------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      return this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    }

    //-----------------------------
    public getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._owner.getPlaybackGlobalConfig();
    }

    public setActivityLogService( aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      return this._owner.setActivityLogService(aActivityLogService);
    }

    //-----------------------------
    public getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._owner.getActivityLogService();
    }
  }
} 