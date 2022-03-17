Storage = (function () { var d, a; function c(f) { } if (typeof window === "object") {
    cordova.define("cordova/plugin/storage", function (g, f, h) { d = function () { }; if (window.PalmSystem) {
        c("Window.PalmSystem Available");
        a = g("cordova/plugin/webos/service");
    }
    else {
        a = { Request: function (i, j) { c(i + " invoked. But I am a dummy because PalmSystem is not available"); if (typeof j.onFailure === "function") {
                j.onFailure({ returnValue: false, errorText: "PalmSystem Not Available. Cordova is not installed?" });
            } } };
    } h.exports = d; });
    d = cordova.require("cordova/plugin/storage");
}
else {
    d = function (f) { a = f; a.Request = function (g, i) { var h = g + "/" + i.method; var j = {}; if (i.hasOwnProperty("parameters") === true) {
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
    module.exports = d;
} function b(g, h, f) { if (g.errorCode === undefined || g.errorCode === null) {
    g.errorCode = h;
} if (g.errorText === undefined || g.errorText === null) {
    g.errorText = f;
} } function e(f) { if (f) {
    if (f.indexOf("://") === -1) {
        c("INVALID URI" + f);
        return false;
    }
    else {
        c("GOOD URI");
        return true;
    }
}
else {
    c("NO URI" + f);
    return false;
} } Error.ERROR_CODE = { IO_ERROR: "IO_ERROR", DEVICE_ERROR: "DEVICE_ERROR", BAD_PARAMETER: "BAD_PARAMETER", SERVER_ERROR: "SERVER_ERROR", NETWORK_ERROR: "NETWORK_ERROR", SYSTEM_ERROR: "SYSTEM_ERROR", }; d.SCAP_URI = ""; d.MAX_BUFFER_LENGTH = 1024 * 10; d.AppMode = { USB: "usb", LOCAL: "local" }; d.AppType = { IPK: "ipk", ZIP: "zip" }; d.prototype.downloadFirmware = function (f, g, h) { a.Request("luna://com.webos.service.commercial.scapadapter", { method: "downloadFirmware", parameters: { uri: h.uri }, onSuccess: function (i) { if (i.returnValue === true) {
        f();
    }
    else {
        g({ errorCode: i.errorCode, errorText: i.errorText });
    } }, onFailure: function (i) { g({ errorCode: i.errorCode, errorText: i.errorText }); } }); }; d.prototype.upgradeFirmware = function (f, g) { a.Request("luna://com.webos.service.commercial.scapadapter", { method: "upgradeFirmware", parameters: {}, onSuccess: function (h) { if (h.returnValue === true) {
        f();
    }
    else {
        g({ errorCode: h.errorCode, errorText: h.errorText });
    } }, onFailure: function (h) { g({ errorCode: h.errorCode, errorText: h.errorText }); } }); }; d.prototype.getFirmwareUpgradeStatus = function (f, g) { a.Request("luna://com.webos.service.commercial.scapadapter", { method: "getFirmwareUpgradeStatus", parameters: {}, onSuccess: function (h) { if (h.returnValue === true) {
        f({ status: h.status, upgradeProgress: h.upgradeProgress, downloadProgress: h.downloadProgress });
    }
    else {
        g({ errorCode: h.errorCode, errorText: h.errorText });
    } }, onFailure: function (h) { g({ errorCode: h.errorCode, errorText: h.errorText }); } }); }; d.prototype.changeLogoImage = function (f, g, h) { a.Request("luna://com.webos.service.commercial.scapadapter", { method: "changeLogoImage", parameters: { uri: h.uri }, onSuccess: function (i) { if (i.returnValue === true) {
        f();
    }
    else {
        g({ errorCode: i.errorCode, errorText: i.errorText });
    } }, onFailure: function (i) { g({ errorCode: i.errorCode, errorText: i.errorText }); } }); }; d.prototype.upgradeApplication = function (f, g, h) { var i = { from: "remote", to: (h === undefined || h === null ? d.AppMode.LOCAL : h.to), recovery: (h === undefined || h === null ? false : h.recovery), }; if (h.hasOwnProperty("type") === true && h.type !== undefined) {
    i.type = h.type;
} a.Request("luna://com.webos.service.commercial.scapadapter", { method: "upgradeApplication", parameters: i, onSuccess: function (j) { if (j.returnValue === true) {
        f();
    }
    else {
        g({ errorCode: j.errorCode, errorText: j.errorText });
    } }, onFailure: function (j) { g({ errorCode: j.errorCode, errorText: j.errorText }); } }); }; d.prototype.removeApplication = function (f, g, h) { a.Request("luna://com.webos.service.commercial.scapadapter", { method: "removeApplication", parameters: { to: h.to }, onSuccess: function (i) { if (i.returnValue === true) {
        f();
    }
    else {
        g({ errorCode: i.errorCode, errorText: i.errorText });
    } }, onFailure: function (i) { g({ errorCode: i.errorCode, errorText: i.errorText }); } }); }; d.prototype.copyFile = function (f, g, h) { c("Options: " + JSON.stringify(h, null, 3)); if (h.maxRedirection && h.maxRedirection > 5) {
    c("Bad options TOO MANY REDIRECTION");
    g({ errorCode: "BAD_PARAMETER", errorText: "Redirect cannot be more that 5" });
    return;
} if (h.headers && JSON.stringify(h.headers).length > 1024) {
    c("header too long header too long");
    g({ errorCode: "BAD_PARAMETER", errorText: "Header data cannot be bigger than 1K" });
    return;
} if (typeof h.httpOption === "undefined") {
    h.httpOption = {};
} if (h.httpOption.headers && JSON.stringify(h.httpOption.headers).length > 1024) {
    c("header too long header too long");
    g({ errorCode: "BAD_PARAMETER", errorText: "Header data cannot be bigger than 1K" });
    return;
} if (h.maxRedirection || h.headers) {
    if (h.maxRedirection && typeof h.httpOption.maxRedirection === "undefined") {
        h.httpOption.maxRedirection = h.maxRedirection;
    }
    if (h.headers && typeof h.httpOption.headers === "undefined") {
        h.httpOption.headers = h.headers;
    }
} if (typeof h.httpOption.maxRedirection !== "undefined") {
    if (typeof h.maxRedirection !== "undefined") {
        if (h.httpOption.maxRedirection !== h.maxRedirection) {
            g({ errorCode: "BAD_PARAMETER", errorText: "Both options.httpOption.maxRedirection and options.maxRedirection are exists,but different value. What value you want to use?" });
            return;
        }
    }
    else {
        h.maxRedirection = h.httpOption.maxRedirection;
    }
} c(h); a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/copyFile", parameters: { dest: h.destination, src: h.source, ftpOption: h.ftpOption, httpOption: h.httpOption }, onSuccess: function (i) { if (i.returnValue === true) {
        c("SUCCESS");
        f();
    }
    else {
        c("Err: " + i.errorText);
        g({ errorCode: i.errorCode, errorText: i.errorText });
    } }, onFailure: function (i) { c("Err: " + i.errorText); g({ errorCode: i.errorCode, errorText: i.errorText }); } }); }; d.prototype.removeFile = function (f, g, h) { if (!(h && e(h.file))) {
    g({ errorCode: "BAD_PARAMETER", errorText: "options.file is a mandatory parameter" });
    return;
} var i = { file: h.file }; if (h.recursive === true) {
    i.recursive = true;
} a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/removeFile", parameters: i, onSuccess: function (j) { c("onSuccess"); if (j.returnValue === true) {
        f();
    }
    else {
        g({ errorCode: j.errorCode, errorText: j.errorText });
    } }, onFailure: function (j) { c("onFailure"); g({ errorCode: j.errorCode, errorText: j.errorText }); } }); }; d.prototype.listFiles = function (f, g, h) { var i = {}; if (h && h.path) {
    if (e(h.path)) {
        i.pathURI = h.path;
    }
    else {
        g({ errorCode: "BAD_PARAMETER", errorText: "File URI is not valid." });
        return;
    }
}
else {
    i.pathURI = "file://internal/";
} a.Request("luna://com.webos.service.commercial.scapadapter/", { method: "fs/listFiles", parameters: i, onSuccess: function (j) { if (j.returnValue === true) {
        var l = [];
        for (var k = 0; k < j.files.length; ++k) {
            c(j.files[k]);
            var n = { name: j.files[k].name, type: (j.files[k].type === "folder") ? "folder" : "file", size: j.files[k].size };
            l.push(n);
        }
        var m = { files: l, totalCount: j.totalCount };
        f(m);
    }
    else {
        g({ errorCode: j.errorCode, errorText: j.errorText });
    } }, onFailure: function (j) { g({ errorCode: j.errorCode, errorText: j.errorText }); } }); }; d.prototype.getStorageInfo = function (f, g) { a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/storageInfo", parameters: {}, onSuccess: function (h) { c("returned : " + JSON.stringify(h, null, 3)); if (h.returnValue === true) {
        c("returned : " + JSON.stringify(h, null, 3));
        var i = { free: h.spaceInfo.freeSize, total: h.spaceInfo.totalSize, used: h.spaceInfo.usedSize, externalMemory: h.externalStorage };
        f(i);
    }
    else {
        g({ errorCode: h.errorCode, errorText: h.errorText });
    } }, onFailure: function (h) { g({ errorCode: h.errorCode, errorText: h.errorText }); } }); }; d.prototype.mkdir = function (f, g, h) { if (!(h && e(h.path))) {
    g({ errorCode: "BAD_PARAMETER", errorText: "options.path is a mandatory parameter" });
    return;
} var i = { pathURI: h.path }; a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/mkdir", parameters: i, onSuccess: function (j) { c("onSuccess"); if (j.returnValue === true) {
        f();
    }
    else {
        g({ errorCode: j.errorCode, errorText: j.errorText });
    } }, onFailure: function (j) { c("onFailure"); g({ errorCode: j.errorCode, errorText: j.errorText }); } }); }; d.prototype.exists = function (f, g, h) { if (!(h && e(h.path))) {
    c("BAD_PARAMETER");
    g({ errorCode: "BAD_PARAMETER", errorText: "options.path is a mandatory parameter" });
    return;
} var i = { pathURI: h.path }; a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/exists", parameters: i, onSuccess: function (j) { c("onSuccess"); if (j.returnValue === true) {
        c("returned : " + JSON.stringify(j, null, 3));
        var k = { exists: j.exists };
        f(k);
    }
    else {
        g({ errorCode: j.errorCode, errorText: j.errorText });
    } }, onFailure: function (j) { c("onFailure"); g({ errorCode: j.errorCode, errorText: j.errorText }); } }); }; d.prototype.readFile = function (f, g, h) { if (!h) {
    g({ errorCode: "BAD_PARAMETER", errorText: "options.path is a mandatory parameter" });
}
else {
    if (!e(h.path)) {
        g({ errorCode: "BAD_PARAMETER", errorText: "options.path is a mandatory parameter" });
    }
    else {
        if (h.length && (h.length > d.MAX_BUFFER_LENGTH || h.length < 1)) {
            g({ errorCode: "BAD_PARAMETER", errorText: "length should be > 0 and < " + d.MAX_BUFFER_LENGTH });
        }
        else {
            if (h.position && (h.position < 0)) {
                g({ errorCode: "BAD_PARAMETER", errorText: "position should be > 0" });
            }
            else {
                var i = {};
                i.path = h.path;
                i.length = h.length ? h.length : d.MAX_BUFFER_LENGTH;
                i.position = h.position ? h.position : 0;
                i.encoding = h.encoding ? h.encoding : "utf-8";
                a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/readFile", parameters: i, onSuccess: function (j) { if (j.returnValue) {
                        if (i.encoding === "binary") {
                            var k = j.data;
                            var m = new Uint8Array(k.length);
                            for (var l = 0; l < k.length; ++l) {
                                m[l] = k[l];
                            }
                            f({ data: m.buffer });
                        }
                        else {
                            f({ data: j.data });
                        }
                    }
                    else {
                        g({ errorCode: j.errorCode, errorText: j.errorText });
                    } }, onFailure: function (j) { g({ errorCode: j.errorCode, errorText: j.errorText }); } });
            }
        }
    }
} }; d.prototype.writeFile = function (h, p, l) { if (!l) {
    p({ errorCode: "BAD_PARAMETER", errorText: "options.path is a mandatory parameter" });
}
else {
    if (!e(l.path)) {
        p({ errorCode: "BAD_PARAMETER", errorText: "options.path is a is not valid" });
    }
    else {
        if (!l.data) {
            p({ errorCode: "BAD_PARAMETER", errorText: "options.data is a mandatory parameter" });
        }
        else {
            if (l.mode && (l.mode !== "truncate" && l.mode !== "append" && l.mode !== "position")) {
                p({ errorCode: "BAD_PARAMETER", errorText: "mode should be 'truncate'|'append'|'position'" });
            }
            else {
                if (l.position && (l.position < 0)) {
                    p({ errorCode: "BAD_PARAMETER", errorText: "position should be > 0" });
                }
                else {
                    if (l.offset && (l.offset < 0)) {
                        p({ errorCode: "BAD_PARAMETER", errorText: "offset should be > 0" });
                    }
                    else {
                        if (l.length && (l.length > d.MAX_BUFFER_LENGTH || l.length < 1)) {
                            p({ errorCode: "BAD_PARAMETER", errorText: "length should be > 0 and < " + d.MAX_BUFFER_LENGTH });
                        }
                        else {
                            if (l.encoding && (l.encoding !== "utf8" && l.encoding !== "binary" && l.encoding !== "base64")) {
                                p({ errorCode: "BAD_PARAMETER", errorText: "Invalid encoding: " + l.encoding });
                            }
                            else {
                                c("REQUEST");
                                var x = {};
                                x.path = l.path;
                                x.mode = l.mode ? l.mode : "truncate";
                                x.position = l.position ? l.position : 0;
                                x.encoding = l.encoding ? l.encoding : "utf8";
                                var o = l.offset ? l.offset : 0;
                                if (x.encoding === "binary") {
                                    c("binary, size is: " + l.data.byteLength);
                                    var k = new Uint8Array(l.data);
                                    c("uint8View: " + k);
                                    var n = l.length ? l.length : d.MAX_BUFFER_LENGTH;
                                    var t = [];
                                    var r = 0;
                                    for (var w = o; w < k.length && r < n; ++w, r++) {
                                        t[r] = k[w];
                                    }
                                    c("array length: " + r);
                                    x.data = t;
                                    x.length = r;
                                    x.offset = 0;
                                }
                                else {
                                    if (x.encoding === "base64") {
                                        var s = l.length ? l.length : d.MAX_BUFFER_LENGTH;
                                        c("base64, size is: " + l.data.length);
                                        var f = l.data;
                                        var g = window.atob(f);
                                        var u = g.substring(o, o + s);
                                        var z = new Uint8Array(u.length);
                                        var v;
                                        for (v = 0; v < u.length; v++) {
                                            z[v] = u.charCodeAt(v);
                                        }
                                        var y = [];
                                        for (v = 0; v < z.length; ++v) {
                                            y[v] = z[v];
                                        }
                                        x.data = y;
                                        x.length = y.length;
                                        x.offset = 0;
                                    }
                                    else {
                                        var q = l.length ? l.length : d.MAX_BUFFER_LENGTH;
                                        x.data = l.data.substring(o, o + q);
                                        x.length = x.data.length;
                                        x.offset = 0;
                                    }
                                }
                                try {
                                    a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/writeFile", parameters: x, onSuccess: function (i) { c("onSuccess"); if (i.returnValue) {
                                            h({ written: i.written });
                                        }
                                        else {
                                            c("FAILED: " + i.errorText);
                                            p({ errorCode: i.errorCode, errorText: i.errorText });
                                        } }, onFailure: function (i) { c("onFailure"); c("FAILED: " + i.errorText); p({ errorCode: i.errorCode, errorText: i.errorText }); } });
                                }
                                catch (m) {
                                    c("EXCEPTION" + m);
                                    p({ errorCode: "STWF", errorText: "Storage.writeFile() error is occured during operation." });
                                }
                            }
                        }
                    }
                }
            }
        }
    }
} }; d.prototype.statFile = function (f, g, h) { if (!(h && e(h.path))) {
    g({ errorCode: "BAD_PARAMETER", errorText: "options.path is a mandatory parameter" });
}
else {
    if (!h.path) {
        g({ errorCode: "BAD_PARAMETER", errorText: "options.path is a mandatory parameter" });
    }
    else {
        try {
            a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/statFile", parameters: { path: h.path }, onSuccess: function (j) { c("onSuccess"); if (j.returnValue) {
                    f(j.stat);
                }
                else {
                    c("FAILED: " + j.errorText);
                    g({ errorCode: j.errorCode, errorText: j.errorText });
                } }, onFailure: function (j) { c("onFailure"); c("FAILED: " + j.errorText); g({ errorCode: j.errorCode, errorText: j.errorText }); } });
        }
        catch (i) {
            c("EXCEPTION" + i);
            g({ errorCode: "STSF", errorText: "Storage.statFile() error is occured during operation." });
        }
    }
} }; d.prototype.removeAll = function (f, g, h) { if (!h) {
    g({ errorCode: "BAD_PARAMETER", errorText: "options.device is a mandatory parameter" });
}
else {
    if (!h.device) {
        g({ errorCode: "BAD_PARAMETER", errorText: "options.device is a mandatory parameter" });
    }
    else {
        try {
            a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/removeAll", parameters: { device: h.device }, onSuccess: function (j) { c("onSuccess"); if (j.returnValue) {
                    f();
                }
                else {
                    c("FAILED: " + j.errorText);
                    g({ errorCode: j.errorCode, errorText: j.errorText });
                } }, onFailure: function (j) { c("onFailure"); c("FAILED: " + j.errorText); g({ errorCode: j.errorCode, errorText: j.errorText }); } });
        }
        catch (i) {
            c("EXCEPTION" + i);
            g({ errorCode: "STRA", errorText: "Storage.removeAll() error is occured during operation." });
        }
    }
} }; d.prototype.fsync = function (f, g, h) { try {
    var j = {};
    if (h && h.path) {
        if (e(h.path)) {
            j.path = h.path;
        }
        else {
            g({ errorCode: "BAD_PARAMETER", errorText: "Invalid File URI" });
            return;
        }
    }
    a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/fsyncFile", parameters: j, onSuccess: function (k) { c("onSuccess"); if (k.returnValue) {
            f();
        }
        else {
            c("FAILED: " + k.errorText);
            g({ errorCode: k.errorCode, errorText: k.errorText });
        } }, onFailure: function (k) { c("onFailure"); c("FAILED: " + k.errorText); g({ errorCode: k.errorCode, errorText: k.errorText }); } });
}
catch (i) {
    c("EXCEPTION" + i);
    g({ errorCode: "STFS", errorText: "Storage.fsync() error is occured during operation." });
} }; d.prototype.moveFile = function (f, g, h) { if (!h) {
    g({ errorCode: "BAD_PARAMETER", errorText: "options.path is a mandatory parameter" });
}
else {
    if (!e(h.oldPath)) {
        g({ errorCode: "BAD_PARAMETER", errorText: "options.oldpath is a mandatory parameter" });
    }
    else {
        if (!e(h.newPath)) {
            g({ errorCode: "BAD_PARAMETER", errorText: "options.newPath is a mandatory parameter" });
        }
        else {
            try {
                a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/moveFile", parameters: { oldPath: h.oldPath, newPath: h.newPath }, onSuccess: function (j) { c("onSuccess"); if (j.returnValue) {
                        f();
                    }
                    else {
                        c("FAILED: " + j.errorText);
                        g({ errorCode: j.errorCode, errorText: j.errorText });
                    } }, onFailure: function (j) { c("onFailur"); c("FAILED: " + j.errorText); g({ errorCode: j.errorCode, errorText: j.errorText }); } });
            }
            catch (i) {
                c("EXCEPTION" + i);
                g({ errorCode: "STMF", errorText: "Storage.moveFile() error is occured during operation." });
            }
        }
    }
} }; d.prototype.unzipFile = function (f, g, h) { if (!h) {
    g({ errorCode: "BAD_PARAMETER", errorText: "options.path is a mandatory parameter" });
}
else {
    if (!e(h.zipPath)) {
        g({ errorCode: "BAD_PARAMETER", errorText: "options.zipPath is a mandatory parameter" });
    }
    else {
        if (!e(h.targetPath)) {
            g({ errorCode: "BAD_PARAMETER", errorText: "options.targetPath is a mandatory parameter" });
        }
        else {
            try {
                a.Request("luna://com.webos.service.commercial.scapadapter", { method: "fs/unzip", parameters: { zipPath: h.zipPath, targetPath: h.targetPath }, onSuccess: function (j) { c("onSuccess"); if (j.returnValue) {
                        f();
                    }
                    else {
                        c("FAILED: " + j.errorText);
                        g({ errorCode: j.errorCode, errorText: j.errorText });
                    } }, onFailure: function (j) { c("onFailure"); c("FAILED: " + j.errorText); g({ errorCode: j.errorCode, errorText: j.errorText }); } });
            }
            catch (i) {
                c("EXCEPTION" + i);
                g({ errorCode: "STUF", errorText: "Storage.unzipFile() error is occured during operation." });
            }
        }
    }
} }; d.prototype.getMD5Hash = function (f, g, h) { c("getMD5Hash: "); if (!(h && e(h.filePath))) {
    g({ errorCode: "BAD_PARAMETER", errorText: "options.filePath is a mandatory parameter" });
    return;
} a.Request("luna://com.webos.service.commercial.scapadapter/", { method: "fs/getMD5Hash", parameters: { filePath: h.filePath }, onSuccess: function (i) { if (typeof f === "function") {
        delete i.returnValue;
        f(i);
    } }, onFailure: function (i) { c("getMD5Hash: onFailure"); delete i.returnValue; if (typeof g === "function") {
        g(i);
    } } }); c("Storage.getMD5Hash Done"); }; d.prototype.decryptFile = function (f, g, h) { c("decryptFile: "); a.Request("luna://com.webos.service.commercial.scapadapter/", { method: "fs/decryptFile", parameters: { cipher_mode: h.cipher_mode, password: h.password, inputPath: h.inputPath, outputFileName: h.outputFileName }, onSuccess: function (i) { if (typeof f === "function") {
        delete i.returnValue;
        f(i);
    } }, onFailure: function (i) { c("decryptFile: onFailure"); delete i.returnValue; if (typeof g === "function") {
        g(i);
    } } }); c("Storage.decryptFile Done"); }; return d; }());
//# sourceMappingURL=storage.js.map