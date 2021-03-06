import amCoreServicesPlaylistController  = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amIPlaylistController = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController");
import amIPlaylistControllerConfig   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Config");
import amIPlaylistControllerRun      = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Run");
import amIPlaylistControllerCommands = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Commands");
import amIPlaylistControllerMonitoring  = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Monitoring");
import amIPlaylistControllerPlaylistMoodv5   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Playlist_Mood_v5");
import amIPlaylistControllerPlaylistCustomv1 = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/I_PlaylistController_Playlist_Custom_v1");

import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amGeneralService              = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amRenderingControllerService  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");
import amGeneralConfig               = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");
import amGeneralScreenProperties     = require("../../../../../app/ts/abstract/am_general/a_screenproperties/A_ScreenProperties");
import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralDateTime             = require("../../../abstract/am_general/a_datetime/A_DateTime");
import amGeneralActivityLogServiceSettings = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogServiceSettings");

import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amConfigurationServicesServiceLocator   = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import amPlaybackHardwareSettings  = require("../../../../../app/ts/abstract/am_playback/a_hardwaresettings/A_HardwareSettings"); 
import amPlaybackOpeningHours      = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_OpeningHours"); 
import amPlaybackDayOpeningHours   = require("../../../../../app/ts/abstract/am_playback/a_openinghours/A_DayOpeningHours"); 
import amPlaybackScreenSaverConfig = require("../../../../../app/ts/abstract/am_playback/ae_screensaverconfig/AE_ScreenSaverConfig"); 

//import amPlaylistControllerConfig     = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/AE_PlaylistControllerConfig");
import amRenderingControllerConfig    = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/AE_RenderingControllerConfig");

import rmGeneral    = require("../../../../../app/ts/reusable/rm_general/r_service/R_Service");
//import rmGeneralScreenProperties  = require("../../../../../app/ts/reusable/rm_general/r_screenproperties/R_ScreenProperties");

import rmIImplPlaylistController           = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_R");
import rmIImplPlaylistControllerConfig     = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_Config");
import rmIImplPlaylistControllerRun        = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_Run");
import rmIImplPlaylistControllerCommands   = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_Commands");
import rmIImplPlaylistControllerMonitoring = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_Monitoring");
import rmIImplPlaylistControllerPlaylistMoodv5   = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_Playlist_Mood_v5");
import rmIImplPlaylistControllerPlaylistCustomv1 = require("../../../../../app/ts/reusable/rm_coreservices/r_playlistcontroller/IImpl_PlaylistController_Playlist_Custom_v1");

import amGeneralError                          = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amPrepareParams = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Prepare");
import amRunParams     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Run");
import amStopParams    = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_Stop");

import amPrepareParamsPool = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_PreparePool");
import amRunParamsPool     = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_RunPool");
import amStopParamsPool    = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_StopPool");
import amStatusParamsPool  = require("../../../../../app/ts/abstract/am_renderingservices/ae_controlparams/AE_ControlParams_StatusPool");

import amPlaylistControllerConfig  = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/AE_PlaylistControllerConfig");

//import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
//import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amPlaylist      = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_MainPlaylist");

import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amGeneralEventType = require("../../../../../app/ts/abstract/am_general/ae_event/AE_EventType");
import amPlaylistItemEventType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType");

import rmPlaylistItem  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem");
import rmPlaylist      = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_MainPlaylist");

import amRenderParametersIdentification = require("../../../../../app/ts/abstract/am_renderingservices/ae_renderparams/AE_RenderParams_Identification");

import amGeneralActivityLogMessageTypes = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");

export module rm_coreservices
{
  export class R_PlaylistController extends  rmGeneral.rm_general.R_Service 
                                 implements amCoreServicesPlaylistController.am_coreservices.A_PlaylistController
  {
    //----------- properties
    _aPlaylist          : amPlaylist.am_coreservices.AE_MainPlaylist ;

    _nextZoneId         : number;
    _aPrepareParamPool  : amPrepareParamsPool.am_renderingservices.AE_ControlParams_PreparePool;
    _aRunParamPool      : amRunParamsPool.am_renderingservices.AE_ControlParams_RunPool;
    _aStopParamPool     : amStopParamsPool.am_renderingservices.AE_ControlParams_StopPool;
    _aStatusParamPool   : amStatusParamsPool.am_renderingservices.AE_ControlParams_StatusPool;

    _playlistControllerConfig: amPlaylistControllerConfig.am_coreservices.AE_PlaylistControllerConfig;

    //---------- interfaces
    _iPlaylistController           : amIPlaylistController.am_coreservices.I_PlaylistController ;
    _iPlaylistControllerConfig     : amIPlaylistControllerConfig.am_coreservices.I_PlaylistController_Config ;
    _iPlaylistControllerRun        : amIPlaylistControllerRun.am_coreservices.I_PlaylistController_Run ;
    _iPlaylistControllerCommands   : amIPlaylistControllerCommands.am_coreservices.I_PlaylistController_Commands ;
    _iPlaylistControllerMonitoring : amIPlaylistControllerMonitoring.am_coreservices.I_PlaylistController_Monitoring ;
    _iPlaylistControllerPlaylistMoodv5   : amIPlaylistControllerPlaylistMoodv5.am_coreservices.I_PlaylistController_Playlist_Mood_v5 ;
    _iPlaylistControllerPlaylistCustomv1 : amIPlaylistControllerPlaylistCustomv1.am_coreservices.I_PlaylistController_Playlist_Custom_v1;

    //----------- composants 
    _aLogService : amTransversalServicesLogService.am_transversalservices.A_LogService; 

    //------------ references
    _aRenderingController : amRenderingControllerService.am_coreservices.A_RenderingController;
    _aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;

    _evtQueue     : amGeneralQueue.am_general.AE_Queue;
    _evtMainQueue : amGeneralQueue.am_general.AE_Queue;

    _aScreenProperties     : amGeneralScreenProperties.am_general.A_ScreenProperties;
    _aPlaybackGlobalConfig : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);
      this._aPlaylist                   = null;

      this._iPlaylistController           = new rmIImplPlaylistController.rm_coreservices.IImpl_PlaylistController_R(this) ;
      this._iPlaylistControllerConfig     = new rmIImplPlaylistControllerConfig.rm_coreservices.IImpl_PlaylistController_Config(this) ;
      this._iPlaylistControllerRun        = new rmIImplPlaylistControllerRun.rm_coreservices.IImpl_PlaylistController_Run(this) ;
      this._iPlaylistControllerCommands   = new rmIImplPlaylistControllerCommands.rm_coreservices.IImpl_PlaylistController_Commands(this) ;
      this._iPlaylistControllerMonitoring = new rmIImplPlaylistControllerMonitoring.rm_coreservices.IImpl_PlaylistController_Monitoring(this) ;

      this._iPlaylistControllerPlaylistMoodv5   = new rmIImplPlaylistControllerPlaylistMoodv5.rm_coreservices.IImpl_PlaylistController_Playlist_Mood_v5(this) ;
      this._iPlaylistControllerPlaylistCustomv1 = new rmIImplPlaylistControllerPlaylistCustomv1.rm_coreservices.IImpl_PlaylistController_Playlist_Custom_v1(this) ;

      this._playlistControllerConfig = null;

      this._aLogService = aLogService;

      this._nextZoneId         = 0;
      this._aPrepareParamPool  = null;
      this._aRunParamPool      = null;
      this._aStopParamPool     = null;
      this._aStatusParamPool   = null;
      this._evtQueue           = null; 
      this._evtMainQueue       = null; 
      this._aActivityLogService   = null;

      this._aScreenProperties     = null;
      this._aPlaybackGlobalConfig = null;
    }

    //------------------------------
    public injectDependencies( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                               error : amGeneralError.am_general.A_Error) : number     
 
    {
      this._aServiceLocator    = aServiceLocator; //;<amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator>this._aServiceContainer._iServiceManager.getServiceByAbstractName("A_ServiceLocator", null, error);

      this._nextZoneId  = 0;
      this._aPrepareParamPool  = this._aServiceLocator._iEntityCreation.createDefaultControlPrepareParamsPool(error);
      this._aPrepareParamPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aRunParamPool      = this._aServiceLocator._iEntityCreation.createDefaultControlRunParamsPool(error);
      this._aRunParamPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aStopParamPool     = this._aServiceLocator._iEntityCreation.createDefaultControlStopParamsPool(error);
      this._aStopParamPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);

      this._aStatusParamPool   = this._aServiceLocator._iEntityCreation.createDefaultControlStatusParamsPool(error);
      this._aStatusParamPool.injectDependencies(aServiceContainer, aServiceLocator, aLogService, error);
      
      this._evtQueue     = this._aServiceLocator._iEntityCreation.createDefaultQueue(error);
      this._evtMainQueue = this._aServiceLocator._iEntityCreation.createDefaultQueue(error);

      this._aScreenProperties  = this._aServiceLocator._iEntityCreation.createDefaultScreenProperties(error);
      return 0;

    }

    //--------------------------------------
    // set / get playlist controller config
    //---------------------------------------

    //----------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
    }

    //-----------------------------
    public getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._aPlaybackGlobalConfig;
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

    //----------------------------
    // set / get screen properties
    //----------------------------

    //----------------------
    public setScreenProperties( aScreenProperties: amGeneralScreenProperties.am_general.A_ScreenProperties)
    {
      this._aScreenProperties = aScreenProperties;
    }

    //----------------------
    public getScreenProperties() : amGeneralScreenProperties.am_general.A_ScreenProperties
    {
      return this._aScreenProperties;
    }

    //-----------------------
    //   Config
    //-----------------------
    //-----------------------------------------

    //-----------------------------------------
    public setTargetService(targetService: amGeneralService.am_general.A_Service)
    {
      this._aRenderingController = <amRenderingControllerService.am_coreservices.A_RenderingController>targetService;
    }

    //-----------------------------------------
    public setRenderingControllerService(targetService: amGeneralService.am_general.A_Service)
    {
      this._aRenderingController = <amRenderingControllerService.am_coreservices.A_RenderingController>targetService;
    }

    //---------------------
    //  initialization
    //---------------------

    //-------------------------------
    public init( aConfig  : amGeneralConfig.am_general.AE_Config,  error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {          
      this._playlistControllerConfig = <amPlaylistControllerConfig.am_coreservices.AE_PlaylistControllerConfig>aConfig;
      
      this._aPrepareParamPool.initPool(this._playlistControllerConfig.getInitialPoolNb_OfPrepareParams(), error);
      this._aRunParamPool.initPool(this._playlistControllerConfig.getInitialPoolNb_OfRunParams(), error);
      this._aStopParamPool.initPool(this._playlistControllerConfig.getInitialPoolNb_OfStopParams(), error);
      this._aStatusParamPool.initPool(this._playlistControllerConfig.getInitialPoolNb_OfStatusParams(), error);
      if (callback != null)
      {
        callback(context);
        return ;
      }
      return ;
    }

    //-----------------------
    // Commands 
    //-----------------------

    //------------------
    public cmd_getNewZoneId() : number
    {
      return ++this._nextZoneId;
    }

    //------------------
    public cmd_getNewPreparedParam(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : amPrepareParams.am_renderingservices.AE_ControlParams_Prepare
    {
      return this._aPrepareParamPool.getFreePrepareParams(); //to do add error management
    }

    //------------------
    public cmd_freeNewPreparedParam(prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void 
    {
      this._aPrepareParamPool.releasePrepareParams(prepareParams);
    }

    //---------------
    public cmd_createZone(zoneId : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._aRenderingController._iRenderingControllerControl.createZone(zoneId, prepareParams, error, context, callback);
    }  
    
    //---------------
    public cmd_destroyZone( zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop,
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._aRenderingController._iRenderingControllerControl.destroyZone(zoneId, stopParams, error, context, callback);
    }
    
    //---------------
    public cmd_stopZone(zoneId : number, stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._aRenderingController._iRenderingControllerControl.stopZone(zoneId, stopParams, error, context, callback);
      //return this._aRenderingController._iRenderingControllerControl.stopCrtMediaItem(zoneId, stopParams, error, context, callback);
    }

    //---------------
    public cmd_prepareNextMediaItem(zoneId : number, prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._aRenderingController._iRenderingControllerControl.prepareNextMediaItem(zoneId, prepareParams, error, context, callback); 
    }
    
    //---------------
    public cmd_playNextMediaItem(zoneId : number, runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._aRenderingController._iRenderingControllerControl.playNextMediaItem(zoneId, runParams, error, context, callback);       
    }
    
    //-----------------
    public cmd_prepareAndPlayNextMediaItem( zoneId : number, 
                                            prepareParams: amPrepareParams.am_renderingservices.AE_ControlParams_Prepare, 
                                            stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop, 
                                            runParams: amRunParams.am_renderingservices.AE_ControlParams_Run, 
                                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      return this._aRenderingController._iRenderingControllerControl.prepareAndPlayNextMediaItem(zoneId, prepareParams, stopParams, runParams, error, context, callback);       
    }

    //--------------- 
    public cmd_changeDesign( iOldDesign : number, iNewDesign: number, designs: any, 
                             aFileStorage: string, aUrlStorage : string,  
                             error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      var callbackStopDesign = function callbackChangeDesign()
      {
        var callbackDestroyDesign = function callbackDestroyDesign()
        {
          //----
          var callbackStartDesign = function callbackStartDesign()
          {
             if (error.isError())
             {
               context.setError(error);
               if (callback != null)
                 callback(context);
               return ;  
             }
             if (callback != null)
               callback(context);
             return ;  
          } 
          owner.cmd_startDesign(iNewDesign, designs, aFileStorage, aUrlStorage,  error, context, callbackStartDesign); 
          //callbackStartDesign();
        }  
        owner.cmd_destroyDesign(iOldDesign, designs, aFileStorage, aUrlStorage,  error, context, callbackDestroyDesign);
      }  
      owner.cmd_stopDesign(iOldDesign, designs, aFileStorage, aUrlStorage,  error, context, callbackStopDesign);
      //callbackStopDesign();
      return ;    
    }

    //--------------- 
    public cmd_stopDesign( iOldDesign : number, designs: any, 
                           aFileStorage: string, aUrlStorage : string,  
                           error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      if (iOldDesign == -1)
      {
        if (callback != null)
          callback(context);     
        return ; 
      }
      var nbDesignZones:number = designs[iOldDesign].zones.length;
      var crtZoneIdx = 0;
      var owner = this;
      //---
      var stopZone = function stopZone(): void
      {
        //-------- 
        if (crtZoneIdx + 1 > nbDesignZones)
        {
          context.setResult("Successfully start all zones");
          console.log( "Successfully start all zones"); 
          context.setError(error);
          if (callback != null)
             callback(context);     
          return ; 
        }
        var stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop = null;
        return owner.cmd_stopZone(1+crtZoneIdx++, stopParams, error, context,  stopZone);
      }  
      return stopZone();
    }


    //--------------- 
    public cmd_destroyDesign( iOldDesign : number, designs: any, 
                              aFileStorage: string, aUrlStorage : string,  
                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      if (iOldDesign == -1)
      {
        if (callback != null)
          callback(context);     
        return ; 
      }
      var nbDesignZones:number = designs[iOldDesign].zones.length;
      var crtZoneIdx = 0;
      var owner = this;
      //---
      var destroyZone = function destroyZone(): void
      {
        //-------- 
        if (crtZoneIdx + 1 > nbDesignZones)
        {
          context.setResult("Successfully start all zones");
          console.log( "Successfully start all zones"); 
          context.setError(error);
          if (callback != null)
             callback(context);     
          return ; 
        }
        var stopParams: amStopParams.am_renderingservices.AE_ControlParams_Stop = null;
        return owner.cmd_destroyZone(1+crtZoneIdx++, stopParams, error, context, destroyZone) ;
      }  
      return destroyZone();
    }


    //----------------------------------- 
    public cmd_startDesign( iNewDesign: number, designs: any, 
                            aFileStorage: string, aUrlStorage : string,  
                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
    
      var nbDesignZones:number = designs[iNewDesign].zones.length;
      var crtZoneIdx = 0;
      var owner = this;
      //---
      var startZone = function callbackStartZone():void// pINewDesign: number, pCrtZoneIdx: number, pNbDesignZones: number, designs : any,
                                                  //aFileStorage: string, aUrlStorage : string,  
                                                  //err: amGeneralError.am_general.A_Error, ctx: amGeneralContext.am_general.A_Context, callbck): void
      {
        //-------- 
        if (crtZoneIdx + 1 > nbDesignZones)
        {
          context.setResult("Successfully start all zones");
          console.log( "Successfully start all zones"); 
          context.setError(error);
          if (callback != null)
             callback(context);     
          return ; 
        }
        //return startZone(++pCrtZoneIdx, pNbDesignZones, designs, error, ctx, callbck);
        return owner.prepareAndPlayMediaFile( iNewDesign, crtZoneIdx++, 0, designs,
                                        aFileStorage, aUrlStorage,  
                                        error, context, startZone) ;
      }  
      return startZone();//iNewDesign, crtZoneIdx, nbDesignZones, designs, aFileStorage, aUrlStorage,  error, context, startZone);
    }



    //---------------------------------------------------
    public prepareAndPlayMediaFile( iDesign: number, iZone: number, iMediaInZone : number, designs,
                                    aFileStorage: string, aUrlStorage : string,  
                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var owner = this;
      var targetZoneId  = iZone + 1;

      var prepareParams = owner._iPlaylistControllerCommands.cmd_getNewPreparedParam(error,null,null);
      //var runParams     = aPlaylistController._iPlaylistControllerCommands.cmd_getNewRunParam(error,null,null);
  
      prepareParams.getRenderParams().getParamIdentification().setMediaType(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaType);
      //----
      var mediaStorage = designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaStorage;
      if (mediaStorage == "defaultStorage")
        mediaStorage = aUrlStorage;
    
      prepareParams.getRenderParams().getParamFileInfo().setUrlStorage(mediaStorage);//designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaStorage);
      prepareParams.getRenderParams().getParamFileInfo().setUrlPath(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaPath);
      prepareParams.getRenderParams().getParamFileInfo().setUrlName(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].mediaFile);//"fluture01.jpg"); //("WuXi03.png");
      //---
      var left   : number ;
      var top    : number ;
      var width  : number ;
      var height : number ;
      var zOrder : number ;
      //var imgDisplayType : number;
      try{
        left   = parseInt(designs[iDesign].zones[iZone].zoneLeft);
        top    = parseInt(designs[iDesign].zones[iZone].zoneTop);
        width  = parseInt(designs[iDesign].zones[iZone].zoneWidth);
        height = parseInt(designs[iDesign].zones[iZone].zoneHeight);
        zOrder = parseInt(designs[iDesign].zones[iZone].zoneZOrder);
        //imgDisplayType = parseInt(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].imageDisplayType);
      }catch(e){}
  
      prepareParams.getRenderParams().getParamContainerPosSize().setAllPosAndSizes( left, //designs[iDesign].zones[iZone].zoneLeft,
                                                                                top, //designs[iDesign].zones[iZone].zoneTop,
                                                                                left+width, //designs[iDesign].zones[iZone].zoneLeft+designs[iDesign].zones[iZone].zoneWidth,
                                                                                top+height, //designs[iDesign].zones[iZone].zoneTop+designs[iDesign].zones[iZone].zoneHeight,
                                                                                0,
                                                                                0,
                                                                                width,   //designs[iDesign].zones[iZone].zoneWidth,
                                                                                height);  //designs[iDesign].zones[iZone].zoneHeight); //left,top,right,bottom fel,top,right,bottom
      prepareParams.getRenderParams().getParamContainerPosSize().setContainerZOrder(zOrder);
      //---
      prepareParams.getRenderParams().getParamImage().setDisplayTypeAsString(designs[iDesign].zones[iZone].mediaitems[iMediaInZone].imageDisplayType);
      //prepareParams.getRenderParams().getParamBackground().setR(255);
      //prepareParams.getRenderParams().getParamBackground().setG(0);
      //prepareParams.getRenderParams().getParamBackground().setB(0);
      //prepareParams.getRenderParams().getParamBackground().setAlpha(1.0);
      prepareParams.getRenderParams().getParamFillRect().setR(255);
      prepareParams.getRenderParams().getParamFillRect().setG(0);
      prepareParams.getRenderParams().getParamFillRect().setB(0);
      prepareParams.getRenderParams().getParamFillRect().setAlpha(1.0);  

      //--
      var callbackPrepare = function callbackPrepare()
      {
        var callbackRun = function callbackRun()
        {
          prepareParams.setIsFree(true);
          context.setError(error);
          if (callback != null)
             callback(context);     
          return ; 
        }  
        owner._iPlaylistControllerCommands.cmd_playNextMediaItem(targetZoneId , prepareParams, error, context, callbackRun);
        return ;
      }
      owner._iPlaylistControllerCommands.cmd_prepareNextMediaItem(targetZoneId , prepareParams, error, context, callbackPrepare);

    }


    //--------------------------------
    //   load playlist
    //--------------------------------
    public loadPlaylist( playlistType: string, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo,
                         aMediaFilesFolder: amGeneralFileInfo.am_general.A_FileInfo, bTestFileExists: boolean,
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {     
      var self = this;
      var bPlaylistFileExists = false;
      var callbackGetNbFiles2 = function callbackGetNbFiles2(ctx4)
      {
        
        var callbackFileExists2 = function callbackFileExists2(ctx5)
        {
          var fileText = "";
          if (bTestFileExists)
          {
            if ( !ctx5.isError())
              bPlaylistFileExists = ctx5.getBoolResult();
          }
          var callbackReadTextFile2 = function callbackReadTextFile2(ctx3)
          {
            /*
            if (ctx3.isError())
            {
              context.setError(error);
              context.setObjectResult(null);
              if (callback != null)
                callback(context);  
              return;  
            }*/
            try{
              //alert("this.readyState == 4 && this.status == 200");
              if ( (!ctx4.isError()) && (ctx4.getIntResult() > 0)  && bPlaylistFileExists)
              {
                if (ctx3.isError()){
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                    amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), 
                    "Invalid Playlist - Screen Saver Started" + aPlaylistFile.getStorage() + aPlaylistFile.getPath() + aPlaylistFile.getName(), null,  null,  null);

                  fileText = self._iPlaylistControllerConfig.getEmptyPlaylist(playlistType);
                  //alert("1 " + fileText);
                }else{
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                    amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), 
                    "Playlist - Playlists Loaded Well "  + aPlaylistFile.getStorage() + aPlaylistFile.getPath() + aPlaylistFile.getName(), null,  null,  null);

                  fileText = ctx3.getResult();
                  //alert("2 " + fileText);
                }
              }else{
                 self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                     amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), 
                     "Invalid Playlist - Playlists Not Exists - Screen Saver Started" + aPlaylistFile.getStorage() + aPlaylistFile.getPath() + aPlaylistFile.getName(), null,  null,  null);

                fileText = self._iPlaylistControllerConfig.getEmptyPlaylist(playlistType);
                //alert("3 " + fileText);
              }
              //--- ma
              var jsonPlaylist = ""
              try{
                jsonPlaylist = JSON.parse(fileText);
              }catch(e)
              {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                  amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Warning, self.getServiceName(), 
                  "Invalid Playlist - Playlists Is Not Well Formatted  - Screen Saver Started" 
                                       + aPlaylistFile.getStorage() + aPlaylistFile.getPath() + aPlaylistFile.getName(), null,  null,  null);

                fileText = self._iPlaylistControllerConfig.getEmptyPlaylist(playlistType);

                jsonPlaylist = JSON.parse(fileText);
              }
              //document.getElementById("playlist").innerHTML = myObj.name;
              var callbackCreatePlaylistItems = function callbackCreatePlaylistItems()
              {
                if (callback != null)
                {
                  self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                    amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), 
                    "Playlist Items Loaded - OK for " + aPlaylistFile.getStorage() + aPlaylistFile.getPath() + aPlaylistFile.getName(), null,  null,  null);

                  context.setError(error);
                  if (callback != null)
                    callback(context);     
                }
              }
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                                      amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), 
                                      "Starting Loading the Playlist Items..." + aPlaylistFile.getStorage() + aPlaylistFile.getPath() + aPlaylistFile.getName(), null,  null,  null);
              try{
                 return self.loadSpecificPlaylist(playlistType, jsonPlaylist, aPlaylistFile, null, error, context, callbackCreatePlaylistItems);
              }catch(err2){
                if (error != null) {
                  error.setError(2009, "Error Loading the Playlist Items : " +  JSON.stringify(err2));
                }
                self._aActivityLogService._IActivityLogServiceMessaging
                  .addLogMessage(
                    amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,
                    self.getServiceName(),
                    "Error Loading the Playlist Items :" + JSON.stringify(err2), 
                    null, 
                    null, 
                    null
                  );
                if (callback != null)
                {
                  context.setError(error);
                  if (callback != null)
                    callback(context);     
                }  
              }
            //------------------------------
            }catch(err){
              if (error != null) {
                error.setError(2001, "Error Parsing Playlist : " +  JSON.stringify(err));
              }
              self._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(
                  amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,
                  self.getServiceName(),
                  "Error 2001: Error Parsing the Playlist :" + JSON.stringify(err), 
                  null, 
                  null, 
                  null
                );
              if (callback != null)
              {
                context.setError(error);
                if (callback != null)
                  callback(context);     
              }
            }
          }     
          var errorReadTextFile2:amGeneralError.am_general.A_Error   = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextReadTextFile2:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();       
          if ( (!ctx4.isError()) && (ctx4.getIntResult() > 0) && bPlaylistFileExists)
          {
            var playlistUrl = aPlaylistFile.getFullUrlName();
            //alert(playlistUrl);
            context.setRemoteCallback(true);
            //document.getElementById("renderer.message").innerHTML += "<p>start read xml-text files: " + fileFullName  + "</p>";
            //document.getElementById("rend.message").innerHTML += "<p>start _iSDKFileSystem.readTextFile2: "  + "</p>";  
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                     amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), 
                     "Read the Playlist File: " + aPlaylistFile.getStorage() + aPlaylistFile.getPath() + aPlaylistFile.getName(), null,  null,  null);
            contextReadTextFile2.setRemoteCallback(true); 
            self._aSDKService._iSDKFileSystem.readTextFile2
                                              ( aPlaylistFile.getStorage(), aPlaylistFile.getPath(), aPlaylistFile.getName(), 
                                                errorReadTextFile2, contextReadTextFile2, callbackReadTextFile2 );   
          }else{
            callbackReadTextFile2(contextReadTextFile2);
          }    
        }
        //----------
        if (bTestFileExists)
        {
          var errorFileExists2:amGeneralError.am_general.A_Error   = self._aServiceLocator._iEntityCreation.createDefaultError();   
          var contextFileExists2:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext(); 
          if ( (!ctx4.isError()) && (ctx4.getIntResult() > 0))
          {
            contextFileExists2.setRemoteCallback(true);     
            self._aSDKService._iSDKFileSystem.fileExists2( aPlaylistFile.getStorage(), aPlaylistFile.getPath(), aPlaylistFile.getName(), 
                                                            errorFileExists2, contextFileExists2, callbackFileExists2);   

          }else{
            contextFileExists2.setBoolResult(true);
            callbackFileExists2(contextFileExists2);
          }
        }else{
          contextFileExists2.setBoolResult(true);
          callbackFileExists2(contextFileExists2);
        }

      }
      //--------------
      context.setRemoteCallback(true);
      //document.getElementById("renderer.message").innerHTML += "<p>start read xml-text files: " + fileFullName  + "</p>";
      //document.getElementById("rend.message").innerHTML += "<p>start _iSDKFileSystem.readTextFile2: "  + "</p>";  
      var errorGetNbFiles2:amGeneralError.am_general.A_Error   = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextGetNbFiles2:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      contextGetNbFiles2.setRemoteCallback(true); 
      self._aSDKService._iSDKFileSystem.getNbFiles2
                                        ( aMediaFilesFolder.getStorage(), aMediaFilesFolder.getPath(),
                                          errorGetNbFiles2, contextGetNbFiles2, callbackGetNbFiles2);       


    }

/*
            //---------------------------
            var crtFileInfo = fileInfoLst[crtFileIdx];
            var fileFullName = crtFileInfo.getStorage() + crtFileInfo.getPath() + crtFileInfo.getName();
            
            var callbackReadTextFile2 = function callbackReadTextFile2(ctx3)
            {
              if (ctx3.isError())
              {
                //console.log( 'Error loading xml file ' + fileFullName + JSON.stringify(err)); 
                // add a log tracking 
                context.setError(error);
                context.setObjectResult(null);
                //if (context.getError() != null)
                  //context.getError().setError(7001, 'Error reading file ' + fileFullName + JSON.stringify(err));
                //document.getElementById("renderer.message").innerHTML += "<p>cannot read xml files: " + fileFullName + JSON.stringify(ctx3._error) + "</p>";
                //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
                if (callback != null)
                  callback(context);  
                return;  
              }  
              //var xmlString = ctx3._result;
              //document.getElementById("renderer.message").innerHTML += "<p>" + xmlString  + "</p>";          
              //-------------- store a new xml-json-text object
              //document.getElementById("rend.message").innerHTML += "<p>start createDefaultXmlDocument "  +  "</p>";  
              var aXmlDocument:amGeneralXmlDocument.am_general.AE_XmlDocument = self._aServiceLocator._iEntityCreation.createDefaultXmlDocument(error);
              var xmlNativeDoc = ctx3.getResult();//ctx3.getObjectResult();
              aXmlDocument.setNativeXmlDocument(xmlNativeDoc);
              self._xmlDocumentList.push(aXmlDocument);
              console.log( 'Succesfuly loaded xml-text file ' + fileFullName ); 
              // add a log tracking 
              //------------- load the next xml file 
              //document.getElementById("rend.message").innerHTML += "<p>start load one text file "  +  "</p>";  
              return loadOneTextFile(++crtFileIdx, nbXmlFiles, fileInfoList, xmlDocumentLst, err, ctx3, callbck);
    
              //self._aUtilsService._iUtilsXMLJson.parseXMLString(xmlString, error, context, callbackReadAndParseXMLFile2);
            }
    
            context.setRemoteCallback(true);
            //document.getElementById("renderer.message").innerHTML += "<p>start read xml-text files: " + fileFullName  + "</p>";
            //document.getElementById("rend.message").innerHTML += "<p>start _iSDKFileSystem.readTextFile2: "  + "</p>";  
            self._aSDKService._iSDKFileSystem.readTextFile2
                                              ( crtFileInfo.getStorage(), crtFileInfo.getPath(), crtFileInfo.getName(), 
                                              error, context, callbackReadTextFile2 ) ; 
    
          }
  */

    //--------------------------------
    //   load playlist
    //--------------------------------
    public loadPlaylist2( playlistType: string, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                         error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
       
        var xmlhttp = new XMLHttpRequest();
        var owner = this;
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) 
          {
            try{
              alert("this.readyState == 4 && this.status == 200");
              var jsonPlaylist = JSON.parse(this.responseText);
              alert(jsonPlaylist);
              //document.getElementById("playlist").innerHTML = myObj.name;
              var callbackCreatePlaylistItems = function callbackCreatePlaylistItems()
              {
                if (callback != null)
                {
                  context.setError(error);
                  if (callback != null)
                    callback(context);     
                }
              }
              return owner.loadSpecificPlaylist(playlistType, jsonPlaylist, aPlaylistFile, null, error, context, callbackCreatePlaylistItems);
            //------------------------------
            }catch(err){
              if (error != null) {
                error.setError(2001, "Error Parsing Playlist : " + playlistUrl + " error: " + JSON.stringify(err));
                owner._aActivityLogService._IActivityLogServiceMessaging
                .addLogMessage(
                  amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Error,
                  owner.getServiceName(),
                  `Error Parsing Playlist : ${playlistUrl} error : ${JSON.stringify(err)}`, 
                  null, 
                  null, 
                  null
                );
              }
              if (callback != null)
              {
                context.setError(error);
                if (callback != null)
                  callback(context);     
              }
            }
          }
        };
        var playlistUrl = aPlaylistFile.getFullUrlName();
        alert(playlistUrl);
        xmlhttp.open("GET", playlistUrl, true);
        xmlhttp.send();
      
    }

    //-------------------------------------------
    public getPlaylist() : amPlaylist.am_coreservices.AE_MainPlaylist 
    {
      return this._aPlaylist;
    }

    //------------------------------
    private loadSpecificPlaylist( playlistType : string, jsonObject : any, aPlaylistFile: amGeneralFileInfo.am_general.A_FileInfo, 
                                  aParent: amPlaylistItem.am_coreservices.AE_PlaylistItem,
                                  error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      if (playlistType == "mood_v5")
        return this._iPlaylistControllerPlaylistMoodv5.loadPlaylist(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);

      if (playlistType == "custom_v1")
        return this._iPlaylistControllerPlaylistCustomv1.loadPlaylist(playlistType, jsonObject, aPlaylistFile, aParent, error, context, callback);

      //------------------- to do set error
      if (callback != null)
      {
        context.setError(error);
        if (callback != null)
          callback(context);     
      } 
    }

    //-------------------------------------
    public getEmptyPlaylist(aPlaylistType: string) : string
    {
      if (aPlaylistType == "mood_v5")
        return this._iPlaylistControllerPlaylistMoodv5.getEmptyPlaylist();

      if (aPlaylistType == "custom_v1")
        return this._iPlaylistControllerPlaylistCustomv1.getEmptyPlaylist();
    }

    //========================
    public startMainLoop(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
    }

    //========================
    public endMainLoop(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
    }

    //========================
    public mainLoop(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void
    {
      var aError = error;
      var aContext = context;

      if (aError == null)
        aError  = this._aServiceLocator._iEntityCreation.createDefaultError();
      if (aContext == null)
        aContext = this._aServiceLocator._iEntityCreation.createDefaultContext();
                 
      var  event:amGeneralEvent.am_general.AE_Event = this.createEvent( 
                          amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_RequestToPlay, //eventId: number,
                          this._aPlaylist.getLogic(),                      //receiver: any, 
                          null, -1,                                       //targetAddress: [], iCrtTargetIdx: number,
                          error, context, callback);

      this.processMainEvent(event, aError, aContext, callback);

    }


    //======================
    public processMainEvent( event : amGeneralEvent.am_general.AE_Event,
                             error: amGeneralError.am_general.A_Error, 
                             context: amGeneralContext.am_general.A_Context, callback): void
    {
      this._evtMainQueue.push(event);
      if (this._evtMainQueue.size() > 1)      
        return;
      var self = this;
      var mainEvent = null;
      var isFirstTime = true;
      var processOneMainEvent = function processOneMainEvent()
      {
        //-------- all events were processed
        if (! isFirstTime)
          self._evtMainQueue.shift();   

        if (isFirstTime) 
          isFirstTime = false;

        if (self._evtMainQueue.size() == 0)       //if (crtEventIdx + 1 > nbEvents)
        {
          //console.log( "Successfully end queue processing"); 
          context.setError(error);
          if (callback != null)
            callback(context);     
          return ; 
        }
        //-------------------- interruption
        if (self._interruptCallback != null)
        {
          self._evtMainQueue.clear();
          if (self._isInterrupted)
          {
            return ;
          }
          self._isInterrupted = true;
          return self._interruptCallback();
        }
        //---------------------------------
        mainEvent = self._evtMainQueue.peek();   

        self._evtQueue.push(mainEvent);
        self.processEvents( self._evtQueue, error, context, processOneMainEvent);
      }
      processOneMainEvent();
    }


    //========================================================================
    public createEvent( eventId: number, receiver: any, targetAddress: [], iCrtTargetIdx: number,
                          error: amGeneralError.am_general.A_Error, 
                          context: amGeneralContext.am_general.A_Context, callback): amGeneralEvent.am_general.AE_Event
    {  
      var aEvent = this._aServiceLocator._iEntityCreation.createDefaultEvent(error);
      aEvent.setReceiver(receiver);
      aEvent.setEventId(eventId);
      aEvent.setTargetAddress(targetAddress);
      aEvent.setCrtTargetIdx(iCrtTargetIdx);
      return aEvent;
    }

    //========================================================================
    public processEvents( eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                          context: amGeneralContext.am_general.A_Context, callback): void
    {  
      //var nbEvents:number = eventQueue.size();
      //var crtEventIdx = -1;

      var self = this;
      var event = null;
      var processOneEvent = function processOneEvent()
      {
        //-------- all events were processed
        if (eventQueue.size() == 0)       //if (crtEventIdx + 1 > nbEvents)
        {
          //console.log( "Successfully end queue processing"); 
          context.setError(error);
          if (callback != null)
            callback(context);     
          return ; 
        }
        //-------------------- interruption
        if (self._interruptCallback != null)
        {
          eventQueue.clear();
          if (self._isInterrupted)
          {
            return ;
          }
          self._isInterrupted = true;
          return self._interruptCallback();
        }
        //-------------------------------
        event = eventQueue.shift();    //crtEventIdx++;
        var retFunction = function retFunction()
        {
          processOneEvent();
        }
        try{
          event.getReceiver().receiveEvent(event, eventQueue, error, self, self._aRenderingController, context, processOneEvent);
        }catch(err){
           var a =1;
        }
      }
      processOneEvent();
    }



    //========================================================================
    public receiveEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                         context: amGeneralContext.am_general.A_Context, callback): void
    {
      this.processMainEvent(event, error, context, callback);
      context.setError(error);
      if (callback != null)
        callback(context);     
      return ; 
    }

    //=================================================
    //  run interface
    //=================================================

  public setupScreen()
  {
    var self = this;    
    if (self._iPlaylistControllerConfig.getPlaybackGlobalConfig()._realPlatform != "windows")
    {
      var ratio = window.devicePixelRatio || 1;
      var w = screen.width * ratio;
      var h = screen.height * ratio;
      self._iPlaylistControllerConfig.getScreenProperties().setScreenLeft(0);
      self._iPlaylistControllerConfig.getScreenProperties().setScreenTop(0);
      self._iPlaylistControllerConfig.getScreenProperties().setScreenRight(w);//realPlaybackRight);//960);//1920);//960);
      self._iPlaylistControllerConfig.getScreenProperties().setScreenBottom(h);//realPlaybackBottom);//1080);//500);
      return;
    }

    var ratio = window.devicePixelRatio || 1;
    var w = screen.width * ratio;
    var h = screen.height * ratio;

    //var w1 = Math.max(w, h) * ratio;
    //var h1 = Math.round(w1 * (1080.0 / 1920.0));//screen.height * ratio;
    var display_mode = "keep-aspect-ratio";
    var refScreenLeft = 0;
    var refScreenTop  = 0;
    var refScreenRight  = w;//1920;
    var refScreenBottom = h;//1080;
    var refScreenWidth  = refScreenRight - refScreenLeft;
    var refScreenHeight = refScreenBottom - refScreenTop;

    var realWindowLeft   = 0;
    var realWindowTop    = 0;
    var realWindowRight  = window.innerWidth;
    var realWindowBottom = window.innerHeight;
    var realWindowWidth  = realWindowRight  - realWindowLeft;
    var realWindowHeight = realWindowBottom - realWindowTop;

    var realPlaybackLeft   = 0;
    var realPlaybackTop    = 0;
    var realPlaybackRight  = 0;
    var realPlaybackBottom = 0;
    var realPlaybackWidth  = 0;
    var realPlaybackHeight = 0;
    if (realWindowWidth < realWindowHeight)
      display_mode = "keep-aspect-ratio";
    else
      display_mode = "stretch";
    display_mode = "stretch";      //On Windowsd: for instance no ratio changes on screen and windows sizes 
    if (display_mode == "keep-aspect-ratio")
    {
      if (realWindowWidth < Math.round(1.000000 * realWindowHeight *  refScreenWidth / refScreenHeight))
      {
        realPlaybackWidth  = realWindowWidth;
        realPlaybackHeight = Math.round(1.000000 * realPlaybackWidth * refScreenHeight / refScreenWidth);
        realPlaybackLeft   = 0;
        realPlaybackTop    = 0;
        realPlaybackRight  = realPlaybackLeft + realPlaybackWidth;
        realPlaybackBottom = realPlaybackTop + realPlaybackHeight;
      }else{
        realPlaybackHeight  = realWindowHeight;
        realPlaybackWidth   = Math.round(1.000000 * realPlaybackHeight * refScreenWidth / refScreenHeight);
        realPlaybackLeft   = 0;
        realPlaybackTop    = 0;
        realPlaybackRight  = realPlaybackLeft + realPlaybackWidth;
        realPlaybackBottom = realPlaybackTop + realPlaybackHeight;
      }
    }else{

      realPlaybackWidth  = realWindowWidth;
      realPlaybackHeight = realWindowHeight;
      realPlaybackLeft   = 0;
      realPlaybackTop    = 0;
      realPlaybackRight  = realPlaybackLeft + realPlaybackWidth;
      realPlaybackBottom = realPlaybackTop + realPlaybackHeight;
    }
    self._iPlaylistControllerConfig.getScreenProperties().setScreenLeft(0);
    self._iPlaylistControllerConfig.getScreenProperties().setScreenTop(0);
    self._iPlaylistControllerConfig.getScreenProperties().setScreenRight(realPlaybackRight);//960);//1920);//960);
    self._iPlaylistControllerConfig.getScreenProperties().setScreenBottom(realPlaybackBottom);//1080);//500);

    
  } 

  //-------------------------------
  public configPlayback( aFileStorage: string, aUrlStorage : string, 
                          aHardwareSettings:amPlaybackHardwareSettings.am_playback.A_HardwareSettings ,
                          aOpeningHours:amPlaybackOpeningHours.am_playback.A_OpeningHours,
                          aScreenSaverConfig:amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig,
                          callback)
  {
    var self = this;
    var errorConfigPlayback   :amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();
    var contextConfigPlayback :amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
    var aPlaylistControllerConfig:amPlaylistControllerConfig.am_coreservices.AE_PlaylistControllerConfig 
                                        = self._aServiceLocator._iEntityCreation.createDefaultPlaylistControllerConfig(errorConfigPlayback);//error);
    //aPlaylistControllerConfig.setInitialPoolNb_OfPrepareParams(30000); 
    //aPlaylistControllerConfig.setInitialPoolNb_OfRunParams(30000);
    //aPlaylistControllerConfig.setInitialPoolNb_OfStopParams(30000);
    //aPlaylistControllerConfig.setInitialPoolNb_OfStatusParams(30000);
    self._iServiceConfig.init(aPlaylistControllerConfig, errorConfigPlayback, null, null); //error
    self._iPlaylistControllerConfig.getPlaybackGlobalConfig().setScreenSaverConfig(aScreenSaverConfig);
    self._iPlaylistControllerConfig.getPlaybackGlobalConfig().setOpeningHours(aOpeningHours);
    self._iPlaylistControllerConfig.getPlaybackGlobalConfig().setHardwareSettings(aHardwareSettings);
    //---
    var aRenderingControllerConfig:amRenderingControllerConfig.am_coreservices.AE_RenderingControllerConfig 
                                        = self._aServiceLocator._iEntityCreation.createDefaultRenderingControllerConfig(null);//error);
    aRenderingControllerConfig.setInitialPoolNb_OfRenderingZones(20); 
    //aRenderingControllerConfig.setInitialPoolNb_OfImageRenderers(10); 
    //aRenderingControllerConfig.setInitialPoolNb_OfVideoRenderers(10); 
    //aRenderingControllerConfig.setInitialPoolNb_OfVideoStreamRenderers(10); 
    //aRenderingControllerConfig.setInitialPoolNb_OfHtmlRenderers(10); 
    //aRenderingControllerConfig.setInitialPoolNb_OfFillRectRenderers(10); 
    //aRenderingControllerConfig.setInitialPoolNb_OfHtmlTemplateRenderers(10); 
    //aRenderingControllerConfig.setInitialPoolNb_OfScreenSaverRenderers(10); 
    //aRenderingControllerConfig.setInitialPoolNb_OfBackgroundRenderers(1); 
    //aRenderingControllerConfig.setInitialPoolNb_OfHtmlZones(10); 
    aRenderingControllerConfig.setRootDivId("background01"); 
    aRenderingControllerConfig.setScreenSaverConfig(aScreenSaverConfig);

    self._aRenderingController._iServiceConfig.init(aRenderingControllerConfig, errorConfigPlayback,  null, null); //error,
  }

    //---------------------------------------------------------
    public setInterruptCallback(interruptCallback) : void
    {
      //return ; //ma2
      this._interruptCallback = interruptCallback;
      if (this._aRenderingController != null)
        this._aRenderingController._iServiceRun.setInterruptCallback(interruptCallback);
    }


    //-----------------------------------------------------
    public run(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      var self = this;
      //------------------------- 
      self.setupScreen();
      //-------------------------
      var aFileStorage       = self._iPlaylistControllerConfig.getPlaybackGlobalConfig()._defaultResourceStorageName;
      var aUrlStorage        = self._iPlaylistControllerConfig.getPlaybackGlobalConfig()._defaultResourceStorageUrlName;
      if (self._iPlaylistControllerConfig.getPlaybackGlobalConfig()._realPlatform == "tizen")
      {
        aFileStorage = "/opt/media/USBDriveA1/";
        aUrlStorage  = "file:///opt/media/USBDriveA1/";
      }
      var aHardwareSettings  = self._iPlaylistControllerConfig.getPlaybackGlobalConfig().getHardwareSettings(); 
      var aOpeningHours      = self._iPlaylistControllerConfig.getPlaybackGlobalConfig().getOpeningHours(); 
      var aScreenSaverConfig = self._iPlaylistControllerConfig.getPlaybackGlobalConfig().getScreenSaverConfig(); 
      self.configPlayback(aFileStorage, aUrlStorage,  aHardwareSettings, aOpeningHours, aScreenSaverConfig, null);

    
      //var errorLoadSettings   :amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();
      //var contextLoadSettings :amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();=
      //var callbackLoadAllConfigurationFiles = function callbackLoadAllConfigurationFiles(ctx1: amGeneralContext.am_general.A_Context) 
      //{
        //-------------
        var errorLoadPlaylist   :amGeneralError.am_general.A_Error     = self._aServiceLocator._iEntityCreation.createDefaultError();
        var contextLoadPlaylist :amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackLoadPlaylist = function callbackLoadPlaylist()
        {
          //==
          if (errorLoadPlaylist.isError())
          {
            //alert("ERROR: loading the playlist." + errorLoadPlaylist.getErrMsg()) ;
            document.getElementById("rend.message").innerHTML += "<p>ERROR: loading the playlist." + errorLoadPlaylist.getErrMsg() + "</p>";  //ma2
          }else{
            //var jsonStream = self._iPlaylistControllerConfig.getPlaylist().toJSONString();
            var callbackMainLoop = function callbackMainLoop()
            {
              var a =1;
            }
            try{
              self._iPlaylistControllerRun.mainLoop(null,null, callbackMainLoop);
            }catch(err3){
              document.getElementById("rend.message").innerHTML += "<p>ERROR MAINLOOP: "  + err3.message + "</p>";  //ma2
            }
          }
        }
        //--------------------------
        var playlistType = "mood_v5";
        var aPlaylistFile     = self._iPlaylistControllerConfig.getPlaybackGlobalConfig()._aPlaylistFile;
        aPlaylistFile.setName("playlist_v5.json"); 

        var mediaFilesFolder = self._iPlaylistControllerConfig.getPlaybackGlobalConfig()._aMediaFilesFolder;
        mediaFilesFolder.setStorage(aFileStorage);
        mediaFilesFolder.setPath("/media_files/"); 
        mediaFilesFolder.setName("");
        mediaFilesFolder.setUrlStorage(aUrlStorage);
        mediaFilesFolder.setUrlPath(mediaFilesFolder.getPath()); 
        mediaFilesFolder.setUrlName(mediaFilesFolder.getName());
        var bTestFileExists = true;

        //
        self._iPlaylistControllerConfig.loadPlaylist( playlistType, aPlaylistFile, mediaFilesFolder, bTestFileExists, 
                                                      errorLoadPlaylist, contextLoadPlaylist, callbackLoadPlaylist); 
      //}
      //loadAllFileSettings_( aFileStorage, aUrlStorage, aGlobalSettings, aHardwareSettings, aOpeningHours, aScreenSaverConfig, 
        //                            errorLoadSettings, contextLoadSettings, callbackLoadAllConfigurationFiles);
    }
      

    //-----------------------------
    public shutdown(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      //console.log(this._iService.getServiceName() + " instance: " + this._iService.getInstanceName() + "  - shutdown by interruption");
      //----------------------
      var self = this;
      //-----------------------
      self._aPlaylist.getLogic().shutdown(error, null, null);
      //-----------------------
      var callbackRenderingController = function callbackcallbackRenderingController(ctx1: amGeneralContext.am_general.A_Context)
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
      self._aRenderingController._iServiceRun.shutdown(error,  context, callbackRenderingController);
      
    }



      /*
      this._fileInfoList = fileInfoList;
      this._xmlDocumentList = new Array<amGeneralXmlDocument.am_general.AE_XmlDocument>();

      var self = this;
      var nbXmlFiles:number = this._fileInfoList.length;
      var crtFileIdx = 0;
      //---
      var processOneEvent = function processOneEvent( crtFileIdx: number, nbFiles: number, fileInfoLst: Array<amGeneralFileInfo.am_general.A_FileInfo>, 
                                                      xmlDocumentLst: Array<amGeneralXmlDocument.am_general.AE_XmlDocument>,
                                                      err: amGeneralError.am_general.A_Error, ctx: amGeneralContext.am_general.A_Context, callbck): void
      {
        //-------- succes all the files were loaded
        if (crtFileIdx + 1 > nbFiles)
        {
          context.setResult("Successfully loaded all xml files");
          console.log( "Successfully loaded all xml files"); 
          context.setError(error);
          //document.getElementById("renderer.message").innerHTML += "<p>success: " + crtFileIdx  + "</p>";
          //document.getElementById("rend.message").innerHTML += "<p>start final callback "  +  "</p>";  
          if (callback != null)
            callback(context);     
          return ; 
        }
        //---------------------------
        var crtFileInfo = fileInfoLst[crtFileIdx];
        var fileFullName = crtFileInfo.getStorage() + crtFileInfo.getPath() + crtFileInfo.getName();
        
        var callbackReadTextFile2 = function callbackReadTextFile2(ctx3)
        {
          if (ctx3.isError())
          {
            //console.log( 'Error loading xml file ' + fileFullName + JSON.stringify(err)); 
            // add a log tracking 
            context.setError(error);
            context.setObjectResult(null);
            //if (context.getError() != null)
              //context.getError().setError(7001, 'Error reading file ' + fileFullName + JSON.stringify(err));
            //document.getElementById("renderer.message").innerHTML += "<p>cannot read xml files: " + fileFullName + JSON.stringify(ctx3._error) + "</p>";
            //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
            if (callback != null)
              callback(context);  
            return;  
          }  
          return loadOneTextFile(++crtFileIdx, nbXmlFiles, fileInfoList, xmlDocumentLst, err, ctx3, callbck);

          //self._aUtilsService._iUtilsXMLJson.parseXMLString(xmlString, error, context, callbackReadAndParseXMLFile2);
        }

        context.setRemoteCallback(true);
        //document.getElementById("renderer.message").innerHTML += "<p>start read xml-text files: " + fileFullName  + "</p>";
        //document.getElementById("rend.message").innerHTML += "<p>start _iSDKFileSystem.readTextFile2: "  + "</p>";  
        self._aSDKService._iSDKFileSystem.readTextFile2
                                          ( crtFileInfo.getStorage(), crtFileInfo.getPath(), crtFileInfo.getName(), 
                                          error, context, callbackReadTextFile2 ) ; 

      }

      loadOneTextFile(crtFileIdx, nbXmlFiles, fileInfoList, this._xmlDocumentList, error, context, callback);
    }
    */
  }
} 