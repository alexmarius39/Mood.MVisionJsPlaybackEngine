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
define(["require", "exports", "../../../../../app/ts/reusable/rm_general/re_filetransfer/RE_FileTransfer", "../../../../../app/ts/reusable/rm_general/r_entity/RFactory_Entity"], function (require, exports, rmGeneralFileTransfer, rmGeneralEntityFactory) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var REFactory_FileTransfer = /** @class */ (function (_super) {
            __extends(REFactory_FileTransfer, _super);
            function REFactory_FileTransfer() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            REFactory_FileTransfer.prototype.createEntity = function (entityName, error) {
                return new rmGeneralFileTransfer.rm_general.RE_FileTransfer();
            };
            return REFactory_FileTransfer;
        }(rmGeneralEntityFactory.rm_general.RFactory_Entity));
        rm_general.REFactory_FileTransfer = REFactory_FileTransfer;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=REFactory_FileTransfer.js.map