"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_general;
(function (rm_general) {
    var R_Guid = (function () {
        function R_Guid(guid) {
            if (!guid) {
                throw new TypeError("Invalid argument; `value` has no value.");
            }
            this.value = R_Guid.EMPTY;
            if (guid && R_Guid.isGuid(guid)) {
                this.value = guid;
            }
        }
        R_Guid.isGuid = function (guid) {
            var value = guid.toString();
            return guid && (guid instanceof R_Guid || R_Guid.validator.test(value));
        };
        R_Guid.create = function () {
            return new R_Guid([R_Guid.gen(2), R_Guid.gen(1), R_Guid.gen(1), R_Guid.gen(1), R_Guid.gen(3)].join("-"));
        };
        R_Guid.createEmpty = function () {
            return new R_Guid("emptyguid");
        };
        R_Guid.parse = function (guid) {
            return new R_Guid(guid);
        };
        R_Guid.raw = function () {
            return [R_Guid.gen(2), R_Guid.gen(1), R_Guid.gen(1), R_Guid.gen(1), R_Guid.gen(3)].join("-");
        };
        R_Guid.gen = function (count) {
            var out = "";
            for (var i = 0; i < count; i++) {
                out += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            }
            return out;
        };
        R_Guid.prototype.equals = function (other) {
            return R_Guid.isGuid(other) && this.value === other.toString();
        };
        R_Guid.prototype.isEmpty = function () {
            return this.value === R_Guid.EMPTY;
        };
        R_Guid.prototype.toString = function () {
            return this.value;
        };
        R_Guid.prototype.toJSON = function () {
            return {
                value: this.value,
            };
        };
        R_Guid.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
        R_Guid.EMPTY = "00000000-0000-0000-0000-000000000000";
        return R_Guid;
    }());
    rm_general.R_Guid = R_Guid;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=r_guid.js.map