define(["require", "exports", "../app/ts/reusable/rm_configurationservices/r_servicelocator/R_ServiceLocator", "../app/ts/reusable/rm_configurationservices/r_servicecontainer/R_ServiceContainer", "../app/ts/native/nm_transversalservices/n_sdk_tizen/N_SDK_Tizen", "../app/ts/reusable/rm_renderingservices/r_sdkrenderer/R_SDKRenderer", "../app/ts/reusable/rm_transversalservices/r_sdk_connector/R_SDK_Connector", "../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService", "../app/ts/reusable/rm_transversalservices/r_xmlconfigurator/R_XmlConfigurator", "../app/ts/reusable/rm_transversalservices/r_logservice/R_LogService", "../app/ts/reusable/rm_renderingservices/r_logrenderer/R_LogRenderer", "../app/ts/reusable/rm_transversalservices/r_log_connector/R_Log_Connector"], function (require, exports, rmConfigurationServicesServiceLocator, rmConfigurationServicesServiceContainer, nmodSDKTizen, rmodSDKRenderer, rmodSDKConnector, rmodUtilsService, rmodXmlConfigurator, rmodLogService, rmodLogRenderer, rmodLogConnector) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    tizen.tvinputdevice.registerKey('0');
    var debugMain = false; //switch
    //document.getElementById("splash_id").style.display = "block";                
    if (debugMain) {
        document.getElementById("rend.message").style.display = "block";
    }
    //===================================
    // Get Default Storage Names
    //===================================
    //var htm:HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById("plc_trace");
    //htm.innerHTML = "11111111111111111111111111111111111111111111";
    //-------------------------------------------
    function _getDefaultResourceStorageName() {
        return "/opt/media/USBDriveA1/"; //"removable_sda1"; 
    }
    //-------------------------------------------
    function _getDefaultResourceStorageName2() {
        return "/opt/media/USBDriveA1/";
    }
    //-------------------------------------------
    function _getDefaultResourceStorageUrlName() {
        return "file:///opt/media/USBDriveA1/"; //"file:///opt/storage/usb/sda1/"; //"file:///opt/media/USBDriveA1/"; //"http://192.168.0.222:9080/ux/";
    }
    //=====================================================
    //-------------------------------------------
    function _getDefaultHtmlTemplatesStorageName() {
        return "file:///opt/media/USBDriveA1/"; //"downloads/" ;//"removable_sda1"; 
    }
    //-------------------------------------------
    function _getDefaultHtmlTemplatesStorageName2() {
        return "file:///opt/media/USBDriveA1/"; //"downloads/";//"file:///opt/media/USBDriveA1/"; 
    }
    //-------------------------------------------
    function _getDefaultHtmlTemplatesStorageUrlName() {
        return "file:///opt/media/USBDriveA1/"; //"downloads/";//"file:///opt/media/USBDriveA1/"; //"file:///opt/storage/usb/sda1/"; //"file:///opt/media/USBDriveA1/"; //"http://192.168.0.222:9080/ux/";
    }
    //======================================================
    //-------------------------------------------
    function _getDefaultStorageUrlName() {
        return "file:///opt/storage/usb/sda1/"; //"file:///opt/media/USBDriveA1/"; //"http://192.168.0.222:3000"; 
    }
    //---------------------------------------------
    function _getDefaultStorageSameDomainUrlName() {
        return "file:///opt/storage/usb/sda1/"; //"file:///opt/media/USBDriveA1/"; //"http://192.168.0.222:3000/ux/"; 
    }
    /*
    // Tizen
    */
    //-- the variables
    var error = null;
    var aSrvLocator;
    aSrvLocator = rmConfigurationServicesServiceLocator.rm_configurationservices.R_ServiceLocator.startupCreateDefaultServiceLocator(null, error);
    //ma2
    var aSrvContainer = new rmConfigurationServicesServiceContainer.rm_configurationservices.R_ServiceContainer(null, null, null, error);
    aSrvLocator._iService.setServiceContainer(aSrvContainer);
    var context = aSrvLocator._iEntityCreation.createDefaultContext();
    var error = aSrvLocator._iEntityCreation.createDefaultError();
    //--- the service creation
    var aUtilsService = new rmodUtilsService.rm_transversalservices.R_UtilsService(null, null, null, error);
    aUtilsService._iService.setServiceLocator(aSrvLocator);
    //var aSDKJsTV:amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV = new rmodSDKClient.rm_transversalservices.R_SDK_Client(null, null, null, error);
    //var aSDKJsTV:amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV = new nmodSDKWebOS.nm_transversalservices.N_SDK_WebOS(null, null, null, error);
    var aSDKJsTV = new nmodSDKTizen.nm_transversalservices.N_SDK_Tizen(null, null, null, error);
    aSDKJsTV._iService.setServiceLocator(aSrvLocator);
    aSDKJsTV._iService.setUtilsService(aUtilsService);
    aSDKJsTV._iService.injectDependencies(aSrvContainer, aSrvLocator, null, error); //ma2
    //ma2
    aSrvContainer._iServiceManager.addService(aSDKJsTV, error);
    var aTimeZoneConvertor = aSrvLocator._iEntityCreation.createDefaultTimeZoneConvertor(error);
    aSDKJsTV._iSDKTimeSetup.setTimeConvertor(aTimeZoneConvertor);
    var aSDKRenderer = new rmodSDKRenderer.rm_renderingservices.R_SDKRenderer(null, null, null, error);
    aSDKRenderer._iService.setServiceLocator(aSrvLocator);
    aSDKRenderer._iService.setUtilsService(aUtilsService);
    var aUtilsService = new rmodUtilsService.rm_transversalservices.R_UtilsService(null, null, null, error);
    aUtilsService._iService.setServiceLocator(aSrvLocator);
    var aSDKConnector = new rmodSDKConnector.rm_transversalservices.R_SDK_Connector(null, null, null, error);
    aSDKConnector._iService.setServiceLocator(aSrvLocator);
    aUtilsService._iService.setSDKService(aSDKJsTV);
    //--- the services "wiring"
    aSDKConnector._iService.setTargetService(aSDKJsTV);
    aSDKConnector._iService.setConsumerService(aSDKRenderer._aSDKConsumer);
    //-
    aSDKRenderer._iService.setTargetService(aSDKConnector);
    //-
    aSDKJsTV._iService.setConsumerService(aSDKConnector);
    //-  the initialization of input parameters 
    //aSDKJsTV._iRemoteService.startup_withConnectClient("http://localhost:3000");
    //-
    var aStartFileFolder = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
    var aStartUrlFileFolder = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
    var aStartUrlDomainFileFolder = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
    aStartFileFolder.setStorage(_getDefaultResourceStorageName()); //"removable_sda1");
    aStartFileFolder.setPath("/");
    aStartUrlFileFolder.setStorage(_getDefaultResourceStorageUrlName()); //"file:///opt/storage/usb/sda1/");
    aStartUrlFileFolder.setPath(""); //to do
    aStartUrlDomainFileFolder.setStorage(_getDefaultStorageSameDomainUrlName()); //"file:///opt/storage/usb/sda1/");
    aStartUrlDomainFileFolder.setPath("");
    aSDKRenderer._iFileSystemRenderer.setStartFolder(aStartFileFolder, aStartUrlFileFolder, aStartUrlDomainFileFolder);
    //-----------------------
    var errorGlobalConfig = aSrvLocator._iEntityCreation.createDefaultError();
    var aPlaybackGlobalConfig = aSrvLocator._iEntityCreation.createDefaultPlaybackGlobalConfig(error);
    aPlaybackGlobalConfig.injectDependencies(null, aSrvLocator, null, error);
    aPlaybackGlobalConfig.initFolders("", //defaultAppStorageName //""
    "", //defaultAppStorageUrlName       : string,        //""
    _getDefaultResourceStorageName(), //defaultResourceStorageName "c:/";
    _getDefaultResourceStorageUrlName(), //defaultResourceStorageUrlName : "http://127.0.0.1:9080/c/";  
    _getDefaultHtmlTemplatesStorageName(), //defaultHtmlTemplatesStorageName "c:/";
    _getDefaultHtmlTemplatesStorageUrlName(), //defaultHtmlTemplatesStorageUrlName : "http://127.0.0.1:9080/c/";  
    _getDefaultStorageUrlName(), //defaultStorageUrlName     
    _getDefaultStorageSameDomainUrlName(), //defaultStorageSameDomainUrlName : http://127.0.0.1:3000/c/
    "SOC Player", //appName: SOC PLAYER
    "v.1.0.10", //
    280, errorGlobalConfig);
    //--- the service creation
    var aLogService = new rmodLogService.rm_transversalservices.R_LogService(null, null, null, error);
    aLogService._iService.setServiceLocator(aSrvLocator);
    aLogService._iService.setTargetService(aSDKJsTV);
    aLogService._iService.setUtilsService(aUtilsService);
    //var aUtilsService:amTransversalServicesUtilsService.am_transversalservices.A_UtilsService = new rmodUtilsService.rm_transversalservices.R_UtilsService(null, null, null, error);
    //aUtilsService._iService.setServiceLocator(aSrvLocator);
    var aLogRenderer = new rmodLogRenderer.rm_renderingservices.R_LogRenderer(null, null, null, error);
    aLogRenderer._iService.setServiceLocator(aSrvLocator);
    aLogRenderer._iService.setUtilsService(aUtilsService);
    var aLogConnector = new rmodLogConnector.rm_transversalservices.R_Log_Connector(null, null, null, error);
    aLogConnector._iService.setServiceLocator(aSrvLocator);
    //--- the services "wiring"
    aLogConnector._iService.setTargetService(aLogService);
    aLogConnector._iService.setConsumerService(aLogRenderer._aLogConsumer);
    //-
    //aLogRenderer._iService.setTargetService(aLogConnector);
    aLogRenderer._iService.setTargetService(aLogService);
    //-
    //aLogService._iService.setConsumerService(aLogConnector);
    aLogService._iService.setConsumerService(aLogRenderer);
    // Activity Log Service Creation
    var aActivityLogService = aSrvLocator._iServiceCreation.createDefaultService_ActivityLogService(null, aSrvLocator, aLogService, 0, null);
    aActivityLogService._iService.setSDKService(aSDKJsTV);
    aActivityLogService._iService.setUtilsService(aUtilsService);
    aActivityLogService._IActivityLogServiceConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    // activity log test. Set in settings activity_log.file_enabled = true and auto_upload_interval_seconds = 10, activity_log_enable = true
    // const errorActivityLogIntervalTest: amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
    // const contextActivityLogIntervalTest: amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
    // const activityLogTest = setInterval(() => {
    //   aActivityLogService._IActivityLogServiceMessaging.addLogMessage('This is a message test', errorActivityLogIntervalTest, contextActivityLogIntervalTest, null);
    // }, 1000);
    //-  the initialization of input parameters 
    //aLogService._iRemoteService.startup_withConnectClient("http://localhost:3000");
    //aLogService._iRemoteService.startup(__socket);
    //-
    var aStartFileFolder = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
    var aStartUrlFileFolder = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
    aStartFileFolder.setStorage(_getDefaultResourceStorageName()); //"removable_sda1");
    aStartFileFolder.setPath("/moodmedia/logs/");
    aStartFileFolder.setName("sdkrenderer.log");
    aStartUrlFileFolder.setStorage(_getDefaultResourceStorageUrlName()); //"file:///opt/storage/usb/sda1/");
    aStartUrlFileFolder.setPath("/moodmedia/logs/");
    aStartUrlFileFolder.setName("sdkrenderer.log");
    aLogRenderer._iLogConfigRenderer.setFileInfo(aStartFileFolder, aStartUrlFileFolder);
    aSDKRenderer.setLogRenderer(aLogRenderer);
    //===================
    //  config classes
    //====================
    var aHardwareSettings = aSrvLocator._iEntityCreation.createDefaultHardwareSettings(error);
    aSDKRenderer._iFileSystemRenderer.setHardwareSetting(aHardwareSettings);
    var aOpeningHours = aSrvLocator._iEntityCreation.createDefaultOpeningHours(error);
    aSDKRenderer._iFileSystemRenderer.setOpeningHours(aOpeningHours);
    var aScreenSaverConfig = aSrvLocator._iEntityCreation.createDefaultScreenSaverConfig(error);
    //aSDKRenderer._iFileSystemRenderer.setScreenSaverRenderer(aScreenSaverConfig);
    //=======================================
    // renderers
    //=======================================
    var aFileStorage = _getDefaultResourceStorageName(); //"c:/";
    var aUrlStorage = _getDefaultResourceStorageUrlName(); //"http://127.0.0.1:9080/c/";
    //---------
    var aCronService;
    aCronService = aSrvLocator._iServiceCreation.createDefaultService_CronService(null, aSrvLocator, aLogService, 0, null);
    aCronService._iService.setUtilsService(aUtilsService); //test
    aCronService._iService.setSDKService(aSDKJsTV);
    aCronService._iCronServiceConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    aCronService._iCronServiceConfig.setActivityLogService(aActivityLogService);
    //------------------- 
    //ma4
    //    creation
    //-------------------
    //---------
    var aFileSettingsUpdate;
    aFileSettingsUpdate = aSrvLocator._iServiceCreation.createDefaultService_FileSettingsUpdate(null, aSrvLocator, aLogService, 0, null);
    aFileSettingsUpdate._iService.setUtilsService(aUtilsService); //test
    aFileSettingsUpdate._iService.setSDKService(aSDKJsTV);
    aFileSettingsUpdate._iFileSettingsUpdateConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    aFileSettingsUpdate._iFileSettingsUpdateConfig.setActivityLogService(aActivityLogService);
    document.getElementById("rend.message").innerHTML += "<p>" + aFileStorage + "</p>";
    document.getElementById("rend.message").innerHTML += "<p>" + aUrlStorage + "</p>";
    //------------------- 
    //    creation
    //-------------------
    //var aPlaylistController:amPlaylistController.am_coreservices.A_PlaylistController = new rmPlaylistController.rm_coreservices.R_PlaylistController(null, null, null, error);
    //--
    //var aRenderingController:amRenderingController.am_coreservices.A_RenderingController = new rmRenderingController.rm_coreservices.R_RenderingController(null, null, null, error);
    //------------------- 
    //    construction 
    //-------------------
    //aPlaylistController._iService.injectDependencies( null, aSrvLocator, aLogService, error ) ;
    ////aPlaylistController._iService.setServiceLocator(aSrvLocator);
    ////aPlaylistController._iService.setSDKService(aSDKGeneralService); //test
    //aPlaylistController._iService.setUtilsService(aUtilsService); //test
    //aPlaylistController._iService.setTargetService(aRenderingController); //test
    //aPlaylistController._iService.setSDKService(aSDKJsTV);
    //aPlaylistController._iPlaylistControllerConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    //aPlaylistController._iPlaylistControllerConfig.setActivityLogService(aActivityLogService);
    //--
    //aRenderingController._iService.injectDependencies( null, aSrvLocator, aLogService, error ) ;
    ////aRenderingController._iService.setServiceLocator(aSrvLocator);
    ////aRenderingController._iService.setSDKService(aSDKGeneralService); //test
    //aRenderingController._iService.setUtilsService(aUtilsService); //test
    //aRenderingController._iService.setTargetService(aPlaylistController); //test
    //aRenderingController._iRenderingControllerConfig.setActivityLogService(aActivityLogService);
    //------------------- 
    //   configuration 
    //-------------------
    //=========================================
    //  xml configurator
    //=========================================
    var aXmlConfigurator = new rmodXmlConfigurator.rm_transversalservices.R_XmlConfigurator(null, null, null, error);
    aXmlConfigurator._iService.setServiceLocator(aSrvLocator);
    aXmlConfigurator._iService.setSDKService(aSDKJsTV); //aSDKGeneralService); //test
    aXmlConfigurator._iService.setUtilsService(aUtilsService); //test
    //aXmlConfigurator._iRemoteService.startup(__socket);
    //var aXmlConfiguratorClient:amTransversalServicesLogService.am_transversalservices.A_LogService = new rmodLogClient.rm_transversalservices.R_Log_Client(null, null, null, error);
    //aXmlConfiguratorClient._iService.setServiceLocator(aSrvLocator);
    //aXmlConfiguratorClient._iRemoteService.startup(__socket);
    //------------------------------------------------------
    /*
    function loadXMLConfigurationFiles( aFileStorage: string, aUrlStorage : string,
                                        aHardwareSettings:amPlaybackHardwareSettings.am_playback.A_HardwareSettings ,
                                        aOpeningHours:amPlaybackOpeningHours.am_playback.A_OpeningHours,
                                        aScreenSaverConfig:amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig,
                                        callback)
    {
      //var aSDKGeneralService:amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV = new rmodSDKGeneralService.rm_transversalservices.R_SDK_JsTV(null, null, null, error);
      //aSDKGeneralService._iService.setUtilsService(aUtilsService); //test
    
      var aXMLFileHD:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      aXMLFileHD.setStorage(aFileStorage);
      aXMLFileHD.setPath("/moodmedia/software_v5/settings/");
      aXMLFileHD.setName("hardware_settings.xml");
      aXMLFileHD.setUrlStorage(aUrlStorage);
      aXMLFileHD.setUrlPath(aXMLFileHD.getPath());
      aXMLFileHD.setUrlName(aXMLFileHD.getName());
    
      var aXMLFileOH:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      aXMLFileOH.setStorage(aFileStorage);
      aXMLFileOH.setPath("/moodmedia/software_v5/settings/");
      aXMLFileOH.setName("opening_hour_settings.xml");
      aXMLFileOH.setUrlStorage(aUrlStorage);
      aXMLFileOH.setUrlPath(aXMLFileOH.getPath());
      aXMLFileOH.setUrlName(aXMLFileOH.getName());
    
      //--- new
      var aXMLFileScreenSaverConfig:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      aXMLFileScreenSaverConfig.setStorage(aFileStorage);
      aXMLFileScreenSaverConfig.setPath("/moodmedia/project/");
      aXMLFileScreenSaverConfig.setName("screen_saver_v5.xml");
      aXMLFileScreenSaverConfig.setUrlStorage(aUrlStorage);
      aXMLFileScreenSaverConfig.setUrlPath(aXMLFileScreenSaverConfig.getPath());
      aXMLFileScreenSaverConfig.setUrlName(aXMLFileScreenSaverConfig.getName());
    
    
      var xmlFileInfoList:Array<amGeneralFileInfo.am_general.A_FileInfo> = new Array<amGeneralFileInfo.am_general.A_FileInfo>();
      xmlFileInfoList.push(aXMLFileHD);
      xmlFileInfoList.push(aXMLFileOH);
      xmlFileInfoList.push(aXMLFileScreenSaverConfig);
    
      try{
        var callbackLoadXMLFiles = function callbackLoadXMLFiles(ctx)
        {
          
          if ((ctx._error != null) && (ctx._error._id != null) && (ctx._error._id != 0))
          {
            var callbackLog3 = function callbackLog3(ctx)
            {
            }
            aLogService._iLogMain.log( 4, "clientNodejs"+ "\t\t" + "Load XML Files : failed" + ctx._error._msg, error, context, callbackLog3);
            return;
          }
          var callbackLog2 = function callbackLog2(ctx)
          {
          }
          //context.setRemoteCallback(true);
          aLogService._iLogMain.log( 4, "clientNodejs"+ "\t\t" + "Load XML Files : ok", error, context, callbackLog2);
          //---------------------------
          var callbackGetXmlObjectsHS = function callbackGetXmlObjectsHS(ctxH)
          {
            var xmlDocumentHS = ctxH.getObjectResult();
            //-----------------------
            var strHardwareType = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/ENVIRONMENT/ENV_NAME", error) ;
            var strEarlyAdapter = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/ENVIRONMENT/EARLY_ADOPTER", error);
            var strSerialNumber = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/SERIAL_NUMBER", error);
            var strAccountId    = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/WINDOWS_ACCOUNTS/ACCOUNT/ACCOUNT_ID", error);
            var strAccountName  = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/WINDOWS_ACCOUNTS/ACCOUNT/NAME", error);
            var strAccountPwd   = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentHS, "HARDWARE_SETTINGS/WINDOWS_ACCOUNTS/ACCOUNT/PWD", error);
    
            //var strHardwareType = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "ENVIRONMENT/ENV_NAME");
            //var strEarlyAdapter = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "ENVIRONMENT/EARLY_ADOPTER");
            //var strSerialNumber = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "SERIAL_NUMBER");
            //var strAccountId    = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "WINDOWS_ACCOUNTS/ACCOUNT/ACCOUNT_ID");
            //var strAccountName  = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "WINDOWS_ACCOUNTS/ACCOUNT/NAME");
            //var strAccountPwd   = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagText(xmlJsonObject, "WINDOWS_ACCOUNTS/ACCOUNT/PWD");
    
            aHardwareSettings.setHardwareType(strHardwareType);
            aHardwareSettings.setEarlyAdapter(strEarlyAdapter);
            aHardwareSettings.setSerialNumber(strSerialNumber);
            aHardwareSettings.setAccountId(strAccountId);
            aHardwareSettings.setAccountName(strAccountName);
            aHardwareSettings.setAccountPassword(strAccountPwd);
            //-------------------------
    
            var callbackGetXmlObjectsOH = function callbackGetXmlObjectsOH(ctxOH)
            {
              var xmlDocumentOH = ctxH.getObjectResult();
    
              //var objWDays = aUtilsService._iUtilsXMLJson.getXMLJsonObjectTagArray(xmlJsonObjectOH, "WORKDAY");
              var objWDays = aUtilsService._iUtilsXMLJson.getXmlXPath_Nodes(xmlDocumentOH, "OPENING_HOURS/WORKDAY", error) ;
              if (objWDays != null)
              {
                var nbWDays = objWDays.length;
                var wdayOpenDay="";
                var wdayOpenTime="";
                var wdayCloseDay="";
                var wdayCloseTime="";
                var aDayOpeningHours:amPlaybackDayOpeningHours.am_playback.A_DayOpeningHours = null;
                var aDayOpenTime:amGeneralDateTime.am_general.A_DateTime = null;
                var aDayCloseTime:amGeneralDateTime.am_general.A_DateTime = null;
                var iCrtOH:number = 0;
                for(var i = 0; i < objWDays.length; i++)
                {
                  // get i-th object in the results array
                  iCrtOH = i+1;
                  var objWDay = objWDays[i];
    
                  wdayOpenDay   = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentOH, "OPENING_HOURS/WORKDAY[" + iCrtOH + "]/OPEN/DAY", error);
                  wdayOpenTime  = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentOH, "OPENING_HOURS/WORKDAY[" + iCrtOH + "]/OPEN/TIME", error);
                  wdayCloseDay  = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentOH, "OPENING_HOURS/WORKDAY[" + iCrtOH + "]/CLOSE/DAY", error);
                  wdayCloseTime = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentOH, "OPENING_HOURS/WORKDAY[" + iCrtOH + "]/CLOSE/TIME", error);
                  
                  //wdayOpenDay   = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText_FromNode(objWDay, "OPENING_HOURS/OPEN/DAY", error);
                  //wdayOpenTime  = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText_FromNode(objWDay, "OPENING_HOURS/OPEN/TIME", error);
                  //wdayCloseDay  = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText_FromNode(objWDay, "OPENING_HOURS/CLOSE/DAY", error);
                  //wdayCloseTime = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText_FromNode(objWDay, "OPENING_HOURS/CLOSE/TIME", error);
    
                  //wdayOpenDay  = aUtilsService._iUtilsXMLJson.getXMLJsonTagText(objWDay,"OPEN/DAY");
                  //wdayOpenTime = aUtilsService._iUtilsXMLJson.getXMLJsonTagText(objWDay,"OPEN/TIME");
                  //wdayCloseDay  = aUtilsService._iUtilsXMLJson.getXMLJsonTagText(objWDay,"CLOSE/DAY");
                  //wdayCloseTime = aUtilsService._iUtilsXMLJson.getXMLJsonTagText(objWDay,"CLOSE/TIME");
    
                  aDayOpeningHours = aSrvLocator._iEntityCreation.createDefaultDayOpeningHours(error);
                  aDayOpenTime  = aSrvLocator._iEntityCreation.createDefaultDateTime(error);
                  aDayOpenTime.setTimeAsString(wdayOpenTime);
                  aDayCloseTime = aSrvLocator._iEntityCreation.createDefaultDateTime(error);
                  aDayCloseTime.setTimeAsString(wdayCloseTime);
    
                  aDayOpeningHours.setOpenDayName(wdayOpenDay);
                  aDayOpeningHours.setOpenTime(aDayOpenTime);
                  aDayOpeningHours.setCloseDayName(wdayCloseDay);
                  aDayOpeningHours.setCloseTime(aDayCloseTime);
    
                  aOpeningHours.addDayOpeningHours(aDayOpeningHours);
                }
              }
              
              //-------------------------
              var callbackGetXmlObjectsScreenSaverConfig = function callbackGetXmlObjectsScreenSaverConfig(ctxSSC)
              {
                var xmlDocumentSSC = ctxSSC.getObjectResult();
                //<messages>
                  //<buffer_message trans_id="0000">
                  //   <file>/moodmedia/project/screen_saver/PLAY_SCREENSAVER_TOTEM.swf</file>
                  //   <last_media_in_zone>False</last_media_in_zone>
                  //   <type>form_flashplayer</type>
                  //   <duration>10000</duration>
                  //   <position>Stretch</position>
                  //</buffer_message>
                //</messages>
                //-----------------------
                //var strBM_attr_transId       = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/@trans_id", error) ;
                var strBM_file               = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/file", error) ;
                var strBM_last_media_in_zone = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/last_media_in_zone", error) ;
                var strBM_type               = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/type", error) ;
                var strBM_duration           = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/duration", error) ;
                var strBM_position           = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/position", error) ;
    
                aScreenSaverConfig.setFileFullName(aUrlStorage + strBM_file);
                aScreenSaverConfig.setLastMediaInZoneFromString(strBM_last_media_in_zone);
                aScreenSaverConfig.setMediaTypeFromConfigString(strBM_type);
                aScreenSaverConfig.setDurationFromString(strBM_duration);
                aScreenSaverConfig.setImageDisplayTypeFromConfigString(strBM_position);
    
                if (callback != null)
                  return callback(null);
    
              }
              var contextOH:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
              var errorOH:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
              aXmlConfigurator._iXmlConfiguratorMain.getXmlJsonObject(aXMLFileScreenSaverConfig.getStorage(),
                                                                      aXMLFileScreenSaverConfig.getPath(),
                                                                      aXMLFileScreenSaverConfig.getName(),
                                                                      errorHS, contextHS, callbackGetXmlObjectsScreenSaverConfig);
            }
    
            var contextOH:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
            var errorOH:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
            aXmlConfigurator._iXmlConfiguratorMain.getXmlJsonObject(aXMLFileOH.getStorage(), aXMLFileOH.getPath(), aXMLFileOH.getName(),
                                                                    errorHS, contextHS, callbackGetXmlObjectsOH);
    
                                                                                        
          }
          var contextHS:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
          var errorHS:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
          aXmlConfigurator._iXmlConfiguratorMain.getXmlJsonObject(aXMLFileHD.getStorage(), aXMLFileHD.getPath(), aXMLFileHD.getName(),
                                                                  errorHS, contextHS, callbackGetXmlObjectsHS);
    
        }
        var context4:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
        //context3.setRemoteCallback(true);
        aXmlConfigurator._iXmlConfiguratorSetup.loadXMLFiles(xmlFileInfoList, error, context4, callbackLoadXMLFiles);
      }catch(e){
        document.getElementById("sdk.message").innerHTML += "<p>cannot load xml files: " + e.stack + "</p>";
      }
    }*/
    //==================================
    //
    //=================================
    /*
    function loadXMLConfigurationFiles_ONE( aFileStorage: string, aUrlStorage : string,
                                        aHardwareSettings:amPlaybackHardwareSettings.am_playback.A_HardwareSettings ,
                                        aOpeningHours:amPlaybackOpeningHours.am_playback.A_OpeningHours,
                                        aScreenSaverConfig:amPlaybackScreenSaverConfig.am_playback.AE_ScreenSaverConfig,
                                        callback)
    {
      //var aSDKGeneralService:amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV = new rmodSDKGeneralService.rm_transversalservices.R_SDK_JsTV(null, null, null, error);
      //aSDKGeneralService._iService.setUtilsService(aUtilsService); //test
    
      var aXMLFileHD:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      aXMLFileHD.setStorage(aFileStorage);
      aXMLFileHD.setPath("/moodmedia/software_v5/settings/");
      aXMLFileHD.setName("hardware_settings.xml");
      aXMLFileHD.setUrlStorage(aUrlStorage);
      aXMLFileHD.setUrlPath(aXMLFileHD.getPath());
      aXMLFileHD.setUrlName(aXMLFileHD.getName());
    
      var aXMLFileOH:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      aXMLFileOH.setStorage(aFileStorage);
      aXMLFileOH.setPath("/moodmedia/software_v5/settings/");
      aXMLFileOH.setName("opening_hour_settings.xml");
      aXMLFileOH.setUrlStorage(aUrlStorage);
      aXMLFileOH.setUrlPath(aXMLFileOH.getPath());
      aXMLFileOH.setUrlName(aXMLFileOH.getName());
    
      //--- new
      var aXMLFileScreenSaverConfig:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      var errorFSC:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
      var contextFSC:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
      aXMLFileScreenSaverConfig.setStorage(aFileStorage);
      aXMLFileScreenSaverConfig.setPath("/moodmedia/project/");
      aXMLFileScreenSaverConfig.setName("screen_saver_v5.xml");
      aXMLFileScreenSaverConfig.setUrlStorage(aUrlStorage);
      aXMLFileScreenSaverConfig.setUrlPath(aXMLFileScreenSaverConfig.getPath());
      aXMLFileScreenSaverConfig.setUrlName(aXMLFileScreenSaverConfig.getName());
    
    
      var xmlFileInfoList:Array<amGeneralFileInfo.am_general.A_FileInfo> = new Array<amGeneralFileInfo.am_general.A_FileInfo>();
      //xmlFileInfoList.push(aXMLFileHD);
      //xmlFileInfoList.push(aXMLFileOH);
      xmlFileInfoList.push(aXMLFileScreenSaverConfig);
    
      try{
        var callbackLoadXMLFiles = function callbackLoadXMLFiles(ctx)
        {
          
          if ((ctx._error != null) && (ctx._error._id != null) && (ctx._error._id != 0))
          {
            var callbackLog3 = function callbackLog3(ctx)
            {
            }
            aLogService._iLogMain.log( 4, "clientNodejs"+ "\t\t" + "Load XML Files : failed" + ctx._error._msg, error, context, callbackLog3);
            return;
          }
          var callbackLog2 = function callbackLog2(ctx)
          {
          }
          //context.setRemoteCallback(true);
          aLogService._iLogMain.log( 4, "clientNodejs"+ "\t\t" + "Load XML Files : ok", error, context, callbackLog2);
              
              //-------------------------
              var callbackGetXmlObjectsScreenSaverConfig = function callbackGetXmlObjectsScreenSaverConfig(ctxSSC)
              {
                var xmlDocumentSSC = ctxSSC.getObjectResult();
                //<messages>
                  //<buffer_message trans_id="0000">
                  //   <file>/moodmedia/project/screen_saver/PLAY_SCREENSAVER_TOTEM.swf</file>
                  //   <last_media_in_zone>False</last_media_in_zone>
                  //   <type>form_flashplayer</type>
                  //   <duration>10000</duration>
                  //   <position>Stretch</position>
                  //</buffer_message>
                //</messages>
                //-----------------------
                //var strBM_attr_transId       = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/@trans_id", error) ;
                var strBM_file               = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/file", error) ;
                var strBM_last_media_in_zone = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/last_media_in_zone", error) ;
                var strBM_type               = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/type", error) ;
                var strBM_duration           = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/duration", error) ;
                var strBM_position           = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/position", error) ;
    
                aScreenSaverConfig.setFileFullName(aUrlStorage + strBM_file);
                aScreenSaverConfig.setLastMediaInZoneFromString(strBM_last_media_in_zone);
                aScreenSaverConfig.setMediaTypeFromConfigString(strBM_type);
                aScreenSaverConfig.setDurationFromString(strBM_duration);
                aScreenSaverConfig.setImageDisplayTypeFromConfigString(strBM_position);
    
                if (callback != null)
                  return callback(null);
    
              }
              var contextOH:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
              var errorOH:amGeneralError.am_general.A_Error = aSrvLocator._iEntityCreation.createDefaultError();
              aXmlConfigurator._iXmlConfiguratorMain.getXmlJsonObject(aXMLFileScreenSaverConfig.getStorage(),
                                                                      aXMLFileScreenSaverConfig.getPath(),
                                                                      aXMLFileScreenSaverConfig.getName(),
                                                                      errorFSC, contextFSC, callbackGetXmlObjectsScreenSaverConfig);
    
        }
        var context4:amGeneralContext.am_general.A_Context = aSrvLocator._iEntityCreation.createDefaultContext();
        //context3.setRemoteCallback(true);
        aXmlConfigurator._iXmlConfiguratorSetup.loadXMLFiles(xmlFileInfoList, error, context4, callbackLoadXMLFiles);
      }catch(e){
        document.getElementById("sdk.message").innerHTML += "<p>cannot load xml files: " + e.stack + "</p>";
      }
    }*/
    //==================================
    //  loadXMLConfigurationFiles3
    //=================================
    //=====================================
    function loadAllFileSettings(aFileStorage, aUrlStorage, aGlobalSettings, aHardwareSettings, aOpeningHours, aScreenSaverConfig, error, context, callback) {
    }
    //=====================================
    function loadFileSettingsV2(aFileStorage, aUrlStorage, aGlobalSettings, error, context, callback) {
        var aJsonFileSettingsV2 = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
        aJsonFileSettingsV2.setStorage(aFileStorage);
        aJsonFileSettingsV2.setPath("/moodmedia/software_v5/settings/");
        aJsonFileSettingsV2.setName("settings_v2.json");
        aJsonFileSettingsV2.setUrlStorage(aUrlStorage);
        aJsonFileSettingsV2.setUrlPath(aJsonFileSettingsV2.getPath());
        aJsonFileSettingsV2.setUrlName(aJsonFileSettingsV2.getName());
        var fileInfoList = new Array();
        //xmlFileInfoList.push(aXMLFileHD);
        //xmlFileInfoList.push(aXMLFileOH);
        fileInfoList.push(aJsonFileSettingsV2);
        var errorSettings = aSrvLocator._iEntityCreation.createDefaultError();
        var contextSettings = aSrvLocator._iEntityCreation.createDefaultContext();
        try {
            var callbackLoadSettingsV2 = function callbackLoadSettingsV2(ctxLoad) {
                //-------------------------
                if (ctxLoad.isError()) {
                    if (callback != null) {
                        if (error != null) {
                            error.setError(11111, "ERROR 11112: Error Loading Global Settings - Error Reading Global Settings File :");
                            if (context != null)
                                context.setError(error);
                        }
                        return callback(context);
                    }
                }
                //-------------------------
                var xmlDocumentSSC = ctxLoad.getObjectResult();
                var jsonString = xmlDocumentSSC.getNativeXmlDocument();
                var jsonSettings = null;
                try {
                    jsonSettings = JSON.parse(jsonString);
                }
                catch (e) {
                    if (callback != null) {
                        if (error != null) {
                            error.setError(11111, "ERROR 11113: Error Loading Global Settings - Error Parsing Json :" + e.message);
                            if (context != null)
                                context.setError(error);
                        }
                        return callback(context);
                    }
                    //-----------------
                    aGlobalSettings.setJsonSettings(jsonSettings);
                }
            };
            //--------------------------------------
            aXmlConfigurator._iXmlConfiguratorSetup.loadTextFiles(fileInfoList, errorSettings, contextSettings, callbackLoadSettingsV2);
        }
        catch (e) {
            //document.getElementById("sdk.message").innerHTML += "<p>cannot load xml files: " + e.stack + "</p>";
            if (callback != null) {
                if (error != null) {
                    error.setError(11111, "ERROR 11111: Error Loading Global Settings");
                    if (context != null)
                        context.setError(error);
                }
                return callback(context);
            }
        }
    }
    //==================================
    //  loadXMLConfigurationFiles2
    //=================================
    function loadXMLConfigurationFiles2(aFileStorage, aUrlStorage, aHardwareSettings, aOpeningHours, aScreenSaverConfig, callback) {
        //var aSDKGeneralService:amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV = new rmodSDKGeneralService.rm_transversalservices.R_SDK_JsTV(null, null, null, error);
        //aSDKGeneralService._iService.setUtilsService(aUtilsService); //test
        var aError2 = aSrvLocator._iEntityCreation.createDefaultError();
        var aErrorLog = aSrvLocator._iEntityCreation.createDefaultError();
        var aXMLFileHD = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
        aXMLFileHD.setStorage(aFileStorage);
        aXMLFileHD.setPath("/moodmedia/software_v5/settings/");
        aXMLFileHD.setName("hardware_settings.xml");
        aXMLFileHD.setUrlStorage(aUrlStorage);
        aXMLFileHD.setUrlPath(aXMLFileHD.getPath());
        aXMLFileHD.setUrlName(aXMLFileHD.getName());
        var aXMLFileOH = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
        aXMLFileOH.setStorage(aFileStorage);
        aXMLFileOH.setPath("/moodmedia/software_v5/settings/");
        aXMLFileOH.setName("opening_hour_settings.xml");
        aXMLFileOH.setUrlStorage(aUrlStorage);
        aXMLFileOH.setUrlPath(aXMLFileOH.getPath());
        aXMLFileOH.setUrlName(aXMLFileOH.getName());
        //--- new 
        var aXMLFileScreenSaverConfig = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
        var errorFSC = aSrvLocator._iEntityCreation.createDefaultError();
        var contextFSC = aSrvLocator._iEntityCreation.createDefaultContext();
        aXMLFileScreenSaverConfig.setStorage(aFileStorage);
        aXMLFileScreenSaverConfig.setPath("/moodmedia/project/");
        aXMLFileScreenSaverConfig.setName("screen_saver_v5.xml");
        aXMLFileScreenSaverConfig.setUrlStorage(aUrlStorage);
        aXMLFileScreenSaverConfig.setUrlPath(aXMLFileScreenSaverConfig.getPath());
        aXMLFileScreenSaverConfig.setUrlName(aXMLFileScreenSaverConfig.getName());
        var xmlFileInfoList = new Array();
        //xmlFileInfoList.push(aXMLFileHD);
        //xmlFileInfoList.push(aXMLFileOH);
        xmlFileInfoList.push(aXMLFileScreenSaverConfig);
        try {
            var callbackLoadXMLFiles = function callbackLoadXMLFiles(ctx) {
                if (debugMain) {
                    document.getElementById("rend.message").innerHTML += "<p>callbackLoadXMLFiles ...OK" + "</p>";
                }
                if ((ctx._error != null) && (ctx._error._id != null) && (ctx._error._id != 0) && (ctx._error._id != 5010)) {
                    var callbackLog3 = function callbackLog3(ctx) {
                    };
                    if (debugMain) {
                        document.getElementById("rend.message").innerHTML += "<p>Load XML Files : failed " + +ctx._error._msg + "</p>";
                    }
                    aLogService._iLogMain.log(4, "clientNodejs" + "\t\t" + "Load XML Files : failed" + ctx._error._msg, aErrorLog, context, callbackLog3);
                    return;
                }
                var callbackLog2 = function callbackLog2(ctx) {
                };
                //context.setRemoteCallback(true);
                aLogService._iLogMain.log(4, "clientNodejs" + "\t\t" + "Load XML Files : ok", aErrorLog, context, callbackLog2);
                //-------------------------
                //document.getElementById("rend.message").innerHTML += "<p>var callbackGetXmlObjectsScreenSaverConfig "  +  "</p>";  
                var callbackGetXmlObjectsScreenSaverConfig = function callbackGetXmlObjectsScreenSaverConfig(ctxSSC) {
                    var xmlDocumentSSC = ctxSSC.getObjectResult();
                    var xmlString = xmlDocumentSSC.getNativeXmlDocument();
                    //var xmlText = xmlDocumentSSC.
                    //<messages>
                    //<buffer_message trans_id="0000">
                    //   <file>/moodmedia/project/screen_saver/PLAY_SCREENSAVER_TOTEM.swf</file>
                    //   <last_media_in_zone>False</last_media_in_zone>
                    //   <type>form_flashplayer</type>
                    //   <duration>10000</duration>
                    //   <position>Stretch</position>
                    //</buffer_message>
                    //</messages>
                    //-----------------------
                    //var strBM_attr_transId       = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/@trans_id", error) ;  
                    // document.getElementById("rend.message").innerHTML += "<p>start get field value: "  + "</p>";  
                    var strBM_file = aUtilsService._iUtilsStrings.getFieldValue(xmlString, "<file>", "</file>"); //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/file", error) ;  
                    var strBM_last_media_in_zone = aUtilsService._iUtilsStrings.getFieldValue(xmlString, "<last_media_in_zone>", "</last_media_in_zone>"); //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/last_media_in_zone", error) ;  
                    var strBM_type = aUtilsService._iUtilsStrings.getFieldValue(xmlString, "<type>", "</type>"); //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/type", error) ;  
                    var strBM_duration = aUtilsService._iUtilsStrings.getFieldValue(xmlString, "<duration>", "</duration>"); //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/duration", error) ;  
                    var strBM_position = aUtilsService._iUtilsStrings.getFieldValue(xmlString, "<position>", "</position>"); //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/position", error) ;  
                    aScreenSaverConfig.setFileFullName(aUrlStorage + strBM_file);
                    aScreenSaverConfig.setLastMediaInZoneFromString(strBM_last_media_in_zone);
                    aScreenSaverConfig.setMediaTypeFromConfigString(strBM_type);
                    aScreenSaverConfig.setDurationFromString(strBM_duration);
                    aScreenSaverConfig.setImageDisplayTypeFromConfigString(strBM_position);
                    //document.getElementById("rend.message").innerHTML += "<p>start get field value callback: "  + "</p>";  
                    if (callback != null)
                        return callback(null);
                };
                var contextOH = aSrvLocator._iEntityCreation.createDefaultContext();
                var errorOH = aSrvLocator._iEntityCreation.createDefaultError();
                //document.getElementById("rend.message").innerHTML += "<p>getXmlJsonObject: "  + "</p>";
                aXmlConfigurator._iXmlConfiguratorMain.getXmlJsonObject(aXMLFileScreenSaverConfig.getStorage(), aXMLFileScreenSaverConfig.getPath(), aXMLFileScreenSaverConfig.getName(), errorFSC, contextFSC, callbackGetXmlObjectsScreenSaverConfig);
            };
            var context4 = aSrvLocator._iEntityCreation.createDefaultContext();
            //context3.setRemoteCallback(true);
            //document.getElementById("rend.message").innerHTML += "<p>start load text file: "  + "</p>";
            if (debugMain) {
                document.getElementById("rend.message").innerHTML += "<p>Load XML Files...</p>";
            }
            aXmlConfigurator._iXmlConfiguratorSetup.loadTextFiles(xmlFileInfoList, aError2, context4, callbackLoadXMLFiles);
        }
        catch (e) {
            if (debugMain) {
                document.getElementById("rend.message").innerHTML += "<p>cannot load xml files: " + e.stack + "</p>";
            }
        }
    }
    //=================================
    //   start app
    //=================================
    //===================================================
    // Playlist test methods 
    //===================================================
    var aPlaylistError = aSrvLocator._iEntityCreation.createDefaultError();
    var aPlaylistContext = aSrvLocator._iEntityCreation.createDefaultContext();
    //--
    var aPlaylistFile = aSrvLocator._iEntityCreation.createDefaultFileInfo(aPlaylistError);
    aPlaylistFile.setStorage(aFileStorage);
    aPlaylistFile.setPath("/moodmedia/playlist/");
    aPlaylistFile.setName("playlist_v5.json");
    aPlaylistFile.setUrlStorage(aUrlStorage);
    aPlaylistFile.setUrlPath(aPlaylistFile.getPath());
    aPlaylistFile.setUrlName(aPlaylistFile.getName());
    //--
    var aSavePlaylistFile = aSrvLocator._iEntityCreation.createDefaultFileInfo(aPlaylistError);
    //aSavePlaylistFile.setStorage(aFileStorage);
    aSavePlaylistFile.setStorage(_getDefaultResourceStorageName()); //"c:/");
    aSavePlaylistFile.setPath("/moodmedia/playlist/");
    aSavePlaylistFile.setName("playlist_v5_saved.json");
    aSavePlaylistFile.setUrlStorage(aUrlStorage);
    aSavePlaylistFile.setUrlPath(aPlaylistFile.getPath());
    aSavePlaylistFile.setUrlName(aPlaylistFile.getName());
    //--
    var aSaveUrlPlaylistFile = aSrvLocator._iEntityCreation.createDefaultFileInfo(aPlaylistError);
    aSaveUrlPlaylistFile.setStorage(_getDefaultResourceStorageUrlName());
    aSaveUrlPlaylistFile.setPath("/moodmedia/playlist/");
    aSaveUrlPlaylistFile.setName("playlist_v5_saved.json");
    aSaveUrlPlaylistFile.setUrlStorage(aUrlStorage);
    aSaveUrlPlaylistFile.setUrlPath(aPlaylistFile.getPath());
    aSaveUrlPlaylistFile.setUrlName(aPlaylistFile.getName());
    //--
    var playlistType = "mood_v5";
    //--- the service creation
    var aLogSaveFile = new rmodLogService.rm_transversalservices.R_LogService(null, null, null, error);
    aLogSaveFile._iService.setServiceLocator(aSrvLocator);
    aLogSaveFile._iService.setTargetService(aSDKJsTV);
    aLogSaveFile._iService.setUtilsService(aUtilsService);
    aLogSaveFile._iService.setServiceLocator(aSrvLocator);
    //aLogSaveFile._iRemoteService.startup(__socket);
    //=================================
    //   start app
    //=================================
    //---------------------------------------------------------------
    /*
    function _start_MainLoop()
    {
      //alert("client_playlistLoad");
      var callbackLoadXMLConfigurationFilesNew = function callbackLoadXMLConfigurationFilesNew()
      {
        var callbackLoadPlaylist = function callbackLoadPlaylist()
        {
          //==
          if (aPlaylistError.isError())
          {
            //(<HTMLTextAreaElement>document.getElementById('playlisttext')).value="";
            //(<HTMLTextAreaElement>document.getElementById('playlistparsingresume')).value=aPlaylistError.getErrMsg();
            //(<HTMLInputElement>document.getElementById('playlistmessage')).value="Error Loading the playlist";
            alert("ERROR: loading the playlist." + aPlaylistError.getErrMsg()) ;
          }else{
            //htm.innerHTML += "\r\n_______allpl+allstatus+etc+allogic+plcreation+start_____________333333333333333333333333333333333333";
    
            var jsonStream = aPlaylistController._iPlaylistControllerConfig.getPlaylist().toJSONString();
            //(<HTMLTextAreaElement>document.getElementById('playlistparsingresume')).value=jsonStream;
            //(<HTMLTextAreaElement>document.getElementById('playlisttext')).value=jsonStream;
            //(<HTMLInputElement>document.getElementById('playlistmessage')).value="Successfully Load the playlist";
            var callbackMainLoop = function callbackMainLoop()
            {
              var a =1;
            }
            aPlaylistController._iPlaylistControllerRun.mainLoop(null,null, callbackMainLoop);
          }
        }
        //
       var playlistFile     = aPlaylistController._iPlaylistControllerConfig.getPlaybackGlobalConfig()._aPlaylistFile;
       var mediaFilesFolder = aPlaylistController._iPlaylistControllerConfig.getPlaybackGlobalConfig()._aMediaFilesFolder;
       mediaFilesFolder.setStorage(aFileStorage);
       mediaFilesFolder.setPath("/media_files/");
       mediaFilesFolder.setName("");
       mediaFilesFolder.setUrlStorage(aUrlStorage);
       mediaFilesFolder.setUrlPath(mediaFilesFolder.getPath());
       mediaFilesFolder.setUrlName(mediaFilesFolder.getName());
       var bTestFileExists = true;
       aPlaylistController._iPlaylistControllerConfig.loadPlaylist(playlistType, aPlaylistFile, mediaFilesFolder, bTestFileExists, aPlaylistError, aPlaylistContext, callbackLoadPlaylist);
      }
      loadXMLConfigurationFiles2(aFileStorage, aUrlStorage, aHardwareSettings, aOpeningHours, aScreenSaverConfig, callbackLoadXMLConfigurationFilesNew);
    }
    configPlayback(aFileStorage, aUrlStorage,  aHardwareSettings,aOpeningHours, aScreenSaverConfig, null);
    _start_MainLoop();
    */
    //======================================
    //   start -> LAST MAIN FUNCTION
    //======================================
    var setMainDebug = function setMainDebug(aJsonSettings) {
        debugMain = false;
        if (aJsonSettings != null) {
            if (aJsonSettings.debug != null) {
                if (aJsonSettings.debug.main_debug != null) {
                    debugMain = aJsonSettings.debug.main_debug;
                }
            }
        }
        aCronService._iServiceConfig.setMainDebug(debugMain);
        document.getElementById("splash_id").style.display = "block";
        if (debugMain) {
            aUpdateSoftware._iServiceConfig.setDebug(false); //false);//
            aPlaylistDownloader._iServiceConfig.setDebug(true); //true)//
            aVolumeSetupService._iServiceConfig.setDebug(true);
            aScreenshotService._iServiceConfig.setDebug(true);
            aMonitoringService._iServiceConfig.setDebug(true);
            aStartupService._iServiceConfig.setDebug(true);
            aLiveCommandsService._iServiceConfig.setDebug(true);
            aSettingsSyncService._iServiceConfig.setDebug(true);
            aSDKJsTV._iServiceConfig.setDebug(true);
            aCronService._iServiceConfig.setDebug(true);
            document.getElementById("rend.message").style.display = "block";
            document.getElementById("rend.message").innerHTML += "<p>APPLICATION VERSION: " + aPlaybackGlobalConfig._appVersion
                + " BUILD NO: " + aPlaybackGlobalConfig._appBuildNo + "</p>";
            if (aPlaybackGlobalConfig._appBuildNo % 5 == 0) {
                document.getElementById("rend.message").style.backgroundColor = "fuchsia";
            }
            else if (aPlaybackGlobalConfig._appBuildNo % 5 == 1) {
                document.getElementById("rend.message").style.backgroundColor = "springgreen";
            }
            else if (aPlaybackGlobalConfig._appBuildNo % 5 == 2) {
                document.getElementById("rend.message").style.backgroundColor = "cyan";
            }
            else if (aPlaybackGlobalConfig._appBuildNo % 5 == 3) {
                document.getElementById("rend.message").style.backgroundColor = "coral";
            }
            else if (aPlaybackGlobalConfig._appBuildNo % 5 == 4) {
                document.getElementById("rend.message").style.backgroundColor = "cadetblue";
            }
            document.getElementById("rend.message").innerHTML += "<p>MESSAGE: Start ....</p>";
        }
    };
    //---------
    aPlaybackGlobalConfig._platform = "tizen"; //"windows";
    aPlaybackGlobalConfig._realPlatform = "tizen";
    //---------
    var aPlaylistDownloader;
    aPlaylistDownloader = aSrvLocator._iServiceCreation.createDefaultService_PlaylistDownloader(null, aSrvLocator, aLogService, 0, null);
    aPlaylistDownloader._iService.setSDKService(aSDKJsTV);
    aPlaylistDownloader._iPlaylistDownloaderConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    aPlaylistDownloader._iPlaylistDownloaderConfig.setActivityLogService(aActivityLogService);
    //---------
    var aUpdateSoftware;
    aUpdateSoftware = aSrvLocator._iServiceCreation.createDefaultService_UpdateSoftware(null, aSrvLocator, aLogService, 0, null);
    aUpdateSoftware._iService.setSDKService(aSDKJsTV);
    aUpdateSoftware._iUpdateSoftwareConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    aUpdateSoftware._iUpdateSoftwareConfig.setActivityLogService(aActivityLogService);
    var aScreenshotService = aSrvLocator._iServiceCreation.createDefaultService_Screenshot(null, aSrvLocator, aLogService, 0, null);
    aScreenshotService._iService.setSDKService(aSDKJsTV);
    aScreenshotService._iService.setUtilsService(aUtilsService);
    aScreenshotService._iScreenshotConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    aScreenshotService._iScreenshotConfig.setActivityLogService(aActivityLogService);
    var aMonitoringService = aSrvLocator._iServiceCreation.createDefaultService_Monitoring(null, aSrvLocator, aLogService, 0, null);
    aMonitoringService._iService.setSDKService(aSDKJsTV);
    aMonitoringService._iService.setUtilsService(aUtilsService);
    aMonitoringService._iMonitoringConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    aMonitoringService._iMonitoringConfig.setActivityLogService(aActivityLogService);
    aMonitoringService._iMonitoringConfig.setScreenshotService(aScreenshotService);
    aCronService._iCronServiceConfig.setMonitoringService(aMonitoringService);
    var aStartupService = aSrvLocator._iServiceCreation.createDefaultService_Startup(null, aSrvLocator, aLogService, 0, null);
    aStartupService._iService.setSDKService(aSDKJsTV);
    aStartupService._iService.setUtilsService(aUtilsService);
    aStartupService._iStartupConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    aStartupService._iStartupConfig.setActivityLogService(aActivityLogService);
    var aVolumeSetupService = aSrvLocator._iServiceCreation.createDefaultService_VolumeSetup(null, aSrvLocator, aLogService, 0, null);
    aVolumeSetupService._iService.setSDKService(aSDKJsTV);
    aVolumeSetupService._iService.setUtilsService(aUtilsService);
    aVolumeSetupService._iVolumeSetupConfig.setActivityLogService(aActivityLogService);
    var aSettingsSyncService = aSrvLocator._iServiceCreation.creatDefaultService_SettingsSync(null, aSrvLocator, aLogService, 0, null);
    aSettingsSyncService._iService.setSDKService(aSDKJsTV);
    aSettingsSyncService._iService.setUtilsService(aUtilsService);
    aSettingsSyncService._iSettingsSyncConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    aSettingsSyncService._iSettingsSyncConfig.setActivityLogService(aActivityLogService);
    var aSettingsSyncInterface = aSrvLocator._iServiceCreation.creatDefaultService_SettingsSyncInterface(null, aSrvLocator, aLogService, 0, null);
    aSettingsSyncInterface._iService.setSDKService(aSDKJsTV);
    aSettingsSyncInterface._iService.setUtilsService(aUtilsService);
    var aLiveCommandsService = aSrvLocator._iServiceCreation.createDefaultService_LiveCommands(null, aSrvLocator, aLogService, 0, null);
    aLiveCommandsService._iService.setSDKService(aSDKJsTV);
    aLiveCommandsService._iService.setUtilsService(aUtilsService);
    aLiveCommandsService._iLiveCommandsConfig.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
    aLiveCommandsService._iLiveCommandsConfig.setActivityLogService(aActivityLogService);
    aLiveCommandsService._iLiveCommandsConfig.setVolumeSetupService(aVolumeSetupService);
    aLiveCommandsService._iLiveCommandsConfig.setMonitoringService(aMonitoringService);
    aLiveCommandsService._iLiveCommandsConfig.setSettingsSyncService(aSettingsSyncService);
    var timezonesList = [];
    //=====================================
    function loadTimezones(aFileStorage, error, context, callback) {
        if (callback == null)
            return;
        var aTimezonesFile = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
        aTimezonesFile.setStorage(aFileStorage);
        aTimezonesFile.setPath("/moodmedia/software_v5/settings/");
        aTimezonesFile.setName("time_zones.json");
        var callbackLoadTimezones = function (ctx1) {
            if (ctx1 != null && !ctx1.isError()) {
                var jsonString = ctx1.getResult();
                var timezones = null;
                var timezonesFilePath = aTimezonesFile.getFullName();
                ;
                try {
                    timezones = JSON.parse(jsonString);
                }
                catch (e) {
                    error != null && error.setError(9063, "loadTimezones: " + timezonesFilePath + " contains invalid JSON format");
                }
                if (!error.isError()) {
                    var timezonesArr = [];
                    if (timezones != null && timezones.tz_tizen_to_mood != null) {
                        timezonesArr = timezones.tz_tizen_to_mood;
                        for (var i = 0; i < timezonesArr.length; i++) {
                            aTimeZoneConvertor != null && typeof aTimeZoneConvertor.setNativeToMoodTZ === "function" && aTimeZoneConvertor.setNativeToMoodTZ(timezonesArr[i].tizen_tz, timezonesArr[i].mood_tz);
                        }
                    }
                    if (timezones != null && timezones.tz_mood_to_tizen != null) {
                        timezonesArr = timezones.tz_mood_to_tizen;
                        for (var i = 0; i < timezonesArr.length; i++) {
                            timezonesList.push({ value: timezonesArr[i].mood_tz });
                            aTimeZoneConvertor != null && typeof aTimeZoneConvertor.setMoodToNativeTZ === "function" && aTimeZoneConvertor.setMoodToNativeTZ(timezonesArr[i].mood_tz, timezonesArr[i].tizen_tz);
                        }
                    }
                }
                context != null && context.setError(error);
                callback(context);
            }
        };
        context.setRemoteCallback(true);
        aSDKJsTV._iSDKFileSystem.readTextFile2(aTimezonesFile.getStorage(), aTimezonesFile.getPath(), aTimezonesFile.getName(), error, context, callbackLoadTimezones);
    }
    //==================================
    //  loadAllConfigurationFiles
    //==================================
    //=====================================
    function loadFileSettingsV2_(aFileStorage, aUrlStorage, aGlobalSettings, error, context, callback) {
        var aJsonFileSettingsV2 = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
        aJsonFileSettingsV2.setStorage(aFileStorage);
        aJsonFileSettingsV2.setPath("/moodmedia/software_v5/settings/");
        aJsonFileSettingsV2.setName("settings_v2.json");
        aJsonFileSettingsV2.setUrlStorage(aUrlStorage);
        aJsonFileSettingsV2.setUrlPath(aJsonFileSettingsV2.getPath());
        aJsonFileSettingsV2.setUrlName(aJsonFileSettingsV2.getName());
        var fileInfoList = new Array();
        //xmlFileInfoList.push(aXMLFileHD);
        //xmlFileInfoList.push(aXMLFileOH);
        fileInfoList.push(aJsonFileSettingsV2);
        document.getElementById("rend.message").innerHTML += "<p>fileInfoList = " + fileInfoList + "</p>";
        document.getElementById("rend.message").innerHTML += "<p>aJsonFileSettingsV2 = " + aJsonFileSettingsV2 + "</p>";
        try {
            var callbackLoadSettingsV2 = function callbackLoadSettingsV2(ctxLoad) {
                //-------------------------
                if (ctxLoad.isError()) {
                    if (callback != null) {
                        if (error != null) {
                            if (debugMain) {
                                document.getElementById("rend.message").innerHTML += "<p>ERROR 11112: Error Loading Global Settings - Error Reading Global Settings File :</p>";
                            }
                            error.setError(11111, "ERROR 11112: Error Loading Global Settings - Error Reading Global Settings File :");
                            if (context != null)
                                context.setError(error);
                        }
                        return callback(context);
                    }
                }
                //-------------------------
                var jsonString = ctxLoad.getResult();
                try {
                    var jsonSettings = JSON.parse(jsonString);
                    aGlobalSettings.mapSettingsLocalToV2(jsonSettings);
                    aGlobalSettings.setJsonSettings(jsonSettings);
                    setMainDebug(jsonSettings);
                    var cbSaveFile = function (ctx) {
                        if (callback != null) {
                            if (debugMain) {
                                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: Global Settings Loaded: OK</p>";
                            }
                            return callback(context);
                        }
                    };
                    var errorSaveFile = aSrvLocator._iEntityCreation.createDefaultError();
                    var contextSaveFile = aSrvLocator._iEntityCreation.createDefaultContext();
                    var aFile = aGlobalSettings.getSettingsFolder();
                    aFile.setName("settings_v2_modified.json");
                    contextSaveFile.setRemoteCallback(true);
                    aSDKJsTV._iSDKFileSystem.writeTextFile2(aFile.getStorage(), aFile.getPath(), aFile.getName(), JSON.stringify(jsonSettings, null, 2), errorSaveFile, contextSaveFile, cbSaveFile);
                }
                catch (e) {
                    if (callback != null) {
                        if (error != null) {
                            if (debugMain) {
                                document.getElementById("rend.message").innerHTML += "<p>ERROR 11113: Error Loading Global Settings - Error Parsing Json :</p>" + e.message;
                            }
                            error.setError(11111, "ERROR 11113: Error Loading Global Settings - Error Parsing Json :" + e.message);
                            if (context != null)
                                context.setError(error);
                        }
                        return callback(context);
                    }
                }
            };
            //--------------------------------------
            if (debugMain) {
                document.getElementById("rend.message").innerHTML += "<p>MESSAGE: Load global settings...</p>";
            }
            context.setRemoteCallback(true);
            aSDKJsTV._iSDKFileSystem.readTextFile2(aJsonFileSettingsV2.getStorage(), aJsonFileSettingsV2.getPath(), aJsonFileSettingsV2.getName(), error, context, callbackLoadSettingsV2);
            //aXmlConfigurator._iXmlConfiguratorSetup.loadTextFiles(fileInfoList, errorSettings, contextSettings, callbackLoadSettingsV2);
        }
        catch (e) {
            //document.getElementById("sdk.message").innerHTML += "<p>cannot load xml files: " + e.stack + "</p>";
            if (callback != null) {
                if (error != null) {
                    if (debugMain) {
                        document.getElementById("rend.message").innerHTML += "ERROR 11111: Error Loading Global Settings";
                    }
                    error.setError(11111, "ERROR 11111: Error Loading Global Settings");
                    if (context != null)
                        context.setError(error);
                }
                return callback(context);
            }
        }
    }
    //==================================
    //  loadXMLConfigurationFiles2
    //=================================
    function loadXMLConfigurationFiles2_(aFileStorage, aUrlStorage, aHardwareSettings, aOpeningHours, aScreenSaverConfig, callback) {
        //var aSDKGeneralService:amTransversalServicesSDKJsTV.am_transversalservices.A_SDK_JsTV = new rmodSDKGeneralService.rm_transversalservices.R_SDK_JsTV(null, null, null, error);
        //aSDKGeneralService._iService.setUtilsService(aUtilsService); //test
        var aError2 = aSrvLocator._iEntityCreation.createDefaultError();
        var aErrorLog = aSrvLocator._iEntityCreation.createDefaultError();
        var aXMLFileHD = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
        aXMLFileHD.setStorage(aFileStorage);
        aXMLFileHD.setPath("/moodmedia/software_v5/settings/");
        aXMLFileHD.setName("hardware_settings.xml");
        aXMLFileHD.setUrlStorage(aUrlStorage);
        aXMLFileHD.setUrlPath(aXMLFileHD.getPath());
        aXMLFileHD.setUrlName(aXMLFileHD.getName());
        var aXMLFileOH = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
        aXMLFileOH.setStorage(aFileStorage);
        aXMLFileOH.setPath("/moodmedia/software_v5/settings/");
        aXMLFileOH.setName("opening_hour_settings.xml");
        aXMLFileOH.setUrlStorage(aUrlStorage);
        aXMLFileOH.setUrlPath(aXMLFileOH.getPath());
        aXMLFileOH.setUrlName(aXMLFileOH.getName());
        //--- new 
        var aXMLFileScreenSaverConfig = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
        var errorFSC = aSrvLocator._iEntityCreation.createDefaultError();
        var contextFSC = aSrvLocator._iEntityCreation.createDefaultContext();
        aXMLFileScreenSaverConfig.setStorage(aFileStorage);
        aXMLFileScreenSaverConfig.setPath("/moodmedia/project/");
        aXMLFileScreenSaverConfig.setName("screen_saver_v5.xml");
        aXMLFileScreenSaverConfig.setUrlStorage(aUrlStorage);
        aXMLFileScreenSaverConfig.setUrlPath(aXMLFileScreenSaverConfig.getPath());
        aXMLFileScreenSaverConfig.setUrlName(aXMLFileScreenSaverConfig.getName());
        var xmlFileInfoList = new Array();
        //xmlFileInfoList.push(aXMLFileHD);
        //xmlFileInfoList.push(aXMLFileOH);
        xmlFileInfoList.push(aXMLFileScreenSaverConfig);
        try {
            var callbackLoadXMLFiles = function callbackLoadXMLFiles(ctx) {
                if (debugMain) {
                    document.getElementById("rend.message").innerHTML += "<p>callbackLoadXMLFiles " + "</p>";
                }
                if ((ctx._error != null) && (ctx._error._id != null) && (ctx._error._id != 0) && (ctx._error._id != 5010)) {
                    var callbackLog3 = function callbackLog3(ctx) {
                    };
                    if (debugMain) {
                        document.getElementById("rend.message").innerHTML += "<p>Load XML Files : failed " + "</p>";
                    }
                    aLogService._iLogMain.log(4, "clientNodejs" + "\t\t" + "Load XML Files : failed" + ctx._error._msg, aErrorLog, context, callbackLog3);
                    return;
                }
                var callbackLog2 = function callbackLog2(ctx) {
                };
                //context.setRemoteCallback(true);
                aLogService._iLogMain.log(4, "clientNodejs" + "\t\t" + "Load XML Files : ok", aErrorLog, context, callbackLog2);
                //-------------------------
                //document.getElementById("rend.message").innerHTML += "<p>var callbackGetXmlObjectsScreenSaverConfig "  +  "</p>";  
                var callbackGetXmlObjectsScreenSaverConfig = function callbackGetXmlObjectsScreenSaverConfig(ctxSSC) {
                    var xmlDocumentSSC = ctxSSC.getObjectResult();
                    var xmlString = xmlDocumentSSC.getNativeXmlDocument();
                    //var xmlText = xmlDocumentSSC.
                    //<messages>
                    //<buffer_message trans_id="0000">
                    //   <file>/moodmedia/project/screen_saver/PLAY_SCREENSAVER_TOTEM.swf</file>
                    //   <last_media_in_zone>False</last_media_in_zone>
                    //   <type>form_flashplayer</type>
                    //   <duration>10000</duration>
                    //   <position>Stretch</position>
                    //</buffer_message>
                    //</messages>
                    //-----------------------
                    //var strBM_attr_transId       = aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/@trans_id", error) ;  
                    // document.getElementById("rend.message").innerHTML += "<p>start get field value: "  + "</p>";  
                    var strBM_file = aUtilsService._iUtilsStrings.getFieldValue(xmlString, "<file>", "</file>"); //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/file", error) ;  
                    var strBM_last_media_in_zone = aUtilsService._iUtilsStrings.getFieldValue(xmlString, "<last_media_in_zone>", "</last_media_in_zone>"); //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/last_media_in_zone", error) ;  
                    var strBM_type = aUtilsService._iUtilsStrings.getFieldValue(xmlString, "<type>", "</type>"); //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/type", error) ;  
                    var strBM_duration = aUtilsService._iUtilsStrings.getFieldValue(xmlString, "<duration>", "</duration>"); //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/duration", error) ;  
                    var strBM_position = aUtilsService._iUtilsStrings.getFieldValue(xmlString, "<position>", "</position>"); //aUtilsService._iUtilsXMLJson.getXmlXPath_FirstNodeText(xmlDocumentSSC, "messages/buffer_message/position", error) ;  
                    aScreenSaverConfig.setFileFullName(aUrlStorage + strBM_file);
                    aScreenSaverConfig.setLastMediaInZoneFromString(strBM_last_media_in_zone);
                    aScreenSaverConfig.setMediaTypeFromConfigString(strBM_type);
                    aScreenSaverConfig.setDurationFromString(strBM_duration);
                    aScreenSaverConfig.setImageDisplayTypeFromConfigString(strBM_position);
                    //document.getElementById("rend.message").innerHTML += "<p>start get field value callback: "  + "</p>";  
                    if (callback != null)
                        return callback(null);
                };
                var contextOH = aSrvLocator._iEntityCreation.createDefaultContext();
                var errorOH = aSrvLocator._iEntityCreation.createDefaultError();
                //document.getElementById("rend.message").innerHTML += "<p>getXmlJsonObject: "  + "</p>";
                aXmlConfigurator._iXmlConfiguratorMain.getXmlJsonObject(aXMLFileScreenSaverConfig.getStorage(), aXMLFileScreenSaverConfig.getPath(), aXMLFileScreenSaverConfig.getName(), errorFSC, contextFSC, callbackGetXmlObjectsScreenSaverConfig);
            };
            var context4 = aSrvLocator._iEntityCreation.createDefaultContext();
            //context3.setRemoteCallback(true);
            //document.getElementById("rend.message").innerHTML += "<p>start load text file: "  + "</p>";
            aXmlConfigurator._iXmlConfiguratorSetup.loadTextFiles(xmlFileInfoList, aError2, context4, callbackLoadXMLFiles);
        }
        catch (e) {
            if (debugMain) {
                document.getElementById("rend.message").innerHTML += "<p>cannot load xml files: " + e.stack + "</p>";
            }
        }
    }
    //=====================================
    function loadAllFileSettings_(aFileStorage, aUrlStorage, aGlobalSettings, aHardwareSettings, aOpeningHours, aScreenSaverConfig, error, context, callback) {
        var errorUpdateSoftware = aSrvLocator._iEntityCreation.createDefaultError();
        var contextUpdateSoftware = aSrvLocator._iEntityCreation.createDefaultContext();
        var errorCronService = aSrvLocator._iEntityCreation.createDefaultError();
        var contextCronService = aSrvLocator._iEntityCreation.createDefaultContext();
        var callbackLoadXml = function callbackLoadXml() {
            var cbLocalDeviceSettings = function cbLocalDeviceSettings() {
                var callbackActivityLogServiceStart = function () {
                    var cbSettingsSync = function cbSettingsSync() {
                        var callbackSettingsV2 = function callbackettingsV2() {
                            var cbLoadTimezones = function cbLoadTimezones() {
                                var cbStartupSettings = function cbStartupSettings() {
                                    var cbSettingsSyncInterface = function cbSettingsSyncInterface() {
                                        var callbackUpdateSoftware = function callbackUpdateSoftware() {
                                            var callbackPlaylistDownload = function callbackPlaylistDownload() {
                                                var callbackCronServiceStartupSchedule = function callbackCronServiceStartupSchedule() {
                                                    //====================== Ok
                                                    if (callback != null)
                                                        return callback(context);
                                                    return;
                                                };
                                                //===============================================
                                                //document.getElementById("background01").style.display = "block";
                                                //document.getElementById("splash_id").style.display = "none";    
                                                document.getElementById("splash_txt").innerHTML = "Start Playback...</p>";
                                                aCronService._iCronServiceMain.startup_schedule(errorCronService, contextCronService, callbackCronServiceStartupSchedule);
                                            };
                                            //===========================
                                            if (aGlobalSettings._strSerialNumber == "local")
                                                return callbackPlaylistDownload();
                                            //aPlaylistDownloader._iPlaylistDownloaderMain.download(error, context, callbackPlaylistDownload);
                                            callbackPlaylistDownload();
                                        };
                                        //============================== init screenshot service
                                        var errorScreenshot = aSrvLocator._iEntityCreation.createDefaultError();
                                        aScreenshotService._iScreenshotConfig.setDefaultScreenshotOptions(aGlobalSettings.getScreenshotOptions());
                                        aScreenshotService._iScreenshotMain.init(errorScreenshot);
                                        //============================== start monitoring and screenshot services after the startup service because we need device SN to send the reports
                                        document.getElementById("splash_txt").innerHTML = "Monitoring service...</p>";
                                        var errorMonitoring = aSrvLocator._iEntityCreation.createDefaultError();
                                        var contextMonitoring = aSrvLocator._iEntityCreation.createDefaultContext();
                                        aMonitoringService._iMonitoringConfig.setDefaultMonitoringSettings(aGlobalSettings.getMonitoringSettings());
                                        aMonitoringService._iMonitoringMain.init(errorMonitoring);
                                        aMonitoringService._iMonitoringMain.startMonitoring(aMonitoringService._iMonitoringConfig.getDefaultMonitoringSettings(), errorMonitoring, contextMonitoring, null);
                                        //==============================
                                        document.getElementById("splash_txt").innerHTML = "Check Updates...</p>";
                                        aUpdateSoftware._iUpdateSoftwareMain.update(errorUpdateSoftware, contextUpdateSoftware, callbackUpdateSoftware);
                                    };
                                    document.getElementById("splash_txt").innerHTML = "Settings sync UI...</p>";
                                    var errorSettingsSyncInterface = aSrvLocator._iEntityCreation.createDefaultError();
                                    var contextSettingsSyncInterface = aSrvLocator._iEntityCreation.createDefaultContext();
                                    aSettingsSyncInterface._iSettingsSyncInterfaceMain.start(errorSettingsSyncInterface, contextSettingsSyncInterface, cbSettingsSyncInterface);
                                };
                                //==============================
                                document.getElementById("splash_txt").innerHTML = "Startup Settings...</p>";
                                var errorStartupInit = aSrvLocator._iEntityCreation.createDefaultError();
                                var errorStartup = aSrvLocator._iEntityCreation.createDefaultError();
                                var contextStartup = aSrvLocator._iEntityCreation.createDefaultContext();
                                aStartupService._iStartupConfig.setDefaultStartupSettings(aGlobalSettings.getStartupSettings());
                                aStartupService._iStartupMain.init(errorStartupInit);
                                aStartupService._iStartupMain.setSystemStartupSettings(aStartupService._iStartupConfig.getDefaultStartupSettings(), errorStartup, contextStartup, cbStartupSettings);
                            };
                            document.getElementById("splash_txt").innerHTML = "Load Timezones...</p>";
                            loadTimezones(aFileStorage, error, context, cbLoadTimezones);
                        };
                        //=======================
                        document.getElementById("splash_txt").innerHTML = "Load Settings 2...</p>";
                        loadFileSettingsV2_(aFileStorage, aUrlStorage, aGlobalSettings, error, context, callbackSettingsV2);
                    };
                    //=======================
                    document.getElementById("splash_txt").innerHTML = "Settings sync...</p>";
                    var errorSettingsSync = aSrvLocator._iEntityCreation.createDefaultError();
                    var contextSettingsSync = aSrvLocator._iEntityCreation.createDefaultContext();
                    aSettingsSyncService._iSettingsSyncConfig.setFileSettingsUpdate(aFileSettingsUpdate);
                    aSettingsSyncService._iSettingsSyncMain.start(aSettingsSyncService._iSettingsSyncConfig.getDefaultSettingsSync(), errorSettingsSync, contextSettingsSync, cbSettingsSync);
                };
                //=======================
                document.getElementById("splash_txt").innerHTML = "Create Logs...</p>";
                var errorActivityLogSettingsInit = aSrvLocator._iEntityCreation.createDefaultError();
                var errorActivityLogSettingsStart = aSrvLocator._iEntityCreation.createDefaultError();
                var contextActivityLogSettingsStart = aSrvLocator._iEntityCreation.createDefaultContext();
                contextActivityLogSettingsStart.setRemoteCallback(true);
                aActivityLogService._IActivityLogServiceMessaging.init(errorActivityLogSettingsInit);
                aActivityLogService._IActivityLogServiceMessaging.startActivityLogService(errorActivityLogSettingsStart, contextActivityLogSettingsStart, callbackActivityLogServiceStart);
            };
            document.getElementById("splash_txt").innerHTML = "Load local device settings...</p>";
            var errorSettingsSyncInit = aSrvLocator._iEntityCreation.createDefaultError();
            aSettingsSyncService._iSettingsSyncConfig.setDefaultServerDeviceSettingsConfiguration(aGlobalSettings.getServerDeviceSettingsConfiguration());
            aSettingsSyncService._iSettingsSyncConfig.setDefaultSettingsSync(aGlobalSettings.getSettingsSync());
            aSettingsSyncService._iSettingsSyncMain.init(errorSettingsSyncInit);
            aSettingsSyncService._iSettingsSyncMain.loadLocalDeviceSettings(error, context, cbLocalDeviceSettings);
        };
        //======================
        document.getElementById("splash_txt").innerHTML = "Load Settings 1...</p>";
        aPlaybackGlobalConfig.setHardwareSettings(aHardwareSettings);
        aPlaybackGlobalConfig.setOpeningHours(aOpeningHours);
        aPlaybackGlobalConfig.setScreenSaverConfig(aScreenSaverConfig);
        loadXMLConfigurationFiles2_(aFileStorage, aUrlStorage, aHardwareSettings, aOpeningHours, aScreenSaverConfig, callbackLoadXml);
    }
    //---------------------------------------------------------------
    function _start_MainLoopLast(aGlobalSettings) {
        //ma4
        var errorUpdateSoftware = aSrvLocator._iEntityCreation.createDefaultError();
        var contextUpdateSoftware = aSrvLocator._iEntityCreation.createDefaultContext();
        var callbackUpdateSoftware = function callbackUpdateSoftware() {
            var errorFileSettingsUpdate = aSrvLocator._iEntityCreation.createDefaultError();
            var contextFileSettingsUpdate = aSrvLocator._iEntityCreation.createDefaultContext();
            var callbackFileSettingsUpdate = function callbackFileSettingsUpdate(ctx10) {
                if (ctx10.isError()) {
                    document.getElementById("splash_txt").innerHTML = "<p>" + ctx10.getError().getErrMsg() + "<p>";
                    return;
                }
                //alert("client_playlistLoad");
                var errorLoadSettings = aSrvLocator._iEntityCreation.createDefaultError();
                var contextLoadSettings = aSrvLocator._iEntityCreation.createDefaultContext();
                var callbackLoadAllConfigurationFiles = function callbackLoadAllConfigurationFiles(ctx1) {
                    var callbackLoadPlaylist = function callbackLoadPlaylist() {
                        //==
                        if (aPlaylistError.isError()) {
                            //(<HTMLTextAreaElement>document.getElementById('playlisttext')).value="";
                            //(<HTMLTextAreaElement>document.getElementById('playlistparsingresume')).value=aPlaylistError.getErrMsg();
                            //(<HTMLInputElement>document.getElementById('playlistmessage')).value="Error Loading the playlist";
                            alert("ERROR: loading the playlist." + aPlaylistError.getErrMsg());
                        }
                        else {
                            //htm.innerHTML += "\r\n_______allpl+allstatus+etc+allogic+plcreation+start_____________333333333333333333333333333333333333";
                            //var jsonStream = aPlaylistController._iPlaylistControllerConfig.getPlaylist().toJSONString();
                            //(<HTMLTextAreaElement>document.getElementById('playlistparsingresume')).value=jsonStream;
                            //(<HTMLTextAreaElement>document.getElementById('playlisttext')).value=jsonStream;
                            //(<HTMLInputElement>document.getElementById('playlistmessage')).value="Successfully Load the playlist";
                            var callbackMainLoop = function callbackMainLoop() {
                                var a = 1;
                                //===============================================
                                var callbackDownloadPlaylist = function callbackDownloadPlaylist() {
                                };
                                //aDownloadPlayistService;
                                //===============================================
                            };
                            var errorLiveCommands = aSrvLocator._iEntityCreation.createDefaultError();
                            var contextLiveCommands = aSrvLocator._iEntityCreation.createDefaultContext();
                            aLiveCommandsService._iLiveCommandsConfig.setDefaultLiveCommandsSettings(aGlobalSettings.getLiveCommandsSettings());
                            aLiveCommandsService._iLiveCommandsMain.init(errorLiveCommands);
                            aLiveCommandsService._iLiveCommandsMain.startListener(aLiveCommandsService._iLiveCommandsConfig.getDefaultLiveCommandsSettings(), errorLiveCommands, contextLiveCommands, null);
                            //aPlaylistController._iPlaylistControllerRun.mainLoop(null,null, callbackMainLoop);
                            callbackMainLoop();
                        }
                    };
                    //
                    //var playlistFile     = aPlaylistController._iPlaylistControllerConfig.getPlaybackGlobalConfig()._aPlaylistFile;
                    //var mediaFilesFolder = aPlaylistController._iPlaylistControllerConfig.getPlaybackGlobalConfig()._aMediaFilesFolder;
                    //mediaFilesFolder.setStorage(aFileStorage);
                    //mediaFilesFolder.setPath("/media_files/"); 
                    //mediaFilesFolder.setName("");
                    //mediaFilesFolder.setUrlStorage(aUrlStorage);
                    //mediaFilesFolder.setUrlPath(mediaFilesFolder.getPath()); 
                    //mediaFilesFolder.setUrlName(mediaFilesFolder.getName());
                    //var bTestFileExists = true;
                    //aPlaylistController._iPlaylistControllerConfig.loadPlaylist(playlistType, aPlaylistFile, mediaFilesFolder, bTestFileExists, aPlaylistError, aPlaylistContext, callbackLoadPlaylist); 
                    callbackLoadPlaylist();
                };
                // =====================================
                loadAllFileSettings_(aFileStorage, aUrlStorage, aGlobalSettings, aHardwareSettings, aOpeningHours, aScreenSaverConfig, errorLoadSettings, contextLoadSettings, callbackLoadAllConfigurationFiles);
            };
            //=================================
            document.getElementById("splash_txt").innerHTML = "Files Update...</p>";
            aFileSettingsUpdate._iFileSettingsUpdateMain.update(errorFileSettingsUpdate, contextFileSettingsUpdate, callbackFileSettingsUpdate);
        };
        //============================
        //ma4
        //document.getElementById("splash_txt").innerHTML = "Software Update...</p>";   
        //aUpdateSoftware._iUpdateSoftwareMain.update(errorUpdateSoftware, contextUpdateSoftware, callbackUpdateSoftware);
        callbackUpdateSoftware();
    }
    //configPlayback(aFileStorage, aUrlStorage,  aHardwareSettings,aOpeningHours, aScreenSaverConfig, null);
    _start_MainLoopLast(aPlaybackGlobalConfig);
    //======================================
    //   end  -> LAST MAIN FUNCTION
    //======================================
    //=========================================
    //   Test Download File
    //=========================================
    //--------------------------------------
    //  download file
    //--------------------------------------
    //---------------------------------------------------------------
    /*
    document.getElementById("rend.message").innerHTML += "<p>start download</p>";
    function test_downloadFile(remoteUrlName: string, dstStorageName: string, dstFolderName: string, dstFileName: string)
    {
      var contextDownloadFile:amGeneralContext.am_general.A_Context    = aSrvLocator._iEntityCreation.createDefaultContext();
      var errorDownloadFile:amGeneralError.am_general.A_Error          = aSrvLocator._iEntityCreation.createDefaultError();
    
      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(remoteUrlName);
      fileInfo.setPath("");
      fileInfo.setName("");
      context.setResult("");
      context.setObjectResult(fileInfo);
    
      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(dstStorageName);
      fileInfo2.setPath(dstFolderName);
      fileInfo2.setName(dstFileName);
      context.setObject2Result(fileInfo2);
    
      //this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_downloadfile\t\tstart download file from: "
      //+ srcUrlFullName + " to "
      //+ dstStorageName + dstFolderName + dstFileName );
        var callbackDownloadFile = function callbackDownloadFile()
        {
          //==
          var a = 1 ;
          if (errorDownloadFile.isError())
          {
            document.getElementById("rend.message").innerHTML += "<p>download error" +  errorDownloadFile.getErrMsg() + "</p>";
            //alert("ERROR: " + aPlaylistError.getErrMsg()) ;
            a =2 ;
          }else{
            document.getElementById("rend.message").innerHTML += "<p>download success</p>";
            //alert("SUCCESS");
            a=3;
          }
        }
        contextDownloadFile.setRemoteCallback(true);
        aSDKJsTV._iSDKFileSystem.downloadFile2(remoteUrlName, dstStorageName, dstFolderName, dstFileName, errorDownloadFile, contextDownloadFile, callbackDownloadFile);
    }
    var downloadStorage = _getDefaultResourceStorageUrlName();
    test_downloadFile("https://scorealarm-stats.freetls.fastly.net/event/detail/rosuperbetsport/ro?id=br:match:23785429",
                       downloadStorage, "__download/", "score_23785429.json");
    */
    /*
    //----------------------------------------------------------------
    // public unzipFile2(zipStorageName: string, zipFolderName: string, zipFileName: string, unzipStorageName: string, unzipFolderName: string, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback)
    //---------------------------------------------------------------
    document.getElementById("rend.message").innerHTML += "<p>start unzip</p>";
    function test_unzipFile(zipStorageName: string, zipFolderName: string, zipFileName: string, unzipStorageName: string, unzipFolderName: string)
    {
      var contextUnzipFile:amGeneralContext.am_general.A_Context    = aSrvLocator._iEntityCreation.createDefaultContext();
      var errorUnzipFile:amGeneralError.am_general.A_Error          = aSrvLocator._iEntityCreation.createDefaultError();
    
      var fileInfo:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo.setStorage(unzipStorageName);
      fileInfo.setPath(unzipFolderName);
      fileInfo.setName("");
      context.setResult("");
      context.setObjectResult(fileInfo);
    
      var fileInfo2:amGeneralFileInfo.am_general.A_FileInfo = aSrvLocator._iEntityCreation.createDefaultFileInfo(error);
      fileInfo2.setStorage(zipStorageName);
      fileInfo2.setPath(zipFolderName);
      fileInfo2.setName(zipFileName);
      context.setObject2Result(fileInfo2);
    
      //this._owner._aLogRenderer._iLogMainRenderer.logStartAction("sdkrenderer.file-system.action_downloadfile\t\tstart download file from: "
      //+ srcUrlFullName + " to "
      //+ dstStorageName + dstFolderName + dstFileName );
        var callbackUnzipFile = function callbackUnzipFile()
        {
          //==
          var a = 1 ;
          if (errorUnzipFile.isError())
          {
            document.getElementById("rend.message").innerHTML += "<p>unzip error" +  errorUnzipFile.getErrMsg() + "</p>";
            //alert("ERROR: " + aPlaylistError.getErrMsg()) ;
            a =2 ;
          }else{
            document.getElementById("rend.message").innerHTML += "<p>unzip success</p>";
            //alert("SUCCESS");
            a=3;
          }
        }
        contextUnzipFile.setRemoteCallback(true);
        aSDKJsTV._iSDKFileSystem.unzipFile2(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName, errorUnzipFile, contextUnzipFile, callbackUnzipFile);
    }
    var zipStorage   = _getDefaultResourceStorageName2();
    var zipFolder    = "__zip/";
    var zipFile      = "archive.zip";
    var unzipStorage = _getDefaultResourceStorageName2();
    var unzipFolder  = "__unzip";
    test_unzipFile( zipStorage, zipFolder, zipFile, unzipStorage, unzipFolder);
    */
    /*
    var callbackLoadXMLConfigurationFiles = function callbackLoadXMLConfigurationFiles()
    {
      configPlayback(aFileStorage, aUrlStorage,  aHardwareSettings, aOpeningHours, aScreenSaverConfig, null);//callback);
      _start_MainLoop();
    }
    loadXMLConfigurationFiles2( aFileStorage, aUrlStorage,
                               aHardwareSettings, aOpeningHours, aScreenSaverConfig,
                               callbackLoadXMLConfigurationFiles);
    */
    //=========================================
    // exported functions in html
    //=========================================
    //--------------------------------------
    //  display Folder File list functions
    //--------------------------------------
    //---------------------------------------------------------------
    var client_displayFolderFileList = function client_displayFolderFileList(storageName, folderName) {
        return aSDKRenderer._iFileSystemRenderer.action_getFileList(storageName, folderName);
    };
    exports.client_displayFolderFileList = client_displayFolderFileList;
    //--------------------------------------
    //  display File functions
    //--------------------------------------
    //---------------------------------------------------------------
    var client_displayFile = function client_displayFile(storageName, folderName, fileName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayFile(storageName, folderName, fileName);
    };
    exports.client_displayFile = client_displayFile;
    //---------------------------------------------------------------
    var client_displayNewFile = function client_displayNewFile(storageName, folderName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayNewFile(storageName, folderName);
    };
    exports.client_displayNewFile = client_displayNewFile;
    //---------------------------------------------------------------
    var client_eraseDisplayFile = function client_displayFile(storageName, folderName, fileName) {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayFile();
    };
    exports.client_eraseDisplayFile = client_eraseDisplayFile;
    //---------------------------------------------------------------
    var client_saveFile = function client_saveFile(storageName, folderName, fileName, fileContent) {
        return aSDKRenderer._iFileSystemRenderer.action_saveFile(storageName, folderName, fileName, fileContent);
    };
    exports.client_saveFile = client_saveFile;
    //--------
    // delete file
    //------
    //---------------------------------------------------------------
    var client_displayDeleteFile = function client_displayDeleteFile(storageName, folderName, fileName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayDeleteFile(storageName, folderName, fileName);
    };
    exports.client_displayDeleteFile = client_displayDeleteFile;
    //---------------------------------------------------------------
    var client_eraseDisplayDeleteFile = function client_eraseDisplayDeleteFile() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayDeleteFile();
    };
    exports.client_eraseDisplayDeleteFile = client_eraseDisplayDeleteFile;
    //---------------------------------------------------------------
    var client_deleteFile = function client_deleteFile(storageName, folderName, fileName) {
        return aSDKRenderer._iFileSystemRenderer.action_deleteFile(storageName, folderName, fileName);
    };
    exports.client_deleteFile = client_deleteFile;
    //--------
    // copy file
    //-------
    //---------------------------------------------------------------
    var client_displayCopyFile = function client_displayCopyFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayCopyFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName);
    };
    exports.client_displayCopyFile = client_displayCopyFile;
    //---------------------------------------------------------------
    var client_eraseDisplayCopyFile = function client_eraseDisplayCopyFile() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayCopyFile();
    };
    exports.client_eraseDisplayCopyFile = client_eraseDisplayCopyFile;
    //---------------------------------------------------------------
    var client_copyFile = function client_copyFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_copyFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName);
    };
    exports.client_copyFile = client_copyFile;
    //--------
    // move file
    //-------
    //---------------------------------------------------------------
    var client_displayMoveFile = function client_displayMoveFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayMoveFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName);
    };
    exports.client_displayMoveFile = client_displayMoveFile;
    //---------------------------------------------------------------
    var client_eraseDisplayMoveFile = function client_eraseDisplayMoveFile() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayMoveFile();
    };
    exports.client_eraseDisplayMoveFile = client_eraseDisplayMoveFile;
    //---------------------------------------------------------------
    var client_moveFile = function client_moveFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_moveFile(srcStorageName, srcFolderName, srcFileName, dstStorageName, dstFolderName, dstFileName);
    };
    exports.client_moveFile = client_moveFile;
    //--------
    // download file
    //-------
    //---------------------------------------------------------------
    var client_displayDownloadFile = function client_displayDownloadFile(remoteUrlName, dstStorageName, dstFolderName, dstFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayDownloadFile(remoteUrlName, dstStorageName, dstFolderName, dstFileName);
    };
    exports.client_displayDownloadFile = client_displayDownloadFile;
    //---------------------------------------------------------------
    var client_eraseDisplayDownloadFile = function client_eraseDisplayDownloadFile() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayDownloadFile();
    };
    exports.client_eraseDisplayDownloadFile = client_eraseDisplayDownloadFile;
    //---------------------------------------------------------------
    var client_downloadFile = function client_downloadFile(remoteUrlName, dstStorageName, dstFolderName, dstFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_downloadFile(remoteUrlName, dstStorageName, dstFolderName, dstFileName);
    };
    exports.client_downloadFile = client_downloadFile;
    //--------
    // upload file
    //-------
    //---------------------------------------------------------------
    var client_displayUploadFile = function client_displayUploadFile(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayUploadFile(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName);
    };
    exports.client_displayUploadFile = client_displayUploadFile;
    //---------------------------------------------------------------
    var client_eraseDisplayUploadFile = function client_eraseDisplayUploadFile() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayUploadFile();
    };
    exports.client_eraseDisplayUploadFile = client_eraseDisplayUploadFile;
    //---------------------------------------------------------------
    var client_uploadFile = function client_uploadFile(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_uploadFile(srcStorageName, srcFolderName, srcFileName, remoteUrlName, remoteFolderName, remoteFileName);
    };
    exports.client_uploadFile = client_uploadFile;
    //--------
    // unzip file
    //-------
    //---------------------------------------------------------------
    var client_displayUnzipFile = function client_displayUnzipFile(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayUnzipFile(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName);
    };
    exports.client_displayUnzipFile = client_displayUnzipFile;
    //---------------------------------------------------------------
    var client_eraseDisplayUnzipFile = function client_eraseDisplayUnzipFile() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayUnzipFile();
    };
    exports.client_eraseDisplayUnzipFile = client_eraseDisplayUnzipFile;
    //---------------------------------------------------------------
    var client_unzipFile = function client_unzipFile(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName) {
        return aSDKRenderer._iFileSystemRenderer.action_unzipFile(zipStorageName, zipFolderName, zipFileName, unzipStorageName, unzipFolderName);
    };
    exports.client_unzipFile = client_unzipFile;
    //--------
    // zip file
    //-------
    //---------------------------------------------------------------
    var client_displayZipFile = function client_displayZipFile(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayZipFile(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName);
    };
    exports.client_displayZipFile = client_displayZipFile;
    //---------------------------------------------------------------
    var client_eraseDisplayZipFile = function client_eraseDisplayZipFile() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayZipFile();
    };
    exports.client_eraseDisplayZipFile = client_eraseDisplayZipFile;
    //---------------------------------------------------------------
    var client_zipFile = function client_zipFile(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_zipFile(storageName, folderName, fileName, zipStorageName, zipFolderName, zipFileName);
    };
    exports.client_zipFile = client_zipFile;
    //=======================
    //  Folder functions
    //=======================
    //--------------------------------------
    //  display Folder functions
    //--------------------------------------
    //---------------------------------------------------------------
    var client_displayNewFolder = function client_displayNewFolder(storageName, folderName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayNewFolder(storageName, folderName);
    };
    exports.client_displayNewFolder = client_displayNewFolder;
    //---------------------------------------------------------------
    var client_eraseDisplayNewFolder = function client_eraseDisplayNewFolder() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayNewFolder();
    };
    exports.client_eraseDisplayNewFolder = client_eraseDisplayNewFolder;
    //---------------------------------------------------------------
    var client_createFolder = function client_createFolder(storageName, folderName) {
        return aSDKRenderer._iFileSystemRenderer.action_createFolder(storageName, folderName);
    };
    exports.client_createFolder = client_createFolder;
    //--------
    // delete folder
    //-------
    //---------------------------------------------------------------
    var client_displayDeleteFolder = function client_displayDeleteFolder(storageName, folderName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayDeleteFolder(storageName, folderName);
    };
    exports.client_displayDeleteFolder = client_displayDeleteFolder;
    //---------------------------------------------------------------
    var client_eraseDisplayDeleteFolder = function client_eraseDisplayDeleteFolder() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayDeleteFolder();
    };
    exports.client_eraseDisplayDeleteFolder = client_eraseDisplayDeleteFolder;
    //---------------------------------------------------------------
    var client_deleteFolder = function client_deleteFolder(storageName, folderName) {
        return aSDKRenderer._iFileSystemRenderer.action_deleteFolder(storageName, folderName);
    };
    exports.client_deleteFolder = client_deleteFolder;
    //--------
    // copy folder
    //-------
    //---------------------------------------------------------------
    var client_displayCopyFolder = function client_displayCopyFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayCopyFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName);
    };
    exports.client_displayCopyFolder = client_displayCopyFolder;
    //---------------------------------------------------------------
    var client_eraseDisplayCopyFolder = function client_eraseDisplayCopyFolder() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayCopyFolder();
    };
    exports.client_eraseDisplayCopyFolder = client_eraseDisplayCopyFolder;
    //---------------------------------------------------------------
    var client_copyFolder = function client_copyFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName) {
        return aSDKRenderer._iFileSystemRenderer.action_copyFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName);
    };
    exports.client_copyFolder = client_copyFolder;
    //--------
    // move folder
    //-------
    //---------------------------------------------------------------
    var client_displayMoveFolder = function client_displayMoveFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayMoveFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName);
    };
    exports.client_displayMoveFolder = client_displayMoveFolder;
    //---------------------------------------------------------------
    var client_eraseDisplayMoveFolder = function client_eraseDisplayMoveFolder() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayMoveFolder();
    };
    exports.client_eraseDisplayMoveFolder = client_eraseDisplayMoveFolder;
    //---------------------------------------------------------------
    var client_moveFolder = function client_moveFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName) {
        return aSDKRenderer._iFileSystemRenderer.action_moveFolder(srcStorageName, srcFolderName, dstStorageName, dstFolderName);
    };
    exports.client_moveFolder = client_moveFolder;
    //--------
    // zip folder
    //-------
    //---------------------------------------------------------------
    var client_displayZipFolder = function client_displayZipFolder(storageName, folderName, zipStorageName, zipFolderName, zipFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayZipFolder(storageName, folderName, zipStorageName, zipFolderName, zipFileName);
    };
    exports.client_displayZipFolder = client_displayZipFolder;
    //---------------------------------------------------------------
    var client_eraseDisplayZipFolder = function client_eraseDisplayZipFolder() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayZipFolder();
    };
    exports.client_eraseDisplayZipFolder = client_eraseDisplayZipFolder;
    //---------------------------------------------------------------
    var client_zipFolder = function client_zipFolder(storageName, folderName, zipStorageName, zipFolderName, zipFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_zipFolder(storageName, folderName, zipStorageName, zipFolderName, zipFileName);
    };
    exports.client_zipFolder = client_zipFolder;
    //=========================
    //  display image function
    //=========================
    //---------------------------------------------------------------
    var client_start_display_imageFile = function client_start_display_imageFile(imgStorageName, imgFolderName, imgFileName) {
        return aSDKRenderer._iFileSystemRenderer.start_display_imageFile(imgStorageName, imgFolderName, imgFileName);
    };
    exports.client_start_display_imageFile = client_start_display_imageFile;
    //---------------------------------------------------------------
    var client_erase_display_imageFile = function client_erase_display_imageFile() {
        return aSDKRenderer._iFileSystemRenderer.erase_display_imageFile();
    };
    exports.client_erase_display_imageFile = client_erase_display_imageFile;
    //=========================
    //  display video function
    //=========================
    //---------------------------------------------------------------
    var client_start_display_videoFile = function client_start_display_videoFile(imgStorageName, imgFolderName, imgFileName) {
        return aSDKRenderer._iFileSystemRenderer.start_display_videoFile(imgStorageName, imgFolderName, imgFileName);
    };
    exports.client_start_display_videoFile = client_start_display_videoFile;
    //---------------------------------------------------------------
    var client_erase_display_videoFile = function client_erase_display_videoFile() {
        return aSDKRenderer._iFileSystemRenderer.erase_display_videoFile();
    };
    exports.client_erase_display_videoFile = client_erase_display_videoFile;
    //=========================
    //  display stream function
    //=========================
    //---------------------------------------------------------------
    var client_start_display_streamFile = function client_start_display_streamFile(imgStorageName, imgFolderName, imgFileName) {
        return aSDKRenderer._iFileSystemRenderer.start_display_streamFile(imgStorageName, imgFolderName, imgFileName);
    };
    exports.client_start_display_streamFile = client_start_display_streamFile;
    //---------------------------------------------------------------
    var client_erase_display_streamFile = function client_erase_display_streamFile() {
        return aSDKRenderer._iFileSystemRenderer.erase_display_streamFile();
    };
    exports.client_erase_display_streamFile = client_erase_display_streamFile;
    //=========================
    //  compute sha file
    //=========================
    //---------------------------------------------------------------
    var client_displayComputeAndSaveShaFile = function client_displayComputeAndSaveShaFile(srcStorageName, srcFolderName, srcFileName, shaStorageName, shaFolderName, shaFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_displayComputeAndSaveShaFile(srcStorageName, srcFolderName, srcFileName, shaStorageName, shaFolderName, shaFileName);
    };
    exports.client_displayComputeAndSaveShaFile = client_displayComputeAndSaveShaFile;
    //---------------------------------------------------------------
    var client_eraseDisplayComputeAndSaveShaFile = function client_eraseDisplayComputeAndSaveShaFile() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseDisplayComputeAndSaveShaFile();
    };
    exports.client_eraseDisplayComputeAndSaveShaFile = client_eraseDisplayComputeAndSaveShaFile;
    //---------------------------------------------------------------
    var client_computeAndSaveShaFile = function client_computeAndSaveShaFile(srcStorageName, srcFolderName, srcFileName, shaStorageName, shaFolderName, shaFileName) {
        return aSDKRenderer._iFileSystemRenderer.action_computeAndSaveShaFile(srcStorageName, srcFolderName, srcFileName, shaStorageName, shaFolderName, shaFileName);
    };
    exports.client_computeAndSaveShaFile = client_computeAndSaveShaFile;
    //====================
    // Log Functions
    //====================
    //---------------------------------------------------------------
    var client_displayLogRenderer = function client_displayLogRenderer() {
        return aSDKRenderer._iFileSystemRenderer.action_displayLogRenderer();
    };
    exports.client_displayLogRenderer = client_displayLogRenderer;
    //---------------------------------------------------------------
    var client_hideLogRenderer = function client_hideLogRenderer() {
        return aSDKRenderer._iFileSystemRenderer.action_hideLogRenderer();
    };
    exports.client_hideLogRenderer = client_hideLogRenderer;
    //---------------------------------------------------------------
    var client_eraseLogRenderer = function client_eraseLogRenderer() {
        return aSDKRenderer._iFileSystemRenderer.action_eraseLogRenderer();
    };
    exports.client_eraseLogRenderer = client_eraseLogRenderer;
    //---------------------------------------------------------------
    var client_viewLogFile = function client_viewLogFile() {
        return aSDKRenderer._iFileSystemRenderer.action_viewLogFile();
    };
    exports.client_viewLogFile = client_viewLogFile;
    //---------------------------------------------------------------
    var client_closeViewLogFile = function client_closeViewLogFile() {
        return aSDKRenderer._iFileSystemRenderer.action_closeViewLogFile();
    };
    exports.client_closeViewLogFile = client_closeViewLogFile;
    //===============================
    // Display Xml HardwareSettings
    //================================
    //---------------------------------------------------------------
    var client_displayHardwareSettings = function client_displayHardwareSettings() {
        return aSDKRenderer._iFileSystemRenderer.action_displayHardwareSettings();
    };
    exports.client_displayHardwareSettings = client_displayHardwareSettings;
    //---------------------------------------------------------------
    var client_closeHardwareSettings = function client_closeHardwareSettings() {
        return aSDKRenderer._iFileSystemRenderer.action_closeHardwareSettings();
    };
    exports.client_closeHardwareSettings = client_closeHardwareSettings;
    //===============================
    // Display Xml OpeningHours
    //================================
    //---------------------------------------------------------------
    var client_displayOpeningHours = function client_displayOpeningHours() {
        return aSDKRenderer._iFileSystemRenderer.action_displayOpeningHours();
    };
    exports.client_displayOpeningHours = client_displayOpeningHours;
    //---------------------------------------------------------------
    var client_closeOpeningHours = function client_closeOpeningHours() {
        return aSDKRenderer._iFileSystemRenderer.action_closeOpeningHours();
    };
    exports.client_closeOpeningHours = client_closeOpeningHours;
    //===================================
    // Display Xml Screen Render Config
    //===================================
    //---------------------------------------------------------------
    var client_displayScreenRenderConfig = function client_displayScreenRenderConfig() {
        //return aSDKRenderer._iFileSystemRenderer.action_displayScreenRenderConfig();
    };
    exports.client_displayScreenRenderConfig = client_displayScreenRenderConfig;
    //---------------------------------------------------------------
    var client_closeScreenRenderConfig = function client_closeScreenRenderConfig() {
        //return aSDKRenderer._iFileSystemRenderer.action_closeScreenRenderConfig();
    };
    exports.client_closeScreenRenderConfig = client_closeScreenRenderConfig;
    //===================================
    // Get Default Resource Storage Name
    //===================================
    //---------------------------------------------------------------
    var client_getDefaultResourceStorageName = function client_getDefaultResourceStorageName() {
        return _getDefaultResourceStorageName();
    };
    exports.client_getDefaultResourceStorageName = client_getDefaultResourceStorageName;
    //===================================
    // Get Default Resource Storage Url Name
    //===================================
    //---------------------------------------------------------------
    var client_getDefaultResourceStorageUrlName = function client_getDefaultResourceStorageUrlName() {
        //alert("_getDefaultResourceStorageUrlName()");
        return _getDefaultResourceStorageUrlName();
    };
    exports.client_getDefaultResourceStorageUrlName = client_getDefaultResourceStorageUrlName;
    //===================================
    // Get Default Storage Url Name
    //===================================
    //---------------------------------------------------------------
    var client_getDefaultStorageUrlName = function client_getDefaultStorageUrlName() {
        return _getDefaultStorageUrlName();
    };
    exports.client_getDefaultStorageUrlName = client_getDefaultStorageUrlName;
    //===================================
    // prepare and play media file
    //===================================
    //---------------------------------------------------------------
    var client_prepareAndPlayMediaFile = function client_prepareAndPlayMediaFile(iDesign, iZone, iMediaInZone, designs) {
        //alert("client_prepareAndPlayMediaFile iDesign: " +  iDesign + ", iZone: " + iZone + ", iMediaInZone " + iMediaInZone  + ", designs[0].id: " + designs[0].designId);
        //_prepareAndPlayMediaFile(aFileStorage, aUrlStorage, iDesign, iZone, iMediaInZone, designs);
    };
    exports.client_prepareAndPlayMediaFile = client_prepareAndPlayMediaFile;
    //===================================
    // change Design
    //===================================
    //---------------------------------------------------------------
    var client_changeDesign = function client_changeDesign(iOldDesign, iNewDesign, designs) {
        //alert("client_changeDesign iOldDesign: " +  iOldDesign + ", iDesign:" + iNewDesign + ", designs[0].id: " + designs[0].designId);
        //", iZone: " + iZone + ", iMediaInZone " + iMediaInZone  + ", designs[0].id: " + designs[0].designId);
        //_changeDesign(iOldDesign, iNewDesign, designs, aFileStorage, aUrlStorage);
    };
    exports.client_changeDesign = client_changeDesign;
    //===================================
    // playlist
    //===================================
    //---------------------------------------------------------------
    var client_playlistLoad = function client_playlistLoad() {
        //alert("client_playlistLoad");
        //_client_playlistLoad();
    };
    exports.client_playlistLoad = client_playlistLoad;
    //---------------------------------------------------------------
    var client_playlistSave = function client_playlistSave() {
        //alert("client_playlistSave");
        //_client_playlistSave();
    };
    exports.client_playlistSave = client_playlistSave;
    //===================================
    // playlist
    //===================================
    //---------------------------------------------------------------
    var client_playlistLoad = function client_playlistLoad() {
        //alert("client_playlistLoad");
        //_client_playlistLoad();
    };
    exports.client_playlistLoad = client_playlistLoad;
    //---------------------------------------------------------------
    var client_playlistSave = function client_playlistSave() {
        //alert("client_playlistSave");
        //_client_playlistSave();
    };
    exports.client_playlistSave = client_playlistSave;
    var client_aSettingsSync = function () {
        return aSettingsSyncService;
    };
    exports.client_aSettingsSync = client_aSettingsSync;
    var client_restartDevice = function () {
        var aPowerProperties = aSrvLocator._iEntityCreation.createDefaultPowerProperties(error);
        aPowerProperties.setPowerCommand("reboot");
        var errorExecPowerCmd = aSrvLocator._iEntityCreation.createDefaultError();
        var contextExecPowerCmd = aSrvLocator._iEntityCreation.createDefaultContext();
        contextExecPowerCmd.setRemoteCallback(true);
        aSDKJsTV._iSDKPowerSetup.executePowerCommand(aPowerProperties, errorExecPowerCmd, contextExecPowerCmd, null);
    };
    exports.client_restartDevice = client_restartDevice;
    var client_getTimezones = function () {
        return timezonesList;
    };
    exports.client_getTimezones = client_getTimezones;
    var client_getPlatform = function () {
        return "Tizen";
    };
    exports.client_getPlatform = client_getPlatform;
    global_SDKRenderer.displayFolderFileList = client_displayFolderFileList;
    global_SDKRenderer.displayFile = client_displayFile;
    global_SDKRenderer.displayNewFile = client_displayNewFile;
    global_SDKRenderer.eraseDisplayFile = client_eraseDisplayFile;
    global_SDKRenderer.saveFile = client_saveFile;
    global_SDKRenderer.displayDeleteFile = client_displayDeleteFile;
    global_SDKRenderer.eraseDisplayDeleteFile = client_eraseDisplayDeleteFile;
    global_SDKRenderer.deleteFile = client_deleteFile;
    global_SDKRenderer.displayCopyFile = client_displayCopyFile;
    global_SDKRenderer.eraseDisplayCopyFile = client_eraseDisplayCopyFile;
    global_SDKRenderer.copyFile = client_copyFile;
    global_SDKRenderer.displayMoveFile = client_displayMoveFile;
    global_SDKRenderer.eraseDisplayMoveFile = client_eraseDisplayMoveFile;
    global_SDKRenderer.moveFile = client_moveFile;
    global_SDKRenderer.displayDownloadFile = client_displayDownloadFile;
    global_SDKRenderer.eraseDisplayDownloadFile = client_eraseDisplayDownloadFile;
    global_SDKRenderer.downloadFile = client_downloadFile;
    global_SDKRenderer.displayUploadFile = client_displayUploadFile;
    global_SDKRenderer.eraseDisplayUploadFile = client_eraseDisplayUploadFile;
    global_SDKRenderer.uploadFile = client_uploadFile;
    global_SDKRenderer.displayUnzipFile = client_displayUnzipFile;
    global_SDKRenderer.eraseDisplayUnzipFile = client_eraseDisplayUnzipFile;
    global_SDKRenderer.unzipFile = client_unzipFile;
    global_SDKRenderer.displayZipFile = client_displayZipFile;
    global_SDKRenderer.eraseDisplayZipFile = client_eraseDisplayZipFile;
    global_SDKRenderer.zipFile = client_zipFile;
    global_SDKRenderer.displayNewFolder = client_displayNewFolder;
    global_SDKRenderer.eraseDisplayNewFolder = client_eraseDisplayNewFolder;
    global_SDKRenderer.createFolder = client_createFolder;
    global_SDKRenderer.displayDeleteFolder = client_displayDeleteFolder;
    global_SDKRenderer.eraseDisplayDeleteFolder = client_eraseDisplayDeleteFolder;
    global_SDKRenderer.deleteFolder = client_deleteFolder;
    global_SDKRenderer.displayCopyFolder = client_displayCopyFolder;
    global_SDKRenderer.eraseDisplayCopyFolder = client_eraseDisplayCopyFolder;
    global_SDKRenderer.copyFolder = client_copyFolder;
    global_SDKRenderer.displayMoveFolder = client_displayMoveFolder;
    global_SDKRenderer.eraseDisplayMoveFolder = client_eraseDisplayMoveFolder;
    global_SDKRenderer.moveFolder = client_moveFolder;
    global_SDKRenderer.displayZipFolder = client_displayZipFolder;
    global_SDKRenderer.eraseDisplayZipFolder = client_eraseDisplayZipFolder;
    global_SDKRenderer.zipFolder = client_zipFolder;
    //------------------
    global_SDKRenderer.start_display_imageFile = client_start_display_imageFile;
    global_SDKRenderer.erase_display_imageFile = client_erase_display_imageFile;
    global_SDKRenderer.start_display_videoFile = client_start_display_videoFile;
    global_SDKRenderer.erase_display_videoFile = client_erase_display_videoFile;
    global_SDKRenderer.start_display_streamFile = client_start_display_streamFile;
    global_SDKRenderer.erase_display_streamFile = client_erase_display_streamFile;
    //------------------
    global_SDKRenderer.displayComputeAndSaveShaFile = client_displayComputeAndSaveShaFile;
    global_SDKRenderer.eraseDisplayComputeAndSaveShaFile = client_eraseDisplayComputeAndSaveShaFile;
    global_SDKRenderer.computeAndSaveShaFile = client_computeAndSaveShaFile;
    //-------------------
    global_SDKRenderer.displayLogRenderer = client_displayLogRenderer;
    global_SDKRenderer.hideLogRenderer = client_hideLogRenderer;
    global_SDKRenderer.eraseLogRenderer = client_eraseLogRenderer;
    global_SDKRenderer.viewLogFile = client_viewLogFile;
    global_SDKRenderer.closeViewLogFile = client_closeViewLogFile;
    //---------------
    global_SDKRenderer.displayHardwareSettings = client_displayHardwareSettings;
    global_SDKRenderer.closeHardwareSettings = client_closeHardwareSettings;
    //---------------
    global_SDKRenderer.displayOpeningHours = client_displayOpeningHours;
    global_SDKRenderer.closeOpeningHours = client_closeOpeningHours;
    global_SDKRenderer.displayScreenRenderConfig = client_displayScreenRenderConfig;
    global_SDKRenderer.closeScreenRenderConfig = client_closeScreenRenderConfig;
    global_SDKRenderer.getDefaultResourceStorageName = client_getDefaultResourceStorageName;
    global_SDKRenderer.getDefaultResourceStorageUrlName = client_getDefaultResourceStorageUrlName;
    global_SDKRenderer.getDefaultStorageUrlName = client_getDefaultStorageUrlName;
    global_SDKRenderer.prepareAndPlayMediaFile = client_prepareAndPlayMediaFile;
    global_SDKRenderer.changeDesign = client_changeDesign;
    global_SDKRenderer.playlistLoad = client_playlistLoad;
    global_SDKRenderer.playlistSave = client_playlistSave;
    global_SDKRenderer.aSettingsSync = client_aSettingsSync;
    global_SDKRenderer.restartDevice = client_restartDevice;
    global_SDKRenderer.timezones = client_getTimezones;
    global_SDKRenderer.getPlatform = client_getPlatform;
    var callbackSetFileFolder = function callbackLog(ctx) {
        var a = 1;
        var callbackLog = function callbackLog(ctx) {
            var a = 1;
        };
        //context.setRemoteCallback(true);
        aLogService._iLogMain.log(4, "clientTizen" + "\t\t" + "Starts System Configuration Application : ok", error, context, callbackLog);
    };
    aLogService._iLogConfig.setFileInfo(aStartFileFolder, aStartUrlFileFolder, error, context, callbackSetFileFolder);
});
//-  the initialization of input parameters 
//aSDKRenderer._iFileSystemRenderer.render_home();
//# sourceMappingURL=clientTizen.js.map