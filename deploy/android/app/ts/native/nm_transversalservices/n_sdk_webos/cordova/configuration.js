Configuration = (function () { var e, a; function d(f) { } if (typeof window === "object") {
    cordova.define("cordova/plugin/configuration", function (g, f, h) { e = function () { }; if (window.PalmSystem) {
        d("Window.PalmSystem Available");
        a = g("cordova/plugin/webos/service");
    }
    else {
        a = { Request: function (i, j) { d(i + " invoked. But I am a dummy because PalmSystem is not available"); if (typeof j.onFailure === "function") {
                j.onFailure({ returnValue: false, errorText: "PalmSystem Not Available. Cordova is not installed?" });
            } } };
    } h.exports = e; });
    e = cordova.require("cordova/plugin/configuration");
}
else {
    e = function (f) { a = f; a.Request = function (g, i) { var h = g + "/" + i.method; var j = {}; if (i.hasOwnProperty("parameters") === true) {
        j = i.parameters;
    } var k = {}; var l = function (m) { console.log("res : " + JSON.stringify(m)); if (m.payload.returnValue === true) {
        k = m.payload;
        i.onSuccess(k);
    }
    else {
        k.returnValue = false;
        k.errorCode = m.payload.errorCode;
        k.errorText = m.payload.errorText;
        i.onFailure(k);
    } }; if (a) {
        a.call(h, j, l);
    } }; };
    module.exports = e;
} function b(g, h, f) { if (g.errorCode === undefined || g.errorCode === null) {
    g.errorCode = h;
} if (g.errorText === undefined || g.errorText === null) {
    g.errorText = f;
} } e.PictureMode = { VIVID: "vivid", STANDARD: "normal", APS: "eco", CINEMA: "cinema", GAME: "game", SPORTS: "sports", EXPERT1: "expert1", EXPERT2: "expert2" }; e.AppMode = { LOCAL: "local", USB: "usb", REMOTE: "remote" }; e.AppType = { IPK: "ipk", ZIP: "zip" }; e.prototype.setPictureMode = function (f, g, h) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "setPictureMode", parameters: h, onSuccess: function (i) { d("setPictureMode: On Success"); if (typeof f === "function") {
        f();
    } }, onFailure: function (i) { d("setPictureMode: On Failure"); delete i.returnValue; if (typeof g === "function") {
        b(i, "CSPP", "Configuration.setPictureMode returns failure.");
        g(i);
    } } }); }; e.prototype.getPictureMode = function (f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "getPictureMode", parameters: {}, onSuccess: function (h) { d("getPictureMode: On Success"); delete h.returnValue; if (typeof f === "function") {
        f(h);
    } }, onFailure: function (h) { d("getPictureMode: On Failure"); delete h.returnValue; if (typeof g === "function") {
        b(h, "CGPM", "Configuration.getPictureMode returns failure.");
        g(h);
    } } }); }; e.prototype.setPictureProperty = function (f, g, h) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "setPictureProperty", parameters: h, onSuccess: function (i) { d("setPictureProperty: On Success"); if (typeof f === "function") {
        f();
    } }, onFailure: function (i) { d("setPictureProperty: On Failure"); delete i.returnValue; if (typeof g === "function") {
        b(i, "CSPP", "Configuration.setPictureProperty returns failure.");
        g(i);
    } } }); }; e.prototype.getPictureProperty = function (f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "getPictureProperty", parameters: {}, onSuccess: function (h) { d("getPictureProperty: On Success"); delete h.returnValue; if (typeof f === "function") {
        f(h);
    } }, onFailure: function (h) { d("getPictureProperty: On Failure"); delete h.returnValue; if (typeof g === "function") {
        b(h, "CGPP", "Configuration.getPictureProperty returns failure.");
        g(h);
    } } }); }; var c = { alias: "signageName" }; e.prototype.setProperty = function (f, g, i) { d("setProperty: " + JSON.stringify(i)); var h = JSON.parse(i); var k = {}; var l = {}; c.alias = "deviceName"; l.category = "network"; for (var j in h) {
    if (c[j] !== undefined) {
        k[(c[j])] = h[j];
    }
} l.settings = k; a.Request("luna://com.webos.service.commercial.scapadapter/settings/", { method: "set", parameters: l, onSuccess: function (m) { d("setProperty: On Success"); if (m.returnValue === true) {
        if (typeof f === "function") {
            f();
        }
    } }, onFailure: function (m) { d("setProperty: On Failure"); delete m.returnValue; if (typeof g === "function") {
        b(m, "CSP", "Configuration.setProperty returns failure.");
        g(m);
    } } }); d("Configuration.setProperty Done"); }; e.prototype.getProperty = function (g, h, j) { d("getProperty: "); var i = JSON.parse(j); var l = i.keys; var m = {}; var f = []; c.alias = "deviceName"; m.category = "network"; for (var k in l) {
    if (k !== null && k !== undefined) {
        d("key" + l[k]);
        f.push(c[l[k]]);
    }
} m.keys = f; d(f); a.Request("luna://com.webos.service.commercial.scapadapter/settings/", { method: "get", parameters: m, onSuccess: function (n) { d("getProperty: On Success"); if (n.returnValue === true) {
        if (typeof g === "function") {
            var p = {};
            for (var o in l) {
                if (o !== null || o !== undefined) {
                    d("key" + l[o]);
                    if (n.settings[c[l[o]]] !== undefined || n.settings[c[l[o]]] !== null) {
                        p[l[o]] = n.settings[c[l[o]]];
                    }
                }
            }
            g(JSON.stringify(p));
        }
    } }, onFailure: function (n) { d("getProperty: On Failure"); delete n.returnValue; if (typeof h === "function") {
        b(n, "CGP", "Configuration.getProperty returns failure.");
        h(n);
    } } }); d("Configuration.getProperty Done"); }; e.prototype.setCurrentTime = function (f, g, h) { d("setCurrentTime: " + JSON.stringify(h)); var i = {}; i.year = h.year; i.month = h.month; i.day = h.day; i.hour = h.hour; i.minute = h.minute; i.sec = h.sec; a.Request("luna://com.webos.service.commercial.scapadapter/settings/", { method: "setSystemTime", parameters: { time: i, ntp: h.ntp, ntpServerAddress: h.ntpServerAddress }, onSuccess: function () { d("setCurrentTime: On Success"); if (typeof f === "function") {
        f();
    } }, onFailure: function (j) { d("setCurrentTime: On Failure"); delete j.returnValue; if (typeof g === "function") {
        b(j, "CSCT", "Configuration.setCurrentTime returns failure.");
        g(j);
    } } }); d("Configuration.setCurrentTime Done"); }; e.prototype.getCurrentTime = function (f, g) { d("getCurrentTime: "); a.Request("luna://com.webos.service.commercial.scapadapter/settings/", { method: "getSystemTime", parameters: {}, onSuccess: function (h) { d("getSystemTime: On Success"); delete h.returnValue; if (typeof f === "function") {
        f(h);
    } }, onFailure: function (h) { d("getSystemTime: On Failure"); delete h.returnValue; if (typeof g === "function") {
        g(h);
    } } }); d("Configuration.getCurrentTime Done"); }; e.prototype.restartApplication = function (f, g) { d("restartApp: "); a.Request("luna://com.webos.service.commercial.scapadapter/", { method: "restart_application", onSuccess: function (h) { d("restartApp: On Success"); if (typeof f === "function") {
        f(h);
    } }, onFailure: function (h) { d("restartApp: On Failure"); delete h.returnValue; if (typeof g === "function") {
        b(h, "CRA", "Configuration.restartApp returns failure.");
        g(h);
    } } }); d("Configuration.restartApp Done"); }; e.prototype.getServerProperty = function (f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "getServerProperty", parameters: {}, onSuccess: function (h) { delete h.returnValue; if (typeof f === "function") {
        f(h);
    } }, onFailure: function (h) { delete h.returnValue; if (typeof g === "function") {
        b(h, "CGSP", "Configuration.getServerProperty returns failure.");
        g(h);
    } } }); }; e.prototype.setServerProperty = function (f, g, h) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "setServerProperty", parameters: h, onSuccess: function (i) { if (i.returnValue === true) {
        if (typeof f === "function") {
            f();
        }
    } }, onFailure: function (i) { delete i.returnValue; if (typeof g === "function") {
        b(i, "CSSP", "Configuration.setServerProperty returns failure.");
        g(i);
    } } }); }; e.prototype.clearCache = function (f, g) { d("clearCache: "); a.Request("luna://com.webos.service.commercial.scapadapter/", { method: "clearCache", onSuccess: function (h) { d("clearCache: On Success"); if (typeof f === "function") {
        f();
    } }, onFailure: function (h) { d("clearCache: On Failure"); delete h.returnValue; if (typeof g === "function") {
        b(h, "CCC", "Configuration.clearCache returns failure.");
        g(h);
    } } }); d("Configuration.clearCache Done"); }; e.prototype.getTimeZoneList = function (f, g) { d("getTimeZoneList: "); a.Request("luna://com.webos.service.commercial.scapadapter/settings/", { method: "getTimeZoneList", onSuccess: function (h) { d("getTimeZoneList: On Success"); if (h.returnValue === true) {
        if (typeof f === "function") {
            delete h.returnValue;
            f(h);
        }
    } }, onFailure: function (h) { d("getTimeZoneList: On Failure"); delete h.returnValue; if (typeof g === "function") {
        b(h, "CGTL", "Configuration.getTimeZoneList returns failure.");
        g(h);
    } } }); d("Configuration.getTimeZoneList Done"); }; e.prototype.getTimeZone = function (f, g) { d("getTimeZone: "); a.Request("luna://com.webos.service.commercial.scapadapter/settings/", { method: "getTimeZone", onSuccess: function (h) { d("getTimeZone: On Success"); if (h.returnValue === true) {
        if (typeof f === "function") {
            delete h.returnValue;
            f(h);
        }
    } }, onFailure: function (h) { d("getTimeZone: On Failure"); delete h.returnValue; if (typeof g === "function") {
        b(h, "CGTZ", "Configuration.getTimeZone returns failure.");
        g(h);
    } } }); d("Configuration.getTimeZone Done"); }; e.prototype.setTimeZone = function (f, g, h) { a.Request("luna://com.webos.service.commercial.scapadapter/settings/", { method: "setTimeZone", parameters: h, onSuccess: function (i) { if (i.returnValue === true) {
        if (typeof f === "function") {
            delete i.returnValue;
            f(i);
        }
    } }, onFailure: function (i) { delete i.returnValue; if (typeof g === "function") {
        b(i, "CSTZ", "Configuration.setTimeZone returns failure.");
        g(i);
    } } }); }; e.prototype.debug = function (f, g, h) { d("debug: " + h.enabled); a.Request("luna://com.webos.service.commercial.scapadapter/", { method: "debug", parameters: { enabled: h.enabled }, onSuccess: function (i) { d("debug: On Success"); if (typeof f === "function") {
        f(i);
    } }, onFailure: function (i) { d("debug: On Failure"); delete i.returnValue; if (typeof g === "function") {
        b(i, "CD", "Configuration.debug returns failure.");
        g(i);
    } } }); d("Configuration.debug Done"); }; e.prototype.setUSBLock = function (f, g, h) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "setUSBLock", parameters: h, onSuccess: function (i) { if (i.returnValue === true) {
        if (typeof f === "function") {
            f();
        }
    } }, onFailure: function (i) { delete i.returnValue; if (typeof g === "function") {
        b(i, "CSUL", "Configuration.setUSBLock returns failure.");
        g(i);
    } } }); }; e.prototype.getUSBLock = function (f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "getUSBLock", parameters: {}, onSuccess: function (h) { delete h.returnValue; if (typeof f === "function") {
        f(h);
    } }, onFailure: function (h) { delete h.returnValue; if (typeof g === "function") {
        b(h, "CGUL", "Configuration.getUSBLock returns failure.");
        g(h);
    } } }); }; e.prototype.setOSDLock = function (f, g, h) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "setOSDLock", parameters: h, onSuccess: function (i) { if (i.returnValue === true) {
        if (typeof f === "function") {
            f();
        }
    } }, onFailure: function (i) { delete i.returnValue; if (typeof g === "function") {
        b(i, "CSOL", "Configuration.setOSDLock returns failure.");
        g(i);
    } } }); }; e.prototype.getOSDLock = function (f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "getOSDLock", parameters: {}, onSuccess: function (h) { delete h.returnValue; if (typeof f === "function") {
        f(h);
    } }, onFailure: function (h) { delete h.returnValue; if (typeof g === "function") {
        b(h, "CGOL", "Configuration.getOSDLock returns failure.");
        g(h);
    } } }); }; e.prototype.getLocaleList = function (f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "getLocaleList", parameters: {}, onSuccess: function (h) { d("getLocaleList: On Success"); delete h.returnValue; if (typeof f === "function") {
        f(h);
    } }, onFailure: function (h) { d("getLocaleList: On Failure"); delete h.returnValue; if (typeof g === "function") {
        b(h, "CGLL", "Configuration.getLocaleList returns failure.");
        g(h);
    } } }); }; e.prototype.setOSDLanguage = function (f, g, h) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "setOSDLanguage", parameters: h, onSuccess: function (i) { if (i.returnValue === true) {
        if (typeof f === "function") {
            f();
        }
    } }, onFailure: function (i) { delete i.returnValue; if (typeof g === "function") {
        b(i, "CSON", "Configuration.setOSDLanguage returns failure.");
        g(i);
    } } }); }; e.prototype.getOSDLanguage = function (f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "getOSDLanguage", parameters: {}, onSuccess: function (h) { delete h.returnValue; if (typeof f === "function") {
        f(h);
    } }, onFailure: function (h) { delete h.returnValue; if (typeof g === "function") {
        b(h, "CGON", "Configuration.getOSDLanguage returns failure.");
        g(h);
    } } }); }; e.prototype.setVirtualKeyboardLanguage = function (f, g, h) { d("setVirtualKeyboardLanguage: " + h.languageCodeList); a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "setVirtualKeyboardLanguage", parameters: { languageCodeList: h.languageCodeList }, onSuccess: function (i) { d("setVirtualKeyboardLanguage: On Success"); if (i.returnValue === true) {
        if (typeof f === "function") {
            f();
        }
    } }, onFailure: function (i) { d("setVirtualKeyboardLanguage: On Failure"); delete i.returnValue; if (typeof g === "function") {
        b(i, "CSKL", "Configuration.setVirtualKeyboardLanguage returns failure.");
        g(i);
    } } }); d("Configuration.setVirtualKeyboardLanguage Done"); }; e.prototype.getVirtualKeyboardLanguage = function (f, g) { d("getVirtualKeyboardLanguage: "); a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "getVirtualKeyboardLanguage", parameters: {}, onSuccess: function (h) { d("getVirtualKeyboardLanguage: On Success"); if (h.returnValue === true) {
        var i = {};
        d("keyboards : " + JSON.stringify(h.languageCodeList));
        i.languageCodeList = h.languageCodeList;
        if (typeof f === "function") {
            f(i);
        }
    } }, onFailure: function (h) { d("getVirtualKeyboardLanguage: On Failure"); delete h.returnValue; if (typeof g === "function") {
        b(h, "CGKL", "Configuration.getVirtualKeyboardLanguage returns failure.");
        g(h);
    } } }); d("Configuration.getVirtualKeyboardLanguage Done"); }; e.prototype.setProxyBypassList = function (g, h, i) { if (typeof i.urlList === "undefined" && typeof h === "function") {
    var f = {};
    b(f, "CSPB", "Configuration.setProxyBypassList returns failure. options.urlList is undefined.");
    h(f);
    return;
} a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "setProxyBypassList", parameters: { urlList: i.urlList }, onSuccess: function (j) { d("setProxyBypassList: On Success"); if (j.returnValue === true) {
        if (typeof g === "function") {
            g();
        }
    } }, onFailure: function (j) { d("setProxyBypassList: On Failure"); delete j.returnValue; if (typeof h === "function") {
        b(j, "CSPB", "Configuration.setProxyBypassList returns failure.");
        h(j);
    } } }); }; e.prototype.getProxyBypassList = function (f, g) { a.Request("luna://com.webos.service.commercial.scapadapter/configuration/", { method: "getProxyBypassList", parameters: {}, onSuccess: function (h) { if (h.returnValue === true) {
        var i = {};
        i.urlList = h.urlList;
        if (typeof f === "function") {
            f(i);
        }
    } }, onFailure: function (h) { delete h.returnValue; if (typeof g === "function") {
        b(h, "CGPB", "Configuration.getProxyBypassList returns failure.");
        g(h);
    } } }); }; return e; }());
//# sourceMappingURL=configuration.js.map