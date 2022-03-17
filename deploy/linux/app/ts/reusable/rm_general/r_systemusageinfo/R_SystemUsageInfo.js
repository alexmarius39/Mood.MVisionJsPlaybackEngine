"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var rmGeneralSystemStorageInfo = require("../../../../../app/ts/reusable/rm_general/r_systemstorageinfo/R_SystemStorageInfo");
var rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var R_SystemUsageInfo = (function (_super) {
        __extends(R_SystemUsageInfo, _super);
        function R_SystemUsageInfo() {
            var _this = _super.call(this) || this;
            _this._totalMemory = 0;
            _this._availableMemory = 0;
            _this._systemStorageUnits = new Array();
            return _this;
        }
        R_SystemUsageInfo.prototype.copyFromJson = function (jsonSystemUsageInfo) {
            if (jsonSystemUsageInfo != null) {
                this._totalMemory = jsonSystemUsageInfo._totalMemory;
                this._availableMemory = jsonSystemUsageInfo._availableMemory;
                for (var i = 0; i < jsonSystemUsageInfo._systemStorageUnits.length; i++) {
                    var storageInfo = new rmGeneralSystemStorageInfo.rm_general.R_SystemStorageInfo();
                    storageInfo.copyFromJson(jsonSystemUsageInfo._systemStorageUnits[i]);
                    this._systemStorageUnits.push(storageInfo);
                }
            }
        };
        R_SystemUsageInfo.prototype.getTotalMemory = function () {
            return this._totalMemory;
        };
        R_SystemUsageInfo.prototype.setTotalMemory = function (totalMemory) {
            this._totalMemory = totalMemory;
        };
        R_SystemUsageInfo.prototype.getAvailableMemory = function () {
            return this._availableMemory;
        };
        R_SystemUsageInfo.prototype.setAvailableMemory = function (availableMemory) {
            this._availableMemory = availableMemory;
        };
        R_SystemUsageInfo.prototype.getSystemStorageUnits = function () {
            return this._systemStorageUnits;
        };
        R_SystemUsageInfo.prototype.setSystemStorageUnits = function (systemStorageUnits) {
            this._systemStorageUnits = systemStorageUnits.slice();
        };
        R_SystemUsageInfo.prototype.addSystemStorage = function (systemStorage) {
            this._systemStorageUnits.push(systemStorage);
        };
        return R_SystemUsageInfo;
    }(rmGeneralEntity.rm_general.R_Entity));
    rm_general.R_SystemUsageInfo = R_SystemUsageInfo;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=R_SystemUsageInfo.js.map