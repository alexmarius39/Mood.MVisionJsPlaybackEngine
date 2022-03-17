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
var rmStartupSettings = require("./RE_StartupSettings");
var rmEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_general;
(function (rm_general) {
    var REFactory_StartupSettings = (function (_super) {
        __extends(REFactory_StartupSettings, _super);
        function REFactory_StartupSettings() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        REFactory_StartupSettings.prototype.createEntity = function (entityName, error) {
            return new rmStartupSettings.rm_general.RE_StartupSettings();
        };
        return REFactory_StartupSettings;
    }(rmEntityFactory.rm_general.RFactory_Entity));
    rm_general.REFactory_StartupSettings = REFactory_StartupSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=REFactory_StartupSettings.js.map