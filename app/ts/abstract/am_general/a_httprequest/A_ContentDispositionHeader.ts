import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

export module am_general
{
  export interface A_ContentDispositionHeader extends amGeneralEntity.am_general.A_Entity
  {
    getHeaderName() : string;
    setHeaderName(name: string) : void;

    getHeaderValue() : string;
    setHeaderValue(value: string) : void;

    isHeaderFileBinary(): boolean;
    setHeaderFileBinary(isHeaderFileBinary: boolean): void;

    getHeaderFile(): amGeneralFileInfo.am_general.A_FileInfo;
    setHeaderFile(aHeaderFile: amGeneralFileInfo.am_general.A_FileInfo): void;
  }
} 