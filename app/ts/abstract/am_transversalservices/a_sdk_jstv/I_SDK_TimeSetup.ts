import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import amTimeZoneConvertor = require("../../../../../app/ts/abstract/am_general/ae_timezoneconvertor/AE_TimeZoneConvertor");

export module am_transversalservices
{
  export interface I_SDK_TimeSetup extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    setTimeConvertor(aTimeZoneConvertor: amTimeZoneConvertor.am_general.AE_TimeZoneConvertor);

    setNTPServer(strServerUrl: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    getNTPServer(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    
    setUseNTP(bUse: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
    getUseNTP(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getGoodCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    getSyncGoodCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context) : Date ;

    setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;

    getTimeZoneOffset(aTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void; 

    getTimeZoneList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void ;
    promise_getTimeZoneList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any;
  }
} 