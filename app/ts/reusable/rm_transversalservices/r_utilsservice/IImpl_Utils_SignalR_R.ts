import amUtilsSignalR = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_SignalR");

import rmUtilsService = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");

import amContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

declare var signalR : any;

export module rm_transversalservices
{
  export class IImpl_Utils_SignalR_R implements amUtilsSignalR.am_transversalservices.I_Utils_SignalR
  {
    _name: string;

    _connection: any;
    _owner: rmUtilsService.rm_transversalservices.R_UtilsService;

    _nStartConnectionAttempts: number;
    _nMaxStartConnectionAttempts: number;

    //----------- constructor 
    constructor(owner: rmUtilsService.rm_transversalservices.R_UtilsService)  
    {
      this._owner = owner;
      this._nStartConnectionAttempts = 0;
      this._nMaxStartConnectionAttempts = 0;
      this._connection = null;
    }
    
    public getConnection(): any
    {
      return this._connection;
    }
    public setConnection(connection: any): void
    {
      this._connection = connection;
    }

    public resetStartConnectionAttempts(): void
    {
      this._nStartConnectionAttempts = 0;
    }

    public setMaxStartConnectionAttempts(nMaxStartConnectionAttempts: number): void
    {
      this._nMaxStartConnectionAttempts = nMaxStartConnectionAttempts;
    }

    public createConnection(strHubUrl: string, strAuthToken: string): void
    {
      const self = this;
      const strHttps: string = "https://";
      const strHttp: string = "http://";
      const indexHttps: number = strHubUrl.indexOf(strHttps);
      const indexHttp: number = strHubUrl.indexOf(strHttp);
      let reqPart1: string = "";
      let reqPart2: string = "";

      try {
        if (indexHttps == 0) {
          reqPart1 = strHubUrl.substring(0, strHttps.length);
          reqPart2 = strHubUrl.substring(strHttps.length);
        } else if (indexHttp == 0) {
          reqPart1 = strHubUrl.substring(0, strHttp.length);
          reqPart2 = strHubUrl.substring(strHttp.length);
        } else {
          reqPart2 = strHubUrl;
        }  

        do {
          const idx: number = reqPart2.indexOf("//");
          if (idx == -1)
            break;

          reqPart2 = reqPart2.split("//").join("/");
        } while(1);

        strHubUrl = `${reqPart1}${reqPart2}`;
      } catch(e) {}

      try {
        self._connection = new signalR.HubConnectionBuilder()
        .withUrl(strHubUrl, { accessTokenFactory: () => strAuthToken })
        .configureLogging(signalR.LogLevel.Information)
        .build();
      } catch(e) {
        self._connection = null;
      }
    }
    public startConnection(error: amError.am_general.A_Error, context: amContext.am_general.A_Context, callback)
    {
      const self = this;
      if (self._nStartConnectionAttempts == self._nMaxStartConnectionAttempts) {
        error != null && error.setError(9012, `[SignalR]: cannot start connection`);
        context != null && context.setError(error);
        callback != null && callback(context);
        return;
      }

      self._connection.start()
      .then(() => {
        context != null && context.setError(error);
        callback != null && callback(context);      
      })
      .catch((err) => {
        setTimeout(() => this.startConnection(error, context, callback), 5000);    
      });
    }

  }
}

