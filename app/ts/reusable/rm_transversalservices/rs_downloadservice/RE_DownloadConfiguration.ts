import amDownloadConfiguration  = require("../../../../../app/ts/abstract/am_transversalservices/as_downloadservice/AE_DownloadConfiguration");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_transversalservices
{
  export class RE_DownloadConfiguration extends rmGeneralEntity.rm_general.R_Entity
                                        implements amDownloadConfiguration.am_transversalservices.AE_DownloadConfiguration
  {  
    //----------- constructor 
    constructor()  
    {  
      super();
    }

  }
} 