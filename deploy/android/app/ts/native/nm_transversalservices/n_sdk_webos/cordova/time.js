cordova.define("cordova/plugin/time", function (d, c, e) { function g(h) { } var a; if (window.PalmSystem) {
    g("Window.PalmSystem Available");
    a = d("cordova/plugin/webos/service");
}
else {
    a = { Request: function (h, i) { g(h + " invoked. But I am a dummy because PalmSystem is not available"); if (typeof i.onFailure === "function") {
            i.onFailure({ returnValue: false, errorText: "PalmSystem Not Available. Cordova is not installed?" });
        } } };
} var f = function () { }; f.TimerType = { ONTIMER: "ONTIMER", OFFTIMER: "OFFTIMER" }; f.TimerWeek = { MONDAY: 1, TUESDAY: 2, WEDNESDAY: 4, THURSDAY: 8, FRIDAY: 16, SATURDAY: 32, SUNDAY: 64, EVERYDAY: 127 }; function b(i, j, h) { if (i.errorCode === undefined || i.errorCode === null) {
    i.errorCode = j;
} if (i.errorText === undefined || i.errorText === null) {
    i.errorText = h;
} } f.prototype.reserveOnOffTimer = function (h, i, j) { a.Request("luna://com.webos.service.commercial.scapadapter/time/", { method: "reserveOnOffTimer", parameters: j, onSuccess: function (k) { g("reserveOnOffTimer: onSuccess"); if (typeof h === "function") {
        h();
    } }, onFailure: function (k) { g("reserveOnOffTimer: onFailure"); delete k.returnValue; if (typeof i === "function") {
        i(k);
    } } }); }; f.prototype.clearAllOnOffTimers = function (h, i) { a.Request("luna://com.webos.service.commercial.scapadapter/time/", { method: "clearAllOnOffTimers", parameters: {}, onSuccess: function (j) { g("clearAllOnOffTimers: onSuccess"); if (typeof h === "function") {
        h();
    } }, onFailure: function (j) { g("clearAllOnOffTimers: onFailure"); delete j.returnValue; if (typeof i === "function") {
        i(j);
    } } }); }; f.prototype.cancelOnOffTimer = function (h, i, j) { a.Request("luna://com.webos.service.commercial.scapadapter/time/", { method: "cancelOnOffTimer", parameters: j, onSuccess: function (k) { g("cancelOnOffTimer: onSuccess"); if (typeof h === "function") {
        h();
    } }, onFailure: function (k) { g("cancelOnOffTimer: onFailure"); delete k.returnValue; if (typeof i === "function") {
        i(k);
    } } }); }; f.prototype.getAllOnOffTimers = function (h, i) { a.Request("luna://com.webos.service.commercial.scapadapter/time/", { method: "getAllOnOffTimers", parameters: {}, onSuccess: function (j) { g("getAllOnOffTimers: onSuccess"); delete j.returnValue; if (typeof h === "function") {
        h(j);
    } }, onFailure: function (j) { g("getAllOnOffTimers: onFailure"); delete j.returnValue; if (typeof i === "function") {
        i(j);
    } } }); }; f.prototype.setHolidayScheduleMode = function (h, i, k) { var j = {}; b(j, "DEPRECATED_API", "This function is deprecated."); i(j); }; f.prototype.getHolidayScheduleMode = function (h, i) { var j = {}; b(j, "DEPRECATED_API", "This function is deprecated."); i(j); }; f.prototype.addHolidaySchedule = function (h, i, k) { var j = {}; b(j, "DEPRECATED_API", "This function is deprecated."); i(j); }; f.prototype.delHolidaySchedule = function (h, i, k) { var j = {}; b(j, "DEPRECATED_API", "This function is deprecated."); i(j); }; f.prototype.delAllHolidaySchedules = function (h, i) { var j = {}; b(j, "DEPRECATED_API", "This function is deprecated."); i(j); }; f.prototype.getAllHolidaySchedules = function (h, i) { var j = {}; b(j, "DEPRECATED_API", "This function is deprecated."); i(j); }; f.prototype.getHolidaySchedule = function (h, i) { g("getHolidaySchedule: "); a.Request("luna://com.webos.service.commercial.scapadapter/", { method: "getHolidaySchedule", parameters: {}, onSuccess: function (j) { g("getHolidaySchedule: On Success"); if (j.returnValue === true) {
        if (typeof h === "function") {
            var k = {};
            k.holidayScheduleList = j.settings.holidaySchedule;
            if (typeof h === "function") {
                h(k);
            }
        }
    } }, onFailure: function (j) { g("getHolidaySchedule: On Failure"); delete j.returnValue; if (typeof i === "function") {
        b(j, "TGAS", "Time.getHolidaySchedule returns failure.");
        i(j);
    } } }); g("Time.getHolidaySchedule Done"); }; f.prototype.setHolidaySchedule = function (h, i, j) { g("setHolidaySchedule: "); a.Request("luna://com.webos.service.commercial.scapadapter/", { method: "setHolidaySchedule", parameters: j, onSuccess: function (k) { g("setHolidaySchedule: On Success"); if (k.returnValue === true) {
        if (typeof h === "function") {
            if (typeof h === "function") {
                h();
            }
        }
    } }, onFailure: function (k) { g("setHolidaySchedule: On Failure"); delete k.returnValue; if (typeof i === "function") {
        b(k, "TGAS", "Time.setHolidaySchedule returns failure.");
        i(k);
    } } }); g("Time.setHolidaySchedule Done"); }; f.prototype.unsetHolidaySchedule = function (h, i) { g("unsetHolidaySchedule: "); a.Request("luna://com.webos.service.commercial.scapadapter/", { method: "unsetHolidaySchedule", parameters: {}, onSuccess: function (j) { g("unsetHolidaySchedule: On Success"); if (j.returnValue === true) {
        if (typeof h === "function") {
            if (typeof h === "function") {
                h();
            }
        }
    } }, onFailure: function (j) { g("unsetHolidaySchedule: On Failure"); delete j.returnValue; if (typeof i === "function") {
        b(j, "TGAS", "Time.unsetHolidaySchedule returns failure.");
        i(j);
    } } }); g("Time.unsetHolidaySchedule Done"); }; e.exports = f; });
Time = cordova.require("cordova/plugin/time");
//# sourceMappingURL=time.js.map