import amGeneralCaptureScreenInfo     = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");
import amFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import rmEntity   = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import rmFileInfo = require("../../../../../app/ts/reusable/rm_general/r_fileinfo/R_FileInfo");

export module rm_general
{
  export class R_CaptureScreenInfo  extends rmEntity.rm_general.R_Entity
                             implements amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo
  {
    //--- properties
    _bFullScreen: boolean;

    _nRectLeft: number;
    _nRectTop: number;
    _nRectRight: number;
    _nRectBottom: number;

    _strFormat: string;
    _nQuality: number;
    _nWidth: number;
    _nHeight: number;

    _strOrientation: string;

    _aFileInfo: amFileInfo.am_general.A_FileInfo;

    //----------- constructor 
    constructor()  
    {  
      super();

      this._bFullScreen = true;
  
      this._nRectLeft = null;
      this._nRectTop = null;
      this._nRectRight = null;
      this._nRectBottom = null;
  
      this._strFormat = null;
      this._nQuality = null;
      this._nWidth = null;
      this._nHeight = null;

      this._strOrientation = null;
  
      this._aFileInfo = new rmFileInfo.rm_general.R_FileInfo();
    }

    public copyFromJson(jsonCaptureScreen: any): void
    {
      if (jsonCaptureScreen != null) {
        this._bFullScreen     = jsonCaptureScreen._bFullScreen;
  
        this._nRectLeft       = jsonCaptureScreen._nRectLeft;
        this._nRectTop        = jsonCaptureScreen._nRectTop;
        this._nRectRight      = jsonCaptureScreen._nRectRight;
        this._nRectBottom     = jsonCaptureScreen._nRectBottom;
    
        this._strFormat       = jsonCaptureScreen._strFormat;
        this._nQuality        = jsonCaptureScreen._nQuality;
        this._nWidth          = jsonCaptureScreen._nWidth;
        this._nHeight         = jsonCaptureScreen._nHeight;
  
        this._strOrientation  = jsonCaptureScreen._strOrientation;

        this._aFileInfo.copyFromJson(jsonCaptureScreen._aFileInfo);
      }
    }

    public getFullScreen(): boolean
    {
      return this._bFullScreen;
    }

    public setFullScreen(bFullScreen: boolean): void
    {
      this._bFullScreen = bFullScreen;
    }

    public getRectLeft(): number
    {
      return this._nRectLeft;
    }

    public setRectLeft(nRectLeft: number): void
    {
      this._nRectLeft = nRectLeft;
    }

    public getRectTop(): number
    {
      return this._nRectTop;
    }

    public setRectTop(nRectTop: number): void
    {
      this._nRectTop = nRectTop;
    }

    public getRectRight(): number
    {
      return this._nRectRight;
    }

    public setRectRight(nRectRight: number): void
    {
      this._nRectRight = nRectRight;
    }

    public getRectBottom(): number
    {
      return this._nRectBottom;
    }

    public setRectBottom(nRectBottom: number): void
    {
      this._nRectBottom = nRectBottom;
    }

    public getFormat(): string
    {
      return this._strFormat;
    }

    public setFormat(strFormat: string): void
    {
      this._strFormat = strFormat;
    }

    public getQuality(): number
    {
      return this._nQuality;
    }

    public setQuality(nQuality: number): void
    {
      this._nQuality = nQuality;
    }

    public getWidth(): number
    {
      return this._nWidth;
    }

    public setWidth(nWidth: number): void
    {
      this._nWidth = nWidth;
    }

    public getHeight(): number
    {
      return this._nHeight;
    }

    public setHeight(nHeight: number): void
    {
      this._nHeight = nHeight;
    }

    public getOrientation(): string
    {
      return this._strOrientation;
    }

    public setOrientation(strOrientation: string): void
    {
      this._strOrientation = strOrientation;
    }

    public getFileInfo(): amFileInfo.am_general.A_FileInfo
    {
      return this._aFileInfo;
    }

    public setFileInfo(aFileInfo: amFileInfo.am_general.A_FileInfo): void
    {
      this._aFileInfo = aFileInfo;
    }

  }
} 