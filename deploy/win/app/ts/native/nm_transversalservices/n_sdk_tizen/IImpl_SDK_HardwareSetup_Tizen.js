"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_HardwareSetup_Tizen = (function () {
        function IImpl_SDK_HardwareSetup_Tizen(owner) {
            this._owner = owner;
        }
        IImpl_SDK_HardwareSetup_Tizen.prototype.startWps = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_startWps = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.stopWps = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_stopWps = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.getWifiList = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getWifiList = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.connectWifi = function (wifiConnectionInfo, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_connectWifi = function (wifiConnectionInfo, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.setNewtworkInfo = function (networkProperties, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_setNewtworkInfo = function (networkProperties, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.getNewtworkInfo = function (error, context, callback) {
            if (callback == null)
                return;
            var errCreatenetworkProps = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var networkProperties = this._owner._aServiceLocator._iEntityCreation.createDefaultNetworkProperties(errCreatenetworkProps);
            var macAddress = null;
            var ipAddress = null;
            var ipMode = null;
            var networkType = null;
            try {
                macAddress = webapis.network.getMac();
                ipAddress = webapis.network.getIp();
                ipMode = webapis.network.getIpMode();
                networkType = webapis.network.getActiveConnectionType();
                if (networkType != null) {
                    switch (networkType) {
                        case webapis.network.NetworkActiveConnectionType.WIFI:
                            networkProperties.getWifiNetCardProperties().setEnable(true);
                            macAddress != null && networkProperties.getWifiNetCardProperties().setMacAddress(macAddress);
                            ipAddress != null && networkProperties.getWifiNetCardProperties().setIpAddress(ipAddress);
                            ipMode != null && ipMode === webapis.network.NetworkIpMode.DYNAMIC && networkProperties.getWifiNetCardProperties().setDynamic(true);
                            var wifiSignalStrength = webapis.network.getWiFiSignalStrengthLevel();
                            if (wifiSignalStrength) {
                                var signalPercent = wifiSignalStrength * 20;
                                var signalPower = (10 - wifiSignalStrength) * 10;
                                var signalStrength = "Connected, " + signalPercent.toString() + "% (-" + signalPower.toString() + " dBm)";
                                networkProperties.getWifiConnInfo().setWifiSignalLevel(signalStrength);
                            }
                            context != null && context.setObjectResult(networkProperties);
                            break;
                        case webapis.network.NetworkActiveConnectionType.ETHERNET:
                            networkProperties.getWiredNetCardProperties().setEnable(true);
                            macAddress != null && networkProperties.getWiredNetCardProperties().setMacAddress(macAddress);
                            ipAddress != null && networkProperties.getWiredNetCardProperties().setIpAddress(ipAddress);
                            ipMode != null && ipMode === webapis.network.NetworkIpMode.DYNAMIC && networkProperties.getWiredNetCardProperties().setDynamic(true);
                            context != null && context.setObjectResult(networkProperties);
                            break;
                        default:
                            error != null && error.setError(9094, "[Tizen] getNewtworkInfo error: not WiFi or Ethernet network type " + networkType);
                            return;
                    }
                }
                else {
                    error != null && error.setError(9094, "[Tizen] getNewtworkInfo error unknown network type");
                }
            }
            catch (e) {
                error != null && error.setError(9094, "[Tizen] getNewtworkInfo exception " + e.message);
            }
            context != null && context.setError(error);
            callback(context);
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getNewtworkInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.setNewtworkProxyInfo = function (networkProperties, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_setNewtworkProxyInfo = function (networkProperties, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.getNewtworkProxyInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getNewtworkProxyInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.getMacAddress = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getMacAddress = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.getPlatformInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getPlatformInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.getSystemUsageInfo = function (error, context, callback) {
            if (callback == null)
                return;
            var self = this;
            var errCreateUsageInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
            var memoryInfo = this._owner._aServiceLocator._iEntityCreation.createDefaultSystemUsageInfo(errCreateUsageInfo);
            function onStorage(storageData) {
                if (storageData && storageData.units) {
                    var storageTypes = {};
                    for (var i in storageData.units) {
                        var storageUnit = storageData.units[i];
                        if (storageUnit != null) {
                            var storageInfo = self._owner._aServiceLocator._iEntityCreation.createDefaultSystemStorageInfo(error);
                            if (storageUnit.type != null) {
                                var storageType = storageUnit.type.toString();
                                var storageTypeValue = storageType === "INTERNAL" ? "Internal" : "External";
                                if (storageType in storageTypes) {
                                    storageTypes[storageType]++;
                                    storageTypeValue += " " + storageTypes[storageType];
                                }
                                else {
                                    storageTypes[storageType] = 0;
                                    if (storageType === "USB_DEVICE" || storageType === "USB_HOST") {
                                        storageTypeValue += " [MAIN]";
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
                }
                else {
                    error != null && error.setError(9091, "[Tizen] getSystemUsageInfo error getting system usage info");
                }
                context != null && context.setError(error);
                callback(context);
            }
            function onStorageError(e) {
                error != null && error.setError(9046, "[Tizen]: getSystemUsageInfo error " + e.message);
                context != null && context.setError(error);
                callback(context);
            }
            try {
                var totalMem = tizen.systeminfo.getTotalMemory();
                var availableMem = tizen.systeminfo.getAvailableMemory();
                memoryInfo.setTotalMemory(totalMem);
                memoryInfo.setAvailableMemory(availableMem);
            }
            catch (e) { }
            try {
                tizen.systeminfo.getPropertyValue('STORAGE', onStorage, onStorageError);
            }
            catch (e) {
                error != null && error.setError(9045, "[Tizen]: getSystemUsageInfo exception " + e.message);
                context != null && context.setError(error);
                callback(context);
            }
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getSystemUsageInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.getCPUInfo = function (error, context, callback) {
            if (callback == null)
                return;
            function onCPUInfo(cpuInfo) {
                var cores = new Array();
                if (cpuInfo != null && cpuInfo.load != null) {
                    var cpuLoad = cpuInfo.load * 100;
                    cores.push(Math.floor(cpuLoad));
                    context != null && context.setArrayResult(cores);
                }
                else {
                    error != null && error.setError(9094, "[Tizen]: getCPUInfo error getting CPU info");
                }
                context != null && context.setError(error);
                callback(context);
            }
            function onCPUInfoError(e) {
                error != null && error.setError(9097, "[Tizen]: getCPUInfo error " + e.message);
                context != null && context.setError(error);
                callback(context);
            }
            try {
                tizen.systeminfo.getPropertyValue('CPU', onCPUInfo, onCPUInfoError);
            }
            catch (e) {
                error != null && error.setError(9094, "[Tizen]: getCPUInfo exception " + e.message);
                context != null && context.setError(error);
                callback(context);
            }
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getCPUInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.getSerialNumber = function (error, context, callback) {
            if (callback == null)
                return;
            try {
                var serialNumber = b2bapis.b2bcontrol.getSerialNumber();
                serialNumber != null && context != null && context.setResult(serialNumber);
            }
            catch (err) {
                error != null && error.setError(9095, "[Tizen]: getSerialNumber error " + err.message);
            }
            context != null && context.setError(error);
            callback(context);
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getSerialNumber = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.setBeaconInfo = function (beaconInfo, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_setBeaconInfo = function (beaconInfo, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.getBeaconInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getBeaconInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.setEddystoneInfo = function (eddystoneInfo, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_setEddystoneInfo = function (eddystoneInfo, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.getEddystoneInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getEddystoneInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.setWifiSoftAppInfo = function (wifiSoftAppInfo, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getWifiSoftApp = function (wifiSoftAppInfo, error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.getWifiSoftAppInfo = function (error, context, callback) {
        };
        IImpl_SDK_HardwareSetup_Tizen.prototype.promise_getWifiSoftAppInfo = function (error, context, callback) {
        };
        return IImpl_SDK_HardwareSetup_Tizen;
    }());
    nm_transversalservices.IImpl_SDK_HardwareSetup_Tizen = IImpl_SDK_HardwareSetup_Tizen;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_HardwareSetup_Tizen.js.map