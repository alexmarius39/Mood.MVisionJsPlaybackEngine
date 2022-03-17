import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_GeneralConfiguration");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServicesSDKConnector = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/R_SDK_Connector");

import amGeneralScreenProperties = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralProperty = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");

export module rm_transversalservices
{
  export class IImpl_SDK_GeneralConfiguration_SDKConnector implements amGeneral.am_transversalservices.I_SDK_GeneralConfiguration
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
      //-----------------
      var cb = function(ctx: amGeneralContext.am_general.A_Context)
      {
        this._owner._iNotify_SDKGeneralConfiguration.notify_setScreenProperties(newScreenProperties, error, context, callback) ;
      }
      this._owner._aSDKJsTV._iSDKGeneralConfiguration.setScreenProperties(newScreenProperties, error, context, cb) ;
    }

    public promise_setScreenProperties(newScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getScreenProperties(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      //-----------------
      var cb = function(ctx: amGeneralContext.am_general.A_Context)
      {
        this._owner._iNotify_SDKGeneralConfiguration.notify_getScreenProperties(error, context, callback) ;
      }
      this._owner._aSDKJsTV._iSDKGeneralConfiguration.getScreenProperties(error, context, cb) ;      
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKGeneralConfiguration.notify_setOSDLanguages(osdLanguages, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKGeneralConfiguration.setOSDLanguages(osdLanguages, error, context, callback2)        
    }

    public promise_setOsdLanguages(crtDateTime: amGeneralScreenProperties.am_general.A_ScreenProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getOSDLanguages(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKGeneralConfiguration.notify_getOSDLanguages(error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKGeneralConfiguration.getOSDLanguages(error, context, callback2)  
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
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        console.log( ctx.getResult);
        owner._iNotify_SDKGeneralConfiguration.notify_getUpTime(error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKGeneralConfiguration.getUpTime(error, context, callback2)  
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