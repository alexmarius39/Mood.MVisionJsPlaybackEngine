import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_TimeSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/N_SDK_NodeJs");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralDateTime   = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone   = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");

import amTimeZoneConvertor = require("../../../../../app/ts/abstract/am_general/ae_timezoneconvertor/AE_TimeZoneConvertor");

export module nm_transversalservices
{
  export class IImpl_SDK_TimeSetup_NodeJs implements amGeneral.am_transversalservices.I_SDK_TimeSetup
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

    //--------------------
    public setTimeConvertor(aTimeZoneConvertor: amTimeZoneConvertor.am_general.AE_TimeZoneConvertor)
    {
    }

    public setNTPServer(strServerUrl: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (context != null) {
        context.setBoolResult(false);
        context.setError(error);
      }
      callback != null && callback(context);
    }

    public getNTPServer(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (context != null) {
        context.setBoolResult(false);
        context.setError(error);
      }
      callback != null && callback(context);
    }

    public setUseNTP(bUse: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (context != null) {
        context.setBoolResult(false);
        context.setError(error);
      }
      callback != null && callback(context);
    }

    public getUseNTP(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (context != null) {
        context.setResult("not supported");
        context.setError(error);
      }
      callback != null && callback(context);
    }

    //---------------------------------------
    //             CrtTime set/get
    //---------------------------------------

    //--------------------
    public setCrtDateTime(crtDateTime: amGeneralDateTime.am_general.A_DateTime, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      const self = this;
      let exec_module = null;
      let updateTimeCmd: string = null;
      try {
        const d = new Date();
        const localeDate = d.toLocaleDateString();
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();

        let d1 = "", d2 = "", d3 = "";
        if (localeDate.indexOf('.') > 0) {
          [d1, d2, d3] = localeDate.split(".");
        } else if (localeDate.indexOf('/') > 0) {
          [d1, d2, d3] = localeDate.split("/");
        } else if (localeDate.indexOf('-') > 0) {
          [d1, d2, d3] = localeDate.split("-");
        } 

        let newDateFormat: string = "";
        if (parseInt(d1) == year) { // YYYYMMDD
          newDateFormat = `${crtDateTime.getYear()}-${crtDateTime.getMonth()}-${crtDateTime.getDay()}`;
        } else if (parseInt(d1) == day) { // DDMMYYYY
          newDateFormat = `${crtDateTime.getDay()}-${crtDateTime.getMonth()}-${crtDateTime.getYear()}`;
        } else if (parseInt(d1) == month) { // MMDDYYYY
          newDateFormat = `${crtDateTime.getMonth()}-${crtDateTime.getDay()}-${crtDateTime.getYear()}`;
        }

        const newTime: string = `${crtDateTime.getHour()}:${crtDateTime.getMinutes()}:${crtDateTime.getSeconds()}.00`;
        updateTimeCmd = `date ${newDateFormat} & time ${newTime}`;

        exec_module = require("child_process");
      } catch(e) {
        error != null && error.setError(9040, `[Node.js] setCrtDateTime exception ${e.message}`);
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      if (exec_module != null && typeof exec_module.exec === "function") {
        exec_module.exec(updateTimeCmd, {timeout:2000}, (err, stdout, stderr) => {
          if (err != null) {
            error != null && error.setError(9040, `[Node.js] setCrtDateTime error ${err.message}`);
          } else {
            self._owner._debug == true && console.log(`[Node.js] set device time ${updateTimeCmd}`);
          }
          context != null && context.setError(error);
          callback != null && callback(context); 
        });  
      } else {
        error != null && error.setError(9041, `[Node.js] setCrtDateTime error child_process module`);
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

      const crtDate = new Date();
      if (context != null) {
        context.setResult(crtDate.toString());
        context.setError(error);
      }
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
    
    //--------------------
    public getSyncGoodCrtDateTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context) : Date 
    {
      return this._owner.getSyncGoodCrtDateTime(error, context);
    }

    //---------------------------------------
    //             TimeZone set/get
    //---------------------------------------

    //---------------------
    public setTimeZone(crtTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      let windowsIANA = null;
      let exec_module = null;
      let strIANATimeZone: string = null;
      try {
        strIANATimeZone = crtTimeZone.getIANAString();
        windowsIANA = require("windows-iana");
        exec_module = require("child_process");
      } catch(e) {
        error != null && error.setError(9040, `[Node.js] setTimeZone exception ${e.message}`)
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      const arrayWindowsTimeZones: Array<string> = windowsIANA.findWindows(strIANATimeZone);
      let setTimeZoneCmd: string = null;
      if (Array.isArray(arrayWindowsTimeZones) && arrayWindowsTimeZones.length > 0) {
        const strWindowsTimeZone: string = arrayWindowsTimeZones[0];
        if (strWindowsTimeZone.length > 0) {
          setTimeZoneCmd = `tzutil /s "${strWindowsTimeZone}"`;
        }
      }

      if (exec_module != null && typeof exec_module.exec === "function" && setTimeZoneCmd != null && setTimeZoneCmd.length > 0) {
        exec_module.exec(setTimeZoneCmd, (err, stdout, stderr) => {
          if (err != null) {
            error != null && error.setError(9042, `[Node.js] setTimeZone error ${err.message}`);
          }
          context != null && context.setError(error);
          callback != null && callback(context);
        });
      } else {
        error != null && error.setError(9041, `[Node.js] setTimeZone error windows-iana return value`);
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
      const getTimeZoneCmd: string = "tzutil /g";
      let exec_module = null;
      let windowsIANA = null;
      try {
        exec_module = require("child_process");
        windowsIANA = require("windows-iana");
      } catch(e) {
        error != null && error.setError(9043, `[Node.js] getTimeZone exception ${e.message}`)
        context != null && context.setError(error);
        return callback(context);  
      }

      if (exec_module != null && typeof exec_module.exec === "function") {
        exec_module.exec(getTimeZoneCmd, (err, stdout, stderr) => {
          if (err != null) {
            error != null && error.setError(9044, `[Node.js] getTimeZone error ${err.message}`);
          } else {
            if (context != null) {
              const strWindowsTime = stdout.toString();
              if (strWindowsTime.length > 0) {
                const arrayIANATimeZones: Array<string> = windowsIANA.findIana(strWindowsTime);
                if (Array.isArray(arrayIANATimeZones) && arrayIANATimeZones.length > 0) {
                  const strIANATimeZone: string = arrayIANATimeZones[0];
                  if (strIANATimeZone.length > 0) {
                    const aTimeZone: amGeneralTimeZone.am_general.A_TimeZone = self._owner._aServiceLocator._iEntityCreation.createDefaultTimeZone(error);
                    const [continent, country, city] = strIANATimeZone.split('/');
                    continent != null && aTimeZone.setContinent(continent);
                    country != null && aTimeZone.setCountry(country);
                    city != null && aTimeZone.setCity(city);
                    context.setObjectResult(aTimeZone);
                  }
                } else {
                  error != null && error.setError(9045, `[Node.js] getTimeZone error windows-iana return value`);
                }
              } else {
                error != null && error.setError(9046, `[Node.js] getTimeZone error tzutil command returned empty value`);
              }   
            }
          }
          context && context.setError(error);
          callback != null && callback(context);
        });
      } else {
        error != null && error.setError(9047, `[Node.js] getTimeZone error child_process module`);
        context != null && context.setError(error);
        callback != null && callback(context);        
      }
    }

    //-----------------------------
    public promise_getTimeZone(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    public getTimeZoneOffset(aTimeZone: amGeneralTimeZone.am_general.A_TimeZone, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      try {
        const strIANATimeZone: string = aTimeZone.getIANAString();
        if (strIANATimeZone.length > 0) {
          const moment = require('moment-timezone');
          const timezoneOffset: string = moment().tz(strIANATimeZone).format('Z');
          const [strHours, strMinutes] = timezoneOffset.split(':');
          const nHours: number = (strHours != null) ? parseInt(strHours) : 0;
          const nMinutes: number = (strMinutes != null) ? parseInt(strMinutes) : 0;
          if (nHours >= -12 && nHours <= 14 && nMinutes >= 0 && nMinutes <= 59) {
            let offsetMinutes: number = nHours * 60;
            offsetMinutes += (nHours > 0) ? nMinutes : (-1) * nMinutes;
            context != null && context.setIntResult(offsetMinutes);
          } else {
            error != null && error.setError(9043, `[Node.js] getTimeZoneOffset: could not get timezone offset for ${strIANATimeZone}`);
          }
        } else {
          error != null && error.setError(9044, `[Node.js] getTimeZoneOffset: invalid timezone input`);
        }
      } catch(e) {
        error != null && error.setError(9045, `[Node.js] getTimeZoneOffset exception ${e.message}`);
      }

      context != null && context.setError(error);
      callback != null && callback(context);
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