import amGeneral     = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");

import amMoodDefaultHttpHeaders  = require("../../../../../app/ts/abstract/am_playback/ae_mooddefaulthttpheaders/AE_MoodDefaultHttpHeaders");
import amHttpHeader  = require("../../../../../app/ts/abstract/am_general/ae_httpheader/AE_HttpHeader");

import rmHttpHeaders = require("../../../../../app/ts/reusable/rm_general/re_httpheaders/RE_HttpHeaders");

import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

export module rm_playback
{
  export class RE_MoodDefaultHttpHeaders  extends rmHttpHeaders.rm_general.RE_HttpHeaders
                                          implements amMoodDefaultHttpHeaders.am_playback.AE_MoodDefaultHttpHeaders
  {
 
    //----------- constructor 
    constructor()  
    {  
      super();
    }


    // -----------------------------------
    public initAHttpHeadersGroup(strHttpHeadersGroupName : string = "mood_default_http_headers_set") : number
    {
      var aHttpHeader : amHttpHeader.am_general.AE_HttpHeader  = this._aSrvLocator._iEntityCreation.createDefaultHttpHeader(null);
      aHttpHeader.setHeaderName("Authorization");
      aHttpHeader.setHeaderValue("FB5ED944377FC2E532B28C3F5B844A94BE01C072FC99A34A95FBD99278468D64");
      this.addHttpHeader(aHttpHeader)
      return 0;
    }

    //------------------------
    public injectDependencies( aSrvContainer: amServiceContainer.am_configurationservices.A_ServiceContainer, 
                               aSrvLocator:   amServiceLocator.am_configurationservices.A_ServiceLocator, 
                               aSrvLog:       amServiceLog.am_transversalservices.A_LogService, 
                               error: amGeneralError.am_general.A_Error) : number
    {
      super.injectDependencies( aSrvContainer, aSrvLocator, aSrvLog, error);
      this.initAHttpHeadersGroup();
      return 0;
    }

  }
} 