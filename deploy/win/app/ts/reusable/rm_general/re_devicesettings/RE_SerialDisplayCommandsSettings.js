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
    var RE_SerialDisplayCommandsSettings = (function (_super) {
        __extends(RE_SerialDisplayCommandsSettings, _super);
        function RE_SerialDisplayCommandsSettings() {
            var _this = _super.call(this) || this;
            _this._commandsMap = null;
            return _this;
        }
        RE_SerialDisplayCommandsSettings.prototype.setCommandsMap = function (commandsMap) {
            this._commandsMap = commandsMap;
        };
        RE_SerialDisplayCommandsSettings.prototype.getCommandsMap = function () {
            return this._commandsMap;
        };
        return RE_SerialDisplayCommandsSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_SerialDisplayCommandsSettings = RE_SerialDisplayCommandsSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_SerialDisplayCommandsSettings.js.map