import amDownloadConfiguration  = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AE_HtmlTemplateDownloadConfiguration");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_coreservices
{
  export class RE_HtmlTemplateDownloadConfiguration extends rmGeneralEntity.rm_general.R_Entity
                                                        implements amDownloadConfiguration.am_coreservices.AE_HtmlTemplateDownloadConfiguration
  {  
    //----------- constructor 
    constructor()  
    {  
      super();
    }

  }
} 