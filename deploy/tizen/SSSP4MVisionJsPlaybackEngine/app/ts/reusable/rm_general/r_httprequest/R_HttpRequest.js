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
        var R_HttpRequest = /** @class */ (function (_super) {
            __extends(R_HttpRequest, _super);
            //----------- constructor 
            function R_HttpRequest() {
                var _this = _super.call(this) || this;
                _this._urlPath = null;
                _this._urlParams = null;
                _this._headers = null;
                _this._arrayCDHeaders = new Array();
                _this._method = null;
                _this._body = null;
                _this._boundary = null;
                return _this;
            }
            //-----------------------
            R_HttpRequest.prototype.reset = function () {
                this._urlPath = null;
                this._urlParams = null;
                this._headers = null;
                this._arrayCDHeaders.splice(0, this._arrayCDHeaders.length);
                this._method = null;
                this._body = null;
                this._boundary = null;
            };
            R_HttpRequest.prototype.getMethod = function () {
                return this._method;
            };
            R_HttpRequest.prototype.setMethod = function (method) {
                this._method = method;
            };
            R_HttpRequest.prototype.getUrlPath = function () {
                return this._urlPath;
            };
            R_HttpRequest.prototype.setUrlPath = function (urlPath) {
                this._urlPath = urlPath;
            };
            R_HttpRequest.prototype.getUrlParams = function () {
                return this._urlParams;
            };
            R_HttpRequest.prototype.setUrlParams = function (urlParams) {
                this._urlParams = urlParams;
            };
            R_HttpRequest.prototype.getHeaders = function () {
                return this._headers;
            };
            R_HttpRequest.prototype.setHeaders = function (headers) {
                this._headers = headers;
            };
            R_HttpRequest.prototype.getBody = function () {
                return this._body;
            };
            R_HttpRequest.prototype.setBody = function (body) {
                this._body = body;
            };
            R_HttpRequest.prototype.getBoundary = function () {
                return this._boundary;
            };
            R_HttpRequest.prototype.setBoundary = function (boundary) {
                this._boundary = boundary;
            };
            R_HttpRequest.prototype.getHeader = function (name) {
                var value = undefined;
                if (this._headers !== null) {
                    var jsonHeaders = JSON.parse(this._headers);
                    for (var header_name in jsonHeaders) {
                        if (name === header_name) {
                            value = jsonHeaders[name];
                            break;
                        }
                    }
                }
                return (typeof (value) === 'undefined') ? null : value;
            };
            R_HttpRequest.prototype.addHeader = function (name, value) {
                var header_found = false;
                var jsonHeaders = {};
                if (this._headers !== null && this._headers.length > 0) {
                    jsonHeaders = JSON.parse(this._headers);
                    for (var header_name in jsonHeaders) {
                        if (name === header_name) {
                            header_found = true;
                            break;
                        }
                    }
                }
                if (header_found === false) {
                    jsonHeaders[name] = value;
                }
                this._headers = JSON.stringify(jsonHeaders);
            };
            R_HttpRequest.prototype.getCDHeaders = function () {
                return this._arrayCDHeaders;
            };
            R_HttpRequest.prototype.addCDHeader = function (aCDHeader) {
                this._arrayCDHeaders.push(aCDHeader);
            };
            R_HttpRequest.prototype.setMultipart = function () {
                this.addHeader('Content-Type', "multipart/form-data; boundary=" + this._boundary);
            };
            return R_HttpRequest;
        }(rmGeneralEntity.rm_general.R_Entity));
        rm_general.R_HttpRequest = R_HttpRequest;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_HttpRequest.js.map