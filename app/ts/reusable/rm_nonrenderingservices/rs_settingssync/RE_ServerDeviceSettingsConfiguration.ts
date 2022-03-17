import amError                        = require("../../../abstract/am_general/a_error/A_Error");

import amServerDeviceSettingsConfiguration = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_settingssync/AE_ServerDeviceSettingsConfiguration");
import amServerDeviceSettings = require("../../../abstract/am_general/ae_devicesettings/AE_ServerDeviceSettings");

import amDeviceSetting                = require("../../../abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amAppCommunicationSettings     = require("../../../abstract/am_general/ae_devicesettings/AE_AppCommunicationSettings");
import amMulticastSettings            = require("../../../abstract/am_general/ae_devicesettings/AE_MulticastSettings");
import amP2PSettings                  = require("../../../abstract/am_general/ae_devicesettings/AE_P2PSettings");
import amClientSettings               = require("../../../abstract/am_general/ae_devicesettings/AE_ClientSettings");
import amCloudAPISettings             = require("../../../abstract/am_general/ae_devicesettings/AE_CloudAPISettings");
import amContentSettings              = require("../../../abstract/am_general/ae_devicesettings/AE_ContentSettings");
import amPurgeSettings                = require("../../../abstract/am_general/ae_devicesettings/AE_PurgeSettings");
import amCronSettings                 = require("../../../abstract/am_general/ae_devicesettings/AE_CronSettings");
import amDisplaySettings              = require("../../../abstract/am_general/ae_devicesettings/AE_DisplaySettings");
import amHardwareSetts                = require("../../../abstract/am_general/ae_devicesettings/AE_HardwareSettings");
import amLoggingSettings              = require("../../../abstract/am_general/ae_devicesettings//AE_LoggingSettings");
import amNetworkLinkSettings          = require("../../../abstract/am_general/ae_devicesettings/AE_NetworkLinkSettings");
import amEthernetSettings             = require("../../../abstract/am_general/ae_devicesettings/AE_EthernetSettings");
import amHTTPProxySettings            = require("../../../abstract/am_general/ae_devicesettings/AE_HTTPProxySettings");
import amWifiAccessPointSettings      = require("../../../abstract/am_general/ae_devicesettings/AE_WifiAccessPointSettings");
import amWifiSettings                 = require("../../../abstract/am_general/ae_devicesettings/AE_WifiSettings");
import amNetworkSettings              = require("../../../abstract/am_general/ae_devicesettings/AE_NetworkSettings");
import amPlatformSettings             = require("../../../abstract/am_general/ae_devicesettings/AE_PlatformSettings");
import amAudioSettings                = require("../../../abstract/am_general/ae_devicesettings/AE_AudioSettings");
import amFlashMediaSettings           = require("../../../abstract/am_general/ae_devicesettings/AE_FlashMediaSettings");
import amPlaybackInteractionSettings  = require("../../../abstract/am_general/ae_devicesettings/AE_PlaybackInteractionSettings");
import amVODSettings                  = require("../../../abstract/am_general/ae_devicesettings/AE_VODSettings");
import amVideoSettings                = require("../../../abstract/am_general/ae_devicesettings/AE_VideoSettings");
import amWebPageSettings              = require("../../../abstract/am_general/ae_devicesettings/AE_WebPageSettings");
import amPlaybackSettings             = require("../../../abstract/am_general/ae_devicesettings/AE_PlaybackSettings");
import amSecuritySettings             = require("../../../abstract/am_general/ae_devicesettings/AE_SecuritySettings");
import amSerialDisplayCommandsSettings  = require("../../../abstract/am_general/ae_devicesettings/AE_SerialDisplayCommandsSettings");
import amSiteSettings                 = require("../../../abstract/am_general/ae_devicesettings/AE_SiteSettings");
import amDebugSettings                = require("../../../abstract/am_general/ae_devicesettings/AE_DebugSettings");
import amResetSettings                = require("../../../abstract/am_general/ae_devicesettings/AE_ResetSettings");
import amSoftwareSettings             = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_SoftwareSettings");
import amSoundSettings                = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_SoundSettings");
import amTimeSyncSettings             = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_TimeSyncSettings");
import amTimeSettings                 = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_TimeSettings");

import rmEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class RE_ServerDeviceSettingsConfiguration extends rmEntity.rm_general.R_Entity
                                                    implements amServerDeviceSettingsConfiguration.am_general.AE_ServerDeviceSettingsConfiguration
  {
    _aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings;
    _bServerDeviceSettingsChanged: boolean;

    _jsonSettings: object;

    constructor()
    {
      super();

      this._bServerDeviceSettingsChanged = false;
      this._aServerDeviceSettings = null;

      this._jsonSettings = null;
    }

    public setServerDeviceSettingsConfiguration(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings)
    {
      this._aServerDeviceSettings = aServerDeviceSettings;
    }

    public getServerDeviceSettingsChanged(): boolean
    {
      return this._bServerDeviceSettingsChanged;
    }
    public setServerDeviceSettingsChanged(bChanged: boolean): void
    {
      this._bServerDeviceSettingsChanged = bChanged;
    }

    public getServerDeviceSettingsConfiguration() : amServerDeviceSettings.am_general.AE_ServerDeviceSettings
    {
      return this._aServerDeviceSettings;
    }

    public getJsonSettings(): object
    {
      return this._jsonSettings;
    }
    public setJsonSettings(jsonSettings: object): void
    {
      this._jsonSettings = jsonSettings;
    }

    public initSettings(): void
    {
      const error: amError.am_general.A_Error = this._aSrvLocator._iEntityCreation.createDefaultError();
      
      this._aServerDeviceSettings = this._aSrvLocator._iEntityCreation.createDefaultServerDeviceSettings(error);

      // appCommunicationSettings
      const aMulticastAddress: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      aMulticastAddress.setValue("230.0.0.1");
      const aMulticastPort: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      aMulticastPort.setValue(4446);
      const aMulticastSettings: amMulticastSettings.am_general.AE_MulticastSettings = this._aSrvLocator._iEntityCreation.createDefaultMulticastSettings(error);
      aMulticastSettings.setAddress(aMulticastAddress);
      aMulticastSettings.setPort(aMulticastPort);

      const aP2PPort: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      aP2PPort.setValue(9000);
      const aP2PServerEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      aP2PServerEnabled.setValue(false);
      const aP2PClientEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      aP2PClientEnabled.setValue(false);
      const aP2PSettings: amP2PSettings.am_general.AE_P2PSettings = this._aSrvLocator._iEntityCreation.createDefaultP2PSettings(error);
      aP2PSettings.setPort(aP2PPort);
      aP2PSettings.setServerEnabled(aP2PServerEnabled);
      aP2PSettings.setClientEnabled(aP2PClientEnabled);

      const aAppCommunicationSettings: amAppCommunicationSettings.am_general.AE_AppCommunicationSettings = this._aSrvLocator._iEntityCreation.createDefaultAppCommunicationSettings(error);
      aAppCommunicationSettings.setMulticastSettings(aMulticastSettings);
      aAppCommunicationSettings.setP2PSettings(aP2PSettings);
      this._aServerDeviceSettings.setAppCommunicationSettings(aAppCommunicationSettings);

      // clientSettings
      const earlyAdopterClient: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      earlyAdopterClient.setValue(false);
      const aProjectId: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const aClientSettings: amClientSettings.am_general.AE_ClientSettings = this._aSrvLocator._iEntityCreation.createDefaultClientSettings(error);
      aClientSettings.setEarlyAdopter(earlyAdopterClient);
      aClientSettings.setProjectId(aProjectId);
      this._aServerDeviceSettings.setClientSettings(aClientSettings);

      // cloudAPIsettings
      const baseServerAPIUrl: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      baseServerAPIUrl.setValue("https://mvision-qa.moodmedia.com/v5/");
      const baseServerUpgradeUrl: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      baseServerUpgradeUrl.setValue("https://mvision-qa.moodmedia.com/env_updates/software/ANDROID_PLAYER");

      const aCloudAPISettings: amCloudAPISettings.am_general.AE_CloudAPISettings = this._aSrvLocator._iEntityCreation.createDefaultCloudAPISettings(error);
      aCloudAPISettings.setBaseServerAPIUrl(baseServerAPIUrl);
      aCloudAPISettings.setBaseServerUpgradeUrl(baseServerUpgradeUrl);
      this._aServerDeviceSettings.setCloudAPISettings(aCloudAPISettings);

      // content settings
      const aNetworkNotAvailableMessage: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const aCustomDirs: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const aMusicTracksPurgeUntouched: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      aMusicTracksPurgeUntouched.setValue(-1);
      const aPurgeLogsUntouched: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      aPurgeLogsUntouched.setValue(7);
      const aPurgeMediaFilesUntouched: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      aPurgeMediaFilesUntouched.setValue(15);
      const aStatsUntouched: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      aStatsUntouched.setValue(1000);

      const aPurgeSettings: amPurgeSettings.am_general.AE_PurgeSettings = this._aSrvLocator._iEntityCreation.createDefaultPurgeSettings(error);
      aPurgeSettings.setCustomDirs(aCustomDirs);
      aPurgeSettings.setMusicTracksPurgeUntouched(aMusicTracksPurgeUntouched);
      aPurgeSettings.setPurgeLogsUntouched(aPurgeLogsUntouched);
      aPurgeSettings.setPurgeMediaFilesUntouched(aPurgeMediaFilesUntouched);
      aPurgeSettings.setStatsUntouched(aStatsUntouched);

      const aStoreTracksCountLimit: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      aStoreTracksCountLimit.setValue(1073741823);

      const aContentSettings: amContentSettings.am_general.AE_ContentSettings = this._aSrvLocator._iEntityCreation.createDefaultContentSettings(error);
      aContentSettings.setNetworkNotAvailableMessage(aNetworkNotAvailableMessage);
      aContentSettings.setPurgeSettings(aPurgeSettings);
      aContentSettings.setStoreTracksCountLimit(aStoreTracksCountLimit);
      this._aServerDeviceSettings.setContentSettings(aContentSettings);

      // cron settings
      const monitorDataUploadInterval: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      monitorDataUploadInterval.setValue(300);
      const playerFilesDownloadInterval: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      playerFilesDownloadInterval.setValue(600);
      const playlistFeedsUpdateInterval: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      playlistFeedsUpdateInterval.setValue(300);
      const playlistUpdateInterval: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      playlistUpdateInterval.setValue(600);

      const aCronSettings: amCronSettings.am_general.AE_CronSettings = this._aSrvLocator._iEntityCreation.createDefaultCronSettings(error);
      aCronSettings.setMonitorDataUploadInterval(monitorDataUploadInterval);
      aCronSettings.setPlayerFilesDownloadInterval(playerFilesDownloadInterval);
      aCronSettings.setPlaylistFeedsUpdateInterval(playlistFeedsUpdateInterval);
      aCronSettings.setPlaylistUpdateInterval(playlistUpdateInterval);
      this._aServerDeviceSettings.setCronSettings(aCronSettings);

      // display settings
      const brightness: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const density: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      density.setValue(160);
      const orientation: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      orientation.setValue("DEG_0");
      const resolution: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const resolutionValue = {
        "auto" : false,
        "width" : 1920,
        "height" : 1080,
        "frequency" : 60 
      }
      resolution.setValue(resolutionValue);
      const scale: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      scale.setValue(100);

      const aDisplaySettings: amDisplaySettings.am_general.AE_DisplaySettings = this._aSrvLocator._iEntityCreation.createDefaultDisplaySettings(error);
      aDisplaySettings.setBrightness(brightness);
      aDisplaySettings.setDensity(density);
      aDisplaySettings.setOrientation(orientation);
      aDisplaySettings.setResolution(resolution);
      aDisplaySettings.setScale(scale);
      this._aServerDeviceSettings.setDisplaySettings(aDisplaySettings);

      // hardware settings
      const earlyAdopterHardware: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      earlyAdopterHardware.setValue(false);
      const knownSerialProductIds: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const knownSerialProductIdsValue = [];
      knownSerialProductIds.setValue(knownSerialProductIdsValue);
      const networkHostname: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);

      const aHardwareSetts: amHardwareSetts.am_general.AE_HardwareSettings = this._aSrvLocator._iEntityCreation.createDefaultHardwareSetts(error);
      aHardwareSetts.setEarlyAdopter(earlyAdopterHardware);
      aHardwareSetts.setKnownSerialProductIds(knownSerialProductIds);
      aHardwareSetts.setNetworkHostname(networkHostname);
      this._aServerDeviceSettings.setHardwareSetts(aHardwareSetts);

      // logging settings
      const activityLogsBufferMaxSizeBytes: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      activityLogsBufferMaxSizeBytes.setValue(5242880);
      const activityLogsAutoUploadIntervalMillis: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      activityLogsAutoUploadIntervalMillis.setValue(7200000);
      const activityLogsAutoUploadEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      activityLogsAutoUploadEnabled.setValue(false)
      const activityLogsFileEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      activityLogsFileEnabled.setValue(false);
      const playbackLogsFileEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      playbackLogsFileEnabled.setValue(true);

      const aLoggingSettings: amLoggingSettings.am_general.AE_LoggingSettings = this._aSrvLocator._iEntityCreation.createDefaultLoggingSettings(error);
      aLoggingSettings.setActivityLogsBufferMaxSizeBytes(activityLogsBufferMaxSizeBytes);
      aLoggingSettings.setActivityLogsAutoUploadIntervalMillis(activityLogsAutoUploadIntervalMillis);
      aLoggingSettings.setActivityLogsAutoUploadEnabled(activityLogsAutoUploadEnabled);
      aLoggingSettings.setActivityLogsFileEnabled(activityLogsFileEnabled);
      aLoggingSettings.setPlaybackLogsFileEnabled(playbackLogsFileEnabled);
      this._aServerDeviceSettings.setLoggingSettings(aLoggingSettings);

      // network settings
      const ethernetAllowConfigurationChange: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      ethernetAllowConfigurationChange.setValue(true);
      const ethernetEnableDHCP: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      ethernetEnableDHCP.setValue(true);
      const ethernetIterfaceEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      ethernetIterfaceEnabled.setValue(true);
      const ethernetDNS1: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const ethernetDNS2: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const ethernetGateway: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const ethernetIpAddress: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const ethernetNetmask: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const ethernetNetworkLinkSettings: amNetworkLinkSettings.am_general.AE_NetworkLinkSettings = this._aSrvLocator._iEntityCreation.createDefaultNetworkLinkSettings(error);
      ethernetNetworkLinkSettings.setDNS1(ethernetDNS1);
      ethernetNetworkLinkSettings.setDNS2(ethernetDNS2);
      ethernetNetworkLinkSettings.setGateway(ethernetGateway);
      ethernetNetworkLinkSettings.setIPAddress(ethernetIpAddress);
      ethernetNetworkLinkSettings.setNetmask(ethernetNetmask);
      const ethernetVlanConfigurations: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const ethernetSettings: amEthernetSettings.am_general.AE_EthernetSettings = this._aSrvLocator._iEntityCreation.createDefaultEthernetSettings(error);
      ethernetSettings.setAllowConfigurationChange(ethernetAllowConfigurationChange);
      ethernetSettings.setEnableDHCP(ethernetEnableDHCP);
      ethernetSettings.setInterfaceEnabled(ethernetIterfaceEnabled);
      ethernetSettings.setNetworkLinkSettings(ethernetNetworkLinkSettings);
      ethernetSettings.setVLANConfigurations(ethernetVlanConfigurations);

      const proxyEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      proxyEnabled.setValue(false);
      const proxyExcludedHosts: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const proxyExcludedHostsValue = [];
      proxyExcludedHosts.setValue(proxyExcludedHostsValue);
      const proxyHost: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const proxyPassword: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const proxyPort: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      proxyPort.setValue(80);
      const proxyUsername: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const httpProxySettings:amHTTPProxySettings.am_general.AE_HTTPProxySettings = this._aSrvLocator._iEntityCreation.createDefaultHTTPProxySettings(error);
      httpProxySettings.setProxyEnabled(proxyEnabled);
      httpProxySettings.setExcludedHosts(proxyExcludedHosts);
      httpProxySettings.setHost(proxyHost);
      httpProxySettings.setPassword(proxyPassword);
      httpProxySettings.setPort(proxyPort);
      httpProxySettings.setUsername(proxyUsername);

      const wifiAllowConfigurationChange: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      wifiAllowConfigurationChange.setValue(true);
      const wifiEnableDHCP: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      wifiEnableDHCP.setValue(true);
      const wifiIterfaceEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      wifiIterfaceEnabled.setValue(true);
      const wifiDNS1: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const wifiDNS2: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const wifiGateway: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const wifiIpAddress: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const wifiNetmask: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const wifiNetworkLinkSettings: amNetworkLinkSettings.am_general.AE_NetworkLinkSettings = this._aSrvLocator._iEntityCreation.createDefaultNetworkLinkSettings(error);
      wifiNetworkLinkSettings.setDNS1(wifiDNS1);
      wifiNetworkLinkSettings.setDNS2(wifiDNS2);
      wifiNetworkLinkSettings.setGateway(wifiGateway);
      wifiNetworkLinkSettings.setIPAddress(wifiIpAddress);
      wifiNetworkLinkSettings.setNetmask(wifiNetmask);
      const wifiVlanConfigurations: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const authenticationType: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      authenticationType.setValue("NONE");
      const password: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const ssid: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const wifiAccessPointSettings: amWifiAccessPointSettings.am_general.AE_WifiAccessPointSettings = this._aSrvLocator._iEntityCreation.createDefaultWifiAccessPointSettings(error);
      wifiAccessPointSettings.setAuthenticationType(authenticationType);
      wifiAccessPointSettings.setPassword(password);
      wifiAccessPointSettings.setSSID(ssid);
      const wifiSettings: amWifiSettings.am_general.AE_WifiSettings = this._aSrvLocator._iEntityCreation.createDefaultWifiSettings(error);
      wifiSettings.setAllowConfigurationChange(wifiAllowConfigurationChange);
      wifiSettings.setEnableDHCP(wifiEnableDHCP);
      wifiSettings.setInterfaceEnabled(wifiIterfaceEnabled);
      wifiSettings.setNetworkLinkSettings(wifiNetworkLinkSettings);
      wifiSettings.setVLANConfigurations(wifiVlanConfigurations);
      wifiSettings.setWifiAccessPointSettings(wifiAccessPointSettings);

      const aNetworkSettings: amNetworkSettings.am_general.AE_NetworkSettings = this._aSrvLocator._iEntityCreation.createDefaultNetworkSettings(error);
      aNetworkSettings.setEthernetSettings(ethernetSettings);
      aNetworkSettings.setHTTPProxySettings(httpProxySettings);
      aNetworkSettings.setWifiSettings(wifiSettings);
      this._aServerDeviceSettings.setNetworkSettings(aNetworkSettings);

      // platform settings
      const adbEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      adbEnabled.setValue(false);
      const usePowerKeyForScreenOff: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      usePowerKeyForScreenOff.setValue(true);
      const zidooSoundOutputRaw: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      zidooSoundOutputRaw.setValue(true);
      const wsusURL: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);

      const aPlatformSettings: amPlatformSettings.am_general.AE_PlatformSettings = this._aSrvLocator._iEntityCreation.createDefaultPlatformSettings(error);
      aPlatformSettings.setAdbEnabled(adbEnabled);
      aPlatformSettings.setUsePowerKeyForScreenOff(usePowerKeyForScreenOff);
      aPlatformSettings.setWsusUrl(wsusURL);
      aPlatformSettings.setZidooSoundOutputRaw(zidooSoundOutputRaw);
      this._aServerDeviceSettings.setPlatformSettings(aPlatformSettings);

      // playback settings
      const duckingPercent: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      duckingPercent.setValue(0);
      const duckingDuration: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      duckingDuration.setValue(2000);
      const musicCrossfadeMode: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      musicCrossfadeMode.setValue("STATIC");
      const musicSmoothStopPercent: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      musicSmoothStopPercent.setValue(30);
      const musicSmoothStopDurationMillis: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      musicSmoothStopDurationMillis.setValue(3000);
      const musicStaticCrossfadeDurationMillis: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      musicStaticCrossfadeDurationMillis.setValue(5000);
      const musicTracksVolume: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      musicTracksVolume.setValue(100);
      const volumePercentFactorZoneLeft: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      volumePercentFactorZoneLeft.setValue(100);
      const volumePercentFactorZoneRight: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      volumePercentFactorZoneRight.setValue(100);
      const audioPlayerType: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const volumeTracksVolumeZoneLeft: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      volumeTracksVolumeZoneLeft.setValue(100);
      const volumeTracksVolumeZoneRight: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      volumeTracksVolumeZoneRight.setValue(100);
      const audioSettings:amAudioSettings.am_general.AE_AudioSettings = this._aSrvLocator._iEntityCreation.createDefaultAudioSettings(error);
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

      const useAirRuntime: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      useAirRuntime.setValue(false);
      const flashMediaSettings: amFlashMediaSettings.am_general.AE_FlashMediaSettings = this._aSrvLocator._iEntityCreation.createDefaultFlashMediaSettings(error);
      flashMediaSettings.setUseAirRuntime(useAirRuntime);

      const forceReportNowPlayingData: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      forceReportNowPlayingData.setValue(false);
      const playlistUpdateInstantReload: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      playlistUpdateInstantReload.setValue(false);
      const multiZoneNoMediaFillColor: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      multiZoneNoMediaFillColor.setValue("#00000000");

      const onTouchAction: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const onTouchActionValue = {
        "type" : "DO_NOTHING",
        "parameters" : null 
      }
      onTouchAction.setValue(onTouchActionValue);
      const playbackInteractionSettings: amPlaybackInteractionSettings.am_general.AE_PlaybackInteractionSettings = this._aSrvLocator._iEntityCreation.createDefaultPlaybackInteractionSettings(error);
      playbackInteractionSettings.setOnTouchAction(onTouchAction);

      const playbackRestartTimeoutMillis: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      playbackRestartTimeoutMillis.setValue(60000);
      const syncPlaybackTimeoutMillis: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      syncPlaybackTimeoutMillis.setValue(500);
  
      const hintEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      hintEnabled.setValue(true);
      const mediaFrameBgColor: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      mediaFrameBgColor.setValue("#1a1a1a");
      const mediaFrameFocusBgColor: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      mediaFrameFocusBgColor.setValue("#cf102d");
      const mediaListZoneFrameLandscape: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const mediaListZoneFrameLandscapeValue = {
        "top"     : 10.0,
        "left"    : 4.0,
        "width"   : 92.0,
        "height"  : 80.0 
      }
      mediaListZoneFrameLandscape.setValue(mediaListZoneFrameLandscapeValue);
      const mediaListZoneFramePortrait: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const mediaListZoneFramePortraitValue = {
        "top"     : 10.0,
        "left"    : 4.0,
        "width"   : 92.0,
        "height"  : 80.0 
      }
      mediaListZoneFramePortrait.setValue(mediaListZoneFramePortraitValue);
      const mediaTitleTextColorFocused: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      mediaTitleTextColorFocused.setValue("#e8e8e8");
      const mediaTitleTextColor: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      mediaTitleTextColor.setValue("#e8e8e8");
      const timeoutIntervalSecs: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      timeoutIntervalSecs.setValue(300);
      const vodSettings: amVODSettings.am_general.AE_VODSettings = this._aSrvLocator._iEntityCreation.createDefaultVODSettings(error);
      vodSettings.setHintEnabled(hintEnabled);
      vodSettings.setMediaFrameBgColor(mediaFrameBgColor);
      vodSettings.setMediaFrameFocusBgColor(mediaFrameFocusBgColor);
      vodSettings.setMediaListZoneFrameLandscape(mediaListZoneFrameLandscape);
      vodSettings.setMediaListZoneFramePortrait(mediaListZoneFramePortrait);
      vodSettings.setMediaTitleTextColorFocused(mediaTitleTextColorFocused);
      vodSettings.setMediaTitleTextColor(mediaTitleTextColor);
      vodSettings.setTimeoutIntervalSecs(timeoutIntervalSecs);
  
      const playerType: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const renderingMode: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const videoSettings: amVideoSettings.am_general.AE_VideoSettings = this._aSrvLocator._iEntityCreation.createDefaultVideoSettings(error);
      videoSettings.setPlayerType(playerType);
      videoSettings.setRenderingMode(renderingMode);

      const watchdogEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      watchdogEnabled.setValue(true);

      const allowedUrls: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const purgeCacheOnStart: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      purgeCacheOnStart.setValue(false);
      const crosswalkUseTextureView: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      crosswalkUseTextureView.setValue(true);
      const webPageSettings: amWebPageSettings.am_general.AE_WebPageSettings = this._aSrvLocator._iEntityCreation.createDefaultWebPageSettings(error);
      webPageSettings.setAllowedUrls(allowedUrls);
      webPageSettings.setPurgeCacheOnStart(purgeCacheOnStart);
      webPageSettings.setCrosswalkUseTextureView(crosswalkUseTextureView);

      const aPlaybackSettings: amPlaybackSettings.am_general.AE_PlaybackSettings = this._aSrvLocator._iEntityCreation.createDefaultPlaybackSettings(error);
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

      // security settings
      const diagnosticsAppPassword: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const encryptMediaFiles: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      encryptMediaFiles.setValue(false);
      const playerConfigAppPassword: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const vodAppPassword: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
  
      const aSecuritySettings: amSecuritySettings.am_general.AE_SecuritySettings = this._aSrvLocator._iEntityCreation.createDefaultSecuritySettings(error);
      aSecuritySettings.setDiagnosticsAppPassword(diagnosticsAppPassword);
      aSecuritySettings.setEncryptMediaFiles(encryptMediaFiles);
      aSecuritySettings.setPlayerConfigAppPassword(playerConfigAppPassword);
      aSecuritySettings.setVodAppPassword(vodAppPassword);
      this._aServerDeviceSettings.setSecuritySettings(aSecuritySettings);

      // serial display commands settings
      const commandsMap: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const commandsMapValue = {};
      commandsMap.setValue(commandsMapValue);

      const aSerialDisplayCommandsSettings: amSerialDisplayCommandsSettings.am_general.AE_SerialDisplayCommandsSettings = this._aSrvLocator._iEntityCreation.createDefaultSerialDisplayCommandsSettings(error);
      aSerialDisplayCommandsSettings.setCommandsMap(commandsMap);
      this._aServerDeviceSettings.setSerialDisplayCommandsSettings(aSerialDisplayCommandsSettings);

      // site settings
      const bandwidthSettings: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const contentDownloadWindows: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const latitude: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const longitude: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const openingHour: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const maintenanceWindow: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const siteId: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const sleepMode: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      sleepMode.setValue("PLAYBACK");
      const zipCode: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap1: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap2: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap3: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap4: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap5: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap6: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap7: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap8: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap9: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap10: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap11: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap12: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap13: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap14: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const customParamsMap15: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
  
      const aSiteSettings: amSiteSettings.am_general.AE_SiteSettings = this._aSrvLocator._iEntityCreation.createDefaultSiteSettings(error);
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

      // software settings
      const debugViewVisible: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      debugViewVisible.setValue(false);
      const deleteMediaOnLaunch: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      deleteMediaOnLaunch.setValue(false);
      const deletePlaylistOnLaunch: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      deletePlaylistOnLaunch.setValue(false);
      const monitoringDisabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      monitoringDisabled.setValue(false);
      const networkSetupDisabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      networkSetupDisabled.setValue(false);
      const playbackLogsUploadDisabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      playbackLogsUploadDisabled.setValue(false);
      const playerFilesUpdateDisabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      playerFilesUpdateDisabled.setValue(false);
      const crashLoggerEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      crashLoggerEnabled.setValue(false);
      const lastPlayerChangeId: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const streamMusicTracks: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      streamMusicTracks.setValue(false);
      const useHeadlessSetupWebAppDevBuild: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      useHeadlessSetupWebAppDevBuild.setValue(false);
      const debugSettings: amDebugSettings.am_general.AE_DebugSettings = this._aSrvLocator._iEntityCreation.createDefaultDebugSettings(error);
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

      const earlyAdopter: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      earlyAdopter.setValue(false);
      const httpServiceMaxWorkers: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      httpServiceMaxWorkers.setValue(3);
      const headlessSetupEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      headlessSetupEnabled.setValue(true);
      const liveCommandsEnabled: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      liveCommandsEnabled.setValue(true);
      const projectIdSoftwareSettings: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);

      const exceptions: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const resetMode:  amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      resetMode.setValue("REBOOT_DEVICE");
      const resetTime:  amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      resetTime.setValue("03:00:00");
      const resetSettings: amResetSettings.am_general.AE_ResetSettings = this._aSrvLocator._iEntityCreation.createDefaultResetSettings(error);
      resetSettings.setExceptions(exceptions);
      resetSettings.setResetMode(resetMode);
      resetSettings.setResetTime(resetTime);
  
      const aSoftwareSettings: amSoftwareSettings.am_general.AE_SoftwareSettings = this._aSrvLocator._iEntityCreation.createDefaultSoftwareSettings(error);
      aSoftwareSettings.setDebugSettings(debugSettings);
      aSoftwareSettings.setEarlyAdopter(earlyAdopter);
      aSoftwareSettings.setHttpServiceMaxWorkers(httpServiceMaxWorkers);
      aSoftwareSettings.setHeadlessSetupEnabled(headlessSetupEnabled);
      aSoftwareSettings.setLiveCommandsEnabled(liveCommandsEnabled);
      aSoftwareSettings.setProjectId(projectIdSoftwareSettings);
      aSoftwareSettings.setResetSettings(resetSettings);
      this._aServerDeviceSettings.setSoftwareSettings(aSoftwareSettings);

      // sound settings
      const volumeLevels: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const volumeLevelsValue = {};
      volumeLevels.setValue(volumeLevelsValue);

      const aSoundSettings: amSoundSettings.am_general.AE_SoundSettings = this._aSrvLocator._iEntityCreation.createDefaultSoundSettings(error);
      aSoundSettings.setVolumeLevels(volumeLevels);
      this._aServerDeviceSettings.setSoundSettings(aSoundSettings);

      // time settings
      const customNtpServerUrl: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      const syncMode: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      syncMode.setValue("NTP_DEFAULT");  
      const timeSyncSettings: amTimeSyncSettings.am_general.AE_TimeSyncSettings = this._aSrvLocator._iEntityCreation.createDefaultTimeSyncSettings(error);
      timeSyncSettings.setCustomNtpServerUrl(customNtpServerUrl);
      timeSyncSettings.setSyncMode(syncMode);
      const timezone: amDeviceSetting.am_general.AE_DeviceSetting = this._aSrvLocator._iEntityCreation.createDeviceSetting(error);
      timezone.setValue("US/Eastern");

      const aTimeSettings: amTimeSettings.am_general.AE_TimeSettings = this._aSrvLocator._iEntityCreation.createDefaultTimeSettings(error);
      aTimeSettings.setTimeSyncSettings(timeSyncSettings);
      aTimeSettings.setTimezone(timezone);
      this._aServerDeviceSettings.setTimeSettings(aTimeSettings);
    }

    public populateSettingFromJson(jsonSettingString: string, aDeviceSetting: amDeviceSetting.am_general.AE_DeviceSetting): void
    {
      if ( aDeviceSetting != null ) {
        const jsonSetting = this._jsonSettings[jsonSettingString];
        if ( jsonSetting !== undefined && jsonSetting.value !== undefined && jsonSetting.timestamp !== undefined ) {
          const jsonSettingTimestamp = jsonSetting.timestamp;
          const deviceTimestamp = aDeviceSetting.getTimestamp();
          if (typeof jsonSettingTimestamp == "number" && jsonSettingTimestamp >= deviceTimestamp) {
            this._bServerDeviceSettingsChanged = true;
            const jsonSettingValue = jsonSetting.value;
            aDeviceSetting.setValue(jsonSettingValue);
            aDeviceSetting.setTimestamp(jsonSettingTimestamp);
          }  
        }
      }
    }

    public setAppCommunicationSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aAppCommunicationSettings: amAppCommunicationSettings.am_general.AE_AppCommunicationSettings = aServerDeviceSettings.getAppCommunicationSettings();
      if (aAppCommunicationSettings != null) {  
        const aMulticastSettings: amMulticastSettings.am_general.AE_MulticastSettings = aAppCommunicationSettings.getMulticastSettings();
        if (aMulticastSettings != null) {
          const strMulticastAddres: string  = "appCommunicationSettings.multicastSettings.defaultMulticastAddress";
          const strMulticastPort: string    = "appCommunicationSettings.multicastSettings.defaultMulticastPort";

          this.populateSettingFromJson(strMulticastAddres, aMulticastSettings.getAddress());
          this.populateSettingFromJson(strMulticastPort, aMulticastSettings.getPort());
        }
  
        const aP2PSettings: amP2PSettings.am_general.AE_P2PSettings = aAppCommunicationSettings.getP2PSettings();
        if (aP2PSettings != null) {
          const strP2PPort: string          = "appCommunicationSettings.p2pSettings.port";
          const strP2PServerEnabled: string = "appCommunicationSettings.p2pSettings.serverEnabled";
          const strP2PClientEnabled: string = "appCommunicationSettings.p2pSettings.clientEnabled";

          this.populateSettingFromJson(strP2PPort, aP2PSettings.getPort());
          this.populateSettingFromJson(strP2PServerEnabled, aP2PSettings.getServerEnabled());
          this.populateSettingFromJson(strP2PClientEnabled, aP2PSettings.getClientEnabled());
        }  
      }
    }

    public setClientSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aClientSettings: amClientSettings.am_general.AE_ClientSettings = aServerDeviceSettings.getClientSettings()
      if (aClientSettings != null) {
        const strEarlyAdopter: string = "clientSettings.earlyAdopter";
        const strProjectId: string    = "clientSettings.projectId";
        this.populateSettingFromJson(strEarlyAdopter, aClientSettings.getEarlyAdopter());
        this.populateSettingFromJson(strProjectId, aClientSettings.getProjectId());
      }
    }

    public setCloudAPISettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aCloudAPISettings: amCloudAPISettings.am_general.AE_CloudAPISettings = aServerDeviceSettings.getCloudAPISettings();
      if (aCloudAPISettings != null) {
        const strBaseServerAPIUrl: string     = "cloudApiSettings.baseServerApiUrl";
        const strBaseServerUpgradeUrl: string = "cloudApiSettings.baseServerUpgradeUrl";

        this.populateSettingFromJson(strBaseServerAPIUrl, aCloudAPISettings.getBaseServerAPIUrl());
        this.populateSettingFromJson(strBaseServerUpgradeUrl, aCloudAPISettings.getBaseServerUpgradeUrl());
      }
    }

    public setContentSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aContentSettings: amContentSettings.am_general.AE_ContentSettings = aServerDeviceSettings.getContentSettings();
      if (aContentSettings != null) {
        const strNetworkNotAvailableMessage: string   = "contentSettings.networkNotAvailableMessage";
        const strStoredTracksCountLimit: string       = "contentSettings.storedTracksCountLimit";

        this.populateSettingFromJson(strNetworkNotAvailableMessage, aContentSettings.getNetworkNotAvailableMessage());
        this.populateSettingFromJson(strStoredTracksCountLimit, aContentSettings.getStoreTracksCountLimit());

        const aPurgeSettings: amPurgeSettings.am_general.AE_PurgeSettings = aContentSettings.getPurgeSettings();
        if (aPurgeSettings != null) {
          const strCustomDirectories: string             = "contentSettings.purgeSettings.customDirectories";
          const strLogsPurgeUntouchedDays: string        = "contentSettings.purgeSettings.logsPurgeUntouchedDays";
          const strMediaFilesPurgeUntouchedDays: string  = "contentSettings.purgeSettings.mediaFilesPurgeUntouchedDays";
          const strStatisticsPurgeUntouchedDays: string  = "contentSettings.purgeSettings.statisticsPurgeUntouchedDays";
          const strMusicTracksPurgeUntouchedDays: string = "contentSettings.purgeSettings.musicTracksPurgeUntouchedDays"; 

          this.populateSettingFromJson(strCustomDirectories, aPurgeSettings.getCustomDirs());
          this.populateSettingFromJson(strLogsPurgeUntouchedDays, aPurgeSettings.getPurgeLogsUntouched());
          this.populateSettingFromJson(strMediaFilesPurgeUntouchedDays, aPurgeSettings.getPurgeMediaFilesUntouched());
          this.populateSettingFromJson(strStatisticsPurgeUntouchedDays, aPurgeSettings.getStatsUntouched());
          this.populateSettingFromJson(strMusicTracksPurgeUntouchedDays, aPurgeSettings.getMusicTracksPurgeUntouched());
        }
        
      }
    }

    public setCronSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings) : void
    {
      const aCronSettings: amCronSettings.am_general.AE_CronSettings = aServerDeviceSettings.getCronSettings();
      if (aCronSettings != null) {
        const strMonitorDataUpload: string    = "cronSettings.monitorDataUploadIntervalSeconds";
        const strPlayerFilesDownload: string  = "cronSettings.playerFilesDownloadIntervalSeconds";
        const strPlaylistFeedsUpdate: string  = "cronSettings.playlistFeedsUpdateIntervalSeconds";
        const strPlaylistUpdate: string       = "cronSettings.playlistUpdateIntervalSeconds";

        this.populateSettingFromJson(strMonitorDataUpload, aCronSettings.getMonitorDataUploadInterval());
        this.populateSettingFromJson(strPlayerFilesDownload, aCronSettings.getPlayerFilesDownloadInterval());
        this.populateSettingFromJson(strPlaylistFeedsUpdate, aCronSettings.getPlaylistFeedsUpdateInterval());
        this.populateSettingFromJson(strPlaylistUpdate, aCronSettings.getPlaylistUpdateInterval());
      }
    }

    public setDisplaySettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings) : void
    {
      const aDisplaySettings: amDisplaySettings.am_general.AE_DisplaySettings = aServerDeviceSettings.getDisplaySettings();
      if (aDisplaySettings != null) {
        const strBrightness: string   = "displaySettings.displayBrightness";
        const strDensity: string      = "displaySettings.displayDensity";
        const strOrientation: string  = "displaySettings.displayOrientation";
        const strResolution: string   = "displaySettings.displayResolution";
        const strScale: string        = "displaySettings.displayScale";

        this.populateSettingFromJson(strBrightness, aDisplaySettings.getBrightness());
        this.populateSettingFromJson(strDensity, aDisplaySettings.getDensity());
        this.populateSettingFromJson(strOrientation, aDisplaySettings.getOrientation());
        this.populateSettingFromJson(strResolution, aDisplaySettings.getResolution());
        this.populateSettingFromJson(strScale, aDisplaySettings.getScale());
      }
    }
    
    public setHardwareSetts(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aHardwareSetts: amHardwareSetts.am_general.AE_HardwareSettings = aServerDeviceSettings.getHardwareSetts();
      if (aHardwareSetts != null) {
        const strEarlyAdopter: string           = "hardwareSettings.earlyAdopter";
        const strKnownSerialProductIds: string  = "hardwareSettings.knownSerialProductIds";
        const strNetworkHostname: string        = "hardwareSettings.networkHostname";

        this.populateSettingFromJson(strEarlyAdopter, aHardwareSetts.getEarlyAdopter());
        this.populateSettingFromJson(strKnownSerialProductIds, aHardwareSetts.getKnownSerialProductIds());
        this.populateSettingFromJson(strNetworkHostname, aHardwareSetts.getNetworkHostname());
      }
    }

    public setLoggingSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aLoggingSettings: amLoggingSettings.am_general.AE_LoggingSettings = aServerDeviceSettings.getLoggingSettings();
      if (aLoggingSettings != null) {
        const strActivityLogsBufferMaxSizeBytes: string       = "loggingSettings.activityLogsBufferMaxSizeBytes";
        const strActivityLogsAutoUploadIntervalMillis: string = "loggingSettings.activityLogsAutoUploadIntervalMillis";
        const strActivityLogsAutoUploadEnabled: string        = "loggingSettings.activityLogsAutoUploadEnabled";
        const strActivityLogsFileEnabled: string              = "loggingSettings.activityLogsFileEnabled";
        const strPlaybackLogsFileEnabled: string              = "loggingSettings.playbackLogsFileEnabled";

        this.populateSettingFromJson(strActivityLogsBufferMaxSizeBytes, aLoggingSettings.getActivityLogsBufferMaxSizeBytes());
        this.populateSettingFromJson(strActivityLogsAutoUploadIntervalMillis, aLoggingSettings.getActivityLogsAutoUploadIntervalMillis());
        this.populateSettingFromJson(strActivityLogsAutoUploadEnabled, aLoggingSettings.getActivityLogsAutoUploadEnabled());
        this.populateSettingFromJson(strActivityLogsFileEnabled, aLoggingSettings.getActivityLogsFileEnabled());
        this.populateSettingFromJson(strPlaybackLogsFileEnabled, aLoggingSettings.getPlaybackLogsFileEnabled());
      }
    }

    public setNetworkSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aNetworkSettings: amNetworkSettings.am_general.AE_NetworkSettings = aServerDeviceSettings.getNetworkSettings();
      if (aNetworkSettings != null) {
        const ethernetSettings: amEthernetSettings.am_general.AE_EthernetSettings = aNetworkSettings.getEthernetSettings()
        if ( ethernetSettings != null ) {
          const strEthernetAllowConfigurationChange: string = "networkSettings.ethernetSettings.allowConfigurationChange";
          const strEthernetInterfaceEnabled: string         = "networkSettings.ethernetSettings.interfaceEnabled";
          const strEthernetDhcpEnabled: string              = "networkSettings.ethernetSettings.dhcpEnabled";
          const strEthernetVlanConfigurations: string       = "networkSettings.ethernetSettings.vlanConfigurations";

          this.populateSettingFromJson(strEthernetAllowConfigurationChange, ethernetSettings.getAllowConfigurationChange());
          this.populateSettingFromJson(strEthernetInterfaceEnabled, ethernetSettings.getInterfaceEnabled());
          this.populateSettingFromJson(strEthernetDhcpEnabled, ethernetSettings.getEnableDHCP());
          this.populateSettingFromJson(strEthernetVlanConfigurations, ethernetSettings.getVLANConfigurations());

          const aEthernetNetworkLinkSettings: amNetworkLinkSettings.am_general.AE_NetworkLinkSettings = ethernetSettings.getNetworkLinkSettings();
          if ( aEthernetNetworkLinkSettings != null ) {
            const strEthernetNetworkLinkDns1: string          = "networkSettings.ethernetSettings.networkLinkSettings.dns1";
            const strEthernetNetworkLinkDns2: string          = "networkSettings.ethernetSettings.networkLinkSettings.dns2";
            const strEthernetNetworkLinkGateway: string       = "networkSettings.ethernetSettings.networkLinkSettings.gateway";
            const strEthernetNetworkLinkIpAddress: string     = "networkSettings.ethernetSettings.networkLinkSettings.ipAddress";
            const strEthernetNetworkLinkNetmask: string       = "networkSettings.ethernetSettings.networkLinkSettings.netmask";
  
            this.populateSettingFromJson(strEthernetNetworkLinkDns1, aEthernetNetworkLinkSettings.getDNS1());
            this.populateSettingFromJson(strEthernetNetworkLinkDns2, aEthernetNetworkLinkSettings.getDNS2());
            this.populateSettingFromJson(strEthernetNetworkLinkGateway, aEthernetNetworkLinkSettings.getGateway());
            this.populateSettingFromJson(strEthernetNetworkLinkIpAddress, aEthernetNetworkLinkSettings.getIPAddress());
            this.populateSettingFromJson(strEthernetNetworkLinkNetmask, aEthernetNetworkLinkSettings.getNetmask());
          }
        }

        const httpProxySettings: amHTTPProxySettings.am_general.AE_HTTPProxySettings = aNetworkSettings.getHTTPProxySettings();
        if ( httpProxySettings != null ) {
          const strHttpProxyProxyEnabled: string  = "networkSettings.httpProxySettings.proxyEnabled";
          const strHttpProxyExcludedHosts: string = "networkSettings.httpProxySettings.excludedHostsList";
          const strHttpProxyHost: string          = "networkSettings.httpProxySettings.host";
          const strHttpProxyPassword: string      = "networkSettings.httpProxySettings.password";
          const strHttpProxyPort: string          = "networkSettings.httpProxySettings.port";
          const strHttpProxyUsername: string      = "networkSettings.httpProxySettings.username";

          this.populateSettingFromJson(strHttpProxyProxyEnabled, httpProxySettings.getProxyEnabled());
          this.populateSettingFromJson(strHttpProxyExcludedHosts, httpProxySettings.getExcludedHosts());
          this.populateSettingFromJson(strHttpProxyHost, httpProxySettings.getHost());
          this.populateSettingFromJson(strHttpProxyPassword, httpProxySettings.getPassword());
          this.populateSettingFromJson(strHttpProxyPort, httpProxySettings.getPort());
          this.populateSettingFromJson(strHttpProxyUsername, httpProxySettings.getUsername());
        }

        const wifiSettings: amWifiSettings.am_general.AE_WifiSettings = aNetworkSettings.getWifiSettings();
        if ( wifiSettings != null ) {
          const strWifiAllowConfigurationChange: string               = "networkSettings.wifiSettings.allowConfigurationChange";
          const strWifiInterfaceEnabled: string                       = "networkSettings.wifiSettings.interfaceEnabled";
          const strWifiDhcpEnabled: string                            = "networkSettings.wifiSettings.dhcpEnabled";
          const strWifiVlanConfigurations: string                     = "networkSettings.wifiSettings.vlanConfigurations";

          this.populateSettingFromJson(strWifiAllowConfigurationChange, wifiSettings.getAllowConfigurationChange());
          this.populateSettingFromJson(strWifiInterfaceEnabled, wifiSettings.getInterfaceEnabled());
          this.populateSettingFromJson(strWifiDhcpEnabled, wifiSettings.getEnableDHCP());
          this.populateSettingFromJson(strWifiVlanConfigurations, wifiSettings.getVLANConfigurations());
  
          const aWifiNetworkLinkSettings: amNetworkLinkSettings.am_general.AE_NetworkLinkSettings = wifiSettings.getNetworkLinkSettings();
          if ( aWifiNetworkLinkSettings != null ) {
            const strWifiNetworkLinkDns1: string                        = "networkSettings.wifiSettings.networkLinkSettings.dns1";
            const strWifiNetworkLinkDns2: string                        = "networkSettings.wifiSettings.networkLinkSettings.dns2";
            const strWifiNetworkLinkGateway: string                     = "networkSettings.wifiSettings.networkLinkSettings.gateway";
            const strWifiNetworkLinkIpAddress: string                   = "networkSettings.wifiSettings.networkLinkSettings.ipAddress";
            const strWifiNetworkLinkNetmask: string                     = "networkSettings.wifiSettings.networkLinkSettings.netmask";

            this.populateSettingFromJson(strWifiNetworkLinkDns1, aWifiNetworkLinkSettings.getDNS1());
            this.populateSettingFromJson(strWifiNetworkLinkDns2, aWifiNetworkLinkSettings.getDNS2());
            this.populateSettingFromJson(strWifiNetworkLinkGateway, aWifiNetworkLinkSettings.getGateway());
            this.populateSettingFromJson(strWifiNetworkLinkIpAddress, aWifiNetworkLinkSettings.getIPAddress());
            this.populateSettingFromJson(strWifiNetworkLinkNetmask, aWifiNetworkLinkSettings.getNetmask());
          }
    
          const aWifiAccessPointSettings: amWifiAccessPointSettings.am_general.AE_WifiAccessPointSettings = wifiSettings.getWifiAccessPointSettings();
          if ( aWifiAccessPointSettings != null ) {
            const strWifiSettingsAccessPointSSID: string                = "networkSettings.wifiSettings.wifiAccessPointSettings.ssid";
            const strWifiSettingsAccessPointPassword: string            = "networkSettings.wifiSettings.wifiAccessPointSettings.password";
            const strWifiSettingsAccessPointAuthenticationType: string  = "networkSettings.wifiSettings.wifiAccessPointSettings.authenticationType";
  
            this.populateSettingFromJson(strWifiSettingsAccessPointSSID, aWifiAccessPointSettings.getSSID());
            this.populateSettingFromJson(strWifiSettingsAccessPointPassword, aWifiAccessPointSettings.getPassword());
            this.populateSettingFromJson(strWifiSettingsAccessPointAuthenticationType, aWifiAccessPointSettings.getAuthenticationType());
          }
        }
      }
    }

    public setPlatformSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings) : void
    {
      const aPlatformSettings: amPlatformSettings.am_general.AE_PlatformSettings = aServerDeviceSettings.getPlatformSettings();
      if (aPlatformSettings != null) {
        const strAdbEnabled: string               = "platformSettings.adbEnabled";
        const strUsePowerKeyForScreenOff: string  = "platformSettings.usePowerKeyForScreenOff";
        const strWsusUrl: string                  = "platformSettings.wsusUrl";
        const strZidooSoundOutputRaw: string      = "platformSettings.zidooSoundOutputRaw";

        this.populateSettingFromJson(strAdbEnabled, aPlatformSettings.getAdbEnabled());
        this.populateSettingFromJson(strUsePowerKeyForScreenOff, aPlatformSettings.getUsePowerKeyForScreenOff());
        this.populateSettingFromJson(strWsusUrl, aPlatformSettings.getWsusUrl());
        this.populateSettingFromJson(strZidooSoundOutputRaw, aPlatformSettings.getZidooSoundOutputRaw());
      }
    }

    public setPlaybackSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings) : void
    {
      const aPlaybackSettings: amPlaybackSettings.am_general.AE_PlaybackSettings = aServerDeviceSettings.getPlaybackSettings();
      if ( aPlaybackSettings != null ) {
        const audioSettings:amAudioSettings.am_general.AE_AudioSettings = aPlaybackSettings.getAudioSettings();
        if ( audioSettings != null ) {
          const strDuckingPercent: string                     = "playbackSettings.audioSettings.duckingPercent";
          const strDuckingDuration: string                    = "playbackSettings.audioSettings.duckingDuration";
          const strMusicCrossfadeMode: string                 = "playbackSettings.audioSettings.musicCrossfadeMode";
          const strMusicSmoothStopPercent: string             = "playbackSettings.audioSettings.musicSmoothStopPercent";
          const strMusicSmoothStopDurationMillis: string      = "playbackSettings.audioSettings.musicSmoothStopDurationMillis";
          const strMusicStaticCrossfadeDurationMillis: string = "playbackSettings.audioSettings.musicStaticCrossfadeDurationMillis";
          const strMusicTracksVolume: string                  = "playbackSettings.audioSettings.musicTracksVolume";
          const strVolumePercentFactorZoneLeft: string        = "playbackSettings.audioSettings.volumePercentFactorZoneLeft";
          const strVolumePercentFactorZoneRight: string       = "playbackSettings.audioSettings.volumePercentFactorZoneRight";
          const strAudioPlayerType: string                    = "playbackSettings.audioSettings.audioPlayerType";
          const strVolumeTracksVolumeZoneLeft: string         = "playbackSettings.audioSettings.musicTracksVolumeZoneLeft";
          const strVolumeTracksVolumeZoneRight: string        = "playbackSettings.audioSettings.musicTracksVolumeZoneRight";
      
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

        const flashMediaSettings: amFlashMediaSettings.am_general.AE_FlashMediaSettings = aPlaybackSettings.getFlashMediaSettings();
        if ( flashMediaSettings != null ) {
          const strUseAirRuntime: string = "playbackSettings.flashMediaSettings.useAirRuntime";
          this.populateSettingFromJson(strUseAirRuntime, flashMediaSettings.getUseAirRuntime());
        }

        const strForceReportNowPlayingData: string    = "playbackSettings.forceReportNowPlayingData";
        const strPlaylistUpdateInstantReload: string  = "playbackSettings.playlistUpdateInstantReload";
        const strMultiZoneNoMediaFillColor: string    = "playbackSettings.multiZoneNoMediaFillColor";
        this.populateSettingFromJson(strForceReportNowPlayingData, aPlaybackSettings.getForceReportNowPlayingData());
        this.populateSettingFromJson(strPlaylistUpdateInstantReload, aPlaybackSettings.getPlaylistUpdateInstantReload());
        this.populateSettingFromJson(strMultiZoneNoMediaFillColor, aPlaybackSettings.getMultiZoneNoMediaFillColor());

        const playbackInteractionSettings: amPlaybackInteractionSettings.am_general.AE_PlaybackInteractionSettings = aPlaybackSettings.getPlaybackInteractionSettings();
        if ( playbackInteractionSettings != null ) {
          const strOnTouchAction: string = "playbackSettings.playbackInteractionSettings.onTouchAction";
          this.populateSettingFromJson(strOnTouchAction, playbackInteractionSettings.getOnTouchAction());
        }

        const strPlaybackRestartTimeoutMillis: string = "watchdogSettings.playbackRestartTimeoutMillis";
        const strSyncPlaybackTimeoutMillis: string    = "playbackSettings.syncPlaybackTimeoutMillis";
        this.populateSettingFromJson(strPlaybackRestartTimeoutMillis, aPlaybackSettings.getPlaybackRestartTimeoutMillis());
        this.populateSettingFromJson(strSyncPlaybackTimeoutMillis, aPlaybackSettings.getSyncPlaybackTimeoutMillis());

        const vodSettings: amVODSettings.am_general.AE_VODSettings = aPlaybackSettings.getVODSettings();
        if ( vodSettings != null ) {
          const strHintEnabled: string                  = "playbackSettings.vodSettings.isHintEnable";
          const strMediaFrameBgColor: string            = "playbackSettings.vodSettings.mediaFrameBackgroundColor";
          const strMediaFrameFocusBgColor: string       = "playbackSettings.vodSettings.mediaFrameFocusBackgroundColor";
          const strMediaListZoneFrameLandscape: string  = "playbackSettings.vodSettings.mediaListZoneFrameLandscape";
          const strMediaListZoneFramePortrait: string   = "playbackSettings.vodSettings.mediaListZoneFramePortrait";
          const strMediaTitleTextColorFocused: string   = "playbackSettings.vodSettings.mediaTitleTextColorFocused";
          const strMediaTitleTextColor: string          = "playbackSettings.vodSettings.mediaTitleTextColor";
          const strTimeoutIntervalSecs: string          = "playbackSettings.vodSettings.timeoutIntervalSeconds";

          this.populateSettingFromJson(strHintEnabled, vodSettings.getHintEnabled());
          this.populateSettingFromJson(strMediaFrameBgColor, vodSettings.getMediaFrameBgColor());
          this.populateSettingFromJson(strMediaFrameFocusBgColor, vodSettings.getMediaFrameFocusBgColor());
          this.populateSettingFromJson(strMediaListZoneFrameLandscape, vodSettings.getMediaListZoneFrameLandscape());
          this.populateSettingFromJson(strMediaListZoneFramePortrait, vodSettings.getMediaListZoneFramePortrait());
          this.populateSettingFromJson(strMediaTitleTextColorFocused, vodSettings.getMediaTitleTextColorFocused());
          this.populateSettingFromJson(strMediaTitleTextColor, vodSettings.getMediaTitleTextColor());
          this.populateSettingFromJson(strTimeoutIntervalSecs, vodSettings.getTimeoutIntervalSecs());
        }

        const videoSettings: amVideoSettings.am_general.AE_VideoSettings = aPlaybackSettings.getVideoSettings();
        if ( videoSettings != null ) {
          const strPlayerType: string     = "playbackSettings.videoSettings.videoPlayerType";
          const strRenderingMode: string  = "playbackSettings.videoSettings.videoRenderingMode";

          this.populateSettingFromJson(strPlayerType, videoSettings.getPlayerType());
          this.populateSettingFromJson(strRenderingMode, videoSettings.getRenderingMode());
        }

        const strWatchdogEnabled: string  = "watchdogSettings.watchdogEnabled";
        this.populateSettingFromJson(strWatchdogEnabled, aPlaybackSettings.getWatchdogEnabled());

        const webPageSettings: amWebPageSettings.am_general.AE_WebPageSettings = aPlaybackSettings.getWebPageSettings();
        if ( webPageSettings != null ) {
          const strAllowedUrls: string              = "playbackSettings.webPageSettings.allowedUrls";
          const strPurgeCacheOnStart: string        = "playbackSettings.webPageSettings.purgeWebCacheOnStart";
          const strCrosswalkUseTextureView: string  = "playbackSettings.webPageSettings.crosswalkUseTextureView";
      
          this.populateSettingFromJson(strAllowedUrls, webPageSettings.getAllowedUrls());
          this.populateSettingFromJson(strPurgeCacheOnStart, webPageSettings.getPurgeCacheOnStart());
          this.populateSettingFromJson(strCrosswalkUseTextureView, webPageSettings.getCrosswalkUseTextureView());
        }
      }
    }

    public setSecuritySettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aSecuritySettings: amSecuritySettings.am_general.AE_SecuritySettings = aServerDeviceSettings.getSecuritySettings();
      if ( aSecuritySettings != null ) {
        const strDiagnosticsAppPassword: string   = "securitySettings.diagnosticsAppPassword";
        const strEncryptMediaFiles: string        = "securitySettings.encryptMediaFiles";
        const strPlayerConfigAppPassword: string  = "securitySettings.playerConfigAppPassword";
        const strVodAppPassword: string           = "securitySettings.vodAppPassword";

        this.populateSettingFromJson(strDiagnosticsAppPassword, aSecuritySettings.getDiagnosticsAppPassword());
        this.populateSettingFromJson(strEncryptMediaFiles, aSecuritySettings.getEncryptMediaFiles());
        this.populateSettingFromJson(strPlayerConfigAppPassword, aSecuritySettings.getPlayerConfigAppPassword());
        this.populateSettingFromJson(strVodAppPassword, aSecuritySettings.getVodAppPassword());
      }
    }

    public setSerialDisplayCommandsSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aSerialDisplayCommandsSettings: amSerialDisplayCommandsSettings.am_general.AE_SerialDisplayCommandsSettings = aServerDeviceSettings.getSerialDisplayCommandsSettings();
      if ( aSerialDisplayCommandsSettings != null ) {
        const strCommandsMap: string = "serialDisplayCommands.commandsMap";
        this.populateSettingFromJson(strCommandsMap, aSerialDisplayCommandsSettings.getCommandsMap());
      }
    }

    public setSiteIdSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aSiteSettings: amSiteSettings.am_general.AE_SiteSettings = aServerDeviceSettings.getSiteSettings();
      if ( aSiteSettings != null ) {
        const strBandwidthSettings: string      = "siteSettings.bandwidthSettings";
        const strContentDownloadWindows: string = "siteSettings.contentDownloadWindows";
        const strLatitude: string               = "siteSettings.latitude";
        const strLongitude: string              = "siteSettings.longitude";
        const strOpeningHour: string            = "siteSettings.openingHours";
        const strSiteId: string                 = "siteSettings.siteId";
        const strSleepMode: string              = "siteSettings.sleepMode";
        const strZipCode: string                = "siteSettings.zipCode";
        const strMaintenanceWindow: string      = "siteSettings.maintenanceWindow";

        const strCustomParamsMap1: string       = "siteSettings.customParamsMap1";
        const strCustomParamsMap2: string       = "siteSettings.customParamsMap2";
        const strCustomParamsMap3: string       = "siteSettings.customParamsMap3";
        const strCustomParamsMap4: string       = "siteSettings.customParamsMap4";
        const strCustomParamsMap5: string       = "siteSettings.customParamsMap5";
        const strCustomParamsMap6: string       = "siteSettings.customParamsMap6";
        const strCustomParamsMap7: string       = "siteSettings.customParamsMap7";
        const strCustomParamsMap8: string       = "siteSettings.customParamsMap8";
        const strCustomParamsMap9: string       = "siteSettings.customParamsMap9";
        const strCustomParamsMap10: string      = "siteSettings.customParamsMap10";
        const strCustomParamsMap11: string      = "siteSettings.customParamsMap11";
        const strCustomParamsMap12: string      = "siteSettings.customParamsMap12";
        const strCustomParamsMap13: string      = "siteSettings.customParamsMap13";
        const strCustomParamsMap14: string      = "siteSettings.customParamsMap14";
        const strCustomParamsMap15: string      = "siteSettings.customParamsMap15";

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
    }

    public setSoftwareSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aSoftwareSettings: amSoftwareSettings.am_general.AE_SoftwareSettings = aServerDeviceSettings.getSoftwareSettings();
      if ( aSoftwareSettings != null ) {
        const aDebugSettings: amDebugSettings.am_general.AE_DebugSettings = aSoftwareSettings.getDebugSettings();
        if ( aDebugSettings != null ) {
          const strDebugViewVisible: string               = "softwareSettings.debugSettings.debugViewVisible";
          const strDeleteMediaOnLaunch: string            = "softwareSettings.debugSettings.deleteMediaOnLaunch";
          const strDeletePlaylistOnLaunch: string         = "softwareSettings.debugSettings.deletePlaylistOnLaunch";
          const strMonitoringDisabled: string             = "softwareSettings.debugSettings.monitoringDisabled";
          const strNetworkSetupDisabled: string           = "softwareSettings.debugSettings.networkSetupDisabled";
          const strPlaybackLogsUploadDisabled: string     = "softwareSettings.debugSettings.playbackLogsUploadDisabled";
          const strPlayerFilesUpdateDisabled: string      = "softwareSettings.debugSettings.playerFilesUpdateDisabled";
          const strCrashLoggerEnabled: string             = "softwareSettings.debugSettings.crashLoggerEnabled";
          const strLastPlayerChangeId: string             = "syncSettings.lastPlayerChangeId";
          const strStreamMusicTracks: string              = "softwareSettings.debugSettings.streamMusicTracks";
          const strUseHeadlessSetupWebAppDevBuild: string = "softwareSettings.debugSettings.useHeadlessSetupWebAppDevBuild";

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

        const strEarlyAdopter: string           = "softwareSettings.earlyAdopter";
        const strHttpServiceMaxWorkers: string  = "softwareSettings.httpServiceMaxWorkers";
        const strHeadlessSetupEnabled: string   = "softwareSettings.headlessSetupEnabled";
        const strLiveCommandsEnabled: string    = "softwareSettings.liveCommandsEnabled";
        const strProjectId : string             = "softwareSettings.projectId";

        this.populateSettingFromJson(strEarlyAdopter, aSoftwareSettings.getEarlyAdopter());
        this.populateSettingFromJson(strHttpServiceMaxWorkers, aSoftwareSettings.getHttpServiceMaxWorkers());
        this.populateSettingFromJson(strHeadlessSetupEnabled, aSoftwareSettings.getHeadlessSetupEnabled());
        this.populateSettingFromJson(strLiveCommandsEnabled, aSoftwareSettings.getLiveCommandsEnabled());
        this.populateSettingFromJson(strProjectId, aSoftwareSettings.getProjectId());

        const aResetSettings: amResetSettings.am_general.AE_ResetSettings = aSoftwareSettings.getResetSettings();
        if ( aResetSettings != null ) {
          const strExceptions: string = "softwareSettings.resetSettings.exceptions";
          const strResetMode: string  = "softwareSettings.resetSettings.resetMode";
          const strResetTime: string  = "softwareSettings.resetSettings.resetTime";

          this.populateSettingFromJson(strExceptions, aResetSettings.getExceptions());
          this.populateSettingFromJson(strResetMode, aResetSettings.getResetMode());
          this.populateSettingFromJson(strResetTime, aResetSettings.getResetTime());
        }
      }
    }

    public setSoundSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aSoundSettings: amSoundSettings.am_general.AE_SoundSettings = aServerDeviceSettings.getSoundSettings();
      if (aSoundSettings != null) {
        const strVolumeLevels: string = "soundSettings.volumeLevels";
        this.populateSettingFromJson(strVolumeLevels, aSoundSettings.getVolumeLevels());
      }
    }

    public setTimeSettings(aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings): void
    {
      const aTimeSettings: amTimeSettings.am_general.AE_TimeSettings = aServerDeviceSettings.getTimeSettings();
      if (aTimeSettings != null) {
        const timeSyncSettings: amTimeSyncSettings.am_general.AE_TimeSyncSettings = aTimeSettings.getTimeSyncSettings();
        if ( timeSyncSettings != null ) {
          const strCustomNtpServerUrl: string = "timeSettings.timeSyncSettings.customNtpServerUrl";
          const strSyncMode: string           = "timeSettings.timeSyncSettings.syncMode";

          this.populateSettingFromJson(strCustomNtpServerUrl, timeSyncSettings.getCustomNtpServerUrl());
          this.populateSettingFromJson(strSyncMode, timeSyncSettings.getSyncMode());
        }

        const strTimezone: string = "timeSettings.timeZone";
        this.populateSettingFromJson(strTimezone, aTimeSettings.getTimezone());
      }
    }

    public copyFromJson(jsonSettings: object) : void
    {
      const aServerDeviceSettings: amServerDeviceSettings.am_general.AE_ServerDeviceSettings = this._aServerDeviceSettings;
      if ( aServerDeviceSettings != null && jsonSettings != null ) {
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
    }
  }
} 