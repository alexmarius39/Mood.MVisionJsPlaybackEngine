"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_renderingservices;
(function (rm_renderingservices) {
    var RI_ScreenshotMain = (function () {
        function RI_ScreenshotMain(owner) {
            this._owner = owner;
        }
        RI_ScreenshotMain.prototype.init = function (error) {
            this._owner.init(error);
        };
        RI_ScreenshotMain.prototype.saveFileAndReturnBytes = function (aScreenshotOptions, error, context, callback) {
            this._owner.saveFileAndReturnBytes(aScreenshotOptions, error, context, callback);
        };
        RI_ScreenshotMain.prototype.generateAndSendScreenshot = function (aScreenshotOptions, error, context, callback) {
            this._owner.generateAndSendScreenshot(aScreenshotOptions, error, context, callback);
        };
        return RI_ScreenshotMain;
    }());
    rm_renderingservices.RI_ScreenshotMain = RI_ScreenshotMain;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RI_Screenshot_Main.js.map