import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_AudioSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralSoundProperties = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");


import rmTransversalServicesSDKConnector = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/R_SDK_Connector");


export module rm_transversalservices
{
  export class IImpl_SDK_AudioSetup_SDKConnector implements amGeneral.am_transversalservices.I_SDK_AudioSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKConnector.rm_transversalservices.R_SDK_Connector;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKConnector.rm_transversalservices.R_SDK_Connector)  
    {
      this._owner = owner;  
    }

        //-----------------------------
    //  set/get Volume Level
    //-----------------------------

    //----------------
    public setVolumeLevel(audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        owner._iNotify_SDKAudioSetup.notify_setVolumeLevel(audioProperties, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKAudioSetup.setVolumeLevel(audioProperties, error, context, callback2) ;
    }

    //-----------------------------
    public promise_setVolumeLevel(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getVolumeLevel(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        owner._iNotify_SDKAudioSetup.notify_getVolumeLevel(error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKAudioSetup.getVolumeLevel(error, context, callback2) ;
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        owner._iNotify_SDKAudioSetup.notify_setMute(soundProperties, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKAudioSetup.setMute(soundProperties, error, context, callback2) ;
    }

    //-----------------------------
    public promise_setMute(soundProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    } 

    //-----------------------------
    public getMute(audioProperties: amGeneralSoundProperties.am_general.A_SoundProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        owner._iNotify_SDKAudioSetup.notify_getVolumeLevel(error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKAudioSetup.getVolumeLevel(error, context, callback2) ;
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