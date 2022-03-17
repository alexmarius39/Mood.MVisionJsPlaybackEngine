"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var amGeneralScheduleType = require("../../../../../app/ts/abstract/am_general/ae_scheduletype/AE_ScheduleType");
var amServiceConstraintType = require("../../../../../app/ts/abstract/am_general/ae_serviceconstrainttype/AE_ServiceConstraintType");
var amGeneralActivityLogMessageTypes = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");
var rmNonRenderingServices = require("../../../../../app/ts/reusable/rm_nonrenderingservices/r_nonrenderingservice/R_NonRenderingService");
var rmICronServiceMain = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RI_CronServiceMain");
var rmICronServiceConfig = require("../../../../../app/ts/reusable/rm_nonrenderingservices/rs_cronservice/RI_CronServiceConfig");
var rm_nonrenderingservices;
(function (rm_nonrenderingservices) {
    var RS_CronService = (function (_super) {
        __extends(RS_CronService, _super);
        function RS_CronService(aFactoryDescription, aServiceContainer, aLogService, error) {
            var _this = _super.call(this, aFactoryDescription, aServiceContainer, aLogService, error) || this;
            _this._iCronServiceMain = new rmICronServiceMain.rm_nonrenderingservices.RI_CronServiceMain(_this);
            _this._iCronServiceConfig = new rmICronServiceConfig.rm_nonrenderingservices.RI_CronServiceConfig(_this);
            _this._aLogService = aLogService;
            _this._aPlaybackGlobalConfig = null;
            _this._aActivityLogService = null;
            _this._aCronConfiguration = null;
            _this._aCronScheduleList = new Array();
            _this._iServiceInstanceId = 0;
            _this._aMonitoringService = null;
            return _this;
        }
        RS_CronService.prototype.setPlaybackGlobalConfig = function (aPlaybackGlobalConfig) {
            this._aPlaybackGlobalConfig = aPlaybackGlobalConfig;
        };
        RS_CronService.prototype.getPlaybackGlobalConfig = function () {
            return this._aPlaybackGlobalConfig;
        };
        RS_CronService.prototype.setCronConfig = function (aCronConfiguration) {
            this._aCronConfiguration = aCronConfiguration;
        };
        RS_CronService.prototype.getCronConfig = function () {
            return this._aCronConfiguration;
        };
        RS_CronService.prototype.setActivityLogService = function (aActivityLogService) {
            this._aActivityLogService = aActivityLogService;
        };
        RS_CronService.prototype.getActivityLogService = function () {
            return this._aActivityLogService;
        };
        RS_CronService.prototype.setMonitoringService = function (monitoringService) {
            this._aMonitoringService = monitoringService;
        };
        RS_CronService.prototype.getMonitoringService = function () {
            return this._aMonitoringService;
        };
        RS_CronService.prototype.getCronScheduleByServiceName = function (strServiceName) {
            if (strServiceName == null)
                return null;
            var foundCronSchedule = null;
            for (var _i = 0, _a = this._aCronScheduleList; _i < _a.length; _i++) {
                var crtCronSchedule = _a[_i];
                if (crtCronSchedule.getScheduleInfo().getServiceName() == strServiceName) {
                    return crtCronSchedule;
                }
            }
            return null;
        };
        RS_CronService.prototype.getCronScheduleByServiceAbstractName = function (strServiceAbstractName) {
            if (strServiceAbstractName == null)
                return null;
            var foundCronSchedule = null;
            for (var _i = 0, _a = this._aCronScheduleList; _i < _a.length; _i++) {
                var crtCronSchedule = _a[_i];
                if (crtCronSchedule.getScheduleInfo().getServiceAbstractName() == strServiceAbstractName) {
                    return crtCronSchedule;
                }
            }
            return null;
        };
        RS_CronService.prototype.create_new_service_instance = function (aCronSchedule) {
            var self = this;
            var newService = null;
            if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_TestService") {
                newService = this._aServiceLocator._iServiceCreation.createDefaultService_TestService(this._aServiceContainer, this._aServiceLocator, this._aLogService, ++this._iServiceInstanceId, null);
            }
            else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_TestService2") {
                newService = this._aServiceLocator._iServiceCreation.createDefaultService_TestService2(this._aServiceContainer, this._aServiceLocator, this._aLogService, ++this._iServiceInstanceId, null);
            }
            else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_TestService3") {
                newService = this._aServiceLocator._iServiceCreation.createDefaultService_TestService3(this._aServiceContainer, this._aServiceLocator, this._aLogService, ++this._iServiceInstanceId, null);
            }
            else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_PlaylistDownloader") {
                var aPlaylistDownloader;
                aPlaylistDownloader = this._aServiceLocator._iServiceCreation.createDefaultService_PlaylistDownloader(this._aServiceContainer, this._aServiceLocator, this._aLogService, ++this._iServiceInstanceId, null);
                aPlaylistDownloader._iService.setSDKService(this._aSDKService);
                aPlaylistDownloader._iPlaylistDownloaderConfig.setPlaybackGlobalConfig(this._aPlaybackGlobalConfig);
                aPlaylistDownloader._iPlaylistDownloaderConfig.setActivityLogService(this._aActivityLogService);
                if (this.getMainDebug() == true)
                    aPlaylistDownloader._iServiceConfig.setDebug(true);
                newService = aPlaylistDownloader;
            }
            else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_HtmlTemplateDownloader") {
                var aHtmlTemplateDownloader;
                aHtmlTemplateDownloader = this._aServiceLocator._iServiceCreation.createDefaultService_HtmlTemplateDownloader(this._aServiceContainer, this._aServiceLocator, this._aLogService, ++this._iServiceInstanceId, null);
                aHtmlTemplateDownloader._iService.setSDKService(this._aSDKService);
                aHtmlTemplateDownloader._iHtmlTemplateDownloaderConfig.setPlaybackGlobalConfig(this._aPlaybackGlobalConfig);
                aHtmlTemplateDownloader._iHtmlTemplateDownloaderConfig.setActivityLogService(this._aActivityLogService);
                if (this.getMainDebug() == true)
                    aHtmlTemplateDownloader._iServiceConfig.setDebug(true);
                newService = aHtmlTemplateDownloader;
            }
            else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_RebootService") {
                var aRebootService;
                aRebootService = this._aServiceLocator._iServiceCreation.createDefaultService_RebootService(this._aServiceContainer, this._aServiceLocator, this._aLogService, ++this._iServiceInstanceId, null);
                aRebootService._iService.setSDKService(this._aSDKService);
                aRebootService._iRebootServiceConfig.setPlaybackGlobalConfig(this._aPlaybackGlobalConfig);
                aRebootService._iRebootServiceConfig.setActivityLogService(this._aActivityLogService);
                if (this.getMainDebug() == true)
                    aRebootService._iServiceConfig.setDebug(true);
                newService = aRebootService;
            }
            else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "A_PlaylistController") {
                var aPlaylistController;
                aPlaylistController = this._aServiceLocator._iServiceCreation.createDefaultService_PlaylistController(this._aServiceContainer, this._aServiceLocator, this._aLogService, ++this._iServiceInstanceId, null);
                var aRenderingController;
                aRenderingController = this._aServiceLocator._iServiceCreation.createDefaultService_RenderingController(this._aServiceContainer, this._aServiceLocator, this._aLogService, ++this._iServiceInstanceId, null);
                aRenderingController._iService.injectDependencies(null, this._aServiceLocator, this._aLogService, null);
                aRenderingController._iService.setUtilsService(this._aUtilsService);
                aRenderingController._iService.setTargetService(aPlaylistController);
                aRenderingController._iRenderingControllerConfig.setActivityLogService(this._aActivityLogService);
                aPlaylistController._iService.injectDependencies(null, this._aServiceLocator, this._aLogService, null);
                aPlaylistController._iService.setUtilsService(this._aUtilsService);
                aPlaylistController._iService.setTargetService(aRenderingController);
                aPlaylistController._iService.setSDKService(this._aSDKService);
                aPlaylistController._iPlaylistControllerConfig.setPlaybackGlobalConfig(this._aPlaybackGlobalConfig);
                aPlaylistController._iPlaylistControllerConfig.setActivityLogService(this._aActivityLogService);
                if (this.getMainDebug() == true)
                    aPlaylistController._iServiceConfig.setDebug(false);
                aPlaylistController._iPlaylistControllerMonitoring.setMonitoringService(this._aMonitoringService);
                if (this._aMonitoringService != null)
                    this._aMonitoringService._iService.setTargetService(aPlaylistController);
                newService = aPlaylistController;
            }
            else if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_LiveCommandsService") {
                var aLiveCommandsService;
                aLiveCommandsService = this._aServiceLocator._iServiceCreation.createDefaultService_LiveCommands(this._aServiceContainer, this._aServiceLocator, this._aLogService, ++this._iServiceInstanceId, null);
                aLiveCommandsService._iService.setSDKService(this._aSDKService);
                aLiveCommandsService._iLiveCommandsConfig.setPlaybackGlobalConfig(this._aPlaybackGlobalConfig);
                aLiveCommandsService._iLiveCommandsConfig.setActivityLogService(this._aActivityLogService);
                if (this.getMainDebug() == true)
                    aLiveCommandsService._iServiceConfig.setDebug(true);
                newService = aLiveCommandsService;
            }
            return newService;
        };
        RS_CronService.prototype.run_all_startup_services_fake = function (error, context, callback) {
            if (context != null) {
                context.setError(error);
                context.setBoolResult(true);
                return callback(context);
            }
        };
        RS_CronService.prototype.insertOrdered = function (array, elem) {
            var newArray = array;
            var i = 0;
            while (i < array.length && array[i].getScheduleInfo().getScheduleAtStartup_startupPriority() < elem.getScheduleInfo().getScheduleAtStartup_startupPriority()) {
                i++;
            }
            ;
            newArray.splice(i, 0, elem);
            return newArray;
        };
        RS_CronService.prototype.create_all_runtime_schedules = function (error, context) {
            var scheduleInfoList = this._iCronServiceConfig.getCronConfig().getScheduleInfoList();
            var crtCronSchedule = null;
            for (var _i = 0, scheduleInfoList_1 = scheduleInfoList; _i < scheduleInfoList_1.length; _i++) {
                var crtScheduleInfo = scheduleInfoList_1[_i];
                crtCronSchedule = this._aServiceLocator._iEntityCreation.createDefaultCronSchedule(null);
                crtCronSchedule.setScheduleInfo(crtScheduleInfo);
                crtCronSchedule.setCrtService(null);
                crtCronSchedule.setPrevService(null);
                this._aCronScheduleList = this.insertOrdered(this._aCronScheduleList, crtCronSchedule);
            }
        };
        RS_CronService.prototype.create_all_schedules = function (error, context) {
            var self = this;
            this._iCronServiceConfig.setCronConfig(this._aPlaybackGlobalConfig.getCronConfiguration());
            self.create_all_runtime_schedules(error, context);
        };
        RS_CronService.prototype.interrupt_one_reference_service = function (aCronSchedule, error, context, callback) {
            var self = this;
            if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_TestService2") {
                var a = 1;
            }
            if (aCronSchedule.getCrtService() == null) {
                if (callback != null) {
                    context.setBoolResult(true);
                    return callback(context);
                }
            }
            var callbackInterruptCrtService = function callbackInterruptCrtService() {
                var callbackShutdownInterruptedService = function callbackShutdownInterruptedService() {
                    if (aCronSchedule.getCrtService() != null) {
                        if (self._aActivityLogService != null) {
                            self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                + "  ---------- shutdown interrupt service - Done - " + aCronSchedule.getCrtService()._iService.getServiceName(), null, null, null);
                        }
                        if (self._debug) {
                            document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                + "  ---------- shutdown interrupt service - Done - " + aCronSchedule.getCrtService()._iService.getServiceName() + "</p>";
                            console.log(aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                                + "  ---------- shutdown interrupt service - Done - " + aCronSchedule.getCrtService()._iService.getServiceName());
                        }
                    }
                    aCronSchedule.setCrtService(null);
                    aCronSchedule.setPrevService(null);
                    if (callback != null) {
                        context.setBoolResult(true);
                        return callback(context);
                    }
                };
                if (aCronSchedule.getCrtService() == null) {
                    callbackShutdownInterruptedService();
                }
                else {
                    if (self._aActivityLogService != null) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                            + "  ---------- shutdown by interruption - " + aCronSchedule.getCrtService()._iService.getServiceName(), null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                            + "  ---------- shutdown by interruption - " + aCronSchedule.getCrtService()._iService.getServiceName() + "</p>";
                        console.log(aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                            + "  ---------- shutdown by interruption - " + aCronSchedule.getCrtService()._iService.getServiceName());
                    }
                    aCronSchedule.getCrtService()._iServiceRun.shutdown(error, context, callbackShutdownInterruptedService);
                }
            };
            if (aCronSchedule.getCrtService() != null) {
                if (self._aActivityLogService != null) {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                        + "  ---------- interrupt service ..... - " + aCronSchedule.getCrtService()._iService.getServiceName(), null, null, null);
                }
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                        + "  ---------- interrupt service ..... - " + aCronSchedule.getCrtService()._iService.getServiceName() + "</p>";
                    console.log(aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                        + "  ---------- interrupt service ..... - " + aCronSchedule.getCrtService()._iService.getServiceName());
                }
                aCronSchedule.getCrtService()._iServiceRun.setInterruptCallback(callbackInterruptCrtService);
            }
            else {
                callbackInterruptCrtService();
            }
        };
        RS_CronService.prototype.interrupt_all_reference_services_for_new_schedule = function (aNewSchedule, error, context, callback) {
            var self = this;
            var aServiceConstraintList = aNewSchedule.getScheduleInfo().getServiceConstraintList();
            var nbConstraints = aServiceConstraintList.length;
            var startConstraintIdx = 0;
            var callbackOneConstraint = function callbackOneConstraint(crtConstraintIdx, ctx1) {
                if (crtConstraintIdx + 1 > nbConstraints) {
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                var crtServiceConstraint = aServiceConstraintList[crtConstraintIdx];
                var callbackConstraint = function callbackConstraint(ctx2) {
                    var bScheduledWell = ctx2.getBoolResult();
                    if (!bScheduledWell) {
                        context.setError(error);
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    return callbackOneConstraint(++crtConstraintIdx, ctx2);
                };
                if (crtServiceConstraint.getServiceConstraintType() == amServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_InterruptReferenceServiceIfIsRunning) {
                    var refServiceCronSchedule = self.getCronScheduleByServiceAbstractName(crtServiceConstraint.getReferenceServiceAbstractName());
                    if (refServiceCronSchedule == null)
                        return callbackOneConstraint(++crtConstraintIdx, ctx1);
                    self.interrupt_one_reference_service(refServiceCronSchedule, error, ctx1, callbackConstraint);
                }
                else {
                    callbackOneConstraint(++crtConstraintIdx, ctx1);
                }
            };
            callbackOneConstraint(startConstraintIdx, context);
        };
        RS_CronService.prototype.can_run_a_new_service_if_reference_services_run = function (aNewSchedule) {
            var self = this;
            var bCanRun = true;
            var refServiceCronSchedule = null;
            var aServiceConstraintList = aNewSchedule.getScheduleInfo().getServiceConstraintList();
            for (var _i = 0, aServiceConstraintList_1 = aServiceConstraintList; _i < aServiceConstraintList_1.length; _i++) {
                var crtServiceConstraint = aServiceConstraintList_1[_i];
                if (crtServiceConstraint.getServiceConstraintType() != amServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_CannotRunIfReferenceServiceRun)
                    continue;
                refServiceCronSchedule = self.getCronScheduleByServiceAbstractName(crtServiceConstraint.getReferenceServiceAbstractName());
                if (refServiceCronSchedule == null)
                    continue;
                if (refServiceCronSchedule.getCrtService() != null)
                    return false;
            }
            return true;
        };
        RS_CronService.prototype.postpone_service_till_reference_services_ended = function (aNewSchedule) {
            var self = this;
            var bPostpone = false;
            var refServiceCronSchedule = null;
            var aServiceConstraintList = aNewSchedule.getScheduleInfo().getServiceConstraintList();
            for (var _i = 0, aServiceConstraintList_2 = aServiceConstraintList; _i < aServiceConstraintList_2.length; _i++) {
                var crtServiceConstraint = aServiceConstraintList_2[_i];
                if (crtServiceConstraint.getServiceConstraintType() != amServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_PostponeRunTillReferenceServiceEnded)
                    continue;
                refServiceCronSchedule = self.getCronScheduleByServiceAbstractName(crtServiceConstraint.getReferenceServiceAbstractName());
                if (refServiceCronSchedule == null)
                    continue;
                if (refServiceCronSchedule.getCrtService() != null) {
                    bPostpone = true;
                    refServiceCronSchedule.getCrtService()._iServiceRun.addPostponedServiceAbstractName(aNewSchedule.getScheduleInfo().getServiceAbstractName());
                }
            }
            return bPostpone;
        };
        RS_CronService.prototype.should_start_next_service_when_current_service_ended = function (nextServiceConstraint, endedServiceStatus) {
            if (nextServiceConstraint.getServiceConstraintType() != amServiceConstraintType.am_general.AE_ServiceConstraintType.Constraint_RunReferenceServiceAtTheEndForStatus)
                return false;
            if (nextServiceConstraint.getCurrentServiceStatus() == "status_all")
                return true;
            if (nextServiceConstraint.getCurrentServiceStatus() == endedServiceStatus)
                return true;
            return false;
        };
        RS_CronService.prototype.start_all_next_services_when_current_service_ended = function (endedService, endedServiceSchedule, endedServiceStatus, error, context, callback) {
            var self = this;
            var atStartup = false;
            var aServiceConstraintList = endedServiceSchedule.getScheduleInfo().getServiceConstraintList();
            var nbConstraints = aServiceConstraintList.length;
            var startConstraintIdx = 0;
            var callbackOneConstraint = function callbackOneConstraint(crtConstraintIdx, ctx1) {
                if (crtConstraintIdx + 1 > nbConstraints) {
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                var crtServiceConstraint = aServiceConstraintList[crtConstraintIdx];
                var callbackConstraint = function callbackConstraint(ctx2) {
                    var bScheduledWell = ctx2.getBoolResult();
                    if (!bScheduledWell) {
                        context.setError(error);
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    return callbackOneConstraint(++crtConstraintIdx, ctx2);
                };
                if (self.should_start_next_service_when_current_service_ended(crtServiceConstraint, endedServiceStatus)) {
                    var refServiceCronSchedule = self.getCronScheduleByServiceAbstractName(crtServiceConstraint.getReferenceServiceAbstractName());
                    if (refServiceCronSchedule == null)
                        return callbackOneConstraint(++crtConstraintIdx, ctx1);
                    return self.start_one_service_instance(refServiceCronSchedule, atStartup, error, ctx1, callbackConstraint);
                }
                else {
                    return callbackOneConstraint(++crtConstraintIdx, ctx1);
                }
            };
            callbackOneConstraint(startConstraintIdx, context);
        };
        RS_CronService.prototype.start_all_postponed_services_when_current_service_ended = function (endedService, endedServiceSchedule, endedServiceStatus, error, context, callback) {
            var self = this;
            var atStartup = false;
            var aServiceAbstractNameList = endedService._iServiceRun.getPostponedServiceAbstractNameList();
            var nbServices = aServiceAbstractNameList.length;
            var startServiceIdx = 0;
            var callbackOneService = function callbackOneService(crtServiceIdx, ctx1) {
                if (crtServiceIdx + 1 > nbServices) {
                    context.setBoolResult(true);
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                var crtServiceAbstractName = aServiceAbstractNameList[crtServiceIdx];
                var callbackService = function callbackService(ctx2) {
                    var bScheduledWell = ctx2.getBoolResult();
                    if (!bScheduledWell) {
                        context.setError(error);
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    return callbackOneService(++crtServiceIdx, ctx2);
                };
                var refServiceCronSchedule = self.getCronScheduleByServiceAbstractName(crtServiceAbstractName);
                if (refServiceCronSchedule == null)
                    return callbackOneService(++crtServiceIdx, ctx1);
                return self.start_one_service_instance(refServiceCronSchedule, atStartup, error, ctx1, callbackService);
            };
            callbackOneService(startServiceIdx, context);
        };
        RS_CronService.prototype.new_service_instance_ended = function (endedService, error, context, callback) {
            var self = this;
            if (endedService == null) {
                if (callback != null) {
                    context.setBoolResult(true);
                    return callback(context);
                }
                return;
            }
            var endedServiceStatus = endedService._iServiceRun.getServiceStatus();
            var endedServiceSchedule = self.getCronScheduleByServiceAbstractName(endedService._iService.getAbstractName());
            if (endedServiceSchedule == null) {
                if (callback != null) {
                    context.setBoolResult(true);
                    return callback(context);
                }
                return;
            }
            endedServiceSchedule.setCrtService(null);
            endedServiceSchedule.setPrevService(null);
            var errorStartNextServices = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextStartNextServices = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackStartNextServices = function callbackStartNextServices() {
                var errorStartPostponedServices = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextPostponedServices = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackStartPostponedServices = function callbackStartPostponedServices() {
                    if (callback != null) {
                        context.setBoolResult(true);
                        return callback(context);
                    }
                };
                self.start_all_postponed_services_when_current_service_ended(endedService, endedServiceSchedule, endedServiceStatus, errorStartPostponedServices, contextPostponedServices, callbackStartPostponedServices);
            };
            self.start_all_next_services_when_current_service_ended(endedService, endedServiceSchedule, endedServiceStatus, errorStartNextServices, contextStartNextServices, callbackStartNextServices);
        };
        RS_CronService.prototype.new_service_instance_start = function (aCronSchedule, error, context, callback) {
            var self = this;
            var errorRun = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextRun = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var errorShutdown = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextShutdown = self._aServiceLocator._iEntityCreation.createDefaultContext();
            aCronSchedule.setPrevService(aCronSchedule.getCrtService());
            aCronSchedule.setCrtService(null);
            var aNewService = self.create_new_service_instance(aCronSchedule);
            aCronSchedule.setCrtService(aNewService);
            var callbackShutdownPrevService = function callbackShutdownPrevService() {
                var callbackNaturalEnd = function callbackShutdownPrevService(ctxNaturalEnd) {
                    var endedService = ctxNaturalEnd.getObject2Result();
                    if (self._aActivityLogService != null) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), endedService._iService.getServiceName() + " instance: " + endedService._iService.getInstanceName()
                            + "  ---------- natural end - " + endedService._iService.getServiceName(), null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>" + endedService._iService.getServiceName() + " instance: " + endedService._iService.getInstanceName()
                            + "  ---------- natural end - " + endedService._iService.getServiceName() + "</p>";
                        console.log(endedService._iService.getServiceName() + " instance: " + endedService._iService.getInstanceName()
                            + "  ---------- natural end - " + endedService._iService.getServiceName());
                    }
                    if (endedService == null) {
                        if (callback != null) {
                            context.setBoolResult(true);
                            return callback(context);
                        }
                    }
                    var errorNewServicenstanceEnded = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextNewServicenstanceEnded = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackNewServiceInstanceEnded = function callbackNewServicenstanceEnded() {
                        if (callback != null) {
                            context.setBoolResult(true);
                            return callback(context);
                        }
                    };
                    self.new_service_instance_ended(endedService, errorNewServicenstanceEnded, contextNewServicenstanceEnded, callbackNewServiceInstanceEnded);
                };
                if (self._aActivityLogService != null) {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                        + "  ---------- start - " + aCronSchedule.getCrtService()._iService.getServiceName(), null, null, null);
                }
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                        + "  ---------- start - " + aCronSchedule.getCrtService()._iService.getServiceName() + "</p>";
                    console.log(aCronSchedule.getCrtService()._iService.getServiceName() + " instance: " + aCronSchedule.getCrtService()._iService.getInstanceName()
                        + "  ---------- start - " + aCronSchedule.getCrtService()._iService.getServiceName());
                }
                aCronSchedule.getCrtService()._iServiceRun.run(errorRun, contextRun, callbackNaturalEnd);
            };
            if (aCronSchedule.getPrevService() == null) {
                callbackShutdownPrevService();
            }
            else {
                if (self._aActivityLogService != null) {
                    self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aCronSchedule.getPrevService()._iService.getServiceName() + " instance: " + aCronSchedule.getPrevService()._iService.getInstanceName()
                        + "  ---------- shutdown by interruption - " + aCronSchedule.getPrevService()._iService.getServiceName(), null, null, null);
                }
                if (self._debug) {
                    document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getPrevService()._iService.getServiceName() + " instance: " + aCronSchedule.getPrevService()._iService.getInstanceName()
                        + "  ---------- shutdown by interruption - " + aCronSchedule.getPrevService()._iService.getServiceName() + "</p>";
                    console.log(aCronSchedule.getPrevService()._iService.getServiceName() + " instance: " + aCronSchedule.getPrevService()._iService.getInstanceName()
                        + "  ---------- shutdown by interruption - " + aCronSchedule.getPrevService()._iService.getServiceName());
                }
                aCronSchedule.getPrevService()._iServiceRun.shutdown(errorShutdown, contextShutdown, callbackShutdownPrevService);
            }
        };
        RS_CronService.prototype.start_one_service_instance = function (aCronSchedule, atStartup, error, context, callback) {
            var self = this;
            if (aCronSchedule.getScheduleInfo().getServiceAbstractName() == "AS_TestService") {
                var a = 1;
            }
            if (self.can_run_a_new_service_if_reference_services_run(aCronSchedule) == false) {
                if (callback != null) {
                    context.setBoolResult(true);
                    return callback(context);
                }
                return;
            }
            if (self.postpone_service_till_reference_services_ended(aCronSchedule) == true) {
                if (callback != null) {
                    context.setBoolResult(true);
                    return callback(context);
                }
                return;
            }
            var errorInterruptReferences = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextInterruptReferences = self._aServiceLocator._iEntityCreation.createDefaultContext();
            if (self._aActivityLogService != null) {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aCronSchedule.getScheduleInfo().getServiceName() + " - start new schedule instance", null, null, null);
            }
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getScheduleInfo().getServiceName() + " - start new schedule instance" + "</p>";
                console.log(aCronSchedule.getScheduleInfo().getServiceName() + " - start new schedule instance");
            }
            var callbackInterruptReferences = function callbackInterruptReferences(ctx1) {
                var callbackInterruptCrtService = function callbackInterruptCrtService() {
                    if (self._aActivityLogService != null) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), aCronSchedule.getScheduleInfo().getServiceName() + " - start new service instance", null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>" + aCronSchedule.getScheduleInfo().getServiceName() + " - start new service instance" + "</p>";
                        console.log(aCronSchedule.getScheduleInfo().getServiceName() + " - start new service instance");
                    }
                    if (!atStartup) {
                        self.new_service_instance_start(aCronSchedule, null, null, null);
                        if (callback != null) {
                            context.setBoolResult(true);
                            return callback(context);
                        }
                    }
                    else if (!aCronSchedule.getScheduleInfo().getScheduleAtStartup_waitAtStartupToFinish()) {
                        self.new_service_instance_start(aCronSchedule, null, null, null);
                        if (callback != null) {
                            context.setBoolResult(true);
                            return callback(context);
                        }
                    }
                    else {
                        var callbackStartupFinished = function callbackStartupFinished() {
                            if (callback != null) {
                                context.setBoolResult(true);
                                return callback(context);
                            }
                        };
                        self.new_service_instance_start(aCronSchedule, error, context, callbackStartupFinished);
                    }
                };
                if (aCronSchedule.getScheduleInfo().getSchedule_runOnlyOneInstanceOnce()) {
                    if (aCronSchedule.getCrtService() != null) {
                        aCronSchedule.getCrtService()._iServiceRun.setInterruptCallback(callbackInterruptCrtService);
                    }
                    else {
                        callbackInterruptCrtService();
                    }
                }
                else {
                    callbackInterruptCrtService();
                }
            };
            self.interrupt_all_reference_services_for_new_schedule(aCronSchedule, errorInterruptReferences, contextInterruptReferences, callbackInterruptReferences);
        };
        RS_CronService.prototype.run_all_startup_services = function (aCronScheduleList, error, context, callback) {
            var self = this;
            var atStartup = true;
            var nbSchedules = aCronScheduleList.length;
            var startScheduleIdx = 0;
            var callbackOneStartupInstance = function callbackOneStartupInstance(crtScheduleIdx, ctx1, ctxCrtCronSchedule) {
                if (ctxCrtCronSchedule != null) {
                    if (ctxCrtCronSchedule.getScheduleInfo().getServiceAbstractName() == "A_PlaylistController") {
                        document.getElementById("background01").style.display = "block";
                        document.getElementById("splash_id").style.display = "none";
                    }
                }
                if (crtScheduleIdx + 1 > nbSchedules) {
                    context.setBoolResult(true);
                    if (self._aActivityLogService != null) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Successfully startup all service instances", null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>" + "Successfully startup all service instances" + "</p>";
                        console.log("Successfully startup all service instances");
                    }
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                var crtCronSchedule = aCronScheduleList[crtScheduleIdx];
                var callbackStartupSchedule = function callbackStartupSchedule(ctx2) {
                    var bScheduledWell = ctx2.getBoolResult();
                    if (!bScheduledWell) {
                        context.setError(error);
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    return callbackOneStartupInstance(++crtScheduleIdx, ctx2, crtCronSchedule);
                };
                if (crtCronSchedule.getScheduleInfo().getScheduleAtStartup_runAtStartup()) {
                    self.start_one_service_instance(crtCronSchedule, atStartup, error, ctx1, callbackStartupSchedule);
                }
                else {
                    callbackOneStartupInstance(++crtScheduleIdx, ctx1, null);
                }
            };
            callbackOneStartupInstance(startScheduleIdx, context, null);
        };
        RS_CronService.prototype.start_one_cron_schedule = function (aCronSchedule, error, context, callback) {
            var self = this;
            var atStartup = false;
            var timeIntervalMs = aCronSchedule.getScheduleInfo().getScheduleTimeInterval_repeatIntervalInSeconds() * 1000;
            if (self._aActivityLogService != null) {
                self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Start Schedule for Service: " + aCronSchedule.getScheduleInfo().getServiceAbstractName() + " - each " + timeIntervalMs + "ms", null, null, null);
            }
            if (self._debug) {
                document.getElementById("rend.message").innerHTML += "<p>" + "Start Schedule for Service: " + aCronSchedule.getScheduleInfo().getServiceAbstractName() + " - each " + timeIntervalMs + "ms" + "</p>";
                console.log("Start Schedule for Service: " + aCronSchedule.getScheduleInfo().getServiceAbstractName() + " - each " + timeIntervalMs + "ms");
            }
            if ((aCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Daily)
                || (aCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Weekly)
                || (aCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Monthly)
                || (aCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Once)) {
                var timerId = window.setTimeout(function () { self.start_one_service_instance(aCronSchedule, atStartup, null, null, null); }, timeIntervalMs);
                aCronSchedule.setTimerId(timerId);
            }
            else {
                if ((aCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_AtTimeInterval)) {
                    var timerId = window.setInterval(function () { self.start_one_service_instance(aCronSchedule, atStartup, null, null, null); }, timeIntervalMs);
                    aCronSchedule.setTimerId(timerId);
                }
            }
            if (callback != null) {
                context.setBoolResult(true);
                callback(context);
                return;
            }
        };
        RS_CronService.prototype.start_all_cron_schedules = function (aCronScheduleList, error, context, callback) {
            var self = this;
            var nbSchedules = aCronScheduleList.length;
            var startScheduleIdx = 0;
            var callbackOneCronSchedule = function callbackOneCronSchedule(crtScheduleIdx, ctx1) {
                if (crtScheduleIdx + 1 > nbSchedules) {
                    context.setBoolResult(true);
                    if (self._aActivityLogService != null) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Successfully scheduled all cron schedules", null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>" + "Successfully scheduled all cron schedules" + "</p>";
                        console.log("Successfully scheduled all cron schedules");
                    }
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                var crtCronSchedule = aCronScheduleList[crtScheduleIdx];
                var callbackCronSchedule = function callbackCronSchedule(ctx2) {
                    var bScheduledWell = ctx2.getBoolResult();
                    if (!bScheduledWell) {
                        context.setError(error);
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    return callbackOneCronSchedule(++crtScheduleIdx, ctx2);
                };
                if (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_AtTimeInterval) {
                    self.start_one_cron_schedule(crtCronSchedule, error, ctx1, callbackCronSchedule);
                }
                else {
                    callbackOneCronSchedule(++crtScheduleIdx, ctx1);
                }
            };
            callbackOneCronSchedule(startScheduleIdx, context);
        };
        RS_CronService.prototype.startup_schedule = function (error, context, callback) {
            var self = this;
            self.create_all_schedules(error, context);
            var errorRunAllStartupServices = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextRunAllStartupServices = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackRunAllStartupServices = function callbackRunAllStartupServices() {
                var errorStartAllCronSchedules = self._aServiceLocator._iEntityCreation.createDefaultError();
                var contextStartAllCronSchedules = self._aServiceLocator._iEntityCreation.createDefaultContext();
                var callbackStartAllCronSchedules = function callbackStartAllCronSchedules() {
                    var errorStartAllDailyWeeklyMonthlyCronSchedules = self._aServiceLocator._iEntityCreation.createDefaultError();
                    var contextStartAllDailyWeeklyMonthlyCronSchedules = self._aServiceLocator._iEntityCreation.createDefaultContext();
                    var callbackStartAllDailyWeeklyMonthlyCronSchedules = function callbackStartAllDailyWeeklyMonthlyCronSchedules() {
                        self.schedule_midnight_timer(error, context, null);
                        if (context != null) {
                            context.setError(error);
                            context.setBoolResult(true);
                            return callback(context);
                        }
                    };
                    contextStartAllDailyWeeklyMonthlyCronSchedules.setRemoteCallback(true);
                    var bAtStartup = true;
                    self.start_all_daily_weekly_monthly_cron_schedules(self._aCronScheduleList, bAtStartup, errorStartAllDailyWeeklyMonthlyCronSchedules, contextStartAllDailyWeeklyMonthlyCronSchedules, callbackStartAllDailyWeeklyMonthlyCronSchedules);
                };
                contextStartAllCronSchedules.setRemoteCallback(true);
                self.start_all_cron_schedules(self._aCronScheduleList, errorStartAllCronSchedules, contextStartAllCronSchedules, callbackStartAllCronSchedules);
            };
            contextRunAllStartupServices.setRemoteCallback(true);
            self.run_all_startup_services(self._aCronScheduleList, errorRunAllStartupServices, contextRunAllStartupServices, callbackRunAllStartupServices);
        };
        RS_CronService.prototype.shutdown_schedule = function (error, context, callback) {
        };
        RS_CronService.prototype.getSDKGoodCrtDate = function () {
            if (this._aSDKService != null)
                return this._aSDKService._iSDKTimeSetup.getSyncGoodCrtDateTime(null, null);
            return new Date();
        };
        RS_CronService.prototype.start_midnight_timer = function () {
            var self = this;
            var errorStartAllDailyWeeklyMonthlyCronSchedules = self._aServiceLocator._iEntityCreation.createDefaultError();
            var contextStartAllDailyWeeklyMonthlyCronSchedules = self._aServiceLocator._iEntityCreation.createDefaultContext();
            var callbackStartAllDailyWeeklyMonthlyCronSchedules = function callbackStartAllDailyWeeklyMonthlyCronSchedules() {
                self.schedule_midnight_timer(errorStartAllDailyWeeklyMonthlyCronSchedules, contextStartAllDailyWeeklyMonthlyCronSchedules, null);
            };
            contextStartAllDailyWeeklyMonthlyCronSchedules.setRemoteCallback(true);
            var bAtStartup = false;
            self.start_all_daily_weekly_monthly_cron_schedules(self._aCronScheduleList, bAtStartup, errorStartAllDailyWeeklyMonthlyCronSchedules, contextStartAllDailyWeeklyMonthlyCronSchedules, callbackStartAllDailyWeeklyMonthlyCronSchedules);
            return 0;
        };
        RS_CronService.prototype.schedule_midnight_timer = function (error, context, callback) {
            var crtTime = new Date();
            var scheduleTime = new Date(crtTime.getFullYear(), crtTime.getMonth(), crtTime.getDate() + 1, 0, 0, 1);
            var self = this;
            var msTillScheduleInMilSec = scheduleTime.getTime() - crtTime.getTime();
            var timerId = window.setTimeout(function () { self.start_midnight_timer(); }, msTillScheduleInMilSec);
            return 1;
        };
        RS_CronService.prototype.daily_schedule_must_start = function (crtCronSchedule, error, context, callback) {
            var iAtHour = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtHour();
            var iAtMinute = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtMinute();
            var iAtSecond = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtSecond();
            var crtTime = new Date();
            var scheduleTime = new Date(crtTime.getFullYear(), crtTime.getMonth(), crtTime.getDate(), iAtHour, iAtMinute, iAtSecond);
            var msTillScheduleInMilSec = scheduleTime.getTime() - crtTime.getTime();
            if (msTillScheduleInMilSec < 0)
                return false;
            var msTillScheduleInSec = msTillScheduleInMilSec / 1000;
            crtCronSchedule.getScheduleInfo().setScheduleTimeInterval_repeatIntervalInSeconds(msTillScheduleInSec);
            return true;
        };
        RS_CronService.prototype.weekly_schedule_must_start = function (crtCronSchedule, error, context, callback) {
            var crtTime = new Date();
            var iWeekDay = crtTime.getDay();
            var strWeekDaysAvailability = crtCronSchedule.getScheduleInfo().getScheduleAvailability_strInWeekdays();
            if (strWeekDaysAvailability == null)
                return false;
            if (strWeekDaysAvailability.length < 7)
                return false;
            var strCrtDayAvalability = strWeekDaysAvailability.substring(iWeekDay, iWeekDay + 1);
            if (strCrtDayAvalability != "1")
                return false;
            var iAtHour = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtHour();
            var iAtMinute = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtMinute();
            var iAtSecond = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtSecond();
            var crtTime = new Date();
            var scheduleTime = new Date(crtTime.getFullYear(), crtTime.getMonth(), crtTime.getDate(), iAtHour, iAtMinute, iAtSecond);
            var msTillScheduleInMilSec = scheduleTime.getTime() - crtTime.getTime();
            if (msTillScheduleInMilSec < 0)
                return false;
            var msTillScheduleInSec = msTillScheduleInMilSec / 1000;
            crtCronSchedule.getScheduleInfo().setScheduleTimeInterval_repeatIntervalInSeconds(msTillScheduleInSec);
            return true;
        };
        RS_CronService.prototype.monthly_schedule_must_start = function (crtCronSchedule, error, context, callback) {
            var crtTime = new Date();
            var iDayOfMonth = crtTime.getDate();
            var iAtDay = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtDay();
            if (iAtDay == 0) {
                var lastDayOfMonth = new Date(crtTime.getFullYear(), crtTime.getMonth() + 1, 0);
                iAtDay = lastDayOfMonth.getDate();
            }
            if (iDayOfMonth != iAtDay)
                return false;
            var iAtHour = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtHour();
            var iAtMinute = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtMinute();
            var iAtSecond = crtCronSchedule.getScheduleInfo().getScheduleStart_iAtSecond();
            var crtTime = new Date();
            var scheduleTime = new Date(crtTime.getFullYear(), crtTime.getMonth(), crtTime.getDate(), iAtHour, iAtMinute, iAtSecond);
            var msTillScheduleInMilSec = scheduleTime.getTime() - crtTime.getTime();
            if (msTillScheduleInMilSec < 0)
                return false;
            var msTillScheduleInSec = msTillScheduleInMilSec / 1000;
            crtCronSchedule.getScheduleInfo().setScheduleTimeInterval_repeatIntervalInSeconds(msTillScheduleInSec);
            return true;
        };
        RS_CronService.prototype.only_once_schedule_must_start = function (crtCronSchedule, error, context, callback) {
            return false;
        };
        RS_CronService.prototype.schedule_must_start = function (crtCronSchedule, bAtStartupDaySchedule, error, context, callback) {
            if (bAtStartupDaySchedule) {
                if (crtCronSchedule.getScheduleInfo().getScheduleStart_bStartAlsoInTheSameDayAsStartAppDay() == false) {
                    return false;
                }
            }
            var self = this;
            if (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Daily)
                return self.daily_schedule_must_start(crtCronSchedule, error, context, callback);
            if (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Weekly)
                return self.weekly_schedule_must_start(crtCronSchedule, error, context, callback);
            if (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Monthly)
                return self.monthly_schedule_must_start(crtCronSchedule, error, context, callback);
            if (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Once)
                return self.monthly_schedule_must_start(crtCronSchedule, error, context, callback);
            return false;
        };
        RS_CronService.prototype.start_all_daily_weekly_monthly_cron_schedules = function (aCronScheduleList, bAtStartupDaySchedule, error, context, callback) {
            var self = this;
            var nbSchedules = aCronScheduleList.length;
            var startScheduleIdx = 0;
            var callbackOneCronSchedule = function callbackOneCronSchedule(crtScheduleIdx, ctx1) {
                if (crtScheduleIdx + 1 > nbSchedules) {
                    context.setBoolResult(true);
                    if (self._aActivityLogService != null) {
                        self._aActivityLogService._IActivityLogServiceMessaging.addLogMessage(amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes.Info, self.getServiceName(), "Successfully scheduled all daily, weekly, monthly cron schedules", null, null, null);
                    }
                    if (self._debug) {
                        document.getElementById("rend.message").innerHTML += "<p>" + "Successfully scheduled all all daily, weekly, monthly cron schedules" + "</p>";
                        console.log("Successfully scheduled all all daily, weekly, monthly cron schedules");
                    }
                    context.setError(error);
                    if (callback != null)
                        callback(context);
                    return;
                }
                var crtCronSchedule = aCronScheduleList[crtScheduleIdx];
                var callbackCronSchedule = function callbackCronSchedule(ctx2) {
                    var bScheduledWell = ctx2.getBoolResult();
                    if (!bScheduledWell) {
                        context.setError(error);
                        context.setObjectResult(null);
                        if (callback != null)
                            callback(context);
                        return;
                    }
                    return callbackOneCronSchedule(++crtScheduleIdx, ctx2);
                };
                if ((crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Daily)
                    || (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Weekly)
                    || (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Monthly)
                    || (crtCronSchedule.getScheduleInfo().getScheduleType() == amGeneralScheduleType.am_general.AE_ScheduleType.ScheduleType_Once)) {
                    if (self.schedule_must_start(crtCronSchedule, bAtStartupDaySchedule, error, ctx1, null) == true) {
                        self.start_one_cron_schedule(crtCronSchedule, error, ctx1, callbackCronSchedule);
                    }
                    else {
                        callbackOneCronSchedule(++crtScheduleIdx, ctx1);
                    }
                }
                else {
                    callbackOneCronSchedule(++crtScheduleIdx, ctx1);
                }
            };
            callbackOneCronSchedule(startScheduleIdx, context);
        };
        return RS_CronService;
    }(rmNonRenderingServices.rm_nonrenderingservices.R_NonRenderingService));
    rm_nonrenderingservices.RS_CronService = RS_CronService;
})(rm_nonrenderingservices = exports.rm_nonrenderingservices || (exports.rm_nonrenderingservices = {}));
//# sourceMappingURL=RS_CronService.js.map