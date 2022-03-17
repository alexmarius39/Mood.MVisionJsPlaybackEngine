import amTransversalServicesActivityLogServiceMessage = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/I_ActivityLogService_Message");
import rmTransversalActivityLogService = require("./RS_ActivityLogService");
import amGeneralError    = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext  = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralActivityLogMessageTypes = require("../../../../../app/ts/abstract/am_general/a_activitylogservicesettings/AE_ActivityLogMessageTypes");

export module rm_transversalservices {
    export class RI_ActivityLogServiceMessage implements amTransversalServicesActivityLogServiceMessage.am_transversalservices.I_ActivityLogService_Messaging {
        _name: string;
        _owner: rmTransversalActivityLogService.rm_transversalservices.RS_ActivityLogService;

        constructor(owner: rmTransversalActivityLogService.rm_transversalservices.RS_ActivityLogService) {
            this._owner = owner;
        }

        public addLogMessage(
            messageType: amGeneralActivityLogMessageTypes.am_general.AE_LogMessageTypes,
            messagePrefix: string,
            message: string, 
            error: amGeneralError.am_general.A_Error, 
            context: amGeneralContext.am_general.A_Context, 
            callback
        ) {
            return this._owner.addLogMessage(messageType, messagePrefix, message, error, context, callback);
        }

        public init(error : amGeneralError.am_general.A_Error) : void
        {
          this._owner.init(error);
        }
        public startActivityLogService(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) {
            return this._owner.startActivityLogService(error, context, callback);
        }

        public createActivityLogReport(error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback): void {
            return this._owner.createActivityLogReport(error, context, callback);
        }
    }
}