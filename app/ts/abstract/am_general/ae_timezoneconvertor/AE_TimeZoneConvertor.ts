import amEntity = require("../a_entity/A_Entity");
import amFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

export module am_general
{
  export interface AE_TimeZoneConvertor extends amEntity.am_general.A_Entity
  {
    _mapTZMoodToNative: Map<string, string>;
    _mapTZNativeToMood: Map<string, string>;
    
    setMoodToNativeTZ(strMoodTZ: string, strNativeTZ: string): void;
    setNativeToMoodTZ(strNativeTZ: string, strMoodTZ: string): void;
    
    getMoodTZ(strTimezone: string) : string;
    getNativeTZ(strTimezone: string) : string;
  }
} 