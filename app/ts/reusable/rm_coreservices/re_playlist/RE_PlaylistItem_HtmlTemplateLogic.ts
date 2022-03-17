import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_HtmlTemplateLogic");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

import rmPlaylistItemLogic  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_WebPageLogic");

export module rm_coreservices
{
  export class RE_PlaylistItem_HtmlTemplateLogic extends rmPlaylistItemLogic.rm_coreservices.RE_PlaylistItem_WebPageLogic
                                                 implements amCoreServices.am_coreservices.AE_PlaylistItem_HtmlTemplateLogic
  {
     //----------------
     constructor()
     {
       super();
       this._hasARenderingRepresentation = true;
       this._hasARenderingZone           = false;
     }


  }
} 