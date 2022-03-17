import amVolumeSetupServiceMain = require("../../../abstract/am_nonrenderingservices/as_volumesetup/AI_VolumeSetupMain");

import amError   = require("../../../abstract/am_general/a_error/A_Error");
import amContext = require("../../../abstract/am_general/a_context/A_Context");
import amSoundProperties = require("../../../abstract/am_general/a_soundproperties/A_SoundProperties");

import rmVolumeSetupService = require("./RS_VolumeSetup");
                                                     
export module rm_nonrenderingservices
{
  export class RI_VolumeSetupMain implements amVolumeSetupServiceMain.am_nonrenderingservices.AI_VolumeSetupMain
  {
    _name: string;    

    //----------- owner
    _owner: rmVolumeSetupService.rm_nonrenderingservices.RS_VolumeSetupService;

    //----------- constructor 
    constructor(owner: rmVolumeSetupService.rm_nonrenderingservices.RS_VolumeSetupService)  
    {
      this._owner = owner;  
    }

    public init(error : amError.am_general.A_Error) : void
    {
      this._owner.init(error);
    }

    public getVolume(audioProperties: amSoundProperties.am_general.A_SoundProperties, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      this._owner.getVolume(audioProperties, error, context, callback);
    }
    
    public setVolume(audioProperties: amSoundProperties.am_general.A_SoundProperties, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void
    {
      this._owner.setVolume(audioProperties, error, context, callback);
    }
  }
} 