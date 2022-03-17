import amEntity         = require("../a_entity/A_Entity");
import amDeviceSetting  = require("./AE_DeviceSetting");
import amDebugSettings  = require("./AE_DebugSettings");
import amResetSettings  = require("./AE_ResetSettings");

export module am_general
{
  export interface AE_SoftwareSettings extends amEntity.am_general.A_Entity
  {
    setDebugSettings(debugSettings: amDebugSettings.am_general.AE_DebugSettings) : void;
    getDebugSettings() : amDebugSettings.am_general.AE_DebugSettings;

    setEarlyAdopter(earlyAdopter: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getEarlyAdopter() : amDeviceSetting.am_general.AE_DeviceSetting;

    setHttpServiceMaxWorkers(httpServiceMaxWorkers: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getHttpServiceMaxWorkers() : amDeviceSetting.am_general.AE_DeviceSetting;

    setHeadlessSetupEnabled(headlessSetupEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getHeadlessSetupEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setLiveCommandsEnabled(liveCommandsEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getLiveCommandsEnabled() : amDeviceSetting.am_general.AE_DeviceSetting;

    setProjectId(projectId: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getProjectId() : amDeviceSetting.am_general.AE_DeviceSetting;

    setResetSettings(resetSettings: amResetSettings.am_general.AE_ResetSettings) : void;
    getResetSettings() : amResetSettings.am_general.AE_ResetSettings;
  }
} 