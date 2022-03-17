import amRenderParametersHtmlPage  = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_WebPage");

export module am_renderingservices
{
  export interface AE_RenderParams_HtmlTemplate extends amRenderParametersHtmlPage.am_renderingservices.AE_RenderParams_WebPage
  {
        
    reset() : void;
    
    copy(src : AE_RenderParams_HtmlTemplate) : number;
  
    setIsHtmlTemplate(bIsHtmlTemplate : boolean) : void;
    getIsHtmlTemplate() : boolean;

    setHtmlTemplateUrl(sHtmlTemplateUrl : string) : void;
    getHtmlTemplateUrl() : string;

    setHtmlTemplateData(sHtmlTemplateData : string) : void;
    getHtmlTemplateData() : string;

    setHtmlTemplatePlatformType(sHtmlTemplatePlatformType : string) : void;
    getHtmlTemplatePlatformType() : string;

    setHtmlTemplateDuration(nHtmlTemplateDuration : number) : void;
    getHtmlTemplateDuration() : number;

    setHtmlTemplateAutoplay(bHtmlTemplateAutoplay : boolean) : void;
    getHtmlTemplateAutoplay() : boolean;

    setHtmlTemplatePlayId(nHtmlTemplatePlayId : number) : void;
    getHtmlTemplatePlayId() : number;
    incPlayId() : void;

    getHtmTemplateFinalUrl() : string;
    getHtmTemplateBasicUrl() : string;

  }

} 