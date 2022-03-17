import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TimeSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import amTimeZoneConvertor = require("../../../../../app/ts/abstract/am_general/ae_timezoneconvertor/AE_TimeZoneConvertor");

import rmTransversalServicesSDKConnector = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_connector/R_SDK_Connector");

export module rm_transversalservices
{
  export class IImpl_SDK_TimeSetup_SDKConnector implements amGeneral.am_transversalservices.I_SDK_TimeSetup
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

    //--------------------
    public setTimeConvertor(aTimeZoneConvertor: amTimeZoneConvertor.am_general.AE_TimeZoneConvertor)
    {
    }

    //---------------------------------------
    //             CrtTime set/get
    //---------------------------------------

    //--------------------
    public setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        owner._iNotify_SDKTimeSetup.notify_setCrtDateTime(crtDateTime, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKTimeSetup.setCrtDateTime(crtDateTime, error, context, callback2) ;
    }

    //--------------------
    public promise_setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------
    public getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        owner._iNotify_SDKTimeSetup.notify_getCrtDateTime(error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKTimeSetup.getCrtDateTime(error, context, callback2) ;
    }

    //---------------------
    public promise_getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------
    public getGoodCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        owner._iNotify_SDKTimeSetup.notify_getGoodCrtDateTime(error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKTimeSetup.getGoodCrtDateTime(error, context, callback2) ;
    }

    //--------------------
    public getSyncGoodCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context) : Date 
    {
      return this._owner.getSyncGoodCrtDateTime(error, context);
    }

    //---------------------------------------
    //             TimeZone set/get
    //---------------------------------------

    //---------------------
    public setNTPServer(strServerUrl: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
    }

    //---------------------
    public getNTPServer(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
    }

    //---------------------
    public setUseNTP(bUse: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
    }

    //---------------------
    public getUseNTP(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
    }

    //---------------------
    public setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //----------------------------
    public promise_setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //-----------------------------
    public promise_getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getTimeZoneOffset(aTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var owner = this._owner;
      //-----------------
      var callback2 = function(ctx: amGeneralContext.am_general.A_Context)
      {
        owner._iNotify_SDKTimeSetup.notify_getTimeZoneOffset(aTimeZone, error, context, callback) ;
      }
      owner._aSDKJsTV._iSDKTimeSetup.getTimeZoneOffset(aTimeZone, error, context, callback2) ;
    }

    
    //-------------------------
    public getTimeZoneList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //--------------------------------
    public promise_getTimeZoneList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }
    
    
  }
} 