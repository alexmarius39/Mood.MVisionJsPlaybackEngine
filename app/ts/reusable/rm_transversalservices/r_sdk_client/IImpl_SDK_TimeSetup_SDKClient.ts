import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TimeSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import amTimeZoneConvertor = require("../../../../../app/ts/abstract/am_general/ae_timezoneconvertor/AE_TimeZoneConvertor");

import rmTransversalServicesSDKClient = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/R_SDK_Client");

export module rm_transversalservices
{
  export class IImpl_SDK_TimeSetup_SDKClient implements amGeneral.am_transversalservices.I_SDK_TimeSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: rmTransversalServicesSDKClient.rm_transversalservices.R_SDK_Client;

    //----------- constructor 
    constructor(owner: rmTransversalServicesSDKClient.rm_transversalservices.R_SDK_Client)  
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
      var callId = this._owner.addCallback(context, callback); 
      var params = {
        "callId"  : callId,
	      "crtTime" : crtDateTime
      };
      this._owner._socket.emit('sdk.timesetup.set-date', params);
    }

    //--------------------
    public promise_setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------
    public getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"  : callId,
      };
      this._owner._socket.emit('sdk.timesetup.get-date', params);
    }

    //---------------------
    public promise_getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------
    public getGoodCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      return this._owner.getGoodCrtDateTime(error, context, callback);
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
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"  : callId,
          "ntpServer": strServerUrl
      };
      this._owner._socket.emit('sdk.timesetup.set-ntpserver', params);
    }

    //---------------------
    public getNTPServer(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"  : callId,
      };
      this._owner._socket.emit('sdk.timesetup.get-ntpserver', params);
    }

    //---------------------
    public setUseNTP(bUse: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"  : callId,
          "use"     : bUse
      };
      this._owner._socket.emit('sdk.timesetup.set-usentp', params);
    }

    //---------------------
    public getUseNTP(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"  : callId
      };
      this._owner._socket.emit('sdk.timesetup.get-usentp', params);
    }

    //---------------------
    public setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"  : callId,
          "timeZone": crtTimeZone, 
      };
      this._owner._socket.emit('sdk.timesetup.set-timezone', params);
    }

    //----------------------------
    public promise_setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"  : callId,
      };
      this._owner._socket.emit('sdk.timesetup.get-timezone', params);
    }

    //-----------------------------
    public promise_getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getTimeZoneOffset(aTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"   : callId,
          "timeZone" : aTimeZone
      };
      this._owner._socket.emit('sdk.timesetup.get-timezoneoffset', params);
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