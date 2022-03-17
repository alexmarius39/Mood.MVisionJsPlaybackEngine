define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //==================================================================                                                     
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RI_CronServiceMain = /** @class */ (function () {
            //----------- constructor 
            function RI_CronServiceMain(owner) {
                this._owner = owner;
            }
            //--------------------------------------------------
            RI_CronServiceMain.prototype.startup_schedule = function (error, context, callback) {
                return this._owner.startup_schedule(error, context, callback);
            };
            //------------------------------------
            RI_CronServiceMain.prototype.shutdown_schedule = function (error, context, callback) {
                return this._owner.shutdown_schedule(error, context, callback);
            };
            return RI_CronServiceMain;
        }());
        rm_nonrenderingservices.RI_CronServiceMain = RI_CronServiceMain;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RI_CronServiceMain.js.map