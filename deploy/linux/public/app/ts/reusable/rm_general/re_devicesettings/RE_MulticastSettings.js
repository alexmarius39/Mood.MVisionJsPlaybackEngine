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
        var RE_MulticastSettings = /** @class */ (function (_super) {
            __extends(RE_MulticastSettings, _super);
            function RE_MulticastSettings() {
                var _this = _super.call(this) || this;
                _this._multicastAddress = null;
                _this._multicastPort = null;
                return _this;
            }
            RE_MulticastSettings.prototype.setAddress = function (multicastAddress) {
                this._multicastAddress = multicastAddress;
            };
            RE_MulticastSettings.prototype.getAddress = function () {
                return this._multicastAddress;
            };
            RE_MulticastSettings.prototype.setPort = function (multicastPort) {
                this._multicastPort = multicastPort;
            };
            RE_MulticastSettings.prototype.getPort = function () {
                return this._multicastPort;
            };
            return RE_MulticastSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_MulticastSettings = RE_MulticastSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_MulticastSettings.js.map