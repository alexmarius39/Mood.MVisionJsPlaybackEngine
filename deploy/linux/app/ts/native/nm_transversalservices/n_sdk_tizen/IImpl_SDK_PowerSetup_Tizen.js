"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nm_transversalservices;
(function (nm_transversalservices) {
    var IImpl_SDK_PowerSetup_Tizen = (function () {
        function IImpl_SDK_PowerSetup_Tizen(owner) {
            this._owner = owner;
        }
        IImpl_SDK_PowerSetup_Tizen.prototype.setPowerSaveMode = function (powerSaveMode, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_setPowerSaveMode = function (failureModeInfo, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.getPowerSaveMode = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_getPowerSaveMode = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.executePowerCommand = function (powerProperties, error, context, callback) {
            var self = this;
            var powerCommand = powerProperties.getPowerCommand();
            if (powerCommand == "reboot")
                return self.reboot(powerProperties, error, context, callback);
            else if (powerCommand == "shutdown")
                return self.shutdown(powerProperties, error, context, callback);
            if (self._owner._debug) {
                document.getElementById("rend.message").innerHTML += "<p>SDK executePowerCommand : invalid command ... ERROR</p>";
            }
            context.setBoolResult(false);
            if (error != null) {
            }
            context.setError(error);
            if (callback != null) {
                callback(context);
            }
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.reboot = function (powerProperties, error, context, callback) {
            var self = this;
            context.setBoolResult(false);
            var onSuccess = function (val) {
                console.log("SDK PowerSetup : reboot" + val);
                if (self._owner._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : reboot ... OK</p>";
                }
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null) {
                    callback(context);
                }
            };
            var onError = function (err) {
                console.log("SDK PowerSetup : reboot ... ERROR:" + err.code + " - " + err.name + " - " + err.message);
                if (self._owner._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : reboot ... ERROR 6072:" + err.code + " - " + err.name + " - " + err.message + "</p>";
                }
                context.setBoolResult(false);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(6062, "SDK PowerSetup : reboot ... ERROR [6072]: " + err.code + " - " + err.name + " - " + err.message);
                if (callback != null)
                    callback(context);
            };
            console.log("SDK PowerSetup : reboot ...");
            if (self._owner._debug) {
                document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : reboot ...</p>";
            }
            try {
                b2bapis.b2bcontrol.rebootDevice(onSuccess, onError);
            }
            catch (err2) {
                console.log("SDK PowerSetup : reboot ... ERROR 6063:" + err2.code + " - " + err2.name + " - " + err2.message);
                if (self._owner._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : reboot ... ERROR 6073:" + err2.code + " - " + err2.name + " - " + err2.message + "</p>";
                }
                context.setBoolResult(false);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(6073, "SDK PowerSetup : reboot ... ERROR 6073:" + err2.code + " - " + err2.name + " - " + err2.message);
                if (callback != null)
                    callback(context);
            }
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.shutdown = function (powerProperties, error, context, callback) {
            var self = this;
            context.setBoolResult(false);
            var onSuccess = function (val) {
                console.log("SDK PowerSetup : shutdown" + val);
                if (self._owner._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : shutdown ... OK</p>";
                }
                context.setBoolResult(true);
                context.setError(error);
                if (callback != null) {
                    callback(context);
                }
            };
            var onError = function (err) {
                console.log("SDK PowerSetup : shutdown ... ERROR:" + err.code + " - " + err.name + " - " + err.message);
                if (self._owner._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : shutdown ... ERROR 6062:" + err.code + " - " + err.name + " - " + err.message + "</p>";
                }
                context.setBoolResult(false);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(6062, "SDK PowerSetup : shutdown ... ERROR [6062]: " + err.code + " - " + err.name + " - " + err.message);
                if (callback != null)
                    callback(context);
            };
            console.log("SDK PowerSetup : shutdown ...");
            if (self._owner._debug) {
                document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : shutdown ...</p>";
            }
            try {
                b2bapis.b2bcontrol.setPowerOff(onSuccess, onError);
            }
            catch (err2) {
                console.log("SDK PowerSetup : shutdown ... ERROR 6063:" + err2.code + " - " + err2.name + " - " + err2.message);
                if (self._owner._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>SDK PowerSetup : shutdown ... ERROR 6063:" + err2.code + " - " + err2.name + " - " + err2.message + "</p>";
                }
                context.setBoolResult(false);
                context.setError(error);
                if (context.getError() != null)
                    context.getError().setError(6063, "SDK PowerSetup : shutdown ... ERROR 6063:" + err2.code + " - " + err2.name + " - " + err2.message);
                if (callback != null)
                    callback(context);
            }
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_executePowerCommand = function (powerProperties, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.setPowerMngMode = function (powerProperties, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_setPowerMngMode = function (powerProperties, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.getPowerMngMode = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_getPowerMngMode = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.setPowerOnDelayTime = function (powerProperties, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_setPowerOnDelayTime = function (powerProperties, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.getPowerOnDelayTime = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_getPowerOnDelayTime = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.setDisplayPowerMngMode = function (powerProperties, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_setDisplayPowerMngMode = function (powerProperties, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.getDisplayPowerMngMode = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_getDisplayPowerMngMode = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.setDisplayPowerMngWakeupSignal = function (powerProperties, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_setDisplayPowerMngWakeupSignal = function (powerProperties, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.getDisplayPowerMngWakeupSignal = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_getDisplayPowerMngWakeupSignal = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.setWakeOnLan = function (powerProperties, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_setWakeOnLan = function (powerProperties, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.getWakeOnLan = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_getWakeOnLan = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.addOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_addOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.addOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_addOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.deleteOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_deleteOffDeviceTimer = function (deviceTimerInfo, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.deleteOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_deleteOnDeviceTimer = function (deviceTimerInfo, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.getOffDeviceTimerList = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_getOffDeviceTimerList = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.getOnDeviceTimerList = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_getOnDeviceTimerList = function (error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.enableAllOffDeviceTimers = function (enable, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_enableAllOffDeviceTimers = function (enable, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.enableAllOnDeviceTimers = function (enable, error, context, callback) {
        };
        IImpl_SDK_PowerSetup_Tizen.prototype.promise_enableAllOnDeviceTimers = function (enable, error, context, callback) {
        };
        return IImpl_SDK_PowerSetup_Tizen;
    }());
    nm_transversalservices.IImpl_SDK_PowerSetup_Tizen = IImpl_SDK_PowerSetup_Tizen;
})(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
//# sourceMappingURL=IImpl_SDK_PowerSetup_Tizen.js.map