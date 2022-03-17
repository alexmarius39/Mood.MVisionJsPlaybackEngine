import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_GeneralConfiguration");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/N_SDK_NodeJs");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralScreenProperties = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralProperty = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");

export module nm_transversalservices
{
  export class IImpl_SDK_GeneralConfiguration_NodeJs implements amGeneral.am_transversalservices.I_SDK_GeneralConfiguration
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
      let brightnessLevel: number = null;
      let brightness = null;
      try {
        brightness = require('brightness');
        brightnessLevel = newScreenProperties.getBrightness() / 100;
      } catch(e) {
        error != null && error.setError(9030, `[Node.js]: set brightness exception ${e.message}`);
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      if (brightness != null && typeof brightness.set === "function") {
        brightness.set(brightnessLevel)
        .then(() => {
        })
        .catch((err) => {
          error != null && error.setError(9030, `[Node.js]: set brightness error ${err.message}`);
        })  
        .finally(() => {
          context != null && context.setError(error);
          callback(context);
        });
      } else {
        error != null && error.setError(9030, `[Node.js]: error in setScreenProperties function`);
        context != null && context.setError(error);
        callback != null && callback(context);
      }
    }

    public promise_setScreenProperties(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getScreenProperties(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (callback == null)
        return;

      let brightness = null;
      try {
        brightness = require('brightness');
      } catch(e) {
        error != null && error.setError(9031, `[Node.js]: getScreenProperties exception ${e.message}`);
        context != null && context.setError(error);
        return callback(context);
      }

      if (brightness != null && typeof brightness.get === "function") {
        brightness.get()
        .then((level:number) => {
          if (level == null || isNaN(level)) {
            error != null && error.setError(9013, `[Node.js]: get brightness level error ${level}`);
          } else {
            context != null && context.setIntResult(level * 100);
          }
        })
        .catch((err) => {
          error != null && error.setError(9013, `[Node.js]: get brightness error ${err.message}`);
        })
        .finally(() => {
          context != null && context.setError(error);
          callback(context);
        });
      } else {
        error != null && error.setError(9030, `[Node.js]: error in getScreenProperties function`);
        context != null && context.setError(error);
        callback != null && callback(context);
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
      if (context != null) {
        context.setBoolResult(false);
        context.setError(error);
      }
      callback && callback(context);
    }

    public promise_setOsdLanguages(crtDateTime: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getOSDLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (callback == null)
        return;

      let osLocale = null;
      try {
        osLocale = require('os-locale');
      } catch(e) {
        error != null && error.setError(9043, `[Node.js]: getOSDLanguages exception ${e.message}`);
        context != null && context.setError(error);
        return callback(context);  
      }

      if (osLocale != null) {
        osLocale(function(err, locale) {
          if (err) {
            error != null && error.setError(9043, `[Node.js]: getOSDLanguages error ${err.message}`);
          } else {
            context != null && context.setResult(locale);
          }
          context != null && context.setError(error);
          callback(context);
        });  
      } else {
        error != null && error.setError(9043, `[Node.js]: error in getOSDLanguages function`);
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
        const os = require("os");
        const upTime: number = os.uptime() / 60; // minutes
        upTime != null && context != null && context.setIntResult(Math.floor(upTime));
      } catch(err) {
        error != null && error.setError(9093, `[Node.js]: getUpTime error ${err.message}`);
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