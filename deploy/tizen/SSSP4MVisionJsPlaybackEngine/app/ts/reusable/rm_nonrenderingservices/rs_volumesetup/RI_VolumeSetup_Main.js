define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RI_VolumeSetupMain = /** @class */ (function () {
            //----------- constructor 
            function RI_VolumeSetupMain(owner) {
                this._owner = owner;
            }
            RI_VolumeSetupMain.prototype.init = function (error) {
                this._owner.init(error);
            };
            RI_VolumeSetupMain.prototype.getVolume = function (audioProperties, error, context, callback) {
                this._owner.getVolume(audioProperties, error, context, callback);
            };
            RI_VolumeSetupMain.prototype.setVolume = function (audioProperties, error, context, callback) {
                this._owner.setVolume(audioProperties, error, context, callback);
            };
            return RI_VolumeSetupMain;
        }());
        rm_nonrenderingservices.RI_VolumeSetupMain = RI_VolumeSetupMain;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RI_VolumeSetup_Main.js.map