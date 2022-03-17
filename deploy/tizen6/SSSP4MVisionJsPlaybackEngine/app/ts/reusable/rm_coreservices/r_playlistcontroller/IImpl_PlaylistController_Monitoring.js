define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var IImpl_PlaylistController_Monitoring = /** @class */ (function () {
            //----------- constructor 
            function IImpl_PlaylistController_Monitoring(owner) {
                this._owner = owner;
                this._monitoringService = null;
            }
            //-----------------------------------------
            IImpl_PlaylistController_Monitoring.prototype.setMonitoringService = function (aMonitoringService) {
                this._monitoringService = aMonitoringService;
            };
            //-----------------------------------------
            IImpl_PlaylistController_Monitoring.prototype.getMonitoringService = function () {
                return this._monitoringService;
            };
            //---------------------------------------------
            IImpl_PlaylistController_Monitoring.prototype.sendLastPlayedItem = function (paramIdentifier) {
                if (this._monitoringService != null) {
                    this._monitoringService._iMonitoringMain.receivedLastPlayedItem(paramIdentifier);
                }
            };
            return IImpl_PlaylistController_Monitoring;
        }());
        rm_coreservices.IImpl_PlaylistController_Monitoring = IImpl_PlaylistController_Monitoring;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=IImpl_PlaylistController_Monitoring.js.map