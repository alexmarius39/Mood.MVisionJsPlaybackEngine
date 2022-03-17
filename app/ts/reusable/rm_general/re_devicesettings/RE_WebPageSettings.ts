import amDeviceSetting = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_DeviceSetting");
import amWebPageSettings = require("../../../../../app/ts/abstract/am_general/ae_devicesettings/AE_WebPageSettings");
import rmEntity  = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_WebPageSettings extends rmEntity.rm_general.R_Entity
                                  implements amWebPageSettings.am_general.AE_WebPageSettings
  {
    _allowedUrls: amDeviceSetting.am_general.AE_DeviceSetting;
    _purgeCacheOnStart: amDeviceSetting.am_general.AE_DeviceSetting;
    _crosswalkUseTextureView: amDeviceSetting.am_general.AE_DeviceSetting;

    constructor()
    {
      super();

      this._allowedUrls             = null;
      this._purgeCacheOnStart       = null;
      this._crosswalkUseTextureView = null;
    }

    public setAllowedUrls(allowedUrls: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._allowedUrls = allowedUrls;
    }
    public getAllowedUrls() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._allowedUrls;
    }

    public setPurgeCacheOnStart(purgeCacheOnStart: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._purgeCacheOnStart = purgeCacheOnStart;
    }
    public getPurgeCacheOnStart() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._purgeCacheOnStart;
    }

    public setCrosswalkUseTextureView(crosswalkUseTextureView: amDeviceSetting.am_general.AE_DeviceSetting) : void
    {
      this._crosswalkUseTextureView = crosswalkUseTextureView;
    }
    public getCrosswalkUseTextureView() : amDeviceSetting.am_general.AE_DeviceSetting
    {
      return this._crosswalkUseTextureView;
    }
  }
} 