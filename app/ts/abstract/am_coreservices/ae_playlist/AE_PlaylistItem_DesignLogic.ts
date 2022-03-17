import amGeneral = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_ContainerLogic");

import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");

export module am_coreservices
{
  export interface AE_PlaylistItem_DesignLogic extends amGeneral.am_coreservices.AE_PlaylistItem_ContainerLogic
  {
    setSameChildToPlay(sameChildToPlay : amPlaylistItem.am_coreservices.AE_PlaylistItem) : boolean;
    getSameChildToPlay() : amPlaylistItem.am_coreservices.AE_PlaylistItem;

  }

} 