import amEntity = require("../../am_general/a_entity/A_Entity");
import amServerDeviceSettings = require("../../am_general/ae_devicesettings/AE_ServerDeviceSettings");

export module am_general
{
  export interface AE_ServerDeviceSettingsConfiguration extends amEntity.am_general.A_Entity
  {
    getServerDeviceSettingsConfiguration() : amServerDeviceSettings.am_general.AE_ServerDeviceSettings
    setServerDeviceSettingsConfiguration(aServerDeviceSettingsConfiguration: amServerDeviceSettings.am_general.AE_ServerDeviceSettings)

    initSettings(): void;
    copyFromJson(aJsonSettings: object): void;

    getServerDeviceSettingsChanged(): boolean;
    setServerDeviceSettingsChanged(bChanged: boolean): void;
  }
}

