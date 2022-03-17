function getConfigContent() {
  return {
    "contentSettings.networkNotAvailableMessage":{
      label: "Network Not Available Message",
      editor: "text"
    },
    "contentSettings.storedTracksCountLimit":{
      label: "Stored Trakcs Count Limit",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(0, 2147483647),
      validatorMessage: "Input an integer number between 0 and 2147483647"
    },
    "contentSettings.purgeSettings.statisticsPurgeUntouchedDays":{
      label: "Purge statistics untouched # days",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(0, 90),
      validatorMessage: "Input an integer number between 0 and 90"
    },
    "contentSettings.purgeSettings.customDirectories":{
      label: "Custom Directories",
      editor: "text"
    },
    "contentSettings.purgeSettings.mediaFilesPurgeUntouchedDays":{
      label: "Purge media files untouched # days",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(0, 2147483647),
      validatorMessage: "Input an integer number between 0 and 2147483647"
    },
    "contentSettings.purgeSettings.logsPurgeUntouchedDays":{
      label: "Purge logs untouched # days",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(0, 2147483647),
      validatorMessage: "Input an integer number between 0 and 2147483647"
    },
    "contentSettings.purgeSettings.musicTracksPurgeUntouchedDays":{
      label: "Music tracks purge untouched # days",
      setter: integerSetter,
      editor: "text",
      validator: createIntegerTypeValidator(0, 2147483647),
      validatorMessage: "Input an integer number between 0 and 2147483647"
    }
  }
}