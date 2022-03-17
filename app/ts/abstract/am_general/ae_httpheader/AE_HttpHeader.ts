import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_general
{
   export interface AE_HttpHeader extends amGeneral.am_general.A_Entity
   {

      getHeaderName()  :  string;
      setHeaderName(strHeaderName : string);

      getHeaderValue()  :  string;
      setHeaderValue(strHeaderValue: string);

      isRequestHeader() : boolean;
      setIsRequestHeader(bIsRequestHeader: boolean);

      isResponseHeader() : boolean;
      setIsResponseHeader(bIsResponseHeader: boolean);

      isRepresentationHeader() : boolean;
      setIsRepresentationHeader(bIsRepresentationHeader: boolean);

      isPayloadHeader() : boolean;
      setIsPayloadHeader(bIsPayloadHeader: boolean);
   }
   // doc: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
} 