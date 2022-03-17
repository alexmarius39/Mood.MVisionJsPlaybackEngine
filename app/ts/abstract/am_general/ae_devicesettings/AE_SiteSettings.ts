import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_SiteSettings extends amEntity.am_general.A_Entity
  {
    setBandwidthSettings(bandwidthSettings: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getBandwidthSettings() : amDeviceSetting.am_general.AE_DeviceSetting;

    setContentDownloadWindows(contentDownloadWindows: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getContentDownloadWindows() : amDeviceSetting.am_general.AE_DeviceSetting;

    setLatitude(latitude: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getLatitude() : amDeviceSetting.am_general.AE_DeviceSetting;

    setLongitude(longitude: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getLongitude() : amDeviceSetting.am_general.AE_DeviceSetting;

    setOpeningHour(openingHour: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getOpeningHour() : amDeviceSetting.am_general.AE_DeviceSetting;

    setMaintenanceWindow(maintenanceWindow: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getMaintenanceWindow() : amDeviceSetting.am_general.AE_DeviceSetting;

    setSiteId(siteId: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getSiteId() : amDeviceSetting.am_general.AE_DeviceSetting;

    setSleepMode(sleepMode: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getSleepMode() : amDeviceSetting.am_general.AE_DeviceSetting;

    setZipCode(zipCode: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getZipCode() : amDeviceSetting.am_general.AE_DeviceSetting;

    setCustomParamsMap1(customParamsMap1: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap1() : amDeviceSetting.am_general.AE_DeviceSetting;

    setCustomParamsMap2(customParamsMap2: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap2() : amDeviceSetting.am_general.AE_DeviceSetting;

    setCustomParamsMap3(customParamsMap3: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap3() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap4(customParamsMap4: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap4() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap5(customParamsMap5: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap5() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap6(customParamsMap6: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap6() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap7(customParamsMap7: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap7() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap8(customParamsMap8: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap8() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap9(customParamsMap9: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap9() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap10(customParamsMap10: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap10() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap11(customParamsMap11: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap11() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap12(customParamsMap12: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap12() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap13(customParamsMap13: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap13() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap14(customParamsMap14: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap14() : amDeviceSetting.am_general.AE_DeviceSetting;
    
    setCustomParamsMap15(customParamsMap15: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCustomParamsMap15() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 