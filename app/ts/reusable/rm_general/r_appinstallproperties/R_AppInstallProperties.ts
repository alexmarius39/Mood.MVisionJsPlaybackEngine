import amGeneralAppInstallProperties     = require("../../../../../app/ts/abstract/am_general/a_appinstallproperties/A_AppInstallProperties");

import amGeneralFileTransfer        = require("../../../../../app/ts/abstract/am_general/ae_filetransfer/AE_FileTransfer");
import amGeneralAppServerProperties = require("../../../../../app/ts/abstract/am_general/a_appserverproperties/A_AppServerProperties");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");

export module rm_general
{
  export class R_AppInstallProperties extends rmGeneralEntity.rm_general.R_Entity
                                      implements amGeneralAppInstallProperties.am_general.A_AppInstallProperties
  {
 
    _aAppSoftwareTransfer :  amGeneralFileTransfer.am_general.AE_FileTransfer;
    _aAppServerProperties :  amGeneralAppServerProperties.am_general.A_AppServerProperties;
    
    _bUseAppEmptyUrl       : boolean;
    _bReboot               : boolean;

    //----------- constructor 
    constructor()  
    {  
      super();

      this._aAppSoftwareTransfer = null;
      this._aAppServerProperties = null;

      this._bUseAppEmptyUrl      = false;
      this._bReboot              = false;
    }
    
    //-----------------------------------
    public getUseAppEmptyUrl() : boolean
    {
      return this._bUseAppEmptyUrl;
    }
    //-----------------------------------
    public setUseAppEmptyUrl(bUseAppEmptyUrl: boolean) : void
    {
      this._bUseAppEmptyUrl = bUseAppEmptyUrl;
    }

    //-----------------------------------
    public getReboot() : boolean
    {
      return this._bReboot;
    }
    //-----------------------------------
    public setReboot(bReboot: boolean) : void
    {
      this._bReboot = bReboot;
    }


    //--------------------------------
    public getSoftwareFileTransfer() : amGeneralFileTransfer.am_general.AE_FileTransfer
    {
      return this._aAppSoftwareTransfer;
    }

    //--------------------------------
    public setSoftwareFileTransfer(aAppSoftwareTransfer : amGeneralFileTransfer.am_general.AE_FileTransfer) : void
    {
      this._aAppSoftwareTransfer = aAppSoftwareTransfer;
    }

    

    //--------------------------------
    public getAppServerProperties() : amGeneralAppServerProperties.am_general.A_AppServerProperties
    {
      return this._aAppServerProperties;
    }

    //--------------------------------
    public setAppServerProperties(aAppServerProperties : amGeneralAppServerProperties.am_general.A_AppServerProperties) : void
    {
      this._aAppServerProperties = aAppServerProperties;
    }

  }
} 