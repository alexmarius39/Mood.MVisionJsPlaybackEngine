function createSettingsConfig() {
    const sections = [
        {id: "advancedSettings", title: "App Communication", keys: [
            "appCommunicationSettings.multicastSettings.defaultMulticastAddress",
            "appCommunicationSettings.multicastSettings.defaultMulticastPort",
            "appCommunicationSettings.p2pSettings.clientEnabled",
            "appCommunicationSettings.p2pSettings.serverEnabled",
            "appCommunicationSettings.p2pSettings.port"
        ]},
        {id: "clientSettings", title: "Client", keys: [
            "clientSettings.earlyAdopter",
            "clientSettings.projectId"
        ]},
        {id: "cloudApiSettings", title: "Cloud API", keys: [
            "cloudApiSettings.baseServerApiUrl", 
            "cloudApiSettings.baseServerUpgradeUrl"
        ]},
        {id: "contentSettings", title: "Content", keys: [
            "contentSettings.networkNotAvailableMessage", 
            "contentSettings.storedTracksCountLimit",
            "contentSettings.purgeSettings.statisticsPurgeUntouchedDays",
            "contentSettings.purgeSettings.customDirectories",
            "contentSettings.purgeSettings.mediaFilesPurgeUntouchedDays",
            "contentSettings.purgeSettings.logsPurgeUntouchedDays",
            "contentSettings.purgeSettings.musicTracksPurgeUntouchedDays"
        ]},
        {id: "cronSettings", title: "Cron", keys: [
            "cronSettings.monitorDataUploadIntervalSeconds", 
            "cronSettings.playerFilesDownloadIntervalSeconds",
            "cronSettings.playlistFeedsUpdateIntervalSeconds",
            "cronSettings.playlistUpdateIntervalSeconds"
        ]},
        {id: "displaySettings", title: "Display", keys: [
            "displaySettings.displayBrightness",
            "displaySettings.displayDensity",
            "displaySettings.displayOrientation",
            "displaySettings.displayResolution",
            "displaySettings.displayScale"
        ]},
        {id: "hardwareSettings", title: "Hardware", keys: [
            "hardwareSettings.earlyAdopter",
            "hardwareSettings.knownSerialProductIds", 
            "hardwareSettings.networkHostname"
        ]},
        {id: "loggingSettings", title: "Logging", keys: [
            "loggingSettings.activityLogsAutoUploadEnabled", 
            "loggingSettings.activityLogsFileEnabled", 
            "loggingSettings.playbackLogsFileEnabled", 
            "loggingSettings.activityLogsBufferMaxSizeBytes", 
            "loggingSettings.activityLogsAutoUploadIntervalMillis"
        ]},
        {id: "networkSettings.ethernetSettings", title: "Ethernet", keys: [
            "networkSettings.ethernetSettings.allowConfigurationChange",
            "networkSettings.ethernetSettings.interfaceEnabled",
            "networkSettings.ethernetSettings.dhcpEnabled",
            "networkSettings.ethernetSettings.networkLinkSettings.ipAddress",
            "networkSettings.ethernetSettings.networkLinkSettings.gateway",
            "networkSettings.ethernetSettings.networkLinkSettings.netmask",
            "networkSettings.ethernetSettings.networkLinkSettings.dns1",
            "networkSettings.ethernetSettings.networkLinkSettings.dns2"
        ]},
        {id: "networkSettings.httpProxy", title: "HTTP proxy", keys: [
            "networkSettings.httpProxySettings.excludedHostsList",
            "networkSettings.httpProxySettings.proxyEnabled",
            "networkSettings.httpProxySettings.host",
            "networkSettings.httpProxySettings.port",
            "networkSettings.httpProxySettings.username",
            "networkSettings.httpProxySettings.password"
        ]},
        {id: "networkSettings.wifiSettings", title: "Wi-Fi", keys: [
            "networkSettings.wifiSettings.allowConfigurationChange",
            "networkSettings.wifiSettings.interfaceEnabled",
            "networkSettings.wifiSettings.wifiAccessPointSettings.ssid",
            "networkSettings.wifiSettings.wifiAccessPointSettings.authenticationType",
            "networkSettings.wifiSettings.wifiAccessPointSettings.password",
            "networkSettings.wifiSettings.dhcpEnabled",
            "networkSettings.wifiSettings.networkLinkSettings.ipAddress",
            "networkSettings.wifiSettings.networkLinkSettings.gateway",
            "networkSettings.wifiSettings.networkLinkSettings.netmask",
            "networkSettings.wifiSettings.networkLinkSettings.dns1",
            "networkSettings.wifiSettings.networkLinkSettings.dns2"
        ]},
        {id: "platformSettings", title: "Platform", keys: [
            "platformSettings.adbEnabled",
            "platformSettings.usePowerKeyForScreenOff",
            "platformSettings.wsusUrl",
            "platformSettings.zidooSoundOutputRaw"
        ]},
        {id: "playbackSettings", title: "Playback", keys: [
            "playbackSettings.forceReportNowPlayingData",
            "playbackSettings.playlistUpdateInstantReload",
            "playbackSettings.multiZoneNoMediaFillColor",
            "watchdogSettings.playbackRestartTimeoutMillis",
            "playbackSettings.syncPlaybackTimeoutMillis",
            "watchdogSettings.watchdogEnabled"
        ]},
        {id: "audioSettings", title: "Audio", keys: [
            "playbackSettings.audioSettings.duckingPercent",
            "playbackSettings.audioSettings.duckingDuration",
            "playbackSettings.audioSettings.musicCrossfadeMode",
            "playbackSettings.audioSettings.musicSmoothStopPercent",
            "playbackSettings.audioSettings.musicSmoothStopDurationMillis",
            "playbackSettings.audioSettings.musicStaticCrossfadeDurationMillis",
            "playbackSettings.audioSettings.musicTracksVolume",
            "playbackSettings.audioSettings.volumePercentFactorZoneLeft",
            "playbackSettings.audioSettings.volumePercentFactorZoneRight",
            "playbackSettings.audioSettings.audioPlayerType",
            "playbackSettings.audioSettings.musicTracksVolumeZoneLeft",
            "playbackSettings.audioSettings.musicTracksVolumeZoneRight"
        ]},
        {id: "flashMediaSettings", title: "Flash Media", keys: [
            "playbackSettings.flashMediaSettings.useAirRuntime"
        ]},
        {id: "vodSettings", title: "VOD", keys: [
            "playbackSettings.vodSettings.isHintEnable",
            "playbackSettings.vodSettings.mediaFrameBackgroundColor",
            "playbackSettings.vodSettings.mediaFrameFocusBackgroundColor",
            "playbackSettings.vodSettings.mediaListZoneFrameLandscape",
            "playbackSettings.vodSettings.mediaListZoneFramePortrait",
            "playbackSettings.vodSettings.mediaTitleTextColorFocused",
            "playbackSettings.vodSettings.mediaTitleTextColor",
            "playbackSettings.vodSettings.timeoutIntervalSeconds"
        ]},
        {id: "videoSettings", title: "Video", keys: [
            "playbackSettings.videoSettings.videoPlayerType",
            "playbackSettings.videoSettings.videoRenderingMode"
        ]},
        {id: "webPageSettings", title: "Web Page", keys: [
            "playbackSettings.webPageSettings.allowedUrls",
            "playbackSettings.webPageSettings.purgeWebCacheOnStart",
            "playbackSettings.webPageSettings.crosswalkUseTextureView"
        ]},
        {id: "securitySettings", title: "Security", keys: [
            "securitySettings.diagnosticsAppPassword",
            "securitySettings.encryptMediaFiles",
            "securitySettings.playerConfigAppPassword",
            "securitySettings.vodAppPassword"
        ]},
        {id: "siteSettings", title: "Site settings", keys: [
            "siteSettings.siteId",
            "siteSettings.zipCode",
            "siteSettings.latitude",
            "siteSettings.longitude",
            "siteSettings.sleepMode"
        ]},
        {id: "softwareSettings", title: "Software", keys: [
            "softwareSettings.debugSettings.debugViewVisible",
            "softwareSettings.debugSettings.deleteMediaOnLaunch",
            "softwareSettings.debugSettings.deletePlaylistOnLaunch",
            "softwareSettings.debugSettings.monitoringDisabled",
            "softwareSettings.debugSettings.networkSetupDisabled",
            "softwareSettings.debugSettings.playbackLogsUploadDisabled",
            "softwareSettings.debugSettings.playerFilesUpdateDisabled",
            "softwareSettings.debugSettings.crashLoggerEnabled",
            "syncSettings.lastPlayerChangeId",
            "softwareSettings.debugSettings.streamMusicTracks",
            "softwareSettings.debugSettings.useHeadlessSetupWebAppDevBuild",
            "softwareSettings.earlyAdopter",
            "softwareSettings.httpServiceMaxWorkers",
            "softwareSettings.headlessSetupEnabled",
            "softwareSettings.liveCommandsEnabled",
            "softwareSettings.projectId",
            "softwareSettings.resetSettings.resetMode",
            "softwareSettings.resetSettings.resetTime"
        ]},
        {id: "soundSettings", title: "Sound", keys: [
            "soundSettings.volumeLevels.media"
        ]},
        {id: "timeSettings", title: "Time", keys: [
            "timeSettings.timeZone",
            "timeSettings.timeSyncSettings.syncMode",
            "timeSettings.timeSyncSettings.customNtpServerUrl"
        ]}
    ];

    const keysConfig = _.merge(
        getConfigAppCommunication(),
        getConfigClient(),
        getConfigCloudApi(),
        getConfigContent(),
        getConfigCron(),
        getConfigDisplay(),
        getConfigHardware(),
        getConfigLogging(),
        getConfigEthernet(),
        getConfigHttpProxy(),
        getConfigWifi(),
        getConfigPlatform(),
        getConfigAudio(),
        getConfigFlashMedia(),
        getConfigVOD(),
        getConfigVideo(),
        getConfigWebPage(),
        getConfigPlayback(),
        getConfigSecurity(),
        getConfigSite(),
        getConfigSoftware(),
        getConfigSound(),
        getConfigTime()
    );

    for (const [key, config] of Object.entries(keysConfig)) {
        if (!config.valueKey) {
            config.valueKey = key;
        }
        if (!config.getter) {
            config.getter = identityFunction;
        }
        if (!config.setter) {
            config.setter = function(initialValue, editedValue) {
                return editedValue;
            }
        }
        if (!config.valueToString) {
            config.valueToString = identityFunction;
        }
        if (!config.validator) {
            config.validator = trueFunction;
        }
    }

    return {
        sections: sections,
        keysConfig: keysConfig
    }
}