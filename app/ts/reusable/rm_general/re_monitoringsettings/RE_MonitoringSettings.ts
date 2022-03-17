import amMonitoringSettings = require("../../../abstract/am_general/ae_monitoringsettings/AE_MonitoringSettings");
import amHttpRequest = require("../../../abstract/am_general/a_httprequest/A_HttpRequest");

import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_MonitoringSettings extends rmEntity.rm_general.R_Entity
                                    implements amMonitoringSettings.am_general.AE_MonitoringSettings
  {
    _iStartTimeout          : number;
    _iInterval              : number;
    _bEarlyAdopter          : boolean;
    _nLastPlayedItems       : number;
    _strRemoteRelativePath  : string;

    constructor()
    {
      super();

      this._iStartTimeout = 20;
      this._iInterval = 300;
      this._bEarlyAdopter = false;
      this._nLastPlayedItems = 15;
      this._strRemoteRelativePath = null;
    }

    public setStartTimeout(iStartTimeout: number) : void
    {
      this._iStartTimeout = iStartTimeout;
    }

    public getStartTimeout() : number
    {
      return this._iStartTimeout;
    }

    public setInterval(iInterval: number) : void
    {
      this._iInterval = iInterval;
    }

    public getInterval() : number
    {
      return this._iInterval;
    }

    public setEarlyAdopter(bEarlyAdopter: boolean) : void
    {
      this._bEarlyAdopter = bEarlyAdopter;
    }

    public getEarlyAdopter() : boolean
    {
      return this._bEarlyAdopter;
    }

    public setLastPlayedItemsNumber(nLastPlayedItems: number) : void
    {
      this._nLastPlayedItems = nLastPlayedItems;
    }

    public getLastPlayedItemsNumber() : number
    {
      return this._nLastPlayedItems;
    }

    public getRemoteRelativePath(): string
    {
      return this._strRemoteRelativePath;
    }

    public setRemoteRelativePath(strRemoteRelativePath: string): void
    {
      this._strRemoteRelativePath = strRemoteRelativePath;
    }
  }
} 