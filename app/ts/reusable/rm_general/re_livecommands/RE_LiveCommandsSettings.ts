import amLiveCommandsSettings = require("../../../abstract/am_general/ae_livecommands/AE_LiveCommandsSettings");
import rmEntity = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_LiveCommandsSettings extends rmEntity.rm_general.R_Entity
                                 implements amLiveCommandsSettings.am_general.AE_LiveCommandsSettings
  {
    //--- properties
    _strAuthTokenRelativePath: string;
    _strSignalRHubRelativePath: string;
    _strSignalRHubMethodName: string;

    //----------- constructor 
    constructor()  
    {  
      super();
    }

    public copyFromJson(jsonSystemStorageInfo: any): void
    {
      this._strAuthTokenRelativePath  = jsonSystemStorageInfo._strAuthTokenRelativePath;
      this._strSignalRHubRelativePath = jsonSystemStorageInfo._strSignalRHubRelativePath;
      this._strSignalRHubMethodName   = jsonSystemStorageInfo._strSignalRHubMethodName;
    }

    public getAuthTokenRelativePath()
    {
      return this._strAuthTokenRelativePath;
    }

    public setAuthTokenRelativePath(strAuthTokenRelativePath: string)
    {
      this._strAuthTokenRelativePath = strAuthTokenRelativePath;
    }

    public getSignalRHubRelativePath()
    {
      return this._strSignalRHubRelativePath;
    }

    public setSignalRHubRelativePath(strSignalRHubRelativePath: string)
    {
      this._strSignalRHubRelativePath = strSignalRHubRelativePath;
    }

    public getSignalRHubMethodName(): string
    {
      return this._strSignalRHubMethodName;
    }

    public setSignalRHubMethodName(strSignalRHubMethodName: string): void
    {
      this._strSignalRHubMethodName = strSignalRHubMethodName;
    }

  }
} 