var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemEventType", "../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_NextChildSelectionType", "../../../../../app/ts/reusable/rm_coreservices/re_playlist/RE_PlaylistItem_PlaylistLogic", "../../../../../app/ts/abstract/am_general/ae_event/AE_EventRequestType"], function (require, exports, amPlaylistItemEventType, amNextChildSelectionType, rmPlaylistItemPriorityPlaylistLogic, amGeneralEventRequestType) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rm_coreservices;
    (function (rm_coreservices) {
        var RE_PlaylistItem_DesignMainZoneLogic = /** @class */ (function (_super) {
            __extends(RE_PlaylistItem_DesignMainZoneLogic, _super);
            //----------------
            function RE_PlaylistItem_DesignMainZoneLogic() {
                var _this = _super.call(this) || this;
                _this._nextChildSelectionType = amNextChildSelectionType.am_coreservices.AE_NextChildSelectionType.NextChildSelectionType_OneAfterTheOther_NoLoop;
                _this._hasMultiplay = false;
                _this._hasARenderingRepresentation = false;
                _this._hasARenderingZone = true;
                _this._isMainZone = true;
                return _this;
            }
            //======================
            RE_PlaylistItem_DesignMainZoneLogic.prototype.isDisable = function (refDate, event, eventQueue, error, aPlaylistController, aRenderingController, context, callback) {
                return false;
            };
            //=================
            //
            //=================
            //==================
            RE_PlaylistItem_DesignMainZoneLogic.prototype.isMainZone = function () {
                return this._isMainZone;
            };
            //=================
            RE_PlaylistItem_DesignMainZoneLogic.prototype.setIsMainZone = function (isMainZone) {
                this._isMainZone = isMainZone;
            };
            //---------------------
            RE_PlaylistItem_DesignMainZoneLogic.prototype.prepareEvent = function (event, eventQueue, error, context, callback) {
                if (event.getEventId() != amPlaylistItemEventType.am_coreservices.AE_PlaylistItemEventType.EVT_notifyChildEnd)
                    return;
                if (!this._isMainZone)
                    return;
                event.setEventRequest(amGeneralEventRequestType.am_general.AE_EventRequestType.EvtRequest_AbortParent);
            };
            //============================================
            //  set / get can reuse an already created rendering zone
            //============================================
            //----------------------------------------
            RE_PlaylistItem_DesignMainZoneLogic.prototype.canDestroyAlreadyCreatedRenderingZone = function () {
                var aParent;
                aParent = this.getOwner().getParent();
                if (aParent == null)
                    return false;
                var aParentLogic = aParent.getLogic();
                if (aParentLogic == null)
                    return false;
                var realCrtChildIdx = 0;
                realCrtChildIdx = aParentLogic.getOwnerIdxAsChild();
                var sameChildToPlay = aParentLogic.hasTheSameChildNextToPlay(realCrtChildIdx, null, null, null, null, null, null, null);
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
            };
            //----------------------------------------
            RE_PlaylistItem_DesignMainZoneLogic.prototype.canReuseAlreadyCreatedRenderingZone = function () {
                this._canReuseAlreadyCreatedRenderingZone = false;
                var aParent;
                aParent = this.getOwner().getParent();
                if (aParent == null)
                    return false;
                var aParentlogic = aParent.getLogic();
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
            };
            return RE_PlaylistItem_DesignMainZoneLogic;
        }(rmPlaylistItemPriorityPlaylistLogic.rm_coreservices.RE_PlaylistItem_PlaylistLogic));
        rm_coreservices.RE_PlaylistItem_DesignMainZoneLogic = RE_PlaylistItem_DesignMainZoneLogic;
    })(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
});
//# sourceMappingURL=RE_PlaylistItem_DesignMainZoneLogic.js.map