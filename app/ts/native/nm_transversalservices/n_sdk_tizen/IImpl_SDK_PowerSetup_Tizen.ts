import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_PowerSetup");

import nmTransversalServicesSDKTizen = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralPowerSaveModeInfo = require("../../../../../app/ts/abstract/am_general/a_powersavemodeinfo/A_PowerSafeModeInfo");
import amGeneralPowerProperties   = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");
import amGeneralDeviceTimerInfo    = require("../../../../../app/ts/abstract/am_general/a_devicetimerinfo/A_DeviceTimerInfo");

//import * as tizenTest from "./tizentest";

declare var tizen : any;
declare var b2bapis : any;

export module nm_transversalservices
{

  export class IImpl_SDK_PowerSetup_Tizen implements amGeneral.am_transversalservices.I_SDK_PowerSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServicesSDKTizen.nm_transversalservices.N_SDK_Tizen;

    //----------- constructor 
    constructor(owner: nmTransversalServicesSDKTizen.nm_transversalservices.N_SDK_Tizen)  
    {

      this._owner = owner;  
    }

    //---------------------
    // Power Save Mode Info mode parameters.
    //  powerSaveModeInfo:
	  //     ses: Enable/disable Smart Energy Saving mode
	  //     dpmMode: Set Display Power Managerment mode. Refer to Signage.DpmMode for more information.
	  //     automaticStandby: Set Automatic Standby mode. Refer to Signage.AutomaticStandbyMode for more information.
    //     do15MinOff: Enable/disable 15 Minute Off feature.	
    //-----------------------
    
    //----------------------------
    public setPowerSaveMode(powerSaveMode: amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //----------------------------
    public promise_setPowerSaveMode(failureModeInfo: amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //----------------------------
    public getPowerSaveMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    //----------------------------
    public promise_getPowerSaveMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    //-----------------------------
    // Execute Power command
    //-----------------------------
    public executePowerCommand(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var self = this;
      //self._owner._debug = true;
      var powerCommand = powerProperties.getPowerCommand();
      if (powerCommand == "reboot")
        return self.reboot(powerProperties, error, context, callback);
      else if (powerCommand == "shutdown")
        return self.shutdown(powerProperties, error, context, callback);        
      //----------------------------  
      if (self._owner._debug)
      { 
        document.getElementById("rend.message").innerHTML += "<p>SDK executePowerCommand : invalid command ... ERROR</p>";
      }      
      context.setBoolResult(false);
      if (error!= null)
      {

      }
      context.setError(error);
      if (callback != null)
      {
        callback(context);    
      }    
        
    }

    //-------------------------------------
    public reboot( powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, 
                   error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var self = this;
      //self._owner._debug = true;

      context.setBoolResult(false);

      var onSuccess = function(val) 
      {
        console.log("SDK PowerSetup : reboot" + val);
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : reboot ... OK</p>";
        }      
        context.setBoolResult(true);
        context.setError(error);
        if (callback != null)
        {
          callback(context);    
        }    
      }
      var onError = function(err) 
      {
        console.log( "SDK PowerSetup : reboot ... ERROR:" + err.code + " - " + err.name + " - " + err.message); 
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : reboot ... ERROR 6072:" + err.code + " - " + err.name + " - " + err.message + "</p>";
        }
        context.setBoolResult(false);
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(6062, "SDK PowerSetup : reboot ... ERROR [6072]: " + err.code + " - " + err.name + " - " + err.message );
        if (callback != null)
          callback(context);
      }
      console.log("SDK PowerSetup : reboot ...");
      if (self._owner._debug)
      { 
        document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : reboot ...</p>";
      }      
      try{
        //=========================================================
        b2bapis.b2bcontrol.rebootDevice(onSuccess, onError);
      }catch(err2){
        console.log( "SDK PowerSetup : reboot ... ERROR 6063:" + err2.code + " - " + err2.name + " - " + err2.message); 
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : reboot ... ERROR 6073:" + err2.code + " - " + err2.name + " - " + err2.message + "</p>";
        }
        context.setBoolResult(false);
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(6073, "SDK PowerSetup : reboot ... ERROR 6073:" + err2.code + " - " + err2.name + " - " + err2.message );
        if (callback != null)
          callback(context);
      }
    }

    //-------------------------------------
    public shutdown( powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, 
                     error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var self = this;
      //self._owner._debug = true;

      context.setBoolResult(false);

      var onSuccess = function(val) 
      {
        console.log("SDK PowerSetup : shutdown" + val);
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : shutdown ... OK</p>";
        }      
        context.setBoolResult(true);
        context.setError(error);
        if (callback != null)
        {
          callback(context);    
        }    
      }
      var onError = function(err) 
      {
        console.log( "SDK PowerSetup : shutdown ... ERROR:" + err.code + " - " + err.name + " - " + err.message); 
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : shutdown ... ERROR 6062:" + err.code + " - " + err.name + " - " + err.message + "</p>";
        }
        context.setBoolResult(false);
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(6062, "SDK PowerSetup : shutdown ... ERROR [6062]: " + err.code + " - " + err.name + " - " + err.message );
        if (callback != null)
          callback(context);
      }
      console.log("SDK PowerSetup : shutdown ...");
      if (self._owner._debug)
      { 
        document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : shutdown ...</p>";
      }      
      try{
        //=========================================================
        b2bapis.b2bcontrol.setPowerOff(onSuccess, onError);
      }catch(err2){
        console.log( "SDK PowerSetup : shutdown ... ERROR 6063:" + err2.code + " - " + err2.name + " - " + err2.message); 
        if (self._owner._debug)
        { 
          document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : shutdown ... ERROR 6063:" + err2.code + " - " + err2.name + " - " + err2.message + "</p>";
        }
        context.setBoolResult(false);
        context.setError(error);
        if (context.getError() != null)
          context.getError().setError(6063, "SDK PowerSetup : shutdown ... ERROR 6063:" + err2.code + " - " + err2.name + " - " + err2.message );
        if (callback != null)
          callback(context);
      }
    }

    public promise_executePowerCommand(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-----------------------------
    // get/set Power Mng Mode
    //-----------------------------

    public setPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-----------------------------
    // get/set Power OnDelay
    //-----------------------------

    public setPowerOnDelayTime(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setPowerOnDelayTime(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getPowerOnDelayTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getPowerOnDelayTime(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-----------------------------
    // get/set Display Power Mng Mode and WakeUp Signal
    //-----------------------------

    public setDisplayPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setDisplayPowerMngMode(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getDisplayPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getDisplayPowerMngMode(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public setDisplayPowerMngWakeupSignal(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setDisplayPowerMngWakeupSignal(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getDisplayPowerMngWakeupSignal(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getDisplayPowerMngWakeupSignal(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-----------------------------
    // get/set Wake On Lan 
    //-----------------------------

    public setWakeOnLan(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setWakeOnLan(powerProperties: amGeneralPowerProperties.am_general.A_PowerProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getWakeOnLan(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getWakeOnLan(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    //-----------------------------
    // Device Timer management 
    //-----------------------------

    public addOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_addOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public addOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_addOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public deleteOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_deleteOffDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public deleteOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_deleteOnDeviceTimer(deviceTimerInfo: amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getOffDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getOffDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public getOnDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getOnDeviceTimerList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public enableAllOffDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_enableAllOffDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public enableAllOnDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_enableAllOnDeviceTimers(enable: boolean, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  }
} 


/*

var B2BApisService = {

	powerOff: function () {
		var onSuccess = function(val) {
					logsComponent.log("[setPowerOff] success : " + val);
				};
				var onError = function(error) {
					logsComponent.log("[setPowerOff] code :" + error.code + " error name: " + error.name + "  message " + error.message);
				};
				console.log("[setPowerOff] ");
				b2bapis.b2bcontrol.setPowerOff(onSuccess, onError);
    		
    		
    		
    },

    reboot: function () {
    	var onSuccess = function(val) {
    		logsComponent.log("[rebootDevice] success : " + val);
    		}
    		var onError = function(error) {
    			logsComponent.log("[rebootDevice] code :" + error.code + " error name: " + error.name + " message " + error.message);
    		}
    		console.log("[rebootDevice] ");
    	b2bapis.b2bcontrol.rebootDevice(onSuccess, onError);
    }

}
*/
