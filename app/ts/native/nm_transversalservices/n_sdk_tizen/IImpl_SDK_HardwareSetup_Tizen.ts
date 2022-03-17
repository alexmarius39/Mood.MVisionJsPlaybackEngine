import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_HardwareSetup");

import nmTransversalServicesTizen = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralWifiConnectionInfo = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_WifiConnectionInfo");
import amGeneralNetworkProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProperties");
import amGeneralNetworkProxyProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProxyProperties");
import amGeneralBeaconInfo            = require("../../../../../app/ts/abstract/am_general/a_beaconinfo/A_BeaconInfo");
import amGeneralEddystoneInfo         = require("../../../../../app/ts/abstract/am_general/a_eddystoneinfo/A_EddystoneInfo");
import amGeneralSystemUsageInfo       = require("../../../../../app/ts/abstract/am_general/a_systemusageinfo/A_SystemUsageInfo");
import amGeneralSystemStorageInfo     = require("../../../../../app/ts/abstract/am_general/a_systemstorageinfo/A_SystemStorageInfo");
import amGeneralWifiSoftAppInfo       = require("../../../../../app/ts/abstract/am_general/a_wifisoftappinfo/A_WifiSoftAppInfo");

//import * as tizenTest from "./tizentest";

declare var tizen : any;
declare var webapis : any;
declare var b2bapis: any;

export module nm_transversalservices
{

  export class IImpl_SDK_HardwareSetup_Tizen implements amGeneral.am_transversalservices.I_SDK_HardwareSetup
  {
    //----------- properties
    _name: string;  

    //----------- owner
    _owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen;

    //----------- constructor 
    constructor(owner: nmTransversalServicesTizen.nm_transversalservices.N_SDK_Tizen)  
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
      if (callback == null)
        return;

      const errCreatenetworkProps:amGeneralError.am_general.A_Error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      const networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties = this._owner._aServiceLocator._iEntityCreation.createDefaultNetworkProperties(errCreatenetworkProps);

      let macAddress: string = null;
      let ipAddress: string = null;
      let ipMode: number = null;
      let networkType: number = null;

      try {
        macAddress = webapis.network.getMac();
        ipAddress = webapis.network.getIp();
        ipMode = webapis.network.getIpMode();  
        networkType = webapis.network.getActiveConnectionType();
        if (networkType != null) {
          switch(networkType) {
            case webapis.network.NetworkActiveConnectionType.WIFI :
              networkProperties.getWifiNetCardProperties().setEnable(true);
              macAddress != null && networkProperties.getWifiNetCardProperties().setMacAddress(macAddress);
              ipAddress != null && networkProperties.getWifiNetCardProperties().setIpAddress(ipAddress);
              ipMode != null && ipMode === webapis.network.NetworkIpMode.DYNAMIC && networkProperties.getWifiNetCardProperties().setDynamic(true);
  
              const wifiSignalStrength: number = webapis.network.getWiFiSignalStrengthLevel();
              if (wifiSignalStrength) {
                const signalPercent: number = wifiSignalStrength * 20;
                const signalPower:number = (10 - wifiSignalStrength) * 10;
  
                const signalStrength: string = "Connected, " + signalPercent.toString() + "% (-" + signalPower.toString() + " dBm)";
                networkProperties.getWifiConnInfo().setWifiSignalLevel(signalStrength);
              }
  
              context != null && context.setObjectResult(networkProperties);
              break;
            case webapis.network.NetworkActiveConnectionType.ETHERNET :
              networkProperties.getWiredNetCardProperties().setEnable(true);
              macAddress != null && networkProperties.getWiredNetCardProperties().setMacAddress(macAddress);
              ipAddress != null && networkProperties.getWiredNetCardProperties().setIpAddress(ipAddress);
              ipMode != null && ipMode === webapis.network.NetworkIpMode.DYNAMIC && networkProperties.getWiredNetCardProperties().setDynamic(true);
  
              context != null && context.setObjectResult(networkProperties);
              break;
            default:
              error != null && error.setError(9094, `[Tizen] getNewtworkInfo error: not WiFi or Ethernet network type ${networkType}`);
              return;
          }
        } else {
          error != null && error.setError(9094, `[Tizen] getNewtworkInfo error unknown network type`);
        }
      } catch(e) {
        error != null && error.setError(9094, `[Tizen] getNewtworkInfo exception ${e.message}`);
      }

      context != null && context.setError(error);        
      callback(context);  
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
      if (callback == null)
        return;

      const self = this;
      const errCreateUsageInfo:amGeneralError.am_general.A_Error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      const memoryInfo: amGeneralSystemUsageInfo.am_general.A_SystemUsageInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultSystemUsageInfo(errCreateUsageInfo);

      function onStorage(storageData) {
        if (storageData && storageData.units) {
          let storageTypes = {};
          for (let i in storageData.units) {
            const storageUnit = storageData.units[i];
            if (storageUnit != null) {
              const storageInfo: amGeneralSystemStorageInfo.am_general.A_SystemStorageInfo = self._owner._aServiceLocator._iEntityCreation.createDefaultSystemStorageInfo(error);
              if (storageUnit.type != null) {
                const storageType: string = storageUnit.type.toString();
                let storageTypeValue: string = storageType === "INTERNAL" ? "Internal" : "External";
                if (storageType in storageTypes) {
                  storageTypes[storageType]++;
                  storageTypeValue += ` ${storageTypes[storageType]}`;
                } else {
                  storageTypes[storageType] = 0;
                  if (storageType === "USB_DEVICE" || storageType === "USB_HOST") {
                    storageTypeValue += " [MAIN]"
                  }
                }
                storageInfo.setType(storageTypeValue);
              }
              storageUnit.capacity && storageInfo.setCapacity(storageUnit.capacity);
              storageUnit.availableCapacity && storageInfo.setAvailableCapacity(storageUnit.availableCapacity);

              memoryInfo.addSystemStorage(storageInfo);
            }
          }
          context != null && context.setObjectResult(memoryInfo);
        } else {
          error != null && error.setError(9091, "[Tizen] getSystemUsageInfo error getting system usage info");
        }

        context != null && context.setError(error);
        callback(context);
      }

      function onStorageError(e) {
        error != null && error.setError(9046, `[Tizen]: getSystemUsageInfo error ${e.message}`);
        context != null && context.setError(error);
        callback(context);  
      }

      try {
        const totalMem: number = tizen.systeminfo.getTotalMemory();
        const availableMem: number =  tizen.systeminfo.getAvailableMemory();  
        memoryInfo.setTotalMemory(totalMem);
        memoryInfo.setAvailableMemory(availableMem);
      } catch(e) {}

      try {
        tizen.systeminfo.getPropertyValue('STORAGE', onStorage, onStorageError);
      } catch(e) {
        error != null && error.setError(9045, `[Tizen]: getSystemUsageInfo exception ${e.message}`);
        context != null && context.setError(error);
        callback(context);  
      }
    }

    public promise_getSystemUsageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getCPUInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (callback == null)
        return;

      function onCPUInfo(cpuInfo) {
        let cores = new Array<number>();
        if (cpuInfo != null && cpuInfo.load != null) {
          const cpuLoad: number = cpuInfo.load * 100;
          cores.push(Math.floor(cpuLoad));
          context != null && context.setArrayResult(cores);
        } else {
          error != null && error.setError(9094, "[Tizen]: getCPUInfo error getting CPU info");
        }

        context != null && context.setError(error);
        callback(context);
      }

      function onCPUInfoError(e) {
        error != null && error.setError(9097, `[Tizen]: getCPUInfo error ${e.message}`);
        context != null && context.setError(error);
        callback(context);  
      }

      try {
        tizen.systeminfo.getPropertyValue('CPU', onCPUInfo, onCPUInfoError);
      } catch(e) {
        error != null && error.setError(9094, `[Tizen]: getCPUInfo exception ${e.message}`);
        context != null && context.setError(error);
        callback(context);  
      }
    }

    public promise_getCPUInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getSerialNumber(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      if (callback == null)
        return;

      try {
        const serialNumber: string = b2bapis.b2bcontrol.getSerialNumber();
        serialNumber != null && context != null && context.setResult(serialNumber);
      } catch(err) {
        error != null && error.setError(9095, `[Tizen]: getSerialNumber error ${err.message}`);
      }

      context != null && context.setError(error);  
      callback(context);
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