import amSettingsSyncInterfaceConfig  = require("../../../abstract/am_renderingservices/as_settingssyncinterface/I_SettingsSyncInterfaceConfig");
import rmSettingsSyncInterface        = require("./RS_SettingsSyncInterface");

export module rm_renderingservices
{
  export class RI_SettingsSyncInterfaceConfig implements amSettingsSyncInterfaceConfig.am_renderingservices.AI_SettingsSyncInterfaceConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmSettingsSyncInterface.rm_renderingservices.RS_SettingsSyncInterfaceService;

    //----------- constructor 
    constructor(owner: rmSettingsSyncInterface.rm_renderingservices.RS_SettingsSyncInterfaceService)  
    {
      this._owner = owner;  
    }

    //--------------------------------------
    // set / get playlist controller config
    //---------------------------------------

  }
} 