"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var amJsonMediaTypeId = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_JsonMediaTypeId");
var amPlaylistItemType = require("../../../../../app/ts/abstract/am_coreservices/ae_playlist/AE_PlaylistItemType");
var rm_coreservices;
(function (rm_coreservices) {
    var RI_HtmlTemplateDownloaderBuilder_Mood_v5 = (function () {
        function RI_HtmlTemplateDownloaderBuilder_Mood_v5(owner) {
            this._owner = owner;
        }
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.existsMediaFile = function (mediaId, contentFileId, aPlaylistItemType, mediaFilesList, fileTemplayesFilesList) {
            if (mediaFilesList.has(contentFileId))
                return true;
            return false;
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.addMediaFile = function (aPlaylistType, aPlaylistItemType, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, mediaId, contentFileId, contentFileName, shaFileValue, contentPlayerFileName, srcFileType, bIsHtmlParameter, error, context, callback) {
            if (bIsHtmlParameter == true) {
                var parentMediaId = null;
                var parentContentFileId = null;
                var parentContentFileName = null;
                var parentShaFileValue = null;
                var parentContentPlayerFileName = null;
                this.addHtmlTemplateFile(aPlaylistType, aPlaylistItemType, jsonObject, parentMediaId, parentContentFileId, parentContentFileName, parentShaFileValue, parentContentPlayerFileName, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, mediaId, contentFileId, contentFileName, shaFileValue, contentPlayerFileName, srcFileType, bIsHtmlParameter, error, context, callback);
                return 0;
            }
            if (this.existsMediaFile(mediaId, contentFileId, aPlaylistItemType, mediaFilesList, fileTemplatesFilesList))
                return 1;
            var newMediaFileTransfer = this._owner._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
            newMediaFileTransfer.injectDependencies(null, this._owner._aServiceLocator, null, null);
            newMediaFileTransfer.setMediaId(mediaId);
            newMediaFileTransfer.getSrcFileInfo().setStorage(aMediaFilesFolderTransfer.getSrcFileInfo().getStorage());
            newMediaFileTransfer.getSrcFileInfo().setPath(aMediaFilesFolderTransfer.getSrcFileInfo().getPath() +
                contentFileId + "/" +
                aMediaFilesFolderTransfer.getSrcFileInfo2().getPath());
            newMediaFileTransfer.getSrcFileInfo().setName(contentFileName);
            newMediaFileTransfer.setSrcShaFileValue(shaFileValue);
            newMediaFileTransfer.setSrcFileType(srcFileType);
            newMediaFileTransfer.setSrcFileId(contentFileId);
            newMediaFileTransfer.setSrcShaFileInfo(this._owner.createShaFileInfoFromFileInfo(newMediaFileTransfer.getSrcFileInfo()));
            newMediaFileTransfer.getTmpFileInfo().setStorage(aMediaFilesFolderTransfer.getTmpFileInfo().getStorage());
            newMediaFileTransfer.getTmpFileInfo().setPath(aMediaFilesFolderTransfer.getTmpFileInfo().getPath());
            newMediaFileTransfer.getTmpFileInfo().setName(contentPlayerFileName);
            newMediaFileTransfer.setTmpShaFileInfo(this._owner.createShaFileInfoFromFileInfo(newMediaFileTransfer.getTmpFileInfo()));
            newMediaFileTransfer.setComputedShaFileInfo(this._owner.createComputedShaFileInfoFromFileInfo(newMediaFileTransfer.getTmpFileInfo()));
            newMediaFileTransfer.getDstFileInfo().setStorage(aMediaFilesFolderTransfer.getDstFileInfo().getStorage());
            newMediaFileTransfer.getDstFileInfo().setPath(aMediaFilesFolderTransfer.getDstFileInfo().getPath());
            newMediaFileTransfer.getDstFileInfo().setName(contentPlayerFileName);
            newMediaFileTransfer.setDstShaFileInfo(this._owner.createShaFileInfoFromFileInfo(newMediaFileTransfer.getDstFileInfo()));
            mediaFilesList.set(contentFileId, newMediaFileTransfer);
            return 0;
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.existsHtmlTemplateFile = function (mediaId, contentFileId, aPlaylistItemType, mediaFilesList, fileTemplatesFilesList) {
            if (fileTemplatesFilesList.has(contentFileId))
                return true;
            return false;
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.addHtmlTemplateFile = function (aPlaylistType, aPlaylistItemType, jsonObject, parentMediaId, parentContentFileId, parentContentFileName, parentShaFileValue, parentContentPlayerFileName, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, mediaId, contentFileId, contentFileName, shaFileValue, contentPlayerFileName, srcFileType, bIsHtmlParameter, error, context, callback) {
            if (srcFileType != "htmltemplate") {
                if (this.existsHtmlTemplateFile(mediaId, contentFileId, aPlaylistItemType, mediaFilesList, fileTemplatesFilesList))
                    return null;
            }
            var extraPath = "";
            if (srcFileType != "htmltemplate") {
                extraPath = "";
            }
            else {
                var a = 1;
            }
            var newHtmlTemplateFileTransfer = this._owner._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
            newHtmlTemplateFileTransfer.injectDependencies(null, this._owner._aServiceLocator, null, null);
            newHtmlTemplateFileTransfer.setMediaId(mediaId);
            newHtmlTemplateFileTransfer.getSrcFileInfo().setStorage(aHtmlTemplatesFilesFolderTransfer.getSrcFileInfo().getStorage());
            newHtmlTemplateFileTransfer.getSrcFileInfo().setPath(aHtmlTemplatesFilesFolderTransfer.getSrcFileInfo().getPath() +
                contentFileId + "/" +
                aHtmlTemplatesFilesFolderTransfer.getSrcFileInfo2().getPath());
            newHtmlTemplateFileTransfer.getSrcFileInfo().setName(contentFileName);
            newHtmlTemplateFileTransfer.setSrcShaFileValue(shaFileValue);
            newHtmlTemplateFileTransfer.setSrcFileType(srcFileType);
            newHtmlTemplateFileTransfer.setSrcFileId(contentFileId);
            newHtmlTemplateFileTransfer.setSrcShaFileInfo(this._owner.createShaFileInfoFromFileInfo(newHtmlTemplateFileTransfer.getSrcFileInfo()));
            newHtmlTemplateFileTransfer.getTmpFileInfo().setStorage(aHtmlTemplatesFilesFolderTransfer.getTmpFileInfo().getStorage());
            newHtmlTemplateFileTransfer.getTmpFileInfo().setPath(aHtmlTemplatesFilesFolderTransfer.getTmpFileInfo().getPath() + extraPath);
            newHtmlTemplateFileTransfer.getTmpFileInfo().setName(contentPlayerFileName);
            newHtmlTemplateFileTransfer.setTmpShaFileInfo(this._owner.createShaFileInfoFromFileInfo(newHtmlTemplateFileTransfer.getTmpFileInfo()));
            newHtmlTemplateFileTransfer.setComputedShaFileInfo(this._owner.createComputedShaFileInfoFromFileInfo(newHtmlTemplateFileTransfer.getTmpFileInfo()));
            newHtmlTemplateFileTransfer.getDstFileInfo().setStorage(aHtmlTemplatesFilesFolderTransfer.getDstFileInfo().getStorage());
            newHtmlTemplateFileTransfer.getDstFileInfo().setPath(aHtmlTemplatesFilesFolderTransfer.getDstFileInfo().getPath() + extraPath);
            newHtmlTemplateFileTransfer.getDstFileInfo().setName(contentPlayerFileName);
            newHtmlTemplateFileTransfer.setDstShaFileInfo(this._owner.createShaFileInfoFromFileInfo(newHtmlTemplateFileTransfer.getDstFileInfo()));
            if (srcFileType == "htmlfeed") {
                newHtmlTemplateFileTransfer.setDoDownload(false);
            }
            if (srcFileType == "htmltemplate") {
                fileTemplatesFilesList.set(mediaId, newHtmlTemplateFileTransfer);
            }
            else {
                fileTemplatesFilesList.set(contentFileId, newHtmlTemplateFileTransfer);
            }
            return newHtmlTemplateFileTransfer;
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.getOnlyFileName = function (strFileName) {
            var onlyFileName = strFileName;
            var idx = strFileName.lastIndexOf('/');
            if (idx != -1) {
                onlyFileName = onlyFileName.substring(idx + 1);
            }
            return onlyFileName;
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.getOnlyPath = function (strFileName) {
            var onlyPath = strFileName;
            var idx = strFileName.lastIndexOf('/');
            if (idx != -1) {
                onlyPath = onlyPath.substring(0, idx);
            }
            return onlyPath;
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.addHtmlTemplate_ResourceFile = function (aPlaylistType, aPlaylistItemType, jsonObject, jsonObjectIdx, parentMediaId, parentContentFileId, parentContentFileName, parentShaFileValue, parentContentPlayerFileName, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, error, context, callback) {
            var self = this;
            var strKey = 1000 * parentContentFileId + jsonObjectIdx;
            var mediaId = strKey;
            var contentFileId = strKey;
            var srcFileId = strKey;
            var srcFileType = "txt";
            var shaFileValue = "";
            var relativePath = jsonObject;
            relativePath = relativePath.replace(/\\/g, "/");
            var detailExtraPath = self.getOnlyPath(relativePath);
            detailExtraPath = detailExtraPath + "/";
            var extraPath = detailExtraPath;
            var detailFileNameOnly = self.getOnlyFileName(relativePath);
            var contentPlayerFileName = detailFileNameOnly;
            var contentFileName = detailFileNameOnly;
            var newHtmlTemplateFileTransfer = this._owner._aServiceLocator._iEntityCreation.createDefaultFileTransfer(error);
            newHtmlTemplateFileTransfer.injectDependencies(null, this._owner._aServiceLocator, null, null);
            newHtmlTemplateFileTransfer.setMediaId(mediaId);
            newHtmlTemplateFileTransfer.getSrcFileInfo().setStorage(aHtmlTemplatesFilesFolderTransfer.getSrcFileInfo().getStorage());
            newHtmlTemplateFileTransfer.getSrcFileInfo().setPath(aHtmlTemplatesFilesFolderTransfer.getSrcFileInfo().getPath() +
                contentFileId + "/" +
                aHtmlTemplatesFilesFolderTransfer.getSrcFileInfo2().getPath() + extraPath);
            newHtmlTemplateFileTransfer.getSrcFileInfo().setName(contentFileName);
            newHtmlTemplateFileTransfer.setSrcShaFileValue(shaFileValue);
            newHtmlTemplateFileTransfer.setSrcFileType(srcFileType);
            newHtmlTemplateFileTransfer.setSrcFileId(srcFileId);
            newHtmlTemplateFileTransfer.setSrcShaFileInfo(this._owner.createShaFileInfoFromFileInfo(newHtmlTemplateFileTransfer.getSrcFileInfo()));
            newHtmlTemplateFileTransfer.getTmpFileInfo().setStorage(aHtmlTemplatesFilesFolderTransfer.getTmpFileInfo().getStorage());
            newHtmlTemplateFileTransfer.getTmpFileInfo().setPath(aHtmlTemplatesFilesFolderTransfer.getTmpFileInfo().getPath() + extraPath);
            newHtmlTemplateFileTransfer.getTmpFileInfo().setName(contentPlayerFileName);
            newHtmlTemplateFileTransfer.setTmpShaFileInfo(this._owner.createShaFileInfoFromFileInfo(newHtmlTemplateFileTransfer.getTmpFileInfo()));
            newHtmlTemplateFileTransfer.setComputedShaFileInfo(this._owner.createComputedShaFileInfoFromFileInfo(newHtmlTemplateFileTransfer.getTmpFileInfo()));
            newHtmlTemplateFileTransfer.getDstFileInfo().setStorage(aHtmlTemplatesFilesFolderTransfer.getDstFileInfo().getStorage());
            newHtmlTemplateFileTransfer.getDstFileInfo().setPath(aHtmlTemplatesFilesFolderTransfer.getDstFileInfo().getPath() + extraPath);
            newHtmlTemplateFileTransfer.getDstFileInfo().setName(contentPlayerFileName);
            newHtmlTemplateFileTransfer.setDstShaFileInfo(this._owner.createShaFileInfoFromFileInfo(newHtmlTemplateFileTransfer.getDstFileInfo()));
            newHtmlTemplateFileTransfer.setIgnoreErrors(true);
            fileTemplatesFilesList.set(strKey, newHtmlTemplateFileTransfer);
            return 0;
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadMediaFilesList = function (aPlaylistType, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, error, context, callback) {
            this.loadStreams(aPlaylistType, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, error, context, callback);
            if (callback != null) {
                context.setError(error);
                if (callback != null)
                    callback(context);
            }
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadStreams = function (aPlaylistType, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, error, context, callback) {
            var crtPlaylistStream = null;
            for (var iStream = 0; iStream < jsonObject.Streams_Extended.length; iStream++) {
                this.loadOneStream(aPlaylistType, jsonObject.Streams_Extended[iStream], iStream, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, error, context, callback);
            }
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneStream = function (aPlaylistType, jsonObject, iStream, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, error, context, callback) {
            var bIsHtmlParameter = false;
            this.loadEvents(aPlaylistType, jsonObject.Channel_Extended, 0, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
            this.loadStaticMediaItems(aPlaylistType, jsonObject.Channel_Extended, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
            var iStream = 0;
            this.loadOnePlaylist(aPlaylistType, jsonObject.Channel_Extended.Playlist_Extended, iStream, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
            this.loadScreenSaver(aPlaylistType, jsonObject.Channel_Extended, 1, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadScreenSaver = function (aPlaylistType, jsonObject, iScreenSaverIdx, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadScreenSaverImage = function (aPlaylistType, jsonObject, iScreenSaverIdx, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadScreenSaverVideo = function (aPlaylistType, jsonObject, iScreenSaverIdx, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadStaticMediaItems = function (aPlaylistType, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            for (var iMediaItem = 0; iMediaItem < jsonObject.Medias_Statics_Extended.length; iMediaItem++) {
                this.loadOneMediaItem(aPlaylistType, jsonObject.Medias_Statics_Extended[iMediaItem], iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
            }
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadEvents = function (aPlaylistType, jsonObject, iEventsIdx, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            for (var iEventItem = 0; iEventItem < jsonObject.Events.length; iEventItem++) {
                this.loadOneEvent(aPlaylistType, jsonObject.Events[iEventItem], iEventItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
            }
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneEvent = function (aPlaylistType, jsonObject, iEventItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            this.loadMediaItems(aPlaylistType, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOnePlaylist = function (aPlaylistType, jsonObject, iPlaylist, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            this.loadMediaItems(aPlaylistType, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadMediaItems = function (aPlaylistType, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            var iRealCrtMediaItem = 0;
            for (var iMediaItem = 0; iMediaItem < jsonObject.Medias_Extended.length; iMediaItem++) {
                this.loadOneMediaItem(aPlaylistType, jsonObject.Medias_Extended[iMediaItem], iRealCrtMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                iRealCrtMediaItem++;
            }
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneMediaItem = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            var jsonMediaTypeId = jsonObject.MediaType;
            switch (jsonMediaTypeId) {
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.WEBPAGE:
                    this.loadOneWebPage(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.EDITABLE_FLASH:
                    this.loadOneEditableFlash(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.TV_TUNER:
                    this.loadOneTvTuner(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.TV_PASS_THROUGH:
                    this.loadOneTvPassThrough(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC:
                    this.loadOneImage(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.AUDIO_FILES:
                    this.loadOneAudioFile(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC_MOVIE:
                    this.loadOneVideo(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.HTML_EDITABLE_EXTENDED:
                    this.loadOneHtmlTemplate(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.HTML_FEED:
                    this.loadOneHtmlFeed(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.SEQUENCE_EXTENDED:
                    this.loadOneDesign(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.TAG_EXTENDED:
                    this.loadOneTag(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.FLASH_OBJECT:
                    this.loadOneFlash(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.PLAYLIST:
                    this.loadOnePlaylist(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                case amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.VIDEO_OR_AUDIO_STREAM:
                    this.loadOneVideoOrAudioStream(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
                    break;
                default:
                    break;
            }
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneImage = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            this.addMediaFile(aPlaylistType, amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Image, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, jsonObject.ID, jsonObject.ContentFileID, jsonObject.ContentFileName, jsonObject.ContentFilePlayerShaCode, jsonObject.ContentPlayerFileName, "bin", bIsHtmlParameter, error, context, callback);
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneVideo = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            this.addMediaFile(aPlaylistType, amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_Video, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, jsonObject.ID, jsonObject.ContentFileID, jsonObject.ContentFileName, jsonObject.ContentFilePlayerShaCode, jsonObject.ContentPlayerFileName, "bin", bIsHtmlParameter, error, context, callback);
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneWebPage = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneHtmlTemplate = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            var aParentHtmlTemplateFileTransfer = this.addHtmlTemplateFile(aPlaylistType, amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_HtmlTemplate, jsonObject, jsonObject.ID, jsonObject.ContentFileID, jsonObject.ContentFileName, jsonObject.ContentFilePlayerShaCode, jsonObject.ContentPlayerFileName, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, jsonObject.ID, jsonObject.ContentFileID, jsonObject.ContentFileName, jsonObject.ContentFilePlayerShaCode, jsonObject.ContentPlayerFileName, "htmltemplate", bIsHtmlParameter, error, context, callback);
            var bIsHtmlParameter2 = true;
            try {
                for (var j = 0; j < jsonObject.HtmlParameters_Extended.length; j++) {
                    this.loadOneMediaItem(aPlaylistType, jsonObject.HtmlParameters_Extended[j], j, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter2, error, context, callback);
                    if (jsonObject.HtmlParameters_Extended[j].MediaType == amJsonMediaTypeId.am_coreservices.AE_JsonMediaTypeId.MEDIA_STATIC_MOVIE) {
                        if (aParentHtmlTemplateFileTransfer != null) {
                            aParentHtmlTemplateFileTransfer.setAdditionalInfo("../" + jsonObject.HtmlParameters_Extended[j].ContentPlayerFileName);
                        }
                    }
                }
                for (var k = 0; k < jsonObject.Html_Template_Resources.length; k++) {
                    this.addHtmlTemplate_ResourceFile(aPlaylistType, amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_HtmlTemplateResource, jsonObject.Html_Template_Resources[k], k, jsonObject.ID, jsonObject.ContentFileID, jsonObject.ContentFileName, jsonObject.ContentFilePlayerShaCode, jsonObject.ContentPlayerFileName, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, error, context, callback);
                }
            }
            catch (error) {
            }
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneHtmlFeed = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            if (bIsHtmlParameter == true) {
                this.addMediaFile(aPlaylistType, amPlaylistItemType.am_coreservices.AE_PlaylistItemType.PlaylistItemType_HtmlFeed, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, jsonObject.ID, jsonObject.ContentFileID, jsonObject.ContentFileName, jsonObject.ContentFilePlayerShaCode, jsonObject.ContentPlayerFileName, "htmlfeed", bIsHtmlParameter, error, context, callback);
            }
            return false;
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneDesign = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            this.loadDesignZones(aPlaylistType, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadDesignZones = function (aPlaylistType, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            for (var iDesignZone = 0; iDesignZone < jsonObject.Zones_Extended.length; iDesignZone++) {
                this.loadOneDesignZone(aPlaylistType, jsonObject.Zones_Extended[iDesignZone], iDesignZone, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
            }
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneDesignZone = function (aPlaylistType, jsonObject, iDesignZone, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            this.loadOnePlaylist(aPlaylistType, jsonObject.Playlist_Extended, 0, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneFillRect = function (aPlaylistType, jsonObject, iFillRectIdx, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback, R, G, B, isVisible, strDuration) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneTag = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadStaticMediaItemsInTag = function (aPlaylistType, jsonTagObject, jsonStaticMedias, aPlaylistFile, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            var iJsonStaticMediaIdx = -1;
            for (var iTagMediaId = 0; iTagMediaId < jsonTagObject.MEDIA_IDS.length; iTagMediaId++) {
                iJsonStaticMediaIdx = this.getJsonStaticMediaById(jsonTagObject.MEDIA_IDS[iTagMediaId], jsonStaticMedias);
                if (iJsonStaticMediaIdx == -1)
                    continue;
                this.loadOneMediaItem(aPlaylistType, jsonStaticMedias[iJsonStaticMediaIdx], iTagMediaId, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
            }
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.getJsonStaticMediaById = function (staticMediaId, jsonStaticMedias) {
            var crtJsonStaticMedia = null;
            var iJsonStaticMediaIdx = -1;
            for (var iStaticMediaIdx = 0; iStaticMediaIdx < jsonStaticMedias.length; iStaticMediaIdx++) {
                crtJsonStaticMedia = jsonStaticMedias[iStaticMediaIdx];
                if (crtJsonStaticMedia == null)
                    continue;
                if (crtJsonStaticMedia.ID == null)
                    continue;
                if (crtJsonStaticMedia.ID == staticMediaId) {
                    iJsonStaticMediaIdx = iStaticMediaIdx;
                    break;
                }
            }
            return iJsonStaticMediaIdx;
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.createOrGeAndSetRealTag = function (nbChildren, aPlaylistType, jsonObject, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneEditableFlash = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneTvTuner = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneTvPassThrough = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneAudioFile = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneFlash = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplayesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOnePlaylist2 = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneVideoOrAudioStream = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
            if (jsonObject == null)
                return;
            if (jsonObject.Properties == null)
                return;
            if (jsonObject.Properties.Type == null)
                return;
            if (jsonObject.Properties.Type == "VIDEO")
                return this.loadOneVideoStream(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
            if (jsonObject.Properties.Type == "AUDIO")
                return this.loadOneAudioStream(aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback);
            return;
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneVideoStream = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.loadOneAudioStream = function (aPlaylistType, jsonObject, iMediaItem, mediaFilesList, fileTemplatesFilesList, aPlaylistFileTransfer, aMediaFilesFolderTransfer, aHtmlTemplatesFilesFolderTransfer, bIsHtmlParameter, error, context, callback) {
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.prototype.getEmptyPlaylist = function () {
            return RI_HtmlTemplateDownloaderBuilder_Mood_v5.EMPTY_PLAYLIST;
        };
        RI_HtmlTemplateDownloaderBuilder_Mood_v5.EMPTY_PLAYLIST = "{" +
            "\"ID\": 9999," +
            "\"Name\": \"Empty PC\"," +
            "\"PlayerType\": 1," +
            "\"SerialNumber\": \"PC100001\"," +
            "\"SiteID\": 1042," +
            "\"StreamList\": [" +
            "3118" +
            "]," +
            "\"WorkgroupID\": 2613," +
            "\"BrandType\": 4," +
            "\"CompatibleHardwareVersions\": \"R33\"," +
            "\"PaybackProfile\": 1," +
            "\"Streams_Extended\": [" +
            "{" +
            "\"HardwareID\": 9999," +
            "\"Height\": 100," +
            "\"ID\": 3118," +
            "\"Name\": \"Full screen stream for Empty PC\"," +
            "\"Width\": 100," +
            "\"WindowsAccountId\": 0," +
            "\"X\": 0," +
            "\"Y\": 0," +
            "\"Channel_Extended\": {" +
            "\"AspectRatioIDs\": []," +
            "\"CreationDate\": \"\/Date(1537352713363+0200)\/\"," +
            "\"Description\": null," +
            "\"Duration\": null," +
            "\"ID\": 36490," +
            "\"IsLocked\": false," +
            "\"IsSharedFromParentWorkgroup\": false," +
            "\"IsUnsharedButPartOfASharedContainer\": false," +
            "\"LastLock\": null," +
            "\"LastModificationDate\": \"\/Date(1588932183167+0200)\/\"," +
            "\"LastModifierId\": 73," +
            "\"Loop\": false," +
            "\"MediaParentId\": -1," +
            "\"MediaType\": 14," +
            "\"Name\": \"Default Channel for Marius\"," +
            "\"OwnerId\": 73," +
            "\"OwnerName\": \"Alexandru Iorga\"," +
            "\"TagIDs\": []," +
            "\"UserIDLock\": null," +
            "\"UserNameLock\": \"\"," +
            "\"WorkgroupId\": 2615," +
            "\"CustomID\": null," +
            "\"DiffusionDays\": {" +
            "\"Value\": 127" +
            "}," +
            "\"EndTime\": \"PT23H59M59S\"," +
            "\"ExpectedPlayDate\": null," +
            "\"ExpectedPlayTime\": null," +
            "\"FirstDiffusion\": \"\/Date(1537315200000)\/\"," +
            "\"LastDiffusion\": \"\/Date(4102444799000)\/\"," +
            "\"MediaAccessRights\": []," +
            "\"SharingType\": -1," +
            "\"StartTime\": \"PT0S\"," +
            "\"ContentType\": null," +
            "\"EventIds\": null," +
            "\"LastActivation\": \"\/Date(1590952800535+0200)\/\"," +
            "\"Sequence\": null," +
            "\"isForLocalInput\": false," +
            "\"Events\": []," +
            "\"Medias_Statics_Extended\": []," +
            "\"Playlist_Extended\": {" +
            "\"AspectRatioIDs\": []," +
            "\"CreationDate\": \"\/Date(1537352713370+0200)\/\"," +
            "\"Description\": null," +
            "\"Duration\": null," +
            "\"ID\": 36492," +
            "\"IsLocked\": false," +
            "\"IsSharedFromParentWorkgroup\": false," +
            "\"IsUnsharedButPartOfASharedContainer\": false," +
            "\"LastLock\": null," +
            "\"LastModificationDate\": \"\/Date(1537352713370+0200)\/\"," +
            "\"LastModifierId\": 73," +
            "\"Loop\": false," +
            "\"MediaParentId\": -1," +
            "\"MediaType\": 19," +
            "\"Name\": \"Playlist for Zone 0 in design 'Sequence for channel Empty'\"," +
            "\"OwnerId\": 73," +
            "\"OwnerName\": \"Alexandru Iorga\"," +
            "\"TagIDs\": []," +
            "\"UserIDLock\": null," +
            "\"UserNameLock\": null," +
            "\"WorkgroupId\": 2615," +
            "\"CustomID\": null," +
            "\"DiffusionDays\": {" +
            "\"Value\": 127" +
            "}," +
            "\"EndTime\": \"PT23H59M59S\"," +
            "\"ExpectedPlayDate\": null," +
            "\"ExpectedPlayTime\": null," +
            "\"FirstDiffusion\": \"\/Date(1537315200000)\/\"," +
            "\"LastDiffusion\": \"\/Date(4102444799000)\/\"," +
            "\"MediaAccessRights\": []," +
            "\"SharingType\": -1," +
            "\"StartTime\": \"PT0S\"," +
            "\"AllowUserSelection\": null," +
            "\"AllowedTypes\": []," +
            "\"DeniedTypes\": []," +
            "\"EventType\": null," +
            "\"FirstContentID\": null," +
            "\"IsRandom\": false," +
            "\"MaxNumberOfElements\": 0," +
            "\"MediasIds\": null," +
            "\"PlaylistOrder\": [" +
            "]," +
            "\"Properties\": []," +
            "\"Repeat\": null," +
            "\"RepeatFrequency\": null," +
            "\"RepeatInterval\": null," +
            "\"RepeatNbOfTracks\": null," +
            "\"Medias_Extended\": [" +
            "]" +
            "}" +
            "}" +
            "}" +
            "]" +
            "}";
        return RI_HtmlTemplateDownloaderBuilder_Mood_v5;
    }());
    rm_coreservices.RI_HtmlTemplateDownloaderBuilder_Mood_v5 = RI_HtmlTemplateDownloaderBuilder_Mood_v5;
})(rm_coreservices = exports.rm_coreservices || (exports.rm_coreservices = {}));
//# sourceMappingURL=RI_HtmlTemplateDownloaderBuilder_Mood_v5.js.map