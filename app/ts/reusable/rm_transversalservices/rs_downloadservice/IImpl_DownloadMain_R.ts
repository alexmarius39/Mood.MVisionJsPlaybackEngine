import amTransversalServicesIDownloadMain = require("../../../../../app/ts/abstract/am_transversalservices/as_downloadservice/I_DownloadMain");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralFileTransfer = require("../../../../../app/ts/abstract/am_general/ae_filetransfer/AE_FileTransfer");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/rs_downloadservice/RS_DownloadService");
                                                                                                        

export module rm_transversalservices
{
  export class IImpl_DownloadMain_R implements amTransversalServicesIDownloadMain.am_transversalservices.I_DownloadMain
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.RS_DownloadService;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.RS_DownloadService)  
    {
      this._owner = owner;  
    }

    //----------------
    public log(logMsgLevel: number, logMsg: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._owner.log(logMsgLevel, logMsg, error, context, callback) ;
    }

    //-----------------
    public moveFileAndShaFile( aSrcFile: amGeneralFileInfo.am_general.A_FileInfo, aSrcShaFile: amGeneralFileInfo.am_general.A_FileInfo, 
                               aDstFile: amGeneralFileInfo.am_general.A_FileInfo, aDstShaFile: amGeneralFileInfo.am_general.A_FileInfo,
                               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this._owner.moveFileAndShaFile( aSrcFile, aSrcShaFile, aDstFile, aDstShaFile, error, context, callback) ;      
    }

    //-------------------------------------------------                  
    public checkFileIfAlreadyDownloaded( transferMediaFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this._owner.checkFileIfAlreadyDownloaded( transferMediaFile, error, context, callback) ;      
    }

    //-------------------------------------------------                  
    public downloadFile( transferMediaFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this._owner.downloadFile( transferMediaFile, error, context, callback) ;
    }

    //-------------------------------------------------                  
    public downloadFileIfNotAlreadyDownloaded( transferMediaFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                               error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this._owner.downloadFileIfNotAlreadyDownloaded( transferMediaFile, error, context, callback) ;      
    }

    //-------------------------------------------------                  
    public downloadFiles_fromMap( transferMediaFiles: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                                  bIgnoreErrors: boolean,
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this._owner.downloadFiles_fromMap( transferMediaFiles, bIgnoreErrors, error, context, callback) ;
    }

    //-------------------------------------------------                  
    public downloadFiles_fromArray( transferMediaFiles: Array<amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                                    bIgnoreErrors: boolean,
                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      return this._owner.downloadFiles_fromArray( transferMediaFiles, bIgnoreErrors, error, context, callback) ;
    }

  }
} 