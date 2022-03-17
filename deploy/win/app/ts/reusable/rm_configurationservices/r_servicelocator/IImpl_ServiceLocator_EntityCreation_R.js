"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rm_configurationservices;
(function (rm_configurationservices) {
    var IImpl_ServiceLocator_EntityCreation_R = (function () {
        function IImpl_ServiceLocator_EntityCreation_R(owner) {
            this._owner = owner;
        }
        IImpl_ServiceLocator_EntityCreation_R.prototype.createEntity = function (entityName, error) {
            return this._owner.createEntity(entityName, error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultError = function () {
            return this._owner.createDefaultError();
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultContext = function () {
            return this._owner.createDefaultContext();
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultProperty = function (error) {
            return this._owner.createDefaultProperty(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultProperties = function (error) {
            return this._owner.createDefaultProperties(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFactoryDescription = function (error) {
            return this._owner.createDefaultFactoryDescription(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFactoryDescriptions = function (error) {
            return this._owner.createDefaultFactoryDescriptions(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDateTime = function (error) {
            return this._owner.createDefaultDateTime(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTimeZone = function (error) {
            return this._owner.createDefaultTimeZone(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSoundProperties = function (error) {
            return this._owner.createDefaultSoundProperties(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultScreenProperties = function (error) {
            return this._owner.createDefaultScreenProperties(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultAppServerProperties = function (error) {
            return this._owner.createDefaultAppServerProperties(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultAppInstallProperties = function (error) {
            return this._owner.createDefaultAppInstallProperties(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFileInfo = function (error) {
            return this._owner.createDefaultFileInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFileTransfer = function (error) {
            return this._owner.createDefaultFileTransfer(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultNetworkProperties = function (error) {
            return this._owner.createDefaultNetworkProperties(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultNetworkCardProperties = function (error) {
            return this._owner.createDefaultNetworkCardProperties(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultNetworkProxyProperties = function (error) {
            return this._owner.createDefaultNetworkProxyProperties(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultWifiConnectionInfo = function (error) {
            return this._owner.createDefaultWifiConnectionInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFirmwareProperties = function (error) {
            return this._owner.createDefaultFirmwareProperties(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultBeaconInfo = function (error) {
            return this._owner.createDefaultBeaconInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultEddystoneInfo = function (error) {
            return this._owner.createDefaultEddystoneInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultCaptureScreenInfo = function (error) {
            return this._owner.createDefaultCaptureScreenInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlatformInfo = function (error) {
            return this._owner.createDefaultPlatformInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSystemUsageInfo = function (error) {
            return this._owner.createDefaultSystemUsageInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSystemStorageInfo = function (error) {
            return this._owner.createDefaultSystemStorageInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultWifiSoftAppInfo = function (error) {
            return this._owner.createDefaultWifiSoftAppInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFailureModeInfo = function (error) {
            return this._owner.createDefaultFailureModeInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPowerProperties = function (error) {
            return this._owner.createDefaultPowerProperties(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPowerSaveModeInfo = function (error) {
            return this._owner.createDefaultPowerSaveModeInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTileInfo = function (error) {
            return this._owner.createDefaultTileInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSystemMonitorInfo = function (error) {
            return this._owner.createDefaultSystemMonitorInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultUsageData = function (error) {
            return this._owner.createDefaultUsageData(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultUsagePermisssions = function (error) {
            return this._owner.createDefaultUsagePermissions(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDeviceTimerInfo = function (error) {
            return this._owner.createDefaultDeviceTimerInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultShaProperties = function (error) {
            return this._owner.createDefaultShaProperties(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultXmlJsonObject = function (error) {
            return this._owner.createDefaultXmlJsonObject(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHttpRequest = function (error) {
            return this._owner.createDefaultHttpRequest(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultContentDispositionHeader = function (error) {
            return this._owner.createDefaultContentDispositionHeader(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultScreenshotOptions = function (error) {
            return this._owner.createDefaultScreenshotOptions(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultMonitoringSettings = function (error) {
            return this._owner.createDefaultMonitoringSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultStartupSystemSettings = function (error) {
            return this._owner.createDefaultStartupSystemSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultStartupAudioSettings = function (error) {
            return this._owner.createDefaultStartupAudioSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultStartupVideoSettings = function (error) {
            return this._owner.createDefaultStartupVideoSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultStartupTimeSettings = function (error) {
            return this._owner.createDefaultStartupTimeSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultStartupLanguageSettings = function (error) {
            return this._owner.createDefaultStartupLanguageSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTimeZoneConvertor = function (error) {
            return this._owner.createDefaultTimeZoneConvertor(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultStartupSettings = function (error) {
            return this._owner.createDefaultStartupSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultServerDeviceSettings = function (error) {
            return this._owner.createDefaultServerDeviceSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDeviceSetting = function (error) {
            return this._owner.createDeviceSetting(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSettingsSync = function (error) {
            return this._owner.createDefaultSettingsSync(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultAppCommunicationSettings = function (error) {
            return this._owner.createDefaultAppCommunicationSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultMulticastSettings = function (error) {
            return this._owner.createDefaultMulticastSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultP2PSettings = function (error) {
            return this._owner.createDefaultP2PSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultClientSettings = function (error) {
            return this._owner.createDefaultClientSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultCloudAPISettings = function (error) {
            return this._owner.createDefaultCloudAPISettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultContentSettings = function (error) {
            return this._owner.createDefaultContentSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPurgeSettings = function (error) {
            return this._owner.createDefaultPurgeSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultCronSettings = function (error) {
            return this._owner.createDefaultCronSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDisplaySettings = function (error) {
            return this._owner.createDefaultDisplaySettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHardwareSetts = function (error) {
            return this._owner.createDefaultHardwareSetts(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultLoggingSettings = function (error) {
            return this._owner.createDefaultLoggingSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultNetworkLinkSettings = function (error) {
            return this._owner.createDefaultNetworkLinkSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultEthernetSettings = function (error) {
            return this._owner.createDefaultEthernetSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHTTPProxySettings = function (error) {
            return this._owner.createDefaultHTTPProxySettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultWifiAccessPointSettings = function (error) {
            return this._owner.createDefaultWifiAccessPointSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultWifiSettings = function (error) {
            return this._owner.createDefaultWifiSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultNetworkSettings = function (error) {
            return this._owner.createDefaultNetworkSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlatformSettings = function (error) {
            return this._owner.createDefaultPlatformSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultAudioSettings = function (error) {
            return this._owner.createDefaultAudioSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFlashMediaSettings = function (error) {
            return this._owner.createDefaultFlashMediaSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaybackInteractionSettings = function (error) {
            return this._owner.createDefaultPlaybackInteractionSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultVODSettings = function (error) {
            return this._owner.createDefaultVODSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultVideoSettings = function (error) {
            return this._owner.createDefaultVideoSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultWebPageSettings = function (error) {
            return this._owner.createDefaultWebPageSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaybackSettings = function (error) {
            return this._owner.createDefaultPlaybackSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSecuritySettings = function (error) {
            return this._owner.createDefaultSecuritySettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSerialDisplayCommandsSettings = function (error) {
            return this._owner.createDefaultSerialDisplayCommandsSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSiteSettings = function (error) {
            return this._owner.createDefaultSiteSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDebugSettings = function (error) {
            return this._owner.createDefaultDebugSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultResetSettings = function (error) {
            return this._owner.createDefaultResetSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSoftwareSettings = function (error) {
            return this._owner.createDefaultSoftwareSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSoundSettings = function (error) {
            return this._owner.createDefaultSoundSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTimeSyncSettings = function (error) {
            return this._owner.createDefaultTimeSyncSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTimeSettings = function (error) {
            return this._owner.createDefaultTimeSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultServerDeviceSettingsConfiguration = function (error) {
            return this._owner.createDefaultServerDeviceSettingsConfiguration(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultActivityLogServiceSettings = function (error) {
            return this._owner.createDefaultActivityLogServiceSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultLiveCommandsSettings = function (error) {
            return this._owner.createDefaultLiveCommandsSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultServerCommand = function (error) {
            return this._owner.createDefaultServerCommand(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultXmlDocument = function (error) {
            return this._owner.createDefaultXmlDocument(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultXmlNode = function (error) {
            return this._owner.createDefaultXmlNode(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultQueue = function (error) {
            return this._owner.createDefaultQueue(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultEvent = function (error) {
            return this._owner.createDefaultEvent(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRandom = function (error) {
            return this._owner.createDefaultRandom(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDiffusion = function (error) {
            return this._owner.createDefaultDiffusion(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultParameter = function (error) {
            return this._owner.createDefaultParameter(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultServiceConstraint = function (error) {
            return this._owner.createDefaultServiceConstraint(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultScheduleInfo = function (error) {
            return this._owner.createDefaultScheduleInfo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultCronSchedule = function (error) {
            return this._owner.createDefaultCronSchedule(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultCronConfiguration = function (error) {
            return this._owner.createDefaultCronConfiguration(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTestConfiguration = function (error) {
            return this._owner.createDefaultTestConfiguration(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTest2Configuration = function (error) {
            return this._owner.createDefaultTest2Configuration(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTest3Configuration = function (error) {
            return this._owner.createDefaultTest3Configuration(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFileSettingsUpdateConfiguration = function (error) {
            return this._owner.createDefaultFileSettingsUpdateConfiguration(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHttpHeader = function (error) {
            return this._owner.createDefaultHttpHeader(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHttpHeaders = function (error) {
            return this._owner.createDefaultHttpHeaders(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createHttpHeaders = function (strDefaultHttpHeadersSetName, error) {
            return this._owner.createHttpHeaders(strDefaultHttpHeadersSetName, error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultMoodDefaultHtppHeaders = function (error) {
            return this._owner.createDefaultMoodDefaultHttpHeaders(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHardwareSettings = function (error) {
            return this._owner.createDefaultHardwareSettings(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultOpeningHours = function (error) {
            return this._owner.createDefaultOpeningHours(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDayOpeningHours = function (error) {
            return this._owner.createDefaultDayOpeningHours(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultScreenSaverConfig = function (error) {
            return this._owner.createDefaultScreenSaverConfig(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaybackGlobalConfig = function (error) {
            return this._owner.createDefaultPlaybackGlobalConfig(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem = function (error) {
            return this._owner.createDefaultPlaylistItem(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Container = function (error) {
            return this._owner.createDefaultPlaylistItem_Container(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Design = function (error) {
            return this._owner.createDefaultPlaylistItem_Design(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_DesignZone = function (error) {
            return this._owner.createDefaultPlaylistItem_DesignZone(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Event = function (error) {
            return this._owner.createDefaultPlaylistItem_Event(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Events = function (error) {
            return this._owner.createDefaultPlaylistItem_Events(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_FillRect = function (error) {
            return this._owner.createDefaultPlaylistItem_FillRect(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Flash = function (error) {
            return this._owner.createDefaultPlaylistItem_Flash(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_HtmlTemplate = function (error) {
            return this._owner.createDefaultPlaylistItem_HtmlTemplate(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Image = function (error) {
            return this._owner.createDefaultPlaylistItem_Image(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Playlist = function (error) {
            return this._owner.createDefaultPlaylistItem_Playlist(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_PriorityPlaylist = function (error) {
            return this._owner.createDefaultPlaylistItem_PriorityPlaylist(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Stream = function (error) {
            return this._owner.createDefaultPlaylistItem_Stream(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ScreenSaverImage = function (error) {
            return this._owner.createDefaultPlaylistItem_ScreenSaverImage(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ScreenSaverVideo = function (error) {
            return this._owner.createDefaultPlaylistItem_ScreenSaverVideo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Tag = function (error) {
            return this._owner.createDefaultPlaylistItem_Tag(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_RealTag = function (error) {
            return this._owner.createDefaultPlaylistItem_RealTag(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_TVPassThrough = function (error) {
            return this._owner.createDefaultPlaylistItem_TVPassThrough(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_TVTunner = function (error) {
            return this._owner.createDefaultPlaylistItem_TVTunner(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Video = function (error) {
            return this._owner.createDefaultPlaylistItem_Video(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_VideoStream = function (error) {
            return this._owner.createDefaultPlaylistItem_VideoStream(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_WebPage = function (error) {
            return this._owner.createDefaultPlaylistItem_WebPage(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultMainPlaylist = function (error) {
            return this._owner.createDefaultMainPlaylist(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTagManager = function (error) {
            return this._owner.createDefaultTagManager(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemLogic = function (error) {
            return this._owner.createDefaultPlaylistItemLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ContainerLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_ContainerLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_DesignLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_DesignLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_DesignZoneLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_DesignZoneLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_DesignMainZoneLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_DesignMainZoneLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_EventLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_EventLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_EventsLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_EventsLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_FillRectLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_FillRectLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_FlashLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_FlashLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_HtmlTemplateLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_HtmlTemplateLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ImageLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_ImageLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_PlaylistLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_PlaylistLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_PriorityPlaylistLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_PriorityPlaylistLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_StreamLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_StreamLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ScreenSaverImageLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_ScreenSaverImageLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ScreenSaverVideoLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_ScreenSaverVideoLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_TagLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_TagLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_RealTagLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_RealTagLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_TVPassThroughLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_TVPassThroughLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_TVTunnerLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_TVTunnerLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_VideoLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_VideoLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_VideoStreamLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_VideoStreamLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_WebPageLogic = function (error) {
            return this._owner.createDefaultPlaylistItem_WebPageLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultMainPlaylistLogic = function (error) {
            return this._owner.createDefaultMainPlaylistLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTagManagerLogic = function (error) {
            return this._owner.createDefaultTagManagerLogic(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatus = function (error) {
            return this._owner.createDefaultPlaylistItemStatus(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusDisable = function (error) {
            return this._owner.createDefaultPlaylistItemStatusDisable(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusEnd = function (error) {
            return this._owner.createDefaultPlaylistItemStatusEnd(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusError = function (error) {
            return this._owner.createDefaultPlaylistItemStatusError(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusPlay = function (error) {
            return this._owner.createDefaultPlaylistItemStatusPlay(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusPlay_List = function (error) {
            return this._owner.createDefaultPlaylistItemStatusPlay_List(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusPlay_Media = function (error) {
            return this._owner.createDefaultPlaylistItemStatusPlay_Media(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToAbort = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToAbort(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToAbort_List = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToAbort_List(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToAbort_Media = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToAbort_Media(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_List = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_List(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToAbortOrEndBeforePlay_Media(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToEnd = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToEnd(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToEnd_List = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToEnd_List(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToEnd_Media = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToEnd_Media(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToPlay = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToPlay(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToPlay_List = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToPlay_List(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToPlay_Media = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToPlay_Media(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToResume = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToResume(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToResume_List = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToResume_List(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToResume_Media = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToResume_Media(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToSuspend = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToSuspend(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToSuspend_List = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToSuspend_List(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusRequestToSuspend_Media = function (error) {
            return this._owner.createDefaultPlaylistItemStatusRequestToSuspend_Media(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusSelectNextChildToPlay = function (error) {
            return this._owner.createDefaultPlaylistItemStatusSelectNextChildToPlay(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusSuspended = function (error) {
            return this._owner.createDefaultPlaylistItemStatusSuspended(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemTransition = function (error) {
            return this._owner.createDefaultPlaylistItemTransition(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHtmlZone = function (error) {
            return this._owner.createDefaultHtmlZone(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHtmlZonePool = function (error) {
            return this._owner.createDefaultHtmlZonePool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsAllParameters = function (error) {
            return this._owner.createDefaultRenderParamsAllParameters(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsIdentification = function (error) {
            return this._owner.createDefaultRenderParamsIdentification(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsItemPosAndSize = function (error) {
            return this._owner.createDefaultRenderParamsItemPosAndSize(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsContainerPosAndSize = function (error) {
            return this._owner.createDefaultRenderParamsContainerPosAndSize(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsDuration = function (error) {
            return this._owner.createDefaultRenderParamsDuration(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsBackground = function (error) {
            return this._owner.createDefaultRenderParamsBackground(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsImage = function (error) {
            return this._owner.createDefaultRenderParamsImage(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsWebImage = function (error) {
            return this._owner.createDefaultRenderParamsWebImage(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsVideo = function (error) {
            return this._owner.createDefaultRenderParamsVideo(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsVideoStream = function (error) {
            return this._owner.createDefaultRenderParamsVideoStream(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsAudio = function (error) {
            return this._owner.createDefaultRenderParamsAudio(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsWebPage = function (error) {
            return this._owner.createDefaultRenderParamsWebPage(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsHtmlTemplate = function (error) {
            return this._owner.createDefaultRenderParamsHtmlTemplate(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsFillRect = function (error) {
            return this._owner.createDefaultRenderParamsFillRect(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlPrepareParams = function (error) {
            return this._owner.createDefaultControlPrepareParams(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlPrepareParamsPool = function (error) {
            return this._owner.createDefaultControlPrepareParamsPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlRunParams = function (error) {
            return this._owner.createDefaultControlRunParams(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlRunParamsPool = function (error) {
            return this._owner.createDefaultControlRunParamsPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlStopParams = function (error) {
            return this._owner.createDefaultControlStopParams(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlStopParamsPool = function (error) {
            return this._owner.createDefaultControlStopParamsPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlStatusParams = function (error) {
            return this._owner.createDefaultControlStatusParams(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlStatusParamsPool = function (error) {
            return this._owner.createDefaultControlStatusParamsPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderingZonePool = function (error) {
            return this._owner.createDefaultRenderingZonePool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultVideoRendererPool = function (error) {
            return this._owner.createDefaultVideoRendererPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultVideoStreamRendererPool = function (error) {
            return this._owner.createDefaultVideoStreamRendererPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultImageRendererPool = function (error) {
            return this._owner.createDefaultImageRendererPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHtmlRendererPool = function (error) {
            return this._owner.createDefaultHtmlRendererPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHtmlTemplateRendererPool = function (error) {
            return this._owner.createDefaultHtmlTemplateRendererPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFlashRendererPool = function (error) {
            return this._owner.createDefaultFlashRendererPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFillRectRendererPool = function (error) {
            return this._owner.createDefaultFillRectRendererPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultScreenSaverRendererPool = function (error) {
            return this._owner.createDefaultScreenSaverRendererPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTvHdmiPassThroughSrvPool = function (error) {
            return this._owner.createDefaultTvHdmiPassThroughSrvPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultBackgroundRendererPool = function (error) {
            return this._owner.createDefaultBackgroundRendererPool(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistControllerConfig = function (error) {
            return this._owner.createDefaultPlaylisControllerConfig(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderingControllerConfig = function (error) {
            return this._owner.createDefaultRenderingControllerConfig(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDownloadConfiguration = function (error) {
            return this._owner.createDefaultDownloadConfiguration(error);
        };
        IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistDownloadConfiguration = function (error) {
            return this._owner.createDefaultPlaylistDownloadConfiguration(error);
        };
        return IImpl_ServiceLocator_EntityCreation_R;
    }());
    rm_configurationservices.IImpl_ServiceLocator_EntityCreation_R = IImpl_ServiceLocator_EntityCreation_R;
})(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
//# sourceMappingURL=IImpl_ServiceLocator_EntityCreation_R.js.map