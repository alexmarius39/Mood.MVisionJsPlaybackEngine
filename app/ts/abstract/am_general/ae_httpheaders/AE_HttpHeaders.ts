import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amHttpHeader = require("../../../../../app/ts/abstract/am_general/ae_httpheader/AE_HttpHeader");

export module am_general
{
   export interface AE_HttpHeaders extends amGeneral.am_general.A_Entity
   {

      addHttpHeader(aNewHttpHeader: amHttpHeader.am_general.AE_HttpHeader)   : number ;

      getHttpHeaderByName(strHttpHeaderName:  string)   : amHttpHeader.am_general.AE_HttpHeader ;
      getHttpHeaderByIdx(iHttpHeaderIdx: number)   : amHttpHeader.am_general.AE_HttpHeader ;

      getHttpHeaderList()  :  Array<amHttpHeader.am_general.AE_HttpHeader>;
       
      initAHttpHeadersGroup(strHttpHeadersGroupName : string) : number;
 }

} 