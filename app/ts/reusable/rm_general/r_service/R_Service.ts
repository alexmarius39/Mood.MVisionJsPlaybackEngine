import amGeneral       = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralIService = require("../../../../../app/ts/abstract/am_general/a_service/I_Service");
import amGeneralIRemoteService = require("../../../../../app/ts/abstract/am_general/a_service/I_RemoteService");
import amGeneralIServiceRun = require("../../../../../app/ts/abstract/am_general/a_service/I_Service_Run");
import amGeneral3       = require("../../../../../app/ts/abstract/am_general/a_factorydescription/A_FactoryDescription");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralService    = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");
import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralProperties = require("../../../../../app/ts/abstract/am_general/a_property/A_Properties");
import amGeneralConfig  = require("../../../../../app/ts/abstract/am_general/ae_config/AE_Config");

import amTransversalServicesLogService         = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amConfigurationServicesServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amConfigurationServicesServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amTransversalServicesUtilsService    = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/A_UtilsService");
import amTransversalServicesSDKService    = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");

import amTransversalServices   = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");
import amConfigurationServices = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");


import amGeneralIServiceConfig = require("../../../../../app/ts/abstract/am_general/a_service/I_Service_Config");

import rmGeneralIService       = require("../../../../../app/ts/reusable/rm_general/r_service/IImpl_Service_R");
import rmGeneralIRemoteService = require("../../../../../app/ts/reusable/rm_general/r_service/IImpl_RemoteService_R");
import rmGeneralIServiceConfig = require("../../../../../app/ts/reusable/rm_general/r_service/IImpl_Service_Config");
import rmGeneralIServiceRun    = require("../../../../../app/ts/reusable/rm_general/r_service/IImpl_Service_Run");

export module rm_general
{
  export class R_Service implements amGeneral.am_general.A_Service
  {
    //---------- properties
    _name;
    _aFactoryDescription : amGeneral3.am_general.A_FactoryDescription; 

    //----------- composants 
    _aLogService       : amTransversalServices.am_transversalservices.A_LogService; 
    _aServiceContainer : amConfigurationServices.am_configurationservices.A_ServiceContainer; 
    _aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator; 
    _aTargetService    : amGeneralService.am_general.A_Service; 
    _aConsumerService  : amGeneralService.am_general.A_Service; 
    _aOwnerService     : amGeneralService.am_general.A_Service; 

    _aUtilsService     : amTransversalServicesUtilsService.am_transversalservices.A_UtilsService; 
    _aSDKService       : amTransversalServicesSDKService.am_transversalservices.A_SDK_JsTV; 

    //---------- interfaces
    _iService       : amGeneralIService.am_general.I_Service ;
    _iServiceConfig : amGeneralIServiceConfig.am_general.I_Service_Config ;
    _iRemoteService : amGeneralIRemoteService.am_general.I_RemoteService ;
    _iServiceRun    : amGeneralIServiceRun.am_general.I_Service_Run ;

    //-----------
    _callbackArray: Array<any>;
    _callbackId: number;
    _isRemoteCallback: boolean;

    //---------------
    _mainDebug : boolean;
    _debug : boolean;
    _debugScenarioNumber : number;

    //--------------------------------
    _interruptCallback : any;
    _isInterrupted : boolean;

    _serviceStatus : string;
    _aPostponeServiceAbstractNameList : Array<string>;

    _service_abstract_name : string; 
    _service_name          : string ;

    //----------- constructor 
    constructor(aFactoryDescription: amGeneral3.am_general.A_FactoryDescription, 
                aServiceContainer  : amConfigurationServices.am_configurationservices.A_ServiceContainer,
                aLogService        : amTransversalServices.am_transversalservices.A_LogService,
                aError             : amGeneralError.am_general.A_Error)  
    {  
      this._service_abstract_name = ""; 
      this._service_name          = "";

      this._aFactoryDescription = aFactoryDescription;
      this._aServiceContainer   = aServiceContainer;
      this._aLogService         = aLogService;

      this._iService       = new rmGeneralIService.rm_general.IImpl_Service_R(this) ;
      this._iServiceConfig = new rmGeneralIServiceConfig.rm_general.IImpl_Service_Config(this) ;
      this._iRemoteService = new rmGeneralIRemoteService.rm_general.IImpl_RemoteService_R(this) ;
      this._iServiceRun    = new rmGeneralIServiceRun.rm_general.IImpl_Service_Run(this) ;

      this._aTargetService    = null; 
      this._aConsumerService  = null; 
      this._aOwnerService     = null; 

      this._callbackArray = null;
      this._callbackId = 0;
      this._isRemoteCallback = false;

      this._aUtilsService  = null; 
      this._aSDKService    = null; 
  
      this._debug = false;
      this._debugScenarioNumber = 0;
  
      this._interruptCallback = null;
      this._isInterrupted = false;

      this._serviceStatus = "status_all";

      this._aPostponeServiceAbstractNameList = new Array<string>();
    }


    //------------------------------
    public getInstanceName() : string
    {
      return this._aFactoryDescription._instanceName;;
    }
    //------------------------------
    public getAbstractName() : string
    {
      if (this._aFactoryDescription == null)
        return this._service_abstract_name; //
      return this._aFactoryDescription._abstractName;
    }
    //------------------------------
    public getServiceName() : string
    {
      if (this._aFactoryDescription == null)
        return this._service_name;
      return this._aFactoryDescription._serviceName;
    }
    //------------------------------
    public getFactoryName() : string
    {
      return this._aFactoryDescription._factoryName;
    }

    //----------------------------------
    public injectDependencies( aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aServiceLocator   : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aLogService       : amTransversalServicesLogService.am_transversalservices.A_LogService, 
                              error : amGeneralError.am_general.A_Error) : number
    {
      this._aLogService       = aLogService; 
      this._aServiceContainer = aServiceContainer; 
      this._aServiceLocator   = aServiceLocator; 
      return 0;
    }
  

    //--------------------------------
    public getServiceLocator() : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator
    {
      return this._aServiceLocator;    
    }

    //--------------------------------
    public setServiceLocator(aServiceLocator : amConfigurationServicesServiceLocator.am_configurationservices.A_ServiceLocator) : void
    {
      this._aServiceLocator = aServiceLocator;    
    }
    
    //--------------------------------
    public getServiceContainer() : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer
    {
      return this._aServiceContainer;    
    }

    //--------------------------------
    public setServiceContainer(aServiceContainer : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer) : void
    {
      this._aServiceContainer = aServiceContainer;    
    }


    //------------------------------------------
    public setTargetService(aTargetService: amGeneralService.am_general.A_Service) : void
    {
      this._aTargetService = aTargetService;    
    }

    //-------------------------------------------
    public setConsumerService(aConsumerService: amGeneralService.am_general.A_Service) : void
    {
      this._aConsumerService = aConsumerService;    
    }

    //--------------------------------------------
    public setOwnerService(aOwnerService: amGeneralService.am_general.A_Service) : void
    {
      this._aOwnerService = aOwnerService;    
    }
    
    //--------------------------------
    public setUtilsService(aUtilsService : amTransversalServicesUtilsService.am_transversalservices.A_UtilsService) : void
    {
      this._aUtilsService = aUtilsService;    
    }

    //----------------------------------------
    public setSDKService(aSDKService: amTransversalServicesSDKService.am_transversalservices.A_SDK_JsTV) : void
    {
      this._aSDKService = aSDKService;    
    }

    //----------------------------------
    public addCallback(context: amGeneralContext.am_general.A_Context, callback) : number  
    {
      if ((context !== null) && (callback != null) && (context.isRemoteCallback()) )//this._isRemoteCallback) // && context.isRemoteCallback())
      {
        if (this._callbackArray == null)
          this._callbackArray = new Array<any>();

        var callId = ++this._callbackId;
        var remotecallback = {
          "_callId"   : callId,
          "_callback" : callback,
        };
        this._callbackArray.push(remotecallback);
        return callId;
      }
      return 0; 
    }

    //----------------------------------
    public runCallback(context) : boolean
    {
      if (context == null)
        return false;

      if (context._callId == null)
        return false;

      if (context._callId == 0)
        return false;
    
      var callback = this.getCallback(context._callId);
      if (callback != null)
      {
        var newContext:amGeneralContext.am_general.A_Context = this._aServiceLocator._iEntityCreation.createDefaultContext();
        var newError:amGeneralError.am_general.A_Error = this._aServiceLocator._iEntityCreation.createDefaultError();
        newContext.setError(newError);
        newContext.copy(context);
        callback(newContext);
        return true;
      }
      return false;
    }

    //----------------------------------
    public getCallback(callId : number) : any
    {
      if (callId == null) 
        return null;
      
      var targetCallback = null;
      for( var i = 0; i < this._callbackArray.length; i++)
      { 
        if ( this._callbackArray[i]._callId == callId) 
        {
          targetCallback = this._callbackArray[i]._callback;
          this._callbackArray.splice(i, 1); 
          break;
        }
      }
      return targetCallback;
    }

    //===========================
    //    config 
    //============================
    //-------------------------------
    public init( aConfig  : amGeneralConfig.am_general.AE_Config,  error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {      
      /*    
      if (callback != null)
      {
        callback(context);
        return ;
      }
      return ;
      */
    }
    
    //----------------------------------
    public setDebug(debug : boolean) : void
    {
      this._debug = debug;    
    }
    
    //----------------------------------
    public getDebug() : boolean
    {
      return this._debug;    
    }

    //----------------------------------
    public setMainDebug(mainDebug : boolean) : void
    {
      this._mainDebug = mainDebug;    
    }
    
    //----------------------------------
    public getMainDebug() : boolean
    {
      return this._mainDebug;    
    }

    //----------------------------------
    public setDebugScenarioNumber(debugScenarioNumber : number) : void
    {
      this._debugScenarioNumber = debugScenarioNumber;    
    }
    
    //----------------------------------
    public getDebugScenarioNumber() : number
    {
      return this._debugScenarioNumber;    
    }


    //========================================
    // default implementation of the Run interface
    //========================================

    //-----------------------------
    public setServiceStatus(serviceStatus : string) : number
    {
      this._serviceStatus = serviceStatus;
      return 0;
    }

    //-----------------------------
    public getServiceStatus() : string
    {
      return this._serviceStatus;
    }
    
    //-----------------------------
    public run(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      
    }
    //-----------------------------
    public shutdown(error : amGeneralError.am_general.A_Error,  context: amGeneralContext.am_general.A_Context, callback) : void
    {
      
    }
    
    //-----------------------------
    public setInterruptCallback(interruptCallback) : void
    {
      this._interruptCallback = interruptCallback;
    }
    
    
    //------------------------------------
    public isInterrupted() : boolean
    {
      return this._isInterrupted;
    }

    //---------------------------------------------------
    public setIsInterrupted(isInterrupted : boolean) : void
    {
      this._isInterrupted = isInterrupted;
    }

    //-----------------------------
    public addPostponedServiceAbstractName(postponeServiceAbstractName: string)
    {
      //if (this._aPostponeServiceAbstractNameList == null)
        //this._aPostponeServiceAbstractNameList = new Array<string>();
      this._aPostponeServiceAbstractNameList.push(postponeServiceAbstractName);
    }
    
    //-----------------------------------------------------------
    public getPostponedServiceAbstractNameList() : Array<string>
    {
      return this._aPostponeServiceAbstractNameList;
    }
  }
} 