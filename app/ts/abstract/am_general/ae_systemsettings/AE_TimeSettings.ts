import amEntity = require("../a_entity/A_Entity");

export module am_general
{
  export interface AE_TimeSettings extends amEntity.am_general.A_Entity
  {
    getUseMoodServer(): boolean;
    setUseMoodServer(bUseModdServer: boolean): void;

    getServerUrl(): string;
    setServerUrl(strServerUrl: string): void;

    getServerTimeZone(): string;
    setServerTimeZone(strServerTimeZone: string): void;

    getApplyServerTimeAsDevieTimeAtStartup(): boolean;
    setApplyServerTimeAsDevieTimeAtStartup(bApplyServerTime: boolean): void;

    getDefaultDeviceTimeZone(): string;
    setDefaultDeviceTimeZone(strDefaultDeviceTimeZone: string): void;

    getLastDeviceTimeZone(): string;
    setLastDeviceTimeZone(strLastDeviceTimeZone: string): void;

    getApplyDefaultDeviceTimeZoneAtStartup(): boolean;
    setApplyDefaultDeviceTimeZoneAtStartup(bApplyDeviceTimeZone: boolean): void;

    getUseNTP(): boolean;
    setUseNTP(bUseNTP: boolean): void;

    getLastUseNTP(): boolean;
    setLastUseNTP(bLastUseNTP: boolean): void;

    getNTPServerUrl(): string;
    setNTPServerUrl(strNTPServerUrl: string): void;

    getLastNTPServerUrl(): string;
    setLastNTPServerUrl(strNTPServerUrl: string): void;

    getNTPTimeZone(): string;
    setNTPTimeZone(strNTPTimeZone: string): void;

    getLastNTPTimeZone(): string;
    setLastNTPTimeZone(strNTPTimeZone: string): void;
  }
} 