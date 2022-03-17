import amTransversalServicesActivityLogServiceConfig = require("../../../abstract/am_transversalservices/as_activitylogservice/I_ActivityLogService_Config");
import amGeneralPlaybackGlobalConfig = require("../../../abstract/am_playback/ae_playbackglobalconfig/AE_PlaybackGlobalConfig");
import rmTransversalActivityLogService = require("./RS_ActivityLogService");
import amGeneralActivityLogServiceSettings = require("../../../abstract/am_general/a_activitylogservicesettings/AE_ActivityLogServiceSettings");
import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");

export module rm_transversalservices {
    export class RI_ActivityLogServiceConfig implements amTransversalServicesActivityLogServiceConfig.am_transversalservices.I_ActivityLogService_Config {
        _name: string;
        _owner: rmTransversalActivityLogService.rm_transversalservices.RS_ActivityLogService;

        constructor(owner: rmTransversalActivityLogService.rm_transversalservices.RS_ActivityLogService) {
            this._owner = owner;
        }

        public setPlaybackGlobalConfig(aPlaybackGlobalConfig: amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig) {
            this._owner.setPlaybackGlobalConfig(aPlaybackGlobalConfig);
        }

        public getPlaybackGlobalConfig(): amGeneralPlaybackGlobalConfig.am_playback.AE_PlaybackGlobalConfig {
            return this._owner.getPlaybackGlobalConfig();
        }

        
        public setActivityLogServiceSettings(settings: amGeneralActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings): void {
            this._owner.setActivityLogServiceSettings(settings);
        }

        public getActivityLogServiceSettings(): amGeneralActivityLogServiceSettings.am_general.AE_ActivityLogServiceSettings {
            return this._owner.getActivityLogServiceSettings();
        }
    }
}