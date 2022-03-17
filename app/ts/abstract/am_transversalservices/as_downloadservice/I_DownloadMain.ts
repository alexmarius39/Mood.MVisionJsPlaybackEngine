import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileTransfer = require("../../../../../app/ts/abstract/am_general/ae_filetransfer/AE_FileTransfer");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

export module am_transversalservices
{
  export interface I_DownloadMain extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    moveFileAndShaFile( aSrcFile: amGeneralFileInfo.am_general.A_FileInfo, aSrcShaFile: amGeneralFileInfo.am_general.A_FileInfo, 
                        aDstFile: amGeneralFileInfo.am_general.A_FileInfo, aDstShaFile: amGeneralFileInfo.am_general.A_FileInfo,
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    checkFileIfAlreadyDownloaded( transferMediaFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    downloadFileIfNotAlreadyDownloaded( transferMediaFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    downloadFile( transferMediaFile: amGeneralFileTransfer.am_general.AE_FileTransfer,
                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    downloadFiles_fromMap( transferMediaFiles: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                           bIgnoreErrors: boolean,
                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

    downloadFiles_fromArray( transferMediaFiles: Array<amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                             bIgnoreErrors: boolean,
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
  }
} 