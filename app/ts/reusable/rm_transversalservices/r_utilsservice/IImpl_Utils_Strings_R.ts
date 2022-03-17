import amTransversalServicesIUtilsStrings = require("../../../../../app/ts/abstract/am_transversalservices/a_utilsservice/I_Utils_Strings");

import rmTransversalServices = require("../../../../../app/ts/reusable/rm_transversalservices/r_utilsservice/R_UtilsService");
                                                     
                                                     
export module rm_transversalservices
{
  export class IImpl_Utils_Strings_R implements amTransversalServicesIUtilsStrings.am_transversalservices.I_Utils_Strings
  {
    _name: string;    

    //----------- owner
    _owner: rmTransversalServices.rm_transversalservices.R_UtilsService;

    //----------- constructor 
    constructor(owner: rmTransversalServices.rm_transversalservices.R_UtilsService)  
    {
      this._owner = owner;  
    }

    //---------------------------------
    public getPrevContent(input: string, marker: string) : string
    {
      if (input == null)
        return null;
      var idx = input.indexOf(marker) ;
      if (idx == -1)
        return "";
      var res = input.substr(0, idx); 
      return res ;
    }

    
    //---------------------------------
    public getNextContent(input: string, marker: string) : string
    {
      if (input == null)
        return null;
      var idx = input.indexOf(marker) ;
      if (idx == -1)
        return "";
      if (idx+1 == input.length) 
        return "";
      var res = input.substr(idx+1, input.length); 
      return res ;
    }

    //---------------------------------
    public getFieldValue(input: string, startmarker: string, endmarker: string) : string
    {
      if (input == null)
        return "";
      if (startmarker == null)
        return "";

      //--  
      var idx1 = input.indexOf(startmarker) ;
      if (idx1 == -1)
        return "";
      if (idx1 + startmarker.length >= input.length) 
        return "";
      //--  
      var idx2 = input.indexOf(endmarker) ;
      if (idx2 == -1)
          return "";  
      if (idx2+1 == input.length) 
        return "";
      //--  
      if (idx1 + startmarker.length >= idx2)
        return "";   
      //--  
      var res = input.substr(idx1 + startmarker.length, idx2 - idx1 - startmarker.length); 
      return res ;
    }

    public splitUrl(strUrl: string): {strUrlDomain: string, strUrlPath: string} {
      const strHttps: string = "https://";
      const strHttp: string = "http://";
      const indexHttps: number = strUrl.indexOf(strHttps);
      const indexHttp: number = strUrl.indexOf(strHttp);
      let strUrlDomain: string = "";
      let strUrlPath: string = "";
      let indexEndUrl: number = -1;
      try {
        if (indexHttps == 0) {
          indexEndUrl = strUrl.indexOf("/", strHttps.length);
        } else if (indexHttp == 0) {
          indexEndUrl = strUrl.indexOf("/", strHttp.length);
        } else {
          indexEndUrl = strUrl.indexOf("/");
        }

        if (indexEndUrl == -1) {
          strUrlDomain = strUrl;
        } else {
          strUrlDomain = strUrl.substring(0, indexEndUrl + 1);
          strUrlPath = strUrl.substring(indexEndUrl + 1);  
        }
      } catch(e) {}

      return {strUrlDomain, strUrlPath};
    }

  }
} 