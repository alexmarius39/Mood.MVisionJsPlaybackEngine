import amGeneral = require("../../am_general/i_interface/I_Interface");
import amGeneralError = require("../../am_general/a_error/A_Error");
import amGeneralContext = require("../../am_general/a_context/A_Context");
import amGeneralActivityLogMessageTypes = require("../../am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");

export module am_transversalservices {
    export interface I_ActivityLogService_Messaging extends amGeneral.am_general.I_Interface {
        addLogMessage(
            messageType: amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes,
            messagePrefix: string,
            message: string, 
            error: amGeneralError.am_general.A_Error, 
            context: amGeneralContext.am_general.A_Context, 
            callback
        ): void;
        init(error: amGeneralError.am_general.A_Error): void;
        startActivityLogService(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback);
        createActivityLogReport(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void;
    }
}