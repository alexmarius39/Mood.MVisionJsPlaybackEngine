import amTestConfiguration  = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AE_TestConfiguration");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_TestConfiguration extends rmGeneralEntity.rm_general.R_Entity
                                    implements amTestConfiguration.am_renderingservices.AE_TestConfiguration
  {  
    //----------- constructor 
    constructor()  
    {  
      super();
    }

  }
} 