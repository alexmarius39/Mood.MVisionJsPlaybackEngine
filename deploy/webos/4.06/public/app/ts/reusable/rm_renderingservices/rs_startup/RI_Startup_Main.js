define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RI_StartupMain = /** @class */ (function () {
            //----------- constructor 
            function RI_StartupMain(owner) {
                this._owner = owner;
            }
            RI_StartupMain.prototype.init = function (error) {
                this._owner.init(error);
            };
            RI_StartupMain.prototype.setSystemStartupSettings = function (aStartupSettings, error, context, callback) {
                this._owner.setSystemStartupSettings(aStartupSettings, error, context, callback);
            };
            return RI_StartupMain;
        }());
        rm_renderingservices.RI_StartupMain = RI_StartupMain;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RI_Startup_Main.js.map