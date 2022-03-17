import amRenderParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_HtmlTemplate");

import rmRenderingServicesWebPage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebPage");

export module rm_renderingservices
{
  export class RE_RenderParams_HtmlTemplate extends rmRenderingServicesWebPage.rm_renderingservices.RE_RenderParams_WebPage
                                            implements amRenderParameters.am_renderingservices.AE_RenderParams_HtmlTemplate
                                            
  {
  
    _bIsHtmlTemplate           : boolean ;

    _sHtmlTemplateUrl          : string;

    _sHtmlTemplateData         : string;
    _sHtmlTemplatePlatformType : string; //default windows
    _bHtmlTemplateAutoplay     : boolean ; 
    _nHtmlTemplateDuration     : number;
    _nHtmlTemplatePlayId       : number;
    

    static _sHtmlTemplateParamName_Data          : string = "data";
    static _sHtmlTemplateParamName_PlatformType  : string = "platformType"; 
    static _sHtmlTemplateParamName_Autoplay      : string = "autoPlay"; 
    static _sHtmlTemplateParamName_Duration      : string = "duration"; 
    static _sHtmlTemplateParamName_PlayId        : string = "playId"; 

    //---------------------------
    constructor()
    {
      super();

      this._bIsHtmlTemplate           = false;

      this._sHtmlTemplateUrl          = "";

      this._sHtmlTemplateData         = "";
      this._sHtmlTemplatePlatformType = "windows"; //"android"
      this._bHtmlTemplateAutoplay     = false; //true  
      this._nHtmlTemplateDuration     = -1;
      this._nHtmlTemplatePlayId       = 1 ;
    }
    
    //--------------------------
    public reset() : void
    {
      this._bIsHtmlTemplate           = false;

      this._sHtmlTemplateUrl          = "";

      this._sHtmlTemplateData         = "";
      this._sHtmlTemplatePlatformType = "windows"; //"android"
      this._bHtmlTemplateAutoplay     = false; //true  
      this._nHtmlTemplateDuration     = -1;
      this._nHtmlTemplatePlayId       = 1 ;
      return;
    }    

    
    //------------
    public copy(src : amRenderParameters.am_renderingservices.AE_RenderParams_HtmlTemplate) : number
    {
      if (src == null)
        return 1;
      this._bIsHtmlTemplate           = src.getIsHtmlTemplate();

      this._sHtmlTemplateUrl          = src.getHtmlTemplateUrl();

      this._sHtmlTemplateData         = src.getHtmlTemplateData();
      this._sHtmlTemplatePlatformType = src.getHtmlTemplatePlatformType(); 
      this._bHtmlTemplateAutoplay     = src.getHtmlTemplateAutoplay(); 
      this._nHtmlTemplateDuration     = src.getHtmlTemplateDuration();
      this._nHtmlTemplatePlayId       = src.getHtmlTemplatePlayId();
      return 0;
    }


    //---------------
    public setIsHtmlTemplate(bIsHtmlTemplate : boolean) : void
    {
      this._bIsHtmlTemplate = bIsHtmlTemplate;
    }

    //---------------
    public getIsHtmlTemplate() : boolean
    {
      return this._bIsHtmlTemplate;
    }


    //---------------
    public setHtmlTemplateUrl(sHtmlTemplateUrl : string) : void
    {
      this._sHtmlTemplateUrl = sHtmlTemplateUrl;
    }

    //---------------
    public getHtmlTemplateUrl() : string
    {
      return this._sHtmlTemplateUrl;
    }
    

    //---------------
    public setHtmlTemplateData(sHtmlTemplateData : string) : void
    {
      this._sHtmlTemplateData = sHtmlTemplateData;
    }

    //---------------
    public getHtmlTemplateData() : string
    {
      return this._sHtmlTemplateData;
    }
    

    //---------------
    public setHtmlTemplatePlatformType(sHtmlTemplatePlatformType : string) : void
    {
      this._sHtmlTemplatePlatformType = sHtmlTemplatePlatformType;
    }

    //---------------
    public getHtmlTemplatePlatformType() : string
    {
      return this._sHtmlTemplatePlatformType;
    }


    //---------------
    public setHtmlTemplateDuration(nHtmlTemplateDuration : number) : void
    {
      this._nHtmlTemplateDuration = nHtmlTemplateDuration;
    }

    //---------------
    public getHtmlTemplateDuration() : number
    {
      return this._nHtmlTemplateDuration;
    }


    //---------------
    public setHtmlTemplateAutoplay(bHtmlTemplateAutoplay : boolean) : void
    {
      this._bHtmlTemplateAutoplay = bHtmlTemplateAutoplay;
    }

    //---------------
    public getHtmlTemplateAutoplay() : boolean
    {
      return this._bHtmlTemplateAutoplay;
    }


    //---------------------
    public setHtmlTemplatePlayId(nHtmlTemplatePlayId : number) : void
    {
      this._nHtmlTemplatePlayId = nHtmlTemplatePlayId;
    }

    //-----------------------
    public getHtmlTemplatePlayId() : number
    {
      return this._nHtmlTemplatePlayId;
    }

    //-----------------------
    public incPlayId() : void
    {
      ++this._nHtmlTemplatePlayId;
    }


    //------------------------------------
    //http://192.168.0.222:9080/c/html_templates/2185_mediareftest-1.1.2/index.html?data=..%5C2185_mediareftest-1.1.2_69134.json&platformType=windows&duration=-1&autoPlay=False
    //------------------------------------
    public getHtmTemplateFinalUrl() : string
    {
      var htmlTemplateParameters =   RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_Data           +  "=" + this._sHtmlTemplateData + "&"
                                   + RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_PlatformType   +  "=" + this._sHtmlTemplatePlatformType + "&"
                                   + RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_Duration       +  "=" + this._nHtmlTemplateDuration + "&"
                                   + RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_Autoplay       +  "=" + this._bHtmlTemplateAutoplay + "&"
                                   + RE_RenderParams_HtmlTemplate._sHtmlTemplateParamName_PlayId         +  "=" + this._nHtmlTemplatePlayId   + ""
                                  ;
      //uri.Encode
      return this._sHtmlTemplateUrl + "?" + htmlTemplateParameters;

    }

    //-----------------------------------------------
    public getHtmTemplateBasicUrl() : string
    {
      return this._sHtmlTemplateUrl;
    }
  }
} 