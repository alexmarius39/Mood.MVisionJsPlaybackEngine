import amEntity = require("../a_entity/A_Entity");

export module am_general
{
  export interface AE_LiveCommandsSettings extends amEntity.am_general.A_Entity
  {
    copyFromJson(jsonSystemUsageInfo: any): void;

    getAuthTokenRelativePath(): string;
    setAuthTokenRelativePath(strAuthTokenRelativePath: string): void;

    getSignalRHubRelativePath(): string;
    setSignalRHubRelativePath(strSignalRHubRelativePath: string): void;

    getSignalRHubMethodName(): string;
    setSignalRHubMethodName(strSignalRHubMethodName: string): void;
  }
}