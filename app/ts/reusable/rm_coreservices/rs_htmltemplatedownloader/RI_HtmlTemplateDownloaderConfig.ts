
import amIHtmlTemplateDownloaderConfig = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AI_HtmlTemplateDownloaderConfig");

import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralFileInfo             = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import rmCoreServicesHtmlTemplateDownloader = require("../../../../../app/ts/reusable/rm_coreservices/rs_htmltemplatedownloader/RS_HtmlTemplateDownloader");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
                                                     
                                                     

export module rm_coreservices
{
  export class RI_HtmlTemplateDownloaderConfig implements  amIHtmlTemplateDownloaderConfig.am_coreservices.AI_HtmlTemplateDownloaderConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesHtmlTemplateDownloader.rm_coreservices.RS_HtmlTemplateDownloader;

    //----------- constructor 
    constructor(owner: rmCoreServicesHtmlTemplateDownloader.rm_coreservices.RS_HtmlTemplateDownloader)  
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