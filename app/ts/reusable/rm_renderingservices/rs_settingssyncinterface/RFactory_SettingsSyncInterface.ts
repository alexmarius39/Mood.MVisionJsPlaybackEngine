import amGeneralServiceFactory                 = require("../../../abstract/am_general/a_service/AFactory_Service");
import rmGeneralServiceFactory                 = require("../../rm_general/r_service/RFactory_Service");

import amGeneralError                          = require("../../../abstract/am_general/a_error/A_Error");
import amGeneralFactoryDescription             = require("../../../abstract/am_general/a_factorydescription/A_FactoryDescription");
import amConfigurationServicesServiceContainer = require("../../../abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amGeneralProperties                     = require("../../../abstract/am_general/a_property/A_Properties");
import amTransversalServicesLogService         = require("../../../abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralService                        = require("../../../abstract/am_general/a_service/A_Service");

import R_SettingsSyncInterfaceService  = require("./RS_SettingsSyncInterface");

export module rm_renderingservices
{
  export class RFactory_SettingSyncServiceInterface extends rmGeneralServiceFactory.rm_general.RFactory_Service 
                                                    implements amGeneralServiceFactory.am_general.AFactory_Service
  {
    public createService( aFactoryDescription : amGeneralFactoryDescription.am_general.A_FactoryDescription, 
                          aServiceContainer   : amConfigurationServicesServiceContainer.am_configurationservices.A_ServiceContainer, 
                          serviceProperties   : amGeneralProperties.am_general.A_Properties, 
                          aLogService         : amTransversalServicesLogService.am_transversalservices.A_LogService,
                          error               : amGeneralError.am_general.A_Error)
                             : amGeneralService.am_general.A_Service
    {
      return new R_SettingsSyncInterfaceService.rm_renderingservices.RS_SettingsSyncInterfaceService(aFactoryDescription, aServiceContainer, aLogService, error); 
    }
  }
} 