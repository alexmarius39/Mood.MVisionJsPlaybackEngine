import amGeneral = require("../../am_general/i_interface/I_Interface");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralPlaybackGlobalConfig = require("../../am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralActivityLogServiceSettings = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AE_ActivityLogServiceSettings");

export module am_transversalservices {
    export interface I_ActivityLogService_Config extends amGeneral.am_general.I_Interface {
        setPlaybackGlobalConfig( aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig): void;
        getPlaybackGlobalConfig() : amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig;

        setActivityLogServiceSettings(settings: amGeneralActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings): void;
        getActivityLogServiceSettings(): amGeneralActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings;
    }
}