import amEntity = require("../a_entity/A_Entity");
import amDeviceSetting = require("./AE_DeviceSetting");

export module am_general
{
  export interface AE_WebPageSettings extends amEntity.am_general.A_Entity
  {
    setAllowedUrls(allowedUrls: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getAllowedUrls() : amDeviceSetting.am_general.AE_DeviceSetting;

    setPurgeCacheOnStart(purgeCacheOnStart: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getPurgeCacheOnStart() : amDeviceSetting.am_general.AE_DeviceSetting;

    setCrosswalkUseTextureView(crosswalkUseTextureView: amDeviceSetting.am_general.AE_DeviceSetting) : void;
    getCrosswalkUseTextureView() : amDeviceSetting.am_general.AE_DeviceSetting;
  }
} 