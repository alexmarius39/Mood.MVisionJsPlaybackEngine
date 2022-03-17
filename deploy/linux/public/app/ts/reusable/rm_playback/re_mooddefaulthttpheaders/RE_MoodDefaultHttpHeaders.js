var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/re_httpheaders/RE_HttpHeaders"], function (require, exports, rmHttpHeaders) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_playback;
    (function (rm_playback) {
        var RE_MoodDefaultHttpHeaders = /** @class */ (function (_super) {
            __extends(RE_MoodDefaultHttpHeaders, _super);
            //----------- constructor 
            function RE_MoodDefaultHttpHeaders() {
                return _super.call(this) || this;
            }
            // -----------------------------------
            RE_MoodDefaultHttpHeaders.prototype.initAHttpHeadersGroup = function (strHttpHeadersGroupName) {
                if (strHttpHeadersGroupName === void 0) { strHttpHeadersGroupName = "mood_default_http_headers_set"; }
                var aHttpHeader = this._aSrvLocator._iEntityCreation.createDefaultHttpHeader(null);
                aHttpHeader.setHeaderName("Authorization");
                aHttpHeader.setHeaderValue("FB5ED944377FC2E532B28C3F5B844A94BE01C072FC99A34A95FBD99278468D64");
                this.addHttpHeader(aHttpHeader);
                return 0;
            };
            //------------------------
            RE_MoodDefaultHttpHeaders.prototype.injectDependencies = function (aSrvContainer, aSrvLocator, aSrvLog, error) {
                _super.prototype.injectDependencies.call(this, aSrvContainer, aSrvLocator, aSrvLog, error);
                this.initAHttpHeadersGroup();
                return 0;
            };
            return RE_MoodDefaultHttpHeaders;
        }(rmHttpHeaders.rm_general.RE_HttpHeaders));
        rm_playback.RE_MoodDefaultHttpHeaders = RE_MoodDefaultHttpHeaders;
    })(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
});
//# sourceMappingURL=RE_MoodDefaultHttpHeaders.js.map