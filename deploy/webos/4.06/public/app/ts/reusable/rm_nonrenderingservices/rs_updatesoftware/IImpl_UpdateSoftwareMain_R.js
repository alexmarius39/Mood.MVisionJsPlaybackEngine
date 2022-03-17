define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var IImpl_UpdateSoftwareMain_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_UpdateSoftwareMain_R(owner) {
                this._owner = owner;
            }
            //====================================================
            IImpl_UpdateSoftwareMain_R.prototype.update = function (error, context, callback) {
                return this._owner.update(error, context, callback);
            };
            return IImpl_UpdateSoftwareMain_R;
        }());
        rm_nonrenderingservices.IImpl_UpdateSoftwareMain_R = IImpl_UpdateSoftwareMain_R;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=IImpl_UpdateSoftwareMain_R.js.map