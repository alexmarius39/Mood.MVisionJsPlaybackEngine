define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_nonrenderingservices;
    (function (rm_nonrenderingservices) {
        var RI_LiveCommandsMain = /** @class */ (function () {
            //----------- constructor 
            function RI_LiveCommandsMain(owner) {
                this._owner = owner;
            }
            RI_LiveCommandsMain.prototype.init = function (error) {
                this._owner.init(error);
            };
            RI_LiveCommandsMain.prototype.startListener = function (aLiveCommandsSettings, error, context, callback) {
                this._owner.startListener(aLiveCommandsSettings, error, context, callback);
            };
            RI_LiveCommandsMain.prototype.runCommand = function (aServerCommand) {
                this._owner.runCommand(aServerCommand);
            };
            RI_LiveCommandsMain.prototype.sendScreenshot = function () {
                this.sendScreenshot();
            };
            RI_LiveCommandsMain.prototype.updatePlaylistAndContent = function (updateParams) {
                this.updatePlaylistAndContent(updateParams);
            };
            RI_LiveCommandsMain.prototype.sendMonitoring = function () {
                this.sendMonitoring();
            };
            RI_LiveCommandsMain.prototype.rebootDevice = function () {
                this.rebootDevice();
            };
            RI_LiveCommandsMain.prototype.setVolume = function () {
                this.setVolume();
            };
            return RI_LiveCommandsMain;
        }());
        rm_nonrenderingservices.RI_LiveCommandsMain = RI_LiveCommandsMain;
    })(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
});
//# sourceMappingURL=RI_LiveCommands_Main.js.map