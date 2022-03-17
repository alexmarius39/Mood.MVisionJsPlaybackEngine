define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RI_SettingsSyncMain = /** @class */ (function () {
            //----------- constructor 
            function RI_SettingsSyncMain(owner) {
                this._owner = owner;
            }
            RI_SettingsSyncMain.prototype.init = function (error) {
                this._owner.init(error);
            };
            RI_SettingsSyncMain.prototype.loadLocalDeviceSettings = function (error, context, callback) {
                this._owner.loadLocalDeviceSettings(error, context, callback);
            };
            RI_SettingsSyncMain.prototype.updateServerSettings = function (jsonSetting, aSettingsSync, error, context, callback) {
                this._owner.updateServerSettings(jsonSetting, aSettingsSync, error, context, callback);
            };
            RI_SettingsSyncMain.prototype.saveSettingsFile = function (strFileName, error, context, callback) {
                this._owner.saveSettingsFile(strFileName, error, context, callback);
            };
            RI_SettingsSyncMain.prototype.start = function (aSettingsSync, error, context, callback) {
                this._owner.start(aSettingsSync, error, context, callback);
            };
            return RI_SettingsSyncMain;
        }());
        rm_nonrenderingservices.RI_SettingsSyncMain = RI_SettingsSyncMain;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RI_SettingsSync_Main.js.map