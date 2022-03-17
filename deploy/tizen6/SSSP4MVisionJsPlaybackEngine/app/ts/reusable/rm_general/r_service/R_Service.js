define(["require", "exports", "../../../../../app/ts/reusable/rm_general/r_service/IImpl_Service_R", "../../../../../app/ts/reusable/rm_general/r_service/IImpl_RemoteService_R", "../../../../../app/ts/reusable/rm_general/r_service/IImpl_Service_Config", "../../../../../app/ts/reusable/rm_general/r_service/IImpl_Service_Run"], function (require, exports, rmGeneralIService, rmGeneralIRemoteService, rmGeneralIServiceConfig, rmGeneralIServiceRun) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_general;
    (function (rm_general) {
        var R_Service = /** @class */ (function () {
            //----------- constructor 
            function R_Service(aFactoryDescription, aServiceContainer, aLogService, aError) {
                this._service_abstract_name = "";
                this._service_name = "";
                this._aFactoryDescription = aFactoryDescription;
                this._aServiceContainer = aServiceContainer;
                this._aLogService = aLogService;
                this._iService = new rmGeneralIService.rm_general.IImpl_Service_R(this);
                this._iServiceConfig = new rmGeneralIServiceConfig.rm_general.IImpl_Service_Config(this);
                this._iRemoteService = new rmGeneralIRemoteService.rm_general.IImpl_RemoteService_R(this);
                this._iServiceRun = new rmGeneralIServiceRun.rm_general.IImpl_Service_Run(this);
                this._aTargetService = null;
                this._aConsumerService = null;
                this._aOwnerService = null;
                this._callbackArray = null;
                this._callbackId = 0;
                this._isRemoteCallback = false;
                this._aUtilsService = null;
                this._aSDKService = null;
                this._debug = false;
                this._debugScenarioNumber = 0;
                this._interruptCallback = null;
                this._isInterrupted = false;
                this._serviceStatus = "status_all";
                this._aPostponeServiceAbstractNameList = new Array();
            }
            //------------------------------
            R_Service.prototype.getInstanceName = function () {
                return this._aFactoryDescription._instanceName;
                ;
            };
            //------------------------------
            R_Service.prototype.getAbstractName = function () {
                if (this._aFactoryDescription == null)
                    return this._service_abstract_name; //
                return this._aFactoryDescription._abstractName;
            };
            //------------------------------
            R_Service.prototype.getServiceName = function () {
                if (this._aFactoryDescription == null)
                    return this._service_name;
                return this._aFactoryDescription._serviceName;
            };
            //------------------------------
            R_Service.prototype.getFactoryName = function () {
                return this._aFactoryDescription._factoryName;
            };
            //----------------------------------
            R_Service.prototype.injectDependencies = function (aServiceContainer, aServiceLocator, aLogService, error) {
                this._aLogService = aLogService;
                this._aServiceContainer = aServiceContainer;
                this._aServiceLocator = aServiceLocator;
                return 0;
            };
            //--------------------------------
            R_Service.prototype.getServiceLocator = function () {
                return this._aServiceLocator;
            };
            //--------------------------------
            R_Service.prototype.setServiceLocator = function (aServiceLocator) {
                this._aServiceLocator = aServiceLocator;
            };
            //--------------------------------
            R_Service.prototype.getServiceContainer = function () {
                return this._aServiceContainer;
            };
            //--------------------------------
            R_Service.prototype.setServiceContainer = function (aServiceContainer) {
                this._aServiceContainer = aServiceContainer;
            };
            //------------------------------------------
            R_Service.prototype.setTargetService = function (aTargetService) {
                this._aTargetService = aTargetService;
            };
            //-------------------------------------------
            R_Service.prototype.setConsumerService = function (aConsumerService) {
                this._aConsumerService = aConsumerService;
            };
            //--------------------------------------------
            R_Service.prototype.setOwnerService = function (aOwnerService) {
                this._aOwnerService = aOwnerService;
            };
            //--------------------------------
            R_Service.prototype.setUtilsService = function (aUtilsService) {
                this._aUtilsService = aUtilsService;
            };
            //----------------------------------------
            R_Service.prototype.setSDKService = function (aSDKService) {
                this._aSDKService = aSDKService;
            };
            //----------------------------------
            R_Service.prototype.addCallback = function (context, callback) {
                if ((context !== null) && (callback != null) && (context.isRemoteCallback())) //this._isRemoteCallback) // && context.isRemoteCallback())
                 {
                    if (this._callbackArray == null)
                        this._callbackArray = new Array();
                    var callId = ++this._callbackId;
                    var remotecallback = {
                        "_callId": callId,
                        "_callback": callback,
                    };
                    this._callbackArray.push(remotecallback);
                    return callId;
                }
                return 0;
            };
            //----------------------------------
            R_Service.prototype.runCallback = function (context) {
                if (context == null)
                    return false;
                if (context._callId == null)
                    return false;
                if (context._callId == 0)
                    return false;
                var callback = this.getCallback(context._callId);
                if (callback != null) {
                    var newContext = this._aServiceLocator._iEntityCreation.createDefaultContext();
                    var newError = this._aServiceLocator._iEntityCreation.createDefaultError();
                    newContext.setError(newError);
                    newContext.copy(context);
                    callback(newContext);
                    return true;
                }
                return false;
            };
            //----------------------------------
            R_Service.prototype.getCallback = function (callId) {
                if (callId == null)
                    return null;
                var targetCallback = null;
                for (var i = 0; i < this._callbackArray.length; i++) {
                    if (this._callbackArray[i]._callId == callId) {
                        targetCallback = this._callbackArray[i]._callback;
                        this._callbackArray.splice(i, 1);
                        break;
                    }
                }
                return targetCallback;
            };
            //===========================
            //    config 
            //============================
            //-------------------------------
            R_Service.prototype.init = function (aConfig, error, context, callback) {
                /*
                if (callback != null)
                {
                  callback(context);
                  return ;
                }
                return ;
                */
            };
            //----------------------------------
            R_Service.prototype.setDebug = function (debug) {
                this._debug = debug;
            };
            //----------------------------------
            R_Service.prototype.getDebug = function () {
                return this._debug;
            };
            //----------------------------------
            R_Service.prototype.setMainDebug = function (mainDebug) {
                this._mainDebug = mainDebug;
            };
            //----------------------------------
            R_Service.prototype.getMainDebug = function () {
                return this._mainDebug;
            };
            //----------------------------------
            R_Service.prototype.setDebugScenarioNumber = function (debugScenarioNumber) {
                this._debugScenarioNumber = debugScenarioNumber;
            };
            //----------------------------------
            R_Service.prototype.getDebugScenarioNumber = function () {
                return this._debugScenarioNumber;
            };
            //========================================
            // default implementation of the Run interface
            //========================================
            //-----------------------------
            R_Service.prototype.setServiceStatus = function (serviceStatus) {
                this._serviceStatus = serviceStatus;
                return 0;
            };
            //-----------------------------
            R_Service.prototype.getServiceStatus = function () {
                return this._serviceStatus;
            };
            //-----------------------------
            R_Service.prototype.run = function (error, context, callback) {
            };
            //-----------------------------
            R_Service.prototype.shutdown = function (error, context, callback) {
            };
            //-----------------------------
            R_Service.prototype.setInterruptCallback = function (interruptCallback) {
                this._interruptCallback = interruptCallback;
            };
            //------------------------------------
            R_Service.prototype.isInterrupted = function () {
                return this._isInterrupted;
            };
            //---------------------------------------------------
            R_Service.prototype.setIsInterrupted = function (isInterrupted) {
                this._isInterrupted = isInterrupted;
            };
            //-----------------------------
            R_Service.prototype.addPostponedServiceAbstractName = function (postponeServiceAbstractName) {
                //if (this._aPostponeServiceAbstractNameList == null)
                //this._aPostponeServiceAbstractNameList = new Array<string>();
                this._aPostponeServiceAbstractNameList.push(postponeServiceAbstractName);
            };
            //-----------------------------------------------------------
            R_Service.prototype.getPostponedServiceAbstractNameList = function () {
                return this._aPostponeServiceAbstractNameList;
            };
            return R_Service;
        }());
        rm_general.R_Service = R_Service;
    })(rm_general = exports.rm_general || (exports.rm_general = {}));
});
//# sourceMappingURL=R_Service.js.map