cordova.define("cordova/plugin/broadcast", function (i, t, a) { var u = i("cordova/plugin/webos/service"), s = i("cordova/utils"), j = i("cordova/argscheck"), n = function (l) { this.isATSC = false; this.tokenChannelChange = 0; this.tokenSignalState = 0; this.broadcastDivId = null; this.broadcastElement = null; this.currentInput = null; this.currentSource = null; this.isLastInput = true; this.isLastChannel = true; var h = this; u.Request("luna://com.webos.service.tv.systemproperty", { method: "getSystemInfo", parameters: { keys: ["atsc"] }, onSuccess: function (v) { h.isATSC = v.atsc; }, onFailure: function (v) { } }); }; n.prototype.onchannelchange = function (h) { }, n.prototype.onsignalstatuschange = function (h) { }, n.prototype.initialize = function (h, x, l) { j.checkArgs("fFo", "broadcastCordova.initialize", arguments); var v = s.clone(l); this.broadcastDivId = document.getElementById(v.divId); v.broadcastPlugin = this; if (1 != v.isLastInput && v.src) {
    this.isLastInput = false;
    if (-1 != v.src.indexOf("tv://")) {
        if (1 == v.isLastChannel) {
            this.isLastChannel = true;
            v.type = "service/webos-broadcast";
        }
        else {
            this.isLastChannel = false;
            v.type = "service/webos-broadcast-standalone";
        }
        this.currentInput = "tv";
        this.currentSource = v.src.substr(5);
    }
    else {
        v.type = "service/webos-external";
        var w = v.src.split(":");
        this.currentInput = w[1].substr(2).toLowerCase();
        this.currentSource = w[2];
    }
    c(v);
    h && h();
}
else {
    this.isLastInput = true;
    d(h, x, v);
} }, n.prototype.channelUp = function (h, v) { j.checkArgs("fF", "broadcastCordova.channelUp", arguments); var l = { broadcastId: this.broadcastElement.mediaId }; u.Request("luna://com.webos.service.tv.broadcast", { method: "changeChannelUp", parameters: l, onSuccess: function (w) { h && h(); }, onFailure: function (w) { delete w.returnValue; v && v(w); } }); }, n.prototype.channelDown = function (h, v) { j.checkArgs("fF", "broadcastCordova.channelDown", arguments); var l = { broadcastId: this.broadcastElement.mediaId }; u.Request("luna://com.webos.service.tv.broadcast", { method: "changeChannelDown", parameters: l, onSuccess: function (w) { h && h(); }, onFailure: function (w) { delete w.returnValue; v && v(w); } }); }, n.prototype.setChannel = function (h, w, l) { j.checkArgs("fFo", "broadcastCordova.setChannel", arguments); var v = { broadcastId: this.broadcastElement.mediaId, channelId: l.id }; u.Request("luna://com.webos.service.tv.broadcast", { method: "changeChannel", parameters: v, onSuccess: function (x) { h && h(); }, onFailure: function (x) { delete x.returnValue; w && w(x); } }); }, n.prototype.getCurrentChannel = function (h, v) { j.checkArgs("fF", "broadcastCordova.getCurrentChannel", arguments); var l = { broadcastId: this.broadcastElement.mediaId, subscribe: false }; u.Request("luna://com.webos.service.tv.broadcast", { method: "getCurrentChannel", parameters: l, onSuccess: function (x) { var w = {}; w = e(x.channel, "api"); h && h(w); }, onFailure: function (w) { delete w.returnValue; v && v(w); } }); }, n.prototype.getSignalStatus = function (h, v) { j.checkArgs("fF", "broadcastCordova.getSignalStatus", arguments); var l; if ("tv" == this.currentInput) {
    l = { broadcastId: this.broadcastElement.mediaId, subscribe: false };
    u.Request("luna://com.webos.service.tv.broadcast", { method: "getChannelState", parameters: l, onSuccess: function (x) { var w = x.channelState; w.screensaverType = w.channelScreensaverType; delete w.channelScreensaverType; h && h(w); }, onFailure: function (w) { delete w.returnValue; v && v(w); } });
}
else {
    l = { externalInputId: this.broadcastElement.mediaId, subscribe: false };
    u.Request("luna://com.webos.service.tv.externaldevice/input/", { method: "getSignalState", parameters: l, onSuccess: function (w) { h && h(w.signalState); }, onFailure: function (w) { delete w.returnValue; v && v(w); } });
} }, n.prototype.getCurrentProgram = function (h, v, l) { j.checkArgs("fFo", "broadcastCordova.getCurrentProgram", arguments), u.Request("luna://com.palm.systemservice/time", { method: "getEffectiveBroadcastTime", parameters: {}, onSuccess: function (x) { var w = {}; w.id = l.id; w.startTime = x.localtime; w.endTime = x.localtime; w.request = "nowInfo"; b(h, v, w); }, onFailure: function (w) { delete w.returnValue, v && v(w); } }); }, n.prototype.getNextProgram = function (h, v, l) { j.checkArgs("fFo", "broadcastCordova.getNextProgram", arguments), u.Request("luna://com.palm.systemservice/time", { method: "getEffectiveBroadcastTime", parameters: {}, onSuccess: function (x) { var w = {}; w.id = l.id, w.startTime = x.localtime, w.endTime = x.localtime, w.request = "nextInfo", b(h, v, w); }, onFailure: function (w) { delete w.returnValue, v && v(w); } }); }, n.prototype.getProgramCount = function (h, w, l) { j.checkArgs("fFo", "broadcastCordova.getProgramCount", arguments); var v = s.clone(l); v.request = "count"; b(h, w, v); }, n.prototype.getProgramList = function (h, w, l) { j.checkArgs("fFo", "broadcastCordova.getProgramList", arguments); var v = s.clone(l); v.request = "list"; b(h, w, v); }, n.prototype.getChannelCount = function (h, w, l) { j.checkArgs("fFo", "broadcastCordova.getChannelCount", arguments); var v = { from: "com.webos.service.tv.channel.dblist:1", select: [""], where: [{ prop: "channelType", op: "=", val: l.type }], filter: [{ prop: "Invisible", op: "=", val: !1 }] }; u.Request("luna://com.palm.db/", { method: "search", parameters: { query: v }, onSuccess: function (y) { var x = {}; x.count = y.results.length; h && h(x); }, onFailure: function (x) { delete x.returnValue, w && w(x); } }); }, n.prototype.getChannelList = function (h, x, v) { j.checkArgs("fFo", "broadcastCordova.getChannelList", arguments); var l = v.startIndex - 1; if (0 > l) {
    l = 0;
} var y = l + v.count, w = { from: "com.webos.service.tv.channel.dblist:1", select: ["channelId", "channelName", "channelMode", "channelNumber", "channelType", "skipped", "locked", "descrambled", "scrambled"], where: [{ prop: "channelType", op: "=", val: v.type }], filter: [{ prop: "Invisible", op: "=", val: !1 }], limit: y }; u.Request("luna://com.palm.db/", { method: "search", parameters: { query: w }, onSuccess: function (C) { var z = {}; z.channel = []; var A = C.results.length - l; if (A > 0) {
        for (var B = 0; A > B; B++) {
            z.channel[B] = e(C.results[B + l], "db8");
        }
    } h && h(z); }, onFailure: function (z) { delete z.returnValue; x && x(z); } }); }, n.prototype.getChannelListByName = function (h, w, v) { j.checkArgs("fFo", "broadcastCordova.getChannelListByName", arguments); var l = { from: "com.webos.service.tv.channel.dblist:1", select: ["channelId", "channelName", "channelMode", "channelNumber", "channelType", "skipped", "locked", "descrambled", "scrambled"], where: [{ prop: "channelName", op: "%", val: v.name }], filter: [{ prop: "Invisible", op: "=", val: false }] }; v.type && l.filter.push({ prop: "channelType", op: "=", val: v.type }), u.Request("luna://com.palm.db/", { method: "search", parameters: { query: l }, onSuccess: function (z) { var x = {}; if (x.channel = [], z.results.length > 0) {
        for (var y = 0; y < z.results.length; y++) {
            x.channel[y] = e(z.results[y], "db8");
        }
    } h && h(x); }, onFailure: function (x) { delete x.returnValue; w && w(x); } }); }, n.prototype.setInput = function (l) { j.checkArgs("o", "broadcastCordova.setInput", arguments); var w = false; if (-1 != l.src.indexOf("tv://")) {
    if (1 == this.isLastChannel) {
        l.type = "service/webos-broadcast";
    }
    else {
        l.type = "service/webos-broadcast-standalone";
    }
    this.currentInput = "tv";
    this.currentSource = l.src.substr(5);
}
else {
    l.type = "service/webos-external";
    var v = l.src.split(":");
    this.currentInput = v[1].substr(2).toLowerCase();
    this.currentSource = v[2];
} for (var h = 0; h < this.broadcastElement.childNodes.length; h++) {
    if ("SOURCE" == this.broadcastElement.childNodes[h].nodeName) {
        this.broadcastElement.childNodes[h].src = l.src;
        this.broadcastElement.childNodes[h].type = l.type;
        this.broadcastElement.load();
        w = true;
    }
} return w; }, n.prototype.addEventListener = function (h, v, l) { if ("channelchange" == h) {
    this.tokenChannelChange = u.Request("luna://com.webos.service.tv.broadcast", { method: "getCurrentChannel", parameters: { broadcastId: this.broadcastElement.mediaId, subscribe: false }, onSuccess: function (x) { var w = x.channel; v && v(w); }, onFailure: function (w) { } });
}
else {
    if ("signalstatus" == h) {
        if ("tv" == this.currentInput) {
            this.tokenSignalState = u.Request("luna://com.webos.service.tv.broadcast", { method: "getChannelState", parameters: { broadcastId: this.broadcastElement.mediaId, subscribe: false }, onSuccess: function (x) { var w = x.channelState; w.screensaverType = w.channelScreensaverType; delete w.channelScreensaverType; v && v(w); }, onFailure: function (w) { } });
        }
        else {
            this.tokenSignalState = u.Request("luna://com.webos.service.tv.externaldevice/input/", { method: "getSignalState", parameters: { externalInputId: this.broadcastElement.mediaId, subscribe: true }, onSuccess: function (x) { var w = x.signalState; v && v(w); }, onFailure: function (w) { } });
        }
    }
} }; var k = function (h, l) { r(h); if ("tv" == h.currentInput) {
    p(h);
    f(h);
}
else {
    o(h);
    l();
} }, c = function (h) { var v = document.createElement("VIDEO"); v.setAttribute("id", h.videoId); v.setAttribute("width", "100%"); v.setAttribute("height", "100%"); v.setAttribute("autoplay", ""); if (h.noaudio) {
    v.setAttribute("noaudio", "");
} v.addEventListener("loadedmetadata", function () { k(h.broadcastPlugin, h.callback); }, false); var l = document.createElement("SOURCE"); l.setAttribute("src", h.src); l.setAttribute("type", h.type); v.appendChild(l); h.broadcastPlugin.broadcastDivId.appendChild(v); h.broadcastPlugin.broadcastElement = v; }, d = function (h, l, v) { u.Request("luna://com.webos.service.eim", { method: "getCurrentInput", parameters: {}, onSuccess: function (x) { if ("ATV" == x.mainInputSourceId || "DTV" == x.mainInputSourceId) {
        v.broadcastPlugin.currentInput = "tv";
        q(h, l, v);
    }
    else {
        var w = x.mainInputSourceId.split("_");
        v.broadcastPlugin.currentInput = w[0].toLowerCase();
        v.broadcastPlugin.currentSource = w[1];
        v.src = "ext://" + v.broadcastPlugin.currentInput + ":" + v.broadcastPlugin.currentSource;
        v.type = "service/webos-external";
        c(v);
        h && h();
    } }, onFailure: function (w) { delete w.returnValue; l && l(w); } }); }, q = function (l, h, v) { }, p = function (h) { h.tokenChannelChange = u.Request("luna://com.webos.service.tv.broadcast", { method: "getCurrentChannel", parameters: { broadcastId: h.broadcastElement.mediaId, subscribe: true }, onSuccess: function (l) { h.currentSource = l.channel.channelId; var v = {}; v = e(l.channel, "api"), h.onchannelchange(v); }, onFailure: function (l) { } }); }, f = function (h) { h.tokenSignalState = u.Request("luna://com.webos.service.tv.broadcast", { method: "getChannelState", parameters: { broadcastId: h.broadcastElement.mediaId, subscribe: true }, onSuccess: function (v) { var l = v.channelState; l.screensaverType = l.channelScreensaverType; delete l.channelScreensaverType; h.onsignalstatuschange(l); }, onFailure: function (l) { } }); }, o = function (h) { h.tokenSignalState = u.Request("luna://com.webos.service.tv.externaldevice/input/", { method: "getSignalState", parameters: { externalInputId: h.broadcastElement.mediaId, subscribe: true }, onSuccess: function (l) { var v = l.signalState; h.onsignalstatuschange(v); }, onFailure: function (l) { } }); }, r = function (h) { if (h.tokenChannelChange) {
    h.tokenChannelChange.cancel();
} if (h.tokenSignalState) {
    h.tokenSignalState.cancel();
} }, m = function (h, y, v) { var w = g(v.startTime), l = g(v.endTime), x = {}; if ("count" == v.request) {
    x = { from: "com.webos.service.tv.programSCH:4", select: [""], where: [{ prop: "signalChannelId", op: "=", val: v.signalChannelId }], filter: [{ prop: "localStartTime", op: "<=", val: l }, { prop: "localEndTime", op: ">=", val: w }] };
}
else {
    if ("nextInfo" == v.request) {
        x = { from: "com.webos.service.tv.programSCH:4", select: ["programId", "eventId", "localStartTime", "localEndTime", "duration", "programName", "description"], where: [{ prop: "channelId", op: "=", val: v.signalChannelId }], filter: [{ prop: "localStartTime", op: ">", val: w }], orderBy: "localStartTime", limit: 1 };
    }
    else {
        if ("list" == v.request || "nowInfo" == v.request) {
            x = { from: "com.webos.service.tv.programSCH:4", select: ["programId", "eventId", "localStartTime", "localEndTime", "duration", "programName", "description"], where: [{ prop: "channelId", op: "=", val: v.signalChannelId }], filter: [{ prop: "localStartTime", op: "<=", val: l }, { prop: "localEndTime", op: ">=", val: w }] };
        }
    }
} }, b = function (h, l, v) { var w = { from: "com.webos.service.tv.channel.dblist:1", select: ["signalChannelId"], where: [{ prop: "channelId", op: "=", val: v.id }] }; u.Request("luna://com.palm.db/", { method: "find", parameters: { query: w }, onSuccess: function (x) { v.signalChannelId = x.results[0].signalChannelId; m(h, l, v); }, onFailure: function (x) { delete x.returnValue; l && l(x); } }); }, e = function (v, l) { var h = {}; h.id = v.channelId; h.number = v.channelNumber; h.name = v.channelName; if ("api" == l) {
    h.mode = v.channelModeName;
    h.type = v.channelTypeName;
    h.isSkipped = v.isSkipped;
    h.isLocked = v.isLocked;
    h.isDescrambled = v.isDescrambled;
    h.isScrambled = v.isScrambled;
}
else {
    h.mode = v.channelMode;
    h.type = v.channelType;
    h.isSkipped = v.skipped;
    h.isLocked = v.locked;
    h.isDescrambled = v.descrambled;
    h.isScrambled = v.scrambled;
} return h; }, g = function (h) { var l = h.year + ","; l += (h.month < 10 ? "0" : "") + h.month + ","; l += (h.day < 10 ? "0" : "") + h.day + ","; l += (h.hour < 10 ? "0" : "") + h.hour + ","; l += (h.minute < 10 ? "0" : "") + h.minute + ","; l += (h.second < 10 ? "0" : "") + h.second; return l; }; a.exports = n; });
var Broadcast = cordova.require("cordova/plugin/broadcast");
cordova.define("cordova/plugin/inputSource", function (b, d, a) { function c(m) { } var h; if (window.PalmSystem) {
    c("Window.PalmSystem Available");
    h = b("cordova/plugin/webos/service");
}
else {
    h = { Request: function (m, n) { c(m + " invoked. But I am a dummy because PalmSystem is not available"); if (typeof n.onFailure === "function") {
            n.onFailure({ returnValue: false, errorText: "PalmSystem Not Available. Cordova is not installed?" });
        } } };
} var i = function () { }; var l = false; var g = ""; var f = null; function k(n, o, m) { if (n.errorCode === undefined || n.errorCode === null) {
    n.errorCode = o;
} if (n.errorText === undefined || n.errorText === null) {
    n.errorText = m;
} } function e(o) { var m = 1; var n = o.length; if (!isNaN(parseInt(o.charAt(n - 1), 10))) {
    m = o.charAt(n - 1);
    n--;
} o = o.substring(0, n) + ":" + m; o = "ext://" + o.toLowerCase(); return o; } function j(o, m, n) { h.Request("luna://com.webos.service.commercial.scapadapter/inputsource/", { method: "getInputLabelForVideoTag", parameters: { inputLabel: o }, onSuccess: function (p) { c("convertInputSource: On Success " + o); if (typeof m === "function") {
        m(p.convertedInputLabel);
        return;
    } }, onFailure: function (p) { c("convertInputSource: On Failure"); delete p.returnValue; if (typeof n === "function") {
        k(p, "IGISS", "convertInputSource returns failure on gathering input list.");
        n(p);
    } } }); } i.prototype.initialize = function (n, o, q) { c("initialize: " + JSON.stringify(q)); if (q.divId === undefined || typeof q.divId !== "string" || q.divId === null || q.divId.length <= 0 || q.videoId === undefined || typeof q.videoId !== "string" || q.videoId === null || q.videoId.length <= 0 || q.callback === undefined || typeof q.callback !== "function" || q.src === undefined || typeof q.src !== "string" || q.src === null || q.src.length <= 0 || q.noaudio === undefined || typeof q.noaudio !== "boolean" || q.noaudio === null) {
    if (typeof o === "function") {
        var m = {};
        k(m, "II", "InputSource.initialize returns failure. invalid parameters.");
        o(m);
    }
    return;
} if (document.getElementById(q.divId) === null || document.getElementById(q.divId) === undefined) {
    if (typeof o === "function") {
        o({ errorCode: "II", errorText: "options.divId:[" + q.divId + "] element not exists or cannot approach" });
    }
    return;
}
else {
    if (document.getElementById(q.videoId)) {
        if (typeof o === "function") {
            o({ errorCode: "II", errorText: "options.videoId:[" + q.videoId + "] element already exists." });
        }
        return;
    }
} j(q.src, function r(s) { var t = {}; t.divId = q.divId; t.videoId = q.videoId; t.callback = q.callback; t.src = s; t.noaudio = q.noaudio; f = new Broadcast(); f.initialize(n, o, t); l = true; g = q.videoId; }, function p(t) { c("initialize: failure " + JSON.stringify(t)); if (typeof o === "function") {
    var s = {};
    k(s, "II", "InputSource.initialize returns failure. invalid parameters.");
    o(s);
} }); c("initialize: Done"); }; i.prototype.changeInputSource = function (n, o, q) { if (q.src === undefined || typeof q.src !== "string" || q.src === null || q.src.length <= 0) {
    if (typeof o === "function") {
        var m = {};
        k(m, "ICIS", "InputSource.changeInputSource returns failure. invalid argument.");
        o(m);
    }
    return;
} if ((l === false) || (document.getElementById(g) === null || document.getElementById(g) === undefined)) {
    if (typeof o === "function") {
        var m = {};
        k(m, "ICIS", "InputSource.changeInputSource returns failure. Call initialize() first.");
        o(m);
    }
    return;
} c("changeInputSource: " + JSON.stringify(q)); j(q.src, function r(t) { var u = {}; u.divId = q.divId; u.videoId = q.videoId; u.callback = q.callback; u.src = t; if (f.setInput(u)) {
    c("changeInputSource: On Success");
    if (typeof n === "function") {
        n();
    }
}
else {
    if (typeof o === "function") {
        var s = {};
        c("changeInputSource: On Failure");
        k(s, "ICIS", "InputSource.changeInputSource returns failure.");
        o(s);
    }
} }, function p(t) { c("changeInputSource: failure " + JSON.stringify(t)); if (typeof o === "function") {
    var s = {};
    k(s, "ICIS", "InputSource.changeInputSource returns failure. invalid argument. ");
    o(s);
} }); c("changeInputSource: Done"); }; i.prototype.getInputSourceStatus = function (m, n) { c("getInputSourceStatus: "); h.Request("luna://com.webos.service.eim/", { method: "getAllInputStatus", onSuccess: function (p) { c("getInputSourceStatus: On Success"); if (p.returnValue === true) {
        var u = {};
        var t = new Array(p.totalCount);
        var v = new Array(p.totalCount);
        for (var s = 0; s < t.length; s++) {
            t[s] = {};
            t[s].inputPort = e(p.devices[s].label);
            var o = null;
            var r = p.devices[s].deviceName.toLowerCase();
            var q = 1;
            if (isNaN(r.substring(r.length - 1, r.length)) === false) {
                r = r.substring(0, r.length - 1);
                q = p.devices[s].id.split("_")[1];
            }
            if (r.toLowerCase() === "displayport") {
                r = "dp";
            }
            else {
                if (r.toLowerCase() === "ops/dvi") {
                    r = "ops";
                }
            }
            t[s].inputPort = "ext://" + r.toLowerCase() + ":" + q;
            v[s] = {};
            v[s].inputPort = t[s].inputPort;
            v[s].id = p.devices[s].id;
        }
        u.inputSourceList = t;
        h.Request("luna://com.webos.service.eim/", { method: "getCurrentInput", parameters: {}, onSuccess: function (w) { c("InputSource.getInputSourceStatus: On Success 3"); if (w.returnValue === true) {
                if (typeof m === "function") {
                    u.currentInputSource = {};
                    for (var x = 0; x < v.length; x++) {
                        if (v[x].id === w.mainInputSourceId) {
                            u.currentInputSource = v[x].inputPort;
                            break;
                        }
                    }
                    u.currentSignalState = "unknown";
                    if (f !== null) {
                        c("InputSource.getInputSourceStatus : broadcast is not null");
                        f.getSignalStatus(function y(A) { u.currentSignalState = A.videoSignalState; c("InputSource.getInputSourceStatus: On Success 2"); if (typeof m === "function") {
                            c("getInputSourceStatus: On Success" + JSON.stringify(u));
                            m(u);
                            return;
                        } }, function z() { c("InputSource.getInputSourceStatus : signal state is fail."); if (typeof m === "function") {
                            c("getInputSourceStatus: On Success" + JSON.stringify(u));
                            m(u);
                            return;
                        } });
                    }
                    else {
                        c("InputSource.getInputSourceStatus : it does not initialize.");
                        if (typeof m === "function") {
                            c("getInputSourceStatus: On Success" + JSON.stringify(u));
                            m(u);
                            return;
                        }
                    }
                }
            } }, onFailure: function (w) { c("InputSource.getInputSourceStatus: On Failure 2"); delete w.returnValue; if (typeof n === "function") {
                k(w, "IGISS", "InputSource.getInputSourceStatus returns failure.");
                n(w);
                return;
            } } });
    } }, onFailure: function (o) { c("getInputSourceStatus: On Failure"); delete o.returnValue; if (typeof n === "function") {
        k(o, "IGISS", "InputSource.changeInputSource returns failure on gathering input list.");
        n(o);
    } } }); c("InputSource.getInputSourceStatus Done"); }; i.prototype.getExternalInputList = function (m, n, o) { c("getExternalInputList: "); h.Request("luna://com.webos.service.commercial.scapadapter/", { method: "getExternalInputList", parameters: o, onSuccess: function (p) { if (typeof m === "function") {
        delete p.returnValue;
        m(p);
    } }, onFailure: function (p) { c("getExternalInputList: onFailure"); delete p.returnValue; if (typeof n === "function") {
        n(p);
    } } }); c("InputSource.getExternalInputList Done"); }; a.exports = i; });
InputSource = cordova.require("cordova/plugin/inputSource");
//# sourceMappingURL=inputSource.js.map