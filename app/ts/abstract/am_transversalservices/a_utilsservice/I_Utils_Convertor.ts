import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");

export module am_transversalservices
{
  export interface I_Utils_Convertor extends amGeneral.am_general.I_Interface
  {
    _name: string; 
    
    convertFromArrayToString(byteArray: Array<any>): string;
    convertFromStringToBufferView(strBuffer: string): ArrayBufferView;

  }
} 