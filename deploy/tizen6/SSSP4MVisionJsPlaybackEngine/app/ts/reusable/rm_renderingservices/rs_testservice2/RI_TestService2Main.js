define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //==================================================================                                                     
    var rm_renderingservices;
    (function (rm_renderingservices) {
        var RI_TestService2Main = /** @class */ (function () {
            //----------- constructor 
            function RI_TestService2Main(owner) {
                this._owner = owner;
            }
            //--------------------------------------------------
            RI_TestService2Main.prototype.test = function (iteration, error, context, callback) {
                return this._owner.test(iteration, error, context, callback);
            };
            return RI_TestService2Main;
        }());
        rm_renderingservices.RI_TestService2Main = RI_TestService2Main;
    })(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
});
//# sourceMappingURL=RI_TestService2Main.js.map