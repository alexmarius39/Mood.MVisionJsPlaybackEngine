import amTest2Configuration  = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice2/AE_Test2Configuration");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_renderingservices
{
  export class RE_Test2Configuration extends rmGeneralEntity.rm_general.R_Entity
                                    implements amTest2Configuration.am_renderingservices.AE_Test2Configuration
  {  
    //----------- constructor 
    constructor()  
    {  
      super();
    }

  }
} 