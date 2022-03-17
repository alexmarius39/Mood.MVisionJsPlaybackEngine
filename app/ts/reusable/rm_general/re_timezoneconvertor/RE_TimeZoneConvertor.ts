import amTimeZoneConvertor  = require("../../../../../app/ts/abstract/am_general/ae_timezoneconvertor/AE_TimeZoneConvertor");
import rmEntity             = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_TimeZoneConvertor extends rmEntity.rm_general.R_Entity
                                    implements amTimeZoneConvertor.am_general.AE_TimeZoneConvertor
  {
    _mapTZMoodToNative: Map<string, string>;
    _mapTZNativeToMood: Map<string, string>;

    constructor()
    {
      super();

      this._mapTZMoodToNative = new Map<string, string>();
      this._mapTZNativeToMood = new Map<string, string>();
    }

    public setMoodToNativeTZ(strMoodTZ: string, strNativeTZ: string): void
    {
      if (this._mapTZMoodToNative != null) {
        this._mapTZMoodToNative.set(strMoodTZ, strNativeTZ);
      }
    }

    public setNativeToMoodTZ(strNativeTZ: string, strMoodTZ: string): void
    {
      if (this._mapTZNativeToMood != null) {
        this._mapTZNativeToMood.set(strNativeTZ, strMoodTZ);
      }
    }

    public getMoodTZ(strTimezone: string) : string
    {
      return this._mapTZNativeToMood != null ? this._mapTZNativeToMood.get(strTimezone) : null;
    }
    public getNativeTZ(strTimezone: string) : string
    {
      return this._mapTZMoodToNative != null ? this._mapTZMoodToNative.get(strTimezone) : null;
    }
  }
} 