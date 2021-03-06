import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_consumer/I_SDK_notifyTimeSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import rmTransversalServicesSDKConsumer = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_consumer/R_SDK_Consumer");


export module rm_transversalservices
{
  export class IImpl_SDK_notifyTimeSetup_SDKConsumer implements amGeneral.am_transversalservices.I_SDK_notifyTimeSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKConsumer.rm_transversalservices.R_SDK_Consumer;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKConsumer.rm_transversalservices.R_SDK_Consumer)  
    {
      this._owner = owner;  
    }

    //---------------------------------------
    //             CrtTime set/get
    //---------------------------------------

    //--------------------
    public notify_setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------
    public notify_promise_setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------
    public notify_getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //---------------------
    public notify_promise_getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


    //--------------------
    public notify_getGoodCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //---------------------------------------
    //             TimeZone set/get
    //---------------------------------------

    //---------------------
    public notify_setNTPServer(strServerUrl: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
    }
    
    //---------------------
    public notify_getNTPServer(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
    }
    
    //---------------------
    public notify_setUseNTP(bUse: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
    }
    
    //---------------------
    public notify_getUseNTP(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
    }
    
    //---------------------
    public notify_setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //----------------------------
    public notify_promise_setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public notify_getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-----------------------------
    public notify_promise_getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public notify_getTimeZoneOffset(aTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }
    
    //-------------------------
    public notify_getTimeZoneList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public notify_promise_getTimeZoneList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }


  }
} 