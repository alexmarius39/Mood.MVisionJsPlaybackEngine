import rmEntity               = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import amServerDeviceSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_ServerDeviceSettings");

import amAppCommunicationSettings       = require("../../../abstract/am_general/ae_devicesettings/AE_AppCommunicationSettings");
import amClientSettings                 = require("../../../abstract/am_general/ae_devicesettings/AE_ClientSettings");
import amCloudAPISettings               = require("../../../abstract/am_general/ae_devicesettings/AE_CloudAPISettings");
import amContentSettings                = require("../../../abstract/am_general/ae_devicesettings/AE_ContentSettings");
import amCronSettings                   = require("../../../abstract/am_general/ae_devicesettings/AE_CronSettings");
import amDisplaySettings                = require("../../../abstract/am_general/ae_devicesettings/AE_DisplaySettings");
import amHardwareSetts                  = require("../../../abstract/am_general/ae_devicesettings/AE_HardwareSettings");
import amLoggingSettings                = require("../../../abstract/am_general/ae_devicesettings//AE_LoggingSettings");
import amNetworkSettings                = require("../../../abstract/am_general/ae_devicesettings/AE_NetworkSettings");
import amPlatformSettings               = require("../../../abstract/am_general/ae_devicesettings/AE_PlatformSettings");
import amPlaybackSettings               = require("../../../abstract/am_general/ae_devicesettings/AE_PlaybackSettings");
import amSecuritySettings               = require("../../../abstract/am_general/ae_devicesettings/AE_SecuritySettings");
import amSerialDisplayCommandsSettings  = require("../../../abstract/am_general/ae_devicesettings/AE_SerialDisplayCommandsSettings");
import amSiteSettings                   = require("../../../abstract/am_general/ae_devicesettings/AE_SiteSettings");
import amSoftwareSettings               = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_SoftwareSettings");
import amSoundSettings                  = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_SoundSettings");
import amTimeSettings                   = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_TimeSettings");

export module rm_general
{
  export class RE_ServerDeviceSettings  extends rmEntity.rm_general.R_Entity
                                        implements amServerDeviceSettings.am_general.AE_ServerDeviceSettings
  {
    _aAppCommunicationSettings      : amAppCommunicationSettings.am_general.AE_AppCommunicationSettings;
    _aClientSettings                : amClientSettings.am_general.AE_ClientSettings;
    _aCloudAPISettings              : amCloudAPISettings.am_general.AE_CloudAPISettings;
    _aContentSettings               : amContentSettings.am_general.AE_ContentSettings;
    _aCronSettings                  : amCronSettings.am_general.AE_CronSettings;
    _aDisplaySettings               : amDisplaySettings.am_general.AE_DisplaySettings;
    _aHardwareSetts                 : amHardwareSetts.am_general.AE_HardwareSettings;
    _aLoggingSettings               : amLoggingSettings.am_general.AE_LoggingSettings;
    _aNetworkSettings               : amNetworkSettings.am_general.AE_NetworkSettings;
    _aPlatformSettings              : amPlatformSettings.am_general.AE_PlatformSettings;
    _aPlaybackSettings              : amPlaybackSettings.am_general.AE_PlaybackSettings;
    _aSecuritySettings              : amSecuritySettings.am_general.AE_SecuritySettings;
    _aSerialDisplayCommandsSettings : amSerialDisplayCommandsSettings.am_general.AE_SerialDisplayCommandsSettings;
    _aSiteSettings                  : amSiteSettings.am_general.AE_SiteSettings;
    _aSoftwareSettings              : amSoftwareSettings.am_general.AE_SoftwareSettings;
    _aSoundSettings                 : amSoundSettings.am_general.AE_SoundSettings;
    _aTimeSettings                  : amTimeSettings.am_general.AE_TimeSettings;

    constructor()
    {
      super();

      this._aAppCommunicationSettings      = null;
      this._aClientSettings                = null;
      this._aCloudAPISettings              = null;
      this._aContentSettings               = null;
      this._aCronSettings                  = null;
      this._aDisplaySettings               = null;
      this._aHardwareSetts                 = null;
      this._aLoggingSettings               = null;
      this._aNetworkSettings               = null;
      this._aPlatformSettings              = null;
      this._aPlaybackSettings              = null;
      this._aSecuritySettings              = null;
      this._aSerialDisplayCommandsSettings = null;
      this._aSiteSettings                  = null;
      this._aSoftwareSettings              = null;
      this._aSoundSettings                 = null;
      this._aTimeSettings                  = null;
    }

    public getAppCommunicationSettings(): amAppCommunicationSettings.am_general.AE_AppCommunicationSettings
    {
      return this._aAppCommunicationSettings;
    }
    public setAppCommunicationSettings(aAppCommunicationSettings: amAppCommunicationSettings.am_general.AE_AppCommunicationSettings): void
    {
      this._aAppCommunicationSettings = aAppCommunicationSettings;
    }

    public getClientSettings(): amClientSettings.am_general.AE_ClientSettings
    {
      return this._aClientSettings;
    }
    public setClientSettings(aClientSettings: amClientSettings.am_general.AE_ClientSettings): void
    {
      this._aClientSettings = aClientSettings;
    }

    public getCloudAPISettings(): amCloudAPISettings.am_general.AE_CloudAPISettings
    {
      return this._aCloudAPISettings;
    }
    public setCloudAPISettings(aCloudAPISettings: amCloudAPISettings.am_general.AE_CloudAPISettings): void
    {
      this._aCloudAPISettings = aCloudAPISettings;
    }

    public getContentSettings(): amContentSettings.am_general.AE_ContentSettings
    {
      return this._aContentSettings;
    }
    public setContentSettings(aContentSettings: amContentSettings.am_general.AE_ContentSettings): void
    {
      this._aContentSettings = aContentSettings;
    }

    public getCronSettings(): amCronSettings.am_general.AE_CronSettings
    {
      return this._aCronSettings;
    }
    public setCronSettings(aCronSettings: amCronSettings.am_general.AE_CronSettings): void
    {
      this._aCronSettings = aCronSettings;
    }

    public getDisplaySettings(): amDisplaySettings.am_general.AE_DisplaySettings
    {
      return this._aDisplaySettings;
    }
    public setDisplaySettings(aDisplaySettings: amDisplaySettings.am_general.AE_DisplaySettings): void
    {
      this._aDisplaySettings = aDisplaySettings;
    }

    public getHardwareSetts(): amHardwareSetts.am_general.AE_HardwareSettings
    {
      return this._aHardwareSetts;
    }
    public setHardwareSetts(aHardwareSetts: amHardwareSetts.am_general.AE_HardwareSettings): void
    {
      this._aHardwareSetts = aHardwareSetts;
    }

    public getLoggingSettings(): amLoggingSettings.am_general.AE_LoggingSettings
    {
      return this._aLoggingSettings;
    }
    public setLoggingSettings(aLoggingSettings: amLoggingSettings.am_general.AE_LoggingSettings): void
    {
      this._aLoggingSettings = aLoggingSettings;
    }

    public getNetworkSettings(): amNetworkSettings.am_general.AE_NetworkSettings
    {
      return this._aNetworkSettings;
    }
    public setNetworkSettings(aNetworkSettings: amNetworkSettings.am_general.AE_NetworkSettings): void
    {
      this._aNetworkSettings = aNetworkSettings;
    }

    public getPlatformSettings(): amPlatformSettings.am_general.AE_PlatformSettings
    {
      return this._aPlatformSettings;
    }
    public setPlatformSettings(aPlatformSettings: amPlatformSettings.am_general.AE_PlatformSettings): void
    {
      this._aPlatformSettings = aPlatformSettings;
    }

    public getPlaybackSettings(): amPlaybackSettings.am_general.AE_PlaybackSettings
    {
      return this._aPlaybackSettings;
    }
    public setPlaybackSettings(aPlaybackSettings: amPlaybackSettings.am_general.AE_PlaybackSettings): void
    {
      this._aPlaybackSettings = aPlaybackSettings;
    }

    public getSecuritySettings(): amSecuritySettings.am_general.AE_SecuritySettings
    {
      return this._aSecuritySettings;
    }
    public setSecuritySettings(aSecuritySettings: amSecuritySettings.am_general.AE_SecuritySettings): void
    {
      this._aSecuritySettings = aSecuritySettings;
    }

    public getSerialDisplayCommandsSettings(): amSerialDisplayCommandsSettings.am_general.AE_SerialDisplayCommandsSettings
    {
      return this._aSerialDisplayCommandsSettings;
    }
    public setSerialDisplayCommandsSettings(aSerialDisplayCommandsSettings: amSerialDisplayCommandsSettings.am_general.AE_SerialDisplayCommandsSettings): void
    {
      this._aSerialDisplayCommandsSettings = aSerialDisplayCommandsSettings;
    }

    public getSiteSettings(): amSiteSettings.am_general.AE_SiteSettings
    {
      return this._aSiteSettings;
    }
    public setSiteSettings(aSiteSettings: amSiteSettings.am_general.AE_SiteSettings): void
    {
      this._aSiteSettings = aSiteSettings;
    }

    public getSoftwareSettings(): amSoftwareSettings.am_general.AE_SoftwareSettings
    {
      return this._aSoftwareSettings;
    }
    public setSoftwareSettings(aSoftwareSettings: amSoftwareSettings.am_general.AE_SoftwareSettings): void
    {
      this._aSoftwareSettings = aSoftwareSettings;
    }

    public getSoundSettings(): amSoundSettings.am_general.AE_SoundSettings
    {
      return this._aSoundSettings;
    }
    public setSoundSettings(aSoundSettings: amSoundSettings.am_general.AE_SoundSettings): void
    {
      this._aSoundSettings = aSoundSettings;
    }

    public getTimeSettings(): amTimeSettings.am_general.AE_TimeSettings
    {
      return this._aTimeSettings;
    }
    public setTimeSettings(aTimeSettings: amTimeSettings.am_general.AE_TimeSettings): void
    {
      this._aTimeSettings = aTimeSettings;
    }

  }
} 