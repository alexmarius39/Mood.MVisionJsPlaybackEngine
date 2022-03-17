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
        var R_ContentDispositionHeader = /** @class */ (function (_super) {
            __extends(R_ContentDispositionHeader, _super);
            function R_ContentDispositionHeader() {
                var _this = _super.call(this) || this;
                _this._bAddEndBoundary = false;
                _this._isHeaderFileBinary = false;
                _this._aHeaderFile = null;
                return _this;
            }
            R_ContentDispositionHeader.prototype.getHeaderName = function () {
                return this._headerName;
            };
            R_ContentDispositionHeader.prototype.setHeaderName = function (headerName) {
                this._headerName = headerName;
            };
            R_ContentDispositionHeader.prototype.getHeaderValue = function () {
                return this._headerValue;
            };
            R_ContentDispositionHeader.prototype.setHeaderValue = function (headerValue) {
                this._headerValue = headerValue;
            };
            R_ContentDispositionHeader.prototype.isHeaderFileBinary = function () {
                return this._isHeaderFileBinary;
            };
            R_ContentDispositionHeader.prototype.setHeaderFileBinary = function (isHeaderFileBinary) {
                this._isHeaderFileBinary = isHeaderFileBinary;
            };
            R_ContentDispositionHeader.prototype.getHeaderFile = function () {
                return this._aHeaderFile;
            };
            R_ContentDispositionHeader.prototype.setHeaderFile = function (aHeaderFile) {
                this._aHeaderFile = aHeaderFile;
            };
            return R_ContentDispositionHeader;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_ContentDispositionHeader = R_ContentDispositionHeader;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_ContentDispositionHeader.js.map