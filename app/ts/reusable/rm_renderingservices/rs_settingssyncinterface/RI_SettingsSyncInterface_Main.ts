import amSettingSyncServiceInterfaceMain = require("../../../abstract/am_renderingservices/as_settingssyncinterface/I_SettingsSyncInterfaceMain");

import amError    = require("../../../abstract/am_general/a_error/A_Error");
import amContext  = require("../../../abstract/am_general/a_context/A_Context");

import rmSettingSyncInterfaceService = require("./RS_SettingsSyncInterface");
                                                     
export module rm_renderingservices
{
  export class RI_SettingsSyncInterfaceMain implements amSettingSyncServiceInterfaceMain.am_renderingservices.AI_SettingsSyncInterfaceMain
  {
    _name: string;    

    //----------- owner
    _owner: rmSettingSyncInterfaceService.rm_renderingservices.RS_SettingsSyncInterfaceService;

    //----------- constructor 
    constructor(owner: rmSettingSyncInterfaceService.rm_renderingservices.RS_SettingsSyncInterfaceService)  
    {
      this._owner = owner;  
    }

    public start(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      this._owner.start(error, context, callback);
    }

    public stop(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      this._owner.stop(error, context, callback);
    }

  }
} 