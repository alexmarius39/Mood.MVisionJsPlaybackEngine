import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amIPlaylistDownloaderConfig = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/I_PlaylistDownloaderConfig");
import amIPlaylistDownloaderBuilderMoodV5 = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/I_PlaylistDownloaderBuilder_Mood_v5");
import amIPlaylistDownloaderBuilderCustomV1 = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/I_PlaylistDownloaderBuilder_Custom_v1");
import amIPlaylistDownloaderMain   = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/I_PlaylistDownloaderMain");

export module am_coreservices
{
  export interface AS_PlaylistDownloader extends amGeneral.am_general.A_Service 
  {
    _iPlaylistDownloaderConfig          : amIPlaylistDownloaderConfig.am_coreservices.I_PlaylistDownloaderConfig ;
    _iPlaylistDownloaderBuilderMoodV5   : amIPlaylistDownloaderBuilderMoodV5.am_coreservices.I_PlaylistDownloaderBuilder_Mood_v5 ;
    _iPlaylistDownloaderBuilderCustomV1 : amIPlaylistDownloaderBuilderCustomV1.am_coreservices.I_PlaylistDownloaderBuilder_Custom_v1 ;
    _iPlaylistDownloaderMain            : amIPlaylistDownloaderMain.am_coreservices.I_PlaylistDownloaderMain ;
  }
} 