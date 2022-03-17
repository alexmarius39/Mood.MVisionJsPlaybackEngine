define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RI_FileSettingsUpdateMain_R = /** @class */ (function () {
            //----------- constructor 
            function RI_FileSettingsUpdateMain_R(owner) {
                this._owner = owner;
            }
            //====================================================
            RI_FileSettingsUpdateMain_R.prototype.update = function (error, context, callback) {
                return this._owner.update(error, context, callback);
            };
            return RI_FileSettingsUpdateMain_R;
        }());
        rm_nonrenderingservices.RI_FileSettingsUpdateMain_R = RI_FileSettingsUpdateMain_R;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RI_FileSettingsUpdateMain_R.js.map