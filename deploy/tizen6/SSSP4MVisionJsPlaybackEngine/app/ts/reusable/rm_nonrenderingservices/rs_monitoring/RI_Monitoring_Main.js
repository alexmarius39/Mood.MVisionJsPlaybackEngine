define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RI_MonitoringMain = /** @class */ (function () {
            //----------- constructor 
            function RI_MonitoringMain(owner) {
                this._owner = owner;
            }
            RI_MonitoringMain.prototype.init = function (error) {
                this._owner.init(error);
            };
            RI_MonitoringMain.prototype.sendMonitoringReport = function (aMonitoringSettings, error, context, callback) {
                this._owner.sendMonitoringReport(aMonitoringSettings, error, context, callback);
            };
            RI_MonitoringMain.prototype.startMonitoring = function (aMonitoringSettings, error, context, callback) {
                this._owner.startMonitoring(aMonitoringSettings, error, context, callback);
            };
            RI_MonitoringMain.prototype.receivedLastPlayedItem = function (paramIdentifier) {
                this._owner.receivedLastPlayedItem(paramIdentifier);
            };
            return RI_MonitoringMain;
        }());
        rm_nonrenderingservices.RI_MonitoringMain = RI_MonitoringMain;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RI_Monitoring_Main.js.map