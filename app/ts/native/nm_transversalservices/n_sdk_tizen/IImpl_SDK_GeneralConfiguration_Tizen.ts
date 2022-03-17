import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_GeneralConfiguration");

import nmTransversalServicesTizen = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralScreenProperties = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralProperty = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");

declare var b2bapis: any;
declare var tizen : any;

export module nm_transversalservices
{

  export class IImpl_SDK_GeneralConfiguration_Tizen implements amGeneral.am_transversalservices.I_SDK_GeneralConfiguration
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen;

    //----------- constructor 
    constructor(owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen)  
    {

      this._owner = owner;  
    }

    //-------------------------------------
    //     clear Cache 
    //-------------------------------------

    public clearChache(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_clearCache(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
    }


    //-------------------------------------
    //     get/set Screen Properties
    //-------------------------------------

    public setScreenProperties(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (context != null) {
        context.setBoolResult(false);
        context.setError(error);
      }
      callback != null && callback(context);  
    }

    public promise_setScreenProperties(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getScreenProperties(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (callback == null)
        return;

      function onDisplay(displayData) {
        if (displayData != null && displayData.brightness != null) {
          context != null && context.setIntResult(displayData.brightness * 100);
        } else {
          error != null && error.setError(9093, `[Tizen]: getScreenProperties error`);
        }
        context != null && context.setError(error);
        callback(context);
      }

      function onDisplayError(e) {
        error != null && error.setError(9096, `[Tizen]: getScreenProperties error ${e.message}`);
        context != null && context.setError(error);
        callback(context);
      }

      try {
        tizen.systeminfo.getPropertyValue('DISPLAY', onDisplay, onDisplayError);
      } catch(e) {
        error != null && error.setError(9092, `[Tizen]: getScreenProperties exception ${e.message}`);
        context != null && context.setError(error);
        callback(context);
      }
   }

    public promise_getScreenProperties(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //-------------------------------------
    //     get/set Screen Mode
    //-------------------------------------

    public setScreenMode(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setScreenMode(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getScreenMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getScreenMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //-------------------------------------
    //     get/set OSD Languages
    //-------------------------------------

    public setOSDLanguages(osdLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (osdLanguages.length === 0) {
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      let b2bapisVersion: string = null;
      try {
        b2bapisVersion = b2bapis.b2bcontrol.getVersion();
      } catch(e) {
        error != null && error.setError(9043, `[Tizen]: setOSDLanguages exception ${e.message}`);
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      if (b2bapisVersion != null) {
        if (b2bapisVersion >= "1.9") {
          const onSetLanguageSuccess = function(val) {
            context != null && context.setError(error);
            callback != null && callback(context);
          }
          const onSetLanguageError = function(err) {
            error != null && error.setError(9044, `[Tizen]: setOSDLanguages error ${err.name}`);
            context != null && context.setError(error);
            callback != null && callback(context);
          }
    
          try {
            const strLanguage: string = osdLanguages[0];
            b2bapis.b2bcontrol.setLanguage(strLanguage, onSetLanguageSuccess, onSetLanguageError);
          } catch(e) {
            error != null && error.setError(9045, `[Tizen]: setOSDLanguages exception ${e.message}`);
            context != null && context.setError(error);
            callback != null && callback(context);    
          }
        } else {
          if (context != null) {
            context.setBoolResult(false);
            context.setError(error);
          }
          callback != null && callback(context);
        }
      } else {
        error != null && error.setError(9043, `[Tizen]: setOSDLanguages b2bapis.b2bcontrol.getVersion is null`);
        context != null && context.setError(error);
        callback != null && callback(context);
      }
    }

    public promise_setOsdLanguages(crtDateTime: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getOSDLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (callback == null)
        return;

      let OSDLanguage: string = null;
      let b2bapisVersion: string = null;
      try {
        b2bapisVersion = b2bapis.b2bcontrol.getVersion();
        if (b2bapisVersion >= "1.9") {
          OSDLanguage = b2bapis.b2bcontrol.getLanguage().toString();
        }
      } catch(e) {}

      if (OSDLanguage != null && OSDLanguage.length > 0) {
        if (context != null) {
          context.setResult(OSDLanguage);
          context.setError(error);
        }
        return callback(context);
      }

      function onLocale(localeInfo) {
        if (localeInfo != null && localeInfo.language != null) {
          context != null && context.setResult(localeInfo.language);
        } else {
          error != null && error.setError(9044, `[Tizen]: getOSDLanguages systemLocale error`);
        }
        context != null && context.setError(error);
        callback(context);  
      }

      function onLocaleError(e) {
        error != null && error.setError(9044, `[Tizen]: getOSDLanguages systemLocale error ${e.message}`);
        context != null && context.setError(error);
        callback(context);
      }

      try {
        tizen.systeminfo.getPropertyValue('LOCALE', onLocale, onLocaleError);
      } catch(e) {
        error != null && error.setError(9045, `[Tizen]: getOSDLanguages exception ${e.message}`);
        context != null && context.setError(error);
        callback(context);
      }
    }

    public promise_getOsdLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    //-------------------------------------
    //     get/set OSD Lock
    //-------------------------------------

    public setOSDLock(osdLock: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setOsdLock(osdLock: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getOSDLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }
    public promise_getOSDLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-------------------------------------
    //     get/set VirtualKeybordLanguages
    //-------------------------------------

    public setVirtualKeybordLanguages(virtKeyboardLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setVirtualKeyboardLanguages(virtKeyboardLanguages: Array<string>, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getVirtualKeyboardLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getVirtualKeyboardLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    public getUpTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      if (callback == null)
        return;

      try {
        const upTime: number = b2bapis.b2bcontrol.getSystemUpTime() / 60; // minutes
        upTime != null && context != null && context.setIntResult(Math.floor(upTime));
      } catch(err) {
        error != null && error.setError(9093, `[Tizen] getUpTime error ${err.message}`);
      }

      context != null && context.setError(error);
      callback(context);
    }

    public promise_getUpTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------------------
    //     get/set USB Lock
    //--------------------------------

    public setUSBLock(lockUsb: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    public promise_getUSB(lockUsb: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    public getUSBLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    public promise_setUSBLock(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //--------------------------------
    //     get/set General Property
    //--------------------------------

    public setGeneralProperty(property: amGeneralProperty.am_general.A_Property, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    public promise_setGeneralProperty(property: amGeneralProperty.am_general.A_Property, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    public getGeneralProperty(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    public promise_getGeneralProperty(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  }
} 