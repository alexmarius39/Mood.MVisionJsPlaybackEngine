import amDeviceSetting = require("../../../abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amDebugSettings = require("../../../abstract/am_general/ae_devicesettings/AE_DebugSettings");
import amResetSettings = require("../../../abstract/am_general/ae_devicesettings/AE_ResetSettings");
import amSoftwareSettings = require("../../../abstract/am_general/ae_devicesettings/AE_SoftwareSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_SoftwareSettings  extends rmEntity.rm_general.R_Entity
                                    implements amSoftwareSettings.am_general.AE_SoftwareSettings
  {
    _debugSettings: amDebugSettings.am_general.AE_DebugSettings;
    _earlyAdopter: amDeviceSetting.am_general.AE_DeviceSetting;
    _httpServiceMaxWorkers: amDeviceSetting.am_general.AE_DeviceSetting;
    _headlessSetupEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _liveCommandsEnabled: amDeviceSetting.am_general.AE_DeviceSetting;
    _projectId: amDeviceSetting.am_general.AE_DeviceSetting;
    _resetSettings: amResetSettings.am_general.AE_ResetSettings;

    constructor()
    {
      super();

      this._debugSettings         = null;
      this._earlyAdopter          = null;
      this._httpServiceMaxWorkers = null;
      this._headlessSetupEnabled  = null;
      this._liveCommandsEnabled   = null;
      this._projectId             = null;
      this._resetSettings         = null;
    }

    public setDebugSettings(debugSettings: amDebugSettings.am_general.AE_DebugSettings) : void
    {
      this._debugSettings = debugSettings;
    }
    public getDebugSettings() : amDebugSettings.am_general.AE_DebugSettings
    {
      return this._debugSettings;
    }

    public setEarlyAdopter(earlyAdopter: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._earlyAdopter = earlyAdopter;
    }
    public getEarlyAdopter() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._earlyAdopter;
    }

    public setHttpServiceMaxWorkers(httpServiceMaxWorkers: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._httpServiceMaxWorkers = httpServiceMaxWorkers;
    }
    public getHttpServiceMaxWorkers() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._httpServiceMaxWorkers;
    }

    public setHeadlessSetupEnabled(headlessSetupEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._headlessSetupEnabled = headlessSetupEnabled;
    }
    public getHeadlessSetupEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._headlessSetupEnabled;
    }

    public setLiveCommandsEnabled(liveCommandsEnabled: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._liveCommandsEnabled = liveCommandsEnabled;
    }
    public getLiveCommandsEnabled() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._liveCommandsEnabled;
    }

    public setProjectId(projectId: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._projectId = projectId;
    }
    public getProjectId() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._projectId;
    }

    public setResetSettings(resetSettings: amResetSettings.am_general.AE_ResetSettings) : void
    {
      this._resetSettings = resetSettings;
    }
    public getResetSettings() : amResetSettings.am_general.AE_ResetSettings
    {
      return this._resetSettings;
    }
  }
} 