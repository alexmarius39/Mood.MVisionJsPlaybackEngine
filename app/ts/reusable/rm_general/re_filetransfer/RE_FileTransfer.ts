import amGeneral     = require("../../../../../app/ts/abstract/am_general/ae_filetransfer/AE_FileTransfer");

import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class RE_FileTransfer    extends rmGeneralEntity.rm_general.R_Entity
                                  implements amGeneral.am_general.AE_FileTransfer
  {
    //--- properties
    _srcFileId   : number;
    _srcFileType : string ; //"bin","zip", etc...

    _srcFileInfo   :  amGeneralFileInfo.am_general.A_FileInfo;
    _srcFileInfo2  :  amGeneralFileInfo.am_general.A_FileInfo;

    _srcShaFileInfo:  amGeneralFileInfo.am_general.A_FileInfo;
    _srcShaFileValue: string;
    
    _dstFileInfo   :  amGeneralFileInfo.am_general.A_FileInfo;
    _dstShaFileInfo:  amGeneralFileInfo.am_general.A_FileInfo;
    _dstShaFileValue: string;

    _tmpFileInfo       :  amGeneralFileInfo.am_general.A_FileInfo;
    _tmpShaFileInfo    :  amGeneralFileInfo.am_general.A_FileInfo;
    _tmpShaFileValue   :  string;

    _computedShaFileInfo    :  amGeneralFileInfo.am_general.A_FileInfo;
    _computedShaFileValue   :  string;

    _additionalFileTransfers : Array<amGeneral.am_general.AE_FileTransfer>;

    _mediaId : number;
    
    _bDoDownload : boolean; 

    _bIgnoreErrors : boolean;

    _bCheckSha : boolean;

    _strAdditionalInfo : string;

    _bComputeSha : boolean;

    _bCopyFile : boolean;

    _bCopyFileIfExists : boolean;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._srcFileInfo     = null;
      this._srcFileInfo2     = null;
      this._srcShaFileInfo  = null;
      this._srcShaFileValue = null;
      this._dstFileInfo     = null;
      this._dstShaFileInfo  = null;
      this._dstShaFileValue = null;

      this._tmpFileInfo     = null;
      this._tmpShaFileInfo  = null;
      this._tmpShaFileValue = null;
  
      this._computedShaFileInfo  = null;
      this._computedShaFileValue = null;

      this._additionalFileTransfers = null;

      this._srcFileId   = 0;
      this._srcFileType = "";

      this._mediaId   = 0;

      this._bDoDownload = true;

      this._bIgnoreErrors = false;

      this._bCheckSha = true;

      this._strAdditionalInfo = "";

      this._bComputeSha = true;

      this._bCopyFile = false;

      this._bCopyFileIfExists = true;
    }

    //------------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this._srcFileInfo     = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._srcShaFileInfo  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._srcShaFileValue = null;
      this._dstFileInfo     = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._dstShaFileInfo  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._srcShaFileValue = null;

      this._tmpFileInfo     = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._tmpShaFileInfo  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._tmpShaFileValue = null;

      this._computedShaFileInfo  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._computedShaFileValue = null;

      this._additionalFileTransfers = null;

      this._srcFileId   = 0;
      this._srcFileType = "";

      this._mediaId   = 0;

      this._bDoDownload = true;

      this._bIgnoreErrors = false;

      this._bCheckSha = true;

      this._strAdditionalInfo = "";
      
      return 0;
    }


    //---------------------------
    public getMediaId()  : number
    {
      return this._mediaId;
    }
    //---------------------------
    public setMediaId(mediaId : number)
    {
      this._mediaId = mediaId;
    }


    //-----------------------------------------
    public setDoDownload(bDoDownload: boolean) : void
    {
      this._bDoDownload = bDoDownload;
    }

    //-------------------------------
    public getDoDownload() : boolean 
    {
      return this._bDoDownload;
    }
    

    //----------------------------------
    public setIgnoreErrors(bIgnoreErrors: boolean) : void
    {
      this._bIgnoreErrors = bIgnoreErrors;
    }

    //------------------------------
    public getIgnoreErrors() : boolean 
    {
      return this._bIgnoreErrors;
    }


    

    //----------------------------------
    public setCheckSha(bCheckSha: boolean) : void
    {
      this._bCheckSha = bCheckSha;
    }

    //------------------------------
    public getCheckSha() : boolean 
    {
      return this._bCheckSha;
    }

    //----------------------------------
    public setComputeSha(bComputeSha: boolean) : void
    {
      this._bComputeSha = bComputeSha;
    }

    //------------------------------
    public getComputeSha() : boolean 
    {
      return this._bComputeSha;
    }


    //---------------------------
    public getSrcFileId()  : number
    {
      return this._srcFileId;
    }
    //---------------------------
    public setSrcFileId(srcFileId : number)
    {
      this._srcFileId = srcFileId;
    }

    //---------------------------
    public getSrcFileType()  : string
    {
      return this._srcFileType;
    }
    //---------------------------
    public setSrcFileType(srcFileType : string)
    {
      this._srcFileType = srcFileType;
    }


    //---------------------------
    public getSrcFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._srcFileInfo;
    }
    //---------------------------
    public setSrcFileInfo(srcFileInfo : amGeneralFileInfo.am_general.A_FileInfo)
    {
      this._srcFileInfo = srcFileInfo;
    }

    //---------------------------
    public getSrcFileInfo2()  : amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._srcFileInfo2;
    }
    //---------------------------
    public setSrcFileInfo2(srcFileInfo2 : amGeneralFileInfo.am_general.A_FileInfo)
    {
      this._srcFileInfo2 = srcFileInfo2;
    }

    //---------------------------
    public getSrcShaFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._srcShaFileInfo;
    }
    //---------------------------
    public setSrcShaFileInfo(srcShaFileInfo : amGeneralFileInfo.am_general.A_FileInfo)
    {
      this._srcShaFileInfo = srcShaFileInfo;
    }


    //---------------------------
    public getSrcShaFileValue()  : string
    {
      return this._srcShaFileValue;
    }
    //---------------------------
    public setSrcShaFileValue(srcShaFileValue : string)
    {
      this._srcShaFileValue = srcShaFileValue;
    }

    //============================
    //  dest sha file
    //============================

    //---------------------------
    public getDstFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._dstFileInfo;
    }
    //---------------------------
    public setDstFileInfo(dstFileInfo : amGeneralFileInfo.am_general.A_FileInfo)
    {
      this._dstFileInfo = dstFileInfo;
    }

    //---------------------------
    public getDstShaFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._dstShaFileInfo;
    }
    //---------------------------
    public setDstShaFileInfo(dstShaFileInfo : amGeneralFileInfo.am_general.A_FileInfo)
    {
      this._dstShaFileInfo = dstShaFileInfo;
    }

    //---------------------------
    public getDstShaFileValue()  : string
    {
      return this._dstShaFileValue;
    }
    //---------------------------
    public setDstShaFileValue(dstShaFileValue : string)
    {
      this._dstShaFileValue = dstShaFileValue;
    }

    //============================
    //  computed sha file info
    //============================
    //---------------------------
    public getComputedShaFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._computedShaFileInfo;
    }
    //---------------------------
    public setComputedShaFileInfo(computedShaFileInfo : amGeneralFileInfo.am_general.A_FileInfo)
    {
      this._computedShaFileInfo = computedShaFileInfo;
    }

    //---------------------------
    public getComputedShaFileValue()  : string
    {
      return this._computedShaFileValue;
    }
    //---------------------------
    public setComputedShaFileValue(computedShaFileValue : string)
    {
      this._computedShaFileValue = computedShaFileValue;
    }

    //============================
    //  temp file
    //============================

    //---------------------------
    public getTmpFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._tmpFileInfo;
    }
    //---------------------------
    public setTmpFileInfo(dstFileInfo : amGeneralFileInfo.am_general.A_FileInfo)
    {
      this._tmpFileInfo = dstFileInfo;
    }

    //---------------------------
    public getTmpShaFileInfo()  : amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._tmpShaFileInfo;
    }
    //---------------------------
    public setTmpShaFileInfo(tmpShaFileInfo : amGeneralFileInfo.am_general.A_FileInfo)
    {
      this._tmpShaFileInfo = tmpShaFileInfo;
    }

    //---------------------------
    public getTmpShaFileValue()  : string
    {
      return this._tmpShaFileValue;
    }
    //---------------------------
    public setTmpShaFileValue(tmpShaFileValue : string)
    {
      this._tmpShaFileValue = tmpShaFileValue;
    }

    //============================
    //  test sha values
    //============================

    //-----------------------------
    public isTheSameShaValue(sha1: string, sha2: string) : boolean
    {
      if (sha1 == null)
        return false;
      if (sha2 == null)
        return false;
      var sha1f = sha1.toLowerCase().trim();
      var sha2f = sha2.toLowerCase().trim();
      if (sha1f != sha2f)
        return false;
      return true
    }

    //============================
    //  aditional file transfers
    //============================
    //-----------------------------
    public getAdditionalFileTransfers() : Array<amGeneral.am_general.AE_FileTransfer>
    {
      return this._additionalFileTransfers;
    }
    //-----------------------------
    public setAdditionalFileTransfers(additionalFileTransfers : Array<amGeneral.am_general.AE_FileTransfer>)
    {
      this._additionalFileTransfers = additionalFileTransfers;
    }

    //-----------------------------
    public addAdditionalFileTransfer(additionalFileTransfer: amGeneral.am_general.AE_FileTransfer)
    {
      if (this._additionalFileTransfers == null)
        this._additionalFileTransfers = new Array<amGeneral.am_general.AE_FileTransfer>();
      this._additionalFileTransfers.push(additionalFileTransfer);
    }


    //----------------------------------------
    public getAdditionalInfo(): string
    {
       return this._strAdditionalInfo;
    }

    //---------------------------------------------------
    public setAdditionalInfo(strAdditionalInfo: string): void
    {
      this._strAdditionalInfo = strAdditionalInfo ;
    }


    //---------------------------------------------------
    public setCopyFile(bCopyFile: boolean) : void
    {
      this._bCopyFile = bCopyFile
    }

    //---------------------------------------------------
    public getCopyFile() : boolean
    {
      return this._bCopyFile;
    }


    //---------------------------------------------------
    public setCopyFileIfExists(bCopyFileIfExists: boolean) : void
    {
      this._bCopyFileIfExists = bCopyFileIfExists
    }

    //---------------------------------------------------
    public getCopyFileIfExists() : boolean
    {
      return this._bCopyFileIfExists;
    }
  }
} 