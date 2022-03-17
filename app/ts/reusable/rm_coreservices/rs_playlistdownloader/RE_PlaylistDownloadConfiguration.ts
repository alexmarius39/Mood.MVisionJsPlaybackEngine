import amDownloadConfiguration  = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/AE_PlaylistDownloadConfiguration");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_coreservices
{
  export class RE_PlaylistDownloadConfiguration extends rmGeneralEntity.rm_general.R_Entity
                                                        implements amDownloadConfiguration.am_coreservices.AE_PlaylistDownloadConfiguration
  {  
    //----------- constructor 
    constructor()  
    {  
      super();
    }

  }
} 