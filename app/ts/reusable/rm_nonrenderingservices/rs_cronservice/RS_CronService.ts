import amCronService        = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AS_CronService");
import amICronServiceMain   = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AI_CronServiceMain");
import amICronServiceConfig = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AI_CronServiceConfig");

import amGeneralScheduleType          = require("../../../../../app/ts/abstract/am_general/ae_scheduletype/AE_ScheduleType");
import amServiceConstraintType = require("../../../../../app/ts/abstract/am_general/ae_serviceconstrainttype/AE_ServiceConstraintType");
import amServiceConstraint     = require("../../../../../app/ts/abstract/am_general/ae_serviceconstraint/AE_ServiceConstraint");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

import amGeneralFactoryDescription             = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amCronConfig           = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AE_CronConfiguration");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

import amCronSchedule   = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_cronservice/AE_CronSchedule");
import amGeneralService = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralActivityLogMessageTypes = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");

import rmNonRenderingServices     = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/R_NonRenderingService");

import rmICronServiceMain    = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RI_CronServiceMain");
import rmICronServiceConfig  = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RI_CronServiceConfig");

import amTransversalServices4 = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amPlaylistDownloader      = require("../../../../../app/ts/abstract/am_coreservices/as_playlistdownloader/AS_PlaylistDownloader");
import amHtmlTemplateDownloader  = require("../../../../../app/ts/abstract/am_coreservices/as_htmltemplatedownloader/AS_HtmlTemplateDownloader");
import amRenderingController     = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");
import amPlaylistController      = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amLiveCommands            = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_livecommands/AS_LiveCommands");

import amMonitoring  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_monitoring/AS_Monitoring");

import amRebootService  = require("../../../../../app/ts/abstract/am_nonrenderingservices/as_rebootservice/AS_RebootService");

//=========================================================================================================
export module rm_nonrenderingservices
{
  export class RS_CronService extends rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService 
                                      implements amCronService.am_nonrenderingservices.AS_CronService
  {
    //---------- interfaces
    _iCronServiceMain   : amICronServiceMain.am_nonrenderingservices.AI_CronServiceMain ;
    _iCronServiceConfig : amICronServiceConfig.am_nonrenderingservices.AI_CronServiceConfig;

    //----------- composants 
    _aLogService : amTransversalServices4.am_transversalservices.A_LogService; 

    _aPlaybackGlobalConfig : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;

    _aActivityLogService   : amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;

    _aCronConfiguration    : amCronConfig.am_nonrenderingservices.AE_CronConfiguration;

    _aCronScheduleList  :  Array<amCronSchedule.am_nonrenderingservices.AE_CronSchedule>;
    //_aCronStartupList   :  Array<amCronSchedule.am_nonrenderingservices.AE_CronSchedule>;

    _iServiceInstanceId  :  number;

    _aMonitoringService: amMonitoring.am_nonrenderingservices.AS_MonitoringService;

    //----------- constructor 
    constructor( aFactoryDescription: amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                 aServiceContainer  : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer,
                 aLogService        : amTransversalServicesLogService.am_transversalservices.A_LogService,
                 error              : amGeneralError.am_general.A_Error)  
    {      
      super(aFactoryDescription, aServiceContainer, aLogService, error);

      this._iCronServiceMain   = new rmICronServiceMain.rm_nonrenderingservices.RI_CronServiceMain(this) ;
      this._iCronServiceConfig = new rmICronServiceConfig.rm_nonrenderingservices.RI_CronServiceConfig(this) ;

      this._aLogService = aLogService;

      this._aPlaybackGlobalConfig = null;
      this._aActivityLogService   = null;
      this._aCronConfiguration    = null;

      this._aCronScheduleList     = new Array<amCronSchedule.am_nonrenderingservices.AE_CronSchedule>();
      //this._aCronStartupList      = new Array<amCronSchedule.am_nonrenderingservices.AE_CronSchedule>();

      this._iServiceInstanceId     = 0;

      this._aMonitoringService      = null;
    }

    //=========================================
    //  implementation of config interface
    //=========================================

    //-----------------------------------------
    public setPlaybackGlobalConfig( aPlaybackGlobalConfig: amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig)
    {
      this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
    }
    //-----------------------------------------
    public getPlaybackGlobalConfig() : amPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig
    {
      return this._aPlaybackGlobalConfig;
    }

    //-----------------------------------------
    public setCronConfig(aCronConfiguration: amCronConfig.am_nonrenderingservices.AE_CronConfiguration)
    {
      this._aCronConfiguration = aCronConfiguration;
    }
    //-----------------------------------------
    public getCronConfig() : amCronConfig.am_nonrenderingservices.AE_CronConfiguration
    {
      return this._aCronConfiguration;
    }

    //-----------------------------------------
    public setActivityLogService( aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService)
    {
      this._aActivityLogService = aActivityLogService;
    }
    //--------------------------------------------
    public getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService
    {
      return this._aActivityLogService;
    }
    
    //-----------------------------------------
    public setMonitoringService(monitoringService: amMonitoring.am_nonrenderingservices.AS_MonitoringService)
    {
      this._aMonitoringService = monitoringService;
    }

    //-----------------------------------------
    public getMonitoringService() : amMonitoring.am_nonrenderingservices.AS_MonitoringService
    {
      return this._aMonitoringService;
    }

    //--------------------------------------------------------------------------------------------------------------------------------------
    public getCronScheduleByServiceName( strServiceName : string ) : amCronSchedule.am_nonrenderingservices.AE_CronSchedule
    {
      if (strServiceName == null)
        return null;
      //------------------------------
      var foundCronSchedule = null;
      //-----------------------------
      for (let crtCronSchedule of this._aCronScheduleList) 
      {
        if (crtCronSchedule.getScheduleInfo().getServiceName() == strServiceName)
        {
          return crtCronSchedule;
        } 
      }
      return null;
    }

    //--------------------------------------------------------------------------------------------------------------------------------------
    public getCronScheduleByServiceAbstractName( strServiceAbstractName : string) : amCronSchedule.am_nonrenderingservices.AE_CronSchedule
    {
      if (strServiceAbstractName == null)
        return null;
      //------------------------------
      var foundCronSchedule = null;
      //-----------------------------
      for (let crtCronSchedule of this._aCronScheduleList) 
      {
        if (crtCronSchedule.getScheduleInfo().getServiceAbstractName() == strServiceAbstractName)
        {
          return crtCronSchedule;
        } 
      }
      return null;
    }

    //========================================
    //  create scheduled services 
    //=========================================

    //-------------------------------------------------                  
    public create_new_service_instance( aCronSchedule: amCronSchedule.am_nonrenderingservices.AE_CronSchedule) : amGeneralService.am_general.A_Service
    {
      //---------------------------------
      var self = this;
      //---------------------------------
      var newService = null
      //------------------------------------------------------------------------------------------ 
      if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_TestService")
      {
        newService = this._aServiceLocator._iServiceCreation.createDefaultService_TestService(this._aServiceContainer,
                                                                                              this._aServiceLocator,
                                                                                              this._aLogService, 
                                                                                              ++this._iServiceInstanceId, null);                                                                                              
        //------------------------------------------------------------------------------------------ 
      }else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_TestService2")
      {
        newService = this._aServiceLocator._iServiceCreation.createDefaultService_TestService2(this._aServiceContainer,
                                                                                               this._aServiceLocator,
                                                                                               this._aLogService, 
                                                                                               ++this._iServiceInstanceId, null);
      //------------------------------------------------------------------------------------------ 
      }else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_TestService3")
      {
        newService = this._aServiceLocator._iServiceCreation.createDefaultService_TestService3(this._aServiceContainer,
                                                                                               this._aServiceLocator,
                                                                                               this._aLogService, 
                                                                                               ++this._iServiceInstanceId, null);
      
      //------------------------------------------------------------------------------------------ 
      }else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_PlaylistDownloader")
      {
        var aPlaylistDownloader : amPlaylistDownloader.am_coreservices.AS_PlaylistDownloader;
        aPlaylistDownloader = this._aServiceLocator._iServiceCreation.createDefaultService_PlaylistDownloader(this._aServiceContainer,
                                                                                                              this._aServiceLocator,
                                                                                                              this._aLogService, 
                                                                                                              ++this._iServiceInstanceId, null);
        aPlaylistDownloader._iService.setSDKService(this._aSDKService);
        aPlaylistDownloader._iPlaylistDownloaderConfig.setPlaybackGlobalConfig(this._aPlaybackGlobalConfig);
        aPlaylistDownloader._iPlaylistDownloaderConfig.setActivityLogService(this._aActivityLogService);
        if (this.getMainDebug() == true)
          aPlaylistDownloader._iServiceConfig.setDebug(true);
          
        newService = aPlaylistDownloader;

      //------------------------------------------------------------------------------------------ 
      }else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_HtmlTemplateDownloader")
      {
        var aHtmlTemplateDownloader : amHtmlTemplateDownloader.am_coreservices.AS_HtmlTemplateDownloader;
        aHtmlTemplateDownloader = this._aServiceLocator._iServiceCreation.createDefaultService_HtmlTemplateDownloader(this._aServiceContainer,
                                                                                                                      this._aServiceLocator,
                                                                                                                      this._aLogService, 
                                                                                                                      ++this._iServiceInstanceId, null);
        aHtmlTemplateDownloader._iService.setSDKService(this._aSDKService);
        aHtmlTemplateDownloader._iHtmlTemplateDownloaderConfig.setPlaybackGlobalConfig(this._aPlaybackGlobalConfig);
        aHtmlTemplateDownloader._iHtmlTemplateDownloaderConfig.setActivityLogService(this._aActivityLogService);
        if (this.getMainDebug() == true)
          aHtmlTemplateDownloader._iServiceConfig.setDebug(true);
          
        newService = aHtmlTemplateDownloader;

      //------------------------------------------------------------------------------------------ 
      }else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_RebootService")
      {
        var aRebootService : amRebootService.am_nonrenderingservices.AS_RebootService;
        aRebootService = this._aServiceLocator._iServiceCreation.createDefaultService_RebootService(this._aServiceContainer,
                                                                                                    this._aServiceLocator,
                                                                                                    this._aLogService, 
                                                                                                    ++this._iServiceInstanceId, null);
        aRebootService._iService.setSDKService(this._aSDKService);
        aRebootService._iRebootServiceConfig.setPlaybackGlobalConfig(this._aPlaybackGlobalConfig);
        aRebootService._iRebootServiceConfig.setActivityLogService(this._aActivityLogService);
        if (this.getMainDebug() == true)
          aRebootService._iServiceConfig.setDebug(true);
          
        newService = aRebootService;

      //----------------------------------------------------------------------------------------------------------------  
      }else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "A_PlaylistController")
      {
        //var aPlaylistController:amPlaylistController.am_coreservices.A_PlaylistController = new rmPlaylistController.rm_coreservices.R_PlaylistController(null, null, null, error);
        var aPlaylistController : amPlaylistController.am_coreservices.A_PlaylistController;
        aPlaylistController = this._aServiceLocator._iServiceCreation.createDefaultService_PlaylistController(this._aServiceContainer,
                                                                                                              this._aServiceLocator,
                                                                                                              this._aLogService, 
                                                                                                              ++this._iServiceInstanceId, null);                
        //------------------
        //var aRenderingController:amRenderingController.am_coreservices.A_RenderingController = new rmRenderingController.rm_coreservices.R_RenderingController(null, null, null, error);
        var aRenderingController : amRenderingController.am_coreservices.A_RenderingController;
        aRenderingController = this._aServiceLocator._iServiceCreation.createDefaultService_RenderingController(this._aServiceContainer,
                                                                                                                this._aServiceLocator,
                                                                                                                this._aLogService, 
                                                                                                                ++this._iServiceInstanceId, null);                
        //-----------------
        aRenderingController._iService.injectDependencies( null, this._aServiceLocator, this._aLogService, null ) ;
        aRenderingController._iService.setUtilsService(this._aUtilsService); 
        aRenderingController._iService.setTargetService(aPlaylistController); 
        aRenderingController._iRenderingControllerConfig.setActivityLogService(this._aActivityLogService);

        //------------------- 
        aPlaylistController._iService.injectDependencies( null, this._aServiceLocator, this._aLogService, null ) ;
        aPlaylistController._iService.setUtilsService(this._aUtilsService); 
        aPlaylistController._iService.setTargetService(aRenderingController); 
        aPlaylistController._iService.setSDKService(this._aSDKService); 
        aPlaylistController._iPlaylistControllerConfig.setPlaybackGlobalConfig(this._aPlaybackGlobalConfig);
        aPlaylistController._iPlaylistControllerConfig.setActivityLogService(this._aActivityLogService);
        if (this.getMainDebug() == true)
          aPlaylistController._iServiceConfig.setDebug(false);  
        //---            
        aPlaylistController._iPlaylistControllerMonitoring.setMonitoringService(this._aMonitoringService);
        if (this._aMonitoringService != null)
          this._aMonitoringService._iService.setTargetService(aPlaylistController);
          
        newService = aPlaylistController;

      //----------------------------------------------------------------------------------------------------------------  
      }else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_LiveCommandsService")
      {
        var aLiveCommandsService: amLiveCommands.am_nonrenderingservices.AS_LiveCommandsService;
        aLiveCommandsService = this._aServiceLocator._iServiceCreation.createDefaultService_LiveCommands(this._aServiceContainer,
                                                                                                        this._aServiceLocator,
                                                                                                        this._aLogService, 
                                                                                                        ++this._iServiceInstanceId, null);
        aLiveCommandsService._iService.setSDKService(this._aSDKService);
        aLiveCommandsService._iLiveCommandsConfig.setPlaybackGlobalConfig(this._aPlaybackGlobalConfig);
        aLiveCommandsService._iLiveCommandsConfig.setActivityLogService(this._aActivityLogService);
        if (this.getMainDebug() == true)
          aLiveCommandsService._iServiceConfig.setDebug(true);
          
        newService = aLiveCommandsService;
      }

      return newService ;
    }

    //=========================================
    //  create all scheduled
    //=========================================

    //--------------------------------------------------
    public run_all_startup_services_fake(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      //------------------ end 
      if (context != null)
      {
        context.setError(error);
        context.setBoolResult(true);
        return callback(context);  
      }
    }

    //------------------------------------------------    
    public insertOrdered( array: Array<amCronSchedule.am_nonrenderingservices.AE_CronSchedule>, 
                          elem: amCronSchedule.am_nonrenderingservices.AE_CronSchedule) 
    {
      let newArray = array;
      let i = 0;
      while ( i < array.length && array[i].getScheduleInfo().getScheduleAtStartup_startupPriority() < elem.getScheduleInfo().getScheduleAtStartup_startupPriority()) 
      {
        i++
      };
      newArray.splice(i, 0, elem);
      return newArray;
    }

    //--------------------------------------------------
    /*
    public create_all_startup_schedules(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context)
    {
      //-----------------------------
      var scheduleInfoList = this._iCronServiceConfig.getCronConfig().getScheduleInfoList();
      //-----------------------------
      var crtCronSchedule : amCronSchedule.am_nonrenderingservices.AE_CronSchedule = null;
      for (let crtScheduleInfo of scheduleInfoList) 
      {
        if (crtScheduleInfo.getScheduleRunAtStartup() == false)
          continue;
        crtCronSchedule = this._aServiceLocator._iEntityCreation.createDefaultCronSchedule(null);
        //---
        crtCronSchedule.setScheduleInfo(crtScheduleInfo);
        crtCronSchedule.setCrtService(null);
        crtCronSchedule.setPrevService(null);
        //----
        this._aCronStartupList = this.insertOrdered(this._aCronStartupList, crtCronSchedule);
      }
    }*/

    //--------------------------------------------------
    public create_all_runtime_schedules(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context)
    {
      //------------------------------
      var scheduleInfoList = this._iCronServiceConfig.getCronConfig().getScheduleInfoList();
      //-----------------------------
      var crtCronSchedule : amCronSchedule.am_nonrenderingservices.AE_CronSchedule = null;
      for (let crtScheduleInfo of scheduleInfoList) 
      {
        crtCronSchedule = this._aServiceLocator._iEntityCreation.createDefaultCronSchedule(null);
        //---
        crtCronSchedule.setScheduleInfo(crtScheduleInfo);
        crtCronSchedule.setCrtService(null);
        crtCronSchedule.setPrevService(null);
        //----
        //this._aCronScheduleList.push(crtCronSchedule);
        this._aCronScheduleList = this.insertOrdered(this._aCronScheduleList, crtCronSchedule);
      }
    }

    //--------------------------------------------------
    public create_all_schedules(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context)
    {
      var self = this;
      //-----------------------------
      this._iCronServiceConfig.setCronConfig(this._aPlaybackGlobalConfig.getCronConfiguration());
      //-------------------
      //self.create_all_startup_schedules(error, context);
      //-------------------
      self.create_all_runtime_schedules(error, context);

    }


    //======================================
    // constraints logic
    //======================================
    
    //-------------------------------------------------                  
    public interrupt_one_reference_service( aCronSchedule: amCronSchedule.am_nonrenderingservices.AE_CronSchedule, 
                                            error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
            //------------------------------ test
      if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_TestService2")
      {
         var a = 1;
      }
      if (aCronSchedule.getCrtService() == null)
      {
        //-------------------------------------
        if (callback != null)
        {
          context.setBoolResult(true);
          return callback(context);
        }
      }
      //-----------------------------
      //var errorRun:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      //var contextRun:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      //------------------------------------------
      var callbackInterruptCrtService = function callbackInterruptCrtService()
      {
        var callbackShutdownInterruptedService = function callbackShutdownInterruptedService()
        {
          if (aCronSchedule.getCrtService() != null)
          {
            if (self._aActivityLogService != null)
            {
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                                amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                                aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                  + "  ---------- shutdown interrupt service - Done - " + aCronSchedule.getCrtService()._iService.getServiceName(), null, null, null);
            }
            if (self._debug)
            {
              document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                               + "  ---------- shutdown interrupt service - Done - " + aCronSchedule.getCrtService()._iService.getServiceName() + "</p>";
              console.log(aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                              + "  ---------- shutdown interrupt service - Done - " + aCronSchedule.getCrtService()._iService.getServiceName());
            }
          }
          //-------------------------------------
          aCronSchedule.setCrtService(null);
          aCronSchedule.setPrevService(null);
          //-------------------------------------
          if (callback != null)
          {
            context.setBoolResult(true);
            return callback(context);
          }
        }
        //==================== shutdown interrupted service instance - if exists
        if (aCronSchedule.getCrtService() == null)
        {
          callbackShutdownInterruptedService();    
        }else{
          if (self._aActivityLogService != null)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                              amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                              aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName() 
                                                 + "  ---------- shutdown by interruption - " + aCronSchedule.getCrtService()._iService.getServiceName(), null, null, null);
          }
          if (self._debug)
          {
            document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName() 
                                                 + "  ---------- shutdown by interruption - " + aCronSchedule.getCrtService()._iService.getServiceName() + "</p>";
            console.log(aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName() 
                                                 + "  ---------- shutdown by interruption - " + aCronSchedule.getCrtService()._iService.getServiceName());
          }

          aCronSchedule.getCrtService()._iServiceRun.shutdown(error, context, callbackShutdownInterruptedService);
        }

      } 
      //-------------------------------------------
      if (aCronSchedule.getCrtService() != null)
      {

        if (self._aActivityLogService != null)
        {
          self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                            amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                            aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                                    + "  ---------- interrupt service ..... - " + aCronSchedule.getCrtService()._iService.getServiceName(), null, null, null);
        }
        if (self._debug)
        {
          document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                                    + "  ---------- interrupt service ..... - " + aCronSchedule.getCrtService()._iService.getServiceName() + "</p>";
          console.log(aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                                    + "  ---------- interrupt service ..... - " + aCronSchedule.getCrtService()._iService.getServiceName());
        }

        aCronSchedule.getCrtService()._iServiceRun.setInterruptCallback(callbackInterruptCrtService);
      }else{
        callbackInterruptCrtService();
      }
    }


    //-------------------------------------------------                  
    public interrupt_all_reference_services_for_new_schedule( aNewSchedule : amCronSchedule.am_nonrenderingservices.AE_CronSchedule,                                     
                                                              error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      //-------------------------
      var aServiceConstraintList: Array<amServiceConstraint.am_general.AE_ServiceConstraint> = aNewSchedule.getScheduleInfo().getServiceConstraintList();
      var nbConstraints:number = aServiceConstraintList.length;
      var startConstraintIdx = 0;
      //---
      var callbackOneConstraint = function callbackOneConstraint(crtConstraintIdx: number, ctx1: amGeneralContext.am_general.A_Context)
      {
        //-------- succesfully interrupt all service in constraints
        if (crtConstraintIdx + 1 > nbConstraints)
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
        var crtServiceConstraint:amServiceConstraint.am_general.AE_ServiceConstraint = aServiceConstraintList[crtConstraintIdx];
        
        var callbackConstraint = function callbackConstraint(ctx2: amGeneralContext.am_general.A_Context)
        {
          var bScheduledWell = ctx2.getBoolResult();
          if (! bScheduledWell)//ctx2.isError())
          {
            context.setError(error);
            context.setObjectResult(null);
            //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
            if (callback != null)
              callback(context);  
            return;  
          }  
          //-------------- 
          //document.getElementById("rend.message").innerHTML = "<p>Start schedule :  " + crtScheduleIdx +  "</p>";  
          return callbackOneConstraint(++crtConstraintIdx, ctx2);
        }
        //=======================================
        if (crtServiceConstraint.getServiceConstraintType() == amServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_InterruptReferenceServiceIfIsRunning)
        {
          var refServiceCronSchedule = self.getCronScheduleByServiceAbstractName(crtServiceConstraint.getReferenceServiceAbstractName());
          //-----------------------------
          if (refServiceCronSchedule == null)
            return callbackOneConstraint(++crtConstraintIdx, ctx1);
          //----------------------------  
          self.interrupt_one_reference_service( refServiceCronSchedule,  error, ctx1, callbackConstraint) ; 
        }else{
          //-----------------------------
          callbackOneConstraint(++crtConstraintIdx, ctx1);
        }

      }

      callbackOneConstraint(startConstraintIdx, context);
    }


    //-------------------------------------------------                  
    public can_run_a_new_service_if_reference_services_run( aNewSchedule : amCronSchedule.am_nonrenderingservices.AE_CronSchedule) : boolean
    {
      var self = this;
      var bCanRun = true;
      var refServiceCronSchedule : amCronSchedule.am_nonrenderingservices.AE_CronSchedule = null;
      //-------------------------
      var aServiceConstraintList: Array<amServiceConstraint.am_general.AE_ServiceConstraint> = aNewSchedule.getScheduleInfo().getServiceConstraintList();
      //----------------------------- aServiceConstraintList
      for (let crtServiceConstraint of aServiceConstraintList) 
      {
        if (crtServiceConstraint.getServiceConstraintType() != amServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_CannotRunIfReferenceServiceRun)
          continue ;
        refServiceCronSchedule = self.getCronScheduleByServiceAbstractName(crtServiceConstraint.getReferenceServiceAbstractName());
        //-----------------------------
        if (refServiceCronSchedule == null)
          continue;
        if (refServiceCronSchedule.getCrtService() != null)
          return false;
      }
      return true;
    }

    //-------------------------------------------------                  
    public postpone_service_till_reference_services_ended( aNewSchedule : amCronSchedule.am_nonrenderingservices.AE_CronSchedule) : boolean
    {
      var self = this;
      var bPostpone = false;
      var refServiceCronSchedule : amCronSchedule.am_nonrenderingservices.AE_CronSchedule = null;
      //-------------------------
      var aServiceConstraintList: Array<amServiceConstraint.am_general.AE_ServiceConstraint> = aNewSchedule.getScheduleInfo().getServiceConstraintList();
      //----------------------------- aServiceConstraintList
      for (let crtServiceConstraint of aServiceConstraintList) 
      {
        if (crtServiceConstraint.getServiceConstraintType() != amServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_PostponeRunTillReferenceServiceEnded)
          continue ;
        refServiceCronSchedule = self.getCronScheduleByServiceAbstractName(crtServiceConstraint.getReferenceServiceAbstractName());
        //-----------------------------
        if (refServiceCronSchedule == null)
          continue;
        //--------
        if (refServiceCronSchedule.getCrtService() != null)
        {
          bPostpone = true;
          refServiceCronSchedule.getCrtService()._iServiceRun.addPostponedServiceAbstractName(aNewSchedule.getScheduleInfo().getServiceAbstractName());
        }
      }
      return bPostpone;
    }

    //==================================================
    //   start next services - when service end
    //==================================================

    //===================================================
    public should_start_next_service_when_current_service_ended( nextServiceConstraint: amServiceConstraint.am_general.AE_ServiceConstraint,
                                                                 endedServiceStatus : string) : boolean
    {
      if (nextServiceConstraint.getServiceConstraintType() != amServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_RunReferenceServiceAtTheEndForStatus)
        return false;

      if (nextServiceConstraint.getCurrentServiceStatus() == "status_all")
        return true;

      if (nextServiceConstraint.getCurrentServiceStatus() == endedServiceStatus)
        return true;

      return false;
    }

    //-------------------------------------------------                  
    public start_all_next_services_when_current_service_ended( endedService: amGeneralService.am_general.A_Service,
                                                                    endedServiceSchedule : amCronSchedule.am_nonrenderingservices.AE_CronSchedule,    
                                                                    endedServiceStatus : string, 
                                                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      //-----------------------
      var self = this;
      var atStartup = false;
      //-------------------------
      var aServiceConstraintList: Array<amServiceConstraint.am_general.AE_ServiceConstraint> = endedServiceSchedule.getScheduleInfo().getServiceConstraintList();
      var nbConstraints:number = aServiceConstraintList.length;
      var startConstraintIdx = 0;
      //---
      var callbackOneConstraint = function callbackOneConstraint(crtConstraintIdx: number, ctx1: amGeneralContext.am_general.A_Context)
      {
        //-------- succesfully interrupt all service in constraints
        if (crtConstraintIdx + 1 > nbConstraints)
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
        var crtServiceConstraint:amServiceConstraint.am_general.AE_ServiceConstraint = aServiceConstraintList[crtConstraintIdx];
        
        var callbackConstraint = function callbackConstraint(ctx2: amGeneralContext.am_general.A_Context)
        {
          var bScheduledWell = ctx2.getBoolResult();
          if (! bScheduledWell)//ctx2.isError())
          {
            context.setError(error);
            context.setObjectResult(null);
            //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
            if (callback != null)
              callback(context);  
            return;  
          }  
          //-------------- 
          //document.getElementById("rend.message").innerHTML = "<p>Start schedule :  " + crtScheduleIdx +  "</p>";  
          return callbackOneConstraint(++crtConstraintIdx, ctx2);
        }
        //=======================================            
        if (self.should_start_next_service_when_current_service_ended(crtServiceConstraint, endedServiceStatus))   
        {      
          var refServiceCronSchedule = self.getCronScheduleByServiceAbstractName(crtServiceConstraint.getReferenceServiceAbstractName());
          //----------------------------
          if (refServiceCronSchedule == null)
            return callbackOneConstraint(++crtConstraintIdx, ctx1);

          return self.start_one_service_instance(refServiceCronSchedule,  atStartup, error, ctx1, callbackConstraint) ; 
        }else{
          return callbackOneConstraint(++crtConstraintIdx, ctx1);
        }

      }

      callbackOneConstraint(startConstraintIdx, context);
    }


    //==================================================
    //   start all postponed services - when current service end
    //==================================================


    //-------------------------------------------------                  
    public start_all_postponed_services_when_current_service_ended( endedService: amGeneralService.am_general.A_Service,
                                                                    endedServiceSchedule : amCronSchedule.am_nonrenderingservices.AE_CronSchedule,    
                                                                    endedServiceStatus : string, 
                                                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      //-----------------------
      var self = this;
      var atStartup = false;
      //-------------------------
      var aServiceAbstractNameList: Array<string> = endedService._iServiceRun.getPostponedServiceAbstractNameList();
      var nbServices:number = aServiceAbstractNameList.length;
      var startServiceIdx = 0;
      //---
      var callbackOneService = function callbackOneService(crtServiceIdx: number, ctx1: amGeneralContext.am_general.A_Context)
      {
        //-------- succesfully interrupt all service in constraints
        if (crtServiceIdx + 1 > nbServices)
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
        var crtServiceAbstractName:string = aServiceAbstractNameList[crtServiceIdx];
        
        var callbackService = function callbackService(ctx2: amGeneralContext.am_general.A_Context)
        {
          var bScheduledWell = ctx2.getBoolResult();
          if (! bScheduledWell)//ctx2.isError())
          {
            context.setError(error);
            context.setObjectResult(null);
            //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
            if (callback != null)
              callback(context);  
            return;  
          }  
          //-------------- 
          //document.getElementById("rend.message").innerHTML = "<p>Start schedule :  " + crtScheduleIdx +  "</p>";  
          return callbackOneService(++crtServiceIdx, ctx2);
        }
        //=======================================
        var refServiceCronSchedule = self.getCronScheduleByServiceAbstractName(crtServiceAbstractName);
        //-----------------------------
        if (refServiceCronSchedule == null)
          return callbackOneService(++crtServiceIdx, ctx1);

        //-----------------------------
        return self.start_one_service_instance(refServiceCronSchedule,  atStartup, error, ctx1, callbackService) ; 

      }

      callbackOneService(startServiceIdx, context);
    }


    //======================================
    //   main logic 
    //---------------------------------------
    //  ======================================================================
    //  A. a DownloadPlaylist Service is started
    //--------------  startup
    //  1.  run at startup = true, startup_priority = 1, wait_at_startup_to_finish = true        (startup)
    //-------------- schedule                                                                    
    //  2.  schedule_type = on_time_interval                                                     (schedule)   
    //--------------- constraints with other services
    //  3.  Start a PlaylistController service when ended in an "playlist_changed" status        (constraint) 
    //  4.  Interrupt another DownloadHtmlTemplate Service  if a DownloadHtmlTemplate is ongoing (constraint)
    //-------------- bCannotRunIfOtherServiceInstanceRun = true
    //  5.  Interrupt another DownloadPlaylist Service  if a DownloadPlaylist is ongoing
    //-------------------------------------------
    //
    //  ======================================================================
    //  B. DownloadHtmlTemplate Service is started (->can have feeds news) 
    //  -------------
    //  1.  run at startup = false 
    //  -------------
    //  2.  schedule_type = on_time_interval
    //  -------------
    //  3.  Run only after the end of DownloadPlaylist ended if a DownloadPlaylist is ongoing
    //  ---------------
    //  4.  Don't start if another DownloadHtml TemplateService is ongoing
    //
    //
    //------------------------------------------
    //  C. a PlaylistControllerService Service is started
    //------------------------------------------
    //--------------  startup
    //  1.  run at startup = true, startup_priority = 2, wait_at_startup_to_finish = false
    //-------------- schedule
    //  2.  schedule_type = none
    //--------------- constraints with other services
    //  none
    //--------------- bCannotRunIfOtherServiecInstanceRun = true
    //  3.  Interrupt another PlaylistControllerService Service if another PlaylistControllerService is ongoing
    //======================================





    //-------------------------------------------------                  
    public new_service_instance_ended(endedService: amGeneralService.am_general.A_Service,
                                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      //---------------------------------
      if (endedService == null)
      {
        if (callback != null)
        {
          context.setBoolResult(true);
          return callback(context);
        }
        return ;
      }
      var endedServiceStatus : string = endedService._iServiceRun.getServiceStatus();
      //
      var endedServiceSchedule: amCronSchedule.am_nonrenderingservices.AE_CronSchedule 
                       = self.getCronScheduleByServiceAbstractName(endedService._iService.getAbstractName());
      //-----------------------------------                       
      if (endedServiceSchedule == null)
      {
        if (callback != null)
        {
          context.setBoolResult(true);
          return callback(context);
        }
        return;
      }
      endedServiceSchedule.setCrtService(null);
      endedServiceSchedule.setPrevService(null);
      //--------------------------------
      var errorStartNextServices:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextStartNextServices:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext(); 
      var callbackStartNextServices = function callbackStartNextServices()         
      {
        var errorStartPostponedServices:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextPostponedServices:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();          
        var callbackStartPostponedServices = function callbackStartPostponedServices()
        {
          if (callback != null)
          {
            context.setBoolResult(true);
            return callback(context);
          }
        }  
        //==================================
        self.start_all_postponed_services_when_current_service_ended(endedService, endedServiceSchedule, endedServiceStatus, 
                                                                   errorStartPostponedServices, contextPostponedServices, callbackStartPostponedServices);
      }
      //==================================
      self.start_all_next_services_when_current_service_ended(endedService, endedServiceSchedule, endedServiceStatus, 
                                                                errorStartNextServices, contextStartNextServices, callbackStartNextServices);
      
    }


    //-------------------------------------------------                  
    public new_service_instance_start( aCronSchedule: amCronSchedule.am_nonrenderingservices.AE_CronSchedule, 
                                       error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
       var self = this;
       //-----------------------------
       var errorRun:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
       var contextRun:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
       var errorShutdown:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
       var contextShutdown:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  

       //----------------- save crt to prev 
       aCronSchedule.setPrevService(aCronSchedule.getCrtService());
       aCronSchedule.setCrtService(null);
       //----------------- create new service instance
       var aNewService = self.create_new_service_instance(aCronSchedule);
       aCronSchedule.setCrtService(aNewService);
       //----------------- 
       var callbackShutdownPrevService = function callbackShutdownPrevService()
       {
         //==================== start new service instance
         var callbackNaturalEnd = function callbackShutdownPrevService(ctxNaturalEnd)
         {
            var endedService = ctxNaturalEnd.getObject2Result();

            if (self._aActivityLogService != null)
            {
              self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                                amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                                endedService._iService.getServiceName() + " instance: " + endedService._iService.getInstanceName() 
                                                          + "  ---------- natural end - " + endedService._iService.getServiceName(), null, null, null);
            }
            if (self._debug)
            {
              document.getElementById("rend.message").innerHTML += "<p>" + endedService._iService.getServiceName() + " instance: " + endedService._iService.getInstanceName() 
                                                          + "  ---------- natural end - " + endedService._iService.getServiceName() + "</p>";
              console.log(endedService._iService.getServiceName() + " instance: " + endedService._iService.getInstanceName() 
                                                          + "  ---------- natural end - " + endedService._iService.getServiceName());
            }
    
            //------------------------                                                                                      
            if (endedService == null)           
            {
              if (callback != null)
              {
                context.setBoolResult(true);
                return callback(context);
              }
            }                                                                           
            //----------------- 
            var errorNewServicenstanceEnded:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
            var contextNewServicenstanceEnded:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();          
            var callbackNewServiceInstanceEnded = function callbackNewServicenstanceEnded()
            {
              if (callback != null)
              {
                context.setBoolResult(true);
                return callback(context);
              }
            }
            //==========================
            self.new_service_instance_ended(endedService, errorNewServicenstanceEnded, contextNewServicenstanceEnded, callbackNewServiceInstanceEnded);
         }

         if (self._aActivityLogService != null)
         {
           self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                             amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                             aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                                              + "  ---------- start - " + aCronSchedule.getCrtService()._iService.getServiceName(), null, null, null);
         }
         if (self._debug)
         {
           document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                                              + "  ---------- start - " + aCronSchedule.getCrtService()._iService.getServiceName() + "</p>";
           console.log(aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                                              + "  ---------- start - " + aCronSchedule.getCrtService()._iService.getServiceName());
         }

         aCronSchedule.getCrtService()._iServiceRun.run(errorRun, contextRun, callbackNaturalEnd);
       }

       //==================== shutdown prev service instance - if exists
       if (aCronSchedule.getPrevService() == null)
       {
         callbackShutdownPrevService();    
       }else{
          if (self._aActivityLogService != null)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                              amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                              aCronSchedule.getPrevService()._iService.getServiceName() + " instance: " + aCronSchedule.getPrevService()._iService.getInstanceName() 
                                                               + "  ---------- shutdown by interruption - " + aCronSchedule.getPrevService()._iService.getServiceName(), null, null, null);
          }
          if (self._debug)
          {
            document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getPrevService()._iService.getServiceName() + " instance: " + aCronSchedule.getPrevService()._iService.getInstanceName() 
                                                               + "  ---------- shutdown by interruption - " + aCronSchedule.getPrevService()._iService.getServiceName() + "</p>";
            console.log(aCronSchedule.getPrevService()._iService.getServiceName() + " instance: " + aCronSchedule.getPrevService()._iService.getInstanceName() 
                                                               + "  ---------- shutdown by interruption - " + aCronSchedule.getPrevService()._iService.getServiceName());
          }

         aCronSchedule.getPrevService()._iServiceRun.shutdown(errorShutdown, contextShutdown, callbackShutdownPrevService);
       }
    }


    //============================================
    public start_one_service_instance( aCronSchedule: amCronSchedule.am_nonrenderingservices.AE_CronSchedule, atStartup: boolean,
                                       error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      //---------------------------------
      var self = this;
      //------------------------------ test
      if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_TestService")
      {
         var a = 1;
      }
      //---------------------------------
      if ( self.can_run_a_new_service_if_reference_services_run(aCronSchedule) == false)
      {
        if (callback != null)
        {
          context.setBoolResult(true);
          return callback(context);
        }
        return;
      }
      //---------------------------------
      if (self.postpone_service_till_reference_services_ended(aCronSchedule) == true)
      {
        if (callback != null)
        {
          context.setBoolResult(true);
          return callback(context);
        }
        return;
      }      
      //-----------------------------
      var errorInterruptReferences:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextInterruptReferences:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();        
      //---------------------------------
      if (self._aActivityLogService != null)
      {
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                          amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                          aCronSchedule.getScheduleInfo().getServiceName() + " - start new schedule instance", null, null, null);
      }
      if (self._debug)
      {
        document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getScheduleInfo().getServiceName() + " - start new schedule instance" + "</p>";
        console.log(aCronSchedule.getScheduleInfo().getServiceName() + " - start new schedule instance");
      }

      //-----------
      var callbackInterruptReferences = function callbackInterruptReferences(ctx1)
      {

        //------------------------------------------
        var callbackInterruptCrtService = function callbackInterruptCrtService()
        {
          if (self._aActivityLogService != null)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                              amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                              aCronSchedule.getScheduleInfo().getServiceName() + " - start new service instance", null, null, null);
          }
          if (self._debug)
          {
            document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getScheduleInfo().getServiceName() + " - start new service instance" + "</p>";
            console.log(aCronSchedule.getScheduleInfo().getServiceName() + " - start new service instance");
          }
    
          //------------------------ not at startup
          if (! atStartup)
          {
            //==============================
            self.new_service_instance_start(aCronSchedule, null, null, null);
            if (callback != null)
            {
              context.setBoolResult(true);
              return callback(context);
            }

          //-------------------------- don't wait at startup to finish
          }else if ( ! aCronSchedule.getScheduleInfo().getScheduleAtStartup_waitAtStartupToFinish())
          {
            //==============================
            self.new_service_instance_start(aCronSchedule, null, null, null);
            if (callback != null)
            {
              context.setBoolResult(true);
              return callback(context);
            }

          //------------------------ wait at startup to finish
          }else{
            var callbackStartupFinished = function callbackStartupFinished()
            {
              if (callback != null)
              {
                context.setBoolResult(true);
                return callback(context);
              }
            }
            //=============================
            self.new_service_instance_start(aCronSchedule, error, context, callbackStartupFinished);
          }
        }
        //==============================
        if (aCronSchedule.getScheduleInfo().getSchedule_runOnlyOneInstanceOnce())
        {
          //-------------------------------------------
          if (aCronSchedule.getCrtService() != null)
          {
            aCronSchedule.getCrtService()._iServiceRun.setInterruptCallback(callbackInterruptCrtService);
          }else{
            callbackInterruptCrtService();
          }
        }else{
          callbackInterruptCrtService();
        }
      }
      //============================== 
      self.interrupt_all_reference_services_for_new_schedule( aCronSchedule,                                     
                                                              errorInterruptReferences, contextInterruptReferences, callbackInterruptReferences)


    }


    //===============================
    //  startup methods
    //===============================

    //-------------------------------------------------                  
    public run_all_startup_services( aCronScheduleList: Array<amCronSchedule.am_nonrenderingservices.AE_CronSchedule>, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      var atStartup = true;
      var nbSchedules:number = aCronScheduleList.length;
      var startScheduleIdx = 0;
      //---
      var callbackOneStartupInstance = function callbackOneStartupInstance(crtScheduleIdx: number, ctx1: amGeneralContext.am_general.A_Context,
                                                                           ctxCrtCronSchedule:amCronSchedule.am_nonrenderingservices.AE_CronSchedule)
      {
        //-------------------------- ma3
        if (ctxCrtCronSchedule!= null)
        {
          if (ctxCrtCronSchedule.getScheduleInfo().getServiceAbstractName() == "A_PlaylistController")
          {
            document.getElementById("background01").style.display = "block";
            document.getElementById("splash_id").style.display = "none";
          }
        }  

        //-------- succesfully scheduled all cron schedule
        if (crtScheduleIdx + 1 > nbSchedules)
        {
          context.setBoolResult(true);
          if (self._aActivityLogService != null)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                              amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                              "Successfully startup all service instances", null, null, null);
          }
          if (self._debug)
          {
            document.getElementById("rend.message").innerHTML += "<p>" + "Successfully startup all service instances" + "</p>";
            console.log( "Successfully startup all service instances"); 
          }

          context.setError(error);
          //document.getElementById("renderer.message").innerHTML += "<p>success: " + crtFileIdx  + "</p>";
          if (callback != null)
            callback(context);  
          return ; 
        }
        //---------------------------
        var crtCronSchedule:amCronSchedule.am_nonrenderingservices.AE_CronSchedule = aCronScheduleList[crtScheduleIdx];
        
        var callbackStartupSchedule = function callbackStartupSchedule(ctx2: amGeneralContext.am_general.A_Context)
        {
          var bScheduledWell = ctx2.getBoolResult();
          if (! bScheduledWell)//ctx2.isError())
          {
            context.setError(error);
            context.setObjectResult(null);
            //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
            if (callback != null)
              callback(context);  
            return;  
          }  
          //-------------- 
          //document.getElementById("rend.message").innerHTML = "<p>Startup instance :  " + crtScheduleIdx +  "</p>";  
          return callbackOneStartupInstance(++crtScheduleIdx, ctx2, crtCronSchedule);
        }
        //=======================================
        if (crtCronSchedule.getScheduleInfo().getScheduleAtStartup_runAtStartup())
        {
          self.start_one_service_instance( crtCronSchedule,  atStartup, error, ctx1, callbackStartupSchedule) ;
        }else{
          callbackOneStartupInstance(++crtScheduleIdx, ctx1, null);
        }
      }

      callbackOneStartupInstance(startScheduleIdx, context, null);
    }


    //===============================
    //  cron schedule methods
    //===============================

    //-------------------------------------------------                  
    public start_one_cron_schedule( aCronSchedule: amCronSchedule.am_nonrenderingservices.AE_CronSchedule, 
                                    error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      var atStartup = false;
      var timeIntervalMs : number = aCronSchedule.getScheduleInfo().getScheduleTimeInterval_repeatIntervalInSeconds() * 1000;
      if (self._aActivityLogService != null)
      {
        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                          amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                          "Start Schedule for Service: " + aCronSchedule.getScheduleInfo().getServiceAbstractName()  + " - each " +  timeIntervalMs + "ms", null, null, null);
      }
      if (self._debug)
      {
        document.getElementById("rend.message").innerHTML += "<p>" + "Start Schedule for Service: " + aCronSchedule.getScheduleInfo().getServiceAbstractName()  + " - each " +  timeIntervalMs + "ms" + "</p>";
        console.log("Start Schedule for Service: " + aCronSchedule.getScheduleInfo().getServiceAbstractName()  + " - each " +  timeIntervalMs + "ms");
      }

      if  (  (aCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Daily) 
          || (aCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Weekly) 
          || (aCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Monthly) 
          || (aCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Once) 
        ) //am .ScheduleType_None)
     {
         //--------------------------------
         var timerId = window.setTimeout( function(){ self.start_one_service_instance(aCronSchedule, atStartup, null, null, null); }, //function(){ alert("Hello"); }, 
                                                      timeIntervalMs);
         //var aCrtService = aCronSchedule.getCrtService();
         //aCronSchedule.getCrtService()._iServiceRun.run(null, null, null); 
         //var timerId = window.setTimeout( function(){ aCronSchedule.getCrtService()._iServiceRun.run(null, null, null); }, //function(){ alert("Hello"); }, 
         //                                  timeIntervalMs);
         
         aCronSchedule.setTimerId(timerId);

     }else{
       if ((aCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_AtTimeInterval) )
       {
         //--------------------------------
         var timerId = window.setInterval( function(){ self.start_one_service_instance(aCronSchedule, atStartup, null, null, null); }, //function(){ alert("Hello"); }, 
                                           timeIntervalMs);
         aCronSchedule.setTimerId(timerId);

       }
     }

      //---------------------------
      if (callback != null)
      {
        context.setBoolResult(true);
        callback(context);  
        return;
      }
    }


    //-------------------------------------------------                  
    public start_all_cron_schedules( aCronScheduleList: Array<amCronSchedule.am_nonrenderingservices.AE_CronSchedule>, 
                                     error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      var nbSchedules:number = aCronScheduleList.length;
      var startScheduleIdx = 0;
      //---
      var callbackOneCronSchedule = function callbackOneCronSchedule(crtScheduleIdx: number, ctx1: amGeneralContext.am_general.A_Context)
      {
        //-------- succesfully scheduled all cron schedule
        if (crtScheduleIdx + 1 > nbSchedules)
        {
          context.setBoolResult(true);
          
          if (self._aActivityLogService != null)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                              amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                              "Successfully scheduled all cron schedules", null, null, null);
          }
          if (self._debug)
          {
            document.getElementById("rend.message").innerHTML += "<p>" + "Successfully scheduled all cron schedules"  + "</p>";
            console.log( "Successfully scheduled all cron schedules"); 
          }    
          context.setError(error);
          //document.getElementById("renderer.message").innerHTML += "<p>success: " + crtFileIdx  + "</p>";
          if (callback != null)
            callback(context);  
          return ; 
        }
        //---------------------------
        var crtCronSchedule:amCronSchedule.am_nonrenderingservices.AE_CronSchedule = aCronScheduleList[crtScheduleIdx];
        
        var callbackCronSchedule = function callbackCronSchedule(ctx2: amGeneralContext.am_general.A_Context)
        {
          var bScheduledWell = ctx2.getBoolResult();
          if (! bScheduledWell)//ctx2.isError())
          {
            context.setError(error);
            context.setObjectResult(null);
            //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
            if (callback != null)
              callback(context);  
            return;  
          }  
          //-------------- 
          //document.getElementById("rend.message").innerHTML = "<p>Start schedule :  " + crtScheduleIdx +  "</p>";  
          return callbackOneCronSchedule(++crtScheduleIdx, ctx2);
        }
        //=======================================
        if (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_AtTimeInterval) //am .ScheduleType_None)
        {
          self.start_one_cron_schedule( crtCronSchedule,  error, ctx1, callbackCronSchedule) ; 
        }else{
          callbackOneCronSchedule(++crtScheduleIdx, ctx1);
        }

      }

      callbackOneCronSchedule(startScheduleIdx, context);
    }


    //===============================
    //  main methods
    //===============================

    //--------------------------------------------------
    public startup_schedule(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      //-----------------------------
      self.create_all_schedules(error, context);
      //-----------------------------
      var errorRunAllStartupServices:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextRunAllStartupServices:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackRunAllStartupServices = function callbackRunAllStartupServices()
      {
        //-----------------------------
        var errorStartAllCronSchedules:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
        var contextStartAllCronSchedules:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
        var callbackStartAllCronSchedules = function callbackStartAllCronSchedules()
        {
           //-----------------------------
           var errorStartAllDailyWeeklyMonthlyCronSchedules:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
           var contextStartAllDailyWeeklyMonthlyCronSchedules:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
           var callbackStartAllDailyWeeklyMonthlyCronSchedules = function callbackStartAllDailyWeeklyMonthlyCronSchedules()
           {
             //------------------
             self.schedule_midnight_timer(error, context, null);
    
             //------------------ end - Ok
             if (context != null)
             {
               context.setError(error);
               context.setBoolResult(true);
               return callback(context);  
             }
          }
          //==============================================
          contextStartAllDailyWeeklyMonthlyCronSchedules.setRemoteCallback(true);
          var bAtStartup = true;
          self.start_all_daily_weekly_monthly_cron_schedules( self._aCronScheduleList, bAtStartup,
                        errorStartAllDailyWeeklyMonthlyCronSchedules, contextStartAllDailyWeeklyMonthlyCronSchedules, callbackStartAllDailyWeeklyMonthlyCronSchedules);  
        }
        //================================================
        contextStartAllCronSchedules.setRemoteCallback(true);
        self.start_all_cron_schedules( self._aCronScheduleList, 
                                       errorStartAllCronSchedules, contextStartAllCronSchedules, callbackStartAllCronSchedules);
      }   
      //================================================
      contextRunAllStartupServices.setRemoteCallback(true);
      self.run_all_startup_services( self._aCronScheduleList,
                                     errorRunAllStartupServices, contextRunAllStartupServices, callbackRunAllStartupServices); 
     
    }
    
    //------------------------------------
    public shutdown_schedule(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
          
    }

    //===============================
    //  new features
    //==============================

    //==================================
    public getSDKGoodCrtDate() : Date
    {
      if (this._aSDKService != null)
        return this._aSDKService._iSDKTimeSetup.getSyncGoodCrtDateTime(null, null);
      return new Date();  
    }

    
    //-------------------------------------------------                  
    public start_midnight_timer() : number
    {
      var self = this;
      //-----------------------------
      var errorStartAllDailyWeeklyMonthlyCronSchedules:amGeneralError.am_general.A_Error       = self._aServiceLocator._iEntityCreation.createDefaultError();   
      var contextStartAllDailyWeeklyMonthlyCronSchedules:amGeneralContext.am_general.A_Context = self._aServiceLocator._iEntityCreation.createDefaultContext();  
      var callbackStartAllDailyWeeklyMonthlyCronSchedules = function callbackStartAllDailyWeeklyMonthlyCronSchedules()
      {
        //------------------
        self.schedule_midnight_timer(errorStartAllDailyWeeklyMonthlyCronSchedules, contextStartAllDailyWeeklyMonthlyCronSchedules, null);
    
      }
      //==============================================
      contextStartAllDailyWeeklyMonthlyCronSchedules.setRemoteCallback(true);
      var bAtStartup = false;
      self.start_all_daily_weekly_monthly_cron_schedules( self._aCronScheduleList, bAtStartup,
                        errorStartAllDailyWeeklyMonthlyCronSchedules, contextStartAllDailyWeeklyMonthlyCronSchedules, callbackStartAllDailyWeeklyMonthlyCronSchedules);  
      
      return 0;
    }

    
    //-------------------------------------------------                  
    public schedule_midnight_timer(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : number
    {
      var crtTime = new Date();
      var scheduleTime = new Date(
          crtTime.getFullYear(),
          crtTime.getMonth(),
          crtTime.getDate() + 1, // the next day, ...
          0, 
          0, 
          1,  // ...at hh:mm:ss hours
      );
      var self = this;
      var msTillScheduleInMilSec = scheduleTime.getTime() - crtTime.getTime();
      //msTillScheduleInMilSec = 10000; //for test only
      //--------------------------------
      var timerId = window.setTimeout( function(){ self.start_midnight_timer(); }, //function(){ alert("Hello"); }, 
                                       msTillScheduleInMilSec);

      return 1;
    }


    //-------------------------------------------------                  
    public daily_schedule_must_start( crtCronSchedule: amCronSchedule.am_nonrenderingservices.AE_CronSchedule, 
                                      error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : boolean
    {
      var iAtHour   = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtHour();
      var iAtMinute = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtMinute();
      var iAtSecond = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtSecond();
      var crtTime = new Date();
      var scheduleTime = new Date(
          crtTime.getFullYear(),
          crtTime.getMonth(),
          crtTime.getDate(), // the next day, ...
          iAtHour, 
          iAtMinute, 
          iAtSecond,  // ...at hh:mm:ss hours
      );
      var msTillScheduleInMilSec = scheduleTime.getTime() - crtTime.getTime();
      if (msTillScheduleInMilSec < 0)
        return false;
      var msTillScheduleInSec = msTillScheduleInMilSec / 1000;  
      crtCronSchedule.getScheduleInfo().setScheduleTimeInterval_repeatIntervalInSeconds(msTillScheduleInSec); 
      return true;
    }


    //-------------------------------------------------                  
    public weekly_schedule_must_start( crtCronSchedule: amCronSchedule.am_nonrenderingservices.AE_CronSchedule, 
                                       error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : boolean
    {
      var crtTime = new Date();
      var iWeekDay = crtTime.getDay(); //0-6
      var strWeekDaysAvailability = crtCronSchedule.getScheduleInfo().getScheduleAvailability_strInWeekdays();
      if (strWeekDaysAvailability == null)
        return false;
      if (strWeekDaysAvailability.length < 7)
        return false;
      var strCrtDayAvalability   = strWeekDaysAvailability.substring(iWeekDay,iWeekDay+1);
      if (strCrtDayAvalability != "1")
        return false;

      var iAtHour   = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtHour();
      var iAtMinute = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtMinute();
      var iAtSecond = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtSecond();
      var crtTime = new Date();
      var scheduleTime = new Date(
          crtTime.getFullYear(),
          crtTime.getMonth(),
          crtTime.getDate(), // the next day, ...
          iAtHour, 
          iAtMinute, 
          iAtSecond,  // ...at hh:mm:ss hours
      );
      var msTillScheduleInMilSec = scheduleTime.getTime() - crtTime.getTime();
      if (msTillScheduleInMilSec < 0)
        return false;
      var msTillScheduleInSec = msTillScheduleInMilSec / 1000;  
      crtCronSchedule.getScheduleInfo().setScheduleTimeInterval_repeatIntervalInSeconds(msTillScheduleInSec); 
      return true;
    }


    //-------------------------------------------------                  
    public monthly_schedule_must_start( crtCronSchedule: amCronSchedule.am_nonrenderingservices.AE_CronSchedule, 
                                        error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : boolean
    {
      var crtTime = new Date();
      var iDayOfMonth = crtTime.getDate(); //0-6
      var iAtDay = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtDay();
      if (iAtDay == 0)
      {
        var lastDayOfMonth = new Date(crtTime.getFullYear(), crtTime.getMonth()+1, 0);
        iAtDay = lastDayOfMonth.getDate();
      }
      if (iDayOfMonth != iAtDay)
        return false;

      var iAtHour   = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtHour();
      var iAtMinute = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtMinute();
      var iAtSecond = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtSecond();
      var crtTime = new Date();
      var scheduleTime = new Date(
          crtTime.getFullYear(),
          crtTime.getMonth(),
          crtTime.getDate(), // the next day, ...
          iAtHour, 
          iAtMinute, 
          iAtSecond,  // ...at hh:mm:ss hours
      );
      var msTillScheduleInMilSec = scheduleTime.getTime() - crtTime.getTime();
      if (msTillScheduleInMilSec < 0)
        return false;
      var msTillScheduleInSec = msTillScheduleInMilSec / 1000;  
      crtCronSchedule.getScheduleInfo().setScheduleTimeInterval_repeatIntervalInSeconds(msTillScheduleInSec); 
      return true;
    }


    //-------------------------------------------------                  
    public only_once_schedule_must_start( crtCronSchedule: amCronSchedule.am_nonrenderingservices.AE_CronSchedule, 
                                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : boolean
    {
      return false;
    }


    //-------------------------------------------------                  
    public schedule_must_start( crtCronSchedule: amCronSchedule.am_nonrenderingservices.AE_CronSchedule, 
                                bAtStartupDaySchedule : boolean,
                                error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : boolean
    {
      if (bAtStartupDaySchedule)
      {
        if (crtCronSchedule.getScheduleInfo().getScheduleStart_bStartAlsoInTheSameDayAsStartAppDay() == false)
        {
          return false;
        }
      }
      var self = this;
      if  (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Daily) 
        return self.daily_schedule_must_start(crtCronSchedule, error, context, callback);

      if (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Weekly) 
        return self.weekly_schedule_must_start(crtCronSchedule, error, context, callback);

      if (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Monthly) 
        return self.monthly_schedule_must_start(crtCronSchedule, error, context, callback);

      if (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Once) 
        return self.monthly_schedule_must_start(crtCronSchedule, error, context, callback);

      return false;
    }
    
    //-------------------------------------------------                  
    public start_all_daily_weekly_monthly_cron_schedules( aCronScheduleList: Array<amCronSchedule.am_nonrenderingservices.AE_CronSchedule>, 
                                                          bAtStartupDaySchedule : boolean,
                                                          error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    {
      var self = this;
      var nbSchedules:number = aCronScheduleList.length;
      var startScheduleIdx = 0;
      //---
      var callbackOneCronSchedule = function callbackOneCronSchedule(crtScheduleIdx: number, ctx1: amGeneralContext.am_general.A_Context)
      {
        //-------- succesfully scheduled all cron schedule
        if (crtScheduleIdx + 1 > nbSchedules)
        {
          context.setBoolResult(true);
          
          if (self._aActivityLogService != null)
          {
            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(
                              amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(),
                              "Successfully scheduled all daily, weekly, monthly cron schedules", null, null, null);
          }
          if (self._debug)
          {
            document.getElementById("rend.message").innerHTML += "<p>" + "Successfully scheduled all all daily, weekly, monthly cron schedules"  + "</p>";
            console.log( "Successfully scheduled all all daily, weekly, monthly cron schedules"); 
          }    
          context.setError(error);
          //document.getElementById("renderer.message").innerHTML += "<p>success: " + crtFileIdx  + "</p>";
          if (callback != null)
            callback(context);  
          return ; 
        }
        //---------------------------
        var crtCronSchedule:amCronSchedule.am_nonrenderingservices.AE_CronSchedule = aCronScheduleList[crtScheduleIdx];
        
        var callbackCronSchedule = function callbackCronSchedule(ctx2: amGeneralContext.am_general.A_Context)
        {
          var bScheduledWell = ctx2.getBoolResult();
          if (! bScheduledWell)//ctx2.isError())
          {
            context.setError(error);
            context.setObjectResult(null);
            //document.getElementById("rend.message").innerHTML += "<p>callbackReadTextFile2: "  + JSON.stringify(ctx3._error) + "</p>";  
            if (callback != null)
              callback(context);  
            return;  
          }  
          //-------------- 
          //document.getElementById("rend.message").innerHTML = "<p>Start schedule :  " + crtScheduleIdx +  "</p>";  
          return callbackOneCronSchedule(++crtScheduleIdx, ctx2);
        }
        //=======================================
        if  (  (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Daily) 
            || (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Weekly) 
            || (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Monthly) 
            || (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Once) 
            ) //am .ScheduleType_None)
        {
          if (self.schedule_must_start(crtCronSchedule, bAtStartupDaySchedule, error, ctx1, null) == true)
          {
            self.start_one_cron_schedule( crtCronSchedule,  error, ctx1, callbackCronSchedule) ; 
          }else{
            callbackOneCronSchedule(++crtScheduleIdx, ctx1);
          }
        }else{
          callbackOneCronSchedule(++crtScheduleIdx, ctx1);
        }

      }

      callbackOneCronSchedule(startScheduleIdx, context);
    }

  }
} 

