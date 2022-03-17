import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

export module am_general
{
  export interface AE_FileTransfer extends amGeneral.am_general.A_Entity
  {
    getMediaId()  : number;
    setMediaId(srcFileId : number): void;

    getSrcFileId()  : number;
    setSrcFileId(srcFileId : number);
    getSrcFileType()  : string;
    setSrcFileType(srcFileType : string);

    getSrcFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo;
    setSrcFileInfo(srcFileInfo : amGeneralFileInfo.am_general.A_FileInfo);
    getSrcFileInfo2()  : amGeneralFileInfo.am_general.A_FileInfo;
    setSrcFileInfo2(srcFileInfo2 : amGeneralFileInfo.am_general.A_FileInfo);
    getSrcShaFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo;
    setSrcShaFileInfo(srcShaFileInfo : amGeneralFileInfo.am_general.A_FileInfo);
    getSrcShaFileValue()  : string;
    setSrcShaFileValue(srcShaFileValue : string);

    getDstFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo;
    setDstFileInfo(dstFileInfo : amGeneralFileInfo.am_general.A_FileInfo);
    getDstShaFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo;
    setDstShaFileInfo(dstShaFileInfo : amGeneralFileInfo.am_general.A_FileInfo);
    getDstShaFileValue()  : string;
    setDstShaFileValue(dstShaFileValue : string);

    getTmpFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo;
    setTmpFileInfo(tmpFileInfo : amGeneralFileInfo.am_general.A_FileInfo);
    getTmpShaFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo;
    setTmpShaFileInfo(tmpShaFileInfo : amGeneralFileInfo.am_general.A_FileInfo);
    getTmpShaFileValue()  : string;
    setTmpShaFileValue(tmpShaFileValue : string);

    getComputedShaFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo;
    setComputedShaFileInfo(computedShaFileInfo : amGeneralFileInfo.am_general.A_FileInfo);
    getComputedShaFileValue()  : string;
    setComputedShaFileValue(computedShaFileValue : string);

    isTheSameShaValue(sha1: string, sha2: string) : boolean;

    getAdditionalFileTransfers() : Array<AE_FileTransfer>;
    setAdditionalFileTransfers(additionalFileTransfers : Array<AE_FileTransfer>);
    addAdditionalFileTransfer(additionalFileTransfer: AE_FileTransfer);

    setDoDownload(bDoDownload: boolean) : void; // default true;
    getDoDownload() : boolean ;

    setIgnoreErrors(bIgnoreErrors: boolean) : void; // default false;
    getIgnoreErrors() : boolean ;

    setCheckSha(bCheckSha: boolean) : void;
    getCheckSha() : boolean ;
    
    getAdditionalInfo(): string;
    setAdditionalInfo(strAdditionalInfo: string);

    setComputeSha(bComputeSha: boolean) : void;
    getComputeSha() : boolean;

    setCopyFile(bCopyFile: boolean) : void;
    getCopyFile() : boolean;

    setCopyFileIfExists(bCopyFileIfExists: boolean) : void;
    getCopyFileIfExists() : boolean;
  }

} 