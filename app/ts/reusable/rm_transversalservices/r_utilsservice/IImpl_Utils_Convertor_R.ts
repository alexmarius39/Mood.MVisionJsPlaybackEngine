import amTransversalServicesIUtilsConvertor = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Convertor");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");
                                                     
                                                     
export module rm_transversalservices
{
  export class IImpl_Utils_Convertor_R implements amTransversalServicesIUtilsConvertor.am_transversalservices.I_Utils_Convertor
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.R_UtilsService;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.R_UtilsService)  
    {
      this._owner = owner;  
    }
    
    public convertFromArrayToString(byteArray: Array<any>): string {
      let resString: string = "";
      for (let i = 0; i < byteArray.length; i++) {
        resString += String.fromCharCode(byteArray[i]);
      }

      return resString;
    }

    public convertFromStringToBufferView(strBuffer: string): ArrayBufferView {
      let bodyLen: number = strBuffer.length
      let bufView: Uint8Array = new Uint8Array(bodyLen);
      for (let i = 0; i < bodyLen; i++) {
        bufView[i] = strBuffer.charCodeAt(i);
      }
      return bufView;        
    }

  }
} 