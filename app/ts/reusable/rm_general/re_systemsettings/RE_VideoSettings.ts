import amVideoSettings = require("../../../../../app/ts/abstract/am_general/ae_systemsettings/AE_VideoSettings");
import rmEntity = require("../r_entity/R_Entity");

export module rm_general
{
  export class RE_VideoSettings extends rmEntity.rm_general.R_Entity
                                implements amVideoSettings.am_general.AE_VideoSettings
  {
    _nDefaultScreenWidth: number;
    _nDefaultScreenHeight: number;
    _nDefaultScreenOrientation: string;
    _nDefaultContrastLevel: number;
    _nDefaultBrightnessLevel: number;
    
    _nLastScreenWidth: number;
    _nLastScreenHeight: number;
    _nLastScreenOrientation: string;
    _nLastContrastLevel: number;
    _nLastBrightnessLevel: number;

    _bApplyDefaultScreenWidthAtStartup: boolean;
    _bApplyDefaultScreenHeightAtStartup: boolean;
    _bApplyDefaultScreenOrientationAtStartup: boolean;
    _bApplyDefaultContrastLevelAtStartup: boolean;
    _bApplyDefaultBrightnessLevelAtStartup: boolean;

    constructor()
    {
      super();

      this._nDefaultScreenWidth = null;
      this._nDefaultScreenHeight = null;
      this._nDefaultScreenOrientation = null;
      this._nDefaultContrastLevel = null;
      this._nDefaultBrightnessLevel = null;
      
      this._nLastScreenWidth = null;
      this._nLastScreenHeight = null;
      this._nLastScreenOrientation = null;
      this._nLastContrastLevel = null;
      this._nLastBrightnessLevel = null;
  
      this._bApplyDefaultScreenWidthAtStartup = false;
      this._bApplyDefaultScreenHeightAtStartup = false;
      this._bApplyDefaultScreenOrientationAtStartup = false;
      this._bApplyDefaultContrastLevelAtStartup = false;
      this._bApplyDefaultBrightnessLevelAtStartup = false;  
    }

    public getDefaultScreenWidth(): number
    {
      return this._nDefaultScreenWidth;
    }
    public setDefaultScreenWidth(nWidth: number): void
    {
      this._nDefaultScreenWidth = nWidth;
    }

    public getDefaultScreenHeight(): number
    {
      return this._nDefaultScreenHeight;
    }
    public setDefaultScreenHeight(nHeight: number): void
    {
      this._nDefaultScreenHeight = nHeight;
    }

    public getDefaultScreenOrientation(): string
    {
      return this._nDefaultScreenOrientation;
    }
    public setDefaultScreenOrientation(strOrientation: string): void
    {
      this._nDefaultScreenOrientation = strOrientation;
    }

    public getDefaultContrastLevel(): number
    {
      return this._nDefaultContrastLevel;
    }
    public setDefaultContrastLevel(nContrastLevel: number): void
    {
      this._nDefaultContrastLevel = nContrastLevel;
    }

    public getDefaultBrightnessLevel(): number
    {
      return this._nDefaultBrightnessLevel;
    }
    public setDefaultBrightnessLevel(nBrightnessLevel: number): void
    {
      this._nDefaultBrightnessLevel = nBrightnessLevel;
    }

    public getLastScreenWidth(): number
    {
      return this._nLastScreenWidth;
    }
    public setLastScreenWidth(nWidth: number): void
    {
      this._nLastScreenWidth = nWidth;
    }

    public getLastScreenHeight(): number
    {
      return this._nLastScreenHeight;
    }
    public setLastScreenHeight(nHeight: number): void
    {
      this._nLastScreenHeight = nHeight;
    }

    public getLastScreenOrientation(): string
    {
      return this._nLastScreenOrientation;
    }
    public setLastScreenOrientation(strOrientation: string): void
    {
      this._nLastScreenOrientation = strOrientation;
    }

    public getLastContrastLevel(): number
    {
      return this._nLastContrastLevel;
    }
    public setLastContrastLevel(nContrastLevel: number): void
    {
      this._nLastContrastLevel = nContrastLevel;
    }

    public getLastBrightnessLevel(): number
    {
      return this._nLastBrightnessLevel;
    }
    public setLastBrightnessLevel(nBrightnessLevel: number): void
    {
      this._nLastBrightnessLevel = nBrightnessLevel;
    }

    public getApplyDefaultScreenWidthAtStartup(): boolean
    {
      return this._bApplyDefaultScreenWidthAtStartup
    }
    public setApplyDefaultScreenWidthAtStartup(bApplyWidth: boolean): void
    {
      this._bApplyDefaultScreenWidthAtStartup = bApplyWidth;
    }

    public getApplyDefaultScreenHeightAtStartup(): boolean
    {
      return this._bApplyDefaultScreenHeightAtStartup;
    }
    public setApplyDefaultScreenHeightAtStartup(bApplyHeight: boolean): void
    {
      this._bApplyDefaultScreenHeightAtStartup = bApplyHeight;
    }

    public getApplyDefaultScreenOrientationAtStartup(): boolean
    {
      return this._bApplyDefaultScreenOrientationAtStartup;
    }
    public setApplyDefaultScreenOrientationAtStartup(bApplyOrientation: boolean): void
    {
      this._bApplyDefaultScreenOrientationAtStartup = bApplyOrientation;
    }

    public getApplyDefaultContrastLevelAtStartup(): boolean
    {
      return this._bApplyDefaultContrastLevelAtStartup;
    }
    public setApplyDefaultContrastLevelAtStartup(bApplyContrastLevel: boolean): void
    {
      this._bApplyDefaultContrastLevelAtStartup = bApplyContrastLevel;
    }

    public getApplyDefaultBrightnessLevelAtStartup(): boolean
    {
      return this._bApplyDefaultBrightnessLevelAtStartup;
    }
    public setApplyDefaultBrightnessLevelAtStartup(bApplyBrightnessLevel: boolean): void
    {
      this._bApplyDefaultBrightnessLevelAtStartup = bApplyBrightnessLevel;
    }

  }
} 