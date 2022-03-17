define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_configurationservices;
    (function (rm_configurationservices) {
        var IImpl_ServiceLocator_EntityCreation_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_ServiceLocator_EntityCreation_R(owner) {
                this._owner = owner;
            }
            //----------- create entity
            IImpl_ServiceLocator_EntityCreation_R.prototype.createEntity = function (entityName, error) {
                return this._owner.createEntity(entityName, error);
            };
            //----------- create a default Error object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultError = function () {
                return this._owner.createDefaultError();
            };
            //----------- create a default Context object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultContext = function () {
                return this._owner.createDefaultContext();
            };
            //----------- create a default Property object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultProperty = function (error) {
                return this._owner.createDefaultProperty(error);
            };
            //----------- create a default list of Properties
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultProperties = function (error) {
                return this._owner.createDefaultProperties(error);
            };
            //----------- create a default Property object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFactoryDescription = function (error) {
                return this._owner.createDefaultFactoryDescription(error);
            };
            //----------- create a default list of Properties
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFactoryDescriptions = function (error) {
                return this._owner.createDefaultFactoryDescriptions(error);
            };
            //----------- create a default date-time object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDateTime = function (error) {
                return this._owner.createDefaultDateTime(error);
            };
            //----------- create a default time-zone object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTimeZone = function (error) {
                return this._owner.createDefaultTimeZone(error);
            };
            //----------- create a default audio-properties object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSoundProperties = function (error) {
                return this._owner.createDefaultSoundProperties(error);
            };
            //----------- create a default screen-properties object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultScreenProperties = function (error) {
                return this._owner.createDefaultScreenProperties(error);
            };
            //----------- create a default appserver-properties object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultAppServerProperties = function (error) {
                return this._owner.createDefaultAppServerProperties(error);
            };
            //----------- create a default appinstall-properties object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultAppInstallProperties = function (error) {
                return this._owner.createDefaultAppInstallProperties(error);
            };
            //----------- create a default appserver-properties object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFileInfo = function (error) {
                return this._owner.createDefaultFileInfo(error);
            };
            //----------- create a default appserver-properties object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFileTransfer = function (error) {
                return this._owner.createDefaultFileTransfer(error);
            };
            //----------- create a default network-properties object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultNetworkProperties = function (error) {
                return this._owner.createDefaultNetworkProperties(error);
            };
            //----------- create a default network-card-properties object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultNetworkCardProperties = function (error) {
                return this._owner.createDefaultNetworkCardProperties(error);
            };
            //----------- create a default network-proxy-properties object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultNetworkProxyProperties = function (error) {
                return this._owner.createDefaultNetworkProxyProperties(error);
            };
            //----------- create a default wifi-connection-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultWifiConnectionInfo = function (error) {
                return this._owner.createDefaultWifiConnectionInfo(error);
            };
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFirmwareProperties = function (error) {
                return this._owner.createDefaultFirmwareProperties(error);
            };
            //----------- create a default beacon-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultBeaconInfo = function (error) {
                return this._owner.createDefaultBeaconInfo(error);
            };
            //----------- create a default eddystone-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultEddystoneInfo = function (error) {
                return this._owner.createDefaultEddystoneInfo(error);
            };
            //----------- create a default capture-screen-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultCaptureScreenInfo = function (error) {
                return this._owner.createDefaultCaptureScreenInfo(error);
            };
            //----------- create a default platform-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlatformInfo = function (error) {
                return this._owner.createDefaultPlatformInfo(error);
            };
            //----------- create a default system-usage-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSystemUsageInfo = function (error) {
                return this._owner.createDefaultSystemUsageInfo(error);
            };
            //----------- create a default system-usage-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSystemStorageInfo = function (error) {
                return this._owner.createDefaultSystemStorageInfo(error);
            };
            //----------- create a default system-usage-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultWifiSoftAppInfo = function (error) {
                return this._owner.createDefaultWifiSoftAppInfo(error);
            };
            //----------- create a default failure-mode-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFailureModeInfo = function (error) {
                return this._owner.createDefaultFailureModeInfo(error);
            };
            //----------- create a default power properties  object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPowerProperties = function (error) {
                return this._owner.createDefaultPowerProperties(error);
            };
            //----------- create a default power-save-mode-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPowerSaveModeInfo = function (error) {
                return this._owner.createDefaultPowerSaveModeInfo(error);
            };
            //----------- create a default tile-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTileInfo = function (error) {
                return this._owner.createDefaultTileInfo(error);
            };
            //----------- create a default system-monitor-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultSystemMonitorInfo = function (error) {
                return this._owner.createDefaultSystemMonitorInfo(error);
            };
            //----------- create a default usage-permissions object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultUsageData = function (error) {
                return this._owner.createDefaultUsageData(error);
            };
            //----------- create a default usage-permissions object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultUsagePermisssions = function (error) {
                return this._owner.createDefaultUsagePermissions(error);
            };
            //----------- create a default device-timer-info object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDeviceTimerInfo = function (error) {
                return this._owner.createDefaultDeviceTimerInfo(error);
            };
            //----------- create a default sha-properties object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultShaProperties = function (error) {
                return this._owner.createDefaultShaProperties(error);
            };
            //----------- create a default xml json object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultXmlJsonObject = function (error) {
                return this._owner.createDefaultXmlJsonObject(error);
            };
            //----------------------------
            // xml objects
            //----------------------------
            //----------- create a default http request object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHttpRequest = function (error) {
                return this._owner.createDefaultHttpRequest(error);
            };
            //----------- create a default content disposition header object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultContentDispositionHeader = function (error) {
                return this._owner.createDefaultContentDispositionHeader(error);
            };
            //----------- create a default screenshot options object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultScreenshotOptions = function (error) {
                return this._owner.createDefaultScreenshotOptions(error);
            };
            //----------- create a default monitoring settings object
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
            //----------- create a default activity log service settings object
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultActivityLogServiceSettings = function (error) {
                return this._owner.createDefaultActivityLogServiceSettings(error);
            };
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultLiveCommandsSettings = function (error) {
                return this._owner.createDefaultLiveCommandsSettings(error);
            };
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultServerCommand = function (error) {
                return this._owner.createDefaultServerCommand(error);
            };
            //----------- create a default xml document
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultXmlDocument = function (error) {
                return this._owner.createDefaultXmlDocument(error);
            };
            //----------- create a default xml document
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultXmlNode = function (error) {
                return this._owner.createDefaultXmlNode(error);
            };
            //----------------------------
            // queue + event + random + diffusion
            //----------------------------
            //----------- create a default queue
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultQueue = function (error) {
                return this._owner.createDefaultQueue(error);
            };
            //----------- create a default event
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultEvent = function (error) {
                return this._owner.createDefaultEvent(error);
            };
            //----------- create a default random
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRandom = function (error) {
                return this._owner.createDefaultRandom(error);
            };
            //----------- create a default diffusion
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDiffusion = function (error) {
                return this._owner.createDefaultDiffusion(error);
            };
            //-----------------------------------------------------
            //    paramter + service constraint + schedule info + cron schedule + cron confguration + test configuration
            //-----------------------------------------------------
            //----------- create a default parameter 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultParameter = function (error) {
                return this._owner.createDefaultParameter(error);
            };
            //----------- create a default parameter 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultServiceConstraint = function (error) {
                return this._owner.createDefaultServiceConstraint(error);
            };
            //----------- create a default schedule info
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultScheduleInfo = function (error) {
                return this._owner.createDefaultScheduleInfo(error);
            };
            //----------- create a default cron schedule
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultCronSchedule = function (error) {
                return this._owner.createDefaultCronSchedule(error);
            };
            //----------- create a default cron service configuration 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultCronConfiguration = function (error) {
                return this._owner.createDefaultCronConfiguration(error);
            };
            //----------- create a default test service configuration 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTestConfiguration = function (error) {
                return this._owner.createDefaultTestConfiguration(error);
            };
            //----------- create a default test service 2 configuration 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTest2Configuration = function (error) {
                return this._owner.createDefaultTest2Configuration(error);
            };
            //----------- create a default test service 3 configuration 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTest3Configuration = function (error) {
                return this._owner.createDefaultTest3Configuration(error);
            };
            //----------- create a defaul file settings update configuration 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFileSettingsUpdateConfiguration = function (error) {
                return this._owner.createDefaultFileSettingsUpdateConfiguration(error);
            };
            //----------------------------
            // playback config classes
            //----------------------------
            //----------- create http header
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHttpHeader = function (error) {
                return this._owner.createDefaultHttpHeader(error);
            };
            //----------- create default http headers
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHttpHeaders = function (error) {
                return this._owner.createDefaultHttpHeaders(error);
            };
            //----------- create custom http headers
            IImpl_ServiceLocator_EntityCreation_R.prototype.createHttpHeaders = function (strDefaultHttpHeadersSetName, error) {
                return this._owner.createHttpHeaders(strDefaultHttpHeadersSetName, error);
            };
            //----------- create http headers
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultMoodDefaultHtppHeaders = function (error) {
                return this._owner.createDefaultMoodDefaultHttpHeaders(error);
            };
            //----------------------------
            // playback config classes
            //----------------------------
            //----------- create hardware settings 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHardwareSettings = function (error) {
                return this._owner.createDefaultHardwareSettings(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultOpeningHours = function (error) {
                return this._owner.createDefaultOpeningHours(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDayOpeningHours = function (error) {
                return this._owner.createDefaultDayOpeningHours(error);
            };
            //--------------
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultScreenSaverConfig = function (error) {
                return this._owner.createDefaultScreenSaverConfig(error);
            };
            //--------------
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaybackGlobalConfig = function (error) {
                return this._owner.createDefaultPlaybackGlobalConfig(error);
            };
            //----------------------------------------
            //    playlist items creators
            //----------------------------------------
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem = function (error) {
                return this._owner.createDefaultPlaylistItem(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Container = function (error) {
                return this._owner.createDefaultPlaylistItem_Container(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Design = function (error) {
                return this._owner.createDefaultPlaylistItem_Design(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_DesignZone = function (error) {
                return this._owner.createDefaultPlaylistItem_DesignZone(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Event = function (error) {
                return this._owner.createDefaultPlaylistItem_Event(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Events = function (error) {
                return this._owner.createDefaultPlaylistItem_Events(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_FillRect = function (error) {
                return this._owner.createDefaultPlaylistItem_FillRect(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Flash = function (error) {
                return this._owner.createDefaultPlaylistItem_Flash(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_HtmlTemplate = function (error) {
                return this._owner.createDefaultPlaylistItem_HtmlTemplate(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Image = function (error) {
                return this._owner.createDefaultPlaylistItem_Image(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Playlist = function (error) {
                return this._owner.createDefaultPlaylistItem_Playlist(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_PriorityPlaylist = function (error) {
                return this._owner.createDefaultPlaylistItem_PriorityPlaylist(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Stream = function (error) {
                return this._owner.createDefaultPlaylistItem_Stream(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ScreenSaverImage = function (error) {
                return this._owner.createDefaultPlaylistItem_ScreenSaverImage(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ScreenSaverVideo = function (error) {
                return this._owner.createDefaultPlaylistItem_ScreenSaverVideo(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Tag = function (error) {
                return this._owner.createDefaultPlaylistItem_Tag(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_RealTag = function (error) {
                return this._owner.createDefaultPlaylistItem_RealTag(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_TVPassThrough = function (error) {
                return this._owner.createDefaultPlaylistItem_TVPassThrough(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_TVTunner = function (error) {
                return this._owner.createDefaultPlaylistItem_TVTunner(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_Video = function (error) {
                return this._owner.createDefaultPlaylistItem_Video(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_VideoStream = function (error) {
                return this._owner.createDefaultPlaylistItem_VideoStream(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_WebPage = function (error) {
                return this._owner.createDefaultPlaylistItem_WebPage(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultMainPlaylist = function (error) {
                return this._owner.createDefaultMainPlaylist(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTagManager = function (error) {
                return this._owner.createDefaultTagManager(error);
            };
            //----------------------------------------
            //    playlist items logic creators
            //----------------------------------------
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemLogic = function (error) {
                return this._owner.createDefaultPlaylistItemLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ContainerLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_ContainerLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_DesignLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_DesignLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_DesignZoneLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_DesignZoneLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_DesignMainZoneLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_DesignMainZoneLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_EventLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_EventLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_EventsLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_EventsLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_FillRectLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_FillRectLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_FlashLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_FlashLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_HtmlTemplateLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_HtmlTemplateLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ImageLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_ImageLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_PlaylistLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_PlaylistLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_PriorityPlaylistLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_PriorityPlaylistLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_StreamLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_StreamLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ScreenSaverImageLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_ScreenSaverImageLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_ScreenSaverVideoLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_ScreenSaverVideoLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_TagLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_TagLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_RealTagLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_RealTagLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_TVPassThroughLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_TVPassThroughLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_TVTunnerLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_TVTunnerLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_VideoLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_VideoLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_VideoStreamLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_VideoStreamLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItem_WebPageLogic = function (error) {
                return this._owner.createDefaultPlaylistItem_WebPageLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultMainPlaylistLogic = function (error) {
                return this._owner.createDefaultMainPlaylistLogic(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTagManagerLogic = function (error) {
                return this._owner.createDefaultTagManagerLogic(error);
            };
            //----------------------------------------
            //    create playlist item status
            //----------------------------------------
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatus = function (error) {
                return this._owner.createDefaultPlaylistItemStatus(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusDisable = function (error) {
                return this._owner.createDefaultPlaylistItemStatusDisable(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistItemStatusEnd = function (error) {
                return this._owner.createDefaultPlaylistItemStatusEnd(error);
            };
            //------------ 
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
            //----------------------------------------
            //    html zone creators
            //----------------------------------------
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHtmlZone = function (error) {
                return this._owner.createDefaultHtmlZone(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHtmlZonePool = function (error) {
                return this._owner.createDefaultHtmlZonePool(error);
            };
            //----------------------------------
            //     render params
            //----------------------------------
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsAllParameters = function (error) {
                return this._owner.createDefaultRenderParamsAllParameters(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsIdentification = function (error) {
                return this._owner.createDefaultRenderParamsIdentification(error);
            };
            //------------ aici ------
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsItemPosAndSize = function (error) {
                return this._owner.createDefaultRenderParamsItemPosAndSize(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsContainerPosAndSize = function (error) {
                return this._owner.createDefaultRenderParamsContainerPosAndSize(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsDuration = function (error) {
                return this._owner.createDefaultRenderParamsDuration(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsBackground = function (error) {
                return this._owner.createDefaultRenderParamsBackground(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsImage = function (error) {
                return this._owner.createDefaultRenderParamsImage(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsWebImage = function (error) {
                return this._owner.createDefaultRenderParamsWebImage(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsVideo = function (error) {
                return this._owner.createDefaultRenderParamsVideo(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsVideoStream = function (error) {
                return this._owner.createDefaultRenderParamsVideoStream(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsAudio = function (error) {
                return this._owner.createDefaultRenderParamsAudio(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsWebPage = function (error) {
                return this._owner.createDefaultRenderParamsWebPage(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsHtmlTemplate = function (error) {
                return this._owner.createDefaultRenderParamsHtmlTemplate(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderParamsFillRect = function (error) {
                return this._owner.createDefaultRenderParamsFillRect(error);
            };
            //----------------------------------
            //     control params
            //----------------------------------
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlPrepareParams = function (error) {
                return this._owner.createDefaultControlPrepareParams(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlPrepareParamsPool = function (error) {
                return this._owner.createDefaultControlPrepareParamsPool(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlRunParams = function (error) {
                return this._owner.createDefaultControlRunParams(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlRunParamsPool = function (error) {
                return this._owner.createDefaultControlRunParamsPool(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlStopParams = function (error) {
                return this._owner.createDefaultControlStopParams(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlStopParamsPool = function (error) {
                return this._owner.createDefaultControlStopParamsPool(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlStatusParams = function (error) {
                return this._owner.createDefaultControlStatusParams(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultControlStatusParamsPool = function (error) {
                return this._owner.createDefaultControlStatusParamsPool(error);
            };
            //-----------------------------------------
            // create default Rendering Service Pools
            //-----------------------------------------
            //----------- create default Rendering Zone Pool
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderingZonePool = function (error) {
                return this._owner.createDefaultRenderingZonePool(error);
            };
            //----------- create default Video Renderer Pool
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultVideoRendererPool = function (error) {
                return this._owner.createDefaultVideoRendererPool(error);
            };
            //----------- create default VideoStream Renderer Pool
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultVideoStreamRendererPool = function (error) {
                return this._owner.createDefaultVideoStreamRendererPool(error);
            };
            //----------- create default Image Renderer Pool
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultImageRendererPool = function (error) {
                return this._owner.createDefaultImageRendererPool(error);
            };
            //----------- create default Html Renderer Pool
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHtmlRendererPool = function (error) {
                return this._owner.createDefaultHtmlRendererPool(error);
            };
            //----------- create default HtmlTemplate Renderer Pool
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultHtmlTemplateRendererPool = function (error) {
                return this._owner.createDefaultHtmlTemplateRendererPool(error);
            };
            //----------- create default Flash Renderer Pool
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFlashRendererPool = function (error) {
                return this._owner.createDefaultFlashRendererPool(error);
            };
            //----------- create default FillRect Renderer Pool
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultFillRectRendererPool = function (error) {
                return this._owner.createDefaultFillRectRendererPool(error);
            };
            //----------- create default ScreenSaver Renderer Pool
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultScreenSaverRendererPool = function (error) {
                return this._owner.createDefaultScreenSaverRendererPool(error);
            };
            //----------- create default ScreenSaver Renderer Pool
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultTvHdmiPassThroughSrvPool = function (error) {
                return this._owner.createDefaultTvHdmiPassThroughSrvPool(error);
            };
            //----------- create default Background Renderer Pool
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultBackgroundRendererPool = function (error) {
                return this._owner.createDefaultBackgroundRendererPool(error);
            };
            //-------------------
            //  configs 
            //--------------------
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistControllerConfig = function (error) {
                return this._owner.createDefaultPlaylisControllerConfig(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultRenderingControllerConfig = function (error) {
                return this._owner.createDefaultRenderingControllerConfig(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultDownloadConfiguration = function (error) {
                return this._owner.createDefaultDownloadConfiguration(error);
            };
            //------------ 
            IImpl_ServiceLocator_EntityCreation_R.prototype.createDefaultPlaylistDownloadConfiguration = function (error) {
                return this._owner.createDefaultPlaylistDownloadConfiguration(error);
            };
            return IImpl_ServiceLocator_EntityCreation_R;
        }());
        rm_configurationservices.IImpl_ServiceLocator_EntityCreation_R = IImpl_ServiceLocator_EntityCreation_R;
    })(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
});
//# sourceMappingURL=IImpl_ServiceLocator_EntityCreation_R.js.map