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
var rmEntity = require("../r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var RE_FlashMediaSettings = (function (_super) {
        __extends(RE_FlashMediaSettings, _super);
        function RE_FlashMediaSettings() {
            var _this = _super.call(this) || this;
            _this._useAirRuntime = null;
            return _this;
        }
        RE_FlashMediaSettings.prototype.setUseAirRuntime = function (useAirRuntime) {
            this._useAirRuntime = useAirRuntime;
        };
        RE_FlashMediaSettings.prototype.getUseAirRuntime = function () {
            return this._useAirRuntime;
        };
        return RE_FlashMediaSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_FlashMediaSettings = RE_FlashMediaSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_FlashMediaSettings.js.map