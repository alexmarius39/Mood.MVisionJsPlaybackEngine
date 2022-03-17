import amGeneral = require("../../../../../app/ts/abstract/am_general/a_entity/A_Entity");

export module am_coreservices
{

    export enum AE_JsonMediaTypeId 
    {
        FOLDER_RESOURCES = 36,
        HTML_EDITABLE_EXTENDED = 34,
        HTML_FEED = 36,
        EVENT_PLAYLIST = 32,
        CHANNEL_EXTENDED = 14,
        PLAYLIST_EXTENDED = 19,
        EDITABLE_FLASH = 20,
        AUDIO_FILES = 10,
        //JsonMediaTypeId_EDITABLE_FLASH = 920,
        TV_TUNER = 4,
        PLAYLIST = 13,
        WEBPAGE = 6,
        MEDIA_STATIC = 5,
        TAG_EXTENDED = 16,
        PLAYLIST_EXT = 13,
        MEDIA_STATIC_MOVIE = 1,
        SEQUENCE_EXTENDED = 17,
        FLASH_OBJECT = 2,
        TV_PASS_THROUGH = 31,
        VIDEO_OR_AUDIO_STREAM = 47
        
    }

    /*
    public enum MediaType
    {
        None = 0,
        Video = 1,
        Flash = 2,
        Capture = 3,
        TunerTv = 4,
        Image = 5,
        WebPage = 6,
        Scroller = 7,
        Text = 8,
        PowerPoint = 9,
        Audio = 10,
        Rss = 11,
        WmpPlayer = 12,
        Playlist = 13,
        Channel = 14,
        DesignTemplate = 15,
        Tag = 16,
        DesignInstance = 17,
        ScreenLayout = 18,
        PlaylistOfZone = 19,
        FlashEditable = 20,
        PlaylistOfFlash = 21,
        DateTime = 22,
        Color = 23,
        Enum = 24,
        Number = 25,
        PlaylistLocalInputParent = 26,
        FlashEditableTemplate = 27,
        TagLocalInputParent = 28,
        TagLocalInputChild = 29,
        PlaylistLocalInputChild = 30,
        TvPassThru = 31,
        EventPlaylist = 32,
        HtmlTemplate = 33,
        HtmlInstance = 34,
        Folder = 35,
        Feed = 36,
        AdvancedLocalInputPlaylistParent = 37,
        AdvancedLocalInputPlaylistChild = 38,
        AdvancedLocalInputTagParent = 39,
        AdvancedLocalInputTagChild = 40,
        NativeView = 41,
        MusicPlaylist = 42,
        MusicMix = 43,
        MusicProgram = 44,
        FirstValidPlaylist = 45,
        Silence = 46,
        PlayerStream = 47,
        DynamicMessage = 48
    }
    */
    /*
    export enum jsonStringMediaObjectsTypes {
        SEQUENCE = <any>"SEQUENCE_EXT:#TeamCoV5.Models",
        STATIC = <any>"MEDIA_STATIC_SVC:#TeamCoV5.Models",
        PLAYLIST = <any>"PLAYLIST_EXT:#TeamCoV5.Models",
    }
    export enum ImageFitValues {
        STRETCH = 1,
        FIT = 3,
        FILL = 2,
        CENTER = 4
    }
    export enum MediaType {
        Video = 1,
        Image = 0,
        Sequence = 3,
    };*/

} 