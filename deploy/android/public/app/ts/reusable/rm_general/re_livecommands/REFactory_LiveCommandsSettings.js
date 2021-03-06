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
define(["require", "exports", "./RE_LiveCommandsSettings", "../r_entity/RFactory_Entity"], function (require, exports, rmLiveCommandsSettings, rmEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RFactory_LiveCommandsSettings = /** @class */ (function (_super) {
            __extends(RFactory_LiveCommandsSettings, _super);
            function RFactory_LiveCommandsSettings() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_LiveCommandsSettings.prototype.createEntity = function (entityName, error) {
                return new rmLiveCommandsSettings.rm_general.RE_LiveCommandsSettings;
            };
            return RFactory_LiveCommandsSettings;
        }(rmEntityFactory.rm_general.RFactory_Entity));
        rm_general.RFactory_LiveCommandsSettings = RFactory_LiveCommandsSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=REFactory_LiveCommandsSettings.js.map