import amIPlaylistDownloaderCustomV1 = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/I_PlaylistDownloaderBuilder_Custom_v1");

import rmCoreServicesPlaylistDownloader = require("../../../../../app/ts/reusable/rm_coreservices/rs_playlistdownloader/RS_PlaylistDownloader");
                                                     
                                                     

export module rm_coreservices
{
  export class IImpl_PlaylistDownloaderBuilder_Custom_v1 implements amIPlaylistDownloaderCustomV1.am_coreservices.I_PlaylistDownloaderBuilder_Custom_v1
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesPlaylistDownloader.rm_coreservices.RS_PlaylistDownloader;

    //----------- constructor 
    constructor(owner: rmCoreServicesPlaylistDownloader.rm_coreservices.RS_PlaylistDownloader)  
    {
      this._owner = owner;  
    }
  }
} 