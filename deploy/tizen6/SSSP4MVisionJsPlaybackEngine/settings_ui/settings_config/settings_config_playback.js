function getConfigAudio() {
  return {
    "playbackSettings.audioSettings.audioPlayerType": {
      label: "Player Type",
      editor: "select",
      editorParams: {
        options: [
          {value: "PLATFORM_DEFAULT_PLAYER"},
          {value: "MEDIA_CODEC"},
          {value: "EXO_PLAYER"},
          {value: "VLC"}
        ]
      }
    },
    "playbackSettings.audioSettings.duckingPercent": {
      label: "Ducking Percent",
      setter: integerSetter,
      editor: "range",
      editorParams: {
          min: 0,
          max: 100,
          step: 1,
          valueLabelPrefix: "",
          valueLabelSufix: "%"
      }
    },
    "playbackSettings.audioSettings.duckingDuration": {
      label: "Ducking Duration",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(0, 10000),
      validatorMessage: "Input an integer number between 0 and 10000"
    },
    "playbackSettings.audioSettings.musicCrossfadeMode": {
      label: "Music Crossfade Mode",
      editor: "select",
      editorParams: {
        options: [
          {value: "OFF"},
          {value: "STATIC"},
          {value: "DYNAMIC"}
        ]
      }
    },
    "playbackSettings.audioSettings.musicSmoothStopDurationMillis": {
      label: "Music Smooth Stop Duration (ms)",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(0, 10000),
      validatorMessage: "Input an integer number between 0 and 10000"
    },
    "playbackSettings.audioSettings.musicSmoothStopPercent": {
      label: "Music Smooth Stop (%)",
      setter: integerSetter,
      editor: "range",
      editorParams: {
          min: 0,
          max: 100,
          step: 1,
          valueLabelPrefix: "",
          valueLabelSufix: "%"
      },
    },
    "playbackSettings.audioSettings.musicStaticCrossfadeDurationMillis": {
      label: "MusicStaticCrossfadeDuration (ms)",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(0, 60000),
      validatorMessage: "Input an integer number between 0 and 60000"
    },
    "playbackSettings.audioSettings.musicTracksVolume": {
      label: "Music Tracks Volume",
      setter: integerSetter,
      editor: "range",
      editorParams: {
          min: 0,
          max: 100,
          step: 1,
          valueLabelPrefix: "",
          valueLabelSufix: ""
      }
    },
    "playbackSettings.audioSettings.volumePercentFactorZoneLeft": {
      label: "Volume Percent Factor Zone Left",
      setter: integerSetter,
      editor: "range",
      editorParams: {
          min: 0,
          max: 100,
          step: 1,
          valueLabelPrefix: "",
          valueLabelSufix: "%"
      }
    },
    "playbackSettings.audioSettings.volumePercentFactorZoneRight": {
      label: "Volume Percent Factor Zone Right",
      setter: integerSetter,
      editor: "range",
      editorParams: {
          min: 0,
          max: 100,
          step: 1,
          valueLabelPrefix: "",
          valueLabelSufix: "%"
      }
    },
    "playbackSettings.audioSettings.musicTracksVolumeZoneLeft": {
      label: "Music Tracks Volume Left Zone",
      setter: integerSetter,
      editor: "range",
      editorParams: {
          min: 0,
          max: 100,
          step: 1,
          valueLabelPrefix: "",
          valueLabelSufix: ""
      }
    },
    "playbackSettings.audioSettings.musicTracksVolumeZoneRight": {
      label: "Music Tracks Volume Right Zone",
      setter: integerSetter,
      editor: "range",
      editorParams: {
          min: 0,
          max: 100,
          step: 1,
          valueLabelPrefix: "",
          valueLabelSufix: ""
      }
    }
  }
}

function getConfigFlashMedia() {
  return {
    "playbackSettings.flashMediaSettings.useAirRuntime": {
      label: "Use AIR Runtime",
      editor: "checkbox"
    }
  }
}

const regexColorHexCode = /^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

function getConfigVOD() {
  return {
    "playbackSettings.vodSettings.isHintEnable": {
      label: "Enable Hint",
      editor: "checkbox"
    },
    "playbackSettings.vodSettings.mediaFrameBackgroundColor": {
      label: "Media Frame BG Color",
      editor: "text",
      validator: function(value) {
        return regexColorHexCode.test(value);
      },
      validatorMessage: "Only HEX code color(#RRGGBB) is allowed"
    },
    "playbackSettings.vodSettings.mediaFrameFocusBackgroundColor": {
      label: "Media Frame Focus BG Color",
      editor: "text",
      validator: function(value) {
        return regexColorHexCode.test(value);
      },
      validatorMessage: "Only HEX code color(#RRGGBB) is allowed"
    },
    "playbackSettings.vodSettings.mediaListZoneFrameLandscape": {
      label: "Media List Zone Frame Landscape",
      getter: function(value) {
        var strJSON = "";
        try {
          strJSON = JSON.stringify(value);
        } catch(e) {
          strJSON = "";
        }
        return strJSON;
      },
      setter: function(initialValue, editedValue) {
        const jsonValue = JSON.parse(editedValue);
        return jsonValue;
      },
      editor: "text",
      validator: function(value) {
        var bRet = true;
        var jsonValue = null;
        try {
          jsonValue = JSON.parse(value);
        } catch (e) {
          bRet = false;
        }
        return jsonValue != null && bRet;
      },
      validatorMessage: 'Only JSON text with format {"top": integer, "left":integer, "bottom":integer, "right": integer} is allowed'
    },
    "playbackSettings.vodSettings.mediaListZoneFramePortrait": {
      label: "Media List Zone Frame Portrait",
      editor: "text",
      getter: function(value) {
        var strJSON = "";
        try {
          strJSON = JSON.stringify(value);
        } catch(e) {
          strJSON = "";
        }
        return strJSON;
      },
      setter: function(initialValue, editedValue) {
        let jsonValue = JSON.parse(editedValue);
        return jsonValue;
      },
      validator: function(value) {
        var bRet = true;
        var jsonValue = null;
        try {
          jsonValue = JSON.parse(value);
        } catch (e) {
          bRet = false;
        }
        return jsonValue != null && bRet;
      },
      validatorMessage: 'Only JSON text with format {"top": integer, "left":integer, "bottom":integer, "right": integer} is allowed'
    },
    "playbackSettings.vodSettings.mediaTitleTextColor": {
      label: "Media Title Text Color",
      editor: "text",
      validator: function(value) {
        return regexColorHexCode.test(value);
      },
      validatorMessage: "Only HEX code color(#RRGGBB) is allowed"
    },
    "playbackSettings.vodSettings.mediaTitleTextColorFocused": {
      label: "Media Title Focused Text Color",
      editor: "text",
      validator: function(value) {
        return regexColorHexCode.test(value);
      },
      validatorMessage: "Only HEX code color(#RRGGBB) is allowed"
    },
    "playbackSettings.vodSettings.timeoutIntervalSeconds": {
      label: "Timeout Interval (s)",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(0, 2147483647),
      validatorMessage: "Input an integer number between 0 and 2147483647"
    },
  }
}

function getConfigVideo() {
  return {
    "playbackSettings.videoSettings.videoPlayerType": {
      label:"Player Type",
      editor: "select",
      editorParams: {
        options: [
          {value: "PLATFORM_DEFAULT_PLAYER"},
          {value: "MEDIA_CODEC"},
          {value: "EXO_PLAYER"},
          {value: "VLC"}
        ]
      }
    },
    "playbackSettings.videoSettings.videoRenderingMode": {
      label:"Rendering Mode",
      editor: "select",
      editorParams: {
        options: [
          {value: "SURFACE_VIEW"},
          {value: "TEXTURE_VIEW"}
        ]
      }
    }
  }
};

function getConfigWebPage() {
  return {
    "playbackSettings.webPageSettings.allowedUrls": {
      label: "Allowed URLs",
      getter: function(value) {
        var isArray = value instanceof Array;
        if (isArray == false || value.length == 0) {
          return "";
        }
        let URLs = "";
        value.forEach(function(val) {
          URLs += val + ", "
        });
        return URLs.slice(0, -2);
      },
      editor: "text",
      setter: function(initialValue, editedValue) {
        return editedValue.split(",").map(String);
      },
      validatorMessage: "Only comma separated URLs are allowed",
    },
    "playbackSettings.webPageSettings.crosswalkUseTextureView": {
      label: "Use Crosswalk Texture View",
      editor: "checkbox"
    },
    "playbackSettings.webPageSettings.purgeWebCacheOnStart": {
      label: "Purge Cache On Start",
      editor: "checkbox"
    }
  }
}

function getConfigPlayback() {
  return {
    "playbackSettings.forceReportNowPlayingData": {
      label: "Force Report Now Playing Data",
      editor: "checkbox"
    },
    "playbackSettings.playlistUpdateInstantReload": {
      label: "Playlist Update Instant Reload",
      editor: "checkbox"
    },
    "playbackSettings.multiZoneNoMediaFillColor": {
      label: "Multizone No Media Fill Color",
      editor: "text",
      validator: function(value) {
        return regexColorHexCode.test(value);
      },
      validatorMessage: "Only HEX code color(#AARRGGBB) is allowed"
    },
    "watchdogSettings.playbackRestartTimeoutMillis": {
      label: "Playback Restart Timeout (ms)",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(0, 2147483647),
      validatorMessage: "Input an integer number between 0 and 2147483647"
    },
    "playbackSettings.syncPlaybackTimeoutMillis": {
      label: "Playback Sync Timeout (ms)",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(0, 1000),
      validatorMessage: "Input an integer number between 0 and 1000"
    },
    "watchdogSettings.watchdogEnabled": {
      label: "Watchdog Enabled",
      editor: "checkbox"
    }
  }
}