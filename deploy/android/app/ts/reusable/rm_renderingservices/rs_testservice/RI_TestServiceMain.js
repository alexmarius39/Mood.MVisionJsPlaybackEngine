"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var RI_TestServiceMain = (function () {
        function RI_TestServiceMain(owner) {
            this._owner = owner;
        }
        RI_TestServiceMain.prototype.test = function (iteration, error, context, callback) {
            return this._owner.test(iteration, error, context, callback);
        };
        return RI_TestServiceMain;
    }());
    rm_renderingservices.RI_TestServiceMain = RI_TestServiceMain;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RI_TestServiceMain.js.map