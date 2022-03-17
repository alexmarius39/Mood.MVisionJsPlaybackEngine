import amNonrenderingServicesIUpdateSoftwareMain = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_updatesoftware/I_UpdateSoftwareMain");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmNonrenderingServicesUpdateSoftware = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_updatesoftware/RS_UpdateSoftware");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class IImpl_UpdateSoftwareMain_R implements  amNonrenderingServicesIUpdateSoftwareMain.am_nonrenderingservices.I_UpdateSoftwareMain
  {
    _name: string;    

    //----------- owner
    _owner: rmNonrenderingServicesUpdateSoftware.rm_nonrenderingservices.RS_UpdateSoftware;

    //----------- constructor 
    constructor(owner: rmNonrenderingServicesUpdateSoftware.rm_nonrenderingservices.RS_UpdateSoftware)  
    {
      this._owner = owner;  
    }

    //====================================================
    public update(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
       return this._owner.update(error, context, callback);
    }
  }
} 