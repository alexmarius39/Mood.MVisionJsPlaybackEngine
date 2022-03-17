define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_configurationservices;
    (function (rm_configurationservices) {
        var IImpl_ServiceLocator_ServiceCreation_R = /** @class */ (function () {
            //----------- constructor 
            function IImpl_ServiceLocator_ServiceCreation_R(owner) {
                this._owner = owner;
            }
            //--- create a service
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createService = function (aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error) {
                return this._owner.createService(aFactoryDescription, aServiceContainer, serviceProperties, aLogService, error);
            };
            //--------------------------- create a default service list
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultServices = function (error) {
                return this._owner.createDefaultServices(error);
            };
            //--------------------------------------------------------------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createAllStartupServices = function (error) {
                return this._owner.createAllStartupServices(error);
            };
            //------------------------------------
            // create default rendering services
            //------------------------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_RenderingZone = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_RenderingZone(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_VideoRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_VideoRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_VideoStreamRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_VideoStreamRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_ImageRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_ImageRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_HtmlRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_HtmlRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_HtmlTemplateRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_HtmlTemplateRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_FlashRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_FlashRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_FillRectRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_FillRectRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_ScreenSaverRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_ScreenSaverRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_TvHdmiPassThroughSrv = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_TvHdmiPassThroughSrv(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_BackgroundRenderer = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_BackgroundRenderer(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //---------------
            // controllers 
            //---------------
            //----------- create default PlaylistController
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_PlaylistController = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_PlaylistController(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //----------- create default RenderingController
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_RenderingController = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_RenderingController(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //----------- create default PlaylistDownloader
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_PlaylistDownloader = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_PlaylistDownloader(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //----------- create default PlaylistDownloader
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_HtmlTemplateDownloader = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_HtmlTemplateDownloader(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //----------- create default DownloadService
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_DownloadService = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_DownloadService(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //----------- create default DownloadService
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_UpdateSoftware = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_UpdateSoftware(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_Monitoring = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_Monitoring(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_Screenshot = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_Screenshot(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_Startup = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_Startup(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_LiveCommands = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_LiveCommands(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_VolumeSetup = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_VolumeSetup(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //----------- create default ActivityLogService
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_ActivityLogService = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_ActivityLogService(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //--------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_CronService = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_CronService(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //--------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.creatDefaultService_SettingsSync = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.creatDefaultService_SettingsSync(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //--------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.creatDefaultService_SettingsSyncInterface = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.creatDefaultService_SettingsSyncInterface(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //--------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_TestService = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_TestService(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //--------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_TestService2 = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_TestService2(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //--------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_TestService3 = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_TestService3(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //---------------------------------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_FileSettingsUpdate = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_FileSettingsUpdate(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            //---------------------------------------------
            IImpl_ServiceLocator_ServiceCreation_R.prototype.createDefaultService_RebootService = function (aServiceContainer, aServiceLocator, aLogService, id, error) {
                return this._owner.createDefaultService_RebootService(aServiceContainer, aServiceLocator, aLogService, id, error);
            };
            return IImpl_ServiceLocator_ServiceCreation_R;
        }());
        rm_configurationservices.IImpl_ServiceLocator_ServiceCreation_R = IImpl_ServiceLocator_ServiceCreation_R;
    })(rm_configurationservices = exports.rm_configurationservices || (exports.rm_configurationservices = {}));
});
//# sourceMappingURL=IImpl_ServiceLocator_ServiceCreation_R.js.map