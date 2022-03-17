import amCoreServicesIPlaylistDownloaderMain = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/I_PlaylistDownloaderMain");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmCoreServicesPlaylistDownloader = require("../../../../../app/ts/reusable/rm_coreservices/rs_playlistdownloader/RS_PlaylistDownloader");
                                                     
                                                     

export module rm_coreservices
{
  export class IImpl_PlaylistDownloaderMain_R implements  amCoreServicesIPlaylistDownloaderMain.am_coreservices.I_PlaylistDownloaderMain
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesPlaylistDownloader.rm_coreservices.RS_PlaylistDownloader;

    //----------- constructor 
    constructor(owner: rmCoreServicesPlaylistDownloader.rm_coreservices.RS_PlaylistDownloader)  
    {
      this._owner = owner;  
    }

    //====================================================
    public download(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
       return this._owner.download(error, context, callback);
    }

    //====================================================
    public updatePlaylist(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
       return this._owner.updatePlaylist(error, context, callback);
    }
  }
} 