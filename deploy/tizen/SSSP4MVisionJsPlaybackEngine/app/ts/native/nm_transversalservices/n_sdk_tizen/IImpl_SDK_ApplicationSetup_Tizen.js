define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_ApplicationSetup_Tizen = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_ApplicationSetup_Tizen(owner) {
                this._owner = owner;
            }
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_Tizen.prototype.installApplication = function (appServerProperties, error, context, callback) {
                var self = this;
                //self._owner._debug = true;
                var bReboot = appServerProperties.getReboot();
                var callbackConfigureApplicationUrl = function callbackConfigureApplicationUrl(ctx1) {
                    var setupOk = ctx1.getBoolResult();
                    if (!setupOk) {
                        if (self._owner._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : configureApplicationUrl Error:"
                                + ctx1.getError().error.getErrId() + ctx1.getError().error.getErrMsg() + "</p>";
                        }
                        if (error != null)
                            error.setError(ctx1.getError().error.getErrId(), ctx1.getError().error.getErrMsg());
                        if (context != null) {
                            context.setBoolResult(false);
                            context.setError(error);
                            callback(context);
                        }
                        return;
                    }
                    //----------- setup url Ok
                    context.setBoolResult(true);
                    if (self._owner._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : configureApplicationUrl ... OK</p>";
                    }
                    //---------------------------------
                    if (!bReboot) {
                        if (self._owner._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : No Reboot...Ok</p>";
                        }
                        if (context != null) {
                            context.setBoolResult(true);
                            context.setError(error);
                            callback(context);
                        }
                        return;
                    }
                    //-------------------------------------
                    var callbackReboot = function callbackReboot(ctx2) {
                        var rebootOk = ctx2.getBoolResult();
                        if (!rebootOk) {
                            if (self._owner._debug) {
                                document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : reboot Error 6092:"
                                    + ctx2.getError().error.getErrMsg() + "</p>";
                            }
                            if (error != null)
                                error.setError(ctx2.getError().error.getErrId(), ctx2.getError().error.getErrMsg());
                            if (context != null) {
                                context.setBoolResult(false);
                                context.setError(error);
                                callback(context);
                            }
                            return;
                        }
                        //------------------- rebootOk
                        if (self._owner._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : reboot... OK</p>";
                        }
                        if (context != null) {
                            context.setBoolResult(true);
                            context.setError(error);
                            callback(context);
                        }
                    };
                    //=============================
                    if (self._owner._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : reboot...</p>";
                    }
                    var aPowerProperties = self._owner._aServiceLocator._iEntityCreation.createDefaultPowerProperties(error);
                    aPowerProperties.setPowerCommand("reboot");
                    self._owner._iSDKPowerSetup.executePowerCommand(aPowerProperties, error, context, callbackReboot);
                };
                //==============================
                if (self._owner._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : configureApplicationUrl...</p>";
                }
                self.configureApplicationUrl(appServerProperties, error, context, callbackConfigureApplicationUrl);
            };
            //-----------------------------
            // Upgrade Application 
            //-----------------------------
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_Tizen.prototype.configureApplicationUrl = function (appServerProperties, error, context, callback) {
                var self = this;
                //self._owner._debug = true;
                var aSoftwareTransfer = appServerProperties.getSoftwareFileTransfer();
                var aSoftwareDstFileInfo = aSoftwareTransfer.getSrcFileInfo();
                var srcSoftwareUrlPath = aSoftwareDstFileInfo.getStorage() + aSoftwareDstFileInfo.getPath(); //dstStorageName + dstFolderName + dstFileName; 
                //var dstPathFullName = dstStorageName + dstFolderName;
                var bUsedEmptyUrl = appServerProperties.getUseAppEmptyUrl();
                if (bUsedEmptyUrl)
                    srcSoftwareUrlPath = "";
                context.setBoolResult(false);
                var onSuccess = function (val) {
                    console.log("[setURLLauncherAddress] success : " + val);
                    if (self._owner._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : setUrlLauncher ... OK</p>";
                    }
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null) {
                        callback(context);
                    }
                };
                var onError = function (err) {
                    console.log("[tizen:setURLLauncherAddress] code :" + err.code + " - " + err.name + " - " + err.message);
                    if (self._owner._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : setUrlLauncher...ERROR 6052:" + err.code + " - " + err.name + " - " + err.message + "</p>";
                    }
                    context.setBoolResult(false);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(6052, "SDK installApplication : setUrlLauncher error [6052]: " + err.code + " - " + err.name + " - " + err.message);
                    if (callback != null)
                        callback(context);
                };
                console.log("SDK installApplication : setUrlLauncher");
                if (self._owner._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : setUrlLauncher [" + srcSoftwareUrlPath + "]...</p>";
                }
                try {
                    //=========================================================
                    b2bapis.b2bcontrol.setURLLauncherAddress(srcSoftwareUrlPath, onSuccess, onError); //"http://10.88.43.36:8080/New2016/Test/", onSuccess, onError); 	
                }
                catch (err2) {
                    console.log("[tizen:setURLLauncherAddress] code :" + err2.code + " - " + err2.name + " - " + err2.message);
                    if (self._owner._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : setUrlLauncher...ERROR 6053:" + err2.code + " - " + err2.name + " - " + err2.message + "</p>";
                    }
                    context.setBoolResult(false);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(6052, "SDK installApplication : setUrlLauncher error [6053]: " + err2.code + " - " + err2.name + " - " + err2.message);
                    if (callback != null)
                        callback(context);
                }
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_Tizen.prototype.installApplication__ = function (appServerProperties, error, context, callback) {
                var self = this;
                //self._owner._debug = true;
                var aSoftwareTransfer = appServerProperties.getSoftwareFileTransfer();
                var aSoftwareDstFileInfo = aSoftwareTransfer.getDstFileInfo();
                var dstSoftwareFileFullName = aSoftwareDstFileInfo.getFullUrlName(); //dstStorageName + dstFolderName + dstFileName; 
                //var dstPathFullName = dstStorageName + dstFolderName; 
                context.setBoolResult(false);
                var onInstallation = {
                    onprogress: function (packageId, percentage) {
                        console.log("On installation(" + packageId + ") : progress(" + percentage + ")");
                    },
                    oncomplete: function (packageId) {
                        if (self._owner._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : install ... OK</p>";
                        }
                        console.log("Installation(" + packageId + ") Complete");
                        context.setBoolResult(true);
                        context.setError(error);
                        if (callback != null)
                            callback(context);
                    }
                };
                var onError = function (err3) {
                    console.log("Error occurred on installation : " + err3.name);
                    console.log("tizen:application-setup error [6052]: Cannot install application " + " : error [" + JSON.stringify(err3.name) + "]");
                    if (self._owner._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : install ERROR ... error [" + JSON.stringify(err3.name) + "]</p>";
                    }
                    context.setBoolResult(false);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(6052, "tizen:application-setup error [6052]: Cannot install application " + " : error [" + JSON.stringify(err3.name) + "]");
                    if (callback != null)
                        callback(context);
                };
                try {
                    if (self._owner._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : resolve  ..." + dstSoftwareFileFullName + "</p>";
                    }
                    // Let's assume that the "test.wgt" file exists in the downloads directory
                    tizen.filesystem.resolve(dstSoftwareFileFullName, //"downloads/test.wgt",
                    function (file) {
                        console.log("file URI : " + file.toURI());
                        if (self._owner._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : resolve ... OK</p>";
                            document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : install ... " + +file.toURI() + "</p>";
                        }
                        tizen.package.install(file.toURI(), onInstallation, onError);
                    }, function (err2) {
                        if (self._owner._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : resolve ERROR ... error [" + JSON.stringify(err2.name) + "]</p>";
                        }
                        console.log("tizen:application-setup error [6051]: Cannot resolve and open widget file" + " : error [" + JSON.stringify(err2.name) + "]");
                        context.setBoolResult(false);
                        context.setError(error);
                        if (context.getError() != null)
                            context.getError().setError(6051, "tizen:application-setup error [6051]: Cannot resolve and open widget file" + " : error [" + JSON.stringify(err2.name) + "]");
                        if (callback != null)
                            callback(context);
                    }, "r");
                }
                catch (err1) {
                    if (self._owner._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>SDK installApplication : resolve catch ERROR ... error [" + JSON.stringify(err1.name) + "]</p>";
                    }
                    console.log("tizen:application-setup error [6050]: Catch error trying to resolve and open widget file" + " : error [" + JSON.stringify(err1.name) + "]");
                    context.setBoolResult(false);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(6051, "tizen:application-setup error [6050]: Cannot resolve and open widget file" + " : error [" + JSON.stringify(err1.name) + "]");
                    if (callback != null)
                        callback(context);
                }
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_Tizen.prototype.uninstallApplication = function (appServerProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_Tizen.prototype.getAppProperties = function (appInstallProperties, error, context, callback) {
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_Tizen.prototype.setAppProperties = function (appServerProperties, error, context, callback) {
            };
            //-----------------------------
            // AppServer get/set Properties 
            //-----------------------------
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_Tizen.prototype.getAppServerProperties = function (appServerProperties, error, context, callback) {
                var self = this;
                console.log("SDK Application Setup : getUrlLauncher");
                if (self._owner._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>SDK getAppServerProperties : getUrlLauncher ...</p>";
                }
                var URLLauncherAddress = null;
                try {
                    URLLauncherAddress = b2bapis.b2bcontrol.getURLLauncherAddress();
                    appServerProperties.setAppServerUrl(URLLauncherAddress);
                    if (self._owner._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>SDK getAppServerProperties : getUrlLauncher()" + URLLauncherAddress + "</p>";
                    }
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null) {
                        callback(context);
                    }
                    return;
                    // -----------------------------  
                }
                catch (err2) {
                    console.log("[tizen:getURLLauncherAddress] code :" + err2.code + " - " + err2.name + " - " + err2.message);
                    if (self._owner._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>SDK getAppServerProperties error [7052]" + err2.code + " - " + err2.name + " - " + err2.message + "</p>";
                    }
                    context.setBoolResult(false);
                    context.setError(error);
                    if (context.getError() != null)
                        context.getError().setError(7052, "SDK installApplication : getAppServerProperties error [7052]: " + err2.code + " - " + err2.name + " - " + err2.message);
                    if (callback != null)
                        callback(context);
                }
            };
            //-------------------------------------
            IImpl_SDK_ApplicationSetup_Tizen.prototype.setAppServerProperties = function (appServerProperties, error, context, callback) {
            };
            return IImpl_SDK_ApplicationSetup_Tizen;
        }());
        nm_transversalservices.IImpl_SDK_ApplicationSetup_Tizen = IImpl_SDK_ApplicationSetup_Tizen;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
/*

var B2BApisService = {

    getURLLauncher: function () {
        var URLLauncherAddress = null;
        try {
            URLLauncherAddress = b2bapis.b2bcontrol.getURLLauncherAddress();
        } catch (e) {
            logsComponent.log("[getURLLauncherAddress] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
        }
        if(null !== URLLauncherAddress){
            logsComponent.log("[getURLLauncherAddress] call syncFunction type: " + URLLauncherAddress);
        }
    },

    setURLLauncher: function () {
        var onSuccess = function(val) {
            logsComponent.log("[setURLLauncherAddress] success : " + val);
        }
        var onError = function(error) {
            logsComponent.log("[setURLLauncherAddress] code :" + error.code + " error name: " + error.name + " message " + error.message);
        }
        console.log("[setURLLauncherAddress] ");
        b2bapis.b2bcontrol.setURLLauncherAddress("http://10.88.43.36:8080/New2016/Test/", onSuccess, onError);
    },
    setURLLauncherTimeOut: function() {
        var onSuccess = function(val) {
            logsComponent.log("[setURLLauncherTimeOut] success : " + val);
        }
        var onError = function(error) {
            logsComponent.log("[setURLLauncherTimeOut] code :" + error.code + " error name: " + error.name + " message " + error.message);
        }
        b2bapis.b2bcontrol.setURLLauncherTimeOut("90SEC", onSuccess, onError);
    },
     getURLLauncherTimeOut: function () {
            var TIMEOUT = null;
            try {
                TIMEOUT = b2bapis.b2bcontrol.getURLLauncherTimeOut();
            } catch (e) {
                logsComponent.log("[getURLLauncherTimeOut] call syncFunction exception [" + e.code + "] name: " + e.name + " message: " + e.message);
            }
            if(null !== TIMEOUT){
                logsComponent.log("[getURLLauncherTimeOut] call syncFunction type: " + TIMEOUT);
            }
        },

}
*/ 
//# sourceMappingURL=IImpl_SDK_ApplicationSetup_Tizen.js.map