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
        var RE_LiveCommandsSettings = /** @class */ (function (_super) {
            __extends(RE_LiveCommandsSettings, _super);
            //----------- constructor 
            function RE_LiveCommandsSettings() {
                return _super.call(this) || this;
            }
            RE_LiveCommandsSettings.prototype.copyFromJson = function (jsonSystemStorageInfo) {
                this._strAuthTokenRelativePath = jsonSystemStorageInfo._strAuthTokenRelativePath;
                this._strSignalRHubRelativePath = jsonSystemStorageInfo._strSignalRHubRelativePath;
                this._strSignalRHubMethodName = jsonSystemStorageInfo._strSignalRHubMethodName;
            };
            RE_LiveCommandsSettings.prototype.getAuthTokenRelativePath = function () {
                return this._strAuthTokenRelativePath;
            };
            RE_LiveCommandsSettings.prototype.setAuthTokenRelativePath = function (strAuthTokenRelativePath) {
                this._strAuthTokenRelativePath = strAuthTokenRelativePath;
            };
            RE_LiveCommandsSettings.prototype.getSignalRHubRelativePath = function () {
                return this._strSignalRHubRelativePath;
            };
            RE_LiveCommandsSettings.prototype.setSignalRHubRelativePath = function (strSignalRHubRelativePath) {
                this._strSignalRHubRelativePath = strSignalRHubRelativePath;
            };
            RE_LiveCommandsSettings.prototype.getSignalRHubMethodName = function () {
                return this._strSignalRHubMethodName;
            };
            RE_LiveCommandsSettings.prototype.setSignalRHubMethodName = function (strSignalRHubMethodName) {
                this._strSignalRHubMethodName = strSignalRHubMethodName;
            };
            return RE_LiveCommandsSettings;
        }(rmEntity.rm_general.R_Entity));
        rm_general.RE_LiveCommandsSettings = RE_LiveCommandsSettings;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=RE_LiveCommandsSettings.js.map