import amTest2Configuration  = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice3/AE_Test3Configuration");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_Test3Configuration extends rmGeneralEntity.rm_general.R_Entity
                                    implements amTest2Configuration.am_renderingservices.AE_Test3Configuration
  {  
    //----------- constructor 
    constructor()  
    {  
      super();
    }

  }
} 