"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_general;
(function (rm_general) {
    var IImpl_Service_Run = (function () {
        function IImpl_Service_Run(owner) {
            this._owner = owner;
        }
        IImpl_Service_Run.prototype.setServiceStatus = function (serviceStatus) {
            return this._owner.setServiceStatus(serviceStatus);
        };
        IImpl_Service_Run.prototype.getServiceStatus = function () {
            return this._owner.getServiceStatus();
        };
        IImpl_Service_Run.prototype.run = function (error, context, callback) {
            this._owner.run(error, context, callback);
        };
        IImpl_Service_Run.prototype.shutdown = function (error, context, callback) {
            this._owner.shutdown(error, context, callback);
        };
        IImpl_Service_Run.prototype.setInterruptCallback = function (interruptCallback) {
            this._owner.setInterruptCallback(interruptCallback);
        };
        IImpl_Service_Run.prototype.isInterrupted = function () {
            return this._owner.isInterrupted();
        };
        IImpl_Service_Run.prototype.setIsInterrupted = function (isInterrupted) {
            this.setIsInterrupted(isInterrupted);
        };
        IImpl_Service_Run.prototype.addPostponedServiceAbstractName = function (postponeServiceAbstractName) {
            this._owner.addPostponedServiceAbstractName(postponeServiceAbstractName);
        };
        IImpl_Service_Run.prototype.getPostponedServiceAbstractNameList = function () {
            return this._owner.getPostponedServiceAbstractNameList();
        };
        return IImpl_Service_Run;
    }());
    rm_general.IImpl_Service_Run = IImpl_Service_Run;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=IImpl_Service_Run.js.map