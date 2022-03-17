import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

import amHttpHeaders = require("../../../../../app/ts/abstract/am_general/ae_httpheaders/AE_HttpHeaders");

export module am_playback
{
   export interface AE_MoodDefaultHttpHeaders extends amHttpHeaders.am_general.AE_HttpHeaders
   {
       
      initAHttpHeadersGroup(strHttpHeadersGroupName : string) : number;
 }

} 