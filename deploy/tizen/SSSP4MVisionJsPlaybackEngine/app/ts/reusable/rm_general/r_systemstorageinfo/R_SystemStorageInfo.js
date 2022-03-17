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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_entity/R_Entity"], function (require, exports, rmEntity) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var R_SystemStorageInfo = /** @class */ (function (_super) {
            __extends(R_SystemStorageInfo, _super);
            //----------- constructor 
            function R_SystemStorageInfo() {
                var _this = _super.call(this) || this;
                _this._type = null;
                _this._capacity = null;
                _this._availableCapacity = null;
                return _this;
            }
            R_SystemStorageInfo.prototype.copyFromJson = function (jsonSystemStorageInfo) {
                this._type = jsonSystemStorageInfo._type;
                this._capacity = jsonSystemStorageInfo._capacity;
                this._availableCapacity = jsonSystemStorageInfo._availableCapacity;
            };
            R_SystemStorageInfo.prototype.getType = function () {
                return this._type;
            };
            R_SystemStorageInfo.prototype.setType = function (type) {
                this._type = type;
            };
            R_SystemStorageInfo.prototype.getCapacity = function () {
                return this._capacity;
            };
            R_SystemStorageInfo.prototype.setCapacity = function (capacity) {
                this._capacity = capacity;
            };
            R_SystemStorageInfo.prototype.getAvailableCapacity = function () {
                return this._availableCapacity;
            };
            R_SystemStorageInfo.prototype.setAvailableCapacity = function (availableCapacity) {
                this._availableCapacity = availableCapacity;
            };
            return R_SystemStorageInfo;
        }(rmEntity.rm_general.R_Entity));
        rm_general.R_SystemStorageInfo = R_SystemStorageInfo;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_SystemStorageInfo.js.map