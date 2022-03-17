define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_HardwareSetup_NodeJs = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_HardwareSetup_NodeJs(owner) {
                this._owner = owner;
            }
            IImpl_SDK_HardwareSetup_NodeJs.prototype.startWps = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_startWps = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.stopWps = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_stopWps = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.getWifiList = function (error, context, callback) {
                //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>, 
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getWifiList = function (error, context, callback) {
                //return wifiList: Array<amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo>,   
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.connectWifi = function (wifiConnectionInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_connectWifi = function (wifiConnectionInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.setNewtworkInfo = function (networkProperties, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_setNewtworkInfo = function (networkProperties, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.getNewtworkInfo = function (error, context, callback) {
                if (callback == null)
                    return;
                var network = null;
                try {
                    network = require('network');
                }
                catch (err) {
                    error != null && error.setError(9094, "[Node.js] getNewtworkInfo exception " + err.message);
                    context != null && context.setError(error);
                    return callback(context);
                }
                if (network != null) {
                    var errCreateNetworkProps = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
                    var networkProperties_1 = this._owner._aServiceLocator._iEntityCreation.createDefaultNetworkProperties(errCreateNetworkProps);
                    network.get_active_interface(function (err, obj) {
                        var bRet = false;
                        if (!err && obj != null && obj.type != null) {
                            var networkType = obj.type.toString();
                            if (networkType === 'Wireless') {
                                networkProperties_1.getWifiNetCardProperties().setEnable(true);
                                obj.mac_address != null && networkProperties_1.getWifiNetCardProperties().setMacAddress(obj.mac_address);
                                obj.ip_address != null && networkProperties_1.getWifiNetCardProperties().setIpAddress(obj.ip_address);
                                networkProperties_1.getWifiConnInfo().setWifiSignalLevel("Connected");
                                bRet = true;
                                context != null && context.setObjectResult(networkProperties_1);
                            }
                            else if (networkType === 'Wired') {
                                networkProperties_1.getWiredNetCardProperties().setEnable(true);
                                obj.mac_address != null && networkProperties_1.getWiredNetCardProperties().setMacAddress(obj.mac_address);
                                obj.ip_address != null && networkProperties_1.getWiredNetCardProperties().setIpAddress(obj.ip_address);
                                bRet = true;
                                context != null && context.setObjectResult(networkProperties_1);
                            }
                        }
                        bRet == false && error != null && error.setError(9094, "[Node.js] getNewtworkInfo error getting network info");
                        context != null && context.setError(error);
                        callback(context);
                    });
                }
                else {
                    error != null && error.setError(9094, "[Node.js] getNewtworkInfo no network module");
                    context != null && context.setError(error);
                    callback(context);
                }
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getNewtworkInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.setNewtworkProxyInfo = function (networkProperties, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_setNewtworkProxyInfo = function (networkProperties, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.getNewtworkProxyInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getNewtworkProxyInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.getMacAddress = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getMacAddress = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.getPlatformInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getPlatformInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.getSystemUsageInfo = function (error, context, callback) {
                if (callback == null)
                    return;
                var os = null;
                var si = null;
                var diskusage = null;
                try {
                    os = require("os");
                    si = require("systeminformation");
                    diskusage = require("diskusage");
                }
                catch (e) {
                    error != null && error.setError(9091, "sdk:getSystemUsageInfo exception getting system usage info " + e.message);
                    context != null && context.setError(error);
                    return callback(context);
                }
                var self = this;
                var errCreateusageInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
                var memoryInfo = self._owner._aServiceLocator._iEntityCreation.createDefaultSystemUsageInfo(errCreateusageInfo);
                if (os != null) {
                    typeof os.totalmem === "function" && memoryInfo.setTotalMemory(os.totalmem());
                    typeof os.freemem === "function" && memoryInfo.setAvailableMemory(os.freemem());
                }
                if (si != null && typeof si.blockDevices === "function" && diskusage != null && typeof diskusage.check === "function") {
                    si.blockDevices()
                        .then(function getDisk(data) {
                        if (data == null) {
                            context != null && context.setError(error);
                            return callback(context);
                        }
                        var disk = data.shift();
                        if (disk == null) {
                            if (context != null) {
                                context.setError(error);
                                context.setObjectResult(memoryInfo);
                            }
                            return callback(context);
                        }
                        diskusage.check(disk.mount, function (err, info) {
                            if (info != null && info.total != null && info.available != null) {
                                var storageInfo = self._owner._aServiceLocator._iEntityCreation.createDefaultSystemStorageInfo(error);
                                storageInfo.setCapacity(info.total);
                                storageInfo.setAvailableCapacity(info.available);
                                var storageType = disk.removable ? "External" : disk.mount.toUpperCase() + "\\";
                                storageInfo.setType(storageType);
                                memoryInfo.addSystemStorage(storageInfo);
                            }
                            getDisk(data);
                        });
                    })
                        .catch(function (err) {
                        error != null && error.setError(9092, "[Node.js]: getSystemUsageInfo error " + err.message);
                        context != null && context.setError(error);
                        callback(context);
                    });
                }
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getSystemUsageInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.getCPUInfo = function (error, context, callback) {
                if (callback == null)
                    return;
                var systemInformation = null;
                try {
                    systemInformation = require("systeminformation");
                }
                catch (e) {
                    error != null && error.setError(9095, "[Node.js] getCPUInfo exception " + e.message);
                    context != null && context.setError(error);
                    return callback(context);
                }
                if (systemInformation != null && typeof systemInformation.currentLoad === "function") {
                    systemInformation.currentLoad()
                        .then(function (data) {
                        var cores = new Array();
                        if (data != null && data.cpus != null && data.cpus.length > 0) {
                            for (var i = 0; i < data.cpus.length; i++) {
                                cores.push(Math.floor(data.cpus[i].load));
                            }
                            context != null && context.setArrayResult(cores);
                        }
                        else {
                            error != null && error.setError(9095, "[Node.js] getCPUInfo error getting CPU info");
                        }
                    })
                        .catch(function (err) {
                        error != null && error.setError(9095, "[Node.js] getCPUInfo error " + err);
                    })
                        .finally(function () {
                        context != null && context.setError(error);
                        callback(context);
                    });
                }
                else {
                    error != null && error.setError(9095, "[Node.js] getCPUInfo error systeminformation module");
                    context != null && context.setError(error);
                    callback(context);
                }
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getCPUInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.getSerialNumber = function (error, context, callback) {
                if (callback == null)
                    return;
                context != null && context.setResult("");
                callback(context);
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getSerialNumber = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.setBeaconInfo = function (beaconInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_setBeaconInfo = function (beaconInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.getBeaconInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getBeaconInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.setEddystoneInfo = function (eddystoneInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_setEddystoneInfo = function (eddystoneInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.getEddystoneInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getEddystoneInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.setWifiSoftAppInfo = function (wifiSoftAppInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getWifiSoftApp = function (wifiSoftAppInfo, error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.getWifiSoftAppInfo = function (error, context, callback) {
            };
            IImpl_SDK_HardwareSetup_NodeJs.prototype.promise_getWifiSoftAppInfo = function (error, context, callback) {
            };
            return IImpl_SDK_HardwareSetup_NodeJs;
        }());
        nm_transversalservices.IImpl_SDK_HardwareSetup_NodeJs = IImpl_SDK_HardwareSetup_NodeJs;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_HardwareSetup_NodeJs.js.map