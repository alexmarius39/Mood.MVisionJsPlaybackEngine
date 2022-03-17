import amGeneral = require("../../am_general/i_interface/I_Interface");
import amError   = require("../../am_general/a_error/A_Error");
import amContext = require("../../am_general/a_context/A_Context");
import amSoundProperties = require("../../am_general/a_soundproperties/A_SoundProperties");

export module am_nonrenderingservices
{
  export interface AI_VolumeSetupMain extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    init(error: amError.am_general.A_Error) : void;

    getVolume(audioProperties: amSoundProperties.am_general.A_SoundProperties, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void;
    setVolume(audioProperties: amSoundProperties.am_general.A_SoundProperties, error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void;
  }
} 