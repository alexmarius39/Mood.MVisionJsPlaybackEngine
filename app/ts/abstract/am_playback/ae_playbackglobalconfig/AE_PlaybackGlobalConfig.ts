import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFileInfo        = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amPlaybackHardwareSettings  = require("../../../../..//app/ts/abstract/am_playback/a_hardwaresettings/A_HardwareSettings"); 
import amPlaybackOpeningHours      = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_OpeningHours"); 
import amPlaybackDayOpeningHours   = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours"); 
import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");
import amGeneralActivityLogServiceSettings = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AE_ActivityLogServiceSettings");

import amMonitoringSettings     = require("../../../../../app/ts/abstract/am_general/ae_monitoringsettings/AE_MonitoringSettings");
import amScreenshotOptions      = require("../../../../../app/ts/abstract/am_general/ae_screenshotoptions/AE_ScreenshotOptions");

import amStartupSystemSettings    = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_SystemSettings");
import amStartupAudioSettings     = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_AudioSettings");
import amStartupVideoSettings     = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_VideoSettings");
import amStartupTimeSettings      = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_TimeSettings");
import amStartupLanguageSettings  = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_LanguageSettings");
import amStartupSettings          = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_StartupSettings");
import amLiveCommandsSettings     = require("../../am_general/ae_livecommands/AE_LiveCommandsSettings");

import amSettingsSync                       = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_SettingsSync");
import amServerDeviceSettingsConfiguration  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_settingssync/AE_ServerDeviceSettingsConfiguration");

import amCronConfiguration  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AE_CronConfiguration");

export module am_playback
{
  export interface AE_PlaybackGlobalConfig extends amGeneral.am_general.A_Entity
  {
    _platform                            : string;      //"windows"/"wizen"/"linux"/"webos"
    _realPlatform                        : string;      //temporary
    _defaultAppStorageName               : string;      //""
    _defaultAppStorageUrlName            : string;      //""
    _defaultResourceStorageName          : string;      // "c:/";
    _defaultResourceStorageUrlName       : string;      // "http://127.0.0.1:9080/c/";
    _defaultHtmlTemplatesStorageName     : string;      // "c:/";
    _defaultHtmlTemplatesStorageUrlName  : string;      // "http://127.0.0.1:9080/c/";                          
    _defaultStorageUrlName               : string;      // "http://127.0.0.1:3000";  
    _defaultStorageSameDomainUrlName     : string;      // "http://127.0.0.1:3000/c/";       
    _appName                             : string;      // "SOC Player"
    _appVersion                          : string;      // "v.03a2"
    _appBuildNo                          : number;      // "187"

    _software_type                                : string;   //= ".wgt, .zip, .ipk";
    _software_local_folder                        : string;   //= "application/tizen/";
    _software_local_file_name                     : string;   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
    _software_local_temporary_folder              : string;   //= "tmp/application/tizen/";
    _software_local_temporary_file_name           : string;   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
    _software_remote_server_url                   : string;   //= "http://192.168.0.222/";
    _software_remote_folder                       : string;   //= "application/tizen/";
    _software_remote_file_name                    : string;   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
    _software_encrypted_local_folder              : string;   //= "moodmedia/application/tizen_encrypted/";
    _software_encrypted_type                      : string;   //= ".wgt, .zip, .ipk";
    _software_encrypted_local_file_name           : string;   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
    _software_encrypted_local_temporary_folder    : string;   //= "tmp/application/tizen_encrypted/";
    _software_encrypted_local_temporary_file_name : string;   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
    _software_encrypted_remote_server_url         : string;   //  "http://192.168.0.222/",
    _software_encrypted_remote_folder             : string;   //= "application/tizen_encrypted/";
    _software_encrypted_remote_file_name          : string;   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";

    _softwareconfig_type                                : string;   //= ".xml";
    _softwareconfig_local_folder                        : string;   //= "application/tizen/";
    _softwareconfig_local_file_name                     : string;   //= "sssp_config.xml";
    _softwareconfig_local_temporary_folder              : string;   //= "tmp/application/tizen/";
    _softwareconfig_local_temporary_file_name           : string;   //= "sssp_config.xml";
    _softwareconfig_remote_server_url                   : string;   //= "http://192.168.0.222/";
    _softwareconfig_remote_folder                       : string;   //= "application/tizen/";
    _softwareconfig_remote_file_name                    : string;   //= "sssp_config.xml";
    _softwareconfig_encrypted_type                      : string;   //= ".wgt.zip";
    _softwareconfig_encrypted_local_folder              : string;   //= "moodmedia/application/tizen_encrypted/";
    _softwareconfig_encrypted_local_file_name           : string;   //= "sssp_config_xml.zip";
    _softwareconfig_encrypted_local_temporary_folder    : string;   //= "tmp/application/tizen_encrypted/";
    _softwareconfig_encrypted_local_temporary_file_name : string;   //= "sssp_config_xml.zip";
    _softwareconfig_encrypted_remote_server_url         : string;   //  "http://192.168.0.222/",
    _softwareconfig_encrypted_remote_folder             : string;   //= "application/tizen_encrypted/";
    _softwareconfig_encrypted_remote_file_name          : string;   //= "sssp_config_xml.zip";

    _playlist_type                                : string;   //= "mood_v5";
    _playlist_local_folder                        : string;   //= "moodmedia/playlist/";
    _playlist_local_file_name                     : string;   //= "playlist_v5.json";
    _playlist_local_temporary_folder              : string;   //= "tmp/playlist/"";
    _playlist_local_temporary_file_name           : string;   //= "playlist_v5.json";
    _playlist_remote_base_folder                  : string;   //= "v5/player_playlists/";
    _playlist_remote_file_name                    : string;   //= "playlist.json";
    _playlist_encrypted_local_folder              : string;   //= "moodmedia/playlist/";
    _playlist_encrypted_local_file_name           : string;   //= "playlist_v5.json";
    _playlist_encrypted_local_temporary_folder    : string;   //= "tmp/playlist/";
    _playlist_encrypted_local_temporary_file_name : string;   //= "playlist_v5.zip";
    _playlist_encrypted_remote_base_folder        : string;   //= "v5/player_playlists/";
    _playlist_encrypted_remote_file_name          : string;   //= "playlist.zip";
  
    _media_files_local_folder                      : string;   //= "media_files/",
    _media_files_local_temporary_folder            : string;   //= "tmp/media_files/",
    _media_files_remote_base_folder                : string;   //= "/v5/medias/",
    _media_files_remote_base_folder2               : string;   //= "/parts/";
    _media_files_encrypted_local_folder            : string;   //= "media_encrypted/";
    _media_files_encrypted_local_temporary_folder  : string;   //= "tmp/media_encrypted/";
    _media_files_encrypted_remote_base_folder      : string;   //= "/v5/medias/";
  
    _html_templates_local_folder                                   : string;   //= "media_files/",
    _html_templates_local_html_instance_data_file_partial_name1    : string;   //=  "_",
    _html_templates_local_html_instance_data_file_partial_name2    : string;   //= ".json",
    _html_templates_local_html_feed_file_name                      : string;   //"files.json",
    _html_templates_local_temporary_folder                         : string;   //= "tmp/media_files/",
    _html_templates_local_temporary_html_instance_data_file_partial_name1 : string;   //=  "_",
    _html_templates_local_temporary_html_instance_data_file_partial_name2 : string;  //= ".json",
    _html_templates_local_temporary_html_feed_file_name            : string;   //"files.json",
    _html_templates_remote_base_folder                             : string;   //= "/v5/medias/",
    _html_templates_remote_base_folder2                            : string;   //= "/parts/";
    _html_templates_remote_base_folder3                            : string;   //= "/v6/htmlInstanceFile/";
    _html_templates_remote_base_folder4                            : string;   //= "player=true&";
    _html_templates_remote_base_folder5                            : string;   //= "serial="";
    _html_templates_remote_html_feed_file_name                     : string;   //= "files.json",
    _html_templates_corrective_js_folder                           : string;   //- "js"

    _html_templates_encrypted_local_folder                         : string;   //= "media_encrypted/";
    _html_templates_encrypted_local_html_instance_data_file_partial_name1 : string //=  "_";
    _html_templates_encrypted_local_html_instance_data_file_partial_name2 : string //= ".json.zip",
    _html_templates_encrypted_local_html_feed_file_name            : string;   //"files.json.zip",
    _html_templates_encrypted_local_temporary_folder               : string;   //= "tmp/media_encrypted/";
    _html_templates_encrypted_local_temporary_html_instance_data_file_partial_name1 : string //=  "_";
    _html_templates_encrypted_local_temporary_html_instance_data_file_partial_name2 : string //= ".json.zip",
    _html_templates_encrypted_local_temporary_html_feed_file_name  : string;   //"files.json.zip",
    _html_templates_encrypted_remote_base_folder                   : string;   //= "/v5/medias/";
    _html_templates_encrypted_remote_base_folder2                  : string;   //= "/parts/"
    _html_templates_encrypted_remote_base_folder3                  : string;   //= "/v6/htmlInstanceFile/";
    _html_templates_encrypted_remote_base_folder4                  : string;   //= ""player=true&"";
    _html_templates_encrypted_remote_base_folder5                  : string;   //= "serial="";
    _html_templates_encrypted_remote_html_feed_file_name           : string;   //= "files.json",
    _html_templates_encrypted_corrective_js_folder                 : string;   //= "js"

    _aAppRootFolder:amGeneralFileInfo.am_general.A_FileInfo;   
    _aAppClientFolder:amGeneralFileInfo.am_general.A_FileInfo;
    _aAppServerFolder:amGeneralFileInfo.am_general.A_FileInfo;   

    _aSoftwareFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aSoftwareRemoteFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aSoftwareTemporaryFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aSoftwareEncryptedFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aSoftwareEncryptedRemoteFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aSoftwareEncryptedTemporaryFile:amGeneralFileInfo.am_general.A_FileInfo;

    _aSoftwareConfigFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aSoftwareConfigRemoteFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aSoftwareConfigTemporaryFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aSoftwareConfigEncryptedFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aSoftwareConfigEncryptedRemoteFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aSoftwareConfigEncryptedTemporaryFile:amGeneralFileInfo.am_general.A_FileInfo;

    _aPlaylistFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aPlaylistRemoteFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aPlaylistTemporaryFile:amGeneralFileInfo.am_general.A_FileInfo;

    _aMediaFilesFolder:amGeneralFileInfo.am_general.A_FileInfo ;
    _aMediaFilesRemoteBaseFolder:amGeneralFileInfo.am_general.A_FileInfo ;
    _aMediaFilesRemoteBaseFolder2:amGeneralFileInfo.am_general.A_FileInfo ;
    _aMediaFilesTemporaryFolder:amGeneralFileInfo.am_general.A_FileInfo ;

    _aHtmlTemplatesFilesFolder:amGeneralFileInfo.am_general.A_FileInfo ;
    _aHtmlTemplatesFilesRemoteBaseFolder:amGeneralFileInfo.am_general.A_FileInfo ;
    _aHtmlTemplatesFilesRemoteBaseFolder2:amGeneralFileInfo.am_general.A_FileInfo ;
    _aHtmlTemplatesFilesRemoteBaseFolder3:amGeneralFileInfo.am_general.A_FileInfo ;
    _aHtmlTemplatesFilesRemoteBaseFolder4:amGeneralFileInfo.am_general.A_FileInfo ;
    _aHtmlTemplatesFilesRemoteBaseFolder5:amGeneralFileInfo.am_general.A_FileInfo ;
    _aHtmlTemplatesFilesTemporaryFolder:amGeneralFileInfo.am_general.A_FileInfo ;
    _aHtmlTemplatesCorrectiveJsFolder:amGeneralFileInfo.am_general.A_FileInfo ;

    _aEncryptedPlaylistFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedPlaylistRemoteFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedPlaylistTemporaryFile:amGeneralFileInfo.am_general.A_FileInfo;

    _aEncryptedMediaFilesFolder:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedMediaFilesRemoteBaseFolder:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedMediaFilesRemoteBaseFolder2:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedMediaFilesTemporaryFolder:amGeneralFileInfo.am_general.A_FileInfo;

    _aEncryptedHtmlTemplatesFilesFolder:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedHtmlTemplatesFilesRemoteBaseFolder:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedHtmlTemplatesFilesRemoteBaseFolder2:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedHtmlTemplatesFilesRemoteBaseFolder3:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedHtmlTemplatesFilesRemoteBaseFolder4:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedHtmlTemplatesFilesRemoteBaseFolder5:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedHtmlTemplatesFilesTemporaryFolder:amGeneralFileInfo.am_general.A_FileInfo;
    _aEncryptedHtmlTemplatesCorrectiveJsFolder:amGeneralFileInfo.am_general.A_FileInfo ;

    _aHardwareSettingsXmlFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aOpeningHoursXmlFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aScreenSaverXmlFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aScreenSaverResourceFolder:amGeneralFileInfo.am_general.A_FileInfo;  
    _aStatisticsFolder:amGeneralFileInfo.am_general.A_FileInfo; 
    _aMainLogFile:amGeneralFileInfo.am_general.A_FileInfo;   
    _aPlaybackLogFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aTmpFolder:amGeneralFileInfo.am_general.A_FileInfo;

    _strSerialNumber: string;
    _strBaseServerApiUrl: string;

    initFolders( defaultAppStorageName              : string,       //""
                 defaultAppStorageUrlName           : string,       //""
                 defaultResourceStorageName         : string,       // "c:/";
                 defaultResourceStorageUrlName      :  string,      // "http://127.0.0.1:9080/c/";      
                 defaultHtmlTemplatesStorageName    : string,       // "c:/";
                 defaultHtmlTemplatesStorageUrlName :  string,      // "http://127.0.0.1:9080/c/";                          
                 defaultStorageUrlName              : string,       // "http://127.0.0.1:3000";  
                 defaultStorageSameDomainUrlName    : string,       // "http://127.0.0.1:3000/c/";       
                 appName                            : string,       // "SOC Player"
                 appVersion                         : string, 
                 appBuildNo                         : number,       //    
                 error : amGeneralError.am_general.A_Error );

    setupEpsilonTimeBeforeNaturalEnd(aJsonSettings: any) : void;
    setEpsilonTimeBeforeNaturalEnd(epsilonTimeBeforeNaturalEnd: number) : void;
    getEpsilonTimeBeforeNaturalEnd() : number;

    setHardwareSettings(aHardwareSettings: amPlaybackHardwareSettings.am_playback.A_HardwareSettings) : void;
    getHardwareSettings() : amPlaybackHardwareSettings.am_playback.A_HardwareSettings;

    setOpeningHours(aOpeningHours: amPlaybackOpeningHours.am_playback.A_OpeningHours) : void;
    getOpeningHours() : amPlaybackOpeningHours.am_playback.A_OpeningHours;

    setScreenSaverConfig(aScreenSaverConfig: amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig) : void;
    getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;

    //------------------------------------------
    mapSettingsLocalToV2(aJsonSettings: any): void;
    setJsonSettings(aJsonSettings: any) : void;

    setSerialNumber(strSerialNumber: string) : void;
    getSerialNumber() : string;

    setBaseServerApiUrl(aJsonSettings: string) : void;
    getBaseServerApiUrl() : string;

    setDefaultPlaylistFileUrl(strDefaultPlaylistFileUrl: string) : void;
    getDefaultPlaylistFileUrl() : string;
    
    setDefaultPlaylistShaFileUrl(strDefaultPlaylistFileUrl: string) : void;
    getDefaultPlaylistShaFileUrl() : string;

    setAppVersion(appVersion: string) : void;
    getAppVersion() : string;

    setAppBuildNo(appBuildNo: number) : void;
    getAppBuildNo() : number;

    getMonitoringSettings(): amMonitoringSettings.am_general.AE_MonitoringSettings;
    setMonitoringSettings(aMonitoringSettings: amMonitoringSettings.am_general.AE_MonitoringSettings): void;

    getScreenshotOptions(): amScreenshotOptions.am_general.AE_ScreenshotOptions;
    setScreenshotOptions(aScreenshotOptions: amScreenshotOptions.am_general.AE_ScreenshotOptions): void;

    getStartupSystemSettings(): amStartupSystemSettings.am_general.AE_SystemSettings;
    setStartupSystemSettings(aStartupSystemSettings: amStartupSystemSettings.am_general.AE_SystemSettings): void;

    getAudioSystemSettings(): amStartupAudioSettings.am_general.AE_AudioSettings;
    setAudioSystemSettings(aStartupAudioSettings: amStartupAudioSettings.am_general.AE_AudioSettings): void;

    getVideoSystemSettings(): amStartupVideoSettings.am_general.AE_VideoSettings;
    setVideoSystemSettings(aStartupVideoSettings: amStartupVideoSettings.am_general.AE_VideoSettings): void;

    getTimeSystemSettings(): amStartupTimeSettings.am_general.AE_TimeSettings;
    setTimeSystemSettings(aStartupTimeSettings: amStartupTimeSettings.am_general.AE_TimeSettings): void;

    getLanguageSystemSettings(): amStartupLanguageSettings.am_general.AE_LanguageSettings;
    setLanguageSystemSettings(aStartupLanguageSettings: amStartupLanguageSettings.am_general.AE_LanguageSettings): void;

    getStartupSettings(): amStartupSettings.am_general.AE_StartupSettings;
    setStartupSettings(aStartupSettings: amStartupSettings.am_general.AE_StartupSettings): void;

    getLiveCommandsSettings(): amLiveCommandsSettings.am_general.AE_LiveCommandsSettings;
    setLiveCommandsSettings(aLiveCommandsSettings: amLiveCommandsSettings.am_general.AE_LiveCommandsSettings): void;

    getSettingsSync(): amSettingsSync.am_general.AE_SettingsSync;
    setSettingsSync(aSettingsSync: amSettingsSync.am_general.AE_SettingsSync): void;

    getServerDeviceSettingsConfiguration(): amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration;
    setServerDeviceSettingsConfiguration(aServerDeviceSettingsConfiguration: amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration): void;

    getJsonDeviceSettings(): object;
    setJsonDeviceSettings(jsonSettings: object);

    getBootSettingsFolder(): amGeneralFileInfo.am_general.A_FileInfo;
    getSettingsFolder(): amGeneralFileInfo.am_general.A_FileInfo;

    getPlaylistFile(): amGeneralFileInfo.am_general.A_FileInfo;
    setPlaylistFile(playlistFile: amGeneralFileInfo.am_general.A_FileInfo): void;

    getMediaFilesFolder(): amGeneralFileInfo.am_general.A_FileInfo;
    setMediaFilesFolder(mediaFilesFolder: amGeneralFileInfo.am_general.A_FileInfo): void;

    getHtmlTemplatesFolder(): amGeneralFileInfo.am_general.A_FileInfo;
    setHtmlTemplatesFolder(htmlTemplatesFolder: amGeneralFileInfo.am_general.A_FileInfo): void;

    setActivityLogServiceSettings(settings: amGeneralActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings): void;
    getActivityLogServiceSettings(): amGeneralActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings;

    setCronConfiguration(aCronConfiguration: amCronConfiguration.am_nonrenderingservices.AE_CronConfiguration): void;
    getCronConfiguration(): amCronConfiguration.am_nonrenderingservices.AE_CronConfiguration;

    getDefaultResourceStorageName(): string;
    getDefaultResourceStorageUrlName() : string;
    
  }
} 