import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amIHtmlTemplateDownloaderConfig = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AI_HtmlTemplateDownloaderConfig");
import amIHtmlTemplateDownloaderBuilderMoodV5 = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AI_HtmlTemplateDownloaderBuilder_Mood_v5");
import amIHtmlTemplateDownloaderBuilderCustomV1 = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AI_HtmlTemplateDownloaderBuilder_Custom_v1");
import amIHtmlTemplateDownloaderMain   = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AI_HtmlTemplateDownloaderMain");

export module am_coreservices
{
  export interface AS_HtmlTemplateDownloader extends amGeneral.am_general.A_Service 
  {
    _iHtmlTemplateDownloaderConfig          : amIHtmlTemplateDownloaderConfig.am_coreservices.AI_HtmlTemplateDownloaderConfig ;
    _iHtmlTemplateDownloaderBuilderMoodV5   : amIHtmlTemplateDownloaderBuilderMoodV5.am_coreservices.AI_HtmlTemplateDownloaderBuilder_Mood_v5 ;
    _iHtmlTemplateDownloaderBuilderCustomV1 : amIHtmlTemplateDownloaderBuilderCustomV1.am_coreservices.AI_HtmlTemplateDownloaderBuilder_Custom_v1 ;
    _iHtmlTemplateDownloaderMain            : amIHtmlTemplateDownloaderMain.am_coreservices.AI_HtmlTemplateDownloaderMain ;
  }
} 