import amGeneral     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amHttpHeaders = require("../../../../../app/ts/abstract/am_general/ae_httpheaders/AE_HttpHeaders");
import amHttpHeader  = require("../../../../../app/ts/abstract/am_general/ae_httpHeader/AE_HttpHeader");

import rmGeneralEntity          = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import rmHttpHeader             = require("../../../../../app/ts/reusable/rm_general/re_httpheader/RE_HttpHeader");


//--------------------------------------------------------------------------------
export module rm_general
{
  export class RE_HttpHeaders  extends    rmGeneralEntity.rm_general.R_Entity
                               implements amHttpHeaders.am_general.AE_HttpHeaders
  {
    //--- properties
    _list : Array<amHttpHeader.am_general.AE_HttpHeader>;
    _map  : Map<string, amHttpHeader.am_general.AE_HttpHeader>;
  

    //----------- constructor 
    constructor()  
    {  
      super();
      this._list    = new  Array<amHttpHeader.am_general.AE_HttpHeader>();
      this._map     = new  Map<string, amHttpHeader.am_general.AE_HttpHeader>();
    }

    // -----------------------------------
    public addHttpHeader(aNewHttpHeader: amHttpHeader.am_general.AE_HttpHeader)   : number
    {
      this._list.push(aNewHttpHeader);
      this._map.set(aNewHttpHeader.getHeaderName(), aNewHttpHeader);
      return 0;
    }

    // -----------------------------------
    public getHttpHeaderByName(strHttpHeaderName:  string)   : amHttpHeader.am_general.AE_HttpHeader 
    {
      return  this._map.get(strHttpHeaderName);
    }

    // -----------------------------------
    public getHttpHeaderByIdx(iHttpHeaderIdx: number)   : amHttpHeader.am_general.AE_HttpHeader 
    {
      return this._list[iHttpHeaderIdx];
    }

    // -----------------------------------
    public getHttpHeaderList()  :  Array<amHttpHeader.am_general.AE_HttpHeader>
    {
      return this._list;
    }
     

    // -----------------------------------
    public initAHttpHeadersGroup(strHttpHeadersGroupName : string) : number
    {
      return 0; //will be rewriten in descendants 
    }

  }
} 