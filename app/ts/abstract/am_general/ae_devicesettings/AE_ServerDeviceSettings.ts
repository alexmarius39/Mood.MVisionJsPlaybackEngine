import amEntity = require("../a_entity/A_Entity");

import amAppCommunicationSettings       = require("./AE_AppCommunicationSettings");
import amClientSettings                 = require("./AE_ClientSettings");
import amCloudAPISettings               = require("./AE_CloudAPISettings");
import amContentSettings                = require("./AE_ContentSettings");
import amCronSettings                   = require("./AE_CronSettings");
import amDisplaySettings                = require("./AE_DisplaySettings");
import amHardwareSetts                  = require("./AE_HardwareSettings");
import amLoggingSettings                = require("./AE_LoggingSettings");
import amNetworkSettings                = require("./AE_NetworkSettings");
import amPlatformSettings               = require("./AE_PlatformSettings");
import amPlaybackSettings               = require("./AE_PlaybackSettings");
import amSecuritySettings               = require("./AE_SecuritySettings");
import amSerialDisplayCommandsSettings  = require("./AE_SerialDisplayCommandsSettings");
import amSiteSettings                   = require("./AE_SiteSettings");
import amSoftwareSettings               = require("./AE_SoftwareSettings");
import amSoundSettings                  = require("./AE_SoundSettings");
import amTimeSettings                   = require("./AE_TimeSettings");

export module am_general
{
  export interface AE_ServerDeviceSettings extends amEntity.am_general.A_Entity
  {
    getAppCommunicationSettings(): amAppCommunicationSettings.am_general.AE_AppCommunicationSettings;
    setAppCommunicationSettings(aAppCommunicationSettings: amAppCommunicationSettings.am_general.AE_AppCommunicationSettings): void;

    getClientSettings(): amClientSettings.am_general.AE_ClientSettings;
    setClientSettings(aClientSettings: amClientSettings.am_general.AE_ClientSettings): void;

    getCloudAPISettings(): amCloudAPISettings.am_general.AE_CloudAPISettings;
    setCloudAPISettings(aCloudAPISettings: amCloudAPISettings.am_general.AE_CloudAPISettings): void;

    getContentSettings(): amContentSettings.am_general.AE_ContentSettings;
    setContentSettings(aContentSettings: amContentSettings.am_general.AE_ContentSettings): void;

    getCronSettings(): amCronSettings.am_general.AE_CronSettings;
    setCronSettings(aCronSettings: amCronSettings.am_general.AE_CronSettings): void;

    getDisplaySettings(): amDisplaySettings.am_general.AE_DisplaySettings;
    setDisplaySettings(aDisplaySettings: amDisplaySettings.am_general.AE_DisplaySettings): void;

    getHardwareSetts(): amHardwareSetts.am_general.AE_HardwareSettings;
    setHardwareSetts(aHardwareSetts: amHardwareSetts.am_general.AE_HardwareSettings): void;

    getLoggingSettings(): amLoggingSettings.am_general.AE_LoggingSettings;
    setLoggingSettings(aLoggingSettings: amLoggingSettings.am_general.AE_LoggingSettings): void;

    getNetworkSettings(): amNetworkSettings.am_general.AE_NetworkSettings;
    setNetworkSettings(aNetworkSettings: amNetworkSettings.am_general.AE_NetworkSettings): void;

    getPlatformSettings(): amPlatformSettings.am_general.AE_PlatformSettings;
    setPlatformSettings(aPlatformSettings: amPlatformSettings.am_general.AE_PlatformSettings): void;

    getPlaybackSettings(): amPlaybackSettings.am_general.AE_PlaybackSettings;
    setPlaybackSettings(aPlaybackSettings: amPlaybackSettings.am_general.AE_PlaybackSettings): void;

    getSecuritySettings(): amSecuritySettings.am_general.AE_SecuritySettings;
    setSecuritySettings(aSecuritySettings: amSecuritySettings.am_general.AE_SecuritySettings): void;

    getSerialDisplayCommandsSettings(): amSerialDisplayCommandsSettings.am_general.AE_SerialDisplayCommandsSettings;
    setSerialDisplayCommandsSettings(aSerialDisplayCommandsSettings: amSerialDisplayCommandsSettings.am_general.AE_SerialDisplayCommandsSettings): void;

    getSiteSettings(): amSiteSettings.am_general.AE_SiteSettings;
    setSiteSettings(aSiteSettings: amSiteSettings.am_general.AE_SiteSettings): void;

    getSoftwareSettings(): amSoftwareSettings.am_general.AE_SoftwareSettings;
    setSoftwareSettings(aSoftwareSettings: amSoftwareSettings.am_general.AE_SoftwareSettings): void;

    getSoundSettings(): amSoundSettings.am_general.AE_SoundSettings;
    setSoundSettings(aSoundSettings: amSoundSettings.am_general.AE_SoundSettings): void;

    getTimeSettings(): amTimeSettings.am_general.AE_TimeSettings;
    setTimeSettings(aTimeSettings: amTimeSettings.am_general.AE_TimeSettings): void;
  }
} 