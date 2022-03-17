import amGeneral = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/I_SDK_HardwareSetup");

import nmTransversalServices = require("../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/N_SDK_NodeJs");
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

export module nm_transversalservices
{
  export class IImpl_SDK_HardwareSetup_NodeJs implements amGeneral.am_transversalservices.I_SDK_HardwareSetup
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

      let network = null;
      try {
        network = require('network');
      } catch(err) {
        error != null && error.setError(9094, `[Node.js] getNewtworkInfo exception ${err.message}`);
        context != null && context.setError(error);
        return callback(context);    
      }

      if (network != null) {
        const errCreateNetworkProps:amGeneralError.am_general.A_Error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
        const networkProperties: amGeneralNetworkProperties.am_general.A_NetworkProperties = this._owner._aServiceLocator._iEntityCreation.createDefaultNetworkProperties(errCreateNetworkProps);

        network.get_active_interface(function(err, obj) {
          let bRet: boolean = false;
          if (!err && obj != null && obj.type != null) {
            const networkType:string = obj.type.toString();
            if (networkType === 'Wireless') {
              networkProperties.getWifiNetCardProperties().setEnable(true);
              obj.mac_address != null && networkProperties.getWifiNetCardProperties().setMacAddress(obj.mac_address);
              obj.ip_address != null && networkProperties.getWifiNetCardProperties().setIpAddress(obj.ip_address);
              networkProperties.getWifiConnInfo().setWifiSignalLevel("Connected");
              bRet = true;
              context != null && context.setObjectResult(networkProperties);
            } else if (networkType === 'Wired') {
              networkProperties.getWiredNetCardProperties().setEnable(true);
              obj.mac_address != null && networkProperties.getWiredNetCardProperties().setMacAddress(obj.mac_address);
              obj.ip_address != null && networkProperties.getWiredNetCardProperties().setIpAddress(obj.ip_address);
              bRet = true;
              context != null && context.setObjectResult(networkProperties);
            }
          }
          
          bRet == false && error != null && error.setError(9094, "[Node.js] getNewtworkInfo error getting network info");
          context != null && context.setError(error);
          callback(context);  
        });          
      } else {
        error != null && error.setError(9094, `[Node.js] getNewtworkInfo no network module`);
        context != null && context.setError(error);
        callback(context);
      }
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

      let os = null;
      let si = null;
      let diskusage = null;

      try {
        os = require("os");
        si = require("systeminformation");
        diskusage = require("diskusage");
      } catch(e) {
        error != null && error.setError(9091, `sdk:getSystemUsageInfo exception getting system usage info ${e.message}`);
        context != null && context.setError(error);
        return callback(context);  
      }

      const self = this;
      const errCreateusageInfo:amGeneralError.am_general.A_Error = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
      const memoryInfo: amGeneralSystemUsageInfo.am_general.A_SystemUsageInfo = self._owner._aServiceLocator._iEntityCreation.createDefaultSystemUsageInfo(errCreateusageInfo);
      if (os != null) {
        typeof os.totalmem === "function" && memoryInfo.setTotalMemory(os.totalmem());
        typeof os.freemem === "function" && memoryInfo.setAvailableMemory(os.freemem());  
      }

      if (si != null && typeof si.blockDevices === "function" && diskusage != null && typeof diskusage.check === "function") {
        si.blockDevices()
        .then(function getDisk(data) {
          if (data == null){
            context != null && context.setError(error);
            return callback(context);  
          }

  
          let disk = data.shift();
          if (disk == null) {
            if (context != null) {
              context.setError(error);
              context.setObjectResult(memoryInfo);
            }
            return callback(context);  
          }
        
          diskusage.check(disk.mount, function(err, info) {
            if (info != null && info.total != null && info.available != null) {
              const storageInfo: amGeneralSystemStorageInfo.am_general.A_SystemStorageInfo = self._owner._aServiceLocator._iEntityCreation.createDefaultSystemStorageInfo(error);
              storageInfo.setCapacity(info.total);
              storageInfo.setAvailableCapacity(info.available);
              let storageType: string = disk.removable ? "External" : disk.mount.toUpperCase() + "\\";
              storageInfo.setType(storageType);
              memoryInfo.addSystemStorage(storageInfo);
            }
            getDisk(data);
          });
        })
        .catch((err) => {
          error != null && error.setError(9092, `[Node.js]: getSystemUsageInfo error ${err.message}`);
          context != null && context.setError(error);
          callback(context);
        });  
      }
    }

    public promise_getSystemUsageInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : any
    {
      
    }

    public getCPUInfo(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      if (callback == null)
        return;

      let systemInformation = null;
      try {
        systemInformation = require("systeminformation");
      } catch(e) {
        error != null && error.setError(9095, `[Node.js] getCPUInfo exception ${e.message}`);
        context != null && context.setError(error);        
        return callback(context);  
      }

      if (systemInformation != null && typeof systemInformation.currentLoad === "function") {
        systemInformation.currentLoad()
        .then(data => {
          let cores = new Array<number>();
          if (data != null && data.cpus != null && data.cpus.length > 0) {
            for (let i = 0; i < data.cpus.length; i++) {
              cores.push(Math.floor(data.cpus[i].load));
            }
            context != null && context.setArrayResult(cores);
          } else {
            error != null && error.setError(9095, "[Node.js] getCPUInfo error getting CPU info");
          }
        })
        .catch((err) => {
          error != null && error.setError(9095, `[Node.js] getCPUInfo error ${err}`);
        })
        .finally(() => {
          context != null && context.setError(error);  
          callback(context);
        });  
      } else {
        error != null && error.setError(9095, `[Node.js] getCPUInfo error systeminformation module`);
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

      context != null && context.setResult("");
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