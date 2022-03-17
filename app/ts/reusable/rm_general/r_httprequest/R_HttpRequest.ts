import amGeneralHttpRequest = require("../../../../../app/ts/abstract/am_general/a_httprequest/A_HttpRequest");
import amGeneralContentDispositionHeader = require("../../../../../app/ts/abstract/am_general/a_httprequest/A_ContentDispositionHeader");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");


export module rm_general
{
  export class R_HttpRequest extends rmGeneralEntity.rm_general.R_Entity
                          implements amGeneralHttpRequest.am_general.A_HttpRequest
  {
    //--- properties
    _urlPath: string;
    _urlParams: string;
    _method: string;
    _headers: string;
    _arrayCDHeaders: Array<amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader>;
    _body: string;
    _boundary: string;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._urlPath = null;
      this._urlParams = null;
      this._headers = null;
      this._arrayCDHeaders = new Array<amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader>();
      this._method = null;
      this._body = null;
      this._boundary = null;
    }

    //-----------------------
    public reset() : void
    {
      this._urlPath = null;
      this._urlParams = null;
      this._headers = null;
      this._arrayCDHeaders.splice(0, this._arrayCDHeaders.length);
      this._method = null;
      this._body = null;
      this._boundary = null;
    }

    public getMethod() : string
    {
      return this._method;
    }
    public setMethod(method: string) : void
    {
      this._method = method;
    }

    public getUrlPath() : string
    {
      return this._urlPath;
    }
    public setUrlPath(urlPath: string) : void
    {
      this._urlPath = urlPath;
    }

    public getUrlParams() : string
    {
      return this._urlParams;
    }
    public setUrlParams(urlParams: string) : void
    {
      this._urlParams = urlParams;
    }

    public getHeaders() : string
    {
      return this._headers;
    }
    public setHeaders(headers: string) : void
    {
      this._headers = headers;
    }

    public getBody() : string
    {
      return this._body;
    }
    public setBody(body: string) : void
    {
      this._body = body;
    }

    public getBoundary(): string
    {
      return this._boundary;
    }
    public setBoundary(boundary: string): void
    {
      this._boundary = boundary;
    }

    public getHeader(name: string) : string|null
    {
      let value = undefined;
      if (this._headers !== null) {
        const jsonHeaders = JSON.parse(this._headers);
        for (let header_name in jsonHeaders) {
          if (name === header_name) {
            value = jsonHeaders[name];
            break;
          }
        }  
      }
      return (typeof(value) === 'undefined') ? null : value;
    }
    public addHeader(name: string, value: string) : void
    {
      let header_found = false;
      let jsonHeaders = {};
      if (this._headers !== null && this._headers.length > 0) {
        jsonHeaders = JSON.parse(this._headers);
        for (let header_name in jsonHeaders) {
          if (name === header_name) {
            header_found = true;
            break;
          }
        }  
      }

      if (header_found === false) {
        jsonHeaders[name] = value;
      }

      this._headers = JSON.stringify(jsonHeaders);
    }

    public getCDHeaders() : Array<amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader>
    {
      return this._arrayCDHeaders;
    }
    public addCDHeader(aCDHeader: amGeneralContentDispositionHeader.am_general.A_ContentDispositionHeader) : void
    {
      this._arrayCDHeaders.push(aCDHeader);
    }

    public setMultipart() : void
    {
      this.addHeader('Content-Type', `multipart/form-data; boundary=${this._boundary}`)
    }

  }
} 