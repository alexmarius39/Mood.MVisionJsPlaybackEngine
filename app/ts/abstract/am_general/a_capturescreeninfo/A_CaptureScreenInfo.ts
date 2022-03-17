import amEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

export module am_general
{
  export interface A_CaptureScreenInfo extends amEntity.am_general.A_Entity
  {
    copyFromJson(jsonCaptureScreen: any): void;
    
    getFullScreen(): boolean;
    setFullScreen(bFullScreen: boolean): void;

    getRectLeft(): number;
    setRectLeft(nRectLeft: number): void;

    getRectTop(): number;
    setRectTop(nRectTop: number): void;

    getRectRight(): number;
    setRectRight(nRectRight: number): void;

    getRectBottom(): number;
    setRectBottom(nRectBottom: number): void;

    getFormat(): string;
    setFormat(strFormat: string): void;

    getQuality(): number;
    setQuality(nQuality: number): void;

    getWidth(): number;
    setWidth(nWidth: number): void;

    getHeight(): number;
    setHeight(nWidth: number): void;

    getOrientation(): string;
    setOrientation(strOrientation: string): void;

    getFileInfo(): amFileInfo.am_general.A_FileInfo;
    setFileInfo(aFileInfo: amFileInfo.am_general.A_FileInfo): void;
  }
} 