"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_general;
(function (rm_general) {
    var IImpl_Service_Config = (function () {
        function IImpl_Service_Config(owner) {
            this._owner = owner;
        }
        IImpl_Service_Config.prototype.init = function (aConfig, error, context, callback) {
            return this._owner.init(aConfig, error, context, callback);
        };
        IImpl_Service_Config.prototype.setDebug = function (debug) {
            return this._owner.setDebug(debug);
        };
        IImpl_Service_Config.prototype.getDebug = function () {
            return this._owner.getDebug();
        };
        IImpl_Service_Config.prototype.setMainDebug = function (mainDebug) {
            return this._owner.setMainDebug(mainDebug);
        };
        IImpl_Service_Config.prototype.getMainDebug = function () {
            return this._owner.getMainDebug();
        };
        IImpl_Service_Config.prototype.setDebugScenarioNumber = function (debugScenarioNumber) {
            return this._owner.setDebugScenarioNumber(debugScenarioNumber);
        };
        IImpl_Service_Config.prototype.getDebugScenarioNumber = function () {
            return this._owner.getDebugScenarioNumber();
        };
        return IImpl_Service_Config;
    }());
    rm_general.IImpl_Service_Config = IImpl_Service_Config;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=IImpl_Service_Config.js.map