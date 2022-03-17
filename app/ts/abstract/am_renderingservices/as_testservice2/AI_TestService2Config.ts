import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

import amTestConfig           = require("../../../../../app/ts/abstract/am_renderingservices/as_testservice/AE_TestConfiguration");
import amGeneralPlaybackGlobalConfig = require("../../../../../app/ts/abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amTransversalServicesActivityLogService = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/AS_ActivityLogService");

export module am_renderingservices
{
  export interface AI_TestService2Config extends amGeneral.am_general.I_Interface
  {
    _name: string; 
    
    setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig);
    getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;

    setTestConfig(aCronConfiguration: amTestConfig.am_renderingservices.AE_TestConfiguration);
    getTestConfig() : amTestConfig.am_renderingservices.AE_TestConfiguration;

    setActivityLogService(aActivityLogService: amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService);
    getActivityLogService(): amTransversalServicesActivityLogService.am_transversalservices.AS_ActivityLogService;
    
  }
} 