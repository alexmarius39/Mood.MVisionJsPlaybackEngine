import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_SecuritySettings extends amEntity.am_general.A_Entity
  {
    setDiagnosticsAppPassword(diagnosticsAppPassword: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getDiagnosticsAppPassword() : amDeviceSetting.am_general.AE_DeviceSetting;

    setEncryptMediaFiles(encryptMediaFiles: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getEncryptMediaFiles() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPlayerConfigAppPassword(playerConfigAppPassword: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPlayerConfigAppPassword() : amDeviceSetting.am_general.AE_DeviceSetting;

    setVodAppPassword(vodAppPassword: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getVodAppPassword() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 