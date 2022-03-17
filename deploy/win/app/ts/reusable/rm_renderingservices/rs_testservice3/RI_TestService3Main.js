"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var RI_TestService3Main = (function () {
        function RI_TestService3Main(owner) {
            this._owner = owner;
        }
        RI_TestService3Main.prototype.test = function (iteration, error, context, callback) {
            return this._owner.test(iteration, error, context, callback);
        };
        return RI_TestService3Main;
    }());
    rm_renderingservices.RI_TestService3Main = RI_TestService3Main;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RI_TestService3Main.js.map