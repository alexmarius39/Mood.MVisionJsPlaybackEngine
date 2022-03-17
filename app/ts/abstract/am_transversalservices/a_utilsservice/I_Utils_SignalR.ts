import amGeneral = require("../../../../../app/ts/abstract/am_general/i_interface/I_Interface");
import amContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

export module am_transversalservices
{
  export interface I_Utils_SignalR extends amGeneral.am_general.I_Interface
  {
    _name: string;

    createConnection(strHubUrl: string, strAuthToken: string): void;
    startConnection(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback): void;

    resetStartConnectionAttempts(): void;
    setMaxStartConnectionAttempts(nMaxStartConnectionAttempts: number): void;

    getConnection(): any;
    setConnection(connection: any): void;
  }
} 