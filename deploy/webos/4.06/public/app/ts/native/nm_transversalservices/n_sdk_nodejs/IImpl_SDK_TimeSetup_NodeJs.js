define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var nm_transversalservices;
    (function (nm_transversalservices) {
        var IImpl_SDK_TimeSetup_NodeJs = /** @class */ (function () {
            //----------- constructor 
            function IImpl_SDK_TimeSetup_NodeJs(owner) {
                this._owner = owner;
            }
            //--------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.setTimeConvertor = function (aTimeZoneConvertor) {
            };
            IImpl_SDK_TimeSetup_NodeJs.prototype.setNTPServer = function (strServerUrl, error, context, callback) {
                if (context != null) {
                    context.setBoolResult(false);
                    context.setError(error);
                }
                callback != null && callback(context);
            };
            IImpl_SDK_TimeSetup_NodeJs.prototype.getNTPServer = function (error, context, callback) {
                if (context != null) {
                    context.setBoolResult(false);
                    context.setError(error);
                }
                callback != null && callback(context);
            };
            IImpl_SDK_TimeSetup_NodeJs.prototype.setUseNTP = function (bUse, error, context, callback) {
                if (context != null) {
                    context.setBoolResult(false);
                    context.setError(error);
                }
                callback != null && callback(context);
            };
            IImpl_SDK_TimeSetup_NodeJs.prototype.getUseNTP = function (error, context, callback) {
                if (context != null) {
                    context.setResult("not supported");
                    context.setError(error);
                }
                callback != null && callback(context);
            };
            //---------------------------------------
            //             CrtTime set/get
            //---------------------------------------
            //--------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.setCrtDateTime = function (crtDateTime, error, context, callback) {
                var _a, _b, _c;
                var self = this;
                var exec_module = null;
                var updateTimeCmd = null;
                try {
                    var d = new Date();
                    var localeDate = d.toLocaleDateString();
                    var day = d.getDate();
                    var month = d.getMonth() + 1;
                    var year = d.getFullYear();
                    var d1 = "", d2 = "", d3 = "";
                    if (localeDate.indexOf('.') > 0) {
                        _a = localeDate.split("."), d1 = _a[0], d2 = _a[1], d3 = _a[2];
                    }
                    else if (localeDate.indexOf('/') > 0) {
                        _b = localeDate.split("/"), d1 = _b[0], d2 = _b[1], d3 = _b[2];
                    }
                    else if (localeDate.indexOf('-') > 0) {
                        _c = localeDate.split("-"), d1 = _c[0], d2 = _c[1], d3 = _c[2];
                    }
                    var newDateFormat = "";
                    if (parseInt(d1) == year) { // YYYYMMDD
                        newDateFormat = crtDateTime.getYear() + "-" + crtDateTime.getMonth() + "-" + crtDateTime.getDay();
                    }
                    else if (parseInt(d1) == day) { // DDMMYYYY
                        newDateFormat = crtDateTime.getDay() + "-" + crtDateTime.getMonth() + "-" + crtDateTime.getYear();
                    }
                    else if (parseInt(d1) == month) { // MMDDYYYY
                        newDateFormat = crtDateTime.getMonth() + "-" + crtDateTime.getDay() + "-" + crtDateTime.getYear();
                    }
                    var newTime = crtDateTime.getHour() + ":" + crtDateTime.getMinutes() + ":" + crtDateTime.getSeconds() + ".00";
                    updateTimeCmd = "date " + newDateFormat + " & time " + newTime;
                    exec_module = require("child_process");
                }
                catch (e) {
                    error != null && error.setError(9040, "[Node.js] setCrtDateTime exception " + e.message);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                    return;
                }
                if (exec_module != null && typeof exec_module.exec === "function") {
                    exec_module.exec(updateTimeCmd, { timeout: 2000 }, function (err, stdout, stderr) {
                        if (err != null) {
                            error != null && error.setError(9040, "[Node.js] setCrtDateTime error " + err.message);
                        }
                        else {
                            self._owner._debug == true && console.log("[Node.js] set device time " + updateTimeCmd);
                        }
                        context != null && context.setError(error);
                        callback != null && callback(context);
                    });
                }
                else {
                    error != null && error.setError(9041, "[Node.js] setCrtDateTime error child_process module");
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            //--------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.promise_setCrtDateTime = function (crtDateTime, error, context, callback) {
            };
            //--------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.getCrtDateTime = function (error, context, callback) {
                if (callback == null)
                    return;
                var crtDate = new Date();
                if (context != null) {
                    context.setResult(crtDate.toString());
                    context.setError(error);
                }
                callback(context);
            };
            //---------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.promise_getCrtDateTime = function (error, context, callback) {
            };
            //--------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.getGoodCrtDateTime = function (error, context, callback) {
                return this._owner.getGoodCrtDateTime(error, context, callback);
            };
            //--------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.getSyncGoodCrtDateTime = function (error, context) {
                return this._owner.getSyncGoodCrtDateTime(error, context);
            };
            //---------------------------------------
            //             TimeZone set/get
            //---------------------------------------
            //---------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.setTimeZone = function (crtTimeZone, error, context, callback) {
                var windowsIANA = null;
                var exec_module = null;
                var strIANATimeZone = null;
                try {
                    strIANATimeZone = crtTimeZone.getIANAString();
                    windowsIANA = require("windows-iana");
                    exec_module = require("child_process");
                }
                catch (e) {
                    error != null && error.setError(9040, "[Node.js] setTimeZone exception " + e.message);
                    context != null && context.setError(error);
                    callback != null && callback(context);
                    return;
                }
                var arrayWindowsTimeZones = windowsIANA.findWindows(strIANATimeZone);
                var setTimeZoneCmd = null;
                if (Array.isArray(arrayWindowsTimeZones) && arrayWindowsTimeZones.length > 0) {
                    var strWindowsTimeZone = arrayWindowsTimeZones[0];
                    if (strWindowsTimeZone.length > 0) {
                        setTimeZoneCmd = "tzutil /s \"" + strWindowsTimeZone + "\"";
                    }
                }
                if (exec_module != null && typeof exec_module.exec === "function" && setTimeZoneCmd != null && setTimeZoneCmd.length > 0) {
                    exec_module.exec(setTimeZoneCmd, function (err, stdout, stderr) {
                        if (err != null) {
                            error != null && error.setError(9042, "[Node.js] setTimeZone error " + err.message);
                        }
                        context != null && context.setError(error);
                        callback != null && callback(context);
                    });
                }
                else {
                    error != null && error.setError(9041, "[Node.js] setTimeZone error windows-iana return value");
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            //----------------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.promise_setTimeZone = function (crtTimeZone, error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.getTimeZone = function (error, context, callback) {
                if (callback == null)
                    return;
                var self = this;
                var getTimeZoneCmd = "tzutil /g";
                var exec_module = null;
                var windowsIANA = null;
                try {
                    exec_module = require("child_process");
                    windowsIANA = require("windows-iana");
                }
                catch (e) {
                    error != null && error.setError(9043, "[Node.js] getTimeZone exception " + e.message);
                    context != null && context.setError(error);
                    return callback(context);
                }
                if (exec_module != null && typeof exec_module.exec === "function") {
                    exec_module.exec(getTimeZoneCmd, function (err, stdout, stderr) {
                        if (err != null) {
                            error != null && error.setError(9044, "[Node.js] getTimeZone error " + err.message);
                        }
                        else {
                            if (context != null) {
                                var strWindowsTime = stdout.toString();
                                if (strWindowsTime.length > 0) {
                                    var arrayIANATimeZones = windowsIANA.findIana(strWindowsTime);
                                    if (Array.isArray(arrayIANATimeZones) && arrayIANATimeZones.length > 0) {
                                        var strIANATimeZone = arrayIANATimeZones[0];
                                        if (strIANATimeZone.length > 0) {
                                            var aTimeZone = self._owner._aServiceLocator._iEntityCreation.createDefaultTimeZone(error);
                                            var _a = strIANATimeZone.split('/'), continent = _a[0], country = _a[1], city = _a[2];
                                            continent != null && aTimeZone.setContinent(continent);
                                            country != null && aTimeZone.setCountry(country);
                                            city != null && aTimeZone.setCity(city);
                                            context.setObjectResult(aTimeZone);
                                        }
                                    }
                                    else {
                                        error != null && error.setError(9045, "[Node.js] getTimeZone error windows-iana return value");
                                    }
                                }
                                else {
                                    error != null && error.setError(9046, "[Node.js] getTimeZone error tzutil command returned empty value");
                                }
                            }
                        }
                        context && context.setError(error);
                        callback != null && callback(context);
                    });
                }
                else {
                    error != null && error.setError(9047, "[Node.js] getTimeZone error child_process module");
                    context != null && context.setError(error);
                    callback != null && callback(context);
                }
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.promise_getTimeZone = function (error, context, callback) {
            };
            //-----------------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.getTimeZoneOffset = function (aTimeZone, error, context, callback) {
                try {
                    var strIANATimeZone = aTimeZone.getIANAString();
                    if (strIANATimeZone.length > 0) {
                        var moment = require('moment-timezone');
                        var timezoneOffset = moment().tz(strIANATimeZone).format('Z');
                        var _a = timezoneOffset.split(':'), strHours = _a[0], strMinutes = _a[1];
                        var nHours = (strHours != null) ? parseInt(strHours) : 0;
                        var nMinutes = (strMinutes != null) ? parseInt(strMinutes) : 0;
                        if (nHours >= -12 && nHours <= 14 && nMinutes >= 0 && nMinutes <= 59) {
                            var offsetMinutes = nHours * 60;
                            offsetMinutes += (nHours > 0) ? nMinutes : (-1) * nMinutes;
                            context != null && context.setIntResult(offsetMinutes);
                        }
                        else {
                            error != null && error.setError(9043, "[Node.js] getTimeZoneOffset: could not get timezone offset for " + strIANATimeZone);
                        }
                    }
                    else {
                        error != null && error.setError(9044, "[Node.js] getTimeZoneOffset: invalid timezone input");
                    }
                }
                catch (e) {
                    error != null && error.setError(9045, "[Node.js] getTimeZoneOffset exception " + e.message);
                }
                context != null && context.setError(error);
                callback != null && callback(context);
            };
            //-------------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.getTimeZoneList = function (error, context, callback) {
            };
            //--------------------------------
            IImpl_SDK_TimeSetup_NodeJs.prototype.promise_getTimeZoneList = function (error, context, callback) {
            };
            return IImpl_SDK_TimeSetup_NodeJs;
        }());
        nm_transversalservices.IImpl_SDK_TimeSetup_NodeJs = IImpl_SDK_TimeSetup_NodeJs;
    })(nm_transversalservices = exports.nm_transversalservices || (exports.nm_transversalservices = {}));
});
//# sourceMappingURL=IImpl_SDK_TimeSetup_NodeJs.js.map