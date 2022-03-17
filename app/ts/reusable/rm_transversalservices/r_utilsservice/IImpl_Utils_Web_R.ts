import amTransversalServicesIUtilsWeb = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Web");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");

import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amGeneralHttpRequest = require("../../../../../app/ts/abstract/am_general/a_httprequest/A_HttpRequest");
import amGeneralContentDispositionHeader = require("../../../../../app/ts/abstract/am_general/a_httprequest/A_ContentDispositionHeader");
import amGeneralFileInfo    = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");
                                                  
export module rm_transversalservices
{
  export class IImpl_Utils_Web_R implements amTransversalServicesIUtilsWeb.am_transversalservices.I_Utils_Web
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.R_UtilsService;

    _extensionsMimeTypeMap = {
      "zip": "application/zip",
      "txt": "text/plain",
      "log": "text/plain",
      "htm": "text/html",
      "html": "text/html",
      "js": "application/javascript",
      "css": "application/css",
      "xml": "text/xml",
      "gif": "image/gif",
      "jpg": "image/jpeg",
      "jpeg": "image/jpeg",
      "png": "image/png",
      "mp4": "video/mp4"
    };

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.R_UtilsService)  
    {
      this._owner = owner;  
    }

    public addContentDispositionHeaders(httpRequest: amGeneralHttpRequest.am_general.A_HttpRequest, arrayCDHeaders: Array<amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader>, callback) {
      if (arrayCDHeaders == null || arrayCDHeaders.length == 0) {
        // all Content-Disposition headers were added into HTTP request
        callback != null && callback();
        return;
      }

      let bAddEndBoundary: boolean = false;
      if (arrayCDHeaders.length === 1) {
        bAddEndBoundary = true;
      }
      const aCDHeader: amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader = arrayCDHeaders.pop();
      const self = this;

      const headerName: string = aCDHeader.getHeaderName();
      const headerValue: string = aCDHeader.getHeaderValue();
      const isHeaderFileBinary: boolean = aCDHeader.isHeaderFileBinary();
      const aHeaderFile: amGeneralFileInfo.am_general.A_FileInfo = aCDHeader.getHeaderFile();

      if (!headerName || !headerName.length)
        return;

      let reqBody: string = httpRequest.getBody();
      let boundary: string = httpRequest.getBoundary();
      if (!boundary) {
        httpRequest.setBoundary("380009360982575615081974");
      }

      if (reqBody == null) {
        // first Content-Disposition header
        reqBody = "";
      }

      if (headerValue && headerValue.length > 0) {
        // add simple (name, value) CD header
        reqBody += `\r\n--${boundary}\r\nContent-Disposition: form-data; name="${headerName}"\r\n\r\n${headerValue}`;
        if (bAddEndBoundary) {
          reqBody += `\r\n--${boundary}--\r\n`;
        }

        httpRequest.setBody(reqBody); 
        self.addContentDispositionHeaders(httpRequest, arrayCDHeaders, callback);
      } else if (aHeaderFile != null && aHeaderFile.getStorage() && aHeaderFile.getPath() && aHeaderFile.getName()){ 
        // add file as Content-Disposition header

        // read content of the file(binary or text)
        const cbReadFile = function(ctx: amGeneralContext.am_general.A_Context) {
          if (ctx != null && !ctx.isError()) {
            let strBuffer: string = "";
            if (isHeaderFileBinary) {
              const binaryBuffer:Array<any> = ctx.getArrayResult();
              if (binaryBuffer.length > 0) {
                strBuffer = self._owner._iUtilsConvertor.convertFromArrayToString(binaryBuffer);
              }
            } else {
              strBuffer = ctx.getResult();
            }
  
            if (strBuffer.length > 0) {
              reqBody += `\r\n--${boundary}\r\nContent-Disposition: form-data; name="${headerName}"`;
              reqBody += aHeaderFile.getUrlName() != null ? `; filename="${aHeaderFile.getUrlName()}"` : `; filename="${aHeaderFile.getName()}"`;

              const fileExt: string = aHeaderFile.getName().split('.').pop();
              if (self._extensionsMimeTypeMap.hasOwnProperty(fileExt)) {
                reqBody += `\r\nContent-Type: ${self._extensionsMimeTypeMap[fileExt]}`;
              } else {
                reqBody += `\r\nContent-Type: application/octet-stream`;
              }
  
              reqBody += `\r\n\r\n${strBuffer}`;
              if (bAddEndBoundary) {
                reqBody += `\r\n--${boundary}--\r\n`;
              }    
              httpRequest.setBody(reqBody);  
            }
          }
          self.addContentDispositionHeaders(httpRequest, arrayCDHeaders, callback);
        };

        const errorReadFile:amGeneralError.am_general.A_Error         = self._owner._aServiceLocator._iEntityCreation.createDefaultError();   
        const contextReadFile:amGeneralContext.am_general.A_Context   = self._owner._aServiceLocator._iEntityCreation.createDefaultContext();
        contextReadFile.setRemoteCallback(true);
        if (isHeaderFileBinary) {
          self._owner._aSDKService._iSDKFileSystem.readBinaryFile(aHeaderFile.getStorage(), aHeaderFile.getPath(), aHeaderFile.getName(), errorReadFile, contextReadFile, cbReadFile);      
        } else {
          self._owner._aSDKService._iSDKFileSystem.readTextFile2(aHeaderFile.getStorage(), aHeaderFile.getPath(), aHeaderFile.getName(), errorReadFile, contextReadFile, cbReadFile);    
        }
      } else {
        self.addContentDispositionHeaders(httpRequest, arrayCDHeaders, callback);
      }
    }

    public sendHttpRequest(httpRequest: amGeneralHttpRequest.am_general.A_HttpRequest, error: amGeneralError.am_general.A_Error, context: amGeneralContext.am_general.A_Context, callback) : void
    {
      const self = this;

      let httpRequestUrlPath: string = httpRequest.getUrlPath();
      const httpRequestMethod: string = httpRequest.getMethod();
      const httpRequestHeaders: string = httpRequest.getHeaders();
      if (httpRequestUrlPath == null || httpRequestMethod == null) {
        error != null && error.setError(2013, `Utils sendHttpRequest missing parameters: url ${httpRequestUrlPath} method ${httpRequestMethod}`);
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      const strHttps: string = "https://";
      const strHttp: string = "http://";
      const indexHttps: number = httpRequestUrlPath.indexOf(strHttps);
      const indexHttp: number = httpRequestUrlPath.indexOf(strHttp);
      let reqPart1: string = "";
      let reqPart2: string = "";

      try {
        if (indexHttps == 0) {
          reqPart1 = httpRequestUrlPath.substring(0, strHttps.length);
          reqPart2 = httpRequestUrlPath.substring(strHttps.length);
        } else if (indexHttp == 0) {
          reqPart1 = httpRequestUrlPath.substring(0, strHttp.length);
          reqPart2 = httpRequestUrlPath.substring(strHttp.length);
        } else {
          reqPart2 = httpRequestUrlPath;
        }  

        do {
          const idx: number = reqPart2.indexOf("//");
          if (idx == -1)
            break;

          reqPart2 = reqPart2.split("//").join("/");
        } while(1);

        httpRequestUrlPath = `${reqPart1}${reqPart2}`;
      } catch(e) {}

      const cbAddCDHeaders = function() {
        let httpRequestUrl: string = httpRequestUrlPath;
        const urlParams = JSON.parse(httpRequest.getUrlParams());
        if (urlParams != null) {
          let firstUrlParams: boolean = true;
          for (let key in urlParams) {
            httpRequestUrl += firstUrlParams ? "?" : "&";
            firstUrlParams = false;
            httpRequestUrl += `${key}=${urlParams[key]}`;
          }       
        }

        const xhr = new XMLHttpRequest();
        xhr.open(httpRequestMethod, httpRequestUrl, true);
        if (httpRequestHeaders != null) {
          const headers = JSON.parse(httpRequestHeaders);
          for (let key in headers) {
            if (headers.hasOwnProperty(key)) {
              xhr.setRequestHeader(key, headers[key]);  
            }
          }  
        }

        const stringBody: string = httpRequest.getBody();
        if (stringBody != null && stringBody.length > 0) {
          const httpRequestBody: ArrayBufferView = self._owner._iUtilsConvertor.convertFromStringToBufferView(stringBody);
          if (httpRequestBody != null && httpRequestBody.byteLength > 0) {
            xhr.send(httpRequestBody);
          }  
        } else {
          xhr.send();
        }
        
        xhr.onreadystatechange = function(e) { // Call a function when the state changes.
          if (this.readyState == 4) {
            if (this.status >= 200 && this.status < 400) { // check for 2xx or 3xx
              context != null && context.setResult(this.responseText);
            } else {
              error.setError(2013, `Error sending request to: ${httpRequestUrl} status ${this.statusText}`);
            }

            context != null && context.setError(error);
            callback != null && callback(context);    
          }
        }  
      }
      const arrayCDHeaders: Array<amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader> = httpRequest.getCDHeaders();
      self.addContentDispositionHeaders(httpRequest, arrayCDHeaders, cbAddCDHeaders);
    }
  }
} 
