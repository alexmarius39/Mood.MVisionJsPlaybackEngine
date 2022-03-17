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
var rmEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
var rm_general;
(function (rm_general) {
    var RE_ServerDeviceSettingsConfiguration = (function (_super) {
        __extends(RE_ServerDeviceSettingsConfiguration, _super);
        function RE_ServerDeviceSettingsConfiguration() {
            var _this = _super.call(this) || this;
            _this._bServerDeviceSettingsChanged = false;
            _this._aServerDeviceSettings = null;
            _this._jsonSettings = null;
            return _this;
        }
        RE_ServerDeviceSettingsConfiguration.prototype.setServerDeviceSettingsConfiguration = function (aServerDeviceSettings) {
            this._aServerDeviceSettings = aServerDeviceSettings;
        };
        RE_ServerDeviceSettingsConfiguration.prototype.getServerDeviceSettingsChanged = function () {
            return this._bServerDeviceSettingsChanged;
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setServerDeviceSettingsChanged = function (bChanged) {
            this._bServerDeviceSettingsChanged = bChanged;
        };
        RE_ServerDeviceSettingsConfiguration.prototype.getServerDeviceSettingsConfiguration = function () {
            return this._aServerDeviceSettings;
        };
        RE_ServerDeviceSettingsConfiguration.prototype.getJsonSettings = function () {
            return this._jsonSettings;
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setJsonSettings = function (jsonSettings) {
            this._jsonSettings = jsonSettings;
        };
        RE_ServerDeviceSettingsConfiguration.prototype.initSettings = function () {
            var error = this._aSrvLocator._iEntityCreation.createDefaultError();
            this._aServerDeviceSettings = this._aSrvLocator._iEntityCreation.createDefaultServerDeviceSettings(error);
            var aMulticastAddress = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            aMulticastAddress.setValue("230.0.0.1");
            var aMulticastPort = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            aMulticastPort.setValue(4446);
            var aMulticastSettings = this._aSrvLocator._iEntityCreation.createDefaultMulticastSettings(error);
            aMulticastSettings.setAddress(aMulticastAddress);
            aMulticastSettings.setPort(aMulticastPort);
            var aP2PPort = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            aP2PPort.setValue(9000);
            var aP2PServerEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            aP2PServerEnabled.setValue(false);
            var aP2PClientEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            aP2PClientEnabled.setValue(false);
            var aP2PSettings = this._aSrvLocator._iEntityCreation.createDefaultP2PSettings(error);
            aP2PSettings.setPort(aP2PPort);
            aP2PSettings.setServerEnabled(aP2PServerEnabled);
            aP2PSettings.setClientEnabled(aP2PClientEnabled);
            var aAppCommunicationSettings = this._aSrvLocator._iEntityCreation.createDefaultAppCommunicationSettings(error);
            aAppCommunicationSettings.setMulticastSettings(aMulticastSettings);
            aAppCommunicationSettings.setP2PSettings(aP2PSettings);
            this._aServerDeviceSettings.setAppCommunicationSettings(aAppCommunicationSettings);
            var earlyAdopterClient = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            earlyAdopterClient.setValue(false);
            var aProjectId = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var aClientSettings = this._aSrvLocator._iEntityCreation.createDefaultClientSettings(error);
            aClientSettings.setEarlyAdopter(earlyAdopterClient);
            aClientSettings.setProjectId(aProjectId);
            this._aServerDeviceSettings.setClientSettings(aClientSettings);
            var baseServerAPIUrl = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            baseServerAPIUrl.setValue("https://mvision-qa.moodmedia.com/v5/");
            var baseServerUpgradeUrl = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            baseServerUpgradeUrl.setValue("https://mvision-qa.moodmedia.com/env_updates/software/ANDROID_PLAYER");
            var aCloudAPISettings = this._aSrvLocator._iEntityCreation.createDefaultCloudAPISettings(error);
            aCloudAPISettings.setBaseServerAPIUrl(baseServerAPIUrl);
            aCloudAPISettings.setBaseServerUpgradeUrl(baseServerUpgradeUrl);
            this._aServerDeviceSettings.setCloudAPISettings(aCloudAPISettings);
            var aNetworkNotAvailableMessage = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var aCustomDirs = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var aMusicTracksPurgeUntouched = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            aMusicTracksPurgeUntouched.setValue(-1);
            var aPurgeLogsUntouched = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            aPurgeLogsUntouched.setValue(7);
            var aPurgeMediaFilesUntouched = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            aPurgeMediaFilesUntouched.setValue(15);
            var aStatsUntouched = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            aStatsUntouched.setValue(1000);
            var aPurgeSettings = this._aSrvLocator._iEntityCreation.createDefaultPurgeSettings(error);
            aPurgeSettings.setCustomDirs(aCustomDirs);
            aPurgeSettings.setMusicTracksPurgeUntouched(aMusicTracksPurgeUntouched);
            aPurgeSettings.setPurgeLogsUntouched(aPurgeLogsUntouched);
            aPurgeSettings.setPurgeMediaFilesUntouched(aPurgeMediaFilesUntouched);
            aPurgeSettings.setStatsUntouched(aStatsUntouched);
            var aStoreTracksCountLimit = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            aStoreTracksCountLimit.setValue(1073741823);
            var aContentSettings = this._aSrvLocator._iEntityCreation.createDefaultContentSettings(error);
            aContentSettings.setNetworkNotAvailableMessage(aNetworkNotAvailableMessage);
            aContentSettings.setPurgeSettings(aPurgeSettings);
            aContentSettings.setStoreTracksCountLimit(aStoreTracksCountLimit);
            this._aServerDeviceSettings.setContentSettings(aContentSettings);
            var monitorDataUploadInterval = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            monitorDataUploadInterval.setValue(300);
            var playerFilesDownloadInterval = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            playerFilesDownloadInterval.setValue(600);
            var playlistFeedsUpdateInterval = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            playlistFeedsUpdateInterval.setValue(300);
            var playlistUpdateInterval = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            playlistUpdateInterval.setValue(600);
            var aCronSettings = this._aSrvLocator._iEntityCreation.createDefaultCronSettings(error);
            aCronSettings.setMonitorDataUploadInterval(monitorDataUploadInterval);
            aCronSettings.setPlayerFilesDownloadInterval(playerFilesDownloadInterval);
            aCronSettings.setPlaylistFeedsUpdateInterval(playlistFeedsUpdateInterval);
            aCronSettings.setPlaylistUpdateInterval(playlistUpdateInterval);
            this._aServerDeviceSettings.setCronSettings(aCronSettings);
            var brightness = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var density = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            density.setValue(160);
            var orientation = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            orientation.setValue("DEG_0");
            var resolution = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var resolutionValue = {
                "auto": false,
                "width": 1920,
                "height": 1080,
                "frequency": 60
            };
            resolution.setValue(resolutionValue);
            var scale = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            scale.setValue(100);
            var aDisplaySettings = this._aSrvLocator._iEntityCreation.createDefaultDisplaySettings(error);
            aDisplaySettings.setBrightness(brightness);
            aDisplaySettings.setDensity(density);
            aDisplaySettings.setOrientation(orientation);
            aDisplaySettings.setResolution(resolution);
            aDisplaySettings.setScale(scale);
            this._aServerDeviceSettings.setDisplaySettings(aDisplaySettings);
            var earlyAdopterHardware = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            earlyAdopterHardware.setValue(false);
            var knownSerialProductIds = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var knownSerialProductIdsValue = [];
            knownSerialProductIds.setValue(knownSerialProductIdsValue);
            var networkHostname = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var aHardwareSetts = this._aSrvLocator._iEntityCreation.createDefaultHardwareSetts(error);
            aHardwareSetts.setEarlyAdopter(earlyAdopterHardware);
            aHardwareSetts.setKnownSerialProductIds(knownSerialProductIds);
            aHardwareSetts.setNetworkHostname(networkHostname);
            this._aServerDeviceSettings.setHardwareSetts(aHardwareSetts);
            var activityLogsBufferMaxSizeBytes = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            activityLogsBufferMaxSizeBytes.setValue(5242880);
            var activityLogsAutoUploadIntervalMillis = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            activityLogsAutoUploadIntervalMillis.setValue(7200000);
            var activityLogsAutoUploadEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            activityLogsAutoUploadEnabled.setValue(false);
            var activityLogsFileEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            activityLogsFileEnabled.setValue(false);
            var playbackLogsFileEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            playbackLogsFileEnabled.setValue(true);
            var aLoggingSettings = this._aSrvLocator._iEntityCreation.createDefaultLoggingSettings(error);
            aLoggingSettings.setActivityLogsBufferMaxSizeBytes(activityLogsBufferMaxSizeBytes);
            aLoggingSettings.setActivityLogsAutoUploadIntervalMillis(activityLogsAutoUploadIntervalMillis);
            aLoggingSettings.setActivityLogsAutoUploadEnabled(activityLogsAutoUploadEnabled);
            aLoggingSettings.setActivityLogsFileEnabled(activityLogsFileEnabled);
            aLoggingSettings.setPlaybackLogsFileEnabled(playbackLogsFileEnabled);
            this._aServerDeviceSettings.setLoggingSettings(aLoggingSettings);
            var ethernetAllowConfigurationChange = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            ethernetAllowConfigurationChange.setValue(true);
            var ethernetEnableDHCP = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            ethernetEnableDHCP.setValue(true);
            var ethernetIterfaceEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            ethernetIterfaceEnabled.setValue(true);
            var ethernetDNS1 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var ethernetDNS2 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var ethernetGateway = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var ethernetIpAddress = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var ethernetNetmask = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var ethernetNetworkLinkSettings = this._aSrvLocator._iEntityCreation.createDefaultNetworkLinkSettings(error);
            ethernetNetworkLinkSettings.setDNS1(ethernetDNS1);
            ethernetNetworkLinkSettings.setDNS2(ethernetDNS2);
            ethernetNetworkLinkSettings.setGateway(ethernetGateway);
            ethernetNetworkLinkSettings.setIPAddress(ethernetIpAddress);
            ethernetNetworkLinkSettings.setNetmask(ethernetNetmask);
            var ethernetVlanConfigurations = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var ethernetSettings = this._aSrvLocator._iEntityCreation.createDefaultEthernetSettings(error);
            ethernetSettings.setAllowConfigurationChange(ethernetAllowConfigurationChange);
            ethernetSettings.setEnableDHCP(ethernetEnableDHCP);
            ethernetSettings.setInterfaceEnabled(ethernetIterfaceEnabled);
            ethernetSettings.setNetworkLinkSettings(ethernetNetworkLinkSettings);
            ethernetSettings.setVLANConfigurations(ethernetVlanConfigurations);
            var proxyEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            proxyEnabled.setValue(false);
            var proxyExcludedHosts = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var proxyExcludedHostsValue = [];
            proxyExcludedHosts.setValue(proxyExcludedHostsValue);
            var proxyHost = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var proxyPassword = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var proxyPort = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            proxyPort.setValue(80);
            var proxyUsername = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var httpProxySettings = this._aSrvLocator._iEntityCreation.createDefaultHTTPProxySettings(error);
            httpProxySettings.setProxyEnabled(proxyEnabled);
            httpProxySettings.setExcludedHosts(proxyExcludedHosts);
            httpProxySettings.setHost(proxyHost);
            httpProxySettings.setPassword(proxyPassword);
            httpProxySettings.setPort(proxyPort);
            httpProxySettings.setUsername(proxyUsername);
            var wifiAllowConfigurationChange = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            wifiAllowConfigurationChange.setValue(true);
            var wifiEnableDHCP = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            wifiEnableDHCP.setValue(true);
            var wifiIterfaceEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            wifiIterfaceEnabled.setValue(true);
            var wifiDNS1 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var wifiDNS2 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var wifiGateway = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var wifiIpAddress = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var wifiNetmask = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var wifiNetworkLinkSettings = this._aSrvLocator._iEntityCreation.createDefaultNetworkLinkSettings(error);
            wifiNetworkLinkSettings.setDNS1(wifiDNS1);
            wifiNetworkLinkSettings.setDNS2(wifiDNS2);
            wifiNetworkLinkSettings.setGateway(wifiGateway);
            wifiNetworkLinkSettings.setIPAddress(wifiIpAddress);
            wifiNetworkLinkSettings.setNetmask(wifiNetmask);
            var wifiVlanConfigurations = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var authenticationType = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            authenticationType.setValue("NONE");
            var password = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var ssid = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var wifiAccessPointSettings = this._aSrvLocator._iEntityCreation.createDefaultWifiAccessPointSettings(error);
            wifiAccessPointSettings.setAuthenticationType(authenticationType);
            wifiAccessPointSettings.setPassword(password);
            wifiAccessPointSettings.setSSID(ssid);
            var wifiSettings = this._aSrvLocator._iEntityCreation.createDefaultWifiSettings(error);
            wifiSettings.setAllowConfigurationChange(wifiAllowConfigurationChange);
            wifiSettings.setEnableDHCP(wifiEnableDHCP);
            wifiSettings.setInterfaceEnabled(wifiIterfaceEnabled);
            wifiSettings.setNetworkLinkSettings(wifiNetworkLinkSettings);
            wifiSettings.setVLANConfigurations(wifiVlanConfigurations);
            wifiSettings.setWifiAccessPointSettings(wifiAccessPointSettings);
            var aNetworkSettings = this._aSrvLocator._iEntityCreation.createDefaultNetworkSettings(error);
            aNetworkSettings.setEthernetSettings(ethernetSettings);
            aNetworkSettings.setHTTPProxySettings(httpProxySettings);
            aNetworkSettings.setWifiSettings(wifiSettings);
            this._aServerDeviceSettings.setNetworkSettings(aNetworkSettings);
            var adbEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            adbEnabled.setValue(false);
            var usePowerKeyForScreenOff = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            usePowerKeyForScreenOff.setValue(true);
            var zidooSoundOutputRaw = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            zidooSoundOutputRaw.setValue(true);
            var wsusURL = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var aPlatformSettings = this._aSrvLocator._iEntityCreation.createDefaultPlatformSettings(error);
            aPlatformSettings.setAdbEnabled(adbEnabled);
            aPlatformSettings.setUsePowerKeyForScreenOff(usePowerKeyForScreenOff);
            aPlatformSettings.setWsusUrl(wsusURL);
            aPlatformSettings.setZidooSoundOutputRaw(zidooSoundOutputRaw);
            this._aServerDeviceSettings.setPlatformSettings(aPlatformSettings);
            var duckingPercent = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            duckingPercent.setValue(0);
            var duckingDuration = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            duckingDuration.setValue(2000);
            var musicCrossfadeMode = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            musicCrossfadeMode.setValue("STATIC");
            var musicSmoothStopPercent = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            musicSmoothStopPercent.setValue(30);
            var musicSmoothStopDurationMillis = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            musicSmoothStopDurationMillis.setValue(3000);
            var musicStaticCrossfadeDurationMillis = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            musicStaticCrossfadeDurationMillis.setValue(5000);
            var musicTracksVolume = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            musicTracksVolume.setValue(100);
            var volumePercentFactorZoneLeft = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            volumePercentFactorZoneLeft.setValue(100);
            var volumePercentFactorZoneRight = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            volumePercentFactorZoneRight.setValue(100);
            var audioPlayerType = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var volumeTracksVolumeZoneLeft = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            volumeTracksVolumeZoneLeft.setValue(100);
            var volumeTracksVolumeZoneRight = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            volumeTracksVolumeZoneRight.setValue(100);
            var audioSettings = this._aSrvLocator._iEntityCreation.createDefaultAudioSettings(error);
            audioSettings.setDuckingPercent(duckingPercent);
            audioSettings.setDuckingDuration(duckingDuration);
            audioSettings.setMusicCrossfadeMode(musicCrossfadeMode);
            audioSettings.setMusicSmoothStopPercent(musicSmoothStopPercent);
            audioSettings.setMusicSmoothStopDurationMillis(musicSmoothStopDurationMillis);
            audioSettings.setMusicStaticCrossfadeDurationMillis(musicStaticCrossfadeDurationMillis);
            audioSettings.setMusicTracksVolume(musicTracksVolume);
            audioSettings.setVolumePercentFactorZoneLeft(volumePercentFactorZoneLeft);
            audioSettings.setVolumePercentFactorZoneRight(volumePercentFactorZoneRight);
            audioSettings.setAudioPlayerType(audioPlayerType);
            audioSettings.setVolumeTracksVolumeZoneLeft(volumeTracksVolumeZoneLeft);
            audioSettings.setVolumeTracksVolumeZoneRight(volumeTracksVolumeZoneRight);
            var useAirRuntime = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            useAirRuntime.setValue(false);
            var flashMediaSettings = this._aSrvLocator._iEntityCreation.createDefaultFlashMediaSettings(error);
            flashMediaSettings.setUseAirRuntime(useAirRuntime);
            var forceReportNowPlayingData = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            forceReportNowPlayingData.setValue(false);
            var playlistUpdateInstantReload = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            playlistUpdateInstantReload.setValue(false);
            var multiZoneNoMediaFillColor = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            multiZoneNoMediaFillColor.setValue("#00000000");
            var onTouchAction = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var onTouchActionValue = {
                "type": "DO_NOTHING",
                "parameters": null
            };
            onTouchAction.setValue(onTouchActionValue);
            var playbackInteractionSettings = this._aSrvLocator._iEntityCreation.createDefaultPlaybackInteractionSettings(error);
            playbackInteractionSettings.setOnTouchAction(onTouchAction);
            var playbackRestartTimeoutMillis = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            playbackRestartTimeoutMillis.setValue(60000);
            var syncPlaybackTimeoutMillis = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            syncPlaybackTimeoutMillis.setValue(500);
            var hintEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            hintEnabled.setValue(true);
            var mediaFrameBgColor = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            mediaFrameBgColor.setValue("#1a1a1a");
            var mediaFrameFocusBgColor = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            mediaFrameFocusBgColor.setValue("#cf102d");
            var mediaListZoneFrameLandscape = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var mediaListZoneFrameLandscapeValue = {
                "top": 10.0,
                "left": 4.0,
                "width": 92.0,
                "height": 80.0
            };
            mediaListZoneFrameLandscape.setValue(mediaListZoneFrameLandscapeValue);
            var mediaListZoneFramePortrait = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var mediaListZoneFramePortraitValue = {
                "top": 10.0,
                "left": 4.0,
                "width": 92.0,
                "height": 80.0
            };
            mediaListZoneFramePortrait.setValue(mediaListZoneFramePortraitValue);
            var mediaTitleTextColorFocused = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            mediaTitleTextColorFocused.setValue("#e8e8e8");
            var mediaTitleTextColor = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            mediaTitleTextColor.setValue("#e8e8e8");
            var timeoutIntervalSecs = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            timeoutIntervalSecs.setValue(300);
            var vodSettings = this._aSrvLocator._iEntityCreation.createDefaultVODSettings(error);
            vodSettings.setHintEnabled(hintEnabled);
            vodSettings.setMediaFrameBgColor(mediaFrameBgColor);
            vodSettings.setMediaFrameFocusBgColor(mediaFrameFocusBgColor);
            vodSettings.setMediaListZoneFrameLandscape(mediaListZoneFrameLandscape);
            vodSettings.setMediaListZoneFramePortrait(mediaListZoneFramePortrait);
            vodSettings.setMediaTitleTextColorFocused(mediaTitleTextColorFocused);
            vodSettings.setMediaTitleTextColor(mediaTitleTextColor);
            vodSettings.setTimeoutIntervalSecs(timeoutIntervalSecs);
            var playerType = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var renderingMode = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var videoSettings = this._aSrvLocator._iEntityCreation.createDefaultVideoSettings(error);
            videoSettings.setPlayerType(playerType);
            videoSettings.setRenderingMode(renderingMode);
            var watchdogEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            watchdogEnabled.setValue(true);
            var allowedUrls = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var purgeCacheOnStart = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            purgeCacheOnStart.setValue(false);
            var crosswalkUseTextureView = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            crosswalkUseTextureView.setValue(true);
            var webPageSettings = this._aSrvLocator._iEntityCreation.createDefaultWebPageSettings(error);
            webPageSettings.setAllowedUrls(allowedUrls);
            webPageSettings.setPurgeCacheOnStart(purgeCacheOnStart);
            webPageSettings.setCrosswalkUseTextureView(crosswalkUseTextureView);
            var aPlaybackSettings = this._aSrvLocator._iEntityCreation.createDefaultPlaybackSettings(error);
            aPlaybackSettings.setAudioSettings(audioSettings);
            aPlaybackSettings.setFlashMediaSettings(flashMediaSettings);
            aPlaybackSettings.setForceReportNowPlayingData(forceReportNowPlayingData);
            aPlaybackSettings.setPlaylistUpdateInstantReload(playlistUpdateInstantReload);
            aPlaybackSettings.setMultiZoneNoMediaFillColor(multiZoneNoMediaFillColor);
            aPlaybackSettings.setPlaybackInteractionSettings(playbackInteractionSettings);
            aPlaybackSettings.setPlaybackRestartTimeoutMillis(playbackRestartTimeoutMillis);
            aPlaybackSettings.setSyncPlaybackTimeoutMillis(syncPlaybackTimeoutMillis);
            aPlaybackSettings.setVODSettings(vodSettings);
            aPlaybackSettings.setVideoSettings(videoSettings);
            aPlaybackSettings.setWatchdogEnabled(watchdogEnabled);
            aPlaybackSettings.setWebPageSettings(webPageSettings);
            this._aServerDeviceSettings.setPlaybackSettings(aPlaybackSettings);
            var diagnosticsAppPassword = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var encryptMediaFiles = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            encryptMediaFiles.setValue(false);
            var playerConfigAppPassword = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var vodAppPassword = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var aSecuritySettings = this._aSrvLocator._iEntityCreation.createDefaultSecuritySettings(error);
            aSecuritySettings.setDiagnosticsAppPassword(diagnosticsAppPassword);
            aSecuritySettings.setEncryptMediaFiles(encryptMediaFiles);
            aSecuritySettings.setPlayerConfigAppPassword(playerConfigAppPassword);
            aSecuritySettings.setVodAppPassword(vodAppPassword);
            this._aServerDeviceSettings.setSecuritySettings(aSecuritySettings);
            var commandsMap = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var commandsMapValue = {};
            commandsMap.setValue(commandsMapValue);
            var aSerialDisplayCommandsSettings = this._aSrvLocator._iEntityCreation.createDefaultSerialDisplayCommandsSettings(error);
            aSerialDisplayCommandsSettings.setCommandsMap(commandsMap);
            this._aServerDeviceSettings.setSerialDisplayCommandsSettings(aSerialDisplayCommandsSettings);
            var bandwidthSettings = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var contentDownloadWindows = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var latitude = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var longitude = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var openingHour = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var maintenanceWindow = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var siteId = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var sleepMode = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            sleepMode.setValue("PLAYBACK");
            var zipCode = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap1 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap2 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap3 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap4 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap5 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap6 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap7 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap8 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap9 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap10 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap11 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap12 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap13 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap14 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var customParamsMap15 = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var aSiteSettings = this._aSrvLocator._iEntityCreation.createDefaultSiteSettings(error);
            aSiteSettings.setBandwidthSettings(bandwidthSettings);
            aSiteSettings.setContentDownloadWindows(contentDownloadWindows);
            aSiteSettings.setLatitude(latitude);
            aSiteSettings.setLongitude(longitude);
            aSiteSettings.setOpeningHour(openingHour);
            aSiteSettings.setSiteId(siteId);
            aSiteSettings.setSleepMode(sleepMode);
            aSiteSettings.setZipCode(zipCode);
            aSiteSettings.setCustomParamsMap1(customParamsMap1);
            aSiteSettings.setCustomParamsMap2(customParamsMap2);
            aSiteSettings.setCustomParamsMap3(customParamsMap3);
            aSiteSettings.setCustomParamsMap4(customParamsMap4);
            aSiteSettings.setCustomParamsMap5(customParamsMap5);
            aSiteSettings.setCustomParamsMap6(customParamsMap6);
            aSiteSettings.setCustomParamsMap7(customParamsMap7);
            aSiteSettings.setCustomParamsMap8(customParamsMap8);
            aSiteSettings.setCustomParamsMap9(customParamsMap9);
            aSiteSettings.setCustomParamsMap10(customParamsMap10);
            aSiteSettings.setCustomParamsMap11(customParamsMap11);
            aSiteSettings.setCustomParamsMap12(customParamsMap12);
            aSiteSettings.setCustomParamsMap13(customParamsMap13);
            aSiteSettings.setCustomParamsMap14(customParamsMap14);
            aSiteSettings.setCustomParamsMap15(customParamsMap15);
            this._aServerDeviceSettings.setSiteSettings(aSiteSettings);
            var debugViewVisible = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            debugViewVisible.setValue(false);
            var deleteMediaOnLaunch = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            deleteMediaOnLaunch.setValue(false);
            var deletePlaylistOnLaunch = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            deletePlaylistOnLaunch.setValue(false);
            var monitoringDisabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            monitoringDisabled.setValue(false);
            var networkSetupDisabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            networkSetupDisabled.setValue(false);
            var playbackLogsUploadDisabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            playbackLogsUploadDisabled.setValue(false);
            var playerFilesUpdateDisabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            playerFilesUpdateDisabled.setValue(false);
            var crashLoggerEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            crashLoggerEnabled.setValue(false);
            var lastPlayerChangeId = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var streamMusicTracks = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            streamMusicTracks.setValue(false);
            var useHeadlessSetupWebAppDevBuild = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            useHeadlessSetupWebAppDevBuild.setValue(false);
            var debugSettings = this._aSrvLocator._iEntityCreation.createDefaultDebugSettings(error);
            debugSettings.setDebugViewVisible(debugViewVisible);
            debugSettings.setDeleteMediaOnLaunch(deleteMediaOnLaunch);
            debugSettings.setDeletePlaylistOnLaunch(deletePlaylistOnLaunch);
            debugSettings.setMonitoringDisabled(monitoringDisabled);
            debugSettings.setNetworkSetupDisabled(networkSetupDisabled);
            debugSettings.setPlaybackLogsUploadDisabled(playbackLogsUploadDisabled);
            debugSettings.setPlayerFilesUpdateDisabled(playerFilesUpdateDisabled);
            debugSettings.setCrashLoggerEnabled(crashLoggerEnabled);
            debugSettings.setLastPlayerChangeId(lastPlayerChangeId);
            debugSettings.setStreamMusicTracks(streamMusicTracks);
            debugSettings.setUseHeadlessSetupWebAppDevBuild(useHeadlessSetupWebAppDevBuild);
            var earlyAdopter = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            earlyAdopter.setValue(false);
            var httpServiceMaxWorkers = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            httpServiceMaxWorkers.setValue(3);
            var headlessSetupEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            headlessSetupEnabled.setValue(true);
            var liveCommandsEnabled = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            liveCommandsEnabled.setValue(true);
            var projectIdSoftwareSettings = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var exceptions = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var resetMode = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            resetMode.setValue("REBOOT_DEVICE");
            var resetTime = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            resetTime.setValue("03:00:00");
            var resetSettings = this._aSrvLocator._iEntityCreation.createDefaultResetSettings(error);
            resetSettings.setExceptions(exceptions);
            resetSettings.setResetMode(resetMode);
            resetSettings.setResetTime(resetTime);
            var aSoftwareSettings = this._aSrvLocator._iEntityCreation.createDefaultSoftwareSettings(error);
            aSoftwareSettings.setDebugSettings(debugSettings);
            aSoftwareSettings.setEarlyAdopter(earlyAdopter);
            aSoftwareSettings.setHttpServiceMaxWorkers(httpServiceMaxWorkers);
            aSoftwareSettings.setHeadlessSetupEnabled(headlessSetupEnabled);
            aSoftwareSettings.setLiveCommandsEnabled(liveCommandsEnabled);
            aSoftwareSettings.setProjectId(projectIdSoftwareSettings);
            aSoftwareSettings.setResetSettings(resetSettings);
            this._aServerDeviceSettings.setSoftwareSettings(aSoftwareSettings);
            var volumeLevels = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var volumeLevelsValue = {};
            volumeLevels.setValue(volumeLevelsValue);
            var aSoundSettings = this._aSrvLocator._iEntityCreation.createDefaultSoundSettings(error);
            aSoundSettings.setVolumeLevels(volumeLevels);
            this._aServerDeviceSettings.setSoundSettings(aSoundSettings);
            var customNtpServerUrl = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            var syncMode = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            syncMode.setValue("NTP_DEFAULT");
            var timeSyncSettings = this._aSrvLocator._iEntityCreation.createDefaultTimeSyncSettings(error);
            timeSyncSettings.setCustomNtpServerUrl(customNtpServerUrl);
            timeSyncSettings.setSyncMode(syncMode);
            var timezone = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
            timezone.setValue("US/Eastern");
            var aTimeSettings = this._aSrvLocator._iEntityCreation.createDefaultTimeSettings(error);
            aTimeSettings.setTimeSyncSettings(timeSyncSettings);
            aTimeSettings.setTimezone(timezone);
            this._aServerDeviceSettings.setTimeSettings(aTimeSettings);
        };
        RE_ServerDeviceSettingsConfiguration.prototype.populateSettingFromJson = function (jsonSettingString, aDeviceSetting) {
            if (aDeviceSetting != null) {
                var jsonSetting = this._jsonSettings[jsonSettingString];
                if (jsonSetting !== undefined && jsonSetting.value !== undefined && jsonSetting.timestamp !== undefined) {
                    var jsonSettingTimestamp = jsonSetting.timestamp;
                    var deviceTimestamp = aDeviceSetting.getTimestamp();
                    if (typeof jsonSettingTimestamp == "number" && jsonSettingTimestamp >= deviceTimestamp) {
                        this._bServerDeviceSettingsChanged = true;
                        var jsonSettingValue = jsonSetting.value;
                        aDeviceSetting.setValue(jsonSettingValue);
                        aDeviceSetting.setTimestamp(jsonSettingTimestamp);
                    }
                }
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setAppCommunicationSettings = function (aServerDeviceSettings) {
            var aAppCommunicationSettings = aServerDeviceSettings.getAppCommunicationSettings();
            if (aAppCommunicationSettings != null) {
                var aMulticastSettings = aAppCommunicationSettings.getMulticastSettings();
                if (aMulticastSettings != null) {
                    var strMulticastAddres = "appCommunicationSettings.multicastSettings.defaultMulticastAddress";
                    var strMulticastPort = "appCommunicationSettings.multicastSettings.defaultMulticastPort";
                    this.populateSettingFromJson(strMulticastAddres, aMulticastSettings.getAddress());
                    this.populateSettingFromJson(strMulticastPort, aMulticastSettings.getPort());
                }
                var aP2PSettings = aAppCommunicationSettings.getP2PSettings();
                if (aP2PSettings != null) {
                    var strP2PPort = "appCommunicationSettings.p2pSettings.port";
                    var strP2PServerEnabled = "appCommunicationSettings.p2pSettings.serverEnabled";
                    var strP2PClientEnabled = "appCommunicationSettings.p2pSettings.clientEnabled";
                    this.populateSettingFromJson(strP2PPort, aP2PSettings.getPort());
                    this.populateSettingFromJson(strP2PServerEnabled, aP2PSettings.getServerEnabled());
                    this.populateSettingFromJson(strP2PClientEnabled, aP2PSettings.getClientEnabled());
                }
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setClientSettings = function (aServerDeviceSettings) {
            var aClientSettings = aServerDeviceSettings.getClientSettings();
            if (aClientSettings != null) {
                var strEarlyAdopter = "clientSettings.earlyAdopter";
                var strProjectId = "clientSettings.projectId";
                this.populateSettingFromJson(strEarlyAdopter, aClientSettings.getEarlyAdopter());
                this.populateSettingFromJson(strProjectId, aClientSettings.getProjectId());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setCloudAPISettings = function (aServerDeviceSettings) {
            var aCloudAPISettings = aServerDeviceSettings.getCloudAPISettings();
            if (aCloudAPISettings != null) {
                var strBaseServerAPIUrl = "cloudApiSettings.baseServerApiUrl";
                var strBaseServerUpgradeUrl = "cloudApiSettings.baseServerUpgradeUrl";
                this.populateSettingFromJson(strBaseServerAPIUrl, aCloudAPISettings.getBaseServerAPIUrl());
                this.populateSettingFromJson(strBaseServerUpgradeUrl, aCloudAPISettings.getBaseServerUpgradeUrl());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setContentSettings = function (aServerDeviceSettings) {
            var aContentSettings = aServerDeviceSettings.getContentSettings();
            if (aContentSettings != null) {
                var strNetworkNotAvailableMessage = "contentSettings.networkNotAvailableMessage";
                var strStoredTracksCountLimit = "contentSettings.storedTracksCountLimit";
                this.populateSettingFromJson(strNetworkNotAvailableMessage, aContentSettings.getNetworkNotAvailableMessage());
                this.populateSettingFromJson(strStoredTracksCountLimit, aContentSettings.getStoreTracksCountLimit());
                var aPurgeSettings = aContentSettings.getPurgeSettings();
                if (aPurgeSettings != null) {
                    var strCustomDirectories = "contentSettings.purgeSettings.customDirectories";
                    var strLogsPurgeUntouchedDays = "contentSettings.purgeSettings.logsPurgeUntouchedDays";
                    var strMediaFilesPurgeUntouchedDays = "contentSettings.purgeSettings.mediaFilesPurgeUntouchedDays";
                    var strStatisticsPurgeUntouchedDays = "contentSettings.purgeSettings.statisticsPurgeUntouchedDays";
                    var strMusicTracksPurgeUntouchedDays = "contentSettings.purgeSettings.musicTracksPurgeUntouchedDays";
                    this.populateSettingFromJson(strCustomDirectories, aPurgeSettings.getCustomDirs());
                    this.populateSettingFromJson(strLogsPurgeUntouchedDays, aPurgeSettings.getPurgeLogsUntouched());
                    this.populateSettingFromJson(strMediaFilesPurgeUntouchedDays, aPurgeSettings.getPurgeMediaFilesUntouched());
                    this.populateSettingFromJson(strStatisticsPurgeUntouchedDays, aPurgeSettings.getStatsUntouched());
                    this.populateSettingFromJson(strMusicTracksPurgeUntouchedDays, aPurgeSettings.getMusicTracksPurgeUntouched());
                }
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setCronSettings = function (aServerDeviceSettings) {
            var aCronSettings = aServerDeviceSettings.getCronSettings();
            if (aCronSettings != null) {
                var strMonitorDataUpload = "cronSettings.monitorDataUploadIntervalSeconds";
                var strPlayerFilesDownload = "cronSettings.playerFilesDownloadIntervalSeconds";
                var strPlaylistFeedsUpdate = "cronSettings.playlistFeedsUpdateIntervalSeconds";
                var strPlaylistUpdate = "cronSettings.playlistUpdateIntervalSeconds";
                this.populateSettingFromJson(strMonitorDataUpload, aCronSettings.getMonitorDataUploadInterval());
                this.populateSettingFromJson(strPlayerFilesDownload, aCronSettings.getPlayerFilesDownloadInterval());
                this.populateSettingFromJson(strPlaylistFeedsUpdate, aCronSettings.getPlaylistFeedsUpdateInterval());
                this.populateSettingFromJson(strPlaylistUpdate, aCronSettings.getPlaylistUpdateInterval());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setDisplaySettings = function (aServerDeviceSettings) {
            var aDisplaySettings = aServerDeviceSettings.getDisplaySettings();
            if (aDisplaySettings != null) {
                var strBrightness = "displaySettings.displayBrightness";
                var strDensity = "displaySettings.displayDensity";
                var strOrientation = "displaySettings.displayOrientation";
                var strResolution = "displaySettings.displayResolution";
                var strScale = "displaySettings.displayScale";
                this.populateSettingFromJson(strBrightness, aDisplaySettings.getBrightness());
                this.populateSettingFromJson(strDensity, aDisplaySettings.getDensity());
                this.populateSettingFromJson(strOrientation, aDisplaySettings.getOrientation());
                this.populateSettingFromJson(strResolution, aDisplaySettings.getResolution());
                this.populateSettingFromJson(strScale, aDisplaySettings.getScale());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setHardwareSetts = function (aServerDeviceSettings) {
            var aHardwareSetts = aServerDeviceSettings.getHardwareSetts();
            if (aHardwareSetts != null) {
                var strEarlyAdopter = "hardwareSettings.earlyAdopter";
                var strKnownSerialProductIds = "hardwareSettings.knownSerialProductIds";
                var strNetworkHostname = "hardwareSettings.networkHostname";
                this.populateSettingFromJson(strEarlyAdopter, aHardwareSetts.getEarlyAdopter());
                this.populateSettingFromJson(strKnownSerialProductIds, aHardwareSetts.getKnownSerialProductIds());
                this.populateSettingFromJson(strNetworkHostname, aHardwareSetts.getNetworkHostname());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setLoggingSettings = function (aServerDeviceSettings) {
            var aLoggingSettings = aServerDeviceSettings.getLoggingSettings();
            if (aLoggingSettings != null) {
                var strActivityLogsBufferMaxSizeBytes = "loggingSettings.activityLogsBufferMaxSizeBytes";
                var strActivityLogsAutoUploadIntervalMillis = "loggingSettings.activityLogsAutoUploadIntervalMillis";
                var strActivityLogsAutoUploadEnabled = "loggingSettings.activityLogsAutoUploadEnabled";
                var strActivityLogsFileEnabled = "loggingSettings.activityLogsFileEnabled";
                var strPlaybackLogsFileEnabled = "loggingSettings.playbackLogsFileEnabled";
                this.populateSettingFromJson(strActivityLogsBufferMaxSizeBytes, aLoggingSettings.getActivityLogsBufferMaxSizeBytes());
                this.populateSettingFromJson(strActivityLogsAutoUploadIntervalMillis, aLoggingSettings.getActivityLogsAutoUploadIntervalMillis());
                this.populateSettingFromJson(strActivityLogsAutoUploadEnabled, aLoggingSettings.getActivityLogsAutoUploadEnabled());
                this.populateSettingFromJson(strActivityLogsFileEnabled, aLoggingSettings.getActivityLogsFileEnabled());
                this.populateSettingFromJson(strPlaybackLogsFileEnabled, aLoggingSettings.getPlaybackLogsFileEnabled());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setNetworkSettings = function (aServerDeviceSettings) {
            var aNetworkSettings = aServerDeviceSettings.getNetworkSettings();
            if (aNetworkSettings != null) {
                var ethernetSettings = aNetworkSettings.getEthernetSettings();
                if (ethernetSettings != null) {
                    var strEthernetAllowConfigurationChange = "networkSettings.ethernetSettings.allowConfigurationChange";
                    var strEthernetInterfaceEnabled = "networkSettings.ethernetSettings.interfaceEnabled";
                    var strEthernetDhcpEnabled = "networkSettings.ethernetSettings.dhcpEnabled";
                    var strEthernetVlanConfigurations = "networkSettings.ethernetSettings.vlanConfigurations";
                    this.populateSettingFromJson(strEthernetAllowConfigurationChange, ethernetSettings.getAllowConfigurationChange());
                    this.populateSettingFromJson(strEthernetInterfaceEnabled, ethernetSettings.getInterfaceEnabled());
                    this.populateSettingFromJson(strEthernetDhcpEnabled, ethernetSettings.getEnableDHCP());
                    this.populateSettingFromJson(strEthernetVlanConfigurations, ethernetSettings.getVLANConfigurations());
                    var aEthernetNetworkLinkSettings = ethernetSettings.getNetworkLinkSettings();
                    if (aEthernetNetworkLinkSettings != null) {
                        var strEthernetNetworkLinkDns1 = "networkSettings.ethernetSettings.networkLinkSettings.dns1";
                        var strEthernetNetworkLinkDns2 = "networkSettings.ethernetSettings.networkLinkSettings.dns2";
                        var strEthernetNetworkLinkGateway = "networkSettings.ethernetSettings.networkLinkSettings.gateway";
                        var strEthernetNetworkLinkIpAddress = "networkSettings.ethernetSettings.networkLinkSettings.ipAddress";
                        var strEthernetNetworkLinkNetmask = "networkSettings.ethernetSettings.networkLinkSettings.netmask";
                        this.populateSettingFromJson(strEthernetNetworkLinkDns1, aEthernetNetworkLinkSettings.getDNS1());
                        this.populateSettingFromJson(strEthernetNetworkLinkDns2, aEthernetNetworkLinkSettings.getDNS2());
                        this.populateSettingFromJson(strEthernetNetworkLinkGateway, aEthernetNetworkLinkSettings.getGateway());
                        this.populateSettingFromJson(strEthernetNetworkLinkIpAddress, aEthernetNetworkLinkSettings.getIPAddress());
                        this.populateSettingFromJson(strEthernetNetworkLinkNetmask, aEthernetNetworkLinkSettings.getNetmask());
                    }
                }
                var httpProxySettings = aNetworkSettings.getHTTPProxySettings();
                if (httpProxySettings != null) {
                    var strHttpProxyProxyEnabled = "networkSettings.httpProxySettings.proxyEnabled";
                    var strHttpProxyExcludedHosts = "networkSettings.httpProxySettings.excludedHostsList";
                    var strHttpProxyHost = "networkSettings.httpProxySettings.host";
                    var strHttpProxyPassword = "networkSettings.httpProxySettings.password";
                    var strHttpProxyPort = "networkSettings.httpProxySettings.port";
                    var strHttpProxyUsername = "networkSettings.httpProxySettings.username";
                    this.populateSettingFromJson(strHttpProxyProxyEnabled, httpProxySettings.getProxyEnabled());
                    this.populateSettingFromJson(strHttpProxyExcludedHosts, httpProxySettings.getExcludedHosts());
                    this.populateSettingFromJson(strHttpProxyHost, httpProxySettings.getHost());
                    this.populateSettingFromJson(strHttpProxyPassword, httpProxySettings.getPassword());
                    this.populateSettingFromJson(strHttpProxyPort, httpProxySettings.getPort());
                    this.populateSettingFromJson(strHttpProxyUsername, httpProxySettings.getUsername());
                }
                var wifiSettings = aNetworkSettings.getWifiSettings();
                if (wifiSettings != null) {
                    var strWifiAllowConfigurationChange = "networkSettings.wifiSettings.allowConfigurationChange";
                    var strWifiInterfaceEnabled = "networkSettings.wifiSettings.interfaceEnabled";
                    var strWifiDhcpEnabled = "networkSettings.wifiSettings.dhcpEnabled";
                    var strWifiVlanConfigurations = "networkSettings.wifiSettings.vlanConfigurations";
                    this.populateSettingFromJson(strWifiAllowConfigurationChange, wifiSettings.getAllowConfigurationChange());
                    this.populateSettingFromJson(strWifiInterfaceEnabled, wifiSettings.getInterfaceEnabled());
                    this.populateSettingFromJson(strWifiDhcpEnabled, wifiSettings.getEnableDHCP());
                    this.populateSettingFromJson(strWifiVlanConfigurations, wifiSettings.getVLANConfigurations());
                    var aWifiNetworkLinkSettings = wifiSettings.getNetworkLinkSettings();
                    if (aWifiNetworkLinkSettings != null) {
                        var strWifiNetworkLinkDns1 = "networkSettings.wifiSettings.networkLinkSettings.dns1";
                        var strWifiNetworkLinkDns2 = "networkSettings.wifiSettings.networkLinkSettings.dns2";
                        var strWifiNetworkLinkGateway = "networkSettings.wifiSettings.networkLinkSettings.gateway";
                        var strWifiNetworkLinkIpAddress = "networkSettings.wifiSettings.networkLinkSettings.ipAddress";
                        var strWifiNetworkLinkNetmask = "networkSettings.wifiSettings.networkLinkSettings.netmask";
                        this.populateSettingFromJson(strWifiNetworkLinkDns1, aWifiNetworkLinkSettings.getDNS1());
                        this.populateSettingFromJson(strWifiNetworkLinkDns2, aWifiNetworkLinkSettings.getDNS2());
                        this.populateSettingFromJson(strWifiNetworkLinkGateway, aWifiNetworkLinkSettings.getGateway());
                        this.populateSettingFromJson(strWifiNetworkLinkIpAddress, aWifiNetworkLinkSettings.getIPAddress());
                        this.populateSettingFromJson(strWifiNetworkLinkNetmask, aWifiNetworkLinkSettings.getNetmask());
                    }
                    var aWifiAccessPointSettings = wifiSettings.getWifiAccessPointSettings();
                    if (aWifiAccessPointSettings != null) {
                        var strWifiSettingsAccessPointSSID = "networkSettings.wifiSettings.wifiAccessPointSettings.ssid";
                        var strWifiSettingsAccessPointPassword = "networkSettings.wifiSettings.wifiAccessPointSettings.password";
                        var strWifiSettingsAccessPointAuthenticationType = "networkSettings.wifiSettings.wifiAccessPointSettings.authenticationType";
                        this.populateSettingFromJson(strWifiSettingsAccessPointSSID, aWifiAccessPointSettings.getSSID());
                        this.populateSettingFromJson(strWifiSettingsAccessPointPassword, aWifiAccessPointSettings.getPassword());
                        this.populateSettingFromJson(strWifiSettingsAccessPointAuthenticationType, aWifiAccessPointSettings.getAuthenticationType());
                    }
                }
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setPlatformSettings = function (aServerDeviceSettings) {
            var aPlatformSettings = aServerDeviceSettings.getPlatformSettings();
            if (aPlatformSettings != null) {
                var strAdbEnabled = "platformSettings.adbEnabled";
                var strUsePowerKeyForScreenOff = "platformSettings.usePowerKeyForScreenOff";
                var strWsusUrl = "platformSettings.wsusUrl";
                var strZidooSoundOutputRaw = "platformSettings.zidooSoundOutputRaw";
                this.populateSettingFromJson(strAdbEnabled, aPlatformSettings.getAdbEnabled());
                this.populateSettingFromJson(strUsePowerKeyForScreenOff, aPlatformSettings.getUsePowerKeyForScreenOff());
                this.populateSettingFromJson(strWsusUrl, aPlatformSettings.getWsusUrl());
                this.populateSettingFromJson(strZidooSoundOutputRaw, aPlatformSettings.getZidooSoundOutputRaw());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setPlaybackSettings = function (aServerDeviceSettings) {
            var aPlaybackSettings = aServerDeviceSettings.getPlaybackSettings();
            if (aPlaybackSettings != null) {
                var audioSettings = aPlaybackSettings.getAudioSettings();
                if (audioSettings != null) {
                    var strDuckingPercent = "playbackSettings.audioSettings.duckingPercent";
                    var strDuckingDuration = "playbackSettings.audioSettings.duckingDuration";
                    var strMusicCrossfadeMode = "playbackSettings.audioSettings.musicCrossfadeMode";
                    var strMusicSmoothStopPercent = "playbackSettings.audioSettings.musicSmoothStopPercent";
                    var strMusicSmoothStopDurationMillis = "playbackSettings.audioSettings.musicSmoothStopDurationMillis";
                    var strMusicStaticCrossfadeDurationMillis = "playbackSettings.audioSettings.musicStaticCrossfadeDurationMillis";
                    var strMusicTracksVolume = "playbackSettings.audioSettings.musicTracksVolume";
                    var strVolumePercentFactorZoneLeft = "playbackSettings.audioSettings.volumePercentFactorZoneLeft";
                    var strVolumePercentFactorZoneRight = "playbackSettings.audioSettings.volumePercentFactorZoneRight";
                    var strAudioPlayerType = "playbackSettings.audioSettings.audioPlayerType";
                    var strVolumeTracksVolumeZoneLeft = "playbackSettings.audioSettings.musicTracksVolumeZoneLeft";
                    var strVolumeTracksVolumeZoneRight = "playbackSettings.audioSettings.musicTracksVolumeZoneRight";
                    this.populateSettingFromJson(strDuckingPercent, audioSettings.getDuckingPercent());
                    this.populateSettingFromJson(strDuckingDuration, audioSettings.getDuckingDuration());
                    this.populateSettingFromJson(strMusicCrossfadeMode, audioSettings.getMusicCrossfadeMode());
                    this.populateSettingFromJson(strMusicSmoothStopPercent, audioSettings.getMusicSmoothStopPercent());
                    this.populateSettingFromJson(strMusicSmoothStopDurationMillis, audioSettings.getMusicSmoothStopDurationMillis());
                    this.populateSettingFromJson(strMusicStaticCrossfadeDurationMillis, audioSettings.getMusicStaticCrossfadeDurationMillis());
                    this.populateSettingFromJson(strMusicTracksVolume, audioSettings.getMusicTracksVolume());
                    this.populateSettingFromJson(strVolumePercentFactorZoneLeft, audioSettings.getVolumePercentFactorZoneLeft());
                    this.populateSettingFromJson(strVolumePercentFactorZoneRight, audioSettings.getVolumePercentFactorZoneRight());
                    this.populateSettingFromJson(strAudioPlayerType, audioSettings.getAudioPlayerType());
                    this.populateSettingFromJson(strVolumeTracksVolumeZoneLeft, audioSettings.getVolumeTracksVolumeZoneLeft());
                    this.populateSettingFromJson(strVolumeTracksVolumeZoneRight, audioSettings.getVolumeTracksVolumeZoneRight());
                }
                var flashMediaSettings = aPlaybackSettings.getFlashMediaSettings();
                if (flashMediaSettings != null) {
                    var strUseAirRuntime = "playbackSettings.flashMediaSettings.useAirRuntime";
                    this.populateSettingFromJson(strUseAirRuntime, flashMediaSettings.getUseAirRuntime());
                }
                var strForceReportNowPlayingData = "playbackSettings.forceReportNowPlayingData";
                var strPlaylistUpdateInstantReload = "playbackSettings.playlistUpdateInstantReload";
                var strMultiZoneNoMediaFillColor = "playbackSettings.multiZoneNoMediaFillColor";
                this.populateSettingFromJson(strForceReportNowPlayingData, aPlaybackSettings.getForceReportNowPlayingData());
                this.populateSettingFromJson(strPlaylistUpdateInstantReload, aPlaybackSettings.getPlaylistUpdateInstantReload());
                this.populateSettingFromJson(strMultiZoneNoMediaFillColor, aPlaybackSettings.getMultiZoneNoMediaFillColor());
                var playbackInteractionSettings = aPlaybackSettings.getPlaybackInteractionSettings();
                if (playbackInteractionSettings != null) {
                    var strOnTouchAction = "playbackSettings.playbackInteractionSettings.onTouchAction";
                    this.populateSettingFromJson(strOnTouchAction, playbackInteractionSettings.getOnTouchAction());
                }
                var strPlaybackRestartTimeoutMillis = "watchdogSettings.playbackRestartTimeoutMillis";
                var strSyncPlaybackTimeoutMillis = "playbackSettings.syncPlaybackTimeoutMillis";
                this.populateSettingFromJson(strPlaybackRestartTimeoutMillis, aPlaybackSettings.getPlaybackRestartTimeoutMillis());
                this.populateSettingFromJson(strSyncPlaybackTimeoutMillis, aPlaybackSettings.getSyncPlaybackTimeoutMillis());
                var vodSettings = aPlaybackSettings.getVODSettings();
                if (vodSettings != null) {
                    var strHintEnabled = "playbackSettings.vodSettings.isHintEnable";
                    var strMediaFrameBgColor = "playbackSettings.vodSettings.mediaFrameBackgroundColor";
                    var strMediaFrameFocusBgColor = "playbackSettings.vodSettings.mediaFrameFocusBackgroundColor";
                    var strMediaListZoneFrameLandscape = "playbackSettings.vodSettings.mediaListZoneFrameLandscape";
                    var strMediaListZoneFramePortrait = "playbackSettings.vodSettings.mediaListZoneFramePortrait";
                    var strMediaTitleTextColorFocused = "playbackSettings.vodSettings.mediaTitleTextColorFocused";
                    var strMediaTitleTextColor = "playbackSettings.vodSettings.mediaTitleTextColor";
                    var strTimeoutIntervalSecs = "playbackSettings.vodSettings.timeoutIntervalSeconds";
                    this.populateSettingFromJson(strHintEnabled, vodSettings.getHintEnabled());
                    this.populateSettingFromJson(strMediaFrameBgColor, vodSettings.getMediaFrameBgColor());
                    this.populateSettingFromJson(strMediaFrameFocusBgColor, vodSettings.getMediaFrameFocusBgColor());
                    this.populateSettingFromJson(strMediaListZoneFrameLandscape, vodSettings.getMediaListZoneFrameLandscape());
                    this.populateSettingFromJson(strMediaListZoneFramePortrait, vodSettings.getMediaListZoneFramePortrait());
                    this.populateSettingFromJson(strMediaTitleTextColorFocused, vodSettings.getMediaTitleTextColorFocused());
                    this.populateSettingFromJson(strMediaTitleTextColor, vodSettings.getMediaTitleTextColor());
                    this.populateSettingFromJson(strTimeoutIntervalSecs, vodSettings.getTimeoutIntervalSecs());
                }
                var videoSettings = aPlaybackSettings.getVideoSettings();
                if (videoSettings != null) {
                    var strPlayerType = "playbackSettings.videoSettings.videoPlayerType";
                    var strRenderingMode = "playbackSettings.videoSettings.videoRenderingMode";
                    this.populateSettingFromJson(strPlayerType, videoSettings.getPlayerType());
                    this.populateSettingFromJson(strRenderingMode, videoSettings.getRenderingMode());
                }
                var strWatchdogEnabled = "watchdogSettings.watchdogEnabled";
                this.populateSettingFromJson(strWatchdogEnabled, aPlaybackSettings.getWatchdogEnabled());
                var webPageSettings = aPlaybackSettings.getWebPageSettings();
                if (webPageSettings != null) {
                    var strAllowedUrls = "playbackSettings.webPageSettings.allowedUrls";
                    var strPurgeCacheOnStart = "playbackSettings.webPageSettings.purgeWebCacheOnStart";
                    var strCrosswalkUseTextureView = "playbackSettings.webPageSettings.crosswalkUseTextureView";
                    this.populateSettingFromJson(strAllowedUrls, webPageSettings.getAllowedUrls());
                    this.populateSettingFromJson(strPurgeCacheOnStart, webPageSettings.getPurgeCacheOnStart());
                    this.populateSettingFromJson(strCrosswalkUseTextureView, webPageSettings.getCrosswalkUseTextureView());
                }
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setSecuritySettings = function (aServerDeviceSettings) {
            var aSecuritySettings = aServerDeviceSettings.getSecuritySettings();
            if (aSecuritySettings != null) {
                var strDiagnosticsAppPassword = "securitySettings.diagnosticsAppPassword";
                var strEncryptMediaFiles = "securitySettings.encryptMediaFiles";
                var strPlayerConfigAppPassword = "securitySettings.playerConfigAppPassword";
                var strVodAppPassword = "securitySettings.vodAppPassword";
                this.populateSettingFromJson(strDiagnosticsAppPassword, aSecuritySettings.getDiagnosticsAppPassword());
                this.populateSettingFromJson(strEncryptMediaFiles, aSecuritySettings.getEncryptMediaFiles());
                this.populateSettingFromJson(strPlayerConfigAppPassword, aSecuritySettings.getPlayerConfigAppPassword());
                this.populateSettingFromJson(strVodAppPassword, aSecuritySettings.getVodAppPassword());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setSerialDisplayCommandsSettings = function (aServerDeviceSettings) {
            var aSerialDisplayCommandsSettings = aServerDeviceSettings.getSerialDisplayCommandsSettings();
            if (aSerialDisplayCommandsSettings != null) {
                var strCommandsMap = "serialDisplayCommands.commandsMap";
                this.populateSettingFromJson(strCommandsMap, aSerialDisplayCommandsSettings.getCommandsMap());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setSiteIdSettings = function (aServerDeviceSettings) {
            var aSiteSettings = aServerDeviceSettings.getSiteSettings();
            if (aSiteSettings != null) {
                var strBandwidthSettings = "siteSettings.bandwidthSettings";
                var strContentDownloadWindows = "siteSettings.contentDownloadWindows";
                var strLatitude = "siteSettings.latitude";
                var strLongitude = "siteSettings.longitude";
                var strOpeningHour = "siteSettings.openingHours";
                var strSiteId = "siteSettings.siteId";
                var strSleepMode = "siteSettings.sleepMode";
                var strZipCode = "siteSettings.zipCode";
                var strMaintenanceWindow = "siteSettings.maintenanceWindow";
                var strCustomParamsMap1 = "siteSettings.customParamsMap1";
                var strCustomParamsMap2 = "siteSettings.customParamsMap2";
                var strCustomParamsMap3 = "siteSettings.customParamsMap3";
                var strCustomParamsMap4 = "siteSettings.customParamsMap4";
                var strCustomParamsMap5 = "siteSettings.customParamsMap5";
                var strCustomParamsMap6 = "siteSettings.customParamsMap6";
                var strCustomParamsMap7 = "siteSettings.customParamsMap7";
                var strCustomParamsMap8 = "siteSettings.customParamsMap8";
                var strCustomParamsMap9 = "siteSettings.customParamsMap9";
                var strCustomParamsMap10 = "siteSettings.customParamsMap10";
                var strCustomParamsMap11 = "siteSettings.customParamsMap11";
                var strCustomParamsMap12 = "siteSettings.customParamsMap12";
                var strCustomParamsMap13 = "siteSettings.customParamsMap13";
                var strCustomParamsMap14 = "siteSettings.customParamsMap14";
                var strCustomParamsMap15 = "siteSettings.customParamsMap15";
                this.populateSettingFromJson(strBandwidthSettings, aSiteSettings.getBandwidthSettings());
                this.populateSettingFromJson(strContentDownloadWindows, aSiteSettings.getContentDownloadWindows());
                this.populateSettingFromJson(strLatitude, aSiteSettings.getLatitude());
                this.populateSettingFromJson(strLongitude, aSiteSettings.getLongitude());
                this.populateSettingFromJson(strOpeningHour, aSiteSettings.getOpeningHour());
                this.populateSettingFromJson(strSiteId, aSiteSettings.getSiteId());
                this.populateSettingFromJson(strSleepMode, aSiteSettings.getSleepMode());
                this.populateSettingFromJson(strZipCode, aSiteSettings.getZipCode());
                this.populateSettingFromJson(strMaintenanceWindow, aSiteSettings.getMaintenanceWindow());
                this.populateSettingFromJson(strCustomParamsMap1, aSiteSettings.getCustomParamsMap1());
                this.populateSettingFromJson(strCustomParamsMap2, aSiteSettings.getCustomParamsMap2());
                this.populateSettingFromJson(strCustomParamsMap3, aSiteSettings.getCustomParamsMap3());
                this.populateSettingFromJson(strCustomParamsMap4, aSiteSettings.getCustomParamsMap4());
                this.populateSettingFromJson(strCustomParamsMap5, aSiteSettings.getCustomParamsMap5());
                this.populateSettingFromJson(strCustomParamsMap6, aSiteSettings.getCustomParamsMap6());
                this.populateSettingFromJson(strCustomParamsMap7, aSiteSettings.getCustomParamsMap7());
                this.populateSettingFromJson(strCustomParamsMap8, aSiteSettings.getCustomParamsMap8());
                this.populateSettingFromJson(strCustomParamsMap9, aSiteSettings.getCustomParamsMap9());
                this.populateSettingFromJson(strCustomParamsMap10, aSiteSettings.getCustomParamsMap10());
                this.populateSettingFromJson(strCustomParamsMap11, aSiteSettings.getCustomParamsMap11());
                this.populateSettingFromJson(strCustomParamsMap12, aSiteSettings.getCustomParamsMap12());
                this.populateSettingFromJson(strCustomParamsMap13, aSiteSettings.getCustomParamsMap13());
                this.populateSettingFromJson(strCustomParamsMap14, aSiteSettings.getCustomParamsMap14());
                this.populateSettingFromJson(strCustomParamsMap15, aSiteSettings.getCustomParamsMap15());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setSoftwareSettings = function (aServerDeviceSettings) {
            var aSoftwareSettings = aServerDeviceSettings.getSoftwareSettings();
            if (aSoftwareSettings != null) {
                var aDebugSettings = aSoftwareSettings.getDebugSettings();
                if (aDebugSettings != null) {
                    var strDebugViewVisible = "softwareSettings.debugSettings.debugViewVisible";
                    var strDeleteMediaOnLaunch = "softwareSettings.debugSettings.deleteMediaOnLaunch";
                    var strDeletePlaylistOnLaunch = "softwareSettings.debugSettings.deletePlaylistOnLaunch";
                    var strMonitoringDisabled = "softwareSettings.debugSettings.monitoringDisabled";
                    var strNetworkSetupDisabled = "softwareSettings.debugSettings.networkSetupDisabled";
                    var strPlaybackLogsUploadDisabled = "softwareSettings.debugSettings.playbackLogsUploadDisabled";
                    var strPlayerFilesUpdateDisabled = "softwareSettings.debugSettings.playerFilesUpdateDisabled";
                    var strCrashLoggerEnabled = "softwareSettings.debugSettings.crashLoggerEnabled";
                    var strLastPlayerChangeId = "syncSettings.lastPlayerChangeId";
                    var strStreamMusicTracks = "softwareSettings.debugSettings.streamMusicTracks";
                    var strUseHeadlessSetupWebAppDevBuild = "softwareSettings.debugSettings.useHeadlessSetupWebAppDevBuild";
                    this.populateSettingFromJson(strDebugViewVisible, aDebugSettings.getDebugViewVisible());
                    this.populateSettingFromJson(strDeleteMediaOnLaunch, aDebugSettings.getDeleteMediaOnLaunch());
                    this.populateSettingFromJson(strDeletePlaylistOnLaunch, aDebugSettings.getDeletePlaylistOnLaunch());
                    this.populateSettingFromJson(strMonitoringDisabled, aDebugSettings.getMonitoringDisabled());
                    this.populateSettingFromJson(strNetworkSetupDisabled, aDebugSettings.getNetworkSetupDisabled());
                    this.populateSettingFromJson(strPlaybackLogsUploadDisabled, aDebugSettings.getPlaybackLogsUploadDisabled());
                    this.populateSettingFromJson(strPlayerFilesUpdateDisabled, aDebugSettings.getPlayerFilesUpdateDisabled());
                    this.populateSettingFromJson(strCrashLoggerEnabled, aDebugSettings.getCrashLoggerEnabled());
                    this.populateSettingFromJson(strLastPlayerChangeId, aDebugSettings.getLastPlayerChangeId());
                    this.populateSettingFromJson(strStreamMusicTracks, aDebugSettings.getStreamMusicTracks());
                    this.populateSettingFromJson(strUseHeadlessSetupWebAppDevBuild, aDebugSettings.getUseHeadlessSetupWebAppDevBuild());
                }
                var strEarlyAdopter = "softwareSettings.earlyAdopter";
                var strHttpServiceMaxWorkers = "softwareSettings.httpServiceMaxWorkers";
                var strHeadlessSetupEnabled = "softwareSettings.headlessSetupEnabled";
                var strLiveCommandsEnabled = "softwareSettings.liveCommandsEnabled";
                var strProjectId = "softwareSettings.projectId";
                this.populateSettingFromJson(strEarlyAdopter, aSoftwareSettings.getEarlyAdopter());
                this.populateSettingFromJson(strHttpServiceMaxWorkers, aSoftwareSettings.getHttpServiceMaxWorkers());
                this.populateSettingFromJson(strHeadlessSetupEnabled, aSoftwareSettings.getHeadlessSetupEnabled());
                this.populateSettingFromJson(strLiveCommandsEnabled, aSoftwareSettings.getLiveCommandsEnabled());
                this.populateSettingFromJson(strProjectId, aSoftwareSettings.getProjectId());
                var aResetSettings = aSoftwareSettings.getResetSettings();
                if (aResetSettings != null) {
                    var strExceptions = "softwareSettings.resetSettings.exceptions";
                    var strResetMode = "softwareSettings.resetSettings.resetMode";
                    var strResetTime = "softwareSettings.resetSettings.resetTime";
                    this.populateSettingFromJson(strExceptions, aResetSettings.getExceptions());
                    this.populateSettingFromJson(strResetMode, aResetSettings.getResetMode());
                    this.populateSettingFromJson(strResetTime, aResetSettings.getResetTime());
                }
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setSoundSettings = function (aServerDeviceSettings) {
            var aSoundSettings = aServerDeviceSettings.getSoundSettings();
            if (aSoundSettings != null) {
                var strVolumeLevels = "soundSettings.volumeLevels";
                this.populateSettingFromJson(strVolumeLevels, aSoundSettings.getVolumeLevels());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.setTimeSettings = function (aServerDeviceSettings) {
            var aTimeSettings = aServerDeviceSettings.getTimeSettings();
            if (aTimeSettings != null) {
                var timeSyncSettings = aTimeSettings.getTimeSyncSettings();
                if (timeSyncSettings != null) {
                    var strCustomNtpServerUrl = "timeSettings.timeSyncSettings.customNtpServerUrl";
                    var strSyncMode = "timeSettings.timeSyncSettings.syncMode";
                    this.populateSettingFromJson(strCustomNtpServerUrl, timeSyncSettings.getCustomNtpServerUrl());
                    this.populateSettingFromJson(strSyncMode, timeSyncSettings.getSyncMode());
                }
                var strTimezone = "timeSettings.timeZone";
                this.populateSettingFromJson(strTimezone, aTimeSettings.getTimezone());
            }
        };
        RE_ServerDeviceSettingsConfiguration.prototype.copyFromJson = function (jsonSettings) {
            var aServerDeviceSettings = this._aServerDeviceSettings;
            if (aServerDeviceSettings != null && jsonSettings != null) {
                this._jsonSettings = jsonSettings;
                this.setAppCommunicationSettings(aServerDeviceSettings);
                this.setClientSettings(aServerDeviceSettings);
                this.setCloudAPISettings(aServerDeviceSettings);
                this.setContentSettings(aServerDeviceSettings);
                this.setCronSettings(aServerDeviceSettings);
                this.setDisplaySettings(aServerDeviceSettings);
                this.setHardwareSetts(aServerDeviceSettings);
                this.setLoggingSettings(aServerDeviceSettings);
                this.setNetworkSettings(aServerDeviceSettings);
                this.setPlatformSettings(aServerDeviceSettings);
                this.setPlaybackSettings(aServerDeviceSettings);
                this.setSecuritySettings(aServerDeviceSettings);
                this.setSerialDisplayCommandsSettings(aServerDeviceSettings);
                this.setSiteIdSettings(aServerDeviceSettings);
                this.setSoftwareSettings(aServerDeviceSettings);
                this.setSoundSettings(aServerDeviceSettings);
                this.setTimeSettings(aServerDeviceSettings);
            }
        };
        return RE_ServerDeviceSettingsConfiguration;
    }(rmEntity.rm_general.R_Entity));
    rm_general.RE_ServerDeviceSettingsConfiguration = RE_ServerDeviceSettingsConfiguration;
})(rm_general = exports.rm_general || (exports.rm_general = {}));
//# sourceMappingURL=RE_ServerDeviceSettingsConfiguration.js.map