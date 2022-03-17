import amEntity = require("../a_entity/A_Entity");

export module am_general
{
  export enum Type {
    DEVICE_REBOOT,
    APPLICATION_RESTART,
    CAPTURE_SCREENSHOT,
    PLAYLIST_UPDATE,
    MONITORING,
    PLAYER_FILES_UPDATE,
    FORCE_HOTSPOT_MODE,
    FORCE_UPGRADE,
    MEDIA_PLAY,
    UPLOAD_ACTIVITY_LOGS,
    UPLOAD_SETTINGS_FILES,
    VOTE_PLAYLIST_ITEM,
    GET_VOTED_ITEMS,
    STATISTICS_FILES_UPLOAD,
    PLAYBACK_ACTION,
    ENABLE_NOW_PLAYING_REPORTING,
    MEDIA_VOLUME_UP,
    MEDIA_VOLUME_DOWN,
    MEDIA_VOLUME_SET,
    SOFTWARE_EA_SET,
    CONNECTED_TO_SERVER,
    BLOCKED_MUSIC_UPDATED,
    MEDIA_VOLUME_GET,
    URL_CONNECTION_TEST,
    SETTINGS_UPDATED,
    ON_DEMAND_EVENT_PLAY,
    EVENT_STOP,
    PURGE_FILES,
    VOLUME_PERCENT_FACTOR_ZONE_LEFT_SET,
    VOLUME_PERCENT_FACTOR_ZONE_RIGHT_SET,
    SELECT_MUSIC_PLAYLIST,
    UPLOAD_STORAGE_FILES_LIST,
    UPLOAD_STORAGE_FILES,
    UPLOAD_INSTALLED_APPLICATIONS_LIST,
  }

  export interface AE_ServerCommand extends amEntity.am_general.A_Entity
  {
    copyFromJson(jsonSystemUsageInfo: any): void;

    getId(): number;
    setId(nId: number): void;

    getName(): string;
    setName(strName: string): void;

    getParams(): any;
    setParams(strParams: any): void;
  }
}