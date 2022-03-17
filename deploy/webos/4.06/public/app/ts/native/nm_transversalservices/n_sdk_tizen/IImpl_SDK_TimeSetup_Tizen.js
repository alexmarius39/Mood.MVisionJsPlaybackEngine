define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /* INFO
    Other than the day parameter, which begins from 1, all parameters of the TZDate constructor begin from 0.
    This implies that, for the months of a year, the value for January is 0, for February, it is 1, and for December, it is 11.
    Therefore it may be convenient to add 1 to the returned value of tizen.time.TZDate.getMonth() method.
    */
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_TimeSetup_Tizen = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_TimeSetup_Tizen(owner) {
                this._owner = owner;
                this._crtTimeZoneOffset = -1;
                this._prevTimeZoneOffset = -1;
                this._bReboot = false;
                this._bUseNTP = false;
            }
            //--------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.setTimeConvertor = function (aTimeZoneConvertor) {
                this._aTimezoneConvertor = aTimeZoneConvertor;
            };
            //--------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.setNTPServer = function (strServerUrl, error, context, callback) {
                var onNTPServerSuccess = function (val) {
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                var onNTPServerError = function (err) {
                    error != null && error.setError(9054, "[Tizen]: setNTPServer error " + err.name);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                try {
                    b2bapis.b2bcontrol.setNTPServerAddress(strServerUrl, onNTPServerSuccess, onNTPServerError);
                }
                catch (e) {
                    error != null && error.setError(9054, "[Tizen]: setNTPServer exception " + e.message);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            IImpl_SDK_TimeSetup_Tizen.prototype.getNTPServer = function (error, context, callback) {
                if (callback == null)
                    return;
                try {
                    var NTPServerAddress = b2bapis.b2bcontrol.getNTPServerAddress();
                    NTPServerAddress != null && context != null && context.setResult(NTPServerAddress);
                }
                catch (e) {
                    error != null && error.setError(9053, "[Tizen]: getNTPServer exception " + e.message);
                }
                context != null && context.setError(error);
                callback(context);
            };
            IImpl_SDK_TimeSetup_Tizen.prototype.setUseNTP = function (bUse, error, context, callback) {
                var self = this;
                var onNTPUseSuccess = function (val) {
                    self._bUseNTP = bUse;
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                var onNTPUseError = function (err) {
                    error != null && error.setError(9057, "[Tizen]: onNTPUseError error " + err.name);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                try {
                    b2bapis.b2bcontrol.setNTPUse(bUse ? "USE" : "UNUSE", onNTPUseSuccess, onNTPUseError);
                }
                catch (e) {
                    error != null && error.setError(9054, "[Tizen]: setUseNTP exception " + e.message);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            IImpl_SDK_TimeSetup_Tizen.prototype.getUseNTP = function (error, context, callback) {
                if (callback == null)
                    return;
                this._bUseNTP = false;
                try {
                    var NTPUse = b2bapis.b2bcontrol.getNTPUse();
                    if (NTPUse == "USE") {
                        this._bUseNTP = true;
                        context != null && context.setBoolResult(true);
                    }
                    else if (NTPUse == "UNUSE") {
                        context != null && context.setBoolResult(false);
                    }
                    else {
                        error != null && error.setError(9057, "[Tizen]: getUseNTP returned " + NTPUse);
                    }
                }
                catch (e) {
                    error != null && error.setError(9056, "[Tizen]: getUseNTP exception " + e.message);
                }
                context != null && context.setError(error);
                callback(context);
            };
            //---------------------------------------
            //             CrtTime set/get
            //---------------------------------------
            //--------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.setCrtDateTime = function (crtDateTime, error, context, callback) {
                var onSetTimeSuccess = function (val) {
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                var onSetTimeError = function (err) {
                    error != null && error.setError(9042, "[Tizen]: setCrtDateTime error " + err.name);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                try {
                    b2bapis.b2bcontrol.setCurrentTime(crtDateTime.getYear() + ":" + crtDateTime.getMonth() + ":" + crtDateTime.getDay() + ":" + crtDateTime.getHour() + ":" + crtDateTime.getMinutes() + ":" + crtDateTime.getSeconds(), onSetTimeSuccess, onSetTimeError);
                }
                catch (e) {
                    error != null && error.setError(9043, "[Tizen]: setCrtDateTime exception " + e.message);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            //--------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.promise_setCrtDateTime = function (crtDateTime, error, context, callback) {
            };
            //--------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.getCrtDateTime = function (error, context, callback) {
                if (callback == null)
                    return;
                try {
                    var currentTime = b2bapis.b2bcontrol.getCurrentTime();
                    document.getElementById("rend.message").innerHTML += "<p>MESSAGE: MAIN - SYNC Crt Date is: " + currentTime + "</p>";
                    var dateInfo = currentTime.split(":");
                    if (dateInfo.length < 1 || dateInfo.length > 6) {
                        error != null && error.setError(9032, "[Tizen] getCrtDateTime error cannot get date with getCurrentTime()");
                    }
                    else {
                        var date = new Date(parseInt(dateInfo[0]), parseInt(dateInfo[1]) - 1, parseInt(dateInfo[2]), parseInt(dateInfo[3]), parseInt(dateInfo[4]), parseInt(dateInfo[5]));
                        context != null && context.setResult(date.toString());
                    }
                }
                catch (e) {
                    error != null && error.setError(9032, "[Tizen] getCrtDateTime error " + e.message);
                }
                context != null && context.setError(error);
                callback(context);
            };
            //---------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.promise_getCrtDateTime = function (error, context, callback) {
            };
            //--------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.getGoodCrtDateTime = function (error, context, callback) {
                return this._owner.getGoodCrtDateTime(error, context, callback);
            };
            //----------------------- 
            IImpl_SDK_TimeSetup_Tizen.prototype.call_reboot = function (error, context, callback) {
                //-------------------------------------
                var callbackReboot = function callbackReboot(ctx2) {
                    //var rebootOk = ctx2.getBoolResult();
                };
                //=============================
                var aError = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
                var aContext = this._owner._aServiceLocator._iEntityCreation.createDefaultContext();
                var aPowerProperties = this._owner._aServiceLocator._iEntityCreation.createDefaultPowerProperties(aError);
                // ---
                aPowerProperties.setPowerCommand("reboot");
                this._owner._iSDKPowerSetup.executePowerCommand(aPowerProperties, aError, aContext, callbackReboot);
            };
            //--------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.getSyncGoodCrtDateTime = function (error, context) {
                try {
                    var currentTime = b2bapis.b2bcontrol.getCurrentTime();
                    var dateInfo = currentTime.split(":");
                    if (dateInfo.length < 1 || dateInfo.length > 6) {
                        if (error != null)
                            error.setError(9032, "[Tizen] getCrtDateTime error cannot get date with getCurrentTime()");
                        if (context != null)
                            context.setError(error);
                        return null;
                    }
                    var date = new Date(parseInt(dateInfo[0]), parseInt(dateInfo[1]) - 1, parseInt(dateInfo[2]), parseInt(dateInfo[3]), parseInt(dateInfo[4]), parseInt(dateInfo[5]));
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
                    this._crtTimeZoneOffset = date.getTimezoneOffset();
                    if ((this._crtTimeZoneOffset != -1) && (this._prevTimeZoneOffset != -1)) {
                        if (this._prevTimeZoneOffset != this._crtTimeZoneOffset) {
                            this._bReboot = true;
                        }
                    }
                    if (this._bReboot == true) {
                        //document.getElementById("rend.message").innerHTML += "<p>========================================> REBOOT </p>";
                        this.call_reboot(null, null, null);
                    }
                    context != null && context.setResult(date.toString());
                    return date;
                }
                catch (err) {
                    if (error != null)
                        error.setError(9032, "[Tizen] getCrtDateTime error " + err.message);
                    if (context != null)
                        context.setError(error);
                    return null;
                }
            };
            //---------------------------------------
            //             TimeZone set/get
            //---------------------------------------
            //---------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.setTimeZone = function (crtTimeZone, error, context, callback) {
                var self = this;
                var onSetTimeSuccess = function (val) {
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                var onSetTimeError = function (err) {
                    error != null && error.setError(9041, "[Tizen]: setTimeZone error " + err.name);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                };
                var strTimezone = crtTimeZone.getIANAString();
                var supportedTimezone = self._aTimezoneConvertor.getNativeTZ(strTimezone);
                if (supportedTimezone != null && supportedTimezone.length > 0) {
                    try {
                        b2bapis.b2bcontrol.setCurrentTimeZone(supportedTimezone, onSetTimeSuccess, onSetTimeError);
                    }
                    catch (e) {
                        error != null && error.setError(9052, "[Tizen]: setTimeZone exception " + e.message);
                        context != null && context.setError(error);
                        callback != null && callback(context);
                    }
                }
                else {
                    error != null && error.setError(9053, "[Tizen]: setTimeZone " + strTimezone + " not in available timezones");
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            //----------------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.promise_setTimeZone = function (crtTimeZone, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.getTimeZone = function (error, context, callback) {
                if (callback == null)
                    return;
                var self = this;
                var strTizenTimeZone = "";
                try {
                    var strTimezone = "";
                    if (self._bUseNTP === true) {
                        strTizenTimeZone = b2bapis.b2bcontrol.getCurrentTimeZone();
                        strTimezone = self._aTimezoneConvertor.getMoodTZ(strTizenTimeZone);
                    }
                    else {
                        strTizenTimeZone = tizen.time.getLocalTimezone();
                        strTimezone = strTizenTimeZone;
                    }
                    if (strTimezone != null && strTimezone.length > 0) {
                        var errCreateTimeZone = this._owner._aServiceLocator._iEntityCreation.createDefaultError();
                        var aTimeZone = self._owner._aServiceLocator._iEntityCreation.createDefaultTimeZone(errCreateTimeZone);
                        var _a = strTimezone.split('/'), continent = _a[0], country = _a[1], city = _a[2];
                        continent != null && aTimeZone.setContinent(continent);
                        country != null && aTimeZone.setCountry(country);
                        city != null && aTimeZone.setCity(city);
                        context != null && context.setObjectResult(aTimeZone);
                    }
                    else {
                        error != null && error.setError(9045, "[Tizen] getTimeZone " + strTizenTimeZone + " not in available timezones");
                    }
                }
                catch (e) {
                    error != null && error.setError(9046, "[Tizen] getTimeZone " + strTizenTimeZone + " error " + e.message);
                }
                context != null && context.setError(error);
                callback(context);
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.promise_getTimeZone = function (error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.getTimeZoneOffset = function (aTimeZone, error, context, callback) {
                if (callback == null)
                    return;
                try {
                    var strIANATimeZone = aTimeZone.getIANAString();
                    if (strIANATimeZone.length > 0) {
                        var crtDate = tizen.time.getCurrentDateTime();
                        var timezoneData = crtDate.toTimezone(strIANATimeZone);
                        var secondsFromUTC = timezoneData.secondsFromUTC();
                        var offsetMinutes = (-1) * secondsFromUTC / 60;
                        if (!isNaN(offsetMinutes) && offsetMinutes >= (-12) * 60 && offsetMinutes <= 14 * 60) {
                            context != null && context.setIntResult(offsetMinutes);
                        }
                        else {
                            error != null && error.setError(9036, "[Tizen] getTimeZoneOffset: could not get timezone offset for " + strIANATimeZone);
                        }
                    }
                    else {
                        error != null && error.setError(9037, "[Tizen] getTimeZoneOffset: invalid timezone input");
                    }
                }
                catch (e) {
                    error != null && error.setError(9038, "[Tizen] getTimeZoneOffset error " + e.message);
                }
                context != null && context.setError(error);
                callback(context);
            };
            //-------------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.getTimeZoneList = function (error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_TimeSetup_Tizen.prototype.promise_getTimeZoneList = function (error, context, callback) {
            };
            return IImpl_SDK_TimeSetup_Tizen;
        }());
        nm_transversalservices.IImpl_SDK_TimeSetup_Tizen = IImpl_SDK_TimeSetup_Tizen;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_TimeSetup_Tizen.js.map