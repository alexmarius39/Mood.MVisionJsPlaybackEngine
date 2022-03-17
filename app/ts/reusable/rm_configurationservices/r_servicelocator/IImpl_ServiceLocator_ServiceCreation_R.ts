import amConfigurationServices = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/I_ServiceLocator_ServiceCreation");


import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralProperties = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralServices = require("../../../../../app/ts/abstract/am_general/a_service/A_Services");

import rmTransversalServices   = require("../../../../../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator");
                                                                                                        
import amRenderingServicesRenderingZone        = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/A_RenderingZone");
import amRenderingServicesImageRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/A_ImageRenderer");
import amRenderingServicesVideoRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/A_VideoRenderer");
import amRenderingServicesVideoStreamRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/A_VideoStreamRenderer");
import amRenderingServicesHtmlRenderer         = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/A_HtmlRenderer");
import amRenderingServicesHtmlTemplateRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/A_HtmlTemplateRenderer");
import amRenderingServicesFlashRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/A_FlashRenderer");
import amRenderingServicesScreenSaverRenderer  = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/A_ScreenSaverRenderer");
import amRenderingServicesFillRectRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/A_FillRectRenderer");
import amRenderingServicesTvHdmiPassThroughSrv = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/A_TvHdmiPassThroughSrv");
import amRenderingServicesBackgroundRenderer   = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/A_BackgroundRenderer");

import amCoreServicesPlaylistController        = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController       = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amCoreServicesPlaylistDownloader       = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/AS_PlaylistDownloader");
import amCoreServicesHtmlTemplateDownloader   = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AS_HtmlTemplateDownloader");
import amTransversalServicesDownloadService   = require("../../../../../app/ts/abstract/am_transversalservices/as_downloadservice/AS_DownloadService");
import amNonrenderingServicesUpdateSoftware   = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_updatesoftware/AS_UpdateSoftware");
import amNonrenderingServicesCronService      = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AS_CronService");
import amNonrenderingServicesLiveCommands     = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_livecommands/AS_LiveCommands");
import amNonrenderingServicesVolumeSetup      = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_volumesetup/AS_VolumeSetup");
import amNonrenderingServicesSettingsSync     = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_settingssync/AS_SettingsSync");

import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");
import amNonrenderingServicesMonitoring       = require("../../../abstract/am_nonrenderingservices/as_monitoring/AS_Monitoring");
import amRenderingServicesScreenshot          = require("../../../../../app/ts/abstract/am_renderingservices/as_screenshot/AS_Screenshot");
import amRenderingServicesStartup             = require("../../../../../app/ts/abstract/am_renderingservices/as_startup/AS_Startup");
import amRenderingServicesSyncSettingsInterface = require("../../../../../app/ts/abstract/am_renderingservices/as_settingssyncinterface/AS_SettingsSyncInterfaceService");

import amRenderingServicesTestService         = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AS_TestService");
import amRenderingServicesTestService2        = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice2/AS_TestService2");
import amRenderingServicesTestService3        = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice3/AS_TestService3");

import amNonrenderingServicesFileSettingsUpdate = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_filesettingsupdate/AS_FileSettingsUpdate");

import amNonrenderingServicesRebootService = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_rebootservice/AS_RebootService");


export module rm_configurationservices
{
  export class IImpl_ServiceLocator_ServiceCreation_R implements amConfigurationServices.am_configurationservices.I_ServiceLocator_ServiceCreation
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_configurationservices.R_ServiceLocator;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_configurationservices.R_ServiceLocator)  
    {
      this._owner = owner;  
    }

    //--- create a service
    public createService( aFactoryDescription : amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                          aServiceContainer   : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                          serviceProperties   : amGeneralProperties.am_general.A_Properties, 
                          aLogService         : amTransversalServicesLogService.am_transversalservices.A_LogService,
                          error               :  amGeneralError.am_general.A_Error)
                            : amGeneralService.am_general.A_Service
    {
      return this._owner.createService(aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error)
    }

    //--------------------------- create a default service list
    public createDefaultServices(error: amGeneralError.am_general.A_Error) : amGeneralServices.am_general.A_Services
    {
      return this._owner.createDefaultServices(error);
    }

    //--------------------------------------------------------------------------
    public createAllStartupServices( error: amGeneralError.am_general.A_Error) : void
    {
      return this._owner.createAllStartupServices(error);
    }

    //------------------------------------
    // create default rendering services
    //------------------------------------

    public createDefaultService_RenderingZone(
                                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                                 aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                                 id                 : number,
                                 error : amGeneralError.am_general.A_Error)  
                                        : amRenderingServicesRenderingZone.am_renderingservices.A_RenderingZone
    {
      return this._owner.createDefaultService_RenderingZone(aServiceContainer, aServiceLocator, aLogService,id,error)  ;
    }
    
    public createDefaultService_VideoRenderer(
                      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                      id                 : number,
                      error : amGeneralError.am_general.A_Error)  
                                 : amRenderingServicesVideoRenderer.am_renderingservices.A_VideoRenderer
    {
      return this._owner.createDefaultService_VideoRenderer(aServiceContainer, aServiceLocator, aLogService,id,error)  ;
    }
                            
    public createDefaultService_VideoStreamRenderer(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)  
                      : amRenderingServicesVideoStreamRenderer.am_renderingservices.A_VideoStreamRenderer
    {
      return this._owner.createDefaultService_VideoStreamRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_ImageRenderer(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)  
                      : amRenderingServicesImageRenderer.am_renderingservices.A_ImageRenderer
    {
      return this._owner.createDefaultService_ImageRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_HtmlRenderer(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  id                 : number,
                  error : amGeneralError.am_general.A_Error)  
                              : amRenderingServicesHtmlRenderer.am_renderingservices.A_HtmlRenderer
    {
      return this._owner.createDefaultService_HtmlRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_HtmlTemplateRenderer(
              aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
              aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
              aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
              id                 : number,
              error : amGeneralError.am_general.A_Error)  
                        : amRenderingServicesHtmlTemplateRenderer.am_renderingservices.A_HtmlTemplateRenderer
    {
      return this._owner.createDefaultService_HtmlTemplateRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_FlashRenderer(
                aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                id                 : number,
                error : amGeneralError.am_general.A_Error)  
                            : amRenderingServicesFlashRenderer.am_renderingservices.A_FlashRenderer
    {
      return this._owner.createDefaultService_FlashRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }
                        
    public createDefaultService_FillRectRenderer(
              aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
              aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
              aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
              id                 : number,
              error : amGeneralError.am_general.A_Error)  
                        : amRenderingServicesFillRectRenderer.am_renderingservices.A_FillRectRenderer
    {
      return this._owner.createDefaultService_FillRectRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_ScreenSaverRenderer(
                aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                id                 : number,
                error : amGeneralError.am_general.A_Error)  
                          : amRenderingServicesScreenSaverRenderer.am_renderingservices.A_ScreenSaverRenderer
    {
      return this._owner.createDefaultService_ScreenSaverRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_TvHdmiPassThroughSrv(
                    aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                    aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                    aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                    id                 : number,
                    error : amGeneralError.am_general.A_Error)  
                                : amRenderingServicesTvHdmiPassThroughSrv.am_renderingservices.A_TvHdmiPassThroughSrv
    {
      return this._owner.createDefaultService_TvHdmiPassThroughSrv(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_BackgroundRenderer(
            aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
            aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
            aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
            id                 : number,
            error : amGeneralError.am_general.A_Error)  
                        : amRenderingServicesBackgroundRenderer.am_renderingservices.A_BackgroundRenderer
    {
      return this._owner.createDefaultService_BackgroundRenderer(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    //---------------
    // controllers 
    //---------------

    //----------- create default PlaylistController
    public createDefaultService_PlaylistController(
        aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
        aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
        aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
        id                 : number,
        error : amGeneralError.am_general.A_Error)  
                    : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController
    {
      return this._owner.createDefaultService_PlaylistController(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }


    //----------- create default RenderingController
    public createDefaultService_RenderingController(
          aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
          aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
          aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
          id                 : number,
          error : amGeneralError.am_general.A_Error)  
                      : amCoreServicesRenderingController.am_coreservices.A_RenderingController
    {
      return this._owner.createDefaultService_RenderingController(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    //----------- create default PlaylistDownloader
    public createDefaultService_PlaylistDownloader(
                   aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                   aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                   aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                   id                 : number,
                   error : amGeneralError.am_general.A_Error)  
                           : amCoreServicesPlaylistDownloader.am_coreservices.AS_PlaylistDownloader
    {
      return this._owner.createDefaultService_PlaylistDownloader(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    //----------- create default PlaylistDownloader
    public createDefaultService_HtmlTemplateDownloader(
                   aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                   aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                   aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                   id                 : number,
                   error : amGeneralError.am_general.A_Error)  
                           : amCoreServicesHtmlTemplateDownloader.am_coreservices.AS_HtmlTemplateDownloader
    {
      return this._owner.createDefaultService_HtmlTemplateDownloader(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    //----------- create default DownloadService
    public createDefaultService_DownloadService(
                   aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                   aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                   aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                   id                 : number,
                   error : amGeneralError.am_general.A_Error)  
                           : amTransversalServicesDownloadService.am_transversalservices.AS_DownloadService    
    {
      return this._owner.createDefaultService_DownloadService(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    //----------- create default DownloadService
    public createDefaultService_UpdateSoftware(
                   aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                   aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                   aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                   id                 : number,
                   error : amGeneralError.am_general.A_Error)  
                           : amNonrenderingServicesUpdateSoftware.am_nonrenderingservices.AS_UpdateSoftware    
    {
      return this._owner.createDefaultService_UpdateSoftware(aServiceContainer, aServiceLocator, aLogService,id,error) ;      
    }

    public createDefaultService_Monitoring(
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      id                 : number,
      error : amGeneralError.am_general.A_Error)
              : amNonrenderingServicesMonitoring.am_nonrenderingservices.AS_MonitoringService
    {
      return this._owner.createDefaultService_Monitoring(aServiceContainer, aServiceLocator, aLogService,id,error);      
    }

    public createDefaultService_Screenshot(
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      id                 : number,
      error : amGeneralError.am_general.A_Error)  
                      : amRenderingServicesScreenshot.am_renderingservices.AS_ScreenshotService
    {
      return this._owner.createDefaultService_Screenshot(aServiceContainer, aServiceLocator, aLogService,id,error);
    }

    public createDefaultService_Startup(
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      id                 : number,
      error : amGeneralError.am_general.A_Error)  
                      : amRenderingServicesStartup.am_renderingservices.AS_StartupService
    {
      return this._owner.createDefaultService_Startup(aServiceContainer, aServiceLocator, aLogService,id,error);
    }
    
    public createDefaultService_LiveCommands(
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      id                 : number,
      error : amGeneralError.am_general.A_Error)  
                      : amNonrenderingServicesLiveCommands.am_nonrenderingservices.AS_LiveCommandsService
    {
      return this._owner.createDefaultService_LiveCommands(aServiceContainer, aServiceLocator, aLogService,id,error);
    }

    public createDefaultService_VolumeSetup(
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      id                 : number,
      error : amGeneralError.am_general.A_Error)  
                      : amNonrenderingServicesVolumeSetup.am_nonrenderingservices.AS_VolumeSetupService
    {
      return this._owner.createDefaultService_VolumeSetup(aServiceContainer, aServiceLocator, aLogService,id,error);      
    }

    //----------- create default ActivityLogService
    public createDefaultService_ActivityLogService(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  id                 : number,
                  error : amGeneralError.am_general.A_Error)
                        : amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService
    {
        return this._owner.createDefaultService_ActivityLogService(aServiceContainer, aServiceLocator, aLogService,id,error);
    }


    //--------------------
    public createDefaultService_CronService(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  id                 : number,
                  error : amGeneralError.am_general.A_Error)
                        : amNonrenderingServicesCronService.am_nonrenderingservices.AS_CronService
    {
        return this._owner.createDefaultService_CronService(aServiceContainer, aServiceLocator, aLogService,id,error);
    }

    //--------------------
    public creatDefaultService_SettingsSync(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  id                 : number,
                  error : amGeneralError.am_general.A_Error)
                                : amNonrenderingServicesSettingsSync.am_nonrenderingservices.A_SettingsSyncService
    {
      return this._owner.creatDefaultService_SettingsSync(aServiceContainer, aServiceLocator, aLogService,id,error);
    }

    //--------------------
    public creatDefaultService_SettingsSyncInterface(
      aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
      aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
      aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
      id                 : number,
      error : amGeneralError.am_general.A_Error)
                    : amRenderingServicesSyncSettingsInterface.am_renderingservices.A_SettingsSyncInterfaceService
    {
      return this._owner.creatDefaultService_SettingsSyncInterface(aServiceContainer, aServiceLocator, aLogService,id,error);
    }

//--------------------
    public createDefaultService_TestService(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  id                 : number,
                  error : amGeneralError.am_general.A_Error)
                        : amRenderingServicesTestService.am_renderingservices.AS_TestService
    {
        return this._owner.createDefaultService_TestService(aServiceContainer, aServiceLocator, aLogService,id,error);
    }

    //--------------------
    public createDefaultService_TestService2(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  id                 : number,
                  error : amGeneralError.am_general.A_Error)
                        : amRenderingServicesTestService2.am_renderingservices.AS_TestService2
    {
        return this._owner.createDefaultService_TestService2(aServiceContainer, aServiceLocator, aLogService,id,error);
    }

    //--------------------
    public createDefaultService_TestService3(
                  aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                  aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
                  aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                  id                 : number,
                  error : amGeneralError.am_general.A_Error)
                        : amRenderingServicesTestService3.am_renderingservices.AS_TestService3
    {
        return this._owner.createDefaultService_TestService3(aServiceContainer, aServiceLocator, aLogService,id,error);
    }


    //---------------------------------------------
    public createDefaultService_FileSettingsUpdate(
          aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
          aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
          aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
          id                 : number,
          error : amGeneralError.am_general.A_Error)
                      : amNonrenderingServicesFileSettingsUpdate.am_nonrenderingservices.AS_FileSettingsUpdate
    {
        return this._owner.createDefaultService_FileSettingsUpdate(aServiceContainer, aServiceLocator, aLogService,id,error);
    }

    //---------------------------------------------
    public createDefaultService_RebootService(
          aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
          aServiceLocator    : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator,
          aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
          id                 : number,
          error : amGeneralError.am_general.A_Error)
                      : amNonrenderingServicesRebootService.am_nonrenderingservices.AS_RebootService
    {
        return this._owner.createDefaultService_RebootService(aServiceContainer, aServiceLocator, aLogService,id,error);
    }
  }
} 