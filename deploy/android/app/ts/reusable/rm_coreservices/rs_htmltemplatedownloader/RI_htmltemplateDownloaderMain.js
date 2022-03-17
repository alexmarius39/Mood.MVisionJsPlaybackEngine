"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_coreservices;
(function (rm_coreservices) {
    var RI_HtmlTemplateDownloaderMain = (function () {
        function RI_HtmlTemplateDownloaderMain(owner) {
            this._owner = owner;
        }
        RI_HtmlTemplateDownloaderMain.prototype.download = function (error, context, callback) {
            return this._owner.download(error, context, callback);
        };
        return RI_HtmlTemplateDownloaderMain;
    }());
    rm_coreservices.RI_HtmlTemplateDownloaderMain = RI_HtmlTemplateDownloaderMain;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RI_htmltemplateDownloaderMain.js.map