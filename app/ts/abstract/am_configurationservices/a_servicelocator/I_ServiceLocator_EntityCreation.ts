import amGeneral = require("../../am_general/i_interface/I_Interface");

import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneral3 = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneral4 = require("../../../../../app/ts/abstract/am_general/a_property/A_Property");
import amGeneral5 = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");
import amGeneral6 = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amGeneral7 = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescriptions");

import amGeneralDateTime            = require("../../../../../app/ts/abstract/am_general/a_datetime/A_DateTime");
import amGeneralTimeZone            = require("../../../../../app/ts/abstract/am_general/a_timezone/A_TimeZone");
import amGeneralSoundProperties     = require("../../../../../app/ts/abstract/am_general/a_soundproperties/A_SoundProperties");
import amGeneralScreenProperties       = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralAppServerProperties    = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");
import amGeneralAppInstallProperties   = require("../../../../../app/ts/abstract/am_general/a_appinstallproperties/A_AppInstallProperties");
import amGeneralFirmwareProperties     = require("../../../../../app/ts/abstract/am_general/a_firmwareproperties/A_FirmwareProperties");
import amGeneralFileInfo               = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralFileTransfer           = require("../../../../../app/ts/abstract/am_general/ae_filetransfer/AE_FileTransfer");
import amGeneralNetworkProperties      = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProperties");
import amGeneralNetworkCardProperties  = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkCardProperties");
import amGeneralNetworkProxyProperties = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_NetworkProxyProperties");
import amGeneralWifiConnectionInfo     = require("../../../../../app/ts/abstract/am_general/a_networkproperties/A_WifiConnectionInfo");
import amGeneralBeaconInfo            = require("../../../../../app/ts/abstract/am_general/a_beaconinfo/A_BeaconInfo");
import amGeneralCaptureScreenInfo     = require("../../../../../app/ts/abstract/am_general/a_capturescreeninfo/A_CaptureScreenInfo");
import amGeneralEddystoneInfo         = require("../../../../../app/ts/abstract/am_general/a_eddystoneinfo/A_EddystoneInfo");
import amGeneralPlatformInfo          = require("../../../../../app/ts/abstract/am_general/a_platforminfo/A_PlatformInfo");
import amGeneralSystemUsageInfo       = require("../../../../../app/ts/abstract/am_general/a_systemusageinfo/A_SystemUsageInfo");
import amGeneralSystemStorageInfo     = require("../../../../../app/ts/abstract/am_general/a_systemstorageinfo/A_SystemStorageInfo");
import amGeneralWifiSoftAppInfo       = require("../../../../../app/ts/abstract/am_general/a_wifisoftappinfo/A_WifiSoftAppInfo");
import amGeneralFailureModeInfo       = require("../../../../../app/ts/abstract/am_general/a_failuremodeinfo/A_FailureModeInfo");

import amGeneralPowerProperties       = require("../../../../../app/ts/abstract/am_general/a_powerproperties/A_PowerProperties");
import amGeneralPowerSaveModeInfo     = require("../../../../../app/ts/abstract/am_general/a_powersavemodeinfo/A_PowerSafeModeInfo");
import amGeneralTileInfo              = require("../../../../../app/ts/abstract/am_general/a_tileinfo/A_TileInfo");
import amGeneralSystemMonitorInfo     = require("../../../../../app/ts/abstract/am_general/a_systemmonitorinfo/A_SystemMonitorInfo");
import amGeneralUsageData             = require("../../../../../app/ts/abstract/am_general/a_usagedata/A_UsageData");
import amGeneralUsagePermissions      = require("../../../../../app/ts/abstract/am_general/a_usagepermissions/A_UsagePermissions");
import amGeneralDeviceTimerInfo       = require("../../../../../app/ts/abstract/am_general/a_devicetimerinfo/A_DeviceTimerInfo");
import amGeneralShaProperties         = require("../../../../../app/ts/abstract/am_general/a_shaproperties/A_ShaProperties");
import amGeneralXmlJsonObject         = require("../../../../../app/ts/abstract/am_general/a_xmljsonobject/A_XmlJsonObject");
import amGeneralHttpRequest           = require("../../../../../app/ts/abstract/am_general/a_httprequest/A_HttpRequest");
import amGeneralContentDispositionHeader = require("../../../abstract/am_general/a_httprequest/A_ContentDispositionHeader");
import amGeneralScreenshotOptions     = require("../../../../../app/ts/abstract/am_general/ae_screenshotoptions/AE_ScreenshotOptions");
import amGeneralMonitoringSettings    = require("../../../../../app/ts/abstract/am_general/ae_monitoringsettings/AE_MonitoringSettings");
import amGeneralActivityLogServiceSettings = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AE_ActivityLogServiceSettings");
import amGeneralLiveCommandsSettings       = require("../../am_general/ae_livecommands/AE_LiveCommandsSettings");
import amGeneralServerCommand              = require("../../am_general/ae_livecommands/AE_ServerCommand");

import amStartupSettings              = require("../../am_general/ae_systemsettings/AE_StartupSettings");
import amStartupSystemSettings        = require("../../am_general/ae_systemsettings/AE_SystemSettings");
import amStartupAudioSettings         = require("../../am_general/ae_systemsettings/AE_AudioSettings");
import amStartupVideoSettings         = require("../../am_general/ae_systemsettings/AE_VideoSettings");
import amStartupTimeSettings          = require("../../am_general/ae_systemsettings/AE_TimeSettings");
import amStartupLanguageSettings      = require("../../am_general/ae_systemsettings/AE_LanguageSettings");

import amServerDeviceSettings         = require("../../am_general/ae_devicesettings/AE_ServerDeviceSettings");
import amDeviceSetting                = require("../../am_general/ae_devicesettings/AE_DeviceSetting");
import amSettingsSync                 = require("../../am_general/ae_devicesettings/AE_SettingsSync");
import amAppCommunicationSettings     = require("../../am_general/ae_devicesettings/AE_AppCommunicationSettings");
import amMulticastSettings            = require("../../am_general/ae_devicesettings/AE_MulticastSettings");
import amP2PSettings                  = require("../../am_general/ae_devicesettings/AE_P2PSettings");
import amClientSettings               = require("../../am_general/ae_devicesettings/AE_ClientSettings");
import amClientAPISettings            = require("../../am_general/ae_devicesettings/AE_CloudAPISettings");
import amContentSettings              = require("../../am_general/ae_devicesettings/AE_ContentSettings");
import amPurgeSettings                = require("../../am_general/ae_devicesettings/AE_PurgeSettings");
import amCronSettings                 = require("../../am_general/ae_devicesettings/AE_CronSettings");
import amDisplaySettings              = require("../../am_general/ae_devicesettings/AE_DisplaySettings");
import amHardwareSettings             = require("../../am_general/ae_devicesettings/AE_HardwareSettings");
import amLoggingSettings              = require("../../am_general/ae_devicesettings/AE_LoggingSettings");
import amNetworkLinkSettings          = require("../../am_general/ae_devicesettings/AE_NetworkLinkSettings");
import amEthernetSettings             = require("../../am_general/ae_devicesettings/AE_EthernetSettings");
import amHTTPProxySettings            = require("../../am_general/ae_devicesettings/AE_HTTPProxySettings");
import amWifiAccessPointSettings      = require("../../am_general/ae_devicesettings/AE_WifiAccessPointSettings");
import amWifiSettings                 = require("../../am_general/ae_devicesettings/AE_WifiSettings");
import amNetworkSettings              = require("../../am_general/ae_devicesettings/AE_NetworkSettings");
import amPlatformSettings             = require("../../am_general/ae_devicesettings/AE_PlatformSettings");
import amAudioSettings                = require("../../am_general/ae_devicesettings/AE_AudioSettings");
import amFlashMediaSettings           = require("../../am_general/ae_devicesettings/AE_FlashMediaSettings");
import amPlaybackInteractionSettings  = require("../../am_general/ae_devicesettings/AE_PlaybackInteractionSettings");
import amVODSettings                  = require("../../am_general/ae_devicesettings/AE_VODSettings");
import amVideoSettings                = require("../../am_general/ae_devicesettings/AE_VideoSettings");
import amWebPageSettings              = require("../../am_general/ae_devicesettings/AE_WebPageSettings");
import amPlaybackSettings             = require("../../am_general/ae_devicesettings/AE_PlaybackSettings");
import amSecuritySettings             = require("../../am_general/ae_devicesettings/AE_SecuritySettings");
import amSerialDisplayCommandsSettings  = require("../../am_general/ae_devicesettings/AE_SerialDisplayCommandsSettings");
import amSiteSettings                 = require("../../am_general/ae_devicesettings/AE_SiteSettings");
import amDebugSettings                = require("../../am_general/ae_devicesettings/AE_DebugSettings");
import amResetSettings                = require("../../am_general/ae_devicesettings/AE_ResetSettings");
import amSoftwareSettings             = require("../../am_general/ae_devicesettings/AE_SoftwareSettings");
import amSoundSettings                = require("../../am_general/ae_devicesettings/AE_SoundSettings");
import amTimeSyncSettings             = require("../../am_general/ae_devicesettings/AE_TimeSyncSettings");
import amTimeSettings                 = require("../../am_general/ae_devicesettings/AE_TimeSettings");

import amServerDeviceSettingsConfiguration = require("../../am_nonrenderingservices/as_settingssync/AE_ServerDeviceSettingsConfiguration");

import amGeneralXmlDocument           = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlDocument");
import amGeneralXmlNode               = require("../../../../../app/ts/abstract/am_general/ae_xmlobjects/AE_XmlNode");

import amGeneralQueue                 = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent                 = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amGeneralRandom                = require("../../../../../app/ts/abstract/am_general/ae_random/AE_Random");
import amGeneralDiffusion             = require("../../../../../app/ts/abstract/am_general/ae_diffusion/AE_Diffusion");

import amGeneralParameter                      = require("../../../../../app/ts/abstract/am_general/ae_parameter/AE_Parameter");
import amGeneralServiceConstraint              = require("../../../../../app/ts/abstract/am_general/ae_serviceconstraint/AE_ServiceConstraint");
import amGeneralScheduleInfo                   = require("../../../../../app/ts/abstract/am_general/ae_scheduleinfo/AE_ScheduleInfo");
import amNonrenderingServicesCronSchedule      = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AE_CronSchedule");
import amNonrenderingServicesCronConfiguration = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AE_CronConfiguration");

import amRenderingServicesTestConfiguration    = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AE_TestConfiguration");
import amRenderingServicesTest2Configuration   = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice2/AE_Test2Configuration");
import amRenderingServicesTest3Configuration   = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice3/AE_Test3Configuration");

import amNonrenderingServicesFileSettingsUpdateConfiguration = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_filesettingsupdate/AE_FileSettingsUpdateConfiguration");

import amGeneralHttpHeader              = require("../../../../../app/ts/abstract/am_general/ae_httpheader/AE_HttpHeader");
import amGeneralHttpHeaders             = require("../../../../../app/ts/abstract/am_general/ae_httpheaders/AE_HttpHeaders");
import amPlaybackMoodDefaultHttpHeaders = require("../../../../../app/ts/abstract/am_playback/ae_mooddefaulthttpheaders/AE_MoodDefaultHttpHeaders");

import amPlaybackHardwareSettings   = require("../../../../../app/ts/abstract/am_playback/a_hardwaresettings/A_HardwareSettings"); 
import amPlaybackOpeningHours       = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_OpeningHours"); 
import amPlaybackDayOpeningHours    = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours"); 
import amPlaybackScreenSaverConfig  = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig"); 
import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");

import amCoreServicesMainPlaylist              = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist");
import amCoreServicesTagManager                = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_TagManager");
import amCoreServicesPlaylistItem              = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem"); 
import amCoreServicesPlaylistItemContainer     = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Container");
import amCoreServicesPlaylistItemDesign        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Design");
import amCoreServicesPlaylistItemDesignZone    = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_DesignZone");
import amCoreServicesPlaylistItemEvent         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Event");
import amCoreServicesPlaylistItemEvents        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Events");
import amCoreServicesPlaylistItemFillRect      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_FillRect");
import amCoreServicesPlaylistItemFlash         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Flash");
import amCoreServicesPlaylistItemHtmlTemplate  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_HtmlTemplate");
import amCoreServicesPlaylistItemImage         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Image");
import amCoreServicesPlaylistItemPlaylist      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Playlist");
import amCoreServicesPlaylistItemPriorityPlaylist = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_PriorityPlaylist");
import amCoreServicesPlaylistItemStream        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Stream");
import amCoreServicesPlaylistItemScreenSaverImage  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ScreenSaverImage");
import amCoreServicesPlaylistItemScreenSaverVideo  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ScreenSaverVideo");
import amCoreServicesPlaylistItemTag           = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Tag");
import amCoreServicesPlaylistItemRealTag       = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_RealTag");
import amCoreServicesPlaylistItemTVPassThrough = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TVPassThrough");
import amCoreServicesPlaylistItemTVTunner      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TVTunner");
import amCoreServicesPlaylistItemVideo         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Video");
import amCoreServicesPlaylistItemVideoStream   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_VideoStream");
import amCoreServicesPlaylistItemWebPage       = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_WebPage");

import amCoreServicesMainPlaylistLogic                = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist_Logic");
import amCoreServicesTagManagerLogic                  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_TagManager_Logic");
import amCoreServicesPlaylistItemLogic                = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Logic"); 
import amCoreServicesPlaylistItemContainerLogic       = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ContainerLogic");
import amCoreServicesPlaylistItemDesignLogic          = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_DesignLogic");
import amCoreServicesPlaylistItemDesignZoneLogic      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_DesignZoneLogic");
import amCoreServicesPlaylistItemDesignMainZoneLogic  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_DesignMainZoneLogic");
import amCoreServicesPlaylistItemEventLogic           = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_EventLogic");
import amCoreServicesPlaylistItemEventsLogic          = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_EventsLogic");
import amCoreServicesPlaylistItemFillRectLogic        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_FillRectLogic");
import amCoreServicesPlaylistItemFlashLogic           = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_FlashLogic");
import amCoreServicesPlaylistItemHtmlTemplateLogic    = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_HtmlTemplateLogic");
import amCoreServicesPlaylistItemImageLogic           = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ImageLogic");
import amCoreServicesPlaylistItemPlaylistLogic        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_PlaylistLogic");
import amCoreServicesPlaylistItemPriorityPlaylistLogic = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_PriorityPlaylistLogic");
import amCoreServicesPlaylistItemStreamLogic          = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_StreamLogic");
import amCoreServicesPlaylistItemScreenSaverImageLogic = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ScreenSaverImageLogic");
import amCoreServicesPlaylistItemScreenSaverVideoLogic = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ScreenSaverVideoLogic");
import amCoreServicesPlaylistItemTagLogic             = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TagLogic");
import amCoreServicesPlaylistItemRealTagLogic         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_RealTagLogic");
import amCoreServicesPlaylistItemTVPassThroughLogic   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TVPassThroughLogic");
import amCoreServicesPlaylistItemTVTunnerLogic        = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_TVTunnerLogic");
import amCoreServicesPlaylistItemVideoLogic           = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_VideoLogic");
import amCoreServicesPlaylistItemVideoStreamLogic     = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_VideoStreamLogic");
import amCoreServicesPlaylistItemWebPageLogic         = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_WebPageLogic");

import amCoreServicesPlaylistItemStatus               = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Status");
import amCoreServicesPlaylistItemStatusDisable        = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusDisable");
import amCoreServicesPlaylistItemStatusEnd            = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusEnd");
import amCoreServicesPlaylistItemStatusError          = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusError");
import amCoreServicesPlaylistItemStatusPlay           = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusPlay");
import amCoreServicesPlaylistItemStatusPlay_List      = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusPlay_List");
import amCoreServicesPlaylistItemStatusPlay_Media     = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusPlay_Media");
import amCoreServicesPlaylistItemStatusRequestToAbort = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbort");
import amCoreServicesPlaylistItemStatusRequestToAbort_List  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbort_List");
import amCoreServicesPlaylistItemStatusRequestToAbort_Media = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbort_Media");
import amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay");
import amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_List  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List");
import amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media");
import amCoreServicesPlaylistItemStatusRequestToEnd          = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToEnd");
import amCoreServicesPlaylistItemStatusRequestToEnd_List     = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToEnd_List");
import amCoreServicesPlaylistItemStatusRequestToEnd_Media    = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToEnd_Media");
import amCoreServicesPlaylistItemStatusRequestToPlay         = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay");
import amCoreServicesPlaylistItemStatusRequestToPlay_List    = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay_List");
import amCoreServicesPlaylistItemStatusRequestToPlay_Media   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay_Media");
import amCoreServicesPlaylistItemStatusRequestToResume       = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToResume");
import amCoreServicesPlaylistItemStatusRequestToResume_List  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToResume_List");
import amCoreServicesPlaylistItemStatusRequestToResume_Media = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToResume_Media");
import amCoreServicesPlaylistItemStatusRequestToSuspend      = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend");
import amCoreServicesPlaylistItemStatusRequestToSuspend_List = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend_List");
import amCoreServicesPlaylistItemStatusRequestToSuspend_Media = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend_Media");
import amCoreServicesPlaylistItemStatusSelectNextChildToPlay = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusSelectNextChildToPlay");
import amCoreServicesPlaylistItemStatusSuspended             = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusSuspended");
import amCoreServicesPlaylistItemTransition                  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Transition");

import amCoreServicesPlaylistControllerConfig  = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/AE_PlaylistControllerConfig");
import amCoreServicesRenderingControllerConfig = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/AE_RenderingControllerConfig");

import amRenderingServicesHtmlZone             = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZone");
import amRenderingServicesHtmlZonePool         = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZonePool");

import amRenderingServicesRenderingZonePool    = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/AE_RenderingZonePool");
import amRenderingServicesImageRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/AE_ImageRendererPool");
import amRenderingServicesVideoRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/AE_VideoRendererPool");
import amRenderingServicesVideoStreamRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/AE_VideoStreamRendererPool");
import amRenderingServicesHtmlRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/AE_HtmlRendererPool");
import amRenderingServicesHtmlTemplateRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/AE_HtmlTemplateRendererPool");
import amRenderingServicesFlashRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/AE_FlashRendererPool");
import amRenderingServicesScreenSaverRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/AE_ScreenSaverRendererPool");
import amRenderingServicesFillRectRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/AE_FillRectRendererPool");
import amRenderingServicesTvHdmiPassThroughSrvPool = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/AE_TvHdmiPassThroughSrvPool");
import amRenderingServicesBackgroundRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/AE_BackgroundRendererPool");

import amRenderParametersAllParameters     = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_AllParameters");
import amRenderParametersIdentification = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Identification");
import amRenderParametersItemPosAndSize = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ItemPosAndSize");
import amRenderParametersContainerPosAndSize = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_ContainerPosAndSize");
import amRenderParametersDuration = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Duration");
import amRenderParametersBackground = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Background");
import amRenderParametersImage = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Image");
import amRenderParametersWebImage = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_WebImage");
import amRenderParametersVideo    = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Video");
import amRenderParametersVideoStream = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_VideoStream");
import amRenderParametersAudio    = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Audio");
import amRenderParametersWebPage  = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_WebPage");
import amRenderParametersHtmlTemplate = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_HtmlTemplate");
import amRenderParametersFillRect = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_FillRect");

import amControlPrepareParams      = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amControlPrepareParamsPool  = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_PreparePool");
import amControlRunParams          = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amControlRunParamsPool      = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_RunPool");
import amControlStopParams         = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");
import amControlStopParamsPool     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_StopPool");
import amControlStatusParams       = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Status");
import amControlStatusParamsPool   = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_StatusPool");

import amPlaylistControllerConfig             = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/AE_PlaylistControllerConfig");
import amRenderingControllerConfig            = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/AE_RenderingControllerConfig");

import amDownloadConfiguration          = require("../../../../../app/ts/abstract/am_transversalservices/as_downloadservice/AE_DownloadConfiguration");
import amPlaylistDownloadConfiguration  = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/AE_PlaylistDownloadConfiguration");

import amTimeZoneConvertor  = require("../../../../../app/ts/abstract/am_general/ae_timezoneconvertor/AE_TimeZoneConvertor");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

export module am_configurationservices
{
  export interface I_ServiceLocator_EntityCreation extends amGeneral.am_general.I_Interface
  {
    _name: string;    

    createEntity(entityName: string, error:  amGeneralError.am_general.A_Error): amGeneral3.am_general.A_Entity;

    //--- default instances
    createDefaultError() : amGeneralError.am_general.A_Error ;

    createDefaultProperty(error : amGeneralError.am_general.A_Error) : amGeneral4.am_general.A_Property ;
    createDefaultProperties(error : amGeneralError.am_general.A_Error)  : amGeneral5.am_general.A_Properties;
        
    createDefaultFactoryDescription(error : amGeneralError.am_general.A_Error)  : amGeneral6.am_general.A_FactoryDescription;
    createDefaultFactoryDescriptions(error : amGeneralError.am_general.A_Error) : amGeneral7.am_general.A_FactoryDescriptions;
   
    createDefaultContext() : amGeneralContext.am_general.A_Context;

    createDefaultDateTime(error : amGeneralError.am_general.A_Error)  : amGeneralDateTime.am_general.A_DateTime

    createDefaultTimeZone(error : amGeneralError.am_general.A_Error)  : amGeneralTimeZone.am_general.A_TimeZone;

    createDefaultSoundProperties(error : amGeneralError.am_general.A_Error)  : amGeneralSoundProperties.am_general.A_SoundProperties;
    
    createDefaultScreenProperties(error : amGeneralError.am_general.A_Error)  : amGeneralScreenProperties.am_general.A_ScreenProperties;

    createDefaultAppInstallProperties(error : amGeneralError.am_general.A_Error)  : amGeneralAppInstallProperties.am_general.A_AppInstallProperties;
    createDefaultAppServerProperties(error : amGeneralError.am_general.A_Error)  : amGeneralAppServerProperties.am_general.A_AppServerProperties;

    createDefaultFileInfo(error : amGeneralError.am_general.A_Error)  : amGeneralFileInfo.am_general.A_FileInfo;
    createDefaultFileTransfer(error : amGeneralError.am_general.A_Error)  : amGeneralFileTransfer.am_general.AE_FileTransfer;

    createDefaultNetworkProperties(error : amGeneralError.am_general.A_Error)  : amGeneralNetworkProperties.am_general.A_NetworkProperties;
    createDefaultNetworkCardProperties(error : amGeneralError.am_general.A_Error)  : amGeneralNetworkCardProperties.am_general.A_NetworkCardProperties;
    createDefaultNetworkProxyProperties(error : amGeneralError.am_general.A_Error)  : amGeneralNetworkProxyProperties.am_general.A_NetworkProxyProperties;    
    createDefaultWifiConnectionInfo(error : amGeneralError.am_general.A_Error)  : amGeneralWifiConnectionInfo.am_general.A_WifiConnectionInfo;

    createDefaultFirmwareProperties(error : amGeneralError.am_general.A_Error)  : amGeneralFirmwareProperties.am_general.A_FirmwareProperties;
    createDefaultBeaconInfo(error : amGeneralError.am_general.A_Error)  : amGeneralBeaconInfo.am_general.A_BeaconInfo;
    createDefaultEddystoneInfo(error : amGeneralError.am_general.A_Error)  : amGeneralEddystoneInfo.am_general.A_EddystoneInfo;
    createDefaultCaptureScreenInfo(error : amGeneralError.am_general.A_Error)  : amGeneralCaptureScreenInfo.am_general.A_CaptureScreenInfo;
    createDefaultPlatformInfo(error : amGeneralError.am_general.A_Error)  : amGeneralPlatformInfo.am_general.A_PlatformInfo;
    createDefaultSystemUsageInfo(error : amGeneralError.am_general.A_Error)  : amGeneralSystemUsageInfo.am_general.A_SystemUsageInfo;
    createDefaultSystemStorageInfo(error : amGeneralError.am_general.A_Error)  : amGeneralSystemStorageInfo.am_general.A_SystemStorageInfo;
    createDefaultWifiSoftAppInfo(error : amGeneralError.am_general.A_Error)  : amGeneralWifiSoftAppInfo.am_general.A_WifiSoftAppInfo;
    createDefaultFailureModeInfo(error : amGeneralError.am_general.A_Error)  : amGeneralFailureModeInfo.am_general.A_FailureModeInfo;

    createDefaultPowerProperties(error : amGeneralError.am_general.A_Error)  : amGeneralPowerProperties.am_general.A_PowerProperties;
    createDefaultPowerSaveModeInfo(error : amGeneralError.am_general.A_Error)  : amGeneralPowerSaveModeInfo.am_general.A_PowerSafeModeInfo;

    createDefaultTileInfo(error : amGeneralError.am_general.A_Error)  : amGeneralTileInfo.am_general.A_TileInfo;
    createDefaultSystemMonitorInfo(error : amGeneralError.am_general.A_Error)  : amGeneralSystemMonitorInfo.am_general.A_SystemMonitorInfo;
    createDefaultUsageData(error : amGeneralError.am_general.A_Error)  : amGeneralUsageData.am_general.A_UsageData;
    createDefaultUsagePermisssions(error : amGeneralError.am_general.A_Error)  : amGeneralUsagePermissions.am_general.A_UsagePermissions;
    createDefaultDeviceTimerInfo(error : amGeneralError.am_general.A_Error)  : amGeneralDeviceTimerInfo.am_general.A_DeviceTimerInfo;

    createDefaultShaProperties(error : amGeneralError.am_general.A_Error)  : amGeneralShaProperties.am_general.A_ShaProperties;
    createDefaultXmlJsonObject(error : amGeneralError.am_general.A_Error)  : amGeneralXmlJsonObject.am_general.A_XmlJsonObject;

    createDefaultHttpRequest(error : amGeneralError.am_general.A_Error)  : amGeneralHttpRequest.am_general.A_HttpRequest;
    createDefaultContentDispositionHeader(error : amGeneralError.am_general.A_Error) : amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader;
    createDefaultScreenshotOptions(error : amGeneralError.am_general.A_Error): amGeneralScreenshotOptions.am_general.AE_ScreenshotOptions;
    createDefaultMonitoringSettings(error : amGeneralError.am_general.A_Error): amGeneralMonitoringSettings.am_general.AE_MonitoringSettings;

    createDefaultStartupSettings(error : amGeneralError.am_general.A_Error): amStartupSettings.am_general.AE_StartupSettings;
    createDefaultStartupSystemSettings(error : amGeneralError.am_general.A_Error): amStartupSystemSettings.am_general.AE_SystemSettings;
    createDefaultStartupAudioSettings(error : amGeneralError.am_general.A_Error): amStartupAudioSettings.am_general.AE_AudioSettings;
    createDefaultStartupVideoSettings(error : amGeneralError.am_general.A_Error): amStartupVideoSettings.am_general.AE_VideoSettings;
    createDefaultStartupTimeSettings(error : amGeneralError.am_general.A_Error): amStartupTimeSettings.am_general.AE_TimeSettings;
    createDefaultStartupLanguageSettings(error : amGeneralError.am_general.A_Error): amStartupLanguageSettings.am_general.AE_LanguageSettings;

    createDefaultActivityLogServiceSettings(error : amGeneralError.am_general.A_Error): amGeneralActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings;
    createDefaultLiveCommandsSettings(error : amGeneralError.am_general.A_Error): amGeneralLiveCommandsSettings.am_general.AE_LiveCommandsSettings;
    createDefaultServerCommand(error : amGeneralError.am_general.A_Error): amGeneralServerCommand.am_general.AE_ServerCommand;
    createDefaultServerDeviceSettings(error : amGeneralError.am_general.A_Error): amServerDeviceSettings.am_general.AE_ServerDeviceSettings;
    createDeviceSetting(error : amGeneralError.am_general.A_Error): amDeviceSetting.am_general.AE_DeviceSetting;
    createDefaultSettingsSync(error : amGeneralError.am_general.A_Error): amSettingsSync.am_general.AE_SettingsSync;
    createDefaultAppCommunicationSettings(error : amGeneralError.am_general.A_Error): amAppCommunicationSettings.am_general.AE_AppCommunicationSettings;
    createDefaultMulticastSettings(error : amGeneralError.am_general.A_Error): amMulticastSettings.am_general.AE_MulticastSettings;
    createDefaultP2PSettings(error : amGeneralError.am_general.A_Error): amP2PSettings.am_general.AE_P2PSettings;
    createDefaultClientSettings(error : amGeneralError.am_general.A_Error): amClientSettings.am_general.AE_ClientSettings;
    createDefaultCloudAPISettings(error : amGeneralError.am_general.A_Error): amClientAPISettings.am_general.AE_CloudAPISettings;
    createDefaultContentSettings(error : amGeneralError.am_general.A_Error): amContentSettings.am_general.AE_ContentSettings;
    createDefaultPurgeSettings(error : amGeneralError.am_general.A_Error): amPurgeSettings.am_general.AE_PurgeSettings;
    createDefaultCronSettings(error : amGeneralError.am_general.A_Error): amCronSettings.am_general.AE_CronSettings;
    createDefaultDisplaySettings(error : amGeneralError.am_general.A_Error): amDisplaySettings.am_general.AE_DisplaySettings;
    createDefaultHardwareSetts(error : amGeneralError.am_general.A_Error): amHardwareSettings.am_general.AE_HardwareSettings;
    createDefaultLoggingSettings(error : amGeneralError.am_general.A_Error): amLoggingSettings.am_general.AE_LoggingSettings;
    createDefaultNetworkLinkSettings(error : amGeneralError.am_general.A_Error) : amNetworkLinkSettings.am_general.AE_NetworkLinkSettings;
    createDefaultEthernetSettings(error : amGeneralError.am_general.A_Error) : amEthernetSettings.am_general.AE_EthernetSettings;
    createDefaultHTTPProxySettings(error : amGeneralError.am_general.A_Error) : amHTTPProxySettings.am_general.AE_HTTPProxySettings;
    createDefaultWifiAccessPointSettings(error : amGeneralError.am_general.A_Error) : amWifiAccessPointSettings.am_general.AE_WifiAccessPointSettings;
    createDefaultWifiSettings(error : amGeneralError.am_general.A_Error) : amWifiSettings.am_general.AE_WifiSettings;
    createDefaultNetworkSettings(error : amGeneralError.am_general.A_Error) : amNetworkSettings.am_general.AE_NetworkSettings;
    createDefaultPlatformSettings(error : amGeneralError.am_general.A_Error) : amPlatformSettings.am_general.AE_PlatformSettings;
    createDefaultAudioSettings(error : amGeneralError.am_general.A_Error) : amAudioSettings.am_general.AE_AudioSettings;
    createDefaultFlashMediaSettings(error : amGeneralError.am_general.A_Error) : amFlashMediaSettings.am_general.AE_FlashMediaSettings;
    createDefaultPlaybackInteractionSettings(error : amGeneralError.am_general.A_Error) : amPlaybackInteractionSettings.am_general.AE_PlaybackInteractionSettings;
    createDefaultVODSettings(error : amGeneralError.am_general.A_Error) : amVODSettings.am_general.AE_VODSettings;
    createDefaultVideoSettings(error : amGeneralError.am_general.A_Error) : amVideoSettings.am_general.AE_VideoSettings;
    createDefaultWebPageSettings(error : amGeneralError.am_general.A_Error) : amWebPageSettings.am_general.AE_WebPageSettings;
    createDefaultPlaybackSettings(error : amGeneralError.am_general.A_Error) : amPlaybackSettings.am_general.AE_PlaybackSettings;
    createDefaultSecuritySettings(error : amGeneralError.am_general.A_Error) : amSecuritySettings.am_general.AE_SecuritySettings;
    createDefaultSerialDisplayCommandsSettings(error : amGeneralError.am_general.A_Error) : amSerialDisplayCommandsSettings.am_general.AE_SerialDisplayCommandsSettings;
    createDefaultSiteSettings(error : amGeneralError.am_general.A_Error) : amSiteSettings.am_general.AE_SiteSettings;
    createDefaultDebugSettings(error : amGeneralError.am_general.A_Error) : amDebugSettings.am_general.AE_DebugSettings;
    createDefaultResetSettings(error : amGeneralError.am_general.A_Error) : amResetSettings.am_general.AE_ResetSettings;
    createDefaultSoftwareSettings(error : amGeneralError.am_general.A_Error) : amSoftwareSettings.am_general.AE_SoftwareSettings;
    createDefaultSoundSettings(error : amGeneralError.am_general.A_Error) : amSoundSettings.am_general.AE_SoundSettings;
    createDefaultTimeSyncSettings(error : amGeneralError.am_general.A_Error) : amTimeSyncSettings.am_general.AE_TimeSyncSettings;
    createDefaultTimeSettings(error : amGeneralError.am_general.A_Error) : amTimeSettings.am_general.AE_TimeSettings;
    createDefaultServerDeviceSettingsConfiguration(error : amGeneralError.am_general.A_Error) : amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration;
    
    createDefaultTimeZoneConvertor(error : amGeneralError.am_general.A_Error): amTimeZoneConvertor.am_general.AE_TimeZoneConvertor;

    //----------------------------------------
    //    xml objects
    //----------------------------------------
    createDefaultXmlDocument(error : amGeneralError.am_general.A_Error)  : amGeneralXmlDocument.am_general.AE_XmlDocument;
    createDefaultXmlNode(error : amGeneralError.am_general.A_Error)  : amGeneralXmlNode.am_general.AE_XmlNode;

    //----------------------------------------
    //    queue + event
    //----------------------------------------
    createDefaultQueue(error : amGeneralError.am_general.A_Error)  : amGeneralQueue.am_general.AE_Queue;
    createDefaultEvent(error : amGeneralError.am_general.A_Error)  : amGeneralEvent.am_general.AE_Event;
    createDefaultRandom(error : amGeneralError.am_general.A_Error)  : amGeneralRandom.am_general.AE_Random;
    createDefaultDiffusion(error : amGeneralError.am_general.A_Error)  : amGeneralDiffusion.am_general.AE_Diffusion;

    //-----------------------------------------------------
    //    [arameter + sdervice constarint + schedule info + cron schedule + cron confguration + test configurations
    //-----------------------------------------------------
    createDefaultParameter(error : amGeneralError.am_general.A_Error)  : amGeneralParameter.am_general.AE_Parameter;
    createDefaultServiceConstraint(error : amGeneralError.am_general.A_Error)  : amGeneralServiceConstraint.am_general.AE_ServiceConstraint;

    createDefaultScheduleInfo(error : amGeneralError.am_general.A_Error)  : amGeneralScheduleInfo.am_general.AE_ScheduleInfo;
    createDefaultCronSchedule(error : amGeneralError.am_general.A_Error)  : amNonrenderingServicesCronSchedule.am_nonrenderingservices.AE_CronSchedule;
    createDefaultCronConfiguration(error : amGeneralError.am_general.A_Error)  : amNonrenderingServicesCronConfiguration.am_nonrenderingservices.AE_CronConfiguration;

    createDefaultTestConfiguration(error : amGeneralError.am_general.A_Error)  : amRenderingServicesTestConfiguration.am_renderingservices.AE_TestConfiguration;
    createDefaultTest2Configuration(error : amGeneralError.am_general.A_Error)  : amRenderingServicesTest2Configuration.am_renderingservices.AE_Test2Configuration;
    createDefaultTest3Configuration(error : amGeneralError.am_general.A_Error)  : amRenderingServicesTest3Configuration.am_renderingservices.AE_Test3Configuration;

    createDefaultFileSettingsUpdateConfiguration(error : amGeneralError.am_general.A_Error)  : amNonrenderingServicesFileSettingsUpdateConfiguration.am_nonrenderingservices.AE_FileSettingsUpdateConfiguration;

    //----------------------------
    //  http headers
    //----------------------------

    //----------- create http header
    createDefaultHttpHeader(error : amGeneralError.am_general.A_Error)  : amGeneralHttpHeader.am_general.AE_HttpHeader;
    createDefaultHttpHeaders(error : amGeneralError.am_general.A_Error)  : amGeneralHttpHeaders.am_general.AE_HttpHeaders;
    createHttpHeaders(strDefaultHttpHeadersSetName: string, error : amGeneralError.am_general.A_Error)  : amGeneralHttpHeaders.am_general.AE_HttpHeaders;
    createDefaultMoodDefaultHtppHeaders(error : amGeneralError.am_general.A_Error)  : amPlaybackMoodDefaultHttpHeaders.am_playback.AE_MoodDefaultHttpHeaders;
    
    //----------------------------------------
    //    playback config class
    //----------------------------------------
    createDefaultHardwareSettings(error : amGeneralError.am_general.A_Error)  : amPlaybackHardwareSettings.am_playback.A_HardwareSettings;
    createDefaultOpeningHours(error : amGeneralError.am_general.A_Error)  : amPlaybackOpeningHours.am_playback.A_OpeningHours;
    createDefaultDayOpeningHours(error : amGeneralError.am_general.A_Error)  : amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours;
    createDefaultScreenSaverConfig(error : amGeneralError.am_general.A_Error)  : amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig;
    createDefaultPlaybackGlobalConfig(error : amGeneralError.am_general.A_Error)  : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;

    //----------------------------------------
    //    playlist items creators
    //----------------------------------------
    createDefaultPlaylistItem(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItem.am_coreservices.AE_PlaylistItem;
    createDefaultPlaylistItem_Container(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemContainer.am_coreservices.AE_PlaylistItem_Container;
    createDefaultPlaylistItem_Design(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesign.am_coreservices.AE_PlaylistItem_Design;
    createDefaultPlaylistItem_DesignZone(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignZone.am_coreservices.AE_PlaylistItem_DesignZone;
    createDefaultPlaylistItem_Event(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEvent.am_coreservices.AE_PlaylistItem_Event;
    createDefaultPlaylistItem_Events(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEvents.am_coreservices.AE_PlaylistItem_Events;
    createDefaultPlaylistItem_FillRect(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFillRect.am_coreservices.AE_PlaylistItem_FillRect;    
    createDefaultPlaylistItem_Flash(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFlash.am_coreservices.AE_PlaylistItem_Flash;
    createDefaultPlaylistItem_HtmlTemplate(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemHtmlTemplate.am_coreservices.AE_PlaylistItem_HtmlTemplate;
    createDefaultPlaylistItem_Image(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemImage.am_coreservices.AE_PlaylistItem_Image;
    createDefaultPlaylistItem_Playlist(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPlaylist.am_coreservices.AE_PlaylistItem_Playlist;
    createDefaultPlaylistItem_PriorityPlaylist(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPriorityPlaylist.am_coreservices.AE_PlaylistItem_PriorityPlaylist;
    createDefaultPlaylistItem_Stream(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStream.am_coreservices.AE_PlaylistItem_Stream;
    createDefaultPlaylistItem_ScreenSaverImage(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemScreenSaverImage.am_coreservices.AE_PlaylistItem_ScreenSaverImage;
    createDefaultPlaylistItem_ScreenSaverVideo(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemScreenSaverVideo.am_coreservices.AE_PlaylistItem_ScreenSaverVideo;
    createDefaultPlaylistItem_Tag(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTag.am_coreservices.AE_PlaylistItem_Tag;
    createDefaultPlaylistItem_RealTag(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemRealTag.am_coreservices.AE_PlaylistItem_RealTag;
    createDefaultPlaylistItem_TVPassThrough(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVPassThrough.am_coreservices.AE_PlaylistItem_TVPassThrough;
    createDefaultPlaylistItem_TVTunner(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVTunner.am_coreservices.AE_PlaylistItem_TVTunner;
    createDefaultPlaylistItem_Video(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideo.am_coreservices.AE_PlaylistItem_Video;
    createDefaultPlaylistItem_VideoStream(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideoStream.am_coreservices.AE_PlaylistItem_VideoStream;
    createDefaultPlaylistItem_WebPage(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemWebPage.am_coreservices.AE_PlaylistItem_WebPage;
    createDefaultMainPlaylist(error : amGeneralError.am_general.A_Error)  : amCoreServicesMainPlaylist.am_coreservices.AE_MainPlaylist;
    createDefaultTagManager(error : amGeneralError.am_general.A_Error)  : amCoreServicesTagManager.am_coreservices.AE_TagManager;

    //----------------------------------------
    //    playlist items logic creators
    //----------------------------------------
    createDefaultPlaylistItemLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemLogic.am_coreservices.AE_PlaylistItem_Logic;
    createDefaultPlaylistItem_ContainerLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemContainerLogic.am_coreservices.AE_PlaylistItem_ContainerLogic;
    createDefaultPlaylistItem_DesignLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignLogic.am_coreservices.AE_PlaylistItem_DesignLogic;
    createDefaultPlaylistItem_DesignZoneLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignZoneLogic.am_coreservices.AE_PlaylistItem_DesignZoneLogic;
    createDefaultPlaylistItem_DesignMainZoneLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemDesignMainZoneLogic.am_coreservices.AE_PlaylistItem_DesignMainZoneLogic;
    createDefaultPlaylistItem_EventLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEventLogic.am_coreservices.AE_PlaylistItem_EventLogic;
    createDefaultPlaylistItem_EventsLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemEventsLogic.am_coreservices.AE_PlaylistItem_EventsLogic;
    createDefaultPlaylistItem_FillRectLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFillRectLogic.am_coreservices.AE_PlaylistItem_FillRectLogic;
    createDefaultPlaylistItem_FlashLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemFlashLogic.am_coreservices.AE_PlaylistItem_FlashLogic;
    createDefaultPlaylistItem_HtmlTemplateLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemHtmlTemplateLogic.am_coreservices.AE_PlaylistItem_HtmlTemplateLogic;
    createDefaultPlaylistItem_ImageLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemImageLogic.am_coreservices.AE_PlaylistItem_ImageLogic;
    createDefaultPlaylistItem_PlaylistLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPlaylistLogic.am_coreservices.AE_PlaylistItem_PlaylistLogic;
    createDefaultPlaylistItem_PriorityPlaylistLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemPriorityPlaylistLogic.am_coreservices.AE_PlaylistItem_PriorityPlaylistLogic;
    createDefaultPlaylistItem_StreamLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStreamLogic.am_coreservices.AE_PlaylistItem_StreamLogic;
    createDefaultPlaylistItem_ScreenSaverImageLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemScreenSaverImageLogic.am_coreservices.AE_PlaylistItem_ScreenSaverImageLogic;
    createDefaultPlaylistItem_ScreenSaverVideoLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemScreenSaverVideoLogic.am_coreservices.AE_PlaylistItem_ScreenSaverVideoLogic;
    createDefaultPlaylistItem_TagLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTagLogic.am_coreservices.AE_PlaylistItem_TagLogic;
    createDefaultPlaylistItem_RealTagLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemRealTagLogic.am_coreservices.AE_PlaylistItem_RealTagLogic;
    createDefaultPlaylistItem_TVPassThroughLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVPassThroughLogic.am_coreservices.AE_PlaylistItem_TVPassThroughLogic;
    createDefaultPlaylistItem_TVTunnerLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTVTunnerLogic.am_coreservices.AE_PlaylistItem_TVTunnerLogic;
    createDefaultPlaylistItem_VideoLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideoLogic.am_coreservices.AE_PlaylistItem_VideoLogic;
    createDefaultPlaylistItem_VideoStreamLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemVideoStreamLogic.am_coreservices.AE_PlaylistItem_VideoStreamLogic;
    createDefaultPlaylistItem_WebPageLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemWebPageLogic.am_coreservices.AE_PlaylistItem_WebPageLogic;
    createDefaultMainPlaylistLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesMainPlaylistLogic.am_coreservices.AE_MainPlaylist_Logic;
    createDefaultTagManagerLogic(error : amGeneralError.am_general.A_Error)  : amCoreServicesTagManagerLogic.am_coreservices.AE_TagManager_Logic;


    //------------ 
    createDefaultPlaylistItemStatus(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatus.am_coreservices.AE_PlaylistItem_Status;
    createDefaultPlaylistItemStatusDisable(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusDisable.am_coreservices.AE_PlaylistItem_StatusDisable;
    createDefaultPlaylistItemStatusEnd(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusEnd.am_coreservices.AE_PlaylistItem_StatusEnd;
    createDefaultPlaylistItemStatusError(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusError.am_coreservices.AE_PlaylistItem_StatusError;
    createDefaultPlaylistItemStatusPlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusPlay.am_coreservices.AE_PlaylistItem_StatusPlay;
    createDefaultPlaylistItemStatusPlay_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusPlay_List.am_coreservices.AE_PlaylistItem_StatusPlay_List;
    createDefaultPlaylistItemStatusPlay_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusPlay_Media.am_coreservices.AE_PlaylistItem_StatusPlay_Media;
    createDefaultPlaylistItemStatusRequestToAbort(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbort.am_coreservices.AE_PlaylistItem_StatusRequestToAbort;
    createDefaultPlaylistItemStatusRequestToAbort_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbort_List.am_coreservices.AE_PlaylistItem_StatusRequestToAbort_List;
    createDefaultPlaylistItemStatusRequestToAbort_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbort_Media.am_coreservices.AE_PlaylistItem_StatusRequestToAbort_Media;
    createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay.am_coreservices.AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay;
    createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_List.am_coreservices.AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List;
    createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media.am_coreservices.AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media;
    createDefaultPlaylistItemStatusRequestToEnd(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToEnd.am_coreservices.AE_PlaylistItem_StatusRequestToEnd;
    createDefaultPlaylistItemStatusRequestToEnd_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToEnd_List.am_coreservices.AE_PlaylistItem_StatusRequestToEnd_List;
    createDefaultPlaylistItemStatusRequestToEnd_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToEnd_Media.am_coreservices.AE_PlaylistItem_StatusRequestToEnd_Media;
    createDefaultPlaylistItemStatusRequestToPlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToPlay.am_coreservices.AE_PlaylistItem_StatusRequestToPlay;
    createDefaultPlaylistItemStatusRequestToPlay_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToPlay_List.am_coreservices.AE_PlaylistItem_StatusRequestToPlay_List;
    createDefaultPlaylistItemStatusRequestToPlay_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToPlay_Media.am_coreservices.AE_PlaylistItem_StatusRequestToPlay_Media;
    createDefaultPlaylistItemStatusRequestToResume(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToResume.am_coreservices.AE_PlaylistItem_StatusRequestToResume;
    createDefaultPlaylistItemStatusRequestToResume_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToResume_List.am_coreservices.AE_PlaylistItem_StatusRequestToResume_List;
    createDefaultPlaylistItemStatusRequestToResume_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToResume_Media.am_coreservices.AE_PlaylistItem_StatusRequestToResume_Media;
    createDefaultPlaylistItemStatusRequestToSuspend(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToSuspend.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend;
    createDefaultPlaylistItemStatusRequestToSuspend_List(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToSuspend_List.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend_List;
    createDefaultPlaylistItemStatusRequestToSuspend_Media(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusRequestToSuspend_Media.am_coreservices.AE_PlaylistItem_StatusRequestToSuspend_Media;
    createDefaultPlaylistItemStatusSelectNextChildToPlay(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusSelectNextChildToPlay.am_coreservices.AE_PlaylistItem_StatusSelectNextChildToPlay;
    createDefaultPlaylistItemStatusSuspended(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemStatusSuspended.am_coreservices.AE_PlaylistItem_StatusSuspended;
    createDefaultPlaylistItemTransition(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistItemTransition.am_coreservices.AE_PlaylistItem_Transition;


    //----------------------------------------
    //    html zone creators
    //----------------------------------------
    createDefaultHtmlZone(error : amGeneralError.am_general.A_Error)  : amRenderingServicesHtmlZone.am_renderingservices.AE_HtmlZone;
    createDefaultHtmlZonePool(error : amGeneralError.am_general.A_Error)  : amRenderingServicesHtmlZonePool.am_renderingservices.AE_HtmlZonePool;

    //----------------------------------
    //     render params
    //----------------------------------    
    createDefaultRenderParamsAllParameters(error : amGeneralError.am_general.A_Error)  : amRenderParametersAllParameters.am_renderingservices.AE_RenderParams_AllParameters;
    createDefaultRenderParamsIdentification(error : amGeneralError.am_general.A_Error)  : amRenderParametersIdentification.am_renderingservices.AE_RenderParams_Identification;
    createDefaultRenderParamsItemPosAndSize(error : amGeneralError.am_general.A_Error)  : amRenderParametersItemPosAndSize.am_renderingservices.AE_RenderParams_ItemPosAndSize;
    createDefaultRenderParamsContainerPosAndSize(error : amGeneralError.am_general.A_Error)  : amRenderParametersContainerPosAndSize.am_renderingservices.AE_RenderParams_ContainerPosAndSize;
    createDefaultRenderParamsDuration(error : amGeneralError.am_general.A_Error)  : amRenderParametersDuration.am_renderingservices.AE_RenderParams_Duration;
    createDefaultRenderParamsBackground(error : amGeneralError.am_general.A_Error)  : amRenderParametersBackground.am_renderingservices.AE_RenderParams_Background;
    createDefaultRenderParamsImage(error : amGeneralError.am_general.A_Error)  : amRenderParametersImage.am_renderingservices.AE_RenderParams_Image;
    createDefaultRenderParamsWebImage(error : amGeneralError.am_general.A_Error)  : amRenderParametersWebImage.am_renderingservices.AE_RenderParams_WebImage;
    createDefaultRenderParamsVideo(error : amGeneralError.am_general.A_Error)  : amRenderParametersVideo.am_renderingservices.AE_RenderParams_Video;
    createDefaultRenderParamsVideoStream(error : amGeneralError.am_general.A_Error)  : amRenderParametersVideoStream.am_renderingservices.AE_RenderParams_VideoStream;
    createDefaultRenderParamsAudio(error : amGeneralError.am_general.A_Error)  : amRenderParametersAudio.am_renderingservices.AE_RenderParams_Audio;
    createDefaultRenderParamsWebPage(error : amGeneralError.am_general.A_Error)  : amRenderParametersWebPage.am_renderingservices.AE_RenderParams_WebPage;
    createDefaultRenderParamsHtmlTemplate(error : amGeneralError.am_general.A_Error)  : amRenderParametersHtmlTemplate.am_renderingservices.AE_RenderParams_HtmlTemplate;
    createDefaultRenderParamsFillRect(error : amGeneralError.am_general.A_Error)  : amRenderParametersFillRect.am_renderingservices.AE_RenderParams_FillRect;

    //----------------------------------
    //     control params
    //----------------------------------
        
    createDefaultControlPrepareParams(error : amGeneralError.am_general.A_Error)  : amControlPrepareParams.am_renderingservices.AE_ControlParams_Prepare;
    createDefaultControlPrepareParamsPool(error : amGeneralError.am_general.A_Error)  : amControlPrepareParamsPool.am_renderingservices.AE_ControlParams_PreparePool;
    createDefaultControlRunParams(error : amGeneralError.am_general.A_Error)  : amControlRunParams.am_renderingservices.AE_ControlParams_Run;
    createDefaultControlRunParamsPool(error : amGeneralError.am_general.A_Error)  : amControlRunParamsPool.am_renderingservices.AE_ControlParams_RunPool;
    createDefaultControlStopParams(error : amGeneralError.am_general.A_Error)  : amControlStopParams.am_renderingservices.AE_ControlParams_Stop;
    createDefaultControlStopParamsPool(error : amGeneralError.am_general.A_Error)  : amControlStopParamsPool.am_renderingservices.AE_ControlParams_StopPool;
    createDefaultControlStatusParams(error : amGeneralError.am_general.A_Error)  : amControlStatusParams.am_renderingservices.AE_ControlParams_Status;
    createDefaultControlStatusParamsPool(error : amGeneralError.am_general.A_Error)  : amControlStatusParamsPool.am_renderingservices.AE_ControlParams_StatusPool;


    //-----------------------------------------
    // create default Rendering Service Pools
    //-----------------------------------------

    //----------- create default Rendering Zone Pool
    createDefaultRenderingZonePool( error : amGeneralError.am_general.A_Error)  : amRenderingServicesRenderingZonePool.am_renderingservices.AE_RenderingZonePool;
    createDefaultVideoRendererPool( error : amGeneralError.am_general.A_Error)  : amRenderingServicesVideoRendererPool.am_renderingservices.AE_VideoRendererPool;
    createDefaultVideoStreamRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesVideoStreamRendererPool.am_renderingservices.AE_VideoStreamRendererPool;
    createDefaultImageRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesImageRendererPool.am_renderingservices.AE_ImageRendererPool;
    createDefaultHtmlRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesHtmlRendererPool.am_renderingservices.AE_HtmlRendererPool;
    createDefaultHtmlTemplateRendererPool( error : amGeneralError.am_general.A_Error) : amRenderingServicesHtmlTemplateRendererPool.am_renderingservices.AE_HtmlTemplateRendererPool;
    createDefaultFlashRendererPool( error : amGeneralError.am_general.A_Error)  : amRenderingServicesFlashRendererPool.am_renderingservices.AE_FlashRendererPool;
    createDefaultFillRectRendererPool(error : amGeneralError.am_general.A_Error) : amRenderingServicesFillRectRendererPool.am_renderingservices.AE_FillRectRendererPool;
    createDefaultScreenSaverRendererPool(error : amGeneralError.am_general.A_Error): amRenderingServicesScreenSaverRendererPool.am_renderingservices.AE_ScreenSaverRendererPool;
    createDefaultTvHdmiPassThroughSrvPool(error : amGeneralError.am_general.A_Error): amRenderingServicesTvHdmiPassThroughSrvPool.am_renderingservices.AE_TvHdmiPassThroughSrvPool;
    createDefaultBackgroundRendererPool(error : amGeneralError.am_general.A_Error) : amRenderingServicesBackgroundRendererPool.am_renderingservices.AE_BackgroundRendererPool;

    //--------------
    // configs 
    //--------------
    createDefaultPlaylistControllerConfig(error : amGeneralError.am_general.A_Error)  : amCoreServicesPlaylistControllerConfig.am_coreservices.AE_PlaylistControllerConfig;        
    createDefaultRenderingControllerConfig(error : amGeneralError.am_general.A_Error)  : amCoreServicesRenderingControllerConfig.am_coreservices.AE_RenderingControllerConfig;

    createDefaultDownloadConfiguration(error : amGeneralError.am_general.A_Error)  : amDownloadConfiguration.am_transversalservices.AE_DownloadConfiguration;        
    createDefaultPlaylistDownloadConfiguration(error : amGeneralError.am_general.A_Error)  : amPlaylistDownloadConfiguration.am_coreservices.AE_PlaylistDownloadConfiguration;
    
  }
} 