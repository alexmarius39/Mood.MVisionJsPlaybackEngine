import amEntity = require("../a_entity/A_Entity");

export module am_general
{
  export interface AE_VideoSettings extends amEntity.am_general.A_Entity
  {
    getDefaultScreenWidth(): number;
    setDefaultScreenWidth(nWidth: number): void;

    getDefaultScreenHeight(): number;
    setDefaultScreenHeight(nHeight: number): void;

    getDefaultScreenOrientation(): string;
    setDefaultScreenOrientation(strOrientation: string): void;

    getDefaultContrastLevel(): number;
    setDefaultContrastLevel(nContrastLevel: number): void;

    getDefaultBrightnessLevel(): number;
    setDefaultBrightnessLevel(nBrightnessLevel: number): void;

    getLastScreenWidth(): number;
    setLastScreenWidth(nWidth: number): void;

    getLastScreenHeight(): number;
    setLastScreenHeight(nHeight: number): void;

    getLastScreenOrientation(): string;
    setLastScreenOrientation(strOrientation: string): void;

    getLastContrastLevel(): number;
    setLastContrastLevel(nContrastLevel: number): void;

    getLastBrightnessLevel(): number;
    setLastBrightnessLevel(nBrightnessLevel: number): void;

    getApplyDefaultScreenWidthAtStartup(): boolean;
    setApplyDefaultScreenWidthAtStartup(bApplyWidth: boolean): void;

    getApplyDefaultScreenHeightAtStartup(): boolean;
    setApplyDefaultScreenHeightAtStartup(bApplyHeight: boolean): void;

    getApplyDefaultScreenOrientationAtStartup(): boolean;
    setApplyDefaultScreenOrientationAtStartup(bApplyOrientation: boolean): void;

    getApplyDefaultContrastLevelAtStartup(): boolean;
    setApplyDefaultContrastLevelAtStartup(bApplyContrastLevel: boolean): void;

    getApplyDefaultBrightnessLevelAtStartup(): boolean;
    setApplyDefaultBrightnessLevelAtStartup(bApplyBrightnessLevel: boolean): void;

  }
} 