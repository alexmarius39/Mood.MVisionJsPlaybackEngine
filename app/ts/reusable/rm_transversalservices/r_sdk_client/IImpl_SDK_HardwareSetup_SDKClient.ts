import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_HardwareSetup");

import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralWifiConnectionInfo = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_WifiConnectionInfo");
import amGeneralNetworkProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProperties");
import amGeneralNetworkCardProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkCardProperties");
import amGeneralNetworkProxyProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProxyProperties");
import amGeneralBeaconInfo            = require("../../../../../app/ts/abstract/am_general/a_beaconinfo/A_BeaconInfo");
import amGeneralCaptureScreenInfo     = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");
import amGeneralEddystoneInfo         = require("../../../../../app/ts/abstract/am_general/a_eddystoneinfo/A_EddystoneInfo");
import amGeneralPlatformInfo          = require("../../../../../app/ts/abstract/am_general/a_platforminfo/A_PlatformInfo");
import amGeneralSystemUsageInfo       = require("../../../../../app/ts/abstract/am_general/a_systemusageinfo/A_SystemUsageInfo");
import amGeneralWifiSoftAppInfo       = require("../../../../../app/ts/abstract/am_general/a_wifisoftappinfo/A_WifiSoftAppInfo");

import rmTransversalServicesSDKClient = require("../../../../../app/ts/reusable/rm_transversalservices/r_sdk_client/R_SDK_Client");

export module rm_transversalservices
{
  export class IImpl_SDK_HardwareSetup_SDKClient implements amGeneral.am_transversalservices.I_SDK_HardwareSetup
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

    public startWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_startWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public stopWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_stopWps(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getWifiList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>, 
    }

    public promise_getWifiList(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
     //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>,   
    }

    public connectWifi(wifiConnectionInfo: amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_connectWifi(wifiConnectionInfo: amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public setNewtworkInfo(networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setNewtworkInfo(networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getNewtworkInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"          : callId,
      };
      this._owner._socket.emit('sdk.hardwaresetup.get-networkinfo', params); 
    }

    public promise_getNewtworkInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public setNewtworkProxyInfo(networkProperties: amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setNewtworkProxyInfo(networkProperties: amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getNewtworkProxyInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getNewtworkProxyInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getMacAddress(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getMacAddress(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getPlatformInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getPlatformInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getSystemUsageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"          : callId,
      };
      this._owner._socket.emit('sdk.hardwaresetup.get-systemusageinfo', params); 
    }

    public promise_getSystemUsageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getCPUInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"          : callId,
      };
      this._owner._socket.emit('sdk.hardwaresetup.get-cpuinfo', params);       
    }

    public promise_getCPUInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }    

    public getSerialNumber(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var callId = this._owner.addCallback(context, callback); 
      var params = {
          "callId"          : callId,
      };
      this._owner._socket.emit('sdk.hardwaresetup.get-serialnumber', params);      
    } 

    public promise_getSerialNumber(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

    public setBeaconInfo(beaconInfo: amGeneralBeaconInfo.am_general.A_BeaconInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_setBeaconInfo(beaconInfo: amGeneralBeaconInfo.am_general.A_BeaconInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getBeaconInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }
    public promise_getBeaconInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public setEddystoneInfo(eddystoneInfo: amGeneralEddystoneInfo.am_general.A_EddystoneInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }
    public promise_setEddystoneInfo(eddystoneInfo: amGeneralEddystoneInfo.am_general.A_EddystoneInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getEddystoneInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }
    public promise_getEddystoneInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }


    public setWifiSoftAppInfo(wifiSoftAppInfo: amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      
    }

    public promise_getWifiSoftApp(wifiSoftAppInfo: amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getWifiSoftAppInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {

    }

    public promise_getWifiSoftAppInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {

    }

  }
} 