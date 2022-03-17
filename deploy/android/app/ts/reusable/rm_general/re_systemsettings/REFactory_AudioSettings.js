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
var rmAudioSettings = require("./RE_AudioSettings");
var rmEntityFactory = require("../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity");
var rm_general;
(function (rm_general) {
    var REFactory_AudioSettings = (function (_super) {
        __extends(REFactory_AudioSettings, _super);
        function REFactory_AudioSettings() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        REFactory_AudioSettings.prototype.createEntity = function (entityName, error) {
            return new rmAudioSettings.rm_general.RE_AudioSettings();
        };
        return REFactory_AudioSettings;
    }(rmEntityFactory.rm_general.RFactory_Entity));
    rm_general.REFactory_AudioSettings = REFactory_AudioSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=REFactory_AudioSettings.js.map