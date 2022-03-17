import amGeneral     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amHttpHeader  = require("../../../../../app/ts/abstract/am_general/ae_httpheader/AE_HttpHeader");

import rmGeneralEntity = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");



export module rm_general
{
  export class RE_HttpHeader    extends rmGeneralEntity.rm_general.R_Entity
                                        implements amHttpHeader.am_general.AE_HttpHeader
  {
    //--- properties
    _strHeaderName           : string;
    _strHeaderValue          : string;
    _bIsRequestHeader        : boolean;
    _bIsResponseHeader       : boolean;
    _bIsRepresentationHeader : boolean;
    _bIsPayloadHeader        : boolean;

    //----------- constructor 
    constructor()  
    {  
      super();
      this._strHeaderName           = "";
      this._strHeaderValue          = "";
      this._bIsRequestHeader        = false;
      this._bIsResponseHeader       = false;
      this._bIsRepresentationHeader = false;
      this._bIsPayloadHeader        = false;
    }


    //------------------------------------- 
    public getHeaderName()  :  string
    {
      return this._strHeaderName; 
    }
    //------------------------------------- 
    public setHeaderName(strHeaderName : string)
    {
      this._strHeaderName = strHeaderName; 
    }


    //------------------------------------- 
    public getHeaderValue()  :  string
    {
      return this._strHeaderValue; 
    }
    //------------------------------------- 
    public setHeaderValue(strHeaderValue: string)
    {
      this._strHeaderValue = strHeaderValue; 
    }


    //------------------------------------- 
    public isRequestHeader() : boolean
    {
      return this._bIsRequestHeader; 
    }
    //------------------------------------- 
    public setIsRequestHeader(bIsRequestHeader: boolean)
    {
      this._bIsRequestHeader = bIsRequestHeader; 
    }


    //------------------------------------- 
    public isResponseHeader() : boolean
    {
      return this._bIsResponseHeader; 
    }
    //------------------------------------- 
    public setIsResponseHeader(bIsResponseHeader: boolean)
    {
      this._bIsResponseHeader = bIsResponseHeader; 
    }


    //---------------------------
    public isRepresentationHeader() : boolean
    {
      return this._bIsResponseHeader; 
    }
    //---------------------------
    public setIsRepresentationHeader(bIsRepresentationHeader: boolean)
    {
      this._bIsRepresentationHeader = bIsRepresentationHeader; 
    }


    //---------------------------
    public isPayloadHeader() : boolean
    {
      return this._bIsPayloadHeader; 
    }
    //---------------------------
    public setIsPayloadHeader(bIsPayloadHeader: boolean)
    {
      this._bIsPayloadHeader = bIsPayloadHeader; 
    }


  }
} 