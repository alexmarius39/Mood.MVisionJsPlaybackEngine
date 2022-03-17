import amNonrenderingServicesAIFileSettingsUpdateMain = require("../../../abstract/am_nonrenderingservices/as_filesettingsupdate/AI_FileSettingsUpdateMain");

import amGeneralError   = require("../../../abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../abstract/am_general/a_context/A_Context");

import rmNonrenderingServicesUpdateSoftware = require("../rs_filesettingsupdate/RS_FileSettingsUpdate");
                                                     
                                                     

export module rm_nonrenderingservices
{
  export class RI_FileSettingsUpdateMain_R implements  amNonrenderingServicesAIFileSettingsUpdateMain.am_nonrenderingservices.AI_FileSettingsUpdateMain
  {
    _name: string;    

    //----------- owner
    _owner: rmNonrenderingServicesUpdateSoftware.rm_nonrenderingservices.RS_FileSettingsUpdate;

    //----------- constructor 
    constructor(owner: rmNonrenderingServicesUpdateSoftware.rm_nonrenderingservices.RS_FileSettingsUpdate)  
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