import amTimeSettings = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_TimeSettings");
import rmEntity = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_TimeSettings extends rmEntity.rm_general.R_Entity
                                  implements amTimeSettings.am_general.AE_TimeSettings
  {
    _bUseMoodServer: boolean;
    _strServerUrl: string;
    _strServerTimeZone: string;
    _bApplyServerTimeAsDeviceTimeAtStartup: boolean;
    _strDefaultDeviceTimeZone: string;
    _strLastDeviceTimeZone: string;
    _bApplyDefaultDeviceTimeZoneAtStartup: boolean;
    _bUseNTP: boolean;
    _bLastUseNTP: boolean;
    _strNTPServerUrl: string;
    _strLastNTPServerUrl: string;
    _strNTPTimeZone: string;
    _strLastNTPTimeZone: string;

    constructor()
    {
      super();
      this._bUseMoodServer = true;
      this._strServerUrl = null;
      this._strServerTimeZone = null;
      this._bApplyServerTimeAsDeviceTimeAtStartup = false;
      this._strDefaultDeviceTimeZone = null;
      this._strLastDeviceTimeZone = null;
      this._bApplyDefaultDeviceTimeZoneAtStartup = false;
      this._bUseNTP = false;
      this._bLastUseNTP = false;
      this._strNTPServerUrl = null;
      this._strLastNTPServerUrl = null;
      this._strNTPTimeZone = null;
      this._strLastNTPTimeZone = null;
    }

    public getUseMoodServer(): boolean
    {
      return this._bUseMoodServer;
    }
    public setUseMoodServer(bUseModdServer: boolean): void
    {
      this._bUseMoodServer = bUseModdServer;
    }

    public getServerUrl(): string
    {
      return this._strServerUrl;
    }
    public setServerUrl(strServerUrl: string): void
    {
      this._strServerUrl = strServerUrl;
    }

    public getServerTimeZone(): string
    {
      return this._strServerTimeZone;
    }
    public setServerTimeZone(strServerTimeZone: string): void
    {
      this._strServerTimeZone = strServerTimeZone;
    }

    public getApplyServerTimeAsDevieTimeAtStartup(): boolean
    {
      return this._bApplyServerTimeAsDeviceTimeAtStartup;
    }
    public setApplyServerTimeAsDevieTimeAtStartup(bApplyServerTime: boolean): void
    {
      this._bApplyServerTimeAsDeviceTimeAtStartup = bApplyServerTime;
    }

    public getDefaultDeviceTimeZone(): string
    {
      return this._strDefaultDeviceTimeZone;
    }
    public setDefaultDeviceTimeZone(strDefaultDeviceTimeZone: string): void
    {
      this._strDefaultDeviceTimeZone = strDefaultDeviceTimeZone;
    }

    public getLastDeviceTimeZone(): string
    {
      return this._strLastDeviceTimeZone;
    }
    public setLastDeviceTimeZone(strLastDeviceTimeZone: string): void
    {
      this._strLastDeviceTimeZone = strLastDeviceTimeZone;
    }

    public getApplyDefaultDeviceTimeZoneAtStartup(): boolean
    {
      return this._bApplyDefaultDeviceTimeZoneAtStartup;
    }
    public setApplyDefaultDeviceTimeZoneAtStartup(bApplyDeviceTimeZone: boolean): void
    {
      this._bApplyDefaultDeviceTimeZoneAtStartup = bApplyDeviceTimeZone;
    }

    public getUseNTP(): boolean
    {
      return this._bUseNTP;
    }
    public setUseNTP(bUseNTP: boolean): void
    {
      this._bUseNTP = bUseNTP;
    }

    public getLastUseNTP(): boolean
    {
      return this._bLastUseNTP;
    }
    public setLastUseNTP(bLastUseNTP: boolean): void
    {
      this._bLastUseNTP = bLastUseNTP;
    }

    public getNTPServerUrl(): string
    {
      return this._strNTPServerUrl;
    }
    public setNTPServerUrl(strNTPServerUrl: string): void
    {
      this._strNTPServerUrl = strNTPServerUrl;
    }

    public getLastNTPServerUrl(): string
    {
      return this._strLastNTPServerUrl;
    }
    public setLastNTPServerUrl(strLastNTPServerUrl: string): void
    {
      this._strLastNTPServerUrl = strLastNTPServerUrl;
    }

    public getNTPTimeZone(): string
    {
      return this._strNTPTimeZone;
    }
    public setNTPTimeZone(strNTPTimeZone: string): void
    {
      this._strNTPTimeZone = strNTPTimeZone;
    }

    public getLastNTPTimeZone(): string
    {
      return this._strLastNTPTimeZone;
    }
    public setLastNTPTimeZone(strNTPTimeZone: string): void
    {
      this._strLastNTPTimeZone = strNTPTimeZone;
    }

  }
} 