import amCoreServices   = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_DesignMainZoneLogic");

//import amGeneralError      = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amServiceLocator    = require("../../../../../app/ts/abstract/am_configurationservices/a_servicelocator/A_ServiceLocator");
import amServiceContainer  = require("../../../../../app/ts/abstract/am_configurationservices/a_servicecontainer/A_ServiceContainer");
import amServiceLog        = require("../../../../../app/ts/abstract/am_transversalservices/a_logservice/A_LogService");

import amGeneralError   = require("../../../../../app/ts/abstract/am_general/a_error/A_Error");
import amGeneralContext = require("../../../../../app/ts/abstract/am_general/a_context/A_Context");
import amGeneralFileInfo = require("../../../../../app/ts/abstract/am_general/a_fileinfo/A_FileInfo");

//import amPlaylistItemStatus = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_Status");
import amPlaylistItemStatusEnd                   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusEnd");
import amPlaylistItemStatusDisable               = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusDisable");
import amPlaylistItemStatusError                 = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusError");
import amPlaylistItemStatusSelectNextChildToPlay = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusSelectNextChildToPlay");
import amPlaylistItemStatusRequestToAbortOrEndBeforePlay_List = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbortOrEndBeforePlay_List");
import amPlaylistItemStatusRequestToPlayList     = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToPlay_List");
import amPlaylistItemStatusPlay                  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusPlay");
import amPlaylistItemStatusRequestToSuspendList  = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToSuspend_List");
import amPlaylistItemStatusSuspended             = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusSuspended");
import amPlaylistItemStatusRequestToResumeList   = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToResume_List");
import amPlaylistItemStatusRequestToAbortList    = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToAbort_List");
import amPlaylistItemStatusRequestToEndList      = require("../../../../../app/ts/abstract/am_coreservices/ae_playliststatus/AE_PlaylistItem_StatusRequestToEnd_List");


import amCoreServicesPlaylistController   = require("../../../../../app/ts/abstract/am_coreservices/a_playlistcontroller/A_PlaylistController");
import amCoreServicesRenderingController  = require("../../../../../app/ts/abstract/am_coreservices/a_renderingcontroller/A_RenderingController");

import amPlaylistItem  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem");
import amPlaylistItemPlaylist  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Playlist");
import amPlaylistItemDesign    = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_Design");
import amPlaylistItemDesignLogic  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItem_DesignLogic");

import amGeneralQueue = require("../../../../../app/ts/abstract/am_general/ae_queue/AE_Queue");
import amGeneralEvent = require("../../../../../app/ts/abstract/am_general/ae_event/AE_Event");
import amPlaylistItemStatusType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemStatusType");
import amPlaylistItemEventType  = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType");
import amNextChildSelectionType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType");

import rmGeneralEntity  = require("../../../../../app/ts/reusable/rm_general/r_entity/R_Entity");
import rmPlaylistItemPriorityPlaylistLogic  = require("../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PlaylistLogic");

import amGeneralEventRequestType  = require("../../../../../app/ts/abstract/am_general/ae_event/AE_EventRequestType");

export module rm_coreservices
{
  export class RE_PlaylistItem_DesignMainZoneLogic extends    rmPlaylistItemPriorityPlaylistLogic.rm_coreservices.RE_PlaylistItem_PlaylistLogic
                                                   implements amCoreServices.am_coreservices.AE_PlaylistItem_DesignMainZoneLogic
  {
    //--------------------
    _isMainZone : boolean;

    //----------------
    constructor()
    {
      super();
      this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop;
      this._hasMultiplay                = false;
      this._hasARenderingRepresentation = false;
      this._hasARenderingZone           = true;

      this._isMainZone  = true;
    }


    //======================
    public isDisable( refDate : Date, event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, error: amGeneralError.am_general.A_Error, 
                      aPlaylistController  : amCoreServicesPlaylistController.am_coreservices.A_PlaylistController,
                      aRenderingController : amCoreServicesRenderingController.am_coreservices.A_RenderingController,
                      context: amGeneralContext.am_general.A_Context, callback): boolean
    {
      return false;
    }


    //=================
    //
    //=================

    //==================
    public isMainZone()
    {
      return this._isMainZone;
    }

    //=================
    public setIsMainZone(isMainZone : boolean)
    {
      this._isMainZone = isMainZone;
    }

    //---------------------
    public prepareEvent( event : amGeneralEvent.am_general.AE_Event, eventQueue: amGeneralQueue.am_general.AE_Queue, 
                         error: amGeneralError.am_general.A_Error, 
                         context: amGeneralContext.am_general.A_Context, callback): void
    {
      if (event.getEventId() != amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd)
        return ;
      if ( ! this._isMainZone )
        return ;
      event.setEventRequest(amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_AbortParent);
    }

    //============================================
    //  set / get can reuse an already created rendering zone
    //============================================
    //----------------------------------------
    public canDestroyAlreadyCreatedRenderingZone() : boolean
    {
  
      var aParent : amPlaylistItemDesign.am_coreservices.AE_PlaylistItem_Design;
      aParent = <amPlaylistItemDesign.am_coreservices.AE_PlaylistItem_Design>this.getOwner().getParent();
      if (aParent == null)
        return false;
      var aParentLogic : amPlaylistItemDesignLogic.am_coreservices.AE_PlaylistItem_DesignLogic = 
                                         <amPlaylistItemDesignLogic.am_coreservices.AE_PlaylistItem_DesignLogic>aParent.getLogic();
      if (aParentLogic == null)
        return false;
      var realCrtChildIdx = 0;
      realCrtChildIdx = aParentLogic.getOwnerIdxAsChild();
      var sameChildToPlay : amPlaylistItem.am_coreservices.AE_PlaylistItem = aParentLogic.hasTheSameChildNextToPlay( realCrtChildIdx, null, null, null, null, null, null, null);
      if (sameChildToPlay == null)
        return false;
      return true;
    
        /*
      var realCrtChildIdx = 0;
      realCrtChildIdx = this.getOwnerIdxAsChild();
      //---
      var sameChildToPlay : amPlaylistItem.am_coreservices.AE_PlaylistItem = aParentLogic.hasTheSameChildNextToPlay( realCrtChildIdx, null, null, null, null, null, null, null);
      if (sameChildToPlay == null)
        false;
      return true;
      */
      /*
      var crtSameChildToPlay = aParentLogic.getSameChildToPlay();
      //var realCrtChildIdx = crtChildIdx;
      if (crtSameChildToPlay == null)
        return false;
      return true;
      */
      /*
      realCrtChildIdx = crtSameChildToPlay.getLogic().getOwnerIdxAsChild();
      //---
      var sameChildToPlay : amPlaylistItem.am_coreservices.AE_PlaylistItem = this.hasTheSameChildNextToPlay( realCrtChildIdx, null, null, null, null, null, null, null);
      if (sameChildToPlay == null)
        false;
      return true;
      */

      //aParentlogic._status_RequestToPlay_List.setLastStartedChild(sameChildToPlay);
      //return this._canReuseAlreadyCreatedRenderingZone = false;
    }

    //----------------------------------------
    public canReuseAlreadyCreatedRenderingZone() : boolean
    {
      this._canReuseAlreadyCreatedRenderingZone = false;
      var aParent : amPlaylistItemDesign.am_coreservices.AE_PlaylistItem_Design;
      aParent = <amPlaylistItemDesign.am_coreservices.AE_PlaylistItem_Design>this.getOwner().getParent();
      if (aParent == null)
        return false;
      var aParentlogic : amPlaylistItemDesignLogic.am_coreservices.AE_PlaylistItem_DesignLogic = 
                                         <amPlaylistItemDesignLogic.am_coreservices.AE_PlaylistItem_DesignLogic>aParent.getLogic();
      if (aParentlogic == null)
        return false;
      var realCrtChildIdx = 0;
      if (aParentlogic.getSameChildToPlay() == null) 
        return false;

      this._canReuseAlreadyCreatedRenderingZone = true;
      return true;
      //if (aParentlogic.getSameChildToPlay() == null) 
        //return false;
      //aParentlogic._status_RequestToPlay_List.setLastStartedChild(sameChildToPlay);
      //return this._canReuseAlreadyCreatedRenderingZone = false;
    }

    //----------------------------------------
    /*
    public setCanReuseAlreadyCreatedRenderingZone(canReuseAlreadyCreatedRenderingZone: boolean)
    {
      this._canReuseAlreadyCreatedRenderingZone = canReuseAlreadyCreatedRenderingZone;
    }*/

  }
} 