declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

import amTransversalServices  = require("../../../abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");

import amGeneralServiceFactory                 = require("../../../abstract/am_general/a_service/AFactory_Service");
import rmGeneralServiceFactory                 = require("../../rm_general/r_service/RFactory_Service");

import amGeneralError                          = require("../../../abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amGeneralProperties                     = require("../../../abstract/am_general/a_property/A_Properties");
import amTransversalServicesLogService         = require("../../../abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralService                        = require("../../../abstract/am_general/a_service/A_Service");

//import * as mod_R_LogService from "../../../../../app/ts/reusable/rm_renderingservices/r_imagerenderer/R_LogService";
import rmMonitoringService = require("./RS_Monitoring");

export module rm_nonrenderingservices
{
  export class RFactory_MonitoringService   extends rmGeneralServiceFactory.rm_general.RFactory_Service 
                                             implements amGeneralServiceFactory.am_general.AFactory_Service
  {
    public createService( aFactoryDescription : amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                          aServiceContainer   : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                          serviceProperties   : amGeneralProperties.am_general.A_Properties, 
                          aLogService         : amTransversalServicesLogService.am_transversalservices.A_LogService,
                          error               : amGeneralError.am_general.A_Error)
                             : amGeneralService.am_general.A_Service
    {
      return new rmMonitoringService.rm_nonrenderingservices.RS_MonitoringService(aFactoryDescription, aServiceContainer, aLogService, error); 
    }
  }
} 