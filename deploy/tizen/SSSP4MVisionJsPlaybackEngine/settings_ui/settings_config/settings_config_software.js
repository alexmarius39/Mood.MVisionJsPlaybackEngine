const regexHHMMSS = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)$/;

function getConfigSoftware(){
  return {
    "softwareSettings.debugSettings.debugViewVisible": {
      label: "Debug View Visible",
      editor: "checkbox"
    },
    "softwareSettings.debugSettings.deleteMediaOnLaunch": {
      label: "Delete Media On Launch",
      editor: "checkbox"
    },
    "softwareSettings.debugSettings.deletePlaylistOnLaunch": {
      label: "Delete Playlist On Launch",
      editor: "checkbox"
    },
    "softwareSettings.debugSettings.monitoringDisabled": {
      label: "Monitoring Disabled",
      editor: "checkbox"
    },
    "softwareSettings.debugSettings.networkSetupDisabled": {
      label: "Network Setup Disabled",
      editor: "checkbox"
    },
    "softwareSettings.debugSettings.playbackLogsUploadDisabled": {
      label: "Playback Logs Upload Disabled",
      editor: "checkbox"
    },
    "softwareSettings.debugSettings.playerFilesUpdateDisabled": {
      label: "Player Files Update Disabled",
      editor: "checkbox"
    },
    "softwareSettings.debugSettings.crashLoggerEnabled": {
      label: "Crash Logger Enabled",
      editor: "checkbox"
    },
    "syncSettings.lastPlayerChangeId": {
      label: "Last Player Change Id",
      editor: "text"
    },
    "softwareSettings.debugSettings.streamMusicTracks": {
      label: "Stream Music Tracks",
      editor: "checkbox"
    },
    "softwareSettings.debugSettings.useHeadlessSetupWebAppDevBuild": {
      label: "Use Headless Setup WebApp Dev Build",
      editor: "checkbox"
    },
    "softwareSettings.earlyAdopter": {
      label: "Early Adopter",
      editor: "checkbox"
    },
    "softwareSettings.httpServiceMaxWorkers": {
      label: "HTTP Service Max Workers",
      editor: "text"
    },
    "softwareSettings.headlessSetupEnabled": {
      label: "Headless Setup Enabled",
      editor: "checkbox"
    },
    "softwareSettings.liveCommandsEnabled": {
      label: "Live Commands Enabled",
      editor: "checkbox"
    },
    "softwareSettings.projectId": {
      label: "Project Id",
      editor: "text"
    },
    "softwareSettings.resetSettings.resetMode": {
      label: "Reset Mode",
      editor: "select",
      editorParams: {
          options: [
              {value: "REBOOT_DEVICE"},
              {value: "REBOOT_DEVICE_IF_CONNECTED"},
              {value: "RESTART_APPLICATIONS"},
              {value: "RUN_STARTUP_TASKS"},
              {value: "DO_NOTHING"}
          ]
      }
    },
    "softwareSettings.resetSettings.resetTime": {
      label: "Reset Time",
      editor: "text",
      validator: function(value) {
        return regexHHMMSS.test(value);
      },
      validatorMessage: "ONLY HH:MM:SS time format is allowed"
    }
  }
}