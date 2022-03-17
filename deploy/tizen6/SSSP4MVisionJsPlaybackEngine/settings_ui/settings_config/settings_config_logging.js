function getConfigLogging() {
  return {
    "loggingSettings.activityLogsAutoUploadEnabled": {
      label: "Enable Activity Logs Auto Upload",
      editor: "checkbox"
    },
    "loggingSettings.activityLogsFileEnabled": {
      label: "Enable Activity Logs File",
      editor: "checkbox"
    },
    "loggingSettings.playbackLogsFileEnabled": {
      label: "Enable Playback Logs File",
      editor: "checkbox"
    },
    "loggingSettings.activityLogsBufferMaxSizeBytes": {
      label: "Activity Logs Buffer Max Size (bytes)",
      setter: integerSetter,
      editor: "text",
      isEditable: function(settingsValues) {
        return settingsValues("loggingSettings.activityLogsFileEnabled");
      },
      validator: createIntegerTypeValidator(1048576, 20971520),
      validatorMessage: "Input an integer number between 1048576 and 20971520"
    },
    "loggingSettings.activityLogsAutoUploadIntervalMillis": {
      label: "Auto Upload Activity Logs Interval (ms)",
      setter: integerSetter,
      editor: "text",
      isEditable: function(settingsValues) {
        return settingsValues("loggingSettings.activityLogsAutoUploadEnabled");
      },
      validator: createIntegerTypeValidator(60000, 86400000),
      validatorMessage: "Input an integer number between 60000 and 86400000"
    }
  }
}