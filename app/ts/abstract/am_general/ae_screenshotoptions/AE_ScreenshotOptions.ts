import amEntity = require("../a_entity/A_Entity");
import amCaptureScreenInfo = require("../a_capturescreeninfo/A_CaptureScreenInfo");
import amHttpRequest = require("../a_httprequest/A_HttpRequest");

export module am_general
{
  export interface AE_ScreenshotOptions extends amEntity.am_general.A_Entity
  {
    getCaptureScreenInfo() : amCaptureScreenInfo.am_general.A_CaptureScreenInfo;
    setCaptureScreenInfo(aCaptureScreenInfo: amCaptureScreenInfo.am_general.A_CaptureScreenInfo) : void;

    getSaveInFile(): boolean;
    setSaveInFile(bSaveInFile: boolean): void;

    getSaveInMemory(): boolean;
    setSaveInMemory(bSaveInMemory: boolean): void;

    getSendToServer(): boolean;
    setSendToServer(bSendToServer: boolean): void;

    getRemoteRelativePath(): string;
    setRemoteRelativePath(strRemoteRelativePath: string): void;

    getRemoteFileName(): string;
    setRemoteFileName(strRemoteFileName: string): void;
  }
} 