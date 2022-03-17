import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TimeSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralPowerProperties = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import amTimeZoneConvertor = require("../../../../../app/ts/abstract/am_general/ae_timezoneconvertor/AE_TimeZoneConvertor");

//import * as tizenTest from "./tizentest";

declare var tizen : any;
declare var b2bapis: any;
/* INFO
Other than the day parameter, which begins from 1, all parameters of the TZDate constructor begin from 0. 
This implies that, for the months of a year, the value for January is 0, for February, it is 1, and for December, it is 11. 
Therefore it may be convenient to add 1 to the returned value of tizen.time.TZDate.getMonth() method.
*/
export module nm_transversalservices
{
  export class IImpl_SDK_TimeSetup_Tizen implements amGeneral.am_transversalservices.I_SDK_TimeSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServices.nm_transversalservices.N_SDK_Tizen;

    //-----------  
    _aTimezoneConvertor: amTimeZoneConvertor.am_general.AE_TimeZoneConvertor;

    _crtTimeZoneOffset : number ;
    _prevTimeZoneOffset : number ;
    _bReboot : boolean;
    _bUseNTP: boolean;

    //----------- constructor 
    constructor(owner: nmTransversalServices.nm_transversalservices.N_SDK_Tizen)  
    {
      this._owner = owner;
      this._crtTimeZoneOffset  = -1;
      this._prevTimeZoneOffset = -1;
      this._bReboot = false;
      this._bUseNTP = false;
    }

    //--------------------
    public setTimeConvertor(aTimeZoneConvertor: amTimeZoneConvertor.am_general.AE_TimeZoneConvertor)
    {
      this._aTimezoneConvertor = aTimeZoneConvertor;
    }

    //--------------------
    public setNTPServer(strServerUrl: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      const onNTPServerSuccess = function(val) {
        context != null && context.setError(error);
        callback != null && callback(context);
      }

      const onNTPServerError = function(err) {
        error != null && error.setError(9054, `[Tizen]: setNTPServer error ${err.name}`);
        context != null && context.setError(error);
        callback != null && callback(context);
      }

      try {
        b2bapis.b2bcontrol.setNTPServerAddress(strServerUrl, onNTPServerSuccess, onNTPServerError);
      } catch(e) {
        error != null && error.setError(9054, `[Tizen]: setNTPServer exception ${e.message}`);
        context != null && context.setError(error);
        callback != null && callback(context);
      }
    }

    public getNTPServer(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (callback == null)
        return;

      try {
        const NTPServerAddress: string = b2bapis.b2bcontrol.getNTPServerAddress();
        NTPServerAddress != null && context != null && context.setResult(NTPServerAddress);
      } catch(e) {
        error != null && error.setError(9053, `[Tizen]: getNTPServer exception ${e.message}`);
      }

      context != null && context.setError(error);
      callback(context);
    }

    public setUseNTP(bUse: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      const self = this;

      const onNTPUseSuccess = function(val) {
        self._bUseNTP = bUse;
        context != null && context.setError(error);
        callback != null && callback(context);
      }

      const onNTPUseError = function(err) {
        error != null && error.setError(9057, `[Tizen]: onNTPUseError error ${err.name}`);
        context != null && context.setError(error);
        callback != null && callback(context);
      }

      try {
        b2bapis.b2bcontrol.setNTPUse(bUse ? "USE" : "UNUSE", onNTPUseSuccess, onNTPUseError);
      } catch(e) {
        error != null && error.setError(9054, `[Tizen]: setUseNTP exception ${e.message}`);
        context != null && context.setError(error);
        callback != null && callback(context);
      }
    }

    public getUseNTP(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (callback == null)
        return;

      this._bUseNTP = false;
      try {
        const NTPUse: string = b2bapis.b2bcontrol.getNTPUse();
        if (NTPUse == "USE") {
          this._bUseNTP = true;
          context != null && context.setBoolResult(true);
        } else if (NTPUse == "UNUSE") {
          context != null && context.setBoolResult(false);
        } else {
          error != null && error.setError(9057, `[Tizen]: getUseNTP returned ${NTPUse}`);
        }
      } catch(e) {
        error != null && error.setError(9056, `[Tizen]: getUseNTP exception ${e.message}`);
      }

      context != null && context.setError(error);
      callback(context);
    }

    //---------------------------------------
    //             CrtTime set/get
    //---------------------------------------
    
    //--------------------
    public setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      const onSetTimeSuccess = function(val) {
        context != null && context.setError(error);
        callback != null && callback(context);
      }

      const onSetTimeError = function(err) {
        error != null && error.setError(9042, `[Tizen]: setCrtDateTime error ${err.name}`);
        context != null && context.setError(error);
        callback != null && callback(context);
      }

      try {
        b2bapis.b2bcontrol.setCurrentTime(`${crtDateTime.getYear()}:${crtDateTime.getMonth()}:${crtDateTime.getDay()}:${crtDateTime.getHour()}:${crtDateTime.getMinutes()}:${crtDateTime.getSeconds()}`, onSetTimeSuccess, onSetTimeError);
      } catch(e) {
        error != null && error.setError(9043, `[Tizen]: setCrtDateTime exception ${e.message}`);
        context != null && context.setError(error);
        callback != null && callback(context);
      }
    }

    //--------------------
    public promise_setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //--------------------
    public getCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (callback == null)
        return;

      try {
        const currentTime: string = b2bapis.b2bcontrol.getCurrentTime();
        document.getElementById("rend.message").innerHTML += "<p>MESSAGE: MAIN - SYNC Crt Date is: " + currentTime + "</p>";
        const dateInfo = currentTime.split(":");
        if (dateInfo.length < 1 || dateInfo.length > 6) {
          error != null && error.setError(9032, `[Tizen] getCrtDateTime error cannot get date with getCurrentTime()`);
        } else {
          const date = new Date(parseInt(dateInfo[0]), parseInt(dateInfo[1]) - 1, parseInt(dateInfo[2]), parseInt(dateInfo[3]), parseInt(dateInfo[4]), parseInt(dateInfo[5]));
          context != null && context.setResult(date.toString());  
        }
      } catch(e) {
        error != null && error.setError(9032, `[Tizen] getCrtDateTime error ${e.message}`);
      }

      context != null && context.setError(error);
      callback(context);  
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
    
    //----------------------- 
    public call_reboot(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      //-------------------------------------
      var callbackReboot = function callbackReboot(ctx2 )
      {  
        //var rebootOk = ctx2.getBoolResult();
      }   
      //=============================
      var aError: amGeneralError.am_general.A_Error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      var aContext: amGeneralContext.am_general.A_Context = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
      var aPowerProperties: amGeneralPowerProperties.am_general.A_PowerProperties = this._owner._aServiceLocator._iEntityCreation.createDefaultPowerProperties(aError);
      // ---
      aPowerProperties.setPowerCommand("reboot");
      this._owner._iSDKPowerSetup.executePowerCommand(aPowerProperties, aError, aContext, callbackReboot);         
    }     

    //--------------------
    public getSyncGoodCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context) : Date 
    {
      try {
        const currentTime: string = b2bapis.b2bcontrol.getCurrentTime();
        const dateInfo = currentTime.split(":");
        if (dateInfo.length < 1 || dateInfo.length > 6) 
        {
          if (error != null)
            error.setError(9032, `[Tizen] getCrtDateTime error cannot get date with getCurrentTime()`);
          if (context != null)
           context.setError(error);
          return null;
        }

        let date = new Date(parseInt(dateInfo[0]), parseInt(dateInfo[1]) - 1, parseInt(dateInfo[2]), parseInt(dateInfo[3]), parseInt(dateInfo[4]), parseInt(dateInfo[5]));
        //let date = new Date("" + dateInfo[0] + "-"     +    //2020-12-16 17:45:00 UTC");
          //                  "" + dateInfo[1] + "-"    + 
          //                  "" + dateInfo[2] + " "    + 
          //                  "" + dateInfo[3] + ":"    + 
          //                  "" + dateInfo[4] + ":"    + 
          //                  "" + dateInfo[5] + " UTC" 
          //                );
        
        // document.getElementById("rend.message").innerHTML = "<p>MESSAGE: MAIN - Tizen current time: " + currentTime + "</p>";
        // document.getElementById("rend.message").innerHTML += "<p>MESSAGE: MAIN -  SYNC Crt Date is: " + date.toString() + "</p>";
        // document.getElementById("rend.message").innerHTML += "<p>MESSAGE: MAIN - Java script new Date() : " + (new Date()).toString() + "</p>";
        
        // -----------------------------------------------------------------------
        // reboot logic: reboot whenever a unexpected change of tiem zone happened
        // -----------------------------------------------------------------------
        this._prevTimeZoneOffset = this._crtTimeZoneOffset;
        this._crtTimeZoneOffset  = date.getTimezoneOffset();
        if ( (this._crtTimeZoneOffset != -1) && (this._prevTimeZoneOffset != -1) )
        {
          if (this._prevTimeZoneOffset != this._crtTimeZoneOffset) 
          {
            this._bReboot = true;
          }
        } 
        if (this._bReboot == true)
        {
          //document.getElementById("rend.message").innerHTML += "<p>========================================> REBOOT </p>";
          this.call_reboot(null,null,null);
        }
        context != null && context.setResult(date.toString());
        return date;

    } catch (err) {
       if (error != null)
         error.setError(9032, `[Tizen] getCrtDateTime error ${err.message}`);
       if (context != null)
         context.setError(error);
       return null;
    }
  }

    //---------------------------------------
    //             TimeZone set/get
    //---------------------------------------

    //---------------------
    public setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      const self = this;
      const onSetTimeSuccess = function(val) {
        context != null && context.setError(error);
        callback != null && callback(context);  
      }

      const onSetTimeError = function(err) {
        error != null && error.setError(9041, `[Tizen]: setTimeZone error ${err.name}`);
        context != null && context.setError(error);
        callback != null && callback(context);  
    }

      const strTimezone: string = crtTimeZone.getIANAString();
      let supportedTimezone: string = self._aTimezoneConvertor.getNativeTZ(strTimezone);
      if (supportedTimezone != null && supportedTimezone.length > 0) {
        try {
          b2bapis.b2bcontrol.setCurrentTimeZone(supportedTimezone, onSetTimeSuccess, onSetTimeError);
        } catch(e) {
          error != null && error.setError(9052, `[Tizen]: setTimeZone exception ${e.message}`);
          context != null && context.setError(error);
          callback != null && callback(context);  
        }
      } else {
        error != null && error.setError(9053, `[Tizen]: setTimeZone ${strTimezone} not in available timezones`);
        context != null && context.setError(error);
        callback != null && callback(context);
      }
    }

    //----------------------------
    public promise_setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (callback == null)
        return;

      const self = this;

      let strTizenTimeZone: string = "";
      try {
        let strTimezone: string = "";
        if (self._bUseNTP === true) {
          strTizenTimeZone = b2bapis.b2bcontrol.getCurrentTimeZone();
          strTimezone = self._aTimezoneConvertor.getMoodTZ(strTizenTimeZone);
        } else {
          strTizenTimeZone = tizen.time.getLocalTimezone();
          strTimezone = strTizenTimeZone;
        }

        if (strTimezone != null && strTimezone.length > 0) {
          const errCreateTimeZone:amGeneralError.am_general.A_Error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
          const aTimeZone: amGeneralTimeZone.am_general.A_TimeZone = self._owner._aServiceLocator._iEntityCreation.createDefaultTimeZone(errCreateTimeZone);
  
          const [continent, country, city] = strTimezone.split('/');
          continent != null && aTimeZone.setContinent(continent);
          country != null && aTimeZone.setCountry(country);
          city != null && aTimeZone.setCity(city);
          context != null && context.setObjectResult(aTimeZone);
        } else {
          error != null && error.setError(9045, `[Tizen] getTimeZone ${strTizenTimeZone} not in available timezones`);
        }  
      } catch(e) {
        error != null && error.setError(9046, `[Tizen] getTimeZone ${strTizenTimeZone} error ${e.message}`);
      }

      context != null && context.setError(error);
      callback(context);    
    }

    //-----------------------------
    public promise_getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getTimeZoneOffset(aTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (callback == null)
        return;

      try {
        const strIANATimeZone: string = aTimeZone.getIANAString();
        if (strIANATimeZone.length > 0) {
          const crtDate = tizen.time.getCurrentDateTime();
          const timezoneData = crtDate.toTimezone(strIANATimeZone);
          const secondsFromUTC: number = timezoneData.secondsFromUTC();
          const offsetMinutes = (-1) * secondsFromUTC/60;
          if (!isNaN(offsetMinutes) && offsetMinutes >= (-12) * 60 && offsetMinutes <= 14 * 60) {
            context != null && context.setIntResult(offsetMinutes);
          } else {
            error != null && error.setError(9036, `[Tizen] getTimeZoneOffset: could not get timezone offset for ${strIANATimeZone}`);          
          }
        } else {
          error != null && error.setError(9037, `[Tizen] getTimeZoneOffset: invalid timezone input`);          
        }
      } catch(e) {
        error != null && error.setError(9038, `[Tizen] getTimeZoneOffset error ${e.message}`);
      }

      context != null && context.setError(error);
      callback(context);
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


    
