import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralFileInfo  = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amPlaybackHardwareSettings  = require("../../../../..//app/ts/abstract/am_playback/a_hardwaresettings/A_HardwareSettings"); 
import amPlaybackOpeningHours      = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_OpeningHours"); 
import amPlaybackDayOpeningHours   = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours"); 
import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig"); 
import amActivityLogServiceSettings = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AE_ActivityLogServiceSettings");
import amGeneralActivityLogVerbosityTypes = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AE_ActivityLogVerbosityTypes");

import amMonitoringSettings      = require("../../../../../app/ts/abstract/am_general/ae_monitoringsettings/AE_MonitoringSettings"); 
import amScreenshotOptions      = require("../../../../../app/ts/abstract/am_general/ae_screenshotoptions/AE_ScreenshotOptions"); 
import amCaptureScreenInfo      = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");

import amStartupSystemSettings    = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_SystemSettings");
import amStartupAudioSettings     = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_AudioSettings");
import amStartupVideoSettings     = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_VideoSettings");
import amStartupTimeSettings      = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_TimeSettings");
import amStartupLanguageSettings  = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_LanguageSettings");
import amStartupSettings          = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_StartupSettings");
import amLiveCommandsSettings     = require("../../../abstract/am_general/ae_livecommands/AE_LiveCommandsSettings");

import amSettingsSync                       = require("../../../abstract/am_general/ae_devicesettings/AE_SettingsSync");
import amServerDeviceSettingsConfiguration  = require("../../../abstract/am_nonrenderingservices/as_settingssync/AE_ServerDeviceSettingsConfiguration");

import amCronConfiguration  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AE_CronConfiguration");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_playback
{
  export class RE_PlaybackGlobalConfig    extends rmGeneralEntity.rm_general.R_Entity
                                          implements amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
  {
    _platform                       : string;
    _realPlatform                   : string;

    _defaultAppStorageName          : string;      //""
    _defaultAppStorageUrlName       : string;      //""
    _defaultResourceStorageName     : string;      // "c:/";
    _defaultResourceStorageUrlName  : string;      // "http://127.0.0.1:9080/c/";   
    _defaultHtmlTemplatesStorageName     : string;      // "c:/";
    _defaultHtmlTemplatesStorageUrlName  : string;      // "http://127.0.0.1:9080/c/";  
    _defaultStorageUrlName          : string;      // "http://127.0.0.1:3000";  
    _defaultStorageSameDomainUrlName: string;      // "http://127.0.0.1:3000/c/";       
    _appName                        : string;      // "SOC Player"
    _appVersion                     : string;      // "v0.3a2"
    _appBuildNo                     : number;      // "187"
    
    // monitoring settings
    _aMonitoringSettings            : amMonitoringSettings.am_general.AE_MonitoringSettings;

    // screenshot settings
    _aScreenshotOptions             : amScreenshotOptions.am_general.AE_ScreenshotOptions;

    // startup settings
    _aStartupSystemSettings         : amStartupSystemSettings.am_general.AE_SystemSettings;
    _aStartupAudioSettings          : amStartupAudioSettings.am_general.AE_AudioSettings;
    _aStartupVideoSettings          : amStartupVideoSettings.am_general.AE_VideoSettings;
    _aStartupTimeSettings           : amStartupTimeSettings.am_general.AE_TimeSettings;
    _aStartupLanguageSettings       : amStartupLanguageSettings.am_general.AE_LanguageSettings;
    _aStartupSettings               : amStartupSettings.am_general.AE_StartupSettings;

    // livecommands settings
    _aLiveCommandsSettings          : amLiveCommandsSettings.am_general.AE_LiveCommandsSettings;
    // sync settings
    _aSettingsSync                      : amSettingsSync.am_general.AE_SettingsSync;
    _aServerDeviceSettingsConfiguration : amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration;
    _aServerDeviceSettings              : any;

    _software_type                                : string;   //= ".wgt, .zip, .ipk";
    _software_local_folder                        : string;   //= "application/tizen/";
    _software_local_file_name                     : string;   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
    _software_local_temporary_folder              : string;   //= "tmp/application/tizen/";
    _software_local_temporary_file_name           : string;   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
    _software_remote_server_url                   : string;   //= "http://192.168.0.222/";
    _software_remote_folder                       : string;   //= "application/tizen/";
    _software_remote_file_name                    : string;   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
    _software_encrypted_type                      : string;   //= ".wgt.zip";
    _software_encrypted_local_folder              : string;   //= "moodmedia/application/tizen_encrypted/";
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
    _softwareconfig_encrypted_type                      : string;   //= ".xml.zip";
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
    _media_files_encrypted_remote_base_folder2     : string;   //= "/parts/"

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
    _html_templates_remote_html_feed_file_name                     : string;   //"files.json",
    _html_templates_corrective_js_folder                           : string;   // "/moodmedia/software_v5/settings/js"

    
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
    _html_templates_encrypted_remote_html_feed_file_name           : string;   //"files.json.zip",
    _html_templates_encrypted_corrective_js_folder                 : string;   // "/moodmedia/software_v5/settings/js"

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
    _aEncryptedHtmlTemplatesCorrectiveJsFolder:amGeneralFileInfo.am_general.A_FileInfo;

    _aBootSettingsFolder:amGeneralFileInfo.am_general.A_FileInfo;
    _aSettingsFolder:amGeneralFileInfo.am_general.A_FileInfo;
    _aHardwareSettingsXmlFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aOpeningHoursXmlFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aScreenSaverXmlFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aScreenSaverResourceFolder:amGeneralFileInfo.am_general.A_FileInfo;  
    _aStatisticsFolder:amGeneralFileInfo.am_general.A_FileInfo; 
    _aMainLogFile:amGeneralFileInfo.am_general.A_FileInfo;   
    _aPlaybackLogFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aDownloadPlaylistLogFile:amGeneralFileInfo.am_general.A_FileInfo;
    _aTmpFolder:amGeneralFileInfo.am_general.A_FileInfo;
      
    _epsilonTimeBeforeNaturalEnd : number; //ms
    _epsilonTimeBeforeStart      : number; //ms

    _aHardwareSettings: amPlaybackHardwareSettings.am_playback.A_HardwareSettings;
    _aOpeningHours:     amPlaybackOpeningHours.am_playback.A_OpeningHours;
    _aScreenSaverConfig:amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;

    _aActivityLogServiceSettings: amActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings;
    _strSerialNumber: string;
    _strBaseServerApiUrl: string;
    _strDefaultPlaylistFileUrl: string;
    _strDefaultPlaylistShaFileUrl: string

    _aCronConfiguration : amCronConfiguration.am_nonrenderingservices.AE_CronConfiguration;
    
    //----------------------
    public constructor()
    {
      super()

      this._platform                            = "";      //""
      this._realPlatform                        = "";      //""

      this._defaultAppStorageName               = "";      //""
      this._defaultAppStorageUrlName            = "";      //""
      this._defaultResourceStorageName          = "";      // "c:/";
      this._defaultResourceStorageUrlName       = "";      // "http://127.0.0.1:9080/c/";                          
      this._defaultHtmlTemplatesStorageName     = "";      // "c:/";
      this._defaultHtmlTemplatesStorageUrlName  = "";      // "http://127.0.0.1:9080/c/";  
      this._defaultStorageUrlName               = "";      // "http://127.0.0.1:3000";  
      this._defaultStorageSameDomainUrlName     = "";      // "http://127.0.0.1:3000/c/";       
      this._appName                             = "";      // "SOC Player"
      this._appVersion                          = "";      // "184"
      this._appBuildNo                          = 0;
  
      // monitoring settings
      this._aMonitoringSettings = null;
      // screenshot settings
      this._aScreenshotOptions  = null;
      // startup settings
      this._aStartupSystemSettings    = null;
      this._aStartupAudioSettings     = null;
      this._aStartupVideoSettings     = null;
      this._aStartupTimeSettings      = null;
      this._aStartupLanguageSettings  = null;
      // livecommands settings
      this._aLiveCommandsSettings     = null;
      // sync settings
      this._aSettingsSync                       = null;
      this._aServerDeviceSettingsConfiguration  = null;

      this._software_type                                = "";   //= ".wgt, .zip, .ipk";
      this._software_local_folder                        = "";   //= "application/tizen/";
      this._software_local_file_name                     = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
      this._software_local_temporary_folder              = "";   //= "tmp/application/tizen/";
      this._software_local_temporary_file_name           = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
      this._software_remote_server_url                   = "";   //= "http://192.168.0.222/";
      this._software_remote_folder                       = "";   //= "application/tizen/";
      this._software_remote_file_name                    = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
      this._software_encrypted_local_folder              = "";   //= "moodmedia/application/tizen_encrypted/";
      this._software_encrypted_local_file_name           = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
      this._software_encrypted_local_temporary_folder    = "";   //= "tmp/application/tizen_encrypted/";
      this._software_encrypted_local_temporary_file_name = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
      this._software_encrypted_remote_server_url         = "";   //  "http://192.168.0.222/",
      this._software_encrypted_remote_folder             = "";   //= "application/tizen_encrypted/";
      this._software_encrypted_remote_file_name          = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
  
      this._softwareconfig_type                                = "";   //= ".wgt, .zip, .ipk";
      this._softwareconfig_local_folder                        = "";   //= "application/tizen/";
      this._softwareconfig_local_file_name                     = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
      this._softwareconfig_local_temporary_folder              = "";   //= "tmp/application/tizen/";
      this._softwareconfig_local_temporary_file_name           = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
      this._softwareconfig_remote_server_url                   = "";   //= "http://192.168.0.222/";
      this._softwareconfig_remote_folder                       = "";   //= "application/tizen/";
      this._softwareconfig_remote_file_name                    = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
      this._softwareconfig_encrypted_local_folder              = "";   //= "moodmedia/application/tizen_encrypted/";
      this._softwareconfig_encrypted_local_file_name           = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
      this._softwareconfig_encrypted_local_temporary_folder    = "";   //= "tmp/application/tizen_encrypted/";
      this._softwareconfig_encrypted_local_temporary_file_name = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";
      this._softwareconfig_encrypted_remote_server_url         = "";   //  "http://192.168.0.222/",
      this._softwareconfig_encrypted_remote_folder             = "";   //= "application/tizen_encrypted/";
      this._softwareconfig_encrypted_remote_file_name          = "";   //= "SSSP4MVisionJsPlaybackEngine_wgt.zip";

      this._playlist_type                                = "mood_v5";
      this._playlist_local_folder                        = "moodmedia/playlist/";
      this._playlist_local_file_name                     = "playlist_v5.json";
      this._playlist_local_temporary_folder              = "tmp/playlist/";
      this._playlist_local_temporary_file_name           = "playlist_v5.json";
      this._playlist_remote_base_folder                  = "v5/player_playlists/";
      this._playlist_remote_file_name                    = "playlist.json";
      this._playlist_encrypted_local_folder              = "moodmedia/playlist/";
      this._playlist_encrypted_local_file_name           = "playlist_v5.json";
      this._playlist_encrypted_local_temporary_folder    = "tmp/playlist/";
      this._playlist_encrypted_local_temporary_file_name = "playlist_v5.zip";
      this._playlist_encrypted_remote_base_folder        = "v5/player_playlists/";
      this._playlist_encrypted_remote_file_name          = "playlist.zip";
    
      this._media_files_local_folder                      = "media_files/",
      this._media_files_local_temporary_folder            = "tmp/media_files/",
      this._media_files_remote_base_folder                = "/v5/medias/",
      this._media_files_remote_base_folder2               = "/parts/";
      this._media_files_encrypted_local_folder            = "media_encrypted/";
      this._media_files_encrypted_local_temporary_folder  = "tmp/media_encrypted/";
      this._media_files_encrypted_remote_base_folder      = "/v5/medias/";
      this._media_files_encrypted_remote_base_folder2     = "/parts/";
    
      this._html_templates_local_folder                                          = "html_templates/",
      this._html_templates_local_html_instance_data_file_partial_name1           = "_",
      this._html_templates_local_html_instance_data_file_partial_name2           = ".json",
      this._html_templates_local_html_feed_file_name                             = "files.json";
      this._html_templates_local_temporary_folder                                = "tmp/html_templates/";
      this._html_templates_local_temporary_html_instance_data_file_partial_name1 =  "_";
      this._html_templates_local_temporary_html_instance_data_file_partial_name2 = ".json";
      this._html_templates_local_temporary_html_feed_file_name                   = "files.json";
      this._html_templates_remote_base_folder                                    = "/v5/medias/",
      this._html_templates_remote_base_folder2                                   = "/parts/";
      this._html_templates_remote_base_folder3                                   = "/v6/htmlInstanceFile/";
      this._html_templates_remote_base_folder4                                   = "player=true&";
      this._html_templates_remote_base_folder5                                   = "serial=";
      this._html_templates_remote_html_feed_file_name                            = "files.json";
      this._html_templates_corrective_js_folder                                  = "/moodmedia/software_v5/js/";

      this._html_templates_encrypted_local_folder                                = "media_encrypted/";
      this._html_templates_encrypted_local_html_instance_data_file_partial_name1 = "_";
      this._html_templates_encrypted_local_html_instance_data_file_partial_name2 = ".json.zip";
      this._html_templates_encrypted_local_html_feed_file_name                   = "files.json.zip";
      this._html_templates_encrypted_local_temporary_folder                      = "tmp/media_encrypted/";
      this._html_templates_encrypted_local_temporary_html_instance_data_file_partial_name1 =  "_";
      this._html_templates_encrypted_local_temporary_html_instance_data_file_partial_name2 = ".json.zip",
      this._html_templates_encrypted_local_temporary_html_feed_file_name         = "files.json.zip",
      this._html_templates_encrypted_remote_base_folder                          = "/v5/medias/";
      this._html_templates_encrypted_remote_base_folder2                         = "/parts/"
      this._html_templates_encrypted_remote_base_folder3                         = "/v6/htmlInstanceFile/";
      this._html_templates_encrypted_remote_base_folder4                         = "player=true&";
      this._html_templates_encrypted_remote_base_folder5                         = "serial=";  
      this._html_templates_encrypted_remote_html_feed_file_name                  = "files.json.zip";
      this._html_templates_encrypted_corrective_js_folder                        = "/moodmedia/software_v5/js/";

      this._aAppRootFolder             = null;   
      this._aAppClientFolder           = null;   
      this._aAppServerFolder           = null;   

      this._aSoftwareFile                   = null;
      this._aSoftwareRemoteFile             = null;
      this._aSoftwareTemporaryFile          = null;
      this._aSoftwareEncryptedFile          = null;
      this._aSoftwareEncryptedRemoteFile    = null;
      this._aSoftwareEncryptedTemporaryFile = null;

      this._aSoftwareConfigFile                   = null;
      this._aSoftwareConfigRemoteFile             = null;
      this._aSoftwareConfigTemporaryFile          = null;
      this._aSoftwareConfigEncryptedFile          = null;
      this._aSoftwareConfigEncryptedRemoteFile    = null;
      this._aSoftwareConfigEncryptedTemporaryFile = null;
      
      this._aPlaylistFile              = null;   
      this._aPlaylistRemoteFile        = null;   
      this._aPlaylistTemporaryFile     = null;   
  
      this._aMediaFilesFolder               = null;   
      this._aMediaFilesRemoteBaseFolder     = null;   
      this._aMediaFilesRemoteBaseFolder2    = null;   
      this._aMediaFilesTemporaryFolder      = null;   
  
      this._aHtmlTemplatesFilesFolder            = null;   
      this._aHtmlTemplatesFilesRemoteBaseFolder  = null;   
      this._aHtmlTemplatesFilesRemoteBaseFolder2 = null;   
      this._aHtmlTemplatesFilesRemoteBaseFolder3 = null;   
      this._aHtmlTemplatesFilesRemoteBaseFolder4 = null;   
      this._aHtmlTemplatesFilesRemoteBaseFolder5 = null;   
      this._aHtmlTemplatesFilesTemporaryFolder   = null;   
      this._aHtmlTemplatesCorrectiveJsFolder     = null;   

      this._aEncryptedPlaylistFile          = null;   
      this._aEncryptedPlaylistRemoteFile    = null;   
      this._aEncryptedPlaylistTemporaryFile = null;   
  
      this._aEncryptedMediaFilesFolder            = null;
      this._aEncryptedMediaFilesRemoteBaseFolder  = null;
      this._aEncryptedMediaFilesRemoteBaseFolder2 = null;
      this._aEncryptedMediaFilesTemporaryFolder   = null;
        
      this._aEncryptedHtmlTemplatesFilesFolder            = null;
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder  = null;
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder2 = null;
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder3 = null;
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder4 = null;
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder5 = null;
      this._aEncryptedHtmlTemplatesFilesTemporaryFolder   = null;
      this._aEncryptedHtmlTemplatesCorrectiveJsFolder     = null;   

      this._aBootSettingsFolder        = null;   
      this._aSettingsFolder            = null;   
      this._aHardwareSettingsXmlFile   = null;   
      this._aOpeningHoursXmlFile       = null;   
      this._aScreenSaverXmlFile        = null;   
      this._aScreenSaverResourceFolder = null;   
      this._aStatisticsFolder          = null; 
      this._aMainLogFile               = null;   ;   
      this._aPlaybackLogFile           = null;   
      this._aTmpFolder                 = null;   

      this._aHardwareSettings          = null;
      this._aOpeningHours              = null;
      this._aScreenSaverConfig         = null;
  
      this._epsilonTimeBeforeNaturalEnd = 10;//1500;
      this._epsilonTimeBeforeStart      = 0;
      this._aActivityLogServiceSettings = null;

      this._aServerDeviceSettings           = null;

      this._strSerialNumber               = null;
      this._strBaseServerApiUrl           = null;
      this._strDefaultPlaylistFileUrl     = null;
      this._strDefaultPlaylistShaFileUrl  = null;

      this._aCronConfiguration            = null;
     }

    //------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      
      this._aAppRootFolder             = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aAppClientFolder           = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);    
      this._aAppServerFolder           = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);    

      this._aSoftwareFile                   = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aSoftwareRemoteFile             = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aSoftwareTemporaryFile          = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aSoftwareEncryptedFile          = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aSoftwareEncryptedRemoteFile    = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aSoftwareEncryptedTemporaryFile = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 

      this._aSoftwareConfigFile                   = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aSoftwareConfigRemoteFile             = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aSoftwareConfigTemporaryFile          = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aSoftwareConfigEncryptedFile          = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aSoftwareConfigEncryptedRemoteFile    = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aSoftwareConfigEncryptedTemporaryFile = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 

      this._aActivityLogServiceSettings = this._aSrvLocator._iEntityCreation.createDefaultActivityLogServiceSettings(error);

      // default monitoring settings
      this._aMonitoringSettings = this._aSrvLocator._iEntityCreation.createDefaultMonitoringSettings(error);
      this._aMonitoringSettings.setRemoteRelativePath("/v6/player/monitoring");

      
      // default screenshot settings
      this._aScreenshotOptions = this._aSrvLocator._iEntityCreation.createDefaultScreenshotOptions(error);
      const aCaptureScreenInfo: amCaptureScreenInfo.am_general.A_CaptureScreenInfo = this._aSrvLocator._iEntityCreation.createDefaultCaptureScreenInfo(error);
      this._aScreenshotOptions.setCaptureScreenInfo(aCaptureScreenInfo);

      this._aScreenshotOptions.setRemoteRelativePath("/v5/UploadScreenshot.ashx");
      this._aScreenshotOptions.setRemoteFileName("screenshot.jpg");
      this._aScreenshotOptions.getCaptureScreenInfo().getFileInfo().setPath("tmp/screenshots/");
      this._aScreenshotOptions.getCaptureScreenInfo().getFileInfo().setName("screenshot.jpg");
      
      // default startup settings
      this._aStartupSystemSettings    = this._aSrvLocator._iEntityCreation.createDefaultStartupSystemSettings(error);
      this._aStartupAudioSettings     = this._aSrvLocator._iEntityCreation.createDefaultStartupAudioSettings(error);
      this._aStartupVideoSettings     = this._aSrvLocator._iEntityCreation.createDefaultStartupVideoSettings(error);
      this._aStartupTimeSettings      = this._aSrvLocator._iEntityCreation.createDefaultStartupTimeSettings(error);
      this._aStartupLanguageSettings  = this._aSrvLocator._iEntityCreation.createDefaultStartupLanguageSettings(error);
      this._aStartupSettings          = this._aSrvLocator._iEntityCreation.createDefaultStartupSettings(error);
      this._aStartupTimeSettings.setServerUrl("https://mvision-qa.moodnet.eu/v5/serverinfos.ashx");

      // default livecommands settings
      this._aLiveCommandsSettings     = this._aSrvLocator._iEntityCreation.createDefaultLiveCommandsSettings(error);
      this._aLiveCommandsSettings.setAuthTokenRelativePath("/v6/playerService/api/authentication/player");
      this._aLiveCommandsSettings.setSignalRHubRelativePath("/v6/playerService/signalr/core/player");
      this._aLiveCommandsSettings.setSignalRHubMethodName("runCommand");
      // default settings sync
      this._aSettingsSync                       = this._aSrvLocator._iEntityCreation.createDefaultSettingsSync(error);
      this._aServerDeviceSettingsConfiguration  = this._aSrvLocator._iEntityCreation.createDefaultServerDeviceSettingsConfiguration(error);
      this._aServerDeviceSettingsConfiguration.injectDependencies(aSrvContainer, aSrvLocator, aSrvLog, error);
      this._aServerDeviceSettingsConfiguration.initSettings();

      this._aPlaylistFile              = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aPlaylistRemoteFile        = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aPlaylistTemporaryFile     = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     

      this._aMediaFilesFolder               = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aMediaFilesRemoteBaseFolder     = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aMediaFilesRemoteBaseFolder2    = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aMediaFilesTemporaryFolder      = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
  
      this._aHtmlTemplatesFilesFolder             = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aHtmlTemplatesFilesRemoteBaseFolder   = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aHtmlTemplatesFilesRemoteBaseFolder2  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aHtmlTemplatesFilesRemoteBaseFolder2  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aHtmlTemplatesFilesRemoteBaseFolder3  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aHtmlTemplatesFilesRemoteBaseFolder4  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aHtmlTemplatesFilesRemoteBaseFolder5  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);     
      this._aHtmlTemplatesFilesTemporaryFolder    = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aHtmlTemplatesCorrectiveJsFolder      = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 

      this._aEncryptedPlaylistFile          = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedPlaylistRemoteFile    = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedPlaylistTemporaryFile = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
  
      this._aEncryptedHtmlTemplatesFilesFolder            = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder2 = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder3 = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder4 = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder5 = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedHtmlTemplatesFilesTemporaryFolder   = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedHtmlTemplatesCorrectiveJsFolder     = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 

      this._aEncryptedMediaFilesFolder            = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedMediaFilesRemoteBaseFolder  = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedMediaFilesRemoteBaseFolder2 = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 
      this._aEncryptedMediaFilesTemporaryFolder   = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 

      this._aBootSettingsFolder        = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aSettingsFolder            = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      
      this._aHardwareSettingsXmlFile   = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aOpeningHoursXmlFile       = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);

      this._aScreenSaverXmlFile        = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aScreenSaverResourceFolder = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error); 

      this._aStatisticsFolder          = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);

      this._aMainLogFile               = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aPlaybackLogFile           = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      this._aDownloadPlaylistLogFile   = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);

      this._aTmpFolder                 = this._aSrvLocator._iEntityCreation.createDefaultFileInfo(error);

      this._aHardwareSettings          = this._aSrvLocator._iEntityCreation.createDefaultHardwareSettings(error);
      this._aOpeningHours              = this._aSrvLocator._iEntityCreation.createDefaultOpeningHours(error);
      this._aScreenSaverConfig         = this._aSrvLocator._iEntityCreation.createDefaultScreenSaverConfig(error);

      this._aCronConfiguration         = this._aSrvLocator._iEntityCreation.createDefaultCronConfiguration(error);
      this._aCronConfiguration.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);

      return 0;
    }


    //--------------------------------------
    public getDefaultResourceStorageName() : string
    {
      return this._defaultResourceStorageName;
    }

    //--------------------------------------
    public getDefaultResourceStorageUrlName() : string
    {
      return this._defaultResourceStorageUrlName;
    }

    //-----------------------
    public initFolders( defaultAppStorageName          : string,       //""
                        defaultAppStorageUrlName       : string,       //""
                        defaultResourceStorageName     : string,       // "c:/";
                        defaultResourceStorageUrlName  : string,      // "http://127.0.0.1:9080/c/"; 
                        defaultHtmlTemplatesStorageName     : string,       // "c:/";
                        defaultHtmlTemplatesStorageUrlName  : string,      // "http://127.0.0.1:9080/c/";                          
                        defaultStorageUrlName          : string,       // "http://127.0.0.1:3000";  
                        defaultStorageSameDomainUrlName: string,       // "http://127.0.0.1:3000/c/";       
                        appName: string,                               // "SOC Player"
                        appVersion: string,   
                        appBuildNo : number,                         // "162"
                        error : amGeneralError.am_general.A_Error 
                      )
    {
      this._defaultAppStorageName              = defaultAppStorageName;          //""
      this._defaultAppStorageUrlName           = defaultAppStorageUrlName;       //""
      this._defaultResourceStorageName         = defaultResourceStorageName;     // "c:/";
      this._defaultResourceStorageUrlName      = defaultResourceStorageUrlName;  // "http://127.0.0.1:9080/c/";                          
      this._defaultStorageUrlName              = defaultStorageUrlName;          // "http://127.0.0.1:3000";  
      this._defaultStorageSameDomainUrlName    = defaultStorageSameDomainUrlName;// "http://127.0.0.1:3000/c/";       

      this._defaultHtmlTemplatesStorageName    = defaultHtmlTemplatesStorageName;     // "c:/";
      this._defaultHtmlTemplatesStorageUrlName = defaultHtmlTemplatesStorageUrlName;  // "http://127.0.0.1:9080/c/";    

      this._appName                            = appName;             // "SOC Player"
      this._appVersion                         = appVersion;          // "v03a2"
      this._appBuildNo                         = appBuildNo;             // "187"

      this._aAppRootFolder.setStorage(defaultAppStorageName);      // tbc 
      this._aAppRootFolder.setPath("tbc");                        
      this._aAppRootFolder.setName("tbc");   
      this._aAppRootFolder.setUrlStorage(defaultAppStorageUrlName); 
      this._aAppRootFolder.setUrlPath("tbc");      
      this._aAppRootFolder.setUrlName("tbc");   
     
      this._aAppClientFolder.setStorage(defaultAppStorageName);    
      this._aAppClientFolder.setPath("tbc");      
      this._aAppClientFolder.setName("tbc");   
      this._aAppClientFolder.setUrlStorage(defaultAppStorageUrlName); 
      this._aAppClientFolder.setUrlPath("tbc");      
      this._aAppClientFolder.setUrlName("tbc");   
     
      this._aAppServerFolder.setStorage(defaultAppStorageName);      
      this._aAppServerFolder.setPath("tbc");      
      this._aAppServerFolder.setName("tbc");   
      this._aAppServerFolder.setUrlStorage(defaultAppStorageUrlName); 
      this._aAppServerFolder.setUrlPath("tbc");      
      this._aAppServerFolder.setUrlName("tbc");   
     
      //----- software
      this._aSoftwareFile.setStorage(this._defaultResourceStorageName);       //"c:/");  
      this._aSoftwareFile.setPath(this._software_local_folder);   
      this._aSoftwareFile.setName(this._software_local_file_name);   
      this._aSoftwareFile.setUrlStorage(this._defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aSoftwareFile.setUrlPath(this._software_local_folder);      
      this._aSoftwareFile.setUrlName(this._software_local_file_name);   
     
      this._aSoftwareTemporaryFile.setStorage(this._defaultResourceStorageName);       
      this._aSoftwareTemporaryFile.setPath(this._software_local_temporary_folder);   
      this._aSoftwareTemporaryFile.setName(this._software_local_temporary_file_name);   
      this._aSoftwareTemporaryFile.setUrlStorage(this._defaultResourceStorageUrlName); 
      this._aSoftwareTemporaryFile.setUrlPath(this._software_local_temporary_folder);      
      this._aSoftwareTemporaryFile.setUrlName(this._software_local_temporary_file_name);   

      this._aSoftwareRemoteFile.setStorage(this._software_remote_server_url);       
      this._aSoftwareRemoteFile.setPath(this._software_remote_folder);   
      this._aSoftwareRemoteFile.setName(this._software_remote_file_name);   
      this._aSoftwareRemoteFile.setUrlStorage(this._software_remote_server_url); 
      this._aSoftwareRemoteFile.setUrlPath(this._software_remote_folder);      
      this._aSoftwareRemoteFile.setUrlName(this._software_remote_file_name);   

      //----- software config
      this._aSoftwareConfigFile.setStorage(this._defaultResourceStorageName);       //"c:/");  
      this._aSoftwareConfigFile.setPath(this._softwareconfig_local_folder);   
      this._aSoftwareConfigFile.setName(this._softwareconfig_local_file_name);   
      this._aSoftwareConfigFile.setUrlStorage(this._defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aSoftwareConfigFile.setUrlPath(this._softwareconfig_local_folder);      
      this._aSoftwareConfigFile.setUrlName(this._softwareconfig_local_file_name);   
     
      this._aSoftwareConfigTemporaryFile.setStorage(this._defaultResourceStorageName);       
      this._aSoftwareConfigTemporaryFile.setPath(this._softwareconfig_local_temporary_folder);   
      this._aSoftwareConfigTemporaryFile.setName(this._softwareconfig_local_temporary_file_name);   
      this._aSoftwareConfigTemporaryFile.setUrlStorage(this._defaultResourceStorageUrlName); 
      this._aSoftwareConfigTemporaryFile.setUrlPath(this._softwareconfig_local_temporary_folder);      
      this._aSoftwareConfigTemporaryFile.setUrlName(this._softwareconfig_local_temporary_file_name);   

      this._aSoftwareConfigRemoteFile.setStorage(this._softwareconfig_remote_server_url);       
      this._aSoftwareConfigRemoteFile.setPath(this._softwareconfig_remote_folder);   
      this._aSoftwareConfigRemoteFile.setName(this._softwareconfig_remote_file_name);   
      this._aSoftwareConfigRemoteFile.setUrlStorage(this._softwareconfig_remote_server_url); 
      this._aSoftwareConfigRemoteFile.setUrlPath(this._softwareconfig_remote_folder);      
      this._aSoftwareConfigRemoteFile.setUrlName(this._softwareconfig_remote_file_name);   

      //--------- encrypted software
      this._aSoftwareEncryptedFile.setStorage(this._defaultResourceStorageName);       //"c:/");  
      this._aSoftwareEncryptedFile.setPath(this._software_encrypted_local_folder);   
      this._aSoftwareEncryptedFile.setName(this._software_encrypted_local_file_name);   
      this._aSoftwareEncryptedFile.setUrlStorage(this._defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aSoftwareEncryptedFile.setUrlPath(this._software_encrypted_local_folder);      
      this._aSoftwareEncryptedFile.setUrlName(this._software_encrypted_local_file_name);   
     
      this._aSoftwareEncryptedTemporaryFile.setStorage(this._defaultResourceStorageUrlName);       
      this._aSoftwareEncryptedTemporaryFile.setPath(this._software_encrypted_local_temporary_folder);   
      this._aSoftwareEncryptedTemporaryFile.setName(this._software_encrypted_local_temporary_file_name);   
      this._aSoftwareEncryptedTemporaryFile.setUrlStorage(this._defaultResourceStorageUrlName); 
      this._aSoftwareEncryptedTemporaryFile.setUrlPath(this._software_encrypted_local_temporary_folder);      
      this._aSoftwareEncryptedTemporaryFile.setUrlName(this._software_encrypted_local_temporary_file_name);   

      this._aSoftwareEncryptedRemoteFile.setStorage(this._software_encrypted_remote_server_url);       
      this._aSoftwareEncryptedRemoteFile.setPath(this._software_encrypted_remote_folder);   
      this._aSoftwareEncryptedRemoteFile.setName(this._software_encrypted_remote_file_name);   
      this._aSoftwareEncryptedRemoteFile.setUrlStorage(this._software_encrypted_remote_server_url); 
      this._aSoftwareEncryptedRemoteFile.setUrlPath(this._software_encrypted_remote_folder);      
      this._aSoftwareEncryptedRemoteFile.setUrlName(this._software_encrypted_remote_file_name);   

      //--------- encrypted software config
      this._aSoftwareConfigEncryptedFile.setStorage(this._defaultResourceStorageName);       //"c:/");  
      this._aSoftwareConfigEncryptedFile.setPath(this._softwareconfig_encrypted_local_folder);   
      this._aSoftwareConfigEncryptedFile.setName(this._softwareconfig_encrypted_local_file_name);   
      this._aSoftwareConfigEncryptedFile.setUrlStorage(this._defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aSoftwareConfigEncryptedFile.setUrlPath(this._softwareconfig_encrypted_local_folder);      
      this._aSoftwareConfigEncryptedFile.setUrlName(this._softwareconfig_encrypted_local_file_name);   
     
      this._aSoftwareConfigEncryptedTemporaryFile.setStorage(this._defaultResourceStorageUrlName);       
      this._aSoftwareConfigEncryptedTemporaryFile.setPath(this._softwareconfig_encrypted_local_temporary_folder);   
      this._aSoftwareConfigEncryptedTemporaryFile.setName(this._softwareconfig_encrypted_local_temporary_file_name);   
      this._aSoftwareConfigEncryptedTemporaryFile.setUrlStorage(this._defaultResourceStorageUrlName); 
      this._aSoftwareConfigEncryptedTemporaryFile.setUrlPath(this._softwareconfig_encrypted_local_temporary_folder);      
      this._aSoftwareConfigEncryptedTemporaryFile.setUrlName(this._softwareconfig_encrypted_local_temporary_file_name);   

      this._aSoftwareConfigEncryptedRemoteFile.setStorage(this._softwareconfig_encrypted_remote_server_url);       
      this._aSoftwareConfigEncryptedRemoteFile.setPath(this._softwareconfig_encrypted_remote_folder);   
      this._aSoftwareConfigEncryptedRemoteFile.setName(this._softwareconfig_encrypted_remote_file_name);   
      this._aSoftwareConfigEncryptedRemoteFile.setUrlStorage(this._softwareconfig_encrypted_remote_server_url); 
      this._aSoftwareConfigEncryptedRemoteFile.setUrlPath(this._softwareconfig_encrypted_remote_folder);      
      this._aSoftwareConfigEncryptedRemoteFile.setUrlName(this._softwareconfig_encrypted_remote_file_name);   

      //---------- playlist
      this._aPlaylistFile.setStorage(this._defaultResourceStorageName);       //"c:/");  
      this._aPlaylistFile.setPath(this._playlist_local_folder);   
      this._aPlaylistFile.setName(this._playlist_local_file_name);   
      this._aPlaylistFile.setUrlStorage(this._defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aPlaylistFile.setUrlPath(this._playlist_local_folder);      
      this._aPlaylistFile.setUrlName(this._playlist_local_file_name);   
     
      this._aPlaylistTemporaryFile.setStorage(this._defaultResourceStorageName);       
      this._aPlaylistTemporaryFile.setPath(this._playlist_local_temporary_folder);   
      this._aPlaylistTemporaryFile.setName(this._playlist_local_temporary_file_name);   
      this._aPlaylistTemporaryFile.setUrlStorage(this._defaultResourceStorageUrlName); 
      this._aPlaylistTemporaryFile.setUrlPath(this._playlist_local_temporary_folder);      
      this._aPlaylistTemporaryFile.setUrlName(this._playlist_local_temporary_file_name);   

      this._aPlaylistRemoteFile.setStorage(this._strBaseServerApiUrl);       
      this._aPlaylistRemoteFile.setPath(this._playlist_remote_base_folder + this._strSerialNumber + "/");   
      this._aPlaylistRemoteFile.setName(this._playlist_remote_file_name);   
      this._aPlaylistRemoteFile.setUrlStorage(this._strBaseServerApiUrl); 
      this._aPlaylistRemoteFile.setUrlPath(this._playlist_remote_base_folder + this._strSerialNumber + "/");      
      this._aPlaylistRemoteFile.setUrlName(this._playlist_remote_file_name);   

      //---------
      this._aMediaFilesFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aMediaFilesFolder.setPath(this._media_files_local_folder);   
      this._aMediaFilesFolder.setName("");   
      this._aMediaFilesFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aMediaFilesFolder.setUrlPath(this._media_files_local_folder);      
      this._aMediaFilesFolder.setUrlName("");   
     
      this._aMediaFilesTemporaryFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aMediaFilesTemporaryFolder.setPath(this._media_files_local_temporary_folder);   
      this._aMediaFilesTemporaryFolder.setName("");   
      this._aMediaFilesTemporaryFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aMediaFilesTemporaryFolder.setUrlPath(this._media_files_local_temporary_folder);      
      this._aMediaFilesTemporaryFolder.setUrlName("");   

      this._aMediaFilesRemoteBaseFolder.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aMediaFilesRemoteBaseFolder.setPath(this._media_files_remote_base_folder);   
      this._aMediaFilesRemoteBaseFolder.setName("");   
      this._aMediaFilesRemoteBaseFolder.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aMediaFilesRemoteBaseFolder.setUrlPath(this._media_files_remote_base_folder);      
      this._aMediaFilesRemoteBaseFolder.setUrlName("");   

      this._aMediaFilesRemoteBaseFolder2.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aMediaFilesRemoteBaseFolder2.setPath(this._media_files_remote_base_folder2);   
      this._aMediaFilesRemoteBaseFolder2.setName("");   
      this._aMediaFilesRemoteBaseFolder2.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aMediaFilesRemoteBaseFolder2.setUrlPath(this._media_files_remote_base_folder2);      
      this._aMediaFilesRemoteBaseFolder2.setUrlName("");   

      //---------
      this._aHtmlTemplatesFilesFolder.setStorage(defaultHtmlTemplatesStorageName);        //"c:/");  
      this._aHtmlTemplatesFilesFolder.setPath(this._html_templates_local_folder);   
      this._aHtmlTemplatesFilesFolder.setName("");   
      this._aHtmlTemplatesFilesFolder.setUrlStorage(defaultHtmlTemplatesStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aHtmlTemplatesFilesFolder.setUrlPath(this._html_templates_local_folder);      
      this._aHtmlTemplatesFilesFolder.setUrlName("");   
     
      this._aHtmlTemplatesFilesTemporaryFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aHtmlTemplatesFilesTemporaryFolder.setPath(this._html_templates_local_temporary_folder);   
      this._aHtmlTemplatesFilesTemporaryFolder.setName("");   
      this._aHtmlTemplatesFilesTemporaryFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aHtmlTemplatesFilesTemporaryFolder.setUrlPath(this._html_templates_local_temporary_folder);      
      this._aHtmlTemplatesFilesTemporaryFolder.setUrlName("");   

      this._aHtmlTemplatesFilesRemoteBaseFolder.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aHtmlTemplatesFilesRemoteBaseFolder.setPath(this._html_templates_remote_base_folder);   
      this._aHtmlTemplatesFilesRemoteBaseFolder.setName("");   
      this._aHtmlTemplatesFilesRemoteBaseFolder.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aHtmlTemplatesFilesRemoteBaseFolder.setUrlPath(this._html_templates_remote_base_folder);      
      this._aHtmlTemplatesFilesRemoteBaseFolder.setUrlName("");   

      this._aHtmlTemplatesFilesRemoteBaseFolder2.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aHtmlTemplatesFilesRemoteBaseFolder2.setPath(this._html_templates_remote_base_folder2);   
      this._aHtmlTemplatesFilesRemoteBaseFolder2.setName("");   
      this._aHtmlTemplatesFilesRemoteBaseFolder2.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aHtmlTemplatesFilesRemoteBaseFolder2.setUrlPath(this._html_templates_remote_base_folder2);      
      this._aHtmlTemplatesFilesRemoteBaseFolder2.setUrlName("");   

      this._aHtmlTemplatesFilesRemoteBaseFolder3.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aHtmlTemplatesFilesRemoteBaseFolder3.setPath(this._html_templates_remote_base_folder3);   
      this._aHtmlTemplatesFilesRemoteBaseFolder3.setName("");   
      this._aHtmlTemplatesFilesRemoteBaseFolder3.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aHtmlTemplatesFilesRemoteBaseFolder3.setUrlPath(this._html_templates_remote_base_folder3);      
      this._aHtmlTemplatesFilesRemoteBaseFolder3.setUrlName("");   

      this._aHtmlTemplatesFilesRemoteBaseFolder4.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aHtmlTemplatesFilesRemoteBaseFolder4.setPath(this._html_templates_remote_base_folder4);   
      this._aHtmlTemplatesFilesRemoteBaseFolder4.setName("");   
      this._aHtmlTemplatesFilesRemoteBaseFolder4.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aHtmlTemplatesFilesRemoteBaseFolder4.setUrlPath(this._html_templates_remote_base_folder4);      
      this._aHtmlTemplatesFilesRemoteBaseFolder4.setUrlName("");   

      this._aHtmlTemplatesFilesRemoteBaseFolder5.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aHtmlTemplatesFilesRemoteBaseFolder5.setPath(this._html_templates_remote_base_folder5);   
      this._aHtmlTemplatesFilesRemoteBaseFolder5.setName("");   
      this._aHtmlTemplatesFilesRemoteBaseFolder5.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aHtmlTemplatesFilesRemoteBaseFolder5.setUrlPath(this._html_templates_remote_base_folder5);      
      this._aHtmlTemplatesFilesRemoteBaseFolder5.setUrlName("");   

      this._aHtmlTemplatesCorrectiveJsFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aHtmlTemplatesCorrectiveJsFolder.setPath(this._html_templates_corrective_js_folder);   
      this._aHtmlTemplatesCorrectiveJsFolder.setName("");   
      this._aHtmlTemplatesCorrectiveJsFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aHtmlTemplatesCorrectiveJsFolder.setUrlPath(this._html_templates_corrective_js_folder);     
      this._aHtmlTemplatesCorrectiveJsFolder.setUrlName("");   

      //---------------------------------
      this._aEncryptedPlaylistFile.setStorage(this._defaultResourceStorageName);       //"c:/");  
      this._aEncryptedPlaylistFile.setPath(this._playlist_encrypted_local_folder);   
      this._aEncryptedPlaylistFile.setName(this._playlist_encrypted_local_file_name);   
      this._aEncryptedPlaylistFile.setUrlStorage(this._defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aEncryptedPlaylistFile.setUrlPath(this._playlist_encrypted_local_folder);      
      this._aEncryptedPlaylistFile.setUrlName(this._playlist_encrypted_local_file_name);   
     
      this._aEncryptedPlaylistTemporaryFile.setStorage(this._defaultResourceStorageUrlName);       
      this._aEncryptedPlaylistTemporaryFile.setPath(this._playlist_encrypted_local_temporary_folder);   
      this._aEncryptedPlaylistTemporaryFile.setName(this._playlist_encrypted_local_temporary_file_name);   
      this._aEncryptedPlaylistTemporaryFile.setUrlStorage(this._defaultResourceStorageUrlName); 
      this._aEncryptedPlaylistTemporaryFile.setUrlPath(this._playlist_encrypted_local_temporary_folder);      
      this._aEncryptedPlaylistTemporaryFile.setUrlName(this._playlist_encrypted_local_temporary_file_name);   

      this._aEncryptedPlaylistRemoteFile.setStorage(this._strBaseServerApiUrl);       
      this._aEncryptedPlaylistRemoteFile.setPath(this._playlist_encrypted_remote_base_folder + this._strSerialNumber + "/");   
      this._aEncryptedPlaylistRemoteFile.setName(this._playlist_encrypted_remote_file_name);   
      this._aEncryptedPlaylistRemoteFile.setUrlStorage(this._strBaseServerApiUrl); 
      this._aEncryptedPlaylistRemoteFile.setUrlPath(this._playlist_encrypted_remote_base_folder + this._strSerialNumber + "/");      
      this._aEncryptedPlaylistRemoteFile.setUrlName(this._playlist_encrypted_remote_file_name);   

      //---------
      this._aEncryptedMediaFilesFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aEncryptedMediaFilesFolder.setPath(this._media_files_encrypted_local_folder);   
      this._aEncryptedMediaFilesFolder.setName("");   
      this._aEncryptedMediaFilesFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aEncryptedMediaFilesFolder.setUrlPath(this._media_files_encrypted_local_folder);      
      this._aEncryptedMediaFilesFolder.setUrlName("");   
     
      this._aEncryptedMediaFilesTemporaryFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aEncryptedMediaFilesTemporaryFolder.setPath(this._media_files_encrypted_local_temporary_folder);   
      this._aEncryptedMediaFilesTemporaryFolder.setName("");   
      this._aEncryptedMediaFilesTemporaryFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aEncryptedMediaFilesTemporaryFolder.setUrlPath(this._media_files_encrypted_local_temporary_folder);      
      this._aEncryptedMediaFilesTemporaryFolder.setUrlName("");   

      this._aEncryptedMediaFilesRemoteBaseFolder.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aEncryptedMediaFilesRemoteBaseFolder.setPath(this._media_files_encrypted_remote_base_folder);   
      this._aEncryptedMediaFilesRemoteBaseFolder.setName("");   
      this._aEncryptedMediaFilesRemoteBaseFolder.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aEncryptedMediaFilesRemoteBaseFolder.setUrlPath(this._media_files_encrypted_remote_base_folder);      
      this._aEncryptedMediaFilesRemoteBaseFolder.setUrlName("");   

      this._aEncryptedMediaFilesRemoteBaseFolder2.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aEncryptedMediaFilesRemoteBaseFolder2.setPath(this._media_files_encrypted_remote_base_folder2);   
      this._aEncryptedMediaFilesRemoteBaseFolder2.setName("");   
      this._aEncryptedMediaFilesRemoteBaseFolder2.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aEncryptedMediaFilesRemoteBaseFolder2.setUrlPath(this._media_files_encrypted_remote_base_folder2);      
      this._aEncryptedMediaFilesRemoteBaseFolder2.setUrlName("");   
     
      //---------
      this._aEncryptedHtmlTemplatesFilesFolder.setStorage(defaultHtmlTemplatesStorageName);        //"c:/");  
      this._aEncryptedHtmlTemplatesFilesFolder.setPath(this._html_templates_encrypted_local_folder);   
      this._aEncryptedHtmlTemplatesFilesFolder.setName("");   
      this._aEncryptedHtmlTemplatesFilesFolder.setUrlStorage(defaultHtmlTemplatesStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aEncryptedHtmlTemplatesFilesFolder.setUrlPath(this._html_templates_encrypted_local_folder);      
      this._aEncryptedHtmlTemplatesFilesFolder.setUrlName("");   
     
      this._aEncryptedHtmlTemplatesFilesTemporaryFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aEncryptedHtmlTemplatesFilesTemporaryFolder.setPath(this._html_templates_encrypted_local_temporary_folder);   
      this._aEncryptedHtmlTemplatesFilesTemporaryFolder.setName("");   
      this._aEncryptedHtmlTemplatesFilesTemporaryFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aEncryptedHtmlTemplatesFilesTemporaryFolder.setUrlPath(this._html_templates_encrypted_local_temporary_folder);      
      this._aEncryptedHtmlTemplatesFilesTemporaryFolder.setUrlName("");   

      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder.setPath(this._html_templates_encrypted_remote_base_folder);   
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder.setName("");   
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder.setUrlPath(this._html_templates_encrypted_remote_base_folder);      
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder.setUrlName("");   

      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder2.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder2.setPath(this._html_templates_encrypted_remote_base_folder2);   
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder2.setName("");   
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder2.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder2.setUrlPath(this._html_templates_encrypted_remote_base_folder2);      
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder2.setUrlName("");   

      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder3.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder3.setPath(this._html_templates_encrypted_remote_base_folder3);   
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder3.setName("");   
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder3.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder3.setUrlPath(this._html_templates_encrypted_remote_base_folder3);      
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder3.setUrlName("");   

      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder4.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder4.setPath(this._html_templates_encrypted_remote_base_folder4);   
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder4.setName("");   
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder4.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder4.setUrlPath(this._html_templates_encrypted_remote_base_folder4);      
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder4.setUrlName(""); 

      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder5.setStorage(this._strBaseServerApiUrl);        //"c:/");  
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder5.setPath(this._html_templates_encrypted_remote_base_folder5);   
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder5.setName("");   
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder5.setUrlStorage(this._strBaseServerApiUrl); //"http://127.0.0.1:9080/c/");
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder5.setUrlPath(this._html_templates_encrypted_remote_base_folder5);      
      this._aEncryptedHtmlTemplatesFilesRemoteBaseFolder5.setUrlName("");   

      this._aEncryptedHtmlTemplatesCorrectiveJsFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aEncryptedHtmlTemplatesCorrectiveJsFolder.setPath(this._html_templates_encrypted_corrective_js_folder);   
      this._aEncryptedHtmlTemplatesCorrectiveJsFolder.setName("");   
      this._aEncryptedHtmlTemplatesCorrectiveJsFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aEncryptedHtmlTemplatesCorrectiveJsFolder.setUrlPath(this._html_templates_encrypted_corrective_js_folder);     
      this._aEncryptedHtmlTemplatesCorrectiveJsFolder.setUrlName("");   

      //----------------------------------
      this._aBootSettingsFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aBootSettingsFolder.setPath("moodmedia/boot_settings/");   
      this._aBootSettingsFolder.setName("");   
      this._aBootSettingsFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aBootSettingsFolder.setUrlPath("moodmedia/boot_settings/");     
      this._aBootSettingsFolder.setUrlName("");   

      this._aSettingsFolder.setStorage(defaultResourceStorageName);        //"c:/");  
      this._aSettingsFolder.setPath("moodmedia/software_v5/settings/");   
      this._aSettingsFolder.setName("");   
      this._aSettingsFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aSettingsFolder.setUrlPath("moodmedia/software_v5/settings/");     
      this._aSettingsFolder.setUrlName("");   

      this._aHardwareSettingsXmlFile.setStorage(defaultResourceStorageName);     //"c:/");  
      this._aHardwareSettingsXmlFile.setPath("moodmedia/software_v5/settings/");   
      this._aHardwareSettingsXmlFile.setName("hardware_settings.xml");   
      this._aHardwareSettingsXmlFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aHardwareSettingsXmlFile.setUrlPath("moodmedia/software_v5/settings/");      
      this._aHardwareSettingsXmlFile.setUrlName("hardware_settings.xml");   

      this._aOpeningHoursXmlFile.setStorage(defaultResourceStorageName);     //"c:/");  
      this._aOpeningHoursXmlFile.setPath("moodmedia/software_v5/settings/");   
      this._aOpeningHoursXmlFile.setName("opening_hour_settings.xml");   
      this._aOpeningHoursXmlFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aOpeningHoursXmlFile.setUrlPath("moodmedia/software_v5/settings/");      
      this._aOpeningHoursXmlFile.setUrlName("opening_hour_settings.xml");   

      this._aScreenSaverXmlFile.setStorage(defaultResourceStorageName);     //"c:/");  
      this._aScreenSaverXmlFile.setPath("moodmedia/project/");   
      this._aScreenSaverXmlFile.setName("screen_saver_v5.xml");   
      this._aScreenSaverXmlFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aScreenSaverXmlFile.setUrlPath("moodmedia/project/");      
      this._aScreenSaverXmlFile.setUrlName("screen_saver_v5.xml");   

      this._aScreenSaverResourceFolder.setStorage(defaultResourceStorageName);     //"c:/");  
      this._aScreenSaverResourceFolder.setPath("moodmedia/project/screen_saver/");   
      this._aScreenSaverResourceFolder.setName("");   
      this._aScreenSaverResourceFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aScreenSaverResourceFolder.setUrlPath("moodmedia/project/screen_saver/");      
      this._aScreenSaverResourceFolder.setUrlName("");   
      
      this._aStatisticsFolder.setStorage(defaultResourceStorageName); //"c:/");  
      this._aStatisticsFolder.setPath("moodmedia/project/");   
      this._aStatisticsFolder.setName("");   
      this._aStatisticsFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aStatisticsFolder.setUrlPath("moodmedia/project/");     
      this._aStatisticsFolder.setUrlName("");   
     
      this._aMainLogFile.setStorage(defaultResourceStorageName); //"c:/");  
      this._aMainLogFile.setPath("moodmedia/logs/");   
      this._aMainLogFile.setName("main.log");   
      this._aMainLogFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aMainLogFile.setUrlPath("moodmedia/logs/");      
      this._aMainLogFile.setUrlName("main.log");   
     
      this._aPlaybackLogFile.setStorage(defaultResourceStorageName); //"c:/");  
      this._aPlaybackLogFile.setPath("moodmedia/logs/");   
      this._aPlaybackLogFile.setName("playback.log");   
      this._aPlaybackLogFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aPlaybackLogFile.setUrlPath("moodmedia/logs/");      
      this._aPlaybackLogFile.setUrlName("playback.log");   
     
      this._aDownloadPlaylistLogFile.setStorage(defaultResourceStorageName); //"c:/");  
      this._aDownloadPlaylistLogFile.setPath("moodmedia/logs/");   
      this._aDownloadPlaylistLogFile.setName("downloadplaylist.log");   
      this._aDownloadPlaylistLogFile.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aDownloadPlaylistLogFile.setUrlPath("moodmedia/logs/");      
      this._aDownloadPlaylistLogFile.setUrlName("downloadplaylist.log");   

      this._aTmpFolder.setStorage(defaultResourceStorageName); //"c:/");  
      this._aTmpFolder.setPath("tmp/");   
      this._aTmpFolder.setName("");   
      this._aTmpFolder.setUrlStorage(defaultResourceStorageUrlName); //"http://127.0.0.1:9080/c/");
      this._aTmpFolder.setUrlPath("tmp/");      
      this._aTmpFolder.setUrlName("");

      if (this._aScreenshotOptions.getCaptureScreenInfo().getFileInfo().getStorage() == null) {
        this._aScreenshotOptions.getCaptureScreenInfo().getFileInfo().setStorage(defaultResourceStorageName);
      }
    }



    //-------------------------------
    //"playlist_controller":
    //{
    //   "video_epsilon_time_before_natural_end_in_ms" : 10
    //},  
    public setupEpsilonTimeBeforeNaturalEnd(aJsonSettings: any) : void
    {
      if (aJsonSettings.playlist_controller  == null)
        return;
      if (aJsonSettings.playlist_controller.video_epsilon_time_before_natural_end_in_ms == null)
        return;
      var iEpsilon =  0;
      try{
        iEpsilon = aJsonSettings.playlist_controller.video_epsilon_time_before_natural_end_in_ms
      }catch(e){
        iEpsilon = this.getEpsilonTimeBeforeNaturalEnd()
      }
      this.setEpsilonTimeBeforeNaturalEnd(iEpsilon)
    }

    //-------------------------------
    public setEpsilonTimeBeforeNaturalEnd(epsilonTimeBeforeNaturalEnd: number)
    {
       this._epsilonTimeBeforeNaturalEnd = epsilonTimeBeforeNaturalEnd;
    }
    //-------------------------------
    public getEpsilonTimeBeforeNaturalEnd() : number
    {
       return this._epsilonTimeBeforeNaturalEnd;
    }

    //-------------------------------
    public setHardwareSettings(aHardwareSettings: amPlaybackHardwareSettings.am_playback.A_HardwareSettings)
    {
       this._aHardwareSettings = aHardwareSettings;
    }
    //-------------------------------
    public getHardwareSettings() : amPlaybackHardwareSettings.am_playback.A_HardwareSettings
    {
       return this._aHardwareSettings;
    }

    //-------------------------------
    public setOpeningHours(aOpeningHours: amPlaybackOpeningHours.am_playback.A_OpeningHours)
    {
       this._aOpeningHours = aOpeningHours;
    }
    //-------------------------------
    public getOpeningHours() : amPlaybackOpeningHours.am_playback.A_OpeningHours
    {
       return this._aOpeningHours;
    }

    //-------------------------------
    public setScreenSaverConfig(aScreenSaverConfig: amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig)
    {
       this._aScreenSaverConfig = aScreenSaverConfig;
    }
    //-------------------------------
    public getScreenSaverConfig() : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig
    {
       return this._aScreenSaverConfig;
    }

    //=====================
    // playlist
    //=====================
    
    public mapSettingsLocalToV2(aJsonSettings: any): void
    {
      if (aJsonSettings != null) {
        for (var key in aJsonSettings) {
          if ( aJsonSettings[key] != null ) {
            if ( typeof aJsonSettings[key] === 'object' ) {
              this.mapSettingsLocalToV2(aJsonSettings[key]);
            } else {
              let jsonElement = aJsonSettings[key];
              if ( typeof jsonElement === "string" && jsonElement.length > 1 && jsonElement[0] === '$' ) { 
                const jsonValues = jsonElement.split("##");
                if ( jsonValues.length >= 2 && jsonValues[0].length > 0 && jsonValues[1].length > 0 ) {
                  let valuesArr: string[] = [];
                  const strReference: string = jsonValues[0].substring(1);
                  valuesArr.push(strReference);
                  const strRecursiveValues = jsonValues[1];
                  const valuesSplit: string[] = strRecursiveValues.split('.');
                  valuesArr = valuesArr.concat(valuesSplit);
                  let serverDeviceSettings = this._aServerDeviceSettings;
                  let bFoundValue: boolean = true;
                  for ( const value of valuesArr ) {
                    serverDeviceSettings = serverDeviceSettings[value];
                    if ( serverDeviceSettings == null ) {
                      bFoundValue = false;
                      break;
                    }
                  }
                  if ( bFoundValue ) {
                    aJsonSettings[key] = serverDeviceSettings;
                  }
                }
              }
            }  
          }
        }  
      }
    }    
    //---------------------------
    public setJsonSettings(aJsonSettings: any): void
    {
      if (aJsonSettings.hardwareSettings != null) {
        const strSerial: string  = aJsonSettings.hardwareSettings.serial;
        strSerial != null && this.setSerialNumber(strSerial);
      }

      if (typeof(aJsonSettings.activity_log) !== 'undefined' && aJsonSettings.activity_log) {
        const activityLogEnable: boolean = aJsonSettings.activity_log.activity_log_enable;
        const autoUploadIntervalSeconds: number = aJsonSettings.activity_log.auto_upload_interval_seconds / 1000;
        const autoUploadEnabled: boolean = aJsonSettings.activity_log.auto_upload_enabled;
        const fileEnabled: boolean = aJsonSettings.activity_log.file_enabled;

        const sendBufferMaxSizeKb: number = aJsonSettings.activity_log.send_buffer_max_size_kb / 1024;
        const sendLocalSentPath: string = aJsonSettings.activity_log.send_local_sent_path;
        const sendLocalBaseName: string = aJsonSettings.activity_log.send_local_base_name;

        const saveBufferMaxSizeKb: number = aJsonSettings.activity_log.save_buffer_max_size_kb;
        const saveLocalPath: string = aJsonSettings.activity_log.save_local_path;
        const saveLocalBaseName: string = aJsonSettings.activity_log.save_local_base_name;
        const saveLocalFileSplitSizeInMb = aJsonSettings.activity_log.save_local_file_split_size_in_mb;

        const serverEndpoint: string = aJsonSettings.activity_log.server_endpoint;
        const serverEndpointPath: string = aJsonSettings.activity_log.server_endpoint_path;
        const verbosityType: amGeneralActivityLogVerbosityTypes.am_general.AE_VerbosityType = aJsonSettings.activity_log.verbosity_type;

        if (typeof activityLogEnable !== 'undefined' && activityLogEnable !== null) {
          this._aActivityLogServiceSettings.setActivityLogEnable(activityLogEnable);
        }
        if (typeof autoUploadIntervalSeconds !== 'undefined' && autoUploadIntervalSeconds !== null) {
          this._aActivityLogServiceSettings.setAutoUploadIntervalSeconds(autoUploadIntervalSeconds);
        }
        if (typeof fileEnabled !== 'undefined' && fileEnabled !== null) {
          this._aActivityLogServiceSettings.setFileEnabled(fileEnabled);
        }
        if (typeof autoUploadEnabled !== 'undefined' && autoUploadEnabled !== null) {
          this._aActivityLogServiceSettings.setAutoUploadEnabled(autoUploadEnabled);
        }


        if (typeof sendBufferMaxSizeKb !== 'undefined' && sendBufferMaxSizeKb !== null) {
          this._aActivityLogServiceSettings.setSendBufferMaxSizeKb(sendBufferMaxSizeKb);
        }
        if (typeof sendLocalSentPath !== 'undefined' && sendLocalSentPath !== null) {
          this._aActivityLogServiceSettings.setLocalSentPath(sendLocalSentPath);
        }
        if (typeof sendLocalBaseName !== 'undefined' && sendLocalBaseName !== null) {
          this._aActivityLogServiceSettings.setLocalSentBaseName(sendLocalBaseName);
        }

        if (typeof saveBufferMaxSizeKb !== 'undefined' && saveBufferMaxSizeKb !== null) {
          this._aActivityLogServiceSettings.setSaveBufferMaxSizeKb(saveBufferMaxSizeKb);
        }
        if (typeof saveLocalPath !== 'undefined' && saveLocalPath !== null) {
          this._aActivityLogServiceSettings.setLocalSavePath(saveLocalPath);
        }
        if (typeof saveLocalBaseName !== 'undefined' && saveLocalBaseName !== null) {
          this._aActivityLogServiceSettings.setLocalSaveBaseName(saveLocalBaseName);
        }
        if (typeof saveLocalFileSplitSizeInMb !== 'undefined' && saveLocalFileSplitSizeInMb !== null) {
          this._aActivityLogServiceSettings.setLocalSplitSizeInMb(saveLocalFileSplitSizeInMb);
        }


        if (typeof serverEndpoint !== 'undefined' && serverEndpoint !== null) {
          this._aActivityLogServiceSettings.setServerEndpoint(serverEndpoint);
        }
        if (typeof serverEndpointPath !== 'undefined' && serverEndpointPath !== null) {
          this._aActivityLogServiceSettings.setServerEndpointPath(serverEndpointPath);
        }
        if (typeof verbosityType !== 'undefined' && verbosityType !== null) {
          this._aActivityLogServiceSettings.setVerbosityType(verbosityType);
        }
      }

      if (aJsonSettings.monitoring != null) {
        const startTimeout: number = aJsonSettings.monitoring.start_timeout;
        const interval: number = aJsonSettings.monitoring.interval;
        const earlyAdopter: boolean = aJsonSettings.monitoring.early_adopter;
        const nLastPlayedItems: number = aJsonSettings.monitoring.last_played_items_number;
        const strRemoteRelativePath: string  = aJsonSettings.monitoring.remote_relative_path;

        startTimeout != null && this._aMonitoringSettings.setStartTimeout(startTimeout);
        interval != null && this._aMonitoringSettings.setInterval(interval);
        earlyAdopter != null && this._aMonitoringSettings.setEarlyAdopter(earlyAdopter);
        nLastPlayedItems != null && this._aMonitoringSettings.setLastPlayedItemsNumber(nLastPlayedItems);
        strRemoteRelativePath != null && this._aMonitoringSettings.setRemoteRelativePath(strRemoteRelativePath);
      }

      if (aJsonSettings.screenshot != null) {
        const bSaveInFile: boolean   = aJsonSettings.screenshot.save_screenshot_to_file;
        const bSaveInMemory: boolean = aJsonSettings.screenshot.return_screenshot_as_in_memory_image_bytes;
        const bSendToServer: boolean = aJsonSettings.screenshot.send_screenshot_to_remote_server;

        const bFullScreen: boolean = aJsonSettings.screenshot.make_screenshot_on_the_whole_screen;

        const nRectLeft: number    = aJsonSettings.screenshot.screenshot_rect_left;
        const nRectTop: number     = aJsonSettings.screenshot.screenshot_rect_top;
        const nRectRight: number   = aJsonSettings.screenshot.screenshot_rect_right;
        const nRectBottom: number  = aJsonSettings.screenshot.screenshot_rect_bottom;
    
        const strFormat: string    = aJsonSettings.screenshot.screenshot_format;
        const nQuality: number     = aJsonSettings.screenshot.screenshot_jpg_quality;
        const nWidth: number       = aJsonSettings.screenshot.screenshot_final_width;
        const nHeight: number      = aJsonSettings.screenshot.screenshot_final_height;
    
        const strLocalRelativePath: string   = aJsonSettings.screenshot.screenshot_default_local_relative_path;
        const strLocalFileName: string       = aJsonSettings.screenshot.screenshot_default_local_file_name;
    
        const strRemoteRelativePath: string  = aJsonSettings.screenshot.screenshot_remote_default_relative_path;
        const strRemoteFileName: string      = aJsonSettings.screenshot.screenshot_default_remote_file_name;

        bSaveInFile != null && this._aScreenshotOptions.setSaveInFile(bSaveInFile); 
        bSaveInMemory != null && this._aScreenshotOptions.setSaveInMemory(bSaveInMemory); 
        bSendToServer != null && this._aScreenshotOptions.setSendToServer(bSendToServer); 
        bFullScreen != null && this._aScreenshotOptions.getCaptureScreenInfo().setFullScreen(bFullScreen);
        nRectLeft != null && this._aScreenshotOptions.getCaptureScreenInfo().setRectLeft(nRectLeft);
        nRectTop != null && this._aScreenshotOptions.getCaptureScreenInfo().setRectTop(nRectTop);
        nRectRight != null && this._aScreenshotOptions.getCaptureScreenInfo().setRectRight(nRectRight);
        nRectBottom != null && this._aScreenshotOptions.getCaptureScreenInfo().setRectBottom(nRectBottom);
        strFormat != null && this._aScreenshotOptions.getCaptureScreenInfo().setFormat(strFormat);
        nQuality != null && this._aScreenshotOptions.getCaptureScreenInfo().setQuality(nQuality);
        nWidth != null && this._aScreenshotOptions.getCaptureScreenInfo().setWidth(nWidth);
        nHeight != null && this._aScreenshotOptions.getCaptureScreenInfo().setHeight(nHeight);
        strLocalRelativePath != null && this._aScreenshotOptions.getCaptureScreenInfo().getFileInfo().setPath(strLocalRelativePath);
        strLocalFileName != null && this._aScreenshotOptions.getCaptureScreenInfo().getFileInfo().setName(strLocalFileName);
        strRemoteRelativePath != null && this._aScreenshotOptions.setRemoteRelativePath(strRemoteRelativePath); 
        strRemoteFileName != null && this._aScreenshotOptions.getCaptureScreenInfo().getFileInfo().setUrlName(strRemoteFileName); 
      }
      
      if (aJsonSettings.startup != null) {
        const startupSettings = aJsonSettings.startup;
        typeof startupSettings.update_serial_no_if_empty == "boolean" && this._aStartupSystemSettings.setUpdateSerialNoIfNonEmpty(startupSettings.update_serial_no_if_empty);
        typeof startupSettings.set_default_system_settings_at_startup == "boolean" && this._aStartupSystemSettings.setApplyDefaultSettingsAtStartup(startupSettings.set_default_system_settings_at_startup);
        typeof startupSettings.save_settings_last_values_at_startup == "boolean" && this._aStartupSystemSettings.setSaveSettingsLastValuesAtStartup(startupSettings.save_settings_last_values_at_startup);
        typeof startupSettings.save_settings_last_values_at_a_refresh_rates == "boolean" && this._aStartupSystemSettings.setSaveSettingsLastValuesAtRefreshRate(startupSettings.save_settings_last_values_at_a_refresh_rates);
        typeof startupSettings.save_settings_last_values_refresh_time == "number" && this._aStartupSystemSettings.setSaveSettingsLastValuesRefreshTime(startupSettings.save_settings_last_values_refresh_time);

        if (startupSettings.default_system_settings != null) {
          const startupDefaultSettings = startupSettings.default_system_settings;
          if (startupDefaultSettings.default_audio_settings != null) {
            const startupAudioSettings = startupDefaultSettings.default_audio_settings;
            typeof startupAudioSettings.default_volume_level == "number" && this._aStartupAudioSettings.setDefaultVolumeLevel(startupAudioSettings.default_volume_level);
            typeof startupAudioSettings.last_volume_level == "number" && this._aStartupAudioSettings.setLastVolumeLevel(startupAudioSettings.last_volume_level);
            typeof startupAudioSettings.apply_default_volume_level_at_startup == "boolean" && this._aStartupAudioSettings.setApplyDefaultVolumeAtStartup(startupAudioSettings.apply_default_volume_level_at_startup);
          }

          if (startupDefaultSettings.default_display_settings != null) {
            const startupVideoSettings = startupDefaultSettings.default_display_settings;
            typeof startupVideoSettings.default_screen_width == "number" && this._aStartupVideoSettings.setDefaultScreenWidth(startupVideoSettings.default_screen_width);
            typeof startupVideoSettings.default_screen_height == "number" && this._aStartupVideoSettings.setDefaultScreenHeight(startupVideoSettings.default_screen_height);
            if (typeof startupVideoSettings.default_screen_orientation == "string") {
              const strOrientation: string = startupVideoSettings.default_screen_orientation;
              if (strOrientation === "DEG_0" || strOrientation === "DEG_180" || strOrientation === "AUTO") {
                this._aStartupVideoSettings.setDefaultScreenOrientation("landscape");
              } else {
                this._aStartupVideoSettings.setDefaultScreenOrientation("portrait");
              }
            }
            typeof startupVideoSettings.default_contrast_level == "number" && this._aStartupVideoSettings.setDefaultContrastLevel(startupVideoSettings.default_contrast_level);
            typeof startupVideoSettings.default_brightness_level == "number" && this._aStartupVideoSettings.setDefaultBrightnessLevel(startupVideoSettings.default_brightness_level);
            typeof startupVideoSettings.last_screen_width == "number" && this._aStartupVideoSettings.setLastScreenWidth(startupVideoSettings.last_screen_width);
            typeof startupVideoSettings.last_screen_height == "number" && this._aStartupVideoSettings.setLastScreenHeight(startupVideoSettings.last_screen_height);
            typeof startupVideoSettings.last_screen_orientation == "string" && this._aStartupVideoSettings.setLastScreenOrientation(startupVideoSettings.last_screen_orientation);
            typeof startupVideoSettings.last_contrast_level == "number" && this._aStartupVideoSettings.setLastContrastLevel(startupVideoSettings.last_contrast_level);
            typeof startupVideoSettings.last_brightness_level == "number" && this._aStartupVideoSettings.setLastBrightnessLevel(startupVideoSettings.last_brightness_level);
            typeof startupVideoSettings.apply_default_screen_width_at_startup == "boolean" && this._aStartupVideoSettings.setApplyDefaultScreenWidthAtStartup(startupVideoSettings.apply_default_screen_width_at_startup);
            typeof startupVideoSettings.apply_default_screen_height_at_startup == "boolean" && this._aStartupVideoSettings.setApplyDefaultScreenHeightAtStartup(startupVideoSettings.apply_default_screen_height_at_startup);
            typeof startupVideoSettings.apply_default_screen_orientation_at_startup == "boolean" && this._aStartupVideoSettings.setApplyDefaultScreenOrientationAtStartup(startupVideoSettings.apply_default_screen_orientation_at_startup);
            typeof startupVideoSettings.apply_default_screen_contrast_level_at_startup == "boolean" && this._aStartupVideoSettings.setApplyDefaultContrastLevelAtStartup(startupVideoSettings.apply_default_screen_contrast_level_at_startup);
            typeof startupVideoSettings.apply_default_screen_brightness_level_at_startup == "boolean" && this._aStartupVideoSettings.setApplyDefaultBrightnessLevelAtStartup(startupVideoSettings.apply_default_screen_brightness_level_at_startup);
          }

          if (startupDefaultSettings.default_time_settings != null) {
            const startupTimeSettings = startupDefaultSettings.default_time_settings;
            typeof startupTimeSettings.use_mood_server == "boolean" && this._aStartupTimeSettings.setUseMoodServer(startupTimeSettings.use_mood_server);
            typeof startupTimeSettings.time_server_url == "string" && this._aStartupTimeSettings.setServerUrl(startupTimeSettings.time_server_url);
            typeof startupTimeSettings.time_server_time_zone == "string" && this._aStartupTimeSettings.setServerTimeZone(startupTimeSettings.time_server_time_zone);
            typeof startupTimeSettings.apply_time_server_as_device_time_at_startup == "boolean" && this._aStartupTimeSettings.setApplyServerTimeAsDevieTimeAtStartup(startupTimeSettings.apply_time_server_as_device_time_at_startup);
            typeof startupTimeSettings.default_device_time_zone == "string" && this._aStartupTimeSettings.setDefaultDeviceTimeZone(startupTimeSettings.default_device_time_zone);
            typeof startupTimeSettings.last_device_time_zone == "string" && this._aStartupTimeSettings.setLastDeviceTimeZone(startupTimeSettings.last_device_time_zone);
            typeof startupTimeSettings.apply_default_device_time_zone_at_startup == "boolean" && this._aStartupTimeSettings.setApplyDefaultDeviceTimeZoneAtStartup(startupTimeSettings.apply_default_device_time_zone_at_startup);
            if (typeof startupTimeSettings.use_ntp == "string") {
              const bUseNtp: boolean = startupTimeSettings.use_ntp == "NTP_CUSTOM" ? true : false;
              this._aStartupTimeSettings.setUseNTP(bUseNtp);
            }
            typeof startupTimeSettings.last_use_ntp == "boolean" && this._aStartupTimeSettings.setLastUseNTP(startupTimeSettings.last_use_ntp);
            typeof startupTimeSettings.ntp_server_url == "string" && this._aStartupTimeSettings.setNTPServerUrl(startupTimeSettings.ntp_server_url);
            typeof startupTimeSettings.last_ntp_server_url == "string" && this._aStartupTimeSettings.setLastNTPServerUrl(startupTimeSettings.last_ntp_server_url);
            typeof startupTimeSettings.ntp_timezone == "string" && this._aStartupTimeSettings.setNTPTimeZone(startupTimeSettings.ntp_timezone);
            typeof startupTimeSettings.last_ntp_timezone == "string" && this._aStartupTimeSettings.setLastNTPTimeZone(startupTimeSettings.last_ntp_timezone);
          }

          if (startupDefaultSettings.default_language_settings != null) {
            const startupLanguageSettings = startupDefaultSettings.default_language_settings;
            typeof startupLanguageSettings.default_device_main_language == "string" && this._aStartupLanguageSettings.setDefaultLanguage(startupLanguageSettings.default_device_main_language);
            typeof startupLanguageSettings.last_device_main_language == "string" && this._aStartupLanguageSettings.setLastLanguage(startupLanguageSettings.last_device_main_language);
            typeof startupLanguageSettings.apply_default_device_main_language_at_startup == "boolean" && this._aStartupLanguageSettings.setApplyDefaultLanguage(startupLanguageSettings.apply_default_device_main_language_at_startup);
          }
        }

        this._aStartupSettings.setSystemSettings(this._aStartupSystemSettings);
        this._aStartupSettings.setAudioSettings(this._aStartupAudioSettings);
        this._aStartupSettings.setVideoSettings(this._aStartupVideoSettings);
        this._aStartupSettings.setTimeSettings(this._aStartupTimeSettings);
        this._aStartupSettings.setLanguageSettings(this._aStartupLanguageSettings);
      }

      if (aJsonSettings.livecommands) {
        const livecommandsSettings = aJsonSettings.livecommands;
        typeof livecommandsSettings.auth_token_relative_path == "string" && this._aLiveCommandsSettings.setAuthTokenRelativePath(livecommandsSettings.auth_token_relative_path);
        typeof livecommandsSettings.signalr_hub_relative_path == "string" && this._aLiveCommandsSettings.setSignalRHubRelativePath(livecommandsSettings.signalr_hub_relative_path);
        typeof livecommandsSettings.signalr_hub_method_name == "string" && this._aLiveCommandsSettings.setSignalRHubMethodName(livecommandsSettings.signalr_hub_method_name);
      }
      
      if (aJsonSettings.syncsettings != null) {
        const syncSettings = aJsonSettings.syncsettings;
        typeof syncSettings.remote_relative_path == "string" && this._aSettingsSync.setRemoteRelativePath(syncSettings.remote_relative_path);
      }

      if (typeof(aJsonSettings.cloudApiSettings) !== 'undefined' && aJsonSettings.cloudApiSettings) {
        this.setBaseServerApiUrl(aJsonSettings.cloudApiSettings.baseServerApiUrl);
      }

      this.setDefaultPlaylistFileUrl(this._strBaseServerApiUrl + "v5/player_playlists/" + this._strSerialNumber + "/" + "playlist.json") ;
      this.setDefaultPlaylistShaFileUrl(this._strDefaultPlaylistFileUrl + ".sha");

      if (this._platform == "tizen") {
        this._software_type                                = aJsonSettings.software_tizen.software_type;             //"mood_v5";
        this._software_local_folder                        = aJsonSettings.software_tizen.software_local_folder;//"moodmedia/playlist/";
        this._software_local_file_name                     = aJsonSettings.software_tizen.software_local_file_name;//"playlist_v5.json";
        this._software_local_temporary_folder              = aJsonSettings.software_tizen.software_local_temporary_folder;//"tmp/playlist/"";
        this._software_local_temporary_file_name           = aJsonSettings.software_tizen.software_local_temporary_file_name;//"playlist_v5.json";
        this._software_remote_server_url                   = aJsonSettings.software_tizen.software_remote_server_url ;//"v5/player_playlists/";
        this._software_remote_folder                       = aJsonSettings.software_tizen.software_remote_folder ;
        this._software_remote_file_name                    = aJsonSettings.software_tizen.software_remote_file_name ;//"playlist.json";
        this._software_encrypted_type                      = aJsonSettings.software_tizen.software_encrypted_type;             //"mood_v5";
        this._software_encrypted_local_folder              = aJsonSettings.software_tizen.software_encrypted_local_folder ;//"moodmedia/playlist/";
        this._software_encrypted_local_file_name           = aJsonSettings.software_tizen.software_encrypted_local_file_name;//"playlist_v5.json";
        this._software_encrypted_local_temporary_folder    = aJsonSettings.software_tizen.software_encrypted_local_temporary_folder;//"tmp/playlist/";
        this._software_encrypted_local_temporary_file_name = aJsonSettings.software_tizen.software_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._software_encrypted_remote_server_url         = aJsonSettings.software_tizen.software_encrypted_remote_server_url ;
        this._software_encrypted_remote_folder             = aJsonSettings.software_tizen.software_encrypted_remote_folder ;//"v5/player_playlists/";
        this._software_encrypted_remote_file_name          = aJsonSettings.software_tizen.software_encrypted_remote_file_name;//"playlist.zip";
        this._softwareconfig_type                                = aJsonSettings.software_tizen.softwareconfig_type;             //"mood_v5";
        this._softwareconfig_local_folder                        = aJsonSettings.software_tizen.softwareconfig_local_folder;//"moodmedia/playlist/";
        this._softwareconfig_local_file_name                     = aJsonSettings.software_tizen.softwareconfig_local_file_name;//"playlist_v5.json";
        this._softwareconfig_local_temporary_folder              = aJsonSettings.software_tizen.softwareconfig_local_temporary_folder;//"tmp/playlist/"";
        this._softwareconfig_local_temporary_file_name           = aJsonSettings.software_tizen.softwareconfig_local_temporary_file_name;//"playlist_v5.json";
        this._softwareconfig_remote_server_url                   = aJsonSettings.software_tizen.softwareconfig_remote_server_url ;         
        this._softwareconfig_remote_folder                       = aJsonSettings.software_tizen.softwareconfig_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_remote_file_name                    = aJsonSettings.software_tizen.softwareconfig_remote_file_name ;//"playlist.json";
        this._softwareconfig_encrypted_type                      = aJsonSettings.software_tizen.softwareconfig_encrypted_type;             //"mood_v5";
        this._softwareconfig_encrypted_local_folder              = aJsonSettings.software_tizen.softwareconfig_encrypted_local_folder ;//"moodmedia/playlist/";
        this._softwareconfig_encrypted_local_file_name           = aJsonSettings.software_tizen.softwareconfig_encrypted_local_file_name;//"playlist_v5.json";
        this._softwareconfig_encrypted_local_temporary_folder    = aJsonSettings.software_tizen.softwareconfig_encrypted_local_temporary_folder;//"tmp/playlist/";
        this._softwareconfig_encrypted_local_temporary_file_name = aJsonSettings.software_tizen.softwareconfig_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._softwareconfig_encrypted_remote_server_url         = aJsonSettings.software_tizen.softwareconfig_encrypted_remote_server_url ;
        this._softwareconfig_encrypted_remote_folder             = aJsonSettings.software_tizen.softwareconfig_encrypted_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_encrypted_remote_file_name          = aJsonSettings.software_tizen.softwareconfig_encrypted_remote_file_name;//"playlist.zip";
      
      } else if (this._platform == "windows") {
        this._software_type                                = aJsonSettings.software_windows.software_type;             //"mood_v5";
        this._software_local_folder                        = aJsonSettings.software_windows.software_local_folder;//"moodmedia/playlist/";
        this._software_local_file_name                     = aJsonSettings.software_windows.software_local_file_name;//"playlist_v5.json";
        this._software_local_temporary_folder              = aJsonSettings.software_windows.software_local_temporary_folder;//"tmp/playlist/"";
        this._software_local_temporary_file_name           = aJsonSettings.software_windows.software_local_temporary_file_name;//"playlist_v5.json";
        this._software_remote_server_url                   = aJsonSettings.software_windows.software_remote_server_url ;
        this._software_remote_folder                       = aJsonSettings.software_windows.software_remote_folder ;//"v5/player_playlists/";
        this._software_remote_file_name                    = aJsonSettings.software_windows.software_remote_file_name ;//"playlist.json";
        this._software_encrypted_type                      = aJsonSettings.software_windows.software_encrypted_type;             //"mood_v5";
        this._software_encrypted_local_folder              = aJsonSettings.software_windows.software_encrypted_local_folder ;//"moodmedia/playlist/";
        this._software_encrypted_local_file_name           = aJsonSettings.software_windows.software_encrypted_local_file_name;//"playlist_v5.json";
        this._software_encrypted_local_temporary_folder    = aJsonSettings.software_windows.software_encrypted_local_temporary_folder;//"tmp/playlist/";
        this._software_encrypted_local_temporary_file_name = aJsonSettings.software_windows.software_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._software_encrypted_remote_server_url         = aJsonSettings.software_windows.software_encrypted_remote_server_url ;
        this._software_encrypted_remote_folder             = aJsonSettings.software_windows.software_encrypted_remote_folder ;//"v5/player_playlists/";
        this._software_encrypted_remote_file_name          = aJsonSettings.software_windows.software_encrypted_remote_file_name;//"playlist.zip";
        this._softwareconfig_type                                = aJsonSettings.software_windows.softwareconfig_type;             //"mood_v5";
        this._softwareconfig_local_folder                        = aJsonSettings.software_windows.softwareconfig_local_folder;//"moodmedia/playlist/";
        this._softwareconfig_local_file_name                     = aJsonSettings.software_windows.softwareconfig_local_file_name;//"playlist_v5.json";
        this._softwareconfig_local_temporary_folder              = aJsonSettings.software_windows.softwareconfig_local_temporary_folder;//"tmp/playlist/"";
        this._softwareconfig_local_temporary_file_name           = aJsonSettings.software_windows.softwareconfig_local_temporary_file_name;//"playlist_v5.json";
        this._softwareconfig_remote_server_url                   = aJsonSettings.software_windows.softwareconfig_remote_server_url ;
        this._softwareconfig_remote_folder                       = aJsonSettings.software_windows.softwareconfig_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_remote_file_name                    = aJsonSettings.software_windows.softwareconfig_remote_file_name ;//"playlist.json";
        this._softwareconfig_encrypted_type                      = aJsonSettings.software_windows.softwareconfig_encrypted_type;  //"mood_v5";
        this._softwareconfig_encrypted_local_folder              = aJsonSettings.software_windows.encrypted_local_folder ;//"moodmedia/playlist/";
        this._softwareconfig_encrypted_local_file_name           = aJsonSettings.software_windows.encrypted_local_file_name;//"playlist_v5.json";
        this._softwareconfig_encrypted_local_temporary_folder    = aJsonSettings.software_windows.encrypted_local_temporary_folder;//"tmp/playlist/";
        this._softwareconfig_encrypted_local_temporary_file_name = aJsonSettings.software_windows.softwareconfig_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._softwareconfig_encrypted_remote_server_url         = aJsonSettings.software_windows.softwareconfig_encrypted_remote_server_url;
        this._softwareconfig_encrypted_remote_folder             = aJsonSettings.software_windows.softwareconfig_encrypted_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_encrypted_remote_file_name          = aJsonSettings.software_windows.softwareconfig_encrypted_remote_file_name;//"playlist.zip";
      
      } else if (this._platform == "webos") {
        this._software_type                                = aJsonSettings.software_webos.software_type;             //"mood_v5";
        this._software_local_folder                        = aJsonSettings.software_webos.software_local_folder;//"moodmedia/playlist/";
        this._software_local_file_name                     = aJsonSettings.software_webos.software_local_file_name;//"playlist_v5.json";
        this._software_local_temporary_folder              = aJsonSettings.software_webos.software_local_temporary_folder;//"tmp/playlist/"";
        this._software_local_temporary_file_name           = aJsonSettings.software_webos.software_local_temporary_file_name;//"playlist_v5.json";
        this._software_remote_server_url                   = aJsonSettings.software_webos.software_remote_server_url ;
        this._software_remote_folder                       = aJsonSettings.software_webos.software_remote_folder ;//"v5/player_playlists/";
        this._software_remote_file_name                    = aJsonSettings.software_webos.software_remote_file_name ;//"playlist.json";
        this._software_encrypted_type                      = aJsonSettings.software_webos.software_encrypted_type;             //"mood_v5";
        this._software_encrypted_local_folder              = aJsonSettings.software_webos.software_encrypted_local_folder ;//"moodmedia/playlist/";
        this._software_encrypted_local_file_name           = aJsonSettings.software_webos.software_encrypted_local_file_name;//"playlist_v5.json";
        this._software_encrypted_local_temporary_folder    = aJsonSettings.software_webos.software_encrypted_local_temporary_folder;//"tmp/playlist/";
        this._software_encrypted_local_temporary_file_name = aJsonSettings.software_webos.software_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._software_encrypted_remote_server_url         = aJsonSettings.software_webos.software_encrypted_remote_server_url ;
        this._software_encrypted_remote_folder             = aJsonSettings.software_webos.software_encrypted_remote_folder ;//"v5/player_playlists/";
        this._software_encrypted_remote_file_name          = aJsonSettings.software_webos.software_encrypted_remote_file_name;//"playlist.zip";

        this._softwareconfig_type                                = aJsonSettings.software_webos.softwareconfig_type;             //"mood_v5";
        this._softwareconfig_local_folder                        = aJsonSettings.software_webos.softwareconfig_local_folder;//"moodmedia/playlist/";
        this._softwareconfig_local_file_name                     = aJsonSettings.software_webos.softwareconfig_local_file_name;//"playlist_v5.json";
        this._softwareconfig_local_temporary_folder              = aJsonSettings.software_webos.softwareconfig_local_temporary_folder;//"tmp/playlist/"";
        this._softwareconfig_local_temporary_file_name           = aJsonSettings.software_webos.softwareconfig_local_temporary_file_name;//"playlist_v5.json";
        this._softwareconfig_remote_server_url                   = aJsonSettings.software_webos.softwareconfig_remote_server_url ;
        this._softwareconfig_remote_folder                       = aJsonSettings.software_webos.softwareconfig_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_remote_file_name                    = aJsonSettings.software_webos.softwareconfig_remote_file_name ;//"playlist.json";
        this._softwareconfig_encrypted_type                      = aJsonSettings.software_webos.softwareconfig_encrypted_type;             //"mood_v5";
        this._softwareconfig_encrypted_local_folder              = aJsonSettings.software_webos.softwareconfig_encrypted_local_folder ;//"moodmedia/playlist/";
        this._softwareconfig_encrypted_local_file_name           = aJsonSettings.software_webos.softwareconfig_encrypted_local_file_name;//"playlist_v5.json";
        this._softwareconfig_encrypted_local_temporary_folder    = aJsonSettings.software_webos.softwareconfig_encrypted_local_temporary_folder;//"tmp/playlist/";
        this._softwareconfig_encrypted_local_temporary_file_name = aJsonSettings.software_webos.softwareconfig_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._softwareconfig_encrypted_remote_server_url         = aJsonSettings.software_webos.softwareconfig_encrypted_remote_server_url ;
        this._softwareconfig_encrypted_remote_folder             = aJsonSettings.software_webos.softwareconfig_encrypted_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_encrypted_remote_file_name          = aJsonSettings.software_webos.softwareconfig_encrypted_remote_file_name;//"playlist.zip";
      
      } else if (this._platform == "linux") {
        this._software_type                                = aJsonSettings.software_linux.software_type;             //"mood_v5";
        this._software_local_folder                        = aJsonSettings.software_linux.software_local_folder;//"moodmedia/playlist/";
        this._software_local_file_name                     = aJsonSettings.software_linux.software_local_file_name;//"playlist_v5.json";
        this._software_local_temporary_folder              = aJsonSettings.software_linux.software_local_temporary_folder;//"tmp/playlist/"";
        this._software_local_temporary_file_name           = aJsonSettings.software_linux.software_local_temporary_file_name;//"playlist_v5.json";
        this._software_remote_server_url                   = aJsonSettings.software_linux.software_remote_server_url ;
        this._software_remote_folder                       = aJsonSettings.software_linux.software_remote_folder ;//"v5/player_playlists/";
        this._software_remote_file_name                    = aJsonSettings.software_linux.software_remote_file_name ;//"playlist.json";
        this._software_encrypted_type                      = aJsonSettings.software_linux.software_encrypted_type;             //"mood_v5";
        this._software_encrypted_local_folder              = aJsonSettings.software_linux.software_encrypted_local_folder ;//"moodmedia/playlist/";
        this._software_encrypted_local_file_name           = aJsonSettings.software_linux.software_encrypted_local_file_name;//"playlist_v5.json";
        this._software_encrypted_local_temporary_folder    = aJsonSettings.software_linux.software_encrypted_local_temporary_folder;//"tmp/playlist/";
        this._software_encrypted_local_temporary_file_name = aJsonSettings.software_linux.software_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._software_encrypted_remote_server_url         = aJsonSettings.software_linux.software_encrypted_remote_server_url ;
        this._software_encrypted_remote_folder             = aJsonSettings.software_linux.software_encrypted_remote_folder ;//"v5/player_playlists/";
        this._software_encrypted_remote_file_name          = aJsonSettings.software_linux.software_encrypted_remote_file_name;//"playlist.zip";

        this._softwareconfig_type                                = aJsonSettings.software_linux.softwareconfig_type;             //"mood_v5";
        this._softwareconfig_local_folder                        = aJsonSettings.software_linux.softwareconfig_local_folder;//"moodmedia/playlist/";
        this._softwareconfig_local_file_name                     = aJsonSettings.software_linux.softwareconfig_local_file_name;//"playlist_v5.json";
        this._softwareconfig_local_temporary_folder              = aJsonSettings.software_linux.softwareconfig_local_temporary_folder;//"tmp/playlist/"";
        this._softwareconfig_local_temporary_file_name           = aJsonSettings.software_linux.softwareconfig_local_temporary_file_name;//"playlist_v5.json";
        this._softwareconfig_remote_server_url                   = aJsonSettings.software_linux.softwareconfig_remote_server_url ;
        this._softwareconfig_remote_folder                       = aJsonSettings.software_linux.softwareconfig_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_remote_file_name                    = aJsonSettings.software_linux.softwareconfig_remote_file_name ;//"playlist.json";
        this._softwareconfig_encrypted_type                      = aJsonSettings.software_linux.softwareconfig_encrypted_type;             //"mood_v5";
        this._softwareconfig_encrypted_local_folder              = aJsonSettings.software_linux.softwareconfig_encrypted_local_folder ;//"moodmedia/playlist/";
        this._softwareconfig_encrypted_local_file_name           = aJsonSettings.software_linux.softwareconfig_encrypted_local_file_name;//"playlist_v5.json";
        this._softwareconfig_encrypted_local_temporary_folder    = aJsonSettings.software_linux.softwareconfig_encrypted_local_temporary_folder;//"tmp/playlist/";
        this._softwareconfig_encrypted_local_temporary_file_name = aJsonSettings.software_linux.softwareconfig_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._softwareconfig_encrypted_remote_server_url         = aJsonSettings.software_linux.softwareconfig_encrypted_remote_server_url ;
        this._softwareconfig_encrypted_remote_folder             = aJsonSettings.software_linux.softwareconfig_encrypted_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_encrypted_remote_file_name          = aJsonSettings.software_linux.softwareconfig_encrypted_remote_file_name;//"playlist.zip";

      } else if (this._platform == "android") {
        this._software_type                                = aJsonSettings.software_android.software_type;             //"mood_v5";
        this._software_local_folder                        = aJsonSettings.software_android.software_local_folder;//"moodmedia/playlist/";
        this._software_local_file_name                     = aJsonSettings.software_android.software_local_file_name;//"playlist_v5.json";
        this._software_local_temporary_folder              = aJsonSettings.software_android.software_local_temporary_folder;//"tmp/playlist/"";
        this._software_local_temporary_file_name           = aJsonSettings.software_android.software_local_temporary_file_name;//"playlist_v5.json";
        this._software_remote_server_url                   = aJsonSettings.software_android.software_remote_server_url;
        this._software_remote_folder                       = aJsonSettings.software_android.software_remote_folder ;//"v5/player_playlists/";
        this._software_remote_file_name                    = aJsonSettings.software_android.software_remote_file_name ;//"playlist.json";
        this._software_encrypted_type                      = aJsonSettings.software_android.software_encrypted_type;             //"mood_v5";
        this._software_encrypted_local_folder              = aJsonSettings.software_android.software_encrypted_local_folder ;//"moodmedia/playlist/";
        this._software_encrypted_local_file_name           = aJsonSettings.software_android.software_encrypted_local_file_name;//"playlist_v5.json";
        this._software_encrypted_local_temporary_folder    = aJsonSettings.software_android.software_encrypted_local_temporary_folder;//"tmp/playlist/";
        this._software_encrypted_local_temporary_file_name = aJsonSettings.software_android.software_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._software_encrypted_remote_server_url         = aJsonSettings.software_android.software_encrypted_remote_server_url ;
        this._software_encrypted_remote_folder             = aJsonSettings.software_android.software_encrypted_remote_folder ;//"v5/player_playlists/";
        this._software_encrypted_remote_file_name          = aJsonSettings.software_android.software_encrypted_remote_file_name;//"playlist.zip";

        this._softwareconfig_type                                = aJsonSettings.software_android.software_type;             //"mood_v5";
        this._softwareconfig_local_folder                        = aJsonSettings.software_android.softwareconfig_local_folder;//"moodmedia/playlist/";
        this._softwareconfig_local_file_name                     = aJsonSettings.software_android.softwareconfig_local_file_name;//"playlist_v5.json";
        this._softwareconfig_local_temporary_folder              = aJsonSettings.software_android.softwareconfig_local_temporary_folder;//"tmp/playlist/"";
        this._softwareconfig_local_temporary_file_name           = aJsonSettings.software_android.softwareconfig_local_temporary_file_name;//"playlist_v5.json";
        this._softwareconfig_remote_server_url                   = aJsonSettings.software_android.softwareconfig_remote_server_url ;
        this._softwareconfig_remote_folder                       = aJsonSettings.software_android.softwareconfig_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_remote_file_name                    = aJsonSettings.software_android.softwareconfig_remote_file_name ;//"playlist.json";
        this._softwareconfig_encrypted_type                      = aJsonSettings.software_android.software_encrypted_type;             //"mood_v5";
        this._softwareconfig_encrypted_local_folder              = aJsonSettings.software_android.softwareconfig_encrypted_local_folder ;//"moodmedia/playlist/";
        this._softwareconfig_encrypted_local_file_name           = aJsonSettings.software_android.softwareconfig_encrypted_local_file_name;//"playlist_v5.json";
        this._softwareconfig_encrypted_local_temporary_folder    = aJsonSettings.software_android.softwareconfig_encrypted_local_temporary_folder;//"tmp/playlist/";
        this._softwareconfig_encrypted_local_temporary_file_name = aJsonSettings.software_android.softwareconfig_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._softwareconfig_encrypted_remote_server_url         = aJsonSettings.software_android.softwareconfig_encrypted_remote_server_url;
        this._softwareconfig_encrypted_remote_folder             = aJsonSettings.software_android.softwareconfig_encrypted_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_encrypted_remote_file_name          = aJsonSettings.software_android.softwareconfig_encrypted_remote_file_name;//"playlist.zip";

      } else {
        this._software_type                                = aJsonSettings.software.software_type;             //"mood_v5";
        this._software_local_folder                        = aJsonSettings.software.software_local_folder;//"moodmedia/playlist/";
        this._software_local_file_name                     = aJsonSettings.software.software_local_file_name;//"playlist_v5.json";
        this._software_local_temporary_folder              = aJsonSettings.software.software_local_temporary_folder;//"tmp/playlist/"";
        this._software_local_temporary_file_name           = aJsonSettings.software.software_local_temporary_file_name;//"playlist_v5.json";
        this._software_remote_server_url                   = aJsonSettings.software.software_remote_server_url;
        this._software_remote_folder                       = aJsonSettings.software.software_remote_folder ;//"v5/player_playlists/";
        this._software_remote_file_name                    = aJsonSettings.software.software_remote_file_name ;//"playlist.json";
        this._software_encrypted_type                      = aJsonSettings.software.software_encrypted_type;             //"mood_v5";
        this._software_encrypted_local_folder              = aJsonSettings.software.software_encrypted_local_folder ;//"moodmedia/playlist/";
        this._software_encrypted_local_file_name           = aJsonSettings.software.software_encrypted_local_file_name;//"playlist_v5.json";
        this._software_encrypted_local_temporary_folder    = aJsonSettings.software.software_encrypted_local_temporary_folder;//"tmp/playlist/";
        this._software_encrypted_local_temporary_file_name = aJsonSettings.software.software_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._software_encrypted_remote_server_url         = aJsonSettings.software.software_encrypted_remote_server_url ;
        this._software_encrypted_remote_folder             = aJsonSettings.software.software_encrypted_remote_folder ;//"v5/player_playlists/";
        this._software_encrypted_remote_file_name          = aJsonSettings.software.software_encrypted_remote_file_name;//"playlist.zip";

        this._softwareconfig_type                                = aJsonSettings.software.softwareconfig_type;             //"mood_v5";
        this._softwareconfig_local_folder                        = aJsonSettings.software.softwareconfig_local_folder;//"moodmedia/playlist/";
        this._softwareconfig_local_file_name                     = aJsonSettings.software.softwareconfig_local_file_name;//"playlist_v5.json";
        this._softwareconfig_local_temporary_folder              = aJsonSettings.software.softwareconfig_local_temporary_folder;//"tmp/playlist/"";
        this._softwareconfig_local_temporary_file_name           = aJsonSettings.software.softwareconfig_local_temporary_file_name;//"playlist_v5.json";
        this._softwareconfig_remote_server_url                   = aJsonSettings.software.softwareconfig_remote_server_url;        
        this._softwareconfig_remote_folder                       = aJsonSettings.software.softwareconfig_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_remote_file_name                    = aJsonSettings.software.softwareconfig_remote_file_name ;//"playlist.json";
        this._softwareconfig_encrypted_type                      = aJsonSettings.software.softwareconfig_encrypted_type;             //"mood_v5";
        this._softwareconfig_encrypted_local_folder              = aJsonSettings.software.softwareconfig_encrypted_local_folder ;//"moodmedia/playlist/";
        this._softwareconfig_encrypted_local_file_name           = aJsonSettings.software.softwareconfig_encrypted_local_file_name;//"playlist_v5.json";
        this._softwareconfig_encrypted_local_temporary_folder    = aJsonSettings.software.softwareconfig_encrypted_local_temporary_folder;//"tmp/playlist/";
        this._softwareconfig_encrypted_local_temporary_file_name = aJsonSettings.software.softwareconfig_encrypted_local_temporary_file_name;//"playlist_v5.zip";
        this._softwareconfig_encrypted_remote_server_url         = aJsonSettings.software.softwareconfig_encrypted_remote_server_url ;
        this._softwareconfig_encrypted_remote_folder             = aJsonSettings.software.softwareconfig_encrypted_remote_folder ;//"v5/player_playlists/";
        this._softwareconfig_encrypted_remote_file_name          = aJsonSettings.software.softwareconfig_encrypted_remote_file_name;//"playlist.zip";
      }

      this._playlist_type                                = aJsonSettings.playlist.type;//"mood_v5";
      this._playlist_local_folder                        = aJsonSettings.playlist.local_folder;//"moodmedia/playlist/";
      this._playlist_local_file_name                     = aJsonSettings.playlist.local_file_name;//"playlist_v5.json";
      this._playlist_local_temporary_folder              = aJsonSettings.playlist.local_temporary_folder;//"tmp/playlist/"";
      this._playlist_local_temporary_file_name           = aJsonSettings.playlist.local_temporary_file_name;//"playlist_v5.json";
      this._playlist_remote_base_folder                  = aJsonSettings.playlist.remote_base_folder ;//"v5/player_playlists/";
      this._playlist_remote_file_name                    = aJsonSettings.playlist.remote_file_name ;//"playlist.json";
      this._playlist_encrypted_local_folder              = aJsonSettings.playlist.encrypted_local_folder ;//"moodmedia/playlist/";
      this._playlist_encrypted_local_file_name           = aJsonSettings.playlist.encrypted_local_file_name;//"playlist_v5.json";
      this._playlist_encrypted_local_temporary_folder    = aJsonSettings.playlist.encrypted_local_temporary_folder;//"tmp/playlist/";
      this._playlist_encrypted_local_temporary_file_name = aJsonSettings.playlist.encrypted_local_temporary_file_name;//"playlist_v5.zip";
      this._playlist_encrypted_remote_base_folder        = aJsonSettings.playlist.encrypted_remote_base_folder ;//"v5/player_playlists/";
      this._playlist_encrypted_remote_file_name          = aJsonSettings.playlist.encrypted_remote_file_name;//"playlist.zip";
     
      this._media_files_local_folder                      = aJsonSettings.media_files.local_folder;//"media_files/",
      this._media_files_local_temporary_folder            = aJsonSettings.media_files.local_temporary_folder;//"tmp/media_files/",
      this._media_files_remote_base_folder                = aJsonSettings.media_files.remote_base_folder;//"/v5/medias/",
      this._media_files_remote_base_folder2               = aJsonSettings.media_files.remote_base_folder2;//"/parts/";
      this._media_files_encrypted_local_folder            = aJsonSettings.media_files.encrypted_local_folder;//"media_encrypted/";
      this._media_files_encrypted_local_temporary_folder  = aJsonSettings.media_files.encrypted_local_temporary_folder ;//"tmp/media_encrypted/";
      this._media_files_encrypted_remote_base_folder      = aJsonSettings.media_files.encrypted_remote_base_folder ;//"/v5/medias/";
      this._media_files_encrypted_remote_base_folder2     = aJsonSettings.media_files.encrypted_remote_base_folder2 ;//"/parts/";
      
      this._html_templates_local_folder                                          = aJsonSettings.html_templates_files.local_folder; //"media_files/",
      this._html_templates_local_html_instance_data_file_partial_name1           = aJsonSettings.html_templates_files.local_html_instance_data_file_partial_name1;//"_",
      this._html_templates_local_html_instance_data_file_partial_name2           = aJsonSettings.html_templates_files.local_html_instance_data_file_partial_name2;//".json",
      this._html_templates_local_html_feed_file_name                             = aJsonSettings.html_templates_files.local_html_feed_file_name;//"files.json";
      this._html_templates_local_temporary_folder                                = aJsonSettings.html_templates_files.local_temporary_folder;//"tmp/media_files/";
      this._html_templates_local_temporary_html_instance_data_file_partial_name1 = aJsonSettings.html_templates_files.local_temporary_html_instance_data_file_partial_name1;"_";
      this._html_templates_local_temporary_html_instance_data_file_partial_name2 = aJsonSettings.html_templates_files.local_temporary_html_instance_data_file_partial_name2;".json";
      this._html_templates_local_temporary_html_feed_file_name                   = aJsonSettings.html_templates_files.local_temporary_html_feed_file_name;//"files.json";
      this._html_templates_remote_base_folder                                    = aJsonSettings.html_templates_files.remote_base_folder;//"/v5/medias/",
      this._html_templates_remote_base_folder2                                   = aJsonSettings.html_templates_files.remote_base_folder2;//"/parts/";
      this._html_templates_remote_base_folder3                                   = aJsonSettings.html_templates_files.remote_base_folder3;//"/v6/htmlInstanceFile/";
      this._html_templates_remote_base_folder4                                   = aJsonSettings.html_templates_files.remote_base_folder4;//"player=true&";
      this._html_templates_remote_base_folder5                                   = aJsonSettings.html_templates_files.remote_base_folder5;//"serial=";
      this._html_templates_remote_html_feed_file_name                            = aJsonSettings.html_templates_files.remote_html_feed_file_name;//"files.json";
      this._html_templates_corrective_js_folder                                   = aJsonSettings.html_templates_files.corrective_js_folder;//"js";
      
      this._html_templates_encrypted_local_folder                                = aJsonSettings.html_templates_files.encrypted_local_folder;//"media_encrypted/";
      this._html_templates_encrypted_local_html_instance_data_file_partial_name1 
                                                                    = aJsonSettings.html_templates_files.encrypted_local_html_instance_data_file_partial_name1;"_";
      this._html_templates_encrypted_local_html_instance_data_file_partial_name2 
                                                                    = aJsonSettings.html_templates_files.encrypted_local_html_instance_data_file_partial_name2;//".json.zip";
      this._html_templates_encrypted_local_html_feed_file_name                   = aJsonSettings.html_templates_files.encrypted_local_html_feed_file_name;//"files.json.zip";
      this._html_templates_encrypted_local_temporary_folder                      = aJsonSettings.html_templates_files.encrypted_local_temporary_folder;//"tmp/media_encrypted/";
      this._html_templates_encrypted_local_temporary_html_instance_data_file_partial_name1 
                                                            = aJsonSettings.html_templates_files.encrypted_local_temporary_html_instance_data_file_partial_name1;//"_";
      this._html_templates_encrypted_local_temporary_html_instance_data_file_partial_name2 
                                                            = aJsonSettings.html_templates_files.encrypted_local_temporary_html_instance_data_file_partial_name2;///".json.zip",
      this._html_templates_encrypted_local_temporary_html_feed_file_name         = aJsonSettings.html_templates_files.encrypted_local_temporary_html_feed_file_name;//"files.json.zip",
      this._html_templates_encrypted_remote_base_folder                          = aJsonSettings.html_templates_files.encrypted_remote_base_folder;//"/v5/medias/";
      this._html_templates_encrypted_remote_base_folder2                         = aJsonSettings.html_templates_files.encrypted_remote_base_folder2;//"/parts/"
      this._html_templates_encrypted_remote_base_folder3                         = aJsonSettings.html_templates_files.encrypted_remote_base_folder3;//"/v6/htmlInstanceFile/";
      this._html_templates_encrypted_remote_base_folder4                         = aJsonSettings.html_templates_files.encrypted_remote_base_folder4;//"player=true&";
      this._html_templates_encrypted_remote_base_folder5                         = aJsonSettings.html_templates_files.encrypted_remote_base_folder5;//"serial=";  
      this._html_templates_encrypted_remote_html_feed_file_name                  = aJsonSettings.html_templates_files.encrypted_remote_html_feed_file_name;//"files.json.zip";
      this._html_templates_encrypted_corrective_js_folder                        = aJsonSettings.html_templates_files.encrypted_corrective_js_folder;//"js";

      this._aCronConfiguration.copyFromJson(aJsonSettings.cron_service);
      this.setupEpsilonTimeBeforeNaturalEnd(aJsonSettings);

      //-----------------------
      this.initFolders( this._defaultAppStorageName,
                        this._defaultAppStorageUrlName,           //""
                        this._defaultResourceStorageName,         // "c:/";
                        this._defaultResourceStorageUrlName,      // "http://127.0.0.1:9080/c/";  
                        this._defaultHtmlTemplatesStorageName,    // "c:/";
                        this._defaultHtmlTemplatesStorageUrlName, // "http://127.0.0.1:9080/c/";                          
                        this._defaultStorageUrlName,              // "http://127.0.0.1:3000";  
                        this._defaultStorageSameDomainUrlName,    // "http://127.0.0.1:3000/c/";       
                        this._appName,                            // "SOC Player"
                        this._appVersion,                         // "162"
                        this._appBuildNo,
                        null                                      //error : amGeneralError.am_general.A_Error 
                      );
    }

    //---------------------------
    public setSerialNumber(strSerialNumber: string) : void
    {
       this._strSerialNumber = strSerialNumber;
    }
    //---------------------------
    public getSerialNumber() : string
    {
       return this._strSerialNumber;
    }

    //---------------------------
    public setBaseServerApiUrl(baseServerApiUrl: string) : void
    {
       this._strBaseServerApiUrl =  baseServerApiUrl;
    }
    //---------------------------
    public getBaseServerApiUrl() : string
    {
       return this._strBaseServerApiUrl;
    }

    //---------------------------
    public setDefaultPlaylistFileUrl(strDefaultPlaylistFileUrl: string) : void
    {
       this._strDefaultPlaylistFileUrl = strDefaultPlaylistFileUrl;
    }
    //---------------------------
    public getDefaultPlaylistFileUrl() : string
    {
       return this._strDefaultPlaylistFileUrl;
    }
  
    //---------------------------
    public setDefaultPlaylistShaFileUrl(strDefaultPlaylistShaFileUrl: string) : void
    {
       this._strDefaultPlaylistShaFileUrl = strDefaultPlaylistShaFileUrl;
    }
    //---------------------------
    public getDefaultPlaylistShaFileUrl() : string
    {
       return this._strDefaultPlaylistShaFileUrl;
    }

    public setAppVersion(appVersion: string) : void
    {
      this._appVersion = appVersion;
    }

    public getAppVersion() : string
    {
      return this._appVersion;
    }

    public setAppBuildNo(appBuildNo: number) : void
    {
      this._appBuildNo = appBuildNo; 
    }

    public getAppBuildNo() : number
    {
      return this._appBuildNo;
    }

    public getMonitoringSettings(): amMonitoringSettings.am_general.AE_MonitoringSettings
    {
      return this._aMonitoringSettings;
    }

    public setMonitoringSettings(aMonitoringSettings: amMonitoringSettings.am_general.AE_MonitoringSettings)
    {
      this._aMonitoringSettings = aMonitoringSettings;
    }
    
    public getScreenshotOptions(): amScreenshotOptions.am_general.AE_ScreenshotOptions
    {
      return this._aScreenshotOptions;
    }

    public setScreenshotOptions(aScreenshotOptions: amScreenshotOptions.am_general.AE_ScreenshotOptions)
    {
      this._aScreenshotOptions = aScreenshotOptions;
    }
    
    public getStartupSystemSettings(): amStartupSystemSettings.am_general.AE_SystemSettings
    {
      return this._aStartupSystemSettings;
    }
    public setStartupSystemSettings(aStartupSystemSettings: amStartupSystemSettings.am_general.AE_SystemSettings): void
    {
      this._aStartupSystemSettings = aStartupSystemSettings;
    }

    public getLiveCommandsSettings(): amLiveCommandsSettings.am_general.AE_LiveCommandsSettings
    {
      return this._aLiveCommandsSettings;
    }
    public setLiveCommandsSettings(aLiveCommandsSettings: amLiveCommandsSettings.am_general.AE_LiveCommandsSettings): void
    {
      this._aLiveCommandsSettings = aLiveCommandsSettings;
    }

    public getAudioSystemSettings(): amStartupAudioSettings.am_general.AE_AudioSettings
    {
      return this._aStartupAudioSettings;
    }
    public setAudioSystemSettings(aStartupAudioSettings: amStartupAudioSettings.am_general.AE_AudioSettings): void
    {
      this._aStartupAudioSettings = aStartupAudioSettings;
    }

    public getVideoSystemSettings(): amStartupVideoSettings.am_general.AE_VideoSettings
    {
      return this._aStartupVideoSettings;
    }
    public setVideoSystemSettings(aStartupVideoSettings: amStartupVideoSettings.am_general.AE_VideoSettings): void
    {
      this._aStartupVideoSettings = aStartupVideoSettings;
    }

    public getTimeSystemSettings(): amStartupTimeSettings.am_general.AE_TimeSettings
    {
      return this._aStartupTimeSettings;
    }
    public setTimeSystemSettings(aStartupTimeSettings: amStartupTimeSettings.am_general.AE_TimeSettings): void
    {
      this._aStartupTimeSettings = aStartupTimeSettings;
    }

    public getLanguageSystemSettings(): amStartupLanguageSettings.am_general.AE_LanguageSettings
    {
      return this._aStartupLanguageSettings;
    }
    public setLanguageSystemSettings(aStartupLanguageSettings: amStartupLanguageSettings.am_general.AE_LanguageSettings): void
    {
      this._aStartupLanguageSettings = aStartupLanguageSettings;
    }

    public getStartupSettings(): amStartupSettings.am_general.AE_StartupSettings
    {
      return this._aStartupSettings;
    }
    public setStartupSettings(aStartupSettings: amStartupSettings.am_general.AE_StartupSettings): void
    {
      this._aStartupSettings = aStartupSettings;
    }

    public getSettingsSync(): amSettingsSync.am_general.AE_SettingsSync
    {
      return this._aSettingsSync;
    }
    public setSettingsSync(aSettingsSync: amSettingsSync.am_general.AE_SettingsSync): void
    {
      this._aSettingsSync = aSettingsSync;
    }

    public getServerDeviceSettingsConfiguration(): amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration
    {
      return this._aServerDeviceSettingsConfiguration;
    }
    public setServerDeviceSettingsConfiguration(aServerDeviceSettingsConfiguration: amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration): void
    {
      this._aServerDeviceSettingsConfiguration = aServerDeviceSettingsConfiguration;
    }

    public getJsonDeviceSettings(): object
    {
      return this._aServerDeviceSettings;
    }
    public setJsonDeviceSettings(jsonSettings: object)
    {
      this._aServerDeviceSettings = jsonSettings;
    }

    public getBootSettingsFolder(): amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._aBootSettingsFolder;
    }

    public getSettingsFolder(): amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._aSettingsFolder;
    }

    public getPlaylistFile(): amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._aPlaylistFile;
    }

    public setPlaylistFile(playlistFile: amGeneralFileInfo.am_general.A_FileInfo): void
    {
      this._aPlaylistFile.copy(playlistFile);
    }

    public getMediaFilesFolder(): amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._aMediaFilesFolder;
    }

    public setMediaFilesFolder(mediaFilesFolder: amGeneralFileInfo.am_general.A_FileInfo): void
    {
      this._aMediaFilesFolder.copy(mediaFilesFolder);
    }

    public getHtmlTemplatesFolder(): amGeneralFileInfo.am_general.A_FileInfo
    {
      return this._aHtmlTemplatesFilesFolder;
    }

    public setHtmlTemplatesFolder(htmlTemplatesFolder: amGeneralFileInfo.am_general.A_FileInfo): void
    {
      this._aHtmlTemplatesFilesFolder.copy(htmlTemplatesFolder);
    }
    public getActivityLogServiceSettings(): amActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings {
      return this._aActivityLogServiceSettings;
    }
    public setActivityLogServiceSettings(settings: amActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings): void {
      this._aActivityLogServiceSettings = settings;
    }

    //==============================================
    //   set/get a Cron Configuration
    //==============================================

    //----------------------------------------------
    public setCronConfiguration(aCronConfiguration: amCronConfiguration.am_nonrenderingservices.AE_CronConfiguration): void
    {
      this._aCronConfiguration = aCronConfiguration;
    }

    //----------------------------------------------
    public getCronConfiguration(): amCronConfiguration.am_nonrenderingservices.AE_CronConfiguration
    {
      return this._aCronConfiguration;
    }

  }
} 

