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
define(["require", "exports", "../../../../../app/ts/reusable/rm_playback/re_mooddefaulthttpheaders/RE_MoodDefaultHttpHeaders", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmMoodDefaultHttpHeaders, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //-------------------------------------------------------------------------------
    var rm_playback;
    (function (rm_playback) {
        var RFactory_HttpHeader = /** @class */ (function (_super) {
            __extends(RFactory_HttpHeader, _super);
            function RFactory_HttpHeader() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_HttpHeader.prototype.createEntity = function (entityName, error) {
                return new rmMoodDefaultHttpHeaders.rm_playback.RE_MoodDefaultHttpHeaders();
            };
            return RFactory_HttpHeader;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_playback.RFactory_HttpHeader = RFactory_HttpHeader;
    })(rm_playback = exports.rm_playback || (exports.rm_playback = {}));
});
//# sourceMappingURL=REFactory_MoodDefaultHttpHeaders.js.map