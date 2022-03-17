function getConfigCron() {
  return {
    "cronSettings.monitorDataUploadIntervalSeconds": {
      label: "Monitor Data Upload Interval Seconds",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(5, 2147483647),
      validatorMessage: "Input an integer number between 5 and 2147483647"
    },
    "cronSettings.playerFilesDownloadIntervalSeconds": {
      label: "Player Files Download Interval Seconds",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(5, 2147483647),
      validatorMessage: "Input an integer number between 5 and 2147483647"
    },
    "cronSettings.playlistFeedsUpdateIntervalSeconds": {
      label: "Playlist Feeds Update Interval Seconds",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(5, 2147483647),
      validatorMessage: "Input an integer number between 5 and 2147483647"
    },
    "cronSettings.playlistUpdateIntervalSeconds": {
      label: "Playlist Update Interval Seconds",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(5, 2147483647),
      validatorMessage: "Input an integer number between 5 and 2147483647"
    }
  }
}