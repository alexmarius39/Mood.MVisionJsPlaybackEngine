"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rmRenderingServicesRenderingZone = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/R_RenderingZone");
var rmRenderingServicesRenderingZonePool = require("../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/RE_RenderingZonePool");
var rmRenderingServicesImageRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/R_ImageRenderer");
var rmRenderingServicesImageRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/RE_ImageRendererPool");
var rmRenderingServicesVideoRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/R_VideoRenderer");
var rmRenderingServicesVideoRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/RE_VideoRendererPool");
var rmRenderingServicesVideoStreamRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/R_VideoStreamRenderer");
var rmRenderingServicesVideoStreamRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_videostreamrenderer/RE_VideoStreamRendererPool");
var rmRenderingServicesHtmlRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/R_HtmlRenderer");
var rmRenderingServicesHtmlRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/RE_HtmlRendererPool");
var rmRenderingServicesHtmlTemplateRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmltemplaterenderer/R_HtmlTemplateRenderer");
var rmRenderingServicesHtmlTemplateRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_htmltemplaterenderer/RE_HtmlTemplateRendererPool");
var rmRenderingServicesFlashRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/R_FlashRenderer");
var rmRenderingServicesFlashRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/RE_FlashRendererPool");
var rmRenderingServicesScreenSaverRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/R_ScreenSaverRenderer");
var rmRenderingServicesScreenSaverRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/RE_ScreenSaverRendererPool");
var rmRenderingServicesFillRectRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/R_FillRectRenderer");
var rmRenderingServicesFillRectRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/RE_FillRectRendererPool");
var rmRenderingServicesTvHdmiPassThroughSrv = require("../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/R_TvHdmiPassThroughSrv");
var rmRenderingServicesTvHdmiPassThroughSrvPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/RE_TvHdmiPassThroughSrvPool");
var rmRenderingServicesBackgroundRenderer = require("../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/R_BackgroundRenderer");
var rmRenderingServicesBackgroundRendererPool = require("../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/RE_BackgroundRendererPool");
var rmGeneralService = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
var rmGeneralError = require("../../../../../app/ts/reusable/rm_general/r_error/R_Error");
var rmGeneralContext = require("../../../../../app/ts/reusable/rm_general/r_context/R_Context");
var rmGeneralProperty = require("../../../../../app/ts/reusable/rm_general/r_property/R_Property");
var rmGeneralProperties = require("../../../../../app/ts/reusable/rm_general/r_property/R_Properties");
var rmGeneralFactoryDescription = require("../../../../../app/ts/reusable/rm_general/r_factorydescription/R_FactoryDescription");
var rmGeneralFactoryDescriptions = require("../../../../../app/ts/reusable/rm_general/r_factorydescription/R_FactoryDescriptions");
var rmGeneralServices = require("../../../../../app/ts/reusable/rm_general/r_service/R_Services");
var rmGeneralServiceFactories = require("../../../../../app/ts/reusable/rm_general/r_service/R_ServiceFactories");
var rmGeneralEntityFactories = require("../../../../../app/ts/reusable/rm_general/r_entity/R_EntityFactories");
var rmGeneralDateTime = require("../../../../../app/ts/reusable/rm_general/r_datetime/R_DateTime");
var rmGeneralTimeZone = require("../../../../../app/ts/reusable/rm_general/r_timezone/R_TimeZone");
var rmGeneralSoundProperties = require("../../../../../app/ts/reusable/rm_general/r_soundproperties/R_SoundProperties");
var rmGeneralScreenProperties = require("../../../../../app/ts/reusable/rm_general/r_screenproperties/R_ScreenProperties");
var rmGeneralAppServerProperties = require("../../../../../app/ts/reusable/rm_general/r_appserverproperties/R_AppServerProperties");
var rmGeneralAppInstallProperties = require("../../../../../app/ts/reusable/rm_general/r_appinstallproperties/R_AppInstallProperties");
var rmGeneralFileInfo = require("../../../../../app/ts/reusable/rm_general/r_fileinfo/R_FileInfo");
var rmGeneralFileTransfer = require("../../../../../app/ts/reusable/rm_general/re_filetransfer/RE_FileTransfer");
var rmGeneralNetworkProperties = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProperties");
var rmGeneralNetworkCardProperties = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkCardProperties");
var rmGeneralNetworkProxyProperties = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_NetworkProxyProperties");
var rmGeneralWifiConnectionInfo = require("../../../../../app/ts/reusable/rm_general/r_networkproperties/R_WifiConnectionInfo");
var rmGeneralFirmwareProperties = require("../../../../../app/ts/reusable/rm_general/r_firmwareproperties/R_FirmwareProperties");
var rmGeneralBeaconInfo = require("../../../../../app/ts/reusable/rm_general/r_beaconinfo/R_BeaconInfo");
var rmGeneralCaptureScreenInfo = require("../../../../../app/ts/reusable/rm_general/r_capturescreeninfo/R_CaptureScreenInfo");
var rmGeneralEddystoneInfo = require("../../../../../app/ts/reusable/rm_general/r_eddystoneinfo/R_EddystoneInfo");
var rmGeneralPlatformInfo = require("../../../../../app/ts/reusable/rm_general/r_platforminfo/R_PlatformInfo");
var rmGeneralSystemUsageInfo = require("../../../../../app/ts/reusable/rm_general/r_systemusageinfo/R_SystemUsageInfo");
var rmGeneralSystemStorageInfo = require("../../../../../app/ts/reusable/rm_general/r_systemstorageinfo/R_SystemStorageInfo");
var rmGeneralWifiSoftAppInfo = require("../../../../../app/ts/reusable/rm_general/r_wifisoftappinfo/R_WifiSoftAppInfo");
var rmGeneralFailureModeInfo = require("../../../../../app/ts/reusable/rm_general/r_failuremodeinfo/R_FailureModeInfo");
var rmGeneralPowerProperties = require("../../../../../app/ts/reusable/rm_general/r_powerproperties/R_PowerProperties");
var rmGeneralPowerSaveModeInfo = require("../../../../../app/ts/reusable/rm_general/r_powersavemodeinfo/R_PowerSaveModeInfo");
var rmGeneralTileInfo = require("../../../../../app/ts/reusable/rm_general/r_tileinfo/R_TileInfo");
var rmGeneralSystemMonitorInfo = require("../../../../../app/ts/reusable/rm_general/r_systemmonitorinfo/R_SystemMonitorInfo");
var rmGeneralUsageData = require("../../../../../app/ts/reusable/rm_general/r_usagedata/R_UsageData");
var rmGeneralUsagePermissions = require("../../../../../app/ts/reusable/rm_general/r_usagepermissions/R_UsagePermissions");
var rmGeneralDeviceTimerInfo = require("../../../../../app/ts/reusable/rm_general/r_devicetimerinfo/R_DeviceTimerInfo");
var rmGeneralShaProperties = require("../../../../../app/ts/reusable/rm_general/r_shaproperties/R_ShaProperties");
var rmGeneralXmlJsonObject = require("../../../../../app/ts/reusable/rm_general/r_xmljsonobject/R_XmlJsonObject");
var rmGeneralHttpRequest = require("../../../../../app/ts/reusable/rm_general/r_httprequest/R_HttpRequest");
var rmGeneralContentDispositionHeader = require("../../../../../app/ts/reusable/rm_general/r_httprequest/R_ContentDispositionHeader");
var rmGeneralScreenshotOptions = require("../../../../../app/ts/reusable/rm_general/re_screenshotoptions/RE_ScreenshotOptions");
var rmGeneralMonitoringSettings = require("../../../../../app/ts/reusable/rm_general/re_monitoringsettings/RE_MonitoringSettings");
var rmGeneralActivityLogServiceSettings = require("../../rm_general/r_activitylogservicesettings/RE_ActivityLogServiceSettings");
var rmGeneralLiveCommandsSettings = require("../../rm_general/re_livecommands/RE_LiveCommandsSettings");
var rmGeneralServerCommand = require("../../rm_general/re_livecommands/RE_ServerCommand");
var rmStartupSystemSettings = require("../../../../../app/ts/reusable/rm_general/re_systemsettings/RE_SystemSettings");
var rmStartupAudioSettings = require("../../../../../app/ts/reusable/rm_general/re_systemsettings/RE_AudioSettings");
var rmStartupVideoSettings = require("../../../../../app/ts/reusable/rm_general/re_systemsettings/RE_VideoSettings");
var rmStartupTimeSettings = require("../../../../../app/ts/reusable/rm_general/re_systemsettings/RE_TimeSettings");
var rmStartupLanguageSettings = require("../../../../../app/ts/reusable/rm_general/re_systemsettings/RE_LanguageSettings");
var rmStartupSettings = require("../../../../../app/ts/reusable/rm_general/re_systemsettings/RE_StartupSettings");
var rmServerDeviceSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_ServerDeviceSettings");
var rmDeviceSetting = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_DeviceSetting");
var rmSettingsSync = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_SettingsSync");
var rmAppCommunicationSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_AppCommunicationSettings");
var rmMulticastSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_MulticastSettings");
var rmP2PSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_P2PSettings");
var rmClientSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_ClientSettings");
var rmCloudAPISettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_CloudAPISettings");
var rmContentSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_ContentSettings");
var rmPurgeSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_PurgeSettings");
var rmCronSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_CronSettings");
var rmDisplaySettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_DisplaySettings");
var rmHardwareSetts = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_HardwareSettings");
var rmLoggingSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_LoggingSettings");
var rmNetworkLinkSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_NetworkLinkSettings");
var rmEthernetSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_EthernetSettings");
var rmHTTPProxySettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_HTTPProxySettings");
var rmWifiAccessPointSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_WifiAccessPointSettings");
var rmWifiSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_WifiSettings");
var rmNetworkSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_NetworkSettings");
var rmPlatformSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_PlatformSettings");
var rmAudioSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_AudioSettings");
var rmFlashMediaSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_FlashMediaSettings");
var rmPlaybackInteractionSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_PlaybackInteractionSettings");
var rmVODSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_VODSettings");
var rmVideoSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_VideoSettings");
var rmWebPageSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_WebPageSettings");
var rmPlaybackSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_PlaybackSettings");
var rmSecuritySettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_SecuritySettings");
var rmSerialDisplayCommandsSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_SerialDisplayCommandsSettings");
var rmSiteSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_SiteSettings");
var rmDebugSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_DebugSettings");
var rmResetSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_ResetSettings");
var rmSoftwareSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_SoftwareSettings");
var rmSoundSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_SoundSettings");
var rmTimeSyncSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_TimeSyncSettings");
var rmTimeSettings = require("../../../../../app/ts/reusable/rm_general/re_devicesettings/RE_TimeSettings");
var rmServerDeviceSettingsConfiguration = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_settingssync/RE_ServerDeviceSettingsConfiguration");
var rmTimeZoneConvertor = require("../../../../../app/ts/reusable/rm_general/re_timezoneconvertor/RE_TimeZoneConvertor");
var rmGeneralXmlDocument = require("../../../../../app/ts/reusable/rm_general/re_xmlobjects/RE_XmlDocument");
var rmGeneralXmlNode = require("../../../../../app/ts/reusable/rm_general/re_xmlobjects/RE_XmlNode");
var rmGeneralQueue = require("../../../../../app/ts/reusable/rm_general/re_queue/RE_Queue");
var rmGeneralEvent = require("../../../../../app/ts/reusable/rm_general/re_event/RE_Event");
var rmGeneralRandom = require("../../../../../app/ts/reusable/rm_general/re_random/RE_Random");
var rmGeneralDiffusion = require("../../../../../app/ts/reusable/rm_general/re_diffusion/RE_Diffusion");
var rmGeneralParameter = require("../../../../../app/ts/reusable/rm_general/re_parameter/RE_Parameter");
var rmGeneralServiceConstraint = require("../../../../../app/ts/reusable/rm_general/re_serviceconstraint/RE_ServiceConstraint");
var rmGeneralScheduleInfo = require("../../../../../app/ts/reusable/rm_general/re_scheduleinfo/RE_ScheduleInfo");
var rmNonrenderingServicesCronSchedule = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RE_CronSchedule");
var rmNonrenderingServicesCronConfiguration = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RE_CronConfiguration");
var rmRenderingServicesTestConfiguration = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice/RE_TestConfiguration");
var rmRenderingServicesTest2Configuration = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice2/RE_Test2Configuration");
var rmRenderingServicesTest3Configuration = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice3/RE_Test3Configuration");
var rmGeneralHttpHeader = require("../../../../../app/ts/reusable/rm_general/re_httpheader/RE_HttpHeader");
var rmGeneralHttpHeaders = require("../../../../../app/ts/reusable/rm_general/re_httpheaders/RE_HttpHeaders");
var rmPlaybackMoodDefaultHttpHeaders = require("../../../../../app/ts/reusable/rm_playback/re_mooddefaulthttpheaders/RE_MoodDefaultHttpHeaders");
var rmPlaybackHardwareSettings = require("../../../../../app/ts/reusable/rm_playback/r_hardwaresettings/R_HardwareSettings");
var rmPlaybackOpeningHours = require("../../../../../app/ts/reusable/rm_playback/r_openinghours/R_OpeningHours");
var rmPlaybackDayOpeningHours = require("../../../../../app/ts/reusable/rm_playback/r_openinghours/R_DayOpeningHours");
var rmPlaybackScreenSaverConfig = require("../../../../../app/ts/reusable/rm_playback/re_screensaverconfig/RE_ScreenSaverConfig");
var rmGeneralPlaybackGlobalConfig = require("../../../../../app/ts/reusable/rm_playback/re_playbackglobalconfig/RE_PlaybackGlobalConfig");
var rmCoreServicesMainPlaylist = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_MainPlaylist");
var rmCoreServicesTagManager = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_TagManager");
var rmCoreServicesPlaylistItem = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");
var rmCoreServicesPlaylistItemContainer = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Container");
var rmCoreServicesPlaylistItemDesign = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Design");
var rmCoreServicesPlaylistItemDesignZone = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignZone");
var rmCoreServicesPlaylistItemEvent = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Event");
var rmCoreServicesPlaylistItemEvents = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Events");
var rmCoreServicesPlaylistItemFillRect = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_FillRect");
var rmCoreServicesPlaylistItemFlash = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Flash");
var rmCoreServicesPlaylistItemHtmlTemplate = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_HtmlTemplate");
var rmCoreServicesPlaylistItemImage = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Image");
var rmCoreServicesPlaylistItemPlaylist = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Playlist");
var rmCoreServicesPlaylistItemPriorityPlaylist = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylist");
var rmCoreServicesPlaylistItemStream = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Stream");
var rmCoreServicesPlaylistItemScreenSaverImage = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverImage");
var rmCoreServicesPlaylistItemScreenSaverVideo = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverVideo");
var rmCoreServicesPlaylistItemTag = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Tag");
var rmCoreServicesPlaylistItemRealTag = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_RealTag");
var rmCoreServicesPlaylistItemTVPassThrough = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVPassThrough");
var rmCoreServicesPlaylistItemTVTunner = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVTunner");
var rmCoreServicesPlaylistItemVideo = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Video");
var rmCoreServicesPlaylistItemVideoStream = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_VideoStream");
var rmCoreServicesPlaylistItemWebPage = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_WebPage");
var rmCoreServicesMainPlaylistLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_MainPlaylist_Logic");
var rmCoreServicesTagManagerLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_TagManager_Logic");
var rmCoreServicesPlaylistItemLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_Logic");
var rmCoreServicesPlaylistItemContainerLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ContainerLogic");
var rmCoreServicesPlaylistItemDesignLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignLogic");
var rmCoreServicesPlaylistItemDesignZoneLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignZoneLogic");
var rmCoreServicesPlaylistItemDesignMainZoneLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_DesignMainZoneLogic");
var rmCoreServicesPlaylistItemEventLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_EventLogic");
var rmCoreServicesPlaylistItemEventsLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_EventsLogic");
var rmCoreServicesPlaylistItemFillRectLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_FillRectLogic");
var rmCoreServicesPlaylistItemFlashLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_FlashLogic");
var rmCoreServicesPlaylistItemHtmlTemplateLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_HtmlTemplateLogic");
var rmCoreServicesPlaylistItemImageLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ImageLogic");
var rmCoreServicesPlaylistItemPlaylistLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PlaylistLogic");
var rmCoreServicesPlaylistItemPriorityPlaylistLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PriorityPlaylistLogic");
var rmCoreServicesPlaylistItemStreamLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_StreamLogic");
var rmCoreServicesPlaylistItemScreenSaverImageLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverImageLogic");
var rmCoreServicesPlaylistItemScreenSaverVideoLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_ScreenSaverVideoLogic");
var rmCoreServicesPlaylistItemTagLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TagLogic");
var rmCoreServicesPlaylistItemRealTagLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_RealTagLogic");
var rmCoreServicesPlaylistItemTVPassThroughLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVPassThroughLogic");
var rmCoreServicesPlaylistItemTVTunnerLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_TVTunnerLogic");
var rmCoreServicesPlaylistItemVideoLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_VideoLogic");
var rmCoreServicesPlaylistItemVideoStreamLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_VideoStreamLogic");
var rmCoreServicesPlaylistItemWebPageLogic = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_WebPageLogic");
var rmCoreServicesPlaylistItemStatus = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Status");
var rmCoreServicesPlaylistItemStatusDisable = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusDisable");
var rmCoreServicesPlaylistItemStatusEnd = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusEnd");
var rmCoreServicesPlaylistItemStatusError = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusError");
var rmCoreServicesPlaylistItemStatusPlay = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusPlay");
var rmCoreServicesPlaylistItemStatusPlay_List = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusPlay_List");
var rmCoreServicesPlaylistItemStatusPlay_Media = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusPlay_Media");
var rmCoreServicesPlaylistItemStatusRequestToAbort = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbort");
var rmCoreServicesPlaylistItemStatusRequestToAbort_List = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbort_List");
var rmCoreServicesPlaylistItemStatusRequestToAbort_Media = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbort_Media");
var rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay");
var rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_List = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List");
var rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media");
var rmCoreServicesPlaylistItemStatusRequestToEnd = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToEnd");
var rmCoreServicesPlaylistItemStatusRequestToEnd_List = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToEnd_List");
var rmCoreServicesPlaylistItemStatusRequestToEnd_Media = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToEnd_Media");
var rmCoreServicesPlaylistItemStatusRequestToPlay = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay");
var rmCoreServicesPlaylistItemStatusRequestToPlay_List = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay_List");
var rmCoreServicesPlaylistItemStatusRequestToPlay_Media = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToPlay_Media");
var rmCoreServicesPlaylistItemStatusRequestToResume = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToResume");
var rmCoreServicesPlaylistItemStatusRequestToResume_List = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToResume_List");
var rmCoreServicesPlaylistItemStatusRequestToResume_Media = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToResume_Media");
var rmCoreServicesPlaylistItemStatusRequestToSuspend = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToSuspend");
var rmCoreServicesPlaylistItemStatusRequestToSuspend_List = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToSuspend_List");
var rmCoreServicesPlaylistItemStatusRequestToSuspend_Media = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusRequestToSuspend_Media");
var rmCoreServicesPlaylistItemStatusSelectNextChildToPlay = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusSelectNextChildToPlay");
var rmCoreServicesPlaylistItemStatusSuspended = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_StatusSuspended");
var rmCoreServicesPlaylistItemTransition = require("../../../../../app/ts/reusable/rm_coreservices/re_playliststatus/RE_PlaylistItem_Transition");
var rmCoreServicesPlaylistController = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/R_PlaylistController");
var rmCoreServicesRenderingController = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/R_RenderingController");
var rmRenderingServicesHtmlZone = require("../../../../../app/ts/reusable/rm_renderingservices/re_htmlzone/RE_HtmlZone");
var rmRenderingServicesHtmlZonePool = require("../../../../../app/ts/reusable/rm_renderingservices/re_htmlzone/RE_HtmlZonePool");
var rmRenderParametersAllParameters = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_AllParameters");
var rmRenderParametersIdentification = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Identification");
var rmRenderParametersItemPosAndSize = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_ItemPosAndSize");
var rmRenderParametersContainerPosAndSize = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_ContainerPosAndSize");
var rmRenderParametersDuration = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Duration");
var rmRenderParametersBackground = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Background");
var rmRenderParametersImage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Image");
var rmRenderParametersWebImage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebImage");
var rmRenderParametersVideo = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Video");
var rmRenderParametersVideoStream = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_VideoStream");
var rmRenderParametersAudio = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_Audio");
var rmRenderParametersWebPage = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_WebPage");
var rmRenderParametersHtmlTemplate = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_HtmlTemplate");
var rmRenderParametersFillRect = require("../../../../../app/ts/reusable/rm_renderingservices/re_renderparams/RE_RenderParams_FillRect");
var rmControlPrepareParams = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Prepare");
var rmControlPrepareParamsPool = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_PreparePool");
var rmControlRunParams = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Run");
var rmControlRunParamsPool = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_RunPool");
var rmControlStopParams = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Stop");
var rmControlStopParamsPool = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_StopPool");
var rmControlStatusParams = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_Status");
var rmControlStatusParamsPool = require("../../../../../app/ts/reusable/rm_renderingservices/re_controlparams/RE_ControlParams_StatusPool");
var rmPlaylistControllerConfig = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/RE_PlaylistControllerConfig");
var rmRenderingControllerConfig = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/RE_RenderingControllerConfig");
var rmConfigurationServicesPlatformConfigurator = require("../../../../../app/ts/reusable/rm_configurationservices/r_platformconfigurator/R_PlatformConfigurator");
var rmConfigurationServicesServiceLocator = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");
var rmConfigurationServicesServiceContainer = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicecontainer/R_ServiceContainer");
var rmDownloadConfiguration = require("../../../../../app/ts/reusable/rm_transversalservices/rs_downloadservice/RE_DownloadConfiguration");
var rmPlaylistDownloadConfiguration = require("../../../../../app/ts/reusable/rm_coreservices/rs_playlistdownloader/RE_PlaylistDownloadConfiguration");
var rmUpdateSoftwareConfiguration = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_updatesoftware/RE_UpdateSoftwareConfiguration");
var rmConfigurationServices2 = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_FactorySetup_R");
var rmConfigurationServices3 = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_EntityCreation_R");
var rmConfigurationServices4 = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/IImpl_ServiceLocator_ServiceCreation_R");
var rmCoreServicesPlaylistDownloader = require("../../../../../app/ts/reusable/rm_coreservices/rs_playlistdownloader/RS_PlaylistDownloader");
var rmCoreServicesHtmlTemplateDownloader = require("../../../../../app/ts/reusable/rm_coreservices/rs_htmltemplatedownloader/RS_HtmlTemplateDownloader");
var rmTransversalServicesDownloadService = require("../../../../../app/ts/reusable/rm_transversalservices/rs_downloadservice/RS_DownloadService");
var rmNonrenderingServicesUpdateSoftware = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_updatesoftware/RS_UpdateSoftware");
var rmNonrenderingServicesCronService = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RS_CronService");
var rmNonrenderingServicesLiveCommands = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_livecommands/RS_LiveCommands");
var rmNonrenderingServicesVolumeSetup = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_volumesetup/RS_VolumeSetup");
var rmNonrenderingServicesSettingsSync = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_settingssync/RS_SettingsSync");
var rmTransversalActivityLogService = require("../../../../../app/ts/reusable/rm_transversalservices/rs_activitylogservice/RS_ActivityLogService");
var rmNonrenderingServicesMonitoring = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_monitoring/RS_Monitoring");
var rmRenderingServicesScreenshot = require("../../../../../app/ts/reusable/rm_renderingservices/rs_screenshot/RS_Screenshot");
var rmRenderingServicesStartup = require("../../../../../app/ts/reusable/rm_renderingservices/rs_startup/RS_Startup");
var rmRenderingServicesSyncSettingsInterface = require("../../../../../app/ts/reusable/rm_renderingservices/rs_settingssyncinterface/RS_SettingsSyncInterface");
var rmRenderingServicesTestService = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice/RS_TestService");
var rmRenderingServicesTestService2 = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice2/RS_TestService2");
var rmRenderingServicesTestService3 = require("../../../../../app/ts/reusable/rm_renderingservices/rs_testservice3/RS_TestService3");
var rmNonrenderingServicesFileSettingsUpdateConfiguration = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_filesettingsupdate/RE_FileSettingsUpdateConfiguration");
var rmNonrenderingServicesFileSettingsUpdate = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_filesettingsupdate/RS_FileSettingsUpdate");
var rmNonrenderingServicesRebootService = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_rebootservice/RS_RebootService");
var rm_configurationservices;
(function (rm_configurationservices) {
    var R_ServiceLocator = (function (_super) {
        __extends(R_ServiceLocator, _super);
        function R_ServiceLocator(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iFactorySetup = new rmConfigurationServices2.rm_configurationservices.IImpl_ServiceLocator_FactorySetup_R(_this);
            _this._iEntityCreation = new rmConfigurationServices3.rm_configurationservices.IImpl_ServiceLocator_EntityCreation_R(_this);
            _this._iServiceCreation = new rmConfigurationServices4.rm_configurationservices.IImpl_ServiceLocator_ServiceCreation_R(_this);
            _this._srvFactories = _this.createDefaultServiceFactories(error);
            _this._entFactories = _this.createDefaultEntityFactories(error);
            return _this;
        }
        R_ServiceLocator.prototype.injectDependencies = function (aServiceContainer, aServiceLocator, aLogService, error) {
            return 0;
        };
        R_ServiceLocator.prototype.addServiceFactory = function (aServiceFactory, error) {
            return this._srvFactories.addServiceFactory(aServiceFactory, error);
        };
        R_ServiceLocator.prototype.addEntityFactory = function (aEntityFactory, error) {
            return this._entFactories.addEntityFactory(aEntityFactory, error);
        };
        R_ServiceLocator.prototype.createAllStartupServices = function (error) {
            var listSrvFactories = this._srvFactories.getServiceFactories(error);
            var idx = 0;
            for (var _i = 0, listSrvFactories_1 = listSrvFactories; _i < listSrvFactories_1.length; _i++) {
                var aServiceFactory = listSrvFactories_1[_i];
            }
        };
        R_ServiceLocator.prototype.addCreatedServiceFactory = function (aServiceFactory, idxFactory, nbExpectedFactories, error, bTimeOut) {
            document.getElementById("maindiv").innerHTML += "<p>" + idxFactory + ". " + aServiceFactory.getFactoryName() + "</p>";
            this._iFactorySetup.addServiceFactory(aServiceFactory, error);
        };
        R_ServiceLocator.prototype.setupServiceFactories = function (factoryDescriptions, error) {
            var listSrvFactoryDescriptions = factoryDescriptions.getFactoryDescriptions(error);
            var promises = new Array();
            var aSrvLocator = this;
            var idxFactory = 0;
            var nbExpectedFactories = listSrvFactoryDescriptions.length;
            var _loop_1 = function (aServiceFactoryDesc) {
                if (aServiceFactoryDesc._factoryName == "NFactory_SDK_WebOS") {
                    try {
                        require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_webos/NFactory_SDK_WebOS"], function (dynNFactorySDKWebOS) {
                            var aServiceFactory = new dynNFactorySDKWebOS.nm_transversalservices.NFactory_SDK_WebOS(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "NFactory_SDK_Tizen") {
                    try {
                        require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_tizen/NFactory_SDK_Tizen"], function (dynNFactorySDKTizen) {
                            var aServiceFactory = new dynNFactorySDKTizen.nm_transversalservices.NFactory_SDK_Tizen(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "NFactory_SDK_NodeJs") {
                    try {
                        require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_nodejs/NFactory_SDK_NodeJs"], function (dynNFactory_SDK_NodeJs) {
                            var aServiceFactory = new dynNFactory_SDK_NodeJs.nm_transversalservices.NFactory_SDK_NodeJs(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "NFactory_SDK_StandaloneBrowser") {
                    try {
                        require(["../../../../../app/ts/native/nm_transversalservices/n_sdk_standalonebrowser/NFactory_SDK_StandaloneBrowser"], function (dynNFactory_SDK_StandaloneBrowser) {
                            var aServiceFactory = new dynNFactory_SDK_StandaloneBrowser.nm_transversalservices.NFactory_SDK_StandaloneBrowser(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "NFactory_VideoRenderer_WebOS") {
                    try {
                        require(["../../../../../app/ts/native/nm_renderingservices/n_videorenderer_webos/NFactory_VideoRenderer_WebOS"], function (dynNFactory_VideoRenderer_WebOS) {
                            var aServiceFactory = new dynNFactory_VideoRenderer_WebOS.nm_renderingservices.NFactory_VideoRenderer_WebOS(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "NFactory_VideoRenderer_Tizen") {
                    try {
                        require(["../../../../../app/ts/native/nm_renderingservices/n_videorenderer_tizen/NFactory_VideoRenderer_Tizen"], function (dynNFactory_VideoRenderer_Tizen) {
                            var aServiceFactory = new dynNFactory_VideoRenderer_Tizen.nm_renderingservices.NFactory_VideoRenderer_Tizen(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_ImageRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/RFactory_ImageRenderer"], function (dynRFactory_ImageRenderer) {
                            var aServiceFactory = new dynRFactory_ImageRenderer.rm_renderingservices.RFactory_ImageRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_BackgroundRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_backgroundrenderer/RFactory_BackgroundRenderer"], function (dynRFactory_BackgroundRenderer) {
                            var aServiceFactory = new dynRFactory_BackgroundRenderer.rm_renderingservices.RFactory_BackgroundRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_FillRectRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_fillrectrenderer/RFactory_FillRectRenderer"], function (dynRFactory_FillRectRenderer) {
                            var aServiceFactory = new dynRFactory_FillRectRenderer.rm_renderingservices.RFactory_FillRectRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_FlashRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_flashrenderer/RFactory_FlashRenderer"], function (dynRFactory_FlashRenderer) {
                            var aServiceFactory = new dynRFactory_FlashRenderer.rm_renderingservices.RFactory_FlashRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_HtmlRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_htmlrenderer/RFactory_HtmlRenderer"], function (dynRFactory_HtmlRenderer) {
                            var aServiceFactory = new dynRFactory_HtmlRenderer.rm_renderingservices.RFactory_HtmlRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_RenderingZone") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_renderingzone/RFactory_RenderingZone"], function (dynRFactory_RenderingZone) {
                            var aServiceFactory = new dynRFactory_RenderingZone.rm_renderingservices.RFactory_RenderingZone(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_ScreenSaverRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_screensaverrenderer/RFactory_ScreenSaverRenderer"], function (dynRFactory_ScreenSaverRenderer) {
                            var aServiceFactory = new dynRFactory_ScreenSaverRenderer.rm_renderingservices.RFactory_ScreenSaverRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_TvHdmiPassThroughSrv") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_tvhdmipassthroughsrv/RFactory_TvHdmiPassThroughSrv"], function (dynRFactory_TvHdmiPassThroughSrv) {
                            var aServiceFactory = new dynRFactory_TvHdmiPassThroughSrv.rm_renderingservices.RFactory_TvHdmiPassThroughSrv(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_VideoRenderer") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/r_videorenderer/RFactory_VideoRenderer"], function (dynRFactory_VideoRenderer) {
                            var aServiceFactory = new dynRFactory_VideoRenderer.rm_renderingservices.RFactory_VideoRenderer(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_LogService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_transversalservices/r_logservice/RFactory_LogService"], function (dynRFactory_LogService) {
                            var aServiceFactory = new dynRFactory_LogService.rm_transversalservices.RFactory_LogService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_UtilsService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/RFactory_UtilsService"], function (dynRFactory_UtilsService) {
                            var aServiceFactory = new dynRFactory_UtilsService.rm_transversalservices.RFactory_UtilsService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_XmlConfigurator") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/RFactory_XmlConfigurator"], function (dynRFactory_XMLConfigurator) {
                            var aServiceFactory = new dynRFactory_XMLConfigurator.rm_transversalservices.RFactory_XmlConfigurator(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_ChronService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RSFactory_CronService"], function (dynRFactory_CronService) {
                            var aServiceFactory = new dynRFactory_CronService.rm_nonrenderingservices.RSFactory_CronService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_SettingsSyncService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/rs_settingssync/RFactory_SettingsSync"], function (dynRFactory_SettingsSyncService) {
                            var aServiceFactory = new dynRFactory_SettingsSyncService.rm_nonrenderingservices.RFactory_SettingSyncService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_DiagnosticsService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_diagnosticsservice/RFactory_DiagnosticsService"], function (dynRFactory_DiagnosticsService) {
                            var aServiceFactory = new dynRFactory_DiagnosticsService.rm_nonrenderingservices.RFactory_DiagnosticsService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_EnvUpdaterService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_envupdaterservice/RFactory_EnvUpdaterService"], function (dynRFactory_EnvUpdaterService) {
                            var aServiceFactory = new dynRFactory_EnvUpdaterService.rm_nonrenderingservices.RFactory_EnvUpdaterService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_VolumeSetupService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/rs_volumesetup/RFactory_VolumeSetup"], function (dynRFactory_VolumeSetupService) {
                            var aServiceFactory = new dynRFactory_VolumeSetupService.rm_nonrenderingservices.RFactory_VolumeSetupService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_LiveCommandsService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/rs_livecommands/RFactory_LiveCommands"], function (dynRFactory_LiveCommandsService) {
                            var aServiceFactory = new dynRFactory_LiveCommandsService.rm_nonrenderingservices.RFactory_LiveCommandsService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_MonitoringService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_monitoringservice/RFactory_MonitoringService"], function (dynRFactory_MonitoringService) {
                            var aServiceFactory = new dynRFactory_MonitoringService.rm_nonrenderingservices.RFactory_MonitoringService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_ScreenshotService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/rs_screenshot/RFactory_Screenshot"], function (dynRFactory_ScreenshotService) {
                            var aServiceFactory = new dynRFactory_ScreenshotService.rm_renderingservices.RFactory_ScreenshotService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_StartupService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_renderingservices/rs_startup/RFactory_Startup"], function (dynRFactory_StartupService) {
                            var aServiceFactory = new dynRFactory_StartupService.rm_renderingservices.RFactory_StartupService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_PlayerFilesUpdater") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_playerfilesupdater/RFactory_PlayerFilesUpdater"], function (dynRFactory_PlayerFilesUpdater) {
                            var aServiceFactory = new dynRFactory_PlayerFilesUpdater.rm_nonrenderingservices.RFactory_PlayerFilesUpdater(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_PurgeService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_purgeservice/RFactory_PurgeService"], function (dynRFactory_PurgeService) {
                            var aServiceFactory = new dynRFactory_PurgeService.rm_nonrenderingservices.RFactory_PurgeService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_SendLogService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_sendlogservice/RFactory_SendLogService"], function (dynRFactory_SendLogService) {
                            var aServiceFactory2 = new dynRFactory_SendLogService.rm_nonrenderingservices.RFactory_SendLogService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory2, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_StatisticsService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_statisticsservice/RFactory_StatisticsService"], function (dynRFactory_StatisticsService) {
                            var aServiceFactory = new dynRFactory_StatisticsService.rm_nonrenderingservices.RFactory_StatisticsService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_WatchDogService") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_nonrenderingservices/r_watchdogservice/RFactory_WatchDogService"], function (dynRFactory_WatchDogService) {
                            var aServiceFactory = new dynRFactory_WatchDogService.rm_nonrenderingservices.RFactory_WatchDogService(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_PlaylistWatcher") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_coreservices/r_playlistwatcher/RFactory_PlaylistWatcher"], function (dynRFactory_PlaylistWatcher) {
                            var aServiceFactory = new dynRFactory_PlaylistWatcher.rm_coreservices.RFactory_PlaylistWatcher(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_PlaylistDownloader") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_coreservices/r_playlistdownloader/RFactory_PlaylistDownloader"], function (dynRSFactory_PlaylistDownloader) {
                            var aServiceFactory = new dynRSFactory_PlaylistDownloader.rm_coreservices.RSFactory_PlaylistDownloader(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_PlaylistController") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/RFactory_PlaylistController"], function (dynRFactory_PlaylistController) {
                            var aServiceFactory = new dynRFactory_PlaylistController.rm_coreservices.RFactory_PlaylistController(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
                if (aServiceFactoryDesc._factoryName == "RFactory_RenderingController") {
                    try {
                        require(["../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/RFactory_RenderingController"], function (dynRFactory_RenderingController) {
                            var aServiceFactory = new dynRFactory_RenderingController.rm_coreservices.RFactory_RenderingController(aServiceFactoryDesc, error);
                            aSrvLocator.addCreatedServiceFactory(aServiceFactory, ++idxFactory, nbExpectedFactories, error, false);
                        });
                    }
                    catch (e) {
                    }
                }
            };
            for (var _i = 0, listSrvFactoryDescriptions_1 = listSrvFactoryDescriptions; _i < listSrvFactoryDescriptions_1.length; _i++) {
                var aServiceFactoryDesc = listSrvFactoryDescriptions_1[_i];
                _loop_1(aServiceFactoryDesc);
            }
        };
        R_ServiceLocator.prototype.setupEntityFactories = function (factoryDescriptions, error) {
            var listEntFactoryDescriptions = factoryDescriptions.getFactoryDescriptions(error);
            listEntFactoryDescriptions.forEach(function (crtEntFactory, index) {
            });
        };
        R_ServiceLocator.prototype.createEntity = function (entityName, error) {
            this._entFactories.getEntityFactories(error).forEach(function (crtEntFactory, index) {
            });
            return null;
        };
        R_ServiceLocator.prototype.createDefaultError = function () {
            return new rmGeneralError.rm_general.R_Error();
        };
        R_ServiceLocator.startupCreateDefaultError = function () {
            return new rmGeneralError.rm_general.R_Error();
        };
        R_ServiceLocator.prototype.createDefaultContext = function () {
            return new rmGeneralContext.rm_general.R_Context();
        };
        R_ServiceLocator.startupCreateDefaultContext = function () {
            return new rmGeneralContext.rm_general.R_Context();
        };
        R_ServiceLocator.prototype.createDefaultProperty = function (error) {
            return new rmGeneralProperty.rm_general.R_Property();
        };
        R_ServiceLocator.prototype.createDefaultProperties = function (error) {
            return new rmGeneralProperties.rm_general.R_Properties();
        };
        R_ServiceLocator.prototype.createDefaultFactoryDescriptions = function (error) {
            return new rmGeneralFactoryDescriptions.rm_general.R_FactoryDescriptions();
        };
        R_ServiceLocator.prototype.createDefaultFactoryDescription = function (error) {
            return new rmGeneralFactoryDescription.rm_general.R_FactoryDescription();
        };
        R_ServiceLocator.startupCreateDefaultFactoryDescription = function (error) {
            return new rmGeneralFactoryDescription.rm_general.R_FactoryDescription();
        };
        R_ServiceLocator.prototype.createDefaultServiceFactories = function (error) {
            return new rmGeneralServiceFactories.rm_general.R_ServiceFactories();
        };
        R_ServiceLocator.prototype.createDefaultEntityFactories = function (error) {
            return new rmGeneralEntityFactories.rm_general.R_EntityFactories();
        };
        R_ServiceLocator.prototype.createDefaultDateTime = function (error) {
            return new rmGeneralDateTime.rm_general.R_DateTime();
        };
        R_ServiceLocator.prototype.createDefaultTimeZone = function (error) {
            return new rmGeneralTimeZone.rm_general.R_TimeZone();
        };
        R_ServiceLocator.prototype.createDefaultSoundProperties = function (error) {
            return new rmGeneralSoundProperties.rm_general.R_SoundProperties();
        };
        R_ServiceLocator.prototype.createDefaultScreenProperties = function (error) {
            return new rmGeneralScreenProperties.rm_general.R_ScreenProperties();
        };
        R_ServiceLocator.prototype.createDefaultAppServerProperties = function (error) {
            return new rmGeneralAppServerProperties.rm_general.R_AppServerProperties();
        };
        R_ServiceLocator.prototype.createDefaultAppInstallProperties = function (error) {
            return new rmGeneralAppInstallProperties.rm_general.R_AppInstallProperties();
        };
        R_ServiceLocator.prototype.createDefaultFileInfo = function (error) {
            return new rmGeneralFileInfo.rm_general.R_FileInfo();
        };
        R_ServiceLocator.prototype.createDefaultFileTransfer = function (error) {
            return new rmGeneralFileTransfer.rm_general.RE_FileTransfer();
        };
        R_ServiceLocator.prototype.createDefaultNetworkProperties = function (error) {
            return new rmGeneralNetworkProperties.rm_general.R_NetworkProperties();
        };
        R_ServiceLocator.prototype.createDefaultNetworkCardProperties = function (error) {
            return new rmGeneralNetworkCardProperties.rm_general.R_NetworkCardProperties();
        };
        R_ServiceLocator.prototype.createDefaultNetworkProxyProperties = function (error) {
            return new rmGeneralNetworkProxyProperties.rm_general.R_NetworkProxyProperties();
        };
        R_ServiceLocator.prototype.createDefaultWifiConnectionInfo = function (error) {
            return new rmGeneralWifiConnectionInfo.rm_general.R_WifiConnectionInfo();
        };
        R_ServiceLocator.prototype.createDefaultFirmwareProperties = function (error) {
            return new rmGeneralFirmwareProperties.rm_general.R_FirmwareProperties();
        };
        R_ServiceLocator.prototype.createDefaultBeaconInfo = function (error) {
            return new rmGeneralBeaconInfo.rm_general.R_BeaconInfo();
        };
        R_ServiceLocator.prototype.createDefaultEddystoneInfo = function (error) {
            return new rmGeneralEddystoneInfo.rm_general.R_EddystoneInfo();
        };
        R_ServiceLocator.prototype.createDefaultCaptureScreenInfo = function (error) {
            return new rmGeneralCaptureScreenInfo.rm_general.R_CaptureScreenInfo();
        };
        R_ServiceLocator.prototype.createDefaultPlatformInfo = function (error) {
            return new rmGeneralPlatformInfo.rm_general.R_PlatformInfo();
        };
        R_ServiceLocator.prototype.createDefaultSystemUsageInfo = function (error) {
            return new rmGeneralSystemUsageInfo.rm_general.R_SystemUsageInfo();
        };
        R_ServiceLocator.prototype.createDefaultSystemStorageInfo = function (error) {
            return new rmGeneralSystemStorageInfo.rm_general.R_SystemStorageInfo();
        };
        R_ServiceLocator.prototype.createDefaultWifiSoftAppInfo = function (error) {
            return new rmGeneralWifiSoftAppInfo.rm_general.R_WifiSoftAppInfo();
        };
        R_ServiceLocator.prototype.createDefaultFailureModeInfo = function (error) {
            return new rmGeneralFailureModeInfo.rm_general.R_FailureModeInfo();
        };
        R_ServiceLocator.prototype.createDefaultPowerProperties = function (error) {
            return new rmGeneralPowerProperties.rm_general.R_PowerProperties();
        };
        R_ServiceLocator.prototype.createDefaultPowerSaveModeInfo = function (error) {
            return new rmGeneralPowerSaveModeInfo.rm_general.R_PowerSaveModeInfo();
        };
        R_ServiceLocator.prototype.createDefaultTileInfo = function (error) {
            return new rmGeneralTileInfo.rm_general.R_TileInfo();
        };
        R_ServiceLocator.prototype.createDefaultSystemMonitorInfo = function (error) {
            return new rmGeneralSystemMonitorInfo.rm_general.R_SystemMonitorInfo();
        };
        R_ServiceLocator.prototype.createDefaultUsageData = function (error) {
            return new rmGeneralUsageData.rm_general.R_UsageData();
        };
        R_ServiceLocator.prototype.createDefaultUsagePermissions = function (error) {
            return new rmGeneralUsagePermissions.rm_general.R_UsagePermissions();
        };
        R_ServiceLocator.prototype.createDefaultDeviceTimerInfo = function (error) {
            return new rmGeneralDeviceTimerInfo.rm_general.R_DeviceTimerInfo();
        };
        R_ServiceLocator.prototype.createDefaultShaProperties = function (error) {
            return new rmGeneralShaProperties.rm_general.R_ShaProperties();
        };
        R_ServiceLocator.prototype.createDefaultXmlJsonObject = function (error) {
            return new rmGeneralXmlJsonObject.rm_general.R_XmlJsonObject();
        };
        R_ServiceLocator.prototype.createDefaultHttpRequest = function (error) {
            return new rmGeneralHttpRequest.rm_general.R_HttpRequest();
        };
        R_ServiceLocator.prototype.createDefaultContentDispositionHeader = function (error) {
            return new rmGeneralContentDispositionHeader.rm_general.R_ContentDispositionHeader();
        };
        R_ServiceLocator.prototype.createDefaultScreenshotOptions = function (error) {
            return new rmGeneralScreenshotOptions.rm_general.RE_ScreenshotOptions();
        };
        R_ServiceLocator.prototype.createDefaultMonitoringSettings = function (error) {
            return new rmGeneralMonitoringSettings.rm_general.RE_MonitoringSettings();
        };
        R_ServiceLocator.prototype.createDefaultStartupSystemSettings = function (error) {
            return new rmStartupSystemSettings.rm_general.RE_SystemSettings();
        };
        R_ServiceLocator.prototype.createDefaultStartupAudioSettings = function (error) {
            return new rmStartupAudioSettings.rm_general.RE_AudioSettings();
        };
        R_ServiceLocator.prototype.createDefaultStartupVideoSettings = function (error) {
            return new rmStartupVideoSettings.rm_general.RE_VideoSettings();
        };
        R_ServiceLocator.prototype.createDefaultStartupTimeSettings = function (error) {
            return new rmStartupTimeSettings.rm_general.RE_TimeSettings();
        };
        R_ServiceLocator.prototype.createDefaultStartupLanguageSettings = function (error) {
            return new rmStartupLanguageSettings.rm_general.RE_LanguageSettings();
        };
        R_ServiceLocator.prototype.createDefaultTimeZoneConvertor = function (error) {
            return new rmTimeZoneConvertor.rm_general.RE_TimeZoneConvertor();
        };
        R_ServiceLocator.prototype.createDefaultStartupSettings = function (error) {
            return new rmStartupSettings.rm_general.RE_StartupSettings();
        };
        R_ServiceLocator.prototype.createDefaultActivityLogServiceSettings = function (error) {
            return new rmGeneralActivityLogServiceSettings.rm_general.R_ActivityLogServiceSettings();
        };
        R_ServiceLocator.prototype.createDefaultLiveCommandsSettings = function (error) {
            return new rmGeneralLiveCommandsSettings.rm_general.RE_LiveCommandsSettings();
        };
        R_ServiceLocator.prototype.createDefaultServerCommand = function (error) {
            return new rmGeneralServerCommand.rm_general.RE_ServerCommand();
        };
        R_ServiceLocator.prototype.createDefaultServerDeviceSettings = function (error) {
            return new rmServerDeviceSettings.rm_general.RE_ServerDeviceSettings();
        };
        R_ServiceLocator.prototype.createDeviceSetting = function (error) {
            return new rmDeviceSetting.rm_general.RE_DeviceSettings();
        };
        R_ServiceLocator.prototype.createDefaultSettingsSync = function (error) {
            return new rmSettingsSync.rm_general.RE_SettingsSync();
        };
        R_ServiceLocator.prototype.createDefaultAppCommunicationSettings = function (error) {
            return new rmAppCommunicationSettings.rm_general.RE_AppCommunicationSettings();
        };
        R_ServiceLocator.prototype.createDefaultMulticastSettings = function (error) {
            return new rmMulticastSettings.rm_general.RE_MulticastSettings();
        };
        R_ServiceLocator.prototype.createDefaultP2PSettings = function (error) {
            return new rmP2PSettings.rm_general.RE_P2PSettings();
        };
        R_ServiceLocator.prototype.createDefaultClientSettings = function (error) {
            return new rmClientSettings.rm_general.RE_ClientSettings();
        };
        R_ServiceLocator.prototype.createDefaultCloudAPISettings = function (error) {
            return new rmCloudAPISettings.rm_general.RE_CloudAPISettings();
        };
        R_ServiceLocator.prototype.createDefaultContentSettings = function (error) {
            return new rmContentSettings.rm_general.RE_ContentSettings();
        };
        R_ServiceLocator.prototype.createDefaultPurgeSettings = function (error) {
            return new rmPurgeSettings.rm_general.RE_PurgeSettings();
        };
        R_ServiceLocator.prototype.createDefaultCronSettings = function (error) {
            return new rmCronSettings.rm_general.RE_CronSettings();
        };
        R_ServiceLocator.prototype.createDefaultDisplaySettings = function (error) {
            return new rmDisplaySettings.rm_general.RE_DisplaySettings();
        };
        R_ServiceLocator.prototype.createDefaultHardwareSetts = function (error) {
            return new rmHardwareSetts.rm_general.RE_HardwareSettings();
        };
        R_ServiceLocator.prototype.createDefaultLoggingSettings = function (error) {
            return new rmLoggingSettings.rm_general.RE_LoggingSettings();
        };
        R_ServiceLocator.prototype.createDefaultNetworkLinkSettings = function (error) {
            return new rmNetworkLinkSettings.rm_general.RE_NetworkLinkSettings();
        };
        R_ServiceLocator.prototype.createDefaultEthernetSettings = function (error) {
            return new rmEthernetSettings.rm_general.RE_EthernetSettings();
        };
        R_ServiceLocator.prototype.createDefaultHTTPProxySettings = function (error) {
            return new rmHTTPProxySettings.rm_general.RE_HTTPProxySettings();
        };
        R_ServiceLocator.prototype.createDefaultWifiAccessPointSettings = function (error) {
            return new rmWifiAccessPointSettings.rm_general.RE_WifiAccessPointSettings();
        };
        R_ServiceLocator.prototype.createDefaultWifiSettings = function (error) {
            return new rmWifiSettings.rm_general.RE_WifiSettings();
        };
        R_ServiceLocator.prototype.createDefaultNetworkSettings = function (error) {
            return new rmNetworkSettings.rm_general.RE_NetworkSettings();
        };
        R_ServiceLocator.prototype.createDefaultPlatformSettings = function (error) {
            return new rmPlatformSettings.rm_general.RE_PlatformSettings();
        };
        R_ServiceLocator.prototype.createDefaultAudioSettings = function (error) {
            return new rmAudioSettings.rm_general.RE_AudioSettings();
        };
        R_ServiceLocator.prototype.createDefaultFlashMediaSettings = function (error) {
            return new rmFlashMediaSettings.rm_general.RE_FlashMediaSettings();
        };
        R_ServiceLocator.prototype.createDefaultPlaybackInteractionSettings = function (error) {
            return new rmPlaybackInteractionSettings.rm_general.RE_PlaybackInteractionSettings();
        };
        R_ServiceLocator.prototype.createDefaultVODSettings = function (error) {
            return new rmVODSettings.rm_general.RE_VODSettings();
        };
        R_ServiceLocator.prototype.createDefaultVideoSettings = function (error) {
            return new rmVideoSettings.rm_general.RE_VideoSettings();
        };
        R_ServiceLocator.prototype.createDefaultWebPageSettings = function (error) {
            return new rmWebPageSettings.rm_general.RE_WebPageSettings();
        };
        R_ServiceLocator.prototype.createDefaultPlaybackSettings = function (error) {
            return new rmPlaybackSettings.rm_general.RE_PlaybackSettings();
        };
        R_ServiceLocator.prototype.createDefaultSecuritySettings = function (error) {
            return new rmSecuritySettings.rm_general.RE_SecuritySettings();
        };
        R_ServiceLocator.prototype.createDefaultSerialDisplayCommandsSettings = function (error) {
            return new rmSerialDisplayCommandsSettings.rm_general.RE_SerialDisplayCommandsSettings();
        };
        R_ServiceLocator.prototype.createDefaultSiteSettings = function (error) {
            return new rmSiteSettings.rm_general.RE_SiteSettings();
        };
        R_ServiceLocator.prototype.createDefaultDebugSettings = function (error) {
            return new rmDebugSettings.rm_general.RE_DebugSettings();
        };
        R_ServiceLocator.prototype.createDefaultResetSettings = function (error) {
            return new rmResetSettings.rm_general.RE_ResetSettings();
        };
        R_ServiceLocator.prototype.createDefaultSoftwareSettings = function (error) {
            return new rmSoftwareSettings.rm_general.RE_SoftwareSettings();
        };
        R_ServiceLocator.prototype.createDefaultSoundSettings = function (error) {
            return new rmSoundSettings.rm_general.RE_SoundSettings();
        };
        R_ServiceLocator.prototype.createDefaultTimeSyncSettings = function (error) {
            return new rmTimeSyncSettings.rm_general.RE_TimeSyncSettings();
        };
        R_ServiceLocator.prototype.createDefaultTimeSettings = function (error) {
            return new rmTimeSettings.rm_general.RE_TimeSettings();
        };
        R_ServiceLocator.prototype.createDefaultServerDeviceSettingsConfiguration = function (error) {
            return new rmServerDeviceSettingsConfiguration.rm_general.RE_ServerDeviceSettingsConfiguration();
        };
        R_ServiceLocator.prototype.createDefaultXmlDocument = function (error) {
            return new rmGeneralXmlDocument.rm_general.RE_XmlDocument();
        };
        R_ServiceLocator.prototype.createDefaultXmlNode = function (error) {
            return new rmGeneralXmlNode.rm_general.RE_XmlNode();
        };
        R_ServiceLocator.prototype.createDefaultQueue = function (error) {
            return new rmGeneralQueue.rm_general.RE_Queue();
        };
        R_ServiceLocator.prototype.createDefaultEvent = function (error) {
            return new rmGeneralEvent.rm_general.RE_Event();
        };
        R_ServiceLocator.prototype.createDefaultRandom = function (error) {
            return new rmGeneralRandom.rm_general.RE_Random();
        };
        R_ServiceLocator.prototype.createDefaultDiffusion = function (error) {
            return new rmGeneralDiffusion.rm_general.RE_Diffusion();
        };
        R_ServiceLocator.prototype.createDefaultParameter = function (error) {
            return new rmGeneralParameter.rm_general.RE_Parameter();
        };
        R_ServiceLocator.prototype.createDefaultServiceConstraint = function (error) {
            return new rmGeneralServiceConstraint.rm_general.RE_ServiceConstraint();
        };
        R_ServiceLocator.prototype.createDefaultScheduleInfo = function (error) {
            return new rmGeneralScheduleInfo.rm_general.RE_ScheduleInfo();
        };
        R_ServiceLocator.prototype.createDefaultCronSchedule = function (error) {
            return new rmNonrenderingServicesCronSchedule.rm_nonrenderingservices.RE_CronSchedule();
        };
        R_ServiceLocator.prototype.createDefaultCronConfiguration = function (error) {
            return new rmNonrenderingServicesCronConfiguration.rm_nonrenderingservices.RE_CronConfiguration();
        };
        R_ServiceLocator.prototype.createDefaultTestConfiguration = function (error) {
            return new rmRenderingServicesTestConfiguration.rm_renderingservices.RE_TestConfiguration();
        };
        R_ServiceLocator.prototype.createDefaultTest2Configuration = function (error) {
            return new rmRenderingServicesTest2Configuration.rm_renderingservices.RE_Test2Configuration();
        };
        R_ServiceLocator.prototype.createDefaultTest3Configuration = function (error) {
            return new rmRenderingServicesTest3Configuration.rm_renderingservices.RE_Test3Configuration();
        };
        R_ServiceLocator.prototype.createDefaultFileSettingsUpdateConfiguration = function (error) {
            return new rmNonrenderingServicesFileSettingsUpdateConfiguration.rm_nonrenderingservices.RE_FileSettingsUpdateConfiguration();
        };
        R_ServiceLocator.prototype.createDefaultHttpHeader = function (error) {
            return new rmGeneralHttpHeader.rm_general.RE_HttpHeader();
        };
        R_ServiceLocator.prototype.createDefaultHttpHeaders = function (error) {
            return new rmGeneralHttpHeaders.rm_general.RE_HttpHeaders();
        };
        R_ServiceLocator.prototype.createHttpHeaders = function (strDefaultHttpHeadersSetName, error) {
            if (strDefaultHttpHeadersSetName == "mood_default_http_headers_set")
                return this.createDefaultMoodDefaultHttpHeaders(error);
            return this.createDefaultHttpHeaders(error);
        };
        R_ServiceLocator.prototype.createDefaultMoodDefaultHttpHeaders = function (error) {
            return new rmPlaybackMoodDefaultHttpHeaders.rm_playback.RE_MoodDefaultHttpHeaders();
        };
        R_ServiceLocator.prototype.createDefaultHardwareSettings = function (error) {
            return new rmPlaybackHardwareSettings.rm_playback.R_HardwareSettings();
        };
        R_ServiceLocator.prototype.createDefaultOpeningHours = function (error) {
            return new rmPlaybackOpeningHours.rm_playback.R_OpeningHours();
        };
        R_ServiceLocator.prototype.createDefaultDayOpeningHours = function (error) {
            return new rmPlaybackDayOpeningHours.rm_playback.R_DayOpeningHours();
        };
        R_ServiceLocator.prototype.createDefaultScreenSaverConfig = function (error) {
            return new rmPlaybackScreenSaverConfig.rm_playback.RE_ScreenSaverConfig();
        };
        R_ServiceLocator.prototype.createDefaultPlaybackGlobalConfig = function (error) {
            return new rmGeneralPlaybackGlobalConfig.rm_playback.RE_PlaybackGlobalConfig();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem = function (error) {
            return new rmCoreServicesPlaylistItem.rm_coreservices.RE_PlaylistItem();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_Container = function (error) {
            return new rmCoreServicesPlaylistItemContainer.rm_coreservices.RE_PlaylistItem_Container();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_Design = function (error) {
            return new rmCoreServicesPlaylistItemDesign.rm_coreservices.RE_PlaylistItem_Design();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_DesignZone = function (error) {
            return new rmCoreServicesPlaylistItemDesignZone.rm_coreservices.RE_PlaylistItem_DesignZone();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_Event = function (error) {
            return new rmCoreServicesPlaylistItemEvent.rm_coreservices.RE_PlaylistItem_Event();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_Events = function (error) {
            return new rmCoreServicesPlaylistItemEvents.rm_coreservices.RE_PlaylistItem_Events();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_FillRect = function (error) {
            return new rmCoreServicesPlaylistItemFillRect.rm_coreservices.RE_PlaylistItem_FillRect();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_Flash = function (error) {
            return new rmCoreServicesPlaylistItemFlash.rm_coreservices.RE_PlaylistItem_Flash();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_HtmlTemplate = function (error) {
            return new rmCoreServicesPlaylistItemHtmlTemplate.rm_coreservices.RE_PlaylistItem_HtmlTemplate();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_Image = function (error) {
            return new rmCoreServicesPlaylistItemImage.rm_coreservices.RE_PlaylistItem_Image();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_Playlist = function (error) {
            return new rmCoreServicesPlaylistItemPlaylist.rm_coreservices.RE_PlaylistItem_Playlist();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_PriorityPlaylist = function (error) {
            return new rmCoreServicesPlaylistItemPriorityPlaylist.rm_coreservices.RE_PlaylistItem_PriorityPlaylist();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_Stream = function (error) {
            return new rmCoreServicesPlaylistItemStream.rm_coreservices.RE_PlaylistItem_Stream();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_ScreenSaverImage = function (error) {
            return new rmCoreServicesPlaylistItemScreenSaverImage.rm_coreservices.RE_PlaylistItem_ScreenSaverImage();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_ScreenSaverVideo = function (error) {
            return new rmCoreServicesPlaylistItemScreenSaverVideo.rm_coreservices.RE_PlaylistItem_ScreenSaverVideo();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_Tag = function (error) {
            return new rmCoreServicesPlaylistItemTag.rm_coreservices.RE_PlaylistItem_Tag();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_RealTag = function (error) {
            return new rmCoreServicesPlaylistItemRealTag.rm_coreservices.RE_PlaylistItem_RealTag();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_TVPassThrough = function (error) {
            return new rmCoreServicesPlaylistItemTVPassThrough.rm_coreservices.RE_PlaylistItem_TVPassThrough();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_TVTunner = function (error) {
            return new rmCoreServicesPlaylistItemTVTunner.rm_coreservices.RE_PlaylistItem_TVTunner();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_Video = function (error) {
            return new rmCoreServicesPlaylistItemVideo.rm_coreservices.RE_PlaylistItem_Video();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_VideoStream = function (error) {
            return new rmCoreServicesPlaylistItemVideoStream.rm_coreservices.RE_PlaylistItem_VideoStream();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_WebPage = function (error) {
            return new rmCoreServicesPlaylistItemWebPage.rm_coreservices.RE_PlaylistItem_WebPage();
        };
        R_ServiceLocator.prototype.createDefaultMainPlaylist = function (error) {
            return new rmCoreServicesMainPlaylist.rm_coreservices.RE_MainPlaylist();
        };
        R_ServiceLocator.prototype.createDefaultTagManager = function (error) {
            return new rmCoreServicesTagManager.rm_coreservices.RE_TagManager();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemLogic.rm_coreservices.RE_PlaylistItem_Logic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_ContainerLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemContainerLogic.rm_coreservices.RE_PlaylistItem_ContainerLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_DesignLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemDesignLogic.rm_coreservices.RE_PlaylistItem_DesignLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_DesignZoneLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemDesignZoneLogic.rm_coreservices.RE_PlaylistItem_DesignZoneLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_DesignMainZoneLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemDesignMainZoneLogic.rm_coreservices.RE_PlaylistItem_DesignMainZoneLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_EventLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemEventLogic.rm_coreservices.RE_PlaylistItem_EventLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_EventsLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemEventsLogic.rm_coreservices.RE_PlaylistItem_EventsLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_FillRectLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemFillRectLogic.rm_coreservices.RE_PlaylistItem_FillRectLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_FlashLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemFlashLogic.rm_coreservices.RE_PlaylistItem_FlashLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_HtmlTemplateLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemHtmlTemplateLogic.rm_coreservices.RE_PlaylistItem_HtmlTemplateLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_ImageLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemImageLogic.rm_coreservices.RE_PlaylistItem_ImageLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_PlaylistLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemPlaylistLogic.rm_coreservices.RE_PlaylistItem_PlaylistLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_PriorityPlaylistLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemPriorityPlaylistLogic.rm_coreservices.RE_PlaylistItem_PriorityPlaylistLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_StreamLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemStreamLogic.rm_coreservices.RE_PlaylistItem_StreamLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_ScreenSaverImageLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemScreenSaverImageLogic.rm_coreservices.RE_PlaylistItem_ScreenSaverImageLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_ScreenSaverVideoLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemScreenSaverVideoLogic.rm_coreservices.RE_PlaylistItem_ScreenSaverVideoLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_TagLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemTagLogic.rm_coreservices.RE_PlaylistItem_TagLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_RealTagLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemRealTagLogic.rm_coreservices.RE_PlaylistItem_RealTagLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_TVPassThroughLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemTVPassThroughLogic.rm_coreservices.RE_PlaylistItem_TVPassThroughLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_TVTunnerLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemTVTunnerLogic.rm_coreservices.RE_PlaylistItem_TVTunnerLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_VideoLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemVideoLogic.rm_coreservices.RE_PlaylistItem_VideoLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_VideoStreamLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemVideoStreamLogic.rm_coreservices.RE_PlaylistItem_VideoStreamLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItem_WebPageLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesPlaylistItemWebPageLogic.rm_coreservices.RE_PlaylistItem_WebPageLogic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultMainPlaylistLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesMainPlaylistLogic.rm_coreservices.RE_MainPlaylist_Logic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultTagManagerLogic = function (error) {
            var aPlaylistItemLogic = new rmCoreServicesTagManagerLogic.rm_coreservices.RE_TagManager_Logic();
            aPlaylistItemLogic.injectDependencies(this._iService.getServiceContainer(), this, null, error);
            return aPlaylistItemLogic;
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatus = function (error) {
            return new rmCoreServicesPlaylistItemStatus.rm_coreservices.RE_PlaylistItem_Status();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusDisable = function (error) {
            return new rmCoreServicesPlaylistItemStatusDisable.rm_coreservices.RE_PlaylistItem_StatusDisable();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusEnd = function (error) {
            return new rmCoreServicesPlaylistItemStatusEnd.rm_coreservices.RE_PlaylistItem_StatusEnd();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusError = function (error) {
            return new rmCoreServicesPlaylistItemStatusError.rm_coreservices.RE_PlaylistItem_StatusError();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusPlay = function (error) {
            return new rmCoreServicesPlaylistItemStatusPlay.rm_coreservices.RE_PlaylistItem_StatusPlay();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusPlay_List = function (error) {
            return new rmCoreServicesPlaylistItemStatusPlay_List.rm_coreservices.RE_PlaylistItem_StatusPlay_List();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusPlay_Media = function (error) {
            return new rmCoreServicesPlaylistItemStatusPlay_Media.rm_coreservices.RE_PlaylistItem_StatusPlay_Media();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbort = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToAbort.rm_coreservices.RE_PlaylistItem_StatusRequestToAbort();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbort_List = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToAbort_List.rm_coreservices.RE_PlaylistItem_StatusRequestToAbort_List();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbort_Media = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToAbort_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToAbort_Media();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_List = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_List.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_Media();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToEnd = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToEnd.rm_coreservices.RE_PlaylistItem_StatusRequestToEnd();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToEnd_List = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToEnd_List.rm_coreservices.RE_PlaylistItem_StatusRequestToEnd_List();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToEnd_Media = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToEnd_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToEnd_Media();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToPlay = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToPlay.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToPlay_List = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToPlay_List.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay_List();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToPlay_Media = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToPlay_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToPlay_Media();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToResume = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToResume.rm_coreservices.RE_PlaylistItem_StatusRequestToResume();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToResume_List = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToResume_List.rm_coreservices.RE_PlaylistItem_StatusRequestToResume_List();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToResume_Media = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToResume_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToResume_Media();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToSuspend = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToSuspend.rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToSuspend_List = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToSuspend_List.rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend_List();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusRequestToSuspend_Media = function (error) {
            return new rmCoreServicesPlaylistItemStatusRequestToSuspend_Media.rm_coreservices.RE_PlaylistItem_StatusRequestToSuspend_Media();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusSelectNextChildToPlay = function (error) {
            return new rmCoreServicesPlaylistItemStatusSelectNextChildToPlay.rm_coreservices.RE_PlaylistItem_StatusSelectNextChildToPlay();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemStatusSuspended = function (error) {
            return new rmCoreServicesPlaylistItemStatusSuspended.rm_coreservices.RE_PlaylistItem_StatusSuspended();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistItemTransition = function (error) {
            return new rmCoreServicesPlaylistItemTransition.rm_coreservices.RE_PlaylistItem_Transition();
        };
        R_ServiceLocator.prototype.createDefaultHtmlZone = function (error) {
            return new rmRenderingServicesHtmlZone.rm_renderingservices.RE_HtmlZone();
        };
        R_ServiceLocator.prototype.createDefaultHtmlZonePool = function (error) {
            return new rmRenderingServicesHtmlZonePool.rm_renderingservices.RE_HtmlZonePool();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsAllParameters = function (error) {
            return new rmRenderParametersAllParameters.rm_renderingservices.RE_RenderParams_AllParameters();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsIdentification = function (error) {
            return new rmRenderParametersIdentification.rm_renderingservices.RE_RenderParams_Identification();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsItemPosAndSize = function (error) {
            return new rmRenderParametersItemPosAndSize.rm_renderingservices.RE_RenderParams_ItemPosAndSize();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsContainerPosAndSize = function (error) {
            return new rmRenderParametersContainerPosAndSize.rm_renderingservices.RE_RenderParams_ContainerPosAndSize();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsDuration = function (error) {
            return new rmRenderParametersDuration.rm_renderingservices.RE_RenderParams_Duration();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsBackground = function (error) {
            return new rmRenderParametersBackground.rm_renderingservices.RE_RenderParams_Background();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsImage = function (error) {
            return new rmRenderParametersImage.rm_renderingservices.RE_RenderParams_Image();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsWebImage = function (error) {
            return new rmRenderParametersWebImage.rm_renderingservices.RE_RenderParams_WebImage();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsVideo = function (error) {
            return new rmRenderParametersVideo.rm_renderingservices.RE_RenderParams_Video();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsVideoStream = function (error) {
            return new rmRenderParametersVideoStream.rm_renderingservices.RE_RenderParams_VideoStream();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsAudio = function (error) {
            return new rmRenderParametersAudio.rm_renderingservices.RE_RenderParams_Audio();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsWebPage = function (error) {
            return new rmRenderParametersWebPage.rm_renderingservices.RE_RenderParams_WebPage();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsHtmlTemplate = function (error) {
            return new rmRenderParametersHtmlTemplate.rm_renderingservices.RE_RenderParams_HtmlTemplate();
        };
        R_ServiceLocator.prototype.createDefaultRenderParamsFillRect = function (error) {
            return new rmRenderParametersFillRect.rm_renderingservices.RE_RenderParams_FillRect();
        };
        R_ServiceLocator.prototype.createDefaultControlPrepareParams = function (error) {
            return new rmControlPrepareParams.rm_renderingservices.RE_ControlParams_Prepare();
        };
        R_ServiceLocator.prototype.createDefaultControlPrepareParamsPool = function (error) {
            return new rmControlPrepareParamsPool.rm_renderingservices.RE_ControlParams_PreparePool();
        };
        R_ServiceLocator.prototype.createDefaultControlRunParams = function (error) {
            return new rmControlRunParams.rm_renderingservices.RE_ControlParams_Run();
        };
        R_ServiceLocator.prototype.createDefaultControlRunParamsPool = function (error) {
            return new rmControlRunParamsPool.rm_renderingservices.RE_ControlParams_RunPool();
        };
        R_ServiceLocator.prototype.createDefaultControlStopParams = function (error) {
            return new rmControlStopParams.rm_renderingservices.RE_ControlParams_Stop();
        };
        R_ServiceLocator.prototype.createDefaultControlStopParamsPool = function (error) {
            return new rmControlStopParamsPool.rm_renderingservices.RE_ControlParams_StopPool();
        };
        R_ServiceLocator.prototype.createDefaultControlStatusParams = function (error) {
            return new rmControlStatusParams.rm_renderingservices.RE_ControlParams_Status();
        };
        R_ServiceLocator.prototype.createDefaultControlStatusParamsPool = function (error) {
            return new rmControlStatusParamsPool.rm_renderingservices.RE_ControlParams_StatusPool();
        };
        R_ServiceLocator.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
            this._srvFactories.getServiceFactories(error).forEach(function (crtSrvFactory, index) {
            });
            return null;
        };
        R_ServiceLocator.prototype.createDefaultServices = function (error) {
            return new rmGeneralServices.rm_general.R_Services();
        };
        R_ServiceLocator.startupCreateDefaultServices = function (error) {
            return new rmGeneralServices.rm_general.R_Services();
        };
        R_ServiceLocator.startupCreateDefaultServiceContainer = function (error) {
            var aNewServiceContainer;
            var aServiceContainer;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_ServiceContainer", "R_ServiceContainer", "A_ServiceContainer", "R_ServiceContainer_1");
            var aLogService = null;
            aServiceContainer = null;
            aNewServiceContainer = new rmConfigurationServicesServiceContainer.rm_configurationservices.R_ServiceContainer(aFactoryDescription, aServiceContainer, aLogService, error);
            return aNewServiceContainer;
        };
        R_ServiceLocator.startupCreateDefaultPlatformConfigurator = function (aServiceContainer, error) {
            var aNewPlatformConfigurator;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_PlatformConfigurator", "R_PlatformConfigurator", "A_PlatformConfigurator", "R_PlatformConfigurator_1");
            var aLogService = null;
            aNewPlatformConfigurator = new rmConfigurationServicesPlatformConfigurator.rm_configurationservices.R_PlatformConfigurator(aFactoryDescription, aServiceContainer, aLogService, error);
            return aNewPlatformConfigurator;
        };
        R_ServiceLocator.startupCreateDefaultServiceLocator = function (aServiceContainer, error) {
            var aNewServiceLocator;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_ServiceLocator", "R_ServiceLocator", "A_ServiceLocator", "R_ServiceLocator_1");
            var aLogService = null;
            aNewServiceLocator = new rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator(aFactoryDescription, aServiceContainer, aLogService, error);
            return aNewServiceLocator;
        };
        R_ServiceLocator.prototype.createDefaultService_RenderingZone = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewRenderingZone;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_RenderingZone", "R_RenderingZone", "A_RenderingZone", "" + id);
            var aLogService = null;
            aNewRenderingZone = new rmRenderingServicesRenderingZone.rm_renderingservices.R_RenderingZone(aFactoryDescription, aServiceContainer, aLogService, error);
            return aNewRenderingZone;
        };
        R_ServiceLocator.prototype.createDefaultService_VideoRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewVideoRenderer;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_VideoRenderer", "R_VideoRenderer", "AVideoRenderer", "" + id);
            var aLogService = null;
            aNewVideoRenderer = new rmRenderingServicesVideoRenderer.rm_renderingservices.R_VideoRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewVideoRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewVideoRenderer;
        };
        R_ServiceLocator.prototype.createDefaultService_VideoStreamRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewVideoStreamRenderer;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_VideoStreamRenderer", "R_VideoStreamRenderer", "AVideoStreamRenderer", "" + id);
            var aLogService = null;
            aNewVideoStreamRenderer = new rmRenderingServicesVideoStreamRenderer.rm_renderingservices.R_VideoStreamRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewVideoStreamRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewVideoStreamRenderer;
        };
        R_ServiceLocator.prototype.createDefaultService_ImageRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewImageRenderer;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_ImageRenderer", "R_ImageRenderer", "AImageRenderer", "" + id);
            var aLogService = null;
            aNewImageRenderer = new rmRenderingServicesImageRenderer.rm_renderingservices.R_ImageRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewImageRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewImageRenderer;
        };
        R_ServiceLocator.prototype.createDefaultService_HtmlRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewHtmlRenderer;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_HtmlRenderer", "R_HtmlRenderer", "AHtmlRenderer", "" + id);
            var aLogService = null;
            aNewHtmlRenderer = new rmRenderingServicesHtmlRenderer.rm_renderingservices.R_HtmlRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewHtmlRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewHtmlRenderer;
        };
        R_ServiceLocator.prototype.createDefaultService_HtmlTemplateRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewHtmlTemplateRenderer;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_HtmlTemplateRenderer", "R_HtmlTemplateRenderer", "AHtmlTemplateRenderer", "" + id);
            var aLogService = null;
            aNewHtmlTemplateRenderer = new rmRenderingServicesHtmlTemplateRenderer.rm_renderingservices.R_HtmlTemplateRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewHtmlTemplateRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewHtmlTemplateRenderer;
        };
        R_ServiceLocator.prototype.createDefaultService_FlashRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewFlashRenderer;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_FlashRenderer", "R_FlashRenderer", "AFlashRenderer", "" + id);
            var aLogService = null;
            aNewFlashRenderer = new rmRenderingServicesFlashRenderer.rm_renderingservices.R_FlashRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewFlashRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewFlashRenderer;
        };
        R_ServiceLocator.prototype.createDefaultService_FillRectRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewFillRectRenderer;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_FillRectRenderer", "R_FillRectRenderer", "AFillRectRenderer", "" + id);
            var aLogService = null;
            aNewFillRectRenderer = new rmRenderingServicesFillRectRenderer.rm_renderingservices.R_FillRectRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewFillRectRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewFillRectRenderer;
        };
        R_ServiceLocator.prototype.createDefaultService_ScreenSaverRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewScreenSaverRenderer;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_ScreenSaverRenderer", "R_ScreenSaverRenderer", "AScreenSaverRenderer", "" + id);
            var aLogService = null;
            aNewScreenSaverRenderer = new rmRenderingServicesScreenSaverRenderer.rm_renderingservices.R_ScreenSaverRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewScreenSaverRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewScreenSaverRenderer;
        };
        R_ServiceLocator.prototype.createDefaultService_TvHdmiPassThroughSrv = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewTvHdmiPassThroughSrv;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_TvHdmiPassThroughSrv", "R_TvHdmiPassThroughSrv", "ATvHdmiPassThroughSrv", "" + id);
            var aLogService = null;
            aNewTvHdmiPassThroughSrv = new rmRenderingServicesTvHdmiPassThroughSrv.rm_renderingservices.R_TvHdmiPassThroughSrv(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewTvHdmiPassThroughSrv._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewTvHdmiPassThroughSrv;
        };
        R_ServiceLocator.prototype.createDefaultService_BackgroundRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewBackgroundRenderer;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_BackgroundRenderer", "R_BackgroundRenderer", "ABackgroundRenderer", "" + id);
            var aLogService = null;
            aNewBackgroundRenderer = new rmRenderingServicesBackgroundRenderer.rm_renderingservices.R_BackgroundRenderer(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewBackgroundRenderer._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewBackgroundRenderer;
        };
        R_ServiceLocator.prototype.createDefaultService_PlaylistController = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewPlaylistController;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_PlaylistController", "R_PlaylistController", "A_PlaylistController", "" + id);
            var aLogService = null;
            aNewPlaylistController = new rmCoreServicesPlaylistController.rm_coreservices.R_PlaylistController(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewPlaylistController._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewPlaylistController;
        };
        R_ServiceLocator.prototype.createDefaultService_RenderingController = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewRenderingController;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("AFactory_RenderingController", "R_RenderingController", "A_RenderingController", "" + id);
            var aLogService = null;
            aNewRenderingController = new rmCoreServicesRenderingController.rm_coreservices.R_RenderingController(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewRenderingController._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewRenderingController;
        };
        R_ServiceLocator.prototype.createDefaultService_PlaylistDownloader = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewPlaylistDownloader;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_PlaylistDownloader", "RS_PlaylistDownloader", "AS_PlaylistDownloader", "" + id);
            var aLogService = null;
            aNewPlaylistDownloader = new rmCoreServicesPlaylistDownloader.rm_coreservices.RS_PlaylistDownloader(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewPlaylistDownloader._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewPlaylistDownloader;
        };
        R_ServiceLocator.prototype.createDefaultService_HtmlTemplateDownloader = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewHtmlTemplateDownloader;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_HtmlTemplateDownloader", "RS_HtmlTemplateDownloader", "AS_HtmlTemplateDownloader", "" + id);
            var aLogService = null;
            aNewHtmlTemplateDownloader = new rmCoreServicesHtmlTemplateDownloader.rm_coreservices.RS_HtmlTemplateDownloader(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewHtmlTemplateDownloader._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewHtmlTemplateDownloader;
        };
        R_ServiceLocator.prototype.createDefaultService_DownloadService = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewDownloadService;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_DownloadService", "RS_DownloadService", "AS_DownloadService", "" + id);
            var aLogService = null;
            aNewDownloadService = new rmTransversalServicesDownloadService.rm_transversalservices.RS_DownloadService(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewDownloadService._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewDownloadService;
        };
        R_ServiceLocator.prototype.createDefaultService_UpdateSoftware = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewUpdateSoftware;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_UpdateSoftware", "RS_UpdateSoftware", "AS_UpdateSoftware", "" + id);
            var aLogService = null;
            aNewUpdateSoftware = new rmNonrenderingServicesUpdateSoftware.rm_nonrenderingservices.RS_UpdateSoftware(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewUpdateSoftware._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewUpdateSoftware;
        };
        R_ServiceLocator.prototype.createDefaultService_Monitoring = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewMonitoring;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_Monitoring", "RS_Monitoring", "AS_Monitoring", "" + id);
            var aLogService = null;
            aNewMonitoring = new rmNonrenderingServicesMonitoring.rm_nonrenderingservices.RS_MonitoringService(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewMonitoring._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewMonitoring;
        };
        R_ServiceLocator.prototype.createDefaultService_Screenshot = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewScreenshot;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_Screenshot", "RS_Screenshot", "AS_Screenshot", "" + id);
            var aLogService = null;
            aNewScreenshot = new rmRenderingServicesScreenshot.rm_renderingservices.RS_ScreenshotService(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewScreenshot._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewScreenshot;
        };
        R_ServiceLocator.prototype.createDefaultService_Startup = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewStartup;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_Startup", "RS_Startup", "AS_Startup", "" + id);
            var aLogService = null;
            aNewStartup = new rmRenderingServicesStartup.rm_renderingservices.RS_StartupService(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewStartup._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewStartup;
        };
        R_ServiceLocator.prototype.createDefaultService_VolumeSetup = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewVolumeSetup;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_VolumeSetup", "RS_VolumeSetup", "AS_VolumeSetup", "" + id);
            var aLogService = null;
            aNewVolumeSetup = new rmNonrenderingServicesVolumeSetup.rm_nonrenderingservices.RS_VolumeSetupService(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewVolumeSetup._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewVolumeSetup;
        };
        R_ServiceLocator.prototype.createDefaultService_LiveCommands = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewLiveCommands;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_LiveCommands", "RS_LiveCommands", "AS_LiveCommands", "" + id);
            var aLogService = null;
            aNewLiveCommands = new rmNonrenderingServicesLiveCommands.rm_nonrenderingservices.RS_LiveCommandsService(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewLiveCommands._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewLiveCommands;
        };
        R_ServiceLocator.prototype.createDefaultService_ActivityLogService = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aNewActivityLogService;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_ActivityLogService", "RS_ActivityLogService", "AS_ActivityLogService", "" + id);
            var aLogService = null;
            aNewActivityLogService = new rmTransversalActivityLogService.rm_transversalservices.RS_ActivityLogService(aFactoryDescription, aServiceContainer, aLogService, error);
            aNewActivityLogService._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aNewActivityLogService;
        };
        R_ServiceLocator.prototype.createDefaultService_CronService = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aCronService;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_CronService", "RS_CronService", "AS_CronService", "" + id);
            var aLogService = null;
            aCronService = new rmNonrenderingServicesCronService.rm_nonrenderingservices.RS_CronService(aFactoryDescription, aServiceContainer, aLogService, error);
            aCronService._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aCronService;
        };
        R_ServiceLocator.prototype.creatDefaultService_SettingsSync = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aSettingsSyncService;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_SettingsSyncService", "RS_SettingsSyncService", "AS_SettingsSyncService", "" + id);
            var aLogService = null;
            aSettingsSyncService = new rmNonrenderingServicesSettingsSync.rm_nonrenderingservices.RS_SettingsSyncService(aFactoryDescription, aServiceContainer, aLogService, error);
            aSettingsSyncService._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aSettingsSyncService;
        };
        R_ServiceLocator.prototype.creatDefaultService_SettingsSyncInterface = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aSettingsSyncServiceInterface;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_SettingsSyncServiceInterface", "RS_SettingsSyncServiceInterface", "AS_SettingsSyncServiceInterface", "" + id);
            var aLogService = null;
            aSettingsSyncServiceInterface = new rmRenderingServicesSyncSettingsInterface.rm_renderingservices.RS_SettingsSyncInterfaceService(aFactoryDescription, aServiceContainer, aLogService, error);
            aSettingsSyncServiceInterface._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aSettingsSyncServiceInterface;
        };
        R_ServiceLocator.prototype.createDefaultService_TestService = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aTestService;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_TestService", "RS_TestService", "AS_TestService", "" + id);
            var aLogService = null;
            aTestService = new rmRenderingServicesTestService.rm_renderingservices.RS_TestService(aFactoryDescription, aServiceContainer, aLogService, error);
            aTestService._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aTestService;
        };
        R_ServiceLocator.prototype.createDefaultService_TestService2 = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aTestService2;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_TestService2", "RS_TestService2", "AS_TestService2", "" + id);
            var aLogService = null;
            aTestService2 = new rmRenderingServicesTestService2.rm_renderingservices.RS_TestService2(aFactoryDescription, aServiceContainer, aLogService, error);
            aTestService2._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aTestService2;
        };
        R_ServiceLocator.prototype.createDefaultService_TestService3 = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aTestService3;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_TestService3", "RS_TestService3", "AS_TestService3", "" + id);
            var aLogService = null;
            aTestService3 = new rmRenderingServicesTestService3.rm_renderingservices.RS_TestService3(aFactoryDescription, aServiceContainer, aLogService, error);
            aTestService3._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aTestService3;
        };
        R_ServiceLocator.prototype.createDefaultService_FileSettingsUpdate = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aFileSettingsUpdateService;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_FileSettingsUpdate", "RS_FileSettingsUpdate", "AS_FileSettingsUpdate", "" + id);
            var aLogService = null;
            aFileSettingsUpdateService = new rmNonrenderingServicesFileSettingsUpdate.rm_nonrenderingservices.RS_FileSettingsUpdate(aFactoryDescription, aServiceContainer, aLogService, error);
            aFileSettingsUpdateService._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aFileSettingsUpdateService;
        };
        R_ServiceLocator.prototype.createDefaultService_RebootService = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
            var aRebootService;
            var aFactoryDescription;
            aFactoryDescription = R_ServiceLocator.startupCreateDefaultFactoryDescription(error);
            aFactoryDescription.setNames("ASFactory_RebootService", "RS_RebootService", "AS_RebootService", "" + id);
            var aLogService = null;
            aRebootService = new rmNonrenderingServicesRebootService.rm_nonrenderingservices.RS_RebootService(aFactoryDescription, aServiceContainer, aLogService, error);
            aRebootService._iService.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
            return aRebootService;
        };
        R_ServiceLocator.prototype.createDefaultPlaylisControllerConfig = function (error) {
            return new rmPlaylistControllerConfig.rm_coreservices.RE_PlaylistControllerConfig();
        };
        R_ServiceLocator.prototype.createDefaultRenderingControllerConfig = function (error) {
            return new rmRenderingControllerConfig.rm_coreservices.RE_RenderingControllerConfig();
        };
        R_ServiceLocator.prototype.createDefaultRenderingZonePool = function (error) {
            return new rmRenderingServicesRenderingZonePool.rm_renderingservices.RE_RenderingZonePool();
        };
        R_ServiceLocator.prototype.createDefaultVideoRendererPool = function (error) {
            return new rmRenderingServicesVideoRendererPool.rm_renderingservices.RE_VideoRendererPool();
        };
        R_ServiceLocator.prototype.createDefaultVideoStreamRendererPool = function (error) {
            return new rmRenderingServicesVideoStreamRendererPool.rm_renderingservices.RE_VideoStreamRendererPool();
        };
        R_ServiceLocator.prototype.createDefaultImageRendererPool = function (error) {
            return new rmRenderingServicesImageRendererPool.rm_renderingservices.RE_ImageRendererPool();
        };
        R_ServiceLocator.prototype.createDefaultHtmlRendererPool = function (error) {
            return new rmRenderingServicesHtmlRendererPool.rm_renderingservices.RE_HtmlRendererPool();
        };
        R_ServiceLocator.prototype.createDefaultHtmlTemplateRendererPool = function (error) {
            return new rmRenderingServicesHtmlTemplateRendererPool.rm_renderingservices.RE_HtmlTemplateRendererPool();
        };
        R_ServiceLocator.prototype.createDefaultFlashRendererPool = function (error) {
            return new rmRenderingServicesFlashRendererPool.rm_renderingservices.RE_FlashRendererPool();
        };
        R_ServiceLocator.prototype.createDefaultFillRectRendererPool = function (error) {
            return new rmRenderingServicesFillRectRendererPool.rm_renderingservices.RE_FillRectRendererPool();
        };
        R_ServiceLocator.prototype.createDefaultScreenSaverRendererPool = function (error) {
            return new rmRenderingServicesScreenSaverRendererPool.rm_renderingservices.RE_ScreenSaverRendererPool();
        };
        R_ServiceLocator.prototype.createDefaultTvHdmiPassThroughSrvPool = function (error) {
            return new rmRenderingServicesTvHdmiPassThroughSrvPool.rm_renderingservices.RE_TvHdmiPassThroughSrvPool();
        };
        R_ServiceLocator.prototype.createDefaultBackgroundRendererPool = function (error) {
            return new rmRenderingServicesBackgroundRendererPool.rm_renderingservices.RE_BackgroundRendererPool();
        };
        R_ServiceLocator.prototype.createDefaultDownloadConfiguration = function (error) {
            return new rmDownloadConfiguration.rm_transversalservices.RE_DownloadConfiguration();
        };
        R_ServiceLocator.prototype.createDefaultPlaylistDownloadConfiguration = function (error) {
            return new rmPlaylistDownloadConfiguration.rm_coreservices.RE_PlaylistDownloadConfiguration();
        };
        R_ServiceLocator.prototype.createDefaultUpdateSoftwareConfiguration = function (error) {
            return new rmUpdateSoftwareConfiguration.rm_nonrenderingservices.RE_UpdateSoftwareConfiguration();
        };
        return R_ServiceLocator;
    }(rmGeneralService.rm_general.R_Service));
    rm_configurationservices.R_ServiceLocator = R_ServiceLocator;
})(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
//# sourceMappingURL=R_ServiceLocator.js.map