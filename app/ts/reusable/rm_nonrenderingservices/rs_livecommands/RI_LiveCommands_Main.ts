import amLiveCommandsServiceMain = require("../../../abstract/am_nonrenderingservices/as_livecommands/AI_LiveCommandsMain");

import amError   = require("../../../abstract/am_general/a_error/A_Error");
import amContext = require("../../../abstract/am_general/a_context/A_Context");
import amLiveCommandsSettings = require("../../../abstract/am_general/ae_livecommands/AE_LiveCommandsSettings");
import amServerCommand = require("../../../abstract/am_general/ae_livecommands/AE_ServerCommand");

import rmLiveCommandsService = require("./RS_LiveCommands");
                                                     
export module rm_nonrenderingservices
{
  export class RI_LiveCommandsMain implements amLiveCommandsServiceMain.am_nonrenderingservices.AI_LiveCommandsMain
  {
    _name: string;    

    //----------- owner
    _owner: rmLiveCommandsService.rm_nonrenderingservices.RS_LiveCommandsService;

    //----------- constructor 
    constructor(owner: rmLiveCommandsService.rm_nonrenderingservices.RS_LiveCommandsService)  
    {
      this._owner = owner;  
    }

    public init(error : amError.am_general.A_Error) : void
    {
      this._owner.init(error);
    }

    public startListener(aLiveCommandsSettings: amLiveCommandsSettings.am_general.AE_LiveCommandsSettings,
      error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      this._owner.startListener(aLiveCommandsSettings, error, context, callback);
    }

    public runCommand(aServerCommand: amServerCommand.am_general.AE_ServerCommand)
    {
      this._owner.runCommand(aServerCommand);
    }

    public sendScreenshot()
    {
      this.sendScreenshot();
    }

    public updatePlaylistAndContent(updateParams: any)
    {
      this.updatePlaylistAndContent(updateParams);
    }

    public sendMonitoring()
    {
      this.sendMonitoring();
    }

    public rebootDevice()
    {
      this.rebootDevice();
    }

    public setVolume()
    {
      this.setVolume();
    }
  }
} 