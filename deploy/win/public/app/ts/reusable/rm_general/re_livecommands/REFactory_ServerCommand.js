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
define(["require", "exports", "./RE_ServerCommand", "../r_entity/RFactory_Entity"], function (require, exports, rmServerCommand, rmEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var RFactory_ServerCommand = /** @class */ (function (_super) {
            __extends(RFactory_ServerCommand, _super);
            function RFactory_ServerCommand() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RFactory_ServerCommand.prototype.createEntity = function (entityName, error) {
                return new rmServerCommand.rm_general.RE_ServerCommand;
            };
            return RFactory_ServerCommand;
        }(rmEntityFactory.rm_general.RFactory_Entity));
        rm_general.RFactory_ServerCommand = RFactory_ServerCommand;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=REFactory_ServerCommand.js.map