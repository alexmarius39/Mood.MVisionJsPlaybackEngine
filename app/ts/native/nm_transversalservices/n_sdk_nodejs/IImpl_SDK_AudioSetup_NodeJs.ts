import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_AudioSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/N_SDK_NodeJs");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralSoundProperties   = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");

export module nm_transversalservices
{
  export class IImpl_SDK_AudioSetup_NodeJs implements amGeneral.am_transversalservices.I_SDK_AudioSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServices.nm_transversalservices.N_SDK_NodeJs;

    //----------- constructor 
    constructor(owner: nmTransversalServices.nm_transversalservices.N_SDK_NodeJs)  
    {
      this._owner = owner;  
    }
    

    //-----------------------------
    //  set/get Volume Level
    //-----------------------------

    //----------------
    public setVolumeLevel(audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      let volumeLevel:number = null;
      let loudness = null;
      try {
        volumeLevel = audioProperties.getVolumeLevel();
        loudness = require('loudness');
      } catch (e) {
        error != null && error.setError(9012, `[Node.js]: setVolumeLevel exception ${e.message}`);
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      if (loudness != null && typeof loudness.setVolume === "function" && volumeLevel != null) {
        if (volumeLevel === 0) {
          volumeLevel = 0.1; // workaround to set volume to 0 on Windows. 0 value is not working
        }

        loudness.setVolume(volumeLevel)
        .then(() => {})
        .catch((err) => {
          error != null && error.setError(9013, `[Node.js]: setVolumeLevel error ${err.message}`);
        })
        .finally(() => {
          context != null && context.setError(error);
          callback != null && callback(context);              
        });          
      } else {
        error != null && error.setError(9014, `[Node.js]: setVolumeLevel error on loudness`);
        context != null && context.setError(error);
        callback != null && callback(context);              
      }
    }

    //-----------------------------
    public promise_setVolumeLevel(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getVolumeLevel(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (callback == null)
        return;

      let loudness = null;
      try {
        loudness = require('loudness');
      } catch (e) {
        error != null && error.setError(9012, `[Node.js]: getVolumeLevel exception ${e.message}`);
        context != null && context.setError(error);
        return callback(context);
      }

      if (loudness != null && typeof loudness.getVolume === "function") {
        loudness.getVolume()
        .then((volumeLevel:number) => {
          if (volumeLevel == null || isNaN(volumeLevel)) {
            error != null && error.setError(9011, `[Node.js]: getVolumeLevel error ${volumeLevel}`);
          } else {
            context != null && context.setResult(volumeLevel.toString());
          }
        })
        .catch((err) => {
          error != null && error.setError(9011, `[Node.js]: getVolumeLevel error ${err.message}`);
        })
        .finally(() => {
          context != null && context.setError(error);
          callback(context);
        });
      } else {
        error != null && error.setError(9014, `[Node.js]: getVolumeLevel error on loudness`);
        context != null && context.setError(error);
        callback(context);              
      }
    }

    //-----------------------------
    public promise_getVolumeLevel(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  set/get Mute
    //-----------------------------

    //-----------------------------
    public setMute(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      let loudness = null;
      let isMute: boolean = null;
      try {
        isMute = soundProperties.isMute();
        loudness = require('loudness');
      } catch (e) {
        error != null && error.setError(9012, `[Node.js]: setMute exception ${e.message}`);
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      if (loudness != null && typeof loudness.setMuted === "function" && isMute != null) {
        loudness.setMuted(isMute)
        .then(() => {})
        .catch((err) => {
          error != null && error.setError(9015, `[Node.js]: setMute error ${err.message}`);
        })
        .finally(() => {
          context != null && context.setError(error);
          callback != null && callback(context);  
        });  
      } else {
        error != null && error.setError(9014, `[Node.js]: setMute error on loudness`);
        context != null && context.setError(error);
        callback != null && callback(context);              
      }
    }

    //-----------------------------
    public promise_setMute(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    } 

    //-----------------------------
    public getMute(audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (callback == null)
        return;

      let loudness = null;
      try {
        loudness = require('loudness');
      } catch (e) {
        error != null && error.setError(9012, `[Node.js]: getMute exception ${e.message}`);
        context != null && context.setError(error);
        return callback(context);
      }

      if (loudness != null && typeof loudness.getMuted === "function") {
        loudness.getMuted()
        .then((muted: boolean) => {
          context != null && context.setBoolResult(muted);
        })
        .catch((err) => {
          error != null && error.setError(9016, `[Node.js]: getMute error ${err.message}`);
        })
        .finally(() => {
          context != null && context.setError(error);
          callback(context);
        });
      } else {
        error != null && error.setError(9014, `[Node.js]: getMute error on loudness`);
        context != null && context.setError(error);
        callback(context);
      }
    }

    //--------------------------------
    public promise_getMute(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  set/get Sound Mode
    //-----------------------------

    //--------------------------------
    public setSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public promise_setSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //--------------------------------
    public getSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public promise_getSoundMode(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  set/get Output Speaker 
    //-----------------------------

    //--------------------------------
    public setSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //---------------------------------
    public promise_setSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------------------
    public getSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public promise_getSoundSpeaker(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    //  get/set Digital Audio Input Mode
    //-----------------------------

    //-------------------------------
    public setDigitalAudioInputMode(inputSourceList: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //---------------------------------
    public promise_setDigitalAudioInputModes(inputSourceList: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-------------------------------
    public getDigitalAudioInputMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //---------------------------------
    public promise_getDigitalAudioInputModes(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  }
} 