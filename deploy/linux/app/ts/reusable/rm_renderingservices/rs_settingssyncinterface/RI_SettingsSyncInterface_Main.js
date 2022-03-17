"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var RI_SettingsSyncInterfaceMain = (function () {
        function RI_SettingsSyncInterfaceMain(owner) {
            this._owner = owner;
        }
        RI_SettingsSyncInterfaceMain.prototype.start = function (error, context, callback) {
            this._owner.start(error, context, callback);
        };
        RI_SettingsSyncInterfaceMain.prototype.stop = function (error, context, callback) {
            this._owner.stop(error, context, callback);
        };
        return RI_SettingsSyncInterfaceMain;
    }());
    rm_renderingservices.RI_SettingsSyncInterfaceMain = RI_SettingsSyncInterfaceMain;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RI_SettingsSyncInterface_Main.js.map