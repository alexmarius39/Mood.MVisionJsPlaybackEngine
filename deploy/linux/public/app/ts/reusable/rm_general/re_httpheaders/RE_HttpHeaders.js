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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmGeneralEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //--------------------------------------------------------------------------------
    var rm_general;
    (function (rm_general) {
        var RE_HttpHeaders = /** @class */ (function (_super) {
            __extends(RE_HttpHeaders, _super);
            //----------- constructor 
            function RE_HttpHeaders() {
                var _this = _super.call(this) || this;
                _this._list = new Array();
                _this._map = new Map();
                return _this;
            }
            // -----------------------------------
            RE_HttpHeaders.prototype.addHttpHeader = function (aNewHttpHeader) {
                this._list.push(aNewHttpHeader);
                this._map.set(aNewHttpHeader.getHeaderName(), aNewHttpHeader);
                return 0;
            };
            // -----------------------------------
            RE_HttpHeaders.prototype.getHttpHeaderByName = function (strHttpHeaderName) {
                return this._map.get(strHttpHeaderName);
            };
            // -----------------------------------
            RE_HttpHeaders.prototype.getHttpHeaderByIdx = function (iHttpHeaderIdx) {
                return this._list[iHttpHeaderIdx];
            };
            // -----------------------------------
            RE_HttpHeaders.prototype.getHttpHeaderList = function () {
                return this._list;
            };
            // -----------------------------------
            RE_HttpHeaders.prototype.initAHttpHeadersGroup = function (strHttpHeadersGroupName) {
                return 0; //will be rewriten in descendants 
            };
            return RE_HttpHeaders;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.RE_HttpHeaders = RE_HttpHeaders;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_HttpHeaders.js.map