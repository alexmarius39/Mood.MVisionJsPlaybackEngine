define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_transversalservices;
    (function (rm_transversalservices) {
        var RI_ActivityLogServiceMessage = /** @class */ (function () {
            function RI_ActivityLogServiceMessage(owner) {
                this._owner = owner;
            }
            RI_ActivityLogServiceMessage.prototype.addLogMessage = function (messageType, messagePrefix, message, error, context, callback) {
                return this._owner.addLogMessage(messageType, messagePrefix, message, error, context, callback);
            };
            RI_ActivityLogServiceMessage.prototype.init = function (error) {
                this._owner.init(error);
            };
            RI_ActivityLogServiceMessage.prototype.startActivityLogService = function (error, context, callback) {
                return this._owner.startActivityLogService(error, context, callback);
            };
            RI_ActivityLogServiceMessage.prototype.createActivityLogReport = function (error, context, callback) {
                return this._owner.createActivityLogReport(error, context, callback);
            };
            return RI_ActivityLogServiceMessage;
        }());
        rm_transversalservices.RI_ActivityLogServiceMessage = RI_ActivityLogServiceMessage;
    })(rm_transversalservices = exports.rm_transversalservices || (exports.rm_transversalservices = {}));
});
//# sourceMappingURL=RI_ActivityLogService_Message.js.map