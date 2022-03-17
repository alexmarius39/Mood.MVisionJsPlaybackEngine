import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import amTransversalServicesIDownloadMain   = require("../../../../../app/ts/abstract/am_transversalservices/as_downloadservice/I_DownloadMain");
import amTransversalServicesIDownloadConfig = require("../../../../../app/ts/abstract/am_transversalservices/as_downloadservice/I_DownloadConfig");

export module am_transversalservices
{
  export interface AS_DownloadService extends amGeneral.am_general.A_Service 
  {
    _iDownloadMain  : amTransversalServicesIDownloadMain.am_transversalservices.I_DownloadMain ;
    _iDownloadConfig: amTransversalServicesIDownloadConfig.am_transversalservices.I_DownloadConfig ;
  }
} 