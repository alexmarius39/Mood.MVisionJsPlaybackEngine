import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");
import amRenderingControllerConfig = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/AE_RenderingControllerConfig");

import amIRenderingController = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/I_RenderingController");
import amIRenderingControllerConfig  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/I_RenderingController_Config");
import amIRenderingControllerControl = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/I_RenderingController_Control");
import amGeneralConfig               = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams    = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");

import amRenderingServicesRenderingZone        = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/A_RenderingZone");
import amRenderingServicesRenderingZonePool    = require("../../../../../app/ts/abstract/am_renderingservices/a_renderingzone/AE_RenderingZonePool");
import amRenderingServicesImageRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/A_ImageRenderer");
import amRenderingServicesImageRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_imagerenderer/AE_ImageRendererPool");
import amRenderingServicesVideoRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/A_VideoRenderer");
import amRenderingServicesVideoRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_videorenderer/AE_VideoRendererPool");
import amRenderingServicesVideoStreamRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/A_VideoStreamRenderer");
import amRenderingServicesVideoStreamRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_videostreamrenderer/AE_VideoStreamRendererPool");
import amRenderingServicesHtmlRenderer         = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/A_HtmlRenderer");
import amRenderingServicesHtmlRendererPool     = require("../../../../../app/ts/abstract/am_renderingservices/a_htmlrenderer/AE_HtmlRendererPool");
import amRenderingServicesHtmlTemplateRenderer = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/A_HtmlTemplateRenderer");
import amRenderingServicesHtmlTemplateRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_htmltemplaterenderer/AE_HtmlTemplateRendererPool");
import amRenderingServicesFlashRenderer        = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/A_FlashRenderer");
import amRenderingServicesFlashRendererPool    = require("../../../../../app/ts/abstract/am_renderingservices/a_flashrenderer/AE_FlashRendererPool");
import amRenderingServicesScreenSaverRenderer  = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/A_ScreenSaverRenderer");
import amRenderingServicesScreenSaverRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_screensaverrenderer/AE_ScreenSaverRendererPool");
import amRenderingServicesFillRectRenderer     = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/A_FillRectRenderer");
import amRenderingServicesFillRectRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_fillrectrenderer/AE_FillRectRendererPool");
import amRenderingServicesTvHdmiPassThroughSrv = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/A_TvHdmiPassThroughSrv");
import amRenderingServicesTvHdmiPassThroughSrvPool = require("../../../../../app/ts/abstract/am_renderingservices/a_tvhdmipassthroughsrv/AE_TvHdmiPassThroughSrvPool");
import amRenderingServicesBackgroundRenderer   = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/A_BackgroundRenderer");
import amRenderingServicesBackgroundRendererPool = require("../../../../../app/ts/abstract/am_renderingservices/a_backgroundrenderer/AE_BackgroundRendererPool");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import amRenderingServicesHtmlZone     = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZone");
import amRenderingServicesHtmlZonePool = require("../../../../../app/ts/abstract/am_renderingservices/ae_htmlzone/AE_HtmlZonePool");

import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig");

import rmGeneral    = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");

import rmIImplRenderingController = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/IImpl_RenderingController_R");
import rmIImplRenderingControllerConfig = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/IImpl_RenderingController_Config");
import rmIImplRenderingControllerControl = require("../../../../../app/ts/reusable/rm_coreservices/r_renderingcontroller/IImpl_RenderingController_Control");

export module rm_coreservices
{
  export class R_RenderingController extends  rmGeneral.rm_general.R_Service 
                                 implements amCoreServicesRenderingController.am_coreservices.A_RenderingController
  {
    //---------- properties
    _aRenderingZonePool  : amRenderingServicesRenderingZonePool.am_renderingservices.AE_RenderingZonePool;
    _aImageRendererPool  : amRenderingServicesImageRendererPool.am_renderingservices.AE_ImageRendererPool;
    _aVideoRendererPool  : amRenderingServicesVideoRendererPool.am_renderingservices.AE_VideoRendererPool;
    _aVideoStreamRendererPool  : amRenderingServicesVideoStreamRendererPool.am_renderingservices.AE_VideoStreamRendererPool;
    _aHtmlRendererPool  : amRenderingServicesHtmlRendererPool.am_renderingservices.AE_HtmlRendererPool;
    _aHtmlTemplateRendererPool  : amRenderingServicesHtmlTemplateRendererPool.am_renderingservices.AE_HtmlTemplateRendererPool;
    _aFlashRendererPool  : amRenderingServicesFlashRendererPool.am_renderingservices.AE_FlashRendererPool;
    _aScreenSaverRendererPool  : amRenderingServicesScreenSaverRendererPool.am_renderingservices.AE_ScreenSaverRendererPool;
    _aFillRectRendererPool  : amRenderingServicesFillRectRendererPool.am_renderingservices.AE_FillRectRendererPool;
    _aTvHdmiPassThroughSrvPool  : amRenderingServicesTvHdmiPassThroughSrvPool.am_renderingservices.AE_TvHdmiPassThroughSrvPool;
    _aBackgroundRendererPool  : amRenderingServicesBackgroundRendererPool.am_renderingservices.AE_BackgroundRendererPool;
    
    _aHtmlZonePool  : amRenderingServicesHtmlZonePool.am_renderingservices.AE_HtmlZonePool;
    _aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;
    _renderingControllerConfig: amRenderingControllerConfig.am_coreservices.AE_RenderingControllerConfig;
    
    //---------- interfaces
    _iRenderingController        : amIRenderingController.am_coreservices.I_RenderingController ;
    _iRenderingControllerConfig  : amIRenderingControllerConfig.am_coreservices.I_RenderingController_Config ;
    _iRenderingControllerControl : amIRenderingControllerControl.am_coreservices.I_RenderingController_Control ;

    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iRenderingController = new rmIImplRenderingController.rm_coreservices.IImpl_RenderingController_R(this) ;
      this._iRenderingControllerConfig = new rmIImplRenderingControllerConfig.rm_coreservices.IImpl_RenderingController_Config(this) ;
      this._iRenderingControllerControl = new rmIImplRenderingControllerControl.rm_coreservices.IImpl_RenderingController_Control(this) ;

      this._aLogService = aLogService;

      this._aRenderingZonePool         = null;
      this._aImageRendererPool         = null;
      this._aVideoRendererPool         = null;
      this._aVideoStreamRendererPool   = null;
      this._aHtmlRendererPool          = null;
      this._aHtmlTemplateRendererPool  = null;
      this._aFlashRendererPool         = null;
      this._aScreenSaverRendererPool   = null;
      this._aFillRectRendererPool      = null;
      this._aTvHdmiPassThroughSrvPool  = null;
      this._aBackgroundRendererPool    = null;
      
      this._aHtmlZonePool  = null;
      this._aActivityLogService = null;      
      this._renderingControllerConfig = null;
  
    }

    //------------------------------
    public injectDependencies( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                               error : amGeneralError.am_general.A_Error) : number     
 
    {
      this._aServiceLocator    = aServiceLocator; //;<amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator>this._aServiceContainer._iServiceManager.getServiceByAbstractName("A_ServiceLocator", null, error);

      this._aRenderingZonePool  = this._aServiceLocator._iEntityCreation.createDefaultRenderingZonePool(error);
      this._aRenderingZonePool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aImageRendererPool  = this._aServiceLocator._iEntityCreation.createDefaultImageRendererPool(error);
      this._aImageRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aVideoRendererPool  = this._aServiceLocator._iEntityCreation.createDefaultVideoRendererPool(error);
      this._aVideoRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aVideoStreamRendererPool  = this._aServiceLocator._iEntityCreation.createDefaultVideoStreamRendererPool(error);
      this._aVideoStreamRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aHtmlRendererPool  = this._aServiceLocator._iEntityCreation.createDefaultHtmlRendererPool(error);
      this._aHtmlRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aHtmlTemplateRendererPool  = this._aServiceLocator._iEntityCreation.createDefaultHtmlTemplateRendererPool(error);
      this._aHtmlTemplateRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aFlashRendererPool  = this._aServiceLocator._iEntityCreation.createDefaultFlashRendererPool(error);
      this._aFlashRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aScreenSaverRendererPool  = this._aServiceLocator._iEntityCreation.createDefaultScreenSaverRendererPool(error);
      this._aScreenSaverRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aFillRectRendererPool  = this._aServiceLocator._iEntityCreation.createDefaultFillRectRendererPool(error);
      this._aFillRectRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aTvHdmiPassThroughSrvPool = this._aServiceLocator._iEntityCreation.createDefaultTvHdmiPassThroughSrvPool(error);
      this._aTvHdmiPassThroughSrvPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aBackgroundRendererPool = this._aServiceLocator._iEntityCreation.createDefaultBackgroundRendererPool(error);
      this._aBackgroundRendererPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      
      this._aHtmlZonePool = this._aServiceLocator._iEntityCreation.createDefaultHtmlZonePool(error);
      this._aHtmlZonePool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      return 0;
    }


    //---------------------
    //  initialization
    //---------------------

    //-------------------------------
    public init( aConfig  : amGeneralConfig.am_general.AE_Config,  error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {          
      this._renderingControllerConfig = <amRenderingControllerConfig.am_coreservices.AE_RenderingControllerConfig>aConfig;
     
      this._aHtmlZonePool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfHtmlZones(), error);

      this._aRenderingZonePool.setScreenSaverConfig(this._renderingControllerConfig.getScreenSaverConfig());
      this._aRenderingZonePool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfRenderingZones(), error);

      this._aImageRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfImageRenderers(), error);
      this._aVideoRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfVideoRenderers(), error);
      this._aVideoStreamRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfVideoStreamRenderers(), error);
      this._aHtmlRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfHtmlRenderers(), error);
      this._aHtmlTemplateRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfHtmlTemplateRenderers(), error);
      this._aFillRectRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfFillRectRenderers(), error);
      this._aFlashRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfFlashRenderers(), error);
      this._aTvHdmiPassThroughSrvPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfTvHdmiPassThroughSrv(), error);

      this._aScreenSaverRendererPool.setScreenSaverConfig(this._renderingControllerConfig.getScreenSaverConfig());
      this._aScreenSaverRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfScreenSaverRenderers(), error);
      
      this._aBackgroundRendererPool.initPool(this._renderingControllerConfig.getInitialPoolNb_OfBackgroundRenderers(), error);
      if (callback != null)
      {
        callback(context);
        return ;
      }
      return ;
    }

    //--------------------------------------
    // set / get activity log service
    //---------------------------------------

    public setActivityLogService( aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      this._aActivityLogService = aActivityLogService;
    }

    //-----------------------------
    public getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._aActivityLogService;
    }

    //-----------------------
    // Commands 
    //-----------------------
     
    //---------------
    public createZone(zoneId : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var newRenderingZone = this._aRenderingZonePool.getFreeRenderingZone();
      if (newRenderingZone == null )
        return;
      newRenderingZone._iRenderingZoneConfig.setActivityLogService(this._aActivityLogService);
      newRenderingZone._iRenderingZoneConfig.setZoneId(zoneId);
    }  
    
    //---------------
    public destroyZone( zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop,
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var foundRenderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId);
      var owner = this;
      var callbackDestroyZone = function callbackDestroyZone()
      {
        owner._aRenderingZonePool.releaseRenderingZone(foundRenderingZone);
        if (callback != null)
          return callback();
        return;
      }
      foundRenderingZone._iRenderingZone.destroyZone( stopParams, error, context, callbackDestroyZone);
    }

    //---------------
    public stopZone( zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop,
                     error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var foundRenderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId);
      foundRenderingZone._iRenderingZone.stopZone( stopParams, error, context, callback);
    }
    
    //---------------
    public prepareNextMediaItem(zoneId : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var renderingZone:amRenderingServicesRenderingZone.am_renderingservices.A_RenderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId); 
      if (renderingZone == null)
      {
         alert("No Free zones. maximum number of zones reached");
         return;
      }
       renderingZone._iRenderingServiceControl.prepareNextMediaItem(prepareParams, error, context, callback);
      /*
      if (prepareParams.getRenderParams().getParamIdentification().getMediaType() == 1 ) //MediaType_Image
      {
        var newImageRenderer = this._aImageRendererPool.getFreeImageRenderer();
        renderingZone.setImageRenderer(renderingZone.getIdx_OfNextRenderer(), newImageRenderer);
      }*/
      return ;
    }
    
    //---------------
    public playNextMediaItem(zoneId : number, runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var renderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId); 
      //if (renderingZone == null)
      //  set error 
      //  return 1 
      renderingZone._iRenderingServiceControl.playNextMediaItem(runParams, error, context, callback);
    }
    
    //------------------
    public prepareAndPlayNextMediaItem( zoneId : number, 
                                        prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                        stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                        runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
       var renderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId); 
       //if (renderingZone == null)
       //  set error 
       //  return 1 
       renderingZone._iRenderingServiceControl.prepareAndPlayNextMediaItem(prepareParams, stopParams, runParams, error, context, callback);
    }

    //---------------
    public stopCrtMediaItem(zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var renderingZone = this._aRenderingZonePool.getRenderingZoneByZoneId(zoneId); 
      //if (renderingZone == null)
      //  set error 
      //  return 1 
      renderingZone._iRenderingServiceControl.stopCrtMediaItem(stopParams, error, context, callback);
    }
    

    //====================================================
    //  shutdown logic
    //=====================================================

    //-------------------------------------------------                  
    public shutdown_one_zone( crtRenderingZone: amRenderingServicesRenderingZone.am_renderingservices.A_RenderingZone,
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var stopParams: amRunParams.am_renderingservices.AE_ControlParams_Run =  null;
      var callbackStopZone = function callbackOneShutdownZone(ctx1: amGeneralContext.am_general.A_Context)
      {
        var callbackStopZone = function callbackOneShutdownZone(ctx1: amGeneralContext.am_general.A_Context)
        {
          context.setBoolResult(true);
          context.setError(error);
          if (callback != null)
            callback(context);  
          return ;           
        }  
        //============================================
        crtRenderingZone._iRenderingZone.destroyZone(stopParams, error, context, callbackStopZone);
      }
      //============================================
      crtRenderingZone._iRenderingZone.stopZone(stopParams, error, context, callbackStopZone);
    }


    //-------------------------------------------------                  
    public shutdown_all_zones(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      //-----------------------
      var self = this;
      var atStartup = false;
      //-------------------------
      var aRenderingZonesList: Array<amRenderingServicesRenderingZone.am_renderingservices.A_RenderingZone> = self._aRenderingZonePool.getRenderingZoneList();
      var nbRenderingZones:number = aRenderingZonesList.length;
      var startRenderingZoneIdx = 0;
      //---
      var callbackOneShutdownZone = function callbackOneShutdownZone(crtRenderingZoneIdx: number, ctx1: amGeneralContext.am_general.A_Context)
      {
        //-------- succesfully interrupt all service in constraints
        if (crtRenderingZoneIdx + 1 > nbRenderingZones)
        {
          context.setBoolResult(true);
          //console.log( "Successfully scheduled all cron schedule"); 
          context.setError(error);
          //document.getElementById("renderer.message").innerHTML += "<p>success: " + crtFileIdx  + "</p>";
          if (callback != null)
            callback(context);  
          return ; 
        }
        //---------------------------
        var crtRenderingZone:amRenderingServicesRenderingZone.am_renderingservices.A_RenderingZone = aRenderingZonesList[crtRenderingZoneIdx];
        
        var callbackShutdownZone = function callbackShutdownZone(ctx2: amGeneralContext.am_general.A_Context)
        {
          var bShutdownWell = ctx2.getBoolResult();
          if (! bShutdownWell)//ctx2.isError())
          {
            context.setError(error);
            context.setObjectResult(null);
            //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
            if (callback != null)
              callback(context);  
            return;  
          }  
          //-------------- 
          return callbackOneShutdownZone(++crtRenderingZoneIdx, ctx2);
        }
        //=======================================            
        return self.shutdown_one_zone(crtRenderingZone, error, ctx1, callbackShutdownZone) ; 

      }

      callbackOneShutdownZone(startRenderingZoneIdx, context);
    }


    //-----------------------------
    public shutdown(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var self = this;
      var callbackShutdownAllZones = function callbackShutdownAllZones(crtRenderingZoneIdx: number, ctx1: amGeneralContext.am_general.A_Context)
      {
        //------------------ end 
        if (callback != null)
        {
          //context.setError(error);
          //context.setBoolResult(true);
          return callback(context);  
        }
      }
      //===============================
      self.shutdown_all_zones(error,  context, callbackShutdownAllZones);
    }
    
    
  }
} 