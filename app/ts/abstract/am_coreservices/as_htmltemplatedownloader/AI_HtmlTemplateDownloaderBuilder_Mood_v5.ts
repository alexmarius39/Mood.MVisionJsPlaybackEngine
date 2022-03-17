import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralFileTransfer = require("../../../../../app/ts/abstract/am_general/ae_filetransfer/AE_FileTransfer");


export module am_coreservices
{
  export interface AI_HtmlTemplateDownloaderBuilder_Mood_v5 extends amGeneral.am_general.I_Interface
  {
    _name: string;   
    
    loadMediaFilesList( aPlaylistType: string, jsonObject : any, 
                        mediaFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                        fileTemplatesFilesList: Map<number, amGeneralFileTransfer.am_general.AE_FileTransfer>, 
                        aPlaylistFileTransfer     : amGeneralFileTransfer.am_general.AE_FileTransfer, 
                        aMediaFilesFolderTransfer : amGeneralFileTransfer.am_general.AE_FileTransfer, 
                        aHtmlTemplatesFilesFolderTransfer : amGeneralFileTransfer.am_general.AE_FileTransfer, 
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);

  }
} 