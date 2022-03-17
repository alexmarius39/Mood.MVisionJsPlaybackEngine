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
define(["require", "exports", "../r_entity/R_Entity"], function (require, exports, rmEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RE_ServerCommand = /** @class */ (function (_super) {
            __extends(RE_ServerCommand, _super);
            //----------- constructor 
            function RE_ServerCommand() {
                var _this = _super.call(this) || this;
                _this._nId = -1;
                _this._strParams = null;
                return _this;
            }
            RE_ServerCommand.prototype.copyFromJson = function (jsonSystemStorageInfo) {
                this._nId = jsonSystemStorageInfo._nId;
                this._strName = jsonSystemStorageInfo._strName;
                this._strParams = jsonSystemStorageInfo._strParams;
            };
            RE_ServerCommand.prototype.getId = function () {
                return this._nId;
            };
            RE_ServerCommand.prototype.setId = function (nId) {
                this._nId = nId;
            };
            RE_ServerCommand.prototype.getName = function () {
                return this._strName;
            };
            RE_ServerCommand.prototype.setName = function (strName) {
                this._strName = strName;
            };
            RE_ServerCommand.prototype.getParams = function () {
                return this._strParams;
            };
            RE_ServerCommand.prototype.setParams = function (strParams) {
                this._strParams = strParams;
            };
            return RE_ServerCommand;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_ServerCommand = RE_ServerCommand;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_ServerCommand.js.map