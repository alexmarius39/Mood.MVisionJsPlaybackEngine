import amScreenshotOptions = require("../../../../../app/ts/abstract/am_general/ae_screenshotoptions/AE_ScreenshotOptions");
import amCaptureScreenInfo = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");
import amHttpRequest = require("../../../../../app/ts/abstract/am_general/a_httprequest/A_HttpRequest");

import rmEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class RE_ScreenshotOptions extends rmEntity.rm_general.R_Entity
                                    implements amScreenshotOptions.am_general.AE_ScreenshotOptions
  {
    _aCaptureScreenInfo: amCaptureScreenInfo.am_general.A_CaptureScreenInfo;
    _aHttpRequest: amHttpRequest.am_general.A_HttpRequest;

    _bSaveInFile: boolean;
    _bSaveInMemory: boolean;
    _bSendToServer: boolean;

    _strRemoteRelativePath: string;
    _strRemoteFileName: string;

    constructor()
    {
      super();

      this._aCaptureScreenInfo = null;
      this._aHttpRequest = null;

      this._bSaveInFile = true;
      this._bSaveInMemory = false;
      this._bSendToServer = true;
      this._strRemoteRelativePath = null;
      this._strRemoteFileName = null;
    }

    getCaptureScreenInfo() : amCaptureScreenInfo.am_general.A_CaptureScreenInfo
    {
      return this._aCaptureScreenInfo;
    }

    setCaptureScreenInfo(aCaptureScreenInfo: amCaptureScreenInfo.am_general.A_CaptureScreenInfo) : void
    {
      this._aCaptureScreenInfo = aCaptureScreenInfo;
    }

    getSaveInFile(): boolean
    {
      return this._bSaveInFile;
    }

    setSaveInFile(bSaveInFile: boolean): void
    {
      this._bSaveInFile = bSaveInFile;
    }

    getSaveInMemory(): boolean
    {
      return this._bSaveInMemory;
    }

    setSaveInMemory(bSaveInMemory: boolean): void
    {
      this._bSaveInMemory = bSaveInMemory;
    }

    getSendToServer(): boolean
    {
      return this._bSendToServer;
    }

    setSendToServer(bSendToServer: boolean): void
    {
      this._bSendToServer = bSendToServer;
    }

    getRemoteRelativePath(): string
    {
      return this._strRemoteRelativePath;
    }

    setRemoteRelativePath(strRemoteRelativePath: string): void
    {
      this._strRemoteRelativePath = strRemoteRelativePath;
    }

    getRemoteFileName(): string
    {
      return this._strRemoteFileName;
    }

    setRemoteFileName(strRemoteFileName: string): void
    {
      this._strRemoteFileName = strRemoteFileName;
    }
  }
} 