import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amSiteSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_SiteSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_SiteSettings  extends rmEntity.rm_general.R_Entity
                                implements amSiteSettings.am_general.AE_SiteSettings
  {
    _bandwidthSettings: amDeviceSetting.am_general.AE_DeviceSetting;
    _contentDownloadWindows: amDeviceSetting.am_general.AE_DeviceSetting;
    _latitude: amDeviceSetting.am_general.AE_DeviceSetting;
    _longitude: amDeviceSetting.am_general.AE_DeviceSetting;
    _openingHour: amDeviceSetting.am_general.AE_DeviceSetting;
    _siteId: amDeviceSetting.am_general.AE_DeviceSetting;
    _sleepMode: amDeviceSetting.am_general.AE_DeviceSetting;
    _zipCode: amDeviceSetting.am_general.AE_DeviceSetting;
    _maintenanceWindow: amDeviceSetting.am_general.AE_DeviceSetting;

    _customParamsMap1: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap2: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap3: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap4: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap5: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap6: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap7: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap8: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap9: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap10: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap11: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap12: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap13: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap14: amDeviceSetting.am_general.AE_DeviceSetting;
    _customParamsMap15: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._bandwidthSettings       = null;
      this._contentDownloadWindows  = null;
      this._latitude                = null;
      this._longitude               = null;
      this._openingHour             = null;
      this._siteId                  = null;
      this._sleepMode               = null;
      this._zipCode                 = null;
      this._maintenanceWindow       = null;

      this._customParamsMap1        = null;
      this._customParamsMap2        = null;
      this._customParamsMap3        = null;
      this._customParamsMap4        = null;
      this._customParamsMap5        = null;
      this._customParamsMap6        = null;
      this._customParamsMap7        = null;
      this._customParamsMap8        = null;
      this._customParamsMap9        = null;
      this._customParamsMap10       = null;
      this._customParamsMap11       = null;
      this._customParamsMap12       = null;
      this._customParamsMap13       = null;
      this._customParamsMap14       = null;
      this._customParamsMap15       = null;
    }

    public setBandwidthSettings(bandwidthSettings: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._bandwidthSettings = bandwidthSettings;
    }
    public getBandwidthSettings() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._bandwidthSettings;
    }

    public setContentDownloadWindows(contentDownloadWindows: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._contentDownloadWindows = contentDownloadWindows;
    }
    public getContentDownloadWindows() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._contentDownloadWindows;
    }

    public setLatitude(latitude: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._latitude = latitude;
    }
    public getLatitude() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._latitude;
    }

    public setLongitude(longitude: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._longitude = longitude;
    }
    public getLongitude() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._longitude;
    }

    public setOpeningHour(openingHour: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._openingHour = openingHour;
    }
    public getOpeningHour() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._openingHour;
    }

    public setSiteId(siteId: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._siteId = siteId;
    }
    public getSiteId() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._siteId;
    }

    public setSleepMode(sleepMode: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._sleepMode = sleepMode;
    }
    public getSleepMode() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._sleepMode;
    }

    public setZipCode(zipCode: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._zipCode = zipCode;
    }
    public getZipCode() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._zipCode;
    }

    public setMaintenanceWindow(maintenanceWindow: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._maintenanceWindow = maintenanceWindow;
    }
    public getMaintenanceWindow() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._maintenanceWindow;
    }

    public setCustomParamsMap1(customParamsMap1: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap1 = customParamsMap1;
    }
    public getCustomParamsMap1() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap1;
    }

    public setCustomParamsMap2(customParamsMap2: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap2 = customParamsMap2;
    }
    public getCustomParamsMap2() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap2;
    }

    public setCustomParamsMap3(customParamsMap3: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap3 = customParamsMap3;
    }
    public getCustomParamsMap3() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap3;
    }

    public setCustomParamsMap4(customParamsMap4: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap4 = customParamsMap4;
    }
    public getCustomParamsMap4() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap4;
    }

    public setCustomParamsMap5(customParamsMap5: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap5 = customParamsMap5;
    }
    public getCustomParamsMap5() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap5;
    }

    public setCustomParamsMap6(customParamsMap6: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap6 = customParamsMap6;
    }
    public getCustomParamsMap6() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap6;
    }

    public setCustomParamsMap7(customParamsMap7: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap7 = customParamsMap7;
    }
    public getCustomParamsMap7() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap7;
    }

    public setCustomParamsMap8(customParamsMap8: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap8 = customParamsMap8;
    }
    public getCustomParamsMap8() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap8;
    }

    public setCustomParamsMap9(customParamsMap9: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap9 = customParamsMap9;
    }
    public getCustomParamsMap9() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap9;
    }

    public setCustomParamsMap10(customParamsMap10: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap10 = customParamsMap10;
    }
    public getCustomParamsMap10() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap10;
    }

    public setCustomParamsMap11(customParamsMap11: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap11 = customParamsMap11;
    }
    public getCustomParamsMap11() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap11;
    }

    public setCustomParamsMap12(customParamsMap12: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap12 = customParamsMap12;
    }
    public getCustomParamsMap12() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap12;
    }

    public setCustomParamsMap13(customParamsMap13: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap13 = customParamsMap13;
    }
    public getCustomParamsMap13() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap13;
    }

    public setCustomParamsMap14(customParamsMap14: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap14 = customParamsMap14;
    }
    public getCustomParamsMap14() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap14;
    }

    public setCustomParamsMap15(customParamsMap15: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._customParamsMap15 = customParamsMap15;
    }
    public getCustomParamsMap15() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._customParamsMap15;
    }
  }
} 