import amGeneralEntity = require("../../../abstract/am_general/a_entity/A_Entity");
import amGeneralFileInfo = require("../../../abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralContentDispositionHeader = require("../../../abstract/am_general/a_httprequest/A_ContentDispositionHeader");

import rmGeneralEntity      = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_ContentDispositionHeader extends rmGeneralEntity.rm_general.R_Entity
                                          implements amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader
  {
    _headerName: string;
    _headerValue: string;

    _bAddEndBoundary: boolean;
    _isHeaderFileBinary: boolean;
    _aHeaderFile: amGeneralFileInfo.am_general.A_FileInfo;

    constructor() 
    {
      super();
      this._bAddEndBoundary = false;
      this._isHeaderFileBinary = false;
      this._aHeaderFile = null;
    }

    public getHeaderName() : string
    {
      return this._headerName;
    }

    public setHeaderName(headerName: string) : void
    {
      this._headerName = headerName;
    }

    public getHeaderValue() : string
    {
      return this._headerValue;
    }

    public setHeaderValue(headerValue: string) : void
    {
      this._headerValue = headerValue;
    }

    public isHeaderFileBinary(): boolean
    {
      return this._isHeaderFileBinary;
    }

    public setHeaderFileBinary(isHeaderFileBinary: boolean): void
    {
      this._isHeaderFileBinary = isHeaderFileBinary
    }

    public getHeaderFile(): amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._aHeaderFile;
    }

    public setHeaderFile(aHeaderFile: amGeneralFileInfo.am_general.A_FileInfo): void
    {
      this._aHeaderFile = aHeaderFile;
    }

  }
} 