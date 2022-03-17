import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amGeneralFileTransfer        = require("../../../../../app/ts/abstract/am_general/ae_filetransfer/AE_FileTransfer");
import amGeneralAppServerProperties = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");

export module am_general
{
  export interface A_AppInstallProperties extends amGeneral.am_general.A_Entity
  {
    getUseAppEmptyUrl() : boolean;
    setUseAppEmptyUrl(bUseAppEmptyUrl: boolean) : void;

    getReboot() : boolean;
    setReboot(bReboot: boolean) : void;
 
    getSoftwareFileTransfer() : amGeneralFileTransfer.am_general.AE_FileTransfer;
    setSoftwareFileTransfer(aAppSoftwareTransfer : amGeneralFileTransfer.am_general.AE_FileTransfer) : void;

    getAppServerProperties() : amGeneralAppServerProperties.am_general.A_AppServerProperties;
    setAppServerProperties(aAppServerProperties : amGeneralAppServerProperties.am_general.A_AppServerProperties) : void;

  }

} 