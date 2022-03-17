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
var rmEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var RE_AppCommunicationSettings = (function (_super) {
        __extends(RE_AppCommunicationSettings, _super);
        function RE_AppCommunicationSettings() {
            var _this = _super.call(this) || this;
            _this._aMulticastSettings = null;
            _this._aP2PSettings = null;
            return _this;
        }
        RE_AppCommunicationSettings.prototype.setMulticastSettings = function (aMulticastSettings) {
            this._aMulticastSettings = aMulticastSettings;
        };
        RE_AppCommunicationSettings.prototype.getMulticastSettings = function () {
            return this._aMulticastSettings;
        };
        RE_AppCommunicationSettings.prototype.setP2PSettings = function (aP2PSettings) {
            this._aP2PSettings = aP2PSettings;
        };
        RE_AppCommunicationSettings.prototype.getP2PSettings = function () {
            return this._aP2PSettings;
        };
        return RE_AppCommunicationSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_AppCommunicationSettings = RE_AppCommunicationSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_AppCommunicationSettings.js.map