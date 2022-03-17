import amGeneral = require("../../am_general/i_interface/I_Interface");
import amActivityLogService = require("../../am_transversalservices/as_activitylogservice/AS_ActivityLogService");

export module am_nonrenderingservices
{
  export interface AI_VolumeSetupConfig extends amGeneral.am_general.I_Interface
  {
    _name: string; 
    
    getActivityLogService(): amActivityLogService.am_transversalservices.AS_ActivityLogService;
    setActivityLogService(aActivityLogService: amActivityLogService.am_transversalservices.AS_ActivityLogService);
  }
} 