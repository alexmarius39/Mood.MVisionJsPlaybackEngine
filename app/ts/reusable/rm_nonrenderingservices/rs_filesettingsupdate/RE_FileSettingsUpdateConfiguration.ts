import amDownloadConfiguration  = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/AE_PlaylistDownloadConfiguration");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_nonrenderingservices
{


  export class RE_FileSettingsUpdateConfiguration extends rmGeneralEntity.rm_general.R_Entity
                                                  implements amDownloadConfiguration.am_coreservices.AE_PlaylistDownloadConfiguration
  {  

    _remoteSettingsFilesList    : any;
    _localSettingsFilesList     : any;
    _localUnzipSettings         : any;
    _bootSettingsParametersList : any;
    _bootSettingsLocalFilesList : any;

    //----------- constructor 
    constructor()  
    {  
      super();

      this._bootSettingsLocalFilesList = {
        "files": 
          [
            {
              file_id : 1,
              src_file_path : "/moodmedia/boot_settings/",
              src_file_name : "app_server_base_url.json",
              tmp_file_path : "/moodmedia/boot_settings/",
              tmp_file_name : "app_server_base_url.json",
              dst_file_path : "/moodmedia/boot_settings/",
              dst_file_name : "app_server_base_url.json",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 2,
              src_file_path : "/moodmedia/boot_settings/",
              src_file_name : "seed_serial_no.json",
              tmp_file_path : "/moodmedia/boot_settings/",
              tmp_file_name : "seed_serial_no.json",
              dst_file_path : "/moodmedia/boot_settings/",
              dst_file_name : "seed_serial_no.json",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 3,
              src_file_path : "/tmp/settings/",
              src_file_name : "media_server_base_url.json",
              tmp_file_path : "/tmp/settings/",
              tmp_file_name : "media_server_base_url.json",
              dst_file_path : "/moodmedia/boot_settings/",
              dst_file_name : "media_server_base_url.json",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 4,
              src_file_path : "/moodmedia/boot_settings/",
              src_file_name : "main_debug_param.json",
              tmp_file_path : "/moodmedia/boot_settings/",
              tmp_file_name : "main_debug_param.json",
              dst_file_path : "/moodmedia/boot_settings/",
              dst_file_name : "main_debug_param.json",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            }
          ]
      }

      this._bootSettingsParametersList = {
        "boot_parameters": 
          [
            {
              key: "$BOOT_SETTINGS_APP_SERVER_BASE_URL",
              value : ""
            },
            {
              key: "$BOOT_SETTINGS_APP_SERVER_BASE_PATH",
              value : ""
            },
            {
              key: "$BOOT_SETTINGS_SERIAL_NO",
              value : ""
            },
            {
              key: "$BOOT_SETTINGS_MEDIA_SERVER_BASE_URL",
              value : ""
            },
            {
              key: "$BOOT_SETTINGS_MAIN_DEBUG",
              value : ""
            }
         ]  
      };

      this._remoteSettingsFilesList = {
        "files": 
          [
            {
              file_id : 1,
              src_file_path : "/",
              src_file_name : "soc_settings.zip",
              tmp_file_path : "/tmp/",
              tmp_file_name : "soc_settings.zip",
              dst_file_path : "/tmp/settings/",
              dst_file_name : "soc_settings.zip",
              check_sha     : false,
              copy_file     : false,
              copy_file_if_exists : true
            }, 
            {
              file_id : 2,
              src_file_path : "/",
              src_file_name : "media_server_base_url.json",
              tmp_file_path : "/tmp/",
              tmp_file_name : "media_server_base_url.json",
              dst_file_path : "/tmp/settings/",
              dst_file_name : "media_server_base_url.json",
              check_sha     : false,
              copy_file     : false,
              copy_file_if_exists : true
            }
        ]
       } ;

       this._localUnzipSettings = {
            zipStorageName   : "", 
            zipFolderName    : "/tmp/settings/",
            zipFileName      : "soc_settings.zip" ,
            unzipStorageName : "", 
            unzipFolderName  :  "/tmp/unzip_settings/"
            
       } ;                                      

       this._localSettingsFilesList = {
        "files": 
          [
            {
              file_id : 1,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/settings/",
              src_file_name : "settings_v2.json",
              tmp_file_path : "/moodmedia/software_v5/settings/",
              tmp_file_name : "settings_v2.json",
              dst_file_path : "/moodmedia/software_v5/settings/",
              dst_file_name : "settings_v2.json",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 2,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/settings/",
              src_file_name : "time_zones.json",
              tmp_file_path : "/tmp/moodmedia/software_v5/settings/",
              tmp_file_name : "time_zones.json",
              dst_file_path : "/moodmedia/software_v5/settings/",
              dst_file_name : "time_zones.json",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 3,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/settings/",
              src_file_name : "hardware_settings.xml",
              tmp_file_path : "/tmp/moodmedia/software_v5/settings/",
              tmp_file_name : "hardware_settings.xml",
              dst_file_path : "/moodmedia/software_v5/settings/",
              dst_file_name : "hardware_settings.xml",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 4,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/settings/",
              src_file_name : "opening_hour_settings.xml",
              tmp_file_path : "/tmp/moodmedia/software_v5/settings/",
              tmp_file_name : "opening_hour_settings.xml",
              dst_file_path : "/moodmedia/software_v5/settings/",
              dst_file_name : "opening_hour_settings.xml",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 5,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/js/",
              src_file_name : "index.html",
              tmp_file_path : "/tmp/moodmedia/software_v5/js/",
              tmp_file_name : "index.html",
              dst_file_path : "/moodmedia/software_v5/js/",
              dst_file_name : "index.html",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 6,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/js/",
              src_file_name : "index_353684_video-with-supporting-text-1.0.0.html",
              tmp_file_path : "/tmp/moodmedia/software_v5/js/",
              tmp_file_name : "index_353684_video-with-supporting-text-1.0.0.html",
              dst_file_path : "/moodmedia/software_v5/js/",
              dst_file_name : "index_353684_video-with-supporting-text-1.0.0.html",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 7,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/js/",
              src_file_name : "news-api-wrapper.js",
              tmp_file_path : "/tmp/moodmedia/software_v5/js/",
              tmp_file_name : "news-api-wrapper.js",
              dst_file_path : "/moodmedia/software_v5/js/",
              dst_file_name : "news-api-wrapper.js",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 8,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/js/",
              src_file_name : "news-renderer.js",
              tmp_file_path : "/tmp/moodmedia/software_v5/js/",
              tmp_file_name : "news-renderer.js",
              dst_file_path : "/moodmedia/software_v5/js/",
              dst_file_name : "news-renderer.js",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 9,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/js/",
              src_file_name : "router.js",
              tmp_file_path : "/tmp/moodmedia/software_v5/js/",
              tmp_file_name : "router.js",
              dst_file_path : "/moodmedia/software_v5/js/",
              dst_file_name : "router.js",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 10,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/js/",
              src_file_name : "rss-renderer.js",
              tmp_file_path : "/tmp/moodmedia/software_v5/js/",
              tmp_file_name : "rss-renderer.js",
              dst_file_path : "/moodmedia/software_v5/js/",
              dst_file_name : "rss-renderer.js",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 11,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/js/",
              src_file_name : "template-loader.js",
              tmp_file_path : "/tmp/moodmedia/software_v5/js/",
              tmp_file_name : "template-loader.js",
              dst_file_path : "/moodmedia/software_v5/js/",
              dst_file_name : "template-loader.js",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 12,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/js/",
              src_file_name : "template_353684_video-with-supporting-text-1.0.0.js",
              tmp_file_path : "/tmp/moodmedia/software_v5/js/",
              tmp_file_name : "template_353684_video-with-supporting-text-1.0.0.js",
              dst_file_path : "/moodmedia/software_v5/js/",
              dst_file_name : "template_353684_video-with-supporting-text-1.0.0.js",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 13,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/js/",
              src_file_name : "weather-api-wrapper.js",
              tmp_file_path : "/tmp/moodmedia/software_v5/js/",
              tmp_file_name : "weather-api-wrapper.js",
              dst_file_path : "/moodmedia/software_v5/js/",
              dst_file_name : "weather-api-wrapper.js",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 14,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/js/",
              src_file_name : "weather-renderer.js",
              tmp_file_path : "/tmp/moodmedia/software_v5/js/",
              tmp_file_name : "weather-renderer.js",
              dst_file_path : "/moodmedia/software_v5/js/",
              dst_file_name : "weather-renderer.js",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },
            {
              file_id : 15,
              src_file_path : "/tmp/unzip_settings/moodmedia/project/",
              src_file_name : "screen_saver_v5.xml",
              tmp_file_path : "/tmp/moodmedia/project/",
              tmp_file_name : "screen_saver_v5.xml",
              dst_file_path : "/moodmedia/project/",
              dst_file_name : "screen_saver_v5.xml",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },  
            {
              file_id : 16,
              src_file_path : "/tmp/unzip_settings/moodmedia/project/",
              src_file_name : "screen_saver.xml",
              tmp_file_path : "/tmp/moodmedia/project/",
              tmp_file_name : "screen_saver.xml",
              dst_file_path : "/moodmedia/project/",
              dst_file_name : "screen_saver.xml",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },          
            {
              file_id : 17,
              src_file_path : "/tmp/unzip_settings/moodmedia/project/screen_saver/",
              src_file_name : "default_screen_saver.png",
              tmp_file_path : "/tmp/moodmedia/project/screen_saver/",
              tmp_file_name : "default_screen_saver.png",
              dst_file_path : "/moodmedia/project/screen_saver/",
              dst_file_name : "default_screen_saver.png",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },  
            {
              file_id : 18,
              src_file_path : "/tmp/unzip_settings/moodmedia/project/screen_saver/",
              src_file_name : "screensaver04.mp4",
              tmp_file_path : "/tmp/moodmedia/project/screen_saver/",
              tmp_file_name : "screensaver04.mp4",
              dst_file_path : "/moodmedia/project/screen_saver/",
              dst_file_name : "screensaver04.mp4",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : true
            },  
            {  
              file_id : 19,
              src_file_path : "/tmp/unzip_settings/moodmedia/software_v5/settings/",
              src_file_name : "device_settings.json",
              tmp_file_path : "/tmp/moodmedia/software_v5/settings/",
              tmp_file_name : "device_settings.json",
              dst_file_path : "/moodmedia/software_v5/settings/",
              dst_file_name : "device_settings.json",
              check_sha     : false,
              copy_file     : true,
              copy_file_if_exists : false
            },

        ]
       } ;
  
  
    }

    // ============================== 
    public getRemoteSettingsFilesList() : any
    {
      return this._remoteSettingsFilesList;
    }

    // ============================== 
    public getLocalUnzipSettings() : any
    {
      return this._localUnzipSettings;
    }

    // ============================== 
    public getLocalSettingsFilesList() : any
    {
      return this._localSettingsFilesList;
    }

    // ============================== 
    public getBootSettingsParametersList() : any
    {
      return this._bootSettingsParametersList;
    }

    // ============================== 
    public getBootSettingsLocalFilesList() : any
    {
      return this._bootSettingsLocalFilesList;
    }

  }
} 