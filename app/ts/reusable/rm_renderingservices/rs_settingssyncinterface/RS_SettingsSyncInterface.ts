import amSettingsSyncInterfaceService  = require("../../../abstract/am_renderingservices/as_settingssyncinterface/AS_SettingsSyncInterfaceService");
import amSettingsSyncServiceInterfaceMain = require("../../../abstract/am_renderingservices/as_settingssyncinterface/I_SettingsSyncInterfaceMain");
import amSettingsSyncServiceInterfaceConfig = require("../../../abstract/am_renderingservices/as_settingssyncinterface/I_SettingsSyncInterfaceConfig");

import amSDKService   = require("../../../abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amUtilsService = require("../../../abstract/am_transversalservices/a_utilsservice/A_UtilsService");

import amError              = require("../../../abstract/am_general/a_error/A_Error");
import amContext            = require("../../../abstract/am_general/a_context/A_Context");
import amFactoryDescription = require("../../../abstract/am_general/a_factorydescription/A_FactoryDescription");
import amServiceContainer   = require("../../../abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amLogService         = require("../../../abstract/am_transversalservices/a_logservice/A_LogService");

import rmRenderingServices = require("../r_renderingservice/R_RenderingService");
import rmSettingsSyncInterfaceMain     = require("./RI_SettingsSyncInterface_Main");
import rmSettingsSyncInterfaceConfig   = require("./RI_SettingsSyncInterface_Config");

export module rm_renderingservices
{
  export class RS_SettingsSyncInterfaceService extends rmRenderingServices.rm_renderingservices.R_RenderingService 
                                                implements amSettingsSyncInterfaceService.am_renderingservices.A_SettingsSyncInterfaceService
  {
    //---------- interfaces
    _iSettingsSyncInterfaceMain : amSettingsSyncServiceInterfaceMain.am_renderingservices.AI_SettingsSyncInterfaceMain;
    _iSettingsSyncInterfaceConfig : amSettingsSyncServiceInterfaceConfig.am_renderingservices.AI_SettingsSyncInterfaceConfig;

    //----------- composants 
    _aLogService : amLogService.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amFactoryDescription.am_general.A_FactoryDescription, 
      aServiceContainer  : amServiceContainer.am_configurationservices.A_ServiceContainer,
      aLogService        : amLogService.am_transversalservices.A_LogService,
      error              : amError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iSettingsSyncInterfaceMain = new rmSettingsSyncInterfaceMain.rm_renderingservices.RI_SettingsSyncInterfaceMain(this)
      this._iSettingsSyncInterfaceConfig = new rmSettingsSyncInterfaceConfig.rm_renderingservices.RI_SettingsSyncInterfaceConfig(this);
      this._aLogService = aLogService;
    }

    public setSDKService(aSDKService: amSDKService.am_transversalservices.A_SDK_JsTV): void
    {
      this._aSDKService = aSDKService;
    }

    public setUtilsService(aUtilsService: amUtilsService.am_transversalservices.A_UtilsService) : void
    {
      this._aUtilsService = aUtilsService;    
    }

    //-----------------------------
    public start(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      var htmlUISettingsButton = document.getElementById("sync_settings_id");
      if (htmlUISettingsButton) {
        htmlUISettingsButton.style.display = "block";
        htmlUISettingsButton.style.position = "absolute";
        htmlUISettingsButton.style.zIndex = "99999997";
        htmlUISettingsButton.style.top = "10";
        htmlUISettingsButton.style.left = "10";  
      }

      context != null && context.setError(error);
      callback != null && callback(context);
    }

    //-----------------------------
    public stop(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      var uiWindow = document.getElementById("myModal");
      if (uiWindow) {
        while(uiWindow.firstChild) {
          uiWindow.removeChild(uiWindow.firstChild);
        }
        uiWindow.style.display = "none";
      }

      var htmlUISettingsButton = document.getElementById("sync_settings_id");
      if (htmlUISettingsButton) {
        htmlUISettingsButton.style.display = "none";
      }

      context != null && context.setError(error);
      callback != null && callback(context);
    }
  }
} 