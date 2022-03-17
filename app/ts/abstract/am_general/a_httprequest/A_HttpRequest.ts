import amGeneralEntity = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
import amGeneralError = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amTransversalServicesSDKService  = require("../../../../../app/ts/abstract/am_transversalservices/a_sdk_jstv/A_SDK_JsTV");
import amConfigurationServicesServiceLocator = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");

import amGeneralContentDispositionHeader = require("./A_ContentDispositionHeader");
export module am_general
{
  export interface A_HttpRequest extends amGeneralEntity.am_general.A_Entity
  {
    reset() : void;
    
    getMethod() : string;
    setMethod(url: string) : void;

    getUrlPath() : string;
    setUrlPath(urlPath: string) : void;

    getUrlParams() : string;
    setUrlParams(urlParams: string) : void;

    getHeaders() : string;
    setHeaders(headers: string) : void;

    getBody() : string;
    setBody(body: string) : void;

    getBoundary(): string;
    setBoundary(boundary: string): void;

    getHeader(name: string) : string;
    addHeader(name: string, value: string) : void;

    getCDHeaders() : Array<amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader>;
    addCDHeader(aCDHeader: amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader) : void;

    setMultipart() : void
  }
}
