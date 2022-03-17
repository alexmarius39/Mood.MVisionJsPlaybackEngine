import amCoreServicesIHtmlTemplateDownloaderMain = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AI_HtmlTemplateDownloaderMain");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmCoreServicesHtmlTemplateDownloader = require("../../../../../app/ts/reusable/rm_coreservices/rs_htmltemplatedownloader/RS_HtmlTemplateDownloader");
                                                     
                                                     

export module rm_coreservices
{
  export class RI_HtmlTemplateDownloaderMain implements  amCoreServicesIHtmlTemplateDownloaderMain.am_coreservices.AI_HtmlTemplateDownloaderMain
  {
    _name: string;    

    //----------- owner
    _owner: rmCoreServicesHtmlTemplateDownloader.rm_coreservices.RS_HtmlTemplateDownloader;

    //----------- constructor 
    constructor(owner: rmCoreServicesHtmlTemplateDownloader.rm_coreservices.RS_HtmlTemplateDownloader)  
    {
      this._owner = owner;  
    }

    //====================================================
    public download(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {   
       return this._owner.download(error, context, callback);
    }
  }
} 