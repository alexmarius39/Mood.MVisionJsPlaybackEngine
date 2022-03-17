import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_nonrenderingservices
{
  export interface AE_FileSettingsUpdateConfiguration extends amGeneral.am_general.A_Entity
  {

    getRemoteSettingsFilesList() : any;
    
    getLocalUnzipSettings() : any;
    
    getLocalSettingsFilesList() : any;

    getBootSettingsParametersList() : any;

    getBootSettingsLocalFilesList() : any;
    
  }

} 