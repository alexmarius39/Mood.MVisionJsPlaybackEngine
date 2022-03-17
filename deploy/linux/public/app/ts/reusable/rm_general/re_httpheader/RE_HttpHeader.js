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
    var rm_general;
    (function (rm_general) {
        var RE_HttpHeader = /** @class */ (function (_super) {
            __extends(RE_HttpHeader, _super);
            //----------- constructor 
            function RE_HttpHeader() {
                var _this = _super.call(this) || this;
                _this._strHeaderName = "";
                _this._strHeaderValue = "";
                _this._bIsRequestHeader = false;
                _this._bIsResponseHeader = false;
                _this._bIsRepresentationHeader = false;
                _this._bIsPayloadHeader = false;
                return _this;
            }
            //------------------------------------- 
            RE_HttpHeader.prototype.getHeaderName = function () {
                return this._strHeaderName;
            };
            //------------------------------------- 
            RE_HttpHeader.prototype.setHeaderName = function (strHeaderName) {
                this._strHeaderName = strHeaderName;
            };
            //------------------------------------- 
            RE_HttpHeader.prototype.getHeaderValue = function () {
                return this._strHeaderValue;
            };
            //------------------------------------- 
            RE_HttpHeader.prototype.setHeaderValue = function (strHeaderValue) {
                this._strHeaderValue = strHeaderValue;
            };
            //------------------------------------- 
            RE_HttpHeader.prototype.isRequestHeader = function () {
                return this._bIsRequestHeader;
            };
            //------------------------------------- 
            RE_HttpHeader.prototype.setIsRequestHeader = function (bIsRequestHeader) {
                this._bIsRequestHeader = bIsRequestHeader;
            };
            //------------------------------------- 
            RE_HttpHeader.prototype.isResponseHeader = function () {
                return this._bIsResponseHeader;
            };
            //------------------------------------- 
            RE_HttpHeader.prototype.setIsResponseHeader = function (bIsResponseHeader) {
                this._bIsResponseHeader = bIsResponseHeader;
            };
            //---------------------------
            RE_HttpHeader.prototype.isRepresentationHeader = function () {
                return this._bIsResponseHeader;
            };
            //---------------------------
            RE_HttpHeader.prototype.setIsRepresentationHeader = function (bIsRepresentationHeader) {
                this._bIsRepresentationHeader = bIsRepresentationHeader;
            };
            //---------------------------
            RE_HttpHeader.prototype.isPayloadHeader = function () {
                return this._bIsPayloadHeader;
            };
            //---------------------------
            RE_HttpHeader.prototype.setIsPayloadHeader = function (bIsPayloadHeader) {
                this._bIsPayloadHeader = bIsPayloadHeader;
            };
            return RE_HttpHeader;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.RE_HttpHeader = RE_HttpHeader;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_HttpHeader.js.map