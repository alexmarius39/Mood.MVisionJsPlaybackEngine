import amIHtmlTemplateDownloaderCustomV1 = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AI_HtmlTemplateDownloaderBuilder_Custom_v1");

import rmCoreServicesHtmlTemplateDownloader = require("../../../../../app/ts/reusable/rm_coreservices/rs_htmltemplatedownloader/RS_HtmlTemplateDownloader");
                                                     
                                                     

export module rm_coreservices
{
  export class RI_HtmlTemplateDownloaderBuilder_Custom_v1 implements amIHtmlTemplateDownloaderCustomV1.am_coreservices.AI_HtmlTemplateDownloaderBuilder_Custom_v1
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesHtmlTemplateDownloader.rm_coreservices.RS_HtmlTemplateDownloader;

    //----------- constructor 
    constructor(owner: rmCoreServicesHtmlTemplateDownloader.rm_coreservices.RS_HtmlTemplateDownloader)  
    {
      this._owner = owner;  
    }
  }
} 