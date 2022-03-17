import amTransversalServicesILogConfig = require("../../../../../app/ts/abstract/am_transversalservices/as_downloadservice/I_DownloadConfig");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/rs_downloadservice/RS_DownloadService");
                                                                                                        

export module rm_transversalservices
{
  export class IImpl_DownloadConfig_R implements amTransversalServicesILogConfig.am_transversalservices.I_DownloadConfig
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.RS_DownloadService;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.RS_DownloadService)  
    {
      this._owner = owner;  
    }

    /*
    //--------------------------
    public setFileInfo(fileInfo : amGeneralFileInfo.am_general.A_FileInfo,  fileUrlInfo : amGeneralFileInfo.am_general.A_FileInfo, 
                       error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void     

    {
      this._owner.setFileInfo(fileInfo,  fileUrlInfo,  error, context, callback) ;
    }*/
    

  }
} 