"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_coreservices;
(function (rm_coreservices) {
    var IImpl_PlaylistDownloaderMain_R = (function () {
        function IImpl_PlaylistDownloaderMain_R(owner) {
            this._owner = owner;
        }
        IImpl_PlaylistDownloaderMain_R.prototype.download = function (error, context, callback) {
            return this._owner.download(error, context, callback);
        };
        IImpl_PlaylistDownloaderMain_R.prototype.updatePlaylist = function (error, context, callback) {
            return this._owner.updatePlaylist(error, context, callback);
        };
        return IImpl_PlaylistDownloaderMain_R;
    }());
    rm_coreservices.IImpl_PlaylistDownloaderMain_R = IImpl_PlaylistDownloaderMain_R;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=IImpl_PlaylistDownloaderMain_R.js.map