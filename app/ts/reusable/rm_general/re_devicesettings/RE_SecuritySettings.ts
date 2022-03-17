import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amSecuritySettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_SecuritySettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_SecuritySettings  extends rmEntity.rm_general.R_Entity
                                    implements amSecuritySettings.am_general.AE_SecuritySettings
  {
    _diagnosticsAppPassword: amDeviceSetting.am_general.AE_DeviceSetting;
    _encryptMediaFiles: amDeviceSetting.am_general.AE_DeviceSetting;
    _playerConfigAppPassword: amDeviceSetting.am_general.AE_DeviceSetting;
    _vodAppPassword: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._diagnosticsAppPassword  = null;
      this._encryptMediaFiles       = null;
      this._playerConfigAppPassword = null;
      this._vodAppPassword          = null;
    }

    public setDiagnosticsAppPassword(diagnosticsAppPassword: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._diagnosticsAppPassword = diagnosticsAppPassword;
    }
    public getDiagnosticsAppPassword() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._diagnosticsAppPassword;
    }

    public setEncryptMediaFiles(encryptMediaFiles: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._encryptMediaFiles = encryptMediaFiles;
    }
    public getEncryptMediaFiles() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._encryptMediaFiles;
    }

    public setPlayerConfigAppPassword(playerConfigAppPassword: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._playerConfigAppPassword = playerConfigAppPassword;
    }
    public getPlayerConfigAppPassword() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._playerConfigAppPassword;
    }

    public setVodAppPassword(vodAppPassword: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._vodAppPassword = vodAppPassword;
    }
    public getVodAppPassword() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._vodAppPassword;
    }
  }
} 