import amTransversalServicesActivityLogServiceMain = require("../../../../../app/ts/abstract/am_transversalservices/as_activitylogservice/I_ActivityLogService_Main");
import rmTransversalActivityLogService = require("./RS_ActivityLogService");

// import rmTransversalActivityLogService = require("./RS_ActivityLogService");

export module rm_transversalservices {
    export class RI_ActivityLogServiceMain implements amTransversalServicesActivityLogServiceMain.am_transversalservices.I_ActivityLogService_Main {
        _name: string;
        _owner: rmTransversalActivityLogService.rm_transversalservices.RS_ActivityLogService;

        constructor(owner: rmTransversalActivityLogService.rm_transversalservices.RS_ActivityLogService) {
            this._owner = owner;
        }
    }
}