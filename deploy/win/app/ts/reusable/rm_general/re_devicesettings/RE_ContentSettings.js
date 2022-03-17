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
    var RE_ContentSettings = (function (_super) {
        __extends(RE_ContentSettings, _super);
        function RE_ContentSettings() {
            var _this = _super.call(this) || this;
            _this._aNetworkNotAvailableMessage = null;
            _this._aPurgeSettings = null;
            _this._aStoreTracksCountLimit = null;
            return _this;
        }
        RE_ContentSettings.prototype.setNetworkNotAvailableMessage = function (aMessage) {
            this._aNetworkNotAvailableMessage = aMessage;
        };
        RE_ContentSettings.prototype.getNetworkNotAvailableMessage = function () {
            return this._aNetworkNotAvailableMessage;
        };
        RE_ContentSettings.prototype.setPurgeSettings = function (aPurgeSettings) {
            this._aPurgeSettings = aPurgeSettings;
        };
        RE_ContentSettings.prototype.getPurgeSettings = function () {
            return this._aPurgeSettings;
        };
        RE_ContentSettings.prototype.setStoreTracksCountLimit = function (aCountLimit) {
            this._aStoreTracksCountLimit = aCountLimit;
        };
        RE_ContentSettings.prototype.getStoreTracksCountLimit = function () {
            return this._aStoreTracksCountLimit;
        };
        return RE_ContentSettings;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_ContentSettings = RE_ContentSettings;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_ContentSettings.js.map