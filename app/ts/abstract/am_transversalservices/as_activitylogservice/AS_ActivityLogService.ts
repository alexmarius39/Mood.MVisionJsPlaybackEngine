import amGeneral = require("../../../../../app/ts/abstract/am_general/a_service/A_Service");

import activityLogServiceMain = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/I_ActivityLogService_Main");
import activityLogServiceConfig = require("./I_ActivityLogService_Config");
import activityLogServiceMessaging = require("./I_ActivityLogService_Message");

export module am_transversalservices {
    export interface AS_ActivityLogService extends amGeneral.am_general.A_Service {
        _IActivityLogServiceMain: activityLogServiceMain.am_transversalservices.I_ActivityLogService_Main;
        _IActivityLogServiceConfig: activityLogServiceConfig.am_transversalservices.I_ActivityLogService_Config;
        _IActivityLogServiceMessaging: activityLogServiceMessaging.am_transversalservices.I_ActivityLogService_Messaging;
    }
}