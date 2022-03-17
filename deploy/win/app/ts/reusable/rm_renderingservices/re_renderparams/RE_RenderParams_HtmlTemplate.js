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
var rmRenderingServicesWebPage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebPage");
var rm_renderingservices;
(function (rm_renderingservices) {
    var RE_RenderParams_HtmlTemplate = (function (_super) {
        __extends(RE_RenderParams_HtmlTemplate, _super);
        function RE_RenderParams_HtmlTemplate() {
            var _this = _super.call(this) || this;
            _this._bIsHtmlTemplate = false;
            _this._sHtmlTemplateUrl = "";
            _this._sHtmlTemplateData = "";
            _this._sHtmlTemplatePlatformType = "windows";
            _this._bHtmlTemplateAutoplay = false;
            _this._nHtmlTemplateDuration = -1;
            _this._nHtmlTemplatePlayId = 1;
            return _this;
        }
        RE_RenderParams_HtmlTemplate.prototype.reset = function () {
            this._bIsHtmlTemplate = false;
            this._sHtmlTemplateUrl = "";
            this._sHtmlTemplateData = "";
            this._sHtmlTemplatePlatformType = "windows";
            this._bHtmlTemplateAutoplay = false;
            this._nHtmlTemplateDuration = -1;
            this._nHtmlTemplatePlayId = 1;
            return;
        };
        RE_RenderParams_HtmlTemplate.prototype.copy = function (src) {
            if (src == null)
                return 1;
            this._bIsHtmlTemplate = src.getIsHtmlTemplate();
            this._sHtmlTemplateUrl = src.getHtmlTemplateUrl();
            this._sHtmlTemplateData = src.getHtmlTemplateData();
            this._sHtmlTemplatePlatformType = src.getHtmlTemplatePlatformType();
            this._bHtmlTemplateAutoplay = src.getHtmlTemplateAutoplay();
            this._nHtmlTemplateDuration = src.getHtmlTemplateDuration();
            this._nHtmlTemplatePlayId = src.getHtmlTemplatePlayId();
            return 0;
        };
        RE_RenderParams_HtmlTemplate.prototype.setIsHtmlTemplate = function (bIsHtmlTemplate) {
            this._bIsHtmlTemplate = bIsHtmlTemplate;
        };
        RE_RenderParams_HtmlTemplate.prototype.getIsHtmlTemplate = function () {
            return this._bIsHtmlTemplate;
        };
        RE_RenderParams_HtmlTemplate.prototype.setHtmlTemplateUrl = function (sHtmlTemplateUrl) {
            this._sHtmlTemplateUrl = sHtmlTemplateUrl;
        };
        RE_RenderParams_HtmlTemplate.prototype.getHtmlTemplateUrl = function () {
            return this._sHtmlTemplateUrl;
        };
        RE_RenderParams_HtmlTemplate.prototype.setHtmlTemplateData = function (sHtmlTemplateData) {
            this._sHtmlTemplateData = sHtmlTemplateData;
        };
        RE_RenderParams_HtmlTemplate.prototype.getHtmlTemplateData = function () {
            return this._sHtmlTemplateData;
        };
        RE_RenderParams_HtmlTemplate.prototype.setHtmlTemplatePlatformType = function (sHtmlTemplatePlatformType) {
            this._sHtmlTemplatePlatformType = sHtmlTemplatePlatformType;
        };
        RE_RenderParams_HtmlTemplate.prototype.getHtmlTemplatePlatformType = function () {
            return this._sHtmlTemplatePlatformType;
        };
        RE_RenderParams_HtmlTemplate.prototype.setHtmlTemplateDuration = function (nHtmlTemplateDuration) {
            this._nHtmlTemplateDuration = nHtmlTemplateDuration;
        };
        RE_RenderParams_HtmlTemplate.prototype.getHtmlTemplateDuration = function () {
            return this._nHtmlTemplateDuration;
        };
        RE_RenderParams_HtmlTemplate.prototype.setHtmlTemplateAutoplay = function (bHtmlTemplateAutoplay) {
            this._bHtmlTemplateAutoplay = bHtmlTemplateAutoplay;
        };
        RE_RenderParams_HtmlTemplate.prototype.getHtmlTemplateAutoplay = function () {
            return this._bHtmlTemplateAutoplay;
        };
        RE_RenderParams_HtmlTemplate.prototype.setHtmlTemplatePlayId = function (nHtmlTemplatePlayId) {
            this._nHtmlTemplatePlayId = nHtmlTemplatePlayId;
        };
        RE_RenderParams_HtmlTemplate.prototype.getHtmlTemplatePlayId = function () {
            return this._nHtmlTemplatePlayId;
        };
        RE_RenderParams_HtmlTemplate.prototype.incPlayId = function () {
            ++this._nHtmlTemplatePlayId;
        };
        RE_RenderParams_HtmlTemplate.prototype.getHtmTemplateFinalUrl = function () {
            var htmlTemplateParameters = RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_Data + "=" + this._sHtmlTemplateData + "&"
                + RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_PlatformType + "=" + this._sHtmlTemplatePlatformType + "&"
                + RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_Duration + "=" + this._nHtmlTemplateDuration + "&"
                + RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_Autoplay + "=" + this._bHtmlTemplateAutoplay + "&"
                + RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_PlayId + "=" + this._nHtmlTemplatePlayId + "";
            return this._sHtmlTemplateUrl + "?" + htmlTemplateParameters;
        };
        RE_RenderParams_HtmlTemplate.prototype.getHtmTemplateBasicUrl = function () {
            return this._sHtmlTemplateUrl;
        };
        RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_Data = "data";
        RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_PlatformType = "platformType";
        RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_Autoplay = "autoPlay";
        RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_Duration = "duration";
        RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_PlayId = "playId";
        return RE_RenderParams_HtmlTemplate;
    }(rmRenderingServicesWebPage.rm_renderingservices.RE_RenderParams_WebPage));
    rm_renderingservices.RE_RenderParams_HtmlTemplate = RE_RenderParams_HtmlTemplate;
})(rm_renderingservices = exports.rm_renderingservices || (exports.rm_renderingservices = {}));
//# sourceMappingURL=RE_RenderParams_HtmlTemplate.js.map